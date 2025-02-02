(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8910], {
        62462: function(e, t, n) {
            "use strict";
            var a = n(52322),
                r = n(97729),
                i = n.n(r),
                o = n(86741);

            function CodeInjection(e) {
                let {
                    code: t,
                    head: n
                } = e;
                return t ? n ? (0, a.jsx)(i(), {
                    children: (0, o.ZP)(t)
                }) : (0, a.jsx)(a.Fragment, {
                    children: (0, o.ZP)(t)
                }) : null
            }
            CodeInjection.defaultProps = {
                head: !1
            }, t.Z = CodeInjection
        },
        4473: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return Navbar
                }
            });
            var a = n(52322),
                r = n(72779),
                i = n.n(r),
                o = n(2784),
                l = n(45563),
                d = n(89363),
                c = n(46494),
                s = n(25237),
                u = n.n(s),
                m = n(96577),
                h = n.n(m),
                p = n(5632),
                g = n(16119),
                f = n(62856),
                v = n(60692);
            let b = u()(() => Promise.all([n.e(480), n.e(8070), n.e(2507), n.e(5635), n.e(4455), n.e(7671), n.e(5738), n.e(9794)]).then(n.bind(n, 5738)).then(e => e.Icon), {
                    loadableGenerated: {
                        webpack: () => [5738]
                    },
                    ssr: !1
                }),
                _ = u()(() => Promise.all([n.e(480), n.e(8070), n.e(2507), n.e(5635), n.e(4455), n.e(7671), n.e(5738), n.e(9794)]).then(n.bind(n, 5738)).then(e => e.Serializer), {
                    loadableGenerated: {
                        webpack: () => [5738]
                    }
                }),
                I = (0, o.createContext)({
                    isBurgerOpen: !1,
                    setIsBurgerOpen: () => {
                        throw Error("Please wrap component around NavbarContext.Provider")
                    }
                });

            function NavbarItemWrapper(e) {
                let {
                    setIsBurgerOpen: t
                } = (0, o.useContext)(I), {
                    color: n,
                    url: r,
                    internalLink: d,
                    openInNewTab: c,
                    className: s,
                    children: u
                } = e, m = i()(s, {
                    "td-navbar-item-color-gradient": !!n && (0, l.W3)(n)
                });
                return r ? (0, a.jsx)("a", {
                    href: r,
                    target: c ? "_blank" : "_self",
                    className: m,
                    onClick: () => t(!1),
                    rel: d ? void 0 : "noreferrer",
                    children: u
                }) : (0, a.jsx)("div", {
                    className: m,
                    children: u
                })
            }

            function NavbarItemLinkOrButton(e) {
                let {
                    title: t,
                    fontFamily: n,
                    type: r,
                    color: i,
                    url: o,
                    internalLink: c,
                    openInNewTab: s,
                    children: u
                } = e, m = "button" === r ? e.background : void 0, h = i && (0, l.W3)(i), p = (0, a.jsx)("div", {
                    className: "button" === r ? "td-navbar-item-button" : "td-navbar-item-link",
                    role: "none",
                    style: {
                        color: (0, l.Tj)(i, d.lq),
                        background: "button" === r ? (0, l.Tj)(m, d.z7) : void 0,
                        fontFamily: n,
                        boxShadow: "button" === r ? "0 10px 20px -10px ".concat((0, l.Tj)(m, d.My)) : void 0
                    },
                    children: (0, a.jsx)("span", {
                        style: {
                            backgroundImage: i && h ? (0, l.Tj)(i, d.eR) : void 0
                        },
                        children: t
                    })
                });
                return (0, a.jsxs)(NavbarItemWrapper, {
                    url: o,
                    internalLink: c,
                    openInNewTab: s,
                    color: i,
                    className: "td-navbar-item",
                    children: [u, p]
                })
            }

            function NavbarItemDropdown(e) {
                let {
                    title: t,
                    fontFamily: n,
                    color: r,
                    menu: i,
                    url: c,
                    internalLink: s,
                    openInNewTab: u
                } = e, m = (0, o.useRef)(null), [p, f] = (0, o.useState)(!1);
                return (0, a.jsxs)("div", {
                    ref: m,
                    role: "none",
                    className: "td-navbar-item",
                    onClick: () => f(e => !e),
                    "data-state": p ? "open" : void 0,
                    children: [(0, a.jsx)(NavbarItemWrapper, {
                        url: c,
                        internalLink: s,
                        openInNewTab: u,
                        color: r,
                        className: "td-navbar-item-dropdown",
                        children: (0, a.jsx)("div", {
                            style: {
                                color: (0, l.Tj)(r, d.lq),
                                fontFamily: n
                            },
                            children: (0, a.jsx)("span", {
                                style: {
                                    backgroundImage: r && (0, l.W3)(r) ? (0, l.Tj)(r, d.eR) : void 0
                                },
                                children: t
                            })
                        })
                    }), (0, a.jsx)("svg", {
                        viewBox: "0 0 16 16",
                        height: "15",
                        width: "15",
                        "aria-hidden": "true",
                        focusable: "false",
                        fill: "currentColor",
                        className: "icon-chevron-down",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        })
                    }), (0, a.jsx)(g.N.Provider, {
                        value: (0, o.useMemo)(() => ({
                            navbarItemRef: m
                        }), []),
                        children: (0, a.jsx)(_, {
                            node: i,
                            optimizedImageComponent: h(),
                            isImageOptimizable: v.q,
                            rootClassName: "typedream content td-navbar-item-dropdown-menu",
                            rootStyle: {
                                width: (null == i ? void 0 : i.style) === "card" ? void 0 : "100%",
                                minHeight: (null == i ? void 0 : i.style) === "big-box" ? 0 : void 0
                            }
                        })
                    })]
                })
            }
            NavbarItemWrapper.defaultProps = {
                className: void 0
            };
            let isDropdownEmpty = e => 0 === e.children.length || 1 === e.children.length && 0 === e.children[0].children.length || "navbar_dropdown_menu_column" === e.children[0].type && 1 === e.children[0].children.length && "text" in e.children[0].children[0] && "" === e.children[0].children[0].text;

            function NavbarItem(e) {
                let {
                    title: t,
                    fontFamily: n,
                    type: r,
                    color: i,
                    url: o,
                    internalLink: l,
                    openInNewTab: d,
                    children: c
                } = e;
                return "dropdown" !== r || isDropdownEmpty(e.menu) ? (0, a.jsx)(NavbarItemLinkOrButton, {
                    type: "button" === r ? "button" : "link",
                    title: t,
                    fontFamily: n,
                    color: i,
                    background: "button" === r ? e.background : void 0,
                    url: o,
                    internalLink: l,
                    openInNewTab: d,
                    children: c
                }) : (0, a.jsx)(NavbarItemDropdown, {
                    title: t,
                    fontFamily: n,
                    color: i,
                    url: o,
                    internalLink: l,
                    openInNewTab: d,
                    menu: e.menu
                })
            }
            let T = {
                regular: "bx",
                solid: "bxs",
                logo: "bxl"
            };

            function BrandLogo(e) {
                let [t, n] = (0, o.useState)(!1);
                switch (e.logoType) {
                    case "image": {
                        let {
                            logoImage: r,
                            logoScale: i
                        } = e, o = t ? r : (0, f.default)({
                            src: r,
                            width: 384
                        });
                        return (0, a.jsx)("div", {
                            className: "td-navbar-brand-logo",
                            children: (0, a.jsx)("img", {
                                src: o,
                                style: {
                                    height: 28 * (i || 1),
                                    maxHeight: "3rem"
                                },
                                alt: "website logo",
                                onError: () => n(!0)
                            })
                        })
                    }
                    case "emoji": {
                        let {
                            logoImage: t,
                            logoScale: n
                        } = e;
                        return (0, a.jsx)("div", {
                            className: "td-navbar-brand-logo td-navbar-brand-emoji",
                            style: {
                                fontSize: "".concat(30 * (n || 1), "px")
                            },
                            children: t
                        })
                    }
                    case "icon": {
                        let {
                            logoImage: t,
                            logoScale: n
                        } = e, r = T[t.type], i = t.name;
                        return (0, a.jsx)("div", {
                            className: "td-navbar-brand-logo",
                            style: {
                                color: d.eR[t.color],
                                fontSize: "".concat(30 * (n || 1), "px")
                            },
                            children: (0, a.jsx)(b, {
                                type: r,
                                name: i
                            })
                        })
                    }
                    default:
                        return (0, a.jsx)("div", {})
                }
            }

            function Navbar(e) {
                let {
                    logoType: t,
                    logoColor: n,
                    logoFontFamily: r,
                    logoURL: l,
                    position: d,
                    style: s,
                    logoTitle: u,
                    logoOpenInNewTab: m,
                    logoURLInternalLink: h,
                    alignment: g,
                    menu: f,
                    endMenu: v,
                    isBlur: b
                } = e, _ = "" !== t ? e.logoImage : void 0, T = (0, p.useRouter)(), [N, C] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                    let handleRouteChange = () => C(!1);
                    return T.events.on("routeChangeComplete", handleRouteChange), () => {
                        T.events.off("routeChangeComplete", handleRouteChange)
                    }
                }, [T]);
                let w = (f || []).map(e => (0, a.jsx)(NavbarItem, {
                        ...e,
                        fontFamily: c.Rq[e.fontFamily]
                    }, "".concat(e.title, "-").concat(e.type))),
                    R = (v || []).map(e => (0, a.jsx)(NavbarItem, {
                        ...e,
                        fontFamily: c.Rq[e.fontFamily]
                    }, "".concat(e.title, "-").concat(e.type))),
                    y = R.length > 0 || w.length > 0;
                return (0, a.jsxs)(I.Provider, {
                    value: (0, o.useMemo)(() => ({
                        isBurgerOpen: N,
                        setIsBurgerOpen: C
                    }), [N, C]),
                    children: [(0, a.jsxs)("nav", {
                        id: "td-navbar",
                        className: i()("td-navbar", {
                            "td-navbar-container-shadow": "shadow" === s,
                            "td-navbar-container-border": "border" === s,
                            "td-navbar-container-blur": b && !N,
                            "align-start": "start" === g,
                            "align-center": "center" === g,
                            "align-end": "end" === g
                        }),
                        role: "navigation",
                        "aria-label": "main navigation",
                        style: {
                            position: d,
                            height: 60,
                            maxWidth: "100vw",
                            width: "100%"
                        },
                        children: [(0, a.jsxs)("div", {
                            className: "td-navbar-brand",
                            children: [(u || _) && (0, a.jsx)(NavbarItem, {
                                title: u || "",
                                color: n || "",
                                fontFamily: c.Rq[r],
                                type: "link",
                                url: l,
                                internalLink: h,
                                openInNewTab: m,
                                children: (0, a.jsx)(BrandLogo, {
                                    ...e
                                })
                            }, "".concat(u, "-").concat(t)), y && (0, a.jsxs)("span", {
                                role: "button",
                                className: i()("td-navbar-burger", {
                                    "is-active": N
                                }),
                                onKeyDown: () => {},
                                tabIndex: 0,
                                onClick: () => C(e => !e),
                                "aria-label": "menu",
                                "aria-expanded": N,
                                children: [(0, a.jsx)("span", {
                                    "aria-hidden": "true"
                                }), (0, a.jsx)("span", {
                                    "aria-hidden": "true"
                                }), (0, a.jsx)("span", {
                                    "aria-hidden": "true"
                                })]
                            })]
                        }), N && (0, a.jsx)("div", {
                            className: "td-navbar-mobile",
                            style: {
                                top: 60,
                                maxHeight: "fixed" === d ? "calc(100vh - ".concat(60, "px)") : void 0
                            },
                            children: [...w, ...R]
                        }), (0, a.jsx)("div", {
                            className: "td-navbar-middle",
                            children: w.length > 0 && w
                        }), (0, a.jsx)("div", {
                            className: "td-navbar-end",
                            children: R.length > 0 && R
                        })]
                    }), "fixed" === d && (0, a.jsx)("div", {
                        style: {
                            height: 60
                        }
                    })]
                })
            }
        },
        62586: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return components_Watermark
                }
            });
            var a, r, i, o, l = n(52322),
                d = n(39097),
                c = n.n(d),
                s = n(5853);
            (a = i || (i = {})).OWNER = "owner", a.ADMIN = "admin", a.WRITER = "writer", a.READER = "reader", (r = o || (o = {})).ACTIVE = "active", r.INACTIVE = "inactive";
            var u = n(91086),
                m = n.n(u),
                components_Watermark = function(e) {
                    var t;
                    let {
                        subscription: n,
                        spaceID: a,
                        pageType: r
                    } = e, i = (null == n ? void 0 : n.product_id) === s.Uw || (null == n ? void 0 : n.status) !== o.ACTIVE || (null == n ? void 0 : null === (t = n.metadata) || void 0 === t ? void 0 : t.affiliate), d = (null == n ? void 0 : n.product_id) === s.c8;
                    return "link_in_bio" === r && (i || d) ? (0, l.jsx)("div", {
                        className: m().watermarkDumplink,
                        children: (0, l.jsx)(c(), {
                            href: "https://typedream.com/linkinbio?utm_source=link-watermark:".concat(a),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, l.jsx)("img", {
                                className: m().watermarkDumplinkImage,
                                src: "/watermark-typedream.png",
                                alt: "Made in ".concat(s.i5)
                            })
                        })
                    }) : i ? (0, l.jsx)(c(), {
                        href: "".concat(s.og, "?utm_source=watermark:").concat(a),
                        target: "_new",
                        className: m().watermarkTypedream,
                        children: ""
                    }) : null
                }
        },
        5853: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fh: function() {
                    return I
                },
                HY: function() {
                    return o
                },
                L0: function() {
                    return l
                },
                OH: function() {
                    return _
                },
                PJ: function() {
                    return i
                },
                Si: function() {
                    return b
                },
                U5: function() {
                    return c
                },
                Uw: function() {
                    return g
                },
                Yu: function() {
                    return p
                },
                Yw: function() {
                    return d
                },
                bG: function() {
                    return r
                },
                c8: function() {
                    return f
                },
                gE: function() {
                    return u
                },
                i5: function() {
                    return s
                },
                it: function() {
                    return v
                },
                oQ: function() {
                    return m
                },
                og: function() {
                    return h
                }
            });
            var a = n(34406);
            let r = "https://api.typedream.com/v0",
                i = "https://analytics.typedream.com";
            a.env.NEXT_PUBLIC_EDITOR_DOMAIN;
            let o = a.env.NEXT_PUBLIC_LINK_IN_BIO_DOMAIN || "dumpl.ink";
            a.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY;
            let l = "SUBDOMAIN",
                d = "pk_live_51ILPa6KqrvH8BszmcFBTxrjxZYpFFDrqDTi0b3VdhnTE7vQvPmi9rrb7KPRqMNbU0MBAhnjqdu6aSEbWHwZ85rs000ou3c3rPR",
                c = "AUSeqvKsNkzbR5sF6S6LPSR7a-NfeAxqynSprytSCbvVFZxnZtV-WRGxvmx5gF_5FAhn2jftO-KUiRoK",
                s = "Typedream",
                u = "@typedreamHQ",
                m = "/images/logo@100.png",
                h = "https://typedream.com",
                p = "A website made with Typedream.",
                g = "FREE",
                f = a.env.NEXT_PUBLIC_SPACE_PLAN_MINI_PRODUCT_ID,
                v = "id",
                b = "ITEM_PAGE_URL",
                _ = {
                    METADATA: {
                        fieldName: "".concat("TD", ":metadata"),
                        label: "Metadata",
                        description: "For SEO Settings, Twitter cards, etc.",
                        type: "rich_text"
                    },
                    SLUG: {
                        fieldName: "".concat("TD", ":slug"),
                        label: "Slug",
                        description: "To specify the URL for each item",
                        type: "rich_text"
                    },
                    PUBLISHED_CONTENT: {
                        fieldName: "TD:page_content_published",
                        label: "Page Content",
                        description: "To store your page's published rich text content",
                        type: "rich_text"
                    },
                    CONTENT: {
                        fieldName: "TD:page_content",
                        label: "Page Content Draft",
                        description: "To store your page's draft rich text content",
                        type: "rich_text"
                    }
                },
                I = "typedream_theme"
        },
        75269: function(e, t, n) {
            "use strict";
            var a = n(9669),
                r = n.n(a),
                i = n(5853);
            t.Z = class {
                mergeHeaders(e, t) {
                    return {
                        ...e,
                        ...t,
                        headers: {
                            ...null == e ? void 0 : e.headers,
                            ...(null == t ? void 0 : t.headers) || {}
                        }
                    }
                }
                async get(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        headers: {}
                    };
                    return r().get("".concat(this.api).concat(e), this.mergeHeaders({
                        headers: {}
                    }, t))
                }
                async post(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        headers: {}
                    };
                    return r().post("".concat(this.api).concat(e), t, this.mergeHeaders({
                        headers: {}
                    }, n))
                }
                async put(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        headers: {}
                    };
                    return r().put("".concat(this.api).concat(e), t, this.mergeHeaders({
                        headers: {}
                    }, n))
                }
                async patch(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        headers: {}
                    };
                    return r().patch("".concat(this.api).concat(e), t, this.mergeHeaders({
                        headers: {}
                    }, n))
                }
                async delete(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        headers: {}
                    };
                    return r().delete("".concat(this.api).concat(e), this.mergeHeaders({
                        headers: {}
                    }, t))
                }
                constructor() {
                    this.api = i.bG, this.config = {}
                }
            }
        },
        2225: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return ui_ThemeToggler
                }
            });
            var a = n(52322),
                r = n(2784),
                i = n(5853);
            let toggleTheme = () => {
                    let e = document.querySelector("html"),
                        t = (null == e ? void 0 : e.getAttribute("data-theme")) || "light",
                        n = "light" === t ? "dark" : "light";
                    null == e || e.setAttribute("data-theme", n), localStorage.setItem(i.Fh, n)
                },
                syncWithUserPreferredTheme = () => {
                    let e = document.querySelector("html"),
                        t = localStorage.getItem(i.Fh);
                    t && (null == e || e.setAttribute("data-theme", t))
                };
            var o = n(47597),
                l = n.n(o);

            function MoonIcon() {
                return (0, a.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    height: "32",
                    width: "32",
                    fill: "currentColor",
                    className: l().moon,
                    children: (0, a.jsx)("path", {
                        d: "M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z"
                    })
                })
            }

            function SunIcon() {
                return (0, a.jsx)("svg", {
                    viewBox: "0 0 20 20",
                    height: "32",
                    width: "32",
                    fill: "currentColor",
                    className: l().sun,
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm4 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-.464 4.95.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 1.414zm2.12-10.607a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM17 11a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2h1zm-7 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM5.05 6.464A1 1 0 1 0 6.465 5.05l-.708-.707a1 1 0 0 0-1.414 1.414l.707.707zm1.414 8.486-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414zM4 11a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1z",
                        clipRule: "evenodd"
                    })
                })
            }
            var ui_ThemeToggler = function() {
                return (0, r.useEffect)(syncWithUserPreferredTheme, []), (0, a.jsxs)("button", {
                    type: "button",
                    className: l().switch,
                    onClick: toggleTheme,
                    tabIndex: -1,
                    children: [(0, a.jsx)(SunIcon, {}), (0, a.jsx)(MoonIcon, {})]
                })
            }
        },
        62856: function(e, t, n) {
            "use strict";
            n.r(t);
            let a = JSON.parse('{"path":"https://image.typedream.com","loader":"custom","loaderFile":"./utils/imageLoader.ts","imageSizes":[16,32,48,64,96,128,256,384],"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"domains":["staging-api.typedream.com","api.typedream.com","typedream.sfo3.digitaloceanspaces.com","typedream-assets.sfo3.digitaloceanspaces.com"],"formats":["image/avif","image/webp"],"minimumCacheTTL":31536000}'),
                r = null == a ? void 0 : a.domains,
                i = !!(null == a ? void 0 : a.dangerouslyAllowSVG),
                o = null == a ? void 0 : a.deviceSizes,
                l = null == a ? void 0 : a.imageSizes,
                d = [...o || [], ...l || []];
            d.sort((e, t) => e - t);
            let c = (null == a ? void 0 : a.path) || "/_next/image",
                normalizeSrc = e => e.startsWith("/") ? e.slice(1) : e;
            t.default = e => {
                let {
                    src: t,
                    width: n,
                    quality: a
                } = e;
                if (!t) return;
                if (t.startsWith("//") || t.endsWith(".svg") && !i) return t;
                if (!t.startsWith("/") && r) try {
                    let e = new URL(t);
                    if (!(null == r ? void 0 : r.includes(e.hostname)) || e.pathname.endsWith(".svg") && !i) return t
                } catch (e) {
                    return t
                }
                if (t.startsWith("/")) return t;
                let o = n && d.find(e => e >= n) || d[d.length - 1],
                    l = ["width=".concat(o), "format=auto", "fit=scale-down"];
                a ? l.push("quality=".concat(a)) : l.push("quality=85");
                let s = l.join(",");
                return "".concat(c, "/cdn-cgi/image/").concat(s, "/").concat(normalizeSrc(t))
            }
        },
        60692: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return isImageOptimizable
                }
            });
            let a = JSON.parse('{"path":"https://image.typedream.com","loader":"custom","loaderFile":"./utils/imageLoader.ts","imageSizes":[16,32,48,64,96,128,256,384],"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"domains":["staging-api.typedream.com","api.typedream.com","typedream.sfo3.digitaloceanspaces.com","typedream-assets.sfo3.digitaloceanspaces.com"],"formats":["image/avif","image/webp"],"minimumCacheTTL":31536000}'),
                isImageOptimizable = e => {
                    if (!e) return !1;
                    let t = !1;
                    try {
                        var n;
                        t = !!(null == a ? void 0 : null === (n = a.domains) || void 0 === n ? void 0 : n.some(t => t === new URL(e).hostname))
                    } catch (e) {}
                    return t
                }
        },
        16119: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return r
                }
            });
            var a = n(2784);
            let r = (0, a.createContext)({
                navbarItemRef: {
                    current: null
                }
            })
        },
        89363: function(e, t, n) {
            "use strict";
            n.d(t, {
                MR: function() {
                    return l
                },
                My: function() {
                    return o
                },
                Tk: function() {
                    return s
                },
                XI: function() {
                    return r
                },
                d_: function() {
                    return u
                },
                eR: function() {
                    return d
                },
                lq: function() {
                    return c
                },
                z7: function() {
                    return i
                }
            });
            let a = {
                    accent: "#5E5DF0",
                    text_on_accent: "#ffffff"
                },
                r = {
                    unicorn: "linear-gradient(135deg, #FFCC33 0%, #E233FF 100%)",
                    nebula: "linear-gradient(135deg, #6699FF 0%, #FF3366 100%)",
                    water: "linear-gradient(135deg, #2F80ED 0%, #B2FFDA 100%)",
                    candy: "linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)",
                    melon: "linear-gradient(135deg, #D6FF7F 0%, #00B3CC 100%)"
                },
                i = {
                    ...a,
                    default: "var(--background)",
                    gray: "var(--background-highlight)",
                    orange: "#FA9E34",
                    yellow: "#F7CC5C",
                    green: "#23CFA4",
                    blue: "#06C1FF",
                    indigo: "#6968F7",
                    purple: "#8A24FF",
                    pink: "#F54B94",
                    red: "#F32E60",
                    black: "#000000",
                    white: "#ffffff",
                    ...r
                },
                o = {
                    accent: "var(--shadow-color-accent)",
                    text_on_accent: "#ffffff",
                    default: "var(--shadow-modal-color)",
                    gray: "var(--background-highlight)",
                    orange: "var(--shadow-color-orange)",
                    yellow: "var(--shadow-color-yellow)",
                    green: "var(--shadow-color-green)",
                    blue: "var(--shadow-color-blue)",
                    indigo: "var(--shadow-color-indigo)",
                    purple: "var(--shadow-color-purple)",
                    pink: "var(--shadow-color-pink)",
                    red: "var(--shadow-color-red)",
                    black: "var(--shadow-color-black)",
                    white: "var(--shadow-color-white)",
                    unicorn: "var(--shadow-color-unicorn)",
                    nebula: "var(--shadow-color-nebula)",
                    water: "var(--shadow-color-water)",
                    candy: "var(--shadow-color-candy)",
                    melon: "var(--shadow-color-melon)"
                },
                l = {
                    default: "var(--text-sharp)",
                    gray: "var(--text-light)",
                    orange: "#FA9E34",
                    yellow: "#F7CC5C",
                    green: "#23CFA4",
                    blue: "#06C1FF",
                    indigo: "#6968F7",
                    purple: "#8A24FF",
                    pink: "#F54B94",
                    red: "#F32E60",
                    black: "#000000",
                    white: "#ffffff"
                },
                d = {
                    ...a,
                    ...l,
                    ...r
                },
                c = {
                    ...a,
                    ...l,
                    unicorn: "#F18099",
                    nebula: "#B664B0",
                    water: "#67B7E5",
                    candy: "#9D8EEE",
                    melon: "#5CD4AC"
                },
                s = "accent",
                u = "text_on_accent"
        },
        46494: function(e, t, n) {
            "use strict";
            n.d(t, {
                Rq: function() {
                    return a
                }
            });
            let a = {
                inter: "Inter",
                libre_caslon_text: "Libre Caslon Text",
                space_mono: "Space Mono",
                quicksand: "Quicksand"
            }
        },
        45563: function(e, t, n) {
            "use strict";
            n.d(t, {
                K_: function() {
                    return isHexColor
                },
                Tj: function() {
                    return computeColor
                },
                W3: function() {
                    return isColorGradient
                }
            });
            var a = n(89363);
            let isHexColor = e => /^#(([0-9A-Fa-f]{2}){3,4}|[0-9A-Fa-f]{3,4})$/.test(e),
                isValidColor = e => {
                    {
                        let t = new Option().style;
                        return (null == e ? void 0 : e.includes("-gradient")) ? (t.backgroundImage = e, "" !== t.backgroundImage) : (t.color = e, "" !== t.color)
                    }
                },
                computeColor = (e, t, n) => e ? (null == t ? void 0 : t[e]) || (isValidColor(e) ? e : void 0) : n,
                isColorGradient = e => Object.keys(a.XI).includes(e) || (null == e ? void 0 : e.includes("-gradient"))
        },
        64090: function(e, t, n) {
            "use strict";
            var a, r, i, o, l, d, c, s, u, m, h, p, g, f, v, b, _, I, T, N, C, w;
            n.d(t, {
                F: function() {
                    return p
                },
                Lb: function() {
                    return a
                },
                nD: function() {
                    return i
                },
                td: function() {
                    return c
                },
                vr: function() {
                    return o
                }
            }), (g = a || (a = {})).FREE = "free", g.MINI = "mini", g.LAUNCH = "launch", g.PRO = "pro", g.LAUNCH_15_20 = "launch_15_20", g.GROW = "grow", g.EMAIL_ADDON = "email_addon", (f = r || (r = {})).ACTIVE = "active", f.INACTIVE = "inactive", (v = i || (i = {})).InviteMember = "InviteMember", v.RemoveMember = "RemoveMember", v.ViewMembers = "ViewMembers", v.TransferOwnership = "TransferOwnership", v.UpdatePermissions = "UpdatePermissions", v.UpdateSettings = "UpdateSettings", v.UpdateCustomDomain = "UpdateCustomDomain", v.UpdateSubdomain = "UpdateSubdomain", v.ReadSettings = "ReadSettings", v.ReadBilling = "ReadBilling", v.UpdateBilling = "UpdateBilling", v.DeleteSpace = "DeleteSpace", v.CreatePage = "CreatePage", v.EditContent = "EditContent", v.ReadDraft = "ReadDraft", v.ReadPublishedContent = "ReadPublishedContent", v.ReadPageInfo = "ReadPageInfo", v.CreateLock = "CreateLock", v.PublishUnlimitedPages = "PublishUnlimitedPages", v.PromoteToOwner = "PromoteToOwner", v.UpdateMetadata = "UpdateMetadata", v.UpdateCustomization = "UpdateCustomization", v.UpdateAffiliate = "UpdateAffiliate", v.UpdateAnalytics = "UpdateAnalytics", v.ReadBasicAnalytics = "ReadBasicAnalytics", v.ReadAdvancedAnalytics = "ReadAdvancedAnalytics", v.Collection = "Collection", v.EmailCollectionCard = "EmailCollectionCard", v.LinkInBioAppearance = "LinkInBioAppearance", v.SendEmail = "SendEmail", (b = o || (o = {})).OWNER = "owner", b.ADMIN = "admin", b.WRITER = "writer", b.READER = "reader", (_ = l || (l = {})).FORM = "form", _.PAGE = "page", _.SECTION = "section", _.MOBILE_SECTION = "mobile_section", _.BLOG_PAGE = "blog_page", _.AI_SECTION = "ai_section", _.AI_PACK = "ai_pack", (I = d || (d = {})).TYPEDREAM_CMS = "td_cms", I.AIRTABLE = "airtable", I.NOTION = "notion", I.STRIPE = "stripe", I.PAYPAL = "paypal", I.OPENAI = "openai", (T = c || (c = {})).MAX_ITEMS = "max_items", T.FILTER_COLUMN = "filter_column", T.FILTER_COLUMN_TYPE = "filter_column_type", T.FILTER_CONDITION = "filter_condition", T.FILTER_VALUE = "filter_value", T.SORT_COLUMN = "sort_column", T.SORT_DIRECTION = "sort_direction", T.SEARCH_COLUMNS = "search_columns", T.SHOW_SEARCH_BAR = "show_search_bar", T.VISITOR_FILTER_COLUMN = "visitor_filter_column", T.VISITOR_FILTER_STYLE = "visitor_filter_style", T.VISITOR_FILTER_COLOR = "visitor_filter_color", T.VISITOR_FILTER_COLUMN_TYPE = "visitor_filter_column_type", (s || (s = {})).FILES = "files", (u || (u = {})).DIGITAL_DOWNLOAD = "digital_download", (N = m || (m = {})).HERO = "hero", N.CLIENTS = "clients", N.EVENTS = "events", N.FEATURES = "features", N.PRICING = "pricing", N.CALL_TO_ACTION = "call_to_action", N.FOOTER = "footer", N.SHOP = "shop", N.COLLECTION = "collection", (C = h || (h = {})).HERO = "hero", C.HIGHLIGHTS = "highlights", C.LINKS = "links", (w = p || (p = {})).AED = "aed", w.AFN = "afn", w.ALL = "all", w.AMD = "amd", w.ANG = "ang", w.AOA = "aoa", w.ARS = "ars", w.AUD = "aud", w.AWG = "awg", w.AZN = "azn", w.BAM = "bam", w.BBD = "bbd", w.BDT = "bdt", w.BGN = "bgn", w.BHD = "bhd", w.BIF = "bif", w.BMD = "bmd", w.BND = "bnd", w.BOB = "bob", w.BRL = "brl", w.BSD = "bsd", w.BWP = "bwp", w.BYN = "byn", w.BZD = "bzd", w.CAD = "cad", w.CDF = "cdf", w.CHF = "chf", w.CLP = "clp", w.CNY = "cny", w.COP = "cop", w.CRC = "crc", w.CVE = "cve", w.CZK = "czk", w.DJF = "djf", w.DKK = "dkk", w.DOP = "dop", w.DZD = "dzd", w.EGP = "egp", w.ETB = "etb", w.EUR = "eur", w.FJD = "fjd", w.FKP = "fkp", w.GBP = "gbp", w.GEL = "gel", w.GIP = "gip", w.GMD = "gmd", w.GNF = "gnf", w.GTQ = "gtq", w.GYD = "gyd", w.HKD = "hkd", w.HNL = "hnl", w.HTG = "htg", w.HUF = "huf", w.IDR = "idr", w.ILS = "ils", w.INR = "inr", w.JMD = "jmd", w.JOD = "jod", w.JPY = "jpy", w.KES = "kes", w.KGS = "kgs", w.KHR = "khr", w.KMF = "kmf", w.KRW = "krw", w.KYD = "kyd", w.KZT = "kzt", w.KWD = "kwd", w.LAK = "lak", w.LBP = "lbp", w.LKR = "lkr", w.LRD = "lrd", w.LSL = "lsl", w.MAD = "mad", w.MDL = "mdl", w.MGA = "mga", w.MKD = "mkd", w.MMK = "mmk", w.MNT = "mnt", w.MOP = "mop", w.MRO = "mro", w.MUR = "mur", w.MVR = "mvr", w.MWK = "mwk", w.MXN = "mxn", w.MYR = "myr", w.MZN = "mzn", w.NAD = "nad", w.NGN = "ngn", w.NIO = "nio", w.NOK = "nok", w.NPR = "npr", w.NZD = "nzd", w.OMR = "omr", w.PAB = "pab", w.PEN = "pen", w.PGK = "pgk", w.PHP = "php", w.PKR = "pkr", w.PLN = "pln", w.PYG = "pyg", w.QAR = "qar", w.RON = "ron", w.RSD = "rsd", w.RUB = "rub", w.RWF = "rwf", w.SAR = "sar", w.SBD = "sbd", w.SCR = "scr", w.SEK = "sek", w.SGD = "sgd", w.SHP = "shp", w.SLE = "sle", w.SOS = "sos", w.SRD = "srd", w.STD = "std", w.SZL = "szl", w.THB = "thb", w.TJS = "tjs", w.TND = "tnd", w.TOP = "top", w.TRY = "try", w.TTD = "ttd", w.TZS = "tzs", w.UAH = "uah", w.USD = "usd", w.UYU = "uyu", w.UZS = "uzs", w.VND = "vnd", w.VUV = "vuv", w.WST = "wst", w.XAF = "xaf", w.XCD = "xcd", w.XOF = "xof", w.XPF = "xpf", w.YER = "yer", w.ZAR = "zar", w.ZMW = "zmw"
        },
        91086: function(e) {
            e.exports = {
                watermarkTypedream: "Watermark_watermarkTypedream__lVuFv",
                watermarkDumplink: "Watermark_watermarkDumplink__Q2c0U",
                watermarkDumplinkImage: "Watermark_watermarkDumplinkImage__Qrzr2"
            }
        },
        47597: function(e) {
            e.exports = {
                switch: "ThemeToggler_switch__tvM6S",
                icon: "ThemeToggler_icon__V7Vg8",
                sun: "ThemeToggler_sun__KYXV5 ThemeToggler_icon__V7Vg8",
                moon: "ThemeToggler_moon__CeIMq ThemeToggler_icon__V7Vg8"
            }
        }
    }
]);