/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './users-routing.module';
import * as import2 from '@angular/router';
import * as import3 from './users.component.ngfactory';
import * as import4 from './users.component';
class UsersRoutingModuleInjector extends import0.ɵNgModuleInjector<import1.UsersRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _UsersRoutingModule_1:import1.UsersRoutingModule;
  _ROUTES_2:any[];
  constructor(parent:import0.Injector) {
    super(parent,[import3.UsersComponentNgFactory],([] as any[]));
  }
  createInternal():import1.UsersRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa,(null as any)),this.parent.get(import2.Router,(null as any)));
    this._UsersRoutingModule_1 = new import1.UsersRoutingModule();
        this._ROUTES_2 = [[{
          path: '',
          component: import4.UsersComponent
        }
    ]];
    return this._UsersRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.UsersRoutingModule)) { return this._UsersRoutingModule_1; }
    if ((token === import2.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const UsersRoutingModuleNgFactory:import0.NgModuleFactory<import1.UsersRoutingModule> = new import0.NgModuleFactory<any>(UsersRoutingModuleInjector,import1.UsersRoutingModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvRGllZ28vRGVza3RvcC9hbmd1bGFyQ291cnNlL25vLWNsaWVudC1wcm9qZWN0L3NyYy9hcHAvdXNlcnMvdXNlcnMtcm91dGluZy5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvRGllZ28vRGVza3RvcC9hbmd1bGFyQ291cnNlL25vLWNsaWVudC1wcm9qZWN0L3NyYy9hcHAvdXNlcnMvdXNlcnMtcm91dGluZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==