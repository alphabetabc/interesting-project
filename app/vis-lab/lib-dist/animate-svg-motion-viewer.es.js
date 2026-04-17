var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), s = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, c = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, l = (n, r, a) => (a = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n));
function u(e) {
	"@babel/helpers - typeof";
	return u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, u(e);
}
function d(e, t) {
	if (u(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (u(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function f(e) {
	var t = d(e, "string");
	return u(t) == "symbol" ? t : t + "";
}
function p(e, t, n) {
	return (t = f(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function m(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function h(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? m(Object(n), !0).forEach(function(t) {
			p(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function g(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function _(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, f(r.key), r);
	}
}
function v(e, t, n) {
	return t && _(e.prototype, t), n && _(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function y(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function b(e) {
	if (Array.isArray(e)) return y(e);
}
function x(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function S(e, t) {
	if (e) {
		if (typeof e == "string") return y(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0;
	}
}
function C() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function w(e) {
	return b(e) || x(e) || S(e) || C();
}
function T(e) {
	return T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, T(e);
}
function E() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (E = function() {
		return !!e;
	})();
}
function D(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function O(e, t) {
	if (t && (u(t) == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return D(e);
}
function k(e, t, n) {
	return t = T(t), O(e, E() ? Reflect.construct(t, n || [], T(e).constructor) : t.apply(e, n));
}
function A(e, t) {
	return A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, A(e, t);
}
function j(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && A(e, t);
}
function ee(e) {
	if (Array.isArray(e)) return e;
}
function M(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function N() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function P(e, t) {
	return ee(e) || M(e, t) || S(e, t) || N();
}
var te = l(o(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = "~";
	function i() {}
	Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1));
	function a(e, t, n) {
		this.fn = e, this.context = t, this.once = n || !1;
	}
	function o(e, t, n, i, o) {
		if (typeof n != "function") throw TypeError("The listener must be a function");
		var s = new a(n, i || e, o), c = r ? r + t : t;
		return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e;
	}
	function s(e, t) {
		--e._eventsCount === 0 ? e._events = new i() : delete e._events[t];
	}
	function c() {
		this._events = new i(), this._eventsCount = 0;
	}
	c.prototype.eventNames = function() {
		var e = [], t, i;
		if (this._eventsCount === 0) return e;
		for (i in t = this._events) n.call(t, i) && e.push(r ? i.slice(1) : i);
		return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
	}, c.prototype.listeners = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		if (!n) return [];
		if (n.fn) return [n.fn];
		for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
		return o;
	}, c.prototype.listenerCount = function(e) {
		var t = r ? r + e : e, n = this._events[t];
		return n ? n.fn ? 1 : n.length : 0;
	}, c.prototype.emit = function(e, t, n, i, a, o) {
		var s = r ? r + e : e;
		if (!this._events[s]) return !1;
		var c = this._events[s], l = arguments.length, u, d;
		if (c.fn) {
			switch (c.once && this.removeListener(e, c.fn, void 0, !0), l) {
				case 1: return c.fn.call(c.context), !0;
				case 2: return c.fn.call(c.context, t), !0;
				case 3: return c.fn.call(c.context, t, n), !0;
				case 4: return c.fn.call(c.context, t, n, i), !0;
				case 5: return c.fn.call(c.context, t, n, i, a), !0;
				case 6: return c.fn.call(c.context, t, n, i, a, o), !0;
			}
			for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
			c.fn.apply(c.context, u);
		} else {
			var f = c.length, p;
			for (d = 0; d < f; d++) switch (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l) {
				case 1:
					c[d].fn.call(c[d].context);
					break;
				case 2:
					c[d].fn.call(c[d].context, t);
					break;
				case 3:
					c[d].fn.call(c[d].context, t, n);
					break;
				case 4:
					c[d].fn.call(c[d].context, t, n, i);
					break;
				default:
					if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
					c[d].fn.apply(c[d].context, u);
			}
		}
		return !0;
	}, c.prototype.on = function(e, t, n) {
		return o(this, e, t, n, !1);
	}, c.prototype.once = function(e, t, n) {
		return o(this, e, t, n, !0);
	}, c.prototype.removeListener = function(e, t, n, i) {
		var a = r ? r + e : e;
		if (!this._events[a]) return this;
		if (!t) return s(this, a), this;
		var o = this._events[a];
		if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
		else {
			for (var c = 0, l = [], u = o.length; c < u; c++) (o[c].fn !== t || i && !o[c].once || n && o[c].context !== n) && l.push(o[c]);
			l.length ? this._events[a] = l.length === 1 ? l[0] : l : s(this, a);
		}
		return this;
	}, c.prototype.removeAllListeners = function(e) {
		var t;
		return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new i(), this._eventsCount = 0), this;
	}, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t !== void 0 && (t.exports = c);
}))(), 1).default, F = typeof Float32Array < "u" ? Float32Array : Array;
Math.PI / 180, 180 / Math.PI;
function ne() {
	var e = new F(9);
	return F != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[0] = 1, e[4] = 1, e[8] = 1, e;
}
function re(e, t) {
	return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e;
}
function ie(e, t, n, r, i, a, o, s, c) {
	var l = new F(9);
	return l[0] = e, l[1] = t, l[2] = n, l[3] = r, l[4] = i, l[5] = a, l[6] = o, l[7] = s, l[8] = c, l;
}
var ae = s({
	add: () => Je,
	adjoint: () => fe,
	clone: () => oe,
	copy: () => se,
	create: () => I,
	decompose: () => Me,
	determinant: () => pe,
	equals: () => $e,
	exactEquals: () => Qe,
	frob: () => qe,
	fromQuat: () => Fe,
	fromQuat2: () => Oe,
	fromRotation: () => Ce,
	fromRotationTranslation: () => De,
	fromRotationTranslationScale: () => Ne,
	fromRotationTranslationScaleOrigin: () => Pe,
	fromScaling: () => Se,
	fromTranslation: () => xe,
	fromValues: () => ce,
	fromXRotation: () => we,
	fromYRotation: () => Te,
	fromZRotation: () => Ee,
	frustum: () => Ie,
	getRotation: () => je,
	getScaling: () => Ae,
	getTranslation: () => ke,
	identity: () => L,
	invert: () => de,
	lookAt: () => We,
	mul: () => et,
	multiply: () => me,
	multiplyScalar: () => Xe,
	multiplyScalarAndAdd: () => Ze,
	ortho: () => He,
	orthoNO: () => Ve,
	orthoZO: () => Ue,
	perspective: () => Re,
	perspectiveFromFieldOfView: () => Be,
	perspectiveNO: () => Le,
	perspectiveZO: () => ze,
	rotate: () => _e,
	rotateX: () => ve,
	rotateY: () => ye,
	rotateZ: () => be,
	scale: () => ge,
	set: () => le,
	str: () => Ke,
	sub: () => tt,
	subtract: () => Ye,
	targetTo: () => Ge,
	translate: () => he,
	transpose: () => ue
});
function I() {
	var e = new F(16);
	return F != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
}
function oe(e) {
	var t = new F(16);
	return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
}
function se(e, t) {
	return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function ce(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
	var g = new F(16);
	return g[0] = e, g[1] = t, g[2] = n, g[3] = r, g[4] = i, g[5] = a, g[6] = o, g[7] = s, g[8] = c, g[9] = l, g[10] = u, g[11] = d, g[12] = f, g[13] = p, g[14] = m, g[15] = h, g;
}
function le(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
	return e[0] = t, e[1] = n, e[2] = r, e[3] = i, e[4] = a, e[5] = o, e[6] = s, e[7] = c, e[8] = l, e[9] = u, e[10] = d, e[11] = f, e[12] = p, e[13] = m, e[14] = h, e[15] = g, e;
}
function L(e) {
	return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function ue(e, t) {
	if (e === t) {
		var n = t[1], r = t[2], i = t[3], a = t[6], o = t[7], s = t[11];
		e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = r, e[9] = a, e[11] = t[14], e[12] = i, e[13] = o, e[14] = s;
	} else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
	return e;
}
function de(e, t) {
	var n = t[0], r = t[1], i = t[2], a = t[3], o = t[4], s = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], p = t[11], m = t[12], h = t[13], g = t[14], _ = t[15], v = n * s - r * o, y = n * c - i * o, b = n * l - a * o, x = r * c - i * s, S = r * l - a * s, C = i * l - a * c, w = u * h - d * m, T = u * g - f * m, E = u * _ - p * m, D = d * g - f * h, O = d * _ - p * h, k = f * _ - p * g, A = v * k - y * O + b * D + x * E - S * T + C * w;
	return A ? (A = 1 / A, e[0] = (s * k - c * O + l * D) * A, e[1] = (i * O - r * k - a * D) * A, e[2] = (h * C - g * S + _ * x) * A, e[3] = (f * S - d * C - p * x) * A, e[4] = (c * E - o * k - l * T) * A, e[5] = (n * k - i * E + a * T) * A, e[6] = (g * b - m * C - _ * y) * A, e[7] = (u * C - f * b + p * y) * A, e[8] = (o * O - s * E + l * w) * A, e[9] = (r * E - n * O - a * w) * A, e[10] = (m * S - h * b + _ * v) * A, e[11] = (d * b - u * S - p * v) * A, e[12] = (s * T - o * D - c * w) * A, e[13] = (n * D - r * T + i * w) * A, e[14] = (h * y - m * x - g * v) * A, e[15] = (u * x - d * y + f * v) * A, e) : null;
}
function fe(e, t) {
	var n = t[0], r = t[1], i = t[2], a = t[3], o = t[4], s = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], p = t[11], m = t[12], h = t[13], g = t[14], _ = t[15], v = n * s - r * o, y = n * c - i * o, b = n * l - a * o, x = r * c - i * s, S = r * l - a * s, C = i * l - a * c, w = u * h - d * m, T = u * g - f * m, E = u * _ - p * m, D = d * g - f * h, O = d * _ - p * h, k = f * _ - p * g;
	return e[0] = s * k - c * O + l * D, e[1] = i * O - r * k - a * D, e[2] = h * C - g * S + _ * x, e[3] = f * S - d * C - p * x, e[4] = c * E - o * k - l * T, e[5] = n * k - i * E + a * T, e[6] = g * b - m * C - _ * y, e[7] = u * C - f * b + p * y, e[8] = o * O - s * E + l * w, e[9] = r * E - n * O - a * w, e[10] = m * S - h * b + _ * v, e[11] = d * b - u * S - p * v, e[12] = s * T - o * D - c * w, e[13] = n * D - r * T + i * w, e[14] = h * y - m * x - g * v, e[15] = u * x - d * y + f * v, e;
}
function pe(e) {
	var t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = n * s - r * o, b = l * m - u * p, x = l * h - d * p, S = u * h - d * m, C = t * S - n * x + r * b, w = a * S - o * x + s * b, T = l * y - u * v + d * _, E = p * y - m * v + h * _;
	return c * C - i * w + g * T - f * E;
}
function me(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = t[3], s = t[4], c = t[5], l = t[6], u = t[7], d = t[8], f = t[9], p = t[10], m = t[11], h = t[12], g = t[13], _ = t[14], v = t[15], y = n[0], b = n[1], x = n[2], S = n[3];
	return e[0] = y * r + b * s + x * d + S * h, e[1] = y * i + b * c + x * f + S * g, e[2] = y * a + b * l + x * p + S * _, e[3] = y * o + b * u + x * m + S * v, y = n[4], b = n[5], x = n[6], S = n[7], e[4] = y * r + b * s + x * d + S * h, e[5] = y * i + b * c + x * f + S * g, e[6] = y * a + b * l + x * p + S * _, e[7] = y * o + b * u + x * m + S * v, y = n[8], b = n[9], x = n[10], S = n[11], e[8] = y * r + b * s + x * d + S * h, e[9] = y * i + b * c + x * f + S * g, e[10] = y * a + b * l + x * p + S * _, e[11] = y * o + b * u + x * m + S * v, y = n[12], b = n[13], x = n[14], S = n[15], e[12] = y * r + b * s + x * d + S * h, e[13] = y * i + b * c + x * f + S * g, e[14] = y * a + b * l + x * p + S * _, e[15] = y * o + b * u + x * m + S * v, e;
}
function he(e, t, n) {
	var r = n[0], i = n[1], a = n[2], o, s, c, l, u, d, f, p, m, h, g, _;
	return t === e ? (e[12] = t[0] * r + t[4] * i + t[8] * a + t[12], e[13] = t[1] * r + t[5] * i + t[9] * a + t[13], e[14] = t[2] * r + t[6] * i + t[10] * a + t[14], e[15] = t[3] * r + t[7] * i + t[11] * a + t[15]) : (o = t[0], s = t[1], c = t[2], l = t[3], u = t[4], d = t[5], f = t[6], p = t[7], m = t[8], h = t[9], g = t[10], _ = t[11], e[0] = o, e[1] = s, e[2] = c, e[3] = l, e[4] = u, e[5] = d, e[6] = f, e[7] = p, e[8] = m, e[9] = h, e[10] = g, e[11] = _, e[12] = o * r + u * i + m * a + t[12], e[13] = s * r + d * i + h * a + t[13], e[14] = c * r + f * i + g * a + t[14], e[15] = l * r + p * i + _ * a + t[15]), e;
}
function ge(e, t, n) {
	var r = n[0], i = n[1], a = n[2];
	return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * i, e[5] = t[5] * i, e[6] = t[6] * i, e[7] = t[7] * i, e[8] = t[8] * a, e[9] = t[9] * a, e[10] = t[10] * a, e[11] = t[11] * a, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function _e(e, t, n, r) {
	var i = r[0], a = r[1], o = r[2], s = Math.sqrt(i * i + a * a + o * o), c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j;
	return s < 1e-6 ? null : (s = 1 / s, i *= s, a *= s, o *= s, c = Math.sin(n), l = Math.cos(n), u = 1 - l, d = t[0], f = t[1], p = t[2], m = t[3], h = t[4], g = t[5], _ = t[6], v = t[7], y = t[8], b = t[9], x = t[10], S = t[11], C = i * i * u + l, w = a * i * u + o * c, T = o * i * u - a * c, E = i * a * u - o * c, D = a * a * u + l, O = o * a * u + i * c, k = i * o * u + a * c, A = a * o * u - i * c, j = o * o * u + l, e[0] = d * C + h * w + y * T, e[1] = f * C + g * w + b * T, e[2] = p * C + _ * w + x * T, e[3] = m * C + v * w + S * T, e[4] = d * E + h * D + y * O, e[5] = f * E + g * D + b * O, e[6] = p * E + _ * D + x * O, e[7] = m * E + v * D + S * O, e[8] = d * k + h * A + y * j, e[9] = f * k + g * A + b * j, e[10] = p * k + _ * A + x * j, e[11] = m * k + v * A + S * j, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
}
function ve(e, t, n) {
	var r = Math.sin(n), i = Math.cos(n), a = t[4], o = t[5], s = t[6], c = t[7], l = t[8], u = t[9], d = t[10], f = t[11];
	return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = a * i + l * r, e[5] = o * i + u * r, e[6] = s * i + d * r, e[7] = c * i + f * r, e[8] = l * i - a * r, e[9] = u * i - o * r, e[10] = d * i - s * r, e[11] = f * i - c * r, e;
}
function ye(e, t, n) {
	var r = Math.sin(n), i = Math.cos(n), a = t[0], o = t[1], s = t[2], c = t[3], l = t[8], u = t[9], d = t[10], f = t[11];
	return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * i - l * r, e[1] = o * i - u * r, e[2] = s * i - d * r, e[3] = c * i - f * r, e[8] = a * r + l * i, e[9] = o * r + u * i, e[10] = s * r + d * i, e[11] = c * r + f * i, e;
}
function be(e, t, n) {
	var r = Math.sin(n), i = Math.cos(n), a = t[0], o = t[1], s = t[2], c = t[3], l = t[4], u = t[5], d = t[6], f = t[7];
	return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * i + l * r, e[1] = o * i + u * r, e[2] = s * i + d * r, e[3] = c * i + f * r, e[4] = l * i - a * r, e[5] = u * i - o * r, e[6] = d * i - s * r, e[7] = f * i - c * r, e;
}
function xe(e, t) {
	return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e;
}
function Se(e, t) {
	return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Ce(e, t, n) {
	var r = n[0], i = n[1], a = n[2], o = Math.sqrt(r * r + i * i + a * a), s, c, l;
	return o < 1e-6 ? null : (o = 1 / o, r *= o, i *= o, a *= o, s = Math.sin(t), c = Math.cos(t), l = 1 - c, e[0] = r * r * l + c, e[1] = i * r * l + a * s, e[2] = a * r * l - i * s, e[3] = 0, e[4] = r * i * l - a * s, e[5] = i * i * l + c, e[6] = a * i * l + r * s, e[7] = 0, e[8] = r * a * l + i * s, e[9] = i * a * l - r * s, e[10] = a * a * l + c, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e);
}
function we(e, t) {
	var n = Math.sin(t), r = Math.cos(t);
	return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = n, e[7] = 0, e[8] = 0, e[9] = -n, e[10] = r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Te(e, t) {
	var n = Math.sin(t), r = Math.cos(t);
	return e[0] = r, e[1] = 0, e[2] = -n, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = n, e[9] = 0, e[10] = r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Ee(e, t) {
	var n = Math.sin(t), r = Math.cos(t);
	return e[0] = r, e[1] = n, e[2] = 0, e[3] = 0, e[4] = -n, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function De(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = t[3], s = r + r, c = i + i, l = a + a, u = r * s, d = r * c, f = r * l, p = i * c, m = i * l, h = a * l, g = o * s, _ = o * c, v = o * l;
	return e[0] = 1 - (p + h), e[1] = d + v, e[2] = f - _, e[3] = 0, e[4] = d - v, e[5] = 1 - (u + h), e[6] = m + g, e[7] = 0, e[8] = f + _, e[9] = m - g, e[10] = 1 - (u + p), e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e;
}
function Oe(e, t) {
	var n = new F(3), r = -t[0], i = -t[1], a = -t[2], o = t[3], s = t[4], c = t[5], l = t[6], u = t[7], d = r * r + i * i + a * a + o * o;
	return d > 0 ? (n[0] = (s * o + u * r + c * a - l * i) * 2 / d, n[1] = (c * o + u * i + l * r - s * a) * 2 / d, n[2] = (l * o + u * a + s * i - c * r) * 2 / d) : (n[0] = (s * o + u * r + c * a - l * i) * 2, n[1] = (c * o + u * i + l * r - s * a) * 2, n[2] = (l * o + u * a + s * i - c * r) * 2), De(e, t, n), e;
}
function ke(e, t) {
	return e[0] = t[12], e[1] = t[13], e[2] = t[14], e;
}
function Ae(e, t) {
	var n = t[0], r = t[1], i = t[2], a = t[4], o = t[5], s = t[6], c = t[8], l = t[9], u = t[10];
	return e[0] = Math.sqrt(n * n + r * r + i * i), e[1] = Math.sqrt(a * a + o * o + s * s), e[2] = Math.sqrt(c * c + l * l + u * u), e;
}
function je(e, t) {
	var n = new F(3);
	Ae(n, t);
	var r = 1 / n[0], i = 1 / n[1], a = 1 / n[2], o = t[0] * r, s = t[1] * i, c = t[2] * a, l = t[4] * r, u = t[5] * i, d = t[6] * a, f = t[8] * r, p = t[9] * i, m = t[10] * a, h = o + u + m, g = 0;
	return h > 0 ? (g = Math.sqrt(h + 1) * 2, e[3] = .25 * g, e[0] = (d - p) / g, e[1] = (f - c) / g, e[2] = (s - l) / g) : o > u && o > m ? (g = Math.sqrt(1 + o - u - m) * 2, e[3] = (d - p) / g, e[0] = .25 * g, e[1] = (s + l) / g, e[2] = (f + c) / g) : u > m ? (g = Math.sqrt(1 + u - o - m) * 2, e[3] = (f - c) / g, e[0] = (s + l) / g, e[1] = .25 * g, e[2] = (d + p) / g) : (g = Math.sqrt(1 + m - o - u) * 2, e[3] = (s - l) / g, e[0] = (f + c) / g, e[1] = (d + p) / g, e[2] = .25 * g), e;
}
function Me(e, t, n, r) {
	t[0] = r[12], t[1] = r[13], t[2] = r[14];
	var i = r[0], a = r[1], o = r[2], s = r[4], c = r[5], l = r[6], u = r[8], d = r[9], f = r[10];
	n[0] = Math.sqrt(i * i + a * a + o * o), n[1] = Math.sqrt(s * s + c * c + l * l), n[2] = Math.sqrt(u * u + d * d + f * f);
	var p = 1 / n[0], m = 1 / n[1], h = 1 / n[2], g = i * p, _ = a * m, v = o * h, y = s * p, b = c * m, x = l * h, S = u * p, C = d * m, w = f * h, T = g + b + w, E = 0;
	return T > 0 ? (E = Math.sqrt(T + 1) * 2, e[3] = .25 * E, e[0] = (x - C) / E, e[1] = (S - v) / E, e[2] = (_ - y) / E) : g > b && g > w ? (E = Math.sqrt(1 + g - b - w) * 2, e[3] = (x - C) / E, e[0] = .25 * E, e[1] = (_ + y) / E, e[2] = (S + v) / E) : b > w ? (E = Math.sqrt(1 + b - g - w) * 2, e[3] = (S - v) / E, e[0] = (_ + y) / E, e[1] = .25 * E, e[2] = (x + C) / E) : (E = Math.sqrt(1 + w - g - b) * 2, e[3] = (_ - y) / E, e[0] = (S + v) / E, e[1] = (x + C) / E, e[2] = .25 * E), e;
}
function Ne(e, t, n, r) {
	var i = t[0], a = t[1], o = t[2], s = t[3], c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = r[0], x = r[1], S = r[2];
	return e[0] = (1 - (m + g)) * b, e[1] = (f + y) * b, e[2] = (p - v) * b, e[3] = 0, e[4] = (f - y) * x, e[5] = (1 - (d + g)) * x, e[6] = (h + _) * x, e[7] = 0, e[8] = (p + v) * S, e[9] = (h - _) * S, e[10] = (1 - (d + m)) * S, e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e;
}
function Pe(e, t, n, r, i) {
	var a = t[0], o = t[1], s = t[2], c = t[3], l = a + a, u = o + o, d = s + s, f = a * l, p = a * u, m = a * d, h = o * u, g = o * d, _ = s * d, v = c * l, y = c * u, b = c * d, x = r[0], S = r[1], C = r[2], w = i[0], T = i[1], E = i[2], D = (1 - (h + _)) * x, O = (p + b) * x, k = (m - y) * x, A = (p - b) * S, j = (1 - (f + _)) * S, ee = (g + v) * S, M = (m + y) * C, N = (g - v) * C, P = (1 - (f + h)) * C;
	return e[0] = D, e[1] = O, e[2] = k, e[3] = 0, e[4] = A, e[5] = j, e[6] = ee, e[7] = 0, e[8] = M, e[9] = N, e[10] = P, e[11] = 0, e[12] = n[0] + w - (D * w + A * T + M * E), e[13] = n[1] + T - (O * w + j * T + N * E), e[14] = n[2] + E - (k * w + ee * T + P * E), e[15] = 1, e;
}
function Fe(e, t) {
	var n = t[0], r = t[1], i = t[2], a = t[3], o = n + n, s = r + r, c = i + i, l = n * o, u = r * o, d = r * s, f = i * o, p = i * s, m = i * c, h = a * o, g = a * s, _ = a * c;
	return e[0] = 1 - d - m, e[1] = u + _, e[2] = f - g, e[3] = 0, e[4] = u - _, e[5] = 1 - l - m, e[6] = p + h, e[7] = 0, e[8] = f + g, e[9] = p - h, e[10] = 1 - l - d, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Ie(e, t, n, r, i, a, o) {
	var s = 1 / (n - t), c = 1 / (i - r), l = 1 / (a - o);
	return e[0] = a * 2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a * 2 * c, e[6] = 0, e[7] = 0, e[8] = (n + t) * s, e[9] = (i + r) * c, e[10] = (o + a) * l, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = o * a * 2 * l, e[15] = 0, e;
}
function Le(e, t, n, r, i) {
	var a = 1 / Math.tan(t / 2);
	if (e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== Infinity) {
		var o = 1 / (r - i);
		e[10] = (i + r) * o, e[14] = 2 * i * r * o;
	} else e[10] = -1, e[14] = -2 * r;
	return e;
}
var Re = Le;
function ze(e, t, n, r, i) {
	var a = 1 / Math.tan(t / 2);
	if (e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== Infinity) {
		var o = 1 / (r - i);
		e[10] = i * o, e[14] = i * r * o;
	} else e[10] = -1, e[14] = -r;
	return e;
}
function Be(e, t, n, r) {
	var i = Math.tan(t.upDegrees * Math.PI / 180), a = Math.tan(t.downDegrees * Math.PI / 180), o = Math.tan(t.leftDegrees * Math.PI / 180), s = Math.tan(t.rightDegrees * Math.PI / 180), c = 2 / (o + s), l = 2 / (i + a);
	return e[0] = c, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = l, e[6] = 0, e[7] = 0, e[8] = -((o - s) * c * .5), e[9] = (i - a) * l * .5, e[10] = r / (n - r), e[11] = -1, e[12] = 0, e[13] = 0, e[14] = r * n / (n - r), e[15] = 0, e;
}
function Ve(e, t, n, r, i, a, o) {
	var s = 1 / (t - n), c = 1 / (r - i), l = 1 / (a - o);
	return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * l, e[11] = 0, e[12] = (t + n) * s, e[13] = (i + r) * c, e[14] = (o + a) * l, e[15] = 1, e;
}
var He = Ve;
function Ue(e, t, n, r, i, a, o) {
	var s = 1 / (t - n), c = 1 / (r - i), l = 1 / (a - o);
	return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = l, e[11] = 0, e[12] = (t + n) * s, e[13] = (i + r) * c, e[14] = a * l, e[15] = 1, e;
}
function We(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p, m = t[0], h = t[1], g = t[2], _ = r[0], v = r[1], y = r[2], b = n[0], x = n[1], S = n[2];
	return Math.abs(m - b) < 1e-6 && Math.abs(h - x) < 1e-6 && Math.abs(g - S) < 1e-6 ? L(e) : (u = m - b, d = h - x, f = g - S, p = 1 / Math.sqrt(u * u + d * d + f * f), u *= p, d *= p, f *= p, i = v * f - y * d, a = y * u - _ * f, o = _ * d - v * u, p = Math.sqrt(i * i + a * a + o * o), p ? (p = 1 / p, i *= p, a *= p, o *= p) : (i = 0, a = 0, o = 0), s = d * o - f * a, c = f * i - u * o, l = u * a - d * i, p = Math.sqrt(s * s + c * c + l * l), p ? (p = 1 / p, s *= p, c *= p, l *= p) : (s = 0, c = 0, l = 0), e[0] = i, e[1] = s, e[2] = u, e[3] = 0, e[4] = a, e[5] = c, e[6] = d, e[7] = 0, e[8] = o, e[9] = l, e[10] = f, e[11] = 0, e[12] = -(i * m + a * h + o * g), e[13] = -(s * m + c * h + l * g), e[14] = -(u * m + d * h + f * g), e[15] = 1, e);
}
function Ge(e, t, n, r) {
	var i = t[0], a = t[1], o = t[2], s = r[0], c = r[1], l = r[2], u = i - n[0], d = a - n[1], f = o - n[2], p = u * u + d * d + f * f;
	p > 0 && (p = 1 / Math.sqrt(p), u *= p, d *= p, f *= p);
	var m = c * f - l * d, h = l * u - s * f, g = s * d - c * u;
	return p = m * m + h * h + g * g, p > 0 && (p = 1 / Math.sqrt(p), m *= p, h *= p, g *= p), e[0] = m, e[1] = h, e[2] = g, e[3] = 0, e[4] = d * g - f * h, e[5] = f * m - u * g, e[6] = u * h - d * m, e[7] = 0, e[8] = u, e[9] = d, e[10] = f, e[11] = 0, e[12] = i, e[13] = a, e[14] = o, e[15] = 1, e;
}
function Ke(e) {
	return "mat4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + ")";
}
function qe(e) {
	return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3] + e[4] * e[4] + e[5] * e[5] + e[6] * e[6] + e[7] * e[7] + e[8] * e[8] + e[9] * e[9] + e[10] * e[10] + e[11] * e[11] + e[12] * e[12] + e[13] * e[13] + e[14] * e[14] + e[15] * e[15]);
}
function Je(e, t, n) {
	return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e[8] = t[8] + n[8], e[9] = t[9] + n[9], e[10] = t[10] + n[10], e[11] = t[11] + n[11], e[12] = t[12] + n[12], e[13] = t[13] + n[13], e[14] = t[14] + n[14], e[15] = t[15] + n[15], e;
}
function Ye(e, t, n) {
	return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e[9] = t[9] - n[9], e[10] = t[10] - n[10], e[11] = t[11] - n[11], e[12] = t[12] - n[12], e[13] = t[13] - n[13], e[14] = t[14] - n[14], e[15] = t[15] - n[15], e;
}
function Xe(e, t, n) {
	return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * n, e[9] = t[9] * n, e[10] = t[10] * n, e[11] = t[11] * n, e[12] = t[12] * n, e[13] = t[13] * n, e[14] = t[14] * n, e[15] = t[15] * n, e;
}
function Ze(e, t, n, r) {
	return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e[4] = t[4] + n[4] * r, e[5] = t[5] + n[5] * r, e[6] = t[6] + n[6] * r, e[7] = t[7] + n[7] * r, e[8] = t[8] + n[8] * r, e[9] = t[9] + n[9] * r, e[10] = t[10] + n[10] * r, e[11] = t[11] + n[11] * r, e[12] = t[12] + n[12] * r, e[13] = t[13] + n[13] * r, e[14] = t[14] + n[14] * r, e[15] = t[15] + n[15] * r, e;
}
function Qe(e, t) {
	return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8] && e[9] === t[9] && e[10] === t[10] && e[11] === t[11] && e[12] === t[12] && e[13] === t[13] && e[14] === t[14] && e[15] === t[15];
}
function $e(e, t) {
	var n = e[0], r = e[1], i = e[2], a = e[3], o = e[4], s = e[5], c = e[6], l = e[7], u = e[8], d = e[9], f = e[10], p = e[11], m = e[12], h = e[13], g = e[14], _ = e[15], v = t[0], y = t[1], b = t[2], x = t[3], S = t[4], C = t[5], w = t[6], T = t[7], E = t[8], D = t[9], O = t[10], k = t[11], A = t[12], j = t[13], ee = t[14], M = t[15];
	return Math.abs(n - v) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(v)) && Math.abs(r - y) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(y)) && Math.abs(i - b) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(a - x) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(x)) && Math.abs(o - S) <= 1e-6 * Math.max(1, Math.abs(o), Math.abs(S)) && Math.abs(s - C) <= 1e-6 * Math.max(1, Math.abs(s), Math.abs(C)) && Math.abs(c - w) <= 1e-6 * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(l - T) <= 1e-6 * Math.max(1, Math.abs(l), Math.abs(T)) && Math.abs(u - E) <= 1e-6 * Math.max(1, Math.abs(u), Math.abs(E)) && Math.abs(d - D) <= 1e-6 * Math.max(1, Math.abs(d), Math.abs(D)) && Math.abs(f - O) <= 1e-6 * Math.max(1, Math.abs(f), Math.abs(O)) && Math.abs(p - k) <= 1e-6 * Math.max(1, Math.abs(p), Math.abs(k)) && Math.abs(m - A) <= 1e-6 * Math.max(1, Math.abs(m), Math.abs(A)) && Math.abs(h - j) <= 1e-6 * Math.max(1, Math.abs(h), Math.abs(j)) && Math.abs(g - ee) <= 1e-6 * Math.max(1, Math.abs(g), Math.abs(ee)) && Math.abs(_ - M) <= 1e-6 * Math.max(1, Math.abs(_), Math.abs(M));
}
var et = me, tt = Ye;
function R() {
	var e = new F(3);
	return F != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function nt(e) {
	var t = new F(3);
	return t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
}
function rt(e) {
	var t = e[0], n = e[1], r = e[2];
	return Math.sqrt(t * t + n * n + r * r);
}
function it(e, t, n) {
	var r = new F(3);
	return r[0] = e, r[1] = t, r[2] = n, r;
}
function at(e, t) {
	return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
}
function ot(e, t, n, r) {
	return e[0] = t, e[1] = n, e[2] = r, e;
}
function st(e, t, n) {
	return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e;
}
function ct(e, t, n) {
	return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e;
}
function lt(e, t, n) {
	return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e;
}
function ut(e, t, n) {
	return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e;
}
function dt(e, t, n) {
	return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e;
}
function ft(e, t, n) {
	return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e;
}
function pt(e, t) {
	var n = t[0] - e[0], r = t[1] - e[1], i = t[2] - e[2];
	return Math.sqrt(n * n + r * r + i * i);
}
function mt(e, t) {
	var n = t[0], r = t[1], i = t[2], a = n * n + r * r + i * i;
	return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a, e;
}
function ht(e, t) {
	return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function gt(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = n[0], s = n[1], c = n[2];
	return e[0] = i * c - a * s, e[1] = a * o - r * c, e[2] = r * s - i * o, e;
}
function _t(e, t, n, r) {
	var i = t[0], a = t[1], o = t[2];
	return e[0] = i + r * (n[0] - i), e[1] = a + r * (n[1] - a), e[2] = o + r * (n[2] - o), e;
}
function vt(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = n[3] * r + n[7] * i + n[11] * a + n[15];
	return o ||= 1, e[0] = (n[0] * r + n[4] * i + n[8] * a + n[12]) / o, e[1] = (n[1] * r + n[5] * i + n[9] * a + n[13]) / o, e[2] = (n[2] * r + n[6] * i + n[10] * a + n[14]) / o, e;
}
function yt(e, t, n) {
	var r = t[0], i = t[1], a = t[2];
	return e[0] = r * n[0] + i * n[3] + a * n[6], e[1] = r * n[1] + i * n[4] + a * n[7], e[2] = r * n[2] + i * n[5] + a * n[8], e;
}
function bt(e, t, n) {
	var r = n[0], i = n[1], a = n[2], o = n[3], s = t[0], c = t[1], l = t[2], u = i * l - a * c, d = a * s - r * l, f = r * c - i * s;
	return u += u, d += d, f += f, e[0] = s + o * u + i * f - a * d, e[1] = c + o * d + a * u - r * f, e[2] = l + o * f + r * d - i * u, e;
}
function xt(e, t) {
	var n = e[0], r = e[1], i = e[2], a = t[0], o = t[1], s = t[2];
	return Math.abs(n - a) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - o) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(i - s) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(s));
}
var St = ct, Ct = pt, wt = rt;
(function() {
	var e = R();
	return function(t, n, r, i, a, o) {
		var s, c;
		for (n ||= 3, r ||= 0, c = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], a(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2];
		return t;
	};
})();
function Tt() {
	var e = new F(4);
	return F != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e;
}
function Et(e, t, n, r) {
	var i = new F(4);
	return i[0] = e, i[1] = t, i[2] = n, i[3] = r, i;
}
function Dt(e, t) {
	return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
}
function Ot(e, t, n, r, i) {
	return e[0] = t, e[1] = n, e[2] = r, e[3] = i, e;
}
function kt(e, t) {
	var n = t[0], r = t[1], i = t[2], a = t[3], o = n * n + r * r + i * i + a * a;
	return o > 0 && (o = 1 / Math.sqrt(o)), e[0] = n * o, e[1] = r * o, e[2] = i * o, e[3] = a * o, e;
}
function At(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = t[3];
	return e[0] = n[0] * r + n[4] * i + n[8] * a + n[12] * o, e[1] = n[1] * r + n[5] * i + n[9] * a + n[13] * o, e[2] = n[2] * r + n[6] * i + n[10] * a + n[14] * o, e[3] = n[3] * r + n[7] * i + n[11] * a + n[15] * o, e;
}
(function() {
	var e = Tt();
	return function(t, n, r, i, a, o) {
		var s, c;
		for (n ||= 4, r ||= 0, c = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], e[2] = t[s + 2], e[3] = t[s + 3], a(e, e, o), t[s] = e[0], t[s + 1] = e[1], t[s + 2] = e[2], t[s + 3] = e[3];
		return t;
	};
})();
function jt() {
	var e = new F(4);
	return F != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e[3] = 1, e;
}
function Mt(e, t, n) {
	n *= .5;
	var r = Math.sin(n);
	return e[0] = r * t[0], e[1] = r * t[1], e[2] = r * t[2], e[3] = Math.cos(n), e;
}
function Nt(e, t, n) {
	var r = t[0], i = t[1], a = t[2], o = t[3], s = n[0], c = n[1], l = n[2], u = n[3];
	return e[0] = r * u + o * s + i * l - a * c, e[1] = i * u + o * c + a * s - r * l, e[2] = a * u + o * l + r * c - i * s, e[3] = o * u - r * s - i * c - a * l, e;
}
function Pt(e, t, n, r) {
	var i = t[0], a = t[1], o = t[2], s = t[3], c = n[0], l = n[1], u = n[2], d = n[3], f, p = i * c + a * l + o * u + s * d, m, h, g;
	return p < 0 && (p = -p, c = -c, l = -l, u = -u, d = -d), 1 - p > 1e-6 ? (f = Math.acos(p), m = Math.sin(f), h = Math.sin((1 - r) * f) / m, g = Math.sin(r * f) / m) : (h = 1 - r, g = r), e[0] = h * i + g * c, e[1] = h * a + g * l, e[2] = h * o + g * u, e[3] = h * s + g * d, e;
}
function Ft(e, t) {
	var n = t[0], r = t[1], i = t[2], a = t[3], o = n * n + r * r + i * i + a * a, s = o ? 1 / o : 0;
	return e[0] = -n * s, e[1] = -r * s, e[2] = -i * s, e[3] = a * s, e;
}
function It(e, t) {
	var n = t[0] + t[4] + t[8], r;
	if (n > 0) r = Math.sqrt(n + 1), e[3] = .5 * r, r = .5 / r, e[0] = (t[5] - t[7]) * r, e[1] = (t[6] - t[2]) * r, e[2] = (t[1] - t[3]) * r;
	else {
		var i = 0;
		t[4] > t[0] && (i = 1), t[8] > t[i * 3 + i] && (i = 2);
		var a = (i + 1) % 3, o = (i + 2) % 3;
		r = Math.sqrt(t[i * 3 + i] - t[a * 3 + a] - t[o * 3 + o] + 1), e[i] = .5 * r, r = .5 / r, e[3] = (t[a * 3 + o] - t[o * 3 + a]) * r, e[a] = (t[a * 3 + i] + t[i * 3 + a]) * r, e[o] = (t[o * 3 + i] + t[i * 3 + o]) * r;
	}
	return e;
}
function Lt(e, t, n, r) {
	var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "zyx", a = Math.PI / 360;
	t *= a, r *= a, n *= a;
	var o = Math.sin(t), s = Math.cos(t), c = Math.sin(n), l = Math.cos(n), u = Math.sin(r), d = Math.cos(r);
	switch (i) {
		case "xyz":
			e[0] = o * l * d + s * c * u, e[1] = s * c * d - o * l * u, e[2] = s * l * u + o * c * d, e[3] = s * l * d - o * c * u;
			break;
		case "xzy":
			e[0] = o * l * d - s * c * u, e[1] = s * c * d - o * l * u, e[2] = s * l * u + o * c * d, e[3] = s * l * d + o * c * u;
			break;
		case "yxz":
			e[0] = o * l * d + s * c * u, e[1] = s * c * d - o * l * u, e[2] = s * l * u - o * c * d, e[3] = s * l * d + o * c * u;
			break;
		case "yzx":
			e[0] = o * l * d + s * c * u, e[1] = s * c * d + o * l * u, e[2] = s * l * u - o * c * d, e[3] = s * l * d - o * c * u;
			break;
		case "zxy":
			e[0] = o * l * d - s * c * u, e[1] = s * c * d + o * l * u, e[2] = s * l * u + o * c * d, e[3] = s * l * d - o * c * u;
			break;
		case "zyx":
			e[0] = o * l * d - s * c * u, e[1] = s * c * d + o * l * u, e[2] = s * l * u - o * c * d, e[3] = s * l * d + o * c * u;
			break;
		default: throw Error("Unknown angle order " + i);
	}
	return e;
}
var Rt = Et, zt = Dt, Bt = Ot, Vt = Nt, Ht = kt;
(function() {
	var e = R(), t = it(1, 0, 0), n = it(0, 1, 0);
	return function(r, i, a) {
		var o = ht(i, a);
		return o < -.999999 ? (gt(e, t, i), wt(e) < 1e-6 && gt(e, n, i), mt(e, e), Mt(r, e, Math.PI), r) : o > .999999 ? (r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r) : (gt(e, i, a), r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = 1 + o, Ht(r, r));
	};
})(), function() {
	var e = jt(), t = jt();
	return function(n, r, i, a, o, s) {
		return Pt(e, r, o, s), Pt(t, i, a, s), Pt(n, e, t, 2 * s * (1 - s)), n;
	};
}(), function() {
	var e = ne();
	return function(t, n, r, i) {
		return e[0] = r[0], e[3] = r[1], e[6] = r[2], e[1] = i[0], e[4] = i[1], e[7] = i[2], e[2] = -n[0], e[5] = -n[1], e[8] = -n[2], Ht(t, It(t, e));
	};
}();
function Ut() {
	var e = new F(2);
	return F != Float32Array && (e[0] = 0, e[1] = 0), e;
}
function Wt(e, t) {
	return e[0] = t[0], e[1] = t[1], e;
}
function Gt(e, t, n) {
	return e[0] = t, e[1] = n, e;
}
function Kt(e, t) {
	var n = t[0], r = t[1], i = n * n + r * r;
	return i > 0 && (i = 1 / Math.sqrt(i)), e[0] = t[0] * i, e[1] = t[1] * i, e;
}
function qt(e, t) {
	return e[0] * t[0] + e[1] * t[1];
}
function Jt(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}
(function() {
	var e = Ut();
	return function(t, n, r, i, a, o) {
		var s, c;
		for (n ||= 2, r ||= 0, c = i ? Math.min(i * n + r, t.length) : t.length, s = r; s < c; s += n) e[0] = t[s], e[1] = t[s + 1], a(e, e, o), t[s] = e[0], t[s + 1] = e[1];
		return t;
	};
})();
function Yt(e) {
	return typeof e == "function";
}
function z(e) {
	return e == null;
}
function Xt(e) {
	return Array.isArray(e);
}
var Zt = (function(e) {
	var t = typeof e;
	return e !== null && t === "object" || t === "function";
}), Qt = {}.toString, $t = function(e, t) {
	return Qt.call(e) === "[object " + t + "]";
};
function en(e) {
	if (!Array.isArray(e)) return -Infinity;
	var t = e.length;
	if (!t) return -Infinity;
	for (var n = e[0], r = 1; r < t; r++) n = Math.max(n, e[r]);
	return n;
}
var tn = (function(e) {
	if (Xt(e)) return e.reduce(function(e, t) {
		return Math.min(e, t);
	}, e[0]);
});
function nn(e) {
	return typeof e == "string";
}
var rn = function(e, t, n) {
	return e < t ? t : e > n ? n : e;
};
function an(e) {
	return typeof e == "number";
}
var on = 1e-5;
function sn(e, t, n) {
	return n === void 0 && (n = on), e === t || Math.abs(e - t) < n;
}
var cn = function(e, t) {
	return (e % t + t) % t;
}, ln = function(e) {
	return $t(e, "Boolean");
}, un = function(e) {
	return e === void 0;
}, dn = function() {
	return dn = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, dn.apply(this, arguments);
};
function fn(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
var pn = {
	x1: 0,
	y1: 0,
	x2: 0,
	y2: 0,
	x: 0,
	y: 0,
	qx: null,
	qy: null
};
function mn(e, t, n) {
	if (e[n].length > 7) {
		e[n].shift();
		for (var r = e[n], i = n; r.length;) t[n] = "A", e.splice(i += 1, 0, ["C"].concat(r.splice(0, 6)));
		e.splice(n, 1);
	}
}
var hn = {
	a: 7,
	c: 6,
	h: 1,
	l: 2,
	m: 2,
	r: 4,
	q: 4,
	s: 4,
	t: 2,
	v: 1,
	z: 0
};
function gn(e) {
	return Array.isArray(e) && e.every(function(e) {
		var t = e[0].toLowerCase();
		return hn[t] === e.length - 1 && "achlmqstvz".includes(t);
	});
}
function _n(e) {
	return gn(e) && e.every(function(e) {
		var t = e[0];
		return t === t.toUpperCase();
	});
}
function vn(e) {
	return _n(e) && e.every(function(e) {
		var t = e[0];
		return "ACLMQZ".includes(t);
	});
}
function yn(e) {
	for (var t = e.pathValue[e.segmentStart], n = t.toLowerCase(), r = e.data; r.length >= hn[n] && (n === "m" && r.length > 2 ? (e.segments.push([t].concat(r.splice(0, 2))), n = "l", t = t === "m" ? "l" : "L") : e.segments.push([t].concat(r.splice(0, hn[n]))), hn[n]););
}
function bn(e) {
	var t = e.index, n = e.pathValue, r = n.charCodeAt(t);
	if (r === 48) {
		e.param = 0, e.index += 1;
		return;
	}
	if (r === 49) {
		e.param = 1, e.index += 1;
		return;
	}
	e.err = `[path-util]: invalid Arc flag "${n[t]}", expecting 0 or 1 at index ${t}`;
}
function xn(e) {
	return e >= 48 && e <= 57 || e === 43 || e === 45 || e === 46;
}
function Sn(e) {
	return e >= 48 && e <= 57;
}
function Cn(e) {
	var t = e.max, n = e.pathValue, r = e.index, i = r, a = !1, o = !1, s = !1, c = !1, l;
	if (i >= t) {
		e.err = `[path-util]: Invalid path value at index ${i}, "pathValue" is missing param`;
		return;
	}
	if (l = n.charCodeAt(i), (l === 43 || l === 45) && (i += 1, l = n.charCodeAt(i)), !Sn(l) && l !== 46) {
		e.err = `[path-util]: Invalid path value at index ${i}, "${n[i]}" is not a number`;
		return;
	}
	if (l !== 46) {
		if (a = l === 48, i += 1, l = n.charCodeAt(i), a && i < t && l && Sn(l)) {
			e.err = `[path-util]: Invalid path value at index ${r}, "${n[r]}" illegal number`;
			return;
		}
		for (; i < t && Sn(n.charCodeAt(i));) i += 1, o = !0;
		l = n.charCodeAt(i);
	}
	if (l === 46) {
		for (c = !0, i += 1; Sn(n.charCodeAt(i));) i += 1, s = !0;
		l = n.charCodeAt(i);
	}
	if (l === 101 || l === 69) {
		if (c && !o && !s) {
			e.err = `[path-util]: Invalid path value at index ${i}, "${n[i]}" invalid float exponent`;
			return;
		}
		if (i += 1, l = n.charCodeAt(i), (l === 43 || l === 45) && (i += 1), i < t && Sn(n.charCodeAt(i))) for (; i < t && Sn(n.charCodeAt(i));) i += 1;
		else {
			e.err = `[path-util]: Invalid path value at index ${i}, "${n[i]}" invalid integer exponent`;
			return;
		}
	}
	e.index = i, e.param = +e.pathValue.slice(r, i);
}
function wn(e) {
	return e === 10 || e === 13 || e === 8232 || e === 8233 || e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e >= 5760 && [
		5760,
		6158,
		8192,
		8193,
		8194,
		8195,
		8196,
		8197,
		8198,
		8199,
		8200,
		8201,
		8202,
		8239,
		8287,
		12288,
		65279
	].includes(e);
}
function Tn(e) {
	for (var t = e.pathValue, n = e.max; e.index < n && wn(t.charCodeAt(e.index));) e.index += 1;
}
function En(e) {
	switch (e | 32) {
		case 109:
		case 122:
		case 108:
		case 104:
		case 118:
		case 99:
		case 115:
		case 113:
		case 116:
		case 97: return !0;
		default: return !1;
	}
}
function Dn(e) {
	return (e | 32) == 97;
}
function On(e) {
	var t = e.max, n = e.pathValue, r = e.index, i = n.charCodeAt(r), a = hn[n[r].toLowerCase()];
	if (e.segmentStart = r, !En(i)) {
		e.err = `[path-util]: Invalid path value "${n[r]}" is not a path command`;
		return;
	}
	if (e.index += 1, Tn(e), e.data = [], !a) {
		yn(e);
		return;
	}
	for (;;) {
		for (var o = a; o > 0; --o) {
			if (Dn(i) && (o === 3 || o === 4) ? bn(e) : Cn(e), e.err.length) return;
			e.data.push(e.param), Tn(e), e.index < t && n.charCodeAt(e.index) === 44 && (e.index += 1, Tn(e));
		}
		if (e.index >= e.max || !xn(n.charCodeAt(e.index))) break;
	}
	yn(e);
}
var kn = function() {
	function e(e) {
		this.pathValue = e, this.segments = [], this.max = e.length, this.index = 0, this.param = 0, this.segmentStart = 0, this.data = [], this.err = "";
	}
	return e;
}();
function An(e) {
	if (gn(e)) return [].concat(e);
	var t = new kn(e);
	for (Tn(t); t.index < t.max && !t.err.length;) On(t);
	return t.err ? t.err : t.segments;
}
function jn(e) {
	if (_n(e)) return [].concat(e);
	var t = An(e), n = 0, r = 0, i = 0, a = 0;
	return t.map(function(e) {
		var t = e.slice(1).map(Number), o = e[0], s = o.toUpperCase();
		if (o === "M") return n = t[0], r = t[1], i = n, a = r, [
			"M",
			n,
			r
		];
		var c;
		if (o !== s) switch (s) {
			case "A":
				c = [
					s,
					t[0],
					t[1],
					t[2],
					t[3],
					t[4],
					t[5] + n,
					t[6] + r
				];
				break;
			case "V":
				c = [s, t[0] + r];
				break;
			case "H":
				c = [s, t[0] + n];
				break;
			default:
				var l = t.map(function(e, t) {
					return e + (t % 2 ? r : n);
				});
				c = [s].concat(l);
		}
		else c = [s].concat(t);
		var u = c.length;
		switch (s) {
			case "Z":
				n = i, r = a;
				break;
			case "H":
				n = c[1];
				break;
			case "V":
				r = c[1];
				break;
			default: n = c[u - 2], r = c[u - 1], s === "M" && (i = n, a = r);
		}
		return c;
	});
}
function Mn(e, t) {
	var n = e[0], r = t.x1, i = t.y1, a = t.x2, o = t.y2, s = e.slice(1).map(Number), c = e;
	if ("TQ".includes(n) || (t.qx = null, t.qy = null), n === "H") c = [
		"L",
		e[1],
		i
	];
	else if (n === "V") c = [
		"L",
		r,
		e[1]
	];
	else if (n === "S") {
		var l = r * 2 - a, u = i * 2 - o;
		t.x1 = l, t.y1 = u, c = [
			"C",
			l,
			u
		].concat(s);
	} else if (n === "T") {
		var d = r * 2 - t.qx, f = i * 2 - t.qy;
		t.qx = d, t.qy = f, c = [
			"Q",
			d,
			f
		].concat(s);
	} else if (n === "Q") {
		var p = s[0], m = s[1];
		t.qx = p, t.qy = m;
	}
	return c;
}
function Nn(e) {
	if (vn(e)) return [].concat(e);
	for (var t = jn(e), n = dn({}, pn), r = 0; r < t.length; r += 1) {
		t[r] = Mn(t[r], n);
		var i = t[r], a = i.length;
		n.x1 = +i[a - 2], n.y1 = +i[a - 1], n.x2 = +i[a - 4] || n.x1, n.y2 = +i[a - 3] || n.y1;
	}
	return t;
}
function Pn(e) {
	return vn(e) && e.every(function(e) {
		var t = e[0];
		return "MC".includes(t);
	});
}
function Fn(e, t, n) {
	return {
		x: e * Math.cos(n) - t * Math.sin(n),
		y: e * Math.sin(n) + t * Math.cos(n)
	};
}
function In(e, t, n, r, i, a, o, s, c, l) {
	var u = e, d = t, f = n, p = r, m = s, h = c, g = Math.PI * 120 / 180, _ = Math.PI / 180 * (+i || 0), v = [], y, b, x, S, C;
	if (l) b = l[0], x = l[1], S = l[2], C = l[3];
	else {
		y = Fn(u, d, -_), u = y.x, d = y.y, y = Fn(m, h, -_), m = y.x, h = y.y;
		var w = (u - m) / 2, T = (d - h) / 2, E = w * w / (f * f) + T * T / (p * p);
		E > 1 && (E = Math.sqrt(E), f *= E, p *= E);
		var D = f * f, O = p * p, k = (a === o ? -1 : 1) * Math.sqrt(Math.abs((D * O - D * T * T - O * w * w) / (D * T * T + O * w * w)));
		S = k * f * T / p + (u + m) / 2, C = k * -p * w / f + (d + h) / 2, b = Math.asin(((d - C) / p * 10 ** 9 >> 0) / 10 ** 9), x = Math.asin(((h - C) / p * 10 ** 9 >> 0) / 10 ** 9), b = u < S ? Math.PI - b : b, x = m < S ? Math.PI - x : x, b < 0 && (b = Math.PI * 2 + b), x < 0 && (x = Math.PI * 2 + x), o && b > x && (b -= Math.PI * 2), !o && x > b && (x -= Math.PI * 2);
	}
	var A = x - b;
	if (Math.abs(A) > g) {
		var j = x, ee = m, M = h;
		x = b + g * (o && x > b ? 1 : -1), m = S + f * Math.cos(x), h = C + p * Math.sin(x), v = In(m, h, f, p, i, 0, o, ee, M, [
			x,
			j,
			S,
			C
		]);
	}
	A = x - b;
	var N = Math.cos(b), P = Math.sin(b), te = Math.cos(x), F = Math.sin(x), ne = Math.tan(A / 4), re = 4 / 3 * f * ne, ie = 4 / 3 * p * ne, ae = [u, d], I = [u + re * P, d - ie * N], oe = [m + re * F, h - ie * te], se = [m, h];
	if (I[0] = 2 * ae[0] - I[0], I[1] = 2 * ae[1] - I[1], l) return I.concat(oe, se, v);
	v = I.concat(oe, se, v);
	for (var ce = [], le = 0, L = v.length; le < L; le += 1) ce[le] = le % 2 ? Fn(v[le - 1], v[le], _).y : Fn(v[le], v[le + 1], _).x;
	return ce;
}
function Ln(e, t, n, r, i, a) {
	var o = 1 / 3, s = 2 / 3;
	return [
		o * e + s * n,
		o * t + s * r,
		o * i + s * n,
		o * a + s * r,
		i,
		a
	];
}
function Rn(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return [r + (a - r) * n, i + (o - i) * n];
}
var zn = function(e, t, n, r) {
	return fn(fn([], Rn([e, t], [n, r], .5), !0), [
		n,
		r,
		n,
		r
	], !1);
};
function Bn(e, t) {
	var n = e[0], r = e.slice(1).map(Number), i = r[0], a = r[1], o, s = t.x1, c = t.y1, l = t.x, u = t.y;
	switch ("TQ".includes(n) || (t.qx = null, t.qy = null), n) {
		case "M": return t.x = i, t.y = a, e;
		case "A": return o = [s, c].concat(r), ["C"].concat(In(o[0], o[1], o[2], o[3], o[4], o[5], o[6], o[7], o[8], o[9]));
		case "Q": return t.qx = i, t.qy = a, o = [s, c].concat(r), ["C"].concat(Ln(o[0], o[1], o[2], o[3], o[4], o[5]));
		case "L": return ["C"].concat(zn(s, c, i, a));
		case "Z": return s === l && c === u ? [
			"C",
			s,
			c,
			l,
			u,
			l,
			u
		] : ["C"].concat(zn(s, c, l, u));
		default:
	}
	return e;
}
function Vn(e, t) {
	if (t === void 0 && (t = !1), Pn(e)) {
		var n = [].concat(e);
		return t ? [n, []] : n;
	}
	for (var r = Nn(e), i = dn({}, pn), a = [], o = "", s = r.length, c, l, u = [], d = 0; d < s; d += 1) r[d] && (o = r[d][0]), a[d] = o, r[d] = Bn(r[d], i), mn(r, a, d), s = r.length, o === "Z" && u.push(d), c = r[d], l = c.length, i.x1 = +c[l - 2], i.y1 = +c[l - 1], i.x2 = +c[l - 4] || i.x1, i.y2 = +c[l - 3] || i.y1;
	return t ? [r, u] : r;
}
function Hn(e) {
	return e.map(function(e) {
		return Array.isArray(e) ? [].concat(e) : e;
	});
}
function Un(e) {
	var t = e.slice(1).map(function(t, n, r) {
		return n ? r[n - 1].slice(-2).concat(t.slice(1)) : e[0].slice(1).concat(t.slice(1));
	}).map(function(e) {
		return e.map(function(t, n) {
			return e[e.length - n - 2 * (1 - n % 2)];
		});
	}).reverse();
	return [["M"].concat(t[0].slice(0, 2))].concat(t.map(function(e) {
		return ["C"].concat(e.slice(2));
	}));
}
function Wn(e, t) {
	return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]));
}
function Gn(e, t, n, r, i) {
	var a = Wn([e, t], [n, r]), o = {
		x: 0,
		y: 0
	};
	if (typeof i == "number") if (i <= 0) o = {
		x: e,
		y: t
	};
	else if (i >= a) o = {
		x: n,
		y: r
	};
	else {
		var s = Rn([e, t], [n, r], i / a);
		o = {
			x: s[0],
			y: s[1]
		};
	}
	return {
		length: a,
		point: o,
		min: {
			x: Math.min(e, n),
			y: Math.min(t, r)
		},
		max: {
			x: Math.max(e, n),
			y: Math.max(t, r)
		}
	};
}
function Kn(e, t) {
	var n = e.x, r = e.y, i = t.x, a = t.y, o = n * i + r * a, s = Math.sqrt((n ** 2 + r ** 2) * (i ** 2 + a ** 2));
	return (n * a - r * i < 0 ? -1 : 1) * Math.acos(o / s);
}
function qn(e, t, n, r, i, a, o, s, c, l) {
	var u = Math.abs, d = Math.sin, f = Math.cos, p = Math.sqrt, m = Math.PI, h = u(n), g = u(r), _ = (i % 360 + 360) % 360 * (m / 180);
	if (e === s && t === c) return {
		x: e,
		y: t
	};
	if (h === 0 || g === 0) return Gn(e, t, s, c, l).point;
	var v = (e - s) / 2, y = (t - c) / 2, b = {
		x: f(_) * v + d(_) * y,
		y: -d(_) * v + f(_) * y
	}, x = b.x ** 2 / h ** 2 + b.y ** 2 / g ** 2;
	x > 1 && (h *= p(x), g *= p(x));
	var S = (h ** 2 * g ** 2 - h ** 2 * b.y ** 2 - g ** 2 * b.x ** 2) / (h ** 2 * b.y ** 2 + g ** 2 * b.x ** 2);
	S = S < 0 ? 0 : S;
	var C = (a === o ? -1 : 1) * p(S), w = {
		x: C * (h * b.y / g),
		y: C * (-(g * b.x) / h)
	}, T = {
		x: f(_) * w.x - d(_) * w.y + (e + s) / 2,
		y: d(_) * w.x + f(_) * w.y + (t + c) / 2
	}, E = {
		x: (b.x - w.x) / h,
		y: (b.y - w.y) / g
	}, D = Kn({
		x: 1,
		y: 0
	}, E), O = Kn(E, {
		x: (-b.x - w.x) / h,
		y: (-b.y - w.y) / g
	});
	!o && O > 0 ? O -= 2 * m : o && O < 0 && (O += 2 * m), O %= 2 * m;
	var k = D + O * l, A = h * f(k), j = g * d(k);
	return {
		x: f(_) * A - d(_) * j + T.x,
		y: d(_) * A + f(_) * j + T.y
	};
}
function Jn(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f = u.bbox, p = f === void 0 ? !0 : f, m = u.length, h = m === void 0 ? !0 : m, g = u.sampleSize, _ = g === void 0 ? 30 : g, v = typeof l == "number", y = e, b = t, x = 0, S = [
		y,
		b,
		x
	], C = [y, b], w = 0, T = {
		x: 0,
		y: 0
	}, E = [{
		x: y,
		y: b
	}];
	v && l <= 0 && (T = {
		x: y,
		y: b
	});
	for (var D = 0; D <= _; D += 1) {
		if (w = D / _, d = qn(e, t, n, r, i, a, o, s, c, w), y = d.x, b = d.y, p && E.push({
			x: y,
			y: b
		}), h && (x += Wn(C, [y, b])), C = [y, b], v && x >= l && l > S[2]) {
			var O = (x - l) / (x - S[2]);
			T = {
				x: C[0] * (1 - O) + S[0] * O,
				y: C[1] * (1 - O) + S[1] * O
			};
		}
		S = [
			y,
			b,
			x
		];
	}
	return v && l >= x && (T = {
		x: s,
		y: c
	}), {
		length: x,
		point: T,
		min: {
			x: Math.min.apply(null, E.map(function(e) {
				return e.x;
			})),
			y: Math.min.apply(null, E.map(function(e) {
				return e.y;
			}))
		},
		max: {
			x: Math.max.apply(null, E.map(function(e) {
				return e.x;
			})),
			y: Math.max.apply(null, E.map(function(e) {
				return e.y;
			}))
		}
	};
}
function Yn(e, t, n, r, i, a, o, s, c) {
	var l = 1 - c;
	return {
		x: l ** 3 * e + 3 * l ** 2 * c * n + 3 * l * c ** 2 * i + c ** 3 * o,
		y: l ** 3 * t + 3 * l ** 2 * c * r + 3 * l * c ** 2 * a + c ** 3 * s
	};
}
function Xn(e, t, n, r, i, a, o, s, c, l) {
	var u, d = l.bbox, f = d === void 0 ? !0 : d, p = l.length, m = p === void 0 ? !0 : p, h = l.sampleSize, g = h === void 0 ? 10 : h, _ = typeof c == "number", v = e, y = t, b = 0, x = [
		v,
		y,
		b
	], S = [v, y], C = 0, w = {
		x: 0,
		y: 0
	}, T = [{
		x: v,
		y
	}];
	_ && c <= 0 && (w = {
		x: v,
		y
	});
	for (var E = 0; E <= g; E += 1) {
		if (C = E / g, u = Yn(e, t, n, r, i, a, o, s, C), v = u.x, y = u.y, f && T.push({
			x: v,
			y
		}), m && (b += Wn(S, [v, y])), S = [v, y], _ && b >= c && c > x[2]) {
			var D = (b - c) / (b - x[2]);
			w = {
				x: S[0] * (1 - D) + x[0] * D,
				y: S[1] * (1 - D) + x[1] * D
			};
		}
		x = [
			v,
			y,
			b
		];
	}
	return _ && c >= b && (w = {
		x: o,
		y: s
	}), {
		length: b,
		point: w,
		min: {
			x: Math.min.apply(null, T.map(function(e) {
				return e.x;
			})),
			y: Math.min.apply(null, T.map(function(e) {
				return e.y;
			}))
		},
		max: {
			x: Math.max.apply(null, T.map(function(e) {
				return e.x;
			})),
			y: Math.max.apply(null, T.map(function(e) {
				return e.y;
			}))
		}
	};
}
function Zn(e, t, n, r, i, a, o) {
	var s = 1 - o;
	return {
		x: s ** 2 * e + 2 * s * o * n + o ** 2 * i,
		y: s ** 2 * t + 2 * s * o * r + o ** 2 * a
	};
}
function Qn(e, t, n, r, i, a, o, s) {
	var c, l = s.bbox, u = l === void 0 ? !0 : l, d = s.length, f = d === void 0 ? !0 : d, p = s.sampleSize, m = p === void 0 ? 10 : p, h = typeof o == "number", g = e, _ = t, v = 0, y = [
		g,
		_,
		v
	], b = [g, _], x = 0, S = {
		x: 0,
		y: 0
	}, C = [{
		x: g,
		y: _
	}];
	h && o <= 0 && (S = {
		x: g,
		y: _
	});
	for (var w = 0; w <= m; w += 1) {
		if (x = w / m, c = Zn(e, t, n, r, i, a, x), g = c.x, _ = c.y, u && C.push({
			x: g,
			y: _
		}), f && (v += Wn(b, [g, _])), b = [g, _], h && v >= o && o > y[2]) {
			var T = (v - o) / (v - y[2]);
			S = {
				x: b[0] * (1 - T) + y[0] * T,
				y: b[1] * (1 - T) + y[1] * T
			};
		}
		y = [
			g,
			_,
			v
		];
	}
	return h && o >= v && (S = {
		x: i,
		y: a
	}), {
		length: v,
		point: S,
		min: {
			x: Math.min.apply(null, C.map(function(e) {
				return e.x;
			})),
			y: Math.min.apply(null, C.map(function(e) {
				return e.y;
			}))
		},
		max: {
			x: Math.max.apply(null, C.map(function(e) {
				return e.x;
			})),
			y: Math.max.apply(null, C.map(function(e) {
				return e.y;
			}))
		}
	};
}
function $n(e, t, n) {
	for (var r, i, a, o, s, c, l = Nn(e), u = typeof t == "number", d, f = [], p, m = 0, h = 0, g = 0, _ = 0, v, y = [], b = [], x = 0, S = {
		x: 0,
		y: 0
	}, C = S, w = S, T = S, E = 0, D = 0, O = l.length; D < O; D += 1) v = l[D], p = v[0], d = p === "M", f = d ? f : [m, h].concat(v.slice(1)), d ? (g = v[1], _ = v[2], S = {
		x: g,
		y: _
	}, C = S, x = 0, u && t < .001 && (T = S)) : p === "L" ? (r = Gn(f[0], f[1], f[2], f[3], (t || 0) - E), x = r.length, S = r.min, C = r.max, w = r.point) : p === "A" ? (i = Jn(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], (t || 0) - E, n || {}), x = i.length, S = i.min, C = i.max, w = i.point) : p === "C" ? (a = Xn(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], (t || 0) - E, n || {}), x = a.length, S = a.min, C = a.max, w = a.point) : p === "Q" ? (o = Qn(f[0], f[1], f[2], f[3], f[4], f[5], (t || 0) - E, n || {}), x = o.length, S = o.min, C = o.max, w = o.point) : p === "Z" && (f = [
		m,
		h,
		g,
		_
	], s = Gn(f[0], f[1], f[2], f[3], (t || 0) - E), x = s.length, S = s.min, C = s.max, w = s.point), u && E < t && E + x >= t && (T = w), b.push(C), y.push(S), E += x, c = p === "Z" ? [g, _] : v.slice(-2), m = c[0], h = c[1];
	return u && t >= E && (T = {
		x: m,
		y: h
	}), {
		length: E,
		point: T,
		min: {
			x: Math.min.apply(null, y.map(function(e) {
				return e.x;
			})),
			y: Math.min.apply(null, y.map(function(e) {
				return e.y;
			}))
		},
		max: {
			x: Math.max.apply(null, b.map(function(e) {
				return e.x;
			})),
			y: Math.max.apply(null, b.map(function(e) {
				return e.y;
			}))
		}
	};
}
function er(e, t) {
	return $n(e, void 0, dn(dn({}, t), {
		bbox: !1,
		length: !0
	})).length;
}
function tr(e) {
	var t = e.length, n = t - 1;
	return e.map(function(r, i) {
		return e.map(function(r, a) {
			var o = i + a, s;
			return a === 0 || e[o] && e[o][0] === "M" ? (s = e[o], ["M"].concat(s.slice(-2))) : (o >= t && (o -= n), e[o]);
		});
	});
}
function nr(e, t) {
	var n = e.length - 1, r = [], i = 0, a = 0, o = tr(e);
	return o.forEach(function(i, o) {
		e.slice(1).forEach(function(r, i) {
			a += Wn(e[(o + i) % n].slice(-2), t[i % n].slice(-2));
		}), r[o] = a, a = 0;
	}), i = r.indexOf(Math.min.apply(null, r)), o[i];
}
function rr(e, t, n, r, i, a, o, s) {
	return 3 * ((s - t) * (n + i) - (o - e) * (r + a) + r * (e - i) - n * (t - a) + s * (i + e / 3) - o * (a + t / 3)) / 20;
}
function ir(e) {
	var t = 0, n = 0, r = 0;
	return Vn(e).map(function(e) {
		var i;
		switch (e[0]) {
			case "M": return t = e[1], n = e[2], 0;
			default:
				var a = e.slice(1), o = a[0], s = a[1], c = a[2], l = a[3], u = a[4], d = a[5];
				return r = rr(t, n, o, s, c, l, u, d), i = e.slice(-2), t = i[0], n = i[1], r;
		}
	}).reduce(function(e, t) {
		return e + t;
	}, 0);
}
function ar(e) {
	return ir(e) >= 0;
}
function or(e, t, n) {
	return $n(e, t, dn(dn({}, n), {
		bbox: !1,
		length: !0
	})).point;
}
var sr = 50;
function cr(e, t) {
	t === void 0 && (t = .5);
	var n = e.slice(0, 2), r = e.slice(2, 4), i = e.slice(4, 6), a = e.slice(6, 8), o = Rn(n, r, t), s = Rn(r, i, t), c = Rn(i, a, t), l = Rn(o, s, t), u = Rn(s, c, t), d = Rn(l, u, t);
	return [["C"].concat(o, l, d), ["C"].concat(u, c, a)];
}
function lr(e) {
	return e.map(function(e, t, n) {
		var r = t && n[t - 1].slice(-2).concat(e.slice(1)), i = t ? Xn(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], { bbox: !1 }).length : 0;
		return {
			s: e,
			ss: t ? i ? cr(r) : [e, e] : [e],
			l: i
		};
	});
}
function ur(e, t, n, r) {
	if (r === void 0 && (r = 0), r > sr) return console.warn("Maximum recursion depth reached in equalizeSegments"), [e, t];
	var i = lr(e), a = lr(t), o = i.length, s = a.length, c = i.filter(function(e) {
		return e.l;
	}).length, l = a.filter(function(e) {
		return e.l;
	}).length, u = i.filter(function(e) {
		return e.l;
	}).reduce(function(e, t) {
		return e + t.l;
	}, 0) / c || 0, d = a.filter(function(e) {
		return e.l;
	}).reduce(function(e, t) {
		return e + t.l;
	}, 0) / l || 0, f = n || Math.max(o, s), p = [u, d], m = [f - o, f - s], h = 0, g = [i, a].map(function(e, t) {
		return e.l === f ? e.map(function(e) {
			return e.s;
		}) : e.map(function(e, n) {
			return h = n && m[t] && e.l >= p[t], m[t] -= +!!h, h ? e.ss : [e.s];
		}).flat();
	});
	return g[0].length === g[1].length ? g : ur(g[0], g[1], f, r + 1);
}
function dr(e, t) {
	for (; !{}.hasOwnProperty.call(e, t) && (e = T(e)) !== null;);
	return e;
}
function fr() {
	return fr = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
		var r = dr(e, t);
		if (r) {
			var i = Object.getOwnPropertyDescriptor(r, t);
			return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
		}
	}, fr.apply(null, arguments);
}
function pr(e, t, n, r) {
	var i = fr(T(1 & r ? e.prototype : e), t, n);
	return 2 & r && typeof i == "function" ? function(e) {
		return i.apply(n, e);
	} : i;
}
function mr(e, t, n, r) {
	var i = e - n, a = t - r;
	return Math.sqrt(i * i + a * a);
}
function hr(e, t) {
	var n = Math.min.apply(Math, w(e)), r = Math.min.apply(Math, w(t)), i = Math.max.apply(Math, w(e)), a = Math.max.apply(Math, w(t));
	return {
		x: n,
		y: r,
		width: i - n,
		height: a - r
	};
}
function gr(e, t, n) {
	return Math.atan(-t / e * Math.tan(n));
}
function _r(e, t, n) {
	return Math.atan(t / (e * Math.tan(n)));
}
function vr(e, t, n, r, i, a) {
	return n * Math.cos(i) * Math.cos(a) - r * Math.sin(i) * Math.sin(a) + e;
}
function yr(e, t, n, r, i, a) {
	return n * Math.sin(i) * Math.cos(a) + r * Math.cos(i) * Math.sin(a) + t;
}
function br(e, t, n, r, i, a, o) {
	for (var s = gr(n, r, i), c = Infinity, l = -Infinity, u = [a, o], d = -Math.PI * 2; d <= Math.PI * 2; d += Math.PI) {
		var f = s + d;
		a < o ? a < f && f < o && u.push(f) : o < f && f < a && u.push(f);
	}
	for (var p = 0; p < u.length; p++) {
		var m = vr(e, t, n, r, i, u[p]);
		m < c && (c = m), m > l && (l = m);
	}
	for (var h = _r(n, r, i), g = Infinity, _ = -Infinity, v = [a, o], y = -Math.PI * 2; y <= Math.PI * 2; y += Math.PI) {
		var b = h + y;
		a < o ? a < b && b < o && v.push(b) : o < b && b < a && v.push(b);
	}
	for (var x = 0; x < v.length; x++) {
		var S = yr(e, t, n, r, i, v[x]);
		S < g && (g = S), S > _ && (_ = S);
	}
	return {
		x: c,
		y: g,
		width: l - c,
		height: _ - g
	};
}
var xr = 1e-4;
function Sr(e, t, n, r, i, a) {
	var o = -1, s = Infinity, c = [n, r], l = 20;
	a && a > 200 && (l = a / 10);
	for (var u = 1 / l, d = u / 10, f = 0; f <= l; f++) {
		var p = f * u, m = [i.apply(void 0, w(e.concat([p]))), i.apply(void 0, w(t.concat([p])))], h = mr(c[0], c[1], m[0], m[1]);
		h < s && (o = p, s = h);
	}
	if (o === 0) return {
		x: e[0],
		y: t[0]
	};
	if (o === 1) {
		var g = e.length;
		return {
			x: e[g - 1],
			y: t[g - 1]
		};
	}
	s = Infinity;
	for (var _ = 0; _ < 32 && !(d < xr); _++) {
		var v = o - d, y = o + d, b = [i.apply(void 0, w(e.concat([v]))), i.apply(void 0, w(t.concat([v])))], x = mr(c[0], c[1], b[0], b[1]);
		if (v >= 0 && x < s) o = v, s = x;
		else {
			var S = [i.apply(void 0, w(e.concat([y]))), i.apply(void 0, w(t.concat([y])))], C = mr(c[0], c[1], S[0], S[1]);
			y <= 1 && C < s ? (o = y, s = C) : d *= .5;
		}
	}
	return {
		x: i.apply(void 0, w(e.concat([o]))),
		y: i.apply(void 0, w(t.concat([o])))
	};
}
function Cr(e, t, n, r) {
	return mr(e, t, n, r);
}
function wr(e, t, n, r, i) {
	return {
		x: (1 - i) * e + i * n,
		y: (1 - i) * t + i * r
	};
}
function Tr(e, t, n, r, i, a) {
	var o = [n - e, r - t];
	if (Jt(o, [0, 0])) return Math.sqrt((i - e) * (i - e) + (a - t) * (a - t));
	var s = [-o[1], o[0]];
	Kt(s, s);
	var c = [i - e, a - t];
	return Math.abs(qt(c, s));
}
function Er(e, t, n, r, i) {
	var a = 1 - i;
	return a * a * a * e + 3 * t * i * a * a + 3 * n * i * i * a + r * i * i * i;
}
function Dr(e, t, n, r) {
	var i = -3 * e + 9 * t - 9 * n + 3 * r, a = 6 * e - 12 * t + 6 * n, o = 3 * t - 3 * e, s = [], c, l, u;
	if (sn(i, 0)) sn(a, 0) || (c = -o / a, c >= 0 && c <= 1 && s.push(c));
	else {
		var d = a * a - 4 * i * o;
		sn(d, 0) ? s.push(-a / (2 * i)) : d > 0 && (u = Math.sqrt(d), c = (-a + u) / (2 * i), l = (-a - u) / (2 * i), c >= 0 && c <= 1 && s.push(c), l >= 0 && l <= 1 && s.push(l));
	}
	return s;
}
function Or(e, t, n, r, i, a, o, s) {
	for (var c = [e, o], l = [t, s], u = Dr(e, n, i, o), d = Dr(t, r, a, s), f = 0; f < u.length; f++) c.push(Er(e, n, i, o, u[f]));
	for (var p = 0; p < d.length; p++) l.push(Er(t, r, a, s, d[p]));
	return hr(c, l);
}
function kr(e, t, n, r, i, a, o, s, c, l, u) {
	return Sr([
		e,
		n,
		i,
		o
	], [
		t,
		r,
		a,
		s
	], c, l, Er, u);
}
function Ar(e, t, n, r, i, a, o, s, c, l, u) {
	var d = kr(e, t, n, r, i, a, o, s, c, l, u);
	return mr(d.x, d.y, c, l);
}
function jr(e) {
	if (e.length < 2) return 0;
	for (var t = 0, n = 0; n < e.length - 1; n++) {
		var r = e[n], i = e[n + 1];
		t += mr(r[0], r[1], i[0], i[1]);
	}
	return t;
}
function Mr(e) {
	return jr(e);
}
function Nr(e, t, n, r) {
	var i = 1 - r;
	return i * i * e + 2 * r * i * t + r * r * n;
}
function Pr(e, t, n) {
	var r = e + n - 2 * t;
	if (sn(r, 0)) return [.5];
	var i = (e - t) / r;
	return i <= 1 && i >= 0 ? [i] : [];
}
function Fr(e, t, n, r, i, a) {
	var o = Pr(e, n, i)[0], s = Pr(t, r, a)[0], c = [e, i], l = [t, a];
	return o !== void 0 && c.push(Nr(e, n, i, o)), s !== void 0 && l.push(Nr(t, r, a, s)), hr(c, l);
}
function Ir(e, t, n, r, i, a, o, s) {
	return Sr([
		e,
		n,
		i
	], [
		t,
		r,
		a
	], o, s, Nr);
}
function Lr(e, t, n, r, i, a, o, s) {
	var c = Ir(e, t, n, r, i, a, o, s);
	return mr(c.x, c.y, o, s);
}
function Rr(e, t) {
	this.v = e, this.k = t;
}
function zr(e, t, n, r) {
	var i = Object.defineProperty;
	try {
		i({}, "", {});
	} catch {
		i = 0;
	}
	zr = function(e, t, n, r) {
		function a(t, n) {
			zr(e, t, function(e) {
				return this._invoke(t, n, e);
			});
		}
		t ? i ? i(e, t, {
			value: n,
			enumerable: !r,
			configurable: !r,
			writable: !r
		}) : e[t] = n : (a("next", 0), a("throw", 1), a("return", 2));
	}, zr(e, t, n, r);
}
function Br() {
	var e, t, n = typeof Symbol == "function" ? Symbol : {}, r = n.iterator || "@@iterator", i = n.toStringTag || "@@toStringTag";
	function a(n, r, i, a) {
		var c = r && r.prototype instanceof s ? r : s, l = Object.create(c.prototype);
		return zr(l, "_invoke", function(n, r, i) {
			var a, s, c, l = 0, u = i || [], d = !1, f = {
				p: 0,
				n: 0,
				v: e,
				a: p,
				f: p.bind(e, 4),
				d: function(t, n) {
					return a = t, s = 0, c = e, f.n = n, o;
				}
			};
			function p(n, r) {
				for (s = n, c = r, t = 0; !d && l && !i && t < u.length; t++) {
					var i, a = u[t], p = f.p, m = a[2];
					n > 3 ? (i = m === r) && (c = a[(s = a[4]) ? 5 : (s = 3, 3)], a[4] = a[5] = e) : a[0] <= p && ((i = n < 2 && p < a[1]) ? (s = 0, f.v = r, f.n = a[1]) : p < m && (i = n < 3 || a[0] > r || r > m) && (a[4] = n, a[5] = r, f.n = m, s = 0));
				}
				if (i || n > 1) return o;
				throw d = !0, r;
			}
			return function(i, u, m) {
				if (l > 1) throw TypeError("Generator is already running");
				for (d && u === 1 && p(u, m), s = u, c = m; (t = s < 2 ? e : c) || !d;) {
					a || (s ? s < 3 ? (s > 1 && (f.n = -1), p(s, c)) : f.n = c : f.v = c);
					try {
						if (l = 2, a) {
							if (s || (i = "next"), t = a[i]) {
								if (!(t = t.call(a, c))) throw TypeError("iterator result is not an object");
								if (!t.done) return t;
								c = t.value, s < 2 && (s = 0);
							} else s === 1 && (t = a.return) && t.call(a), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
							a = e;
						} else if ((t = (d = f.n < 0) ? c : n.call(r, f)) !== o) break;
					} catch (t) {
						a = e, s = 1, c = t;
					} finally {
						l = 1;
					}
				}
				return {
					value: t,
					done: d
				};
			};
		}(n, i, a), !0), l;
	}
	var o = {};
	function s() {}
	function c() {}
	function l() {}
	t = Object.getPrototypeOf;
	var u = [][r] ? t(t([][r]())) : (zr(t = {}, r, function() {
		return this;
	}), t), d = l.prototype = s.prototype = Object.create(u);
	function f(e) {
		return Object.setPrototypeOf ? Object.setPrototypeOf(e, l) : (e.__proto__ = l, zr(e, i, "GeneratorFunction")), e.prototype = Object.create(d), e;
	}
	return c.prototype = l, zr(d, "constructor", l), zr(l, "constructor", c), c.displayName = "GeneratorFunction", zr(l, i, "GeneratorFunction"), zr(d), zr(d, i, "Generator"), zr(d, r, function() {
		return this;
	}), zr(d, "toString", function() {
		return "[object Generator]";
	}), (Br = function() {
		return {
			w: a,
			m: f
		};
	})();
}
function Vr(e, t) {
	function n(r, i, a, o) {
		try {
			var s = e[r](i), c = s.value;
			return c instanceof Rr ? t.resolve(c.v).then(function(e) {
				n("next", e, a, o);
			}, function(e) {
				n("throw", e, a, o);
			}) : t.resolve(c).then(function(e) {
				s.value = e, a(s);
			}, function(e) {
				return n("throw", e, a, o);
			});
		} catch (e) {
			o(e);
		}
	}
	var r;
	this.next || (zr(Vr.prototype), zr(Vr.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
		return this;
	})), zr(this, "_invoke", function(e, i, a) {
		function o() {
			return new t(function(t, r) {
				n(e, a, t, r);
			});
		}
		return r = r ? r.then(o, o) : o();
	}, !0);
}
function Hr(e, t, n, r, i) {
	return new Vr(Br().w(e, t, n, r), i || Promise);
}
function Ur(e, t, n, r, i) {
	var a = Hr(e, t, n, r, i);
	return a.next().then(function(e) {
		return e.done ? e.value : a.next();
	});
}
function Wr(e) {
	var t = Object(e), n = [];
	for (var r in t) n.unshift(r);
	return function e() {
		for (; n.length;) if ((r = n.pop()) in t) return e.value = r, e.done = !1, e;
		return e.done = !0, e;
	};
}
function Gr(e) {
	if (e != null) {
		var t = e[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], n = 0;
		if (t) return t.call(e);
		if (typeof e.next == "function") return e;
		if (!isNaN(e.length)) return { next: function() {
			return e && n >= e.length && (e = void 0), {
				value: e && e[n++],
				done: !e
			};
		} };
	}
	throw TypeError(u(e) + " is not iterable");
}
function Kr() {
	var e = Br(), t = e.m(Kr), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
	function r(e) {
		var t = typeof e == "function" && e.constructor;
		return !!t && (t === n || (t.displayName || t.name) === "GeneratorFunction");
	}
	var i = {
		throw: 1,
		return: 2,
		break: 3,
		continue: 3
	};
	function a(e) {
		var t, n;
		return function(r) {
			t || (t = {
				stop: function() {
					return n(r.a, 2);
				},
				catch: function() {
					return r.v;
				},
				abrupt: function(e, t) {
					return n(r.a, i[e], t);
				},
				delegateYield: function(e, i, a) {
					return t.resultName = i, n(r.d, Gr(e), a);
				},
				finish: function(e) {
					return n(r.f, e);
				}
			}, n = function(e, n, i) {
				r.p = t.prev, r.n = t.next;
				try {
					return e(n, i);
				} finally {
					t.next = r.n;
				}
			}), t.resultName && (t[t.resultName] = r.v, t.resultName = void 0), t.sent = r.v, t.next = r.n;
			try {
				return e.call(this, t);
			} finally {
				r.p = t.prev, r.n = t.next;
			}
		};
	}
	return (Kr = function() {
		return {
			wrap: function(t, n, r, i) {
				return e.w(a(t), n, r, i && i.reverse());
			},
			isGeneratorFunction: r,
			mark: e.m,
			awrap: function(e, t) {
				return new Rr(e, t);
			},
			AsyncIterator: Vr,
			async: function(e, t, n, i, o) {
				return (r(t) ? Hr : Ur)(a(e), t, n, i, o);
			},
			keys: Wr,
			values: Gr
		};
	})();
}
function qr(e, t, n, r, i, a, o) {
	try {
		var s = e[a](o), c = s.value;
	} catch (e) {
		n(e);
		return;
	}
	s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function Jr(e) {
	return function() {
		var t = this, n = arguments;
		return new Promise(function(r, i) {
			var a = e.apply(t, n);
			function o(e) {
				qr(a, r, i, o, s, "next", e);
			}
			function s(e) {
				qr(a, r, i, o, s, "throw", e);
			}
			o(void 0);
		});
	};
}
function Yr(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = S(e)) || t && e && typeof e.length == "number") {
			n && (e = n);
			var r = 0, i = function() {};
			return {
				s: i,
				n: function() {
					return r >= e.length ? { done: !0 } : {
						done: !1,
						value: e[r++]
					};
				},
				e: function(e) {
					throw e;
				},
				f: i
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var a, o = !0, s = !1;
	return {
		s: function() {
			n = n.call(e);
		},
		n: function() {
			var e = n.next();
			return o = e.done, e;
		},
		e: function(e) {
			s = !0, a = e;
		},
		f: function() {
			try {
				o || n.return == null || n.return();
			} finally {
				if (s) throw a;
			}
		}
	};
}
function Xr(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Zr(e, t) {
	if (e == null) return {};
	var n, r, i = Xr(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
var B = function(e) {
	return e.GROUP = "g", e.FRAGMENT = "fragment", e.CIRCLE = "circle", e.ELLIPSE = "ellipse", e.IMAGE = "image", e.RECT = "rect", e.LINE = "line", e.POLYLINE = "polyline", e.POLYGON = "polygon", e.TEXT = "text", e.PATH = "path", e.HTML = "html", e.MESH = "mesh", e;
}({}), Qr = function(e) {
	return e[e.ZERO = 0] = "ZERO", e[e.NEGATIVE_ONE = 1] = "NEGATIVE_ONE", e;
}({}), $r = function() {
	function e() {
		g(this, e), this.plugins = [];
	}
	return v(e, [{
		key: "addRenderingPlugin",
		value: function(e) {
			this.plugins.push(e), this.context.renderingPlugins.push(e);
		}
	}, {
		key: "removeAllRenderingPlugins",
		value: function() {
			var e = this;
			this.plugins.forEach(function(t) {
				var n = e.context.renderingPlugins.indexOf(t);
				n >= 0 && e.context.renderingPlugins.splice(n, 1);
			});
		}
	}]);
}(), ei = function() {
	function e(t) {
		g(this, e), this.clipSpaceNearZ = Qr.NEGATIVE_ONE, this.plugins = [], this.config = h({
			enableDirtyCheck: !0,
			enableCulling: !1,
			enableAutoRendering: !0,
			enableDirtyRectangleRendering: !0,
			enableDirtyRectangleRenderingDebug: !1,
			enableSizeAttenuation: !0,
			enableRenderingOptimization: !1
		}, t);
	}
	return v(e, [
		{
			key: "registerPlugin",
			value: function(e) {
				this.plugins.findIndex(function(t) {
					return t === e;
				}) === -1 && this.plugins.push(e);
			}
		},
		{
			key: "unregisterPlugin",
			value: function(e) {
				var t = this.plugins.findIndex(function(t) {
					return t === e;
				});
				t > -1 && this.plugins.splice(t, 1);
			}
		},
		{
			key: "getPlugins",
			value: function() {
				return this.plugins;
			}
		},
		{
			key: "getPlugin",
			value: function(e) {
				return this.plugins.find(function(t) {
					return t.name === e;
				});
			}
		},
		{
			key: "getConfig",
			value: function() {
				return this.config;
			}
		},
		{
			key: "setConfig",
			value: function(e) {
				Object.assign(this.config, e);
			}
		}
	]);
}(), ti = st, ni = at, ri = dt, ii = ut, ai = ft, oi = St, si = function() {
	function e() {
		g(this, e), this.center = [
			0,
			0,
			0
		], this.halfExtents = [
			0,
			0,
			0
		], this.min = [
			0,
			0,
			0
		], this.max = [
			0,
			0,
			0
		];
	}
	return v(e, [
		{
			key: "update",
			value: function(e, t) {
				ni(this.center, e), ni(this.halfExtents, t), oi(this.min, this.center, this.halfExtents), ti(this.max, this.center, this.halfExtents);
			}
		},
		{
			key: "setMinMax",
			value: function(e, t) {
				ti(this.center, t, e), ai(this.center, this.center, .5), oi(this.halfExtents, t, e), ai(this.halfExtents, this.halfExtents, .5), ni(this.min, e), ni(this.max, t);
			}
		},
		{
			key: "getMin",
			value: function() {
				return this.min;
			}
		},
		{
			key: "getMax",
			value: function() {
				return this.max;
			}
		},
		{
			key: "add",
			value: function(t) {
				if (!e.isEmpty(t)) {
					if (e.isEmpty(this)) {
						this.setMinMax(t.getMin(), t.getMax());
						return;
					}
					var n = this.center, r = n[0], i = n[1], a = n[2], o = this.halfExtents, s = o[0], c = o[1], l = o[2], u = r - s, d = r + s, f = i - c, p = i + c, m = a - l, h = a + l, g = t.center, _ = g[0], v = g[1], y = g[2], b = t.halfExtents, x = b[0], S = b[1], C = b[2], w = _ - x, T = _ + x, E = v - S, D = v + S, O = y - C, k = y + C;
					w < u && (u = w), T > d && (d = T), E < f && (f = E), D > p && (p = D), O < m && (m = O), k > h && (h = k), n[0] = (u + d) * .5, n[1] = (f + p) * .5, n[2] = (m + h) * .5, o[0] = (d - u) * .5, o[1] = (p - f) * .5, o[2] = (h - m) * .5, this.min[0] = u, this.min[1] = f, this.min[2] = m, this.max[0] = d, this.max[1] = p, this.max[2] = h;
				}
			}
		},
		{
			key: "setFromTransformedAABB",
			value: function(e, t) {
				var n = this.center, r = this.halfExtents, i = e.center, a = e.halfExtents, o = t[0], s = t[4], c = t[8], l = t[1], u = t[5], d = t[9], f = t[2], p = t[6], m = t[10], h = Math.abs(o), g = Math.abs(s), _ = Math.abs(c), v = Math.abs(l), y = Math.abs(u), b = Math.abs(d), x = Math.abs(f), S = Math.abs(p), C = Math.abs(m);
				n[0] = t[12] + o * i[0] + s * i[1] + c * i[2], n[1] = t[13] + l * i[0] + u * i[1] + d * i[2], n[2] = t[14] + f * i[0] + p * i[1] + m * i[2], r[0] = h * a[0] + g * a[1] + _ * a[2], r[1] = v * a[0] + y * a[1] + b * a[2], r[2] = x * a[0] + S * a[1] + C * a[2], oi(this.min, n, r), ti(this.max, n, r);
			}
		},
		{
			key: "intersects",
			value: function(e) {
				var t = this.getMax(), n = this.getMin(), r = e.getMax(), i = e.getMin();
				return n[0] <= r[0] && t[0] >= i[0] && n[1] <= r[1] && t[1] >= i[1] && n[2] <= r[2] && t[2] >= i[2];
			}
		},
		{
			key: "intersection",
			value: function(t) {
				if (!this.intersects(t)) return null;
				var n = new e(), r = ri([
					0,
					0,
					0
				], this.getMin(), t.getMin()), i = ii([
					0,
					0,
					0
				], this.getMax(), t.getMax());
				return n.setMinMax(r, i), n;
			}
		},
		{
			key: "getNegativeFarPoint",
			value: function(e) {
				return e.pnVertexFlag === 273 ? ni([
					0,
					0,
					0
				], this.min) : e.pnVertexFlag === 272 ? [
					this.min[0],
					this.min[1],
					this.max[2]
				] : e.pnVertexFlag === 257 ? [
					this.min[0],
					this.max[1],
					this.min[2]
				] : e.pnVertexFlag === 256 ? [
					this.min[0],
					this.max[1],
					this.max[2]
				] : e.pnVertexFlag === 17 ? [
					this.max[0],
					this.min[1],
					this.min[2]
				] : e.pnVertexFlag === 16 ? [
					this.max[0],
					this.min[1],
					this.max[2]
				] : e.pnVertexFlag === 1 ? [
					this.max[0],
					this.max[1],
					this.min[2]
				] : [
					this.max[0],
					this.max[1],
					this.max[2]
				];
			}
		},
		{
			key: "getPositiveFarPoint",
			value: function(e) {
				return e.pnVertexFlag === 273 ? ni([
					0,
					0,
					0
				], this.max) : e.pnVertexFlag === 272 ? [
					this.max[0],
					this.max[1],
					this.min[2]
				] : e.pnVertexFlag === 257 ? [
					this.max[0],
					this.min[1],
					this.max[2]
				] : e.pnVertexFlag === 256 ? [
					this.max[0],
					this.min[1],
					this.min[2]
				] : e.pnVertexFlag === 17 ? [
					this.min[0],
					this.max[1],
					this.max[2]
				] : e.pnVertexFlag === 16 ? [
					this.min[0],
					this.max[1],
					this.min[2]
				] : e.pnVertexFlag === 1 ? [
					this.min[0],
					this.min[1],
					this.max[2]
				] : [
					this.min[0],
					this.min[1],
					this.min[2]
				];
			}
		}
	], [{
		key: "isEmpty",
		value: function(e) {
			return !e || e.halfExtents[0] === 0 && e.halfExtents[1] === 0 && e.halfExtents[2] === 0;
		}
	}]);
}(), ci = function() {
	function e(t, n) {
		g(this, e), this.distance = t || 0, this.normal = n || it(0, 1, 0), this.updatePNVertexFlag();
	}
	return v(e, [
		{
			key: "updatePNVertexFlag",
			value: function() {
				this.pnVertexFlag = (Number(this.normal[0] >= 0) << 8) + (Number(this.normal[1] >= 0) << 4) + Number(this.normal[2] >= 0);
			}
		},
		{
			key: "distanceToPoint",
			value: function(e) {
				return ht(e, this.normal) - this.distance;
			}
		},
		{
			key: "normalize",
			value: function() {
				var e = 1 / wt(this.normal);
				ft(this.normal, this.normal, e), this.distance *= e;
			}
		},
		{
			key: "intersectsLine",
			value: function(e, t, n) {
				var r = this.distanceToPoint(e), i = r / (r - this.distanceToPoint(t)), a = i >= 0 && i <= 1;
				return a && n && _t(n, e, t, i), a;
			}
		}
	]);
}(), li = function(e) {
	return e[e.OUTSIDE = 4294967295] = "OUTSIDE", e[e.INSIDE = 0] = "INSIDE", e[e.INDETERMINATE = 2147483647] = "INDETERMINATE", e;
}({}), ui = function() {
	function e(t) {
		if (g(this, e), this.planes = [], t) this.planes = t;
		else for (var n = 0; n < 6; n++) this.planes.push(new ci());
	}
	return v(e, [{
		key: "extractFromVPMatrix",
		value: function(e) {
			var t = P(e, 16), n = t[0], r = t[1], i = t[2], a = t[3], o = t[4], s = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], p = t[11], m = t[12], h = t[13], g = t[14], _ = t[15];
			ot(this.planes[0].normal, a - n, l - o, p - u), this.planes[0].distance = _ - m, ot(this.planes[1].normal, a + n, l + o, p + u), this.planes[1].distance = _ + m, ot(this.planes[2].normal, a + r, l + s, p + d), this.planes[2].distance = _ + h, ot(this.planes[3].normal, a - r, l - s, p - d), this.planes[3].distance = _ - h, ot(this.planes[4].normal, a - i, l - c, p - f), this.planes[4].distance = _ - g, ot(this.planes[5].normal, a + i, l + c, p + f), this.planes[5].distance = _ + g, this.planes.forEach(function(e) {
				e.normalize(), e.updatePNVertexFlag();
			});
		}
	}]);
}(), di = function() {
	function e() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
		g(this, e), this.x = 0, this.y = 0, this.x = t, this.y = n;
	}
	return v(e, [{
		key: "clone",
		value: function() {
			return new e(this.x, this.y);
		}
	}, {
		key: "copyFrom",
		value: function(e) {
			this.x = e.x, this.y = e.y;
		}
	}]);
}(), fi = function() {
	function e(t, n, r, i) {
		g(this, e), this.x = t, this.y = n, this.width = r, this.height = i, this.left = t, this.right = t + r, this.top = n, this.bottom = n + i;
	}
	return v(e, [{
		key: "toJSON",
		value: function() {}
	}], [{
		key: "fromRect",
		value: function(t) {
			return new e(t.x, t.y, t.width, t.height);
		}
	}, {
		key: "applyTransform",
		value: function(t, n) {
			var r = Et(t.x, t.y, 0, 1), i = Et(t.x + t.width, t.y, 0, 1), a = Et(t.x, t.y + t.height, 0, 1), o = Et(t.x + t.width, t.y + t.height, 0, 1), s = Tt(), c = Tt(), l = Tt(), u = Tt();
			At(s, r, n), At(c, i, n), At(l, a, n), At(u, o, n);
			var d = Math.min(s[0], c[0], l[0], u[0]), f = Math.min(s[1], c[1], l[1], u[1]), p = Math.max(s[0], c[0], l[0], u[0]), m = Math.max(s[1], c[1], l[1], u[1]);
			return e.fromRect({
				x: d,
				y: f,
				width: p - d,
				height: m - f
			});
		}
	}]);
}(), pi = "Method not implemented.", mi = "Use document.documentElement instead.", hi = "Cannot append a destroyed element.";
function gi(e) {
	return e === void 0 ? 0 : e > 360 || e < -360 ? e % 360 : e;
}
var _i = R();
function vi(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
	return Array.isArray(e) && e.length === 3 ? r ? nt(e) : at(_i, e) : an(e) ? r ? it(e, t, n) : ot(_i, e, t, n) : r ? it(e[0], e[1] || t, e[2] || n) : ot(_i, e[0], e[1] || t, e[2] || n);
}
var yi = Math.PI / 180;
function V(e) {
	return e * yi;
}
var bi = 180 / Math.PI;
function xi(e) {
	return e * bi;
}
function Si(e) {
	return 360 * e;
}
var Ci = Math.PI / 2;
function wi(e, t) {
	var n = t[0], r = t[1], i = t[2], a = t[3], o = n * n, s = r * r, c = i * i, l = a * a, u = o + s + c + l, d = n * a - r * i;
	return d > .499995 * u ? (e[0] = Ci, e[1] = 2 * Math.atan2(r, n), e[2] = 0) : d < -.499995 * u ? (e[0] = -Ci, e[1] = 2 * Math.atan2(r, n), e[2] = 0) : (e[0] = Math.asin(2 * (n * i - a * r)), e[1] = Math.atan2(2 * (n * a + r * i), 1 - 2 * (c + l)), e[2] = Math.atan2(2 * (n * r + i * a), 1 - 2 * (s + c))), e;
}
function Ti(e, t) {
	var n, r, i = P(Ae(R(), t), 3), a = i[0], o = i[1], s = i[2], c = Math.asin(-t[2] / a);
	return c < Ci ? c > -Ci ? (n = Math.atan2(t[6] / o, t[10] / s), r = Math.atan2(t[1] / a, t[0] / a)) : (r = 0, n = -Math.atan2(t[4] / o, t[5] / o)) : (r = 0, n = Math.atan2(t[4] / o, t[5] / o)), e[0] = n, e[1] = c, e[2] = r, e;
}
function Ei(e, t) {
	return t.length === 16 ? Ti(e, t) : wi(e, t);
}
function Di(e, t, n, r, i) {
	var a = Math.cos(e), o = Math.sin(e);
	return ie(r * a, i * o, 0, -r * o, i * a, 0, t, n, 1);
}
function Oi(e, t, n, r, i, a, o) {
	var s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : !1, c = 2 * a, l = n - t, u = r - i, d = c / l, f = c / u, p = (n + t) / l, m = (r + i) / u, h, g, _ = o - a, v = o * a;
	return s ? (h = -o / _, g = -v / _) : (h = -(o + a) / _, g = -2 * v / _), e[0] = d, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = f, e[6] = 0, e[7] = 0, e[8] = p, e[9] = m, e[10] = h, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = g, e[15] = 0, e;
}
function ki(e) {
	var t = e[0], n = e[1], r = e[3], i = e[4], a = Math.sqrt(t * t + n * n), o = Math.sqrt(r * r + i * i);
	if (t * i - n * r < 0 && (t < i ? a = -a : o = -o), a) {
		var s = 1 / a;
		t *= s, n *= s;
	}
	if (o) {
		var c = 1 / o;
		r *= c, i *= c;
	}
	var l = xi(Math.atan2(n, t));
	return [
		e[6],
		e[7],
		a,
		o,
		l
	];
}
var Ai = I(), ji = I(), Mi = Tt(), H = [
	R(),
	R(),
	R()
], Ni = R();
function Pi(e, t, n, r, i, a) {
	if (!Fi(Ai, e) || (se(ji, Ai), ji[3] = 0, ji[7] = 0, ji[11] = 0, ji[15] = 1, Math.abs(pe(ji)) < 1e-8)) return !1;
	var o = Ai[3], s = Ai[7], c = Ai[11], l = Ai[12], u = Ai[13], d = Ai[14], f = Ai[15];
	if (o !== 0 || s !== 0 || c !== 0) {
		if (Mi[0] = o, Mi[1] = s, Mi[2] = c, Mi[3] = f, !de(ji, ji)) return !1;
		ue(ji, ji), At(i, Mi, ji);
	} else i[0] = i[1] = i[2] = 0, i[3] = 1;
	if (t[0] = l, t[1] = u, t[2] = d, Ii(H, Ai), n[0] = rt(H[0]), mt(H[0], H[0]), r[0] = ht(H[0], H[1]), Li(H[1], H[1], H[0], 1, -r[0]), n[1] = rt(H[1]), mt(H[1], H[1]), r[0] /= n[1], r[1] = ht(H[0], H[2]), Li(H[2], H[2], H[0], 1, -r[1]), r[2] = ht(H[1], H[2]), Li(H[2], H[2], H[1], 1, -r[2]), n[2] = rt(H[2]), mt(H[2], H[2]), r[1] /= n[2], r[2] /= n[2], gt(Ni, H[1], H[2]), ht(H[0], Ni) < 0) for (var p = 0; p < 3; p++) n[p] *= -1, H[p][0] *= -1, H[p][1] *= -1, H[p][2] *= -1;
	return a[0] = .5 * Math.sqrt(Math.max(1 + H[0][0] - H[1][1] - H[2][2], 0)), a[1] = .5 * Math.sqrt(Math.max(1 - H[0][0] + H[1][1] - H[2][2], 0)), a[2] = .5 * Math.sqrt(Math.max(1 - H[0][0] - H[1][1] + H[2][2], 0)), a[3] = .5 * Math.sqrt(Math.max(1 + H[0][0] + H[1][1] + H[2][2], 0)), H[2][1] > H[1][2] && (a[0] = -a[0]), H[0][2] > H[2][0] && (a[1] = -a[1]), H[1][0] > H[0][1] && (a[2] = -a[2]), !0;
}
function Fi(e, t) {
	var n = t[15];
	if (n === 0) return !1;
	for (var r = 1 / n, i = 0; i < 16; i++) e[i] = t[i] * r;
	return !0;
}
function Ii(e, t) {
	e[0][0] = t[0], e[0][1] = t[1], e[0][2] = t[2], e[1][0] = t[4], e[1][1] = t[5], e[1][2] = t[6], e[2][0] = t[8], e[2][1] = t[9], e[2][2] = t[10];
}
function Li(e, t, n, r, i) {
	e[0] = t[0] * r + n[0] * i, e[1] = t[1] * r + n[1] * i, e[2] = t[2] * r + n[2] * i;
}
var Ri = function(e) {
	return e[e.ORBITING = 0] = "ORBITING", e[e.EXPLORING = 1] = "EXPLORING", e[e.TRACKING = 2] = "TRACKING", e;
}({}), zi = function(e) {
	return e[e.DEFAULT = 0] = "DEFAULT", e[e.ROTATIONAL = 1] = "ROTATIONAL", e[e.TRANSLATIONAL = 2] = "TRANSLATIONAL", e[e.CINEMATIC = 3] = "CINEMATIC", e;
}({}), Bi = function(e) {
	return e[e.ORTHOGRAPHIC = 0] = "ORTHOGRAPHIC", e[e.PERSPECTIVE = 1] = "PERSPECTIVE", e;
}({}), Vi = { UPDATED: "updated" }, Hi = 2e-4, Ui = function() {
	function e() {
		g(this, e), this.clipSpaceNearZ = Qr.NEGATIVE_ONE, this.eventEmitter = new te(), this.matrix = I(), this.right = it(1, 0, 0), this.up = it(0, 1, 0), this.forward = it(0, 0, 1), this.position = it(0, 0, 1), this.focalPoint = it(0, 0, 0), this.distanceVector = it(0, 0, -1), this.distance = 1, this.azimuth = 0, this.elevation = 0, this.roll = 0, this.relAzimuth = 0, this.relElevation = 0, this.relRoll = 0, this.dollyingStep = 0, this.maxDistance = Infinity, this.minDistance = -Infinity, this.zoom = 1, this.rotateWorld = !1, this.fov = 30, this.near = .1, this.far = 1e3, this.aspect = 1, this.projectionMatrix = I(), this.projectionMatrixInverse = I(), this.jitteredProjectionMatrix = void 0, this.enableUpdate = !0, this.type = Ri.EXPLORING, this.trackingMode = zi.DEFAULT, this.projectionMode = Bi.PERSPECTIVE, this.frustum = new ui(), this.orthoMatrix = I();
	}
	return v(e, [
		{
			key: "isOrtho",
			value: function() {
				return this.projectionMode === Bi.ORTHOGRAPHIC;
			}
		},
		{
			key: "getProjectionMode",
			value: function() {
				return this.projectionMode;
			}
		},
		{
			key: "getPerspective",
			value: function() {
				return this.jitteredProjectionMatrix || this.projectionMatrix;
			}
		},
		{
			key: "getPerspectiveInverse",
			value: function() {
				return this.projectionMatrixInverse;
			}
		},
		{
			key: "getFrustum",
			value: function() {
				return this.frustum;
			}
		},
		{
			key: "getPosition",
			value: function() {
				return this.position;
			}
		},
		{
			key: "getFocalPoint",
			value: function() {
				return this.focalPoint;
			}
		},
		{
			key: "getDollyingStep",
			value: function() {
				return this.dollyingStep;
			}
		},
		{
			key: "getNear",
			value: function() {
				return this.near;
			}
		},
		{
			key: "getFar",
			value: function() {
				return this.far;
			}
		},
		{
			key: "getZoom",
			value: function() {
				return this.zoom;
			}
		},
		{
			key: "getOrthoMatrix",
			value: function() {
				return this.orthoMatrix;
			}
		},
		{
			key: "getView",
			value: function() {
				return this.view;
			}
		},
		{
			key: "setEnableUpdate",
			value: function(e) {
				this.enableUpdate = e;
			}
		},
		{
			key: "setType",
			value: function(e, t) {
				return this.type = e, this.type === Ri.EXPLORING ? this.setWorldRotation(!0) : this.setWorldRotation(!1), this._getAngles(), this.type === Ri.TRACKING && t !== void 0 && this.setTrackingMode(t), this;
			}
		},
		{
			key: "setProjectionMode",
			value: function(e) {
				return this.projectionMode = e, this;
			}
		},
		{
			key: "setTrackingMode",
			value: function(e) {
				if (this.type !== Ri.TRACKING) throw Error("Impossible to set a tracking mode if the camera is not of tracking type");
				return this.trackingMode = e, this;
			}
		},
		{
			key: "setWorldRotation",
			value: function(e) {
				return this.rotateWorld = e, this._getAngles(), this;
			}
		},
		{
			key: "getViewTransform",
			value: function() {
				return de(I(), this.matrix);
			}
		},
		{
			key: "getWorldTransform",
			value: function() {
				return this.matrix;
			}
		},
		{
			key: "jitterProjectionMatrix",
			value: function(e, t) {
				var n = xe(I(), [
					e,
					t,
					0
				]);
				this.jitteredProjectionMatrix = me(I(), n, this.projectionMatrix);
			}
		},
		{
			key: "clearJitterProjectionMatrix",
			value: function() {
				this.jitteredProjectionMatrix = void 0;
			}
		},
		{
			key: "setMatrix",
			value: function(e) {
				return this.matrix = e, this._update(), this;
			}
		},
		{
			key: "setProjectionMatrix",
			value: function(e) {
				this.projectionMatrix = e;
			}
		},
		{
			key: "setFov",
			value: function(e) {
				return this.setPerspective(this.near, this.far, e, this.aspect), this;
			}
		},
		{
			key: "setAspect",
			value: function(e) {
				return this.setPerspective(this.near, this.far, this.fov, e), this;
			}
		},
		{
			key: "setNear",
			value: function(e) {
				return this.projectionMode === Bi.PERSPECTIVE ? this.setPerspective(e, this.far, this.fov, this.aspect) : this.setOrthographic(this.left, this.rright, this.top, this.bottom, e, this.far), this;
			}
		},
		{
			key: "setFar",
			value: function(e) {
				return this.projectionMode === Bi.PERSPECTIVE ? this.setPerspective(this.near, e, this.fov, this.aspect) : this.setOrthographic(this.left, this.rright, this.top, this.bottom, this.near, e), this;
			}
		},
		{
			key: "setViewOffset",
			value: function(e, t, n, r, i, a) {
				return this.aspect = e / t, this.view === void 0 && (this.view = {
					enabled: !0,
					fullWidth: 1,
					fullHeight: 1,
					offsetX: 0,
					offsetY: 0,
					width: 1,
					height: 1
				}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.projectionMode === Bi.PERSPECTIVE ? this.setPerspective(this.near, this.far, this.fov, this.aspect) : this.setOrthographic(this.left, this.rright, this.top, this.bottom, this.near, this.far), this;
			}
		},
		{
			key: "clearViewOffset",
			value: function() {
				return this.view !== void 0 && (this.view.enabled = !1), this.projectionMode === Bi.PERSPECTIVE ? this.setPerspective(this.near, this.far, this.fov, this.aspect) : this.setOrthographic(this.left, this.rright, this.top, this.bottom, this.near, this.far), this;
			}
		},
		{
			key: "setZoom",
			value: function(e) {
				return this.zoom = e, this.projectionMode === Bi.ORTHOGRAPHIC ? this.setOrthographic(this.left, this.rright, this.top, this.bottom, this.near, this.far) : this.projectionMode === Bi.PERSPECTIVE && this.setPerspective(this.near, this.far, this.fov, this.aspect), this;
			}
		},
		{
			key: "setZoomByViewportPoint",
			value: function(e, t) {
				var n = this.canvas.viewport2Canvas({
					x: t[0],
					y: t[1]
				}), r = n.x, i = n.y, a = this.roll;
				this.rotate(0, 0, -a), this.setPosition(r, i), this.setFocalPoint(r, i), this.setZoom(e), this.rotate(0, 0, a);
				var o = this.canvas.viewport2Canvas({
					x: t[0],
					y: t[1]
				}), s = o.x, c = o.y, l = it(s - r, c - i, 0), u = ht(l, this.right) / rt(this.right), d = ht(l, this.up) / rt(this.up), f = P(this.getPosition(), 2), p = f[0], m = f[1], h = P(this.getFocalPoint(), 2), g = h[0], _ = h[1];
				return this.setPosition(p - u, m - d), this.setFocalPoint(g - u, _ - d), this;
			}
		},
		{
			key: "setPerspective",
			value: function(e, t, n, r) {
				var i;
				this.projectionMode = Bi.PERSPECTIVE, this.fov = n, this.near = e, this.far = t, this.aspect = r;
				var a = this.near * Math.tan(V(.5 * this.fov)) / this.zoom, o = 2 * a, s = this.aspect * o, c = -.5 * s;
				if ((i = this.view) != null && i.enabled) {
					var l = this.view.fullWidth, u = this.view.fullHeight;
					c += this.view.offsetX * s / l, a -= this.view.offsetY * o / u, s *= this.view.width / l, o *= this.view.height / u;
				}
				return Oi(this.projectionMatrix, c, c + s, a - o, a, e, this.far, this.clipSpaceNearZ === Qr.ZERO), de(this.projectionMatrixInverse, this.projectionMatrix), this.triggerUpdate(), this;
			}
		},
		{
			key: "setOrthographic",
			value: function(e, t, n, r, i, a) {
				var o;
				this.projectionMode = Bi.ORTHOGRAPHIC, this.rright = t, this.left = e, this.top = n, this.bottom = r, this.near = i, this.far = a;
				var s = (this.rright - this.left) / (2 * this.zoom), c = (this.top - this.bottom) / (2 * this.zoom), l = (this.rright + this.left) / 2, u = (this.top + this.bottom) / 2, d = l - s, f = l + s, p = u + c, m = u - c;
				if ((o = this.view) != null && o.enabled) {
					var h = (this.rright - this.left) / this.view.fullWidth / this.zoom, g = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
					d += h * this.view.offsetX, f = d + h * this.view.width, p -= g * this.view.offsetY, m = p - g * this.view.height;
				}
				return this.clipSpaceNearZ === Qr.NEGATIVE_ONE ? He(this.projectionMatrix, d, f, p, m, i, a) : Ue(this.projectionMatrix, d, f, p, m, i, a), de(this.projectionMatrixInverse, this.projectionMatrix), this._getOrthoMatrix(), this.triggerUpdate(), this;
			}
		},
		{
			key: "setPosition",
			value: function(e) {
				var t = vi(e, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.position[1], arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.position[2]);
				return this._setPosition(t), this.setFocalPoint(this.focalPoint), this.triggerUpdate(), this;
			}
		},
		{
			key: "setFocalPoint",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.focalPoint[1], n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.focalPoint[2], r = it(0, 1, 0);
				if (this.focalPoint = vi(e, t, n), this.trackingMode === zi.CINEMATIC) {
					var i = ct(R(), this.focalPoint, this.position);
					e = i[0], t = i[1], n = i[2];
					var a = rt(i), o = xi(Math.asin(t / a)), s = 90 + xi(Math.atan2(n, e)), c = I();
					ye(c, c, V(s)), ve(c, c, V(o)), r = vt(R(), [
						0,
						1,
						0
					], c);
				}
				return de(this.matrix, We(I(), this.position, this.focalPoint, r)), this._getAxes(), this._getDistance(), this._getAngles(), this.triggerUpdate(), this;
			}
		},
		{
			key: "getDistance",
			value: function() {
				return this.distance;
			}
		},
		{
			key: "getDistanceVector",
			value: function() {
				return this.distanceVector;
			}
		},
		{
			key: "setDistance",
			value: function(e) {
				if (this.distance === e || e < 0) return this;
				this.distance = e, this.distance < Hi && (this.distance = Hi), this.dollyingStep = this.distance / 100;
				var t = R();
				e = this.distance;
				var n = this.forward, r = this.focalPoint;
				return t[0] = e * n[0] + r[0], t[1] = e * n[1] + r[1], t[2] = e * n[2] + r[2], this._setPosition(t), this.triggerUpdate(), this;
			}
		},
		{
			key: "setMaxDistance",
			value: function(e) {
				return this.maxDistance = e, this;
			}
		},
		{
			key: "setMinDistance",
			value: function(e) {
				return this.minDistance = e, this;
			}
		},
		{
			key: "setAzimuth",
			value: function(e) {
				return this.azimuth = gi(e), this.computeMatrix(), this._getAxes(), this.type === Ri.ORBITING || this.type === Ri.EXPLORING ? this._getPosition() : this.type === Ri.TRACKING && this._getFocalPoint(), this.triggerUpdate(), this;
			}
		},
		{
			key: "getAzimuth",
			value: function() {
				return this.azimuth;
			}
		},
		{
			key: "setElevation",
			value: function(e) {
				return this.elevation = gi(e), this.computeMatrix(), this._getAxes(), this.type === Ri.ORBITING || this.type === Ri.EXPLORING ? this._getPosition() : this.type === Ri.TRACKING && this._getFocalPoint(), this.triggerUpdate(), this;
			}
		},
		{
			key: "getElevation",
			value: function() {
				return this.elevation;
			}
		},
		{
			key: "setRoll",
			value: function(e) {
				return this.roll = gi(e), this.computeMatrix(), this._getAxes(), this.type === Ri.ORBITING || this.type === Ri.EXPLORING ? this._getPosition() : this.type === Ri.TRACKING && this._getFocalPoint(), this.triggerUpdate(), this;
			}
		},
		{
			key: "getRoll",
			value: function() {
				return this.roll;
			}
		},
		{
			key: "_update",
			value: function() {
				this._getAxes(), this._getPosition(), this._getDistance(), this._getAngles(), this._getOrthoMatrix(), this.triggerUpdate();
			}
		},
		{
			key: "computeMatrix",
			value: function() {
				var e = Mt(jt(), [
					0,
					0,
					1
				], V(this.roll));
				L(this.matrix);
				var t = Mt(jt(), [
					1,
					0,
					0
				], V((this.rotateWorld && this.type !== Ri.TRACKING || this.type === Ri.TRACKING ? 1 : -1) * this.elevation)), n = Mt(jt(), [
					0,
					1,
					0
				], V((this.rotateWorld && this.type !== Ri.TRACKING || this.type === Ri.TRACKING ? 1 : -1) * this.azimuth)), r = Nt(jt(), n, t);
				r = Nt(jt(), r, e);
				var i = Fe(I(), r);
				this.type === Ri.ORBITING || this.type === Ri.EXPLORING ? (he(this.matrix, this.matrix, this.focalPoint), me(this.matrix, this.matrix, i), he(this.matrix, this.matrix, [
					0,
					0,
					this.distance
				])) : this.type === Ri.TRACKING && (he(this.matrix, this.matrix, this.position), me(this.matrix, this.matrix, i));
			}
		},
		{
			key: "_setPosition",
			value: function(e, t, n) {
				this.position = vi(e, t, n);
				var r = this.matrix;
				r[12] = this.position[0], r[13] = this.position[1], r[14] = this.position[2], r[15] = 1, this._getOrthoMatrix();
			}
		},
		{
			key: "_getAxes",
			value: function() {
				at(this.right, vi(At(Tt(), [
					1,
					0,
					0,
					0
				], this.matrix))), at(this.up, vi(At(Tt(), [
					0,
					1,
					0,
					0
				], this.matrix))), at(this.forward, vi(At(Tt(), [
					0,
					0,
					1,
					0
				], this.matrix))), mt(this.right, this.right), mt(this.up, this.up), mt(this.forward, this.forward);
			}
		},
		{
			key: "_getAngles",
			value: function() {
				var e = this.distanceVector[0], t = this.distanceVector[1], n = this.distanceVector[2], r = rt(this.distanceVector);
				if (r === 0) {
					this.elevation = 0, this.azimuth = 0;
					return;
				}
				this.type === Ri.TRACKING || this.rotateWorld ? (this.elevation = xi(Math.asin(t / r)), this.azimuth = xi(Math.atan2(-e, -n))) : (this.elevation = -xi(Math.asin(t / r)), this.azimuth = -xi(Math.atan2(-e, -n)));
			}
		},
		{
			key: "_getPosition",
			value: function() {
				at(this.position, vi(At(Tt(), [
					0,
					0,
					0,
					1
				], this.matrix))), this._getDistance();
			}
		},
		{
			key: "_getFocalPoint",
			value: function() {
				yt(this.distanceVector, [
					0,
					0,
					-this.distance
				], re(ne(), this.matrix)), st(this.focalPoint, this.position, this.distanceVector), this._getDistance();
			}
		},
		{
			key: "_getDistance",
			value: function() {
				this.distanceVector = ct(R(), this.focalPoint, this.position), this.distance = rt(this.distanceVector), this.dollyingStep = this.distance / 100;
			}
		},
		{
			key: "_getOrthoMatrix",
			value: function() {
				if (this.projectionMode === Bi.ORTHOGRAPHIC) {
					var e = this.position, t = Mt(jt(), [
						0,
						0,
						1
					], -this.roll * Math.PI / 180);
					Pe(this.orthoMatrix, t, it((this.rright - this.left) / 2 - e[0], (this.top - this.bottom) / 2 - e[1], 0), it(this.zoom, this.zoom, 1), e);
				}
			}
		},
		{
			key: "triggerUpdate",
			value: function() {
				if (this.enableUpdate) {
					var e = this.getViewTransform(), t = me(I(), this.getPerspective(), e);
					this.getFrustum().extractFromVPMatrix(t), this.eventEmitter.emit(Vi.UPDATED);
				}
			}
		},
		{
			key: "rotate",
			value: function(e, t, n) {
				throw Error(pi);
			}
		},
		{
			key: "pan",
			value: function(e, t) {
				throw Error(pi);
			}
		},
		{
			key: "dolly",
			value: function(e) {
				throw Error(pi);
			}
		},
		{
			key: "createLandmark",
			value: function(e, t) {
				throw Error(pi);
			}
		},
		{
			key: "gotoLandmark",
			value: function(e, t) {
				throw Error(pi);
			}
		},
		{
			key: "cancelLandmarkAnimation",
			value: function() {
				throw Error(pi);
			}
		}
	]);
}(), Wi = function(e) {
	return e[e.Standard = 0] = "Standard", e;
}({}), Gi = function(e) {
	return e[e.ADDED = 0] = "ADDED", e[e.REMOVED = 1] = "REMOVED", e[e.Z_INDEX_CHANGED = 2] = "Z_INDEX_CHANGED", e;
}({}), Ki = R(), qi = I(), Ji = jt();
function Yi(e) {
	if (e.localDirtyFlag) {
		if (e.localSkew[0] !== 0 || e.localSkew[1] !== 0) {
			Pe(e.localTransform, e.localRotation, e.localPosition, it(1, 1, 1), e.origin), (e.localSkew[0] !== 0 || e.localSkew[1] !== 0) && (L(qi), qi[4] = Math.tan(e.localSkew[0]), qi[1] = Math.tan(e.localSkew[1]), me(e.localTransform, e.localTransform, qi));
			var t = Pe(qi, Bt(Ji, 0, 0, 0, 1), ot(Ki, 1, 1, 1), e.localScale, e.origin);
			me(e.localTransform, e.localTransform, t);
		} else {
			var n = e.localTransform, r = e.localPosition, i = e.localRotation, a = e.localScale, o = e.origin, s = r[0] !== 0 || r[1] !== 0 || r[2] !== 0, c = i[3] !== 1 || i[0] !== 0 || i[1] !== 0 || i[2] !== 0, l = a[0] !== 1 || a[1] !== 1 || a[2] !== 1, u = o[0] !== 0 || o[1] !== 0 || o[2] !== 0;
			!c && !l && !u ? s ? xe(n, r) : L(n) : Pe(n, i, r, a, o);
		}
		e.localDirtyFlag = !1;
	}
}
function Xi(e, t) {
	e.dirtyFlag &&= (t ? me(e.worldTransform, t.worldTransform, e.localTransform) : se(e.worldTransform, e.localTransform), !1);
}
var Zi = {
	absolutePath: [],
	hasArc: !1,
	segments: [],
	polygons: [],
	polylines: [],
	curve: null,
	totalLength: 0,
	rect: new fi(0, 0, 0, 0)
}, U = function(e) {
	return e.COORDINATE = "<coordinate>", e.COLOR = "<color>", e.PAINT = "<paint>", e.NUMBER = "<number>", e.ANGLE = "<angle>", e.OPACITY_VALUE = "<opacity-value>", e.SHADOW_BLUR = "<shadow-blur>", e.LENGTH = "<length>", e.PERCENTAGE = "<percentage>", e.LENGTH_PERCENTAGE = "<length> | <percentage>", e.LENGTH_PERCENTAGE_12 = "[<length> | <percentage>]{1,2}", e.LENGTH_PERCENTAGE_14 = "[<length> | <percentage>]{1,4}", e.LIST_OF_POINTS = "<list-of-points>", e.PATH = "<path>", e.FILTER = "<filter>", e.Z_INDEX = "<z-index>", e.OFFSET_DISTANCE = "<offset-distance>", e.DEFINED_PATH = "<defined-path>", e.MARKER = "<marker>", e.TRANSFORM = "<transform>", e.TRANSFORM_ORIGIN = "<transform-origin>", e.TEXT = "<text>", e.TEXT_TRANSFORM = "<text-transform>", e;
}({});
function Qi(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function $i(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
function ea() {}
var ta = .7, na = 1 / ta, ra = "\\s*([+-]?\\d+)\\s*", ia = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", aa = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", oa = /^#([0-9a-f]{3,8})$/, sa = RegExp(`^rgb\\(${ra},${ra},${ra}\\)$`), ca = RegExp(`^rgb\\(${aa},${aa},${aa}\\)$`), la = RegExp(`^rgba\\(${ra},${ra},${ra},${ia}\\)$`), ua = RegExp(`^rgba\\(${aa},${aa},${aa},${ia}\\)$`), da = RegExp(`^hsl\\(${ia},${aa},${aa}\\)$`), fa = RegExp(`^hsla\\(${ia},${aa},${aa},${ia}\\)$`), pa = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
Qi(ea, va, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: ma,
	formatHex: ma,
	formatHex8: ha,
	formatHsl: ga,
	formatRgb: _a,
	toString: _a
});
function ma() {
	return this.rgb().formatHex();
}
function ha() {
	return this.rgb().formatHex8();
}
function ga() {
	return ja(this).formatHsl();
}
function _a() {
	return this.rgb().formatRgb();
}
function va(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = oa.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ya(t) : n === 3 ? new Ca(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ba(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ba(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = sa.exec(e)) ? new Ca(t[1], t[2], t[3], 1) : (t = ca.exec(e)) ? new Ca(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = la.exec(e)) ? ba(t[1], t[2], t[3], t[4]) : (t = ua.exec(e)) ? ba(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = da.exec(e)) ? Aa(t[1], t[2] / 100, t[3] / 100, 1) : (t = fa.exec(e)) ? Aa(t[1], t[2] / 100, t[3] / 100, t[4]) : pa.hasOwnProperty(e) ? ya(pa[e]) : e === "transparent" ? new Ca(NaN, NaN, NaN, 0) : null;
}
function ya(e) {
	return new Ca(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ba(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new Ca(e, t, n, r);
}
function xa(e) {
	return e instanceof ea || (e = va(e)), e ? (e = e.rgb(), new Ca(e.r, e.g, e.b, e.opacity)) : new Ca();
}
function Sa(e, t, n, r) {
	return arguments.length === 1 ? xa(e) : new Ca(e, t, n, r ?? 1);
}
function Ca(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Qi(Ca, Sa, $i(ea, {
	brighter(e) {
		return e = e == null ? na : na ** +e, new Ca(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? ta : ta ** +e, new Ca(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new Ca(Oa(this.r), Oa(this.g), Oa(this.b), Da(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: wa,
	formatHex: wa,
	formatHex8: Ta,
	formatRgb: Ea,
	toString: Ea
}));
function wa() {
	return `#${ka(this.r)}${ka(this.g)}${ka(this.b)}`;
}
function Ta() {
	return `#${ka(this.r)}${ka(this.g)}${ka(this.b)}${ka((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ea() {
	let e = Da(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Oa(this.r)}, ${Oa(this.g)}, ${Oa(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Da(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Oa(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ka(e) {
	return e = Oa(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Aa(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new W(e, t, n, r);
}
function ja(e) {
	if (e instanceof W) return new W(e.h, e.s, e.l, e.opacity);
	if (e instanceof ea || (e = va(e)), !e) return new W();
	if (e instanceof W) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new W(o, s, c, e.opacity);
}
function Ma(e, t, n, r) {
	return arguments.length === 1 ? ja(e) : new W(e, t, n, r ?? 1);
}
function W(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Qi(W, Ma, $i(ea, {
	brighter(e) {
		return e = e == null ? na : na ** +e, new W(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? ta : ta ** +e, new W(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new Ca(Fa(e >= 240 ? e - 240 : e + 120, i, r), Fa(e, i, r), Fa(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new W(Na(this.h), Pa(this.s), Pa(this.l), Da(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = Da(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Na(this.h)}, ${Pa(this.s) * 100}%, ${Pa(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Na(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Pa(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Fa(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
function G(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError("Expected a function");
	var n = function() {
		var r = [...arguments], i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (G.Cache || Map)(), G.cacheList.push(n.cache), n;
}
G.Cache = Map, G.cacheList = [], G.clearCache = function() {
	G.cacheList.forEach(function(e) {
		return e.clear();
	});
};
var K = function(e) {
	return e[e.kUnknown = 0] = "kUnknown", e[e.kNumber = 1] = "kNumber", e[e.kPercentage = 2] = "kPercentage", e[e.kEms = 3] = "kEms", e[e.kPixels = 4] = "kPixels", e[e.kRems = 5] = "kRems", e[e.kDegrees = 6] = "kDegrees", e[e.kRadians = 7] = "kRadians", e[e.kGradians = 8] = "kGradians", e[e.kTurns = 9] = "kTurns", e[e.kMilliseconds = 10] = "kMilliseconds", e[e.kSeconds = 11] = "kSeconds", e[e.kInteger = 12] = "kInteger", e;
}({}), Ia = function(e) {
	return e[e.kUNumber = 0] = "kUNumber", e[e.kUPercent = 1] = "kUPercent", e[e.kULength = 2] = "kULength", e[e.kUAngle = 3] = "kUAngle", e[e.kUTime = 4] = "kUTime", e[e.kUOther = 5] = "kUOther", e;
}({}), La = function(e) {
	return e[e.kYes = 0] = "kYes", e[e.kNo = 1] = "kNo", e;
}({}), Ra = function(e) {
	return e[e.kYes = 0] = "kYes", e[e.kNo = 1] = "kNo", e;
}({}), za = [
	{
		name: "em",
		unit_type: K.kEms
	},
	{
		name: "px",
		unit_type: K.kPixels
	},
	{
		name: "deg",
		unit_type: K.kDegrees
	},
	{
		name: "rad",
		unit_type: K.kRadians
	},
	{
		name: "grad",
		unit_type: K.kGradians
	},
	{
		name: "ms",
		unit_type: K.kMilliseconds
	},
	{
		name: "s",
		unit_type: K.kSeconds
	},
	{
		name: "rem",
		unit_type: K.kRems
	},
	{
		name: "turn",
		unit_type: K.kTurns
	}
], Ba = function(e) {
	return e[e.kUnknownType = 0] = "kUnknownType", e[e.kUnparsedType = 1] = "kUnparsedType", e[e.kKeywordType = 2] = "kKeywordType", e[e.kUnitType = 3] = "kUnitType", e[e.kSumType = 4] = "kSumType", e[e.kProductType = 5] = "kProductType", e[e.kNegateType = 6] = "kNegateType", e[e.kInvertType = 7] = "kInvertType", e[e.kMinType = 8] = "kMinType", e[e.kMaxType = 9] = "kMaxType", e[e.kClampType = 10] = "kClampType", e[e.kTransformType = 11] = "kTransformType", e[e.kPositionType = 12] = "kPositionType", e[e.kURLImageType = 13] = "kURLImageType", e[e.kColorType = 14] = "kColorType", e[e.kUnsupportedColorType = 15] = "kUnsupportedColorType", e;
}({}), Va = function(e) {
	return za.find(function(t) {
		return t.name === e;
	}).unit_type;
}, Ha = function(e) {
	return e ? e === "number" ? K.kNumber : e === "percent" || e === "%" ? K.kPercentage : Va(e) : K.kUnknown;
}, Ua = function(e) {
	switch (e) {
		case K.kNumber:
		case K.kInteger: return Ia.kUNumber;
		case K.kPercentage: return Ia.kUPercent;
		case K.kPixels: return Ia.kULength;
		case K.kMilliseconds:
		case K.kSeconds: return Ia.kUTime;
		case K.kDegrees:
		case K.kRadians:
		case K.kGradians:
		case K.kTurns: return Ia.kUAngle;
		default: return Ia.kUOther;
	}
}, Wa = function(e) {
	switch (e) {
		case Ia.kUNumber: return K.kNumber;
		case Ia.kULength: return K.kPixels;
		case Ia.kUPercent: return K.kPercentage;
		case Ia.kUTime: return K.kSeconds;
		case Ia.kUAngle: return K.kDegrees;
		default: return K.kUnknown;
	}
}, Ga = function(e) {
	var t = 1;
	switch (e) {
		case K.kPixels:
		case K.kDegrees:
		case K.kSeconds: break;
		case K.kMilliseconds:
			t = .001;
			break;
		case K.kRadians:
			t = 180 / Math.PI;
			break;
		case K.kGradians:
			t = .9;
			break;
		case K.kTurns:
			t = 360;
			break;
	}
	return t;
}, Ka = function(e) {
	switch (e) {
		case K.kNumber:
		case K.kInteger: return "";
		case K.kPercentage: return "%";
		case K.kEms: return "em";
		case K.kRems: return "rem";
		case K.kPixels: return "px";
		case K.kDegrees: return "deg";
		case K.kRadians: return "rad";
		case K.kGradians: return "grad";
		case K.kMilliseconds: return "ms";
		case K.kSeconds: return "s";
		case K.kTurns: return "turn";
	}
	return "";
}, qa = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "toString",
		value: function() {
			return this.buildCSSText(La.kNo, Ra.kNo, "");
		}
	}, {
		key: "isNumericValue",
		value: function() {
			return this.getType() >= Ba.kUnitType && this.getType() <= Ba.kClampType;
		}
	}], [
		{
			key: "isAngle",
			value: function(e) {
				return e === K.kDegrees || e === K.kRadians || e === K.kGradians || e === K.kTurns;
			}
		},
		{
			key: "isLength",
			value: function(e) {
				return e >= K.kEms && e < K.kDegrees;
			}
		},
		{
			key: "isRelativeUnit",
			value: function(e) {
				return e === K.kPercentage || e === K.kEms || e === K.kRems;
			}
		},
		{
			key: "isTime",
			value: function(e) {
				return e === K.kSeconds || e === K.kMilliseconds;
			}
		}
	]);
}(), Ja = function(e) {
	function t(e) {
		var n;
		return g(this, t), n = k(this, t), n.colorSpace = e, n;
	}
	return j(t, e), v(t, [{
		key: "getType",
		value: function() {
			return Ba.kColorType;
		}
	}, {
		key: "to",
		value: function(e) {
			return this;
		}
	}]);
}(qa), Ya = function(e) {
	return e[e.Constant = 0] = "Constant", e[e.LinearGradient = 1] = "LinearGradient", e[e.RadialGradient = 2] = "RadialGradient", e;
}({}), Xa = function(e) {
	function t(e, n) {
		var r;
		return g(this, t), r = k(this, t), r.type = e, r.value = n, r;
	}
	return j(t, e), v(t, [
		{
			key: "clone",
			value: function() {
				return new t(this.type, this.value);
			}
		},
		{
			key: "buildCSSText",
			value: function(e, t, n) {
				return n;
			}
		},
		{
			key: "getType",
			value: function() {
				return Ba.kColorType;
			}
		}
	]);
}(qa), Za = function(e) {
	function t(e) {
		var n;
		return g(this, t), n = k(this, t), n.value = e, n;
	}
	return j(t, e), v(t, [
		{
			key: "clone",
			value: function() {
				return new t(this.value);
			}
		},
		{
			key: "getType",
			value: function() {
				return Ba.kKeywordType;
			}
		},
		{
			key: "buildCSSText",
			value: function(e, t, n) {
				return n + this.value;
			}
		}
	]);
}(qa), Qa = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = "";
	return n = Number.isFinite(e) ? "NaN" : e > 0 ? "infinity" : "-infinity", n += t;
}, $a = function(e) {
	return Wa(Ua(e));
}, eo = function(e) {
	function t(e) {
		var n, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : K.kNumber;
		g(this, t), n = k(this, t);
		var i = typeof r == "string" ? Ha(r) : r;
		return n.unit = i, n.value = e, n;
	}
	return j(t, e), v(t, [
		{
			key: "clone",
			value: function() {
				return new t(this.value, this.unit);
			}
		},
		{
			key: "equals",
			value: function(e) {
				var t = e;
				return this.value === t.value && this.unit === t.unit;
			}
		},
		{
			key: "getType",
			value: function() {
				return Ba.kUnitType;
			}
		},
		{
			key: "convertTo",
			value: function(e) {
				if (this.unit === e) return new t(this.value, this.unit);
				var n = $a(this.unit);
				if (n !== $a(e) || n === K.kUnknown) return null;
				var r = Ga(this.unit) / Ga(e);
				return new t(this.value * r, e);
			}
		},
		{
			key: "buildCSSText",
			value: function(e, t, n) {
				var r;
				switch (this.unit) {
					case K.kUnknown: break;
					case K.kInteger:
						r = Number(this.value).toFixed(0);
						break;
					case K.kNumber:
					case K.kPercentage:
					case K.kEms:
					case K.kRems:
					case K.kPixels:
					case K.kDegrees:
					case K.kRadians:
					case K.kGradians:
					case K.kMilliseconds:
					case K.kSeconds:
					case K.kTurns:
						var i = -999999, a = 999999, o = this.value, s = Ka(this.unit);
						if (o < i || o > a) {
							var c = Ka(this.unit);
							r = !Number.isFinite(o) || Number.isNaN(o) ? Qa(o, c) : o + (c || "");
						} else r = `${o}${s}`;
				}
				return n += r, n;
			}
		}
	]);
}(qa), to = new eo(0, "px");
new eo(1, "px");
var no = new eo(0, "deg"), ro = function(e) {
	function t(e, n, r) {
		var i, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
		return g(this, t), i = k(this, t, ["rgb"]), i.r = e, i.g = n, i.b = r, i.alpha = a, i.isNone = o, i;
	}
	return j(t, e), v(t, [{
		key: "clone",
		value: function() {
			return new t(this.r, this.g, this.b, this.alpha);
		}
	}, {
		key: "buildCSSText",
		value: function(e, t, n) {
			return `${n}rgba(${this.r},${this.g},${this.b},${this.alpha})`;
		}
	}]);
}(Ja), io = new Za("unset"), ao = {
	"": io,
	unset: io,
	initial: new Za("initial"),
	inherit: new Za("inherit")
}, oo = function(e) {
	return ao[e] || (ao[e] = new Za(e)), ao[e];
}, so = new ro(0, 0, 0, 0, !0), co = new ro(0, 0, 0, 0), lo = G(function(e, t, n, r) {
	return new ro(e, t, n, r);
}, function(e, t, n, r) {
	return `rgba(${e},${t},${n},${r})`;
}), uo = function(e) {
	return new eo(e, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : K.kNumber);
};
new eo(50, "%");
function fo(e) {
	var t = e.type, n = e.value;
	return t === "hex" ? `#${n}` : t === "literal" ? n : t === "rgb" ? `rgb(${n.join(",")})` : `rgba(${n.join(",")})`;
}
var po = function() {
	var e = {
		linearGradient: /^(linear\-gradient)/i,
		repeatingLinearGradient: /^(repeating\-linear\-gradient)/i,
		radialGradient: /^(radial\-gradient)/i,
		repeatingRadialGradient: /^(repeating\-radial\-gradient)/i,
		conicGradient: /^(conic\-gradient)/i,
		sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i,
		extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
		positionKeywords: /^(left|center|right|top|bottom)/i,
		pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
		percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
		emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
		angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
		startCall: /^\(/,
		endCall: /^\)/,
		comma: /^,/,
		hexColor: /^\#([0-9a-fA-F]+)/,
		literalColor: /^([a-zA-Z]+)/,
		rgbColor: /^rgb/i,
		rgbaColor: /^rgba/i,
		number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
	}, t = "";
	function n(e) {
		throw Error(`${t}: ${e}`);
	}
	function r() {
		var e = i();
		return t.length > 0 && n("Invalid input not EOF"), e;
	}
	function i() {
		return y(a);
	}
	function a() {
		return o("linear-gradient", e.linearGradient, c) || o("repeating-linear-gradient", e.repeatingLinearGradient, c) || o("radial-gradient", e.radialGradient, d) || o("repeating-radial-gradient", e.repeatingRadialGradient, d) || o("conic-gradient", e.conicGradient, d);
	}
	function o(t, r, i) {
		return s(r, function(r) {
			var a = i();
			return a && (j(e.comma) || n("Missing comma before color stops")), {
				type: t,
				orientation: a,
				colorStops: y(b)
			};
		});
	}
	function s(t, r) {
		var i = j(t);
		if (i) {
			j(e.startCall) || n("Missing (");
			var a = r(i);
			return j(e.endCall) || n("Missing )"), a;
		}
	}
	function c() {
		return l() || u();
	}
	function l() {
		return A("directional", e.sideOrCorner, 1);
	}
	function u() {
		return A("angular", e.angleValue, 1);
	}
	function d() {
		var n, r = f(), i;
		return r && (n = [], n.push(r), i = t, j(e.comma) && (r = f(), r ? n.push(r) : t = i)), n;
	}
	function f() {
		var e = p() || m();
		if (e) e.at = g();
		else {
			var t = h();
			if (t) {
				e = t;
				var n = g();
				n && (e.at = n);
			} else {
				var r = _();
				r && (e = {
					type: "default-radial",
					at: r
				});
			}
		}
		return e;
	}
	function p() {
		var e = A("shape", /^(circle)/i, 0);
		return e && (e.style = k() || h()), e;
	}
	function m() {
		var e = A("shape", /^(ellipse)/i, 0);
		return e && (e.style = D() || h()), e;
	}
	function h() {
		return A("extent-keyword", e.extentKeywords, 1);
	}
	function g() {
		if (A("position", /^at/, 0)) {
			var e = _();
			return e || n("Missing positioning value"), e;
		}
	}
	function _() {
		var e = v();
		if (e.x || e.y) return {
			type: "position",
			value: e
		};
	}
	function v() {
		return {
			x: D(),
			y: D()
		};
	}
	function y(t) {
		var r = t(), i = [];
		if (r) for (i.push(r); j(e.comma);) r = t(), r ? i.push(r) : n("One extra comma");
		return i;
	}
	function b() {
		var e = x();
		return e || n("Expected color definition"), e.length = D(), e;
	}
	function x() {
		return C() || T() || w() || S();
	}
	function S() {
		return A("literal", e.literalColor, 0);
	}
	function C() {
		return A("hex", e.hexColor, 1);
	}
	function w() {
		return s(e.rgbColor, function() {
			return {
				type: "rgb",
				value: y(E)
			};
		});
	}
	function T() {
		return s(e.rgbaColor, function() {
			return {
				type: "rgba",
				value: y(E)
			};
		});
	}
	function E() {
		return j(e.number)[1];
	}
	function D() {
		return A("%", e.percentageValue, 1) || O() || k();
	}
	function O() {
		return A("position-keyword", e.positionKeywords, 1);
	}
	function k() {
		return A("px", e.pixelValue, 1) || A("em", e.emValue, 1);
	}
	function A(e, t, n) {
		var r = j(t);
		if (r) return {
			type: e,
			value: r[n]
		};
	}
	function j(e) {
		var n = /^[\n\r\t\s]+/.exec(t);
		n && ee(n[0].length);
		var r = e.exec(t);
		return r && ee(r[0].length), r;
	}
	function ee(e) {
		t = t.substring(e);
	}
	return function(e) {
		return t = e, r();
	};
}();
function mo(e, t, n, r) {
	var i = V(r.value), a = 0, o = 0, s = a + t / 2, c = o + n / 2, l = Math.abs(t * Math.cos(i)) + Math.abs(n * Math.sin(i));
	return {
		x1: e[0] + s - Math.cos(i) * l / 2,
		y1: e[1] + c - Math.sin(i) * l / 2,
		x2: e[0] + s + Math.cos(i) * l / 2,
		y2: e[1] + c + Math.sin(i) * l / 2
	};
}
function ho(e, t, n, r, i, a) {
	var o = r.value, s = i.value;
	r.unit === K.kPercentage && (o = r.value / 100 * t), i.unit === K.kPercentage && (s = i.value / 100 * n);
	var c = Math.max(Wn([0, 0], [o, s]), Wn([0, n], [o, s]), Wn([t, n], [o, s]), Wn([t, 0], [o, s]));
	return a && (a instanceof eo ? c = a.value : a instanceof Za && (a.value === "closest-side" ? c = Math.min(o, t - o, s, n - s) : a.value === "farthest-side" ? c = Math.max(o, t - o, s, n - s) : a.value === "closest-corner" && (c = Math.min(Wn([0, 0], [o, s]), Wn([0, n], [o, s]), Wn([t, n], [o, s]), Wn([t, 0], [o, s]))))), {
		x: o + e[0],
		y: s + e[1],
		r: c
	};
}
var go = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i, _o = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i, vo = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i, yo = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
function bo(e) {
	var t = e.length;
	e[t - 1].length = e[t - 1].length ?? {
		type: "%",
		value: "100"
	}, t > 1 && (e[0].length = e[0].length ?? {
		type: "%",
		value: "0"
	});
	for (var n = 0, r = Number(e[0].length.value), i = 1; i < t; i++) {
		var a = e[i].length?.value;
		if (!z(a) && !z(r)) {
			for (var o = 1; o < i - n; o++) e[n + o].length = {
				type: "%",
				value: `${r + (Number(a) - r) * o / (i - n)}`
			};
			n = i, r = Number(a);
		}
	}
}
var xo = {
	left: 180,
	top: -90,
	bottom: 90,
	right: 0,
	"left top": 225,
	"top left": 225,
	"left bottom": 135,
	"bottom left": 135,
	"right top": -45,
	"top right": -45,
	"right bottom": 45,
	"bottom right": 45
}, So = G(function(e) {
	return uo(e.type === "angular" ? Number(e.value) : xo[e.value] || 0, "deg");
}), Co = G(function(e) {
	var t = 50, n = 50, r = "%", i = "%";
	if (e?.type === "position") {
		var a = e.value, o = a.x, s = a.y;
		o?.type === "position-keyword" && (o.value === "left" ? t = 0 : o.value === "center" ? t = 50 : o.value === "right" ? t = 100 : o.value === "top" ? n = 0 : o.value === "bottom" && (n = 100)), s?.type === "position-keyword" && (s.value === "left" ? t = 0 : s.value === "center" ? n = 50 : s.value === "right" ? t = 100 : s.value === "top" ? n = 0 : s.value === "bottom" && (n = 100)), (o?.type === "px" || o?.type === "%" || o?.type === "em") && (r = o?.type, t = Number(o.value)), (s?.type === "px" || s?.type === "%" || s?.type === "em") && (i = s?.type, n = Number(s.value));
	}
	return {
		cx: uo(t, r),
		cy: uo(n, i)
	};
}), wo = G(function(e) {
	if (e.indexOf("linear") > -1 || e.indexOf("radial") > -1) return po(e).map(function(e) {
		var t = e.type, n = e.orientation, r = e.colorStops;
		bo(r);
		var i = r.map(function(e) {
			return {
				offset: uo(Number(e.length.value), "%"),
				color: fo(e)
			};
		});
		if (t === "linear-gradient") return new Xa(Ya.LinearGradient, {
			angle: n ? So(n) : no,
			steps: i
		});
		if (t === "radial-gradient" && (n ||= [{
			type: "shape",
			value: "circle"
		}], n[0].type === "shape" && n[0].value === "circle")) {
			var a = Co(n[0].at), o = a.cx, s = a.cy, c;
			if (n[0].style) {
				var l = n[0].style, u = l.type, d = l.value;
				c = u === "extent-keyword" ? oo(d) : uo(d, u);
			}
			return new Xa(Ya.RadialGradient, {
				cx: o,
				cy: s,
				size: c,
				steps: i
			});
		}
	});
	var t = e[0];
	if (e[1] === "(" || e[2] === "(") {
		if (t === "l") {
			var n = go.exec(e);
			if (n) {
				var r = n[2].match(yo)?.map(function(e) {
					return e.split(":");
				}) || [];
				return [new Xa(Ya.LinearGradient, {
					angle: uo(parseFloat(n[1]), "deg"),
					steps: r.map(function(e) {
						var t = P(e, 2), n = t[0], r = t[1];
						return {
							offset: uo(Number(n) * 100, "%"),
							color: r
						};
					})
				})];
			}
		} else if (t === "r") {
			var i = To(e);
			if (i) if (nn(i)) e = i;
			else return [new Xa(Ya.RadialGradient, i)];
		} else if (t === "p") return Eo(e);
	}
});
function To(e) {
	var t = _o.exec(e);
	if (t) {
		var n = t[4].match(yo)?.map(function(e) {
			return e.split(":");
		}) || [];
		return {
			cx: uo(50, "%"),
			cy: uo(50, "%"),
			steps: n.map(function(e) {
				var t = P(e, 2), n = t[0], r = t[1];
				return {
					offset: uo(Number(n) * 100, "%"),
					color: r
				};
			})
		};
	}
	return null;
}
function Eo(e) {
	var t = vo.exec(e);
	if (t) {
		var n = t[1], r = t[2];
		switch (n) {
			case "a":
				n = "repeat";
				break;
			case "x":
				n = "repeat-x";
				break;
			case "y":
				n = "repeat-y";
				break;
			case "n":
				n = "no-repeat";
				break;
			default: n = "no-repeat";
		}
		return {
			image: r,
			repetition: n
		};
	}
	return null;
}
function Do(e) {
	return e && !!e.image;
}
function Oo(e) {
	return e && !z(e.r) && !z(e.g) && !z(e.b);
}
var ko = G(function(e) {
	if (Do(e)) return h({ repetition: "repeat" }, e);
	if (z(e) && (e = ""), e === "transparent") return co;
	if (e === "currentColor") e = "black";
	else if (e === "none") return so;
	var t = wo(e);
	if (t) return t;
	var n = va(e), r = [
		0,
		0,
		0,
		0
	];
	return n !== null && (r[0] = n.r || 0, r[1] = n.g || 0, r[2] = n.b || 0, r[3] = n.opacity), lo.apply(void 0, r);
});
function Ao(e, t) {
	if (!(!Oo(e) || !Oo(t))) return [
		[
			Number(e.r),
			Number(e.g),
			Number(e.b),
			Number(e.alpha)
		],
		[
			Number(t.r),
			Number(t.g),
			Number(t.b),
			Number(t.alpha)
		],
		function(e) {
			var t = e.slice();
			if (t[3]) for (var n = 0; n < 3; n++) t[n] = Math.round(rn(t[n], 0, 255));
			return t[3] = rn(t[3], 0, 1), `rgba(${t.join(",")})`;
		}
	];
}
function jo(e, t) {
	if (z(t)) return uo(0, "px");
	if (t = `${t}`.trim().toLowerCase(), isFinite(Number(t))) {
		if ("px".search(e) >= 0) return uo(Number(t), "px");
		if ("deg".search(e) >= 0) return uo(Number(t), "deg");
	}
	var n = [];
	t = t.replace(e, function(e) {
		return n.push(e), `U${e}`;
	});
	var r = `U(${e.source})`;
	return n.map(function(e) {
		return uo(Number(t.replace(RegExp(`U${e}`, "g"), "").replace(new RegExp(r, "g"), "*0")), e);
	})[0];
}
var Mo = function(e) {
	return jo(RegExp("px", "g"), e);
}, No = G(Mo);
G(function(e) {
	return jo(RegExp("%", "g"), e);
});
var Po = function(e) {
	return an(e) || isFinite(Number(e)) ? uo(Number(e) || 0, "px") : jo(RegExp("px|%|em|rem", "g"), e);
}, Fo = G(Po), Io = function(e) {
	return jo(RegExp("deg|rad|grad|turn", "g"), e);
}, Lo = G(Io);
function Ro(e, t, n, r) {
	var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = "", o = e.value || 0, s = t.value || 0, c = $a(e.unit), l = e.convertTo(c), u = t.convertTo(c);
	return l && u ? (o = l.value, s = u.value, a = Ka(e.unit)) : (eo.isLength(e.unit) || eo.isLength(t.unit)) && (o = Vo(e, i, n), s = Vo(t, i, n), a = "px"), [
		o,
		s,
		function(e) {
			return r && (e = Math.max(e, 0)), e + a;
		}
	];
}
function zo(e) {
	var t = 0;
	return e.unit === K.kDegrees ? t = e.value : e.unit === K.kRadians ? t = xi(Number(e.value)) : e.unit === K.kTurns ? t = Si(Number(e.value)) : e.value && (t = e.value), t;
}
function Bo(e, t) {
	var n;
	return Array.isArray(e) ? n = e.map(function(e) {
		return Number(e);
	}) : nn(e) ? n = e.split(" ").map(function(e) {
		return Number(e);
	}) : an(e) && (n = [e]), t === 2 ? n.length === 1 ? [n[0], n[0]] : [n[0], n[1]] : t === 4 ? n.length === 1 ? [
		n[0],
		n[0],
		n[0],
		n[0]
	] : n.length === 2 ? [
		n[0],
		n[1],
		n[0],
		n[1]
	] : n.length === 3 ? [
		n[0],
		n[1],
		n[2],
		n[1]
	] : [
		n[0],
		n[1],
		n[2],
		n[3]
	] : t === "even" && n.length % 2 == 1 ? [].concat(w(n), w(n)) : n;
}
function Vo(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
	if (e.unit === K.kPixels) return Number(e.value);
	if (e.unit === K.kPercentage && n) {
		var i = n.nodeName === B.GROUP ? n.getLocalBounds() : n.getGeometryBounds();
		return (r ? i.min[t] : 0) + e.value / 100 * i.halfExtents[t] * 2;
	}
	return 0;
}
var Ho = function(e) {
	return jo(/deg|rad|grad|turn|px|%/g, e);
}, Uo = [
	"blur",
	"brightness",
	"drop-shadow",
	"contrast",
	"grayscale",
	"sepia",
	"saturate",
	"hue-rotate",
	"invert"
];
function Wo() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
	if (e = e.toLowerCase().trim(), e === "none") return [];
	for (var t = /\s*([\w-]+)\(([^)]*)\)/g, n = [], r, i = 0; r = t.exec(e);) {
		if (r.index !== i) return [];
		if (i = r.index + r[0].length, Uo.indexOf(r[1]) > -1 && n.push({
			name: r[1],
			params: r[2].split(" ").map(function(e) {
				return Ho(e) || ko(e);
			})
		}), t.lastIndex === e.length) return n;
	}
	return [];
}
function Go(e) {
	return e.toString();
}
var Ko = function(e) {
	return typeof e == "number" ? uo(e) : /^\s*[-+]?(\d*\.)?\d+\s*$/.test(e) ? uo(Number(e)) : uo(0);
}, qo = G(Ko);
G(function(e) {
	return nn(e) ? e.split(" ").map(qo) : e.map(qo);
});
function Jo(e, t) {
	return [
		e,
		t,
		Go
	];
}
function Yo(e, t) {
	return function(n, r) {
		return [
			n,
			r,
			function(n) {
				return Go(rn(n, e, t));
			}
		];
	};
}
function Xo(e, t) {
	if (e.length === t.length) return [
		e,
		t,
		function(e) {
			return e;
		}
	];
}
function Zo(e) {
	return e.parsedStyle.d.totalLength === 0 && (e.parsedStyle.d.totalLength = er(e.parsedStyle.d.absolutePath)), e.parsedStyle.d.totalLength;
}
function Qo(e) {
	return e.parsedStyle.points.totalLength === 0 && (e.parsedStyle.points.totalLength = Mr(e.parsedStyle.points.points)), e.parsedStyle.points.totalLength;
}
function $o(e) {
	for (var t = 0; t < e.length; t++) {
		var n = e[t - 1], r = e[t];
		if (r[0] === "M" && n) {
			var i = n[0], a = [r[1], r[2]], o = void 0;
			i === "L" || i === "M" ? o = [n[1], n[2]] : (i === "C" || i === "A" || i === "Q") && (o = [n[n.length - 2], n[n.length - 1]]), o && ns(a, o) && (e.splice(t, 1), t--);
		}
	}
}
function es(e) {
	for (var t = !1, n = e.length, r = 0; r < n; r++) {
		var i = e[r][0];
		if (i === "C" || i === "A" || i === "Q") {
			t = !0;
			break;
		}
	}
	return t;
}
function ts(e) {
	for (var t = [], n = [], r = [], i = 0; i < e.length; i++) {
		var a = e[i], o = a[0];
		o === "M" ? (r.length && (n.push(r), r = []), r.push([a[1], a[2]])) : o === "Z" ? r.length && (t.push(r), r = []) : r.push([a[1], a[2]]);
	}
	return r.length > 0 && n.push(r), {
		polygons: t,
		polylines: n
	};
}
function ns(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}
function rs(e, t) {
	for (var n = [], r = [], i = [], a = 0; a < e.length; a++) {
		var o = e[a], s = o.currentPoint, c = o.params, l = o.prePoint, u = void 0;
		switch (o.command) {
			case "Q":
				u = Fr(l[0], l[1], c[1], c[2], c[3], c[4]);
				break;
			case "C":
				u = Or(l[0], l[1], c[1], c[2], c[3], c[4], c[5], c[6]);
				break;
			case "A":
				var d = o.arcParams;
				u = br(d.cx, d.cy, d.rx, d.ry, d.xRotation, d.startAngle, d.endAngle);
				break;
			default:
				n.push(s[0]), r.push(s[1]);
				break;
		}
		u && (o.box = u, n.push(u.x, u.x + u.width), r.push(u.y, u.y + u.height)), t && (o.command === "L" || o.command === "M") && o.prePoint && o.nextPoint && i.push(o);
	}
	n = n.filter(function(e) {
		return !Number.isNaN(e) && e !== Infinity && e !== -Infinity;
	}), r = r.filter(function(e) {
		return !Number.isNaN(e) && e !== Infinity && e !== -Infinity;
	});
	var f = tn(n), p = tn(r), m = en(n), h = en(r);
	if (i.length === 0) return {
		x: f,
		y: p,
		width: m - f,
		height: h - p
	};
	for (var g = 0; g < i.length; g++) {
		var _ = i[g], v = _.currentPoint, y = void 0;
		v[0] === f ? (y = is(_, t), f -= y.xExtra) : v[0] === m && (y = is(_, t), m += y.xExtra), v[1] === p ? (y = is(_, t), p -= y.yExtra) : v[1] === h && (y = is(_, t), h += y.yExtra);
	}
	return {
		x: f,
		y: p,
		width: m - f,
		height: h - p
	};
}
function is(e, t) {
	var n = e.prePoint, r = e.currentPoint, i = e.nextPoint, a = (r[0] - n[0]) ** 2 + (r[1] - n[1]) ** 2, o = (r[0] - i[0]) ** 2 + (r[1] - i[1]) ** 2, s = (n[0] - i[0]) ** 2 + (n[1] - i[1]) ** 2, c = Math.acos((a + o - s) / (2 * Math.sqrt(a) * Math.sqrt(o)));
	if (!c || Math.sin(c) === 0 || sn(c, 0)) return {
		xExtra: 0,
		yExtra: 0
	};
	var l = Math.abs(Math.atan2(i[1] - r[1], i[0] - r[0])), u = Math.abs(Math.atan2(i[0] - r[0], i[1] - r[1]));
	return l = l > Math.PI / 2 ? Math.PI - l : l, u = u > Math.PI / 2 ? Math.PI - u : u, {
		xExtra: Math.cos(c / 2 - l) * (t / 2 * (1 / Math.sin(c / 2))) - t / 2 || 0,
		yExtra: Math.cos(u - c / 2) * (t / 2 * (1 / Math.sin(c / 2))) - t / 2 || 0
	};
}
function as(e, t) {
	return [t[0] + (t[0] - e[0]), t[1] + (t[1] - e[1])];
}
var os = function(e, t) {
	var n = e.x * t.x + e.y * t.y, r = Math.sqrt((e.x ** 2 + e.y ** 2) * (t.x ** 2 + t.y ** 2));
	return (e.x * t.y - e.y * t.x < 0 ? -1 : 1) * Math.acos(n / r);
}, ss = function(e, t, n, r, i, a, o, s) {
	t = Math.abs(t), n = Math.abs(n), r = cn(r, 360);
	var c = V(r);
	if (e.x === o.x && e.y === o.y) return {
		x: e.x,
		y: e.y,
		ellipticalArcAngle: 0
	};
	if (t === 0 || n === 0) return {
		x: 0,
		y: 0,
		ellipticalArcAngle: 0
	};
	var l = (e.x - o.x) / 2, u = (e.y - o.y) / 2, d = {
		x: Math.cos(c) * l + Math.sin(c) * u,
		y: -Math.sin(c) * l + Math.cos(c) * u
	}, f = d.x ** 2 / t ** 2 + d.y ** 2 / n ** 2;
	f > 1 && (t *= Math.sqrt(f), n *= Math.sqrt(f));
	var p = (t ** 2 * n ** 2 - t ** 2 * d.y ** 2 - n ** 2 * d.x ** 2) / (t ** 2 * d.y ** 2 + n ** 2 * d.x ** 2);
	p = p < 0 ? 0 : p;
	var m = (i === a ? -1 : 1) * Math.sqrt(p), h = {
		x: m * (t * d.y / n),
		y: m * (-(n * d.x) / t)
	}, g = {
		x: Math.cos(c) * h.x - Math.sin(c) * h.y + (e.x + o.x) / 2,
		y: Math.sin(c) * h.x + Math.cos(c) * h.y + (e.y + o.y) / 2
	}, _ = {
		x: (d.x - h.x) / t,
		y: (d.y - h.y) / n
	}, v = os({
		x: 1,
		y: 0
	}, _), y = os(_, {
		x: (-d.x - h.x) / t,
		y: (-d.y - h.y) / n
	});
	!a && y > 0 ? y -= 2 * Math.PI : a && y < 0 && (y += 2 * Math.PI), y %= 2 * Math.PI;
	var b = v + y * s, x = t * Math.cos(b), S = n * Math.sin(b);
	return {
		x: Math.cos(c) * x - Math.sin(c) * S + g.x,
		y: Math.sin(c) * x + Math.cos(c) * S + g.y,
		ellipticalArcStartAngle: v,
		ellipticalArcEndAngle: v + y,
		ellipticalArcAngle: b,
		ellipticalArcCenter: g,
		resultantRx: t,
		resultantRy: n
	};
};
function cs(e) {
	for (var t = [], n = null, r = null, i = null, a = 0, o = e.length, s = 0; s < o; s++) {
		var c = e[s];
		r = e[s + 1];
		var l = c[0], u = {
			command: l,
			prePoint: n,
			params: c,
			startTangent: null,
			endTangent: null,
			currentPoint: null,
			nextPoint: null,
			arcParams: null,
			box: null,
			cubicParams: null
		};
		switch (l) {
			case "M":
				i = [c[1], c[2]], a = s;
				break;
			case "A":
				u.arcParams = ps(n, c);
				break;
		}
		if (l === "Z") n = i, r = e[a + 1];
		else {
			var d = c.length;
			n = [c[d - 2], c[d - 1]];
		}
		r && r[0] === "Z" && (r = e[a], t[a] && (t[a].prePoint = n)), u.currentPoint = n, t[a] && ns(n, t[a].currentPoint) && (t[a].prePoint = u.prePoint), u.nextPoint = r ? [r[r.length - 2], r[r.length - 1]] : null;
		var f = u.prePoint;
		if ([
			"L",
			"H",
			"V"
		].includes(l)) u.startTangent = [f[0] - n[0], f[1] - n[1]], u.endTangent = [n[0] - f[0], n[1] - f[1]];
		else if (l === "Q") {
			var p = [c[1], c[2]];
			u.startTangent = [f[0] - p[0], f[1] - p[1]], u.endTangent = [n[0] - p[0], n[1] - p[1]];
		} else if (l === "T") {
			var m = t[s - 1], h = as(m.currentPoint, f);
			m.command === "Q" ? (u.command = "Q", u.startTangent = [f[0] - h[0], f[1] - h[1]], u.endTangent = [n[0] - h[0], n[1] - h[1]]) : (u.command = "TL", u.startTangent = [f[0] - n[0], f[1] - n[1]], u.endTangent = [n[0] - f[0], n[1] - f[1]]);
		} else if (l === "C") {
			var g = [c[1], c[2]], _ = [c[3], c[4]];
			u.startTangent = [f[0] - g[0], f[1] - g[1]], u.endTangent = [n[0] - _[0], n[1] - _[1]], u.startTangent[0] === 0 && u.startTangent[1] === 0 && (u.startTangent = [g[0] - _[0], g[1] - _[1]]), u.endTangent[0] === 0 && u.endTangent[1] === 0 && (u.endTangent = [_[0] - g[0], _[1] - g[1]]);
		} else if (l === "S") {
			var v = t[s - 1], y = as(v.currentPoint, f), b = [c[1], c[2]];
			v.command === "C" ? (u.command = "C", u.startTangent = [f[0] - y[0], f[1] - y[1]], u.endTangent = [n[0] - b[0], n[1] - b[1]]) : (u.command = "SQ", u.startTangent = [f[0] - b[0], f[1] - b[1]], u.endTangent = [n[0] - b[0], n[1] - b[1]]);
		} else if (l === "A") {
			var x = ls(u, 0), S = x.x, C = x.y, w = ls(u, 1, !1), T = w.x, E = w.y;
			u.startTangent = [S, C], u.endTangent = [T, E];
		}
		t.push(u);
	}
	return t;
}
function ls(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = e.arcParams, i = r.rx, a = i === void 0 ? 0 : i, o = r.ry, s = o === void 0 ? 0 : o, c = r.xRotation, l = r.arcFlag, u = r.sweepFlag, d = ss({
		x: e.prePoint[0],
		y: e.prePoint[1]
	}, a, s, c, !!l, !!u, {
		x: e.currentPoint[0],
		y: e.currentPoint[1]
	}, t), f = ss({
		x: e.prePoint[0],
		y: e.prePoint[1]
	}, a, s, c, !!l, !!u, {
		x: e.currentPoint[0],
		y: e.currentPoint[1]
	}, n ? t + .005 : t - .005), p = f.x - d.x, m = f.y - d.y, h = Math.sqrt(p * p + m * m);
	return {
		x: -p / h,
		y: -m / h
	};
}
function us(e) {
	return Math.sqrt(e[0] * e[0] + e[1] * e[1]);
}
function ds(e, t) {
	return us(e) * us(t) ? (e[0] * t[0] + e[1] * t[1]) / (us(e) * us(t)) : 1;
}
function fs(e, t) {
	return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(ds(e, t));
}
function ps(e, t) {
	var n = t[1], r = t[2], i = cn(V(t[3]), Math.PI * 2), a = t[4], o = t[5], s = e[0], c = e[1], l = t[6], u = t[7], d = Math.cos(i) * (s - l) / 2 + Math.sin(i) * (c - u) / 2, f = -1 * Math.sin(i) * (s - l) / 2 + Math.cos(i) * (c - u) / 2, p = d * d / (n * n) + f * f / (r * r);
	p > 1 && (n *= Math.sqrt(p), r *= Math.sqrt(p));
	var m = n * n * (f * f) + r * r * (d * d), h = m ? Math.sqrt((n * n * (r * r) - m) / m) : 1;
	a === o && (h *= -1), isNaN(h) && (h = 0);
	var g = r ? h * n * f / r : 0, _ = n ? h * -r * d / n : 0, v = (s + l) / 2 + Math.cos(i) * g - Math.sin(i) * _, y = (c + u) / 2 + Math.sin(i) * g + Math.cos(i) * _, b = [(d - g) / n, (f - _) / r], x = [(-1 * d - g) / n, (-1 * f - _) / r], S = fs([1, 0], b), C = fs(b, x);
	return ds(b, x) <= -1 && (C = Math.PI), ds(b, x) >= 1 && (C = 0), o === 0 && C > 0 && (C -= 2 * Math.PI), o === 1 && C < 0 && (C += 2 * Math.PI), {
		cx: v,
		cy: y,
		rx: ns(e, [l, u]) ? 0 : n,
		ry: ns(e, [l, u]) ? 0 : r,
		startAngle: S,
		endAngle: S + C,
		xRotation: i,
		arcFlag: a,
		sweepFlag: o
	};
}
var ms = function(e) {
	if (e === "" || Array.isArray(e) && e.length === 0) return {
		absolutePath: [],
		hasArc: !1,
		segments: [],
		polygons: [],
		polylines: [],
		curve: null,
		totalLength: 0,
		rect: {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}
	};
	var t;
	try {
		t = Nn(e);
	} catch {
		t = Nn(""), console.error(`[g]: Invalid SVG Path definition: ${e}`);
	}
	$o(t);
	var n = es(t), r = ts(t), i = r.polygons, a = r.polylines, o = cs(t), s = rs(o, 0), c = s.x, l = s.y, u = s.width, d = s.height;
	return {
		absolutePath: t,
		hasArc: n,
		segments: o,
		polygons: i,
		polylines: a,
		totalLength: 0,
		rect: {
			x: Number.isFinite(c) ? c : 0,
			y: Number.isFinite(l) ? l : 0,
			width: Number.isFinite(u) ? u : 0,
			height: Number.isFinite(d) ? d : 0
		}
	};
}, hs = G(ms);
function gs(e) {
	return nn(e) ? hs(e) : ms(e);
}
function _s(e, t, n) {
	var r = e.curve, i = t.curve;
	(!r || r.length === 0) && (r = Vn(e.absolutePath, !1), e.curve = r), (!i || i.length === 0) && (i = Vn(t.absolutePath, !1), t.curve = i);
	var a = [r, i];
	r.length !== i.length && (a = ur(r, i));
	var o = ar(a[0]) === ar(a[1]) ? Hn(a[0]) : Un(a[0]);
	return [
		o,
		nr(a[1], o),
		function(e) {
			return e;
		}
	];
}
function vs(e, t) {
	return {
		points: nn(e) ? e.split(" ").map(function(e) {
			var t = P(e.split(","), 2), n = t[0], r = t[1];
			return [Number(n), Number(r)];
		}) : e,
		totalLength: 0,
		segments: []
	};
}
function ys(e, t) {
	return [
		e.points,
		t.points,
		function(e) {
			return e;
		}
	];
}
var bs = null, xs = /\s*(\w+)\(([^)]*)\)/g;
function Ss(e) {
	return function(t) {
		var n = 0;
		return e.map(function(e) {
			return e === bs ? t[n++] : e;
		});
	};
}
function Cs(e) {
	return e;
}
var ws = {
	matrix: [
		"NNNNNN",
		[
			bs,
			bs,
			0,
			0,
			bs,
			bs,
			0,
			0,
			0,
			0,
			1,
			0,
			bs,
			bs,
			0,
			1
		],
		Cs
	],
	matrix3d: ["NNNNNNNNNNNNNNNN", Cs],
	rotate: ["A"],
	rotateX: ["A"],
	rotateY: ["A"],
	rotateZ: ["A"],
	rotate3d: ["NNNA"],
	perspective: ["L"],
	scale: [
		"Nn",
		Ss([
			bs,
			bs,
			new eo(1)
		]),
		Cs
	],
	scaleX: [
		"N",
		Ss([
			bs,
			new eo(1),
			new eo(1)
		]),
		Ss([bs, new eo(1)])
	],
	scaleY: [
		"N",
		Ss([
			new eo(1),
			bs,
			new eo(1)
		]),
		Ss([new eo(1), bs])
	],
	scaleZ: ["N", Ss([
		new eo(1),
		new eo(1),
		bs
	])],
	scale3d: ["NNN", Cs],
	skew: [
		"Aa",
		null,
		Cs
	],
	skewX: [
		"A",
		null,
		Ss([bs, no])
	],
	skewY: [
		"A",
		null,
		Ss([no, bs])
	],
	translate: [
		"Tt",
		Ss([
			bs,
			bs,
			to
		]),
		Cs
	],
	translateX: [
		"T",
		Ss([
			bs,
			to,
			to
		]),
		Ss([bs, to])
	],
	translateY: [
		"T",
		Ss([
			to,
			bs,
			to
		]),
		Ss([to, bs])
	],
	translateZ: ["L", Ss([
		to,
		to,
		bs
	])],
	translate3d: ["TTL", Cs]
};
function Ts(e) {
	for (var t = [], n = e.length, r = 0; r < n; r++) {
		var i = e[r], a = i[0], o = i.slice(1);
		if (a === "translate" || a === "skew" ? o.length === 1 && o.push(0) : a === "scale" && o.length === 1 && o.push(o[0]), !ws[a]) return [];
		var s = o.map(function(e) {
			return uo(e);
		});
		t.push({
			t: a,
			d: s
		});
	}
	return t;
}
function Es(e) {
	if (Array.isArray(e)) return Ts(e);
	if (e = (e || "none").trim(), e === "none") return [];
	var t = [], n, r = 0;
	for (xs.lastIndex = 0; n = xs.exec(e);) {
		if (n.index !== r) return [];
		r = n.index + n[0].length;
		var i = n[1], a = ws[i];
		if (!a) return [];
		var o = n[2].split(","), s = a[0];
		if (s.length < o.length) return [];
		for (var c = [], l = 0; l < s.length; l++) {
			var u = o[l], d = s[l], f = void 0;
			if (f = u ? {
				A: function(e) {
					return e.trim() === "0" ? no : Lo(e);
				},
				N: qo,
				T: Fo,
				L: No
			}[d.toUpperCase()](u) : {
				a: no,
				n: c[0],
				t: to
			}[d], f === void 0) return [];
			c.push(f);
		}
		if (t.push({
			t: i,
			d: c
		}), xs.lastIndex === e.length) return t;
	}
	return [];
}
function Ds(e) {
	if (Array.isArray(e)) return Ts(e);
	if (e = (e || "none").trim(), e === "none") return [];
	var t = [], n, r = 0;
	for (xs.lastIndex = 0; n = xs.exec(e);) {
		if (n.index !== r) return [];
		r = n.index + n[0].length;
		var i = n[1], a = ws[i];
		if (!a) return [];
		var o = n[2].split(","), s = a[0];
		if (s.length < o.length) return [];
		for (var c = [], l = 0; l < s.length; l++) {
			var u = o[l], d = s[l], f = void 0;
			if (f = u ? {
				A: function(e) {
					return e.trim() === "0" ? no : Io(e);
				},
				N: Ko,
				T: Po,
				L: Mo
			}[d.toUpperCase()](u) : {
				a: no,
				n: c[0],
				t: to
			}[d], f === void 0) return [];
			c.push(f);
		}
		if (t.push({
			t: i,
			d: c
		}), xs.lastIndex === e.length) return t;
	}
	return [];
}
function Os(e) {
	var t, n, r, i;
	switch (e.t) {
		case "rotateX": return i = V(zo(e.d[0])), [
			1,
			0,
			0,
			0,
			0,
			Math.cos(i),
			Math.sin(i),
			0,
			0,
			-Math.sin(i),
			Math.cos(i),
			0,
			0,
			0,
			0,
			1
		];
		case "rotateY": return i = V(zo(e.d[0])), [
			Math.cos(i),
			0,
			-Math.sin(i),
			0,
			0,
			1,
			0,
			0,
			Math.sin(i),
			0,
			Math.cos(i),
			0,
			0,
			0,
			0,
			1
		];
		case "rotate":
		case "rotateZ": return i = V(zo(e.d[0])), [
			Math.cos(i),
			Math.sin(i),
			0,
			0,
			-Math.sin(i),
			Math.cos(i),
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		];
		case "rotate3d":
			t = e.d[0].value, n = e.d[1].value, r = e.d[2].value, i = V(zo(e.d[3]));
			var a = t * t + n * n + r * r;
			if (a === 0) t = 1, n = 0, r = 0;
			else if (a !== 1) {
				var o = Math.sqrt(a);
				t /= o, n /= o, r /= o;
			}
			var s = Math.sin(i / 2), c = s * Math.cos(i / 2), l = s * s;
			return [
				1 - 2 * (n * n + r * r) * l,
				2 * (t * n * l + r * c),
				2 * (t * r * l - n * c),
				0,
				2 * (t * n * l - r * c),
				1 - 2 * (t * t + r * r) * l,
				2 * (n * r * l + t * c),
				0,
				2 * (t * r * l + n * c),
				2 * (n * r * l - t * c),
				1 - 2 * (t * t + n * n) * l,
				0,
				0,
				0,
				0,
				1
			];
		case "scale": return [
			e.d[0].value,
			0,
			0,
			0,
			0,
			e.d[1].value,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		];
		case "scaleX": return [
			e.d[0].value,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		];
		case "scaleY": return [
			1,
			0,
			0,
			0,
			0,
			e.d[0].value,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		];
		case "scaleZ": return [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			e.d[0].value,
			0,
			0,
			0,
			0,
			1
		];
		case "scale3d": return [
			e.d[0].value,
			0,
			0,
			0,
			0,
			e.d[1].value,
			0,
			0,
			0,
			0,
			e.d[2].value,
			0,
			0,
			0,
			0,
			1
		];
		case "skew":
			var u = V(zo(e.d[0])), d = V(zo(e.d[1]));
			return [
				1,
				Math.tan(d),
				0,
				0,
				Math.tan(u),
				1,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				1
			];
		case "skewX": return i = V(zo(e.d[0])), [
			1,
			0,
			0,
			0,
			Math.tan(i),
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		];
		case "skewY": return i = V(zo(e.d[0])), [
			1,
			Math.tan(i),
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		];
		case "translate": return t = Vo(e.d[0], 0, null) || 0, n = Vo(e.d[1], 0, null) || 0, [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			t,
			n,
			0,
			1
		];
		case "translateX": return t = Vo(e.d[0], 0, null) || 0, [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			t,
			0,
			0,
			1
		];
		case "translateY": return n = Vo(e.d[0], 0, null) || 0, [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			n,
			0,
			1
		];
		case "translateZ": return r = Vo(e.d[0], 0, null) || 0, [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			r,
			1
		];
		case "translate3d": return t = Vo(e.d[0], 0, null) || 0, n = Vo(e.d[1], 0, null) || 0, r = Vo(e.d[2], 0, null) || 0, [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			t,
			n,
			r,
			1
		];
		case "perspective":
			var f = Vo(e.d[0], 0, null) || 0;
			return [
				1,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				1,
				f ? -1 / f : 0,
				0,
				0,
				0,
				1
			];
		case "matrix": return [
			e.d[0].value,
			e.d[1].value,
			0,
			0,
			e.d[2].value,
			e.d[3].value,
			0,
			0,
			0,
			0,
			1,
			0,
			e.d[4].value,
			e.d[5].value,
			0,
			1
		];
		case "matrix3d": return e.d.map(function(e) {
			return e.value;
		});
	}
}
function ks(e, t) {
	return [
		e[0] * t[0] + e[4] * t[1] + e[8] * t[2] + e[12] * t[3],
		e[1] * t[0] + e[5] * t[1] + e[9] * t[2] + e[13] * t[3],
		e[2] * t[0] + e[6] * t[1] + e[10] * t[2] + e[14] * t[3],
		e[3] * t[0] + e[7] * t[1] + e[11] * t[2] + e[15] * t[3],
		e[0] * t[4] + e[4] * t[5] + e[8] * t[6] + e[12] * t[7],
		e[1] * t[4] + e[5] * t[5] + e[9] * t[6] + e[13] * t[7],
		e[2] * t[4] + e[6] * t[5] + e[10] * t[6] + e[14] * t[7],
		e[3] * t[4] + e[7] * t[5] + e[11] * t[6] + e[15] * t[7],
		e[0] * t[8] + e[4] * t[9] + e[8] * t[10] + e[12] * t[11],
		e[1] * t[8] + e[5] * t[9] + e[9] * t[10] + e[13] * t[11],
		e[2] * t[8] + e[6] * t[9] + e[10] * t[10] + e[14] * t[11],
		e[3] * t[8] + e[7] * t[9] + e[11] * t[10] + e[15] * t[11],
		e[0] * t[12] + e[4] * t[13] + e[8] * t[14] + e[12] * t[15],
		e[1] * t[12] + e[5] * t[13] + e[9] * t[14] + e[13] * t[15],
		e[2] * t[12] + e[6] * t[13] + e[10] * t[14] + e[14] * t[15],
		e[3] * t[12] + e[7] * t[13] + e[11] * t[14] + e[15] * t[15]
	];
}
function As(e) {
	return e.length === 0 ? [
		1,
		0,
		0,
		0,
		0,
		1,
		0,
		0,
		0,
		0,
		1,
		0,
		0,
		0,
		0,
		1
	] : e.map(Os).reduce(ks);
}
function js(e) {
	var t = [
		0,
		0,
		0
	], n = [
		1,
		1,
		1
	], r = [
		0,
		0,
		0
	], i = [
		0,
		0,
		0,
		1
	], a = [
		0,
		0,
		0,
		1
	];
	return Pi(As(e), t, n, r, i, a), [[
		t,
		n,
		r,
		a,
		i
	]];
}
var Ms = function() {
	function e(e, t) {
		for (var n = [
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0
			]
		], r = 0; r < 4; r++) for (var i = 0; i < 4; i++) for (var a = 0; a < 4; a++) n[r][i] += t[r][a] * e[a][i];
		return n;
	}
	function t(e) {
		return e[0][2] === 0 && e[0][3] === 0 && e[1][2] === 0 && e[1][3] === 0 && e[2][0] === 0 && e[2][1] === 0 && e[2][2] === 1 && e[2][3] === 0 && e[3][2] === 0 && e[3][3] === 1;
	}
	function n(n, r, i, a, o) {
		for (var s = [
			[
				1,
				0,
				0,
				0
			],
			[
				0,
				1,
				0,
				0
			],
			[
				0,
				0,
				1,
				0
			],
			[
				0,
				0,
				0,
				1
			]
		], c = 0; c < 4; c++) s[c][3] = o[c];
		for (var l = 0; l < 3; l++) for (var u = 0; u < 3; u++) s[3][l] += n[u] * s[u][l];
		var d = a[0], f = a[1], p = a[2], m = a[3], h = [
			[
				1,
				0,
				0,
				0
			],
			[
				0,
				1,
				0,
				0
			],
			[
				0,
				0,
				1,
				0
			],
			[
				0,
				0,
				0,
				1
			]
		];
		h[0][0] = 1 - 2 * (f * f + p * p), h[0][1] = 2 * (d * f - p * m), h[0][2] = 2 * (d * p + f * m), h[1][0] = 2 * (d * f + p * m), h[1][1] = 1 - 2 * (d * d + p * p), h[1][2] = 2 * (f * p - d * m), h[2][0] = 2 * (d * p - f * m), h[2][1] = 2 * (f * p + d * m), h[2][2] = 1 - 2 * (d * d + f * f), s = e(s, h);
		var g = [
			[
				1,
				0,
				0,
				0
			],
			[
				0,
				1,
				0,
				0
			],
			[
				0,
				0,
				1,
				0
			],
			[
				0,
				0,
				0,
				1
			]
		];
		i[2] && (g[2][1] = i[2], s = e(s, g)), i[1] && (g[2][1] = 0, g[2][0] = i[0], s = e(s, g)), i[0] && (g[2][0] = 0, g[1][0] = i[0], s = e(s, g));
		for (var _ = 0; _ < 3; _++) for (var v = 0; v < 3; v++) s[_][v] *= r[_];
		return t(s) ? [
			s[0][0],
			s[0][1],
			s[1][0],
			s[1][1],
			s[3][0],
			s[3][1]
		] : s[0].concat(s[1], s[2], s[3]);
	}
	return n;
}();
function Ns(e) {
	return e.toFixed(6).replace(".000000", "");
}
function Ps(e, t) {
	var n, r;
	return e.decompositionPair !== t && (e.decompositionPair = t, n = js(e)), t.decompositionPair !== e && (t.decompositionPair = e, r = js(t)), n[0] === null || r[0] === null ? [
		[!1],
		[!0],
		function(n) {
			return n ? t[0].d : e[0].d;
		}
	] : (n[0].push(0), r[0].push(1), [
		n,
		r,
		function(e) {
			var t = Is(n[0][3], r[0][3], e[5]);
			return Ms(e[0], e[1], e[2], t, e[4]).map(Ns).join(",");
		}
	]);
}
function Fs(e, t) {
	for (var n = 0, r = 0; r < e.length; r++) n += e[r] * t[r];
	return n;
}
function Is(e, t, n) {
	var r = Fs(e, t);
	r = rn(r, -1, 1);
	var i = [];
	if (r === 1) i = e;
	else for (var a = Math.acos(r), o = Math.sin(n * a) * 1 / Math.sqrt(1 - r * r), s = 0; s < 4; s++) i.push(e[s] * (Math.cos(n * a) - r * o) + t[s] * o);
	return i;
}
function Ls(e) {
	return e.replace(/[XY]/, "");
}
function Rs(e) {
	return e.replace(/(X|Y|Z|3d)?$/, "3d");
}
var zs = function(e, t) {
	return e === "perspective" && t === "perspective" || (e === "matrix" || e === "matrix3d") && (t === "matrix" || t === "matrix3d");
};
function Bs(e, t, n) {
	var r = !1;
	if (!e.length || !t.length) {
		e.length || (r = !0, e = t, t = []);
		for (var i = function() {
			var n = e[a], r = n.t, i = n.d, o = +(r.substring(0, 5) === "scale");
			t.push({
				t: r,
				d: i.map(function(e) {
					return typeof e == "number" ? uo(o) : uo(o, e.unit);
				})
			});
		}, a = 0; a < e.length; a++) i();
	}
	var o = [], s = [], c = [];
	if (e.length !== t.length) {
		var l = Ps(e, t);
		o = [l[0]], s = [l[1]], c = [["matrix", [l[2]]]];
	} else for (var u = 0; u < e.length; u++) {
		var d = e[u].t, f = t[u].t, p = e[u].d, m = t[u].d, h = ws[d], g = ws[f], _ = void 0;
		if (zs(d, f)) {
			var v = Ps([e[u]], [t[u]]);
			o.push(v[0]), s.push(v[1]), c.push(["matrix", [v[2]]]);
			continue;
		} else if (d === f) _ = d;
		else if (h[2] && g[2] && Ls(d) === Ls(f)) _ = Ls(d), p = h[2](p), m = g[2](m);
		else if (h[1] && g[1] && Rs(d) === Rs(f)) _ = Rs(d), p = h[1](p), m = g[1](m);
		else {
			var y = Ps(e, t);
			o = [y[0]], s = [y[1]], c = [["matrix", [y[2]]]];
			break;
		}
		for (var b = [], x = [], S = [], C = 0; C < p.length; C++) {
			var w = Ro(p[C], m[C], n, !1, C);
			b[C] = w[0], x[C] = w[1], S.push(w[2]);
		}
		o.push(b), s.push(x), c.push([_, S]);
	}
	if (r) {
		var T = o;
		o = s, s = T;
	}
	return [
		o,
		s,
		function(e) {
			return e.map(function(e, t) {
				var n = e.map(function(e, n) {
					return c[t][1][n](e);
				}).join(",");
				return c[t][0] === "matrix" && n.split(",").length === 16 && (c[t][0] = "matrix3d"), c[t][0] === "matrix3d" && n.split(",").length === 6 && (c[t][0] = "matrix"), `${c[t][0]}(${n})`;
			}).join(" ");
		}
	];
}
var Vs = G(function(e) {
	if (nn(e)) {
		if (e === "text-anchor") return [uo(0, "px"), uo(0, "px")];
		var t = e.split(" ");
		return t.length === 1 && (t[0] === "top" || t[0] === "bottom" ? (t[1] = t[0], t[0] = "center") : t[1] = "center"), t.length === 2 ? [Fo(Hs(t[0])), Fo(Hs(t[1]))] : null;
	}
	return [uo(e[0] || 0, "px"), uo(e[1] || 0, "px")];
});
function Hs(e) {
	return e === "center" ? "50%" : e === "left" || e === "top" ? "0%" : e === "right" || e === "bottom" ? "100%" : e;
}
var Us = [
	{
		n: "display",
		k: ["none"]
	},
	{
		n: "opacity",
		int: !0,
		inh: !0,
		d: "1",
		syntax: U.OPACITY_VALUE
	},
	{
		n: "fillOpacity",
		int: !0,
		inh: !0,
		d: "1",
		syntax: U.OPACITY_VALUE
	},
	{
		n: "strokeOpacity",
		int: !0,
		inh: !0,
		d: "1",
		syntax: U.OPACITY_VALUE
	},
	{
		n: "fill",
		int: !0,
		k: ["none"],
		d: "none",
		syntax: U.PAINT
	},
	{
		n: "fillRule",
		k: ["nonzero", "evenodd"],
		d: "nonzero"
	},
	{
		n: "stroke",
		int: !0,
		k: ["none"],
		d: "none",
		syntax: U.PAINT,
		l: !0
	},
	{
		n: "shadowType",
		k: [
			"inner",
			"outer",
			"both"
		],
		d: "outer",
		l: !0
	},
	{
		n: "shadowColor",
		int: !0,
		syntax: U.COLOR
	},
	{
		n: "shadowOffsetX",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "shadowOffsetY",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "shadowBlur",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.SHADOW_BLUR
	},
	{
		n: "lineWidth",
		int: !0,
		inh: !0,
		d: "1",
		l: !0,
		a: ["strokeWidth"],
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "increasedLineWidthForHitTesting",
		inh: !0,
		d: "0",
		l: !0,
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "lineJoin",
		inh: !0,
		l: !0,
		a: ["strokeLinejoin"],
		k: [
			"miter",
			"bevel",
			"round"
		],
		d: "miter"
	},
	{
		n: "lineCap",
		inh: !0,
		l: !0,
		a: ["strokeLinecap"],
		k: [
			"butt",
			"round",
			"square"
		],
		d: "butt"
	},
	{
		n: "lineDash",
		int: !0,
		inh: !0,
		k: ["none"],
		a: ["strokeDasharray"],
		syntax: U.LENGTH_PERCENTAGE_12
	},
	{
		n: "lineDashOffset",
		int: !0,
		inh: !0,
		d: "0",
		a: ["strokeDashoffset"],
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "offsetPath",
		syntax: U.DEFINED_PATH
	},
	{
		n: "offsetDistance",
		int: !0,
		syntax: U.OFFSET_DISTANCE
	},
	{
		n: "dx",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "dy",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "zIndex",
		ind: !0,
		int: !0,
		d: "0",
		k: ["auto"],
		syntax: U.Z_INDEX
	},
	{
		n: "visibility",
		k: ["visible", "hidden"],
		ind: !0,
		inh: !0,
		int: !0,
		d: "visible"
	},
	{
		n: "pointerEvents",
		inh: !0,
		k: [
			"none",
			"auto",
			"stroke",
			"fill",
			"painted",
			"visible",
			"visiblestroke",
			"visiblefill",
			"visiblepainted",
			"all"
		],
		d: "auto"
	},
	{
		n: "filter",
		ind: !0,
		l: !0,
		k: ["none"],
		d: "none",
		syntax: U.FILTER
	},
	{
		n: "clipPath",
		syntax: U.DEFINED_PATH
	},
	{
		n: "textPath",
		syntax: U.DEFINED_PATH
	},
	{
		n: "textPathSide",
		k: ["left", "right"],
		d: "left"
	},
	{
		n: "textPathStartOffset",
		l: !0,
		d: "0",
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "transform",
		p: 100,
		int: !0,
		k: ["none"],
		d: "none",
		syntax: U.TRANSFORM
	},
	{
		n: "transformOrigin",
		p: 100,
		d: "0 0",
		l: !0,
		syntax: U.TRANSFORM_ORIGIN
	},
	{
		n: "cx",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.COORDINATE
	},
	{
		n: "cy",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.COORDINATE
	},
	{
		n: "cz",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.COORDINATE
	},
	{
		n: "r",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "rx",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "ry",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "x",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.COORDINATE
	},
	{
		n: "y",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.COORDINATE
	},
	{
		n: "z",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.COORDINATE
	},
	{
		n: "width",
		int: !0,
		l: !0,
		k: [
			"auto",
			"fit-content",
			"min-content",
			"max-content"
		],
		d: "0",
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "height",
		int: !0,
		l: !0,
		k: [
			"auto",
			"fit-content",
			"min-content",
			"max-content"
		],
		d: "0",
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "radius",
		int: !0,
		l: !0,
		d: "0",
		syntax: U.LENGTH_PERCENTAGE_14
	},
	{
		n: "x1",
		int: !0,
		l: !0,
		syntax: U.COORDINATE
	},
	{
		n: "y1",
		int: !0,
		l: !0,
		syntax: U.COORDINATE
	},
	{
		n: "z1",
		int: !0,
		l: !0,
		syntax: U.COORDINATE
	},
	{
		n: "x2",
		int: !0,
		l: !0,
		syntax: U.COORDINATE
	},
	{
		n: "y2",
		int: !0,
		l: !0,
		syntax: U.COORDINATE
	},
	{
		n: "z2",
		int: !0,
		l: !0,
		syntax: U.COORDINATE
	},
	{
		n: "d",
		int: !0,
		l: !0,
		d: "",
		syntax: U.PATH,
		p: 50
	},
	{
		n: "points",
		int: !0,
		l: !0,
		syntax: U.LIST_OF_POINTS,
		p: 50
	},
	{
		n: "text",
		l: !0,
		d: "",
		syntax: U.TEXT,
		p: 50
	},
	{
		n: "textTransform",
		l: !0,
		inh: !0,
		k: [
			"capitalize",
			"uppercase",
			"lowercase",
			"none"
		],
		d: "none",
		syntax: U.TEXT_TRANSFORM,
		p: 51
	},
	{
		n: "font",
		l: !0
	},
	{
		n: "fontSize",
		int: !0,
		inh: !0,
		d: "16px",
		l: !0,
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		n: "fontFamily",
		l: !0,
		inh: !0,
		d: "sans-serif"
	},
	{
		n: "fontStyle",
		l: !0,
		inh: !0,
		k: [
			"normal",
			"italic",
			"oblique"
		],
		d: "normal"
	},
	{
		n: "fontWeight",
		l: !0,
		inh: !0,
		k: [
			"normal",
			"bold",
			"bolder",
			"lighter"
		],
		d: "normal"
	},
	{
		n: "fontVariant",
		l: !0,
		inh: !0,
		k: ["normal", "small-caps"],
		d: "normal"
	},
	{
		n: "lineHeight",
		l: !0,
		syntax: U.LENGTH,
		int: !0,
		d: "0"
	},
	{
		n: "letterSpacing",
		l: !0,
		syntax: U.LENGTH,
		int: !0,
		d: "0"
	},
	{
		n: "miterLimit",
		l: !0,
		syntax: U.NUMBER,
		d: function(e) {
			return e === B.PATH || e === B.POLYGON || e === B.POLYLINE ? "4" : "10";
		}
	},
	{
		n: "wordWrap",
		l: !0
	},
	{
		n: "wordWrapWidth",
		l: !0
	},
	{
		n: "maxLines",
		l: !0
	},
	{
		n: "textOverflow",
		l: !0,
		d: "clip"
	},
	{
		n: "leading",
		l: !0
	},
	{
		n: "textBaseline",
		l: !0,
		inh: !0,
		k: [
			"top",
			"hanging",
			"middle",
			"alphabetic",
			"ideographic",
			"bottom"
		],
		d: "alphabetic"
	},
	{
		n: "textAlign",
		l: !0,
		inh: !0,
		k: [
			"start",
			"center",
			"middle",
			"end",
			"left",
			"right"
		],
		d: "start"
	},
	{
		n: "markerStart",
		syntax: U.MARKER
	},
	{
		n: "markerEnd",
		syntax: U.MARKER
	},
	{
		n: "markerMid",
		syntax: U.MARKER
	},
	{
		n: "markerStartOffset",
		syntax: U.LENGTH,
		l: !0,
		int: !0,
		d: "0"
	},
	{
		n: "markerEndOffset",
		syntax: U.LENGTH,
		l: !0,
		int: !0,
		d: "0"
	}
], Ws = new Set(Us.filter(function(e) {
	return !!e.l;
}).map(function(e) {
	return e.n;
})), Gs = {}, Ks = function() {
	function e(t) {
		var n = this;
		g(this, e), this.runtime = t, Us.forEach(function(e) {
			n.registerMetadata(e);
		});
	}
	return v(e, [
		{
			key: "registerMetadata",
			value: function(e) {
				[e.n].concat(w(e.a || [])).forEach(function(t) {
					Gs[t] = e;
				});
			}
		},
		{
			key: "getPropertySyntax",
			value: function(e) {
				return this.runtime.CSSPropertySyntaxFactory[e];
			}
		},
		{
			key: "processProperties",
			value: function(e, t) {
				var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
					skipUpdateAttribute: !1,
					skipParse: !1,
					forceUpdateGeometry: !1,
					usedAttributes: [],
					memoize: !0
				};
				Object.assign(e.attributes, t);
				var r = e.parsedStyle.clipPath, i = e.parsedStyle.offsetPath;
				qs(e, t);
				var a = !!n.forceUpdateGeometry;
				if (!a) {
					for (var o in t) if (Ws.has(o)) {
						a = !0;
						break;
					}
				}
				var s = Js(e);
				s.has("fill") && t.fill && (e.parsedStyle.fill = ko(t.fill)), s.has("stroke") && t.stroke && (e.parsedStyle.stroke = ko(t.stroke)), s.has("shadowColor") && t.shadowColor && (e.parsedStyle.shadowColor = ko(t.shadowColor)), s.has("filter") && t.filter && (e.parsedStyle.filter = Wo(t.filter)), s.has("radius") && !z(t.radius) && (e.parsedStyle.radius = Bo(t.radius, 4)), s.has("lineDash") && !z(t.lineDash) && (e.parsedStyle.lineDash = Bo(t.lineDash, "even")), s.has("points") && t.points && (e.parsedStyle.points = vs(t.points)), s.has("d") && t.d === "" && (e.parsedStyle.d = h({}, Zi)), s.has("d") && t.d && (e.parsedStyle.d = gs(t.d)), s.has("textTransform") && t.textTransform && this.runtime.CSSPropertySyntaxFactory[U.TEXT_TRANSFORM].calculator(null, null, { value: t.textTransform }, e, null), s.has("clipPath") && !un(t.clipPath) && this.runtime.CSSPropertySyntaxFactory[U.DEFINED_PATH].calculator("clipPath", r, t.clipPath, e, this.runtime), s.has("offsetPath") && t.offsetPath && this.runtime.CSSPropertySyntaxFactory[U.DEFINED_PATH].calculator("offsetPath", i, t.offsetPath, e, this.runtime), s.has("transform") && t.transform && (e.parsedStyle.transform = Es(t.transform)), s.has("transformOrigin") && t.transformOrigin && (e.parsedStyle.transformOrigin = Vs(t.transformOrigin)), s.has("markerStart") && t.markerStart && (e.parsedStyle.markerStart = this.runtime.CSSPropertySyntaxFactory[U.MARKER].calculator(null, t.markerStart, t.markerStart, null, null)), s.has("markerEnd") && t.markerEnd && (e.parsedStyle.markerEnd = this.runtime.CSSPropertySyntaxFactory[U.MARKER].calculator(null, t.markerEnd, t.markerEnd, null, null)), s.has("markerMid") && t.markerMid && (e.parsedStyle.markerMid = this.runtime.CSSPropertySyntaxFactory[U.MARKER].calculator("", t.markerMid, t.markerMid, null, null)), s.has("zIndex") && !z(t.zIndex) && this.runtime.CSSPropertySyntaxFactory[U.Z_INDEX].postProcessor(e), s.has("offsetDistance") && !z(t.offsetDistance) && this.runtime.CSSPropertySyntaxFactory[U.OFFSET_DISTANCE].postProcessor(e), s.has("transform") && t.transform && this.runtime.CSSPropertySyntaxFactory[U.TRANSFORM].postProcessor(e), s.has("transformOrigin") && t.transformOrigin && this.runtime.CSSPropertySyntaxFactory[U.TRANSFORM_ORIGIN].postProcessor(e), a && (e.dirty(!0, !0), n.forceUpdateGeometry || this.runtime.sceneGraphService.dirtyToRoot(e));
			}
		},
		{
			key: "updateGeometry",
			value: function(e) {
				var t = e.nodeName, n = this.runtime.geometryUpdaterFactory[t];
				if (n) {
					var r = e.geometry;
					r.contentBounds ||= new si(), r.renderBounds ||= new si();
					var i = e.parsedStyle, a = n.update(i, e), o = a.cx, s = o === void 0 ? 0 : o, c = a.cy, l = c === void 0 ? 0 : c, u = a.cz, d = u === void 0 ? 0 : u, f = a.hwidth, p = f === void 0 ? 0 : f, m = a.hheight, h = m === void 0 ? 0 : m, g = a.hdepth, _ = [
						Math.abs(p),
						Math.abs(h),
						g === void 0 ? 0 : g
					], v = i.stroke, y = i.lineWidth, b = y === void 0 ? 1 : y, x = i.increasedLineWidthForHitTesting, S = x === void 0 ? 0 : x, C = i.shadowType, w = C === void 0 ? "outer" : C, T = i.shadowColor, E = i.filter, D = E === void 0 ? [] : E, O = i.transformOrigin, k = [
						s,
						l,
						d
					];
					r.contentBounds.update(k, _);
					var A = t === B.POLYLINE || t === B.POLYGON || t === B.PATH ? Math.SQRT2 : .5;
					if (v && !v.isNone) {
						var j = ((b || 0) + (S || 0)) * A;
						_[0] += j, _[1] += j;
					}
					if (r.renderBounds.update(k, _), T && w && w !== "inner") {
						var ee = r.renderBounds, M = ee.min, N = ee.max, P = i.shadowBlur, te = i.shadowOffsetX, F = i.shadowOffsetY, ne = P || 0, re = te || 0, ie = F || 0, ae = M[0] - ne + re, I = N[0] + ne + re, oe = M[1] - ne + ie, se = N[1] + ne + ie;
						M[0] = Math.min(M[0], ae), N[0] = Math.max(N[0], I), M[1] = Math.min(M[1], oe), N[1] = Math.max(N[1], se), r.renderBounds.setMinMax(M, N);
					}
					D.forEach(function(e) {
						var t = e.name, n = e.params;
						if (t === "blur") {
							var i = n[0].value;
							r.renderBounds.update(r.renderBounds.center, st(r.renderBounds.halfExtents, r.renderBounds.halfExtents, [
								i,
								i,
								0
							]));
						} else if (t === "drop-shadow") {
							var a = n[0].value, o = n[1].value, s = n[2].value, c = r.renderBounds, l = c.min, u = c.max, d = l[0] - s + a, f = u[0] + s + a, p = l[1] - s + o, m = u[1] + s + o;
							l[0] = Math.min(l[0], d), u[0] = Math.max(u[0], f), l[1] = Math.min(l[1], p), u[1] = Math.max(u[1], m), r.renderBounds.setMinMax(l, u);
						}
					}), e.geometry.dirty = !1;
					var ce = p < 0, le = h < 0, L = (ce ? -1 : 1) * (O ? Vo(O[0], 0, e, !0) : 0), ue = (le ? -1 : 1) * (O ? Vo(O[1], 1, e, !0) : 0);
					(L || ue) && e.setOrigin(L, ue);
				}
			}
		},
		{
			key: "updateSizeAttenuation",
			value: function(e, t) {
				e.style.isSizeAttenuation ? (e.style.rawLineWidth || (e.style.rawLineWidth = e.style.lineWidth), e.style.lineWidth = (e.style.rawLineWidth || 1) / t, e.nodeName === B.CIRCLE && (e.style.rawR || (e.style.rawR = e.style.r), e.style.r = (e.style.rawR || 1) / t)) : (e.style.rawLineWidth && (e.style.lineWidth = e.style.rawLineWidth, delete e.style.rawLineWidth), e.nodeName === B.CIRCLE && e.style.rawR && (e.style.r = e.style.rawR, delete e.style.rawR));
			}
		}
	]);
}();
function qs(e, t) {
	var n = Js(e);
	for (var r in t) n.has(r) && (e.parsedStyle[r] = t[r]);
}
function Js(e) {
	return e.constructor.PARSED_STYLE_LIST;
}
var Ys = function() {
	function e() {
		g(this, e), this.mixer = Jo;
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n, r) {
			return zo(n);
		}
	}]);
}(), Xs = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n, r, i) {
			return n instanceof Za && (n = null), i.sceneGraphService.updateDisplayObjectDependency(e, t, n, r), e === "clipPath" && r.forEach(function(e) {
				e.childNodes.length === 0 && i.sceneGraphService.dirtyToRoot(e);
			}), n;
		}
	}]);
}(), Zs = function() {
	function e() {
		g(this, e), this.parser = ko, this.mixer = Ao;
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n, r) {
			return n instanceof Za ? n.value === "none" ? so : co : n;
		}
	}]);
}(), Qs = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n) {
			return n instanceof Za ? [] : n;
		}
	}]);
}();
function $s(e) {
	var t = e.parsedStyle.fontSize;
	return z(t) ? null : t;
}
var ec = function() {
	function e() {
		g(this, e), this.mixer = Jo;
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n, r, i) {
			if (an(n)) return n;
			if (eo.isRelativeUnit(n.unit)) {
				if (n.unit === K.kPercentage) return 0;
				if (n.unit === K.kEms) {
					if (r.parentNode) {
						var a = $s(r.parentNode);
						if (a) return a *= n.value, a;
					}
					return 0;
				}
				if (n.unit === K.kRems) {
					var o;
					if (r != null && (o = r.ownerDocument) != null && o.documentElement) {
						var s = $s(r.ownerDocument.documentElement);
						if (s) return s *= n.value, s;
					}
					return 0;
				}
			} else return n.value;
		}
	}]);
}(), tc = function() {
	function e() {
		g(this, e), this.mixer = Xo;
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n) {
			return n.map(function(e) {
				return e.value;
			});
		}
	}]);
}(), nc = function() {
	function e() {
		g(this, e), this.mixer = Xo;
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n) {
			return n.map(function(e) {
				return e.value;
			});
		}
	}]);
}(), rc = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n, r) {
			n instanceof Za && (n = null);
			var i = n?.cloneNode(!0);
			return i && (i.style.isMarker = !0), i;
		}
	}]);
}(), ic = function() {
	function e() {
		g(this, e), this.mixer = Jo;
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n) {
			return n.value;
		}
	}]);
}(), ac = function() {
	function e() {
		g(this, e), this.mixer = Yo(0, 1);
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n) {
			return n.value;
		}
	}, {
		key: "postProcessor",
		value: function(e) {
			var t = e.parsedStyle, n = t.offsetPath, r = t.offsetDistance;
			if (n) {
				var i = n.nodeName;
				if (i === B.LINE || i === B.PATH || i === B.POLYLINE) {
					var a = n.getPoint(r);
					a && e.setLocalPosition(a.x, a.y);
				}
			}
		}
	}]);
}(), oc = function() {
	function e() {
		g(this, e), this.mixer = Yo(0, 1);
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n) {
			return n.value;
		}
	}]);
}(), sc = function() {
	function e() {
		g(this, e), this.parser = gs, this.mixer = _s;
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n) {
			return n instanceof Za && n.value === "unset" ? {
				absolutePath: [],
				hasArc: !1,
				segments: [],
				polygons: [],
				polylines: [],
				curve: null,
				totalLength: 0,
				rect: new fi(0, 0, 0, 0)
			} : n;
		}
	}]);
}(), cc = v(function e() {
	g(this, e), this.mixer = ys;
}), lc = function(e) {
	function t() {
		var e;
		g(this, t);
		var n = [...arguments];
		return e = k(this, t, [].concat(n)), e.mixer = Yo(0, Infinity), e;
	}
	return j(t, e), v(t);
}(ec), uc = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n, r) {
			return n instanceof Za ? n.value === "unset" ? "" : n.value : `${n}`;
		}
	}, {
		key: "postProcessor",
		value: function(e) {
			e.nodeValue = `${e.parsedStyle.text}` || "";
		}
	}]);
}(), dc = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n, r) {
			var i = r.getAttribute("text");
			if (i) {
				var a = i;
				n.value === "capitalize" ? a = i.charAt(0).toUpperCase() + i.slice(1) : n.value === "lowercase" ? a = i.toLowerCase() : n.value === "uppercase" && (a = i.toUpperCase()), r.parsedStyle.text = a;
			}
			return n.value;
		}
	}]);
}(), fc = new WeakMap();
function pc(e, t, n) {
	if (e) {
		var r = typeof e == "string" ? document.getElementById(e) : e;
		fc.has(r) && fc.get(r).destroy(n), fc.set(r, t);
	}
}
var mc = typeof window < "u" && window.document !== void 0;
function hc(e) {
	return !!e.getAttribute;
}
function gc(e, t) {
	for (var n = 0, r = e.length; n < r;) {
		var i = n + r >>> 1;
		_c(e[i], t) < 0 ? n = i + 1 : r = i;
	}
	return n;
}
function _c(e, t) {
	var n = Number(e.parsedStyle.zIndex || 0), r = Number(t.parsedStyle.zIndex || 0);
	if (n === r) {
		var i = e.parentNode;
		if (i) {
			var a = i.childNodes || [];
			return a.indexOf(e) - a.indexOf(t);
		}
	}
	return n - r;
}
function vc(e) {
	var t = e;
	do {
		if (t.parsedStyle?.clipPath) return t;
		t = t.parentElement;
	} while (t !== null);
	return null;
}
var yc = "px";
function bc(e, t, n) {
	mc && e.style && (e.style.width = t + yc, e.style.height = n + yc);
}
function xc(e, t) {
	if (mc) return document.defaultView.getComputedStyle(e, null).getPropertyValue(t);
}
function Sc(e) {
	var t = xc(e, "width");
	return t === "auto" ? e.offsetWidth : parseFloat(t);
}
function Cc(e) {
	var t = xc(e, "height");
	return t === "auto" ? e.offsetHeight : parseFloat(t);
}
var wc = 1, Tc = {
	touchstart: "pointerdown",
	touchend: "pointerup",
	touchendoutside: "pointerupoutside",
	touchmove: "pointermove",
	touchcancel: "pointercancel"
}, Ec = typeof performance == "object" && performance.now ? performance : Date;
function Dc(e) {
	return e.nodeName === B.FRAGMENT ? !0 : e.getRootNode().nodeName === B.FRAGMENT;
}
function Oc() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "auto", t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, r = !1, i = !1, a = !!t && !t.isNone, o = !!n && !n.isNone;
	return e === "visiblepainted" || e === "painted" || e === "auto" ? (r = a, i = o) : e === "visiblefill" || e === "fill" ? r = !0 : e === "visiblestroke" || e === "stroke" ? i = !0 : (e === "visible" || e === "all") && (r = !0, i = !0), [r, i];
}
var kc = 1, Ac = function() {
	return kc++;
}, jc = typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : {}, Mc = Date.now(), Nc = function() {
	return jc.performance && typeof jc.performance.now == "function" ? jc.performance.now() : Date.now() - Mc;
}, q = {}, Pc = Date.now(), Fc = function(e) {
	if (typeof e != "function") throw TypeError(`${e} is not a function`);
	var t = Date.now(), n = t - Pc, r = n > 16 ? 0 : 16 - n, i = Ac();
	return q[i] = e, Object.keys(q).length > 1 || setTimeout(function() {
		Pc = t;
		var e = q;
		q = {}, Object.keys(e).forEach(function(t) {
			return e[t](Nc());
		});
	}, r), i;
}, Ic = function(e) {
	delete q[e];
}, Lc = [
	"",
	"webkit",
	"moz",
	"ms",
	"o"
], J = function(e) {
	return typeof e == "string" ? e === "" ? jc.requestAnimationFrame : jc[`${e}RequestAnimationFrame`] : Fc;
}, Rc = function(e) {
	return typeof e == "string" ? e === "" ? jc.cancelAnimationFrame : jc[`${e}CancelAnimationFrame`] || jc[`${e}CancelRequestAnimationFrame`] : Ic;
}, zc = function(e, t) {
	for (var n = 0; e[n] !== void 0;) {
		if (t(e[n])) return e[n];
		n += 1;
	}
}(Lc, function(e) {
	return !!J(e);
}), Bc = J(zc), Vc = Rc(zc);
jc.requestAnimationFrame = Bc, jc.cancelAnimationFrame = Vc;
var Hc = function() {
	function e() {
		g(this, e), this.callbacks = [];
	}
	return v(e, [
		{
			key: "getCallbacksNum",
			value: function() {
				return this.callbacks.length;
			}
		},
		{
			key: "tapPromise",
			value: function(e, t) {
				this.callbacks.push(t);
			}
		},
		{
			key: "promise",
			value: function() {
				var e = [...arguments];
				return Promise.all(this.callbacks.map(function(t) {
					return t.apply(void 0, e);
				}));
			}
		}
	]);
}(), Uc = function() {
	function e() {
		g(this, e), this.callbacks = [];
	}
	return v(e, [{
		key: "tapPromise",
		value: function(e, t) {
			this.callbacks.push(t);
		}
	}, {
		key: "promise",
		value: function() {
			var e = Jr(Kr().mark(function e() {
				var t, n, r, i, a = arguments;
				return Kr().wrap(function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							if (!this.callbacks.length) {
								e.next = 6;
								break;
							}
							return e.next = 1, (t = this.callbacks)[0].apply(t, a);
						case 1: n = e.sent, r = 1;
						case 2:
							if (!(r < this.callbacks.length)) {
								e.next = 5;
								break;
							}
							return i = this.callbacks[r], e.next = 3, i(n);
						case 3: n = e.sent;
						case 4:
							r++, e.next = 2;
							break;
						case 5: return e.abrupt("return", n);
						case 6: return e.abrupt("return", null);
						case 7:
						case "end": return e.stop();
					}
				}, e, this);
			}));
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		}()
	}]);
}(), Wc = function() {
	function e() {
		g(this, e), this.callbacks = [];
	}
	return v(e, [{
		key: "tap",
		value: function(e, t) {
			this.callbacks.push(t);
		}
	}, {
		key: "call",
		value: function() {
			var e = arguments;
			this.callbacks.forEach(function(t) {
				t.apply(void 0, e);
			});
		}
	}]);
}(), Gc = function() {
	function e() {
		g(this, e), this.callbacks = [];
	}
	return v(e, [{
		key: "tap",
		value: function(e, t) {
			this.callbacks.push(t);
		}
	}, {
		key: "call",
		value: function() {
			if (this.callbacks.length) {
				for (var e = arguments, t = this.callbacks[0].apply(void 0, e), n = 1; n < this.callbacks.length; n++) {
					var r = this.callbacks[n];
					t = r(t);
				}
				return t;
			}
			return null;
		}
	}]);
}(), Kc = [
	"serif",
	"sans-serif",
	"monospace",
	"cursive",
	"fantasy",
	"system-ui"
], qc = /([\"\'])[^\'\"]+\1/;
function Jc(e) {
	var t = e.fontSize, n = t === void 0 ? 16 : t, r = e.fontFamily, i = r === void 0 ? "sans-serif" : r, a = e.fontStyle, o = a === void 0 ? "normal" : a, s = e.fontVariant, c = s === void 0 ? "normal" : s, l = e.fontWeight;
	return {
		fontSize: n,
		fontFamily: i,
		fontStyle: o,
		fontVariant: c,
		fontWeight: l === void 0 ? "normal" : l
	};
}
var Yc = G(function(e) {
	for (var t = Jc(e), n = t.fontSize, r = t.fontFamily, i = t.fontStyle, a = t.fontVariant, o = t.fontWeight, s = an(n) && `${n}px` || "16px", c = r.split(","), l = c.length - 1; l >= 0; l--) {
		var u = c[l].trim();
		!qc.test(u) && Kc.indexOf(u) < 0 && (u = `"${u}"`), c[l] = u;
	}
	return `${i} ${a} ${o} ${s} ${c.join(",")}`;
}, function(e) {
	var t = Jc(e), n = t.fontSize, r = t.fontFamily;
	return `${t.fontStyle}_${t.fontVariant}_${t.fontWeight}_${n}_${r}`;
}), Xc = 1e-6, Zc = function(e) {
	return Math.max(e, Xc);
};
function Qc(e, t, n) {
	return L(e), e[4] = Math.tan(t), e[1] = Math.tan(n), e;
}
var $c = I(), el = I(), tl = {
	scale: function(e) {
		Se($c, [
			e[0].value,
			e[1].value,
			1
		].map(function(e) {
			return Zc(e);
		}));
	},
	scaleX: function(e) {
		Se($c, [
			e[0].value,
			1,
			1
		].map(function(e) {
			return Zc(e);
		}));
	},
	scaleY: function(e) {
		Se($c, [
			1,
			e[0].value,
			1
		].map(function(e) {
			return Zc(e);
		}));
	},
	scaleZ: function(e) {
		Se($c, [
			1,
			1,
			e[0].value
		].map(function(e) {
			return Zc(e);
		}));
	},
	scale3d: function(e) {
		Se($c, [
			e[0].value,
			e[1].value,
			e[2].value
		].map(function(e) {
			return Zc(e);
		}));
	},
	translate: function(e) {
		xe($c, [
			e[0].value,
			e[1].value,
			0
		]);
	},
	translateX: function(e) {
		xe($c, [
			e[0].value,
			0,
			0
		]);
	},
	translateY: function(e) {
		xe($c, [
			0,
			e[0].value,
			0
		]);
	},
	translateZ: function(e) {
		xe($c, [
			0,
			0,
			e[0].value
		]);
	},
	translate3d: function(e) {
		xe($c, [
			e[0].value,
			e[1].value,
			e[2].value
		]);
	},
	rotate: function(e) {
		Ee($c, V(zo(e[0])));
	},
	rotateX: function(e) {
		we($c, V(zo(e[0])));
	},
	rotateY: function(e) {
		Te($c, V(zo(e[0])));
	},
	rotateZ: function(e) {
		Ee($c, V(zo(e[0])));
	},
	rotate3d: function(e) {
		Ce($c, V(zo(e[3])), [
			e[0].value,
			e[1].value,
			e[2].value
		]);
	},
	skew: function(e) {
		Qc($c, V(e[0].value), V(e[1].value));
	},
	skewX: function(e) {
		Qc($c, V(e[0].value), 0);
	},
	skewY: function(e) {
		Qc($c, 0, V(e[0].value));
	},
	matrix: function(e) {
		le($c, e[0].value, e[1].value, 0, 0, e[2].value, e[3].value, 0, 0, 0, 0, 1, 0, e[4].value, e[5].value, 0, 1);
	},
	matrix3d: function(e) {
		le.apply(ae, [$c].concat(w(e.map(function(e) {
			return e.value;
		}))));
	}
}, nl = it(1, 1, 1), rl = R(), il = { translate: function(e, t) {
	X.sceneGraphService.setLocalScale(e, nl, !1), X.sceneGraphService.setLocalEulerAngles(e, rl, void 0, void 0, !1), X.sceneGraphService.setLocalPosition(e, [
		t[0].value,
		t[1].value,
		0
	], !1), X.sceneGraphService.dirtyLocalTransform(e, e.transformable);
} };
function al(e, t) {
	if (e.length) {
		if (e.length === 1 && il[e[0].t]) {
			il[e[0].t](t, e[0].d);
			return;
		}
		for (var n = L(el), r = 0; r < e.length; r++) {
			var i = e[r], a = i.t, o = i.d, s = tl[a];
			s && (s(o), et(n, n, $c));
		}
		t.setLocalTransform(n);
	} else t.resetLocalTransform();
	return t.getLocalTransform();
}
var ol = function() {
	function e() {
		g(this, e), this.parser = Ds, this.mixer = Bs;
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n, r) {
			return n instanceof Za ? [] : n;
		}
	}, {
		key: "postProcessor",
		value: function(e) {
			al(e.parsedStyle.transform, e);
		}
	}]);
}(), sl = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "postProcessor",
		value: function(e) {
			var t = e.parsedStyle.transformOrigin;
			t[0].unit === K.kPixels && t[1].unit === K.kPixels ? e.setOrigin(t[0].value, t[1].value) : e.getGeometryBounds();
		}
	}]);
}(), cl = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "calculator",
		value: function(e, t, n, r) {
			return n.value;
		}
	}, {
		key: "postProcessor",
		value: function(e) {
			if (e.parentNode) {
				var t = e.parentNode, n = t.renderable, r = t.sortable;
				n && t.dirty(), r && (r.dirty = !0, r.dirtyReason = Gi.Z_INDEX_CHANGED);
			}
		}
	}]);
}(), ll = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "update",
		value: function(e, t) {
			var n = e.cx, r = n === void 0 ? 0 : n, i = e.cy, a = i === void 0 ? 0 : i, o = e.r, s = o === void 0 ? 0 : o;
			return {
				cx: r,
				cy: a,
				hwidth: s,
				hheight: s
			};
		}
	}]);
}(), ul = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "update",
		value: function(e, t) {
			var n = e.cx, r = n === void 0 ? 0 : n, i = e.cy, a = i === void 0 ? 0 : i, o = e.rx, s = o === void 0 ? 0 : o, c = e.ry;
			return {
				cx: r,
				cy: a,
				hwidth: s,
				hheight: c === void 0 ? 0 : c
			};
		}
	}]);
}(), dl = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "update",
		value: function(e) {
			var t = e.x1, n = e.y1, r = e.x2, i = e.y2, a = Math.min(t, r), o = Math.max(t, r), s = Math.min(n, i), c = Math.max(n, i), l = o - a, u = c - s, d = l / 2, f = u / 2;
			return {
				cx: a + d,
				cy: s + f,
				hwidth: d,
				hheight: f
			};
		}
	}]);
}(), fl = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "update",
		value: function(e) {
			var t = e.d.rect, n = t.x, r = t.y, i = t.width, a = t.height, o = i / 2, s = a / 2;
			return {
				cx: n + o,
				cy: r + s,
				hwidth: o,
				hheight: s
			};
		}
	}]);
}(), pl = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "update",
		value: function(e) {
			if (e.points && Xt(e.points.points)) {
				var t = e.points.points, n = Math.min.apply(Math, w(t.map(function(e) {
					return e[0];
				}))), r = Math.max.apply(Math, w(t.map(function(e) {
					return e[0];
				}))), i = Math.min.apply(Math, w(t.map(function(e) {
					return e[1];
				}))), a = Math.max.apply(Math, w(t.map(function(e) {
					return e[1];
				}))), o = r - n, s = a - i, c = o / 2, l = s / 2;
				return {
					cx: n + c,
					cy: i + l,
					hwidth: c,
					hheight: l
				};
			}
			return {
				cx: 0,
				cy: 0,
				hwidth: 0,
				hheight: 0
			};
		}
	}]);
}(), ml = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "update",
		value: function(e, t) {
			var n = e.x, r = n === void 0 ? 0 : n, i = e.y, a = i === void 0 ? 0 : i, o = e.src, s = e.width, c = s === void 0 ? 0 : s, l = e.height, u = l === void 0 ? 0 : l, d = c, f = u;
			return o && !nn(o) && (d || (d = o.width, e.width = d), f || (f = o.height, e.height = f)), {
				cx: r + d / 2,
				cy: a + f / 2,
				hwidth: d / 2,
				hheight: f / 2
			};
		}
	}]);
}(), hl = function() {
	function e(t) {
		g(this, e), this.globalRuntime = t;
	}
	return v(e, [{
		key: "isReadyToMeasure",
		value: function(e, t) {
			return e.text;
		}
	}, {
		key: "update",
		value: function(e, t) {
			var n, r = e.text, i = e.textAlign, a = i === void 0 ? "start" : i, o = e.lineWidth, s = o === void 0 ? 1 : o, c = e.textBaseline, l = c === void 0 ? "alphabetic" : c, u = e.dx, d = u === void 0 ? 0 : u, f = e.dy, p = f === void 0 ? 0 : f, m = e.x, h = m === void 0 ? 0 : m, g = e.y, _ = g === void 0 ? 0 : g;
			if (!this.isReadyToMeasure(e, t)) return e.metrics = {
				font: "",
				width: 0,
				height: 0,
				lines: [],
				lineWidths: [],
				lineHeight: 0,
				maxLineWidth: 0,
				fontProperties: {
					ascent: 0,
					descent: 0,
					fontSize: 0
				},
				lineMetrics: []
			}, {
				hwidth: 0,
				hheight: 0,
				cx: 0,
				cy: 0
			};
			var v = ((t == null || (n = t.ownerDocument) == null || (n = n.defaultView) == null ? void 0 : n.getConfig()) || {}).offscreenCanvas, y = this.globalRuntime.textService.measureText(r, e, v);
			e.metrics = y;
			var b = y.width, x = y.height, S = b / 2, C = x / 2, w = h + S;
			a === "center" || a === "middle" ? w += s / 2 - S : (a === "right" || a === "end") && (w += s - S * 2);
			var T = _ - C;
			return l === "middle" ? T += C : l === "top" || l === "hanging" ? T += C * 2 : l === "alphabetic" || (l === "bottom" || l === "ideographic") && (T += 0), d && (w += d), p && (T += p), {
				cx: w,
				cy: T,
				hwidth: S,
				hheight: C
			};
		}
	}]);
}(), gl = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "update",
		value: function(e, t) {
			return {
				cx: 0,
				cy: 0,
				hwidth: 0,
				hheight: 0
			};
		}
	}]);
}(), _l = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "update",
		value: function(e, t) {
			var n = e.x, r = n === void 0 ? 0 : n, i = e.y, a = i === void 0 ? 0 : i, o = e.width, s = o === void 0 ? 0 : o, c = e.height, l = c === void 0 ? 0 : c;
			return {
				cx: r + s / 2,
				cy: a + l / 2,
				hwidth: s / 2,
				hheight: l / 2
			};
		}
	}]);
}(), vl = function() {
	function e(t) {
		g(this, e), this.eventPhase = e.prototype.NONE, this.bubbles = !0, this.cancelBubble = !0, this.cancelable = !1, this.defaultPrevented = !1, this.propagationStopped = !1, this.propagationImmediatelyStopped = !1, this.layer = new di(), this.page = new di(), this.canvas = new di(), this.viewport = new di(), this.composed = !1, this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = t;
	}
	return v(e, [
		{
			key: "name",
			get: function() {
				return this.type;
			}
		},
		{
			key: "layerX",
			get: function() {
				return this.layer.x;
			}
		},
		{
			key: "layerY",
			get: function() {
				return this.layer.y;
			}
		},
		{
			key: "pageX",
			get: function() {
				return this.page.x;
			}
		},
		{
			key: "pageY",
			get: function() {
				return this.page.y;
			}
		},
		{
			key: "x",
			get: function() {
				return this.canvas.x;
			}
		},
		{
			key: "y",
			get: function() {
				return this.canvas.y;
			}
		},
		{
			key: "canvasX",
			get: function() {
				return this.canvas.x;
			}
		},
		{
			key: "canvasY",
			get: function() {
				return this.canvas.y;
			}
		},
		{
			key: "viewportX",
			get: function() {
				return this.viewport.x;
			}
		},
		{
			key: "viewportY",
			get: function() {
				return this.viewport.y;
			}
		},
		{
			key: "composedPath",
			value: function() {
				return this.manager && (!this.path || this.path[0] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path;
			}
		},
		{
			key: "propagationPath",
			get: function() {
				return this.composedPath();
			}
		},
		{
			key: "preventDefault",
			value: function() {
				this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = !0;
			}
		},
		{
			key: "stopImmediatePropagation",
			value: function() {
				this.propagationImmediatelyStopped = !0;
			}
		},
		{
			key: "stopPropagation",
			value: function() {
				this.propagationStopped = !0;
			}
		},
		{
			key: "initEvent",
			value: function() {}
		},
		{
			key: "initUIEvent",
			value: function() {}
		},
		{
			key: "clone",
			value: function() {
				throw Error(pi);
			}
		}
	]);
}(), yl = function(e) {
	function t() {
		var e;
		g(this, t);
		var n = [...arguments];
		return e = k(this, t, [].concat(n)), e.client = new di(), e.movement = new di(), e.offset = new di(), e.global = new di(), e.screen = new di(), e;
	}
	return j(t, e), v(t, [
		{
			key: "clientX",
			get: function() {
				return this.client.x;
			}
		},
		{
			key: "clientY",
			get: function() {
				return this.client.y;
			}
		},
		{
			key: "movementX",
			get: function() {
				return this.movement.x;
			}
		},
		{
			key: "movementY",
			get: function() {
				return this.movement.y;
			}
		},
		{
			key: "offsetX",
			get: function() {
				return this.offset.x;
			}
		},
		{
			key: "offsetY",
			get: function() {
				return this.offset.y;
			}
		},
		{
			key: "globalX",
			get: function() {
				return this.global.x;
			}
		},
		{
			key: "globalY",
			get: function() {
				return this.global.y;
			}
		},
		{
			key: "screenX",
			get: function() {
				return this.screen.x;
			}
		},
		{
			key: "screenY",
			get: function() {
				return this.screen.y;
			}
		},
		{
			key: "getModifierState",
			value: function(e) {
				return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(e);
			}
		},
		{
			key: "initMouseEvent",
			value: function() {
				throw Error(pi);
			}
		}
	]);
}(vl), bl = function(e) {
	function t() {
		var e;
		g(this, t);
		var n = [...arguments];
		return e = k(this, t, [].concat(n)), e.width = 0, e.height = 0, e.isPrimary = !1, e;
	}
	return j(t, e), v(t, [
		{
			key: "getCoalescedEvents",
			value: function() {
				return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [this] : [];
			}
		},
		{
			key: "getPredictedEvents",
			value: function() {
				throw Error("getPredictedEvents is not supported!");
			}
		},
		{
			key: "clone",
			value: function() {
				return this.manager.clonePointerEvent(this);
			}
		}
	]);
}(yl), xl = function(e) {
	function t() {
		return g(this, t), k(this, t, arguments);
	}
	return j(t, e), v(t, [{
		key: "clone",
		value: function() {
			return this.manager.cloneWheelEvent(this);
		}
	}]);
}(yl), Sl = function(e) {
	function t(e, n) {
		var r;
		return g(this, t), r = k(this, t, [null]), r.type = e, r.detail = n?.detail, n && !("detail" in n) && (r.detail = n), Object.assign(r, n), r;
	}
	return j(t, e), v(t);
}(vl), Cl = function() {
	function e() {
		g(this, e), this.emitter = new te();
	}
	return v(e, [
		{
			key: "on",
			value: function(e, t, n) {
				return this.addEventListener(e, t, n), this;
			}
		},
		{
			key: "addEventListener",
			value: function(e, t, n) {
				var r = !1, i = !1;
				if (ln(n)) r = n;
				else if (n) {
					var a = n.capture;
					r = a === void 0 ? !1 : a;
					var o = n.once;
					i = o === void 0 ? !1 : o;
				}
				r && (e += "capture"), t = Yt(t) ? t : t.handleEvent;
				var s = Yt(t) ? void 0 : t;
				return i ? this.emitter.once(e, t, s) : this.emitter.on(e, t, s), this;
			}
		},
		{
			key: "off",
			value: function(e, t, n) {
				return e ? this.removeEventListener(e, t, n) : this.removeAllEventListeners(), this;
			}
		},
		{
			key: "removeAllEventListeners",
			value: function() {
				var e;
				(e = this.emitter) == null || e.removeAllListeners();
			}
		},
		{
			key: "removeEventListener",
			value: function(e, t, n) {
				if (!this.emitter) return this;
				(ln(n) ? n : n?.capture) && (e += "capture"), t = Yt(t) ? t : t?.handleEvent;
				var r = Yt(t) ? void 0 : t;
				return this.emitter.off(e, t, r), this;
			}
		},
		{
			key: "emit",
			value: function(e, t) {
				this.dispatchEvent(new Sl(e, t));
			}
		},
		{
			key: "dispatchEventToSelf",
			value: function(e) {
				e.target ||= this, e.currentTarget = this, this.emitter.emit(e.type, e);
			}
		},
		{
			key: "dispatchEvent",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
				if (arguments.length > 2 && arguments[2]) return this.dispatchEventToSelf(e), !0;
				var n = this.document ? this : this.defaultView ? this.defaultView : this.ownerDocument?.defaultView;
				if (n) {
					if (e.manager = n.getEventService(), !e.manager) return !1;
					e.defaultPrevented = !1, e.path ? e.path.length = 0 : e.page = [], t || (e.target = this), e.manager.dispatchEvent(e, e.type, t);
				} else this.dispatchEventToSelf(e);
				return !e.defaultPrevented;
			}
		}
	]);
}(), wl = function(e) {
	function t() {
		var e;
		g(this, t);
		var n = [...arguments];
		return e = k(this, t, [].concat(n)), e.shadow = !1, e.ownerDocument = null, e.isConnected = !1, e.baseURI = "", e.childNodes = [], e.nodeType = 0, e.nodeName = "", e.nodeValue = null, e.mutations = void 0, e.parentNode = null, e.destroyed = !1, e;
	}
	return j(t, e), v(t, [
		{
			key: "textContent",
			get: function() {
				var e = "";
				this.nodeName === B.TEXT && (e += this.style.text);
				var t = Yr(this.childNodes), n;
				try {
					for (t.s(); !(n = t.n()).done;) {
						var r = n.value;
						r.nodeName === B.TEXT ? e += r.nodeValue : e += r.textContent;
					}
				} catch (e) {
					t.e(e);
				} finally {
					t.f();
				}
				return e;
			},
			set: function(e) {
				var t = this;
				this.childNodes.slice().forEach(function(e) {
					t.removeChild(e);
				}), this.nodeName === B.TEXT && (this.style.text = `${e}`);
			}
		},
		{
			key: "getRootNode",
			value: function() {
				var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				return this.parentNode ? this.parentNode.getRootNode(e) : e.composed && this.host ? this.host.getRootNode(e) : this;
			}
		},
		{
			key: "hasChildNodes",
			value: function() {
				return this.childNodes.length > 0;
			}
		},
		{
			key: "isDefaultNamespace",
			value: function(e) {
				throw Error(pi);
			}
		},
		{
			key: "lookupNamespaceURI",
			value: function(e) {
				throw Error(pi);
			}
		},
		{
			key: "lookupPrefix",
			value: function(e) {
				throw Error(pi);
			}
		},
		{
			key: "normalize",
			value: function() {
				throw Error(pi);
			}
		},
		{
			key: "isEqualNode",
			value: function(e) {
				return this === e;
			}
		},
		{
			key: "isSameNode",
			value: function(e) {
				return this.isEqualNode(e);
			}
		},
		{
			key: "parent",
			get: function() {
				return this.parentNode;
			}
		},
		{
			key: "parentElement",
			get: function() {
				return null;
			}
		},
		{
			key: "nextSibling",
			get: function() {
				return null;
			}
		},
		{
			key: "previousSibling",
			get: function() {
				return null;
			}
		},
		{
			key: "firstChild",
			get: function() {
				return this.childNodes.length > 0 ? this.childNodes[0] : null;
			}
		},
		{
			key: "lastChild",
			get: function() {
				return this.childNodes.length > 0 ? this.childNodes[this.childNodes.length - 1] : null;
			}
		},
		{
			key: "compareDocumentPosition",
			value: function(e) {
				if (e === this) return 0;
				for (var n = e, r = this, i = [n], a = [r]; (o = n.parentNode) ?? r.parentNode;) {
					var o;
					n = n.parentNode ? (i.push(n.parentNode), n.parentNode) : n, r = r.parentNode ? (a.push(r.parentNode), r.parentNode) : r;
				}
				if (n !== r) return t.DOCUMENT_POSITION_DISCONNECTED | t.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC | t.DOCUMENT_POSITION_PRECEDING;
				var s = i.length > a.length ? i : a, c = s === i ? a : i;
				if (s[s.length - c.length] === c[0]) return s === i ? t.DOCUMENT_POSITION_CONTAINED_BY | t.DOCUMENT_POSITION_FOLLOWING : t.DOCUMENT_POSITION_CONTAINS | t.DOCUMENT_POSITION_PRECEDING;
				for (var l = s.length - c.length, u = c.length - 1; u >= 0; u--) {
					var d = c[u], f = s[l + u];
					if (f !== d) {
						var p = d.parentNode.childNodes;
						return p.indexOf(d) < p.indexOf(f) ? c === i ? t.DOCUMENT_POSITION_PRECEDING : t.DOCUMENT_POSITION_FOLLOWING : s === i ? t.DOCUMENT_POSITION_PRECEDING : t.DOCUMENT_POSITION_FOLLOWING;
					}
				}
				return t.DOCUMENT_POSITION_FOLLOWING;
			}
		},
		{
			key: "contain",
			value: function(e) {
				return this.contains(e);
			}
		},
		{
			key: "contains",
			value: function(e) {
				for (var t = e; t && this !== t;) t = t.parentNode;
				return !!t;
			}
		},
		{
			key: "getAncestor",
			value: function(e) {
				for (var t = this; e > 0 && t;) t = t.parentNode, e--;
				return t;
			}
		},
		{
			key: "forEach",
			value: function(e) {
				for (var t = [this]; t.length > 0;) {
					var n = t.pop();
					if (e(n) === !1) break;
					for (var r = n.childNodes.length - 1; r >= 0; r--) t.push(n.childNodes[r]);
				}
			}
		}
	], [{
		key: "isNode",
		value: function(e) {
			return !!e.childNodes;
		}
	}]);
}(Cl);
wl.DOCUMENT_POSITION_DISCONNECTED = 1, wl.DOCUMENT_POSITION_PRECEDING = 2, wl.DOCUMENT_POSITION_FOLLOWING = 4, wl.DOCUMENT_POSITION_CONTAINS = 8, wl.DOCUMENT_POSITION_CONTAINED_BY = 16, wl.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
var Tl = 2048, El = function() {
	function e(t, n) {
		var r = this;
		g(this, e), this.nativeHTMLMap = new WeakMap(), this.cursor = "default", this.mappingTable = {}, this.mappingState = { trackingData: {} }, this.eventPool = new Map(), this.tmpMatrix = I(), this.tmpVec3 = R(), this.onPointerDown = function(e) {
			var t = r.createPointerEvent(e);
			if (r.dispatchEvent(t, "pointerdown"), t.pointerType === "touch") r.dispatchEvent(t, "touchstart");
			else if (t.pointerType === "mouse" || t.pointerType === "pen") {
				var n = t.button === 2;
				r.dispatchEvent(t, n ? "rightdown" : "mousedown");
			}
			var i = r.trackingData(e.pointerId);
			i.pressTargetsByButton[e.button] = t.composedPath(), r.freeEvent(t);
		}, this.onPointerUp = function(e) {
			var t = Ec.now(), n = r.createPointerEvent(e, void 0, void 0, r.context.config.alwaysTriggerPointerEventOnCanvas ? r.rootTarget : void 0);
			if (r.dispatchEvent(n, "pointerup"), n.pointerType === "touch") r.dispatchEvent(n, "touchend");
			else if (n.pointerType === "mouse" || n.pointerType === "pen") {
				var i = n.button === 2;
				r.dispatchEvent(n, i ? "rightup" : "mouseup");
			}
			var a = r.trackingData(e.pointerId), o = r.findMountedTarget(a.pressTargetsByButton[e.button]), s = o;
			if (o && !n.composedPath().includes(o)) {
				for (var c = o; c && !n.composedPath().includes(c);) {
					if (n.currentTarget = c, r.notifyTarget(n, "pointerupoutside"), n.pointerType === "touch") r.notifyTarget(n, "touchendoutside");
					else if (n.pointerType === "mouse" || n.pointerType === "pen") {
						var l = n.button === 2;
						r.notifyTarget(n, l ? "rightupoutside" : "mouseupoutside");
					}
					wl.isNode(c) && (c = c.parentNode);
				}
				delete a.pressTargetsByButton[e.button], s = c;
			}
			if (s) {
				var u, d = r.clonePointerEvent(n, "click");
				d.target = s, d.path = [], a.clicksByButton[e.button] || (a.clicksByButton[e.button] = {
					clickCount: 0,
					target: d.target,
					timeStamp: t
				});
				var f = r.context.renderingContext.root.ownerDocument.defaultView, p = a.clicksByButton[e.button];
				p.target === d.target && t - p.timeStamp < f.getConfig().dblClickSpeed ? ++p.clickCount : p.clickCount = 1, p.target = d.target, p.timeStamp = t, d.detail = p.clickCount, (u = n.detail) != null && u.preventClick || (!r.context.config.useNativeClickEvent && (d.pointerType === "mouse" || d.pointerType === "touch") && r.dispatchEvent(d, "click"), r.dispatchEvent(d, "pointertap")), r.freeEvent(d);
			}
			r.freeEvent(n);
		}, this.onPointerMove = function(e) {
			var t = r.createPointerEvent(e, void 0, void 0, r.context.config.alwaysTriggerPointerEventOnCanvas ? r.rootTarget : void 0), n = t.pointerType === "mouse" || t.pointerType === "pen", i = r.trackingData(e.pointerId), a = r.findMountedTarget(i.overTargets);
			if (i.overTargets && a !== t.target) {
				var o = e.type === "mousemove" ? "mouseout" : "pointerout", s = r.createPointerEvent(e, o, a || void 0);
				if (r.dispatchEvent(s, "pointerout"), n && r.dispatchEvent(s, "mouseout"), !t.composedPath().includes(a)) {
					var c = r.createPointerEvent(e, "pointerleave", a || void 0);
					for (c.eventPhase = c.AT_TARGET; c.target && !t.composedPath().includes(c.target);) c.currentTarget = c.target, r.notifyTarget(c), n && r.notifyTarget(c, "mouseleave"), wl.isNode(c.target) && (c.target = c.target.parentNode);
					r.freeEvent(c);
				}
				r.freeEvent(s);
			}
			if (a !== t.target) {
				var l = e.type === "mousemove" ? "mouseover" : "pointerover", u = r.clonePointerEvent(t, l);
				r.dispatchEvent(u, "pointerover"), n && r.dispatchEvent(u, "mouseover");
				for (var d = a && wl.isNode(a) && a.parentNode; d && d !== (wl.isNode(r.rootTarget) && r.rootTarget.parentNode) && d !== t.target;) d = d.parentNode;
				if (!d || d === (wl.isNode(r.rootTarget) && r.rootTarget.parentNode)) {
					var f = r.clonePointerEvent(t, "pointerenter");
					for (f.eventPhase = f.AT_TARGET; f.target && f.target !== a && f.target !== (wl.isNode(r.rootTarget) && r.rootTarget.parentNode);) f.currentTarget = f.target, r.notifyTarget(f), n && r.notifyTarget(f, "mouseenter"), wl.isNode(f.target) && (f.target = f.target.parentNode);
					r.freeEvent(f);
				}
				r.freeEvent(u);
			}
			r.dispatchEvent(t, "pointermove"), t.pointerType === "touch" && r.dispatchEvent(t, "touchmove"), n && (r.dispatchEvent(t, "mousemove"), r.cursor = r.getCursor(t.target)), i.overTargets = t.composedPath(), r.freeEvent(t);
		}, this.onPointerOut = function(e) {
			var t = r.trackingData(e.pointerId);
			if (t.overTargets) {
				var n = e.pointerType === "mouse" || e.pointerType === "pen", i = r.findMountedTarget(t.overTargets), a = r.createPointerEvent(e, "pointerout", i || void 0);
				r.dispatchEvent(a), n && r.dispatchEvent(a, "mouseout");
				var o = r.createPointerEvent(e, "pointerleave", i || void 0);
				for (o.eventPhase = o.AT_TARGET; o.target && o.target !== (wl.isNode(r.rootTarget) && r.rootTarget.parentNode);) o.currentTarget = o.target, r.notifyTarget(o), n && r.notifyTarget(o, "mouseleave"), wl.isNode(o.target) && (o.target = o.target.parentNode);
				t.overTargets = null, r.freeEvent(a), r.freeEvent(o);
			}
			r.cursor = null;
		}, this.onPointerOver = function(e) {
			var t = r.trackingData(e.pointerId), n = r.createPointerEvent(e), i = n.pointerType === "mouse" || n.pointerType === "pen";
			r.dispatchEvent(n, "pointerover"), i && r.dispatchEvent(n, "mouseover"), n.pointerType === "mouse" && (r.cursor = r.getCursor(n.target));
			var a = r.clonePointerEvent(n, "pointerenter");
			for (a.eventPhase = a.AT_TARGET; a.target && a.target !== (wl.isNode(r.rootTarget) && r.rootTarget.parentNode);) a.currentTarget = a.target, r.notifyTarget(a), i && r.notifyTarget(a, "mouseenter"), wl.isNode(a.target) && (a.target = a.target.parentNode);
			t.overTargets = n.composedPath(), r.freeEvent(n), r.freeEvent(a);
		}, this.onPointerUpOutside = function(e) {
			var t = r.trackingData(e.pointerId), n = r.findMountedTarget(t.pressTargetsByButton[e.button]), i = r.createPointerEvent(e);
			if (n) {
				for (var a = n; a;) i.currentTarget = a, r.notifyTarget(i, "pointerupoutside"), i.pointerType === "touch" || (i.pointerType === "mouse" || i.pointerType === "pen") && r.notifyTarget(i, i.button === 2 ? "rightupoutside" : "mouseupoutside"), wl.isNode(a) && (a = a.parentNode);
				delete t.pressTargetsByButton[e.button];
			}
			r.freeEvent(i);
		}, this.onWheel = function(e) {
			var t = r.createWheelEvent(e);
			r.dispatchEvent(t), r.freeEvent(t);
		}, this.onClick = function(e) {
			if (r.context.config.useNativeClickEvent) {
				var t = r.createPointerEvent(e);
				r.dispatchEvent(t), r.freeEvent(t);
			}
		}, this.onPointerCancel = function(e) {
			var t = r.createPointerEvent(e, void 0, void 0, r.context.config.alwaysTriggerPointerEventOnCanvas ? r.rootTarget : void 0);
			r.dispatchEvent(t), r.freeEvent(t);
		}, this.globalRuntime = t, this.context = n;
	}
	return v(e, [
		{
			key: "init",
			value: function() {
				this.rootTarget = this.context.renderingContext.root.parentNode, this.addEventMapping("pointerdown", this.onPointerDown), this.addEventMapping("pointerup", this.onPointerUp), this.addEventMapping("pointermove", this.onPointerMove), this.addEventMapping("pointerout", this.onPointerOut), this.addEventMapping("pointerleave", this.onPointerOut), this.addEventMapping("pointercancel", this.onPointerCancel), this.addEventMapping("pointerover", this.onPointerOver), this.addEventMapping("pointerupoutside", this.onPointerUpOutside), this.addEventMapping("wheel", this.onWheel), this.addEventMapping("click", this.onClick);
			}
		},
		{
			key: "destroy",
			value: function() {
				this.mappingTable = {}, this.mappingState = {}, this.eventPool.clear();
			}
		},
		{
			key: "getScale",
			value: function() {
				var e = this.context.contextService.getBoundingClientRect(), t = 1, n = 1, r = this.context.contextService.getDomElement();
				if (r && e) {
					var i = r.offsetWidth, a = r.offsetHeight;
					i && a && (t = e.width / i, n = e.height / a);
				}
				return {
					scaleX: t,
					scaleY: n,
					bbox: e
				};
			}
		},
		{
			key: "client2Viewport",
			value: function(e) {
				var t = this.getScale(), n = t.scaleX, r = t.scaleY, i = t.bbox;
				return new di((e.x - (i?.left || 0)) / n, (e.y - (i?.top || 0)) / r);
			}
		},
		{
			key: "viewport2Client",
			value: function(e) {
				var t = this.getScale(), n = t.scaleX, r = t.scaleY, i = t.bbox;
				return new di((e.x + (i?.left || 0)) * n, (e.y + (i?.top || 0)) * r);
			}
		},
		{
			key: "viewport2Canvas",
			value: function(e) {
				var t = e.x, n = e.y, r = this.rootTarget.defaultView.getCamera(), i = this.context.config, a = i.width, o = i.height, s = r.getPerspectiveInverse(), c = r.getWorldTransform(), l = me(this.tmpMatrix, c, s), u = ot(this.tmpVec3, t / a * 2 - 1, (1 - n / o) * 2 - 1, 0);
				return vt(u, u, l), new di(u[0], u[1]);
			}
		},
		{
			key: "canvas2Viewport",
			value: function(e) {
				var t = this.rootTarget.defaultView.getCamera(), n = t.getPerspective(), r = t.getViewTransform(), i = me(this.tmpMatrix, n, r), a = ot(this.tmpVec3, e.x, e.y, 0);
				vt(this.tmpVec3, this.tmpVec3, i);
				var o = this.context.config, s = o.width, c = o.height;
				return new di((a[0] + 1) / 2 * s, (1 - (a[1] + 1) / 2) * c);
			}
		},
		{
			key: "setPickHandler",
			value: function(e) {
				this.pickHandler = e;
			}
		},
		{
			key: "addEventMapping",
			value: function(e, t) {
				this.mappingTable[e] || (this.mappingTable[e] = []), this.mappingTable[e].push({
					fn: t,
					priority: 0
				}), this.mappingTable[e].sort(function(e, t) {
					return e.priority - t.priority;
				});
			}
		},
		{
			key: "mapEvent",
			value: function(e) {
				if (this.rootTarget) {
					var t = this.mappingTable[e.type];
					if (t) for (var n = 0, r = t.length; n < r; n++) t[n].fn(e);
					else console.warn(`[EventService]: Event mapping not defined for ${e.type}`);
				}
			}
		},
		{
			key: "dispatchEvent",
			value: function(e, t, n) {
				n ? (e.eventPhase = e.AT_TARGET, e.currentTarget = this.rootTarget.defaultView || null, this.notifyListeners(e, t)) : (e.propagationStopped = !1, e.propagationImmediatelyStopped = !1, this.propagate(e, t));
			}
		},
		{
			key: "propagate",
			value: function(e, t) {
				if (e.target) {
					var n = e.composedPath();
					e.eventPhase = e.CAPTURING_PHASE;
					for (var r = n.length - 1; r >= 1; r--) if (e.currentTarget = n[r], this.notifyTarget(e, t), e.propagationStopped || e.propagationImmediatelyStopped) return;
					if (e.eventPhase = e.AT_TARGET, e.currentTarget = e.target, this.notifyTarget(e, t), !(e.propagationStopped || e.propagationImmediatelyStopped)) {
						var i = n.indexOf(e.currentTarget);
						e.eventPhase = e.BUBBLING_PHASE;
						for (var a = i + 1; a < n.length; a++) if (e.currentTarget = n[a], this.notifyTarget(e, t), e.propagationStopped || e.propagationImmediatelyStopped) return;
					}
				}
			}
		},
		{
			key: "propagationPath",
			value: function(e) {
				var t = [e], n = this.rootTarget.defaultView || null;
				if (n && n === e) return t.unshift(n.document), t;
				for (var r = 0; r < Tl && e !== this.rootTarget; r++) wl.isNode(e) && e.parentNode && (t.push(e.parentNode), e = e.parentNode);
				return n && t.push(n), t;
			}
		},
		{
			key: "hitTest",
			value: function(e) {
				var t = e.viewportX, n = e.viewportY, r = this.context.config, i = r.width, a = r.height, o = r.disableHitTesting;
				return t < 0 || n < 0 || t > i || n > a ? null : !o && this.pickHandler(e) || this.rootTarget || null;
			}
		},
		{
			key: "isNativeEventFromCanvas",
			value: function(e, t) {
				var n, r = t?.target;
				if ((n = r) != null && n.shadowRoot && (r = t.composedPath()[0]), r) {
					if (r === e) return !0;
					if (e && e.contains) return e.contains(r);
				}
				return t != null && t.composedPath ? t.composedPath().indexOf(e) > -1 : !1;
			}
		},
		{
			key: "getExistedHTML",
			value: function(e) {
				if (e.nativeEvent.composedPath) for (var t = 0, n = e.nativeEvent.composedPath(); t < n.length; t++) {
					var r = n[t], i = this.nativeHTMLMap.get(r);
					if (i) return i;
				}
				return null;
			}
		},
		{
			key: "pickTarget",
			value: function(e) {
				return this.hitTest({
					clientX: e.clientX,
					clientY: e.clientY,
					viewportX: e.viewportX,
					viewportY: e.viewportY,
					x: e.canvasX,
					y: e.canvasY
				});
			}
		},
		{
			key: "createPointerEvent",
			value: function(e, t, n, r) {
				var i = this.allocateEvent(bl);
				this.copyPointerData(e, i), this.copyMouseData(e, i), this.copyData(e, i), i.nativeEvent = e.nativeEvent, i.originalEvent = e;
				var a = this.getExistedHTML(i), o = this.context.contextService.getDomElement();
				return i.target = n ?? (a || this.isNativeEventFromCanvas(o, i.nativeEvent) && this.pickTarget(i) || r), typeof t == "string" && (i.type = t), i;
			}
		},
		{
			key: "createWheelEvent",
			value: function(e) {
				var t = this.allocateEvent(xl);
				this.copyWheelData(e, t), this.copyMouseData(e, t), this.copyData(e, t), t.nativeEvent = e.nativeEvent, t.originalEvent = e;
				var n = this.getExistedHTML(t), r = this.context.contextService.getDomElement();
				return t.target = n || this.isNativeEventFromCanvas(r, t.nativeEvent) && this.pickTarget(t), t;
			}
		},
		{
			key: "trackingData",
			value: function(e) {
				return this.mappingState.trackingData[e] || (this.mappingState.trackingData[e] = {
					pressTargetsByButton: {},
					clicksByButton: {},
					overTarget: null
				}), this.mappingState.trackingData[e];
			}
		},
		{
			key: "cloneWheelEvent",
			value: function(e) {
				var t = this.allocateEvent(xl);
				return t.nativeEvent = e.nativeEvent, t.originalEvent = e.originalEvent, this.copyWheelData(e, t), this.copyMouseData(e, t), this.copyData(e, t), t.target = e.target, t.path = e.composedPath().slice(), t.type = e.type, t;
			}
		},
		{
			key: "clonePointerEvent",
			value: function(e, t) {
				var n = this.allocateEvent(bl);
				return n.nativeEvent = e.nativeEvent, n.originalEvent = e.originalEvent, this.copyPointerData(e, n), this.copyMouseData(e, n), this.copyData(e, n), n.target = e.target, n.path = e.composedPath().slice(), n.type = t ?? n.type, n;
			}
		},
		{
			key: "copyPointerData",
			value: function(e, t) {
				t.pointerId = e.pointerId, t.width = e.width, t.height = e.height, t.isPrimary = e.isPrimary, t.pointerType = e.pointerType, t.pressure = e.pressure, t.tangentialPressure = e.tangentialPressure, t.tiltX = e.tiltX, t.tiltY = e.tiltY, t.twist = e.twist;
			}
		},
		{
			key: "copyMouseData",
			value: function(e, t) {
				t.altKey = e.altKey, t.button = e.button, t.buttons = e.buttons, t.ctrlKey = e.ctrlKey, t.metaKey = e.metaKey, t.shiftKey = e.shiftKey, t.client.copyFrom(e.client), t.movement.copyFrom(e.movement), t.canvas.copyFrom(e.canvas), t.screen.copyFrom(e.screen), t.global.copyFrom(e.global), t.offset.copyFrom(e.offset);
			}
		},
		{
			key: "copyWheelData",
			value: function(e, t) {
				t.deltaMode = e.deltaMode, t.deltaX = e.deltaX, t.deltaY = e.deltaY, t.deltaZ = e.deltaZ;
			}
		},
		{
			key: "copyData",
			value: function(e, t) {
				t.isTrusted = e.isTrusted, t.timeStamp = Ec.now(), t.type = e.type, t.detail = e.detail, t.view = e.view, t.page.copyFrom(e.page), t.viewport.copyFrom(e.viewport);
			}
		},
		{
			key: "allocateEvent",
			value: function(e) {
				this.eventPool.has(e) || this.eventPool.set(e, []);
				var t = this.eventPool.get(e).pop() || new e(this);
				return t.eventPhase = t.NONE, t.currentTarget = null, t.path = [], t.target = null, t;
			}
		},
		{
			key: "freeEvent",
			value: function(e) {
				if (e.manager !== this) throw Error("It is illegal to free an event not managed by this EventBoundary!");
				var t = e.constructor;
				this.eventPool.has(t) || this.eventPool.set(t, []), this.eventPool.get(t).push(e);
			}
		},
		{
			key: "notifyTarget",
			value: function(e, t) {
				t ??= e.type;
				var n = e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET ? `${t}capture` : t;
				this.notifyListeners(e, n), e.eventPhase === e.AT_TARGET && this.notifyListeners(e, t);
			}
		},
		{
			key: "notifyListeners",
			value: function(e, t) {
				var n = e.currentTarget.emitter, r = n._events[t];
				if (r) if ("fn" in r) r.once && n.removeListener(t, r.fn, void 0, !0), r.fn.call(e.currentTarget || r.context, e);
				else for (var i = 0; i < r.length && !e.propagationImmediatelyStopped; i++) r[i].once && n.removeListener(t, r[i].fn, void 0, !0), r[i].fn.call(e.currentTarget || r[i].context, e);
			}
		},
		{
			key: "findMountedTarget",
			value: function(e) {
				if (!e) return null;
				for (var t = e[e.length - 1], n = e.length - 2; n >= 0; n--) {
					var r = e[n];
					if (r === this.rootTarget || wl.isNode(r) && r.parentNode === t) t = e[n];
					else break;
				}
				return t;
			}
		},
		{
			key: "getCursor",
			value: function(e) {
				for (var t = e; t;) {
					var n = hc(t) && t.getAttribute("cursor");
					if (n) return n;
					t = wl.isNode(t) && t.parentNode;
				}
			}
		}
	]);
}(), Dl = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "getOrCreateCanvas",
		value: function(e, t) {
			if (this.canvas) return this.canvas;
			if (e || X.offscreenCanvas) this.canvas = e || X.offscreenCanvas, this.context = this.canvas.getContext("2d", h({ willReadFrequently: !0 }, t));
			else try {
				this.canvas = new window.OffscreenCanvas(0, 0), this.context = this.canvas.getContext("2d", h({ willReadFrequently: !0 }, t)), (!this.context || !this.context.measureText) && (this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"));
			} catch {
				this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d", h({ willReadFrequently: !0 }, t));
			}
			return this.canvas.width = 10, this.canvas.height = 10, this.canvas;
		}
	}, {
		key: "getOrCreateContext",
		value: function(e, t) {
			return this.context || this.getOrCreateCanvas(e, t), this.context;
		}
	}], [{
		key: "createCanvas",
		value: function() {
			try {
				return new window.OffscreenCanvas(0, 0);
			} catch {}
			try {
				return document.createElement("canvas");
			} catch {}
			return null;
		}
	}]);
}(), Ol = function(e) {
	return e[e.CAMERA_CHANGED = 0] = "CAMERA_CHANGED", e[e.DISPLAY_OBJECT_CHANGED = 1] = "DISPLAY_OBJECT_CHANGED", e[e.NONE = 2] = "NONE", e;
}({}), kl = function() {
	function e(t, n) {
		g(this, e), this.inited = !1, this.stats = {
			total: 0,
			rendered: 0
		}, this.zIndexCounter = 0, this.hooks = {
			init: new Wc(),
			initAsync: new Hc(),
			dirtycheck: new Gc(),
			cull: new Gc(),
			beginFrame: new Wc(),
			beforeRender: new Wc(),
			render: new Wc(),
			afterRender: new Wc(),
			endFrame: new Wc(),
			destroy: new Wc(),
			pick: new Uc(),
			pickSync: new Gc(),
			pointerDown: new Wc(),
			pointerUp: new Wc(),
			pointerMove: new Wc(),
			pointerOut: new Wc(),
			pointerOver: new Wc(),
			pointerWheel: new Wc(),
			pointerCancel: new Wc(),
			click: new Wc()
		}, this.globalRuntime = t, this.context = n;
	}
	return v(e, [
		{
			key: "init",
			value: function(e) {
				var t = this, n = h(h({}, this.globalRuntime), this.context);
				this.context.renderingPlugins.forEach(function(e) {
					e.apply(n, t.globalRuntime);
				}), this.hooks.init.call(), this.hooks.initAsync.getCallbacksNum() === 0 ? (this.inited = !0, e()) : this.hooks.initAsync.promise().then(function() {
					t.inited = !0, e();
				}).catch(function(e) {});
			}
		},
		{
			key: "getStats",
			value: function() {
				return this.stats;
			}
		},
		{
			key: "disableDirtyRectangleRendering",
			value: function() {
				return !this.context.config.renderer.getConfig().enableDirtyRectangleRendering || this.context.renderingContext.renderReasons.has(Ol.CAMERA_CHANGED);
			}
		},
		{
			key: "render",
			value: function(e, t, n) {
				var r = this, i = e.getConfig(), a = this.context.renderingContext;
				if (this.stats.total = 0, this.stats.rendered = 0, this.zIndexCounter = 0, this.globalRuntime.sceneGraphService.syncHierarchy(a.root), this.globalRuntime.sceneGraphService.notifyMutationObservers(e), a.renderReasons.size && this.inited) {
					a.dirtyRectangleRenderingDisabled = this.disableDirtyRectangleRendering();
					var o = a.renderReasons.size === 1 && a.renderReasons.has(Ol.CAMERA_CHANGED), s = !i.disableRenderHooks || !o;
					s && this.renderDisplayObject(a.root, i, a), this.hooks.beginFrame.call(t), s && a.renderListCurrentFrame.forEach(function(e) {
						r.hooks.beforeRender.call(e), r.hooks.render.call(e), r.hooks.afterRender.call(e);
					}), this.hooks.endFrame.call(t), a.renderListCurrentFrame = [], a.renderReasons.clear(), n();
				}
			}
		},
		{
			key: "renderDisplayObject",
			value: function(e, t, n) {
				var r = this, i = t.renderer.getConfig(), a = i.enableDirtyCheck, o = i.enableCulling;
				function s(e) {
					var t = e.renderable, i = e.sortable, s = a ? t.dirty || n.dirtyRectangleRenderingDisabled ? e : null : e, c = null;
					s && (c = o ? r.hooks.cull.call(s, r.context.camera) : s, c && (r.stats.rendered += 1, n.renderListCurrentFrame.push(c))), e.dirty(!1), i.renderOrder = r.zIndexCounter, r.zIndexCounter += 1, r.stats.total += 1, i.dirty && (r.sort(e, i), i.dirty = !1, i.dirtyChildren = [], i.dirtyReason = void 0);
				}
				for (var c = [e]; c.length > 0;) {
					var l, u = c.pop();
					s(u);
					for (var d = ((l = u.sortable) == null || (l = l.sorted) == null ? void 0 : l.length) > 0 ? u.sortable.sorted : u.childNodes, f = d.length - 1; f >= 0; f--) c.push(d[f]);
				}
			}
		},
		{
			key: "sort",
			value: function(e, t) {
				var n;
				(t == null || (n = t.sorted) == null ? void 0 : n.length) > 0 && t.dirtyReason !== Gi.Z_INDEX_CHANGED ? t.dirtyChildren.forEach(function(n) {
					var r = t.sorted.indexOf(n);
					if (r > -1 && t.sorted.splice(r, 1), e.childNodes.indexOf(n) > -1) if (t.sorted.length === 0) t.sorted.push(n);
					else {
						var i = gc(t.sorted, n);
						t.sorted.splice(i, 0, n);
					}
				}) : t.sorted = e.childNodes.slice().sort(_c), t.sorted?.length > 0 && e.childNodes.filter(function(e) {
					return e.parsedStyle.zIndex;
				}).length === 0 && (t.sorted = []);
			}
		},
		{
			key: "destroy",
			value: function() {
				this.inited = !1, this.hooks.destroy.call();
			}
		},
		{
			key: "dirty",
			value: function() {
				this.context.renderingContext.renderReasons.add(Ol.DISPLAY_OBJECT_CHANGED);
			}
		}
	]);
}(), Al = /\[\s*(.*)=(.*)\s*\]/, jl = function() {
	function e() {
		g(this, e);
	}
	return v(e, [
		{
			key: "selectOne",
			value: function(e, t) {
				var n = this;
				if (e.startsWith(".")) return t.find(function(t) {
					return (t?.classList || []).indexOf(n.getIdOrClassname(e)) > -1;
				});
				if (e.startsWith("#")) return t.find(function(t) {
					return t.id === n.getIdOrClassname(e);
				});
				if (e.startsWith("[")) {
					var r = this.getAttribute(e), i = r.name, a = r.value;
					return i ? t.find(function(e) {
						return t !== e && (i === "name" ? e.name === a : n.attributeToString(e, i) === a);
					}) : null;
				}
				return t.find(function(n) {
					return t !== n && n.nodeName === e;
				});
			}
		},
		{
			key: "selectAll",
			value: function(e, t) {
				var n = this;
				if (e.startsWith(".")) return t.findAll(function(r) {
					return t !== r && (r?.classList || []).indexOf(n.getIdOrClassname(e)) > -1;
				});
				if (e.startsWith("#")) return t.findAll(function(r) {
					return t !== r && r.id === n.getIdOrClassname(e);
				});
				if (e.startsWith("[")) {
					var r = this.getAttribute(e), i = r.name, a = r.value;
					return i ? t.findAll(function(e) {
						return t !== e && (i === "name" ? e.name === a : n.attributeToString(e, i) === a);
					}) : [];
				}
				return t.findAll(function(n) {
					return t !== n && n.nodeName === e;
				});
			}
		},
		{
			key: "is",
			value: function(e, t) {
				if (e.startsWith(".")) return t.className === this.getIdOrClassname(e);
				if (e.startsWith("#")) return t.id === this.getIdOrClassname(e);
				if (e.startsWith("[")) {
					var n = this.getAttribute(e), r = n.name, i = n.value;
					return r === "name" ? t.name === i : this.attributeToString(t, r) === i;
				}
				return t.nodeName === e;
			}
		},
		{
			key: "getIdOrClassname",
			value: function(e) {
				return e.substring(1);
			}
		},
		{
			key: "getAttribute",
			value: function(e) {
				var t = e.match(Al), n = "", r = "";
				return t && t.length > 2 && (n = t[1].replace(/"/g, ""), r = t[2].replace(/"/g, "")), {
					name: n,
					value: r
				};
			}
		},
		{
			key: "attributeToString",
			value: function(e, t) {
				if (!e.getAttribute) return "";
				var n = e.getAttribute(t);
				return z(n) ? "" : n.toString ? n.toString() : "";
			}
		}
	]);
}(), Y = function(e) {
	return e.ATTR_MODIFIED = "DOMAttrModified", e.INSERTED = "DOMNodeInserted", e.MOUNTED = "DOMNodeInsertedIntoDocument", e.REMOVED = "removed", e.UNMOUNTED = "DOMNodeRemovedFromDocument", e.REPARENT = "reparent", e.DESTROY = "destroy", e.BOUNDS_CHANGED = "bounds-changed", e.CULLED = "culled", e;
}({}), Ml = function(e) {
	function t(e, n, r, i, a, o, s, c) {
		var l;
		return g(this, t), l = k(this, t, [null]), l.relatedNode = n, l.prevValue = r, l.newValue = i, l.attrName = a, l.attrChange = o, l.prevParsedValue = s, l.newParsedValue = c, l.type = e, l;
	}
	return j(t, e), v(t);
}(vl);
Ml.ADDITION = 2, Ml.MODIFICATION = 1, Ml.REMOVAL = 3;
var Nl = new Ml(Y.REPARENT, null, "", "", "", 0, "", ""), Pl = Ut(), Fl = R(), Il = it(1, 1, 1), Ll = I(), Rl = Ut(), zl = R(), Bl = I(), Vl = jt(), Hl = R(), Ul = jt(), Wl = R(), Gl = R(), Kl = R(), ql = I(), Jl = jt(), Yl = jt(), Xl = jt(), Zl = function() {
	function e(t) {
		g(this, e), this.displayObjectDependencyMap = new WeakMap(), this.runtime = t;
	}
	return v(e, [
		{
			key: "matches",
			value: function(e, t) {
				return this.runtime.sceneGraphSelector.is(e, t);
			}
		},
		{
			key: "querySelector",
			value: function(e, t) {
				return this.runtime.sceneGraphSelector.selectOne(e, t);
			}
		},
		{
			key: "querySelectorAll",
			value: function(e, t) {
				return this.runtime.sceneGraphSelector.selectAll(e, t);
			}
		},
		{
			key: "attach",
			value: function(e, t, n) {
				var r, i = !1;
				e.parentNode && (i = e.parentNode !== t, this.detach(e));
				var a = e.nodeName === B.FRAGMENT, o = Dc(t);
				e.parentNode = t;
				var s = a ? e.childNodes : [e];
				an(n) ? s.forEach(function(e) {
					t.childNodes.splice(n, 0, e), e.parentNode = t;
				}) : s.forEach(function(e) {
					t.childNodes.push(e), e.parentNode = t;
				});
				var c = t.sortable;
				if ((c != null && (r = c.sorted) != null && r.length || c.dirty || e.parsedStyle.zIndex) && (c.dirtyChildren.indexOf(e) === -1 && c.dirtyChildren.push(e), c.dirty = !0, c.dirtyReason = Gi.ADDED), !o) {
					if (a) this.dirtyFragment(e);
					else {
						var l = e.transformable;
						l && this.dirtyWorldTransform(e, l);
					}
					if (i) {
						var u, d = ((u = t.ownerDocument) == null || (u = u.defaultView) == null || (u = u.getConfig()) == null || (u = u.future) == null ? void 0 : u.experimentalCancelEventPropagation) === !0;
						e.dispatchEvent(Nl, d, d);
					}
				}
			}
		},
		{
			key: "detach",
			value: function(e) {
				var t, n;
				if (e.parentNode) {
					var r = e.transformable, i = e.parentNode.sortable;
					(i != null && (t = i.sorted) != null && t.length || (n = e.style) != null && n.zIndex) && (i.dirtyChildren.indexOf(e) === -1 && i.dirtyChildren.push(e), i.dirty = !0, i.dirtyReason = Gi.REMOVED);
					var a = e.parentNode.childNodes.indexOf(e);
					a > -1 && e.parentNode.childNodes.splice(a, 1), r && this.dirtyWorldTransform(e, r), e.parentNode = null;
				}
			}
		},
		{
			key: "getLocalPosition",
			value: function(e) {
				return e.transformable.localPosition;
			}
		},
		{
			key: "getLocalRotation",
			value: function(e) {
				return e.transformable.localRotation;
			}
		},
		{
			key: "getLocalScale",
			value: function(e) {
				return e.transformable.localScale;
			}
		},
		{
			key: "getLocalSkew",
			value: function(e) {
				return e.transformable.localSkew;
			}
		},
		{
			key: "getLocalTransform",
			value: function(e) {
				var t = e.transformable;
				return Yi(t), t.localTransform;
			}
		},
		{
			key: "setLocalPosition",
			value: function(e, t) {
				var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = e.transformable;
				Gl[0] = t[0], Gl[1] = t[1], Gl[2] = t[2] ?? 0, !xt(r.localPosition, Gl) && (at(r.localPosition, Gl), n && this.dirtyLocalTransform(e, r));
			}
		},
		{
			key: "translateLocal",
			value: function(e, t) {
				var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
				typeof t == "number" && (t = it(t, n, r));
				var i = e.transformable;
				xt(t, Fl) || (bt(t, t, i.localRotation), st(i.localPosition, i.localPosition, t), this.dirtyLocalTransform(e, i));
			}
		},
		{
			key: "setLocalRotation",
			value: function(e, t, n, r, i) {
				var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
				typeof t == "number" && (t = Bt(Vl, t, n, r, i));
				var o = e.transformable;
				zt(o.localRotation, t), a && this.dirtyLocalTransform(e, o);
			}
		},
		{
			key: "rotateLocal",
			value: function(e, t) {
				var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
				typeof t == "number" && (t = it(t, n, r));
				var i = e.transformable;
				Lt(Yl, t[0], t[1], t[2]), Vt(i.localRotation, i.localRotation, Yl), this.dirtyLocalTransform(e, i);
			}
		},
		{
			key: "setLocalScale",
			value: function(e, t) {
				var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, r = e.transformable;
				ot(zl, t[0], t[1], t[2] ?? r.localScale[2]), !xt(zl, r.localScale) && (at(r.localScale, zl), n && this.dirtyLocalTransform(e, r));
			}
		},
		{
			key: "scaleLocal",
			value: function(e, t) {
				var n = e.transformable;
				lt(n.localScale, n.localScale, ot(zl, t[0], t[1], t[2] ?? 1)), this.dirtyLocalTransform(e, n);
			}
		},
		{
			key: "setLocalSkew",
			value: function(e, t, n) {
				var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
				typeof t == "number" && (t = Gt(Rl, t, n));
				var i = e.transformable;
				Wt(i.localSkew, t), r && this.dirtyLocalTransform(e, i);
			}
		},
		{
			key: "setLocalEulerAngles",
			value: function(e, t) {
				var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0;
				typeof t == "number" && (t = it(t, n, r));
				var a = e.transformable;
				Lt(a.localRotation, t[0], t[1], t[2]), i && this.dirtyLocalTransform(e, a);
			}
		},
		{
			key: "setLocalTransform",
			value: function(e, t) {
				var n = ke(Hl, t), r = je(Ul, t), i = Ae(Wl, t);
				this.setLocalScale(e, i, !1), this.setLocalPosition(e, n, !1), this.setLocalRotation(e, r, void 0, void 0, void 0, !1), this.dirtyLocalTransform(e, e.transformable);
			}
		},
		{
			key: "resetLocalTransform",
			value: function(e) {
				this.setLocalScale(e, Il, !1), this.setLocalPosition(e, Fl, !1), this.setLocalEulerAngles(e, Fl, void 0, void 0, !1), this.setLocalSkew(e, Pl, void 0, !1), this.dirtyLocalTransform(e, e.transformable);
			}
		},
		{
			key: "getPosition",
			value: function(e) {
				var t = e.transformable;
				return ke(t.position, this.getWorldTransform(e, t));
			}
		},
		{
			key: "getRotation",
			value: function(e) {
				var t = e.transformable;
				return je(t.rotation, this.getWorldTransform(e, t));
			}
		},
		{
			key: "getScale",
			value: function(e) {
				var t = e.transformable;
				return Ae(t.scaling, this.getWorldTransform(e, t));
			}
		},
		{
			key: "getOrigin",
			value: function(e) {
				return e.getGeometryBounds(), e.transformable.origin;
			}
		},
		{
			key: "getWorldTransform",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.transformable;
				return !t.localDirtyFlag && !t.dirtyFlag ? t.worldTransform : (e.parentNode && e.parentNode.transformable && this.getWorldTransform(e.parentNode), this.internalUpdateTransform(e), t.worldTransform);
			}
		},
		{
			key: "setPosition",
			value: function(e, t) {
				var n = e.transformable;
				if (Kl[0] = t[0], Kl[1] = t[1], Kl[2] = t[2] ?? 0, !xt(this.getPosition(e), Kl)) {
					if (at(n.position, Kl), e.parentNode === null || !e.parentNode.transformable) at(n.localPosition, Kl);
					else {
						var r = e.parentNode.transformable;
						se(ql, r.worldTransform), de(ql, ql), vt(n.localPosition, Kl, ql);
					}
					this.dirtyLocalTransform(e, n);
				}
			}
		},
		{
			key: "translate",
			value: function(e, t) {
				var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
				typeof t == "number" && (t = ot(zl, t, n, r)), !xt(t, Fl) && (st(zl, this.getPosition(e), t), this.setPosition(e, zl));
			}
		},
		{
			key: "setRotation",
			value: function(e, t, n, r, i) {
				var a = e.transformable;
				typeof t == "number" && (t = Rt(t, n, r, i)), e.parentNode === null || !e.parentNode.transformable ? this.setLocalRotation(e, t) : (zt(Vl, this.getRotation(e.parentNode)), Ft(Vl, Vl), Nt(a.localRotation, Vl, t), Ht(a.localRotation, a.localRotation), this.dirtyLocalTransform(e, a));
			}
		},
		{
			key: "rotate",
			value: function(e, t) {
				var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
				typeof t == "number" && (t = it(t, n, r));
				var i = e.transformable;
				if (e.parentNode === null || !e.parentNode.transformable) this.rotateLocal(e, t);
				else {
					var a = Vl;
					Lt(a, t[0], t[1], t[2]);
					var o = this.getRotation(e);
					zt(Xl, this.getRotation(e.parentNode)), Ft(Xl, Xl), Nt(a, Xl, a), Nt(i.localRotation, a, o), Ht(i.localRotation, i.localRotation), this.dirtyLocalTransform(e, i);
				}
			}
		},
		{
			key: "setOrigin",
			value: function(e, t) {
				var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
				typeof t == "number" && (t = [
					t,
					n,
					r
				]);
				var i = e.transformable;
				if (!(t[0] === i.origin[0] && t[1] === i.origin[1] && t[2] === i.origin[2])) {
					var a = i.origin;
					a[0] = t[0], a[1] = t[1], a[2] = t[2] || 0, this.dirtyLocalTransform(e, i);
				}
			}
		},
		{
			key: "setEulerAngles",
			value: function(e, t) {
				var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
				typeof t == "number" && (t = it(t, n, r));
				var i = e.transformable;
				e.parentNode === null || !e.parentNode.transformable ? this.setLocalEulerAngles(e, t) : (Lt(i.localRotation, t[0], t[1], t[2]), zt(Jl, Ft(Vl, this.getRotation(e.parentNode))), Vt(i.localRotation, i.localRotation, Jl), this.dirtyLocalTransform(e, i));
			}
		},
		{
			key: "getGeometryBounds",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.geometry;
				return n.dirty && X.styleValueRegistry.updateGeometry(e), (t ? n.renderBounds : n.contentBounds || null) || new si();
			}
		},
		{
			key: "getTransformedGeometryBounds",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0, r = this.getGeometryBounds(e, t);
				if (!si.isEmpty(r)) {
					var i = n || new si();
					return i.setFromTransformedAABB(r, this.getWorldTransform(e)), i;
				}
				return null;
			}
		},
		{
			key: "getBounds",
			value: function(e) {
				var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e.renderable;
				if (!r.boundsDirty && !n && r.bounds) return r.bounds;
				if (!r.renderBoundsDirty && n && r.renderBounds) return r.renderBounds;
				var i = n ? r.renderBounds : r.bounds, a = this.getTransformedGeometryBounds(e, n, i);
				if (e.childNodes.forEach(function(e) {
					var r = t.getBounds(e, n);
					r && (a ? a.add(r) : (a = i || new si(), a.update(r.center, r.halfExtents)));
				}), a ||= new si(), n) {
					var o = vc(e);
					if (o) {
						var s = o.parsedStyle.clipPath.getBounds(n);
						a ? s && (a = s.intersection(a)) : a.update(s.center, s.halfExtents);
					}
				}
				return n ? (r.renderBounds = a, r.renderBoundsDirty = !1) : (r.bounds = a, r.boundsDirty = !1), a;
			}
		},
		{
			key: "getLocalBounds",
			value: function(e) {
				if (e.parentNode) {
					var t = Ll;
					e.parentNode.transformable && (t = de(Bl, this.getWorldTransform(e.parentNode)));
					var n = this.getBounds(e);
					if (!si.isEmpty(n)) {
						var r = new si();
						return r.setFromTransformedAABB(n, t), r;
					}
				}
				return this.getBounds(e);
			}
		},
		{
			key: "getBoundingClientRect",
			value: function(e) {
				var t, n, r = this.getGeometryBounds(e);
				si.isEmpty(r) || (n = new si(), n.setFromTransformedAABB(r, this.getWorldTransform(e)));
				var i = (t = e.ownerDocument) == null || (t = t.defaultView) == null ? void 0 : t.getContextService().getBoundingClientRect();
				if (n) {
					var a = P(n.getMin(), 2), o = a[0], s = a[1], c = P(n.getMax(), 2), l = c[0], u = c[1];
					return new fi(o + (i?.left || 0), s + (i?.top || 0), l - o, u - s);
				}
				return new fi(i?.left || 0, i?.top || 0, 0, 0);
			}
		},
		{
			key: "internalUpdateTransform",
			value: function(e) {
				var t = e.parentNode?.transformable;
				Yi(e.transformable), Xi(e.transformable, t);
			}
		},
		{
			key: "internalUpdateElement",
			value: function(e, t) {
				var n, r = ((n = e.ownerDocument) == null || (n = n.defaultView) == null || (n = n.getConfig()) == null || (n = n.future) == null ? void 0 : n.experimentalAttributeUpdateOptimization) === !0, i = t[t.length - 1], a = i?.transformDirty || e.transformable?.localDirtyFlag;
				if (e.transformable) {
					var o;
					(o = e.transformable).dirtyFlag || (o.dirtyFlag = a);
				}
				if (this.internalUpdateTransform(e), a) {
					var s;
					(s = e.dirty) == null || s.call(e, !0, !0);
				}
				var c = e.renderable?.boundsDirty || e.renderable?.renderBoundsDirty;
				if ((a || c) && i?.shapeUpdated === !1 && r) for (var l = t.length - 1; l >= 0;) {
					var u, d, f = t[l];
					if (f.shapeUpdated) break;
					(u = (d = f.node).dirty) == null || u.call(d, !0, !0), f.shapeUpdated = !0, --l;
				}
				return a;
			}
		},
		{
			key: "syncHierarchy",
			value: function(e) {
				for (var t = [e], n = e.parentNode ? [{
					node: e.parentNode,
					transformDirty: e.parentNode.transformable?.localDirtyFlag || e.parentNode.transformable?.dirtyFlag,
					shapeUpdated: !1
				}] : []; t.length > 0;) {
					for (var r = t.pop(), i = n[n.length - 1]; n.length > 0 && r.parentNode !== i.node;) i = n.pop();
					var a = this.internalUpdateElement(r, n);
					if (r.childNodes.length > 0) {
						for (var o = r.childNodes.length - 1; o >= 0; o--) t.push(r.childNodes[o]);
						n.push({
							node: r,
							transformDirty: a,
							shapeUpdated: !1
						});
					}
				}
			}
		},
		{
			key: "dirtyLocalTransform",
			value: function(e, t) {
				Dc(e) || t.localDirtyFlag || (t.localDirtyFlag = !0, t.dirtyFlag || this.dirtyWorldTransform(e, t));
			}
		},
		{
			key: "dirtyWorldTransform",
			value: function(e, t) {
				this.dirtyWorldInternal(e, t), this.dirtyToRoot(e, !0);
			}
		},
		{
			key: "dirtyWorldInternal",
			value: function(e, t) {
				var n, r = this, i = ((n = e.ownerDocument) == null || (n = n.defaultView) == null || (n = n.getConfig()) == null || (n = n.future) == null ? void 0 : n.experimentalAttributeUpdateOptimization) === !0;
				t.dirtyFlag || (t.dirtyFlag = !0, e.dirty(!0, !0), i || e.childNodes.forEach(function(e) {
					var t = e.transformable;
					r.dirtyWorldInternal(e, t);
				}));
			}
		},
		{
			key: "dirtyToRoot",
			value: function(e) {
				for (var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e, i = ((t = e.ownerDocument) == null || (t = t.defaultView) == null || (t = t.getConfig()) == null || (t = t.future) == null ? void 0 : t.experimentalAttributeUpdateOptimization) === !0; r;) {
					var a, o;
					if ((a = (o = r).dirty) == null || a.call(o, !0, !0), i) break;
					r = r.parentNode;
				}
				n && e.forEach(function(e) {
					var t;
					(t = e.dirty) == null || t.call(e, !0, !0);
				}), this.informDependentDisplayObjects(e);
				var s = e.mutations || [], c = s.find(function(e) {
					return e.type === "attributes" && e._boundsChangeData;
				});
				c ? c._boundsChangeData = { affectChildren: c._boundsChangeData.affectChildren || n } : (c = {
					type: "attributes",
					target: e,
					_boundsChangeData: { affectChildren: n }
				}, s.push(c)), e.mutations = s;
			}
		},
		{
			key: "dirtyFragment",
			value: function(e) {
				var t, n, r = e.transformable;
				r && (r.dirtyFlag = !0, r.localDirtyFlag = !0), (t = (n = e).dirty) == null || t.call(n, !0, !0);
				for (var i = e.childNodes.length, a = 0; a < i; a++) this.dirtyFragment(e.childNodes[a]);
			}
		},
		{
			key: "notifyMutationObservers",
			value: function(e) {
				var t = new Set();
				if (e.getRoot().forEach(function(e) {
					(e.mutations || []).forEach(function(n) {
						n.type === "attributes" && n._boundsChangeData && (n._boundsChangeData.affectChildren ? e.forEach(function(e) {
							var r = h({}, n);
							r.target = e, t.add(r);
						}) : t.add(n));
					}), e.mutations = void 0;
				}), t.size > 0) {
					var n = new Sl(Y.BOUNDS_CHANGED, { detail: Array.from(t) });
					e.dispatchEvent(n, !0, !0);
				}
			}
		},
		{
			key: "updateDisplayObjectDependency",
			value: function(e, t, n, r) {
				if (t && t !== n) {
					var i = this.displayObjectDependencyMap.get(t);
					if (i && i[e]) {
						var a = i[e].indexOf(r);
						i[e].splice(a, 1);
					}
				}
				if (n) {
					var o = this.displayObjectDependencyMap.get(n);
					o ||= (this.displayObjectDependencyMap.set(n, {}), this.displayObjectDependencyMap.get(n)), o[e] || (o[e] = []), o[e].push(r);
				}
			}
		},
		{
			key: "informDependentDisplayObjects",
			value: function(e) {
				var t, n = this, r = this.displayObjectDependencyMap.get(e);
				if (r) {
					var i = (t = e.ownerDocument) == null || (t = t.defaultView) == null || (t = t.getConfig()) == null || (t = t.future) == null ? void 0 : t.experimentalCancelEventPropagation;
					Object.keys(r).forEach(function(e) {
						r[e].forEach(function(t) {
							n.dirtyToRoot(t, !0), t.dispatchEvent(new Ml(Y.ATTR_MODIFIED, t, n, n, e, Ml.MODIFICATION, n, n), i, i), t.isCustomElement && t.isConnected && t.attributeChangedCallback && t.attributeChangedCallback(e, n, n);
						});
					});
				}
			}
		}
	]);
}(), Ql = function() {
	function e(t) {
		if (g(this, e), t <= 0) throw Error("LRU capacity must be a positive number.");
		this.capacity = t, this.cache = new Map();
	}
	return v(e, [
		{
			key: "get",
			value: function(e) {
				if (this.cache.has(e)) {
					var t = this.cache.get(e);
					return this.cache.delete(e), this.cache.set(e, t), t;
				}
			}
		},
		{
			key: "put",
			value: function(e, t) {
				if (this.cache.has(e) && this.cache.delete(e), this.cache.set(e, t), this.cache.size > this.capacity) {
					var n = this.cache.keys().next().value;
					this.cache.delete(n);
				}
			}
		},
		{
			key: "len",
			value: function() {
				return this.cache.size;
			}
		},
		{
			key: "clear",
			value: function() {
				this.cache.clear();
			}
		}
	]);
}(), $l = {
	MetricsString: "|ÉqÅ",
	BaselineSymbol: "M",
	BaselineMultiplier: 1.4,
	HeightMultiplier: 2,
	Newlines: [10, 13],
	BreakingSpaces: [
		9,
		32,
		8192,
		8193,
		8194,
		8195,
		8196,
		8197,
		8198,
		8200,
		8201,
		8202,
		8287,
		12288
	]
}, eu = /[a-zA-Z0-9\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff!"#$%&'()*+,-./:;]/, tu = /[!%),.:;?\]}¢°·'""†‡›℃∶、。〃〆〕〗〞﹚﹜！＂％＇），．：；？！］｝～]/, nu = /[$(£¥·'"〈《「『【〔〖〝﹙﹛＄（．［｛￡￥]/, ru = /[!),.:;?\]}¢·–—'"•"、。〆〞〕〉》」︰︱︲︳﹐﹑﹒﹓﹔﹕﹖﹘﹚﹜！），．：；？︶︸︺︼︾﹀﹂﹗］｜｝､]/, iu = /[([{£¥'"‵〈《「『〔〝︴﹙﹛（｛︵︷︹︻︽︿﹁﹃﹏]/, au = /[)\]｝〕〉》」』】〙〗〟'"｠»ヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻‐゠–〜?!‼⁇⁈⁉・、:;,。.]/, ou = /[([｛〔〈《「『【〘〖〝'"｟«—...‥〳〴〵]/, su = /[!%),.:;?\]}¢°'"†‡℃〆〈《「『〕！％），．：；？］｝]/, cu = /[$([{£¥'"々〇〉》」〔＄（［｛｠￥￦#]/, lu = RegExp(`${tu.source}|${ru.source}|${au.source}|${su.source}`), uu = RegExp(`${nu.source}|${iu.source}|${ou.source}|${cu.source}`), du = function() {
	function e(t) {
		var n = this;
		g(this, e), this.fontMetricsCache = {}, this.shouldBreakByKinsokuShorui = function(e, t) {
			return n.isBreakingSpace(t) ? !1 : !!(e && (uu.exec(t) || lu.exec(e)));
		}, this.trimByKinsokuShorui = function(e) {
			var t = w(e), n = t[t.length - 2];
			if (!n) return e;
			var r = n[n.length - 1];
			return t[t.length - 2] = n.slice(0, -1), t[t.length - 1] = r + t[t.length - 1], t;
		}, this.runtime = t, this.charWidthCache = new Ql(100);
	}
	return v(e, [
		{
			key: "measureFont",
			value: function(e, t) {
				if (this.fontMetricsCache[e]) return this.fontMetricsCache[e];
				var n = {
					ascent: 0,
					descent: 0,
					fontSize: 0
				}, r = this.runtime.offscreenCanvasCreator.getOrCreateCanvas(t), i = this.runtime.offscreenCanvasCreator.getOrCreateContext(t, { willReadFrequently: !0 });
				i.font = e;
				var a = $l.MetricsString + $l.BaselineSymbol, o = Math.ceil(i.measureText(a).width), s = Math.ceil(i.measureText($l.BaselineSymbol).width), c = $l.HeightMultiplier * s;
				s = s * $l.BaselineMultiplier | 0, r.width = o, r.height = c, i.fillStyle = "#f00", i.fillRect(0, 0, o, c), i.font = e, i.textBaseline = "alphabetic", i.fillStyle = "#000", i.fillText(a, 0, s);
				var l = i.getImageData(0, 0, o || 1, c || 1).data, u = l.length, d = o * 4, f = 0, p = 0, m = !1;
				for (f = 0; f < s; ++f) {
					for (var h = 0; h < d; h += 4) if (l[p + h] !== 255) {
						m = !0;
						break;
					}
					if (!m) p += d;
					else break;
				}
				for (n.ascent = s - f, p = u - d, m = !1, f = c; f > s; --f) {
					for (var g = 0; g < d; g += 4) if (l[p + g] !== 255) {
						m = !0;
						break;
					}
					if (!m) p -= d;
					else break;
				}
				return n.descent = f - s, n.fontSize = n.ascent + n.descent, this.fontMetricsCache[e] = n, n;
			}
		},
		{
			key: "measureText",
			value: function(e, t, n) {
				var r = t.fontSize, i = r === void 0 ? 16 : r, a = t.wordWrap, o = a === void 0 ? !1 : a, s = t.lineHeight, c = t.lineWidth, l = c === void 0 ? 1 : c, u = t.textBaseline, d = u === void 0 ? "alphabetic" : u, f = t.textAlign, p = f === void 0 ? "start" : f, m = t.letterSpacing, h = m === void 0 ? 0 : m, g = t.textPath;
				t.textPathSide, t.textPathStartOffset;
				var _ = t.leading, v = _ === void 0 ? 0 : _, y = Yc(t), b = this.measureFont(y, n);
				b.fontSize === 0 && (b.fontSize = i, b.ascent = i);
				var x = this.runtime.offscreenCanvasCreator.getOrCreateContext(n);
				x.font = y, t.isOverflowing = !1;
				var S = (o ? this.wordWrap(e, t, n) : e).split(/(?:\r\n|\r|\n)/), C = Array(S.length), w = 0;
				if (g) {
					g.getTotalLength();
					for (var T = 0; T < S.length; T++) x.measureText(S[T]).width + (S[T].length - 1) * h;
				} else {
					for (var E = 0; E < S.length; E++) {
						var D = x.measureText(S[E]).width + (S[E].length - 1) * h;
						C[E] = D, w = Math.max(w, D);
					}
					var O = w + l, k = s || b.fontSize + l, A = Math.max(k, b.fontSize + l) + (S.length - 1) * (k + v);
					k += v;
					var j = 0;
					return d === "middle" ? j = -A / 2 : d === "bottom" || d === "alphabetic" || d === "ideographic" ? j = -A : (d === "top" || d === "hanging") && (j = 0), {
						font: y,
						width: O,
						height: A,
						lines: S,
						lineWidths: C,
						lineHeight: k,
						maxLineWidth: w,
						fontProperties: b,
						lineMetrics: C.map(function(e, t) {
							var n = 0;
							return p === "center" || p === "middle" ? n -= e / 2 : (p === "right" || p === "end") && (n -= e), new fi(n - l / 2, j + t * k, e + l, k);
						})
					};
				}
			}
		},
		{
			key: "wordWrap",
			value: function(e, t, n) {
				var r = this, i = Array.from(e);
				if (i.length === 0) return "";
				var a = this, o = t.wordWrapWidth, s = o === void 0 ? 0 : o, c = t.letterSpacing, l = c === void 0 ? 0 : c, u = t.maxLines, d = u === void 0 ? Infinity : u, f = t.textOverflow, p = this.runtime.offscreenCanvasCreator.getOrCreateContext(n), m = s + l, h = "";
				f === "ellipsis" ? h = "..." : f && f !== "clip" && (h = f);
				var g = [""], _ = 0, v = 0, y = -1, b = Yc(t), x = this.charWidthCache.get(b);
				x || (x = new Ql(500), this.charWidthCache.put(b, x));
				var S = function(e) {
					return r.getFromCache(e, l, x, p);
				}, C = S(h);
				function w(e, t, n, r) {
					for (; S(e) < r && t < i.length - 1 && !a.isNewline(i[t + 1]);) t += 1, e += i[t];
					for (; S(e) > r && t >= n;) --t, e = e.slice(0, -1);
					return {
						lineTxt: e,
						txtLastCharIndex: t
					};
				}
				function T(e, t) {
					if (!(C <= 0 || C > m)) {
						if (!g[e]) {
							g[e] = h;
							return;
						}
						var n = w(g[e], t, y + 1, m - C);
						g[e] = n.lineTxt + h;
					}
				}
				for (var E = 0; E < i.length; E++) {
					var D = i[E], O = i[E - 1], k = i[E + 1], A = S(D);
					if (this.isNewline(D)) {
						if (_ + 1 >= d) {
							E < i.length - 1 && T(_, E - 1), t.isOverflowing = !0;
							break;
						}
						y = E - 1, _ += 1, v = 0, g[_] = "";
						continue;
					}
					if (A > m) {
						T(_, E - 1), t.isOverflowing = !0;
						break;
					}
					if (v > 0 && v + A > m) {
						var j = w(g[_], E - 1, y + 1, m);
						if (j.txtLastCharIndex !== E - 1) {
							if (g[_] = j.lineTxt, j.txtLastCharIndex === i.length - 1) break;
							E = j.txtLastCharIndex + 1, D = i[E], O = i[E - 1], k = i[E + 1], A = S(D);
						}
						if (_ + 1 >= d) {
							T(_, E - 1), t.isOverflowing = !0;
							break;
						}
						if (y = E - 1, _ += 1, v = 0, g[_] = "", this.isBreakingSpace(D)) continue;
						this.canBreakInLastChar(D) || (g = this.trimToBreakable(g), v = this.sumTextWidthByCache(g[_] || "", S)), this.shouldBreakByKinsokuShorui(D, k) && (g = this.trimByKinsokuShorui(g), v += S(O || ""));
					}
					v += A, g[_] += D;
				}
				return g.join("\n");
			}
		},
		{
			key: "isBreakingSpace",
			value: function(e) {
				return typeof e == "string" ? $l.BreakingSpaces.indexOf(e.charCodeAt(0)) >= 0 : !1;
			}
		},
		{
			key: "isNewline",
			value: function(e) {
				return typeof e == "string" ? $l.Newlines.indexOf(e.charCodeAt(0)) >= 0 : !1;
			}
		},
		{
			key: "trimToBreakable",
			value: function(e) {
				var t = w(e), n = t[t.length - 2], r = this.findBreakableIndex(n);
				if (r === -1 || !n) return t;
				var i = n.slice(r, r + 1), a = this.isBreakingSpace(i), o = r + 1, s = r + +!a;
				return t[t.length - 1] += n.slice(o, n.length), t[t.length - 2] = n.slice(0, s), t;
			}
		},
		{
			key: "canBreakInLastChar",
			value: function(e) {
				return !(e && eu.test(e));
			}
		},
		{
			key: "sumTextWidthByCache",
			value: function(e, t) {
				return e.split("").reduce(function(e, n) {
					return e + t(n);
				}, 0);
			}
		},
		{
			key: "findBreakableIndex",
			value: function(e) {
				for (var t = e.length - 1; t >= 0; t--) if (!eu.test(e[t])) return t;
				return -1;
			}
		},
		{
			key: "getFromCache",
			value: function(e, t, n, r) {
				var i = n.get(e);
				if (typeof i != "number") {
					var a = e.length * t;
					i = r.measureText(e).width + a, n.put(e, i);
				}
				return i;
			}
		},
		{
			key: "clearCache",
			value: function() {
				this.fontMetricsCache = {}, this.charWidthCache.clear();
			}
		}
	]);
}(), X = {}, fu = function(e) {
	var t = new ml(), n = new pl();
	return e = {}, p(p(p(p(p(p(p(p(p(p(e, B.FRAGMENT, null), B.CIRCLE, new ll()), B.ELLIPSE, new ul()), B.RECT, t), B.IMAGE, t), B.GROUP, new gl()), B.LINE, new dl()), B.TEXT, new hl(X)), B.POLYLINE, n), B.POLYGON, n), p(p(p(e, B.PATH, new fl()), B.HTML, new _l()), B.MESH, null);
}(), pu = function(e) {
	var t = new Zs(), n = new ec();
	return e = {}, p(p(p(p(p(p(p(p(p(p(e, U.PERCENTAGE, null), U.NUMBER, new ic()), U.ANGLE, new Ys()), U.DEFINED_PATH, new Xs()), U.PAINT, t), U.COLOR, t), U.FILTER, new Qs()), U.LENGTH, n), U.LENGTH_PERCENTAGE, n), U.LENGTH_PERCENTAGE_12, new tc()), p(p(p(p(p(p(p(p(p(p(e, U.LENGTH_PERCENTAGE_14, new nc()), U.COORDINATE, new ec()), U.OFFSET_DISTANCE, new ac()), U.OPACITY_VALUE, new oc()), U.PATH, new sc()), U.LIST_OF_POINTS, new cc()), U.SHADOW_BLUR, new lc()), U.TEXT, new uc()), U.TEXT_TRANSFORM, new dc()), U.TRANSFORM, new ol()), p(p(p(e, U.TRANSFORM_ORIGIN, new sl()), U.Z_INDEX, new cl()), U.MARKER, new rc());
}();
X.CameraContribution = Ui, X.AnimationTimeline = null, X.EasingFunction = null, X.offscreenCanvasCreator = new Dl(), X.sceneGraphSelector = new jl(), X.sceneGraphService = new Zl(X), X.textService = new du(X), X.geometryUpdaterFactory = fu, X.CSSPropertySyntaxFactory = pu, X.styleValueRegistry = new Ks(X), X.layoutRegistry = null, X.globalThis = function() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}(), X.enableStyleSyntax = !0, X.enableSizeAttenuation = !1;
var mu = 0, hu = new Ml(Y.INSERTED, null, "", "", "", 0, "", ""), gu = new Ml(Y.REMOVED, null, "", "", "", 0, "", ""), _u = new Sl(Y.DESTROY), vu = function(e) {
	function t() {
		var e;
		g(this, t);
		var n = [...arguments];
		return e = k(this, t, [].concat(n)), e.entity = mu++, e.transformable = {
			dirtyFlag: !1,
			localDirtyFlag: !1,
			localPosition: [
				0,
				0,
				0
			],
			localRotation: [
				0,
				0,
				0,
				1
			],
			localScale: [
				1,
				1,
				1
			],
			localTransform: [
				1,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				1
			],
			localSkew: [0, 0],
			position: [
				0,
				0,
				0
			],
			rotation: [
				0,
				0,
				0,
				1
			],
			scaling: [
				1,
				1,
				1
			],
			worldTransform: [
				1,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				1
			],
			origin: [
				0,
				0,
				0
			]
		}, e.renderable = {
			bounds: void 0,
			boundsDirty: !0,
			renderBounds: void 0,
			renderBoundsDirty: !0,
			dirtyRenderBounds: void 0,
			dirty: !1
		}, e.geometry = {
			contentBounds: void 0,
			renderBounds: void 0,
			dirty: !0
		}, e.cullable = {
			strategy: Wi.Standard,
			visibilityPlaneMask: -1,
			visible: !0,
			enable: !0
		}, e.sortable = {
			dirty: !1,
			sorted: void 0,
			renderOrder: 0,
			dirtyChildren: [],
			dirtyReason: void 0
		}, e.namespaceURI = "g", e.scrollLeft = 0, e.scrollTop = 0, e.clientTop = 0, e.clientLeft = 0, e.style = {}, e.computedStyle = {}, e.parsedStyle = {}, e.attributes = {}, e;
	}
	return j(t, e), v(t, [
		{
			key: "dirty",
			value: function() {
				var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = arguments.length > 1 ? arguments[1] : void 0;
				this.renderable.dirty = e, t !== void 0 && (this.renderable.boundsDirty = t, this.renderable.renderBoundsDirty = t, this.geometry.dirty = t);
			}
		},
		{
			key: "className",
			get: function() {
				return this.getAttribute("class") || "";
			},
			set: function(e) {
				this.setAttribute("class", e);
			}
		},
		{
			key: "classList",
			get: function() {
				return this.className.split(" ").filter(function(e) {
					return e !== "";
				});
			}
		},
		{
			key: "tagName",
			get: function() {
				return this.nodeName;
			}
		},
		{
			key: "children",
			get: function() {
				return this.childNodes;
			}
		},
		{
			key: "childElementCount",
			get: function() {
				return this.childNodes.length;
			}
		},
		{
			key: "firstElementChild",
			get: function() {
				return this.firstChild;
			}
		},
		{
			key: "lastElementChild",
			get: function() {
				return this.lastChild;
			}
		},
		{
			key: "parentElement",
			get: function() {
				return this.parentNode;
			}
		},
		{
			key: "nextSibling",
			get: function() {
				if (this.parentNode) {
					var e = this.parentNode.childNodes.indexOf(this);
					return this.parentNode.childNodes[e + 1] || null;
				}
				return null;
			}
		},
		{
			key: "previousSibling",
			get: function() {
				if (this.parentNode) {
					var e = this.parentNode.childNodes.indexOf(this);
					return this.parentNode.childNodes[e - 1] || null;
				}
				return null;
			}
		},
		{
			key: "cloneNode",
			value: function(e) {
				throw Error(pi);
			}
		},
		{
			key: "appendChild",
			value: function(e, t) {
				var n;
				if (e.destroyed) throw Error(hi);
				return X.sceneGraphService.attach(e, this, t), (n = this.ownerDocument) != null && n.defaultView && (!Dc(this) && e.nodeName === B.FRAGMENT ? this.ownerDocument.defaultView.mountFragment(e) : this.ownerDocument.defaultView.mountChildren(e)), this.isMutationObserved && (hu.relatedNode = this, e.dispatchEvent(hu)), e;
			}
		},
		{
			key: "insertBefore",
			value: function(e, t) {
				if (!t) this.appendChild(e);
				else {
					e.parentElement && e.parentElement.removeChild(e);
					var n = this.childNodes.indexOf(t);
					n === -1 ? this.appendChild(e) : this.appendChild(e, n);
				}
				return e;
			}
		},
		{
			key: "replaceChild",
			value: function(e, t) {
				var n = this.childNodes.indexOf(t);
				return this.removeChild(t), this.appendChild(e, n), t;
			}
		},
		{
			key: "removeChild",
			value: function(e) {
				var t, n, r = ((t = this.ownerDocument) == null || (t = t.defaultView) == null || (t = t.getConfig().future) == null ? void 0 : t.experimentalCancelEventPropagation) === !0;
				return gu.relatedNode = this, e.dispatchEvent(gu, r, r), (n = e.ownerDocument) != null && n.defaultView && e.ownerDocument.defaultView.unmountChildren(e), X.sceneGraphService.detach(e), e;
			}
		},
		{
			key: "removeChildren",
			value: function() {
				for (var e = this.childNodes.length - 1; e >= 0; e--) {
					var t = this.childNodes[e];
					this.removeChild(t);
				}
			}
		},
		{
			key: "destroyChildren",
			value: function() {
				for (var e = this.childNodes.length - 1; e >= 0; e--) {
					var t = this.childNodes[e];
					t.childNodes.length > 0 && t.destroyChildren(), t.destroy();
				}
			}
		},
		{
			key: "matches",
			value: function(e) {
				return X.sceneGraphService.matches(e, this);
			}
		},
		{
			key: "getElementById",
			value: function(e) {
				return X.sceneGraphService.querySelector(`#${e}`, this);
			}
		},
		{
			key: "getElementsByName",
			value: function(e) {
				return X.sceneGraphService.querySelectorAll(`[name="${e}"]`, this);
			}
		},
		{
			key: "getElementsByClassName",
			value: function(e) {
				return X.sceneGraphService.querySelectorAll(`.${e}`, this);
			}
		},
		{
			key: "getElementsByTagName",
			value: function(e) {
				return X.sceneGraphService.querySelectorAll(e, this);
			}
		},
		{
			key: "querySelector",
			value: function(e) {
				return X.sceneGraphService.querySelector(e, this);
			}
		},
		{
			key: "querySelectorAll",
			value: function(e) {
				return X.sceneGraphService.querySelectorAll(e, this);
			}
		},
		{
			key: "closest",
			value: function(e) {
				var t = this;
				do {
					if (X.sceneGraphService.matches(e, t)) return t;
					t = t.parentElement;
				} while (t !== null);
				return null;
			}
		},
		{
			key: "find",
			value: function(e) {
				var t = this, n = null;
				return this.forEach(function(r) {
					return r !== t && e(r) ? (n = r, !1) : !0;
				}), n;
			}
		},
		{
			key: "findAll",
			value: function(e) {
				var t = this, n = [];
				return this.forEach(function(r) {
					r !== t && e(r) && n.push(r);
				}), n;
			}
		},
		{
			key: "after",
			value: function() {
				var e = this;
				if (this.parentNode) {
					var t = this.parentNode.childNodes.indexOf(this);
					[...arguments].forEach(function(n, r) {
						return e.parentNode?.appendChild(n, t + r + 1);
					});
				}
			}
		},
		{
			key: "before",
			value: function() {
				if (this.parentNode) {
					var e, t = this.parentNode.childNodes.indexOf(this), n = [...arguments], r = n[0], i = y(n).slice(1);
					this.parentNode.appendChild(r, t), (e = r).after.apply(e, w(i));
				}
			}
		},
		{
			key: "replaceWith",
			value: function() {
				this.after.apply(this, arguments), this.remove();
			}
		},
		{
			key: "append",
			value: function() {
				var e = this;
				[...arguments].forEach(function(t) {
					return e.appendChild(t);
				});
			}
		},
		{
			key: "prepend",
			value: function() {
				var e = this;
				[...arguments].forEach(function(t, n) {
					return e.appendChild(t, n);
				});
			}
		},
		{
			key: "replaceChildren",
			value: function() {
				for (; this.childNodes.length && this.firstChild;) this.removeChild(this.firstChild);
				this.append.apply(this, arguments);
			}
		},
		{
			key: "remove",
			value: function() {
				return this.parentNode ? this.parentNode.removeChild(this) : this;
			}
		},
		{
			key: "destroy",
			value: function() {
				var e, t = ((e = this.ownerDocument) == null || (e = e.defaultView) == null || (e = e.getConfig().future) == null ? void 0 : e.experimentalCancelEventPropagation) === !0;
				this.destroyChildren(), this.dispatchEvent(_u, t, t), this.remove(), this.emitter.removeAllListeners(), this.destroyed = !0;
			}
		},
		{
			key: "getGeometryBounds",
			value: function() {
				var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
				return X.sceneGraphService.getGeometryBounds(this, e);
			}
		},
		{
			key: "getTransformedGeometryBounds",
			value: function() {
				var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
				return X.sceneGraphService.getTransformedGeometryBounds(this, e);
			}
		},
		{
			key: "getBounds",
			value: function() {
				return X.sceneGraphService.getBounds(this);
			}
		},
		{
			key: "getRenderBounds",
			value: function() {
				return X.sceneGraphService.getBounds(this, !0);
			}
		},
		{
			key: "getLocalBounds",
			value: function() {
				return X.sceneGraphService.getLocalBounds(this);
			}
		},
		{
			key: "getBoundingClientRect",
			value: function() {
				return X.sceneGraphService.getBoundingClientRect(this);
			}
		},
		{
			key: "getClientRects",
			value: function() {
				return [this.getBoundingClientRect()];
			}
		},
		{
			key: "computedStyleMap",
			value: function() {
				return new Map(Object.entries(this.computedStyle));
			}
		},
		{
			key: "getAttributeNames",
			value: function() {
				return Object.keys(this.attributes);
			}
		},
		{
			key: "getAttribute",
			value: function(e) {
				if (typeof e != "symbol") return this.attributes[e];
			}
		},
		{
			key: "hasAttribute",
			value: function(e) {
				return this.getAttributeNames().includes(e);
			}
		},
		{
			key: "hasAttributes",
			value: function() {
				return !!this.getAttributeNames().length;
			}
		},
		{
			key: "removeAttribute",
			value: function(e) {
				this.setAttribute(e, null), delete this.attributes[e];
			}
		},
		{
			key: "setAttribute",
			value: function(e, t) {
				this.attributes[e] = t;
			}
		},
		{
			key: "getAttributeNS",
			value: function(e, t) {
				throw Error(pi);
			}
		},
		{
			key: "getAttributeNode",
			value: function(e) {
				throw Error(pi);
			}
		},
		{
			key: "getAttributeNodeNS",
			value: function(e, t) {
				throw Error(pi);
			}
		},
		{
			key: "hasAttributeNS",
			value: function(e, t) {
				throw Error(pi);
			}
		},
		{
			key: "removeAttributeNS",
			value: function(e, t) {
				throw Error(pi);
			}
		},
		{
			key: "removeAttributeNode",
			value: function(e) {
				throw Error(pi);
			}
		},
		{
			key: "setAttributeNS",
			value: function(e, t, n) {
				throw Error(pi);
			}
		},
		{
			key: "setAttributeNode",
			value: function(e) {
				throw Error(pi);
			}
		},
		{
			key: "setAttributeNodeNS",
			value: function(e) {
				throw Error(pi);
			}
		},
		{
			key: "toggleAttribute",
			value: function(e, t) {
				throw Error(pi);
			}
		}
	]);
}(wl);
function Z(e) {
	return !!(e != null && e.nodeName);
}
var yu = X.globalThis.Proxy ? X.globalThis.Proxy : function() {}, bu = new Ml(Y.ATTR_MODIFIED, null, null, null, null, Ml.MODIFICATION, null, null), xu = R(), Su = jt(), Cu = function(e) {
	function t(e) {
		var n;
		return g(this, t), n = k(this, t), n.isCustomElement = !1, n.isMutationObserved = !1, n.activeAnimations = [], n.config = e, n.id = e.id || "", n.name = e.name || "", (e.className || e.class) && (n.className = e.className || e.class), n.nodeName = e.type || B.GROUP, e.initialParsedStyle && Object.assign(n.parsedStyle, e.initialParsedStyle), n.initAttributes(e.style), X.enableStyleSyntax && (n.style = new yu({
			setProperty: function(e, t) {
				n.setAttribute(e, t);
			},
			getPropertyValue: function(e) {
				return n.getAttribute(e);
			},
			removeProperty: function(e) {
				n.removeAttribute(e);
			},
			item: function() {
				return "";
			}
		}, {
			get: function(e, t) {
				return e[t] === void 0 ? n.getAttribute(t) : e[t];
			},
			set: function(e, t, r) {
				return n.setAttribute(t, r), !0;
			}
		})), n;
	}
	return j(t, e), v(t, [
		{
			key: "destroy",
			value: function() {
				pr(t, "destroy", this, 3)([]), this.getAnimations().forEach(function(e) {
					e.cancel();
				});
			}
		},
		{
			key: "cloneNode",
			value: function(e, t) {
				var n = h({}, this.attributes);
				for (var r in n) {
					var i = n[r];
					Z(i) && r !== "clipPath" && r !== "offsetPath" && r !== "textPath" && (n[r] = i.cloneNode(e)), t && (n[r] = t(r, i));
				}
				var a = new this.constructor(h(h({}, this.config), {}, { style: n }));
				return a.setLocalTransform(this.getLocalTransform()), e && this.children.forEach(function(t) {
					if (!t.style.isMarker) {
						var n = t.cloneNode(e);
						a.appendChild(n);
					}
				}), a;
			}
		},
		{
			key: "initAttributes",
			value: function() {
				var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				X.styleValueRegistry.processProperties(this, e, { forceUpdateGeometry: !0 }), this.dirty();
			}
		},
		{
			key: "setAttribute",
			value: function(e, n) {
				var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
				un(n) || (r || n !== this.attributes[e]) && (this.internalSetAttribute(e, n, { memoize: i }), pr(t, "setAttribute", this, 3)([e, n]));
			}
		},
		{
			key: "setAttributes",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.skipDispatchAttrModifiedEvent, r = n === void 0 ? !1 : n, i, a;
				if (r || (i = h({}, this.attributes), a = h({}, this.parsedStyle)), X.styleValueRegistry.processProperties(this, e, t), this.dirty(), !r) for (var o in e) this.dispatchAttrModifiedEvent(o, i[o], e[o], a[o]);
			}
		},
		{
			key: "internalSetAttribute",
			value: function(e, t) {
				var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = this.attributes[e], i = this.parsedStyle[e];
				X.styleValueRegistry.processProperties(this, p({}, e, t), n), this.dirty(), this.dispatchAttrModifiedEvent(e, r, t, i);
			}
		},
		{
			key: "dispatchAttrModifiedEvent",
			value: function(e, t, n, r) {
				var i = this.parsedStyle[e];
				if (this.isConnected) if (bu.relatedNode = this, bu.prevValue = t, bu.newValue = n, bu.attrName = e, bu.prevParsedValue = r, bu.newParsedValue = i, this.isMutationObserved) this.dispatchEvent(bu);
				else {
					var a = this.ownerDocument.defaultView.getConfig().future?.experimentalCancelEventPropagation === !0;
					bu.target = this, this.ownerDocument.defaultView.dispatchEvent(bu, !0, a);
				}
				if (this.isCustomElement && this.isConnected || !this.isCustomElement) {
					var o, s;
					(o = (s = this).attributeChangedCallback) == null || o.call(s, e, t, n, r, i);
				}
			}
		},
		{
			key: "getBBox",
			value: function() {
				var e = this.getBounds(), t = P(e.getMin(), 2), n = t[0], r = t[1], i = P(e.getMax(), 2), a = i[0], o = i[1];
				return new fi(n, r, a - n, o - r);
			}
		},
		{
			key: "setOrigin",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
				return X.sceneGraphService.setOrigin(this, vi(e, t, n, !1)), this;
			}
		},
		{
			key: "getOrigin",
			value: function() {
				return X.sceneGraphService.getOrigin(this);
			}
		},
		{
			key: "setPosition",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
				return X.sceneGraphService.setPosition(this, vi(e, t, n, !1)), this;
			}
		},
		{
			key: "setLocalPosition",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
				return X.sceneGraphService.setLocalPosition(this, vi(e, t, n, !1)), this;
			}
		},
		{
			key: "translate",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
				return X.sceneGraphService.translate(this, vi(e, t, n, !1)), this;
			}
		},
		{
			key: "translateLocal",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
				return X.sceneGraphService.translateLocal(this, vi(e, t, n, !1)), this;
			}
		},
		{
			key: "getPosition",
			value: function() {
				return X.sceneGraphService.getPosition(this);
			}
		},
		{
			key: "getLocalPosition",
			value: function() {
				return X.sceneGraphService.getLocalPosition(this);
			}
		},
		{
			key: "scale",
			value: function(e, t, n) {
				return this.scaleLocal(e, t, n);
			}
		},
		{
			key: "scaleLocal",
			value: function(e, t, n) {
				return typeof e == "number" && (t ||= e, n ||= e, e = vi(e, t, n, !1)), X.sceneGraphService.scaleLocal(this, e), this;
			}
		},
		{
			key: "setLocalScale",
			value: function(e, t, n) {
				return typeof e == "number" && (t ||= e, n ||= e, e = vi(e, t, n, !1)), X.sceneGraphService.setLocalScale(this, e), this;
			}
		},
		{
			key: "getLocalScale",
			value: function() {
				return X.sceneGraphService.getLocalScale(this);
			}
		},
		{
			key: "getScale",
			value: function() {
				return X.sceneGraphService.getScale(this);
			}
		},
		{
			key: "getEulerAngles",
			value: function() {
				var e = P(Ei(xu, X.sceneGraphService.getWorldTransform(this)), 3)[2];
				return xi(e);
			}
		},
		{
			key: "getLocalEulerAngles",
			value: function() {
				var e = P(Ei(xu, X.sceneGraphService.getLocalRotation(this)), 3)[2];
				return xi(e);
			}
		},
		{
			key: "setEulerAngles",
			value: function(e) {
				return X.sceneGraphService.setEulerAngles(this, 0, 0, e), this;
			}
		},
		{
			key: "setLocalEulerAngles",
			value: function(e) {
				return X.sceneGraphService.setLocalEulerAngles(this, 0, 0, e), this;
			}
		},
		{
			key: "rotateLocal",
			value: function(e, t, n) {
				return z(t) && z(n) ? X.sceneGraphService.rotateLocal(this, 0, 0, e) : X.sceneGraphService.rotateLocal(this, e, t, n), this;
			}
		},
		{
			key: "rotate",
			value: function(e, t, n) {
				return z(t) && z(n) ? X.sceneGraphService.rotate(this, 0, 0, e) : X.sceneGraphService.rotate(this, e, t, n), this;
			}
		},
		{
			key: "setRotation",
			value: function(e, t, n, r) {
				return X.sceneGraphService.setRotation(this, e, t, n, r), this;
			}
		},
		{
			key: "setLocalRotation",
			value: function(e, t, n, r) {
				return X.sceneGraphService.setLocalRotation(this, e, t, n, r), this;
			}
		},
		{
			key: "setLocalSkew",
			value: function(e, t) {
				return X.sceneGraphService.setLocalSkew(this, e, t), this;
			}
		},
		{
			key: "getRotation",
			value: function() {
				return X.sceneGraphService.getRotation(this);
			}
		},
		{
			key: "getLocalRotation",
			value: function() {
				return X.sceneGraphService.getLocalRotation(this);
			}
		},
		{
			key: "getLocalSkew",
			value: function() {
				return X.sceneGraphService.getLocalSkew(this);
			}
		},
		{
			key: "getLocalTransform",
			value: function() {
				return X.sceneGraphService.getLocalTransform(this);
			}
		},
		{
			key: "getWorldTransform",
			value: function() {
				return X.sceneGraphService.getWorldTransform(this);
			}
		},
		{
			key: "setLocalTransform",
			value: function(e) {
				return X.sceneGraphService.setLocalTransform(this, e), this;
			}
		},
		{
			key: "resetLocalTransform",
			value: function() {
				X.sceneGraphService.resetLocalTransform(this);
			}
		},
		{
			key: "getAnimations",
			value: function() {
				return this.activeAnimations;
			}
		},
		{
			key: "animate",
			value: function(e, t) {
				var n = this.ownerDocument?.timeline;
				return n ? n.play(this, e, t) : null;
			}
		},
		{
			key: "isVisible",
			value: function() {
				return this.parsedStyle?.visibility !== "hidden";
			}
		},
		{
			key: "interactive",
			get: function() {
				return this.isInteractive();
			},
			set: function(e) {
				this.style.pointerEvents = e ? "auto" : "none";
			}
		},
		{
			key: "isInteractive",
			value: function() {
				return this.parsedStyle?.pointerEvents !== "none";
			}
		},
		{
			key: "isCulled",
			value: function() {
				return !!(this.cullable && this.cullable.enable && !this.cullable.visible);
			}
		},
		{
			key: "toFront",
			value: function() {
				return this.parentNode && (this.style.zIndex = Math.max.apply(Math, w(this.parentNode.children.map(function(e) {
					return Number(e.style.zIndex);
				}))) + 1), this;
			}
		},
		{
			key: "toBack",
			value: function() {
				return this.parentNode && (this.style.zIndex = Math.min.apply(Math, w(this.parentNode.children.map(function(e) {
					return Number(e.style.zIndex);
				}))) - 1), this;
			}
		},
		{
			key: "getConfig",
			value: function() {
				return this.config;
			}
		},
		{
			key: "attr",
			value: function() {
				var e = this, t = [...arguments], n = t[0], r = t[1];
				return n ? Zt(n) ? (Object.keys(n).forEach(function(t) {
					e.setAttribute(t, n[t]);
				}), this) : t.length === 2 ? (this.setAttribute(n, r), this) : this.attributes[n] : this.attributes;
			}
		},
		{
			key: "getMatrix",
			value: function(e) {
				var t = e || this.getWorldTransform(), n = P(ke(xu, t), 2), r = n[0], i = n[1], a = P(Ae(xu, t), 2), o = a[0], s = a[1], c = P(Ei(xu, je(Su, t)), 3), l = c[0], u = c[2];
				return Di(l || u, r, i, o, s);
			}
		},
		{
			key: "getLocalMatrix",
			value: function() {
				return this.getMatrix(this.getLocalTransform());
			}
		},
		{
			key: "setMatrix",
			value: function(e) {
				var t = P(ki(e), 5), n = t[0], r = t[1], i = t[2], a = t[3], o = t[4];
				this.setEulerAngles(o).setPosition(n, r).setLocalScale(i, a);
			}
		},
		{
			key: "setLocalMatrix",
			value: function(e) {
				var t = P(ki(e), 5), n = t[0], r = t[1], i = t[2], a = t[3], o = t[4];
				this.setLocalEulerAngles(o).setLocalPosition(n, r).setLocalScale(i, a);
			}
		},
		{
			key: "show",
			value: function() {
				this.forEach(function(e) {
					e.style.visibility = "visible";
				});
			}
		},
		{
			key: "hide",
			value: function() {
				this.forEach(function(e) {
					e.style.visibility = "hidden";
				});
			}
		},
		{
			key: "getCount",
			value: function() {
				return this.childElementCount;
			}
		},
		{
			key: "getParent",
			value: function() {
				return this.parentElement;
			}
		},
		{
			key: "getChildren",
			value: function() {
				return this.children;
			}
		},
		{
			key: "getFirst",
			value: function() {
				return this.firstElementChild;
			}
		},
		{
			key: "getLast",
			value: function() {
				return this.lastElementChild;
			}
		},
		{
			key: "getChildByIndex",
			value: function(e) {
				return this.children[e] || null;
			}
		},
		{
			key: "add",
			value: function(e, t) {
				return this.appendChild(e, t);
			}
		},
		{
			key: "set",
			value: function(e, t) {
				this.config[e] = t;
			}
		},
		{
			key: "get",
			value: function(e) {
				return this.config[e];
			}
		},
		{
			key: "moveTo",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
				return this.setPosition(e, t, n), this;
			}
		},
		{
			key: "move",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
				return this.setPosition(e, t, n), this;
			}
		},
		{
			key: "setZIndex",
			value: function(e) {
				return this.style.zIndex = e, this;
			}
		}
	]);
}(vu);
Cu.PARSED_STYLE_LIST = new Set("class.className.clipPath.cursor.display.draggable.droppable.fill.fillOpacity.fillRule.filter.increasedLineWidthForHitTesting.lineCap.lineDash.lineDashOffset.lineJoin.lineWidth.miterLimit.hitArea.offsetDistance.offsetPath.offsetX.offsetY.opacity.pointerEvents.shadowColor.shadowType.shadowBlur.shadowOffsetX.shadowOffsetY.stroke.strokeOpacity.strokeWidth.strokeLinecap.strokeLineJoin.strokeDasharray.strokeDashoffset.transform.transformOrigin.textTransform.visibility.zIndex".split("."));
var wu = function(e) {
	function t() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		return g(this, t), k(this, t, [h({ type: B.CIRCLE }, e)]);
	}
	return j(t, e), v(t);
}(Cu);
wu.PARSED_STYLE_LIST = new Set([].concat(w(Cu.PARSED_STYLE_LIST), [
	"cx",
	"cy",
	"cz",
	"r",
	"isBillboard",
	"isSizeAttenuation"
]));
var Tu = ["style"], Eu = function(e) {
	function t() {
		var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = n.style, i = Zr(n, Tu);
		return g(this, t), e = k(this, t, [h({ style: r }, i)]), e.isCustomElement = !0, e;
	}
	return j(t, e), v(t);
}(Cu);
Eu.PARSED_STYLE_LIST = new Set([
	"class",
	"className",
	"clipPath",
	"cursor",
	"draggable",
	"droppable",
	"opacity",
	"pointerEvents",
	"transform",
	"transformOrigin",
	"zIndex",
	"visibility"
]);
var Du = function(e) {
	function t() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		return g(this, t), k(this, t, [h({ type: B.ELLIPSE }, e)]);
	}
	return j(t, e), v(t);
}(Cu);
Du.PARSED_STYLE_LIST = new Set([].concat(w(Cu.PARSED_STYLE_LIST), [
	"cx",
	"cy",
	"cz",
	"rx",
	"ry",
	"isBillboard",
	"isSizeAttenuation"
]));
var Ou = function(e) {
	function t() {
		return g(this, t), k(this, t, [{ type: B.FRAGMENT }]);
	}
	return j(t, e), v(t);
}(Cu);
Ou.PARSED_STYLE_LIST = new Set(["class", "className"]);
var ku = function(e) {
	function t() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		return g(this, t), k(this, t, [h({ type: B.GROUP }, e)]);
	}
	return j(t, e), v(t);
}(Cu);
ku.PARSED_STYLE_LIST = new Set([
	"class",
	"className",
	"clipPath",
	"cursor",
	"draggable",
	"droppable",
	"opacity",
	"pointerEvents",
	"transform",
	"transformOrigin",
	"zIndex",
	"visibility"
]);
var Au = ["style"], ju = function(e) {
	function t() {
		var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = n.style, i = Zr(n, Au);
		return g(this, t), e = k(this, t, [h({
			type: B.HTML,
			style: r
		}, i)]), e.cullable.enable = !1, e;
	}
	return j(t, e), v(t, [
		{
			key: "getDomElement",
			value: function() {
				return this.parsedStyle.$el;
			}
		},
		{
			key: "getClientRects",
			value: function() {
				return [this.getBoundingClientRect()];
			}
		},
		{
			key: "getLocalBounds",
			value: function() {
				if (this.parentNode) {
					var e = de(I(), this.parentNode.getWorldTransform()), t = this.getBounds();
					if (!si.isEmpty(t)) {
						var n = new si();
						return n.setFromTransformedAABB(t, e), n;
					}
				}
				return this.getBounds();
			}
		}
	]);
}(Cu);
ju.PARSED_STYLE_LIST = new Set([].concat(w(Cu.PARSED_STYLE_LIST), [
	"x",
	"y",
	"$el",
	"innerHTML",
	"width",
	"height"
]));
var Mu = function(e) {
	function t() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		return g(this, t), k(this, t, [h({ type: B.IMAGE }, e)]);
	}
	return j(t, e), v(t);
}(Cu);
Mu.PARSED_STYLE_LIST = new Set([].concat(w(Cu.PARSED_STYLE_LIST), [
	"x",
	"y",
	"z",
	"src",
	"width",
	"height",
	"isBillboard",
	"billboardRotation",
	"isSizeAttenuation",
	"keepAspectRatio"
]));
var Nu = ["style"], Pu = function(e) {
	function t() {
		var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = n.style, i = Zr(n, Nu);
		g(this, t), e = k(this, t, [h({
			type: B.LINE,
			style: h({
				x1: 0,
				y1: 0,
				x2: 0,
				y2: 0,
				z1: 0,
				z2: 0
			}, r)
		}, i)]), e.markerStartAngle = 0, e.markerEndAngle = 0;
		var a = e.parsedStyle, o = a.markerStart, s = a.markerEnd;
		return o && Z(o) && (e.markerStartAngle = o.getLocalEulerAngles(), e.appendChild(o)), s && Z(s) && (e.markerEndAngle = s.getLocalEulerAngles(), e.appendChild(s)), e.transformMarker(!0), e.transformMarker(!1), e;
	}
	return j(t, e), v(t, [
		{
			key: "attributeChangedCallback",
			value: function(e, t, n, r, i) {
				e === "x1" || e === "y1" || e === "x2" || e === "y2" || e === "markerStartOffset" || e === "markerEndOffset" ? (this.transformMarker(!0), this.transformMarker(!1)) : e === "markerStart" ? (r && Z(r) && (this.markerStartAngle = 0, r.remove()), i && Z(i) && (this.markerStartAngle = i.getLocalEulerAngles(), this.appendChild(i), this.transformMarker(!0))) : e === "markerEnd" && (r && Z(r) && (this.markerEndAngle = 0, r.remove()), i && Z(i) && (this.markerEndAngle = i.getLocalEulerAngles(), this.appendChild(i), this.transformMarker(!1)));
			}
		},
		{
			key: "transformMarker",
			value: function(e) {
				var t = this.parsedStyle, n = t.markerStart, r = t.markerEnd, i = t.markerStartOffset, a = t.markerEndOffset, o = t.x1, s = t.x2, c = t.y1, l = t.y2, u = e ? n : r;
				if (!(!u || !Z(u))) {
					var d = 0, f, p, m, h, g, _;
					e ? (m = o, h = c, f = s - o, p = l - c, g = i || 0, _ = this.markerStartAngle) : (m = s, h = l, f = o - s, p = c - l, g = a || 0, _ = this.markerEndAngle), d = Math.atan2(p, f), u.setLocalEulerAngles(d * 180 / Math.PI + _), u.setLocalPosition(m + Math.cos(d) * g, h + Math.sin(d) * g);
				}
			}
		},
		{
			key: "getPoint",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = this.parsedStyle, r = n.x1, i = n.y1, a = n.x2, o = n.y2, s = wr(r, i, a, o, e), c = s.x, l = s.y, u = vt(R(), it(c, l, 0), t ? this.getWorldTransform() : this.getLocalTransform());
				return new di(u[0], u[1]);
			}
		},
		{
			key: "getPointAtLength",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
				return this.getPoint(e / this.getTotalLength(), t);
			}
		},
		{
			key: "getTotalLength",
			value: function() {
				var e = this.parsedStyle, t = e.x1, n = e.y1, r = e.x2, i = e.y2;
				return Cr(t, n, r, i);
			}
		}
	]);
}(Cu);
Pu.PARSED_STYLE_LIST = new Set([].concat(w(Cu.PARSED_STYLE_LIST), [
	"x1",
	"y1",
	"x2",
	"y2",
	"z1",
	"z2",
	"isBillboard",
	"isSizeAttenuation",
	"markerStart",
	"markerEnd",
	"markerStartOffset",
	"markerEndOffset"
]));
var Fu = ["style"], Iu = function(e) {
	function t() {
		var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = n.style, i = Zr(n, Fu);
		g(this, t), e = k(this, t, [h({
			type: B.PATH,
			style: r,
			initialParsedStyle: {
				miterLimit: 4,
				d: h({}, Zi)
			}
		}, i)]), e.markerStartAngle = 0, e.markerEndAngle = 0, e.markerMidList = [];
		var a = e.parsedStyle, o = a.markerStart, s = a.markerEnd, c = a.markerMid;
		return o && Z(o) && (e.markerStartAngle = o.getLocalEulerAngles(), e.appendChild(o)), c && Z(c) && e.placeMarkerMid(c), s && Z(s) && (e.markerEndAngle = s.getLocalEulerAngles(), e.appendChild(s)), e.transformMarker(!0), e.transformMarker(!1), e;
	}
	return j(t, e), v(t, [
		{
			key: "attributeChangedCallback",
			value: function(e, t, n, r, i) {
				e === "d" ? (this.transformMarker(!0), this.transformMarker(!1), this.placeMarkerMid(this.parsedStyle.markerMid)) : e === "markerStartOffset" || e === "markerEndOffset" ? (this.transformMarker(!0), this.transformMarker(!1)) : e === "markerStart" ? (r && Z(r) && (this.markerStartAngle = 0, r.remove()), i && Z(i) && (this.markerStartAngle = i.getLocalEulerAngles(), this.appendChild(i), this.transformMarker(!0))) : e === "markerEnd" ? (r && Z(r) && (this.markerEndAngle = 0, r.remove()), i && Z(i) && (this.markerEndAngle = i.getLocalEulerAngles(), this.appendChild(i), this.transformMarker(!1))) : e === "markerMid" && this.placeMarkerMid(i);
			}
		},
		{
			key: "transformMarker",
			value: function(e) {
				var t = this.parsedStyle, n = t.markerStart, r = t.markerEnd, i = t.markerStartOffset, a = t.markerEndOffset, o = e ? n : r;
				if (!(!o || !Z(o))) {
					var s = 0, c, l, u, d, f, p;
					if (e) {
						var m = P(this.getStartTangent(), 2), h = m[0], g = m[1];
						u = g[0], d = g[1], c = h[0] - g[0], l = h[1] - g[1], f = i || 0, p = this.markerStartAngle;
					} else {
						var _ = P(this.getEndTangent(), 2), v = _[0], y = _[1];
						u = y[0], d = y[1], c = v[0] - y[0], l = v[1] - y[1], f = a || 0, p = this.markerEndAngle;
					}
					s = Math.atan2(l, c), o.setLocalEulerAngles(s * 180 / Math.PI + p), o.setLocalPosition(u + Math.cos(s) * f, d + Math.sin(s) * f);
				}
			}
		},
		{
			key: "placeMarkerMid",
			value: function(e) {
				var t = this.parsedStyle.d.segments;
				if (this.markerMidList.forEach(function(e) {
					e.remove();
				}), e && Z(e)) for (var n = 1; n < t.length - 1; n++) {
					var r = P(t[n].currentPoint, 2), i = r[0], a = r[1], o = n === 1 ? e : e.cloneNode(!0);
					this.markerMidList.push(o), this.appendChild(o), o.setLocalPosition(i, a);
				}
			}
		},
		{
			key: "getTotalLength",
			value: function() {
				return Zo(this);
			}
		},
		{
			key: "getPointAtLength",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = this.parsedStyle.d.absolutePath, r = or(n, e), i = r.x, a = r.y, o = vt(R(), it(i, a, 0), t ? this.getWorldTransform() : this.getLocalTransform());
				return new di(o[0], o[1]);
			}
		},
		{
			key: "getPoint",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
				return this.getPointAtLength(e * Zo(this), t);
			}
		},
		{
			key: "getStartTangent",
			value: function() {
				var e = this.parsedStyle.d.segments, t = [];
				if (e.length > 1) {
					var n = e[0].currentPoint, r = e[1].currentPoint, i = e[1].startTangent;
					t = [], i ? (t.push([n[0] - i[0], n[1] - i[1]]), t.push([n[0], n[1]])) : (t.push([r[0], r[1]]), t.push([n[0], n[1]]));
				}
				return t;
			}
		},
		{
			key: "getEndTangent",
			value: function() {
				var e = this.parsedStyle.d.segments, t = e.length, n = [];
				if (t > 1) {
					var r = e[t - 2].currentPoint, i = e[t - 1].currentPoint, a = e[t - 1].endTangent;
					n = [], a ? (n.push([i[0] - a[0], i[1] - a[1]]), n.push([i[0], i[1]])) : (n.push([r[0], r[1]]), n.push([i[0], i[1]]));
				}
				return n;
			}
		}
	]);
}(Cu);
Iu.PARSED_STYLE_LIST = new Set([].concat(w(Cu.PARSED_STYLE_LIST), [
	"d",
	"markerStart",
	"markerMid",
	"markerEnd",
	"markerStartOffset",
	"markerEndOffset",
	"isBillboard",
	"isSizeAttenuation"
]));
var Lu = ["style"], Ru = function(e) {
	function t() {
		var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = n.style, i = Zr(n, Lu);
		g(this, t), e = k(this, t, [h({
			type: B.POLYGON,
			style: r,
			initialParsedStyle: {
				points: {
					points: [],
					totalLength: 0,
					segments: []
				},
				miterLimit: 4,
				isClosed: !0
			}
		}, i)]), e.markerStartAngle = 0, e.markerEndAngle = 0, e.markerMidList = [];
		var a = e.parsedStyle, o = a.markerStart, s = a.markerEnd, c = a.markerMid;
		return o && Z(o) && (e.markerStartAngle = o.getLocalEulerAngles(), e.appendChild(o)), c && Z(c) && e.placeMarkerMid(c), s && Z(s) && (e.markerEndAngle = s.getLocalEulerAngles(), e.appendChild(s)), e.transformMarker(!0), e.transformMarker(!1), e;
	}
	return j(t, e), v(t, [
		{
			key: "attributeChangedCallback",
			value: function(e, t, n, r, i) {
				e === "points" ? (this.transformMarker(!0), this.transformMarker(!1), this.placeMarkerMid(this.parsedStyle.markerMid)) : e === "markerStartOffset" || e === "markerEndOffset" ? (this.transformMarker(!0), this.transformMarker(!1)) : e === "markerStart" ? (r && Z(r) && (this.markerStartAngle = 0, r.remove()), i && Z(i) && (this.markerStartAngle = i.getLocalEulerAngles(), this.appendChild(i), this.transformMarker(!0))) : e === "markerEnd" ? (r && Z(r) && (this.markerEndAngle = 0, r.remove()), i && Z(i) && (this.markerEndAngle = i.getLocalEulerAngles(), this.appendChild(i), this.transformMarker(!1))) : e === "markerMid" && this.placeMarkerMid(i);
			}
		},
		{
			key: "transformMarker",
			value: function(e) {
				var t = this.parsedStyle, n = t.markerStart, r = t.markerEnd, i = t.markerStartOffset, a = t.markerEndOffset, o = (t.points || {}).points, s = e ? n : r;
				if (!(!s || !Z(s) || !o)) {
					var c = 0, l, u, d = o[0][0], f = o[0][1], p, m;
					if (e) l = o[1][0] - o[0][0], u = o[1][1] - o[0][1], p = i || 0, m = this.markerStartAngle;
					else {
						var h = o.length;
						this.parsedStyle.isClosed ? (l = o[h - 1][0] - o[0][0], u = o[h - 1][1] - o[0][1]) : (d = o[h - 1][0], f = o[h - 1][1], l = o[h - 2][0] - o[h - 1][0], u = o[h - 2][1] - o[h - 1][1]), p = a || 0, m = this.markerEndAngle;
					}
					c = Math.atan2(u, l), s.setLocalEulerAngles(c * 180 / Math.PI + m), s.setLocalPosition(d + Math.cos(c) * p, f + Math.sin(c) * p);
				}
			}
		},
		{
			key: "placeMarkerMid",
			value: function(e) {
				var t = (this.parsedStyle.points || {}).points;
				if (this.markerMidList.forEach(function(e) {
					e.remove();
				}), this.markerMidList = [], e && Z(e) && t) for (var n = 1; n < (this.parsedStyle.isClosed ? t.length : t.length - 1); n++) {
					var r = t[n][0], i = t[n][1], a = n === 1 ? e : e.cloneNode(!0);
					this.markerMidList.push(a), this.appendChild(a), a.setLocalPosition(r, i);
				}
			}
		}
	]);
}(Cu);
Ru.PARSED_STYLE_LIST = new Set([].concat(w(Cu.PARSED_STYLE_LIST), [
	"points",
	"markerStart",
	"markerMid",
	"markerEnd",
	"markerStartOffset",
	"markerEndOffset",
	"isClosed",
	"isBillboard",
	"isSizeAttenuation"
]));
var zu = ["style"], Bu = function(e) {
	function t() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.style, r = Zr(e, zu);
		return g(this, t), k(this, t, [h({
			type: B.POLYLINE,
			style: n,
			initialParsedStyle: {
				points: {
					points: [],
					totalLength: 0,
					segments: []
				},
				miterLimit: 4,
				isClosed: !1
			}
		}, r)]);
	}
	return j(t, e), v(t, [
		{
			key: "getTotalLength",
			value: function() {
				return Qo(this);
			}
		},
		{
			key: "getPointAtLength",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
				return this.getPoint(e / this.getTotalLength(), t);
			}
		},
		{
			key: "getPoint",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = this.parsedStyle.points.points;
				if (this.parsedStyle.points.segments.length === 0) {
					var r = [], i = 0, a, o, s = this.getTotalLength();
					n.forEach(function(e, t) {
						n[t + 1] && (a = [0, 0], a[0] = i / s, o = Cr(e[0], e[1], n[t + 1][0], n[t + 1][1]), i += o, a[1] = i / s, r.push(a));
					}), this.parsedStyle.points.segments = r;
				}
				var c = 0, l = 0;
				this.parsedStyle.points.segments.forEach(function(t, n) {
					e >= t[0] && e <= t[1] && (c = (e - t[0]) / (t[1] - t[0]), l = n);
				});
				var u = wr(n[l][0], n[l][1], n[l + 1][0], n[l + 1][1], c), d = u.x, f = u.y, p = vt(R(), it(d, f, 0), t ? this.getWorldTransform() : this.getLocalTransform());
				return new di(p[0], p[1]);
			}
		},
		{
			key: "getStartTangent",
			value: function() {
				var e = this.parsedStyle.points.points, t = [];
				return t.push([e[1][0], e[1][1]]), t.push([e[0][0], e[0][1]]), t;
			}
		},
		{
			key: "getEndTangent",
			value: function() {
				var e = this.parsedStyle.points.points, t = e.length - 1, n = [];
				return n.push([e[t - 1][0], e[t - 1][1]]), n.push([e[t][0], e[t][1]]), n;
			}
		}
	]);
}(Ru);
Bu.PARSED_STYLE_LIST = new Set([].concat(w(Ru.PARSED_STYLE_LIST), [
	"points",
	"markerStart",
	"markerMid",
	"markerEnd",
	"markerStartOffset",
	"markerEndOffset",
	"isBillboard"
]));
var Vu = function(e) {
	function t() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		return g(this, t), k(this, t, [h({ type: B.RECT }, e)]);
	}
	return j(t, e), v(t);
}(Cu);
Vu.PARSED_STYLE_LIST = new Set([].concat(w(Cu.PARSED_STYLE_LIST), [
	"x",
	"y",
	"z",
	"width",
	"height",
	"isBillboard",
	"isSizeAttenuation",
	"radius"
]));
var Hu = ["style"], Uu = function(e) {
	function t() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.style, r = Zr(e, Hu);
		return g(this, t), k(this, t, [h({
			type: B.TEXT,
			style: h({ fill: "black" }, n)
		}, r)]);
	}
	return j(t, e), v(t, [
		{
			key: "getComputedTextLength",
			value: function() {
				return this.getGeometryBounds(), this.parsedStyle.metrics?.maxLineWidth || 0;
			}
		},
		{
			key: "getLineBoundingRects",
			value: function() {
				return this.getGeometryBounds(), this.parsedStyle.metrics?.lineMetrics || [];
			}
		},
		{
			key: "isOverflowing",
			value: function() {
				return this.getGeometryBounds(), !!this.parsedStyle.isOverflowing;
			}
		}
	]);
}(Cu);
Uu.PARSED_STYLE_LIST = new Set([].concat(w(Cu.PARSED_STYLE_LIST), "x.y.z.isBillboard.billboardRotation.isSizeAttenuation.text.textAlign.textBaseline.fontStyle.fontSize.fontFamily.fontWeight.fontVariant.lineHeight.letterSpacing.leading.wordWrap.wordWrapWidth.maxLines.textOverflow.isOverflowing.textPath.textDecorationLine.textDecorationColor.textDecorationStyle.textDecorationThickness.textPathSide.textPathStartOffset.metrics.dx.dy".split(".")));
var Wu = function() {
	function e() {
		g(this, e), this.registry = {}, this.define(B.CIRCLE, wu), this.define(B.ELLIPSE, Du), this.define(B.RECT, Vu), this.define(B.IMAGE, Mu), this.define(B.LINE, Pu), this.define(B.GROUP, ku), this.define(B.PATH, Iu), this.define(B.POLYGON, Ru), this.define(B.POLYLINE, Bu), this.define(B.TEXT, Uu), this.define(B.HTML, ju);
	}
	return v(e, [{
		key: "define",
		value: function(e, t) {
			this.registry[e] = t;
		}
	}, {
		key: "get",
		value: function(e) {
			return this.registry[e];
		}
	}]);
}(), Gu = {
	number: function(e) {
		return new eo(e);
	},
	percent: function(e) {
		return new eo(e, "%");
	},
	px: function(e) {
		return new eo(e, "px");
	},
	em: function(e) {
		return new eo(e, "em");
	},
	rem: function(e) {
		return new eo(e, "rem");
	},
	deg: function(e) {
		return new eo(e, "deg");
	},
	grad: function(e) {
		return new eo(e, "grad");
	},
	rad: function(e) {
		return new eo(e, "rad");
	},
	turn: function(e) {
		return new eo(e, "turn");
	},
	s: function(e) {
		return new eo(e, "s");
	},
	ms: function(e) {
		return new eo(e, "ms");
	},
	registerProperty: function(e) {
		var t = e.name, n = e.inherits, r = e.interpolable, i = e.initialValue, a = e.syntax;
		X.styleValueRegistry.registerMetadata({
			n: t,
			inh: n,
			int: r,
			d: i,
			syntax: a
		});
	},
	registerLayout: function(e, t) {
		X.layoutRegistry.registerLayout(e, t);
	}
}, Ku = function(e) {
	function t() {
		var e;
		g(this, t), e = k(this, t), e.defaultView = null, e.ownerDocument = null, e.nodeName = "document";
		try {
			e.timeline = new X.AnimationTimeline(e);
		} catch {}
		var n = {};
		return Us.forEach(function(e) {
			var t = e.n, r = e.inh, i = e.d;
			r && i && (n[t] = Yt(i) ? i(B.GROUP) : i);
		}), e.documentElement = new ku({
			id: "g-root",
			style: n
		}), e.documentElement.ownerDocument = e, e.documentElement.parentNode = e, e.childNodes = [e.documentElement], e;
	}
	return j(t, e), v(t, [
		{
			key: "children",
			get: function() {
				return this.childNodes;
			}
		},
		{
			key: "childElementCount",
			get: function() {
				return this.childNodes.length;
			}
		},
		{
			key: "firstElementChild",
			get: function() {
				return this.firstChild;
			}
		},
		{
			key: "lastElementChild",
			get: function() {
				return this.lastChild;
			}
		},
		{
			key: "createElement",
			value: function(e, t) {
				if (e === "svg") return this.documentElement;
				var n = this.defaultView.customElements.get(e);
				n ||= (console.warn("Unsupported tagName: ", e), e === "tspan" ? Uu : ku);
				var r = new n(t);
				return r.ownerDocument = this, r;
			}
		},
		{
			key: "createElementNS",
			value: function(e, t, n) {
				return this.createElement(t, n);
			}
		},
		{
			key: "cloneNode",
			value: function(e) {
				throw Error(pi);
			}
		},
		{
			key: "destroy",
			value: function() {
				try {
					this.documentElement.destroyChildren(), this.timeline.destroy();
				} catch {}
			}
		},
		{
			key: "elementsFromBBox",
			value: function(e, t, n, r) {
				var i = [], a = function(o) {
					if (!(!o.isInteractive() || o.isCulled())) {
						var s = o.parsedStyle.pointerEvents, c = s === void 0 ? "auto" : s;
						if (![
							"auto",
							"visiblepainted",
							"visiblefill",
							"visiblestroke",
							"visible"
						].includes(c) || o.isVisible()) {
							var l = o.getTransformedGeometryBounds(!0);
							l && !si.isEmpty(l) && l.max[0] >= e && l.min[0] <= n && l.max[1] >= t && l.min[1] <= r && i.push(o);
						}
						o.childNodes && o.childNodes.forEach(function(e) {
							e instanceof Cu && a(e);
						});
					}
				};
				return a(this.documentElement), i.sort(function(e, t) {
					return t.sortable.renderOrder - e.sortable.renderOrder;
				}), i;
			}
		},
		{
			key: "elementFromPointSync",
			value: function(e, t) {
				var n = this.defaultView.canvas2Viewport({
					x: e,
					y: t
				}), r = n.x, i = n.y, a = this.defaultView.getConfig(), o = a.width, s = a.height;
				if (r < 0 || i < 0 || r > o || i > s) return null;
				var c = this.defaultView.viewport2Client({
					x: r,
					y: i
				}), l = c.x, u = c.y, d = this.defaultView.getRenderingService().hooks.pickSync.call({
					topmost: !0,
					position: {
						x: e,
						y: t,
						viewportX: r,
						viewportY: i,
						clientX: l,
						clientY: u
					},
					picked: []
				}).picked;
				return d && d[0] || this.documentElement;
			}
		},
		{
			key: "elementFromPoint",
			value: function() {
				var e = Jr(Kr().mark(function e(t, n) {
					var r, i, a, o, s, c, l, u, d, f, p;
					return Kr().wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (r = this.defaultView.canvas2Viewport({
									x: t,
									y: n
								}), i = r.x, a = r.y, o = this.defaultView.getConfig(), s = o.width, c = o.height, !(i < 0 || a < 0 || i > s || a > c)) {
									e.next = 1;
									break;
								}
								return e.abrupt("return", null);
							case 1: return l = this.defaultView.viewport2Client({
								x: i,
								y: a
							}), u = l.x, d = l.y, e.next = 2, this.defaultView.getRenderingService().hooks.pick.promise({
								topmost: !0,
								position: {
									x: t,
									y: n,
									viewportX: i,
									viewportY: a,
									clientX: u,
									clientY: d
								},
								picked: []
							});
							case 2: return f = e.sent, p = f.picked, e.abrupt("return", p && p[0] || this.documentElement);
							case 3:
							case "end": return e.stop();
						}
					}, e, this);
				}));
				function t(t, n) {
					return e.apply(this, arguments);
				}
				return t;
			}()
		},
		{
			key: "elementsFromPointSync",
			value: function(e, t) {
				var n = this.defaultView.canvas2Viewport({
					x: e,
					y: t
				}), r = n.x, i = n.y, a = this.defaultView.getConfig(), o = a.width, s = a.height;
				if (r < 0 || i < 0 || r > o || i > s) return [];
				var c = this.defaultView.viewport2Client({
					x: r,
					y: i
				}), l = c.x, u = c.y, d = this.defaultView.getRenderingService().hooks.pickSync.call({
					topmost: !1,
					position: {
						x: e,
						y: t,
						viewportX: r,
						viewportY: i,
						clientX: l,
						clientY: u
					},
					picked: []
				}).picked;
				return d[d.length - 1] !== this.documentElement && d.push(this.documentElement), d;
			}
		},
		{
			key: "elementsFromPoint",
			value: function() {
				var e = Jr(Kr().mark(function e(t, n) {
					var r, i, a, o, s, c, l, u, d, f, p;
					return Kr().wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (r = this.defaultView.canvas2Viewport({
									x: t,
									y: n
								}), i = r.x, a = r.y, o = this.defaultView.getConfig(), s = o.width, c = o.height, !(i < 0 || a < 0 || i > s || a > c)) {
									e.next = 1;
									break;
								}
								return e.abrupt("return", []);
							case 1: return l = this.defaultView.viewport2Client({
								x: i,
								y: a
							}), u = l.x, d = l.y, e.next = 2, this.defaultView.getRenderingService().hooks.pick.promise({
								topmost: !1,
								position: {
									x: t,
									y: n,
									viewportX: i,
									viewportY: a,
									clientX: u,
									clientY: d
								},
								picked: []
							});
							case 2: return f = e.sent, p = f.picked, p[p.length - 1] !== this.documentElement && p.push(this.documentElement), e.abrupt("return", p);
							case 3:
							case "end": return e.stop();
						}
					}, e, this);
				}));
				function t(t, n) {
					return e.apply(this, arguments);
				}
				return t;
			}()
		},
		{
			key: "appendChild",
			value: function(e, t) {
				throw Error(mi);
			}
		},
		{
			key: "insertBefore",
			value: function(e, t) {
				throw Error(mi);
			}
		},
		{
			key: "removeChild",
			value: function(e, t) {
				throw Error(mi);
			}
		},
		{
			key: "replaceChild",
			value: function(e, t, n) {
				throw Error(mi);
			}
		},
		{
			key: "append",
			value: function() {
				throw Error(mi);
			}
		},
		{
			key: "prepend",
			value: function() {
				throw Error(mi);
			}
		},
		{
			key: "getElementById",
			value: function(e) {
				return this.documentElement.getElementById(e);
			}
		},
		{
			key: "getElementsByName",
			value: function(e) {
				return this.documentElement.getElementsByName(e);
			}
		},
		{
			key: "getElementsByTagName",
			value: function(e) {
				return this.documentElement.getElementsByTagName(e);
			}
		},
		{
			key: "getElementsByClassName",
			value: function(e) {
				return this.documentElement.getElementsByClassName(e);
			}
		},
		{
			key: "querySelector",
			value: function(e) {
				return this.documentElement.querySelector(e);
			}
		},
		{
			key: "querySelectorAll",
			value: function(e) {
				return this.documentElement.querySelectorAll(e);
			}
		},
		{
			key: "find",
			value: function(e) {
				return this.documentElement.find(e);
			}
		},
		{
			key: "findAll",
			value: function(e) {
				return this.documentElement.findAll(e);
			}
		}
	]);
}(wl), qu = function() {
	function e(t) {
		g(this, e), this.strategies = t;
	}
	return v(e, [{
		key: "apply",
		value: function(t) {
			var n = t.config, r = t.camera, i = t.renderingService, a = t.renderingContext, o = this.strategies;
			i.hooks.cull.tap(e.tag, function(e) {
				if (e) {
					var t = e.cullable;
					if (o.length === 0 ? t.visible = a.unculledEntities.indexOf(e.entity) > -1 : t.visible = o.every(function(t) {
						return t.isVisible(r, e);
					}), !e.isCulled() && e.isVisible()) return e;
					var i = n.future?.experimentalCancelEventPropagation === !0;
					return e.dispatchEvent(new Sl(Y.CULLED), i, i), null;
				}
				return e;
			}), i.hooks.afterRender.tap(e.tag, function(e) {
				e.cullable.visibilityPlaneMask = -1;
			});
		}
	}]);
}();
qu.tag = "Culling";
var Ju = function() {
	function e() {
		var t = this;
		g(this, e), this.autoPreventDefault = !1, this.rootPointerEvent = new bl(null), this.rootWheelEvent = new xl(null), this.onPointerMove = function(e) {
			var n, r = (n = t.context.renderingContext.root) == null || (n = n.ownerDocument) == null ? void 0 : n.defaultView;
			if (!(r.supportsTouchEvents && e.pointerType === "touch")) {
				var i = Yr(t.normalizeToPointerEvent(e, r)), a;
				try {
					for (i.s(); !(a = i.n()).done;) {
						var o = a.value, s = t.bootstrapEvent(t.rootPointerEvent, o, r, e);
						t.context.eventService.mapEvent(s);
					}
				} catch (e) {
					i.e(e);
				} finally {
					i.f();
				}
				t.setCursor(t.context.eventService.cursor);
			}
		}, this.onClick = function(e) {
			var n, r = (n = t.context.renderingContext.root) == null || (n = n.ownerDocument) == null ? void 0 : n.defaultView, i = Yr(t.normalizeToPointerEvent(e, r)), a;
			try {
				for (i.s(); !(a = i.n()).done;) {
					var o = a.value, s = t.bootstrapEvent(t.rootPointerEvent, o, r, e);
					t.context.eventService.mapEvent(s);
				}
			} catch (e) {
				i.e(e);
			} finally {
				i.f();
			}
			t.setCursor(t.context.eventService.cursor);
		};
	}
	return v(e, [
		{
			key: "apply",
			value: function(t) {
				var n = this;
				this.context = t;
				var r = t.renderingService, i = this.context.renderingContext.root.ownerDocument.defaultView;
				this.context.eventService.setPickHandler(function(e) {
					return n.context.renderingService.hooks.pickSync.call({
						position: e,
						picked: [],
						topmost: !0
					}).picked[0] || null;
				}), r.hooks.pointerWheel.tap(e.tag, function(e) {
					var t = n.normalizeWheelEvent(e);
					n.context.eventService.mapEvent(t);
				}), r.hooks.pointerDown.tap(e.tag, function(e) {
					if (!(i.supportsTouchEvents && e.pointerType === "touch")) {
						var t = n.normalizeToPointerEvent(e, i);
						n.autoPreventDefault && t[0].isNormalized && (e.cancelable || !("cancelable" in e)) && e.preventDefault();
						var r = Yr(t), a;
						try {
							for (r.s(); !(a = r.n()).done;) {
								var o = a.value, s = n.bootstrapEvent(n.rootPointerEvent, o, i, e);
								n.context.eventService.mapEvent(s);
							}
						} catch (e) {
							r.e(e);
						} finally {
							r.f();
						}
						n.setCursor(n.context.eventService.cursor);
					}
				}), r.hooks.pointerUp.tap(e.tag, function(e) {
					if (!(i.supportsTouchEvents && e.pointerType === "touch")) {
						var t = n.context.contextService.getDomElement(), r = n.context.eventService.isNativeEventFromCanvas(t, e) ? "" : "outside", a = Yr(n.normalizeToPointerEvent(e, i)), o;
						try {
							for (a.s(); !(o = a.n()).done;) {
								var s = o.value, c = n.bootstrapEvent(n.rootPointerEvent, s, i, e);
								c.type += r, n.context.eventService.mapEvent(c);
							}
						} catch (e) {
							a.e(e);
						} finally {
							a.f();
						}
						n.setCursor(n.context.eventService.cursor);
					}
				}), r.hooks.pointerMove.tap(e.tag, this.onPointerMove), r.hooks.pointerOver.tap(e.tag, this.onPointerMove), r.hooks.pointerOut.tap(e.tag, this.onPointerMove), r.hooks.click.tap(e.tag, this.onClick), r.hooks.pointerCancel.tap(e.tag, function(e) {
					var t = Yr(n.normalizeToPointerEvent(e, i)), r;
					try {
						for (t.s(); !(r = t.n()).done;) {
							var a = r.value, o = n.bootstrapEvent(n.rootPointerEvent, a, i, e);
							n.context.eventService.mapEvent(o);
						}
					} catch (e) {
						t.e(e);
					} finally {
						t.f();
					}
					n.setCursor(n.context.eventService.cursor);
				});
			}
		},
		{
			key: "bootstrapEvent",
			value: function(e, t, n, r) {
				e.view = n, e.originalEvent = null, e.nativeEvent = r, e.pointerId = t.pointerId, e.width = t.width, e.height = t.height, e.isPrimary = t.isPrimary, e.pointerType = t.pointerType, e.pressure = t.pressure, e.tangentialPressure = t.tangentialPressure, e.tiltX = t.tiltX, e.tiltY = t.tiltY, e.twist = t.twist, this.transferMouseData(e, t);
				var i = this.context.eventService.client2Viewport({
					x: t.clientX,
					y: t.clientY
				}), a = i.x, o = i.y;
				e.viewport.x = a, e.viewport.y = o;
				var s = this.context.eventService.viewport2Canvas(e.viewport), c = s.x, l = s.y;
				return e.canvas.x = c, e.canvas.y = l, e.global.copyFrom(e.canvas), e.offset.copyFrom(e.canvas), e.isTrusted = r.isTrusted, e.type === "pointerleave" && (e.type = "pointerout"), e.type.startsWith("mouse") && (e.type = e.type.replace("mouse", "pointer")), e.type.startsWith("touch") && (e.type = Tc[e.type] || e.type), e;
			}
		},
		{
			key: "normalizeWheelEvent",
			value: function(e) {
				var t = this.rootWheelEvent;
				this.transferMouseData(t, e), t.deltaMode = e.deltaMode, t.deltaX = e.deltaX, t.deltaY = e.deltaY, t.deltaZ = e.deltaZ;
				var n = this.context.eventService.client2Viewport({
					x: e.clientX,
					y: e.clientY
				}), r = n.x, i = n.y;
				t.viewport.x = r, t.viewport.y = i;
				var a = this.context.eventService.viewport2Canvas(t.viewport), o = a.x, s = a.y;
				return t.canvas.x = o, t.canvas.y = s, t.global.copyFrom(t.canvas), t.offset.copyFrom(t.canvas), t.nativeEvent = e, t.type = e.type, t;
			}
		},
		{
			key: "transferMouseData",
			value: function(e, t) {
				e.isTrusted = t.isTrusted, e.srcElement = t.srcElement, e.timeStamp = Ec.now(), e.type = t.type, e.altKey = t.altKey, e.metaKey = t.metaKey, e.shiftKey = t.shiftKey, e.ctrlKey = t.ctrlKey, e.button = t.button, e.buttons = t.buttons, e.client.x = t.clientX, e.client.y = t.clientY, e.movement.x = t.movementX, e.movement.y = t.movementY, e.page.x = t.pageX, e.page.y = t.pageY, e.screen.x = t.screenX, e.screen.y = t.screenY, e.relatedTarget = null;
			}
		},
		{
			key: "setCursor",
			value: function(e) {
				this.context.contextService.applyCursorStyle(e || this.context.config.cursor || "default");
			}
		},
		{
			key: "normalizeToPointerEvent",
			value: function(e, t) {
				var n = [];
				if (t.isTouchEvent(e)) for (var r = 0; r < e.changedTouches.length; r++) {
					var i = e.changedTouches[r];
					un(i.button) && (i.button = 0), un(i.buttons) && (i.buttons = 1), un(i.isPrimary) && (i.isPrimary = e.touches.length === 1 && e.type === "touchstart"), un(i.width) && (i.width = i.radiusX || 1), un(i.height) && (i.height = i.radiusY || 1), un(i.tiltX) && (i.tiltX = 0), un(i.tiltY) && (i.tiltY = 0), un(i.pointerType) && (i.pointerType = "touch"), un(i.pointerId) && (i.pointerId = i.identifier || 0), un(i.pressure) && (i.pressure = i.force || .5), un(i.twist) && (i.twist = 0), un(i.tangentialPressure) && (i.tangentialPressure = 0), i.isNormalized = !0, i.type = e.type, n.push(i);
				}
				else if (t.isMouseEvent(e)) {
					var a = e;
					un(a.isPrimary) && (a.isPrimary = !0), un(a.width) && (a.width = 1), un(a.height) && (a.height = 1), un(a.tiltX) && (a.tiltX = 0), un(a.tiltY) && (a.tiltY = 0), un(a.pointerType) && (a.pointerType = "mouse"), un(a.pointerId) && (a.pointerId = wc), un(a.pressure) && (a.pressure = .5), un(a.twist) && (a.twist = 0), un(a.tangentialPressure) && (a.tangentialPressure = 0), a.isNormalized = !0, n.push(a);
				} else n.push(e);
				return n;
			}
		}
	]);
}();
Ju.tag = "Event";
var Yu = [
	B.CIRCLE,
	B.ELLIPSE,
	B.IMAGE,
	B.RECT,
	B.LINE,
	B.POLYLINE,
	B.POLYGON,
	B.TEXT,
	B.PATH,
	B.HTML
], Xu = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "isVisible",
		value: function(e, t) {
			var n, r = t.cullable;
			if (!r.enable) return !0;
			var i = t.getRenderBounds();
			if (si.isEmpty(i)) return !1;
			var a = e.getFrustum(), o = (n = t.parentNode) == null || (n = n.cullable) == null ? void 0 : n.visibilityPlaneMask;
			return r.visibilityPlaneMask = this.computeVisibilityWithPlaneMask(t, i, o || li.INDETERMINATE, a.planes), r.visible = r.visibilityPlaneMask !== li.OUTSIDE, r.visible;
		}
	}, {
		key: "computeVisibilityWithPlaneMask",
		value: function(e, t, n, r) {
			if (n === li.OUTSIDE || n === li.INSIDE) return n;
			for (var i = li.INSIDE, a = Yu.indexOf(e.nodeName) > -1, o = 0, s = r.length; o < s; ++o) {
				var c = 1 << o;
				if ((n & c) !== 0 && !(a && (o === 4 || o === 5))) {
					var l = r[o], u = l.normal, d = l.distance;
					if (ht(u, t.getPositiveFarPoint(r[o])) + d < 0) return li.OUTSIDE;
					ht(u, t.getNegativeFarPoint(r[o])) + d < 0 && (i |= c);
				}
			}
			return i;
		}
	}]);
}(), Zu = function() {
	function e() {
		g(this, e), this.mutationRecords = [], this.isFirstTimeRendering = !0, this.isFirstTimeRenderingFinished = !1;
	}
	return v(e, [{
		key: "apply",
		value: function(t) {
			var n = this, r = t.renderingService, i = t.renderingContext.root.ownerDocument.defaultView, a = function(e) {
				r.dirty();
			}, o = function(e) {
				var t, i = e.detail;
				(t = n.mutationRecords).push.apply(t, w(i)), r.dirty();
			}, s = function(e) {
				var t = e.target;
				X.enableSizeAttenuation && X.styleValueRegistry.updateSizeAttenuation(t, i.getCamera().getZoom());
			}, c = function(e) {
				var t = e.target;
				X.sceneGraphService.dirtyToRoot(t), r.dirty();
			};
			r.hooks.init.tap(e.tag, function() {
				i.addEventListener(Y.MOUNTED, s), i.addEventListener(Y.UNMOUNTED, c), i.addEventListener(Y.ATTR_MODIFIED, a), i.addEventListener(Y.BOUNDS_CHANGED, o);
			}), r.hooks.destroy.tap(e.tag, function() {
				i.removeEventListener(Y.MOUNTED, s), i.removeEventListener(Y.UNMOUNTED, c), i.removeEventListener(Y.ATTR_MODIFIED, a), i.removeEventListener(Y.BOUNDS_CHANGED, o), n.mutationRecords = [];
			});
			var l = X.globalThis.requestIdleCallback ?? Bc.bind(X.globalThis);
			r.hooks.endFrame.tap(e.tag, function() {
				n.isFirstTimeRendering && (n.isFirstTimeRendering = !1, l(function() {
					n.isFirstTimeRenderingFinished = !0;
				})), n.mutationRecords = [];
			});
		}
	}]);
}();
Zu.tag = "Prepare";
var Qu = function(e) {
	return e.READY = "ready", e.BEFORE_RENDER = "beforerender", e.RERENDER = "rerender", e.AFTER_RENDER = "afterrender", e.BEFORE_DESTROY = "beforedestroy", e.AFTER_DESTROY = "afterdestroy", e.RESIZE = "resize", e.DIRTY_RECTANGLE = "dirtyrectangle", e.RENDERER_CHANGED = "rendererchanged", e;
}({}), $u = 500, ed = .1, td = 1e3, nd = new Sl(Y.MOUNTED), rd = new Sl(Y.UNMOUNTED), id = new Sl(Qu.BEFORE_RENDER), ad = new Sl(Qu.RERENDER), od = new Sl(Qu.AFTER_RENDER), sd = function(e) {
	function t(e) {
		var n;
		g(this, t), n = k(this, t), n.Element = Cu, n.inited = !1, n.context = {};
		var r = e.container, i = e.canvas, a = e.renderer, o = e.width, s = e.height, c = e.background, l = e.cursor, u = e.supportsMutipleCanvasesInOneContainer, d = e.cleanUpOnDestroy, f = d === void 0 ? !0 : d, p = e.offscreenCanvas, m = e.devicePixelRatio, _ = e.requestAnimationFrame, v = e.cancelAnimationFrame, y = e.createImage, b = e.supportsTouchEvents, x = e.supportsPointerEvents, S = e.isTouchEvent, C = e.isMouseEvent, w = e.dblClickSpeed, T = o, E = s, D = m || mc && window.devicePixelRatio || 1;
		return D = D >= 1 ? Math.ceil(D) : 1, i && (T = o || Sc(i) || i.width / D, E = s || Cc(i) || i.height / D), n.customElements = new Wu(), n.devicePixelRatio = D, n.requestAnimationFrame = _ ?? Bc.bind(X.globalThis), n.cancelAnimationFrame = v ?? Vc.bind(X.globalThis), n.createImage = y ?? function() {
			return new window.Image();
		}, n.supportsTouchEvents = b ?? "ontouchstart" in X.globalThis, n.supportsPointerEvents = x ?? !!X.globalThis.PointerEvent, n.isTouchEvent = S ?? function(e) {
			return n.supportsTouchEvents && e instanceof X.globalThis.TouchEvent;
		}, n.isMouseEvent = C ?? function(e) {
			return !X.globalThis.MouseEvent || e instanceof X.globalThis.MouseEvent && (!n.supportsPointerEvents || !(e instanceof X.globalThis.PointerEvent));
		}, p && (X.offscreenCanvas = p), n.document = new Ku(), n.document.defaultView = n, u || pc(r, n, f), n.initRenderingContext(h(h({}, e), {}, {
			width: T,
			height: E,
			background: c ?? "transparent",
			cursor: l ?? "default",
			cleanUpOnDestroy: f,
			devicePixelRatio: D,
			requestAnimationFrame: n.requestAnimationFrame,
			cancelAnimationFrame: n.cancelAnimationFrame,
			createImage: n.createImage,
			supportsTouchEvents: n.supportsTouchEvents,
			supportsPointerEvents: n.supportsPointerEvents,
			isTouchEvent: n.isTouchEvent,
			isMouseEvent: n.isMouseEvent,
			dblClickSpeed: w ?? 200
		})), n.initDefaultCamera(T, E, a.clipSpaceNearZ), n.initRenderer(a, !0), n;
	}
	return j(t, e), v(t, [
		{
			key: "initRenderingContext",
			value: function(e) {
				this.context.config = e, this.context.renderingContext = {
					root: this.document.documentElement,
					unculledEntities: [],
					renderListCurrentFrame: [],
					renderReasons: new Set(),
					force: !1,
					dirty: !1
				};
			}
		},
		{
			key: "initDefaultCamera",
			value: function(e, t, n) {
				var r = this, i = new X.CameraContribution();
				i.clipSpaceNearZ = n, i.setType(Ri.EXPLORING, zi.DEFAULT).setPosition(e / 2, t / 2, $u).setFocalPoint(e / 2, t / 2, 0).setOrthographic(e / -2, e / 2, t / 2, t / -2, ed, td), i.canvas = this, i.eventEmitter.on(Vi.UPDATED, function() {
					r.context.renderingContext.renderReasons.add(Ol.CAMERA_CHANGED), X.enableSizeAttenuation && r.getConfig().renderer.getConfig().enableSizeAttenuation && r.updateSizeAttenuation();
				}), this.context.camera = i;
			}
		},
		{
			key: "updateSizeAttenuation",
			value: function() {
				var e = this.getCamera().getZoom();
				this.document.documentElement.forEach(function(t) {
					X.styleValueRegistry.updateSizeAttenuation(t, e);
				});
			}
		},
		{
			key: "getConfig",
			value: function() {
				return this.context.config;
			}
		},
		{
			key: "getRoot",
			value: function() {
				return this.document.documentElement;
			}
		},
		{
			key: "getCamera",
			value: function() {
				return this.context.camera;
			}
		},
		{
			key: "getContextService",
			value: function() {
				return this.context.contextService;
			}
		},
		{
			key: "getEventService",
			value: function() {
				return this.context.eventService;
			}
		},
		{
			key: "getRenderingService",
			value: function() {
				return this.context.renderingService;
			}
		},
		{
			key: "getRenderingContext",
			value: function() {
				return this.context.renderingContext;
			}
		},
		{
			key: "getStats",
			value: function() {
				return this.getRenderingService().getStats();
			}
		},
		{
			key: "ready",
			get: function() {
				var e = this;
				return this.readyPromise || (this.readyPromise = new Promise(function(t) {
					e.resolveReadyPromise = function() {
						t(e);
					};
				}), this.inited && this.resolveReadyPromise()), this.readyPromise;
			}
		},
		{
			key: "destroy",
			value: function() {
				var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = arguments.length > 1 ? arguments[1] : void 0;
				G.clearCache();
				var n = this.getConfig().future?.experimentalCancelEventPropagation === !0;
				t || this.dispatchEvent(new Sl(Qu.BEFORE_DESTROY), n, n), this.frameId && this.cancelAnimationFrame(this.frameId);
				var r = this.getRoot();
				e && (this.unmountChildren(r), this.document.destroy(), this.getEventService().destroy()), this.getRenderingService().destroy(), this.getContextService().destroy(), t || this.dispatchEvent(new Sl(Qu.AFTER_DESTROY), n, n);
				var i = function(e) {
					e.currentTarget = null, e.manager = null, e.target = null, e.relatedNode = null;
				};
				i(nd), i(rd), i(id), i(ad), i(od), i(bu), i(hu), i(gu), i(_u), X.textService.clearCache();
			}
		},
		{
			key: "changeSize",
			value: function(e, t) {
				this.resize(e, t);
			}
		},
		{
			key: "resize",
			value: function(e, t) {
				var n = this.context.config;
				n.width = e, n.height = t, this.getContextService().resize(e, t);
				var r = this.context.camera, i = r.getProjectionMode();
				r.setPosition(e / 2, t / 2, $u).setFocalPoint(e / 2, t / 2, 0), i === Bi.ORTHOGRAPHIC ? r.setOrthographic(e / -2, e / 2, t / 2, t / -2, r.getNear(), r.getFar()) : r.setAspect(e / t);
				var a = n.future?.experimentalCancelEventPropagation === !0;
				this.dispatchEvent(new Sl(Qu.RESIZE, {
					width: e,
					height: t
				}), a, a);
			}
		},
		{
			key: "appendChild",
			value: function(e, t) {
				return this.document.documentElement.appendChild(e, t);
			}
		},
		{
			key: "insertBefore",
			value: function(e, t) {
				return this.document.documentElement.insertBefore(e, t);
			}
		},
		{
			key: "removeChild",
			value: function(e) {
				return this.document.documentElement.removeChild(e);
			}
		},
		{
			key: "removeChildren",
			value: function() {
				this.document.documentElement.removeChildren();
			}
		},
		{
			key: "destroyChildren",
			value: function() {
				this.document.documentElement.destroyChildren();
			}
		},
		{
			key: "render",
			value: function(e) {
				var t = this;
				e && (id.detail = e, od.detail = e);
				var n = this.getConfig().future?.experimentalCancelEventPropagation === !0;
				this.dispatchEvent(id, n, n), this.getRenderingService().render(this, e, function() {
					t.dispatchEvent(ad, n, n);
				}), this.dispatchEvent(od, n, n);
			}
		},
		{
			key: "run",
			value: function() {
				var e = this, t = function(n, r) {
					e.render(r), e.frameId = e.requestAnimationFrame(t);
				};
				t();
			}
		},
		{
			key: "initRenderer",
			value: function(e) {
				var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
				if (!e) throw Error("Renderer is required.");
				this.inited = !1, this.readyPromise = void 0, this.context.renderingPlugins = [], this.context.renderingPlugins.push(new Ju(), new Zu(), new qu([new Xu()])), this.loadRendererContainerModule(e), this.context.contextService = new this.context.ContextService(h(h({}, X), this.context)), this.context.renderingService = new kl(X, this.context), this.context.eventService = new El(X, this.context), this.context.eventService.init(), this.context.contextService.init ? (this.context.contextService.init(), this.initRenderingService(e, n, !0)) : this.context.contextService.initAsync().then(function() {
					t.initRenderingService(e, n);
				}).catch(function(e) {
					console.error(e);
				});
			}
		},
		{
			key: "initRenderingService",
			value: function(e) {
				var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
				this.context.renderingService.init(function() {
					t.inited = !0;
					var i = t.getConfig().future?.experimentalCancelEventPropagation === !0;
					n ? r ? t.requestAnimationFrame(function() {
						t.dispatchEvent(new Sl(Qu.READY), i, i);
					}) : t.dispatchEvent(new Sl(Qu.READY), i, i) : t.dispatchEvent(new Sl(Qu.RENDERER_CHANGED), i, i), t.readyPromise && t.resolveReadyPromise(), n || t.getRoot().forEach(function(e) {
						var t, n;
						(t = (n = e).dirty) == null || t.call(n, !0, !0);
					}), t.mountChildren(t.getRoot()), e.getConfig().enableAutoRendering && t.run();
				});
			}
		},
		{
			key: "loadRendererContainerModule",
			value: function(e) {
				var t = this;
				e.getPlugins().forEach(function(e) {
					e.context = t.context, e.init(X);
				});
			}
		},
		{
			key: "setRenderer",
			value: function(e) {
				var t = this.getConfig();
				if (t.renderer !== e) {
					var n = t.renderer;
					t.renderer = e, this.destroy(!1, !0), w(n?.getPlugins() || []).reverse().forEach(function(e) {
						e.destroy(X);
					}), this.initRenderer(e);
				}
			}
		},
		{
			key: "setCursor",
			value: function(e) {
				var t = this.getConfig();
				t.cursor = e, this.getContextService().applyCursorStyle(e);
			}
		},
		{
			key: "unmountChildren",
			value: function(e) {
				var t = this;
				if (e.childNodes.forEach(function(e) {
					t.unmountChildren(e);
				}), this.inited) {
					if (e.isMutationObserved) e.dispatchEvent(rd);
					else {
						var n = this.getConfig().future?.experimentalCancelEventPropagation === !0;
						rd.target = e, this.dispatchEvent(rd, !0, n);
					}
					e !== this.document.documentElement && (e.ownerDocument = null), e.isConnected = !1;
				}
				e.isCustomElement && e.disconnectedCallback && e.disconnectedCallback();
			}
		},
		{
			key: "mountChildren",
			value: function(e) {
				var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dc(e);
				if (this.inited) {
					if (!e.isConnected && (e.ownerDocument = this.document, e.isConnected = !0, !n)) if (e.isMutationObserved) e.dispatchEvent(nd);
					else {
						var r = this.getConfig().future?.experimentalCancelEventPropagation === !0;
						nd.target = e, this.dispatchEvent(nd, !0, r);
					}
				} else console.warn("[g]: You are trying to call `canvas.appendChild` before canvas' initialization finished. You can either await `canvas.ready` or listen to `CanvasEvent.READY` manually.", "appended child: ", e.nodeName);
				e.childNodes.forEach(function(e) {
					t.mountChildren(e, n);
				}), e.isCustomElement && e.connectedCallback && e.connectedCallback();
			}
		},
		{
			key: "mountFragment",
			value: function(e) {
				this.mountChildren(e, !1);
			}
		},
		{
			key: "client2Viewport",
			value: function(e) {
				return this.getEventService().client2Viewport(e);
			}
		},
		{
			key: "viewport2Client",
			value: function(e) {
				return this.getEventService().viewport2Client(e);
			}
		},
		{
			key: "viewport2Canvas",
			value: function(e) {
				return this.getEventService().viewport2Canvas(e);
			}
		},
		{
			key: "canvas2Viewport",
			value: function(e) {
				return this.getEventService().canvas2Viewport(e);
			}
		},
		{
			key: "getPointByClient",
			value: function(e, t) {
				return this.client2Viewport({
					x: e,
					y: t
				});
			}
		},
		{
			key: "getClientByPoint",
			value: function(e, t) {
				return this.viewport2Client({
					x: e,
					y: t
				});
			}
		}
	]);
}(Cl), cd = function() {
	function e() {
		g(this, e), this.cacheStore = new Map();
	}
	return v(e, [
		{
			key: "onRefAdded",
			value: function(e) {}
		},
		{
			key: "has",
			value: function(e) {
				return this.cacheStore.has(e);
			}
		},
		{
			key: "put",
			value: function(e, t, n) {
				return this.cacheStore.has(e) ? !1 : (this.cacheStore.set(e, {
					value: t,
					counter: new Set([n.entity])
				}), this.onRefAdded(n), !0);
			}
		},
		{
			key: "get",
			value: function(e, t) {
				var n = this.cacheStore.get(e);
				return n ? (n.counter.has(t.entity) || (n.counter.add(t.entity), this.onRefAdded(t)), n.value) : null;
			}
		},
		{
			key: "update",
			value: function(e, t, n) {
				var r = this.cacheStore.get(e);
				return r ? (r.value = h(h({}, r.value), t), r.counter.has(n.entity) || (r.counter.add(n.entity), this.onRefAdded(n)), !0) : !1;
			}
		},
		{
			key: "release",
			value: function(e, t) {
				var n = this.cacheStore.get(e);
				return n ? (n.counter.delete(t.entity), n.counter.size <= 0 && this.cacheStore.delete(e), !0) : !1;
			}
		},
		{
			key: "releaseRef",
			value: function(e) {
				var t = this;
				Array.from(this.cacheStore.keys()).forEach(function(n) {
					t.release(n, e);
				});
			}
		},
		{
			key: "getSize",
			value: function() {
				return this.cacheStore.size;
			}
		},
		{
			key: "clear",
			value: function() {
				this.cacheStore.clear();
			}
		}
	]);
}(), ld = [], ud = [], dd = function() {
	function e() {
		g(this, e);
	}
	return v(e, null, [
		{
			key: "stop",
			value: function() {
				var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.api;
				e.rafId &&= (t.cancelAnimationFrame(e.rafId), null);
			}
		},
		{
			key: "executeTask",
			value: function() {
				var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.api;
				ld.length <= 0 && ud.length <= 0 || (ud.forEach(function(e) {
					return e();
				}), ud = ld.splice(0, e.TASK_NUM_PER_FRAME), e.rafId = t.requestAnimationFrame(function() {
					e.executeTask(t);
				}));
			}
		},
		{
			key: "sliceImage",
			value: function(t, n, r, i) {
				for (var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : e.api, s = t.naturalWidth || t.width, c = t.naturalHeight || t.height, l = n - a, u = r - a, d = Math.ceil(s / l), f = Math.ceil(c / u), p = {
					tileSize: [n, r],
					gridSize: [f, d],
					tiles: Array(f).fill(null).map(function() {
						return Array(d).fill(null);
					})
				}, m = function(e) {
					for (var a = function(a) {
						ld.push(function() {
							var d = a * l, f = e * u, m = [Math.min(n, s - d), Math.min(r, c - f)], h = m[0], g = m[1], _ = o.createCanvas();
							_.width = n, _.height = r, _.getContext("2d").drawImage(t, d, f, h, g, 0, 0, h, g), p.tiles[e][a] = {
								x: d,
								y: f,
								tileX: a,
								tileY: e,
								data: _
							}, i();
						});
					}, f = 0; f < d; f++) a(f);
				}, h = 0; h < f; h++) m(h);
				return e.stop(), e.executeTask(), p;
			}
		}
	]);
}();
dd.TASK_NUM_PER_FRAME = 10;
var fd = new cd();
fd.onRefAdded = function(e) {
	var t = this;
	e.addEventListener(Y.DESTROY, function() {
		t.releaseRef(e);
	}, { once: !0 });
};
var pd = function() {
	function e(t, n) {
		g(this, e), this.gradientCache = {}, this.patternCache = {}, this.context = t, this.runtime = n;
	}
	return v(e, [
		{
			key: "getImageSync",
			value: function(e, t, n) {
				var r = nn(e) ? e : e.src;
				if (fd.has(r)) {
					var i = fd.get(r, t);
					if (i.img.complete) return n?.(i), i;
				}
				return this.getOrCreateImage(e, t).then(function(e) {
					n?.(e);
				}).catch(function(e) {
					console.error(e);
				}), null;
			}
		},
		{
			key: "getOrCreateImage",
			value: function(e, t) {
				var n = this, r = nn(e) ? e : e.src;
				if (!nn(e) && !fd.has(r)) {
					var i = {
						img: e,
						size: [e.naturalWidth || e.width, e.naturalHeight || e.height],
						tileSize: md(e)
					};
					fd.put(r, i, t);
				}
				if (fd.has(r)) {
					var a = fd.get(r, t);
					return a.img.complete ? Promise.resolve(a) : new Promise(function(e, t) {
						a.img.addEventListener("load", function() {
							a.size = [a.img.naturalWidth || a.img.width, a.img.naturalHeight || a.img.height], a.tileSize = md(a.img), e(a);
						}), a.img.addEventListener("error", function(e) {
							t(e);
						});
					});
				}
				return new Promise(function(e, i) {
					var a = n.context.config.createImage();
					if (a) {
						var o = {
							img: a,
							size: [0, 0],
							tileSize: md(a)
						};
						fd.put(r, o, t), a.onload = function() {
							o.size = [a.naturalWidth || a.width, a.naturalHeight || a.height], o.tileSize = md(o.img), e(o);
						}, a.onerror = function(e) {
							i(e);
						}, a.crossOrigin = "Anonymous", a.src = r;
					}
				});
			}
		},
		{
			key: "createDownSampledImage",
			value: function() {
				var e = Jr(Kr().mark(function e(t, n) {
					var r, i, a, o, s, c, l, u, d, f, p, m, g, _;
					return Kr().wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0: return e.next = 1, this.getOrCreateImage(t, n);
							case 1:
								if (r = e.sent, r.downSamplingRate === void 0) {
									e.next = 2;
									break;
								}
								return e.abrupt("return", r);
							case 2:
								if (i = this.context.config.enableLargeImageOptimization, a = typeof i == "boolean" ? {} : i, o = a.maxDownSampledImageSize, s = o === void 0 ? 2048 : o, c = a.downSamplingRateThreshold, l = c === void 0 ? .5 : c, u = this.runtime.globalThis.createImageBitmap, d = P(r.size, 2), f = d[0], p = d[1], m = r.img, g = Math.min((s + s) / (f + p), Math.max(.01, Math.min(l, .5))), _ = h(h({}, r), {}, { downSamplingRate: g }), fd.update(r.img.src, _, n), !u) {
									e.next = 7;
									break;
								}
								return e.prev = 3, e.next = 4, u(r.img, {
									resizeWidth: f * g,
									resizeHeight: p * g
								});
							case 4:
								m = e.sent, e.next = 6;
								break;
							case 5: e.prev = 5, e.catch(3), g = 1;
							case 6:
								e.next = 8;
								break;
							case 7: g = 1;
							case 8: return _ = h(h({}, this.getImageSync(t, n)), {}, {
								downSampled: m,
								downSamplingRate: g
							}), fd.update(r.img.src, _, n), e.abrupt("return", _);
							case 9:
							case "end": return e.stop();
						}
					}, e, this, [[3, 5]]);
				}));
				function t(t, n) {
					return e.apply(this, arguments);
				}
				return t;
			}()
		},
		{
			key: "createImageTiles",
			value: function() {
				var e = Jr(Kr().mark(function e(t, n, r, i) {
					var a, o, s, c, l;
					return Kr().wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0: return e.next = 1, this.getOrCreateImage(t, i);
							case 1: return a = e.sent, o = i.ownerDocument.defaultView, s = o.requestAnimationFrame, c = o.cancelAnimationFrame, dd.api = {
								requestAnimationFrame: s,
								cancelAnimationFrame: c,
								createCanvas: function() {
									return Dl.createCanvas();
								}
							}, l = h(h({}, a), dd.sliceImage(a.img, a.tileSize[0], a.tileSize[0], r)), fd.update(a.img.src, l, i), e.abrupt("return", l);
							case 2:
							case "end": return e.stop();
						}
					}, e, this);
				}));
				function t(t, n, r, i) {
					return e.apply(this, arguments);
				}
				return t;
			}()
		},
		{
			key: "releaseImage",
			value: function(e, t) {
				fd.release(nn(e) ? e : e.src, t);
			}
		},
		{
			key: "releaseImageRef",
			value: function(e) {
				fd.releaseRef(e);
			}
		},
		{
			key: "getOrCreatePatternSync",
			value: function(e, t, n, r, i, a, o) {
				var s = this.generatePatternKey(t);
				if (s && this.patternCache[s]) return this.patternCache[s];
				var c = t.image, l = t.repetition, u = t.transform, d, f = !1;
				nn(c) ? d = this.getImageSync(c, e, o)?.img : r ? (d = r, f = !0) : d = c;
				var p = d && n.createPattern(d, l);
				if (p) {
					var m = u ? al(Es(u), new Cu({})) : L(I());
					f && ge(m, m, [
						1 / i,
						1 / i,
						1
					]), p.setTransform({
						a: m[0],
						b: m[1],
						c: m[4],
						d: m[5],
						e: m[12] + a[0],
						f: m[13] + a[1]
					});
				}
				return s && p && (this.patternCache[s] = p), p;
			}
		},
		{
			key: "getOrCreateGradient",
			value: function(e, t) {
				var n = this.generateGradientKey(e), r = e.type, i = e.steps, a = e.min, o = e.width, s = e.height, c = e.angle, l = e.cx, u = e.cy, d = e.size;
				if (this.gradientCache[n]) return this.gradientCache[n];
				var f = null;
				if (r === Ya.LinearGradient) {
					var p = mo(a, o, s, c), m = p.x1, h = p.y1, g = p.x2, _ = p.y2;
					f = t.createLinearGradient(m, h, g, _);
				} else if (r === Ya.RadialGradient) {
					var v = ho(a, o, s, l, u, d), y = v.x, b = v.y, x = v.r;
					f = t.createRadialGradient(y, b, 0, y, b, x);
				}
				return f && (i.forEach(function(e) {
					var t = e.offset, n = e.color;
					if (t.unit === K.kPercentage) {
						var r;
						(r = f) == null || r.addColorStop(t.value / 100, n.toString());
					}
				}), this.gradientCache[n] = f), this.gradientCache[n];
			}
		},
		{
			key: "generateGradientKey",
			value: function(e) {
				var t = e.type, n = e.min, r = e.width, i = e.height, a = e.steps, o = e.angle, s = e.cx, c = e.cy, l = e.size;
				return `gradient-${t}-${o?.toString() || 0}-${s?.toString() || 0}-${c?.toString() || 0}-${l?.toString() || 0}-${n[0]}-${n[1]}-${r}-${i}-${a.map(function(e) {
					return `${e.offset}${e.color}`;
				}).join("-")}`;
			}
		},
		{
			key: "generatePatternKey",
			value: function(e) {
				var t = e.image, n = e.repetition;
				if (nn(t)) return `pattern-${t}-${n}`;
				if (t.nodeName === "rect") return `pattern-${t.entity}-${n}`;
			}
		}
	]);
}();
pd.isSupportTile = !!Dl.createCanvas();
function md(e) {
	if (!e.complete) return [0, 0];
	var t = e.naturalWidth || e.width, n = e.naturalHeight || e.height, r = 256;
	return [256, 512].forEach(function(e) {
		Math.ceil(n / e) * Math.ceil(t / e) < 1e3 && (r = e);
	}), [r, r];
}
var hd = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "apply",
		value: function(t) {
			var n = t.renderingService, r = t.renderingContext, i = t.imagePool, a = r.root.ownerDocument.defaultView, o = function(e, t, n) {
				var r = e.parsedStyle, i = r.width, a = r.height;
				i && !a ? e.setAttribute("height", n / t * i) : !i && a && e.setAttribute("width", t / n * a);
			}, s = function(e) {
				var t = e.target, r = t.nodeName, a = t.attributes;
				if (r === B.IMAGE) {
					var s = a.src, c = a.keepAspectRatio;
					i.getImageSync(s, t, function(e) {
						var r = e.img, i = r.width, a = r.height;
						c && o(t, i, a), t.dirty(), n.dirty();
					});
				}
			}, c = function(e) {
				var t = e.target, r = e.attrName, a = e.prevValue, s = e.newValue;
				t.nodeName !== B.IMAGE || r !== "src" || (a !== s && i.releaseImage(a, t), nn(s) && i.getOrCreateImage(s, t).then(function(e) {
					var r = e.img, i = r.width, a = r.height;
					t.attributes.keepAspectRatio && o(t, i, a), t.dirty(), n.dirty();
				}).catch(function() {}));
			};
			n.hooks.init.tap(e.tag, function() {
				a.addEventListener(Y.MOUNTED, s), a.addEventListener(Y.ATTR_MODIFIED, c);
			}), n.hooks.destroy.tap(e.tag, function() {
				a.removeEventListener(Y.MOUNTED, s), a.removeEventListener(Y.ATTR_MODIFIED, c);
			});
		}
	}]);
}();
hd.tag = "LoadImage";
var gd = Object.freeze({
	__proto__: null,
	ImagePool: pd,
	Plugin: function(e) {
		function t() {
			var e;
			g(this, t);
			var n = [...arguments];
			return e = k(this, t, [].concat(n)), e.name = "image-loader", e;
		}
		return j(t, e), v(t, [{
			key: "init",
			value: function(e) {
				this.context.imagePool = new pd(this.context, e), this.addRenderingPlugin(new hd());
			}
		}, {
			key: "destroy",
			value: function() {
				this.removeAllRenderingPlugins();
			}
		}]);
	}($r)
}), _d = "g-canvas-camera", vd = function() {
	function e() {
		g(this, e), this.displayObjectHTMLElementMap = new WeakMap();
	}
	return v(e, [
		{
			key: "joinTransformMatrix",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [
					0,
					0,
					0
				];
				return `matrix(${[
					e[0],
					e[1],
					e[4],
					e[5],
					e[12] + t[0],
					e[13] + t[1]
				].join(",")})`;
			}
		},
		{
			key: "apply",
			value: function(t, n) {
				var r = this, i = t.camera, a = t.renderingContext, o = t.renderingService;
				this.context = t;
				var s = a.root.ownerDocument.defaultView, c = s.context.eventService.nativeHTMLMap, l = function(e, t) {
					t.style.transform = r.joinTransformMatrix(e.getWorldTransform(), e.getOrigin());
				}, u = function(e) {
					var t = e.target;
					if (t.nodeName === B.HTML) {
						r.$camera ||= r.createCamera(i);
						var n = r.getOrCreateEl(t);
						r.$camera.appendChild(n), Object.keys(t.attributes).forEach(function(e) {
							r.updateAttribute(e, t);
						}), l(t, n), c.set(n, t);
					}
				}, d = function(e) {
					var t = e.target;
					if (t.nodeName === B.HTML && r.$camera) {
						var n = r.getOrCreateEl(t);
						n && (n.remove(), c.delete(n));
					}
				}, f = function(e) {
					var t = e.target;
					if (t.nodeName === B.HTML) {
						var n = e.attrName;
						r.updateAttribute(n, t);
					}
				}, p = function(e) {
					for (var t = e.detail, n = 0; n < t.length; n++) {
						var i = t[n].target;
						(i.nodeName === B.FRAGMENT ? i.childNodes : [i]).forEach(function(e) {
							e.nodeName === B.HTML && l(e, r.getOrCreateEl(e));
						});
					}
				}, m = function() {
					if (r.$camera) {
						var e = r.context.config, t = e.width, n = e.height;
						r.$camera.parentElement.style.width = `${t || 0}px`, r.$camera.parentElement.style.height = `${n || 0}px`;
					}
				};
				o.hooks.init.tap(e.tag, function() {
					s.addEventListener(Qu.RESIZE, m), s.addEventListener(Y.MOUNTED, u), s.addEventListener(Y.UNMOUNTED, d), s.addEventListener(Y.ATTR_MODIFIED, f), s.addEventListener(Y.BOUNDS_CHANGED, p);
				}), o.hooks.endFrame.tap(e.tag, function() {
					r.$camera && a.renderReasons.has(Ol.CAMERA_CHANGED) && (r.$camera.style.transform = r.joinTransformMatrix(i.getOrthoMatrix()));
				}), o.hooks.destroy.tap(e.tag, function() {
					r.$camera && r.$camera.remove(), s.removeEventListener(Qu.RESIZE, m), s.removeEventListener(Y.MOUNTED, u), s.removeEventListener(Y.UNMOUNTED, d), s.removeEventListener(Y.ATTR_MODIFIED, f), s.removeEventListener(Y.BOUNDS_CHANGED, p);
				});
			}
		},
		{
			key: "createCamera",
			value: function(e) {
				var t = this.context.config, n = t.document, r = t.width, i = t.height, a = this.context.contextService.getDomElement(), o = a.parentNode;
				if (o) {
					var s = _d, c = o.querySelector(`#${s}`);
					if (!c) {
						var l = (n || document).createElement("div");
						l.style.overflow = "hidden", l.style.pointerEvents = "none", l.style.position = "absolute", l.style.left = "0px", l.style.top = "0px", l.style.width = `${r || 0}px`, l.style.height = `${i || 0}px`;
						var u = (n || document).createElement("div");
						c = u, u.id = s, u.style.position = "absolute", u.style.left = `${a.offsetLeft || 0}px`, u.style.top = `${a.offsetTop || 0}px`, u.style.transformOrigin = "left top", u.style.transform = this.joinTransformMatrix(e.getOrthoMatrix()), u.style.pointerEvents = "none", u.style.width = "100%", u.style.height = "100%", l.appendChild(u), o.appendChild(l);
					}
					return c;
				}
				return null;
			}
		},
		{
			key: "getOrCreateEl",
			value: function(e) {
				var t = this.context.config.document, n = this.displayObjectHTMLElementMap.get(e);
				return n || (n = (t || document).createElement("div"), e.parsedStyle.$el = n, this.displayObjectHTMLElementMap.set(e, n), e.id && (n.id = e.id), e.name && n.setAttribute("name", e.name), e.className && (n.className = e.className), n.style.position = "absolute", n.style["will-change"] = "transform", n.style.transform = this.joinTransformMatrix(e.getWorldTransform(), e.getOrigin())), n;
			}
		},
		{
			key: "updateAttribute",
			value: function(e, t) {
				var n = this.getOrCreateEl(t);
				switch (e) {
					case "innerHTML":
						var r = t.parsedStyle.innerHTML;
						nn(r) ? n.innerHTML = r : (n.innerHTML = "", n.appendChild(r));
						break;
					case "x":
						n.style.left = `${t.parsedStyle.x}px`;
						break;
					case "y":
						n.style.top = `${t.parsedStyle.y}px`;
						break;
					case "transformOrigin":
						var i = t.parsedStyle.transformOrigin;
						n.style["transform-origin"] = `${i[0].buildCSSText(null, null, "")} ${i[1].buildCSSText(null, null, "")}`;
						break;
					case "width":
						var a = t.parsedStyle.width;
						n.style.width = an(a) ? `${a}px` : a.toString();
						break;
					case "height":
						var o = t.parsedStyle.height;
						n.style.height = an(o) ? `${o}px` : o.toString();
						break;
					case "zIndex":
						var s = t.parsedStyle.zIndex;
						n.style["z-index"] = `${s}`;
						break;
					case "visibility":
						var c = t.parsedStyle.visibility;
						n.style.visibility = c;
						break;
					case "pointerEvents":
						var l = t.parsedStyle.pointerEvents, u = l === void 0 ? "auto" : l;
						n.style.pointerEvents = u;
						break;
					case "opacity":
						var d = t.parsedStyle.opacity;
						n.style.opacity = `${d}`;
						break;
					case "fill":
						var f = t.parsedStyle.fill, p = "";
						Oo(f) ? p = f.isNone ? "transparent" : t.getAttribute("fill") : Array.isArray(f) ? p = t.getAttribute("fill") : Do(f), n.style.background = p;
						break;
					case "stroke":
						var m = t.parsedStyle.stroke, h = "";
						Oo(m) ? h = m.isNone ? "transparent" : t.getAttribute("stroke") : Array.isArray(m) ? h = t.getAttribute("stroke") : Do(m), n.style["border-color"] = h, n.style["border-style"] = "solid";
						break;
					case "lineWidth":
						var g = t.parsedStyle.lineWidth;
						n.style["border-width"] = `${g || 0}px`;
						break;
					case "lineDash":
						n.style["border-style"] = "dashed";
						break;
					case "filter":
						var _ = t.style.filter;
						n.style.filter = _;
						break;
					default: !z(t.style[e]) && t.style[e] !== "" && (n.style[e] = t.style[e]);
				}
			}
		}
	]);
}();
vd.tag = "HTMLRendering";
var yd = Object.freeze({
	__proto__: null,
	Plugin: function(e) {
		function t() {
			var e;
			g(this, t);
			var n = [...arguments];
			return e = k(this, t, [].concat(n)), e.name = "html-renderer", e;
		}
		return j(t, e), v(t, [{
			key: "init",
			value: function() {
				this.addRenderingPlugin(new vd());
			}
		}, {
			key: "destroy",
			value: function() {
				this.removeAllRenderingPlugins();
			}
		}]);
	}($r)
}), bd = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "apply",
		value: function(t, n) {
			var r = this, i = t.renderingService, a = t.renderingContext, o = t.config;
			this.context = t;
			var s = a.root.ownerDocument.defaultView, c = function(e) {
				i.hooks.pointerMove.call(e);
			}, l = function(e) {
				i.hooks.pointerUp.call(e);
			}, u = function(e) {
				i.hooks.pointerDown.call(e);
			}, d = function(e) {
				i.hooks.pointerOver.call(e);
			}, f = function(e) {
				i.hooks.pointerOut.call(e);
			}, p = function(e) {
				i.hooks.pointerCancel.call(e);
			}, m = function(e) {
				i.hooks.pointerWheel.call(e);
			}, h = function(e) {
				i.hooks.click.call(e);
			}, g = function(e) {
				n.globalThis.document.addEventListener("pointermove", c, !0), e.addEventListener("pointerdown", u, !0), e.addEventListener("pointerleave", f, !0), e.addEventListener("pointerover", d, !0), n.globalThis.addEventListener("pointerup", l, !0), n.globalThis.addEventListener("pointercancel", p, !0);
			}, _ = function(e) {
				e.addEventListener("touchstart", u, !0), e.addEventListener("touchend", l, !0), e.addEventListener("touchmove", c, !0), e.addEventListener("touchcancel", p, !0);
			}, v = function(e) {
				n.globalThis.document.addEventListener("mousemove", c, !0), e.addEventListener("mousedown", u, !0), e.addEventListener("mouseout", f, !0), e.addEventListener("mouseover", d, !0), n.globalThis.addEventListener("mouseup", l, !0);
			}, y = function(e) {
				n.globalThis.document.removeEventListener("pointermove", c, !0), e.removeEventListener("pointerdown", u, !0), e.removeEventListener("pointerleave", f, !0), e.removeEventListener("pointerover", d, !0), n.globalThis.removeEventListener("pointerup", l, !0), n.globalThis.removeEventListener("pointercancel", p, !0);
			}, b = function(e) {
				e.removeEventListener("touchstart", u, !0), e.removeEventListener("touchend", l, !0), e.removeEventListener("touchmove", c, !0), e.removeEventListener("touchcancel", p, !0);
			}, x = function(e) {
				n.globalThis.document.removeEventListener("mousemove", c, !0), e.removeEventListener("mousedown", u, !0), e.removeEventListener("mouseout", f, !0), e.removeEventListener("mouseover", d, !0), n.globalThis.removeEventListener("mouseup", l, !0);
			};
			i.hooks.init.tap(e.tag, function() {
				var e = r.context.contextService.getDomElement();
				n.globalThis.navigator.msPointerEnabled ? (e.style.msContentZooming = "none", e.style.msTouchAction = "none") : s.supportsPointerEvents && (e.style.touchAction = "none"), s.supportsPointerEvents ? g(e) : v(e), s.supportsTouchEvents && _(e), o.useNativeClickEvent && e.addEventListener("click", h, !0), e.addEventListener("wheel", m, {
					passive: !0,
					capture: !0
				});
			}), i.hooks.destroy.tap(e.tag, function() {
				var e = r.context.contextService.getDomElement();
				n.globalThis.navigator.msPointerEnabled ? (e.style.msContentZooming = "", e.style.msTouchAction = "") : s.supportsPointerEvents && (e.style.touchAction = ""), s.supportsPointerEvents ? y(e) : x(e), s.supportsTouchEvents && b(e), o.useNativeClickEvent && e.removeEventListener("click", h, !0), e.removeEventListener("wheel", m, !0);
			});
		}
	}]);
}();
bd.tag = "DOMInteraction";
var xd = Object.freeze({
	__proto__: null,
	Plugin: function(e) {
		function t() {
			var e;
			g(this, t);
			var n = [...arguments];
			return e = k(this, t, [].concat(n)), e.name = "dom-interaction", e;
		}
		return j(t, e), v(t, [{
			key: "init",
			value: function() {
				this.addRenderingPlugin(new bd());
			}
		}, {
			key: "destroy",
			value: function() {
				this.removeAllRenderingPlugins();
			}
		}]);
	}($r)
}), Sd = function() {
	function e() {
		g(this, e);
	}
	return v(e, [{
		key: "apply",
		value: function(t) {
			var n = t.renderingService, r = t.contextService, i = t.config, a = r.getDomElement(), o = function(e) {
				n.hooks.pointerDown.call(e);
			}, s = function(e) {
				n.hooks.pointerUp.call(e);
			}, c = function(e) {
				n.hooks.pointerMove.call(e);
			}, l = function(e) {
				n.hooks.pointerOver.call(e);
			}, u = function(e) {
				n.hooks.pointerOut.call(e);
			}, d = function(e) {
				n.hooks.click.call(e);
			}, f = function(e) {
				n.hooks.pointerCancel.call(e);
			};
			n.hooks.init.tap(e.tag, function() {
				a.addEventListener("touchstart", o, !0), a.addEventListener("touchend", s, !0), a.addEventListener("touchmove", c, !0), a.addEventListener("touchcancel", f, !0), a.addEventListener("mouseout", u, !0), a.addEventListener("mouseover", l, !0), i.useNativeClickEvent && a.addEventListener("click", d, !0);
			}), n.hooks.destroy.tap(e.tag, function() {
				a.removeEventListener("touchstart", o, !0), a.removeEventListener("touchend", s, !0), a.removeEventListener("touchmove", c, !0), a.removeEventListener("touchcancel", f, !0), a.removeEventListener("mouseout", u, !0), a.removeEventListener("mouseover", l, !0), i.useNativeClickEvent && a.removeEventListener("click", d, !0);
			});
		}
	}]);
}();
Sd.tag = "MobileInteraction", o(((e, t) => {
	(function(n, r) {
		typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : (n = typeof globalThis < "u" ? globalThis : n || self, n.html2canvas = r());
	})(e, (function() {
		var e = function(t, n) {
			return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
				e.__proto__ = t;
			} || function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			}, e(t, n);
		};
		function t(t, n) {
			if (typeof n != "function" && n !== null) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
		}
		var n = function() {
			return n = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e;
			}, n.apply(this, arguments);
		};
		function r(e, t, n, r) {
			function i(e) {
				return e instanceof n ? e : new n(function(t) {
					t(e);
				});
			}
			return new (n ||= Promise)(function(n, a) {
				function o(e) {
					try {
						c(r.next(e));
					} catch (e) {
						a(e);
					}
				}
				function s(e) {
					try {
						c(r.throw(e));
					} catch (e) {
						a(e);
					}
				}
				function c(e) {
					e.done ? n(e.value) : i(e.value).then(o, s);
				}
				c((r = r.apply(e, t || [])).next());
			});
		}
		function i(e, t) {
			var n = {
				label: 0,
				sent: function() {
					if (a[0] & 1) throw a[1];
					return a[1];
				},
				trys: [],
				ops: []
			}, r, i, a, o;
			return o = {
				next: s(0),
				throw: s(1),
				return: s(2)
			}, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
				return this;
			}), o;
			function s(e) {
				return function(t) {
					return c([e, t]);
				};
			}
			function c(o) {
				if (r) throw TypeError("Generator is already executing.");
				for (; n;) try {
					if (r = 1, i && (a = o[0] & 2 ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a;
					switch (i = 0, a && (o = [o[0] & 2, a.value]), o[0]) {
						case 0:
						case 1:
							a = o;
							break;
						case 4: return n.label++, {
							value: o[1],
							done: !1
						};
						case 5:
							n.label++, i = o[1], o = [0];
							continue;
						case 7:
							o = n.ops.pop(), n.trys.pop();
							continue;
						default:
							if ((a = n.trys, !(a = a.length > 0 && a[a.length - 1])) && (o[0] === 6 || o[0] === 2)) {
								n = 0;
								continue;
							}
							if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
								n.label = o[1];
								break;
							}
							if (o[0] === 6 && n.label < a[1]) {
								n.label = a[1], a = o;
								break;
							}
							if (a && n.label < a[2]) {
								n.label = a[2], n.ops.push(o);
								break;
							}
							a[2] && n.ops.pop(), n.trys.pop();
							continue;
					}
					o = t.call(e, n);
				} catch (e) {
					o = [6, e], i = 0;
				} finally {
					r = a = 0;
				}
				if (o[0] & 5) throw o[1];
				return {
					value: o[0] ? o[1] : void 0,
					done: !0
				};
			}
		}
		function a(e, t, n) {
			if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
			return e.concat(a || t);
		}
		for (var o = function() {
			function e(e, t, n, r) {
				this.left = e, this.top = t, this.width = n, this.height = r;
			}
			return e.prototype.add = function(t, n, r, i) {
				return new e(this.left + t, this.top + n, this.width + r, this.height + i);
			}, e.fromClientRect = function(t, n) {
				return new e(n.left + t.windowBounds.left, n.top + t.windowBounds.top, n.width, n.height);
			}, e.fromDOMRectList = function(t, n) {
				var r = Array.from(n).find(function(e) {
					return e.width !== 0;
				});
				return r ? new e(r.left + t.windowBounds.left, r.top + t.windowBounds.top, r.width, r.height) : e.EMPTY;
			}, e.EMPTY = new e(0, 0, 0, 0), e;
		}(), s = function(e, t) {
			return o.fromClientRect(e, t.getBoundingClientRect());
		}, c = function(e) {
			var t = e.body, n = e.documentElement;
			if (!t || !n) throw Error("Unable to get document size");
			return new o(0, 0, Math.max(Math.max(t.scrollWidth, n.scrollWidth), Math.max(t.offsetWidth, n.offsetWidth), Math.max(t.clientWidth, n.clientWidth)), Math.max(Math.max(t.scrollHeight, n.scrollHeight), Math.max(t.offsetHeight, n.offsetHeight), Math.max(t.clientHeight, n.clientHeight)));
		}, l = function(e) {
			for (var t = [], n = 0, r = e.length; n < r;) {
				var i = e.charCodeAt(n++);
				if (i >= 55296 && i <= 56319 && n < r) {
					var a = e.charCodeAt(n++);
					(a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--);
				} else t.push(i);
			}
			return t;
		}, u = function() {
			var e = [...arguments];
			if (String.fromCodePoint) return String.fromCodePoint.apply(String, e);
			var t = e.length;
			if (!t) return "";
			for (var n = [], r = -1, i = ""; ++r < t;) {
				var a = e[r];
				a <= 65535 ? n.push(a) : (a -= 65536, n.push((a >> 10) + 55296, a % 1024 + 56320)), (r + 1 === t || n.length > 16384) && (i += String.fromCharCode.apply(String, n), n.length = 0);
			}
			return i;
		}, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = typeof Uint8Array > "u" ? [] : new Uint8Array(256), p = 0; p < d.length; p++) f[d.charCodeAt(p)] = p;
		for (var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = typeof Uint8Array > "u" ? [] : new Uint8Array(256), g = 0; g < m.length; g++) h[m.charCodeAt(g)] = g;
		for (var _ = function(e) {
			var t = e.length * .75, n = e.length, r, i = 0, a, o, s, c;
			e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
			var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(t) : Array(t), u = Array.isArray(l) ? l : new Uint8Array(l);
			for (r = 0; r < n; r += 4) a = h[e.charCodeAt(r)], o = h[e.charCodeAt(r + 1)], s = h[e.charCodeAt(r + 2)], c = h[e.charCodeAt(r + 3)], u[i++] = a << 2 | o >> 4, u[i++] = (o & 15) << 4 | s >> 2, u[i++] = (s & 3) << 6 | c & 63;
			return l;
		}, v = function(e) {
			for (var t = e.length, n = [], r = 0; r < t; r += 2) n.push(e[r + 1] << 8 | e[r]);
			return n;
		}, y = function(e) {
			for (var t = e.length, n = [], r = 0; r < t; r += 4) n.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
			return n;
		}, b = 5, x = 11, S = 2, C = x - b, w = 65536 >> b, T = (1 << b) - 1, E = w + (1024 >> b) + 32, D = 65536 >> x, O = (1 << C) - 1, k = function(e, t, n) {
			return e.slice ? e.slice(t, n) : new Uint16Array(Array.prototype.slice.call(e, t, n));
		}, A = function(e, t, n) {
			return e.slice ? e.slice(t, n) : new Uint32Array(Array.prototype.slice.call(e, t, n));
		}, j = function(e, t) {
			var n = _(e), r = Array.isArray(n) ? y(n) : new Uint32Array(n), i = Array.isArray(n) ? v(n) : new Uint16Array(n), a = 24, o = k(i, a / 2, r[4] / 2), s = r[5] === 2 ? k(i, (a + r[4]) / 2) : A(r, Math.ceil((a + r[4]) / 4));
			return new ee(r[0], r[1], r[2], r[3], o, s);
		}, ee = function() {
			function e(e, t, n, r, i, a) {
				this.initialValue = e, this.errorValue = t, this.highStart = n, this.highValueIndex = r, this.index = i, this.data = a;
			}
			return e.prototype.get = function(e) {
				var t;
				if (e >= 0) {
					if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> b], t = (t << S) + (e & T), this.data[t];
					if (e <= 65535) return t = this.index[w + (e - 55296 >> b)], t = (t << S) + (e & T), this.data[t];
					if (e < this.highStart) return t = E - D + (e >> x), t = this.index[t], t += e >> b & O, t = this.index[t], t = (t << S) + (e & T), this.data[t];
					if (e <= 1114111) return this.data[this.highValueIndex];
				}
				return this.errorValue;
			}, e;
		}(), M = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", N = typeof Uint8Array > "u" ? [] : new Uint8Array(256), P = 0; P < M.length; P++) N[M.charCodeAt(P)] = P;
		var te = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", F = 50, ne = 1, re = 2, ie = 3, ae = 4, I = 5, oe = 7, se = 8, ce = 9, le = 10, L = 11, ue = 12, de = 13, fe = 14, pe = 15, me = 16, he = 17, ge = 18, _e = 19, ve = 20, ye = 21, be = 22, xe = 23, Se = 24, Ce = 25, we = 26, Te = 27, Ee = 28, De = 29, Oe = 30, ke = 31, Ae = 32, je = 33, Me = 34, Ne = 35, Pe = 36, Fe = 37, Ie = 38, Le = 39, Re = 40, ze = 41, Be = 42, Ve = 43, He = [9001, 65288], Ue = "!", We = "×", Ge = "÷", Ke = j(te), qe = [Oe, Pe], Je = [
			ne,
			re,
			ie,
			I
		], Ye = [le, se], Xe = [Te, we], Ze = Je.concat(Ye), Qe = [
			Ie,
			Le,
			Re,
			Me,
			Ne
		], $e = [pe, de], et = function(e, t) {
			t === void 0 && (t = "strict");
			var n = [], r = [], i = [];
			return e.forEach(function(e, a) {
				var o = Ke.get(e);
				if (o > F ? (i.push(!0), o -= F) : i.push(!1), [
					"normal",
					"auto",
					"loose"
				].indexOf(t) !== -1 && [
					8208,
					8211,
					12316,
					12448
				].indexOf(e) !== -1) return r.push(a), n.push(me);
				if (o === ae || o === L) {
					if (a === 0) return r.push(a), n.push(Oe);
					var s = n[a - 1];
					return Ze.indexOf(s) === -1 ? (r.push(r[a - 1]), n.push(s)) : (r.push(a), n.push(Oe));
				}
				if (r.push(a), o === ke) return n.push(t === "strict" ? ye : Fe);
				if (o === Be || o === De) return n.push(Oe);
				if (o === Ve) return e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141 ? n.push(Fe) : n.push(Oe);
				n.push(o);
			}), [
				r,
				n,
				i
			];
		}, tt = function(e, t, n, r) {
			var i = r[n];
			if (Array.isArray(e) ? e.indexOf(i) !== -1 : e === i) for (var a = n; a <= r.length;) {
				a++;
				var o = r[a];
				if (o === t) return !0;
				if (o !== le) break;
			}
			if (i === le) for (var a = n; a > 0;) {
				a--;
				var s = r[a];
				if (Array.isArray(e) ? e.indexOf(s) !== -1 : e === s) for (var c = n; c <= r.length;) {
					c++;
					var o = r[c];
					if (o === t) return !0;
					if (o !== le) break;
				}
				if (s !== le) break;
			}
			return !1;
		}, R = function(e, t) {
			for (var n = e; n >= 0;) {
				var r = t[n];
				if (r === le) n--;
				else return r;
			}
			return 0;
		}, nt = function(e, t, n, r, i) {
			if (n[r] === 0) return We;
			var a = r - 1;
			if (Array.isArray(i) && i[a] === !0) return We;
			var o = a - 1, s = a + 1, c = t[a], l = o >= 0 ? t[o] : 0, u = t[s];
			if (c === re && u === ie) return We;
			if (Je.indexOf(c) !== -1) return Ue;
			if (Je.indexOf(u) !== -1 || Ye.indexOf(u) !== -1) return We;
			if (R(a, t) === se) return Ge;
			if (Ke.get(e[a]) === L || (c === Ae || c === je) && Ke.get(e[s]) === L || c === oe || u === oe || c === ce || [
				le,
				de,
				pe
			].indexOf(c) === -1 && u === ce || [
				he,
				ge,
				_e,
				Se,
				Ee
			].indexOf(u) !== -1 || R(a, t) === be || tt(xe, be, a, t) || tt([he, ge], ye, a, t) || tt(ue, ue, a, t)) return We;
			if (c === le) return Ge;
			if (c === xe || u === xe) return We;
			if (u === me || c === me) return Ge;
			if ([
				de,
				pe,
				ye
			].indexOf(u) !== -1 || c === fe || l === Pe && $e.indexOf(c) !== -1 || c === Ee && u === Pe || u === ve || qe.indexOf(u) !== -1 && c === Ce || qe.indexOf(c) !== -1 && u === Ce || c === Te && [
				Fe,
				Ae,
				je
			].indexOf(u) !== -1 || [
				Fe,
				Ae,
				je
			].indexOf(c) !== -1 && u === we || qe.indexOf(c) !== -1 && Xe.indexOf(u) !== -1 || Xe.indexOf(c) !== -1 && qe.indexOf(u) !== -1 || [Te, we].indexOf(c) !== -1 && (u === Ce || [be, pe].indexOf(u) !== -1 && t[s + 1] === Ce) || [be, pe].indexOf(c) !== -1 && u === Ce || c === Ce && [
				Ce,
				Ee,
				Se
			].indexOf(u) !== -1) return We;
			if ([
				Ce,
				Ee,
				Se,
				he,
				ge
			].indexOf(u) !== -1) for (var d = a; d >= 0;) {
				var f = t[d];
				if (f === Ce) return We;
				if ([Ee, Se].indexOf(f) !== -1) d--;
				else break;
			}
			if ([Te, we].indexOf(u) !== -1) for (var d = [he, ge].indexOf(c) === -1 ? a : o; d >= 0;) {
				var f = t[d];
				if (f === Ce) return We;
				if ([Ee, Se].indexOf(f) !== -1) d--;
				else break;
			}
			if (Ie === c && [
				Ie,
				Le,
				Me,
				Ne
			].indexOf(u) !== -1 || [Le, Me].indexOf(c) !== -1 && [Le, Re].indexOf(u) !== -1 || [Re, Ne].indexOf(c) !== -1 && u === Re || Qe.indexOf(c) !== -1 && [ve, we].indexOf(u) !== -1 || Qe.indexOf(u) !== -1 && c === Te || qe.indexOf(c) !== -1 && qe.indexOf(u) !== -1 || c === Se && qe.indexOf(u) !== -1 || qe.concat(Ce).indexOf(c) !== -1 && u === be && He.indexOf(e[s]) === -1 || qe.concat(Ce).indexOf(u) !== -1 && c === ge) return We;
			if (c === ze && u === ze) {
				for (var p = n[a], m = 1; p > 0 && (p--, t[p] === ze);) m++;
				if (m % 2 != 0) return We;
			}
			return c === Ae && u === je ? We : Ge;
		}, rt = function(e, t) {
			t ||= {
				lineBreak: "normal",
				wordBreak: "normal"
			};
			var n = et(e, t.lineBreak), r = n[0], i = n[1], a = n[2];
			(t.wordBreak === "break-all" || t.wordBreak === "break-word") && (i = i.map(function(e) {
				return [
					Ce,
					Oe,
					Be
				].indexOf(e) === -1 ? e : Fe;
			}));
			var o = t.wordBreak === "keep-all" ? a.map(function(t, n) {
				return t && e[n] >= 19968 && e[n] <= 40959;
			}) : void 0;
			return [
				r,
				i,
				o
			];
		}, it = function() {
			function e(e, t, n, r) {
				this.codePoints = e, this.required = t === Ue, this.start = n, this.end = r;
			}
			return e.prototype.slice = function() {
				return u.apply(void 0, this.codePoints.slice(this.start, this.end));
			}, e;
		}(), at = function(e, t) {
			var n = l(e), r = rt(n, t), i = r[0], a = r[1], o = r[2], s = n.length, c = 0, u = 0;
			return { next: function() {
				if (u >= s) return {
					done: !0,
					value: null
				};
				for (var e = We; u < s && (e = nt(n, a, i, ++u, o)) === We;);
				if (e !== We || u === s) {
					var t = new it(n, e, c, u);
					return c = u, {
						value: t,
						done: !1
					};
				}
				return {
					done: !0,
					value: null
				};
			} };
		}, ot = 1, st = 2, ct = 4, lt = 8, ut = 10, dt = 47, ft = 92, pt = 9, mt = 32, ht = 34, gt = 61, _t = 35, vt = 36, yt = 37, bt = 39, xt = 40, St = 41, Ct = 95, wt = 45, Tt = 33, Et = 60, Dt = 62, Ot = 64, kt = 91, At = 93, jt = 61, Mt = 123, Nt = 63, Pt = 125, Ft = 124, It = 126, Lt = 128, Rt = 65533, zt = 42, Bt = 43, Vt = 44, Ht = 58, Ut = 59, Wt = 46, Gt = 0, Kt = 8, qt = 11, Jt = 14, Yt = 31, z = 127, Xt = -1, Zt = 48, Qt = 97, $t = 101, en = 102, tn = 117, nn = 122, rn = 65, an = 69, on = 70, sn = 85, cn = 90, ln = function(e) {
			return e >= Zt && e <= 57;
		}, un = function(e) {
			return e >= 55296 && e <= 57343;
		}, dn = function(e) {
			return ln(e) || e >= rn && e <= on || e >= Qt && e <= en;
		}, fn = function(e) {
			return e >= Qt && e <= nn;
		}, pn = function(e) {
			return e >= rn && e <= cn;
		}, mn = function(e) {
			return fn(e) || pn(e);
		}, hn = function(e) {
			return e >= Lt;
		}, gn = function(e) {
			return e === ut || e === pt || e === mt;
		}, _n = function(e) {
			return mn(e) || hn(e) || e === Ct;
		}, vn = function(e) {
			return _n(e) || ln(e) || e === wt;
		}, yn = function(e) {
			return e >= Gt && e <= Kt || e === qt || e >= Jt && e <= Yt || e === z;
		}, bn = function(e, t) {
			return e === ft ? t !== ut : !1;
		}, xn = function(e, t, n) {
			return e === wt ? _n(t) || bn(t, n) : _n(e) ? !0 : !!(e === ft && bn(e, t));
		}, Sn = function(e, t, n) {
			return e === Bt || e === wt ? ln(t) ? !0 : t === Wt && ln(n) : ln(e === Wt ? t : e);
		}, Cn = function(e) {
			var t = 0, n = 1;
			(e[t] === Bt || e[t] === wt) && (e[t] === wt && (n = -1), t++);
			for (var r = []; ln(e[t]);) r.push(e[t++]);
			var i = r.length ? parseInt(u.apply(void 0, r), 10) : 0;
			e[t] === Wt && t++;
			for (var a = []; ln(e[t]);) a.push(e[t++]);
			var o = a.length, s = o ? parseInt(u.apply(void 0, a), 10) : 0;
			(e[t] === an || e[t] === $t) && t++;
			var c = 1;
			(e[t] === Bt || e[t] === wt) && (e[t] === wt && (c = -1), t++);
			for (var l = []; ln(e[t]);) l.push(e[t++]);
			var d = l.length ? parseInt(u.apply(void 0, l), 10) : 0;
			return n * (i + s * 10 ** -o) * 10 ** (c * d);
		}, wn = { type: 2 }, Tn = { type: 3 }, En = { type: 4 }, Dn = { type: 13 }, On = { type: 8 }, kn = { type: 21 }, An = { type: 9 }, jn = { type: 10 }, Mn = { type: 11 }, Nn = { type: 12 }, Pn = { type: 14 }, Fn = { type: 23 }, In = { type: 1 }, Ln = { type: 25 }, Rn = { type: 24 }, zn = { type: 26 }, Bn = { type: 27 }, Vn = { type: 28 }, Hn = { type: 29 }, Un = { type: 31 }, Wn = { type: 32 }, Gn = function() {
			function e() {
				this._value = [];
			}
			return e.prototype.write = function(e) {
				this._value = this._value.concat(l(e));
			}, e.prototype.read = function() {
				for (var e = [], t = this.consumeToken(); t !== Wn;) e.push(t), t = this.consumeToken();
				return e;
			}, e.prototype.consumeToken = function() {
				var e = this.consumeCodePoint();
				switch (e) {
					case ht: return this.consumeStringToken(ht);
					case _t:
						var t = this.peekCodePoint(0), n = this.peekCodePoint(1), r = this.peekCodePoint(2);
						if (vn(t) || bn(n, r)) {
							var i = xn(t, n, r) ? st : ot, a = this.consumeName();
							return {
								type: 5,
								value: a,
								flags: i
							};
						}
						break;
					case vt:
						if (this.peekCodePoint(0) === gt) return this.consumeCodePoint(), Dn;
						break;
					case bt: return this.consumeStringToken(bt);
					case xt: return wn;
					case St: return Tn;
					case zt:
						if (this.peekCodePoint(0) === gt) return this.consumeCodePoint(), Pn;
						break;
					case Bt:
						if (Sn(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
						break;
					case Vt: return En;
					case wt:
						var o = e, s = this.peekCodePoint(0), c = this.peekCodePoint(1);
						if (Sn(o, s, c)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
						if (xn(o, s, c)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
						if (s === wt && c === Dt) return this.consumeCodePoint(), this.consumeCodePoint(), Rn;
						break;
					case Wt:
						if (Sn(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
						break;
					case dt:
						if (this.peekCodePoint(0) === zt) for (this.consumeCodePoint();;) {
							var l = this.consumeCodePoint();
							if (l === zt && (l = this.consumeCodePoint(), l === dt) || l === Xt) return this.consumeToken();
						}
						break;
					case Ht: return zn;
					case Ut: return Bn;
					case Et:
						if (this.peekCodePoint(0) === Tt && this.peekCodePoint(1) === wt && this.peekCodePoint(2) === wt) return this.consumeCodePoint(), this.consumeCodePoint(), Ln;
						break;
					case Ot:
						if (xn(this.peekCodePoint(0), this.peekCodePoint(1), this.peekCodePoint(2))) {
							var a = this.consumeName();
							return {
								type: 7,
								value: a
							};
						}
						break;
					case kt: return Vn;
					case ft:
						if (bn(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
						break;
					case At: return Hn;
					case jt:
						if (this.peekCodePoint(0) === gt) return this.consumeCodePoint(), On;
						break;
					case Mt: return Mn;
					case Pt: return Nn;
					case tn:
					case sn:
						var d = this.peekCodePoint(0), f = this.peekCodePoint(1);
						return d === Bt && (dn(f) || f === Nt) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
					case Ft:
						if (this.peekCodePoint(0) === gt) return this.consumeCodePoint(), An;
						if (this.peekCodePoint(0) === Ft) return this.consumeCodePoint(), kn;
						break;
					case It:
						if (this.peekCodePoint(0) === gt) return this.consumeCodePoint(), jn;
						break;
					case Xt: return Wn;
				}
				return gn(e) ? (this.consumeWhiteSpace(), Un) : ln(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : _n(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
					type: 6,
					value: u(e)
				};
			}, e.prototype.consumeCodePoint = function() {
				var e = this._value.shift();
				return e === void 0 ? -1 : e;
			}, e.prototype.reconsumeCodePoint = function(e) {
				this._value.unshift(e);
			}, e.prototype.peekCodePoint = function(e) {
				return e >= this._value.length ? -1 : this._value[e];
			}, e.prototype.consumeUnicodeRangeToken = function() {
				for (var e = [], t = this.consumeCodePoint(); dn(t) && e.length < 6;) e.push(t), t = this.consumeCodePoint();
				for (var n = !1; t === Nt && e.length < 6;) e.push(t), t = this.consumeCodePoint(), n = !0;
				if (n) {
					var r = parseInt(u.apply(void 0, e.map(function(e) {
						return e === Nt ? Zt : e;
					})), 16), i = parseInt(u.apply(void 0, e.map(function(e) {
						return e === Nt ? on : e;
					})), 16);
					return {
						type: 30,
						start: r,
						end: i
					};
				}
				var a = parseInt(u.apply(void 0, e), 16);
				if (this.peekCodePoint(0) === wt && dn(this.peekCodePoint(1))) {
					this.consumeCodePoint(), t = this.consumeCodePoint();
					for (var o = []; dn(t) && o.length < 6;) o.push(t), t = this.consumeCodePoint();
					var i = parseInt(u.apply(void 0, o), 16);
					return {
						type: 30,
						start: a,
						end: i
					};
				} else return {
					type: 30,
					start: a,
					end: a
				};
			}, e.prototype.consumeIdentLikeToken = function() {
				var e = this.consumeName();
				return e.toLowerCase() === "url" && this.peekCodePoint(0) === xt ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === xt ? (this.consumeCodePoint(), {
					type: 19,
					value: e
				}) : {
					type: 20,
					value: e
				};
			}, e.prototype.consumeUrlToken = function() {
				var e = [];
				if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Xt) return {
					type: 22,
					value: ""
				};
				var t = this.peekCodePoint(0);
				if (t === bt || t === ht) {
					var n = this.consumeStringToken(this.consumeCodePoint());
					return n.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Xt || this.peekCodePoint(0) === St) ? (this.consumeCodePoint(), {
						type: 22,
						value: n.value
					}) : (this.consumeBadUrlRemnants(), Fn);
				}
				for (;;) {
					var r = this.consumeCodePoint();
					if (r === Xt || r === St) return {
						type: 22,
						value: u.apply(void 0, e)
					};
					if (gn(r)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === Xt || this.peekCodePoint(0) === St ? (this.consumeCodePoint(), {
						type: 22,
						value: u.apply(void 0, e)
					}) : (this.consumeBadUrlRemnants(), Fn);
					if (r === ht || r === bt || r === xt || yn(r)) return this.consumeBadUrlRemnants(), Fn;
					if (r === ft) if (bn(r, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
					else return this.consumeBadUrlRemnants(), Fn;
					else e.push(r);
				}
			}, e.prototype.consumeWhiteSpace = function() {
				for (; gn(this.peekCodePoint(0));) this.consumeCodePoint();
			}, e.prototype.consumeBadUrlRemnants = function() {
				for (;;) {
					var e = this.consumeCodePoint();
					if (e === St || e === Xt) return;
					bn(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
				}
			}, e.prototype.consumeStringSlice = function(e) {
				for (var t = 5e4, n = ""; e > 0;) {
					var r = Math.min(t, e);
					n += u.apply(void 0, this._value.splice(0, r)), e -= r;
				}
				return this._value.shift(), n;
			}, e.prototype.consumeStringToken = function(e) {
				var t = "", n = 0;
				do {
					var r = this._value[n];
					if (r === Xt || r === void 0 || r === e) return t += this.consumeStringSlice(n), {
						type: 0,
						value: t
					};
					if (r === ut) return this._value.splice(0, n), In;
					if (r === ft) {
						var i = this._value[n + 1];
						i !== Xt && i !== void 0 && (i === ut ? (t += this.consumeStringSlice(n), n = -1, this._value.shift()) : bn(r, i) && (t += this.consumeStringSlice(n), t += u(this.consumeEscapedCodePoint()), n = -1));
					}
					n++;
				} while (!0);
			}, e.prototype.consumeNumber = function() {
				var e = [], t = ct, n = this.peekCodePoint(0);
				for ((n === Bt || n === wt) && e.push(this.consumeCodePoint()); ln(this.peekCodePoint(0));) e.push(this.consumeCodePoint());
				n = this.peekCodePoint(0);
				var r = this.peekCodePoint(1);
				if (n === Wt && ln(r)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = lt; ln(this.peekCodePoint(0));) e.push(this.consumeCodePoint());
				n = this.peekCodePoint(0), r = this.peekCodePoint(1);
				var i = this.peekCodePoint(2);
				if ((n === an || n === $t) && ((r === Bt || r === wt) && ln(i) || ln(r))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = lt; ln(this.peekCodePoint(0));) e.push(this.consumeCodePoint());
				return [Cn(e), t];
			}, e.prototype.consumeNumericToken = function() {
				var e = this.consumeNumber(), t = e[0], n = e[1], r = this.peekCodePoint(0);
				return xn(r, this.peekCodePoint(1), this.peekCodePoint(2)) ? {
					type: 15,
					number: t,
					flags: n,
					unit: this.consumeName()
				} : r === yt ? (this.consumeCodePoint(), {
					type: 16,
					number: t,
					flags: n
				}) : {
					type: 17,
					number: t,
					flags: n
				};
			}, e.prototype.consumeEscapedCodePoint = function() {
				var e = this.consumeCodePoint();
				if (dn(e)) {
					for (var t = u(e); dn(this.peekCodePoint(0)) && t.length < 6;) t += u(this.consumeCodePoint());
					gn(this.peekCodePoint(0)) && this.consumeCodePoint();
					var n = parseInt(t, 16);
					return n === 0 || un(n) || n > 1114111 ? Rt : n;
				}
				return e === Xt ? Rt : e;
			}, e.prototype.consumeName = function() {
				for (var e = "";;) {
					var t = this.consumeCodePoint();
					if (vn(t)) e += u(t);
					else if (bn(t, this.peekCodePoint(0))) e += u(this.consumeEscapedCodePoint());
					else return this.reconsumeCodePoint(t), e;
				}
			}, e;
		}(), Kn = function() {
			function e(e) {
				this._tokens = e;
			}
			return e.create = function(t) {
				var n = new Gn();
				return n.write(t), new e(n.read());
			}, e.parseValue = function(t) {
				return e.create(t).parseComponentValue();
			}, e.parseValues = function(t) {
				return e.create(t).parseComponentValues();
			}, e.prototype.parseComponentValue = function() {
				for (var e = this.consumeToken(); e.type === 31;) e = this.consumeToken();
				if (e.type === 32) throw SyntaxError("Error parsing CSS component value, unexpected EOF");
				this.reconsumeToken(e);
				var t = this.consumeComponentValue();
				do
					e = this.consumeToken();
				while (e.type === 31);
				if (e.type === 32) return t;
				throw SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
			}, e.prototype.parseComponentValues = function() {
				for (var e = [];;) {
					var t = this.consumeComponentValue();
					if (t.type === 32) return e;
					e.push(t), e.push();
				}
			}, e.prototype.consumeComponentValue = function() {
				var e = this.consumeToken();
				switch (e.type) {
					case 11:
					case 28:
					case 2: return this.consumeSimpleBlock(e.type);
					case 19: return this.consumeFunction(e);
				}
				return e;
			}, e.prototype.consumeSimpleBlock = function(e) {
				for (var t = {
					type: e,
					values: []
				}, n = this.consumeToken();;) {
					if (n.type === 32 || tr(n, e)) return t;
					this.reconsumeToken(n), t.values.push(this.consumeComponentValue()), n = this.consumeToken();
				}
			}, e.prototype.consumeFunction = function(e) {
				for (var t = {
					name: e.value,
					values: [],
					type: 18
				};;) {
					var n = this.consumeToken();
					if (n.type === 32 || n.type === 3) return t;
					this.reconsumeToken(n), t.values.push(this.consumeComponentValue());
				}
			}, e.prototype.consumeToken = function() {
				var e = this._tokens.shift();
				return e === void 0 ? Wn : e;
			}, e.prototype.reconsumeToken = function(e) {
				this._tokens.unshift(e);
			}, e;
		}(), qn = function(e) {
			return e.type === 15;
		}, Jn = function(e) {
			return e.type === 17;
		}, Yn = function(e) {
			return e.type === 20;
		}, Xn = function(e) {
			return e.type === 0;
		}, Zn = function(e, t) {
			return Yn(e) && e.value === t;
		}, Qn = function(e) {
			return e.type !== 31;
		}, $n = function(e) {
			return e.type !== 31 && e.type !== 4;
		}, er = function(e) {
			var t = [], n = [];
			return e.forEach(function(e) {
				if (e.type === 4) {
					if (n.length === 0) throw Error("Error parsing function args, zero tokens for arg");
					t.push(n), n = [];
					return;
				}
				e.type !== 31 && n.push(e);
			}), n.length && t.push(n), t;
		}, tr = function(e, t) {
			return t === 11 && e.type === 12 || t === 28 && e.type === 29 ? !0 : t === 2 && e.type === 3;
		}, nr = function(e) {
			return e.type === 17 || e.type === 15;
		}, rr = function(e) {
			return e.type === 16 || nr(e);
		}, ir = function(e) {
			return e.length > 1 ? [e[0], e[1]] : [e[0]];
		}, ar = {
			type: 17,
			number: 0,
			flags: ct
		}, or = {
			type: 16,
			number: 50,
			flags: ct
		}, sr = {
			type: 16,
			number: 100,
			flags: ct
		}, cr = function(e, t, n) {
			var r = e[0], i = e[1];
			return [lr(r, t), lr(i === void 0 ? r : i, n)];
		}, lr = function(e, t) {
			if (e.type === 16) return e.number / 100 * t;
			if (qn(e)) switch (e.unit) {
				case "rem":
				case "em": return 16 * e.number;
				default: return e.number;
			}
			return e.number;
		}, ur = "deg", dr = "grad", fr = "rad", pr = "turn", mr = {
			name: "angle",
			parse: function(e, t) {
				if (t.type === 15) switch (t.unit) {
					case ur: return Math.PI * t.number / 180;
					case dr: return Math.PI / 200 * t.number;
					case fr: return t.number;
					case pr: return Math.PI * 2 * t.number;
				}
				throw Error("Unsupported angle type");
			}
		}, hr = function(e) {
			return e.type === 15 && (e.unit === ur || e.unit === dr || e.unit === fr || e.unit === pr);
		}, gr = function(e) {
			switch (e.filter(Yn).map(function(e) {
				return e.value;
			}).join(" ")) {
				case "to bottom right":
				case "to right bottom":
				case "left top":
				case "top left": return [ar, ar];
				case "to top":
				case "bottom": return _r(0);
				case "to bottom left":
				case "to left bottom":
				case "right top":
				case "top right": return [ar, sr];
				case "to right":
				case "left": return _r(90);
				case "to top left":
				case "to left top":
				case "right bottom":
				case "bottom right": return [sr, sr];
				case "to bottom":
				case "top": return _r(180);
				case "to top right":
				case "to right top":
				case "left bottom":
				case "bottom left": return [sr, ar];
				case "to left":
				case "right": return _r(270);
			}
			return 0;
		}, _r = function(e) {
			return Math.PI * e / 180;
		}, vr = {
			name: "color",
			parse: function(e, t) {
				if (t.type === 18) {
					var n = Er[t.name];
					if (n === void 0) throw Error("Attempting to parse an unsupported color function \"" + t.name + "\"");
					return n(e, t.values);
				}
				if (t.type === 5) {
					if (t.value.length === 3) {
						var r = t.value.substring(0, 1), i = t.value.substring(1, 2), a = t.value.substring(2, 3);
						return xr(parseInt(r + r, 16), parseInt(i + i, 16), parseInt(a + a, 16), 1);
					}
					if (t.value.length === 4) {
						var r = t.value.substring(0, 1), i = t.value.substring(1, 2), a = t.value.substring(2, 3), o = t.value.substring(3, 4);
						return xr(parseInt(r + r, 16), parseInt(i + i, 16), parseInt(a + a, 16), parseInt(o + o, 16) / 255);
					}
					if (t.value.length === 6) {
						var r = t.value.substring(0, 2), i = t.value.substring(2, 4), a = t.value.substring(4, 6);
						return xr(parseInt(r, 16), parseInt(i, 16), parseInt(a, 16), 1);
					}
					if (t.value.length === 8) {
						var r = t.value.substring(0, 2), i = t.value.substring(2, 4), a = t.value.substring(4, 6), o = t.value.substring(6, 8);
						return xr(parseInt(r, 16), parseInt(i, 16), parseInt(a, 16), parseInt(o, 16) / 255);
					}
				}
				if (t.type === 20) {
					var s = Or[t.value.toUpperCase()];
					if (s !== void 0) return s;
				}
				return Or.TRANSPARENT;
			}
		}, yr = function(e) {
			return (255 & e) == 0;
		}, br = function(e) {
			var t = 255 & e, n = 255 & e >> 8, r = 255 & e >> 16, i = 255 & e >> 24;
			return t < 255 ? "rgba(" + i + "," + r + "," + n + "," + t / 255 + ")" : "rgb(" + i + "," + r + "," + n + ")";
		}, xr = function(e, t, n, r) {
			return (e << 24 | t << 16 | n << 8 | Math.round(r * 255) << 0) >>> 0;
		}, Sr = function(e, t) {
			if (e.type === 17) return e.number;
			if (e.type === 16) {
				var n = t === 3 ? 1 : 255;
				return t === 3 ? e.number / 100 * n : Math.round(e.number / 100 * n);
			}
			return 0;
		}, Cr = function(e, t) {
			var n = t.filter($n);
			if (n.length === 3) {
				var r = n.map(Sr), i = r[0], a = r[1], o = r[2];
				return xr(i, a, o, 1);
			}
			if (n.length === 4) {
				var s = n.map(Sr), i = s[0], a = s[1], o = s[2], c = s[3];
				return xr(i, a, o, c);
			}
			return 0;
		};
		function wr(e, t, n) {
			return n < 0 && (n += 1), n >= 1 && --n, n < 1 / 6 ? (t - e) * n * 6 + e : n < 1 / 2 ? t : n < 2 / 3 ? (t - e) * 6 * (2 / 3 - n) + e : e;
		}
		var Tr = function(e, t) {
			var n = t.filter($n), r = n[0], i = n[1], a = n[2], o = n[3], s = (r.type === 17 ? _r(r.number) : mr.parse(e, r)) / (Math.PI * 2), c = rr(i) ? i.number / 100 : 0, l = rr(a) ? a.number / 100 : 0, u = o !== void 0 && rr(o) ? lr(o, 1) : 1;
			if (c === 0) return xr(l * 255, l * 255, l * 255, 1);
			var d = l <= .5 ? l * (c + 1) : l + c - l * c, f = l * 2 - d, p = wr(f, d, s + 1 / 3), m = wr(f, d, s), h = wr(f, d, s - 1 / 3);
			return xr(p * 255, m * 255, h * 255, u);
		}, Er = {
			hsl: Tr,
			hsla: Tr,
			rgb: Cr,
			rgba: Cr
		}, Dr = function(e, t) {
			return vr.parse(e, Kn.create(t).parseComponentValue());
		}, Or = {
			ALICEBLUE: 4042850303,
			ANTIQUEWHITE: 4209760255,
			AQUA: 16777215,
			AQUAMARINE: 2147472639,
			AZURE: 4043309055,
			BEIGE: 4126530815,
			BISQUE: 4293182719,
			BLACK: 255,
			BLANCHEDALMOND: 4293643775,
			BLUE: 65535,
			BLUEVIOLET: 2318131967,
			BROWN: 2771004159,
			BURLYWOOD: 3736635391,
			CADETBLUE: 1604231423,
			CHARTREUSE: 2147418367,
			CHOCOLATE: 3530104575,
			CORAL: 4286533887,
			CORNFLOWERBLUE: 1687547391,
			CORNSILK: 4294499583,
			CRIMSON: 3692313855,
			CYAN: 16777215,
			DARKBLUE: 35839,
			DARKCYAN: 9145343,
			DARKGOLDENROD: 3095837695,
			DARKGRAY: 2846468607,
			DARKGREEN: 6553855,
			DARKGREY: 2846468607,
			DARKKHAKI: 3182914559,
			DARKMAGENTA: 2332068863,
			DARKOLIVEGREEN: 1433087999,
			DARKORANGE: 4287365375,
			DARKORCHID: 2570243327,
			DARKRED: 2332033279,
			DARKSALMON: 3918953215,
			DARKSEAGREEN: 2411499519,
			DARKSLATEBLUE: 1211993087,
			DARKSLATEGRAY: 793726975,
			DARKSLATEGREY: 793726975,
			DARKTURQUOISE: 13554175,
			DARKVIOLET: 2483082239,
			DEEPPINK: 4279538687,
			DEEPSKYBLUE: 12582911,
			DIMGRAY: 1768516095,
			DIMGREY: 1768516095,
			DODGERBLUE: 512819199,
			FIREBRICK: 2988581631,
			FLORALWHITE: 4294635775,
			FORESTGREEN: 579543807,
			FUCHSIA: 4278255615,
			GAINSBORO: 3705462015,
			GHOSTWHITE: 4177068031,
			GOLD: 4292280575,
			GOLDENROD: 3668254975,
			GRAY: 2155905279,
			GREEN: 8388863,
			GREENYELLOW: 2919182335,
			GREY: 2155905279,
			HONEYDEW: 4043305215,
			HOTPINK: 4285117695,
			INDIANRED: 3445382399,
			INDIGO: 1258324735,
			IVORY: 4294963455,
			KHAKI: 4041641215,
			LAVENDER: 3873897215,
			LAVENDERBLUSH: 4293981695,
			LAWNGREEN: 2096890111,
			LEMONCHIFFON: 4294626815,
			LIGHTBLUE: 2916673279,
			LIGHTCORAL: 4034953471,
			LIGHTCYAN: 3774873599,
			LIGHTGOLDENRODYELLOW: 4210742015,
			LIGHTGRAY: 3553874943,
			LIGHTGREEN: 2431553791,
			LIGHTGREY: 3553874943,
			LIGHTPINK: 4290167295,
			LIGHTSALMON: 4288707327,
			LIGHTSEAGREEN: 548580095,
			LIGHTSKYBLUE: 2278488831,
			LIGHTSLATEGRAY: 2005441023,
			LIGHTSLATEGREY: 2005441023,
			LIGHTSTEELBLUE: 2965692159,
			LIGHTYELLOW: 4294959359,
			LIME: 16711935,
			LIMEGREEN: 852308735,
			LINEN: 4210091775,
			MAGENTA: 4278255615,
			MAROON: 2147483903,
			MEDIUMAQUAMARINE: 1724754687,
			MEDIUMBLUE: 52735,
			MEDIUMORCHID: 3126187007,
			MEDIUMPURPLE: 2473647103,
			MEDIUMSEAGREEN: 1018393087,
			MEDIUMSLATEBLUE: 2070474495,
			MEDIUMSPRINGGREEN: 16423679,
			MEDIUMTURQUOISE: 1221709055,
			MEDIUMVIOLETRED: 3340076543,
			MIDNIGHTBLUE: 421097727,
			MINTCREAM: 4127193855,
			MISTYROSE: 4293190143,
			MOCCASIN: 4293178879,
			NAVAJOWHITE: 4292783615,
			NAVY: 33023,
			OLDLACE: 4260751103,
			OLIVE: 2155872511,
			OLIVEDRAB: 1804477439,
			ORANGE: 4289003775,
			ORANGERED: 4282712319,
			ORCHID: 3664828159,
			PALEGOLDENROD: 4008225535,
			PALEGREEN: 2566625535,
			PALETURQUOISE: 2951671551,
			PALEVIOLETRED: 3681588223,
			PAPAYAWHIP: 4293907967,
			PEACHPUFF: 4292524543,
			PERU: 3448061951,
			PINK: 4290825215,
			PLUM: 3718307327,
			POWDERBLUE: 2967529215,
			PURPLE: 2147516671,
			REBECCAPURPLE: 1714657791,
			RED: 4278190335,
			ROSYBROWN: 3163525119,
			ROYALBLUE: 1097458175,
			SADDLEBROWN: 2336560127,
			SALMON: 4202722047,
			SANDYBROWN: 4104413439,
			SEAGREEN: 780883967,
			SEASHELL: 4294307583,
			SIENNA: 2689740287,
			SILVER: 3233857791,
			SKYBLUE: 2278484991,
			SLATEBLUE: 1784335871,
			SLATEGRAY: 1887473919,
			SLATEGREY: 1887473919,
			SNOW: 4294638335,
			SPRINGGREEN: 16744447,
			STEELBLUE: 1182971135,
			TAN: 3535047935,
			TEAL: 8421631,
			THISTLE: 3636451583,
			TOMATO: 4284696575,
			TRANSPARENT: 0,
			TURQUOISE: 1088475391,
			VIOLET: 4001558271,
			WHEAT: 4125012991,
			WHITE: 4294967295,
			WHITESMOKE: 4126537215,
			YELLOW: 4294902015,
			YELLOWGREEN: 2597139199
		}, kr = {
			name: "background-clip",
			initialValue: "border-box",
			prefix: !1,
			type: 1,
			parse: function(e, t) {
				return t.map(function(e) {
					if (Yn(e)) switch (e.value) {
						case "padding-box": return 1;
						case "content-box": return 2;
					}
					return 0;
				});
			}
		}, Ar = {
			name: "background-color",
			initialValue: "transparent",
			prefix: !1,
			type: 3,
			format: "color"
		}, jr = function(e, t) {
			var n = vr.parse(e, t[0]), r = t[1];
			return r && rr(r) ? {
				color: n,
				stop: r
			} : {
				color: n,
				stop: null
			};
		}, Mr = function(e, t) {
			var n = e[0], r = e[e.length - 1];
			n.stop === null && (n.stop = ar), r.stop === null && (r.stop = sr);
			for (var i = [], a = 0, o = 0; o < e.length; o++) {
				var s = e[o].stop;
				if (s !== null) {
					var c = lr(s, t);
					c > a ? i.push(c) : i.push(a), a = c;
				} else i.push(null);
			}
			for (var l = null, o = 0; o < i.length; o++) {
				var u = i[o];
				if (u === null) l === null && (l = o);
				else if (l !== null) {
					for (var d = o - l, f = (u - i[l - 1]) / (d + 1), p = 1; p <= d; p++) i[l + p - 1] = f * p;
					l = null;
				}
			}
			return e.map(function(e, n) {
				return {
					color: e.color,
					stop: Math.max(Math.min(1, i[n] / t), 0)
				};
			});
		}, Nr = function(e, t, n) {
			var r = t / 2, i = n / 2, a = lr(e[0], t) - r, o = i - lr(e[1], n);
			return (Math.atan2(o, a) + Math.PI * 2) % (Math.PI * 2);
		}, Pr = function(e, t, n) {
			var r = typeof e == "number" ? e : Nr(e, t, n), i = Math.abs(t * Math.sin(r)) + Math.abs(n * Math.cos(r)), a = t / 2, o = n / 2, s = i / 2, c = Math.sin(r - Math.PI / 2) * s, l = Math.cos(r - Math.PI / 2) * s;
			return [
				i,
				a - l,
				a + l,
				o - c,
				o + c
			];
		}, Fr = function(e, t) {
			return Math.sqrt(e * e + t * t);
		}, Ir = function(e, t, n, r, i) {
			return [
				[0, 0],
				[0, t],
				[e, 0],
				[e, t]
			].reduce(function(e, t) {
				var a = t[0], o = t[1], s = Fr(n - a, r - o);
				return (i ? s < e.optimumDistance : s > e.optimumDistance) ? {
					optimumCorner: t,
					optimumDistance: s
				} : e;
			}, {
				optimumDistance: i ? Infinity : -Infinity,
				optimumCorner: null
			}).optimumCorner;
		}, Lr = function(e, t, n, r, i) {
			var a = 0, o = 0;
			switch (e.size) {
				case 0:
					e.shape === 0 ? a = o = Math.min(Math.abs(t), Math.abs(t - r), Math.abs(n), Math.abs(n - i)) : e.shape === 1 && (a = Math.min(Math.abs(t), Math.abs(t - r)), o = Math.min(Math.abs(n), Math.abs(n - i)));
					break;
				case 2:
					if (e.shape === 0) a = o = Math.min(Fr(t, n), Fr(t, n - i), Fr(t - r, n), Fr(t - r, n - i));
					else if (e.shape === 1) {
						var s = Math.min(Math.abs(n), Math.abs(n - i)) / Math.min(Math.abs(t), Math.abs(t - r)), c = Ir(r, i, t, n, !0), l = c[0], u = c[1];
						a = Fr(l - t, (u - n) / s), o = s * a;
					}
					break;
				case 1:
					e.shape === 0 ? a = o = Math.max(Math.abs(t), Math.abs(t - r), Math.abs(n), Math.abs(n - i)) : e.shape === 1 && (a = Math.max(Math.abs(t), Math.abs(t - r)), o = Math.max(Math.abs(n), Math.abs(n - i)));
					break;
				case 3:
					if (e.shape === 0) a = o = Math.max(Fr(t, n), Fr(t, n - i), Fr(t - r, n), Fr(t - r, n - i));
					else if (e.shape === 1) {
						var s = Math.max(Math.abs(n), Math.abs(n - i)) / Math.max(Math.abs(t), Math.abs(t - r)), d = Ir(r, i, t, n, !1), l = d[0], u = d[1];
						a = Fr(l - t, (u - n) / s), o = s * a;
					}
					break;
			}
			return Array.isArray(e.size) && (a = lr(e.size[0], r), o = e.size.length === 2 ? lr(e.size[1], i) : a), [a, o];
		}, Rr = function(e, t) {
			var n = _r(180), r = [];
			return er(t).forEach(function(t, i) {
				if (i === 0) {
					var a = t[0];
					if (a.type === 20 && a.value === "to") {
						n = gr(t);
						return;
					} else if (hr(a)) {
						n = mr.parse(e, a);
						return;
					}
				}
				var o = jr(e, t);
				r.push(o);
			}), {
				angle: n,
				stops: r,
				type: 1
			};
		}, zr = function(e, t) {
			var n = _r(180), r = [];
			return er(t).forEach(function(t, i) {
				if (i === 0) {
					var a = t[0];
					if (a.type === 20 && [
						"top",
						"left",
						"right",
						"bottom"
					].indexOf(a.value) !== -1) {
						n = gr(t);
						return;
					} else if (hr(a)) {
						n = (mr.parse(e, a) + _r(270)) % _r(360);
						return;
					}
				}
				var o = jr(e, t);
				r.push(o);
			}), {
				angle: n,
				stops: r,
				type: 1
			};
		}, Br = function(e, t) {
			var n = _r(180), r = [], i = 1;
			return er(t).forEach(function(t, n) {
				var a = t[0];
				if (n === 0) {
					if (Yn(a) && a.value === "linear") {
						i = 1;
						return;
					} else if (Yn(a) && a.value === "radial") {
						i = 2;
						return;
					}
				}
				if (a.type === 18) {
					if (a.name === "from") {
						var o = vr.parse(e, a.values[0]);
						r.push({
							stop: ar,
							color: o
						});
					} else if (a.name === "to") {
						var o = vr.parse(e, a.values[0]);
						r.push({
							stop: sr,
							color: o
						});
					} else if (a.name === "color-stop") {
						var s = a.values.filter($n);
						if (s.length === 2) {
							var o = vr.parse(e, s[1]), c = s[0];
							Jn(c) && r.push({
								stop: {
									type: 16,
									number: c.number * 100,
									flags: c.flags
								},
								color: o
							});
						}
					}
				}
			}), i === 1 ? {
				angle: (n + _r(180)) % _r(360),
				stops: r,
				type: i
			} : {
				size: 3,
				shape: 0,
				stops: r,
				position: [],
				type: i
			};
		}, Vr = "closest-side", Hr = "farthest-side", Ur = "closest-corner", Wr = "farthest-corner", Gr = "circle", Kr = "ellipse", qr = "cover", Jr = "contain", Yr = function(e, t) {
			var n = 0, r = 3, i = [], a = [];
			return er(t).forEach(function(t, o) {
				var s = !0;
				if (o === 0) {
					var c = !1;
					s = t.reduce(function(e, t) {
						if (c) if (Yn(t)) switch (t.value) {
							case "center": return a.push(or), e;
							case "top":
							case "left": return a.push(ar), e;
							case "right":
							case "bottom": return a.push(sr), e;
						}
						else (rr(t) || nr(t)) && a.push(t);
						else if (Yn(t)) switch (t.value) {
							case Gr: return n = 0, !1;
							case Kr: return n = 1, !1;
							case "at": return c = !0, !1;
							case Vr: return r = 0, !1;
							case qr:
							case Hr: return r = 1, !1;
							case Jr:
							case Ur: return r = 2, !1;
							case Wr: return r = 3, !1;
						}
						else if (nr(t) || rr(t)) return Array.isArray(r) || (r = []), r.push(t), !1;
						return e;
					}, s);
				}
				if (s) {
					var l = jr(e, t);
					i.push(l);
				}
			}), {
				size: r,
				shape: n,
				stops: i,
				position: a,
				type: 2
			};
		}, Xr = function(e, t) {
			var n = 0, r = 3, i = [], a = [];
			return er(t).forEach(function(t, o) {
				var s = !0;
				if (o === 0 ? s = t.reduce(function(e, t) {
					if (Yn(t)) switch (t.value) {
						case "center": return a.push(or), !1;
						case "top":
						case "left": return a.push(ar), !1;
						case "right":
						case "bottom": return a.push(sr), !1;
					}
					else if (rr(t) || nr(t)) return a.push(t), !1;
					return e;
				}, s) : o === 1 && (s = t.reduce(function(e, t) {
					if (Yn(t)) switch (t.value) {
						case Gr: return n = 0, !1;
						case Kr: return n = 1, !1;
						case Jr:
						case Vr: return r = 0, !1;
						case Hr: return r = 1, !1;
						case Ur: return r = 2, !1;
						case qr:
						case Wr: return r = 3, !1;
					}
					else if (nr(t) || rr(t)) return Array.isArray(r) || (r = []), r.push(t), !1;
					return e;
				}, s)), s) {
					var c = jr(e, t);
					i.push(c);
				}
			}), {
				size: r,
				shape: n,
				stops: i,
				position: a,
				type: 2
			};
		}, Zr = function(e) {
			return e.type === 1;
		}, B = function(e) {
			return e.type === 2;
		}, Qr = {
			name: "image",
			parse: function(e, t) {
				if (t.type === 22) {
					var n = {
						url: t.value,
						type: 0
					};
					return e.cache.addImage(t.value), n;
				}
				if (t.type === 18) {
					var r = ei[t.name];
					if (r === void 0) throw Error("Attempting to parse an unsupported image function \"" + t.name + "\"");
					return r(e, t.values);
				}
				throw Error("Unsupported image type " + t.type);
			}
		};
		function $r(e) {
			return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!ei[e.name]);
		}
		var ei = {
			"linear-gradient": Rr,
			"-moz-linear-gradient": zr,
			"-ms-linear-gradient": zr,
			"-o-linear-gradient": zr,
			"-webkit-linear-gradient": zr,
			"radial-gradient": Yr,
			"-moz-radial-gradient": Xr,
			"-ms-radial-gradient": Xr,
			"-o-radial-gradient": Xr,
			"-webkit-radial-gradient": Xr,
			"-webkit-gradient": Br
		}, ti = {
			name: "background-image",
			initialValue: "none",
			type: 1,
			prefix: !1,
			parse: function(e, t) {
				if (t.length === 0) return [];
				var n = t[0];
				return n.type === 20 && n.value === "none" ? [] : t.filter(function(e) {
					return $n(e) && $r(e);
				}).map(function(t) {
					return Qr.parse(e, t);
				});
			}
		}, ni = {
			name: "background-origin",
			initialValue: "border-box",
			prefix: !1,
			type: 1,
			parse: function(e, t) {
				return t.map(function(e) {
					if (Yn(e)) switch (e.value) {
						case "padding-box": return 1;
						case "content-box": return 2;
					}
					return 0;
				});
			}
		}, ri = {
			name: "background-position",
			initialValue: "0% 0%",
			type: 1,
			prefix: !1,
			parse: function(e, t) {
				return er(t).map(function(e) {
					return e.filter(rr);
				}).map(ir);
			}
		}, ii = {
			name: "background-repeat",
			initialValue: "repeat",
			prefix: !1,
			type: 1,
			parse: function(e, t) {
				return er(t).map(function(e) {
					return e.filter(Yn).map(function(e) {
						return e.value;
					}).join(" ");
				}).map(ai);
			}
		}, ai = function(e) {
			switch (e) {
				case "no-repeat": return 1;
				case "repeat-x":
				case "repeat no-repeat": return 2;
				case "repeat-y":
				case "no-repeat repeat": return 3;
				default: return 0;
			}
		}, oi;
		(function(e) {
			e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
		})(oi ||= {});
		var si = {
			name: "background-size",
			initialValue: "0",
			prefix: !1,
			type: 1,
			parse: function(e, t) {
				return er(t).map(function(e) {
					return e.filter(ci);
				});
			}
		}, ci = function(e) {
			return Yn(e) || rr(e);
		}, li = function(e) {
			return {
				name: "border-" + e + "-color",
				initialValue: "transparent",
				prefix: !1,
				type: 3,
				format: "color"
			};
		}, ui = li("top"), di = li("right"), fi = li("bottom"), pi = li("left"), mi = function(e) {
			return {
				name: "border-radius-" + e,
				initialValue: "0 0",
				prefix: !1,
				type: 1,
				parse: function(e, t) {
					return ir(t.filter(rr));
				}
			};
		}, hi = mi("top-left"), gi = mi("top-right"), _i = mi("bottom-right"), vi = mi("bottom-left"), yi = function(e) {
			return {
				name: "border-" + e + "-style",
				initialValue: "solid",
				prefix: !1,
				type: 2,
				parse: function(e, t) {
					switch (t) {
						case "none": return 0;
						case "dashed": return 2;
						case "dotted": return 3;
						case "double": return 4;
					}
					return 1;
				}
			};
		}, V = yi("top"), bi = yi("right"), xi = yi("bottom"), Si = yi("left"), Ci = function(e) {
			return {
				name: "border-" + e + "-width",
				initialValue: "0",
				type: 0,
				prefix: !1,
				parse: function(e, t) {
					return qn(t) ? t.number : 0;
				}
			};
		}, wi = Ci("top"), Ti = Ci("right"), Ei = Ci("bottom"), Di = Ci("left"), Oi = {
			name: "color",
			initialValue: "transparent",
			prefix: !1,
			type: 3,
			format: "color"
		}, ki = {
			name: "direction",
			initialValue: "ltr",
			prefix: !1,
			type: 2,
			parse: function(e, t) {
				switch (t) {
					case "rtl": return 1;
					default: return 0;
				}
			}
		}, Ai = {
			name: "display",
			initialValue: "inline-block",
			prefix: !1,
			type: 1,
			parse: function(e, t) {
				return t.filter(Yn).reduce(function(e, t) {
					return e | ji(t.value);
				}, 0);
			}
		}, ji = function(e) {
			switch (e) {
				case "block":
				case "-webkit-box": return 2;
				case "inline": return 4;
				case "run-in": return 8;
				case "flow": return 16;
				case "flow-root": return 32;
				case "table": return 64;
				case "flex":
				case "-webkit-flex": return 128;
				case "grid":
				case "-ms-grid": return 256;
				case "ruby": return 512;
				case "subgrid": return 1024;
				case "list-item": return 2048;
				case "table-row-group": return 4096;
				case "table-header-group": return 8192;
				case "table-footer-group": return 16384;
				case "table-row": return 32768;
				case "table-cell": return 65536;
				case "table-column-group": return 131072;
				case "table-column": return 262144;
				case "table-caption": return 524288;
				case "ruby-base": return 1048576;
				case "ruby-text": return 2097152;
				case "ruby-base-container": return 4194304;
				case "ruby-text-container": return 8388608;
				case "contents": return 16777216;
				case "inline-block": return 33554432;
				case "inline-list-item": return 67108864;
				case "inline-table": return 134217728;
				case "inline-flex": return 268435456;
				case "inline-grid": return 536870912;
			}
			return 0;
		}, Mi = {
			name: "float",
			initialValue: "none",
			prefix: !1,
			type: 2,
			parse: function(e, t) {
				switch (t) {
					case "left": return 1;
					case "right": return 2;
					case "inline-start": return 3;
					case "inline-end": return 4;
				}
				return 0;
			}
		}, H = {
			name: "letter-spacing",
			initialValue: "0",
			prefix: !1,
			type: 0,
			parse: function(e, t) {
				return t.type === 20 && t.value === "normal" ? 0 : t.type === 17 || t.type === 15 ? t.number : 0;
			}
		}, Ni;
		(function(e) {
			e.NORMAL = "normal", e.STRICT = "strict";
		})(Ni ||= {});
		var Pi = {
			name: "line-break",
			initialValue: "normal",
			prefix: !1,
			type: 2,
			parse: function(e, t) {
				switch (t) {
					case "strict": return Ni.STRICT;
					default: return Ni.NORMAL;
				}
			}
		}, Fi = {
			name: "line-height",
			initialValue: "normal",
			prefix: !1,
			type: 4
		}, Ii = function(e, t) {
			return Yn(e) && e.value === "normal" ? 1.2 * t : e.type === 17 ? t * e.number : rr(e) ? lr(e, t) : t;
		}, Li = {
			name: "list-style-image",
			initialValue: "none",
			type: 0,
			prefix: !1,
			parse: function(e, t) {
				return t.type === 20 && t.value === "none" ? null : Qr.parse(e, t);
			}
		}, Ri = {
			name: "list-style-position",
			initialValue: "outside",
			prefix: !1,
			type: 2,
			parse: function(e, t) {
				switch (t) {
					case "inside": return 0;
					default: return 1;
				}
			}
		}, zi = {
			name: "list-style-type",
			initialValue: "none",
			prefix: !1,
			type: 2,
			parse: function(e, t) {
				switch (t) {
					case "disc": return 0;
					case "circle": return 1;
					case "square": return 2;
					case "decimal": return 3;
					case "cjk-decimal": return 4;
					case "decimal-leading-zero": return 5;
					case "lower-roman": return 6;
					case "upper-roman": return 7;
					case "lower-greek": return 8;
					case "lower-alpha": return 9;
					case "upper-alpha": return 10;
					case "arabic-indic": return 11;
					case "armenian": return 12;
					case "bengali": return 13;
					case "cambodian": return 14;
					case "cjk-earthly-branch": return 15;
					case "cjk-heavenly-stem": return 16;
					case "cjk-ideographic": return 17;
					case "devanagari": return 18;
					case "ethiopic-numeric": return 19;
					case "georgian": return 20;
					case "gujarati": return 21;
					case "gurmukhi": return 22;
					case "hebrew": return 22;
					case "hiragana": return 23;
					case "hiragana-iroha": return 24;
					case "japanese-formal": return 25;
					case "japanese-informal": return 26;
					case "kannada": return 27;
					case "katakana": return 28;
					case "katakana-iroha": return 29;
					case "khmer": return 30;
					case "korean-hangul-formal": return 31;
					case "korean-hanja-formal": return 32;
					case "korean-hanja-informal": return 33;
					case "lao": return 34;
					case "lower-armenian": return 35;
					case "malayalam": return 36;
					case "mongolian": return 37;
					case "myanmar": return 38;
					case "oriya": return 39;
					case "persian": return 40;
					case "simp-chinese-formal": return 41;
					case "simp-chinese-informal": return 42;
					case "tamil": return 43;
					case "telugu": return 44;
					case "thai": return 45;
					case "tibetan": return 46;
					case "trad-chinese-formal": return 47;
					case "trad-chinese-informal": return 48;
					case "upper-armenian": return 49;
					case "disclosure-open": return 50;
					case "disclosure-closed": return 51;
					default: return -1;
				}
			}
		}, Bi = function(e) {
			return {
				name: "margin-" + e,
				initialValue: "0",
				prefix: !1,
				type: 4
			};
		}, Vi = Bi("top"), Hi = Bi("right"), Ui = Bi("bottom"), Wi = Bi("left"), Gi = {
			name: "overflow",
			initialValue: "visible",
			prefix: !1,
			type: 1,
			parse: function(e, t) {
				return t.filter(Yn).map(function(e) {
					switch (e.value) {
						case "hidden": return 1;
						case "scroll": return 2;
						case "clip": return 3;
						case "auto": return 4;
						default: return 0;
					}
				});
			}
		}, Ki = {
			name: "overflow-wrap",
			initialValue: "normal",
			prefix: !1,
			type: 2,
			parse: function(e, t) {
				switch (t) {
					case "break-word": return "break-word";
					default: return "normal";
				}
			}
		}, qi = function(e) {
			return {
				name: "padding-" + e,
				initialValue: "0",
				prefix: !1,
				type: 3,
				format: "length-percentage"
			};
		}, Ji = qi("top"), Yi = qi("right"), Xi = qi("bottom"), Zi = qi("left"), U = {
			name: "text-align",
			initialValue: "left",
			prefix: !1,
			type: 2,
			parse: function(e, t) {
				switch (t) {
					case "right": return 2;
					case "center":
					case "justify": return 1;
					default: return 0;
				}
			}
		}, Qi = {
			name: "position",
			initialValue: "static",
			prefix: !1,
			type: 2,
			parse: function(e, t) {
				switch (t) {
					case "relative": return 1;
					case "absolute": return 2;
					case "fixed": return 3;
					case "sticky": return 4;
				}
				return 0;
			}
		}, $i = {
			name: "text-shadow",
			initialValue: "none",
			type: 1,
			prefix: !1,
			parse: function(e, t) {
				return t.length === 1 && Zn(t[0], "none") ? [] : er(t).map(function(t) {
					for (var n = {
						color: Or.TRANSPARENT,
						offsetX: ar,
						offsetY: ar,
						blur: ar
					}, r = 0, i = 0; i < t.length; i++) {
						var a = t[i];
						nr(a) ? (r === 0 ? n.offsetX = a : r === 1 ? n.offsetY = a : n.blur = a, r++) : n.color = vr.parse(e, a);
					}
					return n;
				});
			}
		}, ea = {
			name: "text-transform",
			initialValue: "none",
			prefix: !1,
			type: 2,
			parse: function(e, t) {
				switch (t) {
					case "uppercase": return 2;
					case "lowercase": return 1;
					case "capitalize": return 3;
				}
				return 0;
			}
		}, ta = {
			name: "transform",
			initialValue: "none",
			prefix: !0,
			type: 0,
			parse: function(e, t) {
				if (t.type === 20 && t.value === "none") return null;
				if (t.type === 18) {
					var n = na[t.name];
					if (n === void 0) throw Error("Attempting to parse an unsupported transform function \"" + t.name + "\"");
					return n(t.values);
				}
				return null;
			}
		}, na = {
			matrix: function(e) {
				var t = e.filter(function(e) {
					return e.type === 17;
				}).map(function(e) {
					return e.number;
				});
				return t.length === 6 ? t : null;
			},
			matrix3d: function(e) {
				var t = e.filter(function(e) {
					return e.type === 17;
				}).map(function(e) {
					return e.number;
				}), n = t[0], r = t[1];
				t[2], t[3];
				var i = t[4], a = t[5];
				t[6], t[7], t[8], t[9], t[10], t[11];
				var o = t[12], s = t[13];
				return t[14], t[15], t.length === 16 ? [
					n,
					r,
					i,
					a,
					o,
					s
				] : null;
			}
		}, ra = {
			type: 16,
			number: 50,
			flags: ct
		}, ia = [ra, ra], aa = {
			name: "transform-origin",
			initialValue: "50% 50%",
			prefix: !0,
			type: 1,
			parse: function(e, t) {
				var n = t.filter(rr);
				return n.length === 2 ? [n[0], n[1]] : ia;
			}
		}, oa = {
			name: "visible",
			initialValue: "none",
			prefix: !1,
			type: 2,
			parse: function(e, t) {
				switch (t) {
					case "hidden": return 1;
					case "collapse": return 2;
					default: return 0;
				}
			}
		}, sa;
		(function(e) {
			e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
		})(sa ||= {});
		for (var ca = {
			name: "word-break",
			initialValue: "normal",
			prefix: !1,
			type: 2,
			parse: function(e, t) {
				switch (t) {
					case "break-all": return sa.BREAK_ALL;
					case "keep-all": return sa.KEEP_ALL;
					default: return sa.NORMAL;
				}
			}
		}, la = {
			name: "z-index",
			initialValue: "auto",
			prefix: !1,
			type: 0,
			parse: function(e, t) {
				if (t.type === 20) return {
					auto: !0,
					order: 0
				};
				if (Jn(t)) return {
					auto: !1,
					order: t.number
				};
				throw Error("Invalid z-index number parsed");
			}
		}, ua = {
			name: "time",
			parse: function(e, t) {
				if (t.type === 15) switch (t.unit.toLowerCase()) {
					case "s": return 1e3 * t.number;
					case "ms": return t.number;
				}
				throw Error("Unsupported time type");
			}
		}, da = {
			name: "opacity",
			initialValue: "1",
			type: 0,
			prefix: !1,
			parse: function(e, t) {
				return Jn(t) ? t.number : 1;
			}
		}, fa = {
			name: "text-decoration-color",
			initialValue: "transparent",
			prefix: !1,
			type: 3,
			format: "color"
		}, pa = {
			name: "text-decoration-line",
			initialValue: "none",
			prefix: !1,
			type: 1,
			parse: function(e, t) {
				return t.filter(Yn).map(function(e) {
					switch (e.value) {
						case "underline": return 1;
						case "overline": return 2;
						case "line-through": return 3;
						case "none": return 4;
					}
					return 0;
				}).filter(function(e) {
					return e !== 0;
				});
			}
		}, ma = {
			name: "font-family",
			initialValue: "",
			prefix: !1,
			type: 1,
			parse: function(e, t) {
				var n = [], r = [];
				return t.forEach(function(e) {
					switch (e.type) {
						case 20:
						case 0:
							n.push(e.value);
							break;
						case 17:
							n.push(e.number.toString());
							break;
						case 4:
							r.push(n.join(" ")), n.length = 0;
							break;
					}
				}), n.length && r.push(n.join(" ")), r.map(function(e) {
					return e.indexOf(" ") === -1 ? e : "'" + e + "'";
				});
			}
		}, ha = {
			name: "font-size",
			initialValue: "0",
			prefix: !1,
			type: 3,
			format: "length"
		}, ga = {
			name: "font-weight",
			initialValue: "normal",
			type: 0,
			prefix: !1,
			parse: function(e, t) {
				if (Jn(t)) return t.number;
				if (Yn(t)) switch (t.value) {
					case "bold": return 700;
					default: return 400;
				}
				return 400;
			}
		}, _a = {
			name: "font-variant",
			initialValue: "none",
			type: 1,
			prefix: !1,
			parse: function(e, t) {
				return t.filter(Yn).map(function(e) {
					return e.value;
				});
			}
		}, va = {
			name: "font-style",
			initialValue: "normal",
			prefix: !1,
			type: 2,
			parse: function(e, t) {
				switch (t) {
					case "oblique": return "oblique";
					case "italic": return "italic";
					default: return "normal";
				}
			}
		}, ya = function(e, t) {
			return (e & t) !== 0;
		}, ba = {
			name: "content",
			initialValue: "none",
			type: 1,
			prefix: !1,
			parse: function(e, t) {
				if (t.length === 0) return [];
				var n = t[0];
				return n.type === 20 && n.value === "none" ? [] : t;
			}
		}, xa = {
			name: "counter-increment",
			initialValue: "none",
			prefix: !0,
			type: 1,
			parse: function(e, t) {
				if (t.length === 0) return null;
				var n = t[0];
				if (n.type === 20 && n.value === "none") return null;
				for (var r = [], i = t.filter(Qn), a = 0; a < i.length; a++) {
					var o = i[a], s = i[a + 1];
					if (o.type === 20) {
						var c = s && Jn(s) ? s.number : 1;
						r.push({
							counter: o.value,
							increment: c
						});
					}
				}
				return r;
			}
		}, Sa = {
			name: "counter-reset",
			initialValue: "none",
			prefix: !0,
			type: 1,
			parse: function(e, t) {
				if (t.length === 0) return [];
				for (var n = [], r = t.filter(Qn), i = 0; i < r.length; i++) {
					var a = r[i], o = r[i + 1];
					if (Yn(a) && a.value !== "none") {
						var s = o && Jn(o) ? o.number : 0;
						n.push({
							counter: a.value,
							reset: s
						});
					}
				}
				return n;
			}
		}, Ca = {
			name: "duration",
			initialValue: "0s",
			prefix: !1,
			type: 1,
			parse: function(e, t) {
				return t.filter(qn).map(function(t) {
					return ua.parse(e, t);
				});
			}
		}, wa = {
			name: "quotes",
			initialValue: "none",
			prefix: !0,
			type: 1,
			parse: function(e, t) {
				if (t.length === 0) return null;
				var n = t[0];
				if (n.type === 20 && n.value === "none") return null;
				var r = [], i = t.filter(Xn);
				if (i.length % 2 != 0) return null;
				for (var a = 0; a < i.length; a += 2) {
					var o = i[a].value, s = i[a + 1].value;
					r.push({
						open: o,
						close: s
					});
				}
				return r;
			}
		}, Ta = function(e, t, n) {
			if (!e) return "";
			var r = e[Math.min(t, e.length - 1)];
			return r ? n ? r.open : r.close : "";
		}, Ea = {
			name: "box-shadow",
			initialValue: "none",
			type: 1,
			prefix: !1,
			parse: function(e, t) {
				return t.length === 1 && Zn(t[0], "none") ? [] : er(t).map(function(t) {
					for (var n = {
						color: 255,
						offsetX: ar,
						offsetY: ar,
						blur: ar,
						spread: ar,
						inset: !1
					}, r = 0, i = 0; i < t.length; i++) {
						var a = t[i];
						Zn(a, "inset") ? n.inset = !0 : nr(a) ? (r === 0 ? n.offsetX = a : r === 1 ? n.offsetY = a : r === 2 ? n.blur = a : n.spread = a, r++) : n.color = vr.parse(e, a);
					}
					return n;
				});
			}
		}, Da = {
			name: "paint-order",
			initialValue: "normal",
			prefix: !1,
			type: 1,
			parse: function(e, t) {
				var n = [
					0,
					1,
					2
				], r = [];
				return t.filter(Yn).forEach(function(e) {
					switch (e.value) {
						case "stroke":
							r.push(1);
							break;
						case "fill":
							r.push(0);
							break;
						case "markers":
							r.push(2);
							break;
					}
				}), n.forEach(function(e) {
					r.indexOf(e) === -1 && r.push(e);
				}), r;
			}
		}, Oa = {
			name: "-webkit-text-stroke-color",
			initialValue: "currentcolor",
			prefix: !1,
			type: 3,
			format: "color"
		}, ka = {
			name: "-webkit-text-stroke-width",
			initialValue: "0",
			type: 0,
			prefix: !1,
			parse: function(e, t) {
				return qn(t) ? t.number : 0;
			}
		}, Aa = function() {
			function e(e, t) {
				this.animationDuration = W(e, Ca, t.animationDuration), this.backgroundClip = W(e, kr, t.backgroundClip), this.backgroundColor = W(e, Ar, t.backgroundColor), this.backgroundImage = W(e, ti, t.backgroundImage), this.backgroundOrigin = W(e, ni, t.backgroundOrigin), this.backgroundPosition = W(e, ri, t.backgroundPosition), this.backgroundRepeat = W(e, ii, t.backgroundRepeat), this.backgroundSize = W(e, si, t.backgroundSize), this.borderTopColor = W(e, ui, t.borderTopColor), this.borderRightColor = W(e, di, t.borderRightColor), this.borderBottomColor = W(e, fi, t.borderBottomColor), this.borderLeftColor = W(e, pi, t.borderLeftColor), this.borderTopLeftRadius = W(e, hi, t.borderTopLeftRadius), this.borderTopRightRadius = W(e, gi, t.borderTopRightRadius), this.borderBottomRightRadius = W(e, _i, t.borderBottomRightRadius), this.borderBottomLeftRadius = W(e, vi, t.borderBottomLeftRadius), this.borderTopStyle = W(e, V, t.borderTopStyle), this.borderRightStyle = W(e, bi, t.borderRightStyle), this.borderBottomStyle = W(e, xi, t.borderBottomStyle), this.borderLeftStyle = W(e, Si, t.borderLeftStyle), this.borderTopWidth = W(e, wi, t.borderTopWidth), this.borderRightWidth = W(e, Ti, t.borderRightWidth), this.borderBottomWidth = W(e, Ei, t.borderBottomWidth), this.borderLeftWidth = W(e, Di, t.borderLeftWidth), this.boxShadow = W(e, Ea, t.boxShadow), this.color = W(e, Oi, t.color), this.direction = W(e, ki, t.direction), this.display = W(e, Ai, t.display), this.float = W(e, Mi, t.cssFloat), this.fontFamily = W(e, ma, t.fontFamily), this.fontSize = W(e, ha, t.fontSize), this.fontStyle = W(e, va, t.fontStyle), this.fontVariant = W(e, _a, t.fontVariant), this.fontWeight = W(e, ga, t.fontWeight), this.letterSpacing = W(e, H, t.letterSpacing), this.lineBreak = W(e, Pi, t.lineBreak), this.lineHeight = W(e, Fi, t.lineHeight), this.listStyleImage = W(e, Li, t.listStyleImage), this.listStylePosition = W(e, Ri, t.listStylePosition), this.listStyleType = W(e, zi, t.listStyleType), this.marginTop = W(e, Vi, t.marginTop), this.marginRight = W(e, Hi, t.marginRight), this.marginBottom = W(e, Ui, t.marginBottom), this.marginLeft = W(e, Wi, t.marginLeft), this.opacity = W(e, da, t.opacity);
				var n = W(e, Gi, t.overflow);
				this.overflowX = n[0], this.overflowY = n[+(n.length > 1)], this.overflowWrap = W(e, Ki, t.overflowWrap), this.paddingTop = W(e, Ji, t.paddingTop), this.paddingRight = W(e, Yi, t.paddingRight), this.paddingBottom = W(e, Xi, t.paddingBottom), this.paddingLeft = W(e, Zi, t.paddingLeft), this.paintOrder = W(e, Da, t.paintOrder), this.position = W(e, Qi, t.position), this.textAlign = W(e, U, t.textAlign), this.textDecorationColor = W(e, fa, t.textDecorationColor ?? t.color), this.textDecorationLine = W(e, pa, t.textDecorationLine ?? t.textDecoration), this.textShadow = W(e, $i, t.textShadow), this.textTransform = W(e, ea, t.textTransform), this.transform = W(e, ta, t.transform), this.transformOrigin = W(e, aa, t.transformOrigin), this.visibility = W(e, oa, t.visibility), this.webkitTextStrokeColor = W(e, Oa, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = W(e, ka, t.webkitTextStrokeWidth), this.wordBreak = W(e, ca, t.wordBreak), this.zIndex = W(e, la, t.zIndex);
			}
			return e.prototype.isVisible = function() {
				return this.display > 0 && this.opacity > 0 && this.visibility === 0;
			}, e.prototype.isTransparent = function() {
				return yr(this.backgroundColor);
			}, e.prototype.isTransformed = function() {
				return this.transform !== null;
			}, e.prototype.isPositioned = function() {
				return this.position !== 0;
			}, e.prototype.isPositionedWithZIndex = function() {
				return this.isPositioned() && !this.zIndex.auto;
			}, e.prototype.isFloating = function() {
				return this.float !== 0;
			}, e.prototype.isInlineLevel = function() {
				return ya(this.display, 4) || ya(this.display, 33554432) || ya(this.display, 268435456) || ya(this.display, 536870912) || ya(this.display, 67108864) || ya(this.display, 134217728);
			}, e;
		}(), ja = function() {
			function e(e, t) {
				this.content = W(e, ba, t.content), this.quotes = W(e, wa, t.quotes);
			}
			return e;
		}(), Ma = function() {
			function e(e, t) {
				this.counterIncrement = W(e, xa, t.counterIncrement), this.counterReset = W(e, Sa, t.counterReset);
			}
			return e;
		}(), W = function(e, t, n) {
			var r = new Gn(), i = n == null ? t.initialValue : n.toString();
			r.write(i);
			var a = new Kn(r.read());
			switch (t.type) {
				case 2:
					var o = a.parseComponentValue();
					return t.parse(e, Yn(o) ? o.value : t.initialValue);
				case 0: return t.parse(e, a.parseComponentValue());
				case 1: return t.parse(e, a.parseComponentValues());
				case 4: return a.parseComponentValue();
				case 3:
					switch (t.format) {
						case "angle": return mr.parse(e, a.parseComponentValue());
						case "color": return vr.parse(e, a.parseComponentValue());
						case "image": return Qr.parse(e, a.parseComponentValue());
						case "length":
							var s = a.parseComponentValue();
							return nr(s) ? s : ar;
						case "length-percentage":
							var c = a.parseComponentValue();
							return rr(c) ? c : ar;
						case "time": return ua.parse(e, a.parseComponentValue());
					}
					break;
			}
		}, Na = "data-html2canvas-debug", Pa = function(e) {
			switch (e.getAttribute(Na)) {
				case "all": return 1;
				case "clone": return 2;
				case "parse": return 3;
				case "render": return 4;
				default: return 0;
			}
		}, Fa = function(e, t) {
			var n = Pa(e);
			return n === 1 || t === n;
		}, G = function() {
			function e(e, t) {
				if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, Fa(t, 3)) debugger;
				this.styles = new Aa(e, window.getComputedStyle(t, null)), Ss(t) && (this.styles.animationDuration.some(function(e) {
					return e > 0;
				}) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = s(this.context, t), Fa(t, 4) && (this.flags |= 16);
			}
			return e;
		}(), K = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", La = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Ra = 0; Ra < Ia.length; Ra++) La[Ia.charCodeAt(Ra)] = Ra;
		for (var za = function(e) {
			var t = e.length * .75, n = e.length, r, i = 0, a, o, s, c;
			e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
			var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? new ArrayBuffer(t) : Array(t), u = Array.isArray(l) ? l : new Uint8Array(l);
			for (r = 0; r < n; r += 4) a = La[e.charCodeAt(r)], o = La[e.charCodeAt(r + 1)], s = La[e.charCodeAt(r + 2)], c = La[e.charCodeAt(r + 3)], u[i++] = a << 2 | o >> 4, u[i++] = (o & 15) << 4 | s >> 2, u[i++] = (s & 3) << 6 | c & 63;
			return l;
		}, Ba = function(e) {
			for (var t = e.length, n = [], r = 0; r < t; r += 2) n.push(e[r + 1] << 8 | e[r]);
			return n;
		}, Va = function(e) {
			for (var t = e.length, n = [], r = 0; r < t; r += 4) n.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
			return n;
		}, Ha = 5, Ua = 11, Wa = 2, Ga = Ua - Ha, Ka = 65536 >> Ha, qa = (1 << Ha) - 1, Ja = Ka + (1024 >> Ha) + 32, Ya = 65536 >> Ua, Xa = (1 << Ga) - 1, Za = function(e, t, n) {
			return e.slice ? e.slice(t, n) : new Uint16Array(Array.prototype.slice.call(e, t, n));
		}, Qa = function(e, t, n) {
			return e.slice ? e.slice(t, n) : new Uint32Array(Array.prototype.slice.call(e, t, n));
		}, $a = function(e, t) {
			var n = za(e), r = Array.isArray(n) ? Va(n) : new Uint32Array(n), i = Array.isArray(n) ? Ba(n) : new Uint16Array(n), a = 24, o = Za(i, a / 2, r[4] / 2), s = r[5] === 2 ? Za(i, (a + r[4]) / 2) : Qa(r, Math.ceil((a + r[4]) / 4));
			return new eo(r[0], r[1], r[2], r[3], o, s);
		}, eo = function() {
			function e(e, t, n, r, i, a) {
				this.initialValue = e, this.errorValue = t, this.highStart = n, this.highValueIndex = r, this.index = i, this.data = a;
			}
			return e.prototype.get = function(e) {
				var t;
				if (e >= 0) {
					if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Ha], t = (t << Wa) + (e & qa), this.data[t];
					if (e <= 65535) return t = this.index[Ka + (e - 55296 >> Ha)], t = (t << Wa) + (e & qa), this.data[t];
					if (e < this.highStart) return t = Ja - Ya + (e >> Ua), t = this.index[t], t += e >> Ha & Xa, t = this.index[t], t = (t << Wa) + (e & qa), this.data[t];
					if (e <= 1114111) return this.data[this.highValueIndex];
				}
				return this.errorValue;
			}, e;
		}(), to = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", no = typeof Uint8Array > "u" ? [] : new Uint8Array(256), ro = 0; ro < to.length; ro++) no[to.charCodeAt(ro)] = ro;
		var io = 1, ao = 2, oo = 3, so = 4, co = 5, lo = 7, uo = 8, fo = 9, po = 10, mo = 11, ho = 12, go = 13, _o = 14, vo = 15, yo = function(e) {
			for (var t = [], n = 0, r = e.length; n < r;) {
				var i = e.charCodeAt(n++);
				if (i >= 55296 && i <= 56319 && n < r) {
					var a = e.charCodeAt(n++);
					(a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--);
				} else t.push(i);
			}
			return t;
		}, bo = function() {
			var e = [...arguments];
			if (String.fromCodePoint) return String.fromCodePoint.apply(String, e);
			var t = e.length;
			if (!t) return "";
			for (var n = [], r = -1, i = ""; ++r < t;) {
				var a = e[r];
				a <= 65535 ? n.push(a) : (a -= 65536, n.push((a >> 10) + 55296, a % 1024 + 56320)), (r + 1 === t || n.length > 16384) && (i += String.fromCharCode.apply(String, n), n.length = 0);
			}
			return i;
		}, xo = $a(K), So = "×", Co = "÷", wo = function(e) {
			return xo.get(e);
		}, To = function(e, t, n) {
			var r = n - 2, i = t[r], a = t[n - 1], o = t[n];
			if (a === ao && o === oo) return So;
			if (a === ao || a === oo || a === so || o === ao || o === oo || o === so) return Co;
			if (a === uo && [
				uo,
				fo,
				mo,
				ho
			].indexOf(o) !== -1 || (a === mo || a === fo) && (o === fo || o === po) || (a === ho || a === po) && o === po || o === go || o === co || o === lo || a === io) return So;
			if (a === go && o === _o) {
				for (; i === co;) i = t[--r];
				if (i === _o) return So;
			}
			if (a === vo && o === vo) {
				for (var s = 0; i === vo;) s++, i = t[--r];
				if (s % 2 == 0) return So;
			}
			return Co;
		}, Eo = function(e) {
			var t = yo(e), n = t.length, r = 0, i = 0, a = t.map(wo);
			return { next: function() {
				if (r >= n) return {
					done: !0,
					value: null
				};
				for (var e = So; r < n && (e = To(t, a, ++r)) === So;);
				if (e !== So || r === n) {
					var o = bo.apply(null, t.slice(i, r));
					return i = r, {
						value: o,
						done: !1
					};
				}
				return {
					done: !0,
					value: null
				};
			} };
		}, Do = function(e) {
			for (var t = Eo(e), n = [], r; !(r = t.next()).done;) r.value && n.push(r.value.slice());
			return n;
		}, Oo = function(e) {
			var t = 123;
			if (e.createRange) {
				var n = e.createRange();
				if (n.getBoundingClientRect) {
					var r = e.createElement("boundtest");
					r.style.height = t + "px", r.style.display = "block", e.body.appendChild(r), n.selectNode(r);
					var i = n.getBoundingClientRect(), a = Math.round(i.height);
					if (e.body.removeChild(r), a === t) return !0;
				}
			}
			return !1;
		}, ko = function(e) {
			var t = e.createElement("boundtest");
			t.style.width = "50px", t.style.display = "block", t.style.fontSize = "12px", t.style.letterSpacing = "0px", t.style.wordSpacing = "0px", e.body.appendChild(t);
			var n = e.createRange();
			t.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
			var r = t.firstChild, i = l(r.data).map(function(e) {
				return u(e);
			}), a = 0, o = {}, s = i.every(function(e, t) {
				n.setStart(r, a), n.setEnd(r, a + e.length);
				var i = n.getBoundingClientRect();
				a += e.length;
				var s = i.x > o.x || i.y > o.y;
				return o = i, t === 0 ? !0 : s;
			});
			return e.body.removeChild(t), s;
		}, Ao = function() {
			return new Image().crossOrigin !== void 0;
		}, jo = function() {
			return typeof new XMLHttpRequest().responseType == "string";
		}, Mo = function(e) {
			var t = new Image(), n = e.createElement("canvas"), r = n.getContext("2d");
			if (!r) return !1;
			t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
			try {
				r.drawImage(t, 0, 0), n.toDataURL();
			} catch {
				return !1;
			}
			return !0;
		}, No = function(e) {
			return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255;
		}, Po = function(e) {
			var t = e.createElement("canvas"), n = 100;
			t.width = n, t.height = n;
			var r = t.getContext("2d");
			if (!r) return Promise.reject(!1);
			r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, n, n);
			var i = new Image(), a = t.toDataURL();
			i.src = a;
			var o = Fo(n, n, 0, 0, i);
			return r.fillStyle = "red", r.fillRect(0, 0, n, n), Io(o).then(function(t) {
				r.drawImage(t, 0, 0);
				var i = r.getImageData(0, 0, n, n).data;
				r.fillStyle = "red", r.fillRect(0, 0, n, n);
				var o = e.createElement("div");
				return o.style.backgroundImage = "url(" + a + ")", o.style.height = n + "px", No(i) ? Io(Fo(n, n, 0, 0, o)) : Promise.reject(!1);
			}).then(function(e) {
				return r.drawImage(e, 0, 0), No(r.getImageData(0, 0, n, n).data);
			}).catch(function() {
				return !1;
			});
		}, Fo = function(e, t, n, r, i) {
			var a = "http://www.w3.org/2000/svg", o = document.createElementNS(a, "svg"), s = document.createElementNS(a, "foreignObject");
			return o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "height", t.toString()), s.setAttributeNS(null, "width", "100%"), s.setAttributeNS(null, "height", "100%"), s.setAttributeNS(null, "x", n.toString()), s.setAttributeNS(null, "y", r.toString()), s.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(s), s.appendChild(i), o;
		}, Io = function(e) {
			return new Promise(function(t, n) {
				var r = new Image();
				r.onload = function() {
					return t(r);
				}, r.onerror = n, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
			});
		}, Lo = {
			get SUPPORT_RANGE_BOUNDS() {
				var e = Oo(document);
				return Object.defineProperty(Lo, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
			},
			get SUPPORT_WORD_BREAKING() {
				var e = Lo.SUPPORT_RANGE_BOUNDS && ko(document);
				return Object.defineProperty(Lo, "SUPPORT_WORD_BREAKING", { value: e }), e;
			},
			get SUPPORT_SVG_DRAWING() {
				var e = Mo(document);
				return Object.defineProperty(Lo, "SUPPORT_SVG_DRAWING", { value: e }), e;
			},
			get SUPPORT_FOREIGNOBJECT_DRAWING() {
				var e = typeof Array.from == "function" && typeof window.fetch == "function" ? Po(document) : Promise.resolve(!1);
				return Object.defineProperty(Lo, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
			},
			get SUPPORT_CORS_IMAGES() {
				var e = Ao();
				return Object.defineProperty(Lo, "SUPPORT_CORS_IMAGES", { value: e }), e;
			},
			get SUPPORT_RESPONSE_TYPE() {
				var e = jo();
				return Object.defineProperty(Lo, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
			},
			get SUPPORT_CORS_XHR() {
				var e = "withCredentials" in new XMLHttpRequest();
				return Object.defineProperty(Lo, "SUPPORT_CORS_XHR", { value: e }), e;
			},
			get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
				var e = !!(typeof Intl < "u" && Intl.Segmenter);
				return Object.defineProperty(Lo, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
			}
		}, Ro = function() {
			function e(e, t) {
				this.text = e, this.bounds = t;
			}
			return e;
		}(), zo = function(e, t, n, r) {
			var i = Wo(t, n), a = [], s = 0;
			return i.forEach(function(t) {
				if (n.textDecorationLine.length || t.trim().length > 0) if (Lo.SUPPORT_RANGE_BOUNDS) {
					var i = Vo(r, s, t.length).getClientRects();
					if (i.length > 1) {
						var c = Ho(t), l = 0;
						c.forEach(function(t) {
							a.push(new Ro(t, o.fromDOMRectList(e, Vo(r, l + s, t.length).getClientRects()))), l += t.length;
						});
					} else a.push(new Ro(t, o.fromDOMRectList(e, i)));
				} else {
					var u = r.splitText(t.length);
					a.push(new Ro(t, Bo(e, r))), r = u;
				}
				else Lo.SUPPORT_RANGE_BOUNDS || (r = r.splitText(t.length));
				s += t.length;
			}), a;
		}, Bo = function(e, t) {
			var n = t.ownerDocument;
			if (n) {
				var r = n.createElement("html2canvaswrapper");
				r.appendChild(t.cloneNode(!0));
				var i = t.parentNode;
				if (i) {
					i.replaceChild(r, t);
					var a = s(e, r);
					return r.firstChild && i.replaceChild(r.firstChild, r), a;
				}
			}
			return o.EMPTY;
		}, Vo = function(e, t, n) {
			var r = e.ownerDocument;
			if (!r) throw Error("Node has no owner document");
			var i = r.createRange();
			return i.setStart(e, t), i.setEnd(e, t + n), i;
		}, Ho = function(e) {
			if (Lo.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
				var t = new Intl.Segmenter(void 0, { granularity: "grapheme" });
				return Array.from(t.segment(e)).map(function(e) {
					return e.segment;
				});
			}
			return Do(e);
		}, Uo = function(e, t) {
			if (Lo.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
				var n = new Intl.Segmenter(void 0, { granularity: "word" });
				return Array.from(n.segment(e)).map(function(e) {
					return e.segment;
				});
			}
			return Ko(e, t);
		}, Wo = function(e, t) {
			return t.letterSpacing === 0 ? Uo(e, t) : Ho(e);
		}, Go = [
			32,
			160,
			4961,
			65792,
			65793,
			4153,
			4241
		], Ko = function(e, t) {
			for (var n = at(e, {
				lineBreak: t.lineBreak,
				wordBreak: t.overflowWrap === "break-word" ? "break-word" : t.wordBreak
			}), r = [], i, a = function() {
				if (i.value) {
					var e = l(i.value.slice()), t = "";
					e.forEach(function(e) {
						Go.indexOf(e) === -1 ? t += u(e) : (t.length && r.push(t), r.push(u(e)), t = "");
					}), t.length && r.push(t);
				}
			}; !(i = n.next()).done;) a();
			return r;
		}, qo = function() {
			function e(e, t, n) {
				this.text = Jo(t.data, n.textTransform), this.textBounds = zo(e, this.text, n, t);
			}
			return e;
		}(), Jo = function(e, t) {
			switch (t) {
				case 1: return e.toLowerCase();
				case 3: return e.replace(Yo, Xo);
				case 2: return e.toUpperCase();
				default: return e;
			}
		}, Yo = /(^|\s|:|-|\(|\))([a-z])/g, Xo = function(e, t, n) {
			return e.length > 0 ? t + n.toUpperCase() : e;
		}, Zo = function(e) {
			t(n, e);
			function n(t, n) {
				var r = e.call(this, t, n) || this;
				return r.src = n.currentSrc || n.src, r.intrinsicWidth = n.naturalWidth, r.intrinsicHeight = n.naturalHeight, r.context.cache.addImage(r.src), r;
			}
			return n;
		}(G), Qo = function(e) {
			t(n, e);
			function n(t, n) {
				var r = e.call(this, t, n) || this;
				return r.canvas = n, r.intrinsicWidth = n.width, r.intrinsicHeight = n.height, r;
			}
			return n;
		}(G), $o = function(e) {
			t(n, e);
			function n(t, n) {
				var r = e.call(this, t, n) || this, i = new XMLSerializer(), a = s(t, n);
				return n.setAttribute("width", a.width + "px"), n.setAttribute("height", a.height + "px"), r.svg = "data:image/svg+xml," + encodeURIComponent(i.serializeToString(n)), r.intrinsicWidth = n.width.baseVal.value, r.intrinsicHeight = n.height.baseVal.value, r.context.cache.addImage(r.svg), r;
			}
			return n;
		}(G), es = function(e) {
			t(n, e);
			function n(t, n) {
				var r = e.call(this, t, n) || this;
				return r.value = n.value, r;
			}
			return n;
		}(G), ts = function(e) {
			t(n, e);
			function n(t, n) {
				var r = e.call(this, t, n) || this;
				return r.start = n.start, r.reversed = typeof n.reversed == "boolean" && n.reversed === !0, r;
			}
			return n;
		}(G), ns = [{
			type: 15,
			flags: 0,
			unit: "px",
			number: 3
		}], rs = [{
			type: 16,
			flags: 0,
			number: 50
		}], is = function(e) {
			return e.width > e.height ? new o(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new o(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e;
		}, as = function(e) {
			var t = e.type === cs ? Array(e.value.length + 1).join("•") : e.value;
			return t.length === 0 ? e.placeholder || "" : t;
		}, os = "checkbox", ss = "radio", cs = "password", ls = 707406591, us = function(e) {
			t(n, e);
			function n(t, n) {
				var r = e.call(this, t, n) || this;
				switch (r.type = n.type.toLowerCase(), r.checked = n.checked, r.value = as(n), (r.type === os || r.type === ss) && (r.styles.backgroundColor = 3739148031, r.styles.borderTopColor = r.styles.borderRightColor = r.styles.borderBottomColor = r.styles.borderLeftColor = 2779096575, r.styles.borderTopWidth = r.styles.borderRightWidth = r.styles.borderBottomWidth = r.styles.borderLeftWidth = 1, r.styles.borderTopStyle = r.styles.borderRightStyle = r.styles.borderBottomStyle = r.styles.borderLeftStyle = 1, r.styles.backgroundClip = [0], r.styles.backgroundOrigin = [0], r.bounds = is(r.bounds)), r.type) {
					case os:
						r.styles.borderTopRightRadius = r.styles.borderTopLeftRadius = r.styles.borderBottomRightRadius = r.styles.borderBottomLeftRadius = ns;
						break;
					case ss:
						r.styles.borderTopRightRadius = r.styles.borderTopLeftRadius = r.styles.borderBottomRightRadius = r.styles.borderBottomLeftRadius = rs;
						break;
				}
				return r;
			}
			return n;
		}(G), ds = function(e) {
			t(n, e);
			function n(t, n) {
				var r = e.call(this, t, n) || this, i = n.options[n.selectedIndex || 0];
				return r.value = i && i.text || "", r;
			}
			return n;
		}(G), fs = function(e) {
			t(n, e);
			function n(t, n) {
				var r = e.call(this, t, n) || this;
				return r.value = n.value, r;
			}
			return n;
		}(G), ps = function(e) {
			t(n, e);
			function n(t, n) {
				var r = e.call(this, t, n) || this;
				r.src = n.src, r.width = parseInt(n.width, 10) || 0, r.height = parseInt(n.height, 10) || 0, r.backgroundColor = r.styles.backgroundColor;
				try {
					if (n.contentWindow && n.contentWindow.document && n.contentWindow.document.documentElement) {
						r.tree = _s(t, n.contentWindow.document.documentElement);
						var i = n.contentWindow.document.documentElement ? Dr(t, getComputedStyle(n.contentWindow.document.documentElement).backgroundColor) : Or.TRANSPARENT, a = n.contentWindow.document.body ? Dr(t, getComputedStyle(n.contentWindow.document.body).backgroundColor) : Or.TRANSPARENT;
						r.backgroundColor = yr(i) ? yr(a) ? r.styles.backgroundColor : a : i;
					}
				} catch {}
				return r;
			}
			return n;
		}(G), ms = [
			"OL",
			"UL",
			"MENU"
		], hs = function(e, t, n, r) {
			for (var i = t.firstChild, a = void 0; i; i = a) if (a = i.nextSibling, bs(i) && i.data.trim().length > 0) n.textNodes.push(new qo(e, i, n.styles));
			else if (xs(i)) if (Rs(i) && i.assignedNodes) i.assignedNodes().forEach(function(t) {
				return hs(e, t, n, r);
			});
			else {
				var o = gs(e, i);
				o.styles.isVisible() && (vs(i, o, r) ? o.flags |= 4 : ys(o.styles) && (o.flags |= 2), ms.indexOf(i.tagName) !== -1 && (o.flags |= 8), n.elements.push(o), i.slot, i.shadowRoot ? hs(e, i.shadowRoot, o, r) : !Is(i) && !Os(i) && !Ls(i) && hs(e, i, o, r));
			}
		}, gs = function(e, t) {
			return Ms(t) ? new Zo(e, t) : As(t) ? new Qo(e, t) : Os(t) ? new $o(e, t) : ws(t) ? new es(e, t) : Ts(t) ? new ts(e, t) : Es(t) ? new us(e, t) : Ls(t) ? new ds(e, t) : Is(t) ? new fs(e, t) : Ns(t) ? new ps(e, t) : new G(e, t);
		}, _s = function(e, t) {
			var n = gs(e, t);
			return n.flags |= 4, hs(e, t, n, n), n;
		}, vs = function(e, t, n) {
			return t.styles.isPositionedWithZIndex() || t.styles.opacity < 1 || t.styles.isTransformed() || ks(e) && n.styles.isTransparent();
		}, ys = function(e) {
			return e.isPositioned() || e.isFloating();
		}, bs = function(e) {
			return e.nodeType === Node.TEXT_NODE;
		}, xs = function(e) {
			return e.nodeType === Node.ELEMENT_NODE;
		}, Ss = function(e) {
			return xs(e) && e.style !== void 0 && !Cs(e);
		}, Cs = function(e) {
			return typeof e.className == "object";
		}, ws = function(e) {
			return e.tagName === "LI";
		}, Ts = function(e) {
			return e.tagName === "OL";
		}, Es = function(e) {
			return e.tagName === "INPUT";
		}, Ds = function(e) {
			return e.tagName === "HTML";
		}, Os = function(e) {
			return e.tagName === "svg";
		}, ks = function(e) {
			return e.tagName === "BODY";
		}, As = function(e) {
			return e.tagName === "CANVAS";
		}, js = function(e) {
			return e.tagName === "VIDEO";
		}, Ms = function(e) {
			return e.tagName === "IMG";
		}, Ns = function(e) {
			return e.tagName === "IFRAME";
		}, Ps = function(e) {
			return e.tagName === "STYLE";
		}, Fs = function(e) {
			return e.tagName === "SCRIPT";
		}, Is = function(e) {
			return e.tagName === "TEXTAREA";
		}, Ls = function(e) {
			return e.tagName === "SELECT";
		}, Rs = function(e) {
			return e.tagName === "SLOT";
		}, zs = function(e) {
			return e.tagName.indexOf("-") > 0;
		}, Bs = function() {
			function e() {
				this.counters = {};
			}
			return e.prototype.getCounterValue = function(e) {
				var t = this.counters[e];
				return t && t.length ? t[t.length - 1] : 1;
			}, e.prototype.getCounterValues = function(e) {
				return this.counters[e] || [];
			}, e.prototype.pop = function(e) {
				var t = this;
				e.forEach(function(e) {
					return t.counters[e].pop();
				});
			}, e.prototype.parse = function(e) {
				var t = this, n = e.counterIncrement, r = e.counterReset, i = !0;
				n !== null && n.forEach(function(e) {
					var n = t.counters[e.counter];
					n && e.increment !== 0 && (i = !1, n.length || n.push(1), n[Math.max(0, n.length - 1)] += e.increment);
				});
				var a = [];
				return i && r.forEach(function(e) {
					var n = t.counters[e.counter];
					a.push(e.counter), n ||= t.counters[e.counter] = [], n.push(e.reset);
				}), a;
			}, e;
		}(), Vs = {
			integers: [
				1e3,
				900,
				500,
				400,
				100,
				90,
				50,
				40,
				10,
				9,
				5,
				4,
				1
			],
			values: [
				"M",
				"CM",
				"D",
				"CD",
				"C",
				"XC",
				"L",
				"XL",
				"X",
				"IX",
				"V",
				"IV",
				"I"
			]
		}, Hs = {
			integers: [
				9e3,
				8e3,
				7e3,
				6e3,
				5e3,
				4e3,
				3e3,
				2e3,
				1e3,
				900,
				800,
				700,
				600,
				500,
				400,
				300,
				200,
				100,
				90,
				80,
				70,
				60,
				50,
				40,
				30,
				20,
				10,
				9,
				8,
				7,
				6,
				5,
				4,
				3,
				2,
				1
			],
			values: "Ք.Փ.Ւ.Ց.Ր.Տ.Վ.Ս.Ռ.Ջ.Պ.Չ.Ո.Շ.Ն.Յ.Մ.Ճ.Ղ.Ձ.Հ.Կ.Ծ.Խ.Լ.Ի.Ժ.Թ.Ը.Է.Զ.Ե.Դ.Գ.Բ.Ա".split(".")
		}, Us = {
			integers: [
				1e4,
				9e3,
				8e3,
				7e3,
				6e3,
				5e3,
				4e3,
				3e3,
				2e3,
				1e3,
				400,
				300,
				200,
				100,
				90,
				80,
				70,
				60,
				50,
				40,
				30,
				20,
				19,
				18,
				17,
				16,
				15,
				10,
				9,
				8,
				7,
				6,
				5,
				4,
				3,
				2,
				1
			],
			values: "י׳.ט׳.ח׳.ז׳.ו׳.ה׳.ד׳.ג׳.ב׳.א׳.ת.ש.ר.ק.צ.פ.ע.ס.נ.מ.ל.כ.יט.יח.יז.טז.טו.י.ט.ח.ז.ו.ה.ד.ג.ב.א".split(".")
		}, Ws = {
			integers: [
				1e4,
				9e3,
				8e3,
				7e3,
				6e3,
				5e3,
				4e3,
				3e3,
				2e3,
				1e3,
				900,
				800,
				700,
				600,
				500,
				400,
				300,
				200,
				100,
				90,
				80,
				70,
				60,
				50,
				40,
				30,
				20,
				10,
				9,
				8,
				7,
				6,
				5,
				4,
				3,
				2,
				1
			],
			values: "ჵ.ჰ.ჯ.ჴ.ხ.ჭ.წ.ძ.ც.ჩ.შ.ყ.ღ.ქ.ფ.ჳ.ტ.ს.რ.ჟ.პ.ო.ჲ.ნ.მ.ლ.კ.ი.თ.ჱ.ზ.ვ.ე.დ.გ.ბ.ა".split(".")
		}, Gs = function(e, t, n, r, i, a) {
			return e < t || e > n ? ic(e, i, a.length > 0) : r.integers.reduce(function(t, n, i) {
				for (; e >= n;) e -= n, t += r.values[i];
				return t;
			}, "") + a;
		}, Ks = function(e, t, n, r) {
			var i = "";
			do
				n || e--, i = r(e) + i, e /= t;
			while (e * t >= t);
			return i;
		}, qs = function(e, t, n, r, i) {
			var a = n - t + 1;
			return (e < 0 ? "-" : "") + (Ks(Math.abs(e), a, r, function(e) {
				return u(Math.floor(e % a) + t);
			}) + i);
		}, Js = function(e, t, n) {
			n === void 0 && (n = ". ");
			var r = t.length;
			return Ks(Math.abs(e), r, !1, function(e) {
				return t[Math.floor(e % r)];
			}) + n;
		}, Ys = 1, Xs = 2, Zs = 4, Qs = 8, $s = function(e, t, n, r, i, a) {
			if (e < -9999 || e > 9999) return ic(e, 4, i.length > 0);
			var o = Math.abs(e), s = i;
			if (o === 0) return t[0] + s;
			for (var c = 0; o > 0 && c <= 4; c++) {
				var l = o % 10;
				l === 0 && ya(a, Ys) && s !== "" ? s = t[l] + s : l > 1 || l === 1 && c === 0 || l === 1 && c === 1 && ya(a, Xs) || l === 1 && c === 1 && ya(a, Zs) && e > 100 || l === 1 && c > 1 && ya(a, Qs) ? s = t[l] + (c > 0 ? n[c - 1] : "") + s : l === 1 && c > 0 && (s = n[c - 1] + s), o = Math.floor(o / 10);
			}
			return (e < 0 ? r : "") + s;
		}, ec = "十百千萬", tc = "拾佰仟萬", nc = "マイナス", rc = "마이너스", ic = function(e, t, n) {
			var r = n ? ". " : "", i = n ? "、" : "", a = n ? ", " : "", o = n ? " " : "";
			switch (t) {
				case 0: return "•" + o;
				case 1: return "◦" + o;
				case 2: return "◾" + o;
				case 5:
					var s = qs(e, 48, 57, !0, r);
					return s.length < 4 ? "0" + s : s;
				case 4: return Js(e, "〇一二三四五六七八九", i);
				case 6: return Gs(e, 1, 3999, Vs, 3, r).toLowerCase();
				case 7: return Gs(e, 1, 3999, Vs, 3, r);
				case 8: return qs(e, 945, 969, !1, r);
				case 9: return qs(e, 97, 122, !1, r);
				case 10: return qs(e, 65, 90, !1, r);
				case 11: return qs(e, 1632, 1641, !0, r);
				case 12:
				case 49: return Gs(e, 1, 9999, Hs, 3, r);
				case 35: return Gs(e, 1, 9999, Hs, 3, r).toLowerCase();
				case 13: return qs(e, 2534, 2543, !0, r);
				case 14:
				case 30: return qs(e, 6112, 6121, !0, r);
				case 15: return Js(e, "子丑寅卯辰巳午未申酉戌亥", i);
				case 16: return Js(e, "甲乙丙丁戊己庚辛壬癸", i);
				case 17:
				case 48: return $s(e, "零一二三四五六七八九", ec, "負", i, Xs | Zs | Qs);
				case 47: return $s(e, "零壹貳參肆伍陸柒捌玖", tc, "負", i, Ys | Xs | Zs | Qs);
				case 42: return $s(e, "零一二三四五六七八九", ec, "负", i, Xs | Zs | Qs);
				case 41: return $s(e, "零壹贰叁肆伍陆柒捌玖", tc, "负", i, Ys | Xs | Zs | Qs);
				case 26: return $s(e, "〇一二三四五六七八九", "十百千万", nc, i, 0);
				case 25: return $s(e, "零壱弐参四伍六七八九", "拾百千万", nc, i, Ys | Xs | Zs);
				case 31: return $s(e, "영일이삼사오육칠팔구", "십백천만", rc, a, Ys | Xs | Zs);
				case 33: return $s(e, "零一二三四五六七八九", "十百千萬", rc, a, 0);
				case 32: return $s(e, "零壹貳參四五六七八九", "拾百千", rc, a, Ys | Xs | Zs);
				case 18: return qs(e, 2406, 2415, !0, r);
				case 20: return Gs(e, 1, 19999, Ws, 3, r);
				case 21: return qs(e, 2790, 2799, !0, r);
				case 22: return qs(e, 2662, 2671, !0, r);
				case 22: return Gs(e, 1, 10999, Us, 3, r);
				case 23: return Js(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
				case 24: return Js(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
				case 27: return qs(e, 3302, 3311, !0, r);
				case 28: return Js(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", i);
				case 29: return Js(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", i);
				case 34: return qs(e, 3792, 3801, !0, r);
				case 37: return qs(e, 6160, 6169, !0, r);
				case 38: return qs(e, 4160, 4169, !0, r);
				case 39: return qs(e, 2918, 2927, !0, r);
				case 40: return qs(e, 1776, 1785, !0, r);
				case 43: return qs(e, 3046, 3055, !0, r);
				case 44: return qs(e, 3174, 3183, !0, r);
				case 45: return qs(e, 3664, 3673, !0, r);
				case 46: return qs(e, 3872, 3881, !0, r);
				default: return qs(e, 48, 57, !0, r);
			}
		}, ac = "data-html2canvas-ignore", oc = function() {
			function e(e, t, n) {
				if (this.context = e, this.options = n, this.scrolledElements = [], this.referenceElement = t, this.counters = new Bs(), this.quoteDepth = 0, !t.ownerDocument) throw Error("Cloned element does not have an owner document");
				this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
			}
			return e.prototype.toIFrame = function(e, t) {
				var n = this, a = cc(e, t);
				if (!a.contentWindow) return Promise.reject("Unable to find iframe window");
				var o = e.defaultView.pageXOffset, s = e.defaultView.pageYOffset, c = a.contentWindow, l = c.document, u = dc(a).then(function() {
					return r(n, void 0, void 0, function() {
						var e, n;
						return i(this, function(r) {
							switch (r.label) {
								case 0: return this.scrolledElements.forEach(gc), c && (c.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (c.scrollY !== t.top || c.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(c.scrollX - t.left, c.scrollY - t.top, 0, 0))), e = this.options.onclone, n = this.clonedReferenceElement, n === void 0 ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : l.fonts && l.fonts.ready ? [4, l.fonts.ready] : [3, 2];
								case 1: r.sent(), r.label = 2;
								case 2: return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, uc(l)] : [3, 4];
								case 3: r.sent(), r.label = 4;
								case 4: return typeof e == "function" ? [2, Promise.resolve().then(function() {
									return e(l, n);
								}).then(function() {
									return a;
								})] : [2, a];
							}
						});
					});
				});
				return l.open(), l.write(mc(document.doctype) + "<html></html>"), hc(this.referenceElement.ownerDocument, o, s), l.replaceChild(l.adoptNode(this.documentElement), l.documentElement), l.close(), u;
			}, e.prototype.createElementClone = function(e) {
				if (Fa(e, 2)) debugger;
				if (As(e)) return this.createCanvasClone(e);
				if (js(e)) return this.createVideoClone(e);
				if (Ps(e)) return this.createStyleClone(e);
				var t = e.cloneNode(!1);
				return Ms(t) && (Ms(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), zs(t) ? this.createCustomElementClone(t) : t;
			}, e.prototype.createCustomElementClone = function(e) {
				var t = document.createElement("html2canvascustomelement");
				return pc(e.style, t), t;
			}, e.prototype.createStyleClone = function(e) {
				try {
					var t = e.sheet;
					if (t && t.cssRules) {
						var n = [].slice.call(t.cssRules, 0).reduce(function(e, t) {
							return t && typeof t.cssText == "string" ? e + t.cssText : e;
						}, ""), r = e.cloneNode(!1);
						return r.textContent = n, r;
					}
				} catch (e) {
					if (this.context.logger.error("Unable to access cssRules property", e), e.name !== "SecurityError") throw e;
				}
				return e.cloneNode(!1);
			}, e.prototype.createCanvasClone = function(e) {
				if (this.options.inlineImages && e.ownerDocument) {
					var t = e.ownerDocument.createElement("img");
					try {
						return t.src = e.toDataURL(), t;
					} catch {
						this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
					}
				}
				var n = e.cloneNode(!1);
				try {
					n.width = e.width, n.height = e.height;
					var r = e.getContext("2d"), i = n.getContext("2d");
					if (i) if (!this.options.allowTaint && r) i.putImageData(r.getImageData(0, 0, e.width, e.height), 0, 0);
					else {
						var a = e.getContext("webgl2") ?? e.getContext("webgl");
						a && a.getContextAttributes()?.preserveDrawingBuffer === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e), i.drawImage(e, 0, 0);
					}
					return n;
				} catch {
					this.context.logger.info("Unable to clone canvas as it is tainted", e);
				}
				return n;
			}, e.prototype.createVideoClone = function(e) {
				var t = e.ownerDocument.createElement("canvas");
				t.width = e.offsetWidth, t.height = e.offsetHeight;
				var n = t.getContext("2d");
				try {
					return n && (n.drawImage(e, 0, 0, t.width, t.height), this.options.allowTaint || n.getImageData(0, 0, t.width, t.height)), t;
				} catch {
					this.context.logger.info("Unable to clone video as it is tainted", e);
				}
				var r = e.ownerDocument.createElement("canvas");
				return r.width = e.offsetWidth, r.height = e.offsetHeight, r;
			}, e.prototype.appendChildNode = function(e, t, n) {
				(!xs(t) || !Fs(t) && !t.hasAttribute(ac) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !xs(t) || !Ps(t)) && e.appendChild(this.cloneNode(t, n));
			}, e.prototype.cloneChildNodes = function(e, t, n) {
				for (var r = this, i = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; i; i = i.nextSibling) if (xs(i) && Rs(i) && typeof i.assignedNodes == "function") {
					var a = i.assignedNodes();
					a.length && a.forEach(function(e) {
						return r.appendChildNode(t, e, n);
					});
				} else this.appendChildNode(t, i, n);
			}, e.prototype.cloneNode = function(e, t) {
				if (bs(e)) return document.createTextNode(e.data);
				if (!e.ownerDocument) return e.cloneNode(!1);
				var n = e.ownerDocument.defaultView;
				if (n && xs(e) && (Ss(e) || Cs(e))) {
					var r = this.createElementClone(e);
					r.style.transitionProperty = "none";
					var i = n.getComputedStyle(e), a = n.getComputedStyle(e, ":before"), o = n.getComputedStyle(e, ":after");
					this.referenceElement === e && Ss(r) && (this.clonedReferenceElement = r), ks(r) && Sc(r);
					var s = this.counters.parse(new Ma(this.context, i)), c = this.resolvePseudoContent(e, r, a, sc.BEFORE);
					zs(e) && (t = !0), js(e) || this.cloneChildNodes(e, r, t), c && r.insertBefore(c, r.firstChild);
					var l = this.resolvePseudoContent(e, r, o, sc.AFTER);
					return l && r.appendChild(l), this.counters.pop(s), (i && (this.options.copyStyles || Cs(e)) && !Ns(e) || t) && pc(i, r), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
						r,
						e.scrollLeft,
						e.scrollTop
					]), (Is(e) || Ls(e)) && (Is(r) || Ls(r)) && (r.value = e.value), r;
				}
				return e.cloneNode(!1);
			}, e.prototype.resolvePseudoContent = function(e, t, n, r) {
				var i = this;
				if (n) {
					var a = n.content, o = t.ownerDocument;
					if (!(!o || !a || a === "none" || a === "-moz-alt-content" || n.display === "none")) {
						this.counters.parse(new Ma(this.context, n));
						var s = new ja(this.context, n), c = o.createElement("html2canvaspseudoelement");
						pc(n, c), s.content.forEach(function(t) {
							if (t.type === 0) c.appendChild(o.createTextNode(t.value));
							else if (t.type === 22) {
								var n = o.createElement("img");
								n.src = t.value, n.style.opacity = "1", c.appendChild(n);
							} else if (t.type === 18) {
								if (t.name === "attr") {
									var r = t.values.filter(Yn);
									r.length && c.appendChild(o.createTextNode(e.getAttribute(r[0].value) || ""));
								} else if (t.name === "counter") {
									var a = t.values.filter($n), l = a[0], u = a[1];
									if (l && Yn(l)) {
										var d = i.counters.getCounterValue(l.value), f = u && Yn(u) ? zi.parse(i.context, u.value) : 3;
										c.appendChild(o.createTextNode(ic(d, f, !1)));
									}
								} else if (t.name === "counters") {
									var p = t.values.filter($n), l = p[0], m = p[1], u = p[2];
									if (l && Yn(l)) {
										var h = i.counters.getCounterValues(l.value), g = u && Yn(u) ? zi.parse(i.context, u.value) : 3, _ = m && m.type === 0 ? m.value : "", v = h.map(function(e) {
											return ic(e, g, !1);
										}).join(_);
										c.appendChild(o.createTextNode(v));
									}
								}
							} else if (t.type === 20) switch (t.value) {
								case "open-quote":
									c.appendChild(o.createTextNode(Ta(s.quotes, i.quoteDepth++, !0)));
									break;
								case "close-quote":
									c.appendChild(o.createTextNode(Ta(s.quotes, --i.quoteDepth, !1)));
									break;
								default: c.appendChild(o.createTextNode(t.value));
							}
						}), c.className = yc + " " + bc;
						var l = r === sc.BEFORE ? " " + yc : " " + bc;
						return Cs(t) ? t.className.baseValue += l : t.className += l, c;
					}
				}
			}, e.destroy = function(e) {
				return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
			}, e;
		}(), sc;
		(function(e) {
			e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
		})(sc ||= {});
		var cc = function(e, t) {
			var n = e.createElement("iframe");
			return n.className = "html2canvas-container", n.style.visibility = "hidden", n.style.position = "fixed", n.style.left = "-10000px", n.style.top = "0px", n.style.border = "0", n.width = t.width.toString(), n.height = t.height.toString(), n.scrolling = "no", n.setAttribute(ac, "true"), e.body.appendChild(n), n;
		}, lc = function(e) {
			return new Promise(function(t) {
				if (e.complete) {
					t();
					return;
				}
				if (!e.src) {
					t();
					return;
				}
				e.onload = t, e.onerror = t;
			});
		}, uc = function(e) {
			return Promise.all([].slice.call(e.images, 0).map(lc));
		}, dc = function(e) {
			return new Promise(function(t, n) {
				var r = e.contentWindow;
				if (!r) return n("No window assigned for iframe");
				var i = r.document;
				r.onload = e.onload = function() {
					r.onload = e.onload = null;
					var n = setInterval(function() {
						i.body.childNodes.length > 0 && i.readyState === "complete" && (clearInterval(n), t(e));
					}, 50);
				};
			});
		}, fc = [
			"all",
			"d",
			"content"
		], pc = function(e, t) {
			for (var n = e.length - 1; n >= 0; n--) {
				var r = e.item(n);
				fc.indexOf(r) === -1 && t.style.setProperty(r, e.getPropertyValue(r));
			}
			return t;
		}, mc = function(e) {
			var t = "";
			return e && (t += "<!DOCTYPE ", e.name && (t += e.name), e.internalSubset && (t += e.internalSubset), e.publicId && (t += "\"" + e.publicId + "\""), e.systemId && (t += "\"" + e.systemId + "\""), t += ">"), t;
		}, hc = function(e, t, n) {
			e && e.defaultView && (t !== e.defaultView.pageXOffset || n !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(t, n);
		}, gc = function(e) {
			var t = e[0], n = e[1], r = e[2];
			t.scrollLeft = n, t.scrollTop = r;
		}, _c = ":before", vc = ":after", yc = "___html2canvas___pseudoelement_before", bc = "___html2canvas___pseudoelement_after", xc = "{\n    content: \"\" !important;\n    display: none !important;\n}", Sc = function(e) {
			Cc(e, "." + yc + _c + xc + "\n         ." + bc + vc + xc);
		}, Cc = function(e, t) {
			var n = e.ownerDocument;
			if (n) {
				var r = n.createElement("style");
				r.textContent = t, e.appendChild(r);
			}
		}, wc = function() {
			function e() {}
			return e.getOrigin = function(t) {
				var n = e._link;
				return n ? (n.href = t, n.href = n.href, n.protocol + n.hostname + n.port) : "about:blank";
			}, e.isSameOrigin = function(t) {
				return e.getOrigin(t) === e._origin;
			}, e.setContext = function(t) {
				e._link = t.document.createElement("a"), e._origin = e.getOrigin(t.location.href);
			}, e._origin = "about:blank", e;
		}(), Tc = function() {
			function e(e, t) {
				this.context = e, this._options = t, this._cache = {};
			}
			return e.prototype.addImage = function(e) {
				var t = Promise.resolve();
				return this.has(e) || (Mc(e) || kc(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {}), t;
			}, e.prototype.match = function(e) {
				return this._cache[e];
			}, e.prototype.loadImage = function(e) {
				return r(this, void 0, void 0, function() {
					var t, n, r, a, o = this;
					return i(this, function(i) {
						switch (i.label) {
							case 0: return t = wc.isSameOrigin(e), n = !Ac(e) && this._options.useCORS === !0 && Lo.SUPPORT_CORS_IMAGES && !t, r = !Ac(e) && !t && !Mc(e) && typeof this._options.proxy == "string" && Lo.SUPPORT_CORS_XHR && !n, !t && this._options.allowTaint === !1 && !Ac(e) && !Mc(e) && !r && !n ? [2] : (a = e, r ? [4, this.proxy(a)] : [3, 2]);
							case 1: a = i.sent(), i.label = 2;
							case 2: return this.context.logger.debug("Added image " + e.substring(0, 256)), [4, new Promise(function(e, t) {
								var r = new Image();
								r.onload = function() {
									return e(r);
								}, r.onerror = t, (jc(a) || n) && (r.crossOrigin = "anonymous"), r.src = a, r.complete === !0 && setTimeout(function() {
									return e(r);
								}, 500), o._options.imageTimeout > 0 && setTimeout(function() {
									return t("Timed out (" + o._options.imageTimeout + "ms) loading image");
								}, o._options.imageTimeout);
							})];
							case 3: return [2, i.sent()];
						}
					});
				});
			}, e.prototype.has = function(e) {
				return this._cache[e] !== void 0;
			}, e.prototype.keys = function() {
				return Promise.resolve(Object.keys(this._cache));
			}, e.prototype.proxy = function(e) {
				var t = this, n = this._options.proxy;
				if (!n) throw Error("No proxy defined");
				var r = e.substring(0, 256);
				return new Promise(function(i, a) {
					var o = Lo.SUPPORT_RESPONSE_TYPE ? "blob" : "text", s = new XMLHttpRequest();
					s.onload = function() {
						if (s.status === 200) if (o === "text") i(s.response);
						else {
							var e = new FileReader();
							e.addEventListener("load", function() {
								return i(e.result);
							}, !1), e.addEventListener("error", function(e) {
								return a(e);
							}, !1), e.readAsDataURL(s.response);
						}
						else a("Failed to proxy resource " + r + " with status code " + s.status);
					}, s.onerror = a;
					var c = n.indexOf("?") > -1 ? "&" : "?";
					if (s.open("GET", "" + n + c + "url=" + encodeURIComponent(e) + "&responseType=" + o), o !== "text" && s instanceof XMLHttpRequest && (s.responseType = o), t._options.imageTimeout) {
						var l = t._options.imageTimeout;
						s.timeout = l, s.ontimeout = function() {
							return a("Timed out (" + l + "ms) proxying " + r);
						};
					}
					s.send();
				});
			}, e;
		}(), Ec = /^data:image\/svg\+xml/i, Dc = /^data:image\/.*;base64,/i, Oc = /^data:image\/.*/i, kc = function(e) {
			return Lo.SUPPORT_SVG_DRAWING || !Nc(e);
		}, Ac = function(e) {
			return Oc.test(e);
		}, jc = function(e) {
			return Dc.test(e);
		}, Mc = function(e) {
			return e.substr(0, 4) === "blob";
		}, Nc = function(e) {
			return e.substr(-3).toLowerCase() === "svg" || Ec.test(e);
		}, q = function() {
			function e(e, t) {
				this.type = 0, this.x = e, this.y = t;
			}
			return e.prototype.add = function(t, n) {
				return new e(this.x + t, this.y + n);
			}, e;
		}(), Pc = function(e, t, n) {
			return new q(e.x + (t.x - e.x) * n, e.y + (t.y - e.y) * n);
		}, Fc = function() {
			function e(e, t, n, r) {
				this.type = 1, this.start = e, this.startControl = t, this.endControl = n, this.end = r;
			}
			return e.prototype.subdivide = function(t, n) {
				var r = Pc(this.start, this.startControl, t), i = Pc(this.startControl, this.endControl, t), a = Pc(this.endControl, this.end, t), o = Pc(r, i, t), s = Pc(i, a, t), c = Pc(o, s, t);
				return n ? new e(this.start, r, o, c) : new e(c, s, a, this.end);
			}, e.prototype.add = function(t, n) {
				return new e(this.start.add(t, n), this.startControl.add(t, n), this.endControl.add(t, n), this.end.add(t, n));
			}, e.prototype.reverse = function() {
				return new e(this.end, this.endControl, this.startControl, this.start);
			}, e;
		}(), Ic = function(e) {
			return e.type === 1;
		}, Lc = function() {
			function e(e) {
				var t = e.styles, n = e.bounds, r = cr(t.borderTopLeftRadius, n.width, n.height), i = r[0], a = r[1], o = cr(t.borderTopRightRadius, n.width, n.height), s = o[0], c = o[1], l = cr(t.borderBottomRightRadius, n.width, n.height), u = l[0], d = l[1], f = cr(t.borderBottomLeftRadius, n.width, n.height), p = f[0], m = f[1], h = [];
				h.push((i + s) / n.width), h.push((p + u) / n.width), h.push((a + m) / n.height), h.push((c + d) / n.height);
				var g = Math.max.apply(Math, h);
				g > 1 && (i /= g, a /= g, s /= g, c /= g, u /= g, d /= g, p /= g, m /= g);
				var _ = n.width - s, v = n.height - d, y = n.width - u, b = n.height - m, x = t.borderTopWidth, S = t.borderRightWidth, C = t.borderBottomWidth, w = t.borderLeftWidth, T = lr(t.paddingTop, e.bounds.width), E = lr(t.paddingRight, e.bounds.width), D = lr(t.paddingBottom, e.bounds.width), O = lr(t.paddingLeft, e.bounds.width);
				this.topLeftBorderDoubleOuterBox = i > 0 || a > 0 ? Rc(n.left + w / 3, n.top + x / 3, i - w / 3, a - x / 3, J.TOP_LEFT) : new q(n.left + w / 3, n.top + x / 3), this.topRightBorderDoubleOuterBox = i > 0 || a > 0 ? Rc(n.left + _, n.top + x / 3, s - S / 3, c - x / 3, J.TOP_RIGHT) : new q(n.left + n.width - S / 3, n.top + x / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || d > 0 ? Rc(n.left + y, n.top + v, u - S / 3, d - C / 3, J.BOTTOM_RIGHT) : new q(n.left + n.width - S / 3, n.top + n.height - C / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || m > 0 ? Rc(n.left + w / 3, n.top + b, p - w / 3, m - C / 3, J.BOTTOM_LEFT) : new q(n.left + w / 3, n.top + n.height - C / 3), this.topLeftBorderDoubleInnerBox = i > 0 || a > 0 ? Rc(n.left + w * 2 / 3, n.top + x * 2 / 3, i - w * 2 / 3, a - x * 2 / 3, J.TOP_LEFT) : new q(n.left + w * 2 / 3, n.top + x * 2 / 3), this.topRightBorderDoubleInnerBox = i > 0 || a > 0 ? Rc(n.left + _, n.top + x * 2 / 3, s - S * 2 / 3, c - x * 2 / 3, J.TOP_RIGHT) : new q(n.left + n.width - S * 2 / 3, n.top + x * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || d > 0 ? Rc(n.left + y, n.top + v, u - S * 2 / 3, d - C * 2 / 3, J.BOTTOM_RIGHT) : new q(n.left + n.width - S * 2 / 3, n.top + n.height - C * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || m > 0 ? Rc(n.left + w * 2 / 3, n.top + b, p - w * 2 / 3, m - C * 2 / 3, J.BOTTOM_LEFT) : new q(n.left + w * 2 / 3, n.top + n.height - C * 2 / 3), this.topLeftBorderStroke = i > 0 || a > 0 ? Rc(n.left + w / 2, n.top + x / 2, i - w / 2, a - x / 2, J.TOP_LEFT) : new q(n.left + w / 2, n.top + x / 2), this.topRightBorderStroke = i > 0 || a > 0 ? Rc(n.left + _, n.top + x / 2, s - S / 2, c - x / 2, J.TOP_RIGHT) : new q(n.left + n.width - S / 2, n.top + x / 2), this.bottomRightBorderStroke = u > 0 || d > 0 ? Rc(n.left + y, n.top + v, u - S / 2, d - C / 2, J.BOTTOM_RIGHT) : new q(n.left + n.width - S / 2, n.top + n.height - C / 2), this.bottomLeftBorderStroke = p > 0 || m > 0 ? Rc(n.left + w / 2, n.top + b, p - w / 2, m - C / 2, J.BOTTOM_LEFT) : new q(n.left + w / 2, n.top + n.height - C / 2), this.topLeftBorderBox = i > 0 || a > 0 ? Rc(n.left, n.top, i, a, J.TOP_LEFT) : new q(n.left, n.top), this.topRightBorderBox = s > 0 || c > 0 ? Rc(n.left + _, n.top, s, c, J.TOP_RIGHT) : new q(n.left + n.width, n.top), this.bottomRightBorderBox = u > 0 || d > 0 ? Rc(n.left + y, n.top + v, u, d, J.BOTTOM_RIGHT) : new q(n.left + n.width, n.top + n.height), this.bottomLeftBorderBox = p > 0 || m > 0 ? Rc(n.left, n.top + b, p, m, J.BOTTOM_LEFT) : new q(n.left, n.top + n.height), this.topLeftPaddingBox = i > 0 || a > 0 ? Rc(n.left + w, n.top + x, Math.max(0, i - w), Math.max(0, a - x), J.TOP_LEFT) : new q(n.left + w, n.top + x), this.topRightPaddingBox = s > 0 || c > 0 ? Rc(n.left + Math.min(_, n.width - S), n.top + x, _ > n.width + S ? 0 : Math.max(0, s - S), Math.max(0, c - x), J.TOP_RIGHT) : new q(n.left + n.width - S, n.top + x), this.bottomRightPaddingBox = u > 0 || d > 0 ? Rc(n.left + Math.min(y, n.width - w), n.top + Math.min(v, n.height - C), Math.max(0, u - S), Math.max(0, d - C), J.BOTTOM_RIGHT) : new q(n.left + n.width - S, n.top + n.height - C), this.bottomLeftPaddingBox = p > 0 || m > 0 ? Rc(n.left + w, n.top + Math.min(b, n.height - C), Math.max(0, p - w), Math.max(0, m - C), J.BOTTOM_LEFT) : new q(n.left + w, n.top + n.height - C), this.topLeftContentBox = i > 0 || a > 0 ? Rc(n.left + w + O, n.top + x + T, Math.max(0, i - (w + O)), Math.max(0, a - (x + T)), J.TOP_LEFT) : new q(n.left + w + O, n.top + x + T), this.topRightContentBox = s > 0 || c > 0 ? Rc(n.left + Math.min(_, n.width + w + O), n.top + x + T, _ > n.width + w + O ? 0 : s - w + O, c - (x + T), J.TOP_RIGHT) : new q(n.left + n.width - (S + E), n.top + x + T), this.bottomRightContentBox = u > 0 || d > 0 ? Rc(n.left + Math.min(y, n.width - (w + O)), n.top + Math.min(v, n.height + x + T), Math.max(0, u - (S + E)), d - (C + D), J.BOTTOM_RIGHT) : new q(n.left + n.width - (S + E), n.top + n.height - (C + D)), this.bottomLeftContentBox = p > 0 || m > 0 ? Rc(n.left + w + O, n.top + b, Math.max(0, p - (w + O)), m - (C + D), J.BOTTOM_LEFT) : new q(n.left + w + O, n.top + n.height - (C + D));
			}
			return e;
		}(), J;
		(function(e) {
			e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
		})(J ||= {});
		var Rc = function(e, t, n, r, i) {
			var a = 4 * ((Math.sqrt(2) - 1) / 3), o = n * a, s = r * a, c = e + n, l = t + r;
			switch (i) {
				case J.TOP_LEFT: return new Fc(new q(e, l), new q(e, l - s), new q(c - o, t), new q(c, t));
				case J.TOP_RIGHT: return new Fc(new q(e, t), new q(e + o, t), new q(c, l - s), new q(c, l));
				case J.BOTTOM_RIGHT: return new Fc(new q(c, t), new q(c, t + s), new q(e + o, l), new q(e, l));
				case J.BOTTOM_LEFT:
				default: return new Fc(new q(c, l), new q(c - o, l), new q(e, t + s), new q(e, t));
			}
		}, zc = function(e) {
			return [
				e.topLeftBorderBox,
				e.topRightBorderBox,
				e.bottomRightBorderBox,
				e.bottomLeftBorderBox
			];
		}, Bc = function(e) {
			return [
				e.topLeftContentBox,
				e.topRightContentBox,
				e.bottomRightContentBox,
				e.bottomLeftContentBox
			];
		}, Vc = function(e) {
			return [
				e.topLeftPaddingBox,
				e.topRightPaddingBox,
				e.bottomRightPaddingBox,
				e.bottomLeftPaddingBox
			];
		}, Hc = function() {
			function e(e, t, n) {
				this.offsetX = e, this.offsetY = t, this.matrix = n, this.type = 0, this.target = 6;
			}
			return e;
		}(), Uc = function() {
			function e(e, t) {
				this.path = e, this.target = t, this.type = 1;
			}
			return e;
		}(), Wc = function() {
			function e(e) {
				this.opacity = e, this.type = 2, this.target = 6;
			}
			return e;
		}(), Gc = function(e) {
			return e.type === 0;
		}, Kc = function(e) {
			return e.type === 1;
		}, qc = function(e) {
			return e.type === 2;
		}, Jc = function(e, t) {
			return e.length === t.length ? e.some(function(e, n) {
				return e === t[n];
			}) : !1;
		}, Yc = function(e, t, n, r, i) {
			return e.map(function(e, a) {
				switch (a) {
					case 0: return e.add(t, n);
					case 1: return e.add(t + r, n);
					case 2: return e.add(t + r, n + i);
					case 3: return e.add(t, n + i);
				}
				return e;
			});
		}, Xc = function() {
			function e(e) {
				this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
			}
			return e;
		}(), Zc = function() {
			function e(e, t) {
				if (this.container = e, this.parent = t, this.effects = [], this.curves = new Lc(this.container), this.container.styles.opacity < 1 && this.effects.push(new Wc(this.container.styles.opacity)), this.container.styles.transform !== null) {
					var n = this.container.bounds.left + this.container.styles.transformOrigin[0].number, r = this.container.bounds.top + this.container.styles.transformOrigin[1].number, i = this.container.styles.transform;
					this.effects.push(new Hc(n, r, i));
				}
				if (this.container.styles.overflowX !== 0) {
					var a = zc(this.curves), o = Vc(this.curves);
					Jc(a, o) ? this.effects.push(new Uc(a, 6)) : (this.effects.push(new Uc(a, 2)), this.effects.push(new Uc(o, 4)));
				}
			}
			return e.prototype.getEffects = function(e) {
				for (var t = [2, 3].indexOf(this.container.styles.position) === -1, n = this.parent, r = this.effects.slice(0); n;) {
					var i = n.effects.filter(function(e) {
						return !Kc(e);
					});
					if (t || n.container.styles.position !== 0 || !n.parent) {
						if (r.unshift.apply(r, i), t = [2, 3].indexOf(n.container.styles.position) === -1, n.container.styles.overflowX !== 0) {
							var a = zc(n.curves), o = Vc(n.curves);
							Jc(a, o) || r.unshift(new Uc(o, 6));
						}
					} else r.unshift.apply(r, i);
					n = n.parent;
				}
				return r.filter(function(t) {
					return ya(t.target, e);
				});
			}, e;
		}(), Qc = function(e, t, n, r) {
			e.container.elements.forEach(function(i) {
				var a = ya(i.flags, 4), o = ya(i.flags, 2), s = new Zc(i, e);
				ya(i.styles.display, 2048) && r.push(s);
				var c = ya(i.flags, 8) ? [] : r;
				if (a || o) {
					var l = a || i.styles.isPositioned() ? n : t, u = new Xc(s);
					if (i.styles.isPositioned() || i.styles.opacity < 1 || i.styles.isTransformed()) {
						var d = i.styles.zIndex.order;
						if (d < 0) {
							var f = 0;
							l.negativeZIndex.some(function(e, t) {
								return d > e.element.container.styles.zIndex.order ? (f = t, !1) : f > 0;
							}), l.negativeZIndex.splice(f, 0, u);
						} else if (d > 0) {
							var p = 0;
							l.positiveZIndex.some(function(e, t) {
								return d >= e.element.container.styles.zIndex.order ? (p = t + 1, !1) : p > 0;
							}), l.positiveZIndex.splice(p, 0, u);
						} else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(u);
					} else i.styles.isFloating() ? l.nonPositionedFloats.push(u) : l.nonPositionedInlineLevel.push(u);
					Qc(s, u, a ? u : n, c);
				} else i.styles.isInlineLevel() ? t.inlineLevel.push(s) : t.nonInlineLevel.push(s), Qc(s, t, n, c);
				ya(i.flags, 8) && $c(i, c);
			});
		}, $c = function(e, t) {
			for (var n = e instanceof ts ? e.start : 1, r = e instanceof ts ? e.reversed : !1, i = 0; i < t.length; i++) {
				var a = t[i];
				a.container instanceof es && typeof a.container.value == "number" && a.container.value !== 0 && (n = a.container.value), a.listValue = ic(n, a.container.styles.listStyleType, !0), n += r ? -1 : 1;
			}
		}, el = function(e) {
			var t = new Zc(e, null), n = new Xc(t), r = [];
			return Qc(t, n, n, r), $c(t.container, r), n;
		}, tl = function(e, t) {
			switch (t) {
				case 0: return ol(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
				case 1: return ol(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
				case 2: return ol(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
				default: return ol(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
			}
		}, nl = function(e, t) {
			switch (t) {
				case 0: return ol(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
				case 1: return ol(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
				case 2: return ol(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
				default: return ol(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
			}
		}, rl = function(e, t) {
			switch (t) {
				case 0: return ol(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
				case 1: return ol(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
				case 2: return ol(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
				default: return ol(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
			}
		}, il = function(e, t) {
			switch (t) {
				case 0: return al(e.topLeftBorderStroke, e.topRightBorderStroke);
				case 1: return al(e.topRightBorderStroke, e.bottomRightBorderStroke);
				case 2: return al(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
				default: return al(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
			}
		}, al = function(e, t) {
			var n = [];
			return Ic(e) ? n.push(e.subdivide(.5, !1)) : n.push(e), Ic(t) ? n.push(t.subdivide(.5, !0)) : n.push(t), n;
		}, ol = function(e, t, n, r) {
			var i = [];
			return Ic(e) ? i.push(e.subdivide(.5, !1)) : i.push(e), Ic(n) ? i.push(n.subdivide(.5, !0)) : i.push(n), Ic(r) ? i.push(r.subdivide(.5, !0).reverse()) : i.push(r), Ic(t) ? i.push(t.subdivide(.5, !1).reverse()) : i.push(t), i;
		}, sl = function(e) {
			var t = e.bounds, n = e.styles;
			return t.add(n.borderLeftWidth, n.borderTopWidth, -(n.borderRightWidth + n.borderLeftWidth), -(n.borderTopWidth + n.borderBottomWidth));
		}, cl = function(e) {
			var t = e.styles, n = e.bounds, r = lr(t.paddingLeft, n.width), i = lr(t.paddingRight, n.width), a = lr(t.paddingTop, n.width), o = lr(t.paddingBottom, n.width);
			return n.add(r + t.borderLeftWidth, a + t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth + r + i), -(t.borderTopWidth + t.borderBottomWidth + a + o));
		}, ll = function(e, t) {
			return e === 0 ? t.bounds : e === 2 ? cl(t) : sl(t);
		}, ul = function(e, t) {
			return e === 0 ? t.bounds : e === 2 ? cl(t) : sl(t);
		}, dl = function(e, t, n) {
			var r = ll(hl(e.styles.backgroundOrigin, t), e), i = ul(hl(e.styles.backgroundClip, t), e), a = ml(hl(e.styles.backgroundSize, t), n, r), o = a[0], s = a[1], c = cr(hl(e.styles.backgroundPosition, t), r.width - o, r.height - s);
			return [
				gl(hl(e.styles.backgroundRepeat, t), c, a, r, i),
				Math.round(r.left + c[0]),
				Math.round(r.top + c[1]),
				o,
				s
			];
		}, fl = function(e) {
			return Yn(e) && e.value === oi.AUTO;
		}, pl = function(e) {
			return typeof e == "number";
		}, ml = function(e, t, n) {
			var r = t[0], i = t[1], a = t[2], o = e[0], s = e[1];
			if (!o) return [0, 0];
			if (rr(o) && s && rr(s)) return [lr(o, n.width), lr(s, n.height)];
			var c = pl(a);
			if (Yn(o) && (o.value === oi.CONTAIN || o.value === oi.COVER)) return pl(a) ? n.width / n.height < a == (o.value === oi.COVER) ? [n.height * a, n.height] : [n.width, n.width / a] : [n.width, n.height];
			var l = pl(r), u = pl(i), d = l || u;
			if (fl(o) && (!s || fl(s))) return l && u ? [r, i] : !c && !d ? [n.width, n.height] : d && c ? [l ? r : i * a, u ? i : r / a] : [l ? r : n.width, u ? i : n.height];
			if (c) {
				var f = 0, p = 0;
				return rr(o) ? f = lr(o, n.width) : rr(s) && (p = lr(s, n.height)), fl(o) ? f = p * a : (!s || fl(s)) && (p = f / a), [f, p];
			}
			var m = null, h = null;
			if (rr(o) ? m = lr(o, n.width) : s && rr(s) && (h = lr(s, n.height)), m !== null && (!s || fl(s)) && (h = l && u ? m / r * i : n.height), h !== null && fl(o) && (m = l && u ? h / i * r : n.width), m !== null && h !== null) return [m, h];
			throw Error("Unable to calculate background-size for element");
		}, hl = function(e, t) {
			var n = e[t];
			return n === void 0 ? e[0] : n;
		}, gl = function(e, t, n, r, i) {
			var a = t[0], o = t[1], s = n[0], c = n[1];
			switch (e) {
				case 2: return [
					new q(Math.round(r.left), Math.round(r.top + o)),
					new q(Math.round(r.left + r.width), Math.round(r.top + o)),
					new q(Math.round(r.left + r.width), Math.round(c + r.top + o)),
					new q(Math.round(r.left), Math.round(c + r.top + o))
				];
				case 3: return [
					new q(Math.round(r.left + a), Math.round(r.top)),
					new q(Math.round(r.left + a + s), Math.round(r.top)),
					new q(Math.round(r.left + a + s), Math.round(r.height + r.top)),
					new q(Math.round(r.left + a), Math.round(r.height + r.top))
				];
				case 1: return [
					new q(Math.round(r.left + a), Math.round(r.top + o)),
					new q(Math.round(r.left + a + s), Math.round(r.top + o)),
					new q(Math.round(r.left + a + s), Math.round(r.top + o + c)),
					new q(Math.round(r.left + a), Math.round(r.top + o + c))
				];
				default: return [
					new q(Math.round(i.left), Math.round(i.top)),
					new q(Math.round(i.left + i.width), Math.round(i.top)),
					new q(Math.round(i.left + i.width), Math.round(i.height + i.top)),
					new q(Math.round(i.left), Math.round(i.height + i.top))
				];
			}
		}, _l = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", vl = "Hidden Text", yl = function() {
			function e(e) {
				this._data = {}, this._document = e;
			}
			return e.prototype.parseMetrics = function(e, t) {
				var n = this._document.createElement("div"), r = this._document.createElement("img"), i = this._document.createElement("span"), a = this._document.body;
				n.style.visibility = "hidden", n.style.fontFamily = e, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.style.whiteSpace = "nowrap", a.appendChild(n), r.src = _l, r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", i.style.fontFamily = e, i.style.fontSize = t, i.style.margin = "0", i.style.padding = "0", i.appendChild(this._document.createTextNode(vl)), n.appendChild(i), n.appendChild(r);
				var o = r.offsetTop - i.offsetTop + 2;
				n.removeChild(i), n.appendChild(this._document.createTextNode(vl)), n.style.lineHeight = "normal", r.style.verticalAlign = "super";
				var s = r.offsetTop - n.offsetTop + 2;
				return a.removeChild(n), {
					baseline: o,
					middle: s
				};
			}, e.prototype.getMetrics = function(e, t) {
				var n = e + " " + t;
				return this._data[n] === void 0 && (this._data[n] = this.parseMetrics(e, t)), this._data[n];
			}, e;
		}(), bl = function() {
			function e(e, t) {
				this.context = e, this.options = t;
			}
			return e;
		}(), xl = 1e4, Sl = function(e) {
			t(n, e);
			function n(t, n) {
				var r = e.call(this, t, n) || this;
				return r._activeEffects = [], r.canvas = n.canvas ? n.canvas : document.createElement("canvas"), r.ctx = r.canvas.getContext("2d"), n.canvas || (r.canvas.width = Math.floor(n.width * n.scale), r.canvas.height = Math.floor(n.height * n.scale), r.canvas.style.width = n.width + "px", r.canvas.style.height = n.height + "px"), r.fontMetrics = new yl(document), r.ctx.scale(r.options.scale, r.options.scale), r.ctx.translate(-n.x, -n.y), r.ctx.textBaseline = "bottom", r._activeEffects = [], r.context.logger.debug("Canvas renderer initialized (" + n.width + "x" + n.height + ") with scale " + n.scale), r;
			}
			return n.prototype.applyEffects = function(e) {
				for (var t = this; this._activeEffects.length;) this.popEffect();
				e.forEach(function(e) {
					return t.applyEffect(e);
				});
			}, n.prototype.applyEffect = function(e) {
				this.ctx.save(), qc(e) && (this.ctx.globalAlpha = e.opacity), Gc(e) && (this.ctx.translate(e.offsetX, e.offsetY), this.ctx.transform(e.matrix[0], e.matrix[1], e.matrix[2], e.matrix[3], e.matrix[4], e.matrix[5]), this.ctx.translate(-e.offsetX, -e.offsetY)), Kc(e) && (this.path(e.path), this.ctx.clip()), this._activeEffects.push(e);
			}, n.prototype.popEffect = function() {
				this._activeEffects.pop(), this.ctx.restore();
			}, n.prototype.renderStack = function(e) {
				return r(this, void 0, void 0, function() {
					var t;
					return i(this, function(n) {
						switch (n.label) {
							case 0: return t = e.element.container.styles, t.isVisible() ? [4, this.renderStackContent(e)] : [3, 2];
							case 1: n.sent(), n.label = 2;
							case 2: return [2];
						}
					});
				});
			}, n.prototype.renderNode = function(e) {
				return r(this, void 0, void 0, function() {
					return i(this, function(t) {
						switch (t.label) {
							case 0:
								if (ya(e.container.flags, 16)) debugger;
								return e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
							case 1: return t.sent(), [4, this.renderNodeContent(e)];
							case 2: t.sent(), t.label = 3;
							case 3: return [2];
						}
					});
				});
			}, n.prototype.renderTextWithLetterSpacing = function(e, t, n) {
				var r = this;
				t === 0 ? this.ctx.fillText(e.text, e.bounds.left, e.bounds.top + n) : Ho(e.text).reduce(function(t, i) {
					return r.ctx.fillText(i, t, e.bounds.top + n), t + r.ctx.measureText(i).width;
				}, e.bounds.left);
			}, n.prototype.createFontStyle = function(e) {
				var t = e.fontVariant.filter(function(e) {
					return e === "normal" || e === "small-caps";
				}).join(""), n = Dl(e.fontFamily).join(", "), r = qn(e.fontSize) ? "" + e.fontSize.number + e.fontSize.unit : e.fontSize.number + "px";
				return [
					[
						e.fontStyle,
						t,
						e.fontWeight,
						r,
						n
					].join(" "),
					n,
					r
				];
			}, n.prototype.renderTextNode = function(e, t) {
				return r(this, void 0, void 0, function() {
					var n, r, a, o, s, c, l, u, d = this;
					return i(this, function(i) {
						return n = this.createFontStyle(t), r = n[0], a = n[1], o = n[2], this.ctx.font = r, this.ctx.direction = t.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(a, o), c = s.baseline, l = s.middle, u = t.paintOrder, e.textBounds.forEach(function(e) {
							u.forEach(function(n) {
								switch (n) {
									case 0:
										d.ctx.fillStyle = br(t.color), d.renderTextWithLetterSpacing(e, t.letterSpacing, c);
										var r = t.textShadow;
										r.length && e.text.trim().length && (r.slice(0).reverse().forEach(function(n) {
											d.ctx.shadowColor = br(n.color), d.ctx.shadowOffsetX = n.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = n.offsetY.number * d.options.scale, d.ctx.shadowBlur = n.blur.number, d.renderTextWithLetterSpacing(e, t.letterSpacing, c);
										}), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), t.textDecorationLine.length && (d.ctx.fillStyle = br(t.textDecorationColor || t.color), t.textDecorationLine.forEach(function(t) {
											switch (t) {
												case 1:
													d.ctx.fillRect(e.bounds.left, Math.round(e.bounds.top + c), e.bounds.width, 1);
													break;
												case 2:
													d.ctx.fillRect(e.bounds.left, Math.round(e.bounds.top), e.bounds.width, 1);
													break;
												case 3:
													d.ctx.fillRect(e.bounds.left, Math.ceil(e.bounds.top + l), e.bounds.width, 1);
													break;
											}
										}));
										break;
									case 1:
										t.webkitTextStrokeWidth && e.text.trim().length && (d.ctx.strokeStyle = br(t.webkitTextStrokeColor), d.ctx.lineWidth = t.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(e.text, e.bounds.left, e.bounds.top + c)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
										break;
								}
							});
						}), [2];
					});
				});
			}, n.prototype.renderReplacedElement = function(e, t, n) {
				if (n && e.intrinsicWidth > 0 && e.intrinsicHeight > 0) {
					var r = cl(e), i = Vc(t);
					this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, e.intrinsicWidth, e.intrinsicHeight, r.left, r.top, r.width, r.height), this.ctx.restore();
				}
			}, n.prototype.renderNodeContent = function(e) {
				return r(this, void 0, void 0, function() {
					var t, r, a, s, c, l, u, u, d, f, p, m, h, g, _, v, y, b, x, u, S, h, v;
					return i(this, function(i) {
						switch (i.label) {
							case 0: this.applyEffects(e.getEffects(4)), t = e.container, r = e.curves, a = t.styles, s = 0, c = t.textNodes, i.label = 1;
							case 1: return s < c.length ? (l = c[s], [4, this.renderTextNode(l, a)]) : [3, 4];
							case 2: i.sent(), i.label = 3;
							case 3: return s++, [3, 1];
							case 4:
								if (!(t instanceof Zo)) return [3, 8];
								i.label = 5;
							case 5: return i.trys.push([
								5,
								7,
								,
								8
							]), [4, this.context.cache.match(t.src)];
							case 6: return u = i.sent(), this.renderReplacedElement(t, r, u), [3, 8];
							case 7: return i.sent(), this.context.logger.error("Error loading image " + t.src), [3, 8];
							case 8:
								if (t instanceof Qo && this.renderReplacedElement(t, r, t.canvas), !(t instanceof $o)) return [3, 12];
								i.label = 9;
							case 9: return i.trys.push([
								9,
								11,
								,
								12
							]), [4, this.context.cache.match(t.svg)];
							case 10: return u = i.sent(), this.renderReplacedElement(t, r, u), [3, 12];
							case 11: return i.sent(), this.context.logger.error("Error loading svg " + t.svg.substring(0, 255)), [3, 12];
							case 12: return t instanceof ps && t.tree ? (d = new n(this.context, {
								scale: this.options.scale,
								backgroundColor: t.backgroundColor,
								x: 0,
								y: 0,
								width: t.width,
								height: t.height
							}), [4, d.render(t.tree)]) : [3, 14];
							case 13: f = i.sent(), t.width && t.height && this.ctx.drawImage(f, 0, 0, t.width, t.height, t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height), i.label = 14;
							case 14:
								if (t instanceof us && (p = Math.min(t.bounds.width, t.bounds.height), t.type === os ? t.checked && (this.ctx.save(), this.path([
									new q(t.bounds.left + p * .39363, t.bounds.top + p * .79),
									new q(t.bounds.left + p * .16, t.bounds.top + p * .5549),
									new q(t.bounds.left + p * .27347, t.bounds.top + p * .44071),
									new q(t.bounds.left + p * .39694, t.bounds.top + p * .5649),
									new q(t.bounds.left + p * .72983, t.bounds.top + p * .23),
									new q(t.bounds.left + p * .84, t.bounds.top + p * .34085),
									new q(t.bounds.left + p * .39363, t.bounds.top + p * .79)
								]), this.ctx.fillStyle = br(ls), this.ctx.fill(), this.ctx.restore()) : t.type === ss && t.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(t.bounds.left + p / 2, t.bounds.top + p / 2, p / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = br(ls), this.ctx.fill(), this.ctx.restore())), Cl(t) && t.value.length) {
									switch (m = this.createFontStyle(a), h = m[0], g = m[1], _ = this.fontMetrics.getMetrics(h, g).baseline, this.ctx.font = h, this.ctx.fillStyle = br(a.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Tl(t.styles.textAlign), v = cl(t), y = 0, t.styles.textAlign) {
										case 1:
											y += v.width / 2;
											break;
										case 2:
											y += v.width;
											break;
									}
									b = v.add(y, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([
										new q(v.left, v.top),
										new q(v.left + v.width, v.top),
										new q(v.left + v.width, v.top + v.height),
										new q(v.left, v.top + v.height)
									]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Ro(t.value, b), a.letterSpacing, _), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
								}
								if (!ya(t.styles.display, 2048)) return [3, 20];
								if (t.styles.listStyleImage === null) return [3, 19];
								if (x = t.styles.listStyleImage, x.type !== 0) return [3, 18];
								u = void 0, S = x.url, i.label = 15;
							case 15: return i.trys.push([
								15,
								17,
								,
								18
							]), [4, this.context.cache.match(S)];
							case 16: return u = i.sent(), this.ctx.drawImage(u, t.bounds.left - (u.width + 10), t.bounds.top), [3, 18];
							case 17: return i.sent(), this.context.logger.error("Error loading list-style-image " + S), [3, 18];
							case 18: return [3, 20];
							case 19: e.listValue && t.styles.listStyleType !== -1 && (h = this.createFontStyle(a)[0], this.ctx.font = h, this.ctx.fillStyle = br(a.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new o(t.bounds.left, t.bounds.top + lr(t.styles.paddingTop, t.bounds.width), t.bounds.width, Ii(a.lineHeight, a.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Ro(e.listValue, v), a.letterSpacing, Ii(a.lineHeight, a.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), i.label = 20;
							case 20: return [2];
						}
					});
				});
			}, n.prototype.renderStackContent = function(e) {
				return r(this, void 0, void 0, function() {
					var t, n, r, a, o, r, s, c, r, l, u, r, d, f, r, p, m, r, h, g, r;
					return i(this, function(i) {
						switch (i.label) {
							case 0:
								if (ya(e.element.container.flags, 16)) debugger;
								return [4, this.renderNodeBackgroundAndBorders(e.element)];
							case 1: i.sent(), t = 0, n = e.negativeZIndex, i.label = 2;
							case 2: return t < n.length ? (r = n[t], [4, this.renderStack(r)]) : [3, 5];
							case 3: i.sent(), i.label = 4;
							case 4: return t++, [3, 2];
							case 5: return [4, this.renderNodeContent(e.element)];
							case 6: i.sent(), a = 0, o = e.nonInlineLevel, i.label = 7;
							case 7: return a < o.length ? (r = o[a], [4, this.renderNode(r)]) : [3, 10];
							case 8: i.sent(), i.label = 9;
							case 9: return a++, [3, 7];
							case 10: s = 0, c = e.nonPositionedFloats, i.label = 11;
							case 11: return s < c.length ? (r = c[s], [4, this.renderStack(r)]) : [3, 14];
							case 12: i.sent(), i.label = 13;
							case 13: return s++, [3, 11];
							case 14: l = 0, u = e.nonPositionedInlineLevel, i.label = 15;
							case 15: return l < u.length ? (r = u[l], [4, this.renderStack(r)]) : [3, 18];
							case 16: i.sent(), i.label = 17;
							case 17: return l++, [3, 15];
							case 18: d = 0, f = e.inlineLevel, i.label = 19;
							case 19: return d < f.length ? (r = f[d], [4, this.renderNode(r)]) : [3, 22];
							case 20: i.sent(), i.label = 21;
							case 21: return d++, [3, 19];
							case 22: p = 0, m = e.zeroOrAutoZIndexOrTransformedOrOpacity, i.label = 23;
							case 23: return p < m.length ? (r = m[p], [4, this.renderStack(r)]) : [3, 26];
							case 24: i.sent(), i.label = 25;
							case 25: return p++, [3, 23];
							case 26: h = 0, g = e.positiveZIndex, i.label = 27;
							case 27: return h < g.length ? (r = g[h], [4, this.renderStack(r)]) : [3, 30];
							case 28: i.sent(), i.label = 29;
							case 29: return h++, [3, 27];
							case 30: return [2];
						}
					});
				});
			}, n.prototype.mask = function(e) {
				this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(e.slice(0).reverse()), this.ctx.closePath();
			}, n.prototype.path = function(e) {
				this.ctx.beginPath(), this.formatPath(e), this.ctx.closePath();
			}, n.prototype.formatPath = function(e) {
				var t = this;
				e.forEach(function(e, n) {
					var r = Ic(e) ? e.start : e;
					n === 0 ? t.ctx.moveTo(r.x, r.y) : t.ctx.lineTo(r.x, r.y), Ic(e) && t.ctx.bezierCurveTo(e.startControl.x, e.startControl.y, e.endControl.x, e.endControl.y, e.end.x, e.end.y);
				});
			}, n.prototype.renderRepeat = function(e, t, n, r) {
				this.path(e), this.ctx.fillStyle = t, this.ctx.translate(n, r), this.ctx.fill(), this.ctx.translate(-n, -r);
			}, n.prototype.resizeImage = function(e, t, n) {
				if (e.width === t && e.height === n) return e;
				var r = (this.canvas.ownerDocument ?? document).createElement("canvas");
				return r.width = Math.max(1, t), r.height = Math.max(1, n), r.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, t, n), r;
			}, n.prototype.renderBackgroundImage = function(e) {
				return r(this, void 0, void 0, function() {
					var t, n, r, a, o, s;
					return i(this, function(c) {
						switch (c.label) {
							case 0: t = e.styles.backgroundImage.length - 1, n = function(n) {
								var a, o, s, c, l, u, d, f, p, m, c, l, u, d, f, h, g, _, v, y, b, x, S, C, p, w, c, T, E, d, f, D, l, u, O, k, A, j, ee, M, N, P;
								return i(this, function(i) {
									switch (i.label) {
										case 0:
											if (n.type !== 0) return [3, 5];
											a = void 0, o = n.url, i.label = 1;
										case 1: return i.trys.push([
											1,
											3,
											,
											4
										]), [4, r.context.cache.match(o)];
										case 2: return a = i.sent(), [3, 4];
										case 3: return i.sent(), r.context.logger.error("Error loading background-image " + o), [3, 4];
										case 4: return a && (s = dl(e, t, [
											a.width,
											a.height,
											a.width / a.height
										]), c = s[0], l = s[1], u = s[2], d = s[3], f = s[4], p = r.ctx.createPattern(r.resizeImage(a, d, f), "repeat"), r.renderRepeat(c, p, l, u)), [3, 6];
										case 5: Zr(n) ? (m = dl(e, t, [
											null,
											null,
											null
										]), c = m[0], l = m[1], u = m[2], d = m[3], f = m[4], h = Pr(n.angle, d, f), g = h[0], _ = h[1], v = h[2], y = h[3], b = h[4], x = document.createElement("canvas"), x.width = d, x.height = f, S = x.getContext("2d"), C = S.createLinearGradient(_, y, v, b), Mr(n.stops, g).forEach(function(e) {
											return C.addColorStop(e.stop, br(e.color));
										}), S.fillStyle = C, S.fillRect(0, 0, d, f), d > 0 && f > 0 && (p = r.ctx.createPattern(x, "repeat"), r.renderRepeat(c, p, l, u))) : B(n) && (w = dl(e, t, [
											null,
											null,
											null
										]), c = w[0], T = w[1], E = w[2], d = w[3], f = w[4], D = n.position.length === 0 ? [or] : n.position, l = lr(D[0], d), u = lr(D[D.length - 1], f), O = Lr(n, l, u, d, f), k = O[0], A = O[1], k > 0 && A > 0 && (j = r.ctx.createRadialGradient(T + l, E + u, 0, T + l, E + u, k), Mr(n.stops, k * 2).forEach(function(e) {
											return j.addColorStop(e.stop, br(e.color));
										}), r.path(c), r.ctx.fillStyle = j, k === A ? r.ctx.fill() : (ee = e.bounds.left + .5 * e.bounds.width, M = e.bounds.top + .5 * e.bounds.height, N = A / k, P = 1 / N, r.ctx.save(), r.ctx.translate(ee, M), r.ctx.transform(1, 0, 0, N, 0, 0), r.ctx.translate(-ee, -M), r.ctx.fillRect(T, P * (E - M) + M, d, f * P), r.ctx.restore()))), i.label = 6;
										case 6: return t--, [2];
									}
								});
							}, r = this, a = 0, o = e.styles.backgroundImage.slice(0).reverse(), c.label = 1;
							case 1: return a < o.length ? (s = o[a], [5, n(s)]) : [3, 4];
							case 2: c.sent(), c.label = 3;
							case 3: return a++, [3, 1];
							case 4: return [2];
						}
					});
				});
			}, n.prototype.renderSolidBorder = function(e, t, n) {
				return r(this, void 0, void 0, function() {
					return i(this, function(r) {
						return this.path(tl(n, t)), this.ctx.fillStyle = br(e), this.ctx.fill(), [2];
					});
				});
			}, n.prototype.renderDoubleBorder = function(e, t, n, a) {
				return r(this, void 0, void 0, function() {
					var r, o;
					return i(this, function(i) {
						switch (i.label) {
							case 0: return t < 3 ? [4, this.renderSolidBorder(e, n, a)] : [3, 2];
							case 1: return i.sent(), [2];
							case 2: return r = nl(a, n), this.path(r), this.ctx.fillStyle = br(e), this.ctx.fill(), o = rl(a, n), this.path(o), this.ctx.fill(), [2];
						}
					});
				});
			}, n.prototype.renderNodeBackgroundAndBorders = function(e) {
				return r(this, void 0, void 0, function() {
					var t, n, r, a, o, s, c, l, u = this;
					return i(this, function(i) {
						switch (i.label) {
							case 0: return this.applyEffects(e.getEffects(2)), t = e.container.styles, n = !yr(t.backgroundColor) || t.backgroundImage.length, r = [
								{
									style: t.borderTopStyle,
									color: t.borderTopColor,
									width: t.borderTopWidth
								},
								{
									style: t.borderRightStyle,
									color: t.borderRightColor,
									width: t.borderRightWidth
								},
								{
									style: t.borderBottomStyle,
									color: t.borderBottomColor,
									width: t.borderBottomWidth
								},
								{
									style: t.borderLeftStyle,
									color: t.borderLeftColor,
									width: t.borderLeftWidth
								}
							], a = wl(hl(t.backgroundClip, 0), e.curves), n || t.boxShadow.length ? (this.ctx.save(), this.path(a), this.ctx.clip(), yr(t.backgroundColor) || (this.ctx.fillStyle = br(t.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(e.container)]) : [3, 2];
							case 1: i.sent(), this.ctx.restore(), t.boxShadow.slice(0).reverse().forEach(function(t) {
								u.ctx.save();
								var n = zc(e.curves), r = t.inset ? 0 : xl, i = Yc(n, -r + (t.inset ? 1 : -1) * t.spread.number, (t.inset ? 1 : -1) * t.spread.number, t.spread.number * (t.inset ? -2 : 2), t.spread.number * (t.inset ? -2 : 2));
								t.inset ? (u.path(n), u.ctx.clip(), u.mask(i)) : (u.mask(n), u.ctx.clip(), u.path(i)), u.ctx.shadowOffsetX = t.offsetX.number + r, u.ctx.shadowOffsetY = t.offsetY.number, u.ctx.shadowColor = br(t.color), u.ctx.shadowBlur = t.blur.number, u.ctx.fillStyle = t.inset ? br(t.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
							}), i.label = 2;
							case 2: o = 0, s = 0, c = r, i.label = 3;
							case 3: return s < c.length ? (l = c[s], l.style !== 0 && !yr(l.color) && l.width > 0 ? l.style === 2 ? [4, this.renderDashedDottedBorder(l.color, l.width, o, e.curves, 2)] : [3, 5] : [3, 11]) : [3, 13];
							case 4: return i.sent(), [3, 11];
							case 5: return l.style === 3 ? [4, this.renderDashedDottedBorder(l.color, l.width, o, e.curves, 3)] : [3, 7];
							case 6: return i.sent(), [3, 11];
							case 7: return l.style === 4 ? [4, this.renderDoubleBorder(l.color, l.width, o, e.curves)] : [3, 9];
							case 8: return i.sent(), [3, 11];
							case 9: return [4, this.renderSolidBorder(l.color, o, e.curves)];
							case 10: i.sent(), i.label = 11;
							case 11: o++, i.label = 12;
							case 12: return s++, [3, 3];
							case 13: return [2];
						}
					});
				});
			}, n.prototype.renderDashedDottedBorder = function(e, t, n, a, o) {
				return r(this, void 0, void 0, function() {
					var r, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, b, x;
					return i(this, function(i) {
						return this.ctx.save(), r = il(a, n), s = tl(a, n), o === 2 && (this.path(s), this.ctx.clip()), Ic(s[0]) ? (c = s[0].start.x, l = s[0].start.y) : (c = s[0].x, l = s[0].y), Ic(s[1]) ? (u = s[1].end.x, d = s[1].end.y) : (u = s[1].x, d = s[1].y), f = Math.abs(n === 0 || n === 2 ? c - u : l - d), this.ctx.beginPath(), o === 3 ? this.formatPath(r) : this.formatPath(s.slice(0, 2)), p = t < 3 ? t * 3 : t * 2, m = t < 3 ? t * 2 : t, o === 3 && (p = t, m = t), h = !0, f <= p * 2 ? h = !1 : f <= p * 2 + m ? (g = f / (2 * p + m), p *= g, m *= g) : (_ = Math.floor((f + m) / (p + m)), v = (f - _ * p) / (_ - 1), y = (f - (_ + 1) * p) / _, m = y <= 0 || Math.abs(m - v) < Math.abs(m - y) ? v : y), h && (o === 3 ? this.ctx.setLineDash([0, p + m]) : this.ctx.setLineDash([p, m])), o === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = t) : this.ctx.lineWidth = t * 2 + 1.1, this.ctx.strokeStyle = br(e), this.ctx.stroke(), this.ctx.setLineDash([]), o === 2 && (Ic(s[0]) && (b = s[3], x = s[0], this.ctx.beginPath(), this.formatPath([new q(b.end.x, b.end.y), new q(x.start.x, x.start.y)]), this.ctx.stroke()), Ic(s[1]) && (b = s[1], x = s[2], this.ctx.beginPath(), this.formatPath([new q(b.end.x, b.end.y), new q(x.start.x, x.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2];
					});
				});
			}, n.prototype.render = function(e) {
				return r(this, void 0, void 0, function() {
					var t;
					return i(this, function(n) {
						switch (n.label) {
							case 0: return this.options.backgroundColor && (this.ctx.fillStyle = br(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), t = el(e), [4, this.renderStack(t)];
							case 1: return n.sent(), this.applyEffects([]), [2, this.canvas];
						}
					});
				});
			}, n;
		}(bl), Cl = function(e) {
			return e instanceof fs || e instanceof ds ? !0 : e instanceof us && e.type !== ss && e.type !== os;
		}, wl = function(e, t) {
			switch (e) {
				case 0: return zc(t);
				case 2: return Bc(t);
				default: return Vc(t);
			}
		}, Tl = function(e) {
			switch (e) {
				case 1: return "center";
				case 2: return "right";
				default: return "left";
			}
		}, El = ["-apple-system", "system-ui"], Dl = function(e) {
			return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function(e) {
				return El.indexOf(e) === -1;
			}) : e;
		}, Ol = function(e) {
			t(n, e);
			function n(t, n) {
				var r = e.call(this, t, n) || this;
				return r.canvas = n.canvas ? n.canvas : document.createElement("canvas"), r.ctx = r.canvas.getContext("2d"), r.options = n, r.canvas.width = Math.floor(n.width * n.scale), r.canvas.height = Math.floor(n.height * n.scale), r.canvas.style.width = n.width + "px", r.canvas.style.height = n.height + "px", r.ctx.scale(r.options.scale, r.options.scale), r.ctx.translate(-n.x, -n.y), r.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + n.width + "x" + n.height + " at " + n.x + "," + n.y + ") with scale " + n.scale), r;
			}
			return n.prototype.render = function(e) {
				return r(this, void 0, void 0, function() {
					var t, n;
					return i(this, function(r) {
						switch (r.label) {
							case 0: return t = Fo(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, e), [4, kl(t)];
							case 1: return n = r.sent(), this.options.backgroundColor && (this.ctx.fillStyle = br(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
						}
					});
				});
			}, n;
		}(bl), kl = function(e) {
			return new Promise(function(t, n) {
				var r = new Image();
				r.onload = function() {
					t(r);
				}, r.onerror = n, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e));
			});
		}, Al = function() {
			function e(e) {
				var t = e.id, n = e.enabled;
				this.id = t, this.enabled = n, this.start = Date.now();
			}
			return e.prototype.debug = function() {
				var e = [...arguments];
				this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, a([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
			}, e.prototype.getTime = function() {
				return Date.now() - this.start;
			}, e.prototype.info = function() {
				var e = [...arguments];
				this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, a([this.id, this.getTime() + "ms"], e));
			}, e.prototype.warn = function() {
				var e = [...arguments];
				this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, a([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
			}, e.prototype.error = function() {
				var e = [...arguments];
				this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, a([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
			}, e.instances = {}, e;
		}(), jl = function() {
			function e(t, n) {
				this.windowBounds = n, this.instanceName = "#" + e.instanceCount++, this.logger = new Al({
					id: this.instanceName,
					enabled: t.logging
				}), this.cache = t.cache ?? new Tc(this, t);
			}
			return e.instanceCount = 1, e;
		}(), Y = function(e, t) {
			return t === void 0 && (t = {}), Ml(e, t);
		};
		typeof window < "u" && wc.setContext(window);
		var Ml = function(e, t) {
			return r(void 0, void 0, void 0, function() {
				var r, a, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, D;
				return i(this, function(i) {
					switch (i.label) {
						case 0:
							if (!e || typeof e != "object") return [2, Promise.reject("Invalid element provided as first argument")];
							if (r = e.ownerDocument, !r) throw Error("Element is not attached to a Document");
							if (a = r.defaultView, !a) throw Error("Document is not attached to a Window");
							return l = {
								allowTaint: t.allowTaint ?? !1,
								imageTimeout: t.imageTimeout ?? 15e3,
								proxy: t.proxy,
								useCORS: t.useCORS ?? !1
							}, u = n({
								logging: t.logging ?? !0,
								cache: t.cache
							}, l), d = {
								windowWidth: t.windowWidth ?? a.innerWidth,
								windowHeight: t.windowHeight ?? a.innerHeight,
								scrollX: t.scrollX ?? a.pageXOffset,
								scrollY: t.scrollY ?? a.pageYOffset
							}, f = new o(d.scrollX, d.scrollY, d.windowWidth, d.windowHeight), p = new jl(u, f), m = t.foreignObjectRendering ?? !1, h = {
								allowTaint: t.allowTaint ?? !1,
								onclone: t.onclone,
								ignoreElements: t.ignoreElements,
								inlineImages: m,
								copyStyles: m
							}, p.logger.debug("Starting document clone with size " + f.width + "x" + f.height + " scrolled to " + -f.left + "," + -f.top), g = new oc(p, e, h), _ = g.clonedReferenceElement, _ ? [4, g.toIFrame(r, f)] : [2, Promise.reject("Unable to find element in cloned iframe")];
						case 1: return v = i.sent(), y = ks(_) || Ds(_) ? c(_.ownerDocument) : s(p, _), b = y.width, x = y.height, S = y.left, C = y.top, w = Nl(p, _, t.backgroundColor), T = {
							canvas: t.canvas,
							backgroundColor: w,
							scale: t.scale ?? a.devicePixelRatio ?? 1,
							x: (t.x ?? 0) + S,
							y: (t.y ?? 0) + C,
							width: t.width ?? Math.ceil(b),
							height: t.height ?? Math.ceil(x)
						}, m ? (p.logger.debug("Document cloned, using foreign object rendering"), D = new Ol(p, T), [4, D.render(_)]) : [3, 3];
						case 2: return E = i.sent(), [3, 5];
						case 3: return p.logger.debug("Document cloned, element located at " + S + "," + C + " with size " + b + "x" + x + " using computed rendering"), p.logger.debug("Starting DOM parsing"), O = _s(p, _), w === O.styles.backgroundColor && (O.styles.backgroundColor = Or.TRANSPARENT), p.logger.debug("Starting renderer for element at " + T.x + "," + T.y + " with size " + T.width + "x" + T.height), D = new Sl(p, T), [4, D.render(O)];
						case 4: E = i.sent(), i.label = 5;
						case 5: return (t.removeContainer ?? !0) && (oc.destroy(v) || p.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), p.logger.debug("Finished rendering"), [2, E];
					}
				});
			});
		}, Nl = function(e, t, n) {
			var r = t.ownerDocument, i = r.documentElement ? Dr(e, getComputedStyle(r.documentElement).backgroundColor) : Or.TRANSPARENT, a = r.body ? Dr(e, getComputedStyle(r.body).backgroundColor) : Or.TRANSPARENT, o = typeof n == "string" ? Dr(e, n) : n === null ? Or.TRANSPARENT : 4294967295;
			return t === r.documentElement ? yr(i) ? yr(a) ? o : a : i : o;
		};
		return Y;
	}));
}))();
var Cd = function(e) {
	function t(e, n, r, i) {
		var a;
		return g(this, t), a = k(this, t, [e]), a.currentTime = r, a.timelineTime = i, a.target = n, a.type = "finish", a.bubbles = !1, a.currentTarget = n, a.defaultPrevented = !1, a.eventPhase = a.AT_TARGET, a.timeStamp = Date.now(), a.currentTime = r, a.timelineTime = i, a;
	}
	return j(t, e), v(t);
}(vl), wd = 0, Td = function() {
	function e(t, n) {
		g(this, e), this.currentTimePending = !1, this._idle = !0, this._paused = !1, this._finishedFlag = !0, this._currentTime = 0, this._playbackRate = 1, this._inTimeline = !0, this.effect = t, t.animation = this, this.timeline = n, this.id = `${wd++}`, this._inEffect = !!this.effect.update(0), this._totalDuration = Number(this.effect?.getComputedTiming().endTime), this._holdTime = 0, this._paused = !1, this.oldPlayState = "idle", this.updatePromises();
	}
	return v(e, [
		{
			key: "pending",
			get: function() {
				return this._startTime === null && !this._paused && this.playbackRate !== 0 || this.currentTimePending;
			}
		},
		{
			key: "playState",
			get: function() {
				return this._idle ? "idle" : this._isFinished ? "finished" : this._paused ? "paused" : "running";
			}
		},
		{
			key: "ready",
			get: function() {
				var e = this;
				return this.readyPromise || (this.timeline.animationsWithPromises.indexOf(this) === -1 && this.timeline.animationsWithPromises.push(this), this.readyPromise = new Promise(function(t, n) {
					e.resolveReadyPromise = function() {
						t(e);
					}, e.rejectReadyPromise = function() {
						n(Error());
					};
				}), this.pending || this.resolveReadyPromise()), this.readyPromise;
			}
		},
		{
			key: "finished",
			get: function() {
				var e = this;
				return this.finishedPromise || (this.timeline.animationsWithPromises.indexOf(this) === -1 && this.timeline.animationsWithPromises.push(this), this.finishedPromise = new Promise(function(t, n) {
					e.resolveFinishedPromise = function() {
						t(e);
					}, e.rejectFinishedPromise = function() {
						n(Error());
					};
				}), this.playState === "finished" && this.resolveFinishedPromise()), this.finishedPromise;
			}
		},
		{
			key: "currentTime",
			get: function() {
				return this.updatePromises(), this._idle || this.currentTimePending ? null : this._currentTime;
			},
			set: function(e) {
				e = Number(e), !isNaN(e) && (this.timeline.restart(), !this._paused && this._startTime !== null && (this._startTime = Number(this.timeline?.currentTime) - e / this.playbackRate), this.currentTimePending = !1, this._currentTime !== e && (this._idle && (this._idle = !1, this._paused = !0), this.tickCurrentTime(e, !0), this.timeline.applyDirtiedAnimation(this)));
			}
		},
		{
			key: "startTime",
			get: function() {
				return this._startTime;
			},
			set: function(e) {
				if (e !== null) {
					if (this.updatePromises(), e = Number(e), isNaN(e) || this._paused || this._idle) return;
					this._startTime = e, this.tickCurrentTime((Number(this.timeline.currentTime) - this._startTime) * this.playbackRate), this.timeline.applyDirtiedAnimation(this), this.updatePromises();
				}
			}
		},
		{
			key: "playbackRate",
			get: function() {
				return this._playbackRate;
			},
			set: function(e) {
				if (e !== this._playbackRate) {
					this.updatePromises();
					var t = this.currentTime;
					this._playbackRate = e, this.startTime = null, this.playState !== "paused" && this.playState !== "idle" && (this._finishedFlag = !1, this._idle = !1, this.ensureAlive(), this.timeline.applyDirtiedAnimation(this)), t !== null && (this.currentTime = t), this.updatePromises();
				}
			}
		},
		{
			key: "_isFinished",
			get: function() {
				return !this._idle && (this._playbackRate > 0 && Number(this._currentTime) >= this._totalDuration || this._playbackRate < 0 && Number(this._currentTime) <= 0);
			}
		},
		{
			key: "totalDuration",
			get: function() {
				return this._totalDuration;
			}
		},
		{
			key: "_needsTick",
			get: function() {
				return this.pending || this.playState === "running" || !this._finishedFlag;
			}
		},
		{
			key: "updatePromises",
			value: function() {
				var e;
				if ((e = this.effect.target) != null && e.destroyed) return this.readyPromise = void 0, this.finishedPromise = void 0, !1;
				var t = this.oldPlayState, n = this.pending ? "pending" : this.playState;
				return this.readyPromise && n !== t && (n === "idle" ? (this.rejectReadyPromise(), this.readyPromise = void 0) : t === "pending" ? this.resolveReadyPromise() : n === "pending" && (this.readyPromise = void 0)), this.finishedPromise && n !== t && (n === "idle" ? (this.rejectFinishedPromise(), this.finishedPromise = void 0) : n === "finished" ? this.resolveFinishedPromise() : t === "finished" && (this.finishedPromise = void 0)), this.oldPlayState = n, this.readyPromise || this.finishedPromise;
			}
		},
		{
			key: "play",
			value: function() {
				this.updatePromises(), this._paused = !1, (this._isFinished || this._idle) && (this.rewind(), this._startTime = null), this._finishedFlag = !1, this._idle = !1, this.ensureAlive(), this.timeline.applyDirtiedAnimation(this), this.timeline.animations.indexOf(this) === -1 && this.timeline.animations.push(this), this.updatePromises();
			}
		},
		{
			key: "pause",
			value: function() {
				this.updatePromises(), this.currentTime && (this._holdTime = this.currentTime), !this._isFinished && !this._paused && !this._idle ? this.currentTimePending = !0 : this._idle &&= (this.rewind(), !1), this._startTime = null, this._paused = !0, this.updatePromises();
			}
		},
		{
			key: "finish",
			value: function() {
				this.updatePromises(), !this._idle && (this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0, this._startTime = this._totalDuration - this.currentTime, this.currentTimePending = !1, this.timeline.applyDirtiedAnimation(this), this.updatePromises());
			}
		},
		{
			key: "cancel",
			value: function() {
				var e = this;
				if (this.updatePromises(), this._inEffect && (this._inEffect = !1, this._idle = !0, this._paused = !1, this._finishedFlag = !0, this._currentTime = null, this._startTime = null, this.effect.update(null), this.timeline.applyDirtiedAnimation(this), this.updatePromises(), this.oncancel)) {
					var t = new Cd(null, this, this.currentTime, null);
					setTimeout(function() {
						e.oncancel(t);
					});
				}
			}
		},
		{
			key: "reverse",
			value: function() {
				this.updatePromises();
				var e = this.currentTime;
				this.playbackRate *= -1, this.play(), e !== null && (this.currentTime = e), this.updatePromises();
			}
		},
		{
			key: "updatePlaybackRate",
			value: function(e) {
				this.playbackRate = e;
			}
		},
		{
			key: "targetAnimations",
			value: function() {
				return (this.effect?.target).getAnimations();
			}
		},
		{
			key: "markTarget",
			value: function() {
				var e = this.targetAnimations();
				e.indexOf(this) === -1 && e.push(this);
			}
		},
		{
			key: "unmarkTarget",
			value: function() {
				var e = this.targetAnimations(), t = e.indexOf(this);
				t !== -1 && e.splice(t, 1);
			}
		},
		{
			key: "tick",
			value: function(e, t) {
				!this._idle && !this._paused && (this._startTime === null ? t && (this.startTime = e - this._currentTime / this.playbackRate) : this._isFinished || this.tickCurrentTime((e - this._startTime) * this.playbackRate)), t && (this.currentTimePending = !1, this.fireEvents(e));
			}
		},
		{
			key: "rewind",
			value: function() {
				if (this.playbackRate >= 0) this.currentTime = 0;
				else if (this._totalDuration < Infinity) this.currentTime = this._totalDuration;
				else throw Error("Unable to rewind negative playback rate animation with infinite duration");
			}
		},
		{
			key: "persist",
			value: function() {
				throw Error(pi);
			}
		},
		{
			key: "addEventListener",
			value: function(e, t, n) {
				throw Error(pi);
			}
		},
		{
			key: "removeEventListener",
			value: function(e, t, n) {
				throw Error(pi);
			}
		},
		{
			key: "dispatchEvent",
			value: function(e) {
				throw Error(pi);
			}
		},
		{
			key: "commitStyles",
			value: function() {
				throw Error(pi);
			}
		},
		{
			key: "ensureAlive",
			value: function() {
				if (this.playbackRate < 0 && this.currentTime === 0) {
					var e;
					this._inEffect = !!((e = this.effect) != null && e.update(-1));
				} else {
					var t;
					this._inEffect = !!((t = this.effect) != null && t.update(this.currentTime));
				}
				!this._inTimeline && (this._inEffect || !this._finishedFlag) && (this._inTimeline = !0, this.timeline.animations.push(this));
			}
		},
		{
			key: "tickCurrentTime",
			value: function(e, t) {
				e !== this._currentTime && (this._currentTime = e, this._isFinished && !t && (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0), this.ensureAlive());
			}
		},
		{
			key: "fireEvents",
			value: function(e) {
				var t = this;
				if (this._isFinished) {
					if (!this._finishedFlag) {
						if (this.onfinish) {
							var n = new Cd(null, this, this.currentTime, e);
							setTimeout(function() {
								t.onfinish && t.onfinish(n);
							});
						}
						this._finishedFlag = !0;
					}
				} else {
					if (this.onframe && this.playState === "running") {
						var r = new Cd(null, this, this.currentTime, e);
						this.onframe(r);
					}
					this._finishedFlag = !1;
				}
			}
		}
	]);
}(), Ed = 4, Dd = .001, Od = 1e-7, kd = 10, Ad = 11, jd = 1 / (Ad - 1), Md = typeof Float32Array == "function", Nd = function(e, t) {
	return 1 - 3 * t + 3 * e;
}, Pd = function(e, t) {
	return 3 * t - 6 * e;
}, Fd = function(e) {
	return 3 * e;
}, Id = function(e, t, n) {
	return ((Nd(t, n) * e + Pd(t, n)) * e + Fd(t)) * e;
}, Ld = function(e, t, n) {
	return 3 * Nd(t, n) * e * e + 2 * Pd(t, n) * e + Fd(t);
}, Rd = function(e, t, n, r, i) {
	var a, o, s = 0;
	do
		o = t + (n - t) / 2, a = Id(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > Od && ++s < kd);
	return o;
}, zd = function(e, t, n, r) {
	for (var i = 0; i < Ed; ++i) {
		var a = Ld(t, n, r);
		if (a === 0) return t;
		var o = Id(t, n, r) - e;
		t -= o / a;
	}
	return t;
}, Bd = function(e, t, n, r) {
	if (!(e >= 0 && e <= 1 && n >= 0 && n <= 1)) throw Error("bezier x values must be in [0, 1] range");
	if (e === t && n === r) return function(e) {
		return e;
	};
	for (var i = Md ? new Float32Array(Ad) : Array(Ad), a = 0; a < Ad; ++a) i[a] = Id(a * jd, e, n);
	var o = function(t) {
		for (var r = 0, a = 1, o = Ad - 1; a !== o && i[a] <= t; ++a) r += jd;
		--a;
		var s = (t - i[a]) / (i[a + 1] - i[a]), c = r + s * jd, l = Ld(c, e, n);
		return l >= Dd ? zd(t, c, e, n) : l === 0 ? c : Rd(t, r, r + jd, e, n);
	};
	return function(e) {
		return e === 0 || e === 1 ? e : Id(o(e), t, r);
	};
}, Vd = function(e) {
	return e = e.replace(/([A-Z])/g, function(e) {
		return `-${e.toLowerCase()}`;
	}), e.charAt(0) === "-" ? e.substring(1) : e;
}, Hd = function(e) {
	return e ** 2;
}, Ud = function(e) {
	return e ** 3;
}, Wd = function(e) {
	return e ** 4;
}, Gd = function(e) {
	return e ** 5;
}, Kd = function(e) {
	return e ** 6;
}, qd = function(e) {
	return 1 - Math.cos(e * Math.PI / 2);
}, Jd = function(e) {
	return 1 - Math.sqrt(1 - e * e);
}, Yd = function(e) {
	return e * e * (3 * e - 2);
}, Xd = function(e) {
	for (var t, n = 4; e < ((t = 2 ** --n) - 1) / 11;);
	return 1 / 4 ** (3 - n) - 7.5625 * ((t * 3 - 2) / 22 - e) ** 2;
}, Zd = function(e) {
	var t = P(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], 2), n = t[0], r = n === void 0 ? 1 : n, i = t[1], a = i === void 0 ? .5 : i, o = rn(Number(r), 1, 10), s = rn(Number(a), .1, 2);
	return e === 0 || e === 1 ? e : -o * 2 ** (10 * (e - 1)) * Math.sin((e - 1 - s / (Math.PI * 2) * Math.asin(1 / o)) * (Math.PI * 2) / s);
}, Qd = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0, r = P(t, 4), i = r[0], a = i === void 0 ? 1 : i, o = r[1], s = o === void 0 ? 100 : o, c = r[2], l = c === void 0 ? 10 : c, u = r[3], d = u === void 0 ? 0 : u;
	a = rn(a, .1, 1e3), s = rn(s, .1, 1e3), l = rn(l, .1, 1e3), d = rn(d, .1, 1e3);
	var f = Math.sqrt(s / a), p = l / (2 * Math.sqrt(s * a)), m = p < 1 ? f * Math.sqrt(1 - p * p) : 0, h = 1, g = p < 1 ? (p * f + -d) / m : -d + f, _ = n ? n * e / 1e3 : e;
	return _ = p < 1 ? Math.exp(-_ * p * f) * (h * Math.cos(m * _) + g * Math.sin(m * _)) : (h + g * _) * Math.exp(-_ * f), e === 0 || e === 1 ? e : 1 - _;
}, $d = function(e) {
	var t = P(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], 2), n = t[0], r = n === void 0 ? 10 : n;
	return (t[1] === "start" ? Math.ceil : Math.floor)(rn(e, 0, 1) * r) / r;
}, ef = function(e) {
	var t = P(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], 4), n = t[0], r = t[1], i = t[2], a = t[3];
	return Bd(n, r, i, a)(e);
}, tf = Bd(.42, 0, 1, 1), nf = function(e) {
	return function(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
		return 1 - e(1 - t, n, r);
	};
}, rf = function(e) {
	return function(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
		return t < .5 ? e(t * 2, n, r) / 2 : 1 - e(t * -2 + 2, n, r) / 2;
	};
}, af = function(e) {
	return function(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
		return t < .5 ? (1 - e(1 - t * 2, n, r)) / 2 : (e(t * 2 - 1, n, r) + 1) / 2;
	};
}, of = {
	steps: $d,
	"step-start": function(e) {
		return $d(e, [1, "start"]);
	},
	"step-end": function(e) {
		return $d(e, [1, "end"]);
	},
	linear: function(e) {
		return e;
	},
	"cubic-bezier": ef,
	ease: function(e) {
		return ef(e, [
			.25,
			.1,
			.25,
			1
		]);
	},
	in: tf,
	out: nf(tf),
	"in-out": rf(tf),
	"out-in": af(tf),
	"in-quad": Hd,
	"out-quad": nf(Hd),
	"in-out-quad": rf(Hd),
	"out-in-quad": af(Hd),
	"in-cubic": Ud,
	"out-cubic": nf(Ud),
	"in-out-cubic": rf(Ud),
	"out-in-cubic": af(Ud),
	"in-quart": Wd,
	"out-quart": nf(Wd),
	"in-out-quart": rf(Wd),
	"out-in-quart": af(Wd),
	"in-quint": Gd,
	"out-quint": nf(Gd),
	"in-out-quint": rf(Gd),
	"out-in-quint": af(Gd),
	"in-expo": Kd,
	"out-expo": nf(Kd),
	"in-out-expo": rf(Kd),
	"out-in-expo": af(Kd),
	"in-sine": qd,
	"out-sine": nf(qd),
	"in-out-sine": rf(qd),
	"out-in-sine": af(qd),
	"in-circ": Jd,
	"out-circ": nf(Jd),
	"in-out-circ": rf(Jd),
	"out-in-circ": af(Jd),
	"in-back": Yd,
	"out-back": nf(Yd),
	"in-out-back": rf(Yd),
	"out-in-back": af(Yd),
	"in-bounce": Xd,
	"out-bounce": nf(Xd),
	"in-out-bounce": rf(Xd),
	"out-in-bounce": af(Xd),
	"in-elastic": Zd,
	"out-elastic": nf(Zd),
	"in-out-elastic": rf(Zd),
	"out-in-elastic": af(Zd),
	spring: Qd,
	"spring-in": Qd,
	"spring-out": nf(Qd),
	"spring-in-out": rf(Qd),
	"spring-out-in": af(Qd)
}, sf = function(e) {
	return Vd(e).replace(/^ease-/, "").replace(/(\(|\s).+/, "").toLowerCase().trim();
}, cf = function(e) {
	return of[sf(e)] || of.linear;
}, lf = function(e) {
	return e;
}, uf = 1, df = .5, ff = 0;
function pf(e, t) {
	return function(n) {
		if (n >= 1) return 1;
		var r = 1 / e;
		return n += t * r, n - n % r;
	};
}
var mf = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*", hf = RegExp(`cubic-bezier\\(${mf},${mf},${mf},${mf}\\)`), gf = /steps\(\s*(\d+)\s*\)/, _f = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/;
function vf(e) {
	var t = hf.exec(e);
	if (t) return Bd.apply(void 0, w(t.slice(1).map(Number)));
	var n = gf.exec(e);
	if (n) return pf(Number(n[1]), ff);
	var r = _f.exec(e);
	return r ? pf(Number(r[1]), {
		start: uf,
		middle: df,
		end: ff
	}[r[2]]) : cf(e);
}
function yf(e) {
	return Math.abs(bf(e) / (e.playbackRate || 1));
}
function bf(e) {
	return e.duration === 0 || e.iterations === 0 ? 0 : (e.duration === "auto" ? 0 : Number(e.duration)) * (e.iterations ?? 1);
}
var xf = 0, Sf = 1, Cf = 2, wf = 3;
function Tf(e, t, n) {
	if (t === null) return xf;
	var r = n.endTime;
	return t < Math.min(n.delay, r) ? Sf : t >= Math.min(n.delay + e + n.endDelay, r) ? Cf : wf;
}
function Ef(e, t, n, r, i) {
	switch (r) {
		case Sf: return t === "backwards" || t === "both" ? 0 : null;
		case wf: return n - i;
		case Cf: return t === "forwards" || t === "both" ? e : null;
		case xf: return null;
	}
}
function Df(e, t, n, r, i) {
	var a = i;
	return e === 0 ? t !== Sf && (a += n) : a += r / e, a;
}
function Of(e, t, n, r, i, a) {
	var o = e === Infinity ? t % 1 : e % 1;
	return o === 0 && n === Cf && r !== 0 && (i !== 0 || a === 0) && (o = 1), o;
}
function kf(e, t, n, r) {
	return e === Cf && t === Infinity ? Infinity : n === 1 ? Math.floor(r) - 1 : Math.floor(r);
}
function Af(e, t, n) {
	var r = e;
	if (e !== "normal" && e !== "reverse") {
		var i = t;
		e === "alternate-reverse" && (i += 1), r = "normal", i !== Infinity && i % 2 != 0 && (r = "reverse");
	}
	return r === "normal" ? n : 1 - n;
}
function jf(e, t, n) {
	var r = Tf(e, t, n), i = Ef(e, n.fill, t, r, n.delay);
	if (i === null) return null;
	var a = n.duration === "auto" ? 0 : n.duration, o = Df(a, r, n.iterations, i, n.iterationStart), s = Of(o, n.iterationStart, r, n.iterations, i, a), c = kf(r, n.iterations, s, o), l = Af(n.direction, c, s);
	return n.currentIteration = c, n.progress = l, n.easingFunction(l);
}
function Mf(e, t, n) {
	var r = Pf(e, t), i = Ff(r, n);
	return function(e, t) {
		if (t !== null) i.filter(function(e) {
			return t >= e.applyFrom && t < e.applyTo;
		}).forEach(function(n) {
			var r = t - n.startOffset, i = n.endOffset - n.startOffset, a = i === 0 ? 0 : r / i;
			e.setAttribute(n.property, n.interpolation(a), !1, !1);
		});
		else for (var n in r) Nf(n) && e.setAttribute(n, null);
	};
}
function Nf(e) {
	return e !== "offset" && e !== "easing" && e !== "composite" && e !== "computedOffset";
}
function Pf(e, t) {
	for (var n = {}, r = 0; r < e.length; r++) for (var i in e[r]) if (Nf(i)) {
		var a = {
			offset: e[r].offset,
			computedOffset: e[r].computedOffset,
			easing: e[r].easing,
			easingFunction: vf(e[r].easing) || t.easingFunction,
			value: e[r][i]
		};
		n[i] = n[i] || [], n[i].push(a);
	}
	return n;
}
function Ff(e, t) {
	var n = [];
	for (var r in e) for (var i = e[r], a = 0; a < i.length - 1; a++) {
		var o = a, s = a + 1, c = i[o].computedOffset, l = i[s].computedOffset, u = c, d = l;
		a === 0 && (u = -Infinity, l === 0 && (s = o)), a === i.length - 2 && (d = Infinity, c === 1 && (o = s)), n.push({
			applyFrom: u,
			applyTo: d,
			startOffset: i[o].computedOffset,
			endOffset: i[s].computedOffset,
			easingFunction: i[o].easingFunction,
			property: r,
			interpolation: Lf(r, i[o].value, i[s].value, t)
		});
	}
	return n.sort(function(e, t) {
		return e.startOffset - t.startOffset;
	}), n;
}
var If = function(e, t, n) {
	return function(r) {
		var i = Rf(e, t, r);
		return an(i) ? i : n(i);
	};
};
function Lf(e, t, n, r) {
	var i = Gs[e];
	if (i && i.syntax && i.int) {
		var a = X.styleValueRegistry.getPropertySyntax(i.syntax);
		if (a) {
			var o = a.parser, s = o ? o(t, r) : t, c = o ? o(n, r) : n, l = a.mixer(s, c, r);
			if (l) {
				var u = If.apply(void 0, w(l));
				return function(e) {
					return e === 0 ? t : e === 1 ? n : u(e);
				};
			}
		}
	}
	return If(!1, !0, function(e) {
		return e ? n : t;
	});
}
function Rf(e, t, n) {
	if (typeof e == "number" && typeof t == "number") return e * (1 - n) + t * n;
	if (typeof e == "boolean" && typeof t == "boolean" || typeof e == "string" && typeof t == "string") return n < .5 ? e : t;
	if (Array.isArray(e) && Array.isArray(t)) {
		for (var r = e.length, i = t.length, a = Math.max(r, i), o = [], s = 0; s < a; s++) o.push(Rf(e[s < r ? s : r - 1], t[s < i ? s : i - 1], n));
		return o;
	}
	throw Error(`Mismatched interpolation arguments ${e}:${t}`);
}
var zf = function() {
	function e() {
		g(this, e), this.delay = 0, this.direction = "normal", this.duration = "auto", this._easing = "linear", this.easingFunction = lf, this.endDelay = 0, this.fill = "auto", this.iterationStart = 0, this.iterations = 1, this.currentIteration = null, this.progress = null;
	}
	return v(e, [{
		key: "easing",
		get: function() {
			return this._easing;
		},
		set: function(e) {
			this.easingFunction = vf(e), this._easing = e;
		}
	}]);
}();
function Bf(e) {
	var t = [];
	for (var n in e) if (!(n in [
		"easing",
		"offset",
		"composite"
	])) {
		var r = e[n];
		Array.isArray(r) || (r = [r]);
		for (var i = r.length, a = 0; a < i; a++) {
			if (!t[a]) {
				var o = {};
				"offset" in e && (o.offset = Number(e.offset)), "easing" in e && (o.easing = e.easing), "composite" in e && (o.composite = e.composite), t[a] = o;
			}
			r[a] !== void 0 && r[a] !== null && (t[a][n] = r[a]);
		}
	}
	return t.sort(function(e, t) {
		return (e.computedOffset || 0) - (t.computedOffset || 0);
	}), t;
}
function Vf(e, t) {
	if (e === null) return [];
	Array.isArray(e) || (e = Bf(e));
	for (var n = e.map(function(e) {
		var n = {};
		for (var r in t != null && t.composite && (n.composite = "auto"), e) {
			var i = e[r];
			if (r === "offset") {
				if (i !== null) {
					if (i = Number(i), !isFinite(i)) throw Error("Keyframe offsets must be numbers.");
					if (i < 0 || i > 1) throw Error("Keyframe offsets must be between 0 and 1.");
					n.computedOffset = i;
				}
			} else if (r === "composite" && [
				"replace",
				"add",
				"accumulate",
				"auto"
			].indexOf(i) === -1) throw Error(`${i} compositing is not supported`);
			n[r] = i;
		}
		return n.offset === void 0 && (n.offset = null), n.easing === void 0 && (n.easing = t?.easing || "linear"), n.composite === void 0 && (n.composite = "auto"), n;
	}), r = !0, i = -Infinity, a = 0; a < n.length; a++) {
		var o = n[a].offset;
		if (z(o)) r = !1;
		else {
			if (o < i) throw TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");
			i = o;
		}
	}
	n = n.filter(function(e) {
		return Number(e.offset) >= 0 && Number(e.offset) <= 1;
	});
	function s() {
		var e = n.length;
		n[e - 1].computedOffset = Number(n[e - 1].offset ?? 1), e > 1 && (n[0].computedOffset = Number(n[0].offset ?? 0));
		for (var t = 0, r = Number(n[0].computedOffset), i = 1; i < e; i++) {
			var a = n[i].computedOffset;
			if (!z(a) && !z(r)) {
				for (var o = 1; o < i - t; o++) n[t + o].computedOffset = r + (Number(a) - r) * o / (i - t);
				t = i, r = Number(a);
			}
		}
	}
	return r || s(), n;
}
var Hf = "backwards|forwards|both|none".split("|"), Uf = "reverse|alternate|alternate-reverse".split("|");
function Wf(e, t) {
	var n = new zf();
	return t && (n.fill = "both", n.duration = "auto"), typeof e == "number" && !isNaN(e) ? n.duration = e : e !== void 0 && Object.keys(e).forEach(function(t) {
		if (e[t] !== void 0 && e[t] !== null && e[t] !== "auto") {
			if ((typeof n[t] == "number" || t === "duration") && (typeof e[t] != "number" || isNaN(e[t])) || t === "fill" && Hf.indexOf(e[t]) === -1 || t === "direction" && Uf.indexOf(e[t]) === -1) return;
			n[t] = e[t];
		}
	}), n;
}
function Gf(e, t) {
	return e = Kf(e ?? { duration: "auto" }), Wf(e, t);
}
function Kf(e) {
	return typeof e == "number" && (e = isNaN(e) ? { duration: "auto" } : { duration: e }), e;
}
var qf = function() {
	function e(t, n, r) {
		var i = this;
		g(this, e), this.composite = "replace", this.iterationComposite = "replace", this.target = t, this.timing = Gf(r, !1), this.timing.effect = this, this.timing.activeDuration = yf(this.timing), this.timing.endTime = Math.max(0, this.timing.delay + this.timing.activeDuration + this.timing.endDelay), this.normalizedKeyframes = Vf(n, this.timing), this.interpolations = Mf(this.normalizedKeyframes, this.timing, this.target);
		var a = X.globalThis.Proxy;
		this.computedTiming = a ? new a(this.timing, {
			get: function(e, t) {
				return t === "duration" ? e.duration === "auto" ? 0 : e.duration : t === "fill" ? e.fill === "auto" ? "none" : e.fill : t === "localTime" ? i.animation && i.animation.currentTime || null : t === "currentIteration" ? !i.animation || i.animation.playState !== "running" ? null : e.currentIteration || 0 : t === "progress" ? !i.animation || i.animation.playState !== "running" ? null : e.progress || 0 : e[t];
			},
			set: function() {
				return !0;
			}
		}) : this.timing;
	}
	return v(e, [
		{
			key: "applyInterpolations",
			value: function() {
				this.interpolations(this.target, Number(this.timeFraction));
			}
		},
		{
			key: "update",
			value: function(e) {
				return e === null ? !1 : (this.timeFraction = jf(this.timing.activeDuration, e, this.timing), this.timeFraction !== null);
			}
		},
		{
			key: "getKeyframes",
			value: function() {
				return this.normalizedKeyframes;
			}
		},
		{
			key: "setKeyframes",
			value: function(e) {
				this.normalizedKeyframes = Vf(e);
			}
		},
		{
			key: "getComputedTiming",
			value: function() {
				return this.computedTiming;
			}
		},
		{
			key: "getTiming",
			value: function() {
				return this.timing;
			}
		},
		{
			key: "updateTiming",
			value: function(e) {
				var t = this;
				Object.keys(e || {}).forEach(function(n) {
					t.timing[n] = e[n];
				});
			}
		}
	]);
}();
function Jf(e, t) {
	return Number(e.id) - Number(t.id);
}
var Yf = function() {
	function e(t) {
		var n = this;
		g(this, e), this.animations = [], this.ticking = !1, this.timelineTicking = !1, this.hasRestartedThisFrame = !1, this.animationsWithPromises = [], this.inTick = !1, this.pendingEffects = [], this.currentTime = null, this.rafId = 0, this.rafCallbacks = [], this.webAnimationsNextTick = function(e) {
			n.currentTime = e, n.discardAnimations(), n.animations.length === 0 ? n.timelineTicking = !1 : n.requestAnimationFrame(n.webAnimationsNextTick);
		}, this.processRafCallbacks = function(e) {
			var t = n.rafCallbacks;
			n.rafCallbacks = [], e < Number(n.currentTime) && (e = Number(n.currentTime)), n.animations.sort(Jf), n.animations = n.tick(e, !0, n.animations)[0], t.forEach(function(t) {
				t[1](e);
			}), n.applyPendingEffects();
		}, this.document = t;
	}
	return v(e, [
		{
			key: "getAnimations",
			value: function() {
				return this.discardAnimations(), this.animations.slice();
			}
		},
		{
			key: "isTicking",
			value: function() {
				return this.inTick;
			}
		},
		{
			key: "play",
			value: function(e, t, n) {
				var r = new Td(new qf(e, t, n), this);
				return this.animations.push(r), this.restartWebAnimationsNextTick(), r.updatePromises(), r.play(), r.updatePromises(), r;
			}
		},
		{
			key: "applyDirtiedAnimation",
			value: function(e) {
				var t = this;
				if (!this.inTick) {
					e.markTarget();
					var n = e.targetAnimations();
					n.sort(Jf), this.tick(Number(this.currentTime), !1, n.slice())[1].forEach(function(e) {
						var n = t.animations.indexOf(e);
						n !== -1 && t.animations.splice(n, 1);
					}), this.applyPendingEffects();
				}
			}
		},
		{
			key: "restart",
			value: function() {
				return this.ticking || (this.ticking = !0, this.requestAnimationFrame(function() {}), this.hasRestartedThisFrame = !0), this.hasRestartedThisFrame;
			}
		},
		{
			key: "destroy",
			value: function() {
				this.document.defaultView.cancelAnimationFrame(this.frameId);
			}
		},
		{
			key: "applyPendingEffects",
			value: function() {
				this.pendingEffects.forEach(function(e) {
					e?.applyInterpolations();
				}), this.pendingEffects = [];
			}
		},
		{
			key: "updateAnimationsPromises",
			value: function() {
				this.animationsWithPromises = this.animationsWithPromises.filter(function(e) {
					return e.updatePromises();
				});
			}
		},
		{
			key: "discardAnimations",
			value: function() {
				this.updateAnimationsPromises(), this.animations = this.animations.filter(function(e) {
					return e.playState !== "finished" && e.playState !== "idle";
				});
			}
		},
		{
			key: "restartWebAnimationsNextTick",
			value: function() {
				this.timelineTicking || (this.timelineTicking = !0, this.requestAnimationFrame(this.webAnimationsNextTick));
			}
		},
		{
			key: "rAF",
			value: function(e) {
				var t = this.rafId++;
				return this.rafCallbacks.length === 0 && (this.frameId = this.document.defaultView.requestAnimationFrame(this.processRafCallbacks)), this.rafCallbacks.push([t, e]), t;
			}
		},
		{
			key: "requestAnimationFrame",
			value: function(e) {
				var t = this;
				return this.rAF(function(n) {
					t.updateAnimationsPromises(), e(n), t.updateAnimationsPromises();
				});
			}
		},
		{
			key: "tick",
			value: function(e, t, n) {
				var r = this, i, a;
				this.inTick = !0, this.hasRestartedThisFrame = !1, this.currentTime = e, this.ticking = !1;
				var o = [], s = [], c = [], l = [];
				return n.forEach(function(n) {
					n.tick(e, t), n._inEffect ? (s.push(n.effect), n.markTarget()) : (o.push(n.effect), n.unmarkTarget()), n._needsTick && (r.ticking = !0);
					var i = n._inEffect || n._needsTick;
					n._inTimeline = i, i ? c.push(n) : l.push(n);
				}), (i = this.pendingEffects).push.apply(i, o), (a = this.pendingEffects).push.apply(a, s), this.ticking && this.requestAnimationFrame(function() {}), this.inTick = !1, [c, l];
			}
		}
	]);
}();
X.EasingFunction = vf, X.AnimationTimeline = Yf, X.CameraContribution = function(e) {
	function t() {
		var e;
		g(this, t);
		var n = [...arguments];
		return e = k(this, t, [].concat(n)), e.landmarks = [], e;
	}
	return j(t, e), v(t, [
		{
			key: "rotate",
			value: function(e, t, n) {
				if (this.relElevation = gi(t), this.relAzimuth = gi(e), this.relRoll = gi(n), this.elevation += this.relElevation, this.azimuth += this.relAzimuth, this.roll += this.relRoll, this.type === Ri.EXPLORING) {
					var r = Mt(jt(), [
						1,
						0,
						0
					], V((this.rotateWorld ? 1 : -1) * this.relElevation)), i = Mt(jt(), [
						0,
						1,
						0
					], V((this.rotateWorld ? 1 : -1) * this.relAzimuth)), a = Mt(jt(), [
						0,
						0,
						1
					], V(this.relRoll)), o = Nt(jt(), i, r);
					o = Nt(jt(), o, a);
					var s = Fe(I(), o);
					he(this.matrix, this.matrix, [
						0,
						0,
						-this.distance
					]), me(this.matrix, this.matrix, s), he(this.matrix, this.matrix, [
						0,
						0,
						this.distance
					]);
				} else {
					if (Math.abs(this.elevation) > 90) return this;
					this.computeMatrix();
				}
				return this._getAxes(), this.type === Ri.ORBITING || this.type === Ri.EXPLORING ? this._getPosition() : this.type === Ri.TRACKING && this._getFocalPoint(), this._update(), this;
			}
		},
		{
			key: "pan",
			value: function(e, t) {
				var n = vi(e, t, 0), r = nt(this.position);
				return st(r, r, ft(R(), this.right, n[0])), st(r, r, ft(R(), this.up, n[1])), this._setPosition(r), this.triggerUpdate(), this;
			}
		},
		{
			key: "dolly",
			value: function(e) {
				var t = this.forward, n = nt(this.position), r = e * this.dollyingStep, i = this.distance + e * this.dollyingStep;
				return r = Math.max(Math.min(i, this.maxDistance), this.minDistance) - this.distance, n[0] += r * t[0], n[1] += r * t[1], n[2] += r * t[2], this._setPosition(n), this.type === Ri.ORBITING || this.type === Ri.EXPLORING ? this._getDistance() : this.type === Ri.TRACKING && st(this.focalPoint, n, this.distanceVector), this.triggerUpdate(), this;
			}
		},
		{
			key: "cancelLandmarkAnimation",
			value: function() {
				this.landmarkAnimationID !== void 0 && this.canvas.cancelAnimationFrame(this.landmarkAnimationID);
			}
		},
		{
			key: "createLandmark",
			value: function(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.position, r = n === void 0 ? this.position : n, i = t.focalPoint, a = i === void 0 ? this.focalPoint : i, o = t.roll, s = t.zoom, c = new X.CameraContribution();
				c.setType(this.type, void 0), c.setPosition(r[0], r[1] ?? this.position[1], r[2] ?? this.position[2]), c.setFocalPoint(a[0], a[1] ?? this.focalPoint[1], a[2] ?? this.focalPoint[2]), c.setRoll(o ?? this.roll), c.setZoom(s ?? this.zoom);
				var l = {
					name: e,
					matrix: oe(c.getWorldTransform()),
					right: nt(c.right),
					up: nt(c.up),
					forward: nt(c.forward),
					position: nt(c.getPosition()),
					focalPoint: nt(c.getFocalPoint()),
					distanceVector: nt(c.getDistanceVector()),
					distance: c.getDistance(),
					dollyingStep: c.getDollyingStep(),
					azimuth: c.getAzimuth(),
					elevation: c.getElevation(),
					roll: c.getRoll(),
					relAzimuth: c.relAzimuth,
					relElevation: c.relElevation,
					relRoll: c.relRoll,
					zoom: c.getZoom()
				};
				return this.landmarks.push(l), l;
			}
		},
		{
			key: "gotoLandmark",
			value: function(e) {
				var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = nn(e) ? this.landmarks.find(function(t) {
					return t.name === e;
				}) : e;
				if (r) {
					var i = an(n) ? { duration: n } : n, a = i.easing, o = a === void 0 ? "linear" : a, s = i.duration, c = s === void 0 ? 100 : s, l = i.easingFunction, u = l === void 0 ? void 0 : l, d = i.onfinish, f = d === void 0 ? void 0 : d, p = i.onframe, m = p === void 0 ? void 0 : p, h = .01;
					this.cancelLandmarkAnimation();
					var g = r.position, _ = r.focalPoint, v = r.zoom, y = r.roll, b = u || X.EasingFunction(o), x, S = function() {
						t.setFocalPoint(_), t.setPosition(g), t.setRoll(y), t.setZoom(v), t.computeMatrix(), t.triggerUpdate(), f?.();
					};
					if (c === 0) return S();
					var C = function(e) {
						x === void 0 && (x = e);
						var n = e - x;
						if (n >= c) {
							S();
							return;
						}
						var r = b(n / c), i = R(), a = R(), o = 1, s = 0;
						if (_t(i, t.focalPoint, _, r), _t(a, t.position, g, r), s = t.roll * (1 - r) + y * r, o = t.zoom * (1 - r) + v * r, t.setFocalPoint(i), t.setPosition(a), t.setRoll(s), t.setZoom(o), Ct(i, _) + Ct(a, g) <= h && v === void 0 && y === void 0) return S();
						t.computeMatrix(), t.triggerUpdate(), n < c && (m?.(r), t.landmarkAnimationID = t.canvas.requestAnimationFrame(C));
					};
					this.canvas.requestAnimationFrame(C);
				}
			}
		}
	]);
}(Ui);
var Xf = [
	"body",
	"startHead",
	"endHead",
	"startHeadOffset",
	"endHeadOffset"
], Zf = [
	"body",
	"startHead",
	"endHead",
	"startHeadOffset",
	"endHeadOffset"
], Qf = [
	"body",
	"startHead",
	"endHead",
	"startHeadOffset",
	"endHeadOffset"
], $f = function(e) {
	function t(e) {
		var n;
		g(this, t), n = k(this, t, [h(h({}, e), {}, { type: t.tag })]);
		var r = n.attributes, i = r.body, a = r.startHead, o = r.endHead;
		r.startHeadOffset, r.endHeadOffset;
		var s = Zr(r, Xf);
		if (!i) throw Error("Arrow's body is required");
		return n.body = i, n.appendChild(n.body), n.handleBodyAttributeChanged(n.body), a && n.appendArrowHead(n.getArrowHeadType(a), !0), o && n.appendArrowHead(n.getArrowHeadType(o), !1), n.applyArrowStyle(s, [
			n.body,
			n.startHead,
			n.endHead
		]), n;
	}
	return j(t, e), v(t, [
		{
			key: "handleBodyAttributeChanged",
			value: function(e) {
				var t = this;
				e.addEventListener(Y.ATTR_MODIFIED, function(e) {
					var n = e.attrName;
					n === "x1" || n === "y1" ? t.startHead && t.transformArrowHead(t.startHead, !0) : (n === "x2" || n === "y2") && t.endHead && t.transformArrowHead(t.endHead, !1);
				});
			}
		},
		{
			key: "getBody",
			value: function() {
				return this.body;
			}
		},
		{
			key: "getStartHead",
			value: function() {
				return this.startHead;
			}
		},
		{
			key: "getEndHead",
			value: function() {
				return this.endHead;
			}
		},
		{
			key: "attributeChangedCallback",
			value: function(e, t, n) {
				if (e === "opacity" || e === "strokeOpacity" || e === "stroke" || e === "lineWidth" || e === "increasedLineWidthForHitTesting") this.applyArrowStyle(p({}, e, n), [
					this.body,
					this.startHead,
					this.endHead
				]);
				else if (e === "startHead" || e === "endHead") {
					var r = e === "startHead";
					if (this.destroyArrowHead(r), n) {
						var i = this.attributes;
						i.body, i.startHead, i.endHead, i.startHeadOffset, i.endHeadOffset;
						var a = Zr(i, Zf);
						this.appendArrowHead(this.getArrowHeadType(n), r), this.applyArrowStyle(a, [r ? this.startHead : this.endHead]);
					}
				} else if (e === "body") {
					var o = this.attributes;
					o.body, o.startHead, o.endHead, o.startHeadOffset, o.endHeadOffset;
					var s = Zr(o, Qf);
					this.body.destroy(), this.body = n, this.appendChild(this.body), this.applyArrowStyle(s, [this.body]);
				} else e === "startHeadOffset" ? this.moveArrowHeadAlongTangent(n, !0) : e === "endHeadOffset" && this.moveArrowHeadAlongTangent(n, !1);
			}
		},
		{
			key: "getArrowHeadType",
			value: function(e) {
				return typeof e == "boolean" ? "default" : "custom";
			}
		},
		{
			key: "appendArrowHead",
			value: function(e, t) {
				var n = e === "default" ? this.createDefaultArrowHead() : t ? this.attributes.startHead : this.attributes.endHead;
				this.transformArrowHead(n, t), n.setAttribute("zIndex", 1), t ? this.startHead = n : this.endHead = n, this.appendChild(n);
				var r = t ? this.attributes.startHeadOffset : this.attributes.endHeadOffset;
				r && this.moveArrowHeadAlongTangent(r, t);
			}
		},
		{
			key: "transformArrowHead",
			value: function(e, t) {
				var n = R(), r = 0, i = 0, a = 0, o = 0, s = 0, c = this.body && this.body.nodeName;
				if (c === B.LINE) {
					var l = this.body.attributes, u = l.x1, d = l.x2, f = l.y1, p = l.y2;
					i = t ? d : u, a = t ? u : d, o = t ? p : f, s = t ? f : p;
				} else if (c === B.POLYLINE) {
					var m = this.body.attributes.points, h = m.length;
					i = t ? m[1][0] : m[h - 2][0], o = t ? m[1][1] : m[h - 2][1], a = t ? m[0][0] : m[h - 1][0], s = t ? m[0][1] : m[h - 1][1];
				} else if (c === B.PATH) {
					var g = P(this.getTangent(this.body, t), 2), _ = g[0], v = g[1];
					i = _[0], o = _[1], a = v[0], s = v[1];
				}
				var y = i - a, b = o - s;
				r = Math.atan2(b, y), n = it(a, s, 0), t ? (this.startHeadPosition = n, this.startHeadRad = r) : (this.endHeadPosition = n, this.endHeadRad = r), e.setLocalPosition(n), e.setLocalEulerAngles(r * 180 / Math.PI + e.getLocalEulerAngles());
			}
		},
		{
			key: "moveArrowHeadAlongTangent",
			value: function(e, t) {
				var n = t ? this.startHead : this.endHead;
				n && n.setLocalPosition(St(R(), t ? this.startHeadPosition : this.endHeadPosition, it(Math.cos(t ? this.startHeadRad : this.endHeadRad) * e, Math.sin(t ? this.startHeadRad : this.endHeadRad) * e, 0))), this.body;
			}
		},
		{
			key: "destroyArrowHead",
			value: function(e) {
				e && this.startHead && (this.startHead.destroy(), this.startHead = void 0), !e && this.endHead && (this.endHead.destroy(), this.endHead = void 0);
			}
		},
		{
			key: "getTangent",
			value: function(e, t) {
				return t ? e.getStartTangent() : e.getEndTangent();
			}
		},
		{
			key: "createDefaultArrowHead",
			value: function() {
				var e = this.attributes, t = e.stroke, n = e.lineWidth, r = Math.sin, i = Math.cos, a = Math.PI, o = 10 * i(a / 6);
				return new Iu({ style: {
					d: `M${o / 2},${10 * r(a / 6)} L-${o / 2},0 L${o / 2},-${10 * r(a / 6)}`,
					stroke: t,
					lineWidth: n,
					transformOrigin: "center"
				} });
			}
		},
		{
			key: "applyArrowStyle",
			value: function(e, t) {
				var n = e.opacity, r = e.stroke, i = e.strokeOpacity, a = e.lineWidth, o = e.increasedLineWidthForHitTesting;
				t.forEach(function(e) {
					e && (z(n) || (e.style.opacity = n), z(r) || (e.style.stroke = r), z(i) || (e.style.strokeOpacity = i), z(a) || (e.style.lineWidth = a), z(o) || (e.style.increasedLineWidthForHitTesting = o));
				});
			}
		}
	]);
}(Eu);
$f.tag = "arrow", $f.PARSED_STYLE_LIST = new Set([].concat(w(Eu.PARSED_STYLE_LIST), [
	"body",
	"startHead",
	"endHead",
	"startHeadOffset",
	"endHeadOffset",
	"stroke",
	"lineWidth",
	"opacity",
	"strokeOpacity"
]));
var ep = Math.PI, tp = ep * 2, np = Math.sin, rp = Math.cos, ip = Math.acos, ap = Math.atan2, op = Math.sqrt, sp = Math.max, cp = Math.min, lp = 1e-4;
[
	{
		name: "sr",
		inherits: !1,
		interpolable: !0,
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		name: "sr0",
		inherits: !1,
		interpolable: !0,
		syntax: U.LENGTH_PERCENTAGE
	},
	{
		name: "startAngle",
		inherits: !1,
		interpolable: !0,
		syntax: U.ANGLE
	},
	{
		name: "endAngle",
		inherits: !1,
		interpolable: !0,
		syntax: U.ANGLE
	}
].forEach(function(e) {
	Gu.registerProperty(e);
});
var up = function(e, t, n, r) {
	return {
		x: e + n * Math.cos(r),
		y: t + n * Math.sin(r)
	};
};
function dp(e, t, n, r, i, a, o, s) {
	var c = n - e, l = r - t, u = o - i, d = s - a, f = d * c - u * l;
	if (!(f * f < lp)) return f = (u * (t - a) - d * (e - i)) / f, [e + f * c, t + f * l];
}
function fp(e, t, n, r, i, a, o) {
	var s = e - n, c = t - r, l = (o ? a : -a) / op(s * s + c * c), u = l * c, d = -l * s, f = e + u, p = t + d, m = n + u, h = r + d, g = (f + m) / 2, _ = (p + h) / 2, v = m - f, y = h - p, b = v * v + y * y, x = i - a, S = f * h - m * p, C = (y < 0 ? -1 : 1) * op(sp(0, x * x * b - S * S)), w = (S * y - v * C) / b, T = (-S * v - y * C) / b, E = (S * y + v * C) / b, D = (-S * v + y * C) / b, O = w - g, k = T - _, A = E - g, j = D - _;
	return O * O + k * k > A * A + j * j && (w = E, T = D), {
		cx: w,
		cy: T,
		x0: -u,
		y0: -d,
		x1: w * (i / x - 1),
		y1: T * (i / x - 1)
	};
}
function pp(e, t) {
	return t = t < 0 && e >= 0 ? t + tp : t, t - e <= ep ? 0 : 1;
}
var mp = function(e) {
	function t(e) {
		var n;
		return g(this, t), n = k(this, t, [e]), n.updatePath(), n;
	}
	return j(t, e), v(t, [
		{
			key: "setAttribute",
			value: function(e, n, r) {
				pr(t, "setAttribute", this, 3)([
					e,
					n,
					r
				]), [
					"startAngle",
					"endAngle",
					"sr",
					"sr0",
					"radius"
				].indexOf(e) > -1 && this.updatePath();
			}
		},
		{
			key: "updatePath",
			value: function() {
				var e = this.parsedStyle, n = e.x, r = e.y, i = e.startAngle, a = e.endAngle, o = e.sr, s = e.sr0, c = e.radius, l = this.createPath(n, r, i ? V(i) : 0, a ? V(a) : Math.PI * 2, o || 0, s || 0, c || [
					0,
					0,
					0,
					0
				]);
				pr(t, "setAttribute", this, 3)(["d", l]);
			}
		},
		{
			key: "createPath",
			value: function(e, t, n, r, i, a, o) {
				if (!(i <= 0)) {
					var s = up(e, t, i, n), c = up(e, t, i, r), l = up(e, t, a, n), u = up(e, t, a, r);
					if (sn(r - n, Math.PI * 2)) {
						var d = up(e, t, i, n + Math.PI), f = up(e, t, a, n + Math.PI), p = [
							[
								"M",
								s.x,
								s.y
							],
							[
								"A",
								i,
								i,
								0,
								1,
								1,
								d.x,
								d.y
							],
							[
								"A",
								i,
								i,
								0,
								1,
								1,
								c.x,
								c.y
							],
							[
								"M",
								l.x,
								l.y
							]
						];
						return a && (p.push([
							"A",
							a,
							a,
							0,
							1,
							0,
							f.x,
							f.y
						]), p.push([
							"A",
							a,
							a,
							0,
							1,
							0,
							u.x,
							u.y
						])), p.push([
							"M",
							s.x,
							s.y
						]), p.push(["Z"]), p;
					}
					var m = r - n, h = i * rp(n), g = i * np(n), _ = a * rp(r), v = a * np(r), y = i * rp(r), b = i * np(r), x = a * rp(n), S = a * np(n), C = P(o, 4), w = C[0], T = C[1], E = C[2], D = C[3], O = (i - a) / 2, k = cp(O, w), A = cp(O, T), j = cp(O, E), ee = cp(O, D), M = sp(k, A), N = sp(j, ee), te = M, F = N;
					if ((M > lp || N > lp) && m < ep) {
						var ne = dp(h, g, x, S, y, b, _, v);
						if (ne) {
							var re = h - ne[0], ie = g - ne[1], ae = y - ne[0], I = b - ne[1], oe = 1 / np(ip((re * ae + ie * I) / (op(re * re + ie * ie) * op(ae * ae + I * I))) / 2), se = op(ne[0] * ne[0] + ne[1] * ne[1]);
							te = cp(M, (i - se) / (oe + 1)), F = cp(N, (a - se) / (oe - 1));
						}
					}
					var ce = pp(n, r), le = !0, L = [];
					if (te > lp) {
						var ue = cp(w, te), de = cp(T, te), fe = fp(x, S, h, g, i, ue, le), pe = fp(y, b, _, v, i, de, le);
						if (L.push([
							"M",
							e + fe.cx + fe.x0,
							t + fe.cy + fe.y0
						]), te < M && ue === de) {
							var me = ap(fe.y0, fe.x0), he = ap(pe.y0, pe.x0);
							L.push([
								"A",
								te,
								te,
								0,
								pp(me, he),
								1,
								e + pe.cx + pe.x0,
								t + pe.cy + pe.y0
							]);
						} else {
							if (ue > 0) {
								var ge = ap(fe.y0, fe.x0), _e = ap(fe.y1, fe.x1), ve = up(e, t, i, _e);
								L.push([
									"A",
									ue,
									ue,
									0,
									pp(ge, _e),
									1,
									ve.x,
									ve.y
								]);
							}
							var ye = ap(fe.cy + fe.y1, fe.cx + fe.x1), be = ap(pe.cy + pe.y1, pe.cx + pe.x1), xe = up(e, t, i, be);
							if (L.push([
								"A",
								i,
								i,
								0,
								pp(ye, be),
								1,
								xe.x,
								xe.y
							]), de > 0) {
								var Se = ap(pe.y1, pe.x1), Ce = ap(pe.y0, pe.x0);
								L.push([
									"A",
									de,
									de,
									0,
									pp(Se, Ce),
									1,
									e + pe.cx + pe.x0,
									t + pe.cy + pe.y0
								]);
							}
						}
					} else L.push([
						"M",
						s.x,
						s.y
					]), L.push([
						"A",
						i,
						i,
						0,
						ce,
						1,
						c.x,
						c.y
					]);
					if (a < lp) L.push([
						"L",
						u.x,
						u.y
					]);
					else if (F > lp) {
						var we = cp(D, F), Te = cp(E, F), Ee = fp(_, v, 0, 0, a - i, Te, le), De = fp(0, 0, x, S, a - i, we, le);
						if (L.push([
							"L",
							e + Ee.cx + Ee.x0,
							t + Ee.cy + Ee.y0
						]), F < N && we === Te) {
							var Oe = ap(Ee.y0, Ee.x0), ke = ap(De.y0, De.x0), Ae = up(e, t, a, ke);
							L.push([
								"A",
								te,
								te,
								0,
								pp(Oe, ke),
								1,
								Ae.x,
								Ae.y
							]);
						} else {
							if (Te > 0) {
								var je = ap(Ee.y0, Ee.x0), Me = ap(Ee.y1, Ee.x1), Ne = up(e, t, a - i, Me);
								L.push([
									"A",
									Te,
									Te,
									0,
									pp(je, Me),
									1,
									Ne.x,
									Ne.y
								]);
							}
							var Pe = ap(Ee.cy + Ee.y1, Ee.cx + Ee.x1), Fe = ap(De.cy + De.y1, De.cx + De.x1), Ie = up(e, t, a, Fe);
							if (L.push([
								"A",
								a,
								a,
								0,
								pp(Fe, Pe),
								0,
								Ie.x,
								Ie.y
							]), L.push([
								"L",
								Ie.x,
								Ie.y
							]), we > 0) {
								var Le = ap(De.y1, De.x1), Re = ap(De.y0, De.x0);
								L.push([
									"A",
									we,
									we,
									0,
									pp(Le, Re),
									1,
									e + De.cx + De.x0,
									t + De.cy + De.y0
								]);
							}
						}
					} else L.push([
						"L",
						u.x,
						u.y
					]), L.push([
						"A",
						a,
						a,
						0,
						ce,
						0,
						l.x,
						l.y
					]);
					return L.push(["Z"]), L;
				}
			}
		}
	]);
}(Iu);
mp.PARSED_STYLE_LIST = new Set([].concat(w(Iu.PARSED_STYLE_LIST), [
	"x",
	"y",
	"sr",
	"sr0",
	"radius",
	"startAngle",
	"endAngle"
]));
function hp(e, t) {
	if (!{}.hasOwnProperty.call(e, t)) throw TypeError("attempted to use private field on non-instance");
	return e;
}
var gp = 0;
function _p(e) {
	return "__private_" + gp++ + "_" + e;
}
var vp = _p("renderState"), yp = function() {
	function e(t) {
		g(this, e), this.renderQueue = [], Object.defineProperty(this, vp, {
			writable: !0,
			value: {
				restoreStack: [],
				prevObject: null,
				currentContext: new Map()
			}
		}), this.clearFullScreenLastFrame = !1, this.clearFullScreen = !1, this.vpMatrix = I(), this.dprMatrix = I(), this.tmpMat4 = I(), this.vec3a = R(), this.vec3b = R(), this.vec3c = R(), this.vec3d = R(), this.canvasRendererPluginOptions = t;
	}
	return v(e, [
		{
			key: "apply",
			value: function(t, n) {
				var r = this;
				this.context = t;
				var i = this.context, a = i.config, o = i.camera, s = i.renderingService, c = i.renderingContext, l = i.pathGeneratorFactory, u = a.renderer.getConfig().enableRenderingOptimization;
				a.renderer.getConfig().enableDirtyCheck = !1, a.renderer.getConfig().enableDirtyRectangleRendering = !1, this.pathGeneratorFactory = l;
				var d = t.contextService, f = c.root.ownerDocument.defaultView;
				s.hooks.init.tap(e.tag, function() {
					var e = d.getDPR(), t = a.width, n = a.height, i = d.getContext();
					r.clearRect(i, 0, 0, t * e, n * e, a.background);
				}), s.hooks.destroy.tap(e.tag, function() {
					r.renderQueue = [], hp(r, vp)[vp] = {
						restoreStack: [],
						prevObject: null,
						currentContext: null
					};
				});
				var p = function() {
					var e, t = d.getContext(), n = d.getDPR(), i = a.width, o = a.height, c = r.canvasRendererPluginOptions, l = c.dirtyObjectNumThreshold, u = c.dirtyObjectRatioThreshold, p = s.getStats(), m = p.total, h = p.rendered, g = h / m;
					r.clearFullScreen = r.clearFullScreenLastFrame || !((e = f.context.renderingPlugins[1]) != null && e.isFirstTimeRenderingFinished) || s.disableDirtyRectangleRendering() || h > l && g > u, t && (typeof t.resetTransform == "function" ? t.resetTransform() : t.setTransform(1, 0, 0, 1, 0, 0), r.clearFullScreen && r.clearRect(t, 0, 0, i * n, o * n, a.background));
				}, m = function(e, t) {
					for (var i = [e]; i.length > 0;) {
						var a, o = i.pop();
						o.isVisible() && !o.isCulled() && (u ? r.renderDisplayObjectOptimized(o, t, r.context, hp(r, vp)[vp], n) : r.renderDisplayObject(o, t, r.context, hp(r, vp)[vp], n));
						for (var s = ((a = o.sortable) == null || (a = a.sorted) == null ? void 0 : a.length) > 0 ? o.sortable.sorted : o.childNodes, c = s.length - 1; c >= 0; c--) i.push(s[c]);
					}
				};
				s.hooks.endFrame.tap(e.tag, function() {
					if (p(), c.root.childNodes.length === 0) {
						r.clearFullScreenLastFrame = !0;
						return;
					}
					u = a.renderer.getConfig().enableRenderingOptimization, hp(r, vp)[vp] = {
						restoreStack: [],
						prevObject: null,
						currentContext: hp(r, vp)[vp].currentContext
					}, hp(r, vp)[vp].currentContext.clear(), r.clearFullScreenLastFrame = !1;
					var e = d.getContext(), t = d.getDPR();
					if (Se(r.dprMatrix, [
						t,
						t,
						1
					]), me(r.vpMatrix, r.dprMatrix, o.getOrthoMatrix()), r.clearFullScreen) u ? (e.save(), m(c.root, e), e.restore()) : m(c.root, e);
					else {
						var i = r.safeMergeAABB(r.mergeDirtyAABBs(r.renderQueue));
						if (si.isEmpty(i)) {
							r.renderQueue = [];
							return;
						}
						var s = r.convertAABB2Rect(i), l = s.x, h = s.y, g = s.width, _ = s.height, v = vt(r.vec3a, [
							l,
							h,
							0
						], r.vpMatrix), y = vt(r.vec3b, [
							l + g,
							h,
							0
						], r.vpMatrix), b = vt(r.vec3c, [
							l,
							h + _,
							0
						], r.vpMatrix), x = vt(r.vec3d, [
							l + g,
							h + _,
							0
						], r.vpMatrix), S = Math.min(v[0], y[0], x[0], b[0]), C = Math.min(v[1], y[1], x[1], b[1]), w = Math.max(v[0], y[0], x[0], b[0]), T = Math.max(v[1], y[1], x[1], b[1]), E = Math.floor(S), D = Math.floor(C), O = Math.ceil(w - S), k = Math.ceil(T - C);
						e.save(), r.clearRect(e, E, D, O, k, a.background), e.beginPath(), e.rect(E, D, O, k), e.clip(), e.setTransform(r.vpMatrix[0], r.vpMatrix[1], r.vpMatrix[4], r.vpMatrix[5], r.vpMatrix[12], r.vpMatrix[13]), a.renderer.getConfig().enableDirtyRectangleRenderingDebug && f.dispatchEvent(new Sl(Qu.DIRTY_RECTANGLE, { dirtyRect: {
							x: E,
							y: D,
							width: O,
							height: k
						} }));
						var A = P(i.getMin(), 2), j = A[0], ee = A[1], M = P(i.getMax(), 2), N = M[0], te = M[1];
						c.root.ownerDocument.elementsFromBBox(j, ee, N, te).sort(function(e, t) {
							return e.sortable.renderOrder - t.sortable.renderOrder;
						}).forEach(function(t) {
							t && t.isVisible() && !t.isCulled() && r.renderDisplayObject(t, e, r.context, hp(r, vp)[vp], n);
						}), e.restore(), r.renderQueue.forEach(function(e) {
							r.saveDirtyAABB(e);
						}), r.renderQueue = [];
					}
					hp(r, vp)[vp].restoreStack.forEach(function() {
						e.restore();
					}), hp(r, vp)[vp].restoreStack = [];
				}), s.hooks.render.tap(e.tag, function(e) {
					r.clearFullScreen || r.renderQueue.push(e);
				});
			}
		},
		{
			key: "clearRect",
			value: function(e, t, n, r, i, a) {
				e.clearRect(t, n, r, i), a && (e.fillStyle = a, e.fillRect(t, n, r, i));
			}
		},
		{
			key: "renderDisplayObjectOptimized",
			value: function(e, t, n, r, i) {
				var a = e.nodeName, o = !1, s = !1, c = this.context.styleRendererFactory[a], l = this.pathGeneratorFactory[a], u = e.parsedStyle.clipPath;
				if (u) {
					o = !r.prevObject || !Qe(u.getWorldTransform(), r.prevObject.getWorldTransform()), o && (this.applyWorldTransform(t, u), r.prevObject = null);
					var d = this.pathGeneratorFactory[u.nodeName];
					d && (t.save(), s = !0, t.beginPath(), d(t, u.parsedStyle), t.closePath(), t.clip());
				}
				if (c) {
					o = !r.prevObject || !Qe(e.getWorldTransform(), r.prevObject.getWorldTransform()), o && this.applyWorldTransform(t, e);
					var f = !r.prevObject;
					if (!f) {
						var p = r.prevObject.nodeName;
						f = a === B.TEXT ? p !== B.TEXT : a === B.IMAGE ? p !== B.IMAGE : p === B.TEXT || p === B.IMAGE;
					}
					c.applyStyleToContext(t, e, f, r), r.prevObject = e;
				}
				l && (t.beginPath(), l(t, e.parsedStyle), a !== B.LINE && a !== B.PATH && a !== B.POLYLINE && t.closePath()), c && c.drawToContext(t, e, hp(this, vp)[vp], this, i), s && t.restore(), e.dirty(!1);
			}
		},
		{
			key: "renderDisplayObject",
			value: function(e, t, n, r, i) {
				var a = e.nodeName, o = r.restoreStack[r.restoreStack.length - 1];
				o && !(e.compareDocumentPosition(o) & wl.DOCUMENT_POSITION_CONTAINS) && (t.restore(), r.restoreStack.pop());
				var s = this.context.styleRendererFactory[a], c = this.pathGeneratorFactory[a], l = e.parsedStyle.clipPath;
				if (l) {
					this.applyWorldTransform(t, l);
					var u = this.pathGeneratorFactory[l.nodeName];
					u && (t.save(), r.restoreStack.push(e), t.beginPath(), u(t, l.parsedStyle), t.closePath(), t.clip());
				}
				s && (this.applyWorldTransform(t, e), t.save(), this.applyAttributesToContext(t, e)), c && (t.beginPath(), c(t, e.parsedStyle), a !== B.LINE && a !== B.PATH && a !== B.POLYLINE && t.closePath()), s && (s.render(t, e.parsedStyle, e, n, this, i), t.restore()), e.dirty(!1);
			}
		},
		{
			key: "applyAttributesToContext",
			value: function(e, t) {
				var n = t.parsedStyle, r = n.stroke, i = n.fill, a = n.opacity, o = n.lineDash, s = n.lineDashOffset;
				o && e.setLineDash(o), z(s) || (e.lineDashOffset = s), z(a) || (e.globalAlpha *= a), !z(r) && !Array.isArray(r) && !r.isNone && (e.strokeStyle = t.attributes.stroke), !z(i) && !Array.isArray(i) && !i.isNone && (e.fillStyle = t.attributes.fill);
			}
		},
		{
			key: "convertAABB2Rect",
			value: function(e) {
				var t = e.getMin(), n = e.getMax(), r = Math.floor(t[0]), i = Math.floor(t[1]), a = Math.ceil(n[0]), o = Math.ceil(n[1]);
				return {
					x: r,
					y: i,
					width: a - r,
					height: o - i
				};
			}
		},
		{
			key: "mergeDirtyAABBs",
			value: function(e) {
				var t = new si();
				return e.forEach(function(e) {
					var n = e.getRenderBounds();
					t.add(n);
					var r = e.renderable.dirtyRenderBounds;
					r && t.add(r);
				}), t;
			}
		},
		{
			key: "saveDirtyAABB",
			value: function(e) {
				var t = e.renderable;
				t.dirtyRenderBounds ||= new si();
				var n = e.getRenderBounds();
				n && t.dirtyRenderBounds.update(n.center, n.halfExtents);
			}
		},
		{
			key: "applyWorldTransform",
			value: function(e, t, n) {
				n ? (se(this.tmpMat4, t.getLocalTransform()), me(this.tmpMat4, n, this.tmpMat4), me(this.tmpMat4, this.vpMatrix, this.tmpMat4)) : (se(this.tmpMat4, t.getWorldTransform()), me(this.tmpMat4, this.vpMatrix, this.tmpMat4)), e.setTransform(this.tmpMat4[0], this.tmpMat4[1], this.tmpMat4[4], this.tmpMat4[5], this.tmpMat4[12], this.tmpMat4[13]);
			}
		},
		{
			key: "safeMergeAABB",
			value: function() {
				var e = new si();
				return [...arguments].forEach(function(t) {
					e.add(t);
				}), e;
			}
		}
	]);
}();
yp.tag = "CanvasRenderer";
function bp(e, t, n, r, i, a, o) {
	var s, c;
	if (e.image.nodeName === "rect") {
		var l = e.image.parsedStyle, u = l.width, d = l.height;
		c = r.contextService.getDPR();
		var f = r.config.offscreenCanvas;
		s = a.offscreenCanvasCreator.getOrCreateCanvas(f), s.width = u * c, s.height = d * c;
		var p = a.offscreenCanvasCreator.getOrCreateContext(f), m = {
			restoreStack: [],
			prevObject: null,
			currentContext: new Map()
		};
		e.image.forEach(function(e) {
			i.renderDisplayObject(e, p, r, m, a);
		}), m.restoreStack.forEach(function() {
			p.restore();
		});
	}
	return o.getOrCreatePatternSync(t, e, n, s, c, t.getGeometryBounds().min, function() {
		t.dirty(), r.renderingService.dirty();
	});
}
function xp(e, t, n, r) {
	var i;
	if (e.type === Ya.LinearGradient || e.type === Ya.RadialGradient) {
		var a = t.getGeometryBounds(), o = a && a.halfExtents[0] * 2 || 1, s = a && a.halfExtents[1] * 2 || 1, c = a && a.min || [0, 0];
		i = r.getOrCreateGradient(h(h({ type: e.type }, e.value), {}, {
			min: c,
			width: o,
			height: s
		}), n);
	}
	return i;
}
var Sp = [
	"shadowBlur",
	"shadowOffsetX",
	"shadowOffsetY"
], Cp = [
	"lineCap",
	"lineJoin",
	"miterLimit"
], wp = {
	globalAlpha: 1,
	shadowBlur: 0,
	shadowOffsetX: 0,
	shadowOffsetY: 0,
	shadowColor: "#000",
	filter: "none",
	globalCompositeOperation: "source-over",
	strokeStyle: "#000",
	strokeOpacity: 1,
	lineWidth: 1,
	lineDash: [],
	lineDashOffset: 0,
	lineCap: "butt",
	lineJoin: "miter",
	miterLimit: 10,
	fillStyle: "#000",
	fillOpacity: 1
}, Tp = {};
function Ep(e, t, n, r) {
	var i = r.has(t) ? r.get(t) : wp[t];
	return i !== n && (t === "lineDash" ? e.setLineDash(n) : e[t] = n, r.set(t, n)), i;
}
var Dp = function(e) {
	function t() {
		return g(this, t), k(this, t, arguments);
	}
	return j(t, e), v(t, [{
		key: "render",
		value: function(e, t, n, r, i, a) {
			var o = t.fill, s = t.fillRule, c = t.opacity, l = c === void 0 ? 1 : c, u = t.fillOpacity, d = u === void 0 ? 1 : u, f = t.stroke, p = t.strokeOpacity, m = p === void 0 ? 1 : p, h = t.lineWidth, g = h === void 0 ? 1 : h, _ = t.lineCap, v = t.lineJoin, y = t.shadowType, b = t.shadowColor, x = t.shadowBlur, S = t.filter, C = t.miterLimit, w = o && !o.isNone, T = f && !f.isNone && g > 0, E = o?.alpha === 0, D = !!(S && S.length), O = !z(b) && x > 0, k = n.nodeName, A = y === "inner", j = T && O && (k === B.PATH || k === B.LINE || k === B.POLYLINE || E || A);
			w && (e.globalAlpha = l * d, j || Op(n, e, O), kp(e, n, o, s, r, i, a, this.imagePool), j || this.clearShadowAndFilter(e, D, O)), T && (e.globalAlpha = l * m, e.lineWidth = g, z(C) || (e.miterLimit = C), z(_) || (e.lineCap = _), z(v) || (e.lineJoin = v), j && (A && (e.globalCompositeOperation = "source-atop"), Op(n, e, !0), A && (Ap(e, n, f, r, i, a, this.imagePool), e.globalCompositeOperation = wp.globalCompositeOperation, this.clearShadowAndFilter(e, D, !0))), Ap(e, n, f, r, i, a, this.imagePool));
		}
	}, {
		key: "clearShadowAndFilter",
		value: function(e, t, n) {
			if (n && (e.shadowColor = "transparent", e.shadowBlur = 0), t) {
				var r = e.filter;
				!z(r) && r.indexOf("drop-shadow") > -1 && (e.filter = r.replace(/drop-shadow\([^)]*\)/, "").trim() || "none");
			}
		}
	}]);
}(function() {
	function e(t) {
		g(this, e), this.imagePool = t;
	}
	return v(e, [
		{
			key: "applyAttributesToContext",
			value: function(e, t) {}
		},
		{
			key: "render",
			value: function(e, t, n, r, i, a) {}
		},
		{
			key: "applyCommonStyleToContext",
			value: function(e, t, n, r) {
				var i = n ? Tp : r.prevObject.parsedStyle, a = t.parsedStyle;
				(n || a.opacity !== i.opacity) && Ep(e, "globalAlpha", z(a.opacity) ? wp.globalAlpha : a.opacity, r.currentContext), (n || a.blend !== i.blend) && Ep(e, "globalCompositeOperation", z(a.blend) ? wp.globalCompositeOperation : a.blend, r.currentContext);
			}
		},
		{
			key: "applyStrokeFillStyleToContext",
			value: function(e, t, n, r) {
				var i = n ? Tp : r.prevObject.parsedStyle, a = t.parsedStyle, o = a.lineWidth, s = o === void 0 ? wp.lineWidth : o, c = a.fill && !a.fill.isNone;
				if (a.stroke && !a.stroke.isNone && s > 0) {
					(n || t.attributes.stroke !== r.prevObject.attributes.stroke) && Ep(e, "strokeStyle", !z(a.stroke) && !Array.isArray(a.stroke) && !a.stroke.isNone ? t.attributes.stroke : wp.strokeStyle, r.currentContext), (n || a.lineWidth !== i.lineWidth) && Ep(e, "lineWidth", z(a.lineWidth) ? wp.lineWidth : a.lineWidth, r.currentContext), (n || a.lineDash !== i.lineDash) && Ep(e, "lineDash", a.lineDash || wp.lineDash, r.currentContext), (n || a.lineDashOffset !== i.lineDashOffset) && Ep(e, "lineDashOffset", z(a.lineDashOffset) ? wp.lineDashOffset : a.lineDashOffset, r.currentContext);
					for (var l = 0; l < Cp.length; l++) {
						var u = Cp[l];
						(n || a[u] !== i[u]) && Ep(e, u, z(a[u]) ? wp[u] : a[u], r.currentContext);
					}
				}
				c && (n || t.attributes.fill !== r.prevObject.attributes.fill) && Ep(e, "fillStyle", !z(a.fill) && !Array.isArray(a.fill) && !a.fill.isNone ? t.attributes.fill : wp.fillStyle, r.currentContext);
			}
		},
		{
			key: "applyStyleToContext",
			value: function(e, t, n, r) {
				var i = t.nodeName;
				this.applyCommonStyleToContext(e, t, n, r), i === B.IMAGE || this.applyStrokeFillStyleToContext(e, t, n, r);
			}
		},
		{
			key: "applyShadowAndFilterStyleToContext",
			value: function(e, t, n, r) {
				var i = t.parsedStyle;
				if (n) {
					Ep(e, "shadowColor", i.shadowColor.toString(), r.currentContext);
					for (var a = 0; a < Sp.length; a++) {
						var o = Sp[a];
						Ep(e, o, i[o] || wp[o], r.currentContext);
					}
				}
				i.filter && i.filter.length && Ep(e, "filter", t.attributes.filter, r.currentContext);
			}
		},
		{
			key: "clearShadowAndFilterStyleForContext",
			value: function(e, t, n, r) {
				var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
				if (t) {
					Ep(e, "shadowColor", wp.shadowColor, r.currentContext);
					for (var a = 0; a < Sp.length; a++) {
						var o = Sp[a];
						Ep(e, o, wp[o], r.currentContext);
					}
				}
				if (n) if (t && i) {
					var s = e.filter;
					!z(s) && s.indexOf("drop-shadow") > -1 && Ep(e, "filter", s.replace(/drop-shadow\([^)]*\)/, "").trim() || wp.filter, r.currentContext);
				} else Ep(e, "filter", wp.filter, r.currentContext);
			}
		},
		{
			key: "fillToContext",
			value: function(e, t, n, r, i) {
				var a = this, o = t.parsedStyle, s = o.fill, c = o.fillRule, l = null;
				if (Array.isArray(s) && s.length > 0) s.forEach(function(r) {
					var i = Ep(e, "fillStyle", xp(r, t, e, a.imagePool), n.currentContext);
					l ??= i, c ? e.fill(c) : e.fill();
				});
				else {
					if (Do(s)) {
						var u = bp(s, t, e, t.ownerDocument.defaultView.context, r, i, this.imagePool);
						u && (e.fillStyle = u, l = !0);
					}
					c ? e.fill(c) : e.fill();
				}
				l !== null && Ep(e, "fillStyle", l, n.currentContext);
			}
		},
		{
			key: "strokeToContext",
			value: function(e, t, n, r, i) {
				var a = this, o = t.parsedStyle.stroke, s = null;
				if (Array.isArray(o) && o.length > 0) o.forEach(function(r) {
					var i = Ep(e, "strokeStyle", xp(r, t, e, a.imagePool), n.currentContext);
					s ??= i, e.stroke();
				});
				else {
					if (Do(o)) {
						var c = bp(o, t, e, t.ownerDocument.defaultView.context, r, i, this.imagePool);
						if (c) {
							var l = Ep(e, "strokeStyle", c, n.currentContext);
							s ??= l;
						}
					}
					e.stroke();
				}
				s !== null && Ep(e, "strokeStyle", s, n.currentContext);
			}
		},
		{
			key: "drawToContext",
			value: function(e, t, n, r, i) {
				var a = t.nodeName, o = t.parsedStyle, s = o.opacity, c = s === void 0 ? wp.globalAlpha : s, l = o.fillOpacity, u = l === void 0 ? wp.fillOpacity : l, d = o.strokeOpacity, f = d === void 0 ? wp.strokeOpacity : d, p = o.lineWidth, m = p === void 0 ? wp.lineWidth : p, h = o.fill && !o.fill.isNone, g = o.stroke && !o.stroke.isNone && m > 0;
				if (!(!h && !g)) {
					var _ = !z(o.shadowColor) && o.shadowBlur > 0, v = o.shadowType === "inner", y = o.fill?.alpha === 0, b = !!(o.filter && o.filter.length), x = _ && g && (a === B.PATH || a === B.LINE || a === B.POLYLINE || y || v), S = null;
					if (h && (x || this.applyShadowAndFilterStyleToContext(e, t, _, n), S = Ep(e, "globalAlpha", c * u, n.currentContext), this.fillToContext(e, t, n, r, i), x || this.clearShadowAndFilterStyleForContext(e, _, b, n)), g) {
						var C = !1, w = Ep(e, "globalAlpha", c * f, n.currentContext);
						if (S = h ? S : w, x && (this.applyShadowAndFilterStyleToContext(e, t, _, n), C = !0, v)) {
							var T = e.globalCompositeOperation;
							e.globalCompositeOperation = "source-atop", this.strokeToContext(e, t, n, r, i), e.globalCompositeOperation = T, this.clearShadowAndFilterStyleForContext(e, _, b, n, !0);
						}
						this.strokeToContext(e, t, n, r, i), C && this.clearShadowAndFilterStyleForContext(e, _, b, n);
					}
					S !== null && Ep(e, "globalAlpha", S, n.currentContext);
				}
			}
		}
	]);
}());
function Op(e, t, n) {
	var r = e.parsedStyle, i = r.filter, a = r.shadowColor, o = r.shadowBlur, s = r.shadowOffsetX, c = r.shadowOffsetY;
	i && i.length && (t.filter = e.style.filter), n && (t.shadowColor = a.toString(), t.shadowBlur = o || 0, t.shadowOffsetX = s || 0, t.shadowOffsetY = c || 0);
}
function kp(e, t, n, r, i, a, o, s) {
	var c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : !1;
	Array.isArray(n) ? n.forEach(function(n) {
		e.fillStyle = xp(n, t, e, s), c || (r ? e.fill(r) : e.fill());
	}) : (Do(n) && (e.fillStyle = bp(n, t, e, i, a, o, s)), c || (r ? e.fill(r) : e.fill()));
}
function Ap(e, t, n, r, i, a, o) {
	var s = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : !1;
	Array.isArray(n) ? n.forEach(function(n) {
		e.strokeStyle = xp(n, t, e, o), s || e.stroke();
	}) : (Do(n) && (e.strokeStyle = bp(n, t, e, r, i, a, o)), s || e.stroke());
}
function jp(e, t) {
	var n = P(e, 4), r = n[0], i = n[1], a = n[2], o = n[3], s = P(t, 4), c = s[0], l = s[1], u = s[2], d = s[3], f = Math.max(r, c), p = Math.max(i, l), m = Math.min(r + a, c + u), h = Math.min(i + o, l + d);
	return m <= f || h <= p ? null : [
		f,
		p,
		m - f,
		h - p
	];
}
function Mp(e, t) {
	var n = vt(R(), [
		e[0],
		e[1],
		0
	], t), r = vt(R(), [
		e[0] + e[2],
		e[1],
		0
	], t), i = vt(R(), [
		e[0],
		e[1] + e[3],
		0
	], t), a = vt(R(), [
		e[0] + e[2],
		e[1] + e[3],
		0
	], t);
	return [
		Math.min(n[0], r[0], i[0], a[0]),
		Math.min(n[1], r[1], i[1], a[1]),
		Math.max(n[0], r[0], i[0], a[0]) - Math.min(n[0], r[0], i[0], a[0]),
		Math.max(n[1], r[1], i[1], a[1]) - Math.min(n[1], r[1], i[1], a[1])
	];
}
var Np = function(e) {
	function t() {
		return g(this, t), k(this, t, arguments);
	}
	return j(t, e), v(t, [
		{
			key: "renderDownSampled",
			value: function(e, t, n, r) {
				var i = r.src, a = r.imageCache;
				if (!a.downSampled) {
					this.imagePool.createDownSampledImage(i, n).then(function() {
						n.ownerDocument && (n.dirty(), n.ownerDocument.defaultView.context.renderingService.dirty());
					}).catch(function(e) {
						console.error(e);
					});
					return;
				}
				e.drawImage(a.downSampled, Math.floor(r.drawRect[0]), Math.floor(r.drawRect[1]), Math.ceil(r.drawRect[2]), Math.ceil(r.drawRect[3]));
			}
		},
		{
			key: "renderTile",
			value: function(e, t, n, r) {
				var i = r.src, a = r.imageCache, o = r.imageRect, s = r.drawRect, c = a.size, l = e.getTransform(), u = l.a, d = l.b, f = l.c, p = l.d, m = l.e, h = l.f;
				if (e.resetTransform(), !(a != null && a.gridSize)) {
					this.imagePool.createImageTiles(i, [], function() {
						n.ownerDocument && (n.dirty(), n.ownerDocument.defaultView.context.renderingService.dirty());
					}, n).catch(function(e) {
						console.error(e);
					});
					return;
				}
				for (var g = [c[0] / o[2], c[1] / o[3]], _ = [a.tileSize[0] / g[0], a.tileSize[1] / g[1]], v = [Math.floor((s[0] - o[0]) / _[0]), Math.ceil((s[0] + s[2] - o[0]) / _[0])], y = v[0], b = v[1], x = [Math.floor((s[1] - o[1]) / _[1]), Math.ceil((s[1] + s[3] - o[1]) / _[1])], S = x[0], C = x[1], w = S; w <= C; w++) for (var T = y; T <= b; T++) {
					var E = a.tiles[w][T];
					if (E) {
						var D = [
							Math.floor(o[0] + E.tileX * _[0]),
							Math.floor(o[1] + E.tileY * _[1]),
							Math.ceil(_[0]),
							Math.ceil(_[1])
						];
						e.drawImage(E.data, D[0], D[1], D[2], D[3]);
					}
				}
				e.setTransform(u, d, f, p, m, h);
			}
		},
		{
			key: "render",
			value: function(e, n, r) {
				var i = n.x, a = i === void 0 ? 0 : i, o = n.y, s = o === void 0 ? 0 : o, c = n.width, l = n.height, u = n.src, d = n.shadowColor, f = n.shadowBlur, p = this.imagePool.getImageSync(u, r), m = p?.img, h = c, g = l;
				if (m) {
					h ||= m.width, g ||= m.height, Op(r, e, !z(d) && f > 0);
					try {
						var _ = r.ownerDocument.defaultView.getContextService().getDomElement(), v = _.width, y = _.height, b = e.getTransform(), x = b.a, S = b.b, C = b.c, w = b.d, T = b.e, E = b.f, D = ce(x, C, 0, 0, S, w, 0, 0, 0, 0, 1, 0, T, E, 0, 1), O = Mp([
							a,
							s,
							h,
							g
						], D), k = jp([
							0,
							0,
							v,
							y
						], O);
						if (!k) return;
						if (!r.ownerDocument.defaultView.getConfig().enableLargeImageOptimization) {
							t.renderFull(e, n, r, {
								image: m,
								drawRect: [
									a,
									s,
									h,
									g
								]
							});
							return;
						}
						if (O[2] / p.size[0] < (p.downSamplingRate || .5)) {
							this.renderDownSampled(e, n, r, {
								src: u,
								imageCache: p,
								drawRect: [
									a,
									s,
									h,
									g
								]
							});
							return;
						}
						if (!ImagePool.isSupportTile) {
							t.renderFull(e, n, r, {
								image: m,
								drawRect: [
									a,
									s,
									h,
									g
								]
							});
							return;
						}
						this.renderTile(e, n, r, {
							src: u,
							imageCache: p,
							imageRect: O,
							drawRect: k
						});
					} catch {}
				}
			}
		},
		{
			key: "drawToContext",
			value: function(e, t, n, r, i) {
				this.render(e, t.parsedStyle, t);
			}
		}
	], [{
		key: "renderFull",
		value: function(e, t, n, r) {
			e.drawImage(r.image, Math.floor(r.drawRect[0]), Math.floor(r.drawRect[1]), Math.ceil(r.drawRect[2]), Math.ceil(r.drawRect[3]));
		}
	}]);
}(Dp), Pp = function(e) {
	function t() {
		return g(this, t), k(this, t, arguments);
	}
	return j(t, e), v(t, [
		{
			key: "render",
			value: function(e, t, n, r, i, a) {
				n.getBounds();
				var o = t.lineWidth, s = o === void 0 ? 1 : o, c = t.textAlign, l = c === void 0 ? "start" : c, u = t.textBaseline, d = u === void 0 ? "alphabetic" : u, f = t.lineJoin, p = f === void 0 ? "miter" : f, m = t.miterLimit, h = m === void 0 ? 10 : m, g = t.letterSpacing, _ = g === void 0 ? 0 : g, v = t.stroke, y = t.fill, b = t.fillRule, x = t.fillOpacity, S = x === void 0 ? 1 : x, C = t.strokeOpacity, w = C === void 0 ? 1 : C, T = t.opacity, E = T === void 0 ? 1 : T, D = t.metrics, O = t.x, k = O === void 0 ? 0 : O, A = t.y, j = A === void 0 ? 0 : A, ee = t.dx, M = t.dy, N = t.shadowColor, P = t.shadowBlur, te = t.textDecorationLine, F = D.font, ne = D.lines, re = D.height, ie = D.lineHeight, ae = D.lineMetrics;
				e.font = F, e.lineWidth = s, e.textAlign = l === "middle" ? "center" : l;
				var I = d;
				I === "alphabetic" && (I = "bottom"), e.lineJoin = p, z(h) || (e.miterLimit = h);
				var oe = j;
				d === "middle" ? oe += -re / 2 - ie / 2 : d === "bottom" || d === "alphabetic" || d === "ideographic" ? oe += -re : (d === "top" || d === "hanging") && (oe += -ie);
				var se = k + (ee || 0);
				oe += M || 0, ne.length === 1 && (I === "bottom" ? (I = "middle", oe -= .5 * re) : I === "top" && (I = "middle", oe += .5 * re)), e.textBaseline = I, Op(n, e, !z(N) && P > 0);
				for (var ce = 0; ce < ne.length; ce++) {
					var le = s / 2 + se;
					oe += ie, !z(v) && !v.isNone && s && this.drawLetterSpacing(e, n, ne[ce], ae[ce], l, le, oe, _, y, b, S, v, w, E, !0, r, i, a), z(y) || this.drawLetterSpacing(e, n, ne[ce], ae[ce], l, le, oe, _, y, b, S, v, w, E, !1, r, i, a);
				}
				te && te !== "none" && this.drawTextDecorations(e, t, n, ne, ie, se, j + (M || 0), r, i, a);
			}
		},
		{
			key: "drawLetterSpacing",
			value: function(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _) {
				if (s === 0) {
					m ? this.strokeText(e, t, n, a, o, d, f, h, g, _) : this.fillText(e, t, n, a, o, c, l, u, p, h, g, _);
					return;
				}
				var v = e.textAlign;
				e.textAlign = "left";
				var y = a;
				i === "center" || i === "middle" ? y = a - r.width / 2 : (i === "right" || i === "end") && (y = a - r.width);
				for (var b = Array.from(n), x = e.measureText(n).width, S = 0, C = 0; C < b.length; ++C) {
					var w = b[C];
					m ? this.strokeText(e, t, w, y, o, d, f, h, g, _) : this.fillText(e, t, w, y, o, c, l, u, p, h, g, _), S = e.measureText(n.substring(C + 1)).width, y += x - S + s, x = S;
				}
				e.textAlign = v;
			}
		},
		{
			key: "fillText",
			value: function(e, t, n, r, i, a, o, s, c, l, u, d) {
				kp(e, t, a, o, l, u, d, this.imagePool, !0);
				var f, p = !z(s) && s !== 1;
				p && (f = e.globalAlpha, e.globalAlpha = s * c), e.fillText(n, r, i), p && (e.globalAlpha = f);
			}
		},
		{
			key: "strokeText",
			value: function(e, t, n, r, i, a, o, s, c, l) {
				Ap(e, t, a, s, c, l, this.imagePool, !0);
				var u, d = !z(o) && o !== 1;
				d && (u = e.globalAlpha, e.globalAlpha = o), e.strokeText(n, r, i), d && (e.globalAlpha = u);
			}
		},
		{
			key: "drawTextDecorations",
			value: function(e, t, n, r, i, a, o, s, c, l) {
				var u = t.textDecorationLine, d = t.textDecorationColor, f = t.textDecorationStyle, p = t.textDecorationThickness, m = p === void 0 ? 1 : p, h = t.textAlign, g = h === void 0 ? "start" : h, _ = t.lineWidth, v = _ === void 0 ? 1 : _, y = t.metrics;
				if (!(!u || u === "none")) {
					var b = y.lineMetrics, x = u.split(" ");
					switch (e.lineWidth = m, d && (e.strokeStyle = `rgba(${d.r}, ${d.g}, ${d.b}, ${d.alpha})`), f) {
						case "dashed":
							e.setLineDash([5, 5]);
							break;
						case "dotted":
							e.setLineDash([2, 2]);
							break;
						case "wavy":
							e.setLineDash([]);
							break;
						default:
							e.setLineDash([]);
							break;
					}
					var S = o, C = t.textBaseline, w = C === void 0 ? "alphabetic" : C;
					w === "middle" ? S += -y.height / 2 - i / 2 : w === "bottom" || w === "alphabetic" || w === "ideographic" ? S += -y.height : (w === "top" || w === "hanging") && (S += -i);
					for (var T = 0; T < r.length; T++) {
						S += i;
						var E = b[T];
						if (E) {
							var D = v / 2, O = a, k = a + E.width;
							g === "center" || g === "middle" ? (O = a - E.width / 2, k = a + E.width / 2) : (g === "right" || g === "end") && (O = a - E.width, k = a), O += D, k += D;
							var A = Yr(x), j;
							try {
								for (A.s(); !(j = A.n()).done;) {
									var ee = j.value, M = S;
									switch (ee) {
										case "underline":
											M += 2;
											break;
										case "overline":
											M -= i - 2;
											break;
										case "line-through":
											M -= i / 2;
											break;
										default: continue;
									}
									f === "wavy" ? this.drawWavyLine(e, O, k, M) : (e.beginPath(), e.moveTo(O, M), e.lineTo(k, M), e.stroke());
								}
							} catch (e) {
								A.e(e);
							} finally {
								A.f();
							}
						}
					}
					e.setLineDash([]);
				}
			}
		},
		{
			key: "drawWavyLine",
			value: function(e, t, n, r) {
				var i = 2, a = 10, o = Math.floor((n - t) / a);
				e.beginPath(), e.moveTo(t, r);
				for (var s = 0; s < o; s++) {
					var c = t + s * a + a / 4, l = r + i, u = t + s * a + a / 2, d = r;
					e.quadraticCurveTo(c, l, u, d);
					var f = t + s * a + a * 3 / 4, p = r - i, m = t + (s + 1) * a, h = r;
					e.quadraticCurveTo(f, p, m, h);
				}
				e.stroke();
			}
		},
		{
			key: "drawToContext",
			value: function(e, t, n, r, i) {
				this.render(e, t.parsedStyle, t, t.ownerDocument.defaultView.context, r, i);
			}
		}
	]);
}(Dp), Fp = function(e) {
	function t() {
		var e, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		return g(this, t), e = k(this, t), e.name = "canvas-renderer", e.options = n, e;
	}
	return j(t, e), v(t, [{
		key: "init",
		value: function() {
			var e, t = h({
				dirtyObjectNumThreshold: 500,
				dirtyObjectRatioThreshold: .8
			}, this.options), n = this.context.imagePool, r = new Dp(n), i = (e = {}, p(p(p(p(p(p(p(p(p(p(e, B.CIRCLE, r), B.ELLIPSE, r), B.RECT, r), B.IMAGE, new Np(n)), B.TEXT, new Pp(n)), B.LINE, r), B.POLYLINE, r), B.POLYGON, r), B.PATH, r), B.GROUP, void 0), p(p(p(e, B.HTML, void 0), B.MESH, void 0), B.FRAGMENT, void 0));
			this.context.defaultStyleRendererFactory = i, this.context.styleRendererFactory = i, this.addRenderingPlugin(new yp(t));
		}
	}, {
		key: "destroy",
		value: function() {
			this.removeAllRenderingPlugins(), delete this.context.defaultStyleRendererFactory, delete this.context.styleRendererFactory;
		}
	}]);
}($r), Ip = R(), Lp = R(), Rp = R(), zp = I(), Bp = function() {
	function e() {
		var t = this;
		g(this, e), this.isHit = function(e, n, r, i) {
			var a = t.context.pointInPathPickerFactory[e.nodeName];
			if (a) {
				var o = de(zp, r), s = vt(Lp, ot(Rp, n[0], n[1], 0), o);
				if (a(e, new di(s[0], s[1]), i, t.isPointInPath, t.context, t.runtime)) return !0;
			}
			return !1;
		}, this.isPointInPath = function(e, n) {
			var r = t.runtime.offscreenCanvasCreator.getOrCreateContext(t.context.config.offscreenCanvas), i = t.context.pathGeneratorFactory[e.nodeName];
			return i && (r.beginPath(), i(r, e.parsedStyle), r.closePath()), r.isPointInPath(n.x, n.y);
		};
	}
	return v(e, [{
		key: "apply",
		value: function(t, n) {
			var r = this, i = t.renderingService, a = t.renderingContext;
			this.context = t, this.runtime = n;
			var o = a.root?.ownerDocument;
			i.hooks.pick.tapPromise(e.tag, function() {
				var e = Jr(Kr().mark(function e(t) {
					return Kr().wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0: return e.abrupt("return", r.pick(o, t));
							case 1:
							case "end": return e.stop();
						}
					}, e);
				}));
				return function(t) {
					return e.apply(this, arguments);
				};
			}()), i.hooks.pickSync.tap(e.tag, function(e) {
				return r.pick(o, e);
			});
		}
	}, {
		key: "pick",
		value: function(e, t) {
			var n = t.topmost, r = t.position, i = r.x, a = r.y, o = ot(Ip, i, a, 0), s = e.elementsFromBBox(o[0], o[1], o[0], o[1]), c = [], l = Yr(s), u;
			try {
				for (l.s(); !(u = l.n()).done;) {
					var d = u.value, f = d.getWorldTransform();
					if (this.isHit(d, o, f, !1)) {
						var p = vc(d);
						if (p) {
							var m = p.parsedStyle.clipPath;
							if (this.isHit(m, o, m.getWorldTransform(), !0)) {
								if (n) return t.picked = [d], t;
								c.push(d);
							}
						} else {
							if (n) return t.picked = [d], t;
							c.push(d);
						}
					}
				}
			} catch (e) {
				l.e(e);
			} finally {
				l.f();
			}
			return t.picked = c, t;
		}
	}]);
}();
Bp.tag = "CanvasPicker";
function Vp(e, t, n) {
	var r = e.parsedStyle, i = r.cx, a = i === void 0 ? 0 : i, o = r.cy, s = o === void 0 ? 0 : o, c = r.r, l = r.fill, u = r.stroke, d = r.lineWidth, f = d === void 0 ? 1 : d, p = r.increasedLineWidthForHitTesting, m = p === void 0 ? 0 : p, h = r.pointerEvents, g = h === void 0 ? "auto" : h, _ = (f + m) / 2, v = mr(a, s, t.x, t.y), y = P(Oc(g, l, u), 2), b = y[0], x = y[1];
	return b && x || n ? v <= c + _ : b ? v <= c : x ? v >= c - _ && v <= c + _ : !1;
}
function Hp(e, t, n, r) {
	return e / (n * n) + t / (r * r);
}
function Up(e, t, n) {
	var r = e.parsedStyle, i = r.cx, a = i === void 0 ? 0 : i, o = r.cy, s = o === void 0 ? 0 : o, c = r.rx, l = r.ry, u = r.fill, d = r.stroke, f = r.lineWidth, p = f === void 0 ? 1 : f, m = r.increasedLineWidthForHitTesting, h = m === void 0 ? 0 : m, g = r.pointerEvents, _ = g === void 0 ? "auto" : g, v = t.x, y = t.y, b = P(Oc(_, u, d), 2), x = b[0], S = b[1], C = (p + h) / 2, w = (v - a) * (v - a), T = (y - s) * (y - s);
	return x && S || n ? Hp(w, T, c + C, l + C) <= 1 : x ? Hp(w, T, c, l) <= 1 : S ? Hp(w, T, c - C, l - C) >= 1 && Hp(w, T, c + C, l + C) <= 1 : !1;
}
function Wp(e, t, n, r, i, a) {
	return i >= e && i <= e + n && a >= t && a <= t + r;
}
function Gp(e, t, n, r, i, a, o) {
	var s = i / 2;
	return Wp(e - s, t - s, n, i, a, o) || Wp(e + n - s, t - s, i, r, a, o) || Wp(e + s, t + r - s, n, i, a, o) || Wp(e - s, t + s, i, r, a, o);
}
function Kp(e, t, n, r, i, a, o, s) {
	var c = (Math.atan2(s - t, o - e) + Math.PI * 2) % (Math.PI * 2), l = {
		x: e + n * Math.cos(c),
		y: t + n * Math.sin(c)
	};
	return mr(l.x, l.y, o, s) <= a / 2;
}
function qp(e, t, n, r, i, a, o) {
	var s = Math.min(e, n), c = Math.max(e, n), l = Math.min(t, r), u = Math.max(t, r), d = i / 2;
	return a >= s - d && a <= c + d && o >= l - d && o <= u + d ? Tr(e, t, n, r, a, o) <= i / 2 : !1;
}
function Jp(e, t, n, r, i) {
	var a = e.length;
	if (a < 2) return !1;
	for (var o = 0; o < a - 1; o++) {
		var s = e[o][0], c = e[o][1], l = e[o + 1][0], u = e[o + 1][1];
		if (qp(s, c, l, u, t, n, r)) return !0;
	}
	if (i) {
		var d = e[0], f = e[a - 1];
		if (qp(d[0], d[1], f[0], f[1], t, n, r)) return !0;
	}
	return !1;
}
var Yp = 1e-6;
function Xp(e) {
	return Math.abs(e) < Yp ? 0 : e < 0 ? -1 : 1;
}
function Zp(e, t, n) {
	return (n[0] - e[0]) * (t[1] - e[1]) === (t[0] - e[0]) * (n[1] - e[1]) && Math.min(e[0], t[0]) <= n[0] && n[0] <= Math.max(e[0], t[0]) && Math.min(e[1], t[1]) <= n[1] && n[1] <= Math.max(e[1], t[1]);
}
function Qp(e, t, n) {
	var r = !1, i = e.length;
	if (i <= 2) return !1;
	for (var a = 0; a < i; a++) {
		var o = e[a], s = e[(a + 1) % i];
		if (Zp(o, s, [t, n])) return !0;
		Xp(o[1] - n) > 0 != Xp(s[1] - n) > 0 && Xp(t - (n - o[1]) * (o[0] - s[0]) / (o[1] - s[1]) - o[0]) < 0 && (r = !r);
	}
	return r;
}
function $p(e, t, n) {
	for (var r = !1, i = 0; i < e.length; i++) {
		var a = e[i];
		if (r = Qp(a, t, n), r) break;
	}
	return r;
}
function em(e, t, n) {
	var r = e.parsedStyle, i = r.x1, a = r.y1, o = r.x2, s = r.y2, c = r.lineWidth, l = c === void 0 ? 1 : c, u = r.increasedLineWidthForHitTesting, d = u === void 0 ? 0 : u, f = r.pointerEvents, p = f === void 0 ? "auto" : f, m = r.fill, h = r.stroke;
	return !P(Oc(p, m, h), 2)[1] && !n || !l ? !1 : qp(i, a, o, s, l + d, t.x, t.y);
}
function tm(e, t, n, r, i) {
	for (var a = !1, o = t / 2, s = 0; s < e.length; s++) {
		var c = e[s], l = c.currentPoint, u = c.params, d = c.prePoint, f = c.box;
		if (!(f && !Wp(f.x - o, f.y - o, f.width + t, f.height + t, n, r))) switch (c.command) {
			case "L":
			case "Z":
				if (a = qp(d[0], d[1], l[0], l[1], t, n, r), a) return !0;
				break;
			case "Q":
				if (a = Lr(d[0], d[1], u[1], u[2], u[3], u[4], n, r) <= t / 2, a) return !0;
				break;
			case "C":
				if (a = Ar(d[0], d[1], u[1], u[2], u[3], u[4], u[5], u[6], n, r, i) <= t / 2, a) return !0;
				break;
			case "A":
				c.cubicParams ||= In(d[0], d[1], u[1], u[2], u[3], u[4], u[5], u[6], u[7], void 0);
				for (var p = c.cubicParams, m = d, h = 0; h < p.length; h += 6) {
					var g = Ar(m[0], m[1], p[h], p[h + 1], p[h + 2], p[h + 3], p[h + 4], p[h + 5], n, r, i);
					if (m = [p[h + 4], p[h + 5]], a = g <= t / 2, a) return !0;
				}
				break;
		}
	}
	return a;
}
function nm(e, t, n, r, i, a) {
	var o = e.parsedStyle, s = o.lineWidth, c = s === void 0 ? 1 : s, l = o.increasedLineWidthForHitTesting, u = l === void 0 ? 0 : l, d = o.stroke, f = o.fill, p = o.d, m = o.pointerEvents, h = m === void 0 ? "auto" : m, g = p.segments, _ = p.hasArc, v = p.polylines, y = p.polygons, b = P(Oc(h, y?.length && f, d), 2), x = b[0], S = b[1], C = Zo(e), w = !1;
	return x || n ? (w = _ ? r(e, t) : $p(y, t.x, t.y) || $p(v, t.x, t.y), w) : ((S || n) && (w = tm(g, c + u, t.x, t.y, C)), w);
}
function rm(e, t, n) {
	var r = e.parsedStyle, i = r.stroke, a = r.fill, o = r.lineWidth, s = o === void 0 ? 1 : o, c = r.increasedLineWidthForHitTesting, l = c === void 0 ? 0 : c, u = r.points, d = r.pointerEvents, f = P(Oc(d === void 0 ? "auto" : d, a, i), 2), p = f[0], m = f[1], h = !1;
	return (m || n) && (h = Jp(u.points, s + l, t.x, t.y, !0)), !h && (p || n) && (h = Qp(u.points, t.x, t.y)), h;
}
function im(e, t, n) {
	var r = e.parsedStyle, i = r.lineWidth, a = i === void 0 ? 1 : i, o = r.increasedLineWidthForHitTesting, s = o === void 0 ? 0 : o, c = r.points, l = r.pointerEvents, u = l === void 0 ? "auto" : l, d = r.fill, f = r.stroke;
	return !P(Oc(u, d, f), 2)[1] && !n || !a ? !1 : Jp(c.points, a + s, t.x, t.y, !1);
}
function am(e, t, n, r, i) {
	var a = e.parsedStyle, o = a.radius, s = a.fill, c = a.stroke, l = a.lineWidth, u = l === void 0 ? 1 : l, d = a.increasedLineWidthForHitTesting, f = d === void 0 ? 0 : d, p = a.x, m = p === void 0 ? 0 : p, h = a.y, g = h === void 0 ? 0 : h, _ = a.width, v = a.height, y = a.pointerEvents, b = P(Oc(y === void 0 ? "auto" : y, s, c), 2), x = b[0], S = b[1], C = o && o.some(function(e) {
		return e !== 0;
	}), w = u + f;
	if (C) {
		var T = !1;
		return (S || n) && (T = om(m, g, _, v, o.map(function(e) {
			return rn(e, 0, Math.min(Math.abs(_) / 2, Math.abs(v) / 2));
		}), w, t.x, t.y)), !T && (x || n) && (T = r(e, t)), T;
	} else {
		var E = w / 2;
		if (x && S || n) return Wp(m - E, g - E, _ + E, v + E, t.x, t.y);
		if (x) return Wp(m, g, _, v, t.x, t.y);
		if (S) return Gp(m, g, _, v, w, t.x, t.y);
	}
	return !1;
}
function om(e, t, n, r, i, a, o, s) {
	var c = P(i, 4), l = c[0], u = c[1], d = c[2], f = c[3];
	return qp(e + l, t, e + n - u, t, a, o, s) || qp(e + n, t + u, e + n, t + r - d, a, o, s) || qp(e + n - d, t + r, e + f, t + r, a, o, s) || qp(e, t + r - f, e, t + l, a, o, s) || Kp(e + n - u, t + u, u, 1.5 * Math.PI, 2 * Math.PI, a, o, s) || Kp(e + n - d, t + r - d, d, 0, .5 * Math.PI, a, o, s) || Kp(e + f, t + r - f, f, .5 * Math.PI, Math.PI, a, o, s) || Kp(e + l, t + l, l, Math.PI, 1.5 * Math.PI, a, o, s);
}
function sm(e, t, n, r, i, a) {
	var o = e.parsedStyle, s = o.pointerEvents, c = s === void 0 ? "auto" : s, l = o.x, u = l === void 0 ? 0 : l, d = o.y, f = d === void 0 ? 0 : d, p = o.width, m = o.height;
	if (c === "non-transparent-pixel") {
		var g = i.config.offscreenCanvas, _ = a.offscreenCanvasCreator.getOrCreateCanvas(g), v = a.offscreenCanvasCreator.getOrCreateContext(g, { willReadFrequently: !0 });
		return _.width = p, _.height = m, i.defaultStyleRendererFactory[B.IMAGE].render(v, h(h({}, e.parsedStyle), {}, {
			x: 0,
			y: 0
		}), e, void 0, void 0, void 0), v.getImageData(t.x - u, t.y - f, 1, 1).data.every(function(e) {
			return e !== 0;
		});
	}
	return !0;
}
function cm(e, t, n, r) {
	var i = e.getGeometryBounds();
	return t.x >= i.min[0] && t.y >= i.min[1] && t.x <= i.max[0] && t.y <= i.max[1];
}
var lm = function(e) {
	function t() {
		var e;
		g(this, t);
		var n = [...arguments];
		return e = k(this, t, [].concat(n)), e.name = "canvas-picker", e;
	}
	return j(t, e), v(t, [{
		key: "init",
		value: function() {
			var e, t = (e = {}, p(p(p(p(p(p(p(p(p(p(e, B.CIRCLE, Vp), B.ELLIPSE, Up), B.RECT, am), B.LINE, em), B.POLYLINE, im), B.POLYGON, rm), B.PATH, nm), B.TEXT, cm), B.GROUP, null), B.IMAGE, sm), p(p(e, B.HTML, null), B.MESH, null));
			this.context.pointInPathPickerFactory = t, this.addRenderingPlugin(new Bp());
		}
	}, {
		key: "destroy",
		value: function() {
			delete this.context.pointInPathPickerFactory, this.removeAllRenderingPlugins();
		}
	}]);
}($r);
function um(e, t) {
	var n = t.cx, r = n === void 0 ? 0 : n, i = t.cy, a = i === void 0 ? 0 : i, o = t.r;
	e.arc(r, a, o, 0, Math.PI * 2, !1);
}
function dm(e, t) {
	var n = t.cx, r = n === void 0 ? 0 : n, i = t.cy, a = i === void 0 ? 0 : i, o = t.rx, s = t.ry;
	if (e.ellipse) e.ellipse(r, a, o, s, 0, 0, Math.PI * 2, !1);
	else {
		var c = o > s ? o : s, l = o > s ? 1 : o / s, u = o > s ? s / o : 1;
		e.save(), e.scale(l, u), e.arc(r, a, c, 0, Math.PI * 2);
	}
}
function fm(e, t) {
	var n = t.x1, r = t.y1, i = t.x2, a = t.y2, o = t.markerStart, s = t.markerEnd, c = t.markerStartOffset, l = t.markerEndOffset, u = 0, d = 0, f = 0, p = 0, m = 0, h, g;
	o && Z(o) && c && (h = i - n, g = a - r, m = Math.atan2(g, h), u = Math.cos(m) * (c || 0), d = Math.sin(m) * (c || 0)), s && Z(s) && l && (h = n - i, g = r - a, m = Math.atan2(g, h), f = Math.cos(m) * (l || 0), p = Math.sin(m) * (l || 0)), e.moveTo(n + u, r + d), e.lineTo(i + f, a + p);
}
function pm(e, t) {
	var n = t.markerStart, r = t.markerEnd, i = t.markerStartOffset, a = t.markerEndOffset, o = t.d, s = o.absolutePath, c = o.segments, l = 0, u = 0, d = 0, f = 0, p = 0, m, h;
	if (n && Z(n) && i) {
		var g = P(n.parentNode.getStartTangent(), 2), _ = g[0], v = g[1];
		m = _[0] - v[0], h = _[1] - v[1], p = Math.atan2(h, m), l = Math.cos(p) * (i || 0), u = Math.sin(p) * (i || 0);
	}
	if (r && Z(r) && a) {
		var y = P(r.parentNode.getEndTangent(), 2), b = y[0], x = y[1];
		m = b[0] - x[0], h = b[1] - x[1], p = Math.atan2(h, m), d = Math.cos(p) * (a || 0), f = Math.sin(p) * (a || 0);
	}
	for (var S = 0; S < s.length; S++) {
		var C = s[S], w = C[0], T = s[S + 1], E = S === 0 && (l !== 0 || u !== 0), D = (S === s.length - 1 || T && (T[0] === "M" || T[0] === "Z")) && d !== 0 && f !== 0, O = P(E ? [l, u] : [0, 0], 2), k = O[0], A = O[1], j = P(D ? [d, f] : [0, 0], 2), ee = j[0], M = j[1];
		switch (w) {
			case "M":
				e.moveTo(C[1] + k, C[2] + A);
				break;
			case "L":
				e.lineTo(C[1] + ee, C[2] + M);
				break;
			case "Q":
				e.quadraticCurveTo(C[1], C[2], C[3] + ee, C[4] + M);
				break;
			case "C":
				e.bezierCurveTo(C[1], C[2], C[3], C[4], C[5] + ee, C[6] + M);
				break;
			case "A":
				var N = c[S].arcParams, te = N.cx, F = N.cy, ne = N.rx, re = N.ry, ie = N.startAngle, ae = N.endAngle, I = N.xRotation, oe = N.sweepFlag;
				if (e.ellipse) e.ellipse(te, F, ne, re, I, ie, ae, !!(1 - oe));
				else {
					var se = ne > re ? ne : re, ce = ne > re ? 1 : ne / re, le = ne > re ? re / ne : 1;
					e.translate(te, F), e.rotate(I), e.scale(ce, le), e.arc(0, 0, se, ie, ae, !!(1 - oe)), e.scale(1 / ce, 1 / le), e.rotate(-I), e.translate(-te, -F);
				}
				D && e.lineTo(C[6] + d, C[7] + f);
				break;
			case "Z":
				e.closePath();
				break;
		}
	}
}
function mm(e, t) {
	var n = t.markerStart, r = t.markerEnd, i = t.markerStartOffset, a = t.markerEndOffset, o = t.points.points, s = o.length, c = o[0][0], l = o[0][1], u = o[s - 1][0], d = o[s - 1][1], f = 0, p = 0, m = 0, h = 0, g = 0, _, v;
	n && Z(n) && i && (_ = o[1][0] - o[0][0], v = o[1][1] - o[0][1], g = Math.atan2(v, _), f = Math.cos(g) * (i || 0), p = Math.sin(g) * (i || 0)), r && Z(r) && a && (_ = o[s - 1][0] - o[0][0], v = o[s - 1][1] - o[0][1], g = Math.atan2(v, _), m = Math.cos(g) * (a || 0), h = Math.sin(g) * (a || 0)), e.moveTo(c + (f || m), l + (p || h));
	for (var y = 1; y < s - 1; y++) {
		var b = o[y];
		e.lineTo(b[0], b[1]);
	}
	e.lineTo(u, d);
}
function hm(e, t) {
	var n = t.markerStart, r = t.markerEnd, i = t.markerStartOffset, a = t.markerEndOffset, o = t.points.points, s = o.length, c = o[0][0], l = o[0][1], u = o[s - 1][0], d = o[s - 1][1], f = 0, p = 0, m = 0, h = 0, g = 0, _, v;
	n && Z(n) && i && (_ = o[1][0] - o[0][0], v = o[1][1] - o[0][1], g = Math.atan2(v, _), f = Math.cos(g) * (i || 0), p = Math.sin(g) * (i || 0)), r && Z(r) && a && (_ = o[s - 2][0] - o[s - 1][0], v = o[s - 2][1] - o[s - 1][1], g = Math.atan2(v, _), m = Math.cos(g) * (a || 0), h = Math.sin(g) * (a || 0)), e.moveTo(c + f, l + p);
	for (var y = 1; y < s - 1; y++) {
		var b = o[y];
		e.lineTo(b[0], b[1]);
	}
	e.lineTo(u + m, d + h);
}
function gm(e, t) {
	var n = t.x, r = n === void 0 ? 0 : n, i = t.y, a = i === void 0 ? 0 : i, o = t.radius, s = t.width, c = t.height, l = s, u = c;
	if (!(o && o.some(function(e) {
		return e !== 0;
	}))) e.rect(r, a, l, u);
	else {
		var d = s > 0 ? 1 : -1, f = c > 0 ? 1 : -1, p = d + f === 0, m = P(o.map(function(e) {
			return rn(e, 0, Math.min(Math.abs(l) / 2, Math.abs(u) / 2));
		}), 4), h = m[0], g = m[1], _ = m[2], v = m[3];
		e.moveTo(d * h + r, a), e.lineTo(l - d * g + r, a), g !== 0 && e.arc(l - d * g + r, f * g + a, g, -f * Math.PI / 2, d > 0 ? 0 : Math.PI, p), e.lineTo(l + r, u - f * _ + a), _ !== 0 && e.arc(l - d * _ + r, u - f * _ + a, _, d > 0 ? 0 : Math.PI, f > 0 ? Math.PI / 2 : 1.5 * Math.PI, p), e.lineTo(d * v + r, u + a), v !== 0 && e.arc(d * v + r, u - f * v + a, v, f > 0 ? Math.PI / 2 : -Math.PI / 2, d > 0 ? Math.PI : 0, p), e.lineTo(r, f * h + a), h !== 0 && e.arc(d * h + r, f * h + a, h, d > 0 ? Math.PI : 0, f > 0 ? Math.PI * 1.5 : Math.PI / 2, p);
	}
}
var _m = function(e) {
	function t() {
		var e;
		g(this, t);
		var n = [...arguments];
		return e = k(this, t, [].concat(n)), e.name = "canvas-path-generator", e;
	}
	return j(t, e), v(t, [{
		key: "init",
		value: function() {
			var e, t = (e = {}, p(p(p(p(p(p(p(p(p(p(e, B.CIRCLE, um), B.ELLIPSE, dm), B.RECT, gm), B.LINE, fm), B.POLYLINE, hm), B.POLYGON, mm), B.PATH, pm), B.TEXT, void 0), B.GROUP, void 0), B.IMAGE, void 0), p(p(p(e, B.HTML, void 0), B.MESH, void 0), B.FRAGMENT, void 0));
			this.context.pathGeneratorFactory = t;
		}
	}, {
		key: "destroy",
		value: function() {
			delete this.context.pathGeneratorFactory;
		}
	}]);
}($r), vm = function() {
	function e(t) {
		g(this, e), this.renderingContext = t.renderingContext, this.canvasConfig = t.config;
	}
	return v(e, [
		{
			key: "init",
			value: function() {
				var e = this.canvasConfig, t = e.container, n = e.canvas;
				if (n) this.$canvas = n, t && n.parentElement !== t && t.appendChild(n), this.$container = n.parentElement, this.canvasConfig.container = this.$container;
				else if (t && (this.$container = nn(t) ? document.getElementById(t) : t, this.$container)) {
					var r = document.createElement("canvas");
					this.$container.appendChild(r), this.$container.style.position || (this.$container.style.position = "relative"), this.$canvas = r;
				}
				this.context = this.$canvas.getContext("2d"), this.resize(this.canvasConfig.width, this.canvasConfig.height);
			}
		},
		{
			key: "getContext",
			value: function() {
				return this.context;
			}
		},
		{
			key: "getDomElement",
			value: function() {
				return this.$canvas;
			}
		},
		{
			key: "getDPR",
			value: function() {
				return this.dpr;
			}
		},
		{
			key: "getBoundingClientRect",
			value: function() {
				if (this.$canvas.getBoundingClientRect) return this.$canvas.getBoundingClientRect();
			}
		},
		{
			key: "destroy",
			value: function() {
				this.$container && this.$canvas && this.$canvas.parentNode && this.$container.removeChild(this.$canvas);
			}
		},
		{
			key: "resize",
			value: function(e, t) {
				this.dpr = this.canvasConfig.devicePixelRatio, this.$canvas && (this.$canvas.width = this.dpr * e, this.$canvas.height = this.dpr * t, bc(this.$canvas, e, t)), this.renderingContext.renderReasons.add(Ol.CAMERA_CHANGED);
			}
		},
		{
			key: "applyCursorStyle",
			value: function(e) {
				this.$container && this.$container.style && (this.$container.style.cursor = e);
			}
		},
		{
			key: "toDataURL",
			value: function() {
				var e = Jr(Kr().mark(function e() {
					var t, n, r, i = arguments;
					return Kr().wrap(function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0: return t = i.length > 0 && i[0] !== void 0 ? i[0] : {}, n = t.type, r = t.encoderOptions, e.abrupt("return", this.context.canvas.toDataURL(n, r));
							case 1:
							case "end": return e.stop();
						}
					}, e, this);
				}));
				function t() {
					return e.apply(this, arguments);
				}
				return t;
			}()
		}
	]);
}(), ym = function(e) {
	function t() {
		var e;
		g(this, t);
		var n = [...arguments];
		return e = k(this, t, [].concat(n)), e.name = "canvas-context-register", e;
	}
	return j(t, e), v(t, [{
		key: "init",
		value: function() {
			this.context.ContextService = vm;
		}
	}, {
		key: "destroy",
		value: function() {
			delete this.context.ContextService;
		}
	}]);
}($r), bm = function(e) {
	function t(e) {
		var n;
		return g(this, t), n = k(this, t, [e]), n.registerPlugin(new ym()), n.registerPlugin(new gd.Plugin()), n.registerPlugin(new _m()), n.registerPlugin(new Fp()), n.registerPlugin(new xd.Plugin()), n.registerPlugin(new lm()), n.registerPlugin(new yd.Plugin()), n;
	}
	return j(t, e), v(t);
}(ei), xm = class {
	callbacks = [];
	listen(e) {
		this.callbacks.push(e);
	}
	call(...e) {
		this.callbacks.forEach(function(t) {
			t.apply(void 0, e);
		});
	}
}, Sm = 1e3, Cm = 1001, wm = 1002, Tm = 1006, Em = 1008, Dm = 1009, Om = 1023, km = 2300, Am = 2301, jm = 2302, Mm = 2303, Nm = 2400, Pm = 2401, Fm = 2402, Im = "srgb", Lm = "srgb-linear", Rm = "linear", zm = "srgb", Bm = 2e3;
function Vm(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Hm(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
var Um = {}, Wm = null;
function Gm(e) {
	let t = e[0];
	if (typeof t == "string" && t.startsWith("TSL:")) {
		let t = e[1];
		t && t.isStackTrace ? e[0] += " " + t.getLocation() : e[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
	}
	return e;
}
function Km(...e) {
	e = Gm(e);
	let t = "THREE." + e.shift();
	if (Wm) Wm("warn", t, ...e);
	else {
		let n = e[0];
		n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
	}
}
function qm(...e) {
	e = Gm(e);
	let t = "THREE." + e.shift();
	if (Wm) Wm("error", t, ...e);
	else {
		let n = e[0];
		n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
	}
}
function Jm(...e) {
	let t = e.join(" ");
	t in Um || (Um[t] = !0, Km(...e));
}
var Ym = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners;
		if (n === void 0) return;
		let r = n[e];
		if (r !== void 0) {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		let t = this._listeners;
		if (t === void 0) return;
		let n = t[e.type];
		if (n !== void 0) {
			e.target = this;
			let t = n.slice(0);
			for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
			e.target = null;
		}
	}
}, Xm = "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split(".");
Math.PI / 180, 180 / Math.PI;
function Zm() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (Xm[e & 255] + Xm[e >> 8 & 255] + Xm[e >> 16 & 255] + Xm[e >> 24 & 255] + "-" + Xm[t & 255] + Xm[t >> 8 & 255] + "-" + Xm[t >> 16 & 15 | 64] + Xm[t >> 24 & 255] + "-" + Xm[n & 63 | 128] + Xm[n >> 8 & 255] + "-" + Xm[n >> 16 & 255] + Xm[n >> 24 & 255] + Xm[r & 255] + Xm[r >> 8 & 255] + Xm[r >> 16 & 255] + Xm[r >> 24 & 255]).toLowerCase();
}
function Qm(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function $m(e, t) {
	return (e % t + t) % t;
}
function eh(e, t, n) {
	return (1 - n) * e + n * t;
}
var Q = class e {
	constructor(t = 0, n = 0) {
		e.prototype.isVector2 = !0, this.x = t, this.y = n;
	}
	get width() {
		return this.x;
	}
	set width(e) {
		this.x = e;
	}
	get height() {
		return this.y;
	}
	set height(e) {
		this.y = e;
	}
	set(e, t) {
		return this.x = e, this.y = t, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = Qm(this.x, e.x, t.x), this.y = Qm(this.y, e.y, t.y), this;
	}
	clampScalar(e, t) {
		return this.x = Qm(this.x, e, t), this.y = Qm(this.y, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Qm(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y;
	}
	cross(e) {
		return this.x * e.y - this.y * e.x;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI;
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(Qm(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
		return t * t + n * n;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this;
	}
	rotateAround(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}, th = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, o) {
		let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
		if (u !== m || s !== d || c !== f || l !== p) {
			let e = s * d + c * f + l * p + u * m;
			e < 0 && (d = -d, f = -f, p = -p, m = -m, e = -e);
			let t = 1 - o;
			if (e < .9995) {
				let n = Math.acos(e), r = Math.sin(n);
				t = Math.sin(t * n) / r, o = Math.sin(o * n) / r, s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
			} else {
				s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
				let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
				s *= e, c *= e, l *= e, u *= e;
			}
		}
		e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
		return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get w() {
		return this._w;
	}
	set w(e) {
		this._w = e, this._onChangeCallback();
	}
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t = !0) {
		let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), d = s(n / 2), f = s(r / 2), p = s(i / 2);
		switch (a) {
			case "XYZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "YXZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "ZXY":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "ZYX":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "YZX":
				this._x = d * l * u + c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "XZY":
				this._x = d * l * u - c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u + d * f * p;
				break;
			default: Km("Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return t === !0 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
		if (d > 0) {
			let e = .5 / Math.sqrt(d + 1);
			this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
		} else if (n > o && n > u) {
			let e = 2 * Math.sqrt(1 + n - o - u);
			this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
		} else if (o > u) {
			let e = 2 * Math.sqrt(1 + o - n - u);
			this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
		} else {
			let e = 2 * Math.sqrt(1 + u - n - o);
			this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(Qm(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
	}
	identity() {
		return this.set(0, 0, 0, 1);
	}
	invert() {
		return this.conjugate();
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}
	normalize() {
		let e = this.length();
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
		return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = this.dot(e);
		o < 0 && (n = -n, r = -r, i = -i, a = -a, o = -o);
		let s = 1 - t;
		if (o < .9995) {
			let e = Math.acos(o), c = Math.sin(e);
			s = Math.sin(s * e) / c, t = Math.sin(t * e) / c, this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this._onChangeCallback();
		} else this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this.normalize();
		return this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
		return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	}
	fromArray(e, t = 0) {
		return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
	}
	fromBufferAttribute(e, t) {
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}, $ = class e {
	constructor(t = 0, n = 0, r = 0) {
		e.prototype.isVector3 = !0, this.x = t, this.y = n, this.z = r;
	}
	set(e, t, n) {
		return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this;
	}
	multiplyVectors(e, t) {
		return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
	}
	applyEuler(e) {
		return this.applyQuaternion(rh.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(rh.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = 2 * (a * r - o * n), l = 2 * (o * t - i * r), u = 2 * (i * n - a * t);
		return this.x = t + s * c + a * u - o * l, this.y = n + s * l + o * c - i * u, this.z = r + s * u + i * l - a * c, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
	}
	clamp(e, t) {
		return this.x = Qm(this.x, e.x, t.x), this.y = Qm(this.y, e.y, t.y), this.z = Qm(this.z, e.z, t.z), this;
	}
	clampScalar(e, t) {
		return this.x = Qm(this.x, e, t), this.y = Qm(this.y, e, t), this.z = Qm(this.z, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(Qm(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
	}
	cross(e) {
		return this.crossVectors(this, e);
	}
	crossVectors(e, t) {
		let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
		return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return nh.copy(this).projectOnVector(e), this.sub(nh);
	}
	reflect(e) {
		return this.sub(nh.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(Qm(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, t * 4);
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, t * 3);
	}
	setFromEuler(e) {
		return this.x = e._x, this.y = e._y, this.z = e._z, this;
	}
	setFromColor(e) {
		return this.x = e.r, this.y = e.g, this.z = e.b, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
	}
	randomDirection() {
		let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
		return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}, nh = new $(), rh = new th(), ih = class e {
	constructor(t, n, r, i, a, o, s, c, l) {
		e.prototype.isMatrix3 = !0, this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], t !== void 0 && this.set(t, n, r, i, a, o, s, c, l);
	}
	set(e, t, n, r, i, a, o, s, c) {
		let l = this.elements;
		return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
		return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
		return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let m = 1 / p;
		return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, o) {
		let s = Math.cos(i), c = Math.sin(i);
		return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return this.premultiply(ah.makeScale(e, t)), this;
	}
	rotate(e) {
		return this.premultiply(ah.makeRotation(-e)), this;
	}
	translate(e, t) {
		return this.premultiply(ah.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}, ah = new ih(), oh = new ih().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), sh = new ih().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function ch() {
	let e = {
		enabled: !0,
		workingColorSpace: Lm,
		spaces: {},
		convert: function(e, t, n) {
			return this.enabled === !1 || t === n || !t || !n ? e : (this.spaces[t].transfer === "srgb" && (e.r = uh(e.r), e.g = uh(e.g), e.b = uh(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = dh(e.r), e.g = dh(e.g), e.b = dh(e.b)), e);
		},
		workingToColorSpace: function(e, t) {
			return this.convert(e, this.workingColorSpace, t);
		},
		colorSpaceToWorking: function(e, t) {
			return this.convert(e, t, this.workingColorSpace);
		},
		getPrimaries: function(e) {
			return this.spaces[e].primaries;
		},
		getTransfer: function(e) {
			return e === "" ? Rm : this.spaces[e].transfer;
		},
		getToneMappingMode: function(e) {
			return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
		},
		getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
			return e.fromArray(this.spaces[t].luminanceCoefficients);
		},
		define: function(e) {
			Object.assign(this.spaces, e);
		},
		_getMatrix: function(e, t, n) {
			return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
		},
		_getDrawingBufferColorSpace: function(e) {
			return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
		},
		_getUnpackColorSpace: function(e = this.workingColorSpace) {
			return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
		},
		fromWorkingColorSpace: function(t, n) {
			return Jm("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(t, n);
		},
		toWorkingColorSpace: function(t, n) {
			return Jm("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(t, n);
		}
	}, t = [
		.64,
		.33,
		.3,
		.6,
		.15,
		.06
	], n = [
		.2126,
		.7152,
		.0722
	], r = [.3127, .329];
	return e.define({
		[Lm]: {
			primaries: t,
			whitePoint: r,
			transfer: Rm,
			toXYZ: oh,
			fromXYZ: sh,
			luminanceCoefficients: n,
			workingColorSpaceConfig: { unpackColorSpace: Im },
			outputColorSpaceConfig: { drawingBufferColorSpace: Im }
		},
		[Im]: {
			primaries: t,
			whitePoint: r,
			transfer: zm,
			toXYZ: oh,
			fromXYZ: sh,
			luminanceCoefficients: n,
			outputColorSpaceConfig: { drawingBufferColorSpace: Im }
		}
	}), e;
}
var lh = ch();
function uh(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function dh(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
var fh, ph = class {
	static getDataURL(e, t = "image/png") {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let n;
		if (e instanceof HTMLCanvasElement) n = e;
		else {
			fh === void 0 && (fh = Hm("canvas")), fh.width = e.width, fh.height = e.height;
			let t = fh.getContext("2d");
			e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height), n = fh;
		}
		return n.toDataURL(t);
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = Hm("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = uh(i[e] / 255) * 255;
			return n.putImageData(r, 0, 0), t;
		} else if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(uh(t[e] / 255) * 255) : t[e] = uh(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		} else return Km("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, mh = 0, hh = class {
	constructor(e = null) {
		this.isSource = !0, Object.defineProperty(this, "id", { value: mh++ }), this.uuid = Zm(), this.data = e, this.dataReady = !0, this.version = 0;
	}
	getSize(e) {
		let t = this.data;
		return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width, t.height, t.depth || 0), e;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(gh(r[t].image)) : e.push(gh(r[t]));
			} else e = gh(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function gh(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? ph.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (Km("Texture: Unable to serialize Texture."), {});
}
var _h = 0, vh = new $(), yh = class e extends Ym {
	constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, r = Cm, i = Cm, a = Tm, o = Em, s = Om, c = Dm, l = e.DEFAULT_ANISOTROPY, u = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: _h++ }), this.uuid = Zm(), this.name = "", this.source = new hh(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = r, this.wrapT = i, this.magFilter = a, this.minFilter = o, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = c, this.offset = new Q(0, 0), this.repeat = new Q(1, 1), this.center = new Q(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ih(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
	}
	get width() {
		return this.source.getSize(vh).x;
	}
	get height() {
		return this.source.getSize(vh).y;
	}
	get depth() {
		return this.source.getSize(vh).z;
	}
	get image() {
		return this.source.data;
	}
	set image(e = null) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	setValues(e) {
		for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				Km(`Texture.setValues(): parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			if (r === void 0) {
				Km(`Texture.setValues(): property '${t}' does not exist.`);
				continue;
			}
			r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.7,
				type: "Texture",
				generator: "Texture.toJSON"
			},
			uuid: this.uuid,
			name: this.name,
			image: this.source.toJSON(e).uuid,
			mapping: this.mapping,
			channel: this.channel,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			colorSpace: this.colorSpace,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	transformUv(e) {
		if (this.mapping !== 300) return e;
		if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
			case Sm:
				e.x -= Math.floor(e.x);
				break;
			case Cm:
				e.x = e.x < 0 ? 0 : 1;
				break;
			case wm:
				Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
				break;
		}
		if (e.y < 0 || e.y > 1) switch (this.wrapT) {
			case Sm:
				e.y -= Math.floor(e.y);
				break;
			case Cm:
				e.y = e.y < 0 ? 0 : 1;
				break;
			case wm:
				Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
				break;
		}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, this.source.needsUpdate = !0);
	}
	set needsPMREMUpdate(e) {
		e === !0 && this.pmremVersion++;
	}
};
yh.DEFAULT_IMAGE = null, yh.DEFAULT_MAPPING = 300, yh.DEFAULT_ANISOTROPY = 1;
var bh = class e {
	constructor(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
		e.prototype.isMatrix4 = !0, this.elements = [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		], t !== void 0 && this.set(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g);
	}
	set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		let g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return this.determinant() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		if (e.determinant() === 0) return this.identity();
		let t = this.elements, n = e.elements, r = 1 / xh.setFromMatrixColumn(e, 0).length(), i = 1 / xh.setFromMatrixColumn(e, 1).length(), a = 1 / xh.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
		} else if (e.order === "YXZ") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
		} else if (e.order === "ZXY") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
		} else if (e.order === "ZYX") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
		} else if (e.order === "YZX") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
		} else if (e.order === "XZY") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(Ch, e, wh);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return Dh.subVectors(e, t), Dh.lengthSq() === 0 && (Dh.z = 1), Dh.normalize(), Th.crossVectors(n, Dh), Th.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Dh.x += 1e-4 : Dh.z += 1e-4, Dh.normalize(), Th.crossVectors(n, Dh)), Th.normalize(), Eh.crossVectors(Dh, Th), r[0] = Th.x, r[4] = Eh.x, r[8] = Dh.x, r[1] = Th.y, r[5] = Eh.y, r[9] = Dh.y, r[2] = Th.z, r[6] = Eh.z, r[10] = Dh.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], k = r[2], A = r[6], j = r[10], ee = r[14], M = r[3], N = r[7], P = r[11], te = r[15];
		return i[0] = a * x + o * T + s * k + c * M, i[4] = a * S + o * E + s * A + c * N, i[8] = a * C + o * D + s * j + c * P, i[12] = a * w + o * O + s * ee + c * te, i[1] = l * x + u * T + d * k + f * M, i[5] = l * S + u * E + d * A + f * N, i[9] = l * C + u * D + d * j + f * P, i[13] = l * w + u * O + d * ee + f * te, i[2] = p * x + m * T + h * k + g * M, i[6] = p * S + m * E + h * A + g * N, i[10] = p * C + m * D + h * j + g * P, i[14] = p * w + m * O + h * ee + g * te, i[3] = _ * x + v * T + y * k + b * M, i[7] = _ * S + v * E + y * A + b * N, i[11] = _ * C + v * D + y * j + b * P, i[15] = _ * w + v * O + y * ee + b * te, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15], _ = s * f - c * d, v = o * f - c * u, y = o * d - s * u, b = a * f - c * l, x = a * d - s * l, S = a * u - o * l;
		return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = t * c - i * a, b = n * s - r * o, x = n * c - i * o, S = r * c - i * s, C = l * m - u * p, w = l * h - d * p, T = l * g - f * p, E = u * h - d * m, D = u * g - f * m, O = d * g - f * h, k = _ * O - v * D + y * E + b * T - x * w + S * C;
		if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let A = 1 / k;
		return e[0] = (o * O - s * D + c * E) * A, e[1] = (r * D - n * O - i * E) * A, e[2] = (m * S - h * x + g * b) * A, e[3] = (d * x - u * S - f * b) * A, e[4] = (s * T - a * O - c * w) * A, e[5] = (t * O - r * T + i * w) * A, e[6] = (h * y - p * S - g * v) * A, e[7] = (l * S - d * y + f * v) * A, e[8] = (a * D - o * T + c * C) * A, e[9] = (n * T - t * D - i * C) * A, e[10] = (p * x - m * y + g * _) * A, e[11] = (u * y - l * x - f * _) * A, e[12] = (o * w - a * E - s * C) * A, e[13] = (t * E - n * w + r * C) * A, e[14] = (m * v - p * b - h * _) * A, e[15] = (l * b - u * v + d * _) * A, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
		return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
		return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements;
		e.x = r[12], e.y = r[13], e.z = r[14];
		let i = this.determinant();
		if (i === 0) return n.set(1, 1, 1), t.identity(), this;
		let a = xh.set(r[0], r[1], r[2]).length(), o = xh.set(r[4], r[5], r[6]).length(), s = xh.set(r[8], r[9], r[10]).length();
		i < 0 && (a = -a), Sh.copy(this);
		let c = 1 / a, l = 1 / o, u = 1 / s;
		return Sh.elements[0] *= c, Sh.elements[1] *= c, Sh.elements[2] *= c, Sh.elements[4] *= l, Sh.elements[5] *= l, Sh.elements[6] *= l, Sh.elements[8] *= u, Sh.elements[9] *= u, Sh.elements[10] *= u, t.setFromRotationMatrix(Sh), n.x = a, n.y = o, n.z = s, this;
	}
	makePerspective(e, t, n, r, i, a, o = Bm, s = !1) {
		let c = this.elements, l = 2 * i / (t - e), u = 2 * i / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r), p, m;
		if (s) p = i / (a - i), m = a * i / (a - i);
		else if (o === 2e3) p = -(a + i) / (a - i), m = -2 * a * i / (a - i);
		else if (o === 2001) p = -a / (a - i), m = -a * i / (a - i);
		else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, o = Bm, s = !1) {
		let c = this.elements, l = 2 / (t - e), u = 2 / (n - r), d = -(t + e) / (t - e), f = -(n + r) / (n - r), p, m;
		if (s) p = 1 / (a - i), m = a / (a - i);
		else if (o === 2e3) p = -2 / (a - i), m = -(a + i) / (a - i);
		else if (o === 2001) p = -1 / (a - i), m = -i / (a - i);
		else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
}, xh = new $(), Sh = new bh(), Ch = new $(0, 0, 0), wh = new $(1, 1, 1), Th = new $(), Eh = new $(), Dh = new $(), Oh = new bh(), kh = new th(), Ah = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(e) {
		this._order = e, this._onChangeCallback();
	}
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], l = r[9], u = r[2], d = r[6], f = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(Qm(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-Qm(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(Qm(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
				break;
			case "ZYX":
				this._y = Math.asin(-Qm(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
				break;
			case "YZX":
				this._z = Math.asin(Qm(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, f));
				break;
			case "XZY":
				this._z = Math.asin(-Qm(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f), this._y = 0);
				break;
			default: Km("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return Oh.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Oh, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return kh.setFromEuler(this), this.setFromQuaternion(kh, e);
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	}
	fromArray(e) {
		return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
Ah.DEFAULT_ORDER = "XYZ";
var jh = class {
	constructor() {
		this.mask = 1;
	}
	set(e) {
		this.mask = (1 << e | 0) >>> 0;
	}
	enable(e) {
		this.mask |= 1 << e | 0;
	}
	enableAll() {
		this.mask = -1;
	}
	toggle(e) {
		this.mask ^= 1 << e | 0;
	}
	disable(e) {
		this.mask &= ~(1 << e | 0);
	}
	disableAll() {
		this.mask = 0;
	}
	test(e) {
		return (this.mask & e.mask) !== 0;
	}
	isEnabled(e) {
		return (this.mask & (1 << e | 0)) != 0;
	}
}, Mh = 0, Nh = new $(), Ph = new th(), Fh = new bh(), Ih = new $(), Lh = new $(), Rh = new $(), zh = new th(), Bh = new $(1, 0, 0), Vh = new $(0, 1, 0), Hh = new $(0, 0, 1), Uh = { type: "added" }, Wh = { type: "removed" }, Gh = {
	type: "childadded",
	child: null
}, Kh = {
	type: "childremoved",
	child: null
}, qh = class e extends Ym {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Mh++ }), this.uuid = Zm(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new $(), n = new Ah(), r = new th(), i = new $(1, 1, 1);
		function a() {
			r.setFromEuler(n, !1);
		}
		function o() {
			n.setFromQuaternion(r, void 0, !1);
		}
		n._onChange(a), r._onChange(o), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new bh() },
			normalMatrix: { value: new ih() }
		}), this.matrix = new bh(), this.matrixWorld = new bh(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new jh(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
	}
	onBeforeShadow() {}
	onAfterShadow() {}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this;
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0);
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e);
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e);
	}
	rotateOnAxis(e, t) {
		return Ph.setFromAxisAngle(e, t), this.quaternion.multiply(Ph), this;
	}
	rotateOnWorldAxis(e, t) {
		return Ph.setFromAxisAngle(e, t), this.quaternion.premultiply(Ph), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(Bh, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(Vh, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(Hh, e);
	}
	translateOnAxis(e, t) {
		return Nh.copy(e).applyQuaternion(this.quaternion), this.position.add(Nh.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(Bh, e);
	}
	translateY(e) {
		return this.translateOnAxis(Vh, e);
	}
	translateZ(e) {
		return this.translateOnAxis(Hh, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Fh.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? Ih.copy(e) : Ih.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), Lh.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Fh.lookAt(Lh, Ih, this.up) : Fh.lookAt(Ih, Lh, this.up), this.quaternion.setFromRotationMatrix(Fh), r && (Fh.extractRotation(r.matrixWorld), Ph.setFromRotationMatrix(Fh), this.quaternion.premultiply(Ph.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (qm("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Uh), Gh.child = e, this.dispatchEvent(Gh), Gh.child = null) : qm("Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Wh), Kh.child = e, this.dispatchEvent(Kh), Kh.child = null), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), Fh.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Fh.multiply(e.parent.matrixWorld)), e.applyMatrix4(Fh), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Uh), Gh.child = e, this.dispatchEvent(Gh), Gh.child = null, this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t, n = []) {
		this[e] === t && n.push(this);
		let r = this.children;
		for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Lh, e, Rh), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Lh, zh, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		let e = this.pivot;
		if (e !== null) {
			let t = e.x, n = e.y, r = e.z, i = this.matrix.elements;
			i[12] += t - i[0] * t - i[4] * n - i[8] * r, i[13] += n - i[1] * t - i[5] * n - i[9] * r, i[14] += r - i[2] * t - i[6] * n - i[10] * r;
		}
		this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	}
	updateWorldMatrix(e, t) {
		let n = this.parent;
		if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
			let e = this.children;
			for (let t = 0, n = e.length; t < n; t++) e[t].updateWorldMatrix(!1, !0);
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
		t && (e = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {},
			nodes: {}
		}, n.metadata = {
			version: 4.7,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), this.static !== !1 && (r.static = this.static), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
			boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
		})), r.instanceInfo = this._instanceInfo.map((e) => ({ ...e })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
			let t = [];
			for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
			r.material = t;
		} else r.material = i(e.materials, this.material);
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), e.pivot !== null && (this.pivot = e.pivot.clone()), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
};
qh.DEFAULT_UP = new $(0, 1, 0), qh.DEFAULT_MATRIX_AUTO_UPDATE = !0, qh.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var Jh = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, Yh = {
	h: 0,
	s: 0,
	l: 0
}, Xh = {
	h: 0,
	s: 0,
	l: 0
};
function Zh(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var Qh = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = Im) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, lh.colorSpaceToWorking(this, t), this;
	}
	setRGB(e, t, n, r = lh.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, lh.colorSpaceToWorking(this, r), this;
	}
	setHSL(e, t, n, r = lh.workingColorSpace) {
		if (e = $m(e, 1), t = Qm(t, 0, 1), n = Qm(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = Zh(i, r, e + 1 / 3), this.g = Zh(i, r, e), this.b = Zh(i, r, e - 1 / 3);
		}
		return lh.colorSpaceToWorking(this, r), this;
	}
	setStyle(e, t = Im) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && Km("Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], o = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: Km("Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			Km("Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = Im) {
		let n = Jh[e.toLowerCase()];
		return n === void 0 ? Km("Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = uh(e.r), this.g = uh(e.g), this.b = uh(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = dh(e.r), this.g = dh(e.g), this.b = dh(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = Im) {
		return lh.workingToColorSpace($h.copy(this), e), Math.round(Qm($h.r * 255, 0, 255)) * 65536 + Math.round(Qm($h.g * 255, 0, 255)) * 256 + Math.round(Qm($h.b * 255, 0, 255));
	}
	getHexString(e = Im) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = lh.workingColorSpace) {
		lh.workingToColorSpace($h.copy(this), t);
		let n = $h.r, r = $h.g, i = $h.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
		if (o === a) s = 0, c = 0;
		else {
			let e = a - o;
			switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
				case n:
					s = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					s = (i - n) / e + 2;
					break;
				case i:
					s = (n - r) / e + 4;
					break;
			}
			s /= 6;
		}
		return e.h = s, e.s = c, e.l = l, e;
	}
	getRGB(e, t = lh.workingColorSpace) {
		return lh.workingToColorSpace($h.copy(this), t), e.r = $h.r, e.g = $h.g, e.b = $h.b, e;
	}
	getStyle(e = Im) {
		lh.workingToColorSpace($h.copy(this), e);
		let t = $h.r, n = $h.g, r = $h.b;
		return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(Yh), this.setHSL(Yh.h + e, Yh.s + t, Yh.l + n);
	}
	add(e) {
		return this.r += e.r, this.g += e.g, this.b += e.b, this;
	}
	addColors(e, t) {
		return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
	}
	addScalar(e) {
		return this.r += e, this.g += e, this.b += e, this;
	}
	sub(e) {
		return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
	}
	multiply(e) {
		return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
	}
	multiplyScalar(e) {
		return this.r *= e, this.g *= e, this.b *= e, this;
	}
	lerp(e, t) {
		return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
	}
	lerpColors(e, t, n) {
		return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
	}
	lerpHSL(e, t) {
		this.getHSL(Yh), e.getHSL(Xh);
		let n = eh(Yh.h, Xh.h, t), r = eh(Yh.s, Xh.s, t), i = eh(Yh.l, Xh.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	}
	fromArray(e, t = 0) {
		return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
	}
	fromBufferAttribute(e, t) {
		return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
	}
	toJSON() {
		return this.getHex();
	}
	*[Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b;
	}
}, $h = new Qh();
Qh.NAMES = Jh;
var eg = class {
	constructor() {
		this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null;
	}
	getPoint() {
		Km("Curve: .getPoint() not implemented.");
	}
	getPointAt(e, t) {
		let n = this.getUtoTmapping(e);
		return this.getPoint(n, t);
	}
	getPoints(e = 5) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return t;
	}
	getSpacedPoints(e = 5) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
		return t;
	}
	getLength() {
		let e = this.getLengths();
		return e[e.length - 1];
	}
	getLengths(e = this.arcLengthDivisions) {
		if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
		this.needsUpdate = !1;
		let t = [], n, r = this.getPoint(0), i = 0;
		t.push(0);
		for (let a = 1; a <= e; a++) n = this.getPoint(a / e), i += n.distanceTo(r), t.push(i), r = n;
		return this.cacheArcLengths = t, t;
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.getLengths();
	}
	getUtoTmapping(e, t = null) {
		let n = this.getLengths(), r = 0, i = n.length, a;
		a = t || e * n[i - 1];
		let o = 0, s = i - 1, c;
		for (; o <= s;) if (r = Math.floor(o + (s - o) / 2), c = n[r] - a, c < 0) o = r + 1;
		else if (c > 0) s = r - 1;
		else {
			s = r;
			break;
		}
		if (r = s, n[r] === a) return r / (i - 1);
		let l = n[r], u = n[r + 1] - l, d = (a - l) / u;
		return (r + d) / (i - 1);
	}
	getTangent(e, t) {
		let n = 1e-4, r = e - n, i = e + n;
		r < 0 && (r = 0), i > 1 && (i = 1);
		let a = this.getPoint(r), o = this.getPoint(i), s = t || (a.isVector2 ? new Q() : new $());
		return s.copy(o).sub(a).normalize(), s;
	}
	getTangentAt(e, t) {
		let n = this.getUtoTmapping(e);
		return this.getTangent(n, t);
	}
	computeFrenetFrames(e, t = !1) {
		let n = new $(), r = [], i = [], a = [], o = new $(), s = new bh();
		for (let t = 0; t <= e; t++) {
			let n = t / e;
			r[t] = this.getTangentAt(n, new $());
		}
		i[0] = new $(), a[0] = new $();
		let c = Number.MAX_VALUE, l = Math.abs(r[0].x), u = Math.abs(r[0].y), d = Math.abs(r[0].z);
		l <= c && (c = l, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), i[0].crossVectors(r[0], o), a[0].crossVectors(r[0], i[0]);
		for (let t = 1; t <= e; t++) {
			if (i[t] = i[t - 1].clone(), a[t] = a[t - 1].clone(), o.crossVectors(r[t - 1], r[t]), o.length() > 2 ** -52) {
				o.normalize();
				let e = Math.acos(Qm(r[t - 1].dot(r[t]), -1, 1));
				i[t].applyMatrix4(s.makeRotationAxis(o, e));
			}
			a[t].crossVectors(r[t], i[t]);
		}
		if (t === !0) {
			let t = Math.acos(Qm(i[0].dot(i[e]), -1, 1));
			t /= e, r[0].dot(o.crossVectors(i[0], i[e])) > 0 && (t = -t);
			for (let n = 1; n <= e; n++) i[n].applyMatrix4(s.makeRotationAxis(r[n], t * n)), a[n].crossVectors(r[n], i[n]);
		}
		return {
			tangents: r,
			normals: i,
			binormals: a
		};
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "Curve",
			generator: "Curve.toJSON"
		} };
		return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
	}
	fromJSON(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this;
	}
}, tg = class extends eg {
	constructor(e = 0, t = 0, n = 1, r = 1, i = 0, a = Math.PI * 2, o = !1, s = 0) {
		super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = i, this.aEndAngle = a, this.aClockwise = o, this.aRotation = s;
	}
	getPoint(e, t = new Q()) {
		let n = t, r = Math.PI * 2, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < 2 ** -52;
		for (; i < 0;) i += r;
		for (; i > r;) i -= r;
		i < 2 ** -52 && (i = a ? 0 : r), this.aClockwise === !0 && !a && (i === r ? i = -r : i -= r);
		let o = this.aStartAngle + e * i, s = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
		if (this.aRotation !== 0) {
			let e = Math.cos(this.aRotation), t = Math.sin(this.aRotation), n = s - this.aX, r = c - this.aY;
			s = n * e - r * t + this.aX, c = n * t + r * e + this.aY;
		}
		return n.set(s, c);
	}
	copy(e) {
		return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
	}
}, ng = class extends tg {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, n, r, i, a), this.isArcCurve = !0, this.type = "ArcCurve";
	}
};
function rg() {
	let e = 0, t = 0, n = 0, r = 0;
	function i(i, a, o, s) {
		e = i, t = o, n = -3 * i + 3 * a - 2 * o - s, r = 2 * i - 2 * a + o + s;
	}
	return {
		initCatmullRom: function(e, t, n, r, a) {
			i(t, n, a * (n - e), a * (r - t));
		},
		initNonuniformCatmullRom: function(e, t, n, r, a, o, s) {
			let c = (t - e) / a - (n - e) / (a + o) + (n - t) / o, l = (n - t) / o - (r - t) / (o + s) + (r - n) / s;
			c *= o, l *= o, i(t, n, c, l);
		},
		calc: function(i) {
			let a = i * i, o = a * i;
			return e + t * i + n * a + r * o;
		}
	};
}
var ig = new $(), ag = new rg(), og = new rg(), sg = new rg(), cg = class extends eg {
	constructor(e = [], t = !1, n = "centripetal", r = .5) {
		super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = r;
	}
	getPoint(e, t = new $()) {
		let n = t, r = this.points, i = r.length, a = (i - +!this.closed) * e, o = Math.floor(a), s = a - o;
		this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i : s === 0 && o === i - 1 && (o = i - 2, s = 1);
		let c, l;
		this.closed || o > 0 ? c = r[(o - 1) % i] : (ig.subVectors(r[0], r[1]).add(r[0]), c = ig);
		let u = r[o % i], d = r[(o + 1) % i];
		if (this.closed || o + 2 < i ? l = r[(o + 2) % i] : (ig.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), l = ig), this.curveType === "centripetal" || this.curveType === "chordal") {
			let e = this.curveType === "chordal" ? .5 : .25, t = c.distanceToSquared(u) ** +e, n = u.distanceToSquared(d) ** +e, r = d.distanceToSquared(l) ** +e;
			n < 1e-4 && (n = 1), t < 1e-4 && (t = n), r < 1e-4 && (r = n), ag.initNonuniformCatmullRom(c.x, u.x, d.x, l.x, t, n, r), og.initNonuniformCatmullRom(c.y, u.y, d.y, l.y, t, n, r), sg.initNonuniformCatmullRom(c.z, u.z, d.z, l.z, t, n, r);
		} else this.curveType === "catmullrom" && (ag.initCatmullRom(c.x, u.x, d.x, l.x, this.tension), og.initCatmullRom(c.y, u.y, d.y, l.y, this.tension), sg.initCatmullRom(c.z, u.z, d.z, l.z, this.tension));
		return n.set(ag.calc(s), og.calc(s), sg.calc(s)), n;
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(n.clone());
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
	}
	toJSON() {
		let e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t];
			e.points.push(n.toArray());
		}
		return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(new $().fromArray(n));
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
	}
};
function lg(e, t, n, r, i) {
	let a = (r - t) * .5, o = (i - n) * .5, s = e * e, c = e * s;
	return (2 * n - 2 * r + a + o) * c + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n;
}
function ug(e, t) {
	let n = 1 - e;
	return n * n * t;
}
function dg(e, t) {
	return 2 * (1 - e) * e * t;
}
function fg(e, t) {
	return e * e * t;
}
function pg(e, t, n, r) {
	return ug(e, t) + dg(e, n) + fg(e, r);
}
function mg(e, t) {
	let n = 1 - e;
	return n * n * n * t;
}
function hg(e, t) {
	let n = 1 - e;
	return 3 * n * n * e * t;
}
function gg(e, t) {
	return 3 * (1 - e) * e * e * t;
}
function _g(e, t) {
	return e * e * e * t;
}
function vg(e, t, n, r, i) {
	return mg(e, t) + hg(e, n) + gg(e, r) + _g(e, i);
}
var yg = class extends eg {
	constructor(e = new Q(), t = new Q(), n = new Q(), r = new Q()) {
		super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
	}
	getPoint(e, t = new Q()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2, o = this.v3;
		return n.set(vg(e, r.x, i.x, a.x, o.x), vg(e, r.y, i.y, a.y, o.y)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}, bg = class extends eg {
	constructor(e = new $(), t = new $(), n = new $(), r = new $()) {
		super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
	}
	getPoint(e, t = new $()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2, o = this.v3;
		return n.set(vg(e, r.x, i.x, a.x, o.x), vg(e, r.y, i.y, a.y, o.y), vg(e, r.z, i.z, a.z, o.z)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}, xg = class extends eg {
	constructor(e = new Q(), t = new Q()) {
		super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
	}
	getPoint(e, t = new Q()) {
		let n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t = new Q()) {
		return t.subVectors(this.v2, this.v1).normalize();
	}
	getTangentAt(e, t) {
		return this.getTangent(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Sg = class extends eg {
	constructor(e = new $(), t = new $()) {
		super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
	}
	getPoint(e, t = new $()) {
		let n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t = new $()) {
		return t.subVectors(this.v2, this.v1).normalize();
	}
	getTangentAt(e, t) {
		return this.getTangent(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Cg = class extends eg {
	constructor(e = new Q(), t = new Q(), n = new Q()) {
		super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
	}
	getPoint(e, t = new Q()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2;
		return n.set(pg(e, r.x, i.x, a.x), pg(e, r.y, i.y, a.y)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, wg = class extends eg {
	constructor(e = new $(), t = new $(), n = new $()) {
		super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
	}
	getPoint(e, t = new $()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2;
		return n.set(pg(e, r.x, i.x, a.x), pg(e, r.y, i.y, a.y), pg(e, r.z, i.z, a.z)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Tg = class extends eg {
	constructor(e = []) {
		super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
	}
	getPoint(e, t = new Q()) {
		let n = t, r = this.points, i = (r.length - 1) * e, a = Math.floor(i), o = i - a, s = r[a === 0 ? a : a - 1], c = r[a], l = r[a > r.length - 2 ? r.length - 1 : a + 1], u = r[a > r.length - 3 ? r.length - 1 : a + 2];
		return n.set(lg(o, s.x, c.x, l.x, u.x), lg(o, s.y, c.y, l.y, u.y)), n;
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(n.clone());
		}
		return this;
	}
	toJSON() {
		let e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t];
			e.points.push(n.toArray());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(new Q().fromArray(n));
		}
		return this;
	}
}, Eg = Object.freeze({
	__proto__: null,
	ArcCurve: ng,
	CatmullRomCurve3: cg,
	CubicBezierCurve: yg,
	CubicBezierCurve3: bg,
	EllipseCurve: tg,
	LineCurve: xg,
	LineCurve3: Sg,
	QuadraticBezierCurve: Cg,
	QuadraticBezierCurve3: wg,
	SplineCurve: Tg
}), Dg = class extends eg {
	constructor() {
		super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
	}
	add(e) {
		this.curves.push(e);
	}
	closePath() {
		let e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
		if (!e.equals(t)) {
			let n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
			this.curves.push(new Eg[n](t, e));
		}
		return this;
	}
	getPoint(e, t) {
		let n = e * this.getLength(), r = this.getCurveLengths(), i = 0;
		for (; i < r.length;) {
			if (r[i] >= n) {
				let e = r[i] - n, a = this.curves[i], o = a.getLength(), s = o === 0 ? 0 : 1 - e / o;
				return a.getPointAt(s, t);
			}
			i++;
		}
		return null;
	}
	getLength() {
		let e = this.getCurveLengths();
		return e[e.length - 1];
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
	}
	getCurveLengths() {
		if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
		let e = [], t = 0;
		for (let n = 0, r = this.curves.length; n < r; n++) t += this.curves[n].getLength(), e.push(t);
		return this.cacheLengths = e, e;
	}
	getSpacedPoints(e = 40) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return this.autoClose && t.push(t[0]), t;
	}
	getPoints(e = 12) {
		let t = [], n;
		for (let r = 0, i = this.curves; r < i.length; r++) {
			let a = i[r], o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o);
			for (let e = 0; e < s.length; e++) {
				let r = s[e];
				n && n.equals(r) || (t.push(r), n = r);
			}
		}
		return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
	}
	copy(e) {
		super.copy(e), this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			let n = e.curves[t];
			this.curves.push(n.clone());
		}
		return this.autoClose = e.autoClose, this;
	}
	toJSON() {
		let e = super.toJSON();
		e.autoClose = this.autoClose, e.curves = [];
		for (let t = 0, n = this.curves.length; t < n; t++) {
			let n = this.curves[t];
			e.curves.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			let n = e.curves[t];
			this.curves.push(new Eg[n.type]().fromJSON(n));
		}
		return this;
	}
}, Og = class extends Dg {
	constructor(e) {
		super(), this.type = "Path", this.currentPoint = new Q(), e && this.setFromPoints(e);
	}
	setFromPoints(e) {
		this.moveTo(e[0].x, e[0].y);
		for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
		return this;
	}
	moveTo(e, t) {
		return this.currentPoint.set(e, t), this;
	}
	lineTo(e, t) {
		let n = new xg(this.currentPoint.clone(), new Q(e, t));
		return this.curves.push(n), this.currentPoint.set(e, t), this;
	}
	quadraticCurveTo(e, t, n, r) {
		let i = new Cg(this.currentPoint.clone(), new Q(e, t), new Q(n, r));
		return this.curves.push(i), this.currentPoint.set(n, r), this;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		let o = new yg(this.currentPoint.clone(), new Q(e, t), new Q(n, r), new Q(i, a));
		return this.curves.push(o), this.currentPoint.set(i, a), this;
	}
	splineThru(e) {
		let t = new Tg([this.currentPoint.clone()].concat(e));
		return this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this;
	}
	arc(e, t, n, r, i, a) {
		let o = this.currentPoint.x, s = this.currentPoint.y;
		return this.absarc(e + o, t + s, n, r, i, a), this;
	}
	absarc(e, t, n, r, i, a) {
		return this.absellipse(e, t, n, n, r, i, a), this;
	}
	ellipse(e, t, n, r, i, a, o, s) {
		let c = this.currentPoint.x, l = this.currentPoint.y;
		return this.absellipse(e + c, t + l, n, r, i, a, o, s), this;
	}
	absellipse(e, t, n, r, i, a, o, s) {
		let c = new tg(e, t, n, r, i, a, o, s);
		if (this.curves.length > 0) {
			let e = c.getPoint(0);
			e.equals(this.currentPoint) || this.lineTo(e.x, e.y);
		}
		this.curves.push(c);
		let l = c.getPoint(1);
		return this.currentPoint.copy(l), this;
	}
	copy(e) {
		return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.currentPoint = this.currentPoint.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
	}
}, kg = class extends Og {
	constructor(e) {
		super(e), this.uuid = Zm(), this.type = "Shape", this.holes = [];
	}
	getPointsHoles(e) {
		let t = [];
		for (let n = 0, r = this.holes.length; n < r; n++) t[n] = this.holes[n].getPoints(e);
		return t;
	}
	extractPoints(e) {
		return {
			shape: this.getPoints(e),
			holes: this.getPointsHoles(e)
		};
	}
	copy(e) {
		super.copy(e), this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			let n = e.holes[t];
			this.holes.push(n.clone());
		}
		return this;
	}
	toJSON() {
		let e = super.toJSON();
		e.uuid = this.uuid, e.holes = [];
		for (let t = 0, n = this.holes.length; t < n; t++) {
			let n = this.holes[t];
			e.holes.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			let n = e.holes[t];
			this.holes.push(new Og().fromJSON(n));
		}
		return this;
	}
};
function Ag(e, t, n = 2) {
	let r = t && t.length, i = r ? t[0] * n : e.length, a = jg(e, 0, i, n, !0), o = [];
	if (!a || a.next === a.prev) return o;
	let s, c, l;
	if (r && (a = Rg(e, t, a, n)), e.length > 80 * n) {
		s = e[0], c = e[1];
		let t = s, r = c;
		for (let a = n; a < i; a += n) {
			let n = e[a], i = e[a + 1];
			n < s && (s = n), i < c && (c = i), n > t && (t = n), i > r && (r = i);
		}
		l = Math.max(t - s, r - c), l = l === 0 ? 0 : 32767 / l;
	}
	return Ng(a, o, n, s, c, l, 0), o;
}
function jg(e, t, n, r, i) {
	let a;
	if (i === c_(e, t, n, r) > 0) for (let i = t; i < n; i += r) a = a_(i / r | 0, e[i], e[i + 1], a);
	else for (let i = n - r; i >= t; i -= r) a = a_(i / r | 0, e[i], e[i + 1], a);
	return a && Zg(a, a.next) && (o_(a), a = a.next), a;
}
function Mg(e, t) {
	if (!e) return e;
	t ||= e;
	let n = e, r;
	do
		if (r = !1, !n.steiner && (Zg(n, n.next) || Xg(n.prev, n, n.next) === 0)) {
			if (o_(n), n = t = n.prev, n === n.next) break;
			r = !0;
		} else n = n.next;
	while (r || n !== t);
	return t;
}
function Ng(e, t, n, r, i, a, o) {
	if (!e) return;
	!o && a && Ug(e, r, i, a);
	let s = e;
	for (; e.prev !== e.next;) {
		let c = e.prev, l = e.next;
		if (a ? Fg(e, r, i, a) : Pg(e)) {
			t.push(c.i, e.i, l.i), o_(e), e = l.next, s = l.next;
			continue;
		}
		if (e = l, e === s) {
			o ? o === 1 ? (e = Ig(Mg(e), t), Ng(e, t, n, r, i, a, 2)) : o === 2 && Lg(e, t, n, r, i, a) : Ng(Mg(e), t, n, r, i, a, 1);
			break;
		}
	}
}
function Pg(e) {
	let t = e.prev, n = e, r = e.next;
	if (Xg(t, n, r) >= 0) return !1;
	let i = t.x, a = n.x, o = r.x, s = t.y, c = n.y, l = r.y, u = Math.min(i, a, o), d = Math.min(s, c, l), f = Math.max(i, a, o), p = Math.max(s, c, l), m = r.next;
	for (; m !== t;) {
		if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && Jg(i, s, a, c, o, l, m.x, m.y) && Xg(m.prev, m, m.next) >= 0) return !1;
		m = m.next;
	}
	return !0;
}
function Fg(e, t, n, r) {
	let i = e.prev, a = e, o = e.next;
	if (Xg(i, a, o) >= 0) return !1;
	let s = i.x, c = a.x, l = o.x, u = i.y, d = a.y, f = o.y, p = Math.min(s, c, l), m = Math.min(u, d, f), h = Math.max(s, c, l), g = Math.max(u, d, f), _ = Gg(p, m, t, n, r), v = Gg(h, g, t, n, r), y = e.prevZ, b = e.nextZ;
	for (; y && y.z >= _ && b && b.z <= v;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && Jg(s, u, c, d, l, f, y.x, y.y) && Xg(y.prev, y, y.next) >= 0 || (y = y.prevZ, b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && Jg(s, u, c, d, l, f, b.x, b.y) && Xg(b.prev, b, b.next) >= 0)) return !1;
		b = b.nextZ;
	}
	for (; y && y.z >= _;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && Jg(s, u, c, d, l, f, y.x, y.y) && Xg(y.prev, y, y.next) >= 0) return !1;
		y = y.prevZ;
	}
	for (; b && b.z <= v;) {
		if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && Jg(s, u, c, d, l, f, b.x, b.y) && Xg(b.prev, b, b.next) >= 0) return !1;
		b = b.nextZ;
	}
	return !0;
}
function Ig(e, t) {
	let n = e;
	do {
		let r = n.prev, i = n.next.next;
		!Zg(r, i) && Qg(r, n, n.next, i) && n_(r, i) && n_(i, r) && (t.push(r.i, n.i, i.i), o_(n), o_(n.next), n = e = i), n = n.next;
	} while (n !== e);
	return Mg(n);
}
function Lg(e, t, n, r, i, a) {
	let o = e;
	do {
		let e = o.next.next;
		for (; e !== o.prev;) {
			if (o.i !== e.i && Yg(o, e)) {
				let s = i_(o, e);
				o = Mg(o, o.next), s = Mg(s, s.next), Ng(o, t, n, r, i, a, 0), Ng(s, t, n, r, i, a, 0);
				return;
			}
			e = e.next;
		}
		o = o.next;
	} while (o !== e);
}
function Rg(e, t, n, r) {
	let i = [];
	for (let n = 0, a = t.length; n < a; n++) {
		let o = jg(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1);
		o === o.next && (o.steiner = !0), i.push(Kg(o));
	}
	i.sort(zg);
	for (let e = 0; e < i.length; e++) n = Bg(i[e], n);
	return n;
}
function zg(e, t) {
	let n = e.x - t.x;
	return n === 0 && (n = e.y - t.y, n === 0 && (n = (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x))), n;
}
function Bg(e, t) {
	let n = Vg(e, t);
	if (!n) return t;
	let r = i_(n, e);
	return Mg(r, r.next), Mg(n, n.next);
}
function Vg(e, t) {
	let n = t, r = e.x, i = e.y, a = -Infinity, o;
	if (Zg(e, n)) return n;
	do {
		if (Zg(e, n.next)) return n.next;
		if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
			let e = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
			if (e <= r && e > a && (a = e, o = n.x < n.next.x ? n : n.next, e === r)) return o;
		}
		n = n.next;
	} while (n !== t);
	if (!o) return null;
	let s = o, c = o.x, l = o.y, u = Infinity;
	n = o;
	do {
		if (r >= n.x && n.x >= c && r !== n.x && qg(i < l ? r : a, i, c, l, i < l ? a : r, i, n.x, n.y)) {
			let t = Math.abs(i - n.y) / (r - n.x);
			n_(n, e) && (t < u || t === u && (n.x > o.x || n.x === o.x && Hg(o, n))) && (o = n, u = t);
		}
		n = n.next;
	} while (n !== s);
	return o;
}
function Hg(e, t) {
	return Xg(e.prev, e, t.prev) < 0 && Xg(t.next, e, e.next) < 0;
}
function Ug(e, t, n, r) {
	let i = e;
	do
		i.z === 0 && (i.z = Gg(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
	while (i !== e);
	i.prevZ.nextZ = null, i.prevZ = null, Wg(i);
}
function Wg(e) {
	let t, n = 1;
	do {
		let r = e, i;
		e = null;
		let a = null;
		for (t = 0; r;) {
			t++;
			let o = r, s = 0;
			for (let e = 0; e < n && (s++, o = o.nextZ, o); e++);
			let c = n;
			for (; s > 0 || c > 0 && o;) s !== 0 && (c === 0 || !o || r.z <= o.z) ? (i = r, r = r.nextZ, s--) : (i = o, o = o.nextZ, c--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
			r = o;
		}
		a.nextZ = null, n *= 2;
	} while (t > 1);
	return e;
}
function Gg(e, t, n, r, i) {
	return e = (e - n) * i | 0, t = (t - r) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function Kg(e) {
	let t = e, n = e;
	do
		(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
	while (t !== e);
	return n;
}
function qg(e, t, n, r, i, a, o, s) {
	return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function Jg(e, t, n, r, i, a, o, s) {
	return !(e === o && t === s) && qg(e, t, n, r, i, a, o, s);
}
function Yg(e, t) {
	return e.next.i !== t.i && e.prev.i !== t.i && !t_(e, t) && (n_(e, t) && n_(t, e) && r_(e, t) && (Xg(e.prev, e, t.prev) || Xg(e, t.prev, t)) || Zg(e, t) && Xg(e.prev, e, e.next) > 0 && Xg(t.prev, t, t.next) > 0);
}
function Xg(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function Zg(e, t) {
	return e.x === t.x && e.y === t.y;
}
function Qg(e, t, n, r) {
	let i = e_(Xg(e, t, n)), a = e_(Xg(e, t, r)), o = e_(Xg(n, r, e)), s = e_(Xg(n, r, t));
	return !!(i !== a && o !== s || i === 0 && $g(e, n, t) || a === 0 && $g(e, r, t) || o === 0 && $g(n, e, r) || s === 0 && $g(n, t, r));
}
function $g(e, t, n) {
	return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function e_(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function t_(e, t) {
	let n = e;
	do {
		if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && Qg(n, n.next, e, t)) return !0;
		n = n.next;
	} while (n !== e);
	return !1;
}
function n_(e, t) {
	return Xg(e.prev, e, e.next) < 0 ? Xg(e, t, e.next) >= 0 && Xg(e, e.prev, t) >= 0 : Xg(e, t, e.prev) < 0 || Xg(e, e.next, t) < 0;
}
function r_(e, t) {
	let n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
	do
		n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
	while (n !== e);
	return r;
}
function i_(e, t) {
	let n = s_(e.i, e.x, e.y), r = s_(t.i, t.x, t.y), i = e.next, a = t.prev;
	return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function a_(e, t, n, r) {
	let i = s_(e, t, n);
	return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function o_(e) {
	e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function s_(e, t, n) {
	return {
		i: e,
		x: t,
		y: n,
		prev: null,
		next: null,
		z: 0,
		prevZ: null,
		nextZ: null,
		steiner: !1
	};
}
function c_(e, t, n, r) {
	let i = 0;
	for (let a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
	return i;
}
var l_ = class {
	static triangulate(e, t, n = 2) {
		return Ag(e, t, n);
	}
}, u_ = class e {
	static area(e) {
		let t = e.length, n = 0;
		for (let r = t - 1, i = 0; i < t; r = i++) n += e[r].x * e[i].y - e[i].x * e[r].y;
		return n * .5;
	}
	static isClockWise(t) {
		return e.area(t) < 0;
	}
	static triangulateShape(e, t) {
		let n = [], r = [], i = [];
		d_(e), f_(n, e);
		let a = e.length;
		t.forEach(d_);
		for (let e = 0; e < t.length; e++) r.push(a), a += t[e].length, f_(n, t[e]);
		let o = l_.triangulate(n, r);
		for (let e = 0; e < o.length; e += 3) i.push(o.slice(e, e + 3));
		return i;
	}
};
function d_(e) {
	let t = e.length;
	t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function f_(e, t) {
	for (let n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y);
}
function p_(e, t) {
	return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
var m_ = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		validate_interval: {
			seek: {
				let a;
				linear_scan: {
					forward_scan: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break forward_scan;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break seek;
						}
						a = t.length;
						break linear_scan;
					}
					if (!(e >= i)) {
						let o = t[1];
						e < o && (n = 2, i = o);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break seek;
						}
						a = n, n = 0;
						break linear_scan;
					}
					break validate_interval;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("call to abstract method");
	}
	intervalChanged_() {}
}, h_ = class extends m_ {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: Nm,
			endingEnd: Nm
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
		if (o === void 0) switch (this.getSettings_().endingStart) {
			case Pm:
				i = e, o = 2 * t - n;
				break;
			case Fm:
				i = r.length - 2, o = t + r[i] - r[i + 1];
				break;
			default: i = e, o = n;
		}
		if (s === void 0) switch (this.getSettings_().endingEnd) {
			case Pm:
				a = e, s = 2 * n - t;
				break;
			case Fm:
				a = 1, s = n + r[1] - r[0];
				break;
			default: a = e - 1, s = t;
		}
		let c = (n - t) * .5, l = this.valueSize;
		this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
		for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
		return i;
	}
}, g_ = class extends m_ {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
		for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
		return i;
	}
}, __ = class extends m_ {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, v_ = class extends m_ {
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this.settings || this.DefaultSettings_, u = l.inTangents, d = l.outTangents;
		if (!u || !d) {
			let e = (n - t) / (r - t), l = 1 - e;
			for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
			return i;
		}
		let f = o * 2, p = e - 1;
		for (let l = 0; l !== o; ++l) {
			let o = a[c + l], m = a[s + l], h = p * f + l * 2, g = d[h], _ = d[h + 1], v = e * f + l * 2, y = u[v], b = u[v + 1], x = (n - t) / (r - t), S, C, w, T, E;
			for (let e = 0; e < 8; e++) {
				S = x * x, C = S * x, w = 1 - x, T = w * w, E = T * w;
				let e = E * t + 3 * T * x * g + 3 * w * S * y + C * r - n;
				if (Math.abs(e) < 1e-10) break;
				let i = 3 * T * (g - t) + 6 * w * x * (y - g) + 3 * S * (r - y);
				if (Math.abs(i) < 1e-10) break;
				x -= e / i, x = Math.max(0, Math.min(1, x));
			}
			i[l] = E * o + 3 * T * x * _ + 3 * w * S * b + C * m;
		}
		return i;
	}
}, y_ = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = p_(t, this.TimeBufferType), this.values = p_(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: p_(e.times, Array),
				values: p_(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t);
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new __(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new g_(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new h_(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodBezier(e) {
		let t = new v_(this.times, this.values, this.getValueSize(), e);
		return this.settings && (t.settings = this.settings), t;
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case km:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case Am:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case jm:
				t = this.InterpolantFactoryMethodSmooth;
				break;
			case Mm:
				t = this.InterpolantFactoryMethodBezier;
				break;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
			else throw Error(t);
			return Km("KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return km;
			case this.InterpolantFactoryMethodLinear: return Am;
			case this.InterpolantFactoryMethodSmooth: return jm;
			case this.InterpolantFactoryMethodBezier: return Mm;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (qm("KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (qm("KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				qm("KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				qm("KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && Vm(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				qm("KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === jm, i = e.length - 1, a = 1;
		for (let o = 1; o < i; ++o) {
			let i = !1, s = e[o];
			if (s !== e[o + 1] && (o !== 1 || s !== e[0])) if (r) i = !0;
			else {
				let e = o * n, r = e - n, a = e + n;
				for (let o = 0; o !== n; ++o) {
					let n = t[e + o];
					if (n !== t[r + o] || n !== t[a + o]) {
						i = !0;
						break;
					}
				}
			}
			if (i) {
				if (o !== a) {
					e[a] = e[o];
					let r = o * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
	}
	clone() {
		let e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
		return r.createInterpolant = this.createInterpolant, r;
	}
};
y_.prototype.ValueTypeName = "", y_.prototype.TimeBufferType = Float32Array, y_.prototype.ValueBufferType = Float32Array, y_.prototype.DefaultInterpolation = Am;
var b_ = class extends y_ {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
b_.prototype.ValueTypeName = "bool", b_.prototype.ValueBufferType = Array, b_.prototype.DefaultInterpolation = km, b_.prototype.InterpolantFactoryMethodLinear = void 0, b_.prototype.InterpolantFactoryMethodSmooth = void 0;
var x_ = class extends y_ {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
x_.prototype.ValueTypeName = "color";
var S_ = class extends y_ {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
S_.prototype.ValueTypeName = "number";
var C_ = class extends m_ {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
		for (let e = c + o; c !== e; c += 4) th.slerpFlat(i, 0, a, c - o, a, c, s);
		return i;
	}
}, w_ = class extends y_ {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	InterpolantFactoryMethodLinear(e) {
		return new C_(this.times, this.values, this.getValueSize(), e);
	}
};
w_.prototype.ValueTypeName = "quaternion", w_.prototype.InterpolantFactoryMethodSmooth = void 0;
var T_ = class extends y_ {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
T_.prototype.ValueTypeName = "string", T_.prototype.ValueBufferType = Array, T_.prototype.DefaultInterpolation = km, T_.prototype.InterpolantFactoryMethodLinear = void 0, T_.prototype.InterpolantFactoryMethodSmooth = void 0;
var E_ = class extends y_ {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
E_.prototype.ValueTypeName = "vector";
var D_ = new class {
	constructor(e, t, n) {
		let r = this, i = !1, a = 0, o = 0, s, c = [];
		this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this._abortController = null, this.itemStart = function(e) {
			o++, i === !1 && r.onStart !== void 0 && r.onStart(e, a, o), i = !0;
		}, this.itemEnd = function(e) {
			a++, r.onProgress !== void 0 && r.onProgress(e, a, o), a === o && (i = !1, r.onLoad !== void 0 && r.onLoad());
		}, this.itemError = function(e) {
			r.onError !== void 0 && r.onError(e);
		}, this.resolveURL = function(e) {
			return s ? s(e) : e;
		}, this.setURLModifier = function(e) {
			return s = e, this;
		}, this.addHandler = function(e, t) {
			return c.push(e, t), this;
		}, this.removeHandler = function(e) {
			let t = c.indexOf(e);
			return t !== -1 && c.splice(t, 2), this;
		}, this.getHandler = function(e) {
			for (let t = 0, n = c.length; t < n; t += 2) {
				let n = c[t], r = c[t + 1];
				if (n.global && (n.lastIndex = 0), n.test(e)) return r;
			}
			return null;
		}, this.abort = function() {
			return this.abortController.abort(), this._abortController = null, this;
		};
	}
	get abortController() {
		return this._abortController ||= new AbortController(), this._abortController;
	}
}(), O_ = class {
	constructor(e) {
		this.manager = e === void 0 ? D_ : e, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	load() {}
	loadAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.load(e, r, t, i);
		});
	}
	parse() {}
	setCrossOrigin(e) {
		return this.crossOrigin = e, this;
	}
	setWithCredentials(e) {
		return this.withCredentials = e, this;
	}
	setPath(e) {
		return this.path = e, this;
	}
	setResourcePath(e) {
		return this.resourcePath = e, this;
	}
	setRequestHeader(e) {
		return this.requestHeader = e, this;
	}
	abort() {
		return this;
	}
};
O_.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var k_ = "\\[\\]\\.:\\/", A_ = RegExp("[" + k_ + "]", "g"), j_ = "[^" + k_ + "]", M_ = "[^" + k_.replace("\\.", "") + "]", N_ = "((?:WC+[\\/:])*)".replace("WC", j_), P_ = "(WCOD+)?".replace("WCOD", M_), F_ = "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", j_), I_ = "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", j_), L_ = RegExp("^" + N_ + P_ + F_ + I_ + "$"), R_ = [
	"material",
	"materials",
	"bones",
	"map"
], z_ = class {
	constructor(e, t, n) {
		let r = n || B_.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, B_ = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(A_, "");
	}
	static parseTrackName(e) {
		let t = L_.exec(e);
		if (t === null) throw Error("PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			R_.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_fromArray(e, t) {
		this.resolvedProperty.fromArray(e, t);
	}
	_setValue_fromArray_setNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_getValue_unbound(e, t) {
		this.bind(), this.getValue(e, t);
	}
	_setValue_unbound(e, t) {
		this.bind(), this.setValue(e, t);
	}
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
			Km("PropertyBinding: No target node found for track: " + this.path + ".");
			return;
		}
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) {
						qm("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.materials) {
						qm("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return;
					}
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) {
						qm("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return;
					}
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) {
						qm("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.map) {
						qm("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						return;
					}
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) {
						qm("PropertyBinding: Can not bind to objectName of node undefined.", this);
						return;
					}
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) {
					qm("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					return;
				}
				t = t[e];
			}
		}
		let o = t[i];
		if (o === void 0) {
			let e = n.nodeName;
			qm("PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
			return;
		}
		let s = this.Versioning.None;
		this.targetObject = t, t.isMaterial === !0 ? s = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate);
		let c = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) {
					qm("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return;
				}
				if (!t.geometry.morphAttributes) {
					qm("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					return;
				}
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
B_.Composite = z_, B_.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, B_.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, B_.prototype.GetterByBindingType = [
	B_.prototype._getValue_direct,
	B_.prototype._getValue_array,
	B_.prototype._getValue_arrayElement,
	B_.prototype._getValue_toArray
], B_.prototype.SetterByBindingTypeAndVersioning = [
	[
		B_.prototype._setValue_direct,
		B_.prototype._setValue_direct_setNeedsUpdate,
		B_.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		B_.prototype._setValue_array,
		B_.prototype._setValue_array_setNeedsUpdate,
		B_.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		B_.prototype._setValue_arrayElement,
		B_.prototype._setValue_arrayElement_setNeedsUpdate,
		B_.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		B_.prototype._setValue_fromArray,
		B_.prototype._setValue_fromArray_setNeedsUpdate,
		B_.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
];
var V_ = new Q(), H_ = class {
	constructor(e = new Q(Infinity, Infinity), t = new Q(-Infinity, -Infinity)) {
		this.isBox2 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = V_.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = Infinity, this.max.x = this.max.y = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y;
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, V_).distanceTo(e);
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
}, U_ = class {
	constructor() {
		this.type = "ShapePath", this.color = new Qh(), this.subPaths = [], this.currentPath = null;
	}
	moveTo(e, t) {
		return this.currentPath = new Og(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
	}
	lineTo(e, t) {
		return this.currentPath.lineTo(e, t), this;
	}
	quadraticCurveTo(e, t, n, r) {
		return this.currentPath.quadraticCurveTo(e, t, n, r), this;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		return this.currentPath.bezierCurveTo(e, t, n, r, i, a), this;
	}
	splineThru(e) {
		return this.currentPath.splineThru(e), this;
	}
	toShapes(e) {
		function t(e) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n], i = new kg();
				i.curves = r.curves, t.push(i);
			}
			return t;
		}
		function n(e, t) {
			let n = t.length, r = !1;
			for (let i = n - 1, a = 0; a < n; i = a++) {
				let n = t[i], o = t[a], s = o.x - n.x, c = o.y - n.y;
				if (Math.abs(c) > 2 ** -52) {
					if (c < 0 && (n = t[a], s = -s, o = t[i], c = -c), e.y < n.y || e.y > o.y) continue;
					if (e.y === n.y) {
						if (e.x === n.x) return !0;
					} else {
						let t = c * (e.x - n.x) - s * (e.y - n.y);
						if (t === 0) return !0;
						if (t < 0) continue;
						r = !r;
					}
				} else {
					if (e.y !== n.y) continue;
					if (o.x <= e.x && e.x <= n.x || n.x <= e.x && e.x <= o.x) return !0;
				}
			}
			return r;
		}
		let r = u_.isClockWise, i = this.subPaths;
		if (i.length === 0) return [];
		let a, o, s, c = [];
		if (i.length === 1) return o = i[0], s = new kg(), s.curves = o.curves, c.push(s), c;
		let l = !r(i[0].getPoints());
		l = e ? !l : l;
		let u = [], d = [], f = [], p = 0, m;
		d[p] = void 0, f[p] = [];
		for (let t = 0, n = i.length; t < n; t++) o = i[t], m = o.getPoints(), a = r(m), a = e ? !a : a, a ? (!l && d[p] && p++, d[p] = {
			s: new kg(),
			p: m
		}, d[p].s.curves = o.curves, l && p++, f[p] = []) : f[p].push({
			h: o,
			p: m[0]
		});
		if (!d[0]) return t(i);
		if (d.length > 1) {
			let e = !1, t = 0;
			for (let e = 0, t = d.length; e < t; e++) u[e] = [];
			for (let r = 0, i = d.length; r < i; r++) {
				let i = f[r];
				for (let a = 0; a < i.length; a++) {
					let o = i[a], s = !0;
					for (let i = 0; i < d.length; i++) n(o.p, d[i].p) && (r !== i && t++, s ? (s = !1, u[i].push(o)) : e = !0);
					s && u[r].push(o);
				}
			}
			t > 0 && e === !1 && (f = u);
		}
		let h;
		for (let e = 0, t = d.length; e < t; e++) {
			s = d[e].s, c.push(s), h = f[e];
			for (let e = 0, t = h.length; e < t; e++) s.holes.push(h[e].h);
		}
		return c;
	}
};
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "183" } })), typeof window < "u" && (window.__THREE__ ? Km("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "183");
var W_ = Im, G_ = class e {
	static async loadSvgSource(t) {
		try {
			let n = null, { width: r, height: i, padding: a } = t;
			if (t.sourceType === "file" && t.fileUrl) {
				let e = await fetch(t.fileUrl);
				if (e.ok) n = await e.text();
				else throw Error("Failed to load SVG file");
			} else t.sourceType === "data" && t.pathData && (n = `<svg viewBox="0 0 ${r} ${i}"><path d="${t.pathData}"/></svg>`);
			let o = null, s = null, c = null;
			if (n && (s = new e(r, i), o = s.parse(n), o.paths.length > 0)) {
				let t = o.paths[0], n = Math.min(5e3, Math.max(200, Math.ceil(Math.max(r, i) * 4))), l = e.getAdaptiveDivisions(t, {
					maxDivisions: n,
					scale: s.viewBoxTransform.scaleX,
					targetSpacing: Math.max(1, Math.min(r, i) / 300)
				});
				c = e.getSpacedPoints(t, l).map((e) => {
					let t = s.applyTransform(e.x, e.y);
					return {
						x: t.x + a.left,
						y: t.y + a.top
					};
				});
			}
			return {
				result: o,
				parser: s,
				points: c
			};
		} catch {
			throw Error("Failed to load SVG source");
		}
	}
	static createShapes(e) {
		let t = 999999999, n = {
			ORIGIN: 0,
			DESTINATION: 1,
			BETWEEN: 2,
			LEFT: 3,
			RIGHT: 4,
			BEHIND: 5,
			BEYOND: 6
		}, r = {
			loc: n.ORIGIN,
			t: 0
		};
		function i(e, t, i, o) {
			let s = e.x, c = t.x, l = i.x, u = o.x, d = e.y, f = t.y, p = i.y, m = o.y, h = (u - l) * (d - p) - (m - p) * (s - l), g = (c - s) * (d - p) - (f - d) * (s - l), _ = (m - p) * (c - s) - (u - l) * (f - d), v = h / _, y = g / _;
			if (_ === 0 && h !== 0 || v <= 0 || v >= 1 || y < 0 || y > 1) return null;
			if (h === 0 && _ === 0) {
				for (let l = 0; l < 2; l++) if (a(l === 0 ? i : o, e, t), r.loc == n.ORIGIN) {
					let e = l === 0 ? i : o;
					return {
						x: e.x,
						y: e.y,
						t: r.t
					};
				} else if (r.loc == n.BETWEEN) return {
					x: +(s + r.t * (c - s)).toPrecision(10),
					y: +(d + r.t * (f - d)).toPrecision(10),
					t: r.t
				};
				return null;
			} else {
				for (let s = 0; s < 2; s++) if (a(s === 0 ? i : o, e, t), r.loc == n.ORIGIN) {
					let e = s === 0 ? i : o;
					return {
						x: e.x,
						y: e.y,
						t: r.t
					};
				}
				return {
					x: +(s + v * (c - s)).toPrecision(10),
					y: +(d + v * (f - d)).toPrecision(10),
					t: v
				};
			}
		}
		function a(e, t, i) {
			let a = i.x - t.x, o = i.y - t.y, s = e.x - t.x, c = e.y - t.y, l = a * c - s * o;
			if (e.x === t.x && e.y === t.y) {
				r.loc = n.ORIGIN, r.t = 0;
				return;
			}
			if (e.x === i.x && e.y === i.y) {
				r.loc = n.DESTINATION, r.t = 1;
				return;
			}
			if (l < -(2 ** -52)) {
				r.loc = n.LEFT;
				return;
			}
			if (l > 2 ** -52) {
				r.loc = n.RIGHT;
				return;
			}
			if (a * s < 0 || o * c < 0) {
				r.loc = n.BEHIND;
				return;
			}
			if (Math.sqrt(a * a + o * o) < Math.sqrt(s * s + c * c)) {
				r.loc = n.BEYOND;
				return;
			}
			let u;
			u = a === 0 ? c / o : s / a, r.loc = n.BETWEEN, r.t = u;
		}
		function o(e, t) {
			let n = [], r = [];
			for (let a = 1; a < e.length; a++) {
				let o = e[a - 1], s = e[a];
				for (let e = 1; e < t.length; e++) {
					let a = t[e - 1], c = t[e], l = i(o, s, a, c);
					l !== null && n.find((e) => e.t <= l.t + 2 ** -52 && e.t >= l.t - 2 ** -52) === void 0 && (n.push(l), r.push(new Q(l.x, l.y)));
				}
			}
			return r;
		}
		function s(e, t, n) {
			let r = new Q();
			t.getCenter(r);
			let i = [];
			return n.forEach((n) => {
				t.containsPoint(r) && o(e, n.points).forEach((e) => {
					i.push({
						identifier: n.identifier,
						isCW: n.isCW,
						point: e
					});
				});
			}), i.sort((e, t) => e.point.x - t.point.x), i;
		}
		function c(e, t, n, r, i) {
			(i == null || i === "") && (i = "nonzero");
			let a = new Q();
			e.boundingBox.getCenter(a);
			let o = s([new Q(n, a.y), new Q(r, a.y)], e.boundingBox, t);
			o.sort((e, t) => e.point.x - t.point.x);
			let c = [], l = [];
			o.forEach((t) => {
				t.identifier === e.identifier ? c.push(t) : l.push(t);
			});
			let u = c[0].point.x, d = [], f = 0;
			for (; f < l.length && l[f].point.x < u;) d.length > 0 && d[d.length - 1] === l[f].identifier ? d.pop() : d.push(l[f].identifier), f++;
			if (d.push(e.identifier), i === "evenodd") {
				let t = d.length % 2 == 0, n = d[d.length - 2];
				return {
					identifier: e.identifier,
					isHole: t,
					for: n
				};
			} else if (i === "nonzero") {
				let n = !0, r = null, i = null;
				for (let e = 0; e < d.length; e++) {
					let a = d[e];
					n ? (i = t[a].isCW, n = !1, r = a) : i !== t[a].isCW && (i = t[a].isCW, n = !0);
				}
				return {
					identifier: e.identifier,
					isHole: n,
					for: r
				};
			} else console.warn("fill-rule: \"" + i + "\" is currently not implemented.");
		}
		let l = t, u = -t, d = e.subPaths.map((e) => {
			let n = e.getPoints(), r = -t, i = t, a = -t, o = t;
			for (let e = 0; e < n.length; e++) {
				let t = n[e];
				t.y > r && (r = t.y), t.y < i && (i = t.y), t.x > a && (a = t.x), t.x < o && (o = t.x);
			}
			return u <= a && (u = a + 1), l >= o && (l = o - 1), {
				curves: e.curves,
				points: n,
				isCW: u_.isClockWise(n),
				identifier: -1,
				boundingBox: new H_(new Q(o, i), new Q(a, r))
			};
		});
		d = d.filter((e) => e.points.length > 1);
		for (let e = 0; e < d.length; e++) d[e].identifier = e;
		let f = d.map((t) => c(t, d, l, u, e.userData ? e.userData.style.fillRule : void 0)), p = [];
		return d.forEach((e) => {
			if (!f[e.identifier].isHole) {
				let t = new kg();
				t.curves = e.curves, f.filter((t) => t.isHole && t.for === e.identifier).forEach((e) => {
					let n = d[e.identifier], r = new Og();
					r.curves = n.curves, t.holes.push(r);
				}), p.push(t);
			}
		}), p;
	}
	static getPoints(t, n) {
		return e.getSpacedPoints(t, n);
	}
	static getSpacedPoints(e, t) {
		let n = Math.max(1, Math.floor(t)), r = e.subPaths ?? [];
		if (r.length === 0) return [];
		if (r.length === 1) return r[0].getSpacedPoints(n);
		let i = r.map((e) => e.getLength()), a = i.reduce((e, t) => e + t, 0);
		if (a <= 0) return r[0].getSpacedPoints(n);
		let o = i.map((e) => e / a * n), s = o.map((e) => Math.max(1, Math.floor(e))), c = n - s.reduce((e, t) => e + t, 0);
		if (c !== 0) {
			let e = s.map((e, t) => t), t = (e) => o[e] - Math.floor(o[e]);
			if (c > 0) {
				e.sort((e, n) => t(n) - t(e));
				for (let t = 0; t < c; t++) s[e[t % e.length]] += 1;
			} else {
				e.sort((e, n) => t(e) - t(n)), c = Math.abs(c);
				for (let t = 0; t < c; t++) {
					let n = e[t % e.length];
					s[n] > 1 && --s[n];
				}
			}
		}
		let l = [];
		for (let e = 0; e < r.length; e++) {
			let t = r[e].getSpacedPoints(s[e]);
			e > 0 && t.length > 0 && t.shift(), l.push(...t);
		}
		return l;
	}
	static getAdaptiveDivisions(e, t) {
		let n = Math.max(1, Math.floor(t.maxDivisions)), r = e.subPaths ?? [];
		if (r.length === 0) return 1;
		let i = r.reduce((e, t) => e + (t.curves?.length ?? 0), 0), a = Math.min(n, Math.max(8, i)), o = r.reduce((e, t) => e + t.getLength(), 0) * (t.scale || 1), s = Math.max(1, t.targetSpacing), c = Math.ceil(o / s);
		return Math.min(n, Math.max(a, c));
	}
	defaultDPI = 90;
	defaultUnit = "px";
	renderWidth;
	renderHeight;
	viewBoxTransform;
	constructor(e, t) {
		this.renderWidth = e || 300, this.renderHeight = t || 150, this.viewBoxTransform = {
			scaleX: 1,
			scaleY: 1,
			offsetX: 0,
			offsetY: 0
		};
	}
	updateViewBoxTransform(e) {
		let t = e.getAttribute("viewBox"), n = e.getAttribute("width"), r = e.getAttribute("height"), i, a;
		if (t) {
			let [, , e, n] = t.split(/[\s,]+/).map(parseFloat);
			i = e || this.renderWidth, a = n || this.renderHeight;
		} else i = this.parseSizeWithUnits(n) || this.renderWidth, a = this.parseSizeWithUnits(r) || this.renderHeight;
		let o = this.renderWidth, s = this.renderHeight, c = o / i, l = s / a, u = Math.min(c, l);
		this.viewBoxTransform = {
			scaleX: u,
			scaleY: u,
			offsetX: (o - i * u) / 2,
			offsetY: (s - a * u) / 2
		};
	}
	parseSizeWithUnits(e) {
		if (!e) return null;
		let t = [
			"px",
			"em",
			"ex",
			"cm",
			"mm",
			"in",
			"pt",
			"pc",
			"%"
		], n = "px", r = e;
		for (let i of t) if (e.toLowerCase().endsWith(i)) {
			n = i, r = e.slice(0, -i.length).trim();
			break;
		}
		let i = parseFloat(r);
		if (isNaN(i)) return null;
		let a = this.defaultDPI;
		return i * ({
			px: 1,
			pt: a / 72,
			pc: a / 6,
			in: a,
			cm: a / 2.54,
			mm: a / 25.4,
			em: 16,
			ex: 8,
			"%": .01
		}[n] || 1);
	}
	resize(e, t) {
		this.renderWidth = e, this.renderHeight = t;
		let n = this.viewBoxTransform.scaleX, r = e / n, i = t / n;
		this.viewBoxTransform = {
			scaleX: n,
			scaleY: n,
			offsetX: (e - r * n) / 2,
			offsetY: (t - i * n) / 2
		};
	}
	applyTransform(e, t) {
		return {
			x: e * this.viewBoxTransform.scaleX + this.viewBoxTransform.offsetX,
			y: t * this.viewBoxTransform.scaleY + this.viewBoxTransform.offsetY
		};
	}
	inverseTransform(e, t) {
		return {
			x: (e - this.viewBoxTransform.offsetX) / this.viewBoxTransform.scaleX,
			y: (t - this.viewBoxTransform.offsetY) / this.viewBoxTransform.scaleY
		};
	}
	parse(e) {
		let t = this;
		function n(e, a) {
			if (e.nodeType !== 1) return;
			let o = y(e), m = !1, h = null;
			switch (e.nodeName) {
				case "svg":
					a = p(e, a), t.updateViewBoxTransform(e);
					break;
				case "style":
					i(e);
					break;
				case "g":
					a = p(e, a);
					break;
				case "path":
					a = p(e, a), e.hasAttribute("d") && (h = r(e));
					break;
				case "rect":
					a = p(e, a), h = s(e);
					break;
				case "polygon":
					a = p(e, a), h = c(e);
					break;
				case "polyline":
					a = p(e, a), h = l(e);
					break;
				case "circle":
					a = p(e, a), h = u(e);
					break;
				case "ellipse":
					a = p(e, a), h = d(e);
					break;
				case "line":
					a = p(e, a), h = f(e);
					break;
				case "defs":
					m = !0;
					break;
				case "use":
					a = p(e, a);
					let o = (e.getAttributeNS("http://www.w3.org/1999/xlink", "href") || "").substring(1), g = e.viewportElement.getElementById(o);
					g ? n(g, a) : console.warn("SVGLoader: 'use node' references non-existent node id: " + o);
					break;
				default:
			}
			h && (a.fill !== void 0 && a.fill !== "none" && h.color.setStyle(a.fill, W_), x(h, te), D.push(h), h.userData = {
				node: e,
				style: a
			});
			let g = e.childNodes;
			for (let e = 0; e < g.length; e++) {
				let t = g[e];
				m && t.nodeName !== "style" && t.nodeName !== "defs" || n(t, a);
			}
			o && (k.pop(), k.length > 0 ? te.copy(k[k.length - 1]) : te.identity());
		}
		function r(e) {
			let t = new U_(), n = new Q(), r = new Q(), i = new Q(), o = !0, s = !1, c = e.getAttribute("d");
			if (c === "" || c === "none") return null;
			let l = c.match(/[a-df-z][^a-df-z]*/gi);
			for (let e = 0, c = l ? l.length : 0; e < c; e++) {
				let c = l[e], u = c.charAt(0), d = c.slice(1).trim();
				o === !0 && (s = !0, o = !1);
				let f;
				switch (u) {
					case "M":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e += 2) n.x = f[e + 0], n.y = f[e + 1], r.x = n.x, r.y = n.y, e === 0 ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y), e === 0 && i.copy(n);
						break;
					case "H":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e++) n.x = f[e], r.x = n.x, r.y = n.y, t.lineTo(n.x, n.y), e === 0 && s === !0 && i.copy(n);
						break;
					case "V":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e++) n.y = f[e], r.x = n.x, r.y = n.y, t.lineTo(n.x, n.y), e === 0 && s === !0 && i.copy(n);
						break;
					case "L":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e += 2) n.x = f[e + 0], n.y = f[e + 1], r.x = n.x, r.y = n.y, t.lineTo(n.x, n.y), e === 0 && s === !0 && i.copy(n);
						break;
					case "C":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e += 6) t.bezierCurveTo(f[e + 0], f[e + 1], f[e + 2], f[e + 3], f[e + 4], f[e + 5]), r.x = f[e + 2], r.y = f[e + 3], n.x = f[e + 4], n.y = f[e + 5], e === 0 && s === !0 && i.copy(n);
						break;
					case "S":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e += 4) t.bezierCurveTo(m(n.x, r.x), m(n.y, r.y), f[e + 0], f[e + 1], f[e + 2], f[e + 3]), r.x = f[e + 0], r.y = f[e + 1], n.x = f[e + 2], n.y = f[e + 3], e === 0 && s === !0 && i.copy(n);
						break;
					case "Q":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e += 4) t.quadraticCurveTo(f[e + 0], f[e + 1], f[e + 2], f[e + 3]), r.x = f[e + 0], r.y = f[e + 1], n.x = f[e + 2], n.y = f[e + 3], e === 0 && s === !0 && i.copy(n);
						break;
					case "T":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e += 2) {
							let a = m(n.x, r.x), o = m(n.y, r.y);
							t.quadraticCurveTo(a, o, f[e + 0], f[e + 1]), r.x = a, r.y = o, n.x = f[e + 0], n.y = f[e + 1], e === 0 && s === !0 && i.copy(n);
						}
						break;
					case "A":
						f = h(d, [3, 4], 7);
						for (let e = 0, o = f.length; e < o; e += 7) {
							if (f[e + 5] == n.x && f[e + 6] == n.y) continue;
							let o = n.clone();
							n.x = f[e + 5], n.y = f[e + 6], r.x = n.x, r.y = n.y, a(t, f[e], f[e + 1], f[e + 2], f[e + 3], f[e + 4], o, n), e === 0 && s === !0 && i.copy(n);
						}
						break;
					case "m":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e += 2) n.x += f[e + 0], n.y += f[e + 1], r.x = n.x, r.y = n.y, e === 0 ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y), e === 0 && i.copy(n);
						break;
					case "h":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e++) n.x += f[e], r.x = n.x, r.y = n.y, t.lineTo(n.x, n.y), e === 0 && s === !0 && i.copy(n);
						break;
					case "v":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e++) n.y += f[e], r.x = n.x, r.y = n.y, t.lineTo(n.x, n.y), e === 0 && s === !0 && i.copy(n);
						break;
					case "l":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e += 2) n.x += f[e + 0], n.y += f[e + 1], r.x = n.x, r.y = n.y, t.lineTo(n.x, n.y), e === 0 && s === !0 && i.copy(n);
						break;
					case "c":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e += 6) t.bezierCurveTo(n.x + f[e + 0], n.y + f[e + 1], n.x + f[e + 2], n.y + f[e + 3], n.x + f[e + 4], n.y + f[e + 5]), r.x = n.x + f[e + 2], r.y = n.y + f[e + 3], n.x += f[e + 4], n.y += f[e + 5], e === 0 && s === !0 && i.copy(n);
						break;
					case "s":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e += 4) t.bezierCurveTo(m(n.x, r.x), m(n.y, r.y), n.x + f[e + 0], n.y + f[e + 1], n.x + f[e + 2], n.y + f[e + 3]), r.x = n.x + f[e + 0], r.y = n.y + f[e + 1], n.x += f[e + 2], n.y += f[e + 3], e === 0 && s === !0 && i.copy(n);
						break;
					case "q":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e += 4) t.quadraticCurveTo(n.x + f[e + 0], n.y + f[e + 1], n.x + f[e + 2], n.y + f[e + 3]), r.x = n.x + f[e + 0], r.y = n.y + f[e + 1], n.x += f[e + 2], n.y += f[e + 3], e === 0 && s === !0 && i.copy(n);
						break;
					case "t":
						f = h(d);
						for (let e = 0, a = f.length; e < a; e += 2) {
							let a = m(n.x, r.x), o = m(n.y, r.y);
							t.quadraticCurveTo(a, o, n.x + f[e + 0], n.y + f[e + 1]), r.x = a, r.y = o, n.x += f[e + 0], n.y += f[e + 1], e === 0 && s === !0 && i.copy(n);
						}
						break;
					case "a":
						f = h(d, [3, 4], 7);
						for (let e = 0, o = f.length; e < o; e += 7) {
							if (f[e + 5] == 0 && f[e + 6] == 0) continue;
							let o = n.clone();
							n.x += f[e + 5], n.y += f[e + 6], r.x = n.x, r.y = n.y, a(t, f[e], f[e + 1], f[e + 2], f[e + 3], f[e + 4], o, n), e === 0 && s === !0 && i.copy(n);
						}
						break;
					case "Z":
					case "z":
						t.currentPath && (t.currentPath.autoClose = !0, t.currentPath.curves && t.currentPath.curves.length > 0 && (n.copy(i), t.currentPath.currentPoint && t.currentPath.currentPoint.copy(n), o = !0));
						break;
					default: console.warn(c);
				}
				s = !1;
			}
			return t;
		}
		function i(e) {
			if (!(!e.sheet || !e.sheet.cssRules || !e.sheet.cssRules.length)) for (let t = 0; t < e.sheet.cssRules.length; t++) {
				let n = e.sheet.cssRules[t];
				if (n.type !== 1) continue;
				let r = n.selectorText.split(/,/gm).filter(Boolean).map((e) => e.trim());
				for (let e = 0; e < r.length; e++) {
					let t = Object.fromEntries(Object.entries(n.style).filter(([, e]) => e !== ""));
					O[r[e]] = Object.assign(O[r[e]] || {}, t);
				}
			}
		}
		function a(e, t, n, r, i, a, s, c) {
			if (t == 0 || n == 0) {
				e.lineTo(c.x, c.y);
				return;
			}
			r = r * Math.PI / 180, t = Math.abs(t), n = Math.abs(n);
			let l = (s.x - c.x) / 2, u = (s.y - c.y) / 2, d = Math.cos(r) * l + Math.sin(r) * u, f = -Math.sin(r) * l + Math.cos(r) * u, p = t * t, m = n * n, h = d * d, g = f * f, _ = h / p + g / m;
			if (_ > 1) {
				let e = Math.sqrt(_);
				t = e * t, n = e * n, p = t * t, m = n * n;
			}
			let v = p * g + m * h, y = (p * m - v) / v, b = Math.sqrt(Math.max(0, y));
			i === a && (b = -b);
			let x = b * t * f / n, S = -b * n * d / t, C = Math.cos(r) * x - Math.sin(r) * S + (s.x + c.x) / 2, w = Math.sin(r) * x + Math.cos(r) * S + (s.y + c.y) / 2, T = o(1, 0, (d - x) / t, (f - S) / n), E = o((d - x) / t, (f - S) / n, (-d - x) / t, (-f - S) / n) % (Math.PI * 2);
			e.currentPath && e.currentPath.absellipse(C, w, t, n, T, T + E, a === 0, r);
		}
		function o(e, t, n, r) {
			let i = e * n + t * r, a = Math.sqrt(e * e + t * t) * Math.sqrt(n * n + r * r), o = Math.acos(Math.max(-1, Math.min(1, i / a)));
			return e * r - t * n < 0 && (o = -o), o;
		}
		function s(e) {
			let t = v(e.getAttribute("x") || 0), n = v(e.getAttribute("y") || 0), r = v(e.getAttribute("rx") || e.getAttribute("ry") || 0), i = v(e.getAttribute("ry") || e.getAttribute("rx") || 0), a = v(e.getAttribute("width")), o = v(e.getAttribute("height")), s = .448084975506, c = new U_();
			return c.moveTo(t + r, n), c.lineTo(t + a - r, n), (r !== 0 || i !== 0) && c.bezierCurveTo(t + a - r * s, n, t + a, n + i * s, t + a, n + i), c.lineTo(t + a, n + o - i), (r !== 0 || i !== 0) && c.bezierCurveTo(t + a, n + o - i * s, t + a - r * s, n + o, t + a - r, n + o), c.lineTo(t + r, n + o), (r !== 0 || i !== 0) && c.bezierCurveTo(t + r * s, n + o, t, n + o - i * s, t, n + o - i), c.lineTo(t, n + i), (r !== 0 || i !== 0) && c.bezierCurveTo(t, n + i * s, t + r * s, n, t + r, n), c;
		}
		function c(e) {
			function t(e, t, n) {
				let a = v(t), o = v(n);
				i === 0 ? r.moveTo(a, o) : r.lineTo(a, o), i++;
			}
			let n = /([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g, r = new U_(), i = 0;
			return e.getAttribute("points") && e.getAttribute("points").replace(n, t), r.currentPath && (r.currentPath.autoClose = !0), r;
		}
		function l(e) {
			function t(e, t, n) {
				let a = v(t), o = v(n);
				i === 0 ? r.moveTo(a, o) : r.lineTo(a, o), i++;
			}
			let n = /([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g, r = new U_(), i = 0;
			return e.getAttribute("points") && e.getAttribute("points").replace(n, t), r.currentPath && (r.currentPath.autoClose = !1), r;
		}
		function u(e) {
			let t = v(e.getAttribute("cx") || 0), n = v(e.getAttribute("cy") || 0), r = v(e.getAttribute("r") || 0), i = new Og();
			i.absarc(t, n, r, 0, Math.PI * 2);
			let a = new U_();
			return a.subPaths.push(i), a;
		}
		function d(e) {
			let t = v(e.getAttribute("cx") || 0), n = v(e.getAttribute("cy") || 0), r = v(e.getAttribute("rx") || 0), i = v(e.getAttribute("ry") || 0), a = new Og();
			a.absellipse(t, n, r, i, 0, Math.PI * 2);
			let o = new U_();
			return o.subPaths.push(a), o;
		}
		function f(e) {
			let t = v(e.getAttribute("x1") || 0), n = v(e.getAttribute("y1") || 0), r = v(e.getAttribute("x2") || 0), i = v(e.getAttribute("y2") || 0), a = new U_();
			return a.moveTo(t, n), a.lineTo(r, i), a.currentPath && (a.currentPath.autoClose = !1), a;
		}
		function p(e, t) {
			t = Object.assign({}, t);
			let n = {};
			if (e.hasAttribute("class")) {
				let t = e.getAttribute("class").split(/\s/).filter(Boolean).map((e) => e.trim());
				for (let e = 0; e < t.length; e++) n = Object.assign(n, O["." + t[e]]);
			}
			e.hasAttribute("id") && (n = Object.assign(n, O["#" + e.getAttribute("id")]));
			function r(r, i, a) {
				a === void 0 && (a = function(e) {
					return e && e.startsWith && e.startsWith("url") && console.warn("SVGLoader: url access in attributes is not implemented."), e;
				}), e.hasAttribute(r) && (t[i] = a(e.getAttribute(r))), n[i] && (t[i] = a(n[i])), e.style && e.style[r] !== "" && (t[i] = a(e.style[r]));
			}
			function i(e) {
				return Math.max(0, Math.min(1, v(e)));
			}
			function a(e) {
				return Math.max(0, v(e));
			}
			return r("fill", "fill"), r("fill-opacity", "fillOpacity", i), r("fill-rule", "fillRule"), r("opacity", "opacity", i), r("stroke", "stroke"), r("stroke-opacity", "strokeOpacity", i), r("stroke-width", "strokeWidth", a), r("stroke-linejoin", "strokeLineJoin"), r("stroke-linecap", "strokeLineCap"), r("stroke-miterlimit", "strokeMiterLimit", a), r("visibility", "visibility"), t;
		}
		function m(e, t) {
			return e - (t - e);
		}
		function h(e, t, n) {
			if (typeof e != "string") throw TypeError("Invalid input: " + typeof e);
			let r = {
				SEPARATOR: /[ \t\r\n\,.\-+]/,
				WHITESPACE: /[ \t\r\n]/,
				DIGIT: /[\d]/,
				SIGN: /[-+]/,
				POINT: /\./,
				COMMA: /,/,
				EXP: /e/i,
				FLAGS: /[01]/
			}, i = 0, a = !0, o = "", s = "", c = [];
			function l(e, t, n) {
				let r = SyntaxError("Unexpected character \"" + e + "\" at index " + t + ".");
				throw r.partial = n, r;
			}
			function u() {
				o !== "" && (s === "" ? c.push(Number(o)) : c.push(Number(o) * 10 ** Number(s))), o = "", s = "";
			}
			let d, f = e.length;
			for (let p = 0; p < f; p++) {
				if (d = e[p], Array.isArray(t) && t.includes(c.length % n) && r.FLAGS.test(d)) {
					i = 1, o = d, u();
					continue;
				}
				if (i === 0) {
					if (r.WHITESPACE.test(d)) continue;
					if (r.DIGIT.test(d) || r.SIGN.test(d)) {
						i = 1, o = d;
						continue;
					}
					if (r.POINT.test(d)) {
						i = 2, o = d;
						continue;
					}
					r.COMMA.test(d) && (a && l(d, p, c), a = !0);
				}
				if (i === 1) {
					if (r.DIGIT.test(d)) {
						o += d;
						continue;
					}
					if (r.POINT.test(d)) {
						o += d, i = 2;
						continue;
					}
					if (r.EXP.test(d)) {
						i = 3;
						continue;
					}
					r.SIGN.test(d) && o.length === 1 && r.SIGN.test(o[0]) && l(d, p, c);
				}
				if (i === 2) {
					if (r.DIGIT.test(d)) {
						o += d;
						continue;
					}
					if (r.EXP.test(d)) {
						i = 3;
						continue;
					}
					r.POINT.test(d) && o[o.length - 1] === "." && l(d, p, c);
				}
				if (i === 3) {
					if (r.DIGIT.test(d)) {
						s += d;
						continue;
					}
					if (r.SIGN.test(d)) {
						if (s === "") {
							s += d;
							continue;
						}
						s.length === 1 && r.SIGN.test(s) && l(d, p, c);
					}
				}
				r.WHITESPACE.test(d) ? (u(), i = 0, a = !1) : r.COMMA.test(d) ? (u(), i = 0, a = !0) : r.SIGN.test(d) ? (u(), i = 1, o = d) : r.POINT.test(d) ? (u(), i = 2, o = d) : l(d, p, c);
			}
			return u(), c;
		}
		let g = [
			"mm",
			"cm",
			"in",
			"pt",
			"pc",
			"px"
		], _ = {
			mm: {
				mm: 1,
				cm: .1,
				in: 1 / 25.4,
				pt: 72 / 25.4,
				pc: 6 / 25.4,
				px: -1
			},
			cm: {
				mm: 10,
				cm: 1,
				in: 1 / 2.54,
				pt: 72 / 2.54,
				pc: 6 / 2.54,
				px: -1
			},
			in: {
				mm: 25.4,
				cm: 2.54,
				in: 1,
				pt: 72,
				pc: 6,
				px: -1
			},
			pt: {
				mm: 25.4 / 72,
				cm: 2.54 / 72,
				in: 1 / 72,
				pt: 1,
				pc: 6 / 72,
				px: -1
			},
			pc: {
				mm: 25.4 / 6,
				cm: 2.54 / 6,
				in: 1 / 6,
				pt: 72 / 6,
				pc: 1,
				px: -1
			},
			px: { px: 1 }
		};
		function v(e) {
			let n = "px";
			if (typeof e == "string" || e instanceof String) for (let t = 0, r = g.length; t < r; t++) {
				let r = g[t];
				if (e.endsWith(r)) {
					n = r, e = e.substring(0, e.length - r.length);
					break;
				}
			}
			let r;
			return n === "px" && t.defaultUnit !== "px" ? r = _.in[t.defaultUnit] / t.defaultDPI : (r = _[n][t.defaultUnit], r < 0 && (r = _[n].in * t.defaultDPI)), r * parseFloat(e);
		}
		function y(e) {
			if (!(e.hasAttribute("transform") || e.nodeName === "use" && (e.hasAttribute("x") || e.hasAttribute("y")))) return null;
			let t = b(e);
			return k.length > 0 && t.premultiply(k[k.length - 1]), te.copy(t), k.push(t), t;
		}
		function b(e) {
			let t = new ih(), n = A;
			if (e.nodeName === "use" && (e.hasAttribute("x") || e.hasAttribute("y"))) {
				let n = v(e.getAttribute("x") || 0), r = v(e.getAttribute("y") || 0);
				t.translate(n, r);
			}
			if (e.hasAttribute("transform")) {
				let r = e.getAttribute("transform").split(")");
				for (let e = r.length - 1; e >= 0; e--) {
					let i = r[e].trim();
					if (i === "") continue;
					let a = i.indexOf("("), o = i.length;
					if (a > 0 && a < o) {
						let e = i.slice(0, a), r = h(i.slice(a + 1));
						switch (n.identity(), e) {
							case "translate":
								if (r.length >= 1) {
									let e = r[0], t = 0;
									r.length >= 2 && (t = r[1]), n.translate(e, t);
								}
								break;
							case "rotate":
								if (r.length >= 1) {
									let e = 0, t = 0, i = 0;
									e = r[0] * Math.PI / 180, r.length >= 3 && (t = r[1], i = r[2]), j.makeTranslation(-t, -i), ee.makeRotation(e), M.multiplyMatrices(ee, j), j.makeTranslation(t, i), n.multiplyMatrices(j, M);
								}
								break;
							case "scale":
								if (r.length >= 1) {
									let e = r[0], t = e;
									r.length >= 2 && (t = r[1]), n.scale(e, t);
								}
								break;
							case "skewX":
								r.length === 1 && n.set(1, Math.tan(r[0] * Math.PI / 180), 0, 0, 1, 0, 0, 0, 1);
								break;
							case "skewY":
								r.length === 1 && n.set(1, 0, 0, Math.tan(r[0] * Math.PI / 180), 1, 0, 0, 0, 1);
								break;
							case "matrix":
								r.length === 6 && n.set(r[0], r[2], r[4], r[1], r[3], r[5], 0, 0, 1);
								break;
						}
						t.premultiply(n);
					}
				}
			}
			return t;
		}
		function x(e, t) {
			function n(e) {
				P.set(e.x, e.y, 1).applyMatrix3(t), e.set(P.x, P.y);
			}
			function r(e) {
				let n = e.xRadius, r = e.yRadius, i = Math.cos(e.aRotation), a = Math.sin(e.aRotation), o = new $(n * i, n * a, 0), s = new $(-r * a, r * i, 0), c = o.applyMatrix3(t), l = s.applyMatrix3(t), u = A.set(c.x, l.x, 0, c.y, l.y, 0, 0, 0, 1), d = j.copy(u).invert(), f = ee.copy(d).transpose().multiply(d).elements, p = E(f[0], f[1], f[4]), m = Math.sqrt(p.rt1), h = Math.sqrt(p.rt2);
				if (e.xRadius = 1 / m, e.yRadius = 1 / h, e.aRotation = Math.atan2(p.sn, p.cs), !((e.aEndAngle - e.aStartAngle) % (2 * Math.PI) < 2 ** -52)) {
					let n = j.set(m, 0, 0, 0, h, 0, 0, 0, 1), r = ee.set(p.cs, p.sn, 0, -p.sn, p.cs, 0, 0, 0, 1), i = n.multiply(r).multiply(u), a = (e) => {
						let { x: t, y: n } = new $(Math.cos(e), Math.sin(e), 0).applyMatrix3(i);
						return Math.atan2(n, t);
					};
					e.aStartAngle = a(e.aStartAngle), e.aEndAngle = a(e.aEndAngle), S(t) && (e.aClockwise = !e.aClockwise);
				}
			}
			function i(e) {
				let n = w(t), r = T(t);
				e.xRadius *= n, e.yRadius *= r;
				let i = n > 2 ** -52 ? Math.atan2(t.elements[1], t.elements[0]) : Math.atan2(-t.elements[3], t.elements[4]);
				e.aRotation += i, S(t) && (e.aStartAngle *= -1, e.aEndAngle *= -1, e.aClockwise = !e.aClockwise);
			}
			let a = e.subPaths;
			for (let e = 0, o = a.length; e < o; e++) {
				let o = a[e].curves;
				for (let e = 0; e < o.length; e++) {
					let a = o[e];
					a.isLineCurve ? (n(a.v1), n(a.v2)) : a.isCubicBezierCurve ? (n(a.v0), n(a.v1), n(a.v2), n(a.v3)) : a.isQuadraticBezierCurve ? (n(a.v0), n(a.v1), n(a.v2)) : a.isEllipseCurve && (N.set(a.aX, a.aY), n(N), a.aX = N.x, a.aY = N.y, C(t) ? r(a) : i(a));
				}
			}
		}
		function S(e) {
			let t = e.elements;
			return t[0] * t[4] - t[1] * t[3] < 0;
		}
		function C(e) {
			let t = e.elements, n = t[0] * t[3] + t[1] * t[4];
			if (n === 0) return !1;
			let r = w(e), i = T(e);
			return Math.abs(n / (r * i)) > 2 ** -52;
		}
		function w(e) {
			let t = e.elements;
			return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
		}
		function T(e) {
			let t = e.elements;
			return Math.sqrt(t[3] * t[3] + t[4] * t[4]);
		}
		function E(e, t, n) {
			let r, i, a, o, s, c = e + n, l = e - n, u = Math.sqrt(l * l + 4 * t * t);
			return c > 0 ? (r = .5 * (c + u), s = 1 / r, i = e * s * n - t * s * t) : c < 0 ? i = .5 * (c - u) : (r = .5 * u, i = -.5 * u), a = l > 0 ? l + u : l - u, Math.abs(a) > 2 * Math.abs(t) ? (s = -2 * t / a, o = 1 / Math.sqrt(1 + s * s), a = s * o) : Math.abs(t) === 0 ? (a = 1, o = 0) : (s = -.5 * a / t, a = 1 / Math.sqrt(1 + s * s), o = s * a), l > 0 && (s = a, a = -o, o = s), {
				rt1: r,
				rt2: i,
				cs: a,
				sn: o
			};
		}
		let D = [], O = {}, k = [], A = new ih(), j = new ih(), ee = new ih(), M = new ih(), N = new Q(), P = new $(), te = new ih(), F = new DOMParser().parseFromString(e, "image/svg+xml");
		return n(F.documentElement, {
			fill: "#000",
			fillOpacity: 1,
			strokeOpacity: 1,
			strokeWidth: 1,
			strokeLineJoin: "miter",
			strokeLineCap: "butt",
			strokeMiterLimit: 4
		}), {
			paths: D,
			xml: F.documentElement
		};
	}
};
function K_(e) {
	return {
		container: e.container,
		width: e.width ?? 450,
		height: e.height ?? 250,
		path: {
			sourceType: e.path?.sourceType ?? "data",
			fileUrl: e.path?.fileUrl ?? "",
			pathData: e.path?.pathData ?? "",
			padding: e.path?.padding ?? {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0
			},
			scale: e.path?.scale ?? 1,
			stroke: {
				width: e.path?.stroke?.width ?? 1.5,
				color: e.path?.stroke?.color ?? "rgba(230,247,255,0.3)",
				glow: {
					color: e.path?.stroke?.glow?.color ?? "#2E90EC",
					blur: e.path?.stroke?.glow?.blur ?? 2,
					enabled: e.path?.stroke?.glow?.enabled ?? !1
				},
				visible: e.path?.stroke?.visible ?? !0
			}
		},
		trail: {
			reverse: e.trail?.reverse ?? !1,
			gradient: {
				type: e.trail?.gradient?.type ?? "linear",
				pure: e.trail?.gradient?.pure ?? "#fff",
				linear: { stops: e.trail?.gradient?.linear?.stops ?? [{
					position: 0,
					color: "rgba(30,231,231,1)"
				}, {
					position: 100,
					color: "#1890ff"
				}] }
			},
			size: {
				width: e.trail?.size?.width ?? 2,
				length: e.trail?.size?.length ?? 100
			},
			glow: {
				color: e.trail?.glow?.color ?? "#2E90EC",
				blur: e.trail?.glow?.blur ?? 2,
				enabled: e.trail?.glow?.enabled ?? !0
			}
		},
		motion: {
			loop: e.motion?.loop ?? !1,
			duration: e.motion?.duration ?? 3,
			delay: e.motion?.delay ?? 0,
			interval: e.motion?.interval ?? 0,
			easing: e.motion?.easing ?? "Linear",
			easingFactor: e.motion?.easingFactor ?? 0
		}
	};
}
var q_ = { value: () => {} };
function J_() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new Y_(n);
}
function Y_(e) {
	this._ = e;
}
function X_(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
Y_.prototype = J_.prototype = {
	constructor: Y_,
	on: function(e, t) {
		var n = this._, r = X_(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = Z_(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = Q_(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = Q_(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new Y_(e);
	},
	call: function(e, t) {
		if ((i = arguments.length - 2) > 0) for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
	},
	apply: function(e, t, n) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n);
	}
};
function Z_(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function Q_(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = q_, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
var $_ = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
function ev(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), $_.hasOwnProperty(t) ? {
		space: $_[t],
		local: e
	} : e;
}
function tv(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function nv(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function rv(e) {
	var t = ev(e);
	return (t.local ? nv : tv)(t);
}
function iv() {}
function av(e) {
	return e == null ? iv : function() {
		return this.querySelector(e);
	};
}
function ov(e) {
	typeof e != "function" && (e = av(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new Jy(r, this._parents);
}
function sv(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function cv() {
	return [];
}
function lv(e) {
	return e == null ? cv : function() {
		return this.querySelectorAll(e);
	};
}
function uv(e) {
	return function() {
		return sv(e.apply(this, arguments));
	};
}
function dv(e) {
	e = typeof e == "function" ? uv(e) : lv(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new Jy(r, i);
}
function fv(e) {
	return function() {
		return this.matches(e);
	};
}
function pv(e) {
	return function(t) {
		return t.matches(e);
	};
}
var mv = Array.prototype.find;
function hv(e) {
	return function() {
		return mv.call(this.children, e);
	};
}
function gv() {
	return this.firstElementChild;
}
function _v(e) {
	return this.select(e == null ? gv : hv(typeof e == "function" ? e : pv(e)));
}
var vv = Array.prototype.filter;
function yv() {
	return Array.from(this.children);
}
function bv(e) {
	return function() {
		return vv.call(this.children, e);
	};
}
function xv(e) {
	return this.selectAll(e == null ? yv : bv(typeof e == "function" ? e : pv(e)));
}
function Sv(e) {
	typeof e != "function" && (e = fv(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new Jy(r, this._parents);
}
function Cv(e) {
	return Array(e.length);
}
function wv() {
	return new Jy(this._enter || this._groups.map(Cv), this._parents);
}
function Tv(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Tv.prototype = {
	constructor: Tv,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
function Ev(e) {
	return function() {
		return e;
	};
}
function Dv(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new Tv(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function Ov(e, t, n, r, i, a, o) {
	var s, c, l = new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new Tv(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function kv(e) {
	return e.__data__;
}
function Av(e, t) {
	if (!arguments.length) return Array.from(this, kv);
	var n = t ? Ov : Dv, r = this._parents, i = this._groups;
	typeof e != "function" && (e = Ev(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = jv(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new Jy(o, r), o._enter = s, o._exit = c, o;
}
function jv(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Mv() {
	return new Jy(this._exit || this._groups.map(Cv), this._parents);
}
function Nv(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Pv(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new Jy(s, this._parents);
}
function Fv() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
function Iv(e) {
	e ||= Lv;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new Jy(i, this._parents).order();
}
function Lv(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Rv() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
function zv() {
	return Array.from(this);
}
function Bv() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
function Vv() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
function Hv() {
	return !this.node();
}
function Uv(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
function Wv(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Gv(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Kv(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function qv(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function Jv(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function Yv(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function Xv(e, t) {
	var n = ev(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? Gv : Wv : typeof t == "function" ? n.local ? Yv : Jv : n.local ? qv : Kv)(n, t));
}
function Zv(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Qv(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function $v(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function ey(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function ty(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? Qv : typeof t == "function" ? ey : $v)(e, t, n ?? "")) : ny(this.node(), e);
}
function ny(e, t) {
	return e.style.getPropertyValue(t) || Zv(e).getComputedStyle(e, null).getPropertyValue(t);
}
function ry(e) {
	return function() {
		delete this[e];
	};
}
function iy(e, t) {
	return function() {
		this[e] = t;
	};
}
function ay(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function oy(e, t) {
	return arguments.length > 1 ? this.each((t == null ? ry : typeof t == "function" ? ay : iy)(e, t)) : this.node()[e];
}
function sy(e) {
	return e.trim().split(/^|\s+/);
}
function cy(e) {
	return e.classList || new ly(e);
}
function ly(e) {
	this._node = e, this._names = sy(e.getAttribute("class") || "");
}
ly.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function uy(e, t) {
	for (var n = cy(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function dy(e, t) {
	for (var n = cy(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function fy(e) {
	return function() {
		uy(this, e);
	};
}
function py(e) {
	return function() {
		dy(this, e);
	};
}
function my(e, t) {
	return function() {
		(t.apply(this, arguments) ? uy : dy)(this, e);
	};
}
function hy(e, t) {
	var n = sy(e + "");
	if (arguments.length < 2) {
		for (var r = cy(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? my : t ? fy : py)(n, t));
}
function gy() {
	this.textContent = "";
}
function _y(e) {
	return function() {
		this.textContent = e;
	};
}
function vy(e) {
	return function() {
		this.textContent = e.apply(this, arguments) ?? "";
	};
}
function yy(e) {
	return arguments.length ? this.each(e == null ? gy : (typeof e == "function" ? vy : _y)(e)) : this.node().textContent;
}
function by() {
	this.innerHTML = "";
}
function xy(e) {
	return function() {
		this.innerHTML = e;
	};
}
function Sy(e) {
	return function() {
		this.innerHTML = e.apply(this, arguments) ?? "";
	};
}
function Cy(e) {
	return arguments.length ? this.each(e == null ? by : (typeof e == "function" ? Sy : xy)(e)) : this.node().innerHTML;
}
function wy() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function Ty() {
	return this.each(wy);
}
function Ey() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Dy() {
	return this.each(Ey);
}
function Oy(e) {
	var t = typeof e == "function" ? e : rv(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
function ky() {
	return null;
}
function Ay(e, t) {
	var n = typeof e == "function" ? e : rv(e), r = t == null ? ky : typeof t == "function" ? t : av(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
function jy() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function My() {
	return this.each(jy);
}
function Ny() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Py() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Fy(e) {
	return this.select(e ? Py : Ny);
}
function Iy(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Ly(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function Ry(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function zy(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function By(e, t, n) {
	return function() {
		var r = this.__on, i, a = Ly(t);
		if (r) {
			for (var o = 0, s = r.length; o < s; ++o) if ((i = r[o]).type === e.type && i.name === e.name) {
				this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
				return;
			}
		}
		this.addEventListener(e.type, a, n), i = {
			type: e.type,
			name: e.name,
			value: t,
			listener: a,
			options: n
		}, r ? r.push(i) : this.__on = [i];
	};
}
function Vy(e, t, n) {
	var r = Ry(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? By : zy, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
function Hy(e, t, n) {
	var r = Zv(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Uy(e, t) {
	return function() {
		return Hy(this, e, t);
	};
}
function Wy(e, t) {
	return function() {
		return Hy(this, e, t.apply(this, arguments));
	};
}
function Gy(e, t) {
	return this.each((typeof t == "function" ? Wy : Uy)(e, t));
}
function* Ky() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
var qy = [null];
function Jy(e, t) {
	this._groups = e, this._parents = t;
}
function Yy() {
	return new Jy([[document.documentElement]], qy);
}
function Xy() {
	return this;
}
Jy.prototype = Yy.prototype = {
	constructor: Jy,
	select: ov,
	selectAll: dv,
	selectChild: _v,
	selectChildren: xv,
	filter: Sv,
	data: Av,
	enter: wv,
	exit: Mv,
	join: Nv,
	merge: Pv,
	selection: Xy,
	order: Fv,
	sort: Iv,
	call: Rv,
	nodes: zv,
	node: Bv,
	size: Vv,
	empty: Hv,
	each: Uv,
	attr: Xv,
	style: ty,
	property: oy,
	classed: hy,
	text: yy,
	html: Cy,
	raise: Ty,
	lower: Dy,
	append: Oy,
	insert: Ay,
	remove: My,
	clone: Fy,
	datum: Iy,
	on: Vy,
	dispatch: Gy,
	[Symbol.iterator]: Ky
};
function Zy(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function Qy(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
function $y() {}
var eb = .7, tb = 1 / eb, nb = "\\s*([+-]?\\d+)\\s*", rb = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ib = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ab = /^#([0-9a-f]{3,8})$/, ob = RegExp(`^rgb\\(${nb},${nb},${nb}\\)$`), sb = RegExp(`^rgb\\(${ib},${ib},${ib}\\)$`), cb = RegExp(`^rgba\\(${nb},${nb},${nb},${rb}\\)$`), lb = RegExp(`^rgba\\(${ib},${ib},${ib},${rb}\\)$`), ub = RegExp(`^hsl\\(${rb},${ib},${ib}\\)$`), db = RegExp(`^hsla\\(${rb},${ib},${ib},${rb}\\)$`), fb = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
Zy($y, _b, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: pb,
	formatHex: pb,
	formatHex8: mb,
	formatHsl: hb,
	formatRgb: gb,
	toString: gb
});
function pb() {
	return this.rgb().formatHex();
}
function mb() {
	return this.rgb().formatHex8();
}
function hb() {
	return Ab(this).formatHsl();
}
function gb() {
	return this.rgb().formatRgb();
}
function _b(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = ab.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? vb(t) : n === 3 ? new Sb(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? yb(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? yb(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ob.exec(e)) ? new Sb(t[1], t[2], t[3], 1) : (t = sb.exec(e)) ? new Sb(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = cb.exec(e)) ? yb(t[1], t[2], t[3], t[4]) : (t = lb.exec(e)) ? yb(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ub.exec(e)) ? kb(t[1], t[2] / 100, t[3] / 100, 1) : (t = db.exec(e)) ? kb(t[1], t[2] / 100, t[3] / 100, t[4]) : fb.hasOwnProperty(e) ? vb(fb[e]) : e === "transparent" ? new Sb(NaN, NaN, NaN, 0) : null;
}
function vb(e) {
	return new Sb(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function yb(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new Sb(e, t, n, r);
}
function bb(e) {
	return e instanceof $y || (e = _b(e)), e ? (e = e.rgb(), new Sb(e.r, e.g, e.b, e.opacity)) : new Sb();
}
function xb(e, t, n, r) {
	return arguments.length === 1 ? bb(e) : new Sb(e, t, n, r ?? 1);
}
function Sb(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Zy(Sb, xb, Qy($y, {
	brighter(e) {
		return e = e == null ? tb : tb ** +e, new Sb(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? eb : eb ** +e, new Sb(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new Sb(Db(this.r), Db(this.g), Db(this.b), Eb(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: Cb,
	formatHex: Cb,
	formatHex8: wb,
	formatRgb: Tb,
	toString: Tb
}));
function Cb() {
	return `#${Ob(this.r)}${Ob(this.g)}${Ob(this.b)}`;
}
function wb() {
	return `#${Ob(this.r)}${Ob(this.g)}${Ob(this.b)}${Ob((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Tb() {
	let e = Eb(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Db(this.r)}, ${Db(this.g)}, ${Db(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Eb(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Db(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ob(e) {
	return e = Db(e), (e < 16 ? "0" : "") + e.toString(16);
}
function kb(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Mb(e, t, n, r);
}
function Ab(e) {
	if (e instanceof Mb) return new Mb(e.h, e.s, e.l, e.opacity);
	if (e instanceof $y || (e = _b(e)), !e) return new Mb();
	if (e instanceof Mb) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new Mb(o, s, c, e.opacity);
}
function jb(e, t, n, r) {
	return arguments.length === 1 ? Ab(e) : new Mb(e, t, n, r ?? 1);
}
function Mb(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Zy(Mb, jb, Qy($y, {
	brighter(e) {
		return e = e == null ? tb : tb ** +e, new Mb(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? eb : eb ** +e, new Mb(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new Sb(Fb(e >= 240 ? e - 240 : e + 120, i, r), Fb(e, i, r), Fb(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new Mb(Nb(this.h), Pb(this.s), Pb(this.l), Eb(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = Eb(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Nb(this.h)}, ${Pb(this.s) * 100}%, ${Pb(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Nb(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Pb(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Fb(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
var Ib = (e) => () => e;
function Lb(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Rb(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function zb(e) {
	return (e = +e) == 1 ? Bb : function(t, n) {
		return n - t ? Rb(t, n, e) : Ib(isNaN(t) ? n : t);
	};
}
function Bb(e, t) {
	var n = t - e;
	return n ? Lb(e, n) : Ib(isNaN(e) ? t : e);
}
var Vb = (function e(t) {
	var n = zb(t);
	function r(e, t) {
		var r = n((e = xb(e)).r, (t = xb(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = Bb(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function Hb(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
var Ub = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Wb = new RegExp(Ub.source, "g");
function Gb(e) {
	return function() {
		return e;
	};
}
function Kb(e) {
	return function(t) {
		return e(t) + "";
	};
}
function qb(e, t) {
	var n = Ub.lastIndex = Wb.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Ub.exec(e)) && (i = Wb.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: Hb(r, i)
	})), n = Wb.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Kb(c[0].x) : Gb(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
var Jb = 180 / Math.PI, Yb = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Xb(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Jb,
		skewX: Math.atan(c) * Jb,
		scaleX: o,
		scaleY: s
	};
}
var Zb;
function Qb(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Yb : Xb(t.a, t.b, t.c, t.d, t.e, t.f);
}
function $b(e) {
	return e == null || (Zb ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Zb.setAttribute("transform", e), !(e = Zb.transform.baseVal.consolidate())) ? Yb : (e = e.matrix, Xb(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ex(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: Hb(e, i)
			}, {
				i: c - 2,
				x: Hb(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: Hb(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: Hb(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: Hb(e, n)
			}, {
				i: s - 2,
				x: Hb(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var tx = ex(Qb, "px, ", "px)", "deg)"), nx = ex($b, ", ", ")", ")"), rx = 0, ix = 0, ax = 0, ox = 1e3, sx, cx, lx = 0, ux = 0, dx = 0, fx = typeof performance == "object" && performance.now ? performance : Date, px = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function mx() {
	return ux ||= (px(hx), fx.now() + dx);
}
function hx() {
	ux = 0;
}
function gx() {
	this._call = this._time = this._next = null;
}
gx.prototype = _x.prototype = {
	constructor: gx,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? mx() : +n) + (t == null ? 0 : +t), !this._next && cx !== this && (cx ? cx._next = this : sx = this, cx = this), this._call = e, this._time = n, Sx();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, Sx());
	}
};
function _x(e, t, n) {
	var r = new gx();
	return r.restart(e, t, n), r;
}
function vx() {
	mx(), ++rx;
	for (var e = sx, t; e;) (t = ux - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--rx;
}
function yx() {
	ux = (lx = fx.now()) + dx, rx = ix = 0;
	try {
		vx();
	} finally {
		rx = 0, xx(), ux = 0;
	}
}
function bx() {
	var e = fx.now(), t = e - lx;
	t > ox && (dx -= t, lx = e);
}
function xx() {
	for (var e, t = sx, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : sx = n);
	cx = e, Sx(r);
}
function Sx(e) {
	rx || (ix &&= clearTimeout(ix), e - ux > 24 ? (e < Infinity && (ix = setTimeout(yx, e - fx.now() - dx)), ax &&= clearInterval(ax)) : (ax ||= (lx = fx.now(), setInterval(bx, ox)), rx = 1, px(yx)));
}
function Cx(e, t, n) {
	var r = new gx();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
var wx = J_("start", "end", "cancel", "interrupt"), Tx = [];
function Ex(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	Ax(e, n, {
		name: t,
		index: r,
		group: i,
		on: wx,
		tween: Tx,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function Dx(e, t) {
	var n = kx(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function Ox(e, t) {
	var n = kx(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function kx(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function Ax(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = _x(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return Cx(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (Cx(function() {
			n.state === 3 && (n.state = 4, n.timer.restart(s, n.delay, n.time), s(a));
		}), n.state = 2, n.on.call("start", e, e.__data__, n.index, n.group), n.state === 2) {
			for (n.state = 3, i = Array(d = n.tween.length), l = 0, u = -1; l < d; ++l) (f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = f);
			i.length = u + 1;
		}
	}
	function s(t) {
		for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(c), n.state = 5, 1), a = -1, o = i.length; ++a < o;) i[a].call(e, r);
		n.state === 5 && (n.on.call("end", e, e.__data__, n.index, n.group), c());
	}
	function c() {
		for (var i in n.state = 6, n.timer.stop(), delete r[t], r) return;
		delete e.__transition;
	}
}
function jx(e, t) {
	var n = e.__transition, r, i, a = !0, o;
	if (n) {
		for (o in t = t == null ? null : t + "", n) {
			if ((r = n[o]).name !== t) {
				a = !1;
				continue;
			}
			i = r.state > 2 && r.state < 5, r.state = 6, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o];
		}
		a && delete e.__transition;
	}
}
function Mx(e) {
	return this.each(function() {
		jx(this, e);
	});
}
function Nx(e, t) {
	var n, r;
	return function() {
		var i = Ox(this, e), a = i.tween;
		if (a !== n) {
			r = n = a;
			for (var o = 0, s = r.length; o < s; ++o) if (r[o].name === t) {
				r = r.slice(), r.splice(o, 1);
				break;
			}
		}
		i.tween = r;
	};
}
function Px(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = Ox(this, e), o = a.tween;
		if (o !== r) {
			i = (r = o).slice();
			for (var s = {
				name: t,
				value: n
			}, c = 0, l = i.length; c < l; ++c) if (i[c].name === t) {
				i[c] = s;
				break;
			}
			c === l && i.push(s);
		}
		a.tween = i;
	};
}
function Fx(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = kx(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? Nx : Px)(n, e, t));
}
function Ix(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = Ox(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return kx(e, r).value[t];
	};
}
function Lx(e, t) {
	var n;
	return (typeof t == "number" ? Hb : t instanceof _b ? Vb : (n = _b(t)) ? (t = n, Vb) : qb)(e, t);
}
function Rx(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function zx(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Bx(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Vx(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Hx(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Ux(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Wx(e, t) {
	var n = ev(e), r = n === "transform" ? nx : Lx;
	return this.attrTween(e, typeof t == "function" ? (n.local ? Ux : Hx)(n, r, Ix(this, "attr." + e, t)) : t == null ? (n.local ? zx : Rx)(n) : (n.local ? Vx : Bx)(n, r, t));
}
function Gx(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function Kx(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function qx(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Kx(e, i)), n;
	}
	return i._value = t, i;
}
function Jx(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Gx(e, i)), n;
	}
	return i._value = t, i;
}
function Yx(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = ev(e);
	return this.tween(n, (r.local ? qx : Jx)(r, t));
}
function Xx(e, t) {
	return function() {
		Dx(this, e).delay = +t.apply(this, arguments);
	};
}
function Zx(e, t) {
	return t = +t, function() {
		Dx(this, e).delay = t;
	};
}
function Qx(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Xx : Zx)(t, e)) : kx(this.node(), t).delay;
}
function $x(e, t) {
	return function() {
		Ox(this, e).duration = +t.apply(this, arguments);
	};
}
function eS(e, t) {
	return t = +t, function() {
		Ox(this, e).duration = t;
	};
}
function tS(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? $x : eS)(t, e)) : kx(this.node(), t).duration;
}
function nS(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		Ox(this, e).ease = t;
	};
}
function rS(e) {
	var t = this._id;
	return arguments.length ? this.each(nS(t, e)) : kx(this.node(), t).ease;
}
function iS(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		Ox(this, e).ease = n;
	};
}
function aS(e) {
	if (typeof e != "function") throw Error();
	return this.each(iS(this._id, e));
}
function oS(e) {
	typeof e != "function" && (e = fv(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new FS(r, this._parents, this._name, this._id);
}
function sS(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new FS(o, this._parents, this._name, this._id);
}
function cS(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function lS(e, t, n) {
	var r, i, a = cS(t) ? Dx : Ox;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function uS(e, t) {
	var n = this._id;
	return arguments.length < 2 ? kx(this.node(), n).on.on(e) : this.each(lS(n, e, t));
}
function dS(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function fS() {
	return this.on("end.remove", dS(this._id));
}
function pS(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = av(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, Ex(l[f], t, n, f, l, kx(u, n)));
	return new FS(a, this._parents, t, n);
}
function mS(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = lv(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = kx(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && Ex(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new FS(a, o, t, n);
}
var hS = Yy.prototype.constructor;
function gS() {
	return new hS(this._groups, this._parents);
}
function _S(e, t) {
	var n, r, i;
	return function() {
		var a = ny(this, e), o = (this.style.removeProperty(e), ny(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function vS(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function yS(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = ny(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function bS(e, t, n) {
	var r, i, a;
	return function() {
		var o = ny(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), ny(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function xS(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = Ox(this, e), l = c.on, u = c.value[a] == null ? s ||= vS(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function SS(e, t, n) {
	var r = (e += "") == "transform" ? tx : Lx;
	return t == null ? this.styleTween(e, _S(e, r)).on("end.style." + e, vS(e)) : typeof t == "function" ? this.styleTween(e, bS(e, r, Ix(this, "style." + e, t))).each(xS(this._id, e)) : this.styleTween(e, yS(e, r, t), n).on("end.style." + e, null);
}
function CS(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function wS(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && CS(e, a, n)), r;
	}
	return a._value = t, a;
}
function TS(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, wS(e, t, n ?? ""));
}
function ES(e) {
	return function() {
		this.textContent = e;
	};
}
function DS(e) {
	return function() {
		this.textContent = e(this) ?? "";
	};
}
function OS(e) {
	return this.tween("text", typeof e == "function" ? DS(Ix(this, "text", e)) : ES(e == null ? "" : e + ""));
}
function kS(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function AS(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && kS(r)), t;
	}
	return r._value = e, r;
}
function jS(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, AS(e));
}
function MS() {
	for (var e = this._name, t = this._id, n = LS(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = kx(c, t);
		Ex(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new FS(r, this._parents, e, n);
}
function NS() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = Ox(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
var PS = 0;
function FS(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function IS(e) {
	return Yy().transition(e);
}
function LS() {
	return ++PS;
}
var RS = Yy.prototype;
FS.prototype = IS.prototype = {
	constructor: FS,
	select: pS,
	selectAll: mS,
	selectChild: RS.selectChild,
	selectChildren: RS.selectChildren,
	filter: oS,
	merge: sS,
	selection: gS,
	transition: MS,
	call: RS.call,
	nodes: RS.nodes,
	node: RS.node,
	size: RS.size,
	empty: RS.empty,
	each: RS.each,
	on: uS,
	attr: Wx,
	attrTween: Yx,
	style: SS,
	styleTween: TS,
	text: OS,
	textTween: jS,
	remove: fS,
	tween: Fx,
	delay: Qx,
	duration: tS,
	ease: rS,
	easeVarying: aS,
	end: NS,
	[Symbol.iterator]: RS[Symbol.iterator]
};
function zS(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var BS = {
	time: null,
	delay: 0,
	duration: 250,
	ease: zS
};
function VS(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function HS(e) {
	var t, n;
	e instanceof FS ? (t = e._id, e = e._name) : (t = LS(), (n = BS).time = mx(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && Ex(c, e, t, l, o, n || VS(c, t));
	return new FS(r, this._parents, e, t);
}
Yy.prototype.interrupt = Mx, Yy.prototype.transition = HS;
var { abs: US, max: WS, min: GS } = Math;
["w", "e"].map(KS), ["n", "s"].map(KS), [
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(KS);
function KS(e) {
	return { type: e };
}
function qS(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
qS.prototype = {
	constructor: qS,
	scale: function(e) {
		return e === 1 ? this : new qS(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new qS(this.k, this.x + this.k * e, this.y + this.k * t);
	},
	apply: function(e) {
		return [e[0] * this.k + this.x, e[1] * this.k + this.y];
	},
	applyX: function(e) {
		return e * this.k + this.x;
	},
	applyY: function(e) {
		return e * this.k + this.y;
	},
	invert: function(e) {
		return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
	},
	invertX: function(e) {
		return (e - this.x) / this.k;
	},
	invertY: function(e) {
		return (e - this.y) / this.k;
	},
	rescaleX: function(e) {
		return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
	},
	rescaleY: function(e) {
		return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
	},
	toString: function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}
};
var JS = new qS(1, 0, 0);
YS.prototype = qS.prototype;
function YS(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return JS;
	return e.__zoom;
}
function XS(e, t) {
	if (!Array.isArray(e) || e.length === 0) return {
		r: 1,
		g: 1,
		b: 1,
		a: 1
	};
	let n = 0;
	for (let r = 0; r < e.length - 1; r++) {
		let i = e[r], a = e[r + 1];
		if (t * 100 >= i.position && t * 100 < a.position) {
			n = r;
			break;
		}
	}
	let r = e[n], i = e[n + 1] || r, a = (t * 100 - r.position) / Math.max(i.position - r.position, 1);
	return ZS(Vb(r.color, i.color)(a));
}
function ZS(e) {
	let t = _b(e);
	if (!t) return {
		r: 1,
		g: 1,
		b: 1,
		a: 1
	};
	let n = t.rgb();
	return {
		r: n.r / 255,
		g: n.g / 255,
		b: n.b / 255,
		a: n.opacity
	};
}
function QS(e) {
	return new Proxy(e, {
		get(e, t, n) {
			return Reflect.get(e, t, n);
		},
		set() {
			throw Error("Cannot modify read-only property");
		},
		deleteProperty() {
			throw Error("Cannot delete read-only property");
		},
		defineProperty() {
			throw Error("Cannot define property on read-only object");
		},
		preventExtensions() {
			throw Error("Cannot prevent extensions on read-only object");
		},
		isExtensible() {
			return !1;
		}
	});
}
var $S = class e {
	static install(t) {
		return new e(t);
	}
	#e = new ku();
	constructor(e) {
		e.hooks.destroy.listen(() => {
			this.destroy();
		}), e.hooks.init.listen(({ points: t }) => {
			e.context.canvas.appendChild(this.#e), this.draw(e.context, { points: t });
		});
	}
	draw(e, { points: t }) {
		let { options: n } = e, { path: r } = n, i = r.stroke;
		if (!i?.visible || t.length === 0) return;
		let a = i.glow ?? {
			enabled: !1,
			color: "#2E90EC",
			blur: 2
		}, o = {
			stroke: i.color,
			lineWidth: i.width
		};
		a.enabled && (o.shadowColor = a.color, o.shadowBlur = a.blur);
		let s = new Iu({ style: {
			...o,
			shadowType: "outer",
			d: [...t.map((e, t) => t === 0 ? [
				"M",
				e.x,
				e.y
			] : [
				"L",
				e.x,
				e.y
			])]
		} });
		this.#e.appendChild(s);
	}
	destroy() {
		this.#e?.remove();
	}
}, eC = class e {
	static install(t) {
		return new e(t);
	}
	constructor(e) {
		this.#e = e, e.hooks.destroy.listen(() => {
			this.destroy();
		}), e.hooks.init.listen(({ points: t }) => {
			this.init(e, { points: t });
		}), e.hooks.animate.listen(({ current: e }) => {
			this.animate(e);
		});
	}
	#e;
	#t = {
		animateLoopFlag: !1,
		isRunning: !1,
		animateOnceStartTime: null,
		animateOnceStopFlag: !1,
		animateLoopStartTime: null,
		points: [],
		offset: 0,
		speed: 0,
		delay: 0,
		lineWidth: 0,
		pathLength: 0,
		duration: 0,
		length: 0,
		pointShapes: new ku(),
		pointShapePool: []
	};
	init(e, { points: t }) {
		e.context.canvas.appendChild(this.#t.pointShapes);
		let { options: n } = e.context, r = n.trail.size, i = n.motion, a = r.length, o = r.width, s = -a, c = t.length, l = c / ((i.duration ?? 3) * 1e3), u = (i.delay ?? 0) * 1e3, d = n.trail.reverse ?? !1;
		if (t.length === 0) return;
		let f = d ? [...t].reverse() : t;
		this.#t.points = f, this.#t.animateLoopFlag = i.loop ?? !1, this.#t.offset = s, this.#t.speed = l, this.#t.delay = u, this.#t.lineWidth = o, this.#t.pathLength = c, this.#t.duration = (i.duration ?? 3) * 1e3, this.#t.length = a, this.ensurePointShapePool();
	}
	animate(e) {
		this.#t.points.length !== 0 && (this.#t.isRunning = !0, this.#t.animateLoopFlag ? this.animateLoop() : this.animateOnce(e));
	}
	animateLoop() {
		this.#t.isRunning && (this.#t.delay > 0 && (this.#t.animateLoopStartTime === null && (this.#t.animateLoopStartTime = performance.now()), performance.now() - this.#t.animateLoopStartTime < this.#t.delay) || (this.#t.offset += this.#t.speed, this.#t.offset >= this.#t.pathLength && (this.#t.offset = -this.#t.pathLength), this.update()));
	}
	animateOnce(e) {
		if (!this.#t.isRunning) return;
		this.#t.animateOnceStartTime === null && (this.#t.animateOnceStartTime = performance.now());
		let t = this.#t.animateOnceStartTime, n = this.#t.delay, r = this.#t.duration, i = e - t;
		if (n > 0 && i < n) return;
		let a = i - n, o = Math.min(a / r, 1), s = -this.#t.length, c = this.#t.pathLength - 1;
		this.#t.offset = s + (c - s) * o, o >= 1 && (this.#t.animateOnceStopFlag = !0), !this.#t.animateOnceStopFlag && this.update();
	}
	update() {
		let { options: e } = this.#e.context, t = e.trail, n = this.#t.lineWidth ?? 2, r = t.glow ?? {
			enabled: !1,
			color: "#2E90EC",
			blur: 2
		};
		this.ensurePointShapePool();
		let i = this.#t.pointShapePool, a = this.#t.offset, o = this.#t.points, s = o.length - 1, c = Math.max(this.#t.length - 1, 1);
		for (let e = 0; e < i.length; e++) {
			let l = i[e], u = e / c, d = a + e, f = Math.floor(d);
			if (f < 0 || f > s) {
				l.style.opacity = 0;
				continue;
			}
			let p = o[f], m = o[Math.min(f + 1, s)], h = d - f, g = p.x + (m.x - p.x) * h, _ = p.y + (m.y - p.y) * h, v = this.getColor(t.gradient, u), y = `rgba(${Math.round(v.r * 255)},${Math.round(v.g * 255)},${Math.round(v.b * 255)},${Math.min(1, Math.max(0, v.a))})`;
			l.style.opacity = 1, l.style.cx = g, l.style.cy = _, l.style.fill = y, l.style.r = n * u, l.style.shadowColor = r.enabled ? r.color : "transparent", l.style.shadowBlur = r.enabled ? r.blur : 0;
		}
	}
	getColor(e, t) {
		return e?.type === "linear" ? XS(e.linear?.stops ?? [{
			position: 0,
			color: "rgba(30,231,231,0.01)"
		}, {
			position: 100,
			color: "#1890FF"
		}], t) : ZS(e?.pure || "#fff");
	}
	ensurePointShapePool() {
		let e = this.#t.length, t = this.#t.pointShapePool;
		if (t.length > e) {
			for (let n = e; n < t.length; n++) t[n].remove();
			t.length = e;
		}
		for (let n = t.length; n < e; n++) {
			let e = new wu({ style: {
				cx: 0,
				cy: 0,
				r: 0,
				opacity: 0
			} });
			t.push(e), this.#t.pointShapes.appendChild(e);
		}
	}
	destroy() {
		this.#t.isRunning = !1, this.#t.pointShapes.remove();
	}
}, tC = class {
	#e = {
		beforeInit: new xm(),
		init: new xm(),
		destroy: new xm(),
		error: new xm(),
		animate: new xm()
	};
	#t = {
		abortController: new AbortController(),
		options: {},
		container: null,
		canvas: null,
		renderer: null
	};
	#n = { points: [] };
	get hooks() {
		return QS(this.#e);
	}
	get context() {
		return QS(this.#t);
	}
	get points() {
		return this.#n.points;
	}
	constructor(e) {
		if (!e.container) throw Error("MotionPath: container element is required");
		this.#t.abortController.signal.addEventListener("abort", () => {
			this.#e.destroy.call();
		}), this.#t.container = e.container, this.#t.options = K_(e), this.#r(), this.#a();
	}
	#r = () => {
		this.#t.renderer = new bm();
		let e = new sd({
			container: this.#t.container,
			width: this.#t.options.width,
			height: this.#t.options.height,
			renderer: this.#t.renderer
		});
		this.#e.destroy.listen(() => {
			e.destroy();
		}), this.#t.canvas = e;
	};
	#i = () => {
		$S.install(this), eC.install(this);
	};
	#a = async () => {
		this.#e.beforeInit.call(), this.#i(), await this.#t.canvas.ready;
		try {
			let { points: e } = await G_.loadSvgSource({
				...this.#t.options.path,
				width: this.#t.options.width,
				height: this.#t.options.height
			});
			this.#t.canvas.addEventListener(Qu.AFTER_RENDER, () => {
				this.#e.animate.call({ current: performance.now() });
			}), this.#n.points = e, this.#e.init.call({ points: e });
		} catch (e) {
			this.#e.error.call({ error: e });
		}
	};
	destroy() {
		this.#t.abortController.abort();
	}
}, nC = new WeakMap(), rC = null;
function iC(e) {
	if (typeof e != "string") return e;
	let t = document.querySelector(e);
	if (!t) throw Error(`Container not found: ${e}`);
	if (!(t instanceof HTMLElement)) throw Error(`Container is not an HTMLElement: ${e}`);
	return t;
}
function aC(e) {
	return e.map((e, t) => `${t === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function oC(e, t) {
	let n = iC(e), r = t || window.EXPORTED_DATA;
	if (!r) throw Error("No data provided");
	let i = nC.get(n);
	i && (i.destroy(), nC.delete(n));
	let a = aC(r.points);
	n.style.width = `${r.config.width}px`, n.style.height = `${r.config.height}px`;
	let o = new tC({
		container: n,
		width: r.config.width,
		height: r.config.height,
		path: {
			sourceType: "data",
			pathData: a
		},
		trail: r.config.trail,
		motion: r.config.motion
	});
	return nC.set(n, o), rC = n, o;
}
function sC(e) {
	let t = e === void 0 ? rC : iC(e);
	if (!t) return;
	let n = nC.get(t);
	n && (n.destroy(), nC.delete(t)), t === rC && (rC = null);
}
export { sC as destroy, oC as renderTo };
