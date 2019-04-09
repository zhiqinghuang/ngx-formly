(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"991Q":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},"9UU8":function(n,s,a){"use strict";a.r(s);var l=a("CcnG"),t=a("gIcY"),e=function(){function n(){var n=this;this.form=new t.FormGroup({}),this.model={},this.options={},this.fields=[{key:"firstName",type:"input",templateOptions:{label:"First name",placeholder:"Type in here to display the hidden field using slideInOut animation"}},{key:"lastname",type:"input",hideExpression:function(s){return!n.model.firstName},templateOptions:{label:"Last name"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),o={examples:[{title:"Hide fields with `@angular/animations`",component:e,files:[{file:"app.component.html",content:a("aedG"),filecontent:a("991Q")},{file:"app.component.ts",content:a("JGb/"),filecontent:a("pogN")},{file:"animation-wrapper.component.ts",content:a("BkKG"),filecontent:a("EOk3")},{file:"app.module.ts",content:a("dM+o"),filecontent:a("mF48")}]}]},i=function(){return function(){}}(),p=a("NcP4"),r=a("AcC/"),m=a("htty"),c=a("LgGJ"),d=a("MT1c"),u=a("1Q/V"),f=a("9+aI"),h=a("haId"),y=a("LJsP"),g=a("yR2A"),j=a("UFMs"),b=a("mrSG"),w=a("HkYz"),x=a("ihYY"),v=(Object(x.trigger)("slideInOut",[Object(x.state)("in",Object(x.style)({"max-height":"500px",opacity:"1",visibility:"visible"})),Object(x.state)("out",Object(x.style)({"max-height":"0px",opacity:"0",visibility:"hidden"})),Object(x.transition)("in => out",[Object(x.group)([Object(x.animate)("400ms ease-in-out",Object(x.style)({opacity:"0"})),Object(x.animate)("600ms ease-in-out",Object(x.style)({"max-height":"0px"})),Object(x.animate)("700ms ease-in-out",Object(x.style)({visibility:"hidden"}))])]),Object(x.transition)("out => in",[Object(x.group)([Object(x.animate)("1ms ease-in-out",Object(x.style)({visibility:"visible"})),Object(x.animate)("600ms ease-in-out",Object(x.style)({"max-height":"500px"})),Object(x.animate)("800ms ease-in-out",Object(x.style)({opacity:"1"}))])])]),function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(b.__extends)(s,n),s}(w.c)),C=l["\u0275crt"]({encapsulation:2,styles:[],data:{animation:[{type:7,name:"slideInOut",definitions:[{type:0,name:"in",styles:{type:6,styles:{"max-height":"500px",opacity:"1",visibility:"visible"},offset:null},options:void 0},{type:0,name:"out",styles:{type:6,styles:{"max-height":"0px",opacity:"0",visibility:"hidden"},offset:null},options:void 0},{type:1,expr:"in => out",animation:[{type:3,steps:[{type:4,styles:{type:6,styles:{opacity:"0"},offset:null},timings:"400ms ease-in-out"},{type:4,styles:{type:6,styles:{"max-height":"0px"},offset:null},timings:"600ms ease-in-out"},{type:4,styles:{type:6,styles:{visibility:"hidden"},offset:null},timings:"700ms ease-in-out"}],options:null}],options:null},{type:1,expr:"out => in",animation:[{type:3,steps:[{type:4,styles:{type:6,styles:{visibility:"visible"},offset:null},timings:"1ms ease-in-out"},{type:4,styles:{type:6,styles:{"max-height":"500px"},offset:null},timings:"600ms ease-in-out"},{type:4,styles:{type:6,styles:{opacity:"1"},offset:null},timings:"800ms ease-in-out"}],options:null}],options:null}],options:{}}]}});function k(n){return l["\u0275vid"](0,[l["\u0275qud"](402653184,1,{fieldComponent:0}),(n()(),l["\u0275eld"](1,0,null,null,1,"div",[],[[24,"@slideInOut",0]],null,null,null,null)),(n()(),l["\u0275eld"](2,16777216,[[1,3],["fieldComponent",1]],null,0,null,null,null,null,null,null,null))],null,function(n,s){n(s,1,0,s.component.field.hide?"out":"in")})}function F(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-wrapper-animation",[],null,null,null,k,C)),l["\u0275did"](1,49152,null,0,v,[],null,null)],null,null)}var O=l["\u0275ccf"]("formly-wrapper-animation",v,F,{field:"field",model:"model",form:"form",options:"options"},{},[]),M=a("pMnS"),_=a("4o01"),A=a("Dl9q"),R=a("UcnZ"),G=a("DAbo"),I=a("9Glx"),N=l["\u0275crt"]({encapsulation:0,styles:["formly-field {\n      display: block !important;\n    }"],data:{}});function S(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var t=!0,e=n.component;return"submit"===s&&(t=!1!==l["\u0275nov"](n,2).onSubmit(a)&&t),"reset"===s&&(t=!1!==l["\u0275nov"](n,2).onReset()&&t),"ngSubmit"===s&&(t=!1!==e.submit()&&t),t},null,null)),l["\u0275did"](1,16384,null,0,t["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,t.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,t.ControlContainer,null,[t.FormGroupDirective]),l["\u0275did"](4,16384,null,0,t.NgControlStatusGroup,[[4,t.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,A.b,A.a)),l["\u0275prd"](512,null,R.a,R.a,[G.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,I.a,[R.a,G.b,[8,null],[2,t.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)},function(n,s){n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending)})}function E(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,N)),l["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}var L=l["\u0275ccf"]("formly-app-example",e,E,{},{},[]),W=a("Ip0R"),V=a("M2Lx"),D=a("eDkP"),P=a("Fzqc"),J=a("v9Dh"),U=a("ZYjt"),B=a("Wf4p"),T=a("6LlJ"),Y=a("F6kA"),q=a("dWZg"),Z=a("lLAP"),H=a("4c35"),Q=a("qAlS"),z=a("La40"),K=a("SMsm"),X=a("UodH"),$=a("5QwG"),nn=a("qkla"),sn=a("iZhS"),an=a("XR12"),ln=a("me7w"),tn=a("N3PW"),en=a("l4pn"),on=a("Fv2i"),pn=a("wBYW"),rn=a("IE48"),mn=a("Q4Tx");function cn(n){n.wrappers&&n.wrappers.includes("animation")||(n.wrappers=["animation"].concat(n.wrappers||[]))}var dn=function(){return function(){}}(),un=a("Nsh5"),fn=a("8mMr"),hn=a("mqvi"),yn=a("lYui"),gn=a("VGFS"),jn=a("1ey0"),bn=a("ZYCi"),wn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return xn});var xn=l["\u0275cmf"](i,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,r.a,m.a,c.a,d.a,u.a,f.a,h.a,y.a,g.a,j.a,O,M.a,_.a,L]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,W.NgLocalization,W.NgLocaleLocalization,[l.LOCALE_ID,[2,W["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,V.c,V.c,[]),l["\u0275mpd"](4608,D.c,D.c,[D.i,D.e,l.ComponentFactoryResolver,D.h,D.f,l.Injector,l.NgZone,W.DOCUMENT,P.b,[2,W.Location]]),l["\u0275mpd"](5120,D.j,D.k,[D.c]),l["\u0275mpd"](5120,J.b,J.c,[D.c]),l["\u0275mpd"](4608,U.HAMMER_GESTURE_CONFIG,B.c,[[2,B.g],[2,B.l]]),l["\u0275mpd"](4608,T.a,T.a,[]),l["\u0275mpd"](4608,Y.a,Y.a,[]),l["\u0275mpd"](4608,t.FormBuilder,t.FormBuilder,[]),l["\u0275mpd"](4608,t["\u0275angular_packages_forms_forms_j"],t["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,R.a,R.a,[G.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,W.CommonModule,W.CommonModule,[]),l["\u0275mpd"](1073742336,q.b,q.b,[]),l["\u0275mpd"](1073742336,V.d,V.d,[]),l["\u0275mpd"](1073742336,Z.a,Z.a,[]),l["\u0275mpd"](1073742336,P.a,P.a,[]),l["\u0275mpd"](1073742336,H.g,H.g,[]),l["\u0275mpd"](1073742336,Q.c,Q.c,[]),l["\u0275mpd"](1073742336,D.g,D.g,[]),l["\u0275mpd"](1073742336,B.l,B.l,[[2,B.d],[2,U.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,J.e,J.e,[]),l["\u0275mpd"](1073742336,B.v,B.v,[]),l["\u0275mpd"](1073742336,z.j,z.j,[]),l["\u0275mpd"](1073742336,K.c,K.c,[]),l["\u0275mpd"](1073742336,X.c,X.c,[]),l["\u0275mpd"](1073742336,$.b,$.b,[]),l["\u0275mpd"](512,G.b,G.b,[]),l["\u0275mpd"](1024,G.a,function(n,s){return[{wrappers:[{name:"addons",component:nn.a}],extensions:[{name:"addons",extension:{postPopulate:sn.a}}]},an.b(n),{types:[{name:"input",component:ln.a,wrappers:["form-field"]},{name:"checkbox",component:tn.a,wrappers:["form-field"]},{name:"radio",component:en.a,wrappers:["form-field"]},{name:"select",component:on.a,wrappers:["form-field"]},{name:"textarea",component:pn.a,wrappers:["form-field"]},{name:"multicheckbox",component:rn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:mn.a}]},an.b(s),{wrappers:[{name:"animation",component:v}],extensions:[{name:"animation",extension:{onPopulate:cn}}]}]},[G.b,G.b]),l["\u0275mpd"](1073742336,an.a,an.a,[G.b,[2,G.a]]),l["\u0275mpd"](1073742336,un.h,un.h,[]),l["\u0275mpd"](1073742336,fn.b,fn.b,[]),l["\u0275mpd"](1073742336,hn.a,hn.a,[]),l["\u0275mpd"](1073742336,t["\u0275angular_packages_forms_forms_bc"],t["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,t.ReactiveFormsModule,t.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,yn.a,yn.a,[]),l["\u0275mpd"](1073742336,gn.a,gn.a,[]),l["\u0275mpd"](1073742336,jn.a,jn.a,[]),l["\u0275mpd"](1073742336,dn,dn,[]),l["\u0275mpd"](1073742336,bn.s,bn.s,[[2,bn.y],[2,bn.p]]),l["\u0275mpd"](1073742336,i,i,[]),l["\u0275mpd"](1024,bn.n,function(){return[[{path:"",component:wn.a,data:o}]]},[])])})},BkKG:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, ViewChild, ViewContainerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldWrapper } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-keyword">import</span> { trigger, state, style, transition, animate, group } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/animations\'</span>;\n\n<span class="hljs-keyword">const</span> SlideInOutAnimation = [\n  trigger(<span class="hljs-string">\'slideInOut\'</span>, [\n    state(<span class="hljs-string">\'in\'</span>, style({\n      <span class="hljs-string">\'max-height\'</span>: <span class="hljs-string">\'500px\'</span>, <span class="hljs-string">\'opacity\'</span>: <span class="hljs-string">\'1\'</span>, <span class="hljs-string">\'visibility\'</span>: <span class="hljs-string">\'visible\'</span>,\n    })),\n    state(<span class="hljs-string">\'out\'</span>, style({\n      <span class="hljs-string">\'max-height\'</span>: <span class="hljs-string">\'0px\'</span>, <span class="hljs-string">\'opacity\'</span>: <span class="hljs-string">\'0\'</span>, <span class="hljs-string">\'visibility\'</span>: <span class="hljs-string">\'hidden\'</span>,\n    })),\n    transition(<span class="hljs-string">\'in =&gt; out\'</span>, [group([\n      animate(<span class="hljs-string">\'400ms ease-in-out\'</span>, style({\n        <span class="hljs-string">\'opacity\'</span>: <span class="hljs-string">\'0\'</span>,\n      })),\n      animate(<span class="hljs-string">\'600ms ease-in-out\'</span>, style({\n        <span class="hljs-string">\'max-height\'</span>: <span class="hljs-string">\'0px\'</span>,\n      })),\n      animate(<span class="hljs-string">\'700ms ease-in-out\'</span>, style({\n        <span class="hljs-string">\'visibility\'</span>: <span class="hljs-string">\'hidden\'</span>,\n      })),\n    ],\n    )]),\n    transition(<span class="hljs-string">\'out =&gt; in\'</span>, [group([\n      animate(<span class="hljs-string">\'1ms ease-in-out\'</span>, style({\n        <span class="hljs-string">\'visibility\'</span>: <span class="hljs-string">\'visible\'</span>,\n      })),\n      animate(<span class="hljs-string">\'600ms ease-in-out\'</span>, style({\n        <span class="hljs-string">\'max-height\'</span>: <span class="hljs-string">\'500px\'</span>,\n      })),\n      animate(<span class="hljs-string">\'800ms ease-in-out\'</span>, style({\n        <span class="hljs-string">\'opacity\'</span>: <span class="hljs-string">\'1\'</span>,\n      })),\n    ],\n    )]),\n  ]),\n];\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-wrapper-animation\'</span>,\n  template: <span class="hljs-string">`\n    &lt;div [@slideInOut]="field.hide ? \'out\' : \'in\'"&gt;\n      &lt;ng-container #fieldComponent&gt;&lt;/ng-container&gt;\n    &lt;/div&gt;\n  `</span>,\n  animations: [SlideInOutAnimation],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AnimationWrapperComponent <span class="hljs-keyword">extends</span> FieldWrapper {\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'fieldComponent\'</span>, {read: ViewContainerRef}) fieldComponent: ViewContainerRef;\n}\n'},EOk3:function(n,s){n.exports="import { Component, ViewChild, ViewContainerRef } from '@angular/core';\nimport { FieldWrapper } from '@ngx-formly/core';\n\nimport { trigger, state, style, transition, animate, group } from '@angular/animations';\n\nconst SlideInOutAnimation = [\n  trigger('slideInOut', [\n    state('in', style({\n      'max-height': '500px', 'opacity': '1', 'visibility': 'visible',\n    })),\n    state('out', style({\n      'max-height': '0px', 'opacity': '0', 'visibility': 'hidden',\n    })),\n    transition('in => out', [group([\n      animate('400ms ease-in-out', style({\n        'opacity': '0',\n      })),\n      animate('600ms ease-in-out', style({\n        'max-height': '0px',\n      })),\n      animate('700ms ease-in-out', style({\n        'visibility': 'hidden',\n      })),\n    ],\n    )]),\n    transition('out => in', [group([\n      animate('1ms ease-in-out', style({\n        'visibility': 'visible',\n      })),\n      animate('600ms ease-in-out', style({\n        'max-height': '500px',\n      })),\n      animate('800ms ease-in-out', style({\n        'opacity': '1',\n      })),\n    ],\n    )]),\n  ]),\n];\n\n@Component({\n  selector: 'formly-wrapper-animation',\n  template: `\n    <div [@slideInOut]=\"field.hide ? 'out' : 'in'\">\n      <ng-container #fieldComponent></ng-container>\n    </div>\n  `,\n  animations: [SlideInOutAnimation],\n})\nexport class AnimationWrapperComponent extends FieldWrapper {\n  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;\n}\n"},"JGb/":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n  <span class="hljs-comment">// formly-form: disable default hide behavior</span>\n  styles: [<span class="hljs-string">`\n    ::ng-deep formly-field {\n      display: block !important;\n    }\n  `</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'firstName\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'First name\'</span>,\n        placeholder: <span class="hljs-string">\'Type in here to display the hidden field using slideInOut animation\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'lastname\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      hideExpression: <span class="hljs-function">(<span class="hljs-params">model</span>) =&gt;</span> !<span class="hljs-keyword">this</span>.model.firstName,\n      templateOptions: {\n        label: <span class="hljs-string">\'Last name\'</span>,\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},aedG:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},"dM+o":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AnimationWrapperComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./animation-wrapper.component\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">animationExtension</span>(<span class="hljs-params">field: FormlyFieldConfig</span>) </span>{\n  <span class="hljs-keyword">if</span> (field.wrappers &amp;&amp; field.wrappers.includes(<span class="hljs-string">\'animation\'</span>)) {\n    <span class="hljs-keyword">return</span>;\n  }\n\n  field.wrappers = [<span class="hljs-string">\'animation\'</span>, ...(field.wrappers || [])];\n}\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      wrappers: [\n        { name: <span class="hljs-string">\'animation\'</span>, component: AnimationWrapperComponent },\n      ],\n      extensions: [\n        { name: <span class="hljs-string">\'animation\'</span>, extension: { onPopulate: animationExtension } },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    AnimationWrapperComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},mF48:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AnimationWrapperComponent } from './animation-wrapper.component';\nimport { AppComponent } from './app.component';\n\nexport function animationExtension(field: FormlyFieldConfig) {\n  if (field.wrappers && field.wrappers.includes('animation')) {\n    return;\n  }\n\n  field.wrappers = ['animation', ...(field.wrappers || [])];\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      wrappers: [\n        { name: 'animation', component: AnimationWrapperComponent },\n      ],\n      extensions: [\n        { name: 'animation', extension: { onPopulate: animationExtension } },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    AnimationWrapperComponent,\n  ],\n})\nexport class AppModule { }\n"},pogN:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n  // formly-form: disable default hide behavior\n  styles: [`\n    ::ng-deep formly-field {\n      display: block !important;\n    }\n  `],\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'firstName',\n      type: 'input',\n      templateOptions: {\n        label: 'First name',\n        placeholder: 'Type in here to display the hidden field using slideInOut animation',\n      },\n    },\n    {\n      key: 'lastname',\n      type: 'input',\n      hideExpression: (model) => !this.model.firstName,\n      templateOptions: {\n        label: 'Last name',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"}}]);