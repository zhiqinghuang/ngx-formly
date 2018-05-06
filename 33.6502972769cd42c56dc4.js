(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"09kg":function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule, ValidationErrors } from '@angular/forms';\nimport { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { FormControl } from '@angular/forms';\nimport { AppComponent } from './app.component';\n\nexport function IpValidator(control: FormControl): ValidationErrors {\n  return /(\\d{1,3}\\.){3}\\d{1,3}/.test(control.value) ? null : { 'ip': true };\n}\n\nexport function IpValidatorMessage(err, field: FormlyFieldConfig) {\n  return `\"${field.formControl.value}\" is not a valid IP Address`;\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validators: [\n        { name: 'ip', validation: IpValidator },\n      ],\n      validationMessages: [\n        { name: 'ip', message: IpValidatorMessage },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},"2qDI":function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormGroup, FormControl, ValidationErrors } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\nexport function IpValidator(control: FormControl): ValidationErrors {\n  return /(\\d{1,3}\\.){3}\\d{1,3}/.test(control.value) ? null : { 'ip': true };\n}\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (using custom validation declared in ngModule)',\n        required: true,\n      },\n      validators: {\n        validation: ['ip'],\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (using custom validation through `validators.validation` property)',\n        required: true,\n      },\n      validators: {\n        validation: [IpValidator],\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (using custom validation through `validators.expression` property)',\n        description: 'custom validation message through `validators` property',\n        required: true,\n      },\n      validators: {\n        ip: {\n          expression: (c) => /(\\d{1,3}\\.){3}\\d{1,3}/.test(c.value),\n          message: (error, field: FormlyFieldConfig) => `\"${field.formControl.value}\" is not a valid IP Address`,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},AwtS:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup<span class="token punctuation" >,</span> FormControl<span class="token punctuation" >,</span> ValidationErrors <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >IpValidator</span><span class="token punctuation" >(</span>control<span class="token punctuation" >:</span> FormControl<span class="token punctuation" >)</span><span class="token punctuation" >:</span> ValidationErrors <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token regex" >/(\\d{1,3}\\.){3}\\d{1,3}/</span><span class="token punctuation" >.</span><span class="token function" >test</span><span class="token punctuation" >(</span>control<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span> <span class="token operator" >?</span> <span class="token keyword" >null</span> <span class="token punctuation" >:</span> <span class="token punctuation" >{</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >:</span> <span class="token keyword" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'IP Address (using custom validation declared in ngModule)\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      validators<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        validation<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'ip\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'IP Address (using custom validation through `validators.validation` property)\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      validators<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        validation<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>IpValidator<span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'IP Address (using custom validation through `validators.expression` property)\'</span><span class="token punctuation" >,</span>\n        description<span class="token punctuation" >:</span> <span class="token string" >\'custom validation message through `validators` property\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      validators<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        ip<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          expression<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>c<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token regex" >/(\\d{1,3}\\.){3}\\d{1,3}/</span><span class="token punctuation" >.</span><span class="token function" >test</span><span class="token punctuation" >(</span>c<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n          message<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>error<span class="token punctuation" >,</span> field<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> `<span class="token string" >"${field.formControl.value}"</span> is not a valid IP Address`<span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},G5pG:function(n,a){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},QAp3:function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},RUTQ:function(n,a,s){"use strict";s.r(a);var t=s("CcnG"),p=s("gIcY");function o(n){return/(\d{1,3}\.){3}\d{1,3}/.test(n.value)?null:{ip:!0}}var e=function(){function n(){this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{key:"ip",type:"input",templateOptions:{label:"IP Address (using custom validation declared in ngModule)",required:!0},validators:{validation:["ip"]}},{key:"ip",type:"input",templateOptions:{label:"IP Address (using custom validation through `validators.validation` property)",required:!0},validators:{validation:[o]}},{key:"ip",type:"input",templateOptions:{label:"IP Address (using custom validation through `validators.expression` property)",description:"custom validation message through `validators` property",required:!0},validators:{ip:{expression:function(n){return/(\d{1,3}\.){3}\d{1,3}/.test(n.value)},message:function(n,a){return'"'+a.formControl.value+'" is not a valid IP Address'}}}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),l={examples:[{title:"Custom validation",description:"\n              This demonstrates the different ways to define a custom validation, globally or for a specific field.\n            ",component:e,files:[{file:"app.component.html",content:s("G5pG"),filecontent:s("QAp3")},{file:"app.component.ts",content:s("AwtS"),filecontent:s("2qDI")},{file:"app.module.ts",content:s("qHQB"),filecontent:s("09kg")}]}]},c=function(){},u=s("NcP4"),i=s("goW2"),r=s("MT1c"),k=s("1Q/V"),m=s("9+aI"),d=s("haId"),f=s("LJsP"),g=s("yR2A"),y=s("Bbog"),v=s("fFVA"),b=s("Nntq"),F=s("L0Z1"),C=s("grA4"),w=s("4o01"),h=s("Dl9q"),M=s("9Glx"),x=s("UcnZ"),I=s("wdLZ"),A=s("DAbo"),O=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var p=!0,o=n.component;return"submit"===a&&(p=!1!==t["\u0275nov"](n,2).onSubmit(s)&&p),"reset"===a&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===a&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,h.b,h.a)),t["\u0275did"](6,966656,null,0,M.a,[x.a,I.a,A.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,M.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,6,0,s.model,s.form,s.fields,s.options)},function(n,a){n(a,0,0,t["\u0275nov"](a,4).ngClassUntouched,t["\u0275nov"](a,4).ngClassTouched,t["\u0275nov"](a,4).ngClassPristine,t["\u0275nov"](a,4).ngClassDirty,t["\u0275nov"](a,4).ngClassValid,t["\u0275nov"](a,4).ngClassInvalid,t["\u0275nov"](a,4).ngClassPending)})}var V=t["\u0275ccf"]("formly-app-example",e,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,_,O)),t["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)},{},{},[]),N=s("Ip0R"),P=s("eDkP"),G=s("Fzqc"),q=s("M2Lx"),R=s("SMsm"),S=s("t/Na"),D=s("ZYjt"),L=s("6LlJ"),E=s("F6kA"),B=s("4c35"),Q=s("dWZg"),U=s("qAlS"),J=s("Wf4p"),T=s("v9Dh"),Z=s("La40"),z=s("UodH"),W=s("5QwG"),Y=s("Nsh5"),H=s("8mMr"),$=s("LC5p"),j=s("0/Q6"),K=s("mqvi"),X=s("XR12"),nn=s("1ey0");function an(n){return/(\d{1,3}\.){3}\d{1,3}/.test(n.value)?null:{ip:!0}}function sn(n,a){return'"'+a.formControl.value+'" is not a valid IP Address'}s("HkYz");var tn=function(){},pn=s("ZYCi"),on=s("AMrk"),en=s("me7w"),ln=s("N3PW"),cn=s("l4pn"),un=s("Fv2i"),rn=s("wBYW"),kn=s("IE48"),mn=s("Ltwa"),dn=s("4Mh+"),fn=s("b7gF"),gn=s("DJQk"),yn=s("zn1Q"),vn=s("CgTb"),bn=s("+oK5"),Fn=s("zdmU"),Cn=s("cIcG");s.d(a,"ConfigModuleNgFactory",function(){return wn});var wn=t["\u0275cmf"](c,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,i.a,r.a,k.a,m.a,d.a,f.a,g.a,y.a,v.a,b.a,F.a,C.a,w.a,V]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,N.NgLocalization,N.NgLocaleLocalization,[t.LOCALE_ID,[2,N["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,P.c,P.c,[P.i,P.e,t.ComponentFactoryResolver,P.h,P.f,t.Injector,t.NgZone,N.DOCUMENT,G.b]),t["\u0275mpd"](4608,q.b,q.b,[]),t["\u0275mpd"](5120,R.d,R.a,[[3,R.d],[2,S.c],D.c,[2,N.DOCUMENT]]),t["\u0275mpd"](4608,L.a,L.a,[]),t["\u0275mpd"](4608,E.a,E.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,A.b,A.b,[A.a]),t["\u0275mpd"](4608,I.a,I.a,[]),t["\u0275mpd"](4608,x.a,x.a,[A.b,I.a]),t["\u0275mpd"](1073742336,N.CommonModule,N.CommonModule,[]),t["\u0275mpd"](1073742336,G.a,G.a,[]),t["\u0275mpd"](1073742336,B.g,B.g,[]),t["\u0275mpd"](1073742336,Q.b,Q.b,[]),t["\u0275mpd"](1073742336,U.b,U.b,[]),t["\u0275mpd"](1073742336,P.g,P.g,[]),t["\u0275mpd"](1073742336,J.l,J.l,[[2,J.d]]),t["\u0275mpd"](1073742336,T.d,T.d,[]),t["\u0275mpd"](1073742336,J.v,J.v,[]),t["\u0275mpd"](1073742336,q.c,q.c,[]),t["\u0275mpd"](1073742336,Z.i,Z.i,[]),t["\u0275mpd"](1073742336,R.c,R.c,[]),t["\u0275mpd"](1073742336,z.c,z.c,[]),t["\u0275mpd"](1073742336,W.b,W.b,[]),t["\u0275mpd"](1073742336,Y.h,Y.h,[]),t["\u0275mpd"](1073742336,H.b,H.b,[]),t["\u0275mpd"](1073742336,J.m,J.m,[]),t["\u0275mpd"](1073742336,J.t,J.t,[]),t["\u0275mpd"](1073742336,$.b,$.b,[]),t["\u0275mpd"](1073742336,j.c,j.c,[]),t["\u0275mpd"](1073742336,K.a,K.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,nn.a,nn.a,[]),t["\u0275mpd"](1073742336,tn,tn,[]),t["\u0275mpd"](1073742336,pn.r,pn.r,[[2,pn.w],[2,pn.o]]),t["\u0275mpd"](1073742336,c,c,[]),t["\u0275mpd"](1024,A.a,function(){return[{types:[{name:"formly-group",component:on.a}]},{types:[{name:"input",component:en.a,wrappers:["fieldset","label"]},{name:"checkbox",component:ln.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:cn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:un.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:rn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:kn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:mn.a},{name:"description",component:dn.a},{name:"validation-message",component:fn.a},{name:"fieldset",component:gn.a},{name:"addons",component:yn.a}],manipulators:[{class:vn.a,method:"run"},{class:bn.a,method:"run"},{class:Fn.a,method:"run"}]},{types:[{name:"formly-group",component:on.a}]},{validators:[{name:"ip",validation:an}],validationMessages:[{name:"ip",message:sn}]}]},[]),t["\u0275mpd"](1024,pn.m,function(){return[[{path:"",component:Cn.a,data:l}]]},[])])})},qHQB:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule<span class="token punctuation" >,</span> ValidationErrors <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormControl <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >IpValidator</span><span class="token punctuation" >(</span>control<span class="token punctuation" >:</span> FormControl<span class="token punctuation" >)</span><span class="token punctuation" >:</span> ValidationErrors <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token regex" >/(\\d{1,3}\\.){3}\\d{1,3}/</span><span class="token punctuation" >.</span><span class="token function" >test</span><span class="token punctuation" >(</span>control<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span> <span class="token operator" >?</span> <span class="token keyword" >null</span> <span class="token punctuation" >:</span> <span class="token punctuation" >{</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >:</span> <span class="token keyword" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >IpValidatorMessage</span><span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> field<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> `<span class="token string" >"${field.formControl.value}"</span> is not a valid IP Address`<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      validators<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >,</span> validation<span class="token punctuation" >:</span> IpValidator <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'ip\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> IpValidatorMessage <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'}}]);