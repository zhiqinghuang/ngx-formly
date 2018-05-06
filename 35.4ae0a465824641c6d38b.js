(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{Yo9d:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component<span class="token punctuation" >,</span> OnInit <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token keyword" >implements</span> <span class="token class-name" >OnInit</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    formState<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      disabled<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'text\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'First Name\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'text\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'checkbox\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'I agree\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'text\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'textarea\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Thoughts...\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >ngOnInit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token comment" spellcheck="true">// apply expressionProperty for disabled based on formState to all fields</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>fields<span class="token punctuation" >.</span><span class="token function" >forEach</span><span class="token punctuation" >(</span>field <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      field<span class="token punctuation" >.</span>expressionProperties <span class="token operator" >=</span> field<span class="token punctuation" >.</span>expressionProperties <span class="token operator" >||</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n      field<span class="token punctuation" >.</span>expressionProperties<span class="token punctuation" >[</span><span class="token string" >\'templateOptions.disabled\'</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token string" >\'formState.disabled\'</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >toggleDisabled</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>options<span class="token punctuation" >.</span>formState<span class="token punctuation" >.</span>disabled <span class="token operator" >=</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>options<span class="token punctuation" >.</span>formState<span class="token punctuation" >.</span>disabled<span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},bruE:function(n,s){n.exports='<code>formState.disabled</code>:<button class="btn btn-sm btn-default" (click)="toggleDisabled()">Toggle</button>\n\n<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>\n'},gBxj:function(n,s){n.exports="import { Component, OnInit } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent implements OnInit {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {\n    formState: {\n      disabled: true,\n    },\n  };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      templateOptions: {\n        label: 'First Name',\n      },\n    },\n    {\n      key: 'text',\n      type: 'checkbox',\n      templateOptions: {\n        label: 'I agree',\n      },\n    },\n    {\n      key: 'text',\n      type: 'textarea',\n      templateOptions: {\n        label: 'Thoughts...',\n      },\n    },\n  ];\n\n  ngOnInit() {\n    // apply expressionProperty for disabled based on formState to all fields\n    this.fields.forEach(field => {\n      field.expressionProperties = field.expressionProperties || {};\n      field.expressionProperties['templateOptions.disabled'] = 'formState.disabled';\n    });\n  }\n\n  toggleDisabled() {\n    this.options.formState.disabled = !this.options.formState.disabled;\n  }\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},hJO8:function(n,s,a){"use strict";a.r(s);var t=a("CcnG"),p=a("gIcY"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={},this.options={formState:{disabled:!0}},this.fields=[{key:"text",type:"input",templateOptions:{label:"First Name"}},{key:"text",type:"checkbox",templateOptions:{label:"I agree"}},{key:"text",type:"textarea",templateOptions:{label:"Thoughts..."}}]}return n.prototype.ngOnInit=function(){this.fields.forEach(function(n){n.expressionProperties=n.expressionProperties||{},n.expressionProperties["templateOptions.disabled"]="formState.disabled"})},n.prototype.toggleDisabled=function(){this.options.formState.disabled=!this.options.formState.disabled},n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Form State",description:"This demonstrates how to use formState in your fields.",component:o,files:[{file:"app.component.html",content:a("i5zJ"),filecontent:a("bruE")},{file:"app.component.ts",content:a("Yo9d"),filecontent:a("gBxj")},{file:"app.module.ts",content:a("zxl8"),filecontent:a("haBn")}]}]},l=function(){},c=a("NcP4"),u=a("goW2"),i=a("MT1c"),r=a("1Q/V"),k=a("9+aI"),m=a("haId"),d=a("LJsP"),f=a("yR2A"),g=a("Bbog"),b=a("fFVA"),y=a("Nntq"),x=a("L0Z1"),h=a("grA4"),v=a("4o01"),F=a("Dl9q"),w=a("9Glx"),C=a("UcnZ"),O=a("wdLZ"),M=a("DAbo"),S=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["formState.disabled"])),(n()(),t["\u0275ted"](-1,null,[":"])),(n()(),t["\u0275eld"](3,0,null,null,1,"button",[["class","btn btn-sm btn-default"]],null,[[null,"click"]],function(n,s,a){var t=!0;return"click"===s&&(t=!1!==n.component.toggleDisabled()&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,["Toggle"])),(n()(),t["\u0275eld"](5,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,7).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,7).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](6,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](7,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](9,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](10,0,null,null,3,"formly-form",[],null,null,null,F.b,F.a)),t["\u0275did"](11,966656,null,0,w.a,[C.a,O.a,M.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,w.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](12,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,7,0,a.form),n(s,11,0,a.model,a.form,a.fields,a.options)},function(n,s){var a=s.component;n(s,5,0,t["\u0275nov"](s,9).ngClassUntouched,t["\u0275nov"](s,9).ngClassTouched,t["\u0275nov"](s,9).ngClassPristine,t["\u0275nov"](s,9).ngClassDirty,t["\u0275nov"](s,9).ngClassValid,t["\u0275nov"](s,9).ngClassInvalid,t["\u0275nov"](s,9).ngClassPending),n(s,12,0,!a.form.valid)})}var N=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,_,S)),t["\u0275did"](1,114688,null,0,o,[],null,null)],function(n,s){n(s,1,0)},null)},{},{},[]),I=a("Ip0R"),D=a("eDkP"),P=a("Fzqc"),R=a("M2Lx"),A=a("SMsm"),G=a("t/Na"),L=a("ZYjt"),B=a("6LlJ"),T=a("F6kA"),J=a("4c35"),z=a("dWZg"),E=a("qAlS"),U=a("Wf4p"),Z=a("v9Dh"),Y=a("La40"),q=a("UodH"),Q=a("5QwG"),W=a("Nsh5"),j=a("8mMr"),V=a("LC5p"),H=a("0/Q6"),K=a("mqvi"),X=a("XR12"),$=a("1ey0"),nn=function(){},sn=a("ZYCi"),an=a("AMrk"),tn=a("me7w"),pn=a("N3PW"),on=a("l4pn"),en=a("Fv2i"),ln=a("wBYW"),cn=a("IE48"),un=a("Ltwa"),rn=a("4Mh+"),kn=a("b7gF"),mn=a("DJQk"),dn=a("zn1Q"),fn=a("CgTb"),gn=a("+oK5"),bn=a("zdmU"),yn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return xn});var xn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,k.a,m.a,d.a,f.a,g.a,b.a,y.a,x.a,h.a,v.a,N]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,I.NgLocalization,I.NgLocaleLocalization,[t.LOCALE_ID,[2,I["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,D.c,D.c,[D.i,D.e,t.ComponentFactoryResolver,D.h,D.f,t.Injector,t.NgZone,I.DOCUMENT,P.b]),t["\u0275mpd"](4608,R.b,R.b,[]),t["\u0275mpd"](5120,A.d,A.a,[[3,A.d],[2,G.c],L.c,[2,I.DOCUMENT]]),t["\u0275mpd"](4608,B.a,B.a,[]),t["\u0275mpd"](4608,T.a,T.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,M.b,M.b,[M.a]),t["\u0275mpd"](4608,O.a,O.a,[]),t["\u0275mpd"](4608,C.a,C.a,[M.b,O.a]),t["\u0275mpd"](1073742336,I.CommonModule,I.CommonModule,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,J.g,J.g,[]),t["\u0275mpd"](1073742336,z.b,z.b,[]),t["\u0275mpd"](1073742336,E.b,E.b,[]),t["\u0275mpd"](1073742336,D.g,D.g,[]),t["\u0275mpd"](1073742336,U.l,U.l,[[2,U.d]]),t["\u0275mpd"](1073742336,Z.d,Z.d,[]),t["\u0275mpd"](1073742336,U.v,U.v,[]),t["\u0275mpd"](1073742336,R.c,R.c,[]),t["\u0275mpd"](1073742336,Y.i,Y.i,[]),t["\u0275mpd"](1073742336,A.c,A.c,[]),t["\u0275mpd"](1073742336,q.c,q.c,[]),t["\u0275mpd"](1073742336,Q.b,Q.b,[]),t["\u0275mpd"](1073742336,W.h,W.h,[]),t["\u0275mpd"](1073742336,j.b,j.b,[]),t["\u0275mpd"](1073742336,U.m,U.m,[]),t["\u0275mpd"](1073742336,U.t,U.t,[]),t["\u0275mpd"](1073742336,V.b,V.b,[]),t["\u0275mpd"](1073742336,H.c,H.c,[]),t["\u0275mpd"](1073742336,K.a,K.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,nn,nn,[]),t["\u0275mpd"](1073742336,sn.r,sn.r,[[2,sn.w],[2,sn.o]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,M.a,function(){return[{types:[{name:"formly-group",component:an.a}]},{types:[{name:"input",component:tn.a,wrappers:["fieldset","label"]},{name:"checkbox",component:pn.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:on.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:en.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:ln.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:cn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:un.a},{name:"description",component:rn.a},{name:"validation-message",component:kn.a},{name:"fieldset",component:mn.a},{name:"addons",component:dn.a}],manipulators:[{class:fn.a,method:"run"},{class:gn.a,method:"run"},{class:bn.a,method:"run"}]},{types:[{name:"formly-group",component:an.a}]},{}]},[]),t["\u0275mpd"](1024,sn.m,function(){return[[{path:"",component:yn.a,data:e}]]},[])])})},haBn:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},i5zJ:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>code</span><span class="token punctuation" >></span></span>formState.disabled<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>code</span><span class="token punctuation" >></span></span>:<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-sm btn-default<span class="token punctuation" >"</span></span> <span class="token attr-name" >(click)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>toggleDisabled()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Toggle<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},zxl8:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'}}]);