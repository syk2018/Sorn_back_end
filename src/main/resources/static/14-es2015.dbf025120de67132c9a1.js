(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/yGZ":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),i=e("mrSG"),u=e("s7LF"),s=e("IheW"),r=e("kScs"),o=e("ZZ/e");class a{constructor(n,l,e,t,i){this.http=n,this.loadingController=l,this.toastController=e,this.router=t,this.storage=i,this.signin_isSelected=!0,this.isChanged=!0,this.userInformation={userId:0,useravatar:0,usernickname:"",userdescription:"",userismanager:0,username:"",userpwd:"",userregdate:null},this.signinForm=new u.e({username:new u.c("",[u.n.required,u.n.minLength(5)]),userpwd:new u.c("",[u.n.required,u.n.minLength(10),u.n.maxLength(20)])}),this.signupForm=new u.e({username:new u.c("",[u.n.required,u.n.minLength(5)]),userpwd:new u.c("",[u.n.required,u.n.minLength(10),u.n.maxLength(20)]),re_password:new u.c("",[u.n.required,u.n.minLength(10),u.n.maxLength(20)]),usernickname:new u.c("",[u.n.required])})}ngOnInit(){this.setSigninButtonCurrentClassSelected(),this.setSigninButtonStyleClassSelected(),this.setSignupButtonCurrentClassSelected(),this.setSignupButtonStyleClassSelected(),this.setLabelCurrentClassRight()}setSigninButtonCurrentClassSelected(){this.signinButtonCurrentClass={position_absolute_center:this.signin_isSelected,position_absolute_left:!this.signin_isSelected,transition_quick:!0}}setSigninButtonStyleClassSelected(){this.signinButtonStyleClass={botton_selected:this.signin_isSelected,botton_unselected:!this.signin_isSelected,text_fonts:!0,transition_slow:!0}}setSignupButtonStyleClassSelected(){this.signupButtonStyleClass={botton_selected:!this.signin_isSelected,botton_unselected:this.signin_isSelected,text_fonts:!0,transition_slow:!0}}setSignupButtonCurrentClassSelected(){this.signupButtonCurrentClass={position_absolute_center:!this.signin_isSelected,position_absolute_right:this.signin_isSelected,transition_quick:!0}}setLabelCurrentClassRight(){this.orLabelCurrentClass={position_absolute_mid_right:this.signin_isSelected,position_absolute_mid_left:!this.signin_isSelected,text_fonts:!0,transition_slow:!0}}setSelectTrue(){this.signin_isSelected=!0,this.setSigninButtonCurrentClassSelected(),this.setSigninButtonStyleClassSelected(),this.setSignupButtonCurrentClassSelected(),this.setSignupButtonStyleClassSelected(),this.setLabelCurrentClassRight()}setSelectFalse(){this.signin_isSelected=!1,this.setSigninButtonCurrentClassSelected(),this.setSigninButtonStyleClassSelected(),this.setSignupButtonCurrentClassSelected(),this.setSignupButtonStyleClassSelected(),this.setLabelCurrentClassRight()}change(){this.isChanged=!this.isChanged}onSigninSubmit(){return i.b(this,void 0,void 0,function*(){const n=yield this.loadingController.create();yield n.present(),this.signinForm.controls.userpwd.setValue(r.Md5.hashStr(this.signinForm.controls.userpwd.value).toString());const l={headers:new s.g({"Content-Type":"application/json"})};this.http.post("https://syk2018.cn/users/login",this.signinForm.value,l).subscribe(l=>{null!=l.data?this.storage.set("user",l.data[0]).then(()=>{this.http.get("https://syk2018.cn/file/getById?id="+l.data[0].useravatar).subscribe(l=>{this.storage.set("avatar",l.data.fileurl).then(()=>{this.storage.get("user").then(l=>{this.presentToast("Welcome back,"+l.usernickname+"!",3e3),n.dismiss(),this.router.navigateByUrl("/tabs/home")})})})}):(n.dismiss(),this.presentToast("Wrong username or password.",3e3),this.signinForm.reset())})})}onSignupSubmit(){return i.b(this,void 0,void 0,function*(){this.signupForm.controls.userpwd.setValue(r.Md5.hashStr(this.signupForm.controls.userpwd.value).toString());const n={headers:new s.g({"Content-Type":"application/json"})},l=yield this.loadingController.create();yield l.present(),this.http.post("https://syk2018.cn/users/signUp",this.signupForm.value,n).subscribe(n=>{null!=n.data?this.storage.set("user",n.data[0]).then(()=>{this.http.get("https://syk2018.cn/file/getById?id="+n.data[0].useravatar).subscribe(n=>{this.storage.set("avatar",n.data.fileurl).then(()=>{this.storage.get("user").then(n=>{this.presentToast("Welcome,"+n.usernickname+"!",3e3),l.dismiss(),this.router.navigateByUrl("/tabs/home")})})})}):(l.dismiss(),this.presentToast("Sign up filed.",3e3))})})}presentToast(n,l){return i.b(this,void 0,void 0,function*(){(yield this.toastController.create({message:n,duration:l})).present()})}}class b{}var c=e("pMnS"),g=e("oBZk"),d=e("iInd"),p=e("SVse"),h=e("xgBC"),m=t.pb({encapsulation:0,styles:[[".content[_ngcontent-%COMP%]{height:100%;background-color:transparent;display:-webkit-box;display:flex;justify-items:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.forms[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;width:100%}.title[_ngcontent-%COMP%]{color:#fff;font-size:1.6rem;font-weight:bolder}.align_center[_ngcontent-%COMP%]{text-align:center}.item_background_transparent[_ngcontent-%COMP%]{--background:transparent}.item_border_redius[_ngcontent-%COMP%]{--border-radius:30px}.input_placeholder_coler[_ngcontent-%COMP%]{--placeholder-color:#0A46AE}.margin_top[_ngcontent-%COMP%]{margin-top:1rem}.margin_top_more[_ngcontent-%COMP%]{margin-top:1.5rem}.background_primary[_ngcontent-%COMP%]{--background:var(--ion-color-primary)}.background_border_primary[_ngcontent-%COMP%]{--background:#0A46AE}.text_fonts[_ngcontent-%COMP%]{color:#fff;font-size:1rem}.checkbox_size[_ngcontent-%COMP%]{--size:1rem;margin-top:1rem;margin-bottom:1rem}.check[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.check[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{text-align:center;-webkit-box-flex:1;flex-grow:1}.logo[_ngcontent-%COMP%]{max-width:100%}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:35%}.buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.bottons_shadow_none[_ngcontent-%COMP%]{--box-shadow:none}.block_test[_ngcontent-%COMP%]{background-color:#0ff}.botton_selected[_ngcontent-%COMP%]{color:#fff;white-space:nowrap;font-size:1.6rem;padding:.5rem;border-radius:.5rem;font-weight:bolder}.botton_unselected[_ngcontent-%COMP%]{color:#fff;white-space:nowrap;font-size:1rem;padding:.5rem;border-radius:.5rem}.margin_bottom[_ngcontent-%COMP%]{margin-bottom:1rem}.margin_top_much[_ngcontent-%COMP%]{margin-top:3rem}.position_relative[_ngcontent-%COMP%]{position:relative}.position_absolute_center[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.position_absolute_left[_ngcontent-%COMP%]{position:absolute;left:5%;top:50%;-webkit-transform:translate(0,-50%);transform:translate(0,-50%)}.position_absolute_right[_ngcontent-%COMP%]{position:absolute;left:95%;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.position_absolute_mid_right[_ngcontent-%COMP%]{position:absolute;left:75%;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.position_absolute_mid_left[_ngcontent-%COMP%]{position:absolute;left:25%;top:50%;-webkit-transform:translate(0,-50%);transform:translate(0,-50%)}.transition_quick[_ngcontent-%COMP%]{-webkit-transition:.75s;transition:all .75s}.transition_slow[_ngcontent-%COMP%]{-webkit-transition:1s;transition:all 1s}.over_flow[_ngcontent-%COMP%]{white-space:nowrap;overflow:visible}"]],data:{animation:[{type:7,name:"flyUpTrigger_multiple",definitions:[{type:1,expr:":enter",animation:[{type:11,selector:"ion-item",animation:[{type:6,styles:{transform:"translateY(100%)",opacity:0},offset:null},{type:12,timings:-30,animation:[{type:4,styles:{type:6,styles:{opacity:1,transform:"none"},offset:null},timings:"1s cubic-bezier(0.35, 0, 0.25, 1)"}]}],options:null}],options:null}],options:{}},{type:7,name:"flyDownTrigger_multiple",definitions:[{type:1,expr:":enter",animation:[{type:11,selector:"ion-item",animation:[{type:6,styles:{transform:"translateY(-100%)",opacity:0},offset:null},{type:12,timings:-30,animation:[{type:4,styles:{type:6,styles:{opacity:1,transform:"none"},offset:null},timings:"1s cubic-bezier(0.35, 0, 0.25, 1)"}]}],options:null}],options:null}],options:{}},{type:7,name:"flyUpTrigger",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(100%)",opacity:0},offset:null},{type:3,steps:[{type:4,styles:{type:6,styles:{transform:"translateY(0)"},offset:null},timings:"0.3s ease"},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"0.3s ease"}],options:null}],options:null}],options:{}},{type:7,name:"flyDownTrigger",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(-100%)",opacity:0},offset:null},{type:3,steps:[{type:4,styles:{type:6,styles:{transform:"translateY(0)"},offset:null},timings:"0.5s ease"},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"0.5s ease"}],options:null}],options:null}],options:{}},{type:7,name:"flyInOutLeft",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateX(-100%)"},offset:null},{type:4,styles:null,timings:500}],options:null}],options:{}},{type:7,name:"flyInOutRight",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateX(100%)"},offset:null},{type:4,styles:null,timings:500}],options:null}],options:{}},{type:7,name:"InsertRemoveTrigger",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"2s"}],options:null}],options:{}},{type:7,name:"InsertRemoveTrigger_Quick",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:600}],options:null}],options:{}}]}});function f(n){return t.Ib(0,[(n()(),t.rb(0,0,null,null,18,"div",[["class","check"]],null,null,null,null,null)),(n()(),t.rb(1,0,null,null,8,"ion-item",[["class","item_border_redius margin_top item_background_transparent text_fonts"],["lines","none"]],null,null,null,g.E,g.l)),t.qb(2,49152,null,0,o.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.rb(3,0,null,0,3,"ion-checkbox",[["checked","true"],["class","checkbox_size"],["color","light"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0;return"ionBlur"===l&&(i=!1!==t.Db(n,6)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t.Db(n,6)._handleIonChange(e.target.checked)&&i),i},g.x,g.e)),t.Eb(5120,null,u.h,function(n){return[n]},[o.c]),t.qb(5,49152,null,0,o.r,[t.h,t.k,t.x],{checked:[0,"checked"],color:[1,"color"]},null),t.qb(6,16384,null,0,o.c,[t.k],null,null),(n()(),t.rb(7,0,null,0,2,"ion-label",[["class","over_flow"]],null,null,null,g.F,g.m)),t.qb(8,49152,null,0,o.N,[t.h,t.k,t.x],null,null),(n()(),t.Hb(-1,0,[" Remember me "])),(n()(),t.rb(10,0,null,null,8,"ion-item",[["class","item_border_redius margin_top item_background_transparent text_fonts"],["lines","none"],["routerLink","/forget"]],null,[[null,"click"]],function(n,l,e){var i=!0;return"click"===l&&(i=!1!==t.Db(n,12).onClick()&&i),"click"===l&&(i=!1!==t.Db(n,13).onClick(e)&&i),i},g.E,g.l)),t.qb(11,49152,null,0,o.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),t.qb(12,16384,null,0,d.n,[d.m,d.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.qb(13,737280,null,0,o.Kb,[p.g,o.Hb,t.k,d.m,[2,d.n]],null,null),(n()(),t.rb(14,0,null,0,1,"ion-icon",[["color","light"],["name","help-circle"]],null,null,null,g.C,g.j)),t.qb(15,49152,null,0,o.C,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.rb(16,0,null,0,2,"ion-label",[["class","over_flow"]],null,null,null,g.F,g.m)),t.qb(17,49152,null,0,o.N,[t.h,t.k,t.x],null,null),(n()(),t.Hb(-1,0,[" Forget password\uff1f "]))],function(n,l){n(l,2,0,"none"),n(l,5,0,"true","light"),n(l,11,0,"none"),n(l,12,0,"/forget"),n(l,13,0),n(l,15,0,"light","help-circle")},null)}function _(n){return t.Ib(0,[(n()(),t.rb(0,0,null,null,1,"ion-item",[["class","item_border_redius margin_top item_background_transparent"],["disabled","true"],["lines","none"]],null,null,null,g.E,g.l)),t.qb(1,49152,null,0,o.H,[t.h,t.k,t.x],{disabled:[0,"disabled"],lines:[1,"lines"]},null)],function(n,l){n(l,1,0,"true","none")},null)}function y(n){return t.Ib(0,[(n()(),t.rb(0,0,null,null,1,"div",[],[[24,"@InsertRemoveTrigger_Quick",0]],null,null,null,null)),(n()(),t.Hb(-1,null,["Login"]))],null,function(n,l){n(l,0,0,void 0)})}function C(n){return t.Ib(0,[(n()(),t.rb(0,0,null,null,39,"form",[["class","align_center margin_top_more"],["novalidate",""],["padding",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var i=!0,u=n.component;return"submit"===l&&(i=!1!==t.Db(n,2).onSubmit(e)&&i),"reset"===l&&(i=!1!==t.Db(n,2).onReset()&&i),"ngSubmit"===l&&(i=!1!==u.onSigninSubmit()&&i),i},null,null)),t.qb(1,16384,null,0,u.r,[],null,null),t.qb(2,540672,null,0,u.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Eb(2048,null,u.a,null,[u.f]),t.qb(4,16384,null,0,u.k,[[4,u.a]],null,null),(n()(),t.rb(5,0,null,null,28,"div",[],[[24,"@flyDownTrigger_multiple",0]],null,null,null,null)),(n()(),t.rb(6,0,null,null,12,"ion-item",[["class","item_border_redius margin_top"],["lines","none"]],null,null,null,g.E,g.l)),t.qb(7,49152,null,0,o.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.rb(8,0,null,0,3,"ion-label",[],null,null,null,g.F,g.m)),t.qb(9,49152,null,0,o.N,[t.h,t.k,t.x],null,null),(n()(),t.rb(10,0,null,0,1,"ion-icon",[["color","primary"],["name","person"]],null,null,null,g.C,g.j)),t.qb(11,49152,null,0,o.C,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.rb(12,0,null,0,6,"ion-input",[["class","input_placeholder_coler"],["formControlName","username"],["placeholder","Username:"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0;return"ionBlur"===l&&(i=!1!==t.Db(n,13)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t.Db(n,13)._handleInputEvent(e.target.value)&&i),i},g.D,g.k)),t.qb(13,16384,null,0,o.Lb,[t.k],null,null),t.Eb(1024,null,u.h,function(n){return[n]},[o.Lb]),t.qb(15,671744,null,0,u.d,[[3,u.a],[8,null],[8,null],[6,u.h],[2,u.q]],{name:[0,"name"]},null),t.Eb(2048,null,u.i,null,[u.d]),t.qb(17,16384,null,0,u.j,[[4,u.i]],null,null),t.qb(18,49152,null,0,o.G,[t.h,t.k,t.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.rb(19,0,null,null,12,"ion-item",[["class","item_border_redius margin_top"],["lines","none"]],null,null,null,g.E,g.l)),t.qb(20,49152,null,0,o.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.rb(21,0,null,0,3,"ion-label",[],null,null,null,g.F,g.m)),t.qb(22,49152,null,0,o.N,[t.h,t.k,t.x],null,null),(n()(),t.rb(23,0,null,0,1,"ion-icon",[["color","primary"],["name","lock"]],null,null,null,g.C,g.j)),t.qb(24,49152,null,0,o.C,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.rb(25,0,null,0,6,"ion-input",[["class","input_placeholder_coler"],["formControlName","userpwd"],["placeholder","Password:"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0;return"ionBlur"===l&&(i=!1!==t.Db(n,26)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t.Db(n,26)._handleInputEvent(e.target.value)&&i),i},g.D,g.k)),t.qb(26,16384,null,0,o.Lb,[t.k],null,null),t.Eb(1024,null,u.h,function(n){return[n]},[o.Lb]),t.qb(28,671744,null,0,u.d,[[3,u.a],[8,null],[8,null],[6,u.h],[2,u.q]],{name:[0,"name"]},null),t.Eb(2048,null,u.i,null,[u.d]),t.qb(30,16384,null,0,u.j,[[4,u.i]],null,null),t.qb(31,49152,null,0,o.G,[t.h,t.k,t.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.gb(16777216,null,null,1,null,f)),t.qb(33,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,_)),t.qb(35,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.rb(36,0,null,null,3,"ion-button",[["class","background_border_primary margin_top"],["expand","block"],["type","submit"]],[[24,"@flyInOutLeft",0]],null,null,g.v,g.c)),t.qb(37,49152,null,0,o.k,[t.h,t.k,t.x],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(n()(),t.gb(16777216,null,0,1,null,y)),t.qb(39,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,e.signinForm),n(l,7,0,"none"),n(l,11,0,"primary","person"),n(l,15,0,"username"),n(l,18,0,"Username:","text"),n(l,20,0,"none"),n(l,24,0,"primary","lock"),n(l,28,0,"userpwd"),n(l,31,0,"Password:","password"),n(l,33,0,e.signin_isSelected),n(l,35,0,e.signin_isSelected),n(l,37,0,!e.signinForm.valid,"block","submit"),n(l,39,0,e.signin_isSelected)},function(n,l){n(l,0,0,t.Db(l,4).ngClassUntouched,t.Db(l,4).ngClassTouched,t.Db(l,4).ngClassPristine,t.Db(l,4).ngClassDirty,t.Db(l,4).ngClassValid,t.Db(l,4).ngClassInvalid,t.Db(l,4).ngClassPending),n(l,5,0,void 0),n(l,12,0,t.Db(l,17).ngClassUntouched,t.Db(l,17).ngClassTouched,t.Db(l,17).ngClassPristine,t.Db(l,17).ngClassDirty,t.Db(l,17).ngClassValid,t.Db(l,17).ngClassInvalid,t.Db(l,17).ngClassPending),n(l,25,0,t.Db(l,30).ngClassUntouched,t.Db(l,30).ngClassTouched,t.Db(l,30).ngClassPristine,t.Db(l,30).ngClassDirty,t.Db(l,30).ngClassValid,t.Db(l,30).ngClassInvalid,t.Db(l,30).ngClassPending),n(l,36,0,void 0)})}function k(n){return t.Ib(0,[(n()(),t.rb(0,0,null,null,12,"ion-item",[["class","item_border_redius margin_top"],["lines","none"]],null,null,null,g.E,g.l)),t.qb(1,49152,null,0,o.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.rb(2,0,null,0,3,"ion-label",[],null,null,null,g.F,g.m)),t.qb(3,49152,null,0,o.N,[t.h,t.k,t.x],null,null),(n()(),t.rb(4,0,null,0,1,"ion-icon",[["color","primary"],["name","lock"]],null,null,null,g.C,g.j)),t.qb(5,49152,null,0,o.C,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.rb(6,0,null,0,6,"ion-input",[["class","input_placeholder_coler"],["formControlName","re_password"],["placeholder","Repeat password:"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0;return"ionBlur"===l&&(i=!1!==t.Db(n,7)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t.Db(n,7)._handleInputEvent(e.target.value)&&i),i},g.D,g.k)),t.qb(7,16384,null,0,o.Lb,[t.k],null,null),t.Eb(1024,null,u.h,function(n){return[n]},[o.Lb]),t.qb(9,671744,null,0,u.d,[[3,u.a],[8,null],[8,null],[6,u.h],[2,u.q]],{name:[0,"name"]},null),t.Eb(2048,null,u.i,null,[u.d]),t.qb(11,16384,null,0,u.j,[[4,u.i]],null,null),t.qb(12,49152,null,0,o.G,[t.h,t.k,t.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null)],function(n,l){n(l,1,0,"none"),n(l,5,0,"primary","lock"),n(l,9,0,"re_password"),n(l,12,0,"Repeat password:","password")},function(n,l){n(l,6,0,t.Db(l,11).ngClassUntouched,t.Db(l,11).ngClassTouched,t.Db(l,11).ngClassPristine,t.Db(l,11).ngClassDirty,t.Db(l,11).ngClassValid,t.Db(l,11).ngClassInvalid,t.Db(l,11).ngClassPending)})}function v(n){return t.Ib(0,[(n()(),t.rb(0,0,null,null,12,"ion-item",[["class","item_border_redius margin_top"],["lines","none"]],null,null,null,g.E,g.l)),t.qb(1,49152,null,0,o.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.rb(2,0,null,0,3,"ion-label",[],null,null,null,g.F,g.m)),t.qb(3,49152,null,0,o.N,[t.h,t.k,t.x],null,null),(n()(),t.rb(4,0,null,0,1,"ion-icon",[["color","primary"],["name","happy"]],null,null,null,g.C,g.j)),t.qb(5,49152,null,0,o.C,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.rb(6,0,null,0,6,"ion-input",[["class","input_placeholder_coler"],["formControlName","usernickname"],["placeholder","Nickname:"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0;return"ionBlur"===l&&(i=!1!==t.Db(n,7)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t.Db(n,7)._handleInputEvent(e.target.value)&&i),i},g.D,g.k)),t.qb(7,16384,null,0,o.Lb,[t.k],null,null),t.Eb(1024,null,u.h,function(n){return[n]},[o.Lb]),t.qb(9,671744,null,0,u.d,[[3,u.a],[8,null],[8,null],[6,u.h],[2,u.q]],{name:[0,"name"]},null),t.Eb(2048,null,u.i,null,[u.d]),t.qb(11,16384,null,0,u.j,[[4,u.i]],null,null),t.qb(12,49152,null,0,o.G,[t.h,t.k,t.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null)],function(n,l){n(l,1,0,"none"),n(l,5,0,"primary","happy"),n(l,9,0,"usernickname"),n(l,12,0,"Nickname:","text")},function(n,l){n(l,6,0,t.Db(l,11).ngClassUntouched,t.Db(l,11).ngClassTouched,t.Db(l,11).ngClassPristine,t.Db(l,11).ngClassDirty,t.Db(l,11).ngClassValid,t.Db(l,11).ngClassInvalid,t.Db(l,11).ngClassPending)})}function S(n){return t.Ib(0,[(n()(),t.rb(0,0,null,null,1,"div",[],[[24,"@InsertRemoveTrigger_Quick",0]],null,null,null,null)),(n()(),t.Hb(-1,null,["Submit"]))],null,function(n,l){n(l,0,0,void 0)})}function x(n){return t.Ib(0,[(n()(),t.rb(0,0,null,null,39,"form",[["class","align_center margin_top_more"],["novalidate",""],["padding",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var i=!0,u=n.component;return"submit"===l&&(i=!1!==t.Db(n,2).onSubmit(e)&&i),"reset"===l&&(i=!1!==t.Db(n,2).onReset()&&i),"ngSubmit"===l&&(i=!1!==u.onSignupSubmit()&&i),i},null,null)),t.qb(1,16384,null,0,u.r,[],null,null),t.qb(2,540672,null,0,u.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Eb(2048,null,u.a,null,[u.f]),t.qb(4,16384,null,0,u.k,[[4,u.a]],null,null),(n()(),t.rb(5,0,null,null,30,"div",[],[[24,"@flyUpTrigger_multiple",0]],null,null,null,null)),(n()(),t.rb(6,0,null,null,12,"ion-item",[["class","item_border_redius margin_top"],["lines","none"]],null,null,null,g.E,g.l)),t.qb(7,49152,null,0,o.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.rb(8,0,null,0,3,"ion-label",[],null,null,null,g.F,g.m)),t.qb(9,49152,null,0,o.N,[t.h,t.k,t.x],null,null),(n()(),t.rb(10,0,null,0,1,"ion-icon",[["color","primary"],["name","person"]],null,null,null,g.C,g.j)),t.qb(11,49152,null,0,o.C,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.rb(12,0,null,0,6,"ion-input",[["class","input_placeholder_coler"],["formControlName","username"],["placeholder","Username:"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0;return"ionBlur"===l&&(i=!1!==t.Db(n,13)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t.Db(n,13)._handleInputEvent(e.target.value)&&i),i},g.D,g.k)),t.qb(13,16384,null,0,o.Lb,[t.k],null,null),t.Eb(1024,null,u.h,function(n){return[n]},[o.Lb]),t.qb(15,671744,null,0,u.d,[[3,u.a],[8,null],[8,null],[6,u.h],[2,u.q]],{name:[0,"name"]},null),t.Eb(2048,null,u.i,null,[u.d]),t.qb(17,16384,null,0,u.j,[[4,u.i]],null,null),t.qb(18,49152,null,0,o.G,[t.h,t.k,t.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.rb(19,0,null,null,12,"ion-item",[["class","item_border_redius margin_top"],["lines","none"]],null,null,null,g.E,g.l)),t.qb(20,49152,null,0,o.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.rb(21,0,null,0,3,"ion-label",[],null,null,null,g.F,g.m)),t.qb(22,49152,null,0,o.N,[t.h,t.k,t.x],null,null),(n()(),t.rb(23,0,null,0,1,"ion-icon",[["color","primary"],["name","lock"]],null,null,null,g.C,g.j)),t.qb(24,49152,null,0,o.C,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.rb(25,0,null,0,6,"ion-input",[["class","input_placeholder_coler"],["formControlName","userpwd"],["placeholder","Password:"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,e){var i=!0;return"ionBlur"===l&&(i=!1!==t.Db(n,26)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t.Db(n,26)._handleInputEvent(e.target.value)&&i),i},g.D,g.k)),t.qb(26,16384,null,0,o.Lb,[t.k],null,null),t.Eb(1024,null,u.h,function(n){return[n]},[o.Lb]),t.qb(28,671744,null,0,u.d,[[3,u.a],[8,null],[8,null],[6,u.h],[2,u.q]],{name:[0,"name"]},null),t.Eb(2048,null,u.i,null,[u.d]),t.qb(30,16384,null,0,u.j,[[4,u.i]],null,null),t.qb(31,49152,null,0,o.G,[t.h,t.k,t.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.gb(16777216,null,null,1,null,k)),t.qb(33,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,v)),t.qb(35,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.rb(36,0,null,null,3,"ion-button",[["class","background_border_primary margin_top"],["expand","block"],["type","submit"]],[[24,"@flyInOutRight",0]],null,null,g.v,g.c)),t.qb(37,49152,null,0,o.k,[t.h,t.k,t.x],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(n()(),t.gb(16777216,null,0,1,null,S)),t.qb(39,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,e.signupForm),n(l,7,0,"none"),n(l,11,0,"primary","person"),n(l,15,0,"username"),n(l,18,0,"Username:","text"),n(l,20,0,"none"),n(l,24,0,"primary","lock"),n(l,28,0,"userpwd"),n(l,31,0,"Password:","password"),n(l,33,0,!e.signin_isSelected),n(l,35,0,!e.signin_isSelected),n(l,37,0,!e.signupForm.valid,"block","submit"),n(l,39,0,!e.signin_isSelected)},function(n,l){n(l,0,0,t.Db(l,4).ngClassUntouched,t.Db(l,4).ngClassTouched,t.Db(l,4).ngClassPristine,t.Db(l,4).ngClassDirty,t.Db(l,4).ngClassValid,t.Db(l,4).ngClassInvalid,t.Db(l,4).ngClassPending),n(l,5,0,void 0),n(l,12,0,t.Db(l,17).ngClassUntouched,t.Db(l,17).ngClassTouched,t.Db(l,17).ngClassPristine,t.Db(l,17).ngClassDirty,t.Db(l,17).ngClassValid,t.Db(l,17).ngClassInvalid,t.Db(l,17).ngClassPending),n(l,25,0,t.Db(l,30).ngClassUntouched,t.Db(l,30).ngClassTouched,t.Db(l,30).ngClassPristine,t.Db(l,30).ngClassDirty,t.Db(l,30).ngClassValid,t.Db(l,30).ngClassInvalid,t.Db(l,30).ngClassPending),n(l,36,0,void 0)})}function q(n){return t.Ib(0,[(n()(),t.rb(0,0,null,null,30,"ion-content",[["class","background_primary"]],null,null,null,g.y,g.f)),t.qb(1,49152,null,0,o.u,[t.h,t.k,t.x],null,null),(n()(),t.rb(2,0,null,0,28,"div",[["class","content"]],null,null,null,null,null)),(n()(),t.rb(3,0,null,null,27,"div",[["class","forms"]],null,null,null,null,null)),(n()(),t.rb(4,0,null,null,1,"div",[["class","logo align_center margin_bottom"]],null,null,null,null,null)),(n()(),t.rb(5,0,null,null,0,"img",[["src","assets/logo.png"]],[[24,"@InsertRemoveTrigger",0]],null,null,null,null)),(n()(),t.rb(6,0,null,null,20,"div",[["class","position_relative margin_top_much"]],null,null,null,null,null)),(n()(),t.rb(7,0,null,null,6,"div",[],null,null,null,null,null)),t.Eb(512,null,p.q,p.r,[t.q,t.r,t.k,t.B]),t.qb(9,278528,null,0,p.h,[p.q],{ngClass:[0,"ngClass"]},null),(n()(),t.rb(10,0,null,null,3,"a",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.setSelectTrue()&&t),t},null,null)),t.Eb(512,null,p.q,p.r,[t.q,t.r,t.k,t.B]),t.qb(12,278528,null,0,p.h,[p.q],{ngClass:[0,"ngClass"]},null),(n()(),t.Hb(-1,null,["Sign in"])),(n()(),t.rb(14,0,null,null,5,"div",[],null,null,null,null,null)),t.Eb(512,null,p.q,p.r,[t.q,t.r,t.k,t.B]),t.qb(16,278528,null,0,p.h,[p.q],{ngClass:[0,"ngClass"]},null),(n()(),t.rb(17,0,null,null,2,"ion-label",[],null,null,null,g.F,g.m)),t.qb(18,49152,null,0,o.N,[t.h,t.k,t.x],null,null),(n()(),t.Hb(-1,0,["- or -"])),(n()(),t.rb(20,0,null,null,6,"div",[],null,null,null,null,null)),t.Eb(512,null,p.q,p.r,[t.q,t.r,t.k,t.B]),t.qb(22,278528,null,0,p.h,[p.q],{ngClass:[0,"ngClass"]},null),(n()(),t.rb(23,0,null,null,3,"a",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.setSelectFalse()&&t),t},null,null)),t.Eb(512,null,p.q,p.r,[t.q,t.r,t.k,t.B]),t.qb(25,278528,null,0,p.h,[p.q],{ngClass:[0,"ngClass"]},null),(n()(),t.Hb(-1,null,["Sign up"])),(n()(),t.gb(16777216,null,null,1,null,C)),t.qb(28,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,x)),t.qb(30,16384,null,0,p.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,9,0,e.signinButtonCurrentClass),n(l,12,0,e.signinButtonStyleClass),n(l,16,0,e.orLabelCurrentClass),n(l,22,0,e.signupButtonCurrentClass),n(l,25,0,e.signupButtonStyleClass),n(l,28,0,e.signin_isSelected),n(l,30,0,!e.signin_isSelected)},function(n,l){n(l,5,0,void 0)})}function w(n){return t.Ib(0,[(n()(),t.rb(0,0,null,null,1,"app-login",[],null,null,null,q,m)),t.qb(1,114688,null,0,a,[s.c,o.Fb,o.Mb,d.m,h.b],null,null)],function(n,l){n(l,1,0)},null)}var D=t.nb("app-login",a,w,{},{},[]);e.d(l,"LoginPageModuleNgFactory",function(){return B});var B=t.ob(b,[],function(n){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[c.a,D]],[3,t.j],t.v]),t.Bb(4608,p.l,p.k,[t.s,[2,p.t]]),t.Bb(4608,u.p,u.p,[]),t.Bb(4608,s.i,s.o,[p.c,t.z,s.m]),t.Bb(4608,s.p,s.p,[s.i,s.n]),t.Bb(5120,s.a,function(n){return[n]},[s.p]),t.Bb(4608,s.l,s.l,[]),t.Bb(6144,s.j,null,[s.l]),t.Bb(4608,s.h,s.h,[s.j]),t.Bb(6144,s.b,null,[s.h]),t.Bb(4608,s.f,s.k,[s.b,t.p]),t.Bb(4608,s.c,s.c,[s.f]),t.Bb(4608,u.b,u.b,[]),t.Bb(4608,o.b,o.b,[t.x,t.g]),t.Bb(4608,o.Gb,o.Gb,[o.b,t.j,t.p]),t.Bb(4608,o.Jb,o.Jb,[o.b,t.j,t.p]),t.Bb(1073742336,p.b,p.b,[]),t.Bb(1073742336,u.o,u.o,[]),t.Bb(1073742336,u.g,u.g,[]),t.Bb(1073742336,s.e,s.e,[]),t.Bb(1073742336,s.d,s.d,[]),t.Bb(1073742336,u.m,u.m,[]),t.Bb(1073742336,o.Db,o.Db,[]),t.Bb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),t.Bb(1073742336,b,b,[]),t.Bb(256,s.m,"XSRF-TOKEN",[]),t.Bb(256,s.n,"X-XSRF-TOKEN",[]),t.Bb(1024,d.k,function(){return[[{path:"",component:a}]]},[])])})},kScs:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=function(){function n(){this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}return n.hashStr=function(n,l){return void 0===l&&(l=!1),this.onePassHasher.start().appendStr(n).end(l)},n.hashAsciiStr=function(n,l){return void 0===l&&(l=!1),this.onePassHasher.start().appendAsciiStr(n).end(l)},n._hex=function(l){var e,t,i,u,s=n.hexChars,r=n.hexOut;for(u=0;u<4;u+=1)for(t=8*u,e=l[u],i=0;i<8;i+=2)r[t+1+i]=s.charAt(15&e),r[t+0+i]=s.charAt(15&(e>>>=4)),e>>>=4;return r.join("")},n._md5cycle=function(n,l){var e=n[0],t=n[1],i=n[2],u=n[3];t=((t+=((i=((i+=((u=((u+=((e=((e+=(t&i|~t&u)+l[0]-680876936|0)<<7|e>>>25)+t|0)&t|~e&i)+l[1]-389564586|0)<<12|u>>>20)+e|0)&e|~u&t)+l[2]+606105819|0)<<17|i>>>15)+u|0)&u|~i&e)+l[3]-1044525330|0)<<22|t>>>10)+i|0,t=((t+=((i=((i+=((u=((u+=((e=((e+=(t&i|~t&u)+l[4]-176418897|0)<<7|e>>>25)+t|0)&t|~e&i)+l[5]+1200080426|0)<<12|u>>>20)+e|0)&e|~u&t)+l[6]-1473231341|0)<<17|i>>>15)+u|0)&u|~i&e)+l[7]-45705983|0)<<22|t>>>10)+i|0,t=((t+=((i=((i+=((u=((u+=((e=((e+=(t&i|~t&u)+l[8]+1770035416|0)<<7|e>>>25)+t|0)&t|~e&i)+l[9]-1958414417|0)<<12|u>>>20)+e|0)&e|~u&t)+l[10]-42063|0)<<17|i>>>15)+u|0)&u|~i&e)+l[11]-1990404162|0)<<22|t>>>10)+i|0,t=((t+=((i=((i+=((u=((u+=((e=((e+=(t&i|~t&u)+l[12]+1804603682|0)<<7|e>>>25)+t|0)&t|~e&i)+l[13]-40341101|0)<<12|u>>>20)+e|0)&e|~u&t)+l[14]-1502002290|0)<<17|i>>>15)+u|0)&u|~i&e)+l[15]+1236535329|0)<<22|t>>>10)+i|0,t=((t+=((i=((i+=((u=((u+=((e=((e+=(t&u|i&~u)+l[1]-165796510|0)<<5|e>>>27)+t|0)&i|t&~i)+l[6]-1069501632|0)<<9|u>>>23)+e|0)&t|e&~t)+l[11]+643717713|0)<<14|i>>>18)+u|0)&e|u&~e)+l[0]-373897302|0)<<20|t>>>12)+i|0,t=((t+=((i=((i+=((u=((u+=((e=((e+=(t&u|i&~u)+l[5]-701558691|0)<<5|e>>>27)+t|0)&i|t&~i)+l[10]+38016083|0)<<9|u>>>23)+e|0)&t|e&~t)+l[15]-660478335|0)<<14|i>>>18)+u|0)&e|u&~e)+l[4]-405537848|0)<<20|t>>>12)+i|0,t=((t+=((i=((i+=((u=((u+=((e=((e+=(t&u|i&~u)+l[9]+568446438|0)<<5|e>>>27)+t|0)&i|t&~i)+l[14]-1019803690|0)<<9|u>>>23)+e|0)&t|e&~t)+l[3]-187363961|0)<<14|i>>>18)+u|0)&e|u&~e)+l[8]+1163531501|0)<<20|t>>>12)+i|0,t=((t+=((i=((i+=((u=((u+=((e=((e+=(t&u|i&~u)+l[13]-1444681467|0)<<5|e>>>27)+t|0)&i|t&~i)+l[2]-51403784|0)<<9|u>>>23)+e|0)&t|e&~t)+l[7]+1735328473|0)<<14|i>>>18)+u|0)&e|u&~e)+l[12]-1926607734|0)<<20|t>>>12)+i|0,t=((t+=((i=((i+=((u=((u+=((e=((e+=(t^i^u)+l[5]-378558|0)<<4|e>>>28)+t|0)^t^i)+l[8]-2022574463|0)<<11|u>>>21)+e|0)^e^t)+l[11]+1839030562|0)<<16|i>>>16)+u|0)^u^e)+l[14]-35309556|0)<<23|t>>>9)+i|0,t=((t+=((i=((i+=((u=((u+=((e=((e+=(t^i^u)+l[1]-1530992060|0)<<4|e>>>28)+t|0)^t^i)+l[4]+1272893353|0)<<11|u>>>21)+e|0)^e^t)+l[7]-155497632|0)<<16|i>>>16)+u|0)^u^e)+l[10]-1094730640|0)<<23|t>>>9)+i|0,t=((t+=((i=((i+=((u=((u+=((e=((e+=(t^i^u)+l[13]+681279174|0)<<4|e>>>28)+t|0)^t^i)+l[0]-358537222|0)<<11|u>>>21)+e|0)^e^t)+l[3]-722521979|0)<<16|i>>>16)+u|0)^u^e)+l[6]+76029189|0)<<23|t>>>9)+i|0,t=((t+=((i=((i+=((u=((u+=((e=((e+=(t^i^u)+l[9]-640364487|0)<<4|e>>>28)+t|0)^t^i)+l[12]-421815835|0)<<11|u>>>21)+e|0)^e^t)+l[15]+530742520|0)<<16|i>>>16)+u|0)^u^e)+l[2]-995338651|0)<<23|t>>>9)+i|0,t=((t+=((u=((u+=(t^((e=((e+=(i^(t|~u))+l[0]-198630844|0)<<6|e>>>26)+t|0)|~i))+l[7]+1126891415|0)<<10|u>>>22)+e|0)^((i=((i+=(e^(u|~t))+l[14]-1416354905|0)<<15|i>>>17)+u|0)|~e))+l[5]-57434055|0)<<21|t>>>11)+i|0,t=((t+=((u=((u+=(t^((e=((e+=(i^(t|~u))+l[12]+1700485571|0)<<6|e>>>26)+t|0)|~i))+l[3]-1894986606|0)<<10|u>>>22)+e|0)^((i=((i+=(e^(u|~t))+l[10]-1051523|0)<<15|i>>>17)+u|0)|~e))+l[1]-2054922799|0)<<21|t>>>11)+i|0,t=((t+=((u=((u+=(t^((e=((e+=(i^(t|~u))+l[8]+1873313359|0)<<6|e>>>26)+t|0)|~i))+l[15]-30611744|0)<<10|u>>>22)+e|0)^((i=((i+=(e^(u|~t))+l[6]-1560198380|0)<<15|i>>>17)+u|0)|~e))+l[13]+1309151649|0)<<21|t>>>11)+i|0,t=((t+=((u=((u+=(t^((e=((e+=(i^(t|~u))+l[4]-145523070|0)<<6|e>>>26)+t|0)|~i))+l[11]-1120210379|0)<<10|u>>>22)+e|0)^((i=((i+=(e^(u|~t))+l[2]+718787259|0)<<15|i>>>17)+u|0)|~e))+l[9]-343485551|0)<<21|t>>>11)+i|0,n[0]=e+n[0]|0,n[1]=t+n[1]|0,n[2]=i+n[2]|0,n[3]=u+n[3]|0},n.prototype.start=function(){return this._dataLength=0,this._bufferLength=0,this._state.set(n.stateIdentity),this},n.prototype.appendStr=function(l){var e,t,i=this._buffer8,u=this._buffer32,s=this._bufferLength;for(t=0;t<l.length;t+=1){if((e=l.charCodeAt(t))<128)i[s++]=e;else if(e<2048)i[s++]=192+(e>>>6),i[s++]=63&e|128;else if(e<55296||e>56319)i[s++]=224+(e>>>12),i[s++]=e>>>6&63|128,i[s++]=63&e|128;else{if((e=1024*(e-55296)+(l.charCodeAt(++t)-56320)+65536)>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");i[s++]=240+(e>>>18),i[s++]=e>>>12&63|128,i[s++]=e>>>6&63|128,i[s++]=63&e|128}s>=64&&(this._dataLength+=64,n._md5cycle(this._state,u),s-=64,u[0]=u[16])}return this._bufferLength=s,this},n.prototype.appendAsciiStr=function(l){for(var e,t=this._buffer8,i=this._buffer32,u=this._bufferLength,s=0;;){for(e=Math.min(l.length-s,64-u);e--;)t[u++]=l.charCodeAt(s++);if(u<64)break;this._dataLength+=64,n._md5cycle(this._state,i),u=0}return this._bufferLength=u,this},n.prototype.appendByteArray=function(l){for(var e,t=this._buffer8,i=this._buffer32,u=this._bufferLength,s=0;;){for(e=Math.min(l.length-s,64-u);e--;)t[u++]=l[s++];if(u<64)break;this._dataLength+=64,n._md5cycle(this._state,i),u=0}return this._bufferLength=u,this},n.prototype.getState=function(){var n=this._state;return{buffer:String.fromCharCode.apply(null,this._buffer8),buflen:this._bufferLength,length:this._dataLength,state:[n[0],n[1],n[2],n[3]]}},n.prototype.setState=function(n){var l,e=n.buffer,t=n.state,i=this._state;for(this._dataLength=n.length,this._bufferLength=n.buflen,i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],l=0;l<e.length;l+=1)this._buffer8[l]=e.charCodeAt(l)},n.prototype.end=function(l){void 0===l&&(l=!1);var e,t=this._bufferLength,i=this._buffer8,u=this._buffer32,s=1+(t>>2);if(this._dataLength+=t,i[t]=128,i[t+1]=i[t+2]=i[t+3]=0,u.set(n.buffer32Identity.subarray(s),s),t>55&&(n._md5cycle(this._state,u),u.set(n.buffer32Identity)),(e=8*this._dataLength)<=4294967295)u[14]=e;else{var r=e.toString(16).match(/(.*?)(.{0,8})$/);if(null===r)return;var o=parseInt(r[2],16),a=parseInt(r[1],16)||0;u[14]=o,u[15]=a}return n._md5cycle(this._state,u),l?this._state:n._hex(this._state)},n.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]),n.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),n.hexChars="0123456789abcdef",n.hexOut=[],n.onePassHasher=new n,n}();l.Md5=t,"5d41402abc4b2a76b9719d911017c592"!==t.hashStr("hello")&&console.error("Md5 self test failed.")}}]);