$(document).ready(function () {
	"use strict";
    setTimeout(function () {
        $("body").addClass("loaded");
    }, 5);
}),
    $(document).ready(function () {
        "use strict";
        $(window).width();
        var e = window.innerHeight,
            t = $(".default-header").height(),
            i = ($(".site-header.static").outerHeight(), e - t);
        if (
            ($(".fullscreen").css("height", e),
            $(".fitscreen").css("height", i),
            document.getElementById("default-select") && $("select").niceSelect(),
            document.getElementById("service-select") && $("select").niceSelect(),
            $(".img-gal").magnificPopup({ type: "image", gallery: { enabled: !0 } }),
            (window.removeFakeCaptcha = function () {
                document.querySelector(".captcha-fake-field").remove();
            }),
            $(".play-btn").magnificPopup({ type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
            $(".active-work-slider").owlCarousel({ stagePadding: 160, center: !0, items: 1, loop: !0, nav: !0, margin: 10, responsive: { 0: { items: 1 }, 634: { items: 1 }, 1000: { items: 1 } } }),
            $(".owl-prev").html('<span class="lnr lnr-arrow-left"></span>'),
            $(".owl-next").html('<span class="lnr lnr-arrow-right"></span>'),
            $(".active-work-slider2").owlCarousel({ loop: !0, items: 1, margin: 10 }),
            $(".counter").counterUp({ delay: 10, time: 1e3 }),
            
            $(".nav-menu").superfish({ animation: { opacity: "show" }, speed: 400 }),
            $("#nav-menu-container").length)
        ) {
            var n = $("#nav-menu-container").clone().prop({ id: "mobile-nav" });
            n.find("> ul").attr({ class: "", id: "" }),
                $("body").append(n),
                $("body").prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>'),
                $("body").append('<div id="mobile-body-overly"></div>'),
                        
                $(document).on("click", "#mobile-nav-toggle", function (e) {
                    $("body").toggleClass("mobile-nav-active"), $("#mobile-nav-toggle i").toggleClass("lnr-cross lnr-menu"), $("#mobile-body-overly").toggle();
                }),
                $(document).click(function (e) {
                    var t = $("#mobile-nav, #mobile-nav-toggle");
                    t.is(e.target) ||
                        0 !== t.has(e.target).length ||
                        ($("body").hasClass("mobile-nav-active") && ($("body").removeClass("mobile-nav-active"), $("#mobile-nav-toggle i").toggleClass("lnr-cross lnr-menu"), $("#mobile-body-overly").fadeOut()));
                });
        } else $("#mobile-nav, #mobile-nav-toggle").length && $("#mobile-nav, #mobile-nav-toggle").hide();
		
		
		
        $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function () {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var e = $(this.hash);
                if (e.length) {
                    var t = 0;
                    return (
                        $("#header").length && ((t = $("#header").outerHeight()), $("#header").hasClass("header-fixed") || (t = t)),
                        $("html, body").animate({ scrollTop: e.offset().top - t }, 1500, "easeInOutExpo"),
                        $(this).parents(".nav-menu").length && ($(".nav-menu .menu-active").removeClass("menu-active"), $(this).closest("li").addClass("menu-active")),
                        $("body").hasClass("mobile-nav-active") && ($("body").removeClass("mobile-nav-active"), $("#mobile-nav-toggle i").toggleClass("lnr-times lnr-bars"), $("#mobile-body-overly").fadeOut()),
                        !1
                    );
                }
            }
        });
        $(window).scroll(function () {
            $(this).scrollTop() > 100 ? $("#header").addClass("header-scrolled") : $("#header").removeClass("header-scrolled");
        }),
            $(function () {
                $(".animate-box").waypoint(
                    function (e) {
                        "down" !== e ||
                            $(this.element).hasClass("animated-fast") ||
                            ($(this.element).addClass("item-animate"),
                            setTimeout(function () {
                                $("body .animate-box.item-animate").each(function (e) {
                                    var t = $(this);
                                    setTimeout(
                                        function () {
                                            var e = t.data("animate-effect");
                                            "fadeIn" === e
                                                ? t.addClass("fadeIn animated-fast")
                                                : "fadeInLeft" === e
                                                ? t.addClass("fadeInLeft animated-fast")
                                                : "fadeInRight" === e
                                                ? t.addClass("fadeInRight animated-fast")
                                                : t.addClass("fadeInUp animated-fast"),
                                                t.removeClass("item-animate");
                                        },
                                        50 * e,
                                        "easeInOutExpo"
                                    );
                                });
                            }, 50));
                    },
                    { offset: "85%" }
                );
            });
    }),
    (function (e, t) {
        var i, n;
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define(t)
            : ((e = e || self),
              (i = e.Cookies),
              ((n = e.Cookies = t()).noConflict = function () {
                  return (e.Cookies = i), n;
              }));
    })(this, function () {
        "use strict";
        var e = {
            read: function (e) {
                return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
            },
            write: function (e) {
                return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
            },
        };
        function t(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) e[n] = i[n];
            }
            return e;
        }
        return (function i(n, r) {
            function o(e, i, o) {
                if ("undefined" != typeof document) {
                    "number" == typeof (o = t({}, r, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)),
                        o.expires && (o.expires = o.expires.toUTCString()),
                        (i = n.write(i, e)),
                        (e = encodeURIComponent(e)
                            .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[()]/g, escape));
                    var a = "";
                    for (var s in o) o[s] && ((a += "; " + s), !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
                    return (document.cookie = e + "=" + i + a);
                }
            }
            return Object.create(
                {
                    set: o,
                    get: function (t) {
                        if ("undefined" != typeof document && (!arguments.length || t)) {
                            for (var i = document.cookie ? document.cookie.split("; ") : [], r = {}, o = 0; o < i.length; o++) {
                                var a = i[o].split("="),
                                    s = a.slice(1).join("=");
                                '"' === s[0] && (s = s.slice(1, -1));
                                try {
                                    var l = e.read(a[0]);
                                    if (((r[l] = n.read(s, l)), t === l)) break;
                                } catch (e) {}
                            }
                            return t ? r[t] : r;
                        }
                    },
                    remove: function (e, i) {
                        o(e, "", t({}, i, { expires: -1 }));
                    },
                    withAttributes: function (e) {
                        return i(this.converter, t({}, this.attributes, e));
                    },
                    withConverter: function (e) {
                        return i(t({}, this.converter, e), this.attributes);
                    },
                },
                { attributes: { value: Object.freeze(r) }, converter: { value: Object.freeze(n) } }
            );
        })(e, { path: "/" });
    });

var DarkMode = !1; //
function toggleDarkMode() {
    var e = document.getElementById("darkButton");
    document.body.classList.toggle("dark-mode"), (DarkMode = !DarkMode), e.classList.toggle("lightButton"), console.log(DarkMode), DarkMode ? (Cookies.set("Darkmode", "An"), (document.getElementById("darkButton").innerHTML = "&#9789;")) : (Cookies.remove("Darkmode"), (document.getElementById("darkButton").innerHTML = "&#9788;"));
}

var DarkCookie = Cookies.get("Darkmode");

