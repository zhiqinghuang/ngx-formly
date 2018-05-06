(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1e4i":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},"72Tc":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFieldButton <span class="token punctuation" >}</span> from <span class="token string" >\'./button-type.component\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      types<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          name<span class="token punctuation" >:</span> <span class="token string" >\'button\'</span><span class="token punctuation" >,</span>\n          component<span class="token punctuation" >:</span> FormlyFieldButton<span class="token punctuation" >,</span>\n          wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'fieldset\'</span><span class="token punctuation" >,</span> <span class="token string" >\'label\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n          defaultOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n              btnType<span class="token punctuation" >:</span> <span class="token string" >\'default\'</span><span class="token punctuation" >,</span>\n              type<span class="token punctuation" >:</span> <span class="token string" >\'button\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n    FormlyFieldButton<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},"7gJl":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FieldType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-field-button',\n  template: `\n    <div>\n      <button [type]=\"to.type\" [ngClass]=\"'btn btn-' + to.btnType\" (click)=\"onClick($event)\">\n        {{ to.text }}\n      </button>\n    </div>\n  `,\n})\nexport class FormlyFieldButton extends FieldType {\n  onClick($event) {\n    if (this.to.onClick) {\n      this.to.onClick($event);\n    }\n  }\n}\n"},"Hb+O":function(n,s,a){"use strict";a.r(s);var t=a("CcnG"),p=a("gIcY"),o=function(){function n(){var n=this;this.form=new p.FormGroup({}),this.options={},this.model={someInput:""},this.fields=[{type:"button",templateOptions:{text:"With Function",onClick:function(n){return alert("You clicked me!")}}},{type:"button",templateOptions:{label:"Click this guy",text:"JSON Only",btnType:"info",onClick:function(s){n.form.get("someInput").setValue("clicked!")},description:"These can have labels and stuff too if you want...."}},{key:"someInput",type:"input",templateOptions:{label:"Some Input"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Buttons",description:"\n              This demonstrates a type for buttons. Specifically using bootstrap but this could easily be adapted for other frameworks\n            ",component:o,files:[{file:"app.component.html",content:a("wed3"),filecontent:a("1e4i")},{file:"app.component.ts",content:a("exF6"),filecontent:a("SJFx")},{file:"button-type.component.ts",content:a("zMya"),filecontent:a("7gJl")},{file:"app.module.ts",content:a("72Tc"),filecontent:a("vFJz")}]}]},l=function(){},c=a("NcP4"),u=a("goW2"),i=a("MT1c"),r=a("1Q/V"),k=a("9+aI"),m=a("haId"),d=a("LJsP"),f=a("yR2A"),y=a("Bbog"),g=a("fFVA"),b=a("Nntq"),F=a("L0Z1"),v=a("grA4"),C=a("Ip0R"),w=a("mrSG"),h=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(w.__extends)(s,n),s.prototype.onClick=function(n){this.to.onClick&&this.to.onClick(n)},s}(a("HkYz").b),x=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"button",[],[[8,"type",0]],[[null,"click"]],function(n,s,a){var t=!0;return"click"===s&&(t=!1!==n.component.onClick(a)&&t),t},null,null)),t["\u0275did"](2,278528,null,0,C.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),(n()(),t["\u0275ted"](3,null,[" "," "]))],function(n,s){n(s,2,0,"btn btn-"+s.component.to.btnType)},function(n,s){var a=s.component;n(s,1,0,a.to.type),n(s,3,0,a.to.text)})}var M=t["\u0275ccf"]("formly-field-button",h,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-field-button",[],null,null,null,O,x)),t["\u0275did"](1,16760832,null,0,h,[],null,null)],function(n,s){n(s,1,0)},null)},{form:"form",field:"field",model:"model",options:"options"},{},[]),_=a("4o01"),S=a("Dl9q"),N=a("9Glx"),T=a("UcnZ"),I=a("wdLZ"),R=a("DAbo"),B=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function J(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,2).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,S.b,S.a)),t["\u0275did"](6,966656,null,0,N.a,[T.a,I.a,R.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,N.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,6,0,a.model,a.form,a.fields,a.options)},function(n,s){n(s,0,0,t["\u0275nov"](s,4).ngClassUntouched,t["\u0275nov"](s,4).ngClassTouched,t["\u0275nov"](s,4).ngClassPristine,t["\u0275nov"](s,4).ngClassDirty,t["\u0275nov"](s,4).ngClassValid,t["\u0275nov"](s,4).ngClassInvalid,t["\u0275nov"](s,4).ngClassPending)})}var A=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,J,B)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),G=a("eDkP"),D=a("Fzqc"),L=a("M2Lx"),z=a("SMsm"),$=a("t/Na"),U=a("ZYjt"),W=a("6LlJ"),Y=a("F6kA"),V=a("4c35"),Z=a("dWZg"),P=a("qAlS"),q=a("Wf4p"),E=a("v9Dh"),Q=a("La40"),j=a("UodH"),H=a("5QwG"),K=a("Nsh5"),X=a("8mMr"),nn=a("LC5p"),sn=a("0/Q6"),an=a("mqvi"),tn=a("XR12"),pn=a("1ey0"),on=function(){},en=a("ZYCi"),ln=a("AMrk"),cn=a("me7w"),un=a("N3PW"),rn=a("l4pn"),kn=a("Fv2i"),mn=a("wBYW"),dn=a("IE48"),fn=a("Ltwa"),yn=a("4Mh+"),gn=a("b7gF"),bn=a("DJQk"),Fn=a("zn1Q"),vn=a("CgTb"),Cn=a("+oK5"),wn=a("zdmU"),hn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return xn});var xn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,k.a,m.a,d.a,f.a,y.a,g.a,b.a,F.a,v.a,M,_.a,A]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,C.NgLocalization,C.NgLocaleLocalization,[t.LOCALE_ID,[2,C["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,G.c,G.c,[G.i,G.e,t.ComponentFactoryResolver,G.h,G.f,t.Injector,t.NgZone,C.DOCUMENT,D.b]),t["\u0275mpd"](4608,L.b,L.b,[]),t["\u0275mpd"](5120,z.d,z.a,[[3,z.d],[2,$.c],U.c,[2,C.DOCUMENT]]),t["\u0275mpd"](4608,W.a,W.a,[]),t["\u0275mpd"](4608,Y.a,Y.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,R.b,R.b,[R.a]),t["\u0275mpd"](4608,I.a,I.a,[]),t["\u0275mpd"](4608,T.a,T.a,[R.b,I.a]),t["\u0275mpd"](1073742336,C.CommonModule,C.CommonModule,[]),t["\u0275mpd"](1073742336,D.a,D.a,[]),t["\u0275mpd"](1073742336,V.g,V.g,[]),t["\u0275mpd"](1073742336,Z.b,Z.b,[]),t["\u0275mpd"](1073742336,P.b,P.b,[]),t["\u0275mpd"](1073742336,G.g,G.g,[]),t["\u0275mpd"](1073742336,q.l,q.l,[[2,q.d]]),t["\u0275mpd"](1073742336,E.d,E.d,[]),t["\u0275mpd"](1073742336,q.v,q.v,[]),t["\u0275mpd"](1073742336,L.c,L.c,[]),t["\u0275mpd"](1073742336,Q.i,Q.i,[]),t["\u0275mpd"](1073742336,z.c,z.c,[]),t["\u0275mpd"](1073742336,j.c,j.c,[]),t["\u0275mpd"](1073742336,H.b,H.b,[]),t["\u0275mpd"](1073742336,K.h,K.h,[]),t["\u0275mpd"](1073742336,X.b,X.b,[]),t["\u0275mpd"](1073742336,q.m,q.m,[]),t["\u0275mpd"](1073742336,q.t,q.t,[]),t["\u0275mpd"](1073742336,nn.b,nn.b,[]),t["\u0275mpd"](1073742336,sn.c,sn.c,[]),t["\u0275mpd"](1073742336,an.a,an.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,tn.a,tn.a,[]),t["\u0275mpd"](1073742336,pn.a,pn.a,[]),t["\u0275mpd"](1073742336,on,on,[]),t["\u0275mpd"](1073742336,en.r,en.r,[[2,en.w],[2,en.o]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,R.a,function(){return[{types:[{name:"formly-group",component:ln.a}]},{types:[{name:"input",component:cn.a,wrappers:["fieldset","label"]},{name:"checkbox",component:un.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:rn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:kn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:mn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:dn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:fn.a},{name:"description",component:yn.a},{name:"validation-message",component:gn.a},{name:"fieldset",component:bn.a},{name:"addons",component:Fn.a}],manipulators:[{class:vn.a,method:"run"},{class:Cn.a,method:"run"},{class:wn.a,method:"run"}]},{types:[{name:"formly-group",component:ln.a}]},{types:[{name:"button",component:h,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{btnType:"default",type:"button"}}}]}]},[]),t["\u0275mpd"](1024,en.m,function(){return[[{path:"",component:hn.a,data:e}]]},[])])})},SJFx:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  options: FormlyFormOptions = {};\n  model = { someInput: '' };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      type: 'button',\n      templateOptions: {\n        text: 'With Function',\n        onClick: ($event) => alert('You clicked me!'),\n      },\n    },\n    {\n      type: 'button',\n      templateOptions: {\n        label: 'Click this guy',\n        text: 'JSON Only',\n        btnType: 'info',\n        onClick: ($event) => {\n          this.form.get('someInput').setValue('clicked!');\n        },\n        description: 'These can have labels and stuff too if you want....',\n      },\n    },\n    {\n      key: 'someInput',\n      type: 'input',\n      templateOptions: {\n        label: 'Some Input',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},exF6:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  model <span class="token operator" >=</span> <span class="token punctuation" >{</span> someInput<span class="token punctuation" >:</span> <span class="token string" >\'\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'button\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        text<span class="token punctuation" >:</span> <span class="token string" >\'With Function\'</span><span class="token punctuation" >,</span>\n        onClick<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'You clicked me!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'button\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Click this guy\'</span><span class="token punctuation" >,</span>\n        text<span class="token punctuation" >:</span> <span class="token string" >\'JSON Only\'</span><span class="token punctuation" >,</span>\n        btnType<span class="token punctuation" >:</span> <span class="token string" >\'info\'</span><span class="token punctuation" >,</span>\n        onClick<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span><span class="token keyword" >get</span><span class="token punctuation" >(</span><span class="token string" >\'someInput\'</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >setValue</span><span class="token punctuation" >(</span><span class="token string" >\'clicked!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        description<span class="token punctuation" >:</span> <span class="token string" >\'These can have labels and stuff too if you want....\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'someInput\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Some Input\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},vFJz:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { FormlyFieldButton } from './button-type.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        {\n          name: 'button',\n          component: FormlyFieldButton,\n          wrappers: ['fieldset', 'label'],\n          defaultOptions: {\n            templateOptions: {\n              btnType: 'default',\n              type: 'button',\n            },\n          },\n        },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyFieldButton,\n  ],\n})\nexport class AppModule { }\n"},wed3:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},zMya:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FieldType <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-field-button\'</span><span class="token punctuation" >,</span>\n  template<span class="token punctuation" >:</span> `\n    <span class="token operator" >&lt;</span>div<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>button <span class="token punctuation" >[</span>type<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"to.type"</span> <span class="token punctuation" >[</span>ngClass<span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"\'btn btn-\' + to.btnType"</span> <span class="token punctuation" >(</span>click<span class="token punctuation" >)</span><span class="token operator" >=</span><span class="token string" >"onClick($event)"</span><span class="token operator" >></span>\n        <span class="token punctuation" >{</span><span class="token punctuation" >{</span> to<span class="token punctuation" >.</span>text <span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>button<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n  `<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >FormlyFieldButton</span> <span class="token keyword" >extends</span> <span class="token class-name" >FieldType</span> <span class="token punctuation" >{</span>\n  <span class="token function" >onClick</span><span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>to<span class="token punctuation" >.</span>onClick<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>to<span class="token punctuation" >.</span><span class="token function" >onClick</span><span class="token punctuation" >(</span>$event<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'}}]);