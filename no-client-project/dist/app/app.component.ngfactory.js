/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from './app.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/router';
import * as import3 from '@angular/common';
import * as import4 from './app.component';
var styles_AppComponent = [import0.styles];
export var RenderType_AppComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_AppComponent,
    data: {}
});
export function View_AppComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Hello world!'])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵeld(0, null, null, 0, 'hr', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵeld(0, null, null, 2, 'a', [[
                'routerLink',
                '/'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import1.ɵnov(v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(671744, null, 0, import2.RouterLinkWithHref, [
            import2.Router,
            import2.ActivatedRoute,
            import3.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['Home'])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵeld(0, null, null, 2, 'a', [[
                'routerLink',
                '/users'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (import1.ɵnov(v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(671744, null, 0, import2.RouterLinkWithHref, [
            import2.Router,
            import2.ActivatedRoute,
            import3.LocationStrategy
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['Users'])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵeld(0, null, null, 0, 'hr', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵeld(16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
        import1.ɵdid(147456, null, 0, import2.RouterOutlet, [
            import2.RouterOutletMap,
            import1.ViewContainerRef,
            import1.ComponentFactoryResolver,
            [
                8,
                null
            ]
        ], null, null)
    ], function (ck, v) {
        var currVal_2 = '/';
        ck(v, 6, 0, currVal_2);
        var currVal_5 = '/users';
        ck(v, 10, 0, currVal_5);
    }, function (ck, v) {
        var currVal_0 = import1.ɵnov(v, 6).target;
        var currVal_1 = import1.ɵnov(v, 6).href;
        ck(v, 5, 0, currVal_0, currVal_1);
        var currVal_3 = import1.ɵnov(v, 10).target;
        var currVal_4 = import1.ɵnov(v, 10).href;
        ck(v, 9, 0, currVal_3, currVal_4);
    });
}
function View_AppComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'app-root', [], null, null, null, View_AppComponent_0, RenderType_AppComponent)),
        import1.ɵdid(49152, null, 0, import4.AppComponent, [], null, null)
    ], null, null);
}
export var AppComponentNgFactory = import1.ɵccf('app-root', import4.AppComponent, View_AppComponent_Host_0, {}, {}, []);
