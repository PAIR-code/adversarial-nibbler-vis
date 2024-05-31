/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i8 = decorators.length - 1, decorator; i8 >= 0; i8--)
      if (decorator = decorators[i8])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/tslib/tslib.es6.mjs
  function __decorate(decorators, target, key, desc) {
    var c6 = arguments.length, r8 = c6 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r8 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i8 = decorators.length - 1; i8 >= 0; i8--)
        if (d5 = decorators[i8])
          r8 = (c6 < 3 ? d5(r8) : c6 > 3 ? d5(target, key, r8) : d5(target, key)) || r8;
    return c6 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
  }

  // node_modules/@material/mwc-icon/node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t7, e12, n12) {
      if (this._$cssResult$ = true, n12 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t7, this.t = e12;
    }
    get styleSheet() {
      let t7 = this.o;
      const s8 = this.t;
      if (e && void 0 === t7) {
        const e12 = void 0 !== s8 && 1 === s8.length;
        e12 && (t7 = n.get(s8)), void 0 === t7 && ((this.o = t7 = new CSSStyleSheet()).replaceSync(this.cssText), e12 && n.set(s8, t7));
      }
      return t7;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t7) => new o("string" == typeof t7 ? t7 : t7 + "", void 0, s);
  var i = (t7, ...e12) => {
    const n12 = 1 === t7.length ? t7[0] : e12.reduce((e13, s8, n13) => e13 + ((t8) => {
      if (true === t8._$cssResult$)
        return t8.cssText;
      if ("number" == typeof t8)
        return t8;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t8 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s8) + t7[n13 + 1], t7[0]);
    return new o(n12, t7, s);
  };
  var S = (s8, n12) => {
    e ? s8.adoptedStyleSheets = n12.map((t7) => t7 instanceof CSSStyleSheet ? t7 : t7.styleSheet) : n12.forEach((e12) => {
      const n13 = document.createElement("style"), o10 = t.litNonce;
      void 0 !== o10 && n13.setAttribute("nonce", o10), n13.textContent = e12.cssText, s8.appendChild(n13);
    });
  };
  var c = e ? (t7) => t7 : (t7) => t7 instanceof CSSStyleSheet ? ((t8) => {
    let e12 = "";
    for (const s8 of t8.cssRules)
      e12 += s8.cssText;
    return r(e12);
  })(t7) : t7;

  // node_modules/@material/mwc-icon/node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t7, i8) {
    switch (i8) {
      case Boolean:
        t7 = t7 ? h : null;
        break;
      case Object:
      case Array:
        t7 = null == t7 ? t7 : JSON.stringify(t7);
    }
    return t7;
  }, fromAttribute(t7, i8) {
    let s8 = t7;
    switch (i8) {
      case Boolean:
        s8 = null !== t7;
        break;
      case Number:
        s8 = null === t7 ? null : Number(t7);
        break;
      case Object:
      case Array:
        try {
          s8 = JSON.parse(t7);
        } catch (t8) {
          s8 = null;
        }
    }
    return s8;
  } };
  var a = (t7, i8) => i8 !== t7 && (i8 == i8 || t7 == t7);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = "finalized";
  var u = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
    }
    static addInitializer(t7) {
      var i8;
      this.finalize(), (null !== (i8 = this.h) && void 0 !== i8 ? i8 : this.h = []).push(t7);
    }
    static get observedAttributes() {
      this.finalize();
      const t7 = [];
      return this.elementProperties.forEach((i8, s8) => {
        const e12 = this._$Ep(s8, i8);
        void 0 !== e12 && (this._$Ev.set(e12, s8), t7.push(e12));
      }), t7;
    }
    static createProperty(t7, i8 = l) {
      if (i8.state && (i8.attribute = false), this.finalize(), this.elementProperties.set(t7, i8), !i8.noAccessor && !this.prototype.hasOwnProperty(t7)) {
        const s8 = "symbol" == typeof t7 ? Symbol() : "__" + t7, e12 = this.getPropertyDescriptor(t7, s8, i8);
        void 0 !== e12 && Object.defineProperty(this.prototype, t7, e12);
      }
    }
    static getPropertyDescriptor(t7, i8, s8) {
      return { get() {
        return this[i8];
      }, set(e12) {
        const r8 = this[t7];
        this[i8] = e12, this.requestUpdate(t7, r8, s8);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t7) {
      return this.elementProperties.get(t7) || l;
    }
    static finalize() {
      if (this.hasOwnProperty(d))
        return false;
      this[d] = true;
      const t7 = Object.getPrototypeOf(this);
      if (t7.finalize(), void 0 !== t7.h && (this.h = [...t7.h]), this.elementProperties = new Map(t7.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t8 = this.properties, i8 = [...Object.getOwnPropertyNames(t8), ...Object.getOwnPropertySymbols(t8)];
        for (const s8 of i8)
          this.createProperty(s8, t8[s8]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i8) {
      const s8 = [];
      if (Array.isArray(i8)) {
        const e12 = new Set(i8.flat(1 / 0).reverse());
        for (const i9 of e12)
          s8.unshift(c(i9));
      } else
        void 0 !== i8 && s8.push(c(i8));
      return s8;
    }
    static _$Ep(t7, i8) {
      const s8 = i8.attribute;
      return false === s8 ? void 0 : "string" == typeof s8 ? s8 : "string" == typeof t7 ? t7.toLowerCase() : void 0;
    }
    _$Eu() {
      var t7;
      this._$E_ = new Promise((t8) => this.enableUpdating = t8), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t7 = this.constructor.h) || void 0 === t7 || t7.forEach((t8) => t8(this));
    }
    addController(t7) {
      var i8, s8;
      (null !== (i8 = this._$ES) && void 0 !== i8 ? i8 : this._$ES = []).push(t7), void 0 !== this.renderRoot && this.isConnected && (null === (s8 = t7.hostConnected) || void 0 === s8 || s8.call(t7));
    }
    removeController(t7) {
      var i8;
      null === (i8 = this._$ES) || void 0 === i8 || i8.splice(this._$ES.indexOf(t7) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t7, i8) => {
        this.hasOwnProperty(i8) && (this._$Ei.set(i8, this[i8]), delete this[i8]);
      });
    }
    createRenderRoot() {
      var t7;
      const s8 = null !== (t7 = this.shadowRoot) && void 0 !== t7 ? t7 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s8, this.constructor.elementStyles), s8;
    }
    connectedCallback() {
      var t7;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t7 = this._$ES) || void 0 === t7 || t7.forEach((t8) => {
        var i8;
        return null === (i8 = t8.hostConnected) || void 0 === i8 ? void 0 : i8.call(t8);
      });
    }
    enableUpdating(t7) {
    }
    disconnectedCallback() {
      var t7;
      null === (t7 = this._$ES) || void 0 === t7 || t7.forEach((t8) => {
        var i8;
        return null === (i8 = t8.hostDisconnected) || void 0 === i8 ? void 0 : i8.call(t8);
      });
    }
    attributeChangedCallback(t7, i8, s8) {
      this._$AK(t7, s8);
    }
    _$EO(t7, i8, s8 = l) {
      var e12;
      const r8 = this.constructor._$Ep(t7, s8);
      if (void 0 !== r8 && true === s8.reflect) {
        const h5 = (void 0 !== (null === (e12 = s8.converter) || void 0 === e12 ? void 0 : e12.toAttribute) ? s8.converter : n2).toAttribute(i8, s8.type);
        this._$El = t7, null == h5 ? this.removeAttribute(r8) : this.setAttribute(r8, h5), this._$El = null;
      }
    }
    _$AK(t7, i8) {
      var s8;
      const e12 = this.constructor, r8 = e12._$Ev.get(t7);
      if (void 0 !== r8 && this._$El !== r8) {
        const t8 = e12.getPropertyOptions(r8), h5 = "function" == typeof t8.converter ? { fromAttribute: t8.converter } : void 0 !== (null === (s8 = t8.converter) || void 0 === s8 ? void 0 : s8.fromAttribute) ? t8.converter : n2;
        this._$El = r8, this[r8] = h5.fromAttribute(i8, t8.type), this._$El = null;
      }
    }
    requestUpdate(t7, i8, s8) {
      let e12 = true;
      void 0 !== t7 && (((s8 = s8 || this.constructor.getPropertyOptions(t7)).hasChanged || a)(this[t7], i8) ? (this._$AL.has(t7) || this._$AL.set(t7, i8), true === s8.reflect && this._$El !== t7 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t7, s8))) : e12 = false), !this.isUpdatePending && e12 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t8) {
        Promise.reject(t8);
      }
      const t7 = this.scheduleUpdate();
      return null != t7 && await t7, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t7;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t8, i9) => this[i9] = t8), this._$Ei = void 0);
      let i8 = false;
      const s8 = this._$AL;
      try {
        i8 = this.shouldUpdate(s8), i8 ? (this.willUpdate(s8), null === (t7 = this._$ES) || void 0 === t7 || t7.forEach((t8) => {
          var i9;
          return null === (i9 = t8.hostUpdate) || void 0 === i9 ? void 0 : i9.call(t8);
        }), this.update(s8)) : this._$Ek();
      } catch (t8) {
        throw i8 = false, this._$Ek(), t8;
      }
      i8 && this._$AE(s8);
    }
    willUpdate(t7) {
    }
    _$AE(t7) {
      var i8;
      null === (i8 = this._$ES) || void 0 === i8 || i8.forEach((t8) => {
        var i9;
        return null === (i9 = t8.hostUpdated) || void 0 === i9 ? void 0 : i9.call(t8);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t7)), this.updated(t7);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t7) {
      return true;
    }
    update(t7) {
      void 0 !== this._$EC && (this._$EC.forEach((t8, i8) => this._$EO(i8, this[i8], t8)), this._$EC = void 0), this._$Ek();
    }
    updated(t7) {
    }
    firstUpdated(t7) {
    }
  };
  u[d] = true, u.elementProperties = /* @__PURE__ */ new Map(), u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: u }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.3");

  // node_modules/@material/mwc-icon/node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t7) => t7 }) : void 0;
  var o3 = "$lit$";
  var n3 = `lit$${(Math.random() + "").slice(9)}$`;
  var l2 = "?" + n3;
  var h2 = `<${l2}>`;
  var r3 = document;
  var u2 = () => r3.createComment("");
  var d2 = (t7) => null === t7 || "object" != typeof t7 && "function" != typeof t7;
  var c2 = Array.isArray;
  var v = (t7) => c2(t7) || "function" == typeof (null == t7 ? void 0 : t7[Symbol.iterator]);
  var a2 = "[ 	\n\f\r]";
  var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g = /'/g;
  var $ = /"/g;
  var y = /^(?:script|style|textarea|title)$/i;
  var w = (t7) => (i8, ...s8) => ({ _$litType$: t7, strings: i8, values: s8 });
  var x = w(1);
  var b = w(2);
  var T = Symbol.for("lit-noChange");
  var A = Symbol.for("lit-nothing");
  var E = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129, null, false);
  function P(t7, i8) {
    if (!Array.isArray(t7) || !t7.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== e3 ? e3.createHTML(i8) : i8;
  }
  var V = (t7, i8) => {
    const s8 = t7.length - 1, e12 = [];
    let l7, r8 = 2 === i8 ? "<svg>" : "", u5 = f;
    for (let i9 = 0; i9 < s8; i9++) {
      const s9 = t7[i9];
      let d5, c6, v3 = -1, a5 = 0;
      for (; a5 < s9.length && (u5.lastIndex = a5, c6 = u5.exec(s9), null !== c6); )
        a5 = u5.lastIndex, u5 === f ? "!--" === c6[1] ? u5 = _ : void 0 !== c6[1] ? u5 = m : void 0 !== c6[2] ? (y.test(c6[2]) && (l7 = RegExp("</" + c6[2], "g")), u5 = p) : void 0 !== c6[3] && (u5 = p) : u5 === p ? ">" === c6[0] ? (u5 = null != l7 ? l7 : f, v3 = -1) : void 0 === c6[1] ? v3 = -2 : (v3 = u5.lastIndex - c6[2].length, d5 = c6[1], u5 = void 0 === c6[3] ? p : '"' === c6[3] ? $ : g) : u5 === $ || u5 === g ? u5 = p : u5 === _ || u5 === m ? u5 = f : (u5 = p, l7 = void 0);
      const w3 = u5 === p && t7[i9 + 1].startsWith("/>") ? " " : "";
      r8 += u5 === f ? s9 + h2 : v3 >= 0 ? (e12.push(d5), s9.slice(0, v3) + o3 + s9.slice(v3) + n3 + w3) : s9 + n3 + (-2 === v3 ? (e12.push(void 0), i9) : w3);
    }
    return [P(t7, r8 + (t7[s8] || "<?>") + (2 === i8 ? "</svg>" : "")), e12];
  };
  var N = class _N {
    constructor({ strings: t7, _$litType$: i8 }, e12) {
      let h5;
      this.parts = [];
      let r8 = 0, d5 = 0;
      const c6 = t7.length - 1, v3 = this.parts, [a5, f4] = V(t7, i8);
      if (this.el = _N.createElement(a5, e12), C.currentNode = this.el.content, 2 === i8) {
        const t8 = this.el.content, i9 = t8.firstChild;
        i9.remove(), t8.append(...i9.childNodes);
      }
      for (; null !== (h5 = C.nextNode()) && v3.length < c6; ) {
        if (1 === h5.nodeType) {
          if (h5.hasAttributes()) {
            const t8 = [];
            for (const i9 of h5.getAttributeNames())
              if (i9.endsWith(o3) || i9.startsWith(n3)) {
                const s8 = f4[d5++];
                if (t8.push(i9), void 0 !== s8) {
                  const t9 = h5.getAttribute(s8.toLowerCase() + o3).split(n3), i10 = /([.?@])?(.*)/.exec(s8);
                  v3.push({ type: 1, index: r8, name: i10[2], strings: t9, ctor: "." === i10[1] ? H : "?" === i10[1] ? L : "@" === i10[1] ? z : k });
                } else
                  v3.push({ type: 6, index: r8 });
              }
            for (const i9 of t8)
              h5.removeAttribute(i9);
          }
          if (y.test(h5.tagName)) {
            const t8 = h5.textContent.split(n3), i9 = t8.length - 1;
            if (i9 > 0) {
              h5.textContent = s3 ? s3.emptyScript : "";
              for (let s8 = 0; s8 < i9; s8++)
                h5.append(t8[s8], u2()), C.nextNode(), v3.push({ type: 2, index: ++r8 });
              h5.append(t8[i9], u2());
            }
          }
        } else if (8 === h5.nodeType)
          if (h5.data === l2)
            v3.push({ type: 2, index: r8 });
          else {
            let t8 = -1;
            for (; -1 !== (t8 = h5.data.indexOf(n3, t8 + 1)); )
              v3.push({ type: 7, index: r8 }), t8 += n3.length - 1;
          }
        r8++;
      }
    }
    static createElement(t7, i8) {
      const s8 = r3.createElement("template");
      return s8.innerHTML = t7, s8;
    }
  };
  function S2(t7, i8, s8 = t7, e12) {
    var o10, n12, l7, h5;
    if (i8 === T)
      return i8;
    let r8 = void 0 !== e12 ? null === (o10 = s8._$Co) || void 0 === o10 ? void 0 : o10[e12] : s8._$Cl;
    const u5 = d2(i8) ? void 0 : i8._$litDirective$;
    return (null == r8 ? void 0 : r8.constructor) !== u5 && (null === (n12 = null == r8 ? void 0 : r8._$AO) || void 0 === n12 || n12.call(r8, false), void 0 === u5 ? r8 = void 0 : (r8 = new u5(t7), r8._$AT(t7, s8, e12)), void 0 !== e12 ? (null !== (l7 = (h5 = s8)._$Co) && void 0 !== l7 ? l7 : h5._$Co = [])[e12] = r8 : s8._$Cl = r8), void 0 !== r8 && (i8 = S2(t7, r8._$AS(t7, i8.values), r8, e12)), i8;
  }
  var M = class {
    constructor(t7, i8) {
      this._$AV = [], this._$AN = void 0, this._$AD = t7, this._$AM = i8;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t7) {
      var i8;
      const { el: { content: s8 }, parts: e12 } = this._$AD, o10 = (null !== (i8 = null == t7 ? void 0 : t7.creationScope) && void 0 !== i8 ? i8 : r3).importNode(s8, true);
      C.currentNode = o10;
      let n12 = C.nextNode(), l7 = 0, h5 = 0, u5 = e12[0];
      for (; void 0 !== u5; ) {
        if (l7 === u5.index) {
          let i9;
          2 === u5.type ? i9 = new R(n12, n12.nextSibling, this, t7) : 1 === u5.type ? i9 = new u5.ctor(n12, u5.name, u5.strings, this, t7) : 6 === u5.type && (i9 = new Z(n12, this, t7)), this._$AV.push(i9), u5 = e12[++h5];
        }
        l7 !== (null == u5 ? void 0 : u5.index) && (n12 = C.nextNode(), l7++);
      }
      return C.currentNode = r3, o10;
    }
    v(t7) {
      let i8 = 0;
      for (const s8 of this._$AV)
        void 0 !== s8 && (void 0 !== s8.strings ? (s8._$AI(t7, s8, i8), i8 += s8.strings.length - 2) : s8._$AI(t7[i8])), i8++;
    }
  };
  var R = class _R {
    constructor(t7, i8, s8, e12) {
      var o10;
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t7, this._$AB = i8, this._$AM = s8, this.options = e12, this._$Cp = null === (o10 = null == e12 ? void 0 : e12.isConnected) || void 0 === o10 || o10;
    }
    get _$AU() {
      var t7, i8;
      return null !== (i8 = null === (t7 = this._$AM) || void 0 === t7 ? void 0 : t7._$AU) && void 0 !== i8 ? i8 : this._$Cp;
    }
    get parentNode() {
      let t7 = this._$AA.parentNode;
      const i8 = this._$AM;
      return void 0 !== i8 && 11 === (null == t7 ? void 0 : t7.nodeType) && (t7 = i8.parentNode), t7;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t7, i8 = this) {
      t7 = S2(this, t7, i8), d2(t7) ? t7 === A || null == t7 || "" === t7 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t7 !== this._$AH && t7 !== T && this._(t7) : void 0 !== t7._$litType$ ? this.g(t7) : void 0 !== t7.nodeType ? this.$(t7) : v(t7) ? this.T(t7) : this._(t7);
    }
    k(t7) {
      return this._$AA.parentNode.insertBefore(t7, this._$AB);
    }
    $(t7) {
      this._$AH !== t7 && (this._$AR(), this._$AH = this.k(t7));
    }
    _(t7) {
      this._$AH !== A && d2(this._$AH) ? this._$AA.nextSibling.data = t7 : this.$(r3.createTextNode(t7)), this._$AH = t7;
    }
    g(t7) {
      var i8;
      const { values: s8, _$litType$: e12 } = t7, o10 = "number" == typeof e12 ? this._$AC(t7) : (void 0 === e12.el && (e12.el = N.createElement(P(e12.h, e12.h[0]), this.options)), e12);
      if ((null === (i8 = this._$AH) || void 0 === i8 ? void 0 : i8._$AD) === o10)
        this._$AH.v(s8);
      else {
        const t8 = new M(o10, this), i9 = t8.u(this.options);
        t8.v(s8), this.$(i9), this._$AH = t8;
      }
    }
    _$AC(t7) {
      let i8 = E.get(t7.strings);
      return void 0 === i8 && E.set(t7.strings, i8 = new N(t7)), i8;
    }
    T(t7) {
      c2(this._$AH) || (this._$AH = [], this._$AR());
      const i8 = this._$AH;
      let s8, e12 = 0;
      for (const o10 of t7)
        e12 === i8.length ? i8.push(s8 = new _R(this.k(u2()), this.k(u2()), this, this.options)) : s8 = i8[e12], s8._$AI(o10), e12++;
      e12 < i8.length && (this._$AR(s8 && s8._$AB.nextSibling, e12), i8.length = e12);
    }
    _$AR(t7 = this._$AA.nextSibling, i8) {
      var s8;
      for (null === (s8 = this._$AP) || void 0 === s8 || s8.call(this, false, true, i8); t7 && t7 !== this._$AB; ) {
        const i9 = t7.nextSibling;
        t7.remove(), t7 = i9;
      }
    }
    setConnected(t7) {
      var i8;
      void 0 === this._$AM && (this._$Cp = t7, null === (i8 = this._$AP) || void 0 === i8 || i8.call(this, t7));
    }
  };
  var k = class {
    constructor(t7, i8, s8, e12, o10) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t7, this.name = i8, this._$AM = e12, this.options = o10, s8.length > 2 || "" !== s8[0] || "" !== s8[1] ? (this._$AH = Array(s8.length - 1).fill(new String()), this.strings = s8) : this._$AH = A;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t7, i8 = this, s8, e12) {
      const o10 = this.strings;
      let n12 = false;
      if (void 0 === o10)
        t7 = S2(this, t7, i8, 0), n12 = !d2(t7) || t7 !== this._$AH && t7 !== T, n12 && (this._$AH = t7);
      else {
        const e13 = t7;
        let l7, h5;
        for (t7 = o10[0], l7 = 0; l7 < o10.length - 1; l7++)
          h5 = S2(this, e13[s8 + l7], i8, l7), h5 === T && (h5 = this._$AH[l7]), n12 || (n12 = !d2(h5) || h5 !== this._$AH[l7]), h5 === A ? t7 = A : t7 !== A && (t7 += (null != h5 ? h5 : "") + o10[l7 + 1]), this._$AH[l7] = h5;
      }
      n12 && !e12 && this.j(t7);
    }
    j(t7) {
      t7 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t7 ? t7 : "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t7) {
      this.element[this.name] = t7 === A ? void 0 : t7;
    }
  };
  var I = s3 ? s3.emptyScript : "";
  var L = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t7) {
      t7 && t7 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
    }
  };
  var z = class extends k {
    constructor(t7, i8, s8, e12, o10) {
      super(t7, i8, s8, e12, o10), this.type = 5;
    }
    _$AI(t7, i8 = this) {
      var s8;
      if ((t7 = null !== (s8 = S2(this, t7, i8, 0)) && void 0 !== s8 ? s8 : A) === T)
        return;
      const e12 = this._$AH, o10 = t7 === A && e12 !== A || t7.capture !== e12.capture || t7.once !== e12.once || t7.passive !== e12.passive, n12 = t7 !== A && (e12 === A || o10);
      o10 && this.element.removeEventListener(this.name, this, e12), n12 && this.element.addEventListener(this.name, this, t7), this._$AH = t7;
    }
    handleEvent(t7) {
      var i8, s8;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s8 = null === (i8 = this.options) || void 0 === i8 ? void 0 : i8.host) && void 0 !== s8 ? s8 : this.element, t7) : this._$AH.handleEvent(t7);
    }
  };
  var Z = class {
    constructor(t7, i8, s8) {
      this.element = t7, this.type = 6, this._$AN = void 0, this._$AM = i8, this.options = s8;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t7) {
      S2(this, t7);
    }
  };
  var B = i2.litHtmlPolyfillSupport;
  null == B || B(N, R), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.8.0");
  var D = (t7, i8, s8) => {
    var e12, o10;
    const n12 = null !== (e12 = null == s8 ? void 0 : s8.renderBefore) && void 0 !== e12 ? e12 : i8;
    let l7 = n12._$litPart$;
    if (void 0 === l7) {
      const t8 = null !== (o10 = null == s8 ? void 0 : s8.renderBefore) && void 0 !== o10 ? o10 : null;
      n12._$litPart$ = l7 = new R(i8.insertBefore(u2(), t8), t8, void 0, null != s8 ? s8 : {});
    }
    return l7._$AI(t7), l7;
  };

  // node_modules/@material/mwc-icon/node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends u {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t7, e12;
      const i8 = super.createRenderRoot();
      return null !== (t7 = (e12 = this.renderOptions).renderBefore) && void 0 !== t7 || (e12.renderBefore = i8.firstChild), i8;
    }
    update(t7) {
      const i8 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t7), this._$Do = D(i8, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t7;
      super.connectedCallback(), null === (t7 = this._$Do) || void 0 === t7 || t7.setConnected(true);
    }
    disconnectedCallback() {
      var t7;
      super.disconnectedCallback(), null === (t7 = this._$Do) || void 0 === t7 || t7.setConnected(false);
    }
    render() {
      return T;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.3");

  // node_modules/@material/mwc-icon/node_modules/@lit/reactive-element/decorators/custom-element.js
  var e4 = (e12) => (n12) => "function" == typeof n12 ? ((e13, n13) => (customElements.define(e13, n13), n13))(e12, n12) : ((e13, n13) => {
    const { kind: t7, elements: s8 } = n13;
    return { kind: t7, elements: s8, finisher(n14) {
      customElements.define(e13, n14);
    } };
  })(e12, n12);

  // node_modules/@material/mwc-icon/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n6;
  var e5 = null != (null === (n6 = window.HTMLSlotElement) || void 0 === n6 ? void 0 : n6.prototype.assignedElements) ? (o10, n12) => o10.assignedElements(n12) : (o10, n12) => o10.assignedNodes(n12).filter((o11) => o11.nodeType === Node.ELEMENT_NODE);

  // node_modules/@material/mwc-icon/mwc-icon-host.css.js
  var styles = i`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

  // node_modules/@material/mwc-icon/mwc-icon.js
  var Icon = class Icon2 extends s4 {
    /** @soyTemplate */
    render() {
      return x`<span><slot></slot></span>`;
    }
  };
  Icon.styles = [styles];
  Icon = __decorate([
    e4("mwc-icon")
  ], Icon);

  // node_modules/@adobe/lit-mobx/lib/mixin-custom.js
  var reaction = Symbol("LitMobxRenderReaction");
  var cachedRequestUpdate = Symbol("LitMobxRequestUpdate");
  function MobxReactionUpdateCustom(constructor, ReactionConstructor) {
    var _a, _b;
    return _b = class MobxReactingElement extends constructor {
      constructor() {
        super(...arguments);
        this[_a] = () => {
          this.requestUpdate();
        };
      }
      connectedCallback() {
        super.connectedCallback();
        const name = this.constructor.name || this.nodeName;
        this[reaction] = new ReactionConstructor(`${name}.update()`, this[cachedRequestUpdate]);
        if (this.hasUpdated)
          this.requestUpdate();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        if (this[reaction]) {
          this[reaction].dispose();
          this[reaction] = void 0;
        }
      }
      update(changedProperties) {
        if (this[reaction]) {
          this[reaction].track(super.update.bind(this, changedProperties));
        } else {
          super.update(changedProperties);
        }
      }
    }, _a = cachedRequestUpdate, _b;
  }

  // node_modules/mobx/dist/mobx.esm.js
  var niceErrors = {
    0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
    1: function _2(annotationType, key) {
      return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
    },
    /*
    2(prop) {
        return `invalid decorator for '${prop.toString()}'`
    },
    3(prop) {
        return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
    },
    4(prop) {
        return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
    },
    */
    5: "'keys()' can only be used on observable objects, arrays, sets and maps",
    6: "'values()' can only be used on observable objects, arrays, sets and maps",
    7: "'entries()' can only be used on observable objects, arrays and maps",
    8: "'set()' can only be used on observable objects, arrays and maps",
    9: "'remove()' can only be used on observable objects, arrays and maps",
    10: "'has()' can only be used on observable objects, arrays and maps",
    11: "'get()' can only be used on observable objects, arrays and maps",
    12: "Invalid annotation",
    13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
    14: "Intercept handlers should return nothing or a change object",
    15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
    16: "Modification exception: the internal structure of an observable array was changed.",
    17: function _3(index, length) {
      return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
    },
    18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
    19: function _4(other) {
      return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
    },
    20: function _5(other) {
      return "Cannot initialize map from " + other;
    },
    21: function _6(dataStructure) {
      return "Cannot convert to map from '" + dataStructure + "'";
    },
    22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
    23: "It is not possible to get index atoms from arrays",
    24: function _7(thing) {
      return "Cannot obtain administration from " + thing;
    },
    25: function _8(property, name) {
      return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
    },
    26: "please specify a property",
    27: function _9(property, name) {
      return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
    },
    28: function _10(thing) {
      return "Cannot obtain atom from " + thing;
    },
    29: "Expecting some object",
    30: "invalid action stack. did you forget to finish an action?",
    31: "missing option for computed: get",
    32: function _11(name, derivation) {
      return "Cycle detected in computation " + name + ": " + derivation;
    },
    33: function _12(name) {
      return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
    },
    34: function _13(name) {
      return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
    },
    35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
    36: "isolateGlobalState should be called before MobX is running any reactions",
    37: function _14(method) {
      return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
    },
    38: "'ownKeys()' can only be used on observable objects",
    39: "'defineProperty()' can only be used on observable objects"
  };
  var errors = true ? niceErrors : {};
  function die(error) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (true) {
      var e12 = typeof error === "string" ? error : errors[error];
      if (typeof e12 === "function")
        e12 = e12.apply(null, args);
      throw new Error("[MobX] " + e12);
    }
    throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
  }
  var mockGlobal = {};
  function getGlobal() {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    return mockGlobal;
  }
  var assign = Object.assign;
  var getDescriptor = Object.getOwnPropertyDescriptor;
  var defineProperty = Object.defineProperty;
  var objectPrototype = Object.prototype;
  var EMPTY_ARRAY = [];
  Object.freeze(EMPTY_ARRAY);
  var EMPTY_OBJECT = {};
  Object.freeze(EMPTY_OBJECT);
  var hasProxy = typeof Proxy !== "undefined";
  var plainObjectString = /* @__PURE__ */ Object.toString();
  function assertProxies() {
    if (!hasProxy) {
      die(true ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
    }
  }
  function warnAboutProxyRequirement(msg) {
    if (globalState.verifyProxies) {
      die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
    }
  }
  function getNextId() {
    return ++globalState.mobxGuid;
  }
  function once(func) {
    var invoked = false;
    return function() {
      if (invoked) {
        return;
      }
      invoked = true;
      return func.apply(this, arguments);
    };
  }
  var noop = function noop2() {
  };
  function isFunction(fn) {
    return typeof fn === "function";
  }
  function isStringish(value) {
    var t7 = typeof value;
    switch (t7) {
      case "string":
      case "symbol":
      case "number":
        return true;
    }
    return false;
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }
    var proto = Object.getPrototypeOf(value);
    if (proto == null) {
      return true;
    }
    var protoConstructor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
  }
  function isGenerator(obj) {
    var constructor = obj == null ? void 0 : obj.constructor;
    if (!constructor) {
      return false;
    }
    if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) {
      return true;
    }
    return false;
  }
  function addHiddenProp(object2, propName, value) {
    defineProperty(object2, propName, {
      enumerable: false,
      writable: true,
      configurable: true,
      value
    });
  }
  function addHiddenFinalProp(object2, propName, value) {
    defineProperty(object2, propName, {
      enumerable: false,
      writable: false,
      configurable: true,
      value
    });
  }
  function createInstanceofPredicate(name, theClass) {
    var propName = "isMobX" + name;
    theClass.prototype[propName] = true;
    return function(x3) {
      return isObject(x3) && x3[propName] === true;
    };
  }
  function isES6Map(thing) {
    return thing instanceof Map;
  }
  function isES6Set(thing) {
    return thing instanceof Set;
  }
  var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
  function getPlainObjectKeys(object2) {
    var keys = Object.keys(object2);
    if (!hasGetOwnPropertySymbols) {
      return keys;
    }
    var symbols = Object.getOwnPropertySymbols(object2);
    if (!symbols.length) {
      return keys;
    }
    return [].concat(keys, symbols.filter(function(s8) {
      return objectPrototype.propertyIsEnumerable.call(object2, s8);
    }));
  }
  var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function(obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
  } : (
    /* istanbul ignore next */
    Object.getOwnPropertyNames
  );
  function stringifyKey(key) {
    if (typeof key === "string") {
      return key;
    }
    if (typeof key === "symbol") {
      return key.toString();
    }
    return new String(key).toString();
  }
  function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
  }
  function hasProp(target, prop) {
    return objectPrototype.hasOwnProperty.call(target, prop);
  }
  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(target) {
    var res = {};
    ownKeys(target).forEach(function(key) {
      res[key] = getDescriptor(target, key);
    });
    return res;
  };
  function _defineProperties(target, props) {
    for (var i8 = 0; i8 < props.length; i8++) {
      var descriptor = props[i8];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i8 = 1; i8 < arguments.length; i8++) {
        var source = arguments[i8];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o10, p4) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p5) {
      o11.__proto__ = p5;
      return o11;
    };
    return _setPrototypeOf(o10, p4);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _unsupportedIterableToArray(o10, minLen) {
    if (!o10)
      return;
    if (typeof o10 === "string")
      return _arrayLikeToArray(o10, minLen);
    var n12 = Object.prototype.toString.call(o10).slice(8, -1);
    if (n12 === "Object" && o10.constructor)
      n12 = o10.constructor.name;
    if (n12 === "Map" || n12 === "Set")
      return Array.from(o10);
    if (n12 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n12))
      return _arrayLikeToArray(o10, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i8 = 0, arr2 = new Array(len); i8 < len; i8++)
      arr2[i8] = arr[i8];
    return arr2;
  }
  function _createForOfIteratorHelperLoose(o10, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o10[Symbol.iterator] || o10["@@iterator"];
    if (it)
      return (it = it.call(o10)).next.bind(it);
    if (Array.isArray(o10) || (it = _unsupportedIterableToArray(o10)) || allowArrayLike && o10 && typeof o10.length === "number") {
      if (it)
        o10 = it;
      var i8 = 0;
      return function() {
        if (i8 >= o10.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o10[i8++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  var storedAnnotationsSymbol = /* @__PURE__ */ Symbol("mobx-stored-annotations");
  function createDecoratorAnnotation(annotation) {
    function decorator(target, property) {
      if (is20223Decorator(property)) {
        return annotation.decorate_20223_(target, property);
      } else {
        storeAnnotation(target, property, annotation);
      }
    }
    return Object.assign(decorator, annotation);
  }
  function storeAnnotation(prototype, key, annotation) {
    if (!hasProp(prototype, storedAnnotationsSymbol)) {
      addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
    }
    if (isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
      var fieldName = prototype.constructor.name + ".prototype." + key.toString();
      die("'" + fieldName + "' is decorated with 'override', but no such decorated member was found on prototype.");
    }
    assertNotDecorated(prototype, annotation, key);
    if (!isOverride(annotation)) {
      prototype[storedAnnotationsSymbol][key] = annotation;
    }
  }
  function assertNotDecorated(prototype, annotation, key) {
    if (!isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
      var fieldName = prototype.constructor.name + ".prototype." + key.toString();
      var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
      var requestedAnnotationType = annotation.annotationType_;
      die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed.\nUse '@override' decorator for methods overridden by subclass.");
    }
  }
  function collectStoredAnnotations(target) {
    if (!hasProp(target, storedAnnotationsSymbol)) {
      addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
    }
    return target[storedAnnotationsSymbol];
  }
  function is20223Decorator(context) {
    return typeof context == "object" && typeof context["kind"] == "string";
  }
  function assert20223DecoratorType(context, types) {
    if (!types.includes(context.kind)) {
      die("The decorator applied to '" + String(context.name) + "' cannot be used on a " + context.kind + " element");
    }
  }
  var $mobx = /* @__PURE__ */ Symbol("mobx administration");
  var Atom = /* @__PURE__ */ function() {
    function Atom2(name_) {
      if (name_ === void 0) {
        name_ = true ? "Atom@" + getNextId() : "Atom";
      }
      this.name_ = void 0;
      this.isPendingUnobservation_ = false;
      this.isBeingObserved_ = false;
      this.observers_ = /* @__PURE__ */ new Set();
      this.diffValue_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
      this.onBOL = void 0;
      this.onBUOL = void 0;
      this.name_ = name_;
    }
    var _proto = Atom2.prototype;
    _proto.onBO = function onBO() {
      if (this.onBOL) {
        this.onBOL.forEach(function(listener) {
          return listener();
        });
      }
    };
    _proto.onBUO = function onBUO() {
      if (this.onBUOL) {
        this.onBUOL.forEach(function(listener) {
          return listener();
        });
      }
    };
    _proto.reportObserved = function reportObserved$1() {
      return reportObserved(this);
    };
    _proto.reportChanged = function reportChanged() {
      startBatch();
      propagateChanged(this);
      endBatch();
    };
    _proto.toString = function toString2() {
      return this.name_;
    };
    return Atom2;
  }();
  var isAtom = /* @__PURE__ */ createInstanceofPredicate("Atom", Atom);
  function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) {
      onBecomeObservedHandler = noop;
    }
    if (onBecomeUnobservedHandler === void 0) {
      onBecomeUnobservedHandler = noop;
    }
    var atom = new Atom(name);
    if (onBecomeObservedHandler !== noop) {
      onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
      onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
  }
  function identityComparer(a5, b4) {
    return a5 === b4;
  }
  function structuralComparer(a5, b4) {
    return deepEqual(a5, b4);
  }
  function shallowComparer(a5, b4) {
    return deepEqual(a5, b4, 1);
  }
  function defaultComparer(a5, b4) {
    if (Object.is) {
      return Object.is(a5, b4);
    }
    return a5 === b4 ? a5 !== 0 || 1 / a5 === 1 / b4 : a5 !== a5 && b4 !== b4;
  }
  var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    "default": defaultComparer,
    shallow: shallowComparer
  };
  function deepEnhancer(v3, _16, name) {
    if (isObservable(v3)) {
      return v3;
    }
    if (Array.isArray(v3)) {
      return observable.array(v3, {
        name
      });
    }
    if (isPlainObject(v3)) {
      return observable.object(v3, void 0, {
        name
      });
    }
    if (isES6Map(v3)) {
      return observable.map(v3, {
        name
      });
    }
    if (isES6Set(v3)) {
      return observable.set(v3, {
        name
      });
    }
    if (typeof v3 === "function" && !isAction(v3) && !isFlow(v3)) {
      if (isGenerator(v3)) {
        return flow(v3);
      } else {
        return autoAction(name, v3);
      }
    }
    return v3;
  }
  function shallowEnhancer(v3, _16, name) {
    if (v3 === void 0 || v3 === null) {
      return v3;
    }
    if (isObservableObject(v3) || isObservableArray(v3) || isObservableMap(v3) || isObservableSet(v3)) {
      return v3;
    }
    if (Array.isArray(v3)) {
      return observable.array(v3, {
        name,
        deep: false
      });
    }
    if (isPlainObject(v3)) {
      return observable.object(v3, void 0, {
        name,
        deep: false
      });
    }
    if (isES6Map(v3)) {
      return observable.map(v3, {
        name,
        deep: false
      });
    }
    if (isES6Set(v3)) {
      return observable.set(v3, {
        name,
        deep: false
      });
    }
    if (true) {
      die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
    }
  }
  function referenceEnhancer(newValue) {
    return newValue;
  }
  function refStructEnhancer(v3, oldValue) {
    if (isObservable(v3)) {
      die("observable.struct should not be used with observable values");
    }
    if (deepEqual(v3, oldValue)) {
      return oldValue;
    }
    return v3;
  }
  var OVERRIDE = "override";
  function isOverride(annotation) {
    return annotation.annotationType_ === OVERRIDE;
  }
  function createActionAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$1,
      extend_: extend_$1,
      decorate_20223_: decorate_20223_$1
    };
  }
  function make_$1(adm, key, descriptor, source) {
    var _this$options_;
    if ((_this$options_ = this.options_) != null && _this$options_.bound) {
      return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
    }
    if (source === adm.target_) {
      return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
    }
    if (isAction(descriptor.value)) {
      return 1;
    }
    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
    defineProperty(source, key, actionDescriptor);
    return 2;
  }
  function extend_$1(adm, key, descriptor, proxyTrap) {
    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
    return adm.defineProperty_(key, actionDescriptor, proxyTrap);
  }
  function decorate_20223_$1(mthd, context) {
    if (true) {
      assert20223DecoratorType(context, ["method", "field"]);
    }
    var kind = context.kind, name = context.name, addInitializer = context.addInitializer;
    var ann = this;
    var _createAction = function _createAction2(m3) {
      var _ann$options_$name, _ann$options_, _ann$options_$autoAct, _ann$options_2;
      return createAction((_ann$options_$name = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.name) != null ? _ann$options_$name : name.toString(), m3, (_ann$options_$autoAct = (_ann$options_2 = ann.options_) == null ? void 0 : _ann$options_2.autoAction) != null ? _ann$options_$autoAct : false);
    };
    if (kind == "field") {
      addInitializer(function() {
        storeAnnotation(this, name, ann);
      });
      return;
    }
    if (kind == "method") {
      var _this$options_2;
      if (!isAction(mthd)) {
        mthd = _createAction(mthd);
      }
      if ((_this$options_2 = this.options_) != null && _this$options_2.bound) {
        addInitializer(function() {
          var self2 = this;
          var bound = self2[name].bind(self2);
          bound.isMobxAction = true;
          self2[name] = bound;
        });
      }
      return mthd;
    }
    die("Cannot apply '" + ann.annotationType_ + "' to '" + String(name) + "' (kind: " + kind + "):" + ("\n'" + ann.annotationType_ + "' can only be used on properties with a function value."));
  }
  function assertActionDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var value = _ref2.value;
    if (!isFunction(value)) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
    }
  }
  function createActionDescriptor(adm, annotation, key, descriptor, safeDescriptors) {
    var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;
    if (safeDescriptors === void 0) {
      safeDescriptors = globalState.safeDescriptors;
    }
    assertActionDescriptor(adm, annotation, key, descriptor);
    var value = descriptor.value;
    if ((_annotation$options_ = annotation.options_) != null && _annotation$options_.bound) {
      var _adm$proxy_;
      value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }
    return {
      value: createAction(
        (_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(),
        value,
        (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false,
        // https://github.com/mobxjs/mobx/discussions/3140
        (_annotation$options_4 = annotation.options_) != null && _annotation$options_4.bound ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : void 0
      ),
      // Non-configurable for classes
      // prevents accidental field redefinition in subclass
      configurable: safeDescriptors ? adm.isPlainObject_ : true,
      // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
      enumerable: false,
      // Non-obsevable, therefore non-writable
      // Also prevents rewriting in subclass constructor
      writable: safeDescriptors ? false : true
    };
  }
  function createFlowAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$2,
      extend_: extend_$2,
      decorate_20223_: decorate_20223_$2
    };
  }
  function make_$2(adm, key, descriptor, source) {
    var _this$options_;
    if (source === adm.target_) {
      return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
    }
    if ((_this$options_ = this.options_) != null && _this$options_.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
      if (this.extend_(adm, key, descriptor, false) === null) {
        return 0;
      }
    }
    if (isFlow(descriptor.value)) {
      return 1;
    }
    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
    defineProperty(source, key, flowDescriptor);
    return 2;
  }
  function extend_$2(adm, key, descriptor, proxyTrap) {
    var _this$options_2;
    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
    return adm.defineProperty_(key, flowDescriptor, proxyTrap);
  }
  function decorate_20223_$2(mthd, context) {
    var _this$options_3;
    if (true) {
      assert20223DecoratorType(context, ["method"]);
    }
    var name = context.name, addInitializer = context.addInitializer;
    if (!isFlow(mthd)) {
      mthd = flow(mthd);
    }
    if ((_this$options_3 = this.options_) != null && _this$options_3.bound) {
      addInitializer(function() {
        var self2 = this;
        var bound = self2[name].bind(self2);
        bound.isMobXFlow = true;
        self2[name] = bound;
      });
    }
    return mthd;
  }
  function assertFlowDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var value = _ref2.value;
    if (!isFunction(value)) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
    }
  }
  function createFlowDescriptor(adm, annotation, key, descriptor, bound, safeDescriptors) {
    if (safeDescriptors === void 0) {
      safeDescriptors = globalState.safeDescriptors;
    }
    assertFlowDescriptor(adm, annotation, key, descriptor);
    var value = descriptor.value;
    if (!isFlow(value)) {
      value = flow(value);
    }
    if (bound) {
      var _adm$proxy_;
      value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
      value.isMobXFlow = true;
    }
    return {
      value,
      // Non-configurable for classes
      // prevents accidental field redefinition in subclass
      configurable: safeDescriptors ? adm.isPlainObject_ : true,
      // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
      enumerable: false,
      // Non-obsevable, therefore non-writable
      // Also prevents rewriting in subclass constructor
      writable: safeDescriptors ? false : true
    };
  }
  function createComputedAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$3,
      extend_: extend_$3,
      decorate_20223_: decorate_20223_$3
    };
  }
  function make_$3(adm, key, descriptor) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
  }
  function extend_$3(adm, key, descriptor, proxyTrap) {
    assertComputedDescriptor(adm, this, key, descriptor);
    return adm.defineComputedProperty_(key, _extends({}, this.options_, {
      get: descriptor.get,
      set: descriptor.set
    }), proxyTrap);
  }
  function decorate_20223_$3(get3, context) {
    if (true) {
      assert20223DecoratorType(context, ["getter"]);
    }
    var ann = this;
    var key = context.name, addInitializer = context.addInitializer;
    addInitializer(function() {
      var adm = asObservableObject(this)[$mobx];
      var options = _extends({}, ann.options_, {
        get: get3,
        context: this
      });
      options.name || (options.name = true ? adm.name_ + "." + key.toString() : "ObservableObject." + key.toString());
      adm.values_.set(key, new ComputedValue(options));
    });
    return function() {
      return this[$mobx].getObservablePropValue_(key);
    };
  }
  function assertComputedDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var get3 = _ref2.get;
    if (!get3) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
    }
  }
  function createObservableAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$4,
      extend_: extend_$4,
      decorate_20223_: decorate_20223_$4
    };
  }
  function make_$4(adm, key, descriptor) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
  }
  function extend_$4(adm, key, descriptor, proxyTrap) {
    var _this$options_$enhanc, _this$options_;
    assertObservableDescriptor(adm, this, key, descriptor);
    return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
  }
  function decorate_20223_$4(desc, context) {
    if (true) {
      if (context.kind === "field") {
        throw die("Please use `@observable accessor " + String(context.name) + "` instead of `@observable " + String(context.name) + "`");
      }
      assert20223DecoratorType(context, ["accessor"]);
    }
    var ann = this;
    var kind = context.kind, name = context.name;
    var initializedObjects = /* @__PURE__ */ new WeakSet();
    function initializeObservable(target, value) {
      var _ann$options_$enhance, _ann$options_;
      var adm = asObservableObject(target)[$mobx];
      var observable2 = new ObservableValue(value, (_ann$options_$enhance = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.enhancer) != null ? _ann$options_$enhance : deepEnhancer, true ? adm.name_ + "." + name.toString() : "ObservableObject." + name.toString(), false);
      adm.values_.set(name, observable2);
      initializedObjects.add(target);
    }
    if (kind == "accessor") {
      return {
        get: function get3() {
          if (!initializedObjects.has(this)) {
            initializeObservable(this, desc.get.call(this));
          }
          return this[$mobx].getObservablePropValue_(name);
        },
        set: function set4(value) {
          if (!initializedObjects.has(this)) {
            initializeObservable(this, value);
          }
          return this[$mobx].setObservablePropValue_(name, value);
        },
        init: function init(value) {
          if (!initializedObjects.has(this)) {
            initializeObservable(this, value);
          }
          return value;
        }
      };
    }
    return;
  }
  function assertObservableDescriptor(adm, _ref, key, descriptor) {
    var annotationType_ = _ref.annotationType_;
    if (!("value" in descriptor)) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
    }
  }
  var AUTO = "true";
  var autoAnnotation = /* @__PURE__ */ createAutoAnnotation();
  function createAutoAnnotation(options) {
    return {
      annotationType_: AUTO,
      options_: options,
      make_: make_$5,
      extend_: extend_$5,
      decorate_20223_: decorate_20223_$5
    };
  }
  function make_$5(adm, key, descriptor, source) {
    var _this$options_3, _this$options_4;
    if (descriptor.get) {
      return computed.make_(adm, key, descriptor, source);
    }
    if (descriptor.set) {
      var set4 = createAction(key.toString(), descriptor.set);
      if (source === adm.target_) {
        return adm.defineProperty_(key, {
          configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
          set: set4
        }) === null ? 0 : 2;
      }
      defineProperty(source, key, {
        configurable: true,
        set: set4
      });
      return 2;
    }
    if (source !== adm.target_ && typeof descriptor.value === "function") {
      var _this$options_2;
      if (isGenerator(descriptor.value)) {
        var _this$options_;
        var flowAnnotation2 = (_this$options_ = this.options_) != null && _this$options_.autoBind ? flow.bound : flow;
        return flowAnnotation2.make_(adm, key, descriptor, source);
      }
      var actionAnnotation2 = (_this$options_2 = this.options_) != null && _this$options_2.autoBind ? autoAction.bound : autoAction;
      return actionAnnotation2.make_(adm, key, descriptor, source);
    }
    var observableAnnotation2 = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable;
    if (typeof descriptor.value === "function" && (_this$options_4 = this.options_) != null && _this$options_4.autoBind) {
      var _adm$proxy_;
      descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }
    return observableAnnotation2.make_(adm, key, descriptor, source);
  }
  function extend_$5(adm, key, descriptor, proxyTrap) {
    var _this$options_5, _this$options_6;
    if (descriptor.get) {
      return computed.extend_(adm, key, descriptor, proxyTrap);
    }
    if (descriptor.set) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: createAction(key.toString(), descriptor.set)
      }, proxyTrap);
    }
    if (typeof descriptor.value === "function" && (_this$options_5 = this.options_) != null && _this$options_5.autoBind) {
      var _adm$proxy_2;
      descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
    }
    var observableAnnotation2 = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
    return observableAnnotation2.extend_(adm, key, descriptor, proxyTrap);
  }
  function decorate_20223_$5(desc, context) {
    die("'" + this.annotationType_ + "' cannot be used as a decorator");
  }
  var OBSERVABLE = "observable";
  var OBSERVABLE_REF = "observable.ref";
  var OBSERVABLE_SHALLOW = "observable.shallow";
  var OBSERVABLE_STRUCT = "observable.struct";
  var defaultCreateObservableOptions = {
    deep: true,
    name: void 0,
    defaultDecorator: void 0,
    proxy: true
  };
  Object.freeze(defaultCreateObservableOptions);
  function asCreateObservableOptions(thing) {
    return thing || defaultCreateObservableOptions;
  }
  var observableAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE);
  var observableRefAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_REF, {
    enhancer: referenceEnhancer
  });
  var observableShallowAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_SHALLOW, {
    enhancer: shallowEnhancer
  });
  var observableStructAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_STRUCT, {
    enhancer: refStructEnhancer
  });
  var observableDecoratorAnnotation = /* @__PURE__ */ createDecoratorAnnotation(observableAnnotation);
  function getEnhancerFromOptions(options) {
    return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
  }
  function getAnnotationFromOptions(options) {
    var _options$defaultDecor;
    return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : void 0;
  }
  function getEnhancerFromAnnotation(annotation) {
    var _annotation$options_$, _annotation$options_;
    return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
  }
  function createObservable(v3, arg2, arg3) {
    if (is20223Decorator(arg2)) {
      return observableAnnotation.decorate_20223_(v3, arg2);
    }
    if (isStringish(arg2)) {
      storeAnnotation(v3, arg2, observableAnnotation);
      return;
    }
    if (isObservable(v3)) {
      return v3;
    }
    if (isPlainObject(v3)) {
      return observable.object(v3, arg2, arg3);
    }
    if (Array.isArray(v3)) {
      return observable.array(v3, arg2);
    }
    if (isES6Map(v3)) {
      return observable.map(v3, arg2);
    }
    if (isES6Set(v3)) {
      return observable.set(v3, arg2);
    }
    if (typeof v3 === "object" && v3 !== null) {
      return v3;
    }
    return observable.box(v3, arg2);
  }
  assign(createObservable, observableDecoratorAnnotation);
  var observableFactories = {
    box: function box(value, options) {
      var o10 = asCreateObservableOptions(options);
      return new ObservableValue(value, getEnhancerFromOptions(o10), o10.name, true, o10.equals);
    },
    array: function array(initialValues, options) {
      var o10 = asCreateObservableOptions(options);
      return (globalState.useProxies === false || o10.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o10), o10.name);
    },
    map: function map(initialValues, options) {
      var o10 = asCreateObservableOptions(options);
      return new ObservableMap(initialValues, getEnhancerFromOptions(o10), o10.name);
    },
    set: function set(initialValues, options) {
      var o10 = asCreateObservableOptions(options);
      return new ObservableSet(initialValues, getEnhancerFromOptions(o10), o10.name);
    },
    object: function object(props, decorators, options) {
      return initObservable(function() {
        return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
      });
    },
    ref: /* @__PURE__ */ createDecoratorAnnotation(observableRefAnnotation),
    shallow: /* @__PURE__ */ createDecoratorAnnotation(observableShallowAnnotation),
    deep: observableDecoratorAnnotation,
    struct: /* @__PURE__ */ createDecoratorAnnotation(observableStructAnnotation)
  };
  var observable = /* @__PURE__ */ assign(createObservable, observableFactories);
  var COMPUTED = "computed";
  var COMPUTED_STRUCT = "computed.struct";
  var computedAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED);
  var computedStructAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED_STRUCT, {
    equals: comparer.structural
  });
  var computed = function computed2(arg1, arg2) {
    if (is20223Decorator(arg2)) {
      return computedAnnotation.decorate_20223_(arg1, arg2);
    }
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, computedAnnotation);
    }
    if (isPlainObject(arg1)) {
      return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
    }
    if (true) {
      if (!isFunction(arg1)) {
        die("First argument to `computed` should be an expression.");
      }
      if (isFunction(arg2)) {
        die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
      }
    }
    var opts = isPlainObject(arg2) ? arg2 : {};
    opts.get = arg1;
    opts.name || (opts.name = arg1.name || "");
    return new ComputedValue(opts);
  };
  Object.assign(computed, computedAnnotation);
  computed.struct = /* @__PURE__ */ createDecoratorAnnotation(computedStructAnnotation);
  var _getDescriptor$config;
  var _getDescriptor;
  var currentActionId = 0;
  var nextActionId = 1;
  var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /* @__PURE__ */ getDescriptor(function() {
  }, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false;
  var tmpNameDescriptor = {
    value: "action",
    configurable: true,
    writable: false,
    enumerable: false
  };
  function createAction(actionName, fn, autoAction2, ref) {
    if (autoAction2 === void 0) {
      autoAction2 = false;
    }
    if (true) {
      if (!isFunction(fn)) {
        die("`action` can only be invoked on functions");
      }
      if (typeof actionName !== "string" || !actionName) {
        die("actions should have valid names, got: '" + actionName + "'");
      }
    }
    function res() {
      return executeAction(actionName, autoAction2, fn, ref || this, arguments);
    }
    res.isMobxAction = true;
    res.toString = function() {
      return fn.toString();
    };
    if (isFunctionNameConfigurable) {
      tmpNameDescriptor.value = actionName;
      defineProperty(res, "name", tmpNameDescriptor);
    }
    return res;
  }
  function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
    var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);
    try {
      return fn.apply(scope, args);
    } catch (err) {
      runInfo.error_ = err;
      throw err;
    } finally {
      _endAction(runInfo);
    }
  }
  function _startAction(actionName, canRunAsDerivation, scope, args) {
    var notifySpy_ = isSpyEnabled() && !!actionName;
    var startTime_ = 0;
    if (notifySpy_) {
      startTime_ = Date.now();
      var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
      spyReportStart({
        type: ACTION,
        name: actionName,
        object: scope,
        arguments: flattenedArgs
      });
    }
    var prevDerivation_ = globalState.trackingDerivation;
    var runAsAction = !canRunAsDerivation || !prevDerivation_;
    startBatch();
    var prevAllowStateChanges_ = globalState.allowStateChanges;
    if (runAsAction) {
      untrackedStart();
      prevAllowStateChanges_ = allowStateChangesStart(true);
    }
    var prevAllowStateReads_ = allowStateReadsStart(true);
    var runInfo = {
      runAsAction_: runAsAction,
      prevDerivation_,
      prevAllowStateChanges_,
      prevAllowStateReads_,
      notifySpy_,
      startTime_,
      actionId_: nextActionId++,
      parentActionId_: currentActionId
    };
    currentActionId = runInfo.actionId_;
    return runInfo;
  }
  function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId_) {
      die(30);
    }
    currentActionId = runInfo.parentActionId_;
    if (runInfo.error_ !== void 0) {
      globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges_);
    allowStateReadsEnd(runInfo.prevAllowStateReads_);
    endBatch();
    if (runInfo.runAsAction_) {
      untrackedEnd(runInfo.prevDerivation_);
    }
    if (runInfo.notifySpy_) {
      spyReportEnd({
        time: Date.now() - runInfo.startTime_
      });
    }
    globalState.suppressReactionErrors = false;
  }
  function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
  }
  function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
  }
  var _Symbol$toPrimitive;
  var CREATE = "create";
  _Symbol$toPrimitive = Symbol.toPrimitive;
  var ObservableValue = /* @__PURE__ */ function(_Atom) {
    _inheritsLoose(ObservableValue2, _Atom);
    function ObservableValue2(value, enhancer, name_, notifySpy, equals) {
      var _this;
      if (name_ === void 0) {
        name_ = true ? "ObservableValue@" + getNextId() : "ObservableValue";
      }
      if (notifySpy === void 0) {
        notifySpy = true;
      }
      if (equals === void 0) {
        equals = comparer["default"];
      }
      _this = _Atom.call(this, name_) || this;
      _this.enhancer = void 0;
      _this.name_ = void 0;
      _this.equals = void 0;
      _this.hasUnreportedChange_ = false;
      _this.interceptors_ = void 0;
      _this.changeListeners_ = void 0;
      _this.value_ = void 0;
      _this.dehancer = void 0;
      _this.enhancer = enhancer;
      _this.name_ = name_;
      _this.equals = equals;
      _this.value_ = enhancer(value, void 0, name_);
      if (notifySpy && isSpyEnabled()) {
        spyReport({
          type: CREATE,
          object: _assertThisInitialized(_this),
          observableKind: "value",
          debugObjectName: _this.name_,
          newValue: "" + _this.value_
        });
      }
      return _this;
    }
    var _proto = ObservableValue2.prototype;
    _proto.dehanceValue = function dehanceValue(value) {
      if (this.dehancer !== void 0) {
        return this.dehancer(value);
      }
      return value;
    };
    _proto.set = function set4(newValue) {
      var oldValue = this.value_;
      newValue = this.prepareNewValue_(newValue);
      if (newValue !== globalState.UNCHANGED) {
        var notifySpy = isSpyEnabled();
        if (notifySpy) {
          spyReportStart({
            type: UPDATE,
            object: this,
            observableKind: "value",
            debugObjectName: this.name_,
            newValue,
            oldValue
          });
        }
        this.setNewValue_(newValue);
        if (notifySpy) {
          spyReportEnd();
        }
      }
    };
    _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
      checkIfStateModificationsAreAllowed(this);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this,
          type: UPDATE,
          newValue
        });
        if (!change) {
          return globalState.UNCHANGED;
        }
        newValue = change.newValue;
      }
      newValue = this.enhancer(newValue, this.value_, this.name_);
      return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
    };
    _proto.setNewValue_ = function setNewValue_(newValue) {
      var oldValue = this.value_;
      this.value_ = newValue;
      this.reportChanged();
      if (hasListeners(this)) {
        notifyListeners(this, {
          type: UPDATE,
          object: this,
          newValue,
          oldValue
        });
      }
    };
    _proto.get = function get3() {
      this.reportObserved();
      return this.dehanceValue(this.value_);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately) {
        listener({
          observableKind: "value",
          debugObjectName: this.name_,
          object: this,
          type: UPDATE,
          newValue: this.value_,
          oldValue: void 0
        });
      }
      return registerListener(this, listener);
    };
    _proto.raw = function raw() {
      return this.value_;
    };
    _proto.toJSON = function toJSON2() {
      return this.get();
    };
    _proto.toString = function toString2() {
      return this.name_ + "[" + this.value_ + "]";
    };
    _proto.valueOf = function valueOf() {
      return toPrimitive(this.get());
    };
    _proto[_Symbol$toPrimitive] = function() {
      return this.valueOf();
    };
    return ObservableValue2;
  }(Atom);
  var _Symbol$toPrimitive$1;
  _Symbol$toPrimitive$1 = Symbol.toPrimitive;
  var ComputedValue = /* @__PURE__ */ function() {
    function ComputedValue2(options) {
      this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      this.observing_ = [];
      this.newObserving_ = null;
      this.isBeingObserved_ = false;
      this.isPendingUnobservation_ = false;
      this.observers_ = /* @__PURE__ */ new Set();
      this.diffValue_ = 0;
      this.runId_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
      this.unboundDepsCount_ = 0;
      this.value_ = new CaughtException(null);
      this.name_ = void 0;
      this.triggeredBy_ = void 0;
      this.isComputing_ = false;
      this.isRunningSetter_ = false;
      this.derivation = void 0;
      this.setter_ = void 0;
      this.isTracing_ = TraceMode.NONE;
      this.scope_ = void 0;
      this.equals_ = void 0;
      this.requiresReaction_ = void 0;
      this.keepAlive_ = void 0;
      this.onBOL = void 0;
      this.onBUOL = void 0;
      if (!options.get) {
        die(31);
      }
      this.derivation = options.get;
      this.name_ = options.name || (true ? "ComputedValue@" + getNextId() : "ComputedValue");
      if (options.set) {
        this.setter_ = createAction(true ? this.name_ + "-setter" : "ComputedValue-setter", options.set);
      }
      this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
      this.scope_ = options.context;
      this.requiresReaction_ = options.requiresReaction;
      this.keepAlive_ = !!options.keepAlive;
    }
    var _proto = ComputedValue2.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
      propagateMaybeChanged(this);
    };
    _proto.onBO = function onBO() {
      if (this.onBOL) {
        this.onBOL.forEach(function(listener) {
          return listener();
        });
      }
    };
    _proto.onBUO = function onBUO() {
      if (this.onBUOL) {
        this.onBUOL.forEach(function(listener) {
          return listener();
        });
      }
    };
    _proto.get = function get3() {
      if (this.isComputing_) {
        die(32, this.name_, this.derivation);
      }
      if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
      this.observers_.size === 0 && !this.keepAlive_) {
        if (shouldCompute(this)) {
          this.warnAboutUntrackedRead_();
          startBatch();
          this.value_ = this.computeValue_(false);
          endBatch();
        }
      } else {
        reportObserved(this);
        if (shouldCompute(this)) {
          var prevTrackingContext = globalState.trackingContext;
          if (this.keepAlive_ && !prevTrackingContext) {
            globalState.trackingContext = this;
          }
          if (this.trackAndCompute()) {
            propagateChangeConfirmed(this);
          }
          globalState.trackingContext = prevTrackingContext;
        }
      }
      var result = this.value_;
      if (isCaughtException(result)) {
        throw result.cause;
      }
      return result;
    };
    _proto.set = function set4(value) {
      if (this.setter_) {
        if (this.isRunningSetter_) {
          die(33, this.name_);
        }
        this.isRunningSetter_ = true;
        try {
          this.setter_.call(this.scope_, value);
        } finally {
          this.isRunningSetter_ = false;
        }
      } else {
        die(34, this.name_);
      }
    };
    _proto.trackAndCompute = function trackAndCompute() {
      var oldValue = this.value_;
      var wasSuspended = (
        /* see #1208 */
        this.dependenciesState_ === IDerivationState_.NOT_TRACKING_
      );
      var newValue = this.computeValue_(true);
      var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
      if (changed) {
        this.value_ = newValue;
        if (isSpyEnabled()) {
          spyReport({
            observableKind: "computed",
            debugObjectName: this.name_,
            object: this.scope_,
            type: "update",
            oldValue,
            newValue
          });
        }
      }
      return changed;
    };
    _proto.computeValue_ = function computeValue_(track) {
      this.isComputing_ = true;
      var prev = allowStateChangesStart(false);
      var res;
      if (track) {
        res = trackDerivedFunction(this, this.derivation, this.scope_);
      } else {
        if (globalState.disableErrorBoundaries === true) {
          res = this.derivation.call(this.scope_);
        } else {
          try {
            res = this.derivation.call(this.scope_);
          } catch (e12) {
            res = new CaughtException(e12);
          }
        }
      }
      allowStateChangesEnd(prev);
      this.isComputing_ = false;
      return res;
    };
    _proto.suspend_ = function suspend_() {
      if (!this.keepAlive_) {
        clearObserving(this);
        this.value_ = void 0;
        if (this.isTracing_ !== TraceMode.NONE) {
          console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access.");
        }
      }
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      var _this = this;
      var firstTime = true;
      var prevValue = void 0;
      return autorun(function() {
        var newValue = _this.get();
        if (!firstTime || fireImmediately) {
          var prevU = untrackedStart();
          listener({
            observableKind: "computed",
            debugObjectName: _this.name_,
            type: UPDATE,
            object: _this,
            newValue,
            oldValue: prevValue
          });
          untrackedEnd(prevU);
        }
        firstTime = false;
        prevValue = newValue;
      });
    };
    _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
      if (false) {
        return;
      }
      if (this.isTracing_ !== TraceMode.NONE) {
        console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
      }
      if (typeof this.requiresReaction_ === "boolean" ? this.requiresReaction_ : globalState.computedRequiresReaction) {
        console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
      }
    };
    _proto.toString = function toString2() {
      return this.name_ + "[" + this.derivation.toString() + "]";
    };
    _proto.valueOf = function valueOf() {
      return toPrimitive(this.get());
    };
    _proto[_Symbol$toPrimitive$1] = function() {
      return this.valueOf();
    };
    return ComputedValue2;
  }();
  var isComputedValue = /* @__PURE__ */ createInstanceofPredicate("ComputedValue", ComputedValue);
  var IDerivationState_;
  (function(IDerivationState_2) {
    IDerivationState_2[IDerivationState_2["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
    IDerivationState_2[IDerivationState_2["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
    IDerivationState_2[IDerivationState_2["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
    IDerivationState_2[IDerivationState_2["STALE_"] = 2] = "STALE_";
  })(IDerivationState_ || (IDerivationState_ = {}));
  var TraceMode;
  (function(TraceMode2) {
    TraceMode2[TraceMode2["NONE"] = 0] = "NONE";
    TraceMode2[TraceMode2["LOG"] = 1] = "LOG";
    TraceMode2[TraceMode2["BREAK"] = 2] = "BREAK";
  })(TraceMode || (TraceMode = {}));
  var CaughtException = function CaughtException2(cause) {
    this.cause = void 0;
    this.cause = cause;
  };
  function isCaughtException(e12) {
    return e12 instanceof CaughtException;
  }
  function shouldCompute(derivation) {
    switch (derivation.dependenciesState_) {
      case IDerivationState_.UP_TO_DATE_:
        return false;
      case IDerivationState_.NOT_TRACKING_:
      case IDerivationState_.STALE_:
        return true;
      case IDerivationState_.POSSIBLY_STALE_: {
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart();
        var obs = derivation.observing_, l7 = obs.length;
        for (var i8 = 0; i8 < l7; i8++) {
          var obj = obs[i8];
          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e12) {
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            }
            if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }
        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
    }
  }
  function checkIfStateModificationsAreAllowed(atom) {
    if (false) {
      return;
    }
    var hasObservers = atom.observers_.size > 0;
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) {
      console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
    }
  }
  function checkIfStateReadsAreAllowed(observable2) {
    if (!globalState.allowStateReads && globalState.observableRequiresReaction) {
      console.warn("[mobx] Observable '" + observable2.name_ + "' being read outside a reactive context.");
    }
  }
  function trackDerivedFunction(derivation, f4, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    changeDependenciesStateTo0(derivation);
    derivation.newObserving_ = new Array(
      // Reserve constant space for initial dependencies, dynamic space otherwise.
      // See https://github.com/mobxjs/mobx/pull/3833
      derivation.runId_ === 0 ? 100 : derivation.observing_.length
    );
    derivation.unboundDepsCount_ = 0;
    derivation.runId_ = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    globalState.inBatch++;
    var result;
    if (globalState.disableErrorBoundaries === true) {
      result = f4.call(context);
    } else {
      try {
        result = f4.call(context);
      } catch (e12) {
        result = new CaughtException(e12);
      }
    }
    globalState.inBatch--;
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
  }
  function warnAboutDerivationWithoutDependencies(derivation) {
    if (false) {
      return;
    }
    if (derivation.observing_.length !== 0) {
      return;
    }
    if (typeof derivation.requiresObservable_ === "boolean" ? derivation.requiresObservable_ : globalState.reactionRequiresObservable) {
      console.warn("[mobx] Derivation '" + derivation.name_ + "' is created/updated without reading any observable value.");
    }
  }
  function bindDependencies(derivation) {
    var prevObserving = derivation.observing_;
    var observing = derivation.observing_ = derivation.newObserving_;
    var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;
    var i0 = 0, l7 = derivation.unboundDepsCount_;
    for (var i8 = 0; i8 < l7; i8++) {
      var dep = observing[i8];
      if (dep.diffValue_ === 0) {
        dep.diffValue_ = 1;
        if (i0 !== i8) {
          observing[i0] = dep;
        }
        i0++;
      }
      if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
        lowestNewObservingDerivationState = dep.dependenciesState_;
      }
    }
    observing.length = i0;
    derivation.newObserving_ = null;
    l7 = prevObserving.length;
    while (l7--) {
      var _dep = prevObserving[l7];
      if (_dep.diffValue_ === 0) {
        removeObserver(_dep, derivation);
      }
      _dep.diffValue_ = 0;
    }
    while (i0--) {
      var _dep2 = observing[i0];
      if (_dep2.diffValue_ === 1) {
        _dep2.diffValue_ = 0;
        addObserver(_dep2, derivation);
      }
    }
    if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
      derivation.dependenciesState_ = lowestNewObservingDerivationState;
      derivation.onBecomeStale_();
    }
  }
  function clearObserving(derivation) {
    var obs = derivation.observing_;
    derivation.observing_ = [];
    var i8 = obs.length;
    while (i8--) {
      removeObserver(obs[i8], derivation);
    }
    derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
  }
  function untracked(action2) {
    var prev = untrackedStart();
    try {
      return action2();
    } finally {
      untrackedEnd(prev);
    }
  }
  function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
  }
  function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
  }
  function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
  }
  function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
  }
  function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      return;
    }
    derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
    var obs = derivation.observing_;
    var i8 = obs.length;
    while (i8--) {
      obs[i8].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  }
  var MobXGlobals = function MobXGlobals2() {
    this.version = 6;
    this.UNCHANGED = {};
    this.trackingDerivation = null;
    this.trackingContext = null;
    this.runId = 0;
    this.mobxGuid = 0;
    this.inBatch = 0;
    this.pendingUnobservations = [];
    this.pendingReactions = [];
    this.isRunningReactions = false;
    this.allowStateChanges = false;
    this.allowStateReads = true;
    this.enforceActions = true;
    this.spyListeners = [];
    this.globalReactionErrorHandlers = [];
    this.computedRequiresReaction = false;
    this.reactionRequiresObservable = false;
    this.observableRequiresReaction = false;
    this.disableErrorBoundaries = false;
    this.suppressReactionErrors = false;
    this.useProxies = true;
    this.verifyProxies = false;
    this.safeDescriptors = true;
  };
  var canMergeGlobalState = true;
  var isolateCalled = false;
  var globalState = /* @__PURE__ */ function() {
    var global2 = /* @__PURE__ */ getGlobal();
    if (global2.__mobxInstanceCount > 0 && !global2.__mobxGlobals) {
      canMergeGlobalState = false;
    }
    if (global2.__mobxGlobals && global2.__mobxGlobals.version !== new MobXGlobals().version) {
      canMergeGlobalState = false;
    }
    if (!canMergeGlobalState) {
      setTimeout(function() {
        if (!isolateCalled) {
          die(35);
        }
      }, 1);
      return new MobXGlobals();
    } else if (global2.__mobxGlobals) {
      global2.__mobxInstanceCount += 1;
      if (!global2.__mobxGlobals.UNCHANGED) {
        global2.__mobxGlobals.UNCHANGED = {};
      }
      return global2.__mobxGlobals;
    } else {
      global2.__mobxInstanceCount = 1;
      return global2.__mobxGlobals = /* @__PURE__ */ new MobXGlobals();
    }
  }();
  function addObserver(observable2, node) {
    observable2.observers_.add(node);
    if (observable2.lowestObserverState_ > node.dependenciesState_) {
      observable2.lowestObserverState_ = node.dependenciesState_;
    }
  }
  function removeObserver(observable2, node) {
    observable2.observers_["delete"](node);
    if (observable2.observers_.size === 0) {
      queueForUnobservation(observable2);
    }
  }
  function queueForUnobservation(observable2) {
    if (observable2.isPendingUnobservation_ === false) {
      observable2.isPendingUnobservation_ = true;
      globalState.pendingUnobservations.push(observable2);
    }
  }
  function startBatch() {
    globalState.inBatch++;
  }
  function endBatch() {
    if (--globalState.inBatch === 0) {
      runReactions();
      var list = globalState.pendingUnobservations;
      for (var i8 = 0; i8 < list.length; i8++) {
        var observable2 = list[i8];
        observable2.isPendingUnobservation_ = false;
        if (observable2.observers_.size === 0) {
          if (observable2.isBeingObserved_) {
            observable2.isBeingObserved_ = false;
            observable2.onBUO();
          }
          if (observable2 instanceof ComputedValue) {
            observable2.suspend_();
          }
        }
      }
      globalState.pendingUnobservations = [];
    }
  }
  function reportObserved(observable2) {
    checkIfStateReadsAreAllowed(observable2);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
      if (derivation.runId_ !== observable2.lastAccessedBy_) {
        observable2.lastAccessedBy_ = derivation.runId_;
        derivation.newObserving_[derivation.unboundDepsCount_++] = observable2;
        if (!observable2.isBeingObserved_ && globalState.trackingContext) {
          observable2.isBeingObserved_ = true;
          observable2.onBO();
        }
      }
      return observable2.isBeingObserved_;
    } else if (observable2.observers_.size === 0 && globalState.inBatch > 0) {
      queueForUnobservation(observable2);
    }
    return false;
  }
  function propagateChanged(observable2) {
    if (observable2.lowestObserverState_ === IDerivationState_.STALE_) {
      return;
    }
    observable2.lowestObserverState_ = IDerivationState_.STALE_;
    observable2.observers_.forEach(function(d5) {
      if (d5.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        if (d5.isTracing_ !== TraceMode.NONE) {
          logTraceInfo(d5, observable2);
        }
        d5.onBecomeStale_();
      }
      d5.dependenciesState_ = IDerivationState_.STALE_;
    });
  }
  function propagateChangeConfirmed(observable2) {
    if (observable2.lowestObserverState_ === IDerivationState_.STALE_) {
      return;
    }
    observable2.lowestObserverState_ = IDerivationState_.STALE_;
    observable2.observers_.forEach(function(d5) {
      if (d5.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
        d5.dependenciesState_ = IDerivationState_.STALE_;
        if (d5.isTracing_ !== TraceMode.NONE) {
          logTraceInfo(d5, observable2);
        }
      } else if (d5.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        observable2.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
      }
    });
  }
  function propagateMaybeChanged(observable2) {
    if (observable2.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) {
      return;
    }
    observable2.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
    observable2.observers_.forEach(function(d5) {
      if (d5.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        d5.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
        d5.onBecomeStale_();
      }
    });
  }
  function logTraceInfo(derivation, observable2) {
    console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable2.name_ + "'");
    if (derivation.isTracing_ === TraceMode.BREAK) {
      var lines = [];
      printDepTree(getDependencyTree(derivation), lines, 1);
      new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable2.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
  }
  function printDepTree(tree, lines, depth) {
    if (lines.length >= 1e3) {
      lines.push("(and many more)");
      return;
    }
    lines.push("" + "	".repeat(depth - 1) + tree.name);
    if (tree.dependencies) {
      tree.dependencies.forEach(function(child) {
        return printDepTree(child, lines, depth + 1);
      });
    }
  }
  var Reaction = /* @__PURE__ */ function() {
    function Reaction2(name_, onInvalidate_, errorHandler_, requiresObservable_) {
      if (name_ === void 0) {
        name_ = true ? "Reaction@" + getNextId() : "Reaction";
      }
      this.name_ = void 0;
      this.onInvalidate_ = void 0;
      this.errorHandler_ = void 0;
      this.requiresObservable_ = void 0;
      this.observing_ = [];
      this.newObserving_ = [];
      this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      this.diffValue_ = 0;
      this.runId_ = 0;
      this.unboundDepsCount_ = 0;
      this.isDisposed_ = false;
      this.isScheduled_ = false;
      this.isTrackPending_ = false;
      this.isRunning_ = false;
      this.isTracing_ = TraceMode.NONE;
      this.name_ = name_;
      this.onInvalidate_ = onInvalidate_;
      this.errorHandler_ = errorHandler_;
      this.requiresObservable_ = requiresObservable_;
    }
    var _proto = Reaction2.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
      this.schedule_();
    };
    _proto.schedule_ = function schedule_() {
      if (!this.isScheduled_) {
        this.isScheduled_ = true;
        globalState.pendingReactions.push(this);
        runReactions();
      }
    };
    _proto.isScheduled = function isScheduled() {
      return this.isScheduled_;
    };
    _proto.runReaction_ = function runReaction_() {
      if (!this.isDisposed_) {
        startBatch();
        this.isScheduled_ = false;
        var prev = globalState.trackingContext;
        globalState.trackingContext = this;
        if (shouldCompute(this)) {
          this.isTrackPending_ = true;
          try {
            this.onInvalidate_();
            if (this.isTrackPending_ && isSpyEnabled()) {
              spyReport({
                name: this.name_,
                type: "scheduled-reaction"
              });
            }
          } catch (e12) {
            this.reportExceptionInDerivation_(e12);
          }
        }
        globalState.trackingContext = prev;
        endBatch();
      }
    };
    _proto.track = function track(fn) {
      if (this.isDisposed_) {
        return;
      }
      startBatch();
      var notify = isSpyEnabled();
      var startTime;
      if (notify) {
        startTime = Date.now();
        spyReportStart({
          name: this.name_,
          type: "reaction"
        });
      }
      this.isRunning_ = true;
      var prevReaction = globalState.trackingContext;
      globalState.trackingContext = this;
      var result = trackDerivedFunction(this, fn, void 0);
      globalState.trackingContext = prevReaction;
      this.isRunning_ = false;
      this.isTrackPending_ = false;
      if (this.isDisposed_) {
        clearObserving(this);
      }
      if (isCaughtException(result)) {
        this.reportExceptionInDerivation_(result.cause);
      }
      if (notify) {
        spyReportEnd({
          time: Date.now() - startTime
        });
      }
      endBatch();
    };
    _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
      var _this = this;
      if (this.errorHandler_) {
        this.errorHandler_(error, this);
        return;
      }
      if (globalState.disableErrorBoundaries) {
        throw error;
      }
      var message = true ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
      if (!globalState.suppressReactionErrors) {
        console.error(message, error);
      } else if (true) {
        console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)");
      }
      if (isSpyEnabled()) {
        spyReport({
          type: "error",
          name: this.name_,
          message,
          error: "" + error
        });
      }
      globalState.globalReactionErrorHandlers.forEach(function(f4) {
        return f4(error, _this);
      });
    };
    _proto.dispose = function dispose() {
      if (!this.isDisposed_) {
        this.isDisposed_ = true;
        if (!this.isRunning_) {
          startBatch();
          clearObserving(this);
          endBatch();
        }
      }
    };
    _proto.getDisposer_ = function getDisposer_(abortSignal) {
      var _this2 = this;
      var dispose = function dispose2() {
        _this2.dispose();
        abortSignal == null ? void 0 : abortSignal.removeEventListener == null ? void 0 : abortSignal.removeEventListener("abort", dispose2);
      };
      abortSignal == null ? void 0 : abortSignal.addEventListener == null ? void 0 : abortSignal.addEventListener("abort", dispose);
      dispose[$mobx] = this;
      return dispose;
    };
    _proto.toString = function toString2() {
      return "Reaction[" + this.name_ + "]";
    };
    _proto.trace = function trace$1(enterBreakPoint) {
      if (enterBreakPoint === void 0) {
        enterBreakPoint = false;
      }
      trace(this, enterBreakPoint);
    };
    return Reaction2;
  }();
  var MAX_REACTION_ITERATIONS = 100;
  var reactionScheduler = function reactionScheduler2(f4) {
    return f4();
  };
  function runReactions() {
    if (globalState.inBatch > 0 || globalState.isRunningReactions) {
      return;
    }
    reactionScheduler(runReactionsHelper);
  }
  function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    while (allReactions.length > 0) {
      if (++iterations === MAX_REACTION_ITERATIONS) {
        console.error(true ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : "[mobx] cycle in reaction: " + allReactions[0]);
        allReactions.splice(0);
      }
      var remainingReactions = allReactions.splice(0);
      for (var i8 = 0, l7 = remainingReactions.length; i8 < l7; i8++) {
        remainingReactions[i8].runReaction_();
      }
    }
    globalState.isRunningReactions = false;
  }
  var isReaction = /* @__PURE__ */ createInstanceofPredicate("Reaction", Reaction);
  function isSpyEnabled() {
    return !!globalState.spyListeners.length;
  }
  function spyReport(event) {
    if (false) {
      return;
    }
    if (!globalState.spyListeners.length) {
      return;
    }
    var listeners = globalState.spyListeners;
    for (var i8 = 0, l7 = listeners.length; i8 < l7; i8++) {
      listeners[i8](event);
    }
  }
  function spyReportStart(event) {
    if (false) {
      return;
    }
    var change = _extends({}, event, {
      spyReportStart: true
    });
    spyReport(change);
  }
  var END_EVENT = {
    type: "report-end",
    spyReportEnd: true
  };
  function spyReportEnd(change) {
    if (false) {
      return;
    }
    if (change) {
      spyReport(_extends({}, change, {
        type: "report-end",
        spyReportEnd: true
      }));
    } else {
      spyReport(END_EVENT);
    }
  }
  function spy(listener) {
    if (false) {
      console.warn("[mobx.spy] Is a no-op in production builds");
      return function() {
      };
    } else {
      globalState.spyListeners.push(listener);
      return once(function() {
        globalState.spyListeners = globalState.spyListeners.filter(function(l7) {
          return l7 !== listener;
        });
      });
    }
  }
  var ACTION = "action";
  var ACTION_BOUND = "action.bound";
  var AUTOACTION = "autoAction";
  var AUTOACTION_BOUND = "autoAction.bound";
  var DEFAULT_ACTION_NAME = "<unnamed action>";
  var actionAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION);
  var actionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION_BOUND, {
    bound: true
  });
  var autoActionAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION, {
    autoAction: true
  });
  var autoActionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION_BOUND, {
    autoAction: true,
    bound: true
  });
  function createActionFactory(autoAction2) {
    var res = function action2(arg1, arg2) {
      if (isFunction(arg1)) {
        return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction2);
      }
      if (isFunction(arg2)) {
        return createAction(arg1, arg2, autoAction2);
      }
      if (is20223Decorator(arg2)) {
        return (autoAction2 ? autoActionAnnotation : actionAnnotation).decorate_20223_(arg1, arg2);
      }
      if (isStringish(arg2)) {
        return storeAnnotation(arg1, arg2, autoAction2 ? autoActionAnnotation : actionAnnotation);
      }
      if (isStringish(arg1)) {
        return createDecoratorAnnotation(createActionAnnotation(autoAction2 ? AUTOACTION : ACTION, {
          name: arg1,
          autoAction: autoAction2
        }));
      }
      if (true) {
        die("Invalid arguments for `action`");
      }
    };
    return res;
  }
  var action = /* @__PURE__ */ createActionFactory(false);
  Object.assign(action, actionAnnotation);
  var autoAction = /* @__PURE__ */ createActionFactory(true);
  Object.assign(autoAction, autoActionAnnotation);
  action.bound = /* @__PURE__ */ createDecoratorAnnotation(actionBoundAnnotation);
  autoAction.bound = /* @__PURE__ */ createDecoratorAnnotation(autoActionBoundAnnotation);
  function isAction(thing) {
    return isFunction(thing) && thing.isMobxAction === true;
  }
  function autorun(view, opts) {
    var _opts$name, _opts, _opts2, _opts2$signal, _opts3;
    if (opts === void 0) {
      opts = EMPTY_OBJECT;
    }
    if (true) {
      if (!isFunction(view)) {
        die("Autorun expects a function as first argument");
      }
      if (isAction(view)) {
        die("Autorun does not accept actions since actions are untrackable");
      }
    }
    var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : true ? view.name || "Autorun@" + getNextId() : "Autorun";
    var runSync = !opts.scheduler && !opts.delay;
    var reaction2;
    if (runSync) {
      reaction2 = new Reaction(name, function() {
        this.track(reactionRunner);
      }, opts.onError, opts.requiresObservable);
    } else {
      var scheduler = createSchedulerFromOptions(opts);
      var isScheduled = false;
      reaction2 = new Reaction(name, function() {
        if (!isScheduled) {
          isScheduled = true;
          scheduler(function() {
            isScheduled = false;
            if (!reaction2.isDisposed_) {
              reaction2.track(reactionRunner);
            }
          });
        }
      }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
      view(reaction2);
    }
    if (!((_opts2 = opts) != null && (_opts2$signal = _opts2.signal) != null && _opts2$signal.aborted)) {
      reaction2.schedule_();
    }
    return reaction2.getDisposer_((_opts3 = opts) == null ? void 0 : _opts3.signal);
  }
  var run = function run2(f4) {
    return f4();
  };
  function createSchedulerFromOptions(opts) {
    return opts.scheduler ? opts.scheduler : opts.delay ? function(f4) {
      return setTimeout(f4, opts.delay);
    } : run;
  }
  var ON_BECOME_OBSERVED = "onBO";
  var ON_BECOME_UNOBSERVED = "onBUO";
  function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
  }
  function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
  }
  function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = isFunction(arg3) ? arg3 : arg2;
    var listenersKey = hook + "L";
    if (atom[listenersKey]) {
      atom[listenersKey].add(cb);
    } else {
      atom[listenersKey] = /* @__PURE__ */ new Set([cb]);
    }
    return function() {
      var hookListeners = atom[listenersKey];
      if (hookListeners) {
        hookListeners["delete"](cb);
        if (hookListeners.size === 0) {
          delete atom[listenersKey];
        }
      }
    };
  }
  function extendObservable(target, properties, annotations, options) {
    if (true) {
      if (arguments.length > 4) {
        die("'extendObservable' expected 2-4 arguments");
      }
      if (typeof target !== "object") {
        die("'extendObservable' expects an object as first argument");
      }
      if (isObservableMap(target)) {
        die("'extendObservable' should not be used on maps, use map.merge instead");
      }
      if (!isPlainObject(properties)) {
        die("'extendObservable' only accepts plain objects as second argument");
      }
      if (isObservable(properties) || isObservable(annotations)) {
        die("Extending an object with another observable (object) is not supported");
      }
    }
    var descriptors = getOwnPropertyDescriptors(properties);
    initObservable(function() {
      var adm = asObservableObject(target, options)[$mobx];
      ownKeys(descriptors).forEach(function(key) {
        adm.extend_(
          key,
          descriptors[key],
          // must pass "undefined" for { key: undefined }
          !annotations ? true : key in annotations ? annotations[key] : true
        );
      });
    });
    return target;
  }
  function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
  }
  function nodeToDependencyTree(node) {
    var result = {
      name: node.name_
    };
    if (node.observing_ && node.observing_.length > 0) {
      result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
    }
    return result;
  }
  function unique(list) {
    return Array.from(new Set(list));
  }
  var generatorId = 0;
  function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
  }
  FlowCancellationError.prototype = /* @__PURE__ */ Object.create(Error.prototype);
  var flowAnnotation = /* @__PURE__ */ createFlowAnnotation("flow");
  var flowBoundAnnotation = /* @__PURE__ */ createFlowAnnotation("flow.bound", {
    bound: true
  });
  var flow = /* @__PURE__ */ Object.assign(function flow2(arg1, arg2) {
    if (is20223Decorator(arg2)) {
      return flowAnnotation.decorate_20223_(arg1, arg2);
    }
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, flowAnnotation);
    }
    if (arguments.length !== 1) {
      die("Flow expects single argument with generator function");
    }
    var generator = arg1;
    var name = generator.name || "<unnamed flow>";
    var res = function res2() {
      var ctx = this;
      var args = arguments;
      var runId = ++generatorId;
      var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
      var rejector;
      var pendingPromise = void 0;
      var promise = new Promise(function(resolve, reject) {
        var stepId = 0;
        rejector = reject;
        function onFulfilled(res3) {
          pendingPromise = void 0;
          var ret;
          try {
            ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res3);
          } catch (e12) {
            return reject(e12);
          }
          next(ret);
        }
        function onRejected(err) {
          pendingPromise = void 0;
          var ret;
          try {
            ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
          } catch (e12) {
            return reject(e12);
          }
          next(ret);
        }
        function next(ret) {
          if (isFunction(ret == null ? void 0 : ret.then)) {
            ret.then(next, reject);
            return;
          }
          if (ret.done) {
            return resolve(ret.value);
          }
          pendingPromise = Promise.resolve(ret.value);
          return pendingPromise.then(onFulfilled, onRejected);
        }
        onFulfilled(void 0);
      });
      promise.cancel = action(name + " - runid: " + runId + " - cancel", function() {
        try {
          if (pendingPromise) {
            cancelPromise(pendingPromise);
          }
          var _res = gen["return"](void 0);
          var yieldedPromise = Promise.resolve(_res.value);
          yieldedPromise.then(noop, noop);
          cancelPromise(yieldedPromise);
          rejector(new FlowCancellationError());
        } catch (e12) {
          rejector(e12);
        }
      });
      return promise;
    };
    res.isMobXFlow = true;
    return res;
  }, flowAnnotation);
  flow.bound = /* @__PURE__ */ createDecoratorAnnotation(flowBoundAnnotation);
  function cancelPromise(promise) {
    if (isFunction(promise.cancel)) {
      promise.cancel();
    }
  }
  function isFlow(fn) {
    return (fn == null ? void 0 : fn.isMobXFlow) === true;
  }
  function _isObservable(value, property) {
    if (!value) {
      return false;
    }
    if (property !== void 0) {
      if (isObservableMap(value) || isObservableArray(value)) {
        return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
      }
      if (isObservableObject(value)) {
        return value[$mobx].values_.has(property);
      }
      return false;
    }
    return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
  }
  function isObservable(value) {
    if (arguments.length !== 1) {
      die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    }
    return _isObservable(value);
  }
  function trace() {
    if (false) {
      return;
    }
    var enterBreakPoint = false;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (typeof args[args.length - 1] === "boolean") {
      enterBreakPoint = args.pop();
    }
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
      return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing_ === TraceMode.NONE) {
      console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
    }
    derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
  }
  function getAtomFromArgs(args) {
    switch (args.length) {
      case 0:
        return globalState.trackingDerivation;
      case 1:
        return getAtom(args[0]);
      case 2:
        return getAtom(args[0], args[1]);
    }
  }
  function transaction(action2, thisArg) {
    if (thisArg === void 0) {
      thisArg = void 0;
    }
    startBatch();
    try {
      return action2.apply(thisArg);
    } finally {
      endBatch();
    }
  }
  function getAdm(target) {
    return target[$mobx];
  }
  var objectProxyTraps = {
    has: function has(target, name) {
      if (globalState.trackingDerivation) {
        warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
      }
      return getAdm(target).has_(name);
    },
    get: function get(target, name) {
      return getAdm(target).get_(name);
    },
    set: function set2(target, name, value) {
      var _getAdm$set_;
      if (!isStringish(name)) {
        return false;
      }
      if (!getAdm(target).values_.has(name)) {
        warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
      }
      return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
    },
    deleteProperty: function deleteProperty(target, name) {
      var _getAdm$delete_;
      if (true) {
        warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
      }
      if (!isStringish(name)) {
        return false;
      }
      return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
    },
    defineProperty: function defineProperty2(target, name, descriptor) {
      var _getAdm$definePropert;
      if (true) {
        warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
      }
      return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
    },
    ownKeys: function ownKeys2(target) {
      if (globalState.trackingDerivation) {
        warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
      }
      return getAdm(target).ownKeys_();
    },
    preventExtensions: function preventExtensions(target) {
      die(13);
    }
  };
  function asDynamicObservableObject(target, options) {
    var _target$$mobx, _target$$mobx$proxy_;
    assertProxies();
    target = asObservableObject(target, options);
    return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
  }
  function hasInterceptors(interceptable) {
    return interceptable.interceptors_ !== void 0 && interceptable.interceptors_.length > 0;
  }
  function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
    interceptors.push(handler);
    return once(function() {
      var idx = interceptors.indexOf(handler);
      if (idx !== -1) {
        interceptors.splice(idx, 1);
      }
    });
  }
  function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
      var interceptors = [].concat(interceptable.interceptors_ || []);
      for (var i8 = 0, l7 = interceptors.length; i8 < l7; i8++) {
        change = interceptors[i8](change);
        if (change && !change.type) {
          die(14);
        }
        if (!change) {
          break;
        }
      }
      return change;
    } finally {
      untrackedEnd(prevU);
    }
  }
  function hasListeners(listenable) {
    return listenable.changeListeners_ !== void 0 && listenable.changeListeners_.length > 0;
  }
  function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
    listeners.push(handler);
    return once(function() {
      var idx = listeners.indexOf(handler);
      if (idx !== -1) {
        listeners.splice(idx, 1);
      }
    });
  }
  function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners_;
    if (!listeners) {
      return;
    }
    listeners = listeners.slice();
    for (var i8 = 0, l7 = listeners.length; i8 < l7; i8++) {
      listeners[i8](change);
    }
    untrackedEnd(prevU);
  }
  function makeObservable(target, annotations, options) {
    initObservable(function() {
      var _annotations;
      var adm = asObservableObject(target, options)[$mobx];
      if (annotations && target[storedAnnotationsSymbol]) {
        die("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported.");
      }
      (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target);
      ownKeys(annotations).forEach(function(key) {
        return adm.make_(key, annotations[key]);
      });
    });
    return target;
  }
  var SPLICE = "splice";
  var UPDATE = "update";
  var MAX_SPLICE_SIZE = 1e4;
  var arrayTraps = {
    get: function get2(target, name) {
      var adm = target[$mobx];
      if (name === $mobx) {
        return adm;
      }
      if (name === "length") {
        return adm.getArrayLength_();
      }
      if (typeof name === "string" && !isNaN(name)) {
        return adm.get_(parseInt(name));
      }
      if (hasProp(arrayExtensions, name)) {
        return arrayExtensions[name];
      }
      return target[name];
    },
    set: function set3(target, name, value) {
      var adm = target[$mobx];
      if (name === "length") {
        adm.setArrayLength_(value);
      }
      if (typeof name === "symbol" || isNaN(name)) {
        target[name] = value;
      } else {
        adm.set_(parseInt(name), value);
      }
      return true;
    },
    preventExtensions: function preventExtensions2() {
      die(15);
    }
  };
  var ObservableArrayAdministration = /* @__PURE__ */ function() {
    function ObservableArrayAdministration2(name, enhancer, owned_, legacyMode_) {
      if (name === void 0) {
        name = true ? "ObservableArray@" + getNextId() : "ObservableArray";
      }
      this.owned_ = void 0;
      this.legacyMode_ = void 0;
      this.atom_ = void 0;
      this.values_ = [];
      this.interceptors_ = void 0;
      this.changeListeners_ = void 0;
      this.enhancer_ = void 0;
      this.dehancer = void 0;
      this.proxy_ = void 0;
      this.lastKnownLength_ = 0;
      this.owned_ = owned_;
      this.legacyMode_ = legacyMode_;
      this.atom_ = new Atom(name);
      this.enhancer_ = function(newV, oldV) {
        return enhancer(newV, oldV, true ? name + "[..]" : "ObservableArray[..]");
      };
    }
    var _proto = ObservableArrayAdministration2.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== void 0) {
        return this.dehancer(value);
      }
      return value;
    };
    _proto.dehanceValues_ = function dehanceValues_(values) {
      if (this.dehancer !== void 0 && values.length > 0) {
        return values.map(this.dehancer);
      }
      return values;
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately === void 0) {
        fireImmediately = false;
      }
      if (fireImmediately) {
        listener({
          observableKind: "array",
          object: this.proxy_,
          debugObjectName: this.atom_.name_,
          type: "splice",
          index: 0,
          added: this.values_.slice(),
          addedCount: this.values_.length,
          removed: [],
          removedCount: 0
        });
      }
      return registerListener(this, listener);
    };
    _proto.getArrayLength_ = function getArrayLength_() {
      this.atom_.reportObserved();
      return this.values_.length;
    };
    _proto.setArrayLength_ = function setArrayLength_(newLength) {
      if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) {
        die("Out of range: " + newLength);
      }
      var currentLength = this.values_.length;
      if (newLength === currentLength) {
        return;
      } else if (newLength > currentLength) {
        var newItems = new Array(newLength - currentLength);
        for (var i8 = 0; i8 < newLength - currentLength; i8++) {
          newItems[i8] = void 0;
        }
        this.spliceWithArray_(currentLength, 0, newItems);
      } else {
        this.spliceWithArray_(newLength, currentLength - newLength);
      }
    };
    _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
      if (oldLength !== this.lastKnownLength_) {
        die(16);
      }
      this.lastKnownLength_ += delta;
      if (this.legacyMode_ && delta > 0) {
        reserveArrayBuffer(oldLength + delta + 1);
      }
    };
    _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
      var _this = this;
      checkIfStateModificationsAreAllowed(this.atom_);
      var length = this.values_.length;
      if (index === void 0) {
        index = 0;
      } else if (index > length) {
        index = length;
      } else if (index < 0) {
        index = Math.max(0, length + index);
      }
      if (arguments.length === 1) {
        deleteCount = length - index;
      } else if (deleteCount === void 0 || deleteCount === null) {
        deleteCount = 0;
      } else {
        deleteCount = Math.max(0, Math.min(deleteCount, length - index));
      }
      if (newItems === void 0) {
        newItems = EMPTY_ARRAY;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_,
          type: SPLICE,
          index,
          removedCount: deleteCount,
          added: newItems
        });
        if (!change) {
          return EMPTY_ARRAY;
        }
        deleteCount = change.removedCount;
        newItems = change.added;
      }
      newItems = newItems.length === 0 ? newItems : newItems.map(function(v3) {
        return _this.enhancer_(v3, void 0);
      });
      if (this.legacyMode_ || true) {
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength_(length, lengthDelta);
      }
      var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
      if (deleteCount !== 0 || newItems.length !== 0) {
        this.notifyArraySplice_(index, newItems, res);
      }
      return this.dehanceValues_(res);
    };
    _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
      if (newItems.length < MAX_SPLICE_SIZE) {
        var _this$values_;
        return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
      } else {
        var res = this.values_.slice(index, index + deleteCount);
        var oldItems = this.values_.slice(index + deleteCount);
        this.values_.length += newItems.length - deleteCount;
        for (var i8 = 0; i8 < newItems.length; i8++) {
          this.values_[index + i8] = newItems[i8];
        }
        for (var _i = 0; _i < oldItems.length; _i++) {
          this.values_[index + newItems.length + _i] = oldItems[_i];
        }
        return res;
      }
    };
    _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
      var notifySpy = !this.owned_ && isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "array",
        object: this.proxy_,
        type: UPDATE,
        debugObjectName: this.atom_.name_,
        index,
        newValue,
        oldValue
      } : null;
      if (notifySpy) {
        spyReportStart(change);
      }
      this.atom_.reportChanged();
      if (notify) {
        notifyListeners(this, change);
      }
      if (notifySpy) {
        spyReportEnd();
      }
    };
    _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
      var notifySpy = !this.owned_ && isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: SPLICE,
        index,
        removed,
        added,
        removedCount: removed.length,
        addedCount: added.length
      } : null;
      if (notifySpy) {
        spyReportStart(change);
      }
      this.atom_.reportChanged();
      if (notify) {
        notifyListeners(this, change);
      }
      if (notifySpy) {
        spyReportEnd();
      }
    };
    _proto.get_ = function get_(index) {
      if (this.legacyMode_ && index >= this.values_.length) {
        console.warn(true ? "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : "[mobx] Out of bounds read: " + index);
        return void 0;
      }
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    };
    _proto.set_ = function set_(index, newValue) {
      var values = this.values_;
      if (this.legacyMode_ && index > values.length) {
        die(17, index, values.length);
      }
      if (index < values.length) {
        checkIfStateModificationsAreAllowed(this.atom_);
        var oldValue = values[index];
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            type: UPDATE,
            object: this.proxy_,
            index,
            newValue
          });
          if (!change) {
            return;
          }
          newValue = change.newValue;
        }
        newValue = this.enhancer_(newValue, oldValue);
        var changed = newValue !== oldValue;
        if (changed) {
          values[index] = newValue;
          this.notifyArrayChildUpdate_(index, newValue, oldValue);
        }
      } else {
        var newItems = new Array(index + 1 - values.length);
        for (var i8 = 0; i8 < newItems.length - 1; i8++) {
          newItems[i8] = void 0;
        }
        newItems[newItems.length - 1] = newValue;
        this.spliceWithArray_(values.length, 0, newItems);
      }
    };
    return ObservableArrayAdministration2;
  }();
  function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
      name = true ? "ObservableArray@" + getNextId() : "ObservableArray";
    }
    if (owned === void 0) {
      owned = false;
    }
    assertProxies();
    return initObservable(function() {
      var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
      addHiddenFinalProp(adm.values_, $mobx, adm);
      var proxy = new Proxy(adm.values_, arrayTraps);
      adm.proxy_ = proxy;
      if (initialValues && initialValues.length) {
        adm.spliceWithArray_(0, 0, initialValues);
      }
      return proxy;
    });
  }
  var arrayExtensions = {
    clear: function clear() {
      return this.splice(0);
    },
    replace: function replace(newItems) {
      var adm = this[$mobx];
      return adm.spliceWithArray_(0, adm.values_.length, newItems);
    },
    // Used by JSON.stringify
    toJSON: function toJSON() {
      return this.slice();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function splice(index, deleteCount) {
      for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        newItems[_key - 2] = arguments[_key];
      }
      var adm = this[$mobx];
      switch (arguments.length) {
        case 0:
          return [];
        case 1:
          return adm.spliceWithArray_(index);
        case 2:
          return adm.spliceWithArray_(index, deleteCount);
      }
      return adm.spliceWithArray_(index, deleteCount, newItems);
    },
    spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
      return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
    },
    push: function push() {
      var adm = this[$mobx];
      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }
      adm.spliceWithArray_(adm.values_.length, 0, items);
      return adm.values_.length;
    },
    pop: function pop() {
      return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
    },
    shift: function shift() {
      return this.splice(0, 1)[0];
    },
    unshift: function unshift() {
      var adm = this[$mobx];
      for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        items[_key3] = arguments[_key3];
      }
      adm.spliceWithArray_(0, 0, items);
      return adm.values_.length;
    },
    reverse: function reverse() {
      if (globalState.trackingDerivation) {
        die(37, "reverse");
      }
      this.replace(this.slice().reverse());
      return this;
    },
    sort: function sort() {
      if (globalState.trackingDerivation) {
        die(37, "sort");
      }
      var copy = this.slice();
      copy.sort.apply(copy, arguments);
      this.replace(copy);
      return this;
    },
    remove: function remove(value) {
      var adm = this[$mobx];
      var idx = adm.dehanceValues_(adm.values_).indexOf(value);
      if (idx > -1) {
        this.splice(idx, 1);
        return true;
      }
      return false;
    }
  };
  addArrayExtension("at", simpleFunc);
  addArrayExtension("concat", simpleFunc);
  addArrayExtension("flat", simpleFunc);
  addArrayExtension("includes", simpleFunc);
  addArrayExtension("indexOf", simpleFunc);
  addArrayExtension("join", simpleFunc);
  addArrayExtension("lastIndexOf", simpleFunc);
  addArrayExtension("slice", simpleFunc);
  addArrayExtension("toString", simpleFunc);
  addArrayExtension("toLocaleString", simpleFunc);
  addArrayExtension("toSorted", simpleFunc);
  addArrayExtension("toSpliced", simpleFunc);
  addArrayExtension("with", simpleFunc);
  addArrayExtension("every", mapLikeFunc);
  addArrayExtension("filter", mapLikeFunc);
  addArrayExtension("find", mapLikeFunc);
  addArrayExtension("findIndex", mapLikeFunc);
  addArrayExtension("findLast", mapLikeFunc);
  addArrayExtension("findLastIndex", mapLikeFunc);
  addArrayExtension("flatMap", mapLikeFunc);
  addArrayExtension("forEach", mapLikeFunc);
  addArrayExtension("map", mapLikeFunc);
  addArrayExtension("some", mapLikeFunc);
  addArrayExtension("toReversed", mapLikeFunc);
  addArrayExtension("reduce", reduceLikeFunc);
  addArrayExtension("reduceRight", reduceLikeFunc);
  function addArrayExtension(funcName, funcFactory) {
    if (typeof Array.prototype[funcName] === "function") {
      arrayExtensions[funcName] = funcFactory(funcName);
    }
  }
  function simpleFunc(funcName) {
    return function() {
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
  }
  function mapLikeFunc(funcName) {
    return function(callback, thisArg) {
      var _this2 = this;
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      return dehancedValues[funcName](function(element, index) {
        return callback.call(thisArg, element, index, _this2);
      });
    };
  }
  function reduceLikeFunc(funcName) {
    return function() {
      var _this3 = this;
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      var callback = arguments[0];
      arguments[0] = function(accumulator, currentValue, index) {
        return callback(accumulator, currentValue, index, _this3);
      };
      return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
  }
  var isObservableArrayAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
  function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
  }
  var _Symbol$iterator;
  var _Symbol$toStringTag;
  var ObservableMapMarker = {};
  var ADD = "add";
  var DELETE = "delete";
  _Symbol$iterator = Symbol.iterator;
  _Symbol$toStringTag = Symbol.toStringTag;
  var ObservableMap = /* @__PURE__ */ function() {
    function ObservableMap2(initialData, enhancer_, name_) {
      var _this = this;
      if (enhancer_ === void 0) {
        enhancer_ = deepEnhancer;
      }
      if (name_ === void 0) {
        name_ = true ? "ObservableMap@" + getNextId() : "ObservableMap";
      }
      this.enhancer_ = void 0;
      this.name_ = void 0;
      this[$mobx] = ObservableMapMarker;
      this.data_ = void 0;
      this.hasMap_ = void 0;
      this.keysAtom_ = void 0;
      this.interceptors_ = void 0;
      this.changeListeners_ = void 0;
      this.dehancer = void 0;
      this.enhancer_ = enhancer_;
      this.name_ = name_;
      if (!isFunction(Map)) {
        die(18);
      }
      initObservable(function() {
        _this.keysAtom_ = createAtom(true ? _this.name_ + ".keys()" : "ObservableMap.keys()");
        _this.data_ = /* @__PURE__ */ new Map();
        _this.hasMap_ = /* @__PURE__ */ new Map();
        if (initialData) {
          _this.merge(initialData);
        }
      });
    }
    var _proto = ObservableMap2.prototype;
    _proto.has_ = function has_(key) {
      return this.data_.has(key);
    };
    _proto.has = function has2(key) {
      var _this2 = this;
      if (!globalState.trackingDerivation) {
        return this.has_(key);
      }
      var entry = this.hasMap_.get(key);
      if (!entry) {
        var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, true ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableMap.key?", false);
        this.hasMap_.set(key, newEntry);
        onBecomeUnobserved(newEntry, function() {
          return _this2.hasMap_["delete"](key);
        });
      }
      return entry.get();
    };
    _proto.set = function set4(key, value) {
      var hasKey = this.has_(key);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: hasKey ? UPDATE : ADD,
          object: this,
          newValue: value,
          name: key
        });
        if (!change) {
          return this;
        }
        value = change.newValue;
      }
      if (hasKey) {
        this.updateValue_(key, value);
      } else {
        this.addValue_(key, value);
      }
      return this;
    };
    _proto["delete"] = function _delete(key) {
      var _this3 = this;
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: DELETE,
          object: this,
          name: key
        });
        if (!change) {
          return false;
        }
      }
      if (this.has_(key)) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var _change = notify || notifySpy ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: DELETE,
          object: this,
          oldValue: this.data_.get(key).value_,
          name: key
        } : null;
        if (notifySpy) {
          spyReportStart(_change);
        }
        transaction(function() {
          var _this3$hasMap_$get;
          _this3.keysAtom_.reportChanged();
          (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null ? void 0 : _this3$hasMap_$get.setNewValue_(false);
          var observable2 = _this3.data_.get(key);
          observable2.setNewValue_(void 0);
          _this3.data_["delete"](key);
        });
        if (notify) {
          notifyListeners(this, _change);
        }
        if (notifySpy) {
          spyReportEnd();
        }
        return true;
      }
      return false;
    };
    _proto.updateValue_ = function updateValue_(key, newValue) {
      var observable2 = this.data_.get(key);
      newValue = observable2.prepareNewValue_(newValue);
      if (newValue !== globalState.UNCHANGED) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: UPDATE,
          object: this,
          oldValue: observable2.value_,
          name: key,
          newValue
        } : null;
        if (notifySpy) {
          spyReportStart(change);
        }
        observable2.setNewValue_(newValue);
        if (notify) {
          notifyListeners(this, change);
        }
        if (notifySpy) {
          spyReportEnd();
        }
      }
    };
    _proto.addValue_ = function addValue_(key, newValue) {
      var _this4 = this;
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      transaction(function() {
        var _this4$hasMap_$get;
        var observable2 = new ObservableValue(newValue, _this4.enhancer_, true ? _this4.name_ + "." + stringifyKey(key) : "ObservableMap.key", false);
        _this4.data_.set(key, observable2);
        newValue = observable2.value_;
        (_this4$hasMap_$get = _this4.hasMap_.get(key)) == null ? void 0 : _this4$hasMap_$get.setNewValue_(true);
        _this4.keysAtom_.reportChanged();
      });
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        name: key,
        newValue
      } : null;
      if (notifySpy) {
        spyReportStart(change);
      }
      if (notify) {
        notifyListeners(this, change);
      }
      if (notifySpy) {
        spyReportEnd();
      }
    };
    _proto.get = function get3(key) {
      if (this.has(key)) {
        return this.dehanceValue_(this.data_.get(key).get());
      }
      return this.dehanceValue_(void 0);
    };
    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== void 0) {
        return this.dehancer(value);
      }
      return value;
    };
    _proto.keys = function keys() {
      this.keysAtom_.reportObserved();
      return this.data_.keys();
    };
    _proto.values = function values() {
      var self2 = this;
      var keys = this.keys();
      return makeIterable({
        next: function next() {
          var _keys$next = keys.next(), done = _keys$next.done, value = _keys$next.value;
          return {
            done,
            value: done ? void 0 : self2.get(value)
          };
        }
      });
    };
    _proto.entries = function entries() {
      var self2 = this;
      var keys = this.keys();
      return makeIterable({
        next: function next() {
          var _keys$next2 = keys.next(), done = _keys$next2.done, value = _keys$next2.value;
          return {
            done,
            value: done ? void 0 : [value, self2.get(value)]
          };
        }
      });
    };
    _proto[_Symbol$iterator] = function() {
      return this.entries();
    };
    _proto.forEach = function forEach(callback, thisArg) {
      for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done; ) {
        var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
        callback.call(thisArg, value, key, this);
      }
    };
    _proto.merge = function merge(other) {
      var _this5 = this;
      if (isObservableMap(other)) {
        other = new Map(other);
      }
      transaction(function() {
        if (isPlainObject(other)) {
          getPlainObjectKeys(other).forEach(function(key) {
            return _this5.set(key, other[key]);
          });
        } else if (Array.isArray(other)) {
          other.forEach(function(_ref) {
            var key = _ref[0], value = _ref[1];
            return _this5.set(key, value);
          });
        } else if (isES6Map(other)) {
          if (other.constructor !== Map) {
            die(19, other);
          }
          other.forEach(function(value, key) {
            return _this5.set(key, value);
          });
        } else if (other !== null && other !== void 0) {
          die(20, other);
        }
      });
      return this;
    };
    _proto.clear = function clear2() {
      var _this6 = this;
      transaction(function() {
        untracked(function() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(_this6.keys()), _step2; !(_step2 = _iterator2()).done; ) {
            var key = _step2.value;
            _this6["delete"](key);
          }
        });
      });
    };
    _proto.replace = function replace2(values) {
      var _this7 = this;
      transaction(function() {
        var replacementMap = convertToMap(values);
        var orderedData = /* @__PURE__ */ new Map();
        var keysReportChangedCalled = false;
        for (var _iterator3 = _createForOfIteratorHelperLoose(_this7.data_.keys()), _step3; !(_step3 = _iterator3()).done; ) {
          var key = _step3.value;
          if (!replacementMap.has(key)) {
            var deleted = _this7["delete"](key);
            if (deleted) {
              keysReportChangedCalled = true;
            } else {
              var value = _this7.data_.get(key);
              orderedData.set(key, value);
            }
          }
        }
        for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done; ) {
          var _step4$value = _step4.value, _key = _step4$value[0], _value = _step4$value[1];
          var keyExisted = _this7.data_.has(_key);
          _this7.set(_key, _value);
          if (_this7.data_.has(_key)) {
            var _value2 = _this7.data_.get(_key);
            orderedData.set(_key, _value2);
            if (!keyExisted) {
              keysReportChangedCalled = true;
            }
          }
        }
        if (!keysReportChangedCalled) {
          if (_this7.data_.size !== orderedData.size) {
            _this7.keysAtom_.reportChanged();
          } else {
            var iter1 = _this7.data_.keys();
            var iter2 = orderedData.keys();
            var next1 = iter1.next();
            var next2 = iter2.next();
            while (!next1.done) {
              if (next1.value !== next2.value) {
                _this7.keysAtom_.reportChanged();
                break;
              }
              next1 = iter1.next();
              next2 = iter2.next();
            }
          }
        }
        _this7.data_ = orderedData;
      });
      return this;
    };
    _proto.toString = function toString2() {
      return "[object ObservableMap]";
    };
    _proto.toJSON = function toJSON2() {
      return Array.from(this);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately === true) {
        die("`observe` doesn't support fireImmediately=true in combination with maps.");
      }
      return registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _createClass(ObservableMap2, [{
      key: "size",
      get: function get3() {
        this.keysAtom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: _Symbol$toStringTag,
      get: function get3() {
        return "Map";
      }
    }]);
    return ObservableMap2;
  }();
  var isObservableMap = /* @__PURE__ */ createInstanceofPredicate("ObservableMap", ObservableMap);
  function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
      return dataStructure;
    } else if (Array.isArray(dataStructure)) {
      return new Map(dataStructure);
    } else if (isPlainObject(dataStructure)) {
      var map2 = /* @__PURE__ */ new Map();
      for (var key in dataStructure) {
        map2.set(key, dataStructure[key]);
      }
      return map2;
    } else {
      return die(21, dataStructure);
    }
  }
  var _Symbol$iterator$1;
  var _Symbol$toStringTag$1;
  var ObservableSetMarker = {};
  _Symbol$iterator$1 = Symbol.iterator;
  _Symbol$toStringTag$1 = Symbol.toStringTag;
  var ObservableSet = /* @__PURE__ */ function() {
    function ObservableSet2(initialData, enhancer, name_) {
      var _this = this;
      if (enhancer === void 0) {
        enhancer = deepEnhancer;
      }
      if (name_ === void 0) {
        name_ = true ? "ObservableSet@" + getNextId() : "ObservableSet";
      }
      this.name_ = void 0;
      this[$mobx] = ObservableSetMarker;
      this.data_ = /* @__PURE__ */ new Set();
      this.atom_ = void 0;
      this.changeListeners_ = void 0;
      this.interceptors_ = void 0;
      this.dehancer = void 0;
      this.enhancer_ = void 0;
      this.name_ = name_;
      if (!isFunction(Set)) {
        die(22);
      }
      this.enhancer_ = function(newV, oldV) {
        return enhancer(newV, oldV, name_);
      };
      initObservable(function() {
        _this.atom_ = createAtom(_this.name_);
        if (initialData) {
          _this.replace(initialData);
        }
      });
    }
    var _proto = ObservableSet2.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== void 0) {
        return this.dehancer(value);
      }
      return value;
    };
    _proto.clear = function clear2() {
      var _this2 = this;
      transaction(function() {
        untracked(function() {
          for (var _iterator = _createForOfIteratorHelperLoose(_this2.data_.values()), _step; !(_step = _iterator()).done; ) {
            var value = _step.value;
            _this2["delete"](value);
          }
        });
      });
    };
    _proto.forEach = function forEach(callbackFn, thisArg) {
      for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done; ) {
        var value = _step2.value;
        callbackFn.call(thisArg, value, value, this);
      }
    };
    _proto.add = function add(value) {
      var _this3 = this;
      checkIfStateModificationsAreAllowed(this.atom_);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: ADD,
          object: this,
          newValue: value
        });
        if (!change) {
          return this;
        }
      }
      if (!this.has(value)) {
        transaction(function() {
          _this3.data_.add(_this3.enhancer_(value, void 0));
          _this3.atom_.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var _change = notify || notifySpy ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: ADD,
          object: this,
          newValue: value
        } : null;
        if (notifySpy && true) {
          spyReportStart(_change);
        }
        if (notify) {
          notifyListeners(this, _change);
        }
        if (notifySpy && true) {
          spyReportEnd();
        }
      }
      return this;
    };
    _proto["delete"] = function _delete(value) {
      var _this4 = this;
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: DELETE,
          object: this,
          oldValue: value
        });
        if (!change) {
          return false;
        }
      }
      if (this.has(value)) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var _change2 = notify || notifySpy ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: DELETE,
          object: this,
          oldValue: value
        } : null;
        if (notifySpy && true) {
          spyReportStart(_change2);
        }
        transaction(function() {
          _this4.atom_.reportChanged();
          _this4.data_["delete"](value);
        });
        if (notify) {
          notifyListeners(this, _change2);
        }
        if (notifySpy && true) {
          spyReportEnd();
        }
        return true;
      }
      return false;
    };
    _proto.has = function has2(value) {
      this.atom_.reportObserved();
      return this.data_.has(this.dehanceValue_(value));
    };
    _proto.entries = function entries() {
      var nextIndex = 0;
      var keys = Array.from(this.keys());
      var values = Array.from(this.values());
      return makeIterable({
        next: function next() {
          var index = nextIndex;
          nextIndex += 1;
          return index < values.length ? {
            value: [keys[index], values[index]],
            done: false
          } : {
            done: true
          };
        }
      });
    };
    _proto.keys = function keys() {
      return this.values();
    };
    _proto.values = function values() {
      this.atom_.reportObserved();
      var self2 = this;
      var nextIndex = 0;
      var observableValues = Array.from(this.data_.values());
      return makeIterable({
        next: function next() {
          return nextIndex < observableValues.length ? {
            value: self2.dehanceValue_(observableValues[nextIndex++]),
            done: false
          } : {
            done: true
          };
        }
      });
    };
    _proto.replace = function replace2(other) {
      var _this5 = this;
      if (isObservableSet(other)) {
        other = new Set(other);
      }
      transaction(function() {
        if (Array.isArray(other)) {
          _this5.clear();
          other.forEach(function(value) {
            return _this5.add(value);
          });
        } else if (isES6Set(other)) {
          _this5.clear();
          other.forEach(function(value) {
            return _this5.add(value);
          });
        } else if (other !== null && other !== void 0) {
          die("Cannot initialize set from " + other);
        }
      });
      return this;
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately === true) {
        die("`observe` doesn't support fireImmediately=true in combination with sets.");
      }
      return registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.toJSON = function toJSON2() {
      return Array.from(this);
    };
    _proto.toString = function toString2() {
      return "[object ObservableSet]";
    };
    _proto[_Symbol$iterator$1] = function() {
      return this.values();
    };
    _createClass(ObservableSet2, [{
      key: "size",
      get: function get3() {
        this.atom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: _Symbol$toStringTag$1,
      get: function get3() {
        return "Set";
      }
    }]);
    return ObservableSet2;
  }();
  var isObservableSet = /* @__PURE__ */ createInstanceofPredicate("ObservableSet", ObservableSet);
  var descriptorCache = /* @__PURE__ */ Object.create(null);
  var REMOVE = "remove";
  var ObservableObjectAdministration = /* @__PURE__ */ function() {
    function ObservableObjectAdministration2(target_, values_, name_, defaultAnnotation_) {
      if (values_ === void 0) {
        values_ = /* @__PURE__ */ new Map();
      }
      if (defaultAnnotation_ === void 0) {
        defaultAnnotation_ = autoAnnotation;
      }
      this.target_ = void 0;
      this.values_ = void 0;
      this.name_ = void 0;
      this.defaultAnnotation_ = void 0;
      this.keysAtom_ = void 0;
      this.changeListeners_ = void 0;
      this.interceptors_ = void 0;
      this.proxy_ = void 0;
      this.isPlainObject_ = void 0;
      this.appliedAnnotations_ = void 0;
      this.pendingKeys_ = void 0;
      this.target_ = target_;
      this.values_ = values_;
      this.name_ = name_;
      this.defaultAnnotation_ = defaultAnnotation_;
      this.keysAtom_ = new Atom(true ? this.name_ + ".keys" : "ObservableObject.keys");
      this.isPlainObject_ = isPlainObject(this.target_);
      if (!isAnnotation(this.defaultAnnotation_)) {
        die("defaultAnnotation must be valid annotation");
      }
      if (true) {
        this.appliedAnnotations_ = {};
      }
    }
    var _proto = ObservableObjectAdministration2.prototype;
    _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
      return this.values_.get(key).get();
    };
    _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
      var observable2 = this.values_.get(key);
      if (observable2 instanceof ComputedValue) {
        observable2.set(newValue);
        return true;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_ || this.target_,
          name: key,
          newValue
        });
        if (!change) {
          return null;
        }
        newValue = change.newValue;
      }
      newValue = observable2.prepareNewValue_(newValue);
      if (newValue !== globalState.UNCHANGED) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var _change = notify || notifySpy ? {
          type: UPDATE,
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || this.target_,
          oldValue: observable2.value_,
          name: key,
          newValue
        } : null;
        if (notifySpy) {
          spyReportStart(_change);
        }
        observable2.setNewValue_(newValue);
        if (notify) {
          notifyListeners(this, _change);
        }
        if (notifySpy) {
          spyReportEnd();
        }
      }
      return true;
    };
    _proto.get_ = function get_(key) {
      if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
        this.has_(key);
      }
      return this.target_[key];
    };
    _proto.set_ = function set_(key, value, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      if (hasProp(this.target_, key)) {
        if (this.values_.has(key)) {
          return this.setObservablePropValue_(key, value);
        } else if (proxyTrap) {
          return Reflect.set(this.target_, key, value);
        } else {
          this.target_[key] = value;
          return true;
        }
      } else {
        return this.extend_(key, {
          value,
          enumerable: true,
          writable: true,
          configurable: true
        }, this.defaultAnnotation_, proxyTrap);
      }
    };
    _proto.has_ = function has_(key) {
      if (!globalState.trackingDerivation) {
        return key in this.target_;
      }
      this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
      var entry = this.pendingKeys_.get(key);
      if (!entry) {
        entry = new ObservableValue(key in this.target_, referenceEnhancer, true ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableObject.key?", false);
        this.pendingKeys_.set(key, entry);
      }
      return entry.get();
    };
    _proto.make_ = function make_(key, annotation) {
      if (annotation === true) {
        annotation = this.defaultAnnotation_;
      }
      if (annotation === false) {
        return;
      }
      assertAnnotable(this, annotation, key);
      if (!(key in this.target_)) {
        var _this$target_$storedA;
        if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) != null && _this$target_$storedA[key]) {
          return;
        } else {
          die(1, annotation.annotationType_, this.name_ + "." + key.toString());
        }
      }
      var source = this.target_;
      while (source && source !== objectPrototype) {
        var descriptor = getDescriptor(source, key);
        if (descriptor) {
          var outcome = annotation.make_(this, key, descriptor, source);
          if (outcome === 0) {
            return;
          }
          if (outcome === 1) {
            break;
          }
        }
        source = Object.getPrototypeOf(source);
      }
      recordAnnotationApplied(this, annotation, key);
    };
    _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      if (annotation === true) {
        annotation = this.defaultAnnotation_;
      }
      if (annotation === false) {
        return this.defineProperty_(key, descriptor, proxyTrap);
      }
      assertAnnotable(this, annotation, key);
      var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
      if (outcome) {
        recordAnnotationApplied(this, annotation, key);
      }
      return outcome;
    };
    _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      try {
        startBatch();
        var deleteOutcome = this.delete_(key);
        if (!deleteOutcome) {
          return deleteOutcome;
        }
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: descriptor.value
          });
          if (!change) {
            return null;
          }
          var newValue = change.newValue;
          if (descriptor.value !== newValue) {
            descriptor = _extends({}, descriptor, {
              value: newValue
            });
          }
        }
        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }
        this.notifyPropertyAddition_(key, descriptor.value);
      } finally {
        endBatch();
      }
      return true;
    };
    _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      try {
        startBatch();
        var deleteOutcome = this.delete_(key);
        if (!deleteOutcome) {
          return deleteOutcome;
        }
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: value
          });
          if (!change) {
            return null;
          }
          value = change.newValue;
        }
        var cachedDescriptor = getCachedObservablePropDescriptor(key);
        var descriptor = {
          configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
          enumerable: true,
          get: cachedDescriptor.get,
          set: cachedDescriptor.set
        };
        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }
        var observable2 = new ObservableValue(value, enhancer, true ? this.name_ + "." + key.toString() : "ObservableObject.key", false);
        this.values_.set(key, observable2);
        this.notifyPropertyAddition_(key, observable2.value_);
      } finally {
        endBatch();
      }
      return true;
    };
    _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      try {
        startBatch();
        var deleteOutcome = this.delete_(key);
        if (!deleteOutcome) {
          return deleteOutcome;
        }
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: void 0
          });
          if (!change) {
            return null;
          }
        }
        options.name || (options.name = true ? this.name_ + "." + key.toString() : "ObservableObject.key");
        options.context = this.proxy_ || this.target_;
        var cachedDescriptor = getCachedObservablePropDescriptor(key);
        var descriptor = {
          configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
          enumerable: false,
          get: cachedDescriptor.get,
          set: cachedDescriptor.set
        };
        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }
        this.values_.set(key, new ComputedValue(options));
        this.notifyPropertyAddition_(key, void 0);
      } finally {
        endBatch();
      }
      return true;
    };
    _proto.delete_ = function delete_(key, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      if (!hasProp(this.target_, key)) {
        return true;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: REMOVE
        });
        if (!change) {
          return null;
        }
      }
      try {
        var _this$pendingKeys_, _this$pendingKeys_$ge;
        startBatch();
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var observable2 = this.values_.get(key);
        var value = void 0;
        if (!observable2 && (notify || notifySpy)) {
          var _getDescriptor2;
          value = (_getDescriptor2 = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor2.value;
        }
        if (proxyTrap) {
          if (!Reflect.deleteProperty(this.target_, key)) {
            return false;
          }
        } else {
          delete this.target_[key];
        }
        if (true) {
          delete this.appliedAnnotations_[key];
        }
        if (observable2) {
          this.values_["delete"](key);
          if (observable2 instanceof ObservableValue) {
            value = observable2.value_;
          }
          propagateChanged(observable2);
        }
        this.keysAtom_.reportChanged();
        (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_);
        if (notify || notifySpy) {
          var _change2 = {
            type: REMOVE,
            observableKind: "object",
            object: this.proxy_ || this.target_,
            debugObjectName: this.name_,
            oldValue: value,
            name: key
          };
          if (notifySpy) {
            spyReportStart(_change2);
          }
          if (notify) {
            notifyListeners(this, _change2);
          }
          if (notifySpy) {
            spyReportEnd();
          }
        }
      } finally {
        endBatch();
      }
      return true;
    };
    _proto.observe_ = function observe_(callback, fireImmediately) {
      if (fireImmediately === true) {
        die("`observe` doesn't support the fire immediately property for observable objects.");
      }
      return registerListener(this, callback);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
      var _this$pendingKeys_2, _this$pendingKeys_2$g;
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      if (notify || notifySpy) {
        var change = notify || notifySpy ? {
          type: ADD,
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || this.target_,
          name: key,
          newValue: value
        } : null;
        if (notifySpy) {
          spyReportStart(change);
        }
        if (notify) {
          notifyListeners(this, change);
        }
        if (notifySpy) {
          spyReportEnd();
        }
      }
      (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true);
      this.keysAtom_.reportChanged();
    };
    _proto.ownKeys_ = function ownKeys_() {
      this.keysAtom_.reportObserved();
      return ownKeys(this.target_);
    };
    _proto.keys_ = function keys_() {
      this.keysAtom_.reportObserved();
      return Object.keys(this.target_);
    };
    return ObservableObjectAdministration2;
  }();
  function asObservableObject(target, options) {
    var _options$name;
    if (options && isObservableObject(target)) {
      die("Options can't be provided for already observable objects.");
    }
    if (hasProp(target, $mobx)) {
      if (!(getAdministration(target) instanceof ObservableObjectAdministration)) {
        die("Cannot convert '" + getDebugName(target) + "' into observable object:\nThe target is already observable of different type.\nExtending builtins is not supported.");
      }
      return target;
    }
    if (!Object.isExtensible(target)) {
      die("Cannot make the designated object observable; it is not extensible");
    }
    var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : true ? (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() : "ObservableObject";
    var adm = new ObservableObjectAdministration(target, /* @__PURE__ */ new Map(), String(name), getAnnotationFromOptions(options));
    addHiddenProp(target, $mobx, adm);
    return target;
  }
  var isObservableObjectAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
  function getCachedObservablePropDescriptor(key) {
    return descriptorCache[key] || (descriptorCache[key] = {
      get: function get3() {
        return this[$mobx].getObservablePropValue_(key);
      },
      set: function set4(value) {
        return this[$mobx].setObservablePropValue_(key, value);
      }
    });
  }
  function isObservableObject(thing) {
    if (isObject(thing)) {
      return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
  }
  function recordAnnotationApplied(adm, annotation, key) {
    var _adm$target_$storedAn;
    if (true) {
      adm.appliedAnnotations_[key] = annotation;
    }
    (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
  }
  function assertAnnotable(adm, annotation, key) {
    if (!isAnnotation(annotation)) {
      die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
    }
    if (!isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
      var fieldName = adm.name_ + "." + key.toString();
      var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
      var requestedAnnotationType = annotation.annotationType_;
      die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed.\nUse 'override' annotation for methods overridden by subclass.");
    }
  }
  var ENTRY_0 = /* @__PURE__ */ createArrayEntryDescriptor(0);
  var safariPrototypeSetterInheritanceBug = /* @__PURE__ */ function() {
    var v3 = false;
    var p4 = {};
    Object.defineProperty(p4, "0", {
      set: function set4() {
        v3 = true;
      }
    });
    Object.create(p4)["0"] = 1;
    return v3 === false;
  }();
  var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
  var StubArray = function StubArray2() {
  };
  function inherit(ctor, proto) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(ctor.prototype, proto);
    } else if (ctor.prototype.__proto__ !== void 0) {
      ctor.prototype.__proto__ = proto;
    } else {
      ctor.prototype = proto;
    }
  }
  inherit(StubArray, Array.prototype);
  var LegacyObservableArray = /* @__PURE__ */ function(_StubArray, _Symbol$toStringTag2, _Symbol$iterator2) {
    _inheritsLoose(LegacyObservableArray2, _StubArray);
    function LegacyObservableArray2(initialValues, enhancer, name, owned) {
      var _this;
      if (name === void 0) {
        name = true ? "ObservableArray@" + getNextId() : "ObservableArray";
      }
      if (owned === void 0) {
        owned = false;
      }
      _this = _StubArray.call(this) || this;
      initObservable(function() {
        var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
        adm.proxy_ = _assertThisInitialized(_this);
        addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);
        if (initialValues && initialValues.length) {
          _this.spliceWithArray(0, 0, initialValues);
        }
        if (safariPrototypeSetterInheritanceBug) {
          Object.defineProperty(_assertThisInitialized(_this), "0", ENTRY_0);
        }
      });
      return _this;
    }
    var _proto = LegacyObservableArray2.prototype;
    _proto.concat = function concat() {
      this[$mobx].atom_.reportObserved();
      for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
        arrays[_key] = arguments[_key];
      }
      return Array.prototype.concat.apply(
        this.slice(),
        //@ts-ignore
        arrays.map(function(a5) {
          return isObservableArray(a5) ? a5.slice() : a5;
        })
      );
    };
    _proto[_Symbol$iterator2] = function() {
      var self2 = this;
      var nextIndex = 0;
      return makeIterable({
        next: function next() {
          return nextIndex < self2.length ? {
            value: self2[nextIndex++],
            done: false
          } : {
            done: true,
            value: void 0
          };
        }
      });
    };
    _createClass(LegacyObservableArray2, [{
      key: "length",
      get: function get3() {
        return this[$mobx].getArrayLength_();
      },
      set: function set4(newLength) {
        this[$mobx].setArrayLength_(newLength);
      }
    }, {
      key: _Symbol$toStringTag2,
      get: function get3() {
        return "Array";
      }
    }]);
    return LegacyObservableArray2;
  }(StubArray, Symbol.toStringTag, Symbol.iterator);
  Object.entries(arrayExtensions).forEach(function(_ref) {
    var prop = _ref[0], fn = _ref[1];
    if (prop !== "concat") {
      addHiddenProp(LegacyObservableArray.prototype, prop, fn);
    }
  });
  function createArrayEntryDescriptor(index) {
    return {
      enumerable: false,
      configurable: true,
      get: function get3() {
        return this[$mobx].get_(index);
      },
      set: function set4(value) {
        this[$mobx].set_(index, value);
      }
    };
  }
  function createArrayBufferItem(index) {
    defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
  }
  function reserveArrayBuffer(max) {
    if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
      for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
        createArrayBufferItem(index);
      }
      OBSERVABLE_ARRAY_BUFFER_SIZE = max;
    }
  }
  reserveArrayBuffer(1e3);
  function createLegacyArray(initialValues, enhancer, name) {
    return new LegacyObservableArray(initialValues, enhancer, name);
  }
  function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
      if (isObservableArray(thing)) {
        if (property !== void 0) {
          die(23);
        }
        return thing[$mobx].atom_;
      }
      if (isObservableSet(thing)) {
        return thing.atom_;
      }
      if (isObservableMap(thing)) {
        if (property === void 0) {
          return thing.keysAtom_;
        }
        var observable2 = thing.data_.get(property) || thing.hasMap_.get(property);
        if (!observable2) {
          die(25, property, getDebugName(thing));
        }
        return observable2;
      }
      if (isObservableObject(thing)) {
        if (!property) {
          return die(26);
        }
        var _observable = thing[$mobx].values_.get(property);
        if (!_observable) {
          die(27, property, getDebugName(thing));
        }
        return _observable;
      }
      if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
        return thing;
      }
    } else if (isFunction(thing)) {
      if (isReaction(thing[$mobx])) {
        return thing[$mobx];
      }
    }
    die(28);
  }
  function getAdministration(thing, property) {
    if (!thing) {
      die(29);
    }
    if (property !== void 0) {
      return getAdministration(getAtom(thing, property));
    }
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
    if (isObservableMap(thing) || isObservableSet(thing)) {
      return thing;
    }
    if (thing[$mobx]) {
      return thing[$mobx];
    }
    die(24, thing);
  }
  function getDebugName(thing, property) {
    var named;
    if (property !== void 0) {
      named = getAtom(thing, property);
    } else if (isAction(thing)) {
      return thing.name;
    } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
      named = getAdministration(thing);
    } else {
      named = getAtom(thing);
    }
    return named.name_;
  }
  function initObservable(cb) {
    var derivation = untrackedStart();
    var allowStateChanges = allowStateChangesStart(true);
    startBatch();
    try {
      return cb();
    } finally {
      endBatch();
      allowStateChangesEnd(allowStateChanges);
      untrackedEnd(derivation);
    }
  }
  var toString = objectPrototype.toString;
  function deepEqual(a5, b4, depth) {
    if (depth === void 0) {
      depth = -1;
    }
    return eq(a5, b4, depth);
  }
  function eq(a5, b4, depth, aStack, bStack) {
    if (a5 === b4) {
      return a5 !== 0 || 1 / a5 === 1 / b4;
    }
    if (a5 == null || b4 == null) {
      return false;
    }
    if (a5 !== a5) {
      return b4 !== b4;
    }
    var type = typeof a5;
    if (type !== "function" && type !== "object" && typeof b4 != "object") {
      return false;
    }
    var className = toString.call(a5);
    if (className !== toString.call(b4)) {
      return false;
    }
    switch (className) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a5 === "" + b4;
      case "[object Number]":
        if (+a5 !== +a5) {
          return +b4 !== +b4;
        }
        return +a5 === 0 ? 1 / +a5 === 1 / b4 : +a5 === +b4;
      case "[object Date]":
      case "[object Boolean]":
        return +a5 === +b4;
      case "[object Symbol]":
        return typeof Symbol !== "undefined" && Symbol.valueOf.call(a5) === Symbol.valueOf.call(b4);
      case "[object Map]":
      case "[object Set]":
        if (depth >= 0) {
          depth++;
        }
        break;
    }
    a5 = unwrap(a5);
    b4 = unwrap(b4);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
      if (typeof a5 != "object" || typeof b4 != "object") {
        return false;
      }
      var aCtor = a5.constructor, bCtor = b4.constructor;
      if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a5 && "constructor" in b4) {
        return false;
      }
    }
    if (depth === 0) {
      return false;
    } else if (depth < 0) {
      depth = -1;
    }
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      if (aStack[length] === a5) {
        return bStack[length] === b4;
      }
    }
    aStack.push(a5);
    bStack.push(b4);
    if (areArrays) {
      length = a5.length;
      if (length !== b4.length) {
        return false;
      }
      while (length--) {
        if (!eq(a5[length], b4[length], depth - 1, aStack, bStack)) {
          return false;
        }
      }
    } else {
      var keys = Object.keys(a5);
      var key;
      length = keys.length;
      if (Object.keys(b4).length !== length) {
        return false;
      }
      while (length--) {
        key = keys[length];
        if (!(hasProp(b4, key) && eq(a5[key], b4[key], depth - 1, aStack, bStack))) {
          return false;
        }
      }
    }
    aStack.pop();
    bStack.pop();
    return true;
  }
  function unwrap(a5) {
    if (isObservableArray(a5)) {
      return a5.slice();
    }
    if (isES6Map(a5) || isObservableMap(a5)) {
      return Array.from(a5.entries());
    }
    if (isES6Set(a5) || isObservableSet(a5)) {
      return Array.from(a5.entries());
    }
    return a5;
  }
  function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
  }
  function getSelf() {
    return this;
  }
  function isAnnotation(thing) {
    return (
      // Can be function
      thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_)
    );
  }
  ["Symbol", "Map", "Set"].forEach(function(m3) {
    var g3 = getGlobal();
    if (typeof g3[m3] === "undefined") {
      die("MobX requires global '" + m3 + "' to be available or polyfilled");
    }
  });
  if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
      spy,
      extras: {
        getDebugName
      },
      $mobx
    });
  }

  // node_modules/@adobe/lit-mobx/lib/mixin.js
  function MobxReactionUpdate(constructor) {
    return MobxReactionUpdateCustom(constructor, Reaction);
  }

  // node_modules/@lit/reactive-element/css-tag.js
  var t3 = globalThis;
  var e6 = t3.ShadowRoot && (void 0 === t3.ShadyCSS || t3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s5 = Symbol();
  var o6 = /* @__PURE__ */ new WeakMap();
  var n7 = class {
    constructor(t7, e12, o10) {
      if (this._$cssResult$ = true, o10 !== s5)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t7, this.t = e12;
    }
    get styleSheet() {
      let t7 = this.o;
      const s8 = this.t;
      if (e6 && void 0 === t7) {
        const e12 = void 0 !== s8 && 1 === s8.length;
        e12 && (t7 = o6.get(s8)), void 0 === t7 && ((this.o = t7 = new CSSStyleSheet()).replaceSync(this.cssText), e12 && o6.set(s8, t7));
      }
      return t7;
    }
    toString() {
      return this.cssText;
    }
  };
  var r4 = (t7) => new n7("string" == typeof t7 ? t7 : t7 + "", void 0, s5);
  var i3 = (t7, ...e12) => {
    const o10 = 1 === t7.length ? t7[0] : e12.reduce((e13, s8, o11) => e13 + ((t8) => {
      if (true === t8._$cssResult$)
        return t8.cssText;
      if ("number" == typeof t8)
        return t8;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t8 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s8) + t7[o11 + 1], t7[0]);
    return new n7(o10, t7, s5);
  };
  var S3 = (s8, o10) => {
    if (e6)
      s8.adoptedStyleSheets = o10.map((t7) => t7 instanceof CSSStyleSheet ? t7 : t7.styleSheet);
    else
      for (const e12 of o10) {
        const o11 = document.createElement("style"), n12 = t3.litNonce;
        void 0 !== n12 && o11.setAttribute("nonce", n12), o11.textContent = e12.cssText, s8.appendChild(o11);
      }
  };
  var c3 = e6 ? (t7) => t7 : (t7) => t7 instanceof CSSStyleSheet ? ((t8) => {
    let e12 = "";
    for (const s8 of t8.cssRules)
      e12 += s8.cssText;
    return r4(e12);
  })(t7) : t7;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i4, defineProperty: e7, getOwnPropertyDescriptor: r5, getOwnPropertyNames: h3, getOwnPropertySymbols: o7, getPrototypeOf: n8 } = Object;
  var a3 = globalThis;
  var c4 = a3.trustedTypes;
  var l5 = c4 ? c4.emptyScript : "";
  var p2 = a3.reactiveElementPolyfillSupport;
  var d3 = (t7, s8) => t7;
  var u3 = { toAttribute(t7, s8) {
    switch (s8) {
      case Boolean:
        t7 = t7 ? l5 : null;
        break;
      case Object:
      case Array:
        t7 = null == t7 ? t7 : JSON.stringify(t7);
    }
    return t7;
  }, fromAttribute(t7, s8) {
    let i8 = t7;
    switch (s8) {
      case Boolean:
        i8 = null !== t7;
        break;
      case Number:
        i8 = null === t7 ? null : Number(t7);
        break;
      case Object:
      case Array:
        try {
          i8 = JSON.parse(t7);
        } catch (t8) {
          i8 = null;
        }
    }
    return i8;
  } };
  var f2 = (t7, s8) => !i4(t7, s8);
  var y2 = { attribute: true, type: String, converter: u3, reflect: false, hasChanged: f2 };
  Symbol.metadata ??= Symbol("metadata"), a3.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var b2 = class extends HTMLElement {
    static addInitializer(t7) {
      this._$Ei(), (this.l ??= []).push(t7);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t7, s8 = y2) {
      if (s8.state && (s8.attribute = false), this._$Ei(), this.elementProperties.set(t7, s8), !s8.noAccessor) {
        const i8 = Symbol(), r8 = this.getPropertyDescriptor(t7, i8, s8);
        void 0 !== r8 && e7(this.prototype, t7, r8);
      }
    }
    static getPropertyDescriptor(t7, s8, i8) {
      const { get: e12, set: h5 } = r5(this.prototype, t7) ?? { get() {
        return this[s8];
      }, set(t8) {
        this[s8] = t8;
      } };
      return { get() {
        return e12?.call(this);
      }, set(s9) {
        const r8 = e12?.call(this);
        h5.call(this, s9), this.requestUpdate(t7, r8, i8);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t7) {
      return this.elementProperties.get(t7) ?? y2;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d3("elementProperties")))
        return;
      const t7 = n8(this);
      t7.finalize(), void 0 !== t7.l && (this.l = [...t7.l]), this.elementProperties = new Map(t7.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d3("finalized")))
        return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d3("properties"))) {
        const t8 = this.properties, s8 = [...h3(t8), ...o7(t8)];
        for (const i8 of s8)
          this.createProperty(i8, t8[i8]);
      }
      const t7 = this[Symbol.metadata];
      if (null !== t7) {
        const s8 = litPropertyMetadata.get(t7);
        if (void 0 !== s8)
          for (const [t8, i8] of s8)
            this.elementProperties.set(t8, i8);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t8, s8] of this.elementProperties) {
        const i8 = this._$Eu(t8, s8);
        void 0 !== i8 && this._$Eh.set(i8, t8);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s8) {
      const i8 = [];
      if (Array.isArray(s8)) {
        const e12 = new Set(s8.flat(1 / 0).reverse());
        for (const s9 of e12)
          i8.unshift(c3(s9));
      } else
        void 0 !== s8 && i8.push(c3(s8));
      return i8;
    }
    static _$Eu(t7, s8) {
      const i8 = s8.attribute;
      return false === i8 ? void 0 : "string" == typeof i8 ? i8 : "string" == typeof t7 ? t7.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t7) => this.enableUpdating = t7), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t7) => t7(this));
    }
    addController(t7) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t7), void 0 !== this.renderRoot && this.isConnected && t7.hostConnected?.();
    }
    removeController(t7) {
      this._$EO?.delete(t7);
    }
    _$E_() {
      const t7 = /* @__PURE__ */ new Map(), s8 = this.constructor.elementProperties;
      for (const i8 of s8.keys())
        this.hasOwnProperty(i8) && (t7.set(i8, this[i8]), delete this[i8]);
      t7.size > 0 && (this._$Ep = t7);
    }
    createRenderRoot() {
      const t7 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S3(t7, this.constructor.elementStyles), t7;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t7) => t7.hostConnected?.());
    }
    enableUpdating(t7) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t7) => t7.hostDisconnected?.());
    }
    attributeChangedCallback(t7, s8, i8) {
      this._$AK(t7, i8);
    }
    _$EC(t7, s8) {
      const i8 = this.constructor.elementProperties.get(t7), e12 = this.constructor._$Eu(t7, i8);
      if (void 0 !== e12 && true === i8.reflect) {
        const r8 = (void 0 !== i8.converter?.toAttribute ? i8.converter : u3).toAttribute(s8, i8.type);
        this._$Em = t7, null == r8 ? this.removeAttribute(e12) : this.setAttribute(e12, r8), this._$Em = null;
      }
    }
    _$AK(t7, s8) {
      const i8 = this.constructor, e12 = i8._$Eh.get(t7);
      if (void 0 !== e12 && this._$Em !== e12) {
        const t8 = i8.getPropertyOptions(e12), r8 = "function" == typeof t8.converter ? { fromAttribute: t8.converter } : void 0 !== t8.converter?.fromAttribute ? t8.converter : u3;
        this._$Em = e12, this[e12] = r8.fromAttribute(s8, t8.type), this._$Em = null;
      }
    }
    requestUpdate(t7, s8, i8) {
      if (void 0 !== t7) {
        if (i8 ??= this.constructor.getPropertyOptions(t7), !(i8.hasChanged ?? f2)(this[t7], s8))
          return;
        this.P(t7, s8, i8);
      }
      false === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t7, s8, i8) {
      this._$AL.has(t7) || this._$AL.set(t7, s8), true === i8.reflect && this._$Em !== t7 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t7);
    }
    async _$ET() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t8) {
        Promise.reject(t8);
      }
      const t7 = this.scheduleUpdate();
      return null != t7 && await t7, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending)
        return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t9, s9] of this._$Ep)
            this[t9] = s9;
          this._$Ep = void 0;
        }
        const t8 = this.constructor.elementProperties;
        if (t8.size > 0)
          for (const [s9, i8] of t8)
            true !== i8.wrapped || this._$AL.has(s9) || void 0 === this[s9] || this.P(s9, this[s9], i8);
      }
      let t7 = false;
      const s8 = this._$AL;
      try {
        t7 = this.shouldUpdate(s8), t7 ? (this.willUpdate(s8), this._$EO?.forEach((t8) => t8.hostUpdate?.()), this.update(s8)) : this._$EU();
      } catch (s9) {
        throw t7 = false, this._$EU(), s9;
      }
      t7 && this._$AE(s8);
    }
    willUpdate(t7) {
    }
    _$AE(t7) {
      this._$EO?.forEach((t8) => t8.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t7)), this.updated(t7);
    }
    _$EU() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t7) {
      return true;
    }
    update(t7) {
      this._$Ej &&= this._$Ej.forEach((t8) => this._$EC(t8, this[t8])), this._$EU();
    }
    updated(t7) {
    }
    firstUpdated(t7) {
    }
  };
  b2.elementStyles = [], b2.shadowRootOptions = { mode: "open" }, b2[d3("elementProperties")] = /* @__PURE__ */ new Map(), b2[d3("finalized")] = /* @__PURE__ */ new Map(), p2?.({ ReactiveElement: b2 }), (a3.reactiveElementVersions ??= []).push("2.0.4");

  // node_modules/lit-html/lit-html.js
  var t4 = globalThis;
  var i5 = t4.trustedTypes;
  var s6 = i5 ? i5.createPolicy("lit-html", { createHTML: (t7) => t7 }) : void 0;
  var e8 = "$lit$";
  var h4 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o8 = "?" + h4;
  var n9 = `<${o8}>`;
  var r6 = document;
  var l6 = () => r6.createComment("");
  var c5 = (t7) => null === t7 || "object" != typeof t7 && "function" != typeof t7;
  var a4 = Array.isArray;
  var u4 = (t7) => a4(t7) || "function" == typeof t7?.[Symbol.iterator];
  var d4 = "[ 	\n\f\r]";
  var f3 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v2 = /-->/g;
  var _15 = />/g;
  var m2 = RegExp(`>|${d4}(?:([^\\s"'>=/]+)(${d4}*=${d4}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p3 = /'/g;
  var g2 = /"/g;
  var $2 = /^(?:script|style|textarea|title)$/i;
  var y3 = (t7) => (i8, ...s8) => ({ _$litType$: t7, strings: i8, values: s8 });
  var x2 = y3(1);
  var b3 = y3(2);
  var w2 = Symbol.for("lit-noChange");
  var T2 = Symbol.for("lit-nothing");
  var A2 = /* @__PURE__ */ new WeakMap();
  var E2 = r6.createTreeWalker(r6, 129);
  function C2(t7, i8) {
    if (!Array.isArray(t7) || !t7.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== s6 ? s6.createHTML(i8) : i8;
  }
  var P2 = (t7, i8) => {
    const s8 = t7.length - 1, o10 = [];
    let r8, l7 = 2 === i8 ? "<svg>" : "", c6 = f3;
    for (let i9 = 0; i9 < s8; i9++) {
      const s9 = t7[i9];
      let a5, u5, d5 = -1, y4 = 0;
      for (; y4 < s9.length && (c6.lastIndex = y4, u5 = c6.exec(s9), null !== u5); )
        y4 = c6.lastIndex, c6 === f3 ? "!--" === u5[1] ? c6 = v2 : void 0 !== u5[1] ? c6 = _15 : void 0 !== u5[2] ? ($2.test(u5[2]) && (r8 = RegExp("</" + u5[2], "g")), c6 = m2) : void 0 !== u5[3] && (c6 = m2) : c6 === m2 ? ">" === u5[0] ? (c6 = r8 ?? f3, d5 = -1) : void 0 === u5[1] ? d5 = -2 : (d5 = c6.lastIndex - u5[2].length, a5 = u5[1], c6 = void 0 === u5[3] ? m2 : '"' === u5[3] ? g2 : p3) : c6 === g2 || c6 === p3 ? c6 = m2 : c6 === v2 || c6 === _15 ? c6 = f3 : (c6 = m2, r8 = void 0);
      const x3 = c6 === m2 && t7[i9 + 1].startsWith("/>") ? " " : "";
      l7 += c6 === f3 ? s9 + n9 : d5 >= 0 ? (o10.push(a5), s9.slice(0, d5) + e8 + s9.slice(d5) + h4 + x3) : s9 + h4 + (-2 === d5 ? i9 : x3);
    }
    return [C2(t7, l7 + (t7[s8] || "<?>") + (2 === i8 ? "</svg>" : "")), o10];
  };
  var V2 = class _V {
    constructor({ strings: t7, _$litType$: s8 }, n12) {
      let r8;
      this.parts = [];
      let c6 = 0, a5 = 0;
      const u5 = t7.length - 1, d5 = this.parts, [f4, v3] = P2(t7, s8);
      if (this.el = _V.createElement(f4, n12), E2.currentNode = this.el.content, 2 === s8) {
        const t8 = this.el.content.firstChild;
        t8.replaceWith(...t8.childNodes);
      }
      for (; null !== (r8 = E2.nextNode()) && d5.length < u5; ) {
        if (1 === r8.nodeType) {
          if (r8.hasAttributes())
            for (const t8 of r8.getAttributeNames())
              if (t8.endsWith(e8)) {
                const i8 = v3[a5++], s9 = r8.getAttribute(t8).split(h4), e12 = /([.?@])?(.*)/.exec(i8);
                d5.push({ type: 1, index: c6, name: e12[2], strings: s9, ctor: "." === e12[1] ? k2 : "?" === e12[1] ? H2 : "@" === e12[1] ? I2 : R2 }), r8.removeAttribute(t8);
              } else
                t8.startsWith(h4) && (d5.push({ type: 6, index: c6 }), r8.removeAttribute(t8));
          if ($2.test(r8.tagName)) {
            const t8 = r8.textContent.split(h4), s9 = t8.length - 1;
            if (s9 > 0) {
              r8.textContent = i5 ? i5.emptyScript : "";
              for (let i8 = 0; i8 < s9; i8++)
                r8.append(t8[i8], l6()), E2.nextNode(), d5.push({ type: 2, index: ++c6 });
              r8.append(t8[s9], l6());
            }
          }
        } else if (8 === r8.nodeType)
          if (r8.data === o8)
            d5.push({ type: 2, index: c6 });
          else {
            let t8 = -1;
            for (; -1 !== (t8 = r8.data.indexOf(h4, t8 + 1)); )
              d5.push({ type: 7, index: c6 }), t8 += h4.length - 1;
          }
        c6++;
      }
    }
    static createElement(t7, i8) {
      const s8 = r6.createElement("template");
      return s8.innerHTML = t7, s8;
    }
  };
  function N2(t7, i8, s8 = t7, e12) {
    if (i8 === w2)
      return i8;
    let h5 = void 0 !== e12 ? s8._$Co?.[e12] : s8._$Cl;
    const o10 = c5(i8) ? void 0 : i8._$litDirective$;
    return h5?.constructor !== o10 && (h5?._$AO?.(false), void 0 === o10 ? h5 = void 0 : (h5 = new o10(t7), h5._$AT(t7, s8, e12)), void 0 !== e12 ? (s8._$Co ??= [])[e12] = h5 : s8._$Cl = h5), void 0 !== h5 && (i8 = N2(t7, h5._$AS(t7, i8.values), h5, e12)), i8;
  }
  var S4 = class {
    constructor(t7, i8) {
      this._$AV = [], this._$AN = void 0, this._$AD = t7, this._$AM = i8;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t7) {
      const { el: { content: i8 }, parts: s8 } = this._$AD, e12 = (t7?.creationScope ?? r6).importNode(i8, true);
      E2.currentNode = e12;
      let h5 = E2.nextNode(), o10 = 0, n12 = 0, l7 = s8[0];
      for (; void 0 !== l7; ) {
        if (o10 === l7.index) {
          let i9;
          2 === l7.type ? i9 = new M2(h5, h5.nextSibling, this, t7) : 1 === l7.type ? i9 = new l7.ctor(h5, l7.name, l7.strings, this, t7) : 6 === l7.type && (i9 = new L2(h5, this, t7)), this._$AV.push(i9), l7 = s8[++n12];
        }
        o10 !== l7?.index && (h5 = E2.nextNode(), o10++);
      }
      return E2.currentNode = r6, e12;
    }
    p(t7) {
      let i8 = 0;
      for (const s8 of this._$AV)
        void 0 !== s8 && (void 0 !== s8.strings ? (s8._$AI(t7, s8, i8), i8 += s8.strings.length - 2) : s8._$AI(t7[i8])), i8++;
    }
  };
  var M2 = class _M {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t7, i8, s8, e12) {
      this.type = 2, this._$AH = T2, this._$AN = void 0, this._$AA = t7, this._$AB = i8, this._$AM = s8, this.options = e12, this._$Cv = e12?.isConnected ?? true;
    }
    get parentNode() {
      let t7 = this._$AA.parentNode;
      const i8 = this._$AM;
      return void 0 !== i8 && 11 === t7?.nodeType && (t7 = i8.parentNode), t7;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t7, i8 = this) {
      t7 = N2(this, t7, i8), c5(t7) ? t7 === T2 || null == t7 || "" === t7 ? (this._$AH !== T2 && this._$AR(), this._$AH = T2) : t7 !== this._$AH && t7 !== w2 && this._(t7) : void 0 !== t7._$litType$ ? this.$(t7) : void 0 !== t7.nodeType ? this.T(t7) : u4(t7) ? this.k(t7) : this._(t7);
    }
    S(t7) {
      return this._$AA.parentNode.insertBefore(t7, this._$AB);
    }
    T(t7) {
      this._$AH !== t7 && (this._$AR(), this._$AH = this.S(t7));
    }
    _(t7) {
      this._$AH !== T2 && c5(this._$AH) ? this._$AA.nextSibling.data = t7 : this.T(r6.createTextNode(t7)), this._$AH = t7;
    }
    $(t7) {
      const { values: i8, _$litType$: s8 } = t7, e12 = "number" == typeof s8 ? this._$AC(t7) : (void 0 === s8.el && (s8.el = V2.createElement(C2(s8.h, s8.h[0]), this.options)), s8);
      if (this._$AH?._$AD === e12)
        this._$AH.p(i8);
      else {
        const t8 = new S4(e12, this), s9 = t8.u(this.options);
        t8.p(i8), this.T(s9), this._$AH = t8;
      }
    }
    _$AC(t7) {
      let i8 = A2.get(t7.strings);
      return void 0 === i8 && A2.set(t7.strings, i8 = new V2(t7)), i8;
    }
    k(t7) {
      a4(this._$AH) || (this._$AH = [], this._$AR());
      const i8 = this._$AH;
      let s8, e12 = 0;
      for (const h5 of t7)
        e12 === i8.length ? i8.push(s8 = new _M(this.S(l6()), this.S(l6()), this, this.options)) : s8 = i8[e12], s8._$AI(h5), e12++;
      e12 < i8.length && (this._$AR(s8 && s8._$AB.nextSibling, e12), i8.length = e12);
    }
    _$AR(t7 = this._$AA.nextSibling, i8) {
      for (this._$AP?.(false, true, i8); t7 && t7 !== this._$AB; ) {
        const i9 = t7.nextSibling;
        t7.remove(), t7 = i9;
      }
    }
    setConnected(t7) {
      void 0 === this._$AM && (this._$Cv = t7, this._$AP?.(t7));
    }
  };
  var R2 = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t7, i8, s8, e12, h5) {
      this.type = 1, this._$AH = T2, this._$AN = void 0, this.element = t7, this.name = i8, this._$AM = e12, this.options = h5, s8.length > 2 || "" !== s8[0] || "" !== s8[1] ? (this._$AH = Array(s8.length - 1).fill(new String()), this.strings = s8) : this._$AH = T2;
    }
    _$AI(t7, i8 = this, s8, e12) {
      const h5 = this.strings;
      let o10 = false;
      if (void 0 === h5)
        t7 = N2(this, t7, i8, 0), o10 = !c5(t7) || t7 !== this._$AH && t7 !== w2, o10 && (this._$AH = t7);
      else {
        const e13 = t7;
        let n12, r8;
        for (t7 = h5[0], n12 = 0; n12 < h5.length - 1; n12++)
          r8 = N2(this, e13[s8 + n12], i8, n12), r8 === w2 && (r8 = this._$AH[n12]), o10 ||= !c5(r8) || r8 !== this._$AH[n12], r8 === T2 ? t7 = T2 : t7 !== T2 && (t7 += (r8 ?? "") + h5[n12 + 1]), this._$AH[n12] = r8;
      }
      o10 && !e12 && this.j(t7);
    }
    j(t7) {
      t7 === T2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t7 ?? "");
    }
  };
  var k2 = class extends R2 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t7) {
      this.element[this.name] = t7 === T2 ? void 0 : t7;
    }
  };
  var H2 = class extends R2 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t7) {
      this.element.toggleAttribute(this.name, !!t7 && t7 !== T2);
    }
  };
  var I2 = class extends R2 {
    constructor(t7, i8, s8, e12, h5) {
      super(t7, i8, s8, e12, h5), this.type = 5;
    }
    _$AI(t7, i8 = this) {
      if ((t7 = N2(this, t7, i8, 0) ?? T2) === w2)
        return;
      const s8 = this._$AH, e12 = t7 === T2 && s8 !== T2 || t7.capture !== s8.capture || t7.once !== s8.once || t7.passive !== s8.passive, h5 = t7 !== T2 && (s8 === T2 || e12);
      e12 && this.element.removeEventListener(this.name, this, s8), h5 && this.element.addEventListener(this.name, this, t7), this._$AH = t7;
    }
    handleEvent(t7) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t7) : this._$AH.handleEvent(t7);
    }
  };
  var L2 = class {
    constructor(t7, i8, s8) {
      this.element = t7, this.type = 6, this._$AN = void 0, this._$AM = i8, this.options = s8;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t7) {
      N2(this, t7);
    }
  };
  var Z2 = t4.litHtmlPolyfillSupport;
  Z2?.(V2, M2), (t4.litHtmlVersions ??= []).push("3.1.3");
  var j = (t7, i8, s8) => {
    const e12 = s8?.renderBefore ?? i8;
    let h5 = e12._$litPart$;
    if (void 0 === h5) {
      const t8 = s8?.renderBefore ?? null;
      e12._$litPart$ = h5 = new M2(i8.insertBefore(l6(), t8), t8, void 0, s8 ?? {});
    }
    return h5._$AI(t7), h5;
  };

  // node_modules/lit-element/lit-element.js
  var s7 = class extends b2 {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t7 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t7.firstChild, t7;
    }
    update(t7) {
      const i8 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t7), this._$Do = j(i8, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return w2;
    }
  };
  s7._$litElement$ = true, s7["finalized", "finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: s7 });
  var r7 = globalThis.litElementPolyfillSupport;
  r7?.({ LitElement: s7 });
  (globalThis.litElementVersions ??= []).push("4.0.5");

  // node_modules/@adobe/lit-mobx/lit-mobx.js
  var MobxLitElement = class extends MobxReactionUpdate(s7) {
  };

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t5 = (t7) => (e12, o10) => {
    void 0 !== o10 ? o10.addInitializer(() => {
      customElements.define(t7, e12);
    }) : customElements.define(t7, e12);
  };

  // node_modules/lit-html/directive.js
  var t6 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e10 = (t7) => (...e12) => ({ _$litDirective$: t7, values: e12 });
  var i6 = class {
    constructor(t7) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t7, e12, i8) {
      this._$Ct = t7, this._$AM = e12, this._$Ci = i8;
    }
    _$AS(t7, e12) {
      return this.update(t7, e12);
    }
    update(t7, e12) {
      return this.render(...e12);
    }
  };

  // node_modules/lit-html/directives/class-map.js
  var e11 = e10(class extends i6 {
    constructor(t7) {
      if (super(t7), t7.type !== t6.ATTRIBUTE || "class" !== t7.name || t7.strings?.length > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t7) {
      return " " + Object.keys(t7).filter((s8) => t7[s8]).join(" ") + " ";
    }
    update(s8, [i8]) {
      if (void 0 === this.st) {
        this.st = /* @__PURE__ */ new Set(), void 0 !== s8.strings && (this.nt = new Set(s8.strings.join(" ").split(/\s/).filter((t7) => "" !== t7)));
        for (const t7 in i8)
          i8[t7] && !this.nt?.has(t7) && this.st.add(t7);
        return this.render(i8);
      }
      const r8 = s8.element.classList;
      for (const t7 of this.st)
        t7 in i8 || (r8.remove(t7), this.st.delete(t7));
      for (const t7 in i8) {
        const s9 = !!i8[t7];
        s9 === this.st.has(t7) || this.nt?.has(t7) || (s9 ? (r8.add(t7), this.st.add(t7)) : (r8.remove(t7), this.st.delete(t7)));
      }
      return w2;
    }
  });

  // node_modules/lit-html/directives/style-map.js
  var n11 = "important";
  var i7 = " !" + n11;
  var o9 = e10(class extends i6 {
    constructor(t7) {
      if (super(t7), t7.type !== t6.ATTRIBUTE || "style" !== t7.name || t7.strings?.length > 2)
        throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t7) {
      return Object.keys(t7).reduce((e12, r8) => {
        const s8 = t7[r8];
        return null == s8 ? e12 : e12 + `${r8 = r8.includes("-") ? r8 : r8.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s8};`;
      }, "");
    }
    update(e12, [r8]) {
      const { style: s8 } = e12.element;
      if (void 0 === this.ft)
        return this.ft = new Set(Object.keys(r8)), this.render(r8);
      for (const t7 of this.ft)
        null == r8[t7] && (this.ft.delete(t7), t7.includes("-") ? s8.removeProperty(t7) : s8[t7] = null);
      for (const t7 in r8) {
        const e13 = r8[t7];
        if (null != e13) {
          this.ft.add(t7);
          const r9 = "string" == typeof e13 && e13.endsWith(i7);
          t7.includes("-") || r9 ? s8.setProperty(t7, r9 ? e13.slice(0, -11) : e13, r9 ? n11 : "") : s8[t7] = e13;
        }
      }
      return w2;
    }
  });

  // client/app.css
  var styles2 = i3`:host {
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
  }
  
  ul {
    padding-left: 0;
  }
  
  li {
    list-style: none;
  }
  
  #header {
    background-color: #333;
    display: flex;
    height: 20px;
    gap: 30px;
    padding: 12px 15px;
  }
  
  #header .title {
    color: white;
    font-size: 18px;
    font-weight: 200;
  }
  
  #header .title strong {
    font-weight: 600;
  }

  #header .icons {
    margin-left: auto;
  }

  #header .icon {
    border-radius: 24px;
    color: #fff;
    cursor: pointer;
  }
  
  
  #filters-panel {
    background-color: #f7f7f7;
    border-bottom: 2px solid #eee;
    height: 150px;
    padding: 15px;
  }
  
  #main {
    display: flex;
    height: calc(100vh - 226px);
    width: 100%;
  }
  
  h2 {
    font-size: 20px;
    font-weight: 200;
    margin: 7px 0;
  }
  
  #clusters-panel {
    min-width: 510px;
    overflow-y: scroll;
    padding: 15px;
    width: calc(100vw - 820px);
  }
  
  #sessions-panel {
    overflow-y: scroll;
    padding: 15px;
    width: 440px;
  }
  
  #details-panel {
    padding: 15px 5px 15px 15px;
    overflow-y: scroll;
    width: 320px;
  }
  
  .clusters ul {
    display: flex;
    flex-wrap: wrap;
  }
  
  .cluster {
    margin: 10px 25px 15px 0;
  }
  
  .cluster .cluster-title {
    color: #555;
    font-size: 14px;
  }
  
  .cluster .terms {
    color: #777;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 170px;
  }
  
  .cluster .images {
    display: flex;
    flex-wrap: wrap;
    height: 84px;
    margin-top: 2px;
    overflow-y: hidden;
    width: 170px;
  }
  
  .cluster .images img {
    cursor: pointer;
    filter: blur(1px);
    height: 40px;
    margin-bottom: 1px;
    margin-right: 2px;
    width: 40px;
  }
  
  .cluster .images .hidden img {
    height: 40px;
    margin-right: 1px;
    object-fit: cover;
    object-position: 48% 52%;
    opacity: 0.3;
    width: 1px;
  }

  .cluster .images .image-with-dominant-color {
    background-color: #aaa;
    cursor: pointer;
    height: 40px;
    margin-bottom: 1px;
    margin-right: 2px;
    opacity: 0.7;
    width: 40px;
  }

  .cluster .images .hidden .image-with-dominant-color {
    width: 1px;
  }
  
  .cluster .more {
    color: #999;
    cursor: pointer;
    font-size: 9px;
  }
  
  .submission {
    border-bottom: 5px solid #ddd;
    display: flex;
    flex-direction: column;
    margin: 20px 0 40px;
    overflow-x: clip;
    width: 100%;
  }
  
  .submission ul {
    display: flex;
    margin: 2px 0;
  }
  
  .submission li {
    border: 1px solid #ddd;
    border-radius: 3px;
    margin: 1px 4px 1px 0;
    padding: 1px 2px;
  }
  
  .prompt-text {
    font-family: monospace;
    font-size: 14px;
    margin-bottom: 5px;
  }
  
  .field-block {
    margin: 5px 3px 5px 0;
  }
  
  .field-block.inline {
    align-items: center;
    display: flex;
    height: 16px;
  }
  
  .field-title {
    color: #aaa;
    font-size: 12px;
    padding: 0 2px 0 0;
  }
  
  .image {
    /* filter: blur(2px); */
    height: 150px;
  }

  .image-with-dominant-color {
    background-color: #aaa;
    height: 100px;
    margin-bottom: 1px;
    margin-right: 2px;
    opacity: 0.7;
    width: 100px;
  }
  
  .similar-images {
    display: flex;
    flex-wrap: wrap;
    width: 210px;
  }
  
  .image-similar {
    cursor: pointer;
    /* filter: blur(1px); */
    height: 40px;
    margin-right: 2px;
  }

  .image-similar-with-dominant-color {
    cursor: pointer;
    height: 40px;
    margin-bottom: 1px;
    margin-right: 2px;
    width: 40px;
  }
  
  .dimensions {
    display: flex;
  }
  
  .dimension {
    margin: 0 25px 0 0;
    width: 200px;
  }
  
  .dimension.narrow {
    width: 160px;
  }
  
  .filter-title {
    color: #999;
    font-size: 14px;
    padding: 3px 0;
  }
  
  .dimension table {
    width: 100%;
  }
  
  .table-container {
    max-height: 140px;
    overflow-y: scroll;
  }
  
  table {
    border-collapse: collapse;
  }
  
  table td {
    border-top: 1px solid #eee;
    padding: 5px;
    word-break: break-word;
  }
  
  .table-container td {
    cursor: pointer;
  }
  
  .table-container tr:hover {
    background-color: #f3f3f3;
  }
  
  .table-container tr.selected td {
    background-color: #eee;
    font-weight: 600;
  }
  
  .table-container td.count {
    text-align: right;
    white-space: nowrap;
    width: 25%;
  }
  
  #sessions {
    margin-top: 20px;
  }
  
  #sessions th {
    color: #999;
    font-weight: normal;
    padding: 5px 2px;
  }
  
  #sessions .count {
    text-align: right;
    width: 15px;
  }
  
  #sessions .submitter {
    width: 30px;
  }
  
  #sessions .prompt {
    font-size: 14px;
  }
  
  #sessions .datetime {
    color: #999;
    font-size: 10px;
    width: 55px;
  }
  
  #sessions .clickable {
    cursor: pointer;
  }
  
  .show-more {
    cursor: pointer;
    padding: 10px 0;
    text-align: center;
    width: 100%;
  }
  
  .filter-chips {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    min-height: 20px;
    width: 100%;
  }
  
  .filter-chips .first {
    color: #aaa;
  }
  
  .filter-chip {
    border: 1px solid #ccc;
    border-radius: 10px;
    color: #777;
    margin-right: 3px;
    padding: 2px 4px;
    white-space: nowrap;
  }
  
  .filter-chip .remove {
    color: #aaa;
    cursor: pointer;
  }
  
  .prompt-count {
    margin-bottom: 5px;
  }
  
  .top-ngrams {
    color: #777;
    padding: 3px 0 6px;
  }
  
  .search {
    color: #555;
    margin: 10px 0;
    min-height: 20px;
  }
  
  .only-submitted-checkbox {
    color: #777;
    margin-bottom: 5px;
  }
  
  label {
    align-items: center;
    display: flex;
  }
  
  .clear-all {
    background-color: white;
    border: 1px solid #ccc;
    color: #777;
    cursor: pointer;
  }
  
  .clear-all:hover {
    background-color: #eee;
  }

  .rounds {
    display: flex;
    gap: 12px;
    padding-top: 3px;
  }

  .round-num a {
    color: #eee;
    font-size: 15px;
    text-decoration: none;
  }

  .round-num a:hover {
    text-decoration: underline;
  }

  .selected-round {
    font-weight: 600;
  }`;

  // client/app.ts
  var NibberVisualizationAppElement = class extends MobxLitElement {
    constructor() {
      super();
      this.submissions = [];
      this.selectedSubmissions = [];
      this.sessions = [];
      this.sessionVisibleCount = 50;
      this.onlySubmitted = true;
      this.searchQuery = "";
      this.clusters = [];
      this.expandCluster = null;
      this.dimensions = [];
      this.selectedDimensions = { "prompt": null };
      this.dataLoaded = false;
      this.datasets = [];
      this.datasetIndex = 0;
      this.numSimilarImages = 10;
      this.ngramDisplayCount = 10;
      makeObservable(this);
      this.loadData();
    }
    static get styles() {
      return [styles2, i3``];
    }
    // Load the json data file.
    async loadData() {
      this.datasets = window.datasets || [];
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = {};
      for (const [key, value] of urlSearchParams) {
        params[key] = decodeURIComponent(value);
      }
      if (params.hasOwnProperty("datasetIndex")) {
        this.datasetIndex = parseInt(params["datasetIndex"]) ?? 0;
      }
      let dataResponse = { submissions: [], sessions: [], clusters: [], dimensions: [] };
      const filename = this.datasets[this.datasetIndex].filename;
      const response = await fetch(`./data/${filename}`);
      dataResponse = await response.json();
      this.submissions = dataResponse.submissions;
      this.submissions.forEach((submission) => {
        submission.marked = true;
      });
      this.sessions = dataResponse.sessions;
      this.clusters = dataResponse.clusters;
      this.dimensions = dataResponse.dimensions;
      this.dimensions.forEach((dimension) => {
        this.selectedDimensions[dimension.field_name] = null;
      });
      this.dataLoaded = true;
    }
    get filteredSubmissions() {
      let submissions = this.submissions;
      if (this.searchQuery !== "") {
        submissions = submissions.filter(
          (submission) => submission.prompt.toLowerCase().includes(
            this.searchQuery.toLowerCase()
          )
        );
      }
      Object.keys(this.selectedDimensions).forEach((dimensionName) => {
        const selectedValue = this.selectedDimensions[dimensionName];
        if (selectedValue != null) {
          submissions = submissions.filter((submission) => {
            const value = submission[dimensionName];
            if (value instanceof Array) {
              return value.includes(selectedValue);
            } else {
              return value === selectedValue;
            }
          });
        }
      });
      return submissions;
    }
    get exampleFiltered() {
      return this.submissions.map((submission) => {
        let marked = true;
        if (this.searchQuery !== "") {
          if (!submission.prompt.toLowerCase().includes(
            this.searchQuery.toLowerCase()
          )) {
            marked = false;
          }
        }
        Object.keys(this.selectedDimensions).forEach((dimensionName) => {
          const selectedValue = this.selectedDimensions[dimensionName];
          if (selectedValue != null) {
            const value = submission[dimensionName];
            if (value instanceof Array) {
              if (!value.includes(selectedValue)) {
                marked = false;
              }
            } else {
              if (value !== selectedValue) {
                marked = false;
              }
              ;
            }
          }
        });
        return marked;
      });
    }
    get anyFiltered() {
      return this.exampleFiltered.map((val) => val === false ? 1 : 0).reduce((acc, val) => acc + val, 0) > 0;
    }
    get dimensionsForFilteredExamples() {
      const dimensionCounts = Object.fromEntries(
        this.dimensions.filter((dimension) => dimension.field_name !== "prompt").map((dimension) => [dimension.field_name, dimension.counts])
      );
      const dimensionNames = Object.keys(dimensionCounts);
      dimensionNames.forEach((dimensionName) => {
        dimensionCounts[dimensionName] = Object.fromEntries(Object.keys(dimensionCounts[dimensionName]).map((fieldName) => [fieldName, 0]));
      });
      this.filteredSubmissions.forEach((ex) => {
        dimensionNames.forEach((dimensionName) => {
          const dimensionValue = ex[dimensionName];
          if (dimensionValue instanceof Array) {
            dimensionValue.forEach((value) => {
              dimensionCounts[dimensionName][value] += 1;
            });
          } else {
            dimensionCounts[dimensionName][dimensionValue] += 1;
          }
        });
      });
      return this.dimensions.filter((dimension) => dimension.field_name !== "prompt").map((dimension) => {
        return {
          field_name: dimension.field_name,
          label: dimension.label,
          values: dimension.values,
          counts: dimensionCounts[dimension.field_name]
        };
      });
    }
    get allSessionsButConsiderOnlySubmitted() {
      return this.sessions.filter(
        (session) => this.onlySubmitted === true ? session.is_submitted_count > 0 : true
      );
    }
    get filteredSessions() {
      let sessions = this.allSessionsButConsiderOnlySubmitted;
      if (this.searchQuery !== "") {
        sessions = sessions.filter(
          (session) => session.prompt.toLowerCase().includes(
            this.searchQuery.toLowerCase()
          )
        );
      }
      if (this.expandCluster != null) {
        const submissionImageHashes = this.submissions.filter(
          (submission) => submission.cluster_label === this.expandCluster
        ).map((submission) => submission.image_hashed_filename);
        sessions = sessions.filter(
          (session) => session.image_hashed_filenames.filter(
            (filename) => submissionImageHashes.includes(filename)
          ).length > 0
        );
      }
      Object.keys(this.selectedDimensions).filter((dimensionName) => dimensionName !== "prompt").forEach((dimensionName) => {
        const selectedValue = this.selectedDimensions[dimensionName];
        if (selectedValue != null) {
          sessions = sessions.filter((session) => {
            const value = session[dimensionName];
            if (value instanceof Array) {
              return value.includes(selectedValue);
            } else {
              return value === selectedValue;
            }
          });
        }
      });
      return sessions;
    }
    get topUnigramsForAll() {
      const allNgrams = this.allSessionsButConsiderOnlySubmitted.map((session) => [...new Set(session.prompt_unigrams)]).flat();
      const ngramCounts = allNgrams.reduce((acc, ngram) => {
        acc[ngram] = (acc[ngram] || 0) + 1;
        return acc;
      }, {});
      return Object.fromEntries(Object.entries(ngramCounts));
    }
    get topUnigrams() {
      const topUnigramsForAll = this.topUnigramsForAll;
      const filteredSessions = this.filteredSessions;
      const allNgrams = filteredSessions.map((session) => [...new Set(session.prompt_unigrams)]).flat();
      const ngramCounts = allNgrams.reduce((acc, ngram) => {
        acc[ngram] = (acc[ngram] || 0) + 1;
        return acc;
      }, {});
      const ngramPMIs = {};
      const instanceCount = this.allSessionsButConsiderOnlySubmitted.length;
      for (const [ngram, count] of Object.entries(ngramCounts)) {
        const bgCount = topUnigramsForAll[ngram];
        const pWC = count / filteredSessions.length;
        const pW = bgCount / Object.values(topUnigramsForAll).reduce((acc, val) => acc + val, 0);
        const pC = filteredSessions.length / instanceCount;
        const pmi = Math.log10(pWC / (pW * pC));
        ngramPMIs[ngram] = pWC < 1 ? pmi / -Math.log10(pWC) : pmi / 1e-6;
      }
      return Object.keys(ngramPMIs).sort((a5, b4) => ngramPMIs[b4] - ngramPMIs[a5]).slice(0, this.ngramDisplayCount);
    }
    get topBigrams() {
      const filteredSessions = this.filteredSessions;
      const allNgrams = filteredSessions.map((session) => session.prompt_bigrams).flat();
      const ngramCounts = allNgrams.reduce((acc, ngram) => {
        acc[ngram] = (acc[ngram] || 0) + 1;
        return acc;
      }, {});
      return Object.keys(ngramCounts).sort((a5, b4) => ngramCounts[b4] - ngramCounts[a5]).slice(0, this.ngramDisplayCount);
    }
    get filterChips() {
      return Object.keys(this.selectedDimensions).map(
        (dimensionName) => [dimensionName, this.selectedDimensions[dimensionName]]
      ).filter(([dimensionName, value]) => value != null).map(([dimensionName, value]) => {
        return { dimensionName, value };
      });
    }
    get filterChipsWithoutPrompts() {
      return [
        ...this.searchQuery !== "" ? [{ dimensionName: "Prompt", value: this.searchQuery }] : [],
        ...this.expandCluster != null ? [
          {
            dimensionName: "Image Cluster",
            value: this.clusters.length - this.expandCluster
          }
        ] : [],
        ...Object.keys(this.selectedDimensions).map(
          (dimensionName) => [dimensionName, this.selectedDimensions[dimensionName]]
        ).filter(([dimensionName, value]) => dimensionName !== "prompt").filter(([dimensionName, value]) => value != null).map(([dimensionName, value]) => {
          return { dimensionName, value };
        })
      ];
    }
    renderFilterChips(withoutPrompts) {
      const handleClickRemove = (chipItem) => {
        if (chipItem.dimensionName === "Prompt") {
          this.searchQuery = "";
        } else if (chipItem.dimensionName === "Image Cluster") {
          this.expandCluster = null;
        } else {
          this.selectedDimensions[chipItem.dimensionName] = null;
        }
      };
      const appliedFilters = (withoutPrompts === true ? this.filterChipsWithoutPrompts : this.filterChips).map(
        (chipItem) => x2`
                      <li class="filter-chip">
                        ${chipItem.dimensionName} ${chipItem.dimensionName !== "Prompt" ? "=" : "contains"} "${chipItem.value}"
                        <span class="remove"
                          @click=${() => void handleClickRemove(chipItem)}>
                          x
                        </span>
                      </li>`
      );
      const handleClearAll = () => {
        this.dimensions.forEach((dimension) => {
          this.selectedDimensions[dimension.field_name] = null;
        });
        this.selectedDimensions["prompt"] = null;
        this.searchQuery = "";
        this.selectedSubmissions = [];
        this.expandCluster = null;
      };
      const clearAll = x2`
        <li>
          <button class="clear-all" @click=${handleClearAll}>Clear All</button>
        </li>`;
      return appliedFilters.length > 0 ? x2`<li class="first">Filters:</li>${appliedFilters}${clearAll}` : x2`<li class="first">Filters: None</li>`;
    }
    renderClusters() {
      if (this.dataLoaded === false) {
        return x2`Loading...`;
      }
      const renderClusterList = this.clusters.slice().sort((a5, b4) => b4.index - a5.index).map((cluster, index) => {
        const submissionsForCluster = this.submissions.filter(
          (submission) => submission.cluster_label === cluster.index
        );
        const styleImage = (submission) => e11({
          "image-container": true,
          "hidden": !this.exampleFiltered[submission.index]
        });
        const styleImages = o9({
          "height": this.expandCluster === cluster.index ? "auto" : "82px",
          "width": this.expandCluster === cluster.index ? "336px" : "168px"
        });
        const styleTerms = o9({
          "width": this.expandCluster === cluster.index ? "338px" : "170px"
        });
        const filteredCount = submissionsForCluster.map((submission) => this.exampleFiltered[submission.index] === true ? 1 : 0).reduce((acc, val) => acc + val, 0);
        const renderSubmissionsForCluster = submissionsForCluster.map((submission) => {
          return x2`
                <div class=${styleImage(submission)}>
                  ${submission.hasOwnProperty("image_base64") ? x2`
                      <img
                        src="data:image/jpeg;base64,${submission.image_base64}"
                        title=${submission.prompt}
                        @click=${() => this.selectedSubmissions = this.selectedSubmissions.length === 1 && this.selectedSubmissions[0] === submission ? [] : [submission]} />` : x2`
                      <div class="image-with-dominant-color"
                        style="background-color: ${submission.image_dominant_color ?? "#aaa"};"
                        @click=${() => this.selectedSubmissions = this.selectedSubmissions.length === 1 && this.selectedSubmissions[0] === submission ? [] : [submission]}>
                      </div>`}
                </div>`;
        });
        return x2`
              <li class="cluster">
                <div class="cluster-title">
                  #${index + 1} 
                  (${this.anyFiltered === true ? x2`<strong>${filteredCount}</strong> / ${cluster.count}` : x2`<strong>${cluster.count}</strong>`} images)
                  <span class="more"
                    @click=${() => this.expandCluster = this.expandCluster === cluster.index ? null : cluster.index}>
                    ${this.expandCluster === cluster.index ? "less" : "more"}
                  </span>
                </div>
                <div class="terms" style=${styleTerms}>
                  ${cluster.frequent_terms.slice(0, 5).join(", ")}
                </div>
                <div class="images" style=${styleImages}>
                  ${renderSubmissionsForCluster}
                </div>
              </li>`;
      });
      return x2`
      <div class="clusters">
        ${this.clusters.length > 0 ? x2`
            <div class="prompt-count">
              ${this.filteredSubmissions.length < this.submissions.length ? x2`${this.filteredSubmissions.length.toLocaleString()} images (of ${this.submissions.length.toLocaleString()} total)` : x2`${this.submissions.length.toLocaleString()} images total`}
            </div>
            <ul class="filter-chips">
              ${this.renderFilterChips(false)}
            </ul>
            <ul>${renderClusterList}</ul>` : "Loading..."}
      </div>`;
    }
    renderSessions() {
      if (this.dataLoaded === false) {
        return x2`Loading...`;
      }
      const filteredSessions = this.filteredSessions.slice(0, this.sessionVisibleCount);
      const areArraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) {
          return false;
        }
        arr1.sort();
        arr2.sort();
        for (let i8 = 0; i8 < arr1.length; i8++) {
          if (arr1[i8] !== arr2[i8]) {
            return false;
          }
        }
        return true;
      };
      const renderSessionList = filteredSessions.map((session) => {
        const stylePromptCell = e11({
          "prompt": true,
          "clickable": session.is_submitted_count > 0
        });
        const handleClickRow = () => {
          if (session.is_submitted_count > 0) {
            this.selectedDimensions["prompt"] = this.selectedDimensions["prompt"] === session.prompt ? null : session.prompt;
            const isSame = areArraysEqual(
              this.selectedSubmissions.map(
                (submission) => submission.image_hashed_filename
              ),
              this.submissions.filter(
                (submission) => session.image_hashed_filenames.includes(
                  submission.image_hashed_filename
                )
              ).map((submission) => submission.image_hashed_filename)
            );
            this.selectedSubmissions = isSame === true ? [] : this.submissions.filter(
              (submission) => session.image_hashed_filenames.includes(
                submission.image_hashed_filename
              )
            );
          }
        };
        return x2`
          <tr class="session">
            <td class="submitter clickable"
              title="Click to filter by this submitter"
              @click=${() => this.selectedDimensions["submitter_id"] = session.submitter_id}
            >
              ${session.submitter_id}
            </td>
            <td class=${stylePromptCell}
              @click=${handleClickRow}>
              ${session.prompt}
            </td>
            <td class="datetime">${session.start_time_formatted}</td>
            <td>
              ${session.text_safety_by_human !== void 0 && session.text_safety_by_human.includes("unsafe") ? x2`<span title="Human validators said unsafe">!</span>` : ""}
            </td>
            <td>
              ${session.text_safety_by_machine !== void 0 && session.text_safety_by_machine.includes("unsafe") ? x2`<span title="Machine validator said unsafe">!</span>` : ""}
            </td>
            <td class="count clickable"
              @click=${handleClickRow}>
              ${session.is_submitted_count > 0 ? session.is_submitted_count : ""}
            </td>
          </tr>`;
      });
      const topUnigrams = this.filteredSessions.length < this.allSessionsButConsiderOnlySubmitted.length ? this.topUnigrams : [];
      const topBigrams = this.filteredSessions.length < this.allSessionsButConsiderOnlySubmitted.length ? this.topBigrams : [];
      const handleEnteredTextChange = (e12) => {
        const enteredValue = e12.target.value;
        if (enteredValue.length === 0 || enteredValue.length > 2) {
          this.searchQuery = enteredValue;
        }
      };
      const handleChangeCheckbox = (e12) => {
        this.onlySubmitted = e12.target.checked;
      };
      return x2`
        <div class="prompt-count">
          ${this.filteredSessions.length < this.sessions.length ? x2`${this.filteredSessions.length.toLocaleString()} prompts (of ${this.sessions.length.toLocaleString()} total)` : x2`${this.sessions.length.toLocaleString()} prompts total`}
        </div>
        <ul class="filter-chips">
          ${this.renderFilterChips(true)}
        </ul>
        <div class="only-submitted-checkbox">
          <label>
            <input type="checkbox"
              @change=${handleChangeCheckbox}
              ?checked=${this.onlySubmitted} />
              Only prompts that have at least one submission
          </label>
        </div>
        <div class="search">
          Search: <input type="search"
            @input=${handleEnteredTextChange}
            .value=${this.searchQuery} />
        </div>
        ${topUnigrams.length > 0 ? x2`
            <div class="top-ngrams">
              Keywords: ${topUnigrams.join(", ")}
            </div>` : ""}
        ${topBigrams.length > 0 ? x2`
            <div class="top-ngrams">
              Bi-grams: ${topBigrams.join(", ")}
            </div>` : ""}
        <table id="sessions">
        <thead>
          <tr>
            <th>Submitter</th>
            <th>Prompt</th>
            <th>Date</th>
            <th colspan="2"
              title="Whether human or machine validators said unsafe">
              Safety
            </th>
            <th title="Number of submitted images from this prompt">#Img</th>
          </tr>
        </thead>
        <tbody>${renderSessionList}</tbody>
        </table>
        ${this.filteredSessions.length > filteredSessions.length ? x2`
            <div class="show-more"
              @click=${() => this.sessionVisibleCount += 50}>
              Show 50 more
            </div>` : ""}`;
    }
    renderFilters() {
      if (this.dataLoaded === false) {
        return x2`Loading...`;
      }
      const handleClickDimension = (dimensionName, value) => {
        if (this.selectedDimensions[dimensionName] === value) {
          this.selectedDimensions[dimensionName] = null;
        } else {
          this.selectedDimensions[dimensionName] = value;
        }
      };
      const styleRow = (dimensionName, value) => e11({
        "selected": this.selectedDimensions[dimensionName] === value
      });
      const styleContainer = (dimensionName) => e11({
        "dimension": true,
        "narrow": !["text_attack_mode", "image_failure_type", "image_failure_target"].includes(dimensionName)
      });
      return this.dimensionsForFilteredExamples.map((dimension) => {
        return x2`
        <div class=${styleContainer(dimension.field_name)}>
          <div class="filter-title">${dimension.label}</div>
          <div class="table-container">
            <table>
              ${dimension.values.filter((value) => value !== "").map((value) => {
          return x2`
                      <tr class=${styleRow(dimension.field_name, value)}
                        @click=${() => void handleClickDimension(
            dimension.field_name,
            value
          )}>
                        <td>${value}</td>
                        <td class="count">${dimension.counts[value] || 0}</td>
                      </tr>`;
        })}
            </table>
          </div>
        </div>
        `;
      });
    }
    renderDetails() {
      if (this.selectedSubmissions.length === 0) {
        return x2`Click an image from left`;
      }
      const renderSubmission = (submission) => {
        const image = submission.hasOwnProperty("image_base64") ? x2`
          <img class="image" src="data:image/jpeg;base64,${submission.image_base64}" />` : x2`
          <div class="image-with-dominant-color"
            style="background-color: ${submission.image_dominant_color};">
          </div>`;
        return x2`
          <div class="submission">
            <div>${image}</div>

            <div class="field-block">
              <div class="field-title">Submitted Prompt:</div>
              <div class="prompt-text">"${submission.prompt}"</div>
            </div>
            <div class="field-block">
              <div class="field-title">Rewritten Prompt:</div>
              <div class="prompt-text">"${submission.rewritten_prompt}"</div>
            </div>
            <div class="field-block inline">
              <div class="field-title">Text Attack Modes:</div>
              <ul>${submission.text_attack_mode.map(
          (item) => x2`<li>${item}</li>`
        )}</ul>
            </div>

            <div class="field-block inline">
              <div class="field-title">Image Failure Types:</div>
              <ul>${submission.image_failure_type.map(
          (item) => x2`<li>${item}</li>`
        )}</ul>
            </div>
            <div class="field-block inline">
            <div class="field-title">Image Failure Targets:</div>
              <ul>${submission.image_failure_target.map(
          (item) => x2`<li>${item}</li>`
        )}</ul>
            </div>
            <div class="field-block inline">
              <div class="field-title">Submitter ID:</div>
              <div>${submission.submitter_id}</div>
            </div>

            ${submission.text_safety_by_human !== void 0 ? x2`<div class="field-block inline">
                <div class="field-title">Text Safety by Human Validators:</div>
                <div>
                  ${submission.text_safety_by_human}
                  <small>(${submission.human_text_unsafe_count}/${submission.validations.length} unsafe)</small>
                </div>
              </div>` : ""}

            ${submission.text_safety_by_machine !== void 0 ? x2`<div class="field-block inline">
                <div class="field-title">Text Safety by Machine:</div>
                <div>
                  ${submission.text_safety_by_machine}
                </div>
              </div>` : ""}

            ${submission.image_safety_by_human !== void 0 ? x2`<div class="field-block inline">
                <div class="field-title">Image Safety by Human Validators:</div>
                <div>
                  ${submission.image_safety_by_human}
                  <small>(${submission.human_image_unsafe_count}/${submission.validations.length} unsafe)</small>
                </div>
              </div>` : ""}

            ${submission.image_safety_by_machine !== void 0 ? x2`<div class="field-block inline">
                <div class="field-title">Image Safety by Machine:</div>
                <div>
                  ${submission.image_safety_by_machine}
                </div>
              </div>` : ""}

            <div class="field-block" style="margin-top: 10px;">
              <div class="field-title">Similar Submitted Images:</div>
              <div class="similar-images">
                ${submission.similar_image_indices.slice(0, this.numSimilarImages).map((imageIndex) => {
          const similarSubmission = this.submissions[imageIndex];
          return similarSubmission.hasOwnProperty("image_base64") ? x2`
                          <div>
                            <img class="image-similar"
                              src="data:image/jpeg;base64,${similarSubmission.image_base64}"
                              title=${similarSubmission.prompt}
                              @click=${() => this.selectedSubmissions = [
            similarSubmission
          ]} />
                          </div>` : x2`
                          <div>
                            <div class="image-similar-with-dominant-color"
                              style="background-color: ${similarSubmission.image_dominant_color};"
                              title=${similarSubmission.prompt}
                              @click=${() => this.selectedSubmissions = [
            similarSubmission
          ]} />
                          </div>`;
        })}
              </div>
            </div>
          </div>`;
      };
      const submissions = this.selectedSubmissions;
      const renderSubmissions = submissions.map((submission) => x2`
      ${renderSubmission(submission)}`);
      return x2`${renderSubmissions}`;
    }
    render() {
      const styleSelectedDataset = (index) => e11(
        { "round-num": true, "selected-round": this.datasetIndex === index }
      );
      const renderDatasets = this.datasets.map(
        (dataset, index) => {
          return x2`
          <div class=${styleSelectedDataset(index)}>
            <a href="?datasetIndex=${index}">${dataset.label}</a>
          </div>`;
        }
      );
      return x2`
        <div id="container">
          <div id="header">
            <div class="title">
              <strong>Adversarial Nibbler</strong> Dataset Visualization
            </div>
            <div class="rounds">
              ${renderDatasets}
            </div>
            <div class="icons">
              <a href="https://github.com/PAIR-code/adversarial-nibbler-vis"
                target="_blank">
                <mwc-icon class="icon" title="Open Documentation Page">
                  help_outline
                </mwc-icon>
              </a>
            </div>
          </div>
          <div id="filters-panel">
            <div class="dimensions">
              ${this.renderFilters()}
            </div>
          </div>
          <div id="main">
            <div id="sessions-panel">
              <h2>Prompts</h2>
              ${this.renderSessions()}
            </div>
            <div id="clusters-panel">
              <h2>Image Clusters</h2>
              ${this.renderClusters()}
            </div>
            <div id="details-panel">
              <h2>Selected Image(s)</h2>
              ${this.renderDetails()}
            </div>
          </div>
        </div>`;
    }
  };
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "submissions", 2);
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "selectedSubmissions", 2);
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "sessions", 2);
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "sessionVisibleCount", 2);
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "onlySubmitted", 2);
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "searchQuery", 2);
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "clusters", 2);
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "expandCluster", 2);
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "dimensions", 2);
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "selectedDimensions", 2);
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "dataLoaded", 2);
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "datasets", 2);
  __decorateClass([
    observable
  ], NibberVisualizationAppElement.prototype, "datasetIndex", 2);
  __decorateClass([
    computed
  ], NibberVisualizationAppElement.prototype, "filteredSubmissions", 1);
  __decorateClass([
    computed
  ], NibberVisualizationAppElement.prototype, "exampleFiltered", 1);
  __decorateClass([
    computed
  ], NibberVisualizationAppElement.prototype, "anyFiltered", 1);
  __decorateClass([
    computed
  ], NibberVisualizationAppElement.prototype, "dimensionsForFilteredExamples", 1);
  __decorateClass([
    computed
  ], NibberVisualizationAppElement.prototype, "allSessionsButConsiderOnlySubmitted", 1);
  __decorateClass([
    computed
  ], NibberVisualizationAppElement.prototype, "filteredSessions", 1);
  __decorateClass([
    computed
  ], NibberVisualizationAppElement.prototype, "topUnigramsForAll", 1);
  __decorateClass([
    computed
  ], NibberVisualizationAppElement.prototype, "topUnigrams", 1);
  __decorateClass([
    computed
  ], NibberVisualizationAppElement.prototype, "topBigrams", 1);
  __decorateClass([
    computed
  ], NibberVisualizationAppElement.prototype, "filterChips", 1);
  __decorateClass([
    computed
  ], NibberVisualizationAppElement.prototype, "filterChipsWithoutPrompts", 1);
  NibberVisualizationAppElement = __decorateClass([
    t5("nibbler-vis-app")
  ], NibberVisualizationAppElement);

  // client/index.ts
  async function main() {
    j(
      x2`<nibbler-vis-app></nibbler-vis-app>`,
      document.querySelector("#app-container")
    );
  }
  main();
})();
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-icon/mwc-icon-host.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-icon/mwc-icon.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=dev_sources.concat.js.map
