(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3sL2":function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},"89nE":function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { HttpClientModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common/http\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-keyword">import</span> { UserService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./user.service\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    HttpClientModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n  providers: [UserService],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},HhG4:function(s,n,a){"use strict";a.r(n);var l=a("CcnG"),e=a("gIcY"),o=a("VNr4"),t=function(){function s(s){this.http=s}return s.prototype.getUserData=function(){return Object(o.a)([this.getUser(),this.getFields()])},s.prototype.getUser=function(){return this.http.get("assets/json-powered/user_json")},s.prototype.getFields=function(){return this.http.get("assets/json-powered/user-form_json")},s}(),p=function(){function s(s){var n=this;this.userService=s,this.form=new e.FormGroup({}),this.options={},this.userService.getUserData().subscribe(function(s){var a=s[1];n.model=s[0],n.fields=a})}return s.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},s}(),r={examples:[{title:"JSON powered",description:"\n              This is an example of powering a form strictly by JSON. The common use case for this\n              would be to persist the form configuration in the database and then send the configuration\n              up to power the form. Notice that you can still use most features like <code>expressionProperties</code>\n              and <code>validators</code> even in a string form.\n            ",component:p,files:[{file:"app.component.html",content:a("3sL2"),filecontent:a("ov6x")},{file:"app.component.ts",content:a("k6tv"),filecontent:a("tx+t")},{file:"user.service.ts",content:a("sGnT"),filecontent:a("YHEr")},{file:"assets/json-powered/user.json",content:a("y5Tz"),filecontent:a("dJ49")},{file:"assets/json-powered/user-form.json",content:a("PM6v"),filecontent:a("s0YJ")},{file:"app.module.ts",content:a("89nE"),filecontent:a("y+Qq")}]}]},i=function(){return function(){}}(),m=a("NcP4"),c=a("AcC/"),d=a("htty"),u=a("LgGJ"),h=a("MT1c"),g=a("1Q/V"),f=a("9+aI"),j=a("haId"),y=a("LJsP"),b=a("yR2A"),k=a("UFMs"),v=a("pMnS"),w=a("4o01"),F=a("Dl9q"),C=a("UcnZ"),x=a("DAbo"),M=a("9Glx"),N=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(s,n,a){var e=!0,o=s.component;return"submit"===n&&(e=!1!==l["\u0275nov"](s,2).onSubmit(a)&&e),"reset"===n&&(e=!1!==l["\u0275nov"](s,2).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.submit()&&e),e},null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(s()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,F.b,F.a)),l["\u0275prd"](512,null,C.a,C.a,[x.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,M.a,[C.a,x.b,[8,null],[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(s()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(s()(),l["\u0275ted"](-1,null,["Submit"]))],function(s,n){var a=n.component;s(n,2,0,a.form),s(n,7,0,a.form,a.model,a.fields,a.options)},function(s,n){s(n,0,0,l["\u0275nov"](n,4).ngClassUntouched,l["\u0275nov"](n,4).ngClassTouched,l["\u0275nov"](n,4).ngClassPristine,l["\u0275nov"](n,4).ngClassDirty,l["\u0275nov"](n,4).ngClassValid,l["\u0275nov"](n,4).ngClassInvalid,l["\u0275nov"](n,4).ngClassPending)})}function _(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,N)),l["\u0275did"](1,49152,null,0,p,[t],null,null)],null,null)}var O=l["\u0275ccf"]("formly-app-example",p,_,{},{},[]),U=a("Ip0R"),A=a("M2Lx"),R=a("eDkP"),G=a("Fzqc"),J=a("v9Dh"),D=a("ZYjt"),I=a("Wf4p"),L=a("6LlJ"),P=a("F6kA"),E=a("t/Na"),T=a("dWZg"),H=a("lLAP"),B=a("4c35"),Y=a("qAlS"),W=a("La40"),q=a("SMsm"),Z=a("UodH"),z=a("5QwG"),Q=a("qkla"),V=a("iZhS"),X=a("XR12"),K=a("me7w"),$=a("N3PW"),ss=a("l4pn"),ns=a("Fv2i"),as=a("wBYW"),ls=a("IE48"),es=a("Q4Tx"),os=a("Nsh5"),ts=a("8mMr"),ps=a("mqvi"),rs=a("lYui"),is=a("VGFS"),ms=a("1ey0"),cs=function(){return function(){}}(),ds=a("ZYCi"),us=a("cIcG");a.d(n,"ConfigModuleNgFactory",function(){return hs});var hs=l["\u0275cmf"](i,[],function(s){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[m.a,c.a,d.a,u.a,h.a,g.a,f.a,j.a,y.a,b.a,k.a,v.a,w.a,O]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,U.NgLocalization,U.NgLocaleLocalization,[l.LOCALE_ID,[2,U["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,A.c,A.c,[]),l["\u0275mpd"](4608,R.c,R.c,[R.i,R.e,l.ComponentFactoryResolver,R.h,R.f,l.Injector,l.NgZone,U.DOCUMENT,G.b,[2,U.Location]]),l["\u0275mpd"](5120,R.j,R.k,[R.c]),l["\u0275mpd"](5120,J.b,J.c,[R.c]),l["\u0275mpd"](4608,D.HAMMER_GESTURE_CONFIG,I.c,[[2,I.g],[2,I.l]]),l["\u0275mpd"](4608,L.a,L.a,[]),l["\u0275mpd"](4608,P.a,P.a,[]),l["\u0275mpd"](4608,E.h,E.n,[U.DOCUMENT,l.PLATFORM_ID,E.l]),l["\u0275mpd"](4608,E.o,E.o,[E.h,E.m]),l["\u0275mpd"](5120,E.a,function(s){return[s]},[E.o]),l["\u0275mpd"](4608,E.k,E.k,[]),l["\u0275mpd"](6144,E.i,null,[E.k]),l["\u0275mpd"](4608,E.g,E.g,[E.i]),l["\u0275mpd"](6144,E.b,null,[E.g]),l["\u0275mpd"](4608,E.f,E.j,[E.b,l.Injector]),l["\u0275mpd"](4608,E.c,E.c,[E.f]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_j"],e["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,C.a,C.a,[x.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](4608,t,t,[E.c]),l["\u0275mpd"](1073742336,U.CommonModule,U.CommonModule,[]),l["\u0275mpd"](1073742336,T.b,T.b,[]),l["\u0275mpd"](1073742336,A.d,A.d,[]),l["\u0275mpd"](1073742336,H.a,H.a,[]),l["\u0275mpd"](1073742336,G.a,G.a,[]),l["\u0275mpd"](1073742336,B.g,B.g,[]),l["\u0275mpd"](1073742336,Y.c,Y.c,[]),l["\u0275mpd"](1073742336,R.g,R.g,[]),l["\u0275mpd"](1073742336,I.l,I.l,[[2,I.d],[2,D.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,J.e,J.e,[]),l["\u0275mpd"](1073742336,I.v,I.v,[]),l["\u0275mpd"](1073742336,W.j,W.j,[]),l["\u0275mpd"](1073742336,q.c,q.c,[]),l["\u0275mpd"](1073742336,Z.c,Z.c,[]),l["\u0275mpd"](1073742336,z.b,z.b,[]),l["\u0275mpd"](512,x.b,x.b,[]),l["\u0275mpd"](1024,x.a,function(s,n){return[{wrappers:[{name:"addons",component:Q.a}],extensions:[{name:"addons",extension:{postPopulate:V.a}}]},X.b(s),{types:[{name:"input",component:K.a,wrappers:["form-field"]},{name:"checkbox",component:$.a,wrappers:["form-field"]},{name:"radio",component:ss.a,wrappers:["form-field"]},{name:"select",component:ns.a,wrappers:["form-field"]},{name:"textarea",component:as.a,wrappers:["form-field"]},{name:"multicheckbox",component:ls.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:es.a}]},X.b(n),{}]},[x.b,x.b]),l["\u0275mpd"](1073742336,X.a,X.a,[x.b,[2,x.a]]),l["\u0275mpd"](1073742336,os.h,os.h,[]),l["\u0275mpd"](1073742336,ts.b,ts.b,[]),l["\u0275mpd"](1073742336,ps.a,ps.a,[]),l["\u0275mpd"](1073742336,E.e,E.e,[]),l["\u0275mpd"](1073742336,E.d,E.d,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_bc"],e["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,rs.a,rs.a,[]),l["\u0275mpd"](1073742336,is.a,is.a,[]),l["\u0275mpd"](1073742336,ms.a,ms.a,[]),l["\u0275mpd"](1073742336,cs,cs,[]),l["\u0275mpd"](1073742336,ds.s,ds.s,[[2,ds.y],[2,ds.p]]),l["\u0275mpd"](1073742336,i,i,[]),l["\u0275mpd"](256,E.l,"XSRF-TOKEN",[]),l["\u0275mpd"](256,E.m,"X-XSRF-TOKEN",[]),l["\u0275mpd"](1024,ds.n,function(){return[[{path:"",component:us.a,data:r}]]},[])])})},PM6v:function(s,n){s.exports='[\n  {\n    <span class="hljs-string">"key"</span>: <span class="hljs-string">"firstName"</span>,\n    <span class="hljs-string">"type"</span>: <span class="hljs-string">"input"</span>,\n    <span class="hljs-string">"templateOptions"</span>: {\n      <span class="hljs-string">"label"</span>: <span class="hljs-string">"First Name"</span>\n    }\n  },\n  {\n    <span class="hljs-string">"key"</span>: <span class="hljs-string">"lastName"</span>,\n    <span class="hljs-string">"type"</span>: <span class="hljs-string">"input"</span>,\n    <span class="hljs-string">"templateOptions"</span>: {\n      <span class="hljs-string">"label"</span>: <span class="hljs-string">"Last Name"</span>\n    }\n  },\n  {\n    <span class="hljs-string">"key"</span>: <span class="hljs-string">"mac"</span>,\n    <span class="hljs-string">"type"</span>: <span class="hljs-string">"input"</span>,\n    <span class="hljs-string">"templateOptions"</span>: {\n      <span class="hljs-string">"label"</span>: <span class="hljs-string">"Mac Address"</span>,\n      <span class="hljs-string">"pattern"</span>: <span class="hljs-string">"([0-9A-F]{2}[:-]){5}([0-9A-F]{2})"</span>\n    }\n  },\n  {\n    <span class="hljs-string">"key"</span>: <span class="hljs-string">"color"</span>,\n    <span class="hljs-string">"type"</span>: <span class="hljs-string">"radio"</span>,\n    <span class="hljs-string">"templateOptions"</span>: {\n      <span class="hljs-string">"label"</span>: <span class="hljs-string">"Color Preference (try this out)"</span>,\n      <span class="hljs-string">"options"</span>: [\n        {\n          <span class="hljs-string">"label"</span>: <span class="hljs-string">"No Preference"</span>,\n          <span class="hljs-string">"value"</span>: <span class="hljs-literal">null</span>\n        },\n        {\n          <span class="hljs-string">"label"</span>: <span class="hljs-string">"Green"</span>,\n          <span class="hljs-string">"value"</span>: <span class="hljs-string">"green"</span>\n        },\n        {\n          <span class="hljs-string">"label"</span>: <span class="hljs-string">"Blue"</span>,\n          <span class="hljs-string">"value"</span>: <span class="hljs-string">"blue"</span>\n        }\n      ]\n    }\n  },\n  {\n    <span class="hljs-string">"key"</span>: <span class="hljs-string">"reason"</span>,\n    <span class="hljs-string">"type"</span>: <span class="hljs-string">"textarea"</span>,\n    <span class="hljs-string">"templateOptions"</span>: {\n      <span class="hljs-string">"label"</span>: <span class="hljs-string">"Why?"</span>\n    },\n    <span class="hljs-string">"expressionProperties"</span>: {\n      <span class="hljs-string">"templateOptions.label"</span>: <span class="hljs-string">"\'Why did you choose \' + model.color + \'?\'"</span>\n    },\n    <span class="hljs-string">"hideExpression"</span>: <span class="hljs-string">"!model.color"</span>\n  }\n]\n'},YHEr:function(s,n){s.exports="import { Injectable } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\nimport { Observable, forkJoin } from 'rxjs';\nimport { FormlyFieldConfig } from '@ngx-formly/core';\n\n@Injectable()\nexport class UserService {\n  constructor(private http: HttpClient) {}\n\n  getUserData(): Observable<any> {\n    return forkJoin([this.getUser(), this.getFields()]);\n  }\n\n  getUser() {\n    return this.http.get<{ firstName: string, lastName: string }>('assets/json-powered/user_json');\n  }\n\n  getFields() {\n    return this.http.get<FormlyFieldConfig[]>('assets/json-powered/user-form_json');\n  }\n}\n"},dJ49:function(s,n){s.exports='{\n  "firstName": "Joan",\n  "lastName": "of Arc"\n}\n'},k6tv:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { UserService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./user.service\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  options: FormlyFormOptions = {};\n\n  model;\n  fields: FormlyFieldConfig[];\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> userService: UserService</span>) {\n    <span class="hljs-keyword">this</span>.userService.getUserData().subscribe(<span class="hljs-function">(<span class="hljs-params">[model, fields]</span>) =&gt;</span> {\n      <span class="hljs-keyword">this</span>.model = model;\n      <span class="hljs-keyword">this</span>.fields = fields;\n    });\n  }\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},ov6x:function(s,n){s.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},s0YJ:function(s,n){s.exports='[\n  {\n    "key": "firstName",\n    "type": "input",\n    "templateOptions": {\n      "label": "First Name"\n    }\n  },\n  {\n    "key": "lastName",\n    "type": "input",\n    "templateOptions": {\n      "label": "Last Name"\n    }\n  },\n  {\n    "key": "mac",\n    "type": "input",\n    "templateOptions": {\n      "label": "Mac Address",\n      "pattern": "([0-9A-F]{2}[:-]){5}([0-9A-F]{2})"\n    }\n  },\n  {\n    "key": "color",\n    "type": "radio",\n    "templateOptions": {\n      "label": "Color Preference (try this out)",\n      "options": [\n        {\n          "label": "No Preference",\n          "value": null\n        },\n        {\n          "label": "Green",\n          "value": "green"\n        },\n        {\n          "label": "Blue",\n          "value": "blue"\n        }\n      ]\n    }\n  },\n  {\n    "key": "reason",\n    "type": "textarea",\n    "templateOptions": {\n      "label": "Why?"\n    },\n    "expressionProperties": {\n      "templateOptions.label": "\'Why did you choose \' + model.color + \'?\'"\n    },\n    "hideExpression": "!model.color"\n  }\n]\n'},sGnT:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Injectable } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { HttpClient } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common/http\'</span>;\n<span class="hljs-keyword">import</span> { Observable, forkJoin } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Injectable</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> UserService {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> http: HttpClient</span>) {}\n\n  getUserData(): Observable&lt;<span class="hljs-built_in">any</span>&gt; {\n    <span class="hljs-keyword">return</span> forkJoin([<span class="hljs-keyword">this</span>.getUser(), <span class="hljs-keyword">this</span>.getFields()]);\n  }\n\n  getUser() {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.http.get&lt;{ firstName: <span class="hljs-built_in">string</span>, lastName: <span class="hljs-built_in">string</span> }&gt;(<span class="hljs-string">\'assets/json-powered/user_json\'</span>);\n  }\n\n  getFields() {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.http.get&lt;FormlyFieldConfig[]&gt;(<span class="hljs-string">\'assets/json-powered/user-form_json\'</span>);\n  }\n}\n'},"tx+t":function(s,n){s.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\nimport { UserService } from './user.service';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  options: FormlyFormOptions = {};\n\n  model;\n  fields: FormlyFieldConfig[];\n\n  constructor(private userService: UserService) {\n    this.userService.getUserData().subscribe(([model, fields]) => {\n      this.model = model;\n      this.fields = fields;\n    });\n  }\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},"y+Qq":function(s,n){s.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { HttpClientModule } from '@angular/common/http';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n\nimport { UserService } from './user.service';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    HttpClientModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n  providers: [UserService],\n})\nexport class AppModule { }\n"},y5Tz:function(s,n){s.exports='{\n  <span class="hljs-string">"firstName"</span>: <span class="hljs-string">"Joan"</span>,\n  <span class="hljs-string">"lastName"</span>: <span class="hljs-string">"of Arc"</span>\n}\n'}}]);