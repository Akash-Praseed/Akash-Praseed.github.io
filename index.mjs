import {a as d, b as F} from "./chunk-2ARSATE2.mjs";
import {F as E, c as n, e as m, n as i, o as u, s as g, u as R, y, z as h} from "./chunk-HM6WDOGT.mjs";
import {c as a} from "./chunk-ELYU6EKT.mjs";
a.__framer_importFromPackage = (e,r)=>()=>n(g, {
    error: 'Package component not supported: "' + r + '" in "' + e + '"'
});
a.process = {
    ...a.process,
    env: {
        ...a.process ? a.process.env : void 0,
        NODE_ENV: "production"
    }
};
R();
(async()=>{
    let e = {
        augiA20Il: {
            elements: {},
            page: i(()=>import("./qeNmQIniAyweO5BvCCkNcMqg8gq04swNrhYnAmA_Dqw.2SSVC6VG.mjs")),
            path: "/"
        }
    }, r = [{
        code: "en-US",
        id: "default",
        name: "English",
        slug: ""
    }], I = i(()=>import("./__framer-not-found-page.5FYAGZ5E.mjs")), s = document.getElementById("main"), o, _, c, l = !1;
    if ("framerHydrateV2"in s.dataset) {
        let t = JSON.parse(s.dataset.framerHydrateV2);
        o = t.routeId,
        _ = t.localeId,
        c = t.pathVariables,
        l = !0
    } else {
        let t = u(e, decodeURIComponent(location.pathname), !0, r);
        o = t.routeId,
        _ = t.localeId,
        c = t.pathVariables
    }
    let p = await e[o].page.preload();
    e[o].page = p;
    let f = n(E, {
        RootComponent: p,
        isWebsite: !0,
        routeId: o,
        pathVariables: c,
        routes: e,
        notFoundPage: I,
        isReducedMotion: void 0,
        localeId: _,
        locales: r
    });
    l ? m(()=>{
        F(s, f)
    }
    ) : d(s).render(f)
}
)().catch(e=>{
    throw a.__send_framer_event && a.__send_framer_event("published_site_load_error", {
        message: String(e),
        stack: e instanceof Error && typeof e.stack == "string" ? e.stack : null
    }),
    e
}
);
(async()=>{
    let {default: e} = await import("./__framer-badge.Y6GOF37Y.mjs")
      , r = y(h);
    m(()=>{
        // d(document.getElementById("__framer-badge-container")).render(n(r, {
        //     className: "__framer-badge",
        //     __framer__threshold: .5,
        //     __framer__animateOnce: !0,
        //     __framer__opacity: 0,
        //     __framer__targetOpacity: 1,
        //     __framer__rotate: 0,
        //     __framer__x: 0,
        //     __framer__y: 10,
        //     __framer__scale: 1,
        //     __framer__transition: {
        //         type: "spring",
        //         ease: [.44, 0, .56, 1],
        //         duration: .3,
        //         delay: 1,
        //         stiffness: 350,
        //         damping: 40,
        //         mass: 1.5
        //     },
        //     __framer__rotateX: 0,
        //     __framer__rotateY: 0,
        //     __framer__perspective: 1200
        // }, n(e)))
    }
    )
}
)();
//# sourceMappingURL=preview_script0.WXACGWIZ.mjs.map