function filterSelection(e) {
	"use strict";
    var t, i;
    for (t = document.getElementsByClassName("filterDiv"), "all" == e && (e = ""), i = 0; i < t.length; i++) w3RemoveClass(t[i], "show"), t[i].className.indexOf(e) > -1 && w3AddClass(t[i], "show");
}
function w3AddClass(e, t) {
    var i, n, r;
    for (n = e.className.split(" "), r = t.split(" "), i = 0; i < r.length; i++) -1 == n.indexOf(r[i]) && (e.className += " " + r[i]);
}
function w3RemoveClass(e, t) {
    var i, n, r;
    for (n = e.className.split(" "), r = t.split(" "), i = 0; i < r.length; i++) for (; n.indexOf(r[i]) > -1; ) n.splice(n.indexOf(r[i]), 1);
    e.className = n.join(" ");
}
"An" == DarkCookie && ((CookieDarkMode = !0), (Darkmode = !0), toggleDarkMode()), filterSelection("all");
for (var btnContainer = document.getElementById("myBtnContainer"), btns = btnContainer.getElementsByClassName("btn"), i = 0; i < btns.length; i++)
    btns[i].addEventListener("click", function () {
        var e = document.getElementsByClassName("active");
        (e[0].className = e[0].className.replace(" active", "")), (this.className += " active");
    });
	
var acc = document.getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++)
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var e = this.nextElementSibling;
        e.style.maxHeight ? (e.style.maxHeight = null) : (e.style.maxHeight = e.scrollHeight + "px");
    });
!(function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.hoverIntent && e(jQuery);
})(function (e) {
    "use strict";
    var t,
        i,
        n = { interval: 100, sensitivity: 6, timeout: 0 },
        r = 0,
        o = function (e) {
            (t = e.pageX), (i = e.pageY);
        },
        a = function (e, n, r, s) {
            if (Math.sqrt((r.pX - t) * (r.pX - t) + (r.pY - i) * (r.pY - i)) < s.sensitivity) return n.off(r.event, o), delete r.timeoutId, (r.isActive = !0), (e.pageX = t), (e.pageY = i), delete r.pX, delete r.pY, s.over.apply(n[0], [e]);
            (r.pX = t),
                (r.pY = i),
                (r.timeoutId = setTimeout(function () {
                    a(e, n, r, s);
                }, s.interval));
        };
    e.fn.hoverIntent = function (t, i, s) {
        var l = r++,
            c = e.extend({}, n);
        e.isPlainObject(t) ? ((c = e.extend(c, t)), e.isFunction(c.out) || (c.out = c.over)) : (c = e.isFunction(i) ? e.extend(c, { over: t, out: i, selector: s }) : e.extend(c, { over: t, out: t, selector: i }));
        var f = function (t) {
            var i = e.extend({}, t),
                n = e(this),
                r = n.data("hoverIntent");
            r || n.data("hoverIntent", (r = {}));
            var s = r[l];
            s || (r[l] = s = { id: l }), s.timeoutId && (s.timeoutId = clearTimeout(s.timeoutId));
            var f = (s.event = "mousemove.hoverIntent.hoverIntent" + l);
            if ("mouseenter" === t.type) {
                if (s.isActive) return;
                (s.pX = i.pageX),
                    (s.pY = i.pageY),
                    n.off(f, o).on(f, o),
                    (s.timeoutId = setTimeout(function () {
                        a(i, n, s, c);
                    }, c.interval));
            } else {
                if (!s.isActive) return;
                n.off(f, o),
                    (s.timeoutId = setTimeout(function () {
                        !(function (e, t, i, n) {
                            delete t.data("hoverIntent")[i.id], n.apply(t[0], [e]);
                        })(i, n, s, c.out);
                    }, c.timeout));
            }
        };
        return this.on({ "mouseenter.hoverIntent": f, "mouseleave.hoverIntent": f }, c.selector);
    };
}),
    (function (e) {
        function t(t, r, o, a, s) {
            function l() {
                h.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd"),
                    r && i(r, o, a, s),
                    (s.startOrder = []),
                    (s.newOrder = []),
                    (s.origSort = []),
                    (s.checkSort = []),
                    u
                        .removeStyle(s.prefix + "filter, filter, " + s.prefix + "transform, transform, opacity, display")
                        .css(s.clean)
                        .removeAttr("data-checksum"),
                    window.atob || u.css({ display: "none", opacity: "0" }),
                    h.removeStyle(s.prefix + "transition, transition, " + s.prefix + "perspective, perspective, " + s.prefix + "perspective-origin, perspective-origin, " + (s.resizeContainer ? "height" : "")),
                    "list" == s.layoutMode ? (m.css({ display: s.targetDisplayList, opacity: "1" }), (s.origDisplay = s.targetDisplayList)) : (m.css({ display: s.targetDisplayGrid, opacity: "1" }), (s.origDisplay = s.targetDisplayGrid)),
                    (s.origLayout = s.layoutMode),
                    setTimeout(function () {
                        if ((u.removeStyle(s.prefix + "transition, transition"), (s.mixing = !1), "function" == typeof s.onMixEnd)) {
                            var e = s.onMixEnd.call(this, s);
                            s = e || s;
                        }
                    });
            }
            if ((clearInterval(s.failsafe), (s.mixing = !0), (s.filter = t), "function" == typeof s.onMixStart)) {
                var c = s.onMixStart.call(this, s);
                s = c || s;
            }
            var f = s.transitionSpeed;
            for (c = 0; 2 > c; c++) {
                var d = 0 == c ? (d = s.prefix) : "";
                (s.transition[d + "transition"] = "all " + f + "ms linear"),
                    (s.transition[d + "transform"] = d + "translate3d(0,0,0)"),
                    (s.perspective[d + "perspective"] = s.perspectiveDistance + "px"),
                    (s.perspective[d + "perspective-origin"] = s.perspectiveOrigin);
            }
            var p = s.targetSelector,
                u = a.find(p);
            u.each(function () {
                this.data = {};
            });
            var h = u.parent();
            h.css(s.perspective),
                (s.easingFallback = "ease-in-out"),
                "smooth" == s.easing && (s.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)"),
                "snap" == s.easing && (s.easing = "cubic-bezier(0.77, 0, 0.175, 1)"),
                "windback" == s.easing && ((s.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)"), (s.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)")),
                "windup" == s.easing && ((s.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)"), (s.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)")),
                (c = "list" == s.layoutMode && null != s.listEffects ? s.listEffects : s.effects),
                Array.prototype.indexOf &&
                    ((s.fade = -1 < c.indexOf("fade") ? "0" : ""),
                    (s.scale = -1 < c.indexOf("scale") ? "scale(.01)" : ""),
                    (s.rotateZ = -1 < c.indexOf("rotateZ") ? "rotate(180deg)" : ""),
                    (s.rotateY = -1 < c.indexOf("rotateY") ? "rotateY(90deg)" : ""),
                    (s.rotateX = -1 < c.indexOf("rotateX") ? "rotateX(90deg)" : ""),
                    (s.blur = -1 < c.indexOf("blur") ? "blur(8px)" : ""),
                    (s.grayscale = -1 < c.indexOf("grayscale") ? "grayscale(100%)" : ""));
            
			var m = e(),
                g = e(),
                v = [],
                y = !1;
            "string" == typeof t
                ? (v = n(t))
                : ((y = !0),
                  e.each(t, function (e) {
                      v[e] = n(this);
                  })),
                "or" == s.filterLogic
                    ? ("" == v[0] && v.shift(),
                      1 > v.length
                          ? (g = g.add(a.find(p + ":visible")))
                          : u.each(function () {
                                var t = e(this);
                                if (y) {
                                    var i = 0;
                                    e.each(v, function () {
                                        this.length ? t.is("." + this.join(", .")) && i++ : 0 < i && i++;
                                    }),
                                        i == v.length ? (m = m.add(t)) : (g = g.add(t));
                                } else t.is("." + v.join(", .")) ? (m = m.add(t)) : (g = g.add(t));
                            }))
                    : ((m = m.add(h.find(p + "." + v.join(".")))), (g = g.add(h.find(p + ":not(." + v.join(".") + "):visible")))),
                (t = m.length);
            var b = e(),
                w = e(),
                x = e();
            if (
                (g.each(function () {
                    var t = e(this);
                    "none" != t.css("display") && ((b = b.add(t)), (x = x.add(t)));
                }),
                m.filter(":visible").length == t && !b.length && !r)
            ) {
                if (s.origLayout == s.layoutMode) return l(), !1;
                if (1 == m.length)
                    return (
                        "list" == s.layoutMode ? (a.addClass(s.listClass), a.removeClass(s.gridClass), x.css("display", s.targetDisplayList)) : (a.addClass(s.gridClass), a.removeClass(s.listClass), x.css("display", s.targetDisplayGrid)),
                        l(),
                        !1
                    );
            }
            if (((s.origHeight = h.height()), m.length)) {
                if (
                    (a.removeClass(s.failClass),
                    m.each(function () {
                        var t = e(this);
                        "none" == t.css("display") ? (w = w.add(t)) : (x = x.add(t));
                    }),
                    s.origLayout != s.layoutMode && 0 == s.animateGridList)
                )
                    return (
                        "list" == s.layoutMode ? (a.addClass(s.listClass), a.removeClass(s.gridClass), x.css("display", s.targetDisplayList)) : (a.addClass(s.gridClass), a.removeClass(s.listClass), x.css("display", s.targetDisplayGrid)),
                        l(),
                        !1
                    );
                if (!window.atob) return l(), !1;
                if (
                    (u.css(s.clean),
                    x.each(function () {
                        this.data.origPos = e(this).offset();
                    }),
                    "list" == s.layoutMode ? (a.addClass(s.listClass), a.removeClass(s.gridClass), w.css("display", s.targetDisplayList)) : (a.addClass(s.gridClass), a.removeClass(s.listClass), w.css("display", s.targetDisplayGrid)),
                    w.each(function () {
                        this.data.showInterPos = e(this).offset();
                    }),
                    b.each(function () {
                        this.data.hideInterPos = e(this).offset();
                    }),
                    x.each(function () {
                        this.data.preInterPos = e(this).offset();
                    }),
                    "list" == s.layoutMode ? x.css("display", s.targetDisplayList) : x.css("display", s.targetDisplayGrid),
                    r && i(r, o, a, s),
                    (t = r))
                )
                    e: if (((t = s.origSort), (c = s.checkSort), t.length != c.length)) t = !1;
                    else {
                        for (d = 0; d < c.length; d++)
                            if ((t[d].compare && !t[d].compare(c[d])) || t[d] !== c[d]) {
                                t = !1;
                                break e;
                            }
                        t = !0;
                    }
                if (t) return l(), !1;
                for (
                    b.hide(),
                        w.each(function () {
                            this.data.finalPos = e(this).offset();
                        }),
                        x.each(function () {
                            this.data.finalPrePos = e(this).offset();
                        }),
                        s.newHeight = h.height(),
                        r && i("reset", null, a, s),
                        w.hide(),
                        x.css("display", s.origDisplay),
                        "block" == s.origDisplay ? (a.addClass(s.listClass), w.css("display", s.targetDisplayList)) : (a.removeClass(s.listClass), w.css("display", s.targetDisplayGrid)),
                        s.resizeContainer && h.css("height", s.origHeight + "px"),
                        t = {},
                        c = 0;
                    2 > c;
                    c++
                )
                    (t[(d = 0 == c ? (d = s.prefix) : "") + "transform"] = s.scale + " " + s.rotateX + " " + s.rotateY + " " + s.rotateZ), (t[d + "filter"] = s.blur + " " + s.grayscale);
                w.css(t),
                    x.each(function () {
                        var t = this.data,
                            i = e(this);
                        i.hasClass("mix_tohide")
                            ? ((t.preTX = t.origPos.left - t.hideInterPos.left), (t.preTY = t.origPos.top - t.hideInterPos.top))
                            : ((t.preTX = t.origPos.left - t.preInterPos.left), (t.preTY = t.origPos.top - t.preInterPos.top));
                        for (var n = {}, r = 0; 2 > r; r++) {
                            var o = 0 == r ? (o = s.prefix) : "";
                            n[o + "transform"] = "translate(" + t.preTX + "px," + t.preTY + "px)";
                        }
                        i.css(n);
                    }),
                    "list" == s.layoutMode ? (a.addClass(s.listClass), a.removeClass(s.gridClass)) : (a.addClass(s.gridClass), a.removeClass(s.listClass)),
                    setTimeout(function () {
                        if (s.resizeContainer) {
                            for (var t = {}, i = 0; 2 > i; i++) {
                                var n = 0 == i ? (n = s.prefix) : "";
                                (t[n + "transition"] = "all " + f + "ms ease-in-out"), (t.height = s.newHeight + "px");
                            }
                            h.css(t);
                        }
                        for (
                            b.css("opacity", s.fade),
                                w.css("opacity", 1),
                                w.each(function () {
                                    var t = this.data;
                                    (t.tX = t.finalPos.left - t.showInterPos.left), (t.tY = t.finalPos.top - t.showInterPos.top);
                                    for (var i = {}, n = 0; 2 > n; n++) {
                                        var r = 0 == n ? (r = s.prefix) : "";
                                        (i[r + "transition-property"] = r + "transform, " + r + "filter, opacity"),
                                            (i[r + "transition-timing-function"] = s.easing + ", linear, linear"),
                                            (i[r + "transition-duration"] = f + "ms"),
                                            (i[r + "transition-delay"] = "0"),
                                            (i[r + "transform"] = "translate(" + t.tX + "px," + t.tY + "px)"),
                                            (i[r + "filter"] = "none");
                                    }
                                    e(this)
                                        .css("-webkit-transition", "all " + f + "ms " + s.easingFallback)
                                        .css(i);
                                }),
                                x.each(function () {
                                    var t = this.data;
                                    (t.tX = 0 != t.finalPrePos.left ? t.finalPrePos.left - t.preInterPos.left : 0), (t.tY = 0 != t.finalPrePos.left ? t.finalPrePos.top - t.preInterPos.top : 0);
                                    for (var i = {}, n = 0; 2 > n; n++) {
                                        var r = 0 == n ? (r = s.prefix) : "";
                                        (i[r + "transition"] = "all " + f + "ms " + s.easing), (i[r + "transform"] = "translate(" + t.tX + "px," + t.tY + "px)");
                                    }
                                    e(this)
                                        .css("-webkit-transition", "all " + f + "ms " + s.easingFallback)
                                        .css(i);
                                }),
                                t = {},
                                i = 0;
                            2 > i;
                            i++
                        )
                            (t[(n = 0 == i ? (n = s.prefix) : "") + "transition"] = "all " + f + "ms " + s.easing + ", " + n + "filter " + f + "ms linear, opacity " + f + "ms linear"),
                                (t[n + "transform"] = s.scale + " " + s.rotateX + " " + s.rotateY + " " + s.rotateZ),
                                (t[n + "filter"] = s.blur + " " + s.grayscale),
                                (t.opacity = s.fade);
                        b.css(t),
                            h.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function (t) {
                                (-1 < t.originalEvent.propertyName.indexOf("transform") || -1 < t.originalEvent.propertyName.indexOf("opacity")) &&
                                    (-1 < p.indexOf(".") ? e(t.target).hasClass(p.replace(".", "")) && l() : e(t.target).is(p) && l());
                            });
                    }, 10),
                    (s.failsafe = setTimeout(function () {
                        s.mixing && l();
                    }, f + 400));
            } else {
                if ((s.resizeContainer && h.css("height", s.origHeight + "px"), !window.atob)) return l(), !1;
                (b = g),
                    setTimeout(function () {
                        if ((h.css(s.perspective), s.resizeContainer)) {
                            for (var e = {}, t = 0; 2 > t; t++) {
                                var i = 0 == t ? (i = s.prefix) : "";
                                (e[i + "transition"] = "height " + f + "ms ease-in-out"), (e.height = s.minHeight + "px");
                            }
                            h.css(e);
                        }
                        if ((u.css(s.transition), g.length)) {
                            for (e = {}, t = 0; 2 > t; t++)
                                (e[(i = 0 == t ? (i = s.prefix) : "") + "transform"] = s.scale + " " + s.rotateX + " " + s.rotateY + " " + s.rotateZ), (e[i + "filter"] = s.blur + " " + s.grayscale), (e.opacity = s.fade);
                            b.css(e),
                                h.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function (e) {
                                    (-1 < e.originalEvent.propertyName.indexOf("transform") || -1 < e.originalEvent.propertyName.indexOf("opacity")) && (a.addClass(s.failClass), l());
                                });
                        } else s.mixing = !1;
                    }, 10);
            }
        }
		
        function i(t, i, n, r) {
            function o(e) {
                "asc" == i ? a.prepend(e).prepend(" ") : a.append(e).append(" ");
            }
            n.find(r.targetSelector).wrapAll('<div class="mix_sorter"/>');
            var a = n.find(".mix_sorter");
            if (
                (r.origSort.length ||
                    a.find(r.targetSelector + ":visible").each(function () {
                        e(this).wrap("<s/>"), r.origSort.push(e(this).parent().html().replace(/\s+/g, "")), e(this).unwrap();
                    }),
                a.empty(),
                "reset" == t)
            )
                e.each(r.startOrder, function () {
                    a.append(this).append(" ");
                });
            else if ("default" == t)
                e.each(r.origOrder, function () {
                    o(this);
                });
            else if ("random" == t) {
                if (!r.newOrder.length) {
                    for (var s = r.startOrder.slice(), l = s.length, c = l; c--; ) {
                        var f = parseInt(Math.random() * l),
                            d = s[c];
                        (s[c] = s[f]), (s[f] = d);
                    }
                    r.newOrder = s;
                }
                e.each(r.newOrder, function () {
                    a.append(this).append(" ");
                });
            } else if ("custom" == t)
                e.each(i, function () {
                    o(this);
                });
            else {
                if (void 0 === r.origOrder[0].attr(t)) return console.log("No such attribute found. Terminating"), !1;
                r.newOrder.length ||
                    (e.each(r.origOrder, function () {
                        r.newOrder.push(e(this));
                    }),
                    r.newOrder.sort(function (e, i) {
                        var n = isNaN(1 * e.attr(t)) ? e.attr(t).toLowerCase() : 1 * e.attr(t),
                            r = isNaN(1 * i.attr(t)) ? i.attr(t).toLowerCase() : 1 * i.attr(t);
                        return n < r ? -1 : n > r ? 1 : 0;
                    })),
                    e.each(r.newOrder, function () {
                        o(this);
                    });
            }
            (r.checkSort = []),
                a.find(r.targetSelector + ":visible").each(function (t) {
                    var i = e(this);
                    0 == t && i.attr("data-checksum", "1"), i.wrap("<s/>"), r.checkSort.push(i.parent().html().replace(/\s+/g, "")), i.unwrap();
                }),
                n.find(r.targetSelector).unwrap();
        }
        function n(t) {
            var i = (t = t.replace(/\s{2,}/g, " ")).split(" ");
            return (
                e.each(i, function (e) {
                    "all" == this && (i[e] = "mix_all");
                }),
                "" == i[0] && i.shift(),
                i
            );
        }
        var r = {
            init: function (n) {
                return this.each(function () {
                    var r = {
                        targetSelector: ".mix",
                        filterSelector: ".filter",
                        sortSelector: ".sort",
                        buttonEvent: "click",
                        effects: ["fade", "scale"],
                        listEffects: null,
                        easing: "smooth",
                        layoutMode: "grid",
                        targetDisplayGrid: "inline-block",
                        targetDisplayList: "block",
                        listClass: "",
                        gridClass: "",
                        transitionSpeed: 600,
                        showOnLoad: "all",
                        sortOnLoad: !1,
                        multiFilter: !1,
                        filterLogic: "or",
                        resizeContainer: !0,
                        minHeight: 0,
                        failClass: "fail",
                        perspectiveDistance: "3000",
                        perspectiveOrigin: "50% 50%",
                        animateGridList: !0,
                        onMixLoad: null,
                        onMixStart: null,
                        onMixEnd: null,
                        container: null,
                        origOrder: [],
                        startOrder: [],
                        newOrder: [],
                        origSort: [],
                        checkSort: [],
                        filter: "",
                        mixing: !1,
                        origDisplay: "",
                        origLayout: "",
                        origHeight: 0,
                        newHeight: 0,
                        isTouch: !1,
                        resetDelay: 0,
                        failsafe: null,
                        prefix: "",
                        easingFallback: "ease-in-out",
                        transition: {},
                        perspective: {},
                        clean: {},
                        fade: "1",
                        scale: "",
                        rotateX: "",
                        rotateY: "",
                        rotateZ: "",
                        blur: "",
                        grayscale: "",
                    };
                    n && e.extend(r, n), (this.config = r), (e.support.touch = "ontouchend" in document), e.support.touch && ((r.isTouch = !0), (r.resetDelay = 350)), (r.container = e(this));
                    var o,
                        a,
                        s = r.container;
                    e: {
                        o = s[0];
                        for (var l = ["Webkit", "Moz", "O", "ms"], c = 0; c < l.length; c++)
                            if (l[c] + "Transition" in o.style) {
                                o = l[c];
                                break e;
                            }
                        o = "transition" in o.style && "";
                    }
                    ((r.prefix = o),
                    (r.prefix = r.prefix ? "-" + r.prefix.toLowerCase() + "-" : ""),
                    s.find(r.targetSelector).each(function () {
                        r.origOrder.push(e(this));
                    }),
                    r.sortOnLoad) &&
                        (e.isArray(r.sortOnLoad)
                            ? ((o = r.sortOnLoad[0]), (a = r.sortOnLoad[1]), e(r.sortSelector + "[data-sort=" + r.sortOnLoad[0] + "][data-order=" + r.sortOnLoad[1] + "]").addClass("active"))
                            : (e(r.sortSelector + "[data-sort=" + r.sortOnLoad + "]").addClass("active"), (o = r.sortOnLoad), (r.sortOnLoad = "desc")),
                        i(o, a, s, r));
                    for (a = 0; 2 > a; a++)
                        (o = 0 == a ? (o = r.prefix) : ""),
                            (r.transition[o + "transition"] = "all " + r.transitionSpeed + "ms ease-in-out"),
                            (r.perspective[o + "perspective"] = r.perspectiveDistance + "px"),
                            (r.perspective[o + "perspective-origin"] = r.perspectiveOrigin);
                    for (a = 0; 2 > a; a++) (o = 0 == a ? (o = r.prefix) : ""), (r.clean[o + "transition"] = "none");
                    "list" == r.layoutMode ? (s.addClass(r.listClass), (r.origDisplay = r.targetDisplayList)) : (s.addClass(r.gridClass), (r.origDisplay = r.targetDisplayGrid)),
                        (r.origLayout = r.layoutMode),
                        (a = r.showOnLoad.split(" ")),
                        e.each(a, function () {
                            e(r.filterSelector + '[data-filter="' + this + '"]').addClass("active");
                        }),
                        s.find(r.targetSelector).addClass("mix_all"),
                        "all" == a[0] && ((a[0] = "mix_all"), (r.showOnLoad = "mix_all"));
                    var f = e();
                    e.each(a, function () {
                        f = f.add(e("." + this));
                    }),
                        f.each(function () {
                            var t = e(this);
                            "list" == r.layoutMode ? t.css("display", r.targetDisplayList) : t.css("display", r.targetDisplayGrid), t.css(r.transition);
                        }),
                        setTimeout(function () {
                            (r.mixing = !0),
                                f.css("opacity", "1"),
                                setTimeout(function () {
                                    if (
                                        ("list" == r.layoutMode
                                            ? f.removeStyle(r.prefix + "transition, transition").css({ display: r.targetDisplayList, opacity: 1 })
                                            : f.removeStyle(r.prefix + "transition, transition").css({ display: r.targetDisplayGrid, opacity: 1 }),
                                        (r.mixing = !1),
                                        "function" == typeof r.onMixLoad)
                                    ) {
                                        var e = r.onMixLoad.call(this, r);
                                        r = e || r;
                                    }
                                }, r.transitionSpeed);
                        }, 10),
                        (r.filter = r.showOnLoad),
                        e(r.sortSelector).bind(r.buttonEvent, function () {
                            if (!r.mixing) {
                                var i = e(this),
                                    n = i.attr("data-sort"),
                                    o = i.attr("data-order");
                                if (i.hasClass("active")) {
                                    if ("random" != n) return !1;
                                } else e(r.sortSelector).removeClass("active"), i.addClass("active");
                                s.find(r.targetSelector).each(function () {
                                    r.startOrder.push(e(this));
                                }),
                                    t(r.filter, n, o, s, r);
                            }
                        }),
                        e(r.filterSelector).bind(r.buttonEvent, function () {
                            if (!r.mixing) {
                                var i = e(this);
                                if (0 == r.multiFilter) e(r.filterSelector).removeClass("active"), i.addClass("active"), (r.filter = i.attr("data-filter")), e(r.filterSelector + '[data-filter="' + r.filter + '"]').addClass("active");
                                else {
                                    var n = i.attr("data-filter");
                                    i.hasClass("active") ? (i.removeClass("active"), (r.filter = r.filter.replace(RegExp("(\\s|^)" + n), ""))) : (i.addClass("active"), (r.filter = r.filter + " " + n));
                                }
                                t(r.filter, null, null, s, r);
                            }
                        });
                });
            },
            toGrid: function () {
                return this.each(function () {
                    var i = this.config;
                    "grid" != i.layoutMode && ((i.layoutMode = "grid"), t(i.filter, null, null, e(this), i));
                });
            },
            toList: function () {
                return this.each(function () {
                    var i = this.config;
                    "list" != i.layoutMode && ((i.layoutMode = "list"), t(i.filter, null, null, e(this), i));
                });
            },
            filter: function (i) {
                return this.each(function () {
                    var n = this.config;
                    n.mixing || (e(n.filterSelector).removeClass("active"), e(n.filterSelector + '[data-filter="' + i + '"]').addClass("active"), t(i, null, null, e(this), n));
                });
            },
            sort: function (i) {
                return this.each(function () {
                    var n = this.config,
                        r = e(this);
                    if (!n.mixing) {
                        if ((e(n.sortSelector).removeClass("active"), e.isArray(i))) {
                            var o = i[0],
                                a = i[1];
                            e(n.sortSelector + '[data-sort="' + i[0] + '"][data-order="' + i[1] + '"]').addClass("active");
                        } else e(n.sortSelector + '[data-sort="' + i + '"]').addClass("active"), (o = i), (a = "desc");
                        r.find(n.targetSelector).each(function () {
                            n.startOrder.push(e(this));
                        }),
                            t(n.filter, o, a, r, n);
                    }
                });
            },
            multimix: function (i) {
                return this.each(function () {
                    var n = this.config,
                        r = e(this);
                    (multiOut = { filter: n.filter, sort: null, order: "desc", layoutMode: n.layoutMode }),
                        e.extend(multiOut, i),
                        n.mixing ||
                            (e(n.filterSelector).add(n.sortSelector).removeClass("active"),
                            e(n.filterSelector + '[data-filter="' + multiOut.filter + '"]').addClass("active"),
                            void 0 !== multiOut.sort &&
                                (e(n.sortSelector + '[data-sort="' + multiOut.sort + '"][data-order="' + multiOut.order + '"]').addClass("active"),
                                r.find(n.targetSelector).each(function () {
                                    n.startOrder.push(e(this));
                                })),
                            (n.layoutMode = multiOut.layoutMode),
                            t(multiOut.filter, multiOut.sort, multiOut.order, r, n));
                });
            },
            remix: function (i) {
                return this.each(function () {
                    var n = this.config,
                        r = e(this);
                    (n.origOrder = []),
                        r.find(n.targetSelector).each(function () {
                            var t = e(this);
                            t.addClass("mix_all"), n.origOrder.push(t);
                        }),
                        !n.mixing && void 0 !== i && (e(n.filterSelector).removeClass("active"), e(n.filterSelector + '[data-filter="' + i + '"]').addClass("active"), t(i, null, null, r, n));
                });
            },
        };
        (e.fn.mixitup = function (e, t) {
            return r[e] ? r[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void 0 : r.init.apply(this, arguments);
        }),
            (e.fn.removeStyle = function (t) {
                return this.each(function () {
                    var i = e(this),
                        n = (t = t.replace(/\s+/g, "")).split(",");
                    e.each(n, function () {
                        var e = RegExp(this.toString() + "[^;]+;?", "g");
                        i.attr("style", function (t, i) {
                            if (i) return i.replace(e, "");
                        });
                    });
                });
            });
    })(jQuery),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Popper = t());
    })(this, function () {
        "use strict";
        function e(e) {
            return e && "[object Function]" === {}.toString.call(e);
        }
        function t(e, t) {
            if (1 !== e.nodeType) return [];
            var i = getComputedStyle(e, null);
            return t ? i[t] : i;
        }
        function i(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function n(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body;
            }
            var r = t(e),
                o = r.overflow,
                a = r.overflowX,
                s = r.overflowY;
            return /(auto|scroll)/.test(o + s + a) ? e : n(i(e));
        }
        function r(e) {
            var i = e && e.offsetParent,
                n = i && i.nodeName;
            return n && "BODY" !== n && "HTML" !== n ? (-1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? r(i) : i) : e ? e.ownerDocument.documentElement : document.documentElement;
        }
        function o(e) {
            return null === e.parentNode ? e : o(e.parentNode);
        }
        function a(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                n = i ? e : t,
                s = i ? t : e,
                l = document.createRange();
            l.setStart(n, 0), l.setEnd(s, 0);
            var c = l.commonAncestorContainer;
            if ((e !== c && t !== c) || n.contains(s))
                return (function (e) {
                    var t = e.nodeName;
                    return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e);
                })(c)
                    ? c
                    : r(c);
            var f = o(e);
            return f.host ? a(f.host, t) : a(e, o(t).host);
        }
        function s(e) {
            var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                i = e.nodeName;
            if ("BODY" === i || "HTML" === i) {
                var n = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || n)[t];
            }
            return e[t];
        }
        function l(e, t) {
            var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                n = s(t, "top"),
                r = s(t, "left"),
                o = i ? -1 : 1;
            return (e.top += n * o), (e.bottom += n * o), (e.left += r * o), (e.right += r * o), e;
        }
        function c(e, t) {
            var i = "x" === t ? "Left" : "Top",
                n = "Left" == i ? "Right" : "Bottom";
            return parseFloat(e["border" + i + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10);
        }
        function f(e, t, i, n) {
            return F(t["offset" + e], t["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], G() ? i["offset" + e] + n["margin" + ("Height" === e ? "Top" : "Left")] + n["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
        }
        function d() {
            var e = document.body,
                t = document.documentElement,
                i = G() && getComputedStyle(t);
            return { height: f("Height", e, t, i), width: f("Width", e, t, i) };
        }
        function p(e) {
            return Z({}, e, { right: e.left + e.width, bottom: e.top + e.height });
        }
        function u(e) {
            var i = {};
            if (G())
                try {
                    i = e.getBoundingClientRect();
                    var n = s(e, "top"),
                        r = s(e, "left");
                    (i.top += n), (i.left += r), (i.bottom += n), (i.right += r);
                } catch (e) {}
            else i = e.getBoundingClientRect();
            var o = { left: i.left, top: i.top, width: i.right - i.left, height: i.bottom - i.top },
                a = "HTML" === e.nodeName ? d() : {},
                l = a.width || e.clientWidth || o.right - o.left,
                f = a.height || e.clientHeight || o.bottom - o.top,
                u = e.offsetWidth - l,
                h = e.offsetHeight - f;
            if (u || h) {
                var m = t(e);
                (u -= c(m, "x")), (h -= c(m, "y")), (o.width -= u), (o.height -= h);
            }
            return p(o);
        }
        function h(e, i) {
            var r = G(),
                o = "HTML" === i.nodeName,
                a = u(e),
                s = u(i),
                c = n(e),
                f = t(i),
                d = parseFloat(f.borderTopWidth, 10),
                h = parseFloat(f.borderLeftWidth, 10),
                m = p({ top: a.top - s.top - d, left: a.left - s.left - h, width: a.width, height: a.height });
            if (((m.marginTop = 0), (m.marginLeft = 0), !r && o)) {
                var g = parseFloat(f.marginTop, 10),
                    v = parseFloat(f.marginLeft, 10);
                (m.top -= d - g), (m.bottom -= d - g), (m.left -= h - v), (m.right -= h - v), (m.marginTop = g), (m.marginLeft = v);
            }
            return (r ? i.contains(c) : i === c && "BODY" !== c.nodeName) && (m = l(m, i)), m;
        }
        function m(e) {
            var t = e.ownerDocument.documentElement,
                i = h(e, t),
                n = F(t.clientWidth, window.innerWidth || 0),
                r = F(t.clientHeight, window.innerHeight || 0),
                o = s(t),
                a = s(t, "left");
            return p({ top: o - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: n, height: r });
        }
        function g(e) {
            var n = e.nodeName;
            return "BODY" !== n && "HTML" !== n && ("fixed" === t(e, "position") || g(i(e)));
        }
        function v(e, t, r, o) {
            var s = { top: 0, left: 0 },
                l = a(e, t);
            if ("viewport" === o) s = m(l);
            else {
                var c;
                "scrollParent" === o ? "BODY" === (c = n(i(t))).nodeName && (c = e.ownerDocument.documentElement) : (c = "window" === o ? e.ownerDocument.documentElement : o);
                var f = h(c, l);
                if ("HTML" !== c.nodeName || g(l)) s = f;
                else {
                    var p = d(),
                        u = p.height,
                        v = p.width;
                    (s.top += f.top - f.marginTop), (s.bottom = u + f.top), (s.left += f.left - f.marginLeft), (s.right = v + f.left);
                }
            }
            return (s.left += r), (s.top += r), (s.right -= r), (s.bottom -= r), s;
        }
        function y(e) {
            return e.width * e.height;
        }
        function b(e, t, i, n, r) {
            var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var a = v(i, n, o, r),
                s = { top: { width: a.width, height: t.top - a.top }, right: { width: a.right - t.right, height: a.height }, bottom: { width: a.width, height: a.bottom - t.bottom }, left: { width: t.left - a.left, height: a.height } },
                l = Object.keys(s)
                    .map(function (e) {
                        return Z({ key: e }, s[e], { area: y(s[e]) });
                    })
                    .sort(function (e, t) {
                        return t.area - e.area;
                    }),
                c = l.filter(function (e) {
                    var t = e.width,
                        n = e.height;
                    return t >= i.clientWidth && n >= i.clientHeight;
                }),
                f = 0 < c.length ? c[0].key : l[0].key,
                d = e.split("-")[1];
            return f + (d ? "-" + d : "");
        }
        function w(e, t, i) {
            return h(i, a(t, i));
        }
        function x(e) {
            var t = getComputedStyle(e),
                i = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                n = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
            return { width: e.offsetWidth + n, height: e.offsetHeight + i };
        }
        function C(e) {
            var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e];
            });
        }
        function O(e, t, i) {
            i = i.split("-")[0];
            var n = x(e),
                r = { width: n.width, height: n.height },
                o = -1 !== ["right", "left"].indexOf(i),
                a = o ? "top" : "left",
                s = o ? "left" : "top",
                l = o ? "height" : "width",
                c = o ? "width" : "height";
            return (r[a] = t[a] + t[l] / 2 - n[l] / 2), (r[s] = i === s ? t[s] - n[c] : t[C(s)]), r;
        }
        function k(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function E(t, i, n) {
            return (
                (void 0 === n
                    ? t
                    : t.slice(
                          0,
                          (function (e, t, i) {
                              if (Array.prototype.findIndex)
                                  return e.findIndex(function (e) {
                                      return e[t] === i;
                                  });
                              var n = k(e, function (e) {
                                  return e[t] === i;
                              });
                              return e.indexOf(n);
                          })(t, "name", n)
                      )
                ).forEach(function (t) {
                    t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = t.function || t.fn;
                    t.enabled && e(n) && ((i.offsets.popper = p(i.offsets.popper)), (i.offsets.reference = p(i.offsets.reference)), (i = n(i, t)));
                }),
                i
            );
        }
        function L(e, t) {
            return e.some(function (e) {
                var i = e.name;
                return e.enabled && i === t;
            });
        }
        function D(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
                var r = t[n],
                    o = r ? "" + r + i : e;
                if (void 0 !== document.body.style[o]) return o;
            }
            return null;
        }
        function S(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window;
        }
        function $(e, t, i, r) {
            (i.updateBound = r), S(e).addEventListener("resize", i.updateBound, { passive: !0 });
            var o = n(e);
            return (
                (function e(t, i, r, o) {
                    var a = "BODY" === t.nodeName,
                        s = a ? t.ownerDocument.defaultView : t;
                    s.addEventListener(i, r, { passive: !0 }), a || e(n(s.parentNode), i, r, o), o.push(s);
                })(o, "scroll", i.updateBound, i.scrollParents),
                (i.scrollElement = o),
                (i.eventsEnabled = !0),
                i
            );
        }
        function T() {
            var e, t;
            this.state.eventsEnabled &&
                (cancelAnimationFrame(this.scheduleUpdate),
                (this.state =
                    ((e = this.reference),
                    (t = this.state),
                    S(e).removeEventListener("resize", t.updateBound),
                    t.scrollParents.forEach(function (e) {
                        e.removeEventListener("scroll", t.updateBound);
                    }),
                    (t.updateBound = null),
                    (t.scrollParents = []),
                    (t.scrollElement = null),
                    (t.eventsEnabled = !1),
                    t)));
        }
        function M(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function I(e, t) {
            Object.keys(t).forEach(function (i) {
                var n = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && M(t[i]) && (n = "px"), (e.style[i] = t[i] + n);
            });
        }
        function P(e, t, i) {
            var n = k(e, function (e) {
                    return e.name === t;
                }),
                r =
                    !!n &&
                    e.some(function (e) {
                        return e.name === i && e.enabled && e.order < n.order;
                    });
            if (!r) {
                var o = "`" + t + "`";
                console.warn("`" + i + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
            }
            return r;
        }
        function N(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                i = V.indexOf(e),
                n = V.slice(i + 1).concat(V.slice(0, i));
            return t ? n.reverse() : n;
        }
        function B(e, t, i, n) {
            var r = [0, 0],
                o = -1 !== ["right", "left"].indexOf(n),
                a = e.split(/(\+|\-)/).map(function (e) {
                    return e.trim();
                }),
                s = a.indexOf(
                    k(a, function (e) {
                        return -1 !== e.search(/,|\s/);
                    })
                );
            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
            return (
                (c = c.map(function (e, n) {
                    var r = (1 === n ? !o : o) ? "height" : "width",
                        a = !1;
                    return e
                        .reduce(function (e, t) {
                            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (a = !0), e) : a ? ((e[e.length - 1] += t), (a = !1), e) : e.concat(t);
                        }, [])
                        .map(function (e) {
                            return (function (e, t, i, n) {
                                var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    o = +r[1],
                                    a = r[2];
                                if (!o) return e;
                                if (0 === a.indexOf("%")) {
                                    var s;
                                    switch (a) {
                                        case "%p":
                                            s = i;
                                            break;
                                        case "%":
                                        case "%r":
                                        default:
                                            s = n;
                                    }
                                    return (p(s)[t] / 100) * o;
                                }
                                return "vh" === a || "vw" === a ? (("vh" === a ? F(document.documentElement.clientHeight, window.innerHeight || 0) : F(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * o : o;
                            })(e, r, t, i);
                        });
                })).forEach(function (e, t) {
                    e.forEach(function (i, n) {
                        M(i) && (r[t] += i * ("-" === e[n - 1] ? -1 : 1));
                    });
                }),
                r
            );
        }
        for (var H = Math.min, A = Math.floor, F = Math.max, j = "undefined" != typeof window && "undefined" != typeof document, Y = ["Edge", "Trident", "Firefox"], X = 0, R = 0; R < Y.length; R += 1)
            if (j && 0 <= navigator.userAgent.indexOf(Y[R])) {
                X = 1;
                break;
            }
        var W,
            z =
                j && window.Promise
                    ? function (e) {
                          var t = !1;
                          return function () {
                              t ||
                                  ((t = !0),
                                  window.Promise.resolve().then(function () {
                                      (t = !1), e();
                                  }));
                          };
                      }
                    : function (e) {
                          var t = !1;
                          return function () {
                              t ||
                                  ((t = !0),
                                  setTimeout(function () {
                                      (t = !1), e();
                                  }, X));
                          };
                      },
            G = function () {
                return null == W && (W = -1 !== navigator.appVersion.indexOf("MSIE 10")), W;
            },
            U = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            },
            _ = (function () {
                function e(e, t) {
                    for (var i, n = 0; n < t.length; n++) ((i = t[n]).enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t;
                };
            })(),
            q = function (e, t, i) {
                return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
            },
            Z =
                Object.assign ||
                function (e) {
                    for (var t, i = 1; i < arguments.length; i++) for (var n in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e;
                },
            Q = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            V = Q.slice(3),
            J = "flip",
            K = "clockwise",
            ee = "counterclockwise",
            te = (function () {
                function t(i, n) {
                    var r = this,
                        o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    U(this, t),
                        (this.scheduleUpdate = function () {
                            return requestAnimationFrame(r.update);
                        }),
                        (this.update = z(this.update.bind(this))),
                        (this.options = Z({}, t.Defaults, o)),
                        (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                        (this.reference = i && i.jquery ? i[0] : i),
                        (this.popper = n && n.jquery ? n[0] : n),
                        (this.options.modifiers = {}),
                        Object.keys(Z({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
                            r.options.modifiers[e] = Z({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
                        }),
                        (this.modifiers = Object.keys(this.options.modifiers)
                            .map(function (e) {
                                return Z({ name: e }, r.options.modifiers[e]);
                            })
                            .sort(function (e, t) {
                                return e.order - t.order;
                            })),
                        this.modifiers.forEach(function (t) {
                            t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state);
                        }),
                        this.update();
                    var a = this.options.eventsEnabled;
                    a && this.enableEventListeners(), (this.state.eventsEnabled = a);
                }
                return (
                    _(t, [
                        {
                            key: "update",
                            value: function () {
                                return function () {
                                    if (!this.state.isDestroyed) {
                                        var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                                        (e.offsets.reference = w(this.state, this.popper, this.reference)),
                                            (e.placement = b(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                                            (e.originalPlacement = e.placement),
                                            (e.offsets.popper = O(this.popper, e.offsets.reference, e.placement)),
                                            (e.offsets.popper.position = "absolute"),
                                            (e = E(this.modifiers, e)),
                                            this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
                                    }
                                }.call(this);
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                return function () {
                                    return (
                                        (this.state.isDestroyed = !0),
                                        L(this.modifiers, "applyStyle") &&
                                            (this.popper.removeAttribute("x-placement"), (this.popper.style.left = ""), (this.popper.style.position = ""), (this.popper.style.top = ""), (this.popper.style[D("transform")] = "")),
                                        this.disableEventListeners(),
                                        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                                        this
                                    );
                                }.call(this);
                            },
                        },
                        {
                            key: "enableEventListeners",
                            value: function () {
                                return function () {
                                    this.state.eventsEnabled || (this.state = $(this.reference, this.options, this.state, this.scheduleUpdate));
                                }.call(this);
                            },
                        },
                        {
                            key: "disableEventListeners",
                            value: function () {
                                return T.call(this);
                            },
                        },
                    ]),
                    t
                );
            })();
        return (
            (te.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
            (te.placements = Q),
            (te.Defaults = {
                placement: "bottom",
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () {},
                onUpdate: function () {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.placement,
                                i = t.split("-")[0],
                                n = t.split("-")[1];
                            if (n) {
                                var r = e.offsets,
                                    o = r.reference,
                                    a = r.popper,
                                    s = -1 !== ["bottom", "top"].indexOf(i),
                                    l = s ? "left" : "top",
                                    c = s ? "width" : "height",
                                    f = { start: q({}, l, o[l]), end: q({}, l, o[l] + o[c] - a[c]) };
                                e.offsets.popper = Z({}, a, f[n]);
                            }
                            return e;
                        },
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function (e, t) {
                            var i,
                                n = t.offset,
                                r = e.placement,
                                o = e.offsets,
                                a = o.popper,
                                s = o.reference,
                                l = r.split("-")[0];
                            return (
                                (i = M(+n) ? [+n, 0] : B(n, a, s, l)),
                                "left" === l
                                    ? ((a.top += i[0]), (a.left -= i[1]))
                                    : "right" === l
                                    ? ((a.top += i[0]), (a.left += i[1]))
                                    : "top" === l
                                    ? ((a.left += i[0]), (a.top -= i[1]))
                                    : "bottom" === l && ((a.left += i[0]), (a.top += i[1])),
                                (e.popper = a),
                                e
                            );
                        },
                        offset: 0,
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (e, t) {
                            var i = t.boundariesElement || r(e.instance.popper);
                            e.instance.reference === i && (i = r(i));
                            var n = v(e.instance.popper, e.instance.reference, t.padding, i);
                            t.boundaries = n;
                            var o = t.priority,
                                a = e.offsets.popper,
                                s = {
                                    primary: function (e) {
                                        var i = a[e];
                                        return a[e] < n[e] && !t.escapeWithReference && (i = F(a[e], n[e])), q({}, e, i);
                                    },
                                    secondary: function (e) {
                                        var i = "right" === e ? "left" : "top",
                                            r = a[i];
                                        return a[e] > n[e] && !t.escapeWithReference && (r = H(a[i], n[e] - ("right" === e ? a.width : a.height))), q({}, i, r);
                                    },
                                };
                            return (
                                o.forEach(function (e) {
                                    var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                                    a = Z({}, a, s[t](e));
                                }),
                                (e.offsets.popper = a),
                                e
                            );
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent",
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.offsets,
                                i = t.popper,
                                n = t.reference,
                                r = e.placement.split("-")[0],
                                o = A,
                                a = -1 !== ["top", "bottom"].indexOf(r),
                                s = a ? "right" : "bottom",
                                l = a ? "left" : "top",
                                c = a ? "width" : "height";
                            return i[s] < o(n[l]) && (e.offsets.popper[l] = o(n[l]) - i[c]), i[l] > o(n[s]) && (e.offsets.popper[l] = o(n[s])), e;
                        },
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (e, i) {
                            var n;
                            if (!P(e.instance.modifiers, "arrow", "keepTogether")) return e;
                            var r = i.element;
                            if ("string" == typeof r) {
                                if (!(r = e.instance.popper.querySelector(r))) return e;
                            } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                            var o = e.placement.split("-")[0],
                                a = e.offsets,
                                s = a.popper,
                                l = a.reference,
                                c = -1 !== ["left", "right"].indexOf(o),
                                f = c ? "height" : "width",
                                d = c ? "Top" : "Left",
                                u = d.toLowerCase(),
                                h = c ? "left" : "top",
                                m = c ? "bottom" : "right",
                                g = x(r)[f];
                            l[m] - g < s[u] && (e.offsets.popper[u] -= s[u] - (l[m] - g)), l[u] + g > s[m] && (e.offsets.popper[u] += l[u] + g - s[m]), (e.offsets.popper = p(e.offsets.popper));
                            var v = l[u] + l[f] / 2 - g / 2,
                                y = t(e.instance.popper),
                                b = parseFloat(y["margin" + d], 10),
                                w = parseFloat(y["border" + d + "Width"], 10),
                                C = v - e.offsets.popper[u] - b - w;
                            return (C = F(H(s[f] - g, C), 0)), (e.arrowElement = r), (e.offsets.arrow = (q((n = {}), u, Math.round(C)), q(n, h, ""), n)), e;
                        },
                        element: "[x-arrow]",
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (e, t) {
                            if (L(e.instance.modifiers, "inner")) return e;
                            if (e.flipped && e.placement === e.originalPlacement) return e;
                            var i = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                                n = e.placement.split("-")[0],
                                r = C(n),
                                o = e.placement.split("-")[1] || "",
                                a = [];
                            switch (t.behavior) {
                                case J:
                                    a = [n, r];
                                    break;
                                case K:
                                    a = N(n);
                                    break;
                                case ee:
                                    a = N(n, !0);
                                    break;
                                default:
                                    a = t.behavior;
                            }
                            return (
                                a.forEach(function (s, l) {
                                    if (n !== s || a.length === l + 1) return e;
                                    (n = e.placement.split("-")[0]), (r = C(n));
                                    var c = e.offsets.popper,
                                        f = e.offsets.reference,
                                        d = A,
                                        p = ("left" === n && d(c.right) > d(f.left)) || ("right" === n && d(c.left) < d(f.right)) || ("top" === n && d(c.bottom) > d(f.top)) || ("bottom" === n && d(c.top) < d(f.bottom)),
                                        u = d(c.left) < d(i.left),
                                        h = d(c.right) > d(i.right),
                                        m = d(c.top) < d(i.top),
                                        g = d(c.bottom) > d(i.bottom),
                                        v = ("left" === n && u) || ("right" === n && h) || ("top" === n && m) || ("bottom" === n && g),
                                        y = -1 !== ["top", "bottom"].indexOf(n),
                                        b = !!t.flipVariations && ((y && "start" === o && u) || (y && "end" === o && h) || (!y && "start" === o && m) || (!y && "end" === o && g));
                                    (p || v || b) &&
                                        ((e.flipped = !0),
                                        (p || v) && (n = a[l + 1]),
                                        b &&
                                            (o = (function (e) {
                                                return "end" === e ? "start" : "start" === e ? "end" : e;
                                            })(o)),
                                        (e.placement = n + (o ? "-" + o : "")),
                                        (e.offsets.popper = Z({}, e.offsets.popper, O(e.instance.popper, e.offsets.reference, e.placement))),
                                        (e = E(e.instance.modifiers, e, "flip")));
                                }),
                                e
                            );
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (e) {
                            var t = e.placement,
                                i = t.split("-")[0],
                                n = e.offsets,
                                r = n.popper,
                                o = n.reference,
                                a = -1 !== ["left", "right"].indexOf(i),
                                s = -1 === ["top", "left"].indexOf(i);
                            return (r[a ? "left" : "top"] = o[i] - (s ? r[a ? "width" : "height"] : 0)), (e.placement = C(t)), (e.offsets.popper = p(r)), e;
                        },
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (e) {
                            if (!P(e.instance.modifiers, "hide", "preventOverflow")) return e;
                            var t = e.offsets.reference,
                                i = k(e.instance.modifiers, function (e) {
                                    return "preventOverflow" === e.name;
                                }).boundaries;
                            if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                                if (!0 === e.hide) return e;
                                (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                            } else {
                                if (!1 === e.hide) return e;
                                (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                            }
                            return e;
                        },
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (e, t) {
                            var i = t.x,
                                n = t.y,
                                o = e.offsets.popper,
                                a = k(e.instance.modifiers, function (e) {
                                    return "applyStyle" === e.name;
                                }).gpuAcceleration;
                            void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var s,
                                l,
                                c = void 0 === a ? t.gpuAcceleration : a,
                                f = u(r(e.instance.popper)),
                                d = { position: o.position },
                                p = { left: A(o.left), top: A(o.top), bottom: A(o.bottom), right: A(o.right) },
                                h = "bottom" === i ? "top" : "bottom",
                                m = "right" === n ? "left" : "right",
                                g = D("transform");
                            if (((l = "bottom" == h ? -f.height + p.bottom : p.top), (s = "right" == m ? -f.width + p.right : p.left), c && g))
                                (d[g] = "translate3d(" + s + "px, " + l + "px, 0)"), (d[h] = 0), (d[m] = 0), (d.willChange = "transform");
                            else {
                                var v = "bottom" == h ? -1 : 1,
                                    y = "right" == m ? -1 : 1;
                                (d[h] = l * v), (d[m] = s * y), (d.willChange = h + ", " + m);
                            }
                            var b = { "x-placement": e.placement };
                            return (e.attributes = Z({}, b, e.attributes)), (e.styles = Z({}, d, e.styles)), (e.arrowStyles = Z({}, e.offsets.arrow, e.arrowStyles)), e;
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right",
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (e) {
                            return (
                                I(e.instance.popper, e.styles),
                                (function (e, t) {
                                    Object.keys(t).forEach(function (i) {
                                        !1 === t[i] ? e.removeAttribute(i) : e.setAttribute(i, t[i]);
                                    });
                                })(e.instance.popper, e.attributes),
                                e.arrowElement && Object.keys(e.arrowStyles).length && I(e.arrowElement, e.arrowStyles),
                                e
                            );
                        },
                        onLoad: function (e, t, i, n, r) {
                            var o = w(0, t, e),
                                a = b(i.placement, o, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                            return t.setAttribute("x-placement", a), I(t, { position: "absolute" }), i;
                        },
                        gpuAcceleration: void 0,
                    },
                },
            }),
            te
        );
    });
