"use strict";(self.webpackChunkbisema_basic=self.webpackChunkbisema_basic||[]).push([[515],{2515:(L,C,a)=>{a.r(C),a.d(C,{CartModule:()=>g});var u=a(6895),_=a(6491),l=a(433),x=a(9579),T=a(5133),P=a(2340),m=a(2687),t=a(4650),Z=a(6814),y=a(4850);class d extends y.b{constructor(e){super(e)}updateCartItem(e,i){return this._networkService.put(`api/cart/update/${i}`,e)}deleteCartItems(e){return this._networkService.post("api/cart/delete",e)}}d.\u0275fac=function(e){return new(e||d)(t.LFG(t.zs3))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac});var N=a(6916),S=a(7103),v=a(2216),b=a(3666);function O(o,e){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const i=e.$implicit;t.xp6(1),t.Oqu(i)}}function A(o,e){if(1&o&&(t.TgZ(0,"p",25),t._uU(1),t.YNc(2,O,2,1,"span",26),t.qZA()),2&o){const i=t.oxw().$implicit;t.xp6(1),t.hij(" ",i.productID," "),t.xp6(1),t.Q6J("ngForOf",i.finishCode)}}function D(o,e){if(1&o&&(t.TgZ(0,"p",25),t._uU(1),t.qZA()),2&o){const i=t.oxw().$implicit;t.xp6(1),t.hij(" ",i.fullSpecificationCode," ")}}function I(o,e){1&o&&(t.TgZ(0,"span"),t._uU(1," / price:0"),t.qZA())}function U(o,e){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const i=t.oxw().index,r=t.oxw(2).$implicit;t.xp6(1),t.AsE(" -> ",r.finishName[i]," | ",r.finishPrice[i],"")}}const J=function(o,e){return{"bg-purple text-white":o,"clr-grey":e}};function q(o,e){if(1&o){const i=t.EpF();t.TgZ(0,"div",21)(1,"a",34),t.NdJ("click",function(){const s=t.CHM(i).$implicit,c=t.oxw().index,h=t.oxw(2).index,$=t.oxw();return t.KtG($.changeOrderCode(h,c,s.name,s.PRICES.PRICE.Text,s.DESCRIPTIONS.TEXT.Text))}),t._uU(2),t.qZA()()}if(2&o){const i=e.$implicit,r=t.oxw().index,n=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngClass",t.WLB(2,J,i.name==n.finishCode[r],i.name!=n.finishCode[r])),t.xp6(1),t.hij(" ",i.DESCRIPTIONS.TEXT.Text," ")}}const E=function(o,e){return{"clr-red":o,"text-success":e}};function w(o,e){if(1&o){const i=t.EpF();t.TgZ(0,"div",28)(1,"a",29),t.NdJ("click",function(){const s=t.CHM(i).index,c=t.oxw(2).index,h=t.oxw();return t.KtG(h.finishCollapseToggle(c,s))}),t._UZ(2,"fa-icon",30),t._uU(3),t.YNc(4,I,2,0,"span",8),t.YNc(5,U,2,2,"span",8),t.qZA(),t.TgZ(6,"div",31,32),t.YNc(8,q,3,5,"div",33),t.qZA()()}if(2&o){const i=e.$implicit,r=e.index,n=t.oxw(2).$implicit,s=t.oxw();t.xp6(1),t.Q6J("ngClass",t.WLB(7,E,"??"==n.finishCode[r].trim(),"??"!=n.finishCode[r].trim())),t.xp6(1),t.Q6J("icon",s.faCaretDown),t.xp6(1),t.hij(" ",i.grp.DESCRIPTIONS.TEXT.Text," "),t.xp6(1),t.Q6J("ngIf",null==n.finishPrice[r]),t.xp6(1),t.Q6J("ngIf",null!=n.finishPrice[r]),t.xp6(1),t.Q6J("ngbCollapse",i.collapse),t.xp6(2),t.Q6J("ngForOf",n.finishOptions[r])}}function F(o,e){if(1&o&&(t.ynx(0,21),t.YNc(1,w,9,10,"div",27),t.BQk()),2&o){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",i.productGroup)}}const k=function(o){return{"bg-red":o}};function G(o,e){if(1&o){const i=t.EpF();t.TgZ(0,"tr",10)(1,"td")(2,"b"),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"input",11),t.NdJ("change",function(){const s=t.CHM(i).index,c=t.oxw();return t.KtG(c.changeTagName(s))}),t.qZA()(),t.TgZ(6,"td")(7,"input",12,13),t.NdJ("click",function(){const s=t.CHM(i).$implicit,c=t.oxw();return t.KtG(c.checkBox(s))}),t.qZA()(),t.TgZ(9,"td")(10,"input",14),t.NdJ("click",function(n){const c=t.CHM(i).index,h=t.oxw();return t.KtG(h.editFinish(c,n))}),t.qZA()(),t.TgZ(11,"td",15),t._UZ(12,"img",16),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"uppercase"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"uppercase"),t.qZA(),t.TgZ(19,"td"),t.YNc(20,A,3,2,"p",17),t.YNc(21,D,2,1,"p",17),t.YNc(22,F,2,1,"ng-container",18),t.qZA(),t.TgZ(23,"td",19)(24,"div",20)(25,"div")(26,"p",21),t._uU(27),t.qZA()()()(),t.TgZ(28,"td",4)(29,"div",22)(30,"button",23),t.NdJ("click",function(){const s=t.CHM(i).index,c=t.oxw();return t.KtG(c.stepDown(s))}),t._uU(31,"-"),t.qZA(),t.TgZ(32,"input",24),t.NdJ("change",function(){const s=t.CHM(i).index,c=t.oxw();return t.KtG(c.changePrice(s))}),t.qZA(),t.TgZ(33,"button",23),t.NdJ("click",function(){const s=t.CHM(i).index,c=t.oxw();return t.KtG(c.stepUp(s))}),t._uU(34,"+"),t.qZA()()(),t.TgZ(35,"td"),t._uU(36),t.ALo(37,"currency"),t.qZA(),t.TgZ(38,"td"),t._uU(39),t.ALo(40,"currency"),t.qZA()()}if(2&o){const i=e.$implicit,r=e.index,n=t.oxw();t.Q6J("ngClass",t.VKq(26,k,""==i.backgroundColor)),t.xp6(3),t.hij("",r+1,")"),t.xp6(2),t.Q6J("formControl",n.tagNameArray.controls[r]),t.xp6(5),t.s9C("value",r),t.Q6J("formControl",n.editCtrl.controls[r]),t.xp6(2),t.FAE("src","",n.baseUrl,"assets/",i.companyCode,"/",i.catalogName,"/prod_icons/",i.productImage,"",t.LSH),t.xp6(2),t.Oqu(t.lcZ(15,18,i.companyCode)),t.xp6(3),t.Oqu(t.lcZ(18,20,i.catalogName)),t.xp6(3),t.Q6J("ngIf",!i.isSpecialProduct),t.xp6(1),t.Q6J("ngIf",i.isSpecialProduct),t.xp6(1),t.Q6J("ngIf",i.edit),t.xp6(5),t.Oqu(i.displayName),t.xp6(5),t.Q6J("formControl",n.qtyArray.controls[r]),t.xp6(4),t.Oqu(t.lcZ(37,22,i.unitPrice)),t.xp6(3),t.Oqu(t.lcZ(40,24,i.quantity*i.unitPrice))}}function M(o,e){if(1&o&&(t.TgZ(0,"tr"),t._UZ(1,"td",35),t.TgZ(2,"td",36),t._uU(3,"Grand Total"),t.qZA(),t.TgZ(4,"td",36),t._uU(5),t.ALo(6,"currency"),t.qZA()()),2&o){const i=t.oxw();t.xp6(5),t.hij(" ",t.lcZ(6,1,i.grandTotal)," ")}}function Q(o,e){if(1&o){const i=t.EpF();t.TgZ(0,"div",37)(1,"button",38),t.NdJ("click",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.removeItem())}),t._UZ(2,"fa-icon",30),t._uU(3," Delete "),t.qZA(),t.TgZ(4,"button",39),t.NdJ("click",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.finishEdit())}),t._UZ(5,"fa-icon",30),t._uU(6," Finish Editing "),t.qZA(),t.TgZ(7,"a",40),t._uU(8," Checkout "),t.qZA()()}if(2&o){const i=t.oxw();t.xp6(1),t.Q6J("disabled",i.deleteItem),t.xp6(1),t.Q6J("icon",i.faTrash),t.xp6(2),t.Q6J("disabled",i.finishEditing),t.xp6(1),t.Q6J("icon",i.faPencil)}}class f{constructor(e,i,r,n){this.store=e,this.cartService=i,this.fb=r,this.busService=n,this.baseUrl=P.N.baseUrl,this.faCaretDown=m.eW2,this.faTrash=m.$aW,this.faPencil=m.TzT,this.company=null,this.catalogue=null,this.singleProductData={id:null,item:null,group:[],price:null,description:"No Description",finishImages:[],finishOptions:[],finishCode:[],finishPrice:[],finishName:[],qty:1},this.cart=[],this.tagNameArray=this.fb.array([]),this.qtyArray=this.fb.array([]),this.editCtrl=this.fb.array([]),this.finishEditing=!0,this.selectedIndex=[],this.editIndex=0,this.deleteItem=!0,this.grandTotal=null}getCart(){let e=this.cartService._storageService.getItem("user");e=JSON.parse(e),this.cartService.getCartItemsByUserIDProjectIDAndManufacturingCompany(2,93,"").subscribe({next:i=>{i&&i.data&&(this.cart=i.data,this.loadCartDetails())}})}loadCartDetails(){let e=0;this.cart.length>0&&this.cart.forEach(i=>{i.finishOptions=JSON.parse(i.finishOptions),i.productGroup=JSON.parse(i.productGroup),i.finishCode=JSON.parse(i.finishCode),i.finishName=JSON.parse(i.finishName),i.finishPrice=JSON.parse(i.finishPrice),i.edit=!1,e+=+i.quantity*i.unitPrice,this.tagNameArray.push(new l.NI(i.tagName)),this.qtyArray.push(new l.NI({value:i.quantity,disabled:!0})),this.editCtrl.push(new l.NI(!1))}),console.log(this.cart),this.grandTotal=parseFloat(e.toString()).toFixed(2)}changeTagName(e){this.cart[e].tagName=this.tagNameArray.controls[e].value,this.updateAndReloadCartDetails(e)}checkBox(e){if(null==this.selectedIndex.find(r=>r==e))this.selectedIndex.push(e),this.deleteItem=!1;else{let r=this.selectedIndex.findIndex(n=>n==e);this.selectedIndex.splice(r,1),0==this.selectedIndex.length&&(this.deleteItem=!0)}}editFinish(e,i){if(console.log(e,i),this.editIndex=e,this.cart[e].isSpecialProduct)return alert("This is a special order product. You cannot edit the finish of such product. Please remove this item from cart and add again to proceed with updating the finish."),void i.preventDefault();let n=this.cart.findIndex(s=>1==s.edit);-1!=n&&(this.cart[n].edit=!1),this.cart[e].edit=!0,this.finishEditing=!1}finishEdit(){let e=0;this.editCtrl.controls.forEach(i=>{i.setValue(!1),this.cart[e]&&(this.cart[e].edit=!1,e++)}),this.updateAndReloadCartDetails(this.editIndex)}removeItem(){let e=this.cart.filter(i=>this.selectedIndex.map(r=>r.id).indexOf(i.id)>-1);e&&e.length>0&&this.cartService.deleteCartItems(e.map(i=>i.id)).subscribe({next:i=>{console.log(`delete status: ${i}`),this.cart=this.cart.filter(r=>this.selectedIndex.map(n=>n.id).indexOf(r.id)<0),this.loadCartDetails()},error:i=>{console.log(`Something went wrong while delete the cart items. Error details: ${JSON.stringify(i)}`)}})}finishCollapseToggle(e,i){this.cart[e].productGroup.forEach((r,n)=>{console.log(n,i),r.collapse=n!=i||!r.collapse,console.log(r)}),console.log(this.cart[e])}changeOrderCode(e,i,r,n,s){null==this.cart[e].finishImages&&(this.cart[e].finishImages=[]),this.cart[e].finishImages[i]=i,this.cart[e].finishCode[i]=r,this.cart[e].fullSpecificationCode=this.cart[e].productID+r,this.cart[e].finishName[i]=s,null!=n&&null==this.cart[e].finishPrice[i]&&(this.cart[e].finishPrice[i]=parseFloat(n),this.cart[e].unitPrice=+this.cart[e].unitPrice+ +this.cart[e].finishPrice[i],this.cart[e].unitPrice=parseFloat(this.cart[e].unitPrice).toFixed(2)),null==this.cart[e].finishCode.find(h=>" ??"==h)&&(this.cart[e].backgroundColor="true"),this.editFinish(e,null)}stepDown(e){1!=this.qtyArray.controls[e].value&&(this.qtyArray.controls[e].setValue(this.qtyArray.controls[e].value-1),this.changePrice(e))}stepUp(e){this.qtyArray.controls[e].setValue(this.qtyArray.controls[e].value+1),this.changePrice(e)}changePrice(e){this.cart[e].quantity=this.qtyArray.controls[e].value,this.updateAndReloadCartDetails(e)}onDrop(e){console.log(e),this.setProduct(e.element.parent.parent.data.id,e.element.parent.data.id,e.element.data.id)}setProduct(e,i,r){console.log(e,i,r),this.singleProductData.group=[],this.singleProductData.finishImages=[],this.singleProductData.finishCode=[],this.singleProductData.finishPrice=[],this.singleProductData.finishName=[],this.singleProductData.finishOptions=[],this.singleProductData.id=r,this.singleProductData.item=this.catalogue.ITEMS.ITEM.find(n=>n.id==this.singleProductData.id),this.singleProductData.item.ITEM_GROUPS.ITEM_GROUP instanceof Array?this.singleProductData.item.ITEM_GROUPS.ITEM_GROUP.forEach((n,s)=>{this.productGroup(n.id,s)}):this.productGroup(this.singleProductData.item.ITEM_GROUPS.ITEM_GROUP.id,0),this.singleProductData.price=parseFloat(this.singleProductData.item.PRICES.PRICE.Text),this.company&&this.getProductSectionTextFile(e,i),this.addToCart()}productGroup(e,i){let r=this.catalogue.GROUPS.GROUP.find(n=>n.id==e);this.singleProductData.group.push({grp:r,collapse:!0}),this.singleProductData.finishCode.push(" ??"),r.OPTIONS.OPTION instanceof Array?this.singleProductData.finishOptions[i]=r.OPTIONS.OPTION:(this.singleProductData.finishOptions[i]=[],this.singleProductData.finishOptions[i].push(r.OPTIONS.OPTION))}getProductSectionTextFile(e,i){console.log(this.company),this.cartService.getSectionTextFile(e,i,this.catalogue.catalogueCode,this.company?.company?.CompanyName).subscribe({next:r=>{this.singleProductData.description=r}})}addToCart(){let i,e=this.singleProductData.finishCode.toString();e=e.replace(/,/g,""),i=e.includes("?")?"":"#cbebc6",JSON.parse(this.cartService._storageService.getItem("user"));const n={productID:this.singleProductData.id,productImage:this.singleProductData.id.toLowerCase()+"_3d.png",description:this.singleProductData.description,backgroundColor:i,companyCode:this.company?.company.CompanyName,displayName:this.singleProductData.item.LONG_DESC.TEXT.Text,baseUnitofMeasure:"PCS",unitPrice:parseFloat(this.singleProductData.price.toFixed(2)),quantity:1,genProdPostingGroup:"RETAIL",inventoryPostingGroup:"RESALE",manufacturingCompany:this.catalogue.desc,manufacturingCompanyThreeLettersCode:this.catalogue.code,catalogName:this.catalogue.catalogueCode,catalogThreeLettersCode:this.catalogue.catalogueCode,catalogReleaseDate:`${this.catalogue.year}-${this.catalogue.month}-${this.catalogue.day}`,fullSpecificationCode:this.singleProductData.id+e,tagName:"",finishOptions:JSON.stringify(this.singleProductData.finishOptions),productGroup:JSON.stringify(this.singleProductData.group),finishCode:JSON.stringify(this.singleProductData.finishCode),finishName:JSON.stringify(this.singleProductData.finishName),finishPrice:JSON.stringify(this.singleProductData.finishPrice),edit:!1,users_id:2,projects_id:93};this.cartService.addToCart(n).subscribe({next:s=>{console.log(s),this.busService.sendShowCart(),this.getCart()}})}updateAndReloadCartDetails(e){let i={quantity:this.cart[e].quantity,tagName:this.cart[e].tagName,finishCode:JSON.stringify(this.cart[e].finishCode),finishName:JSON.stringify(this.cart[e].finishName),finishPrice:JSON.stringify(this.cart[e].finishPrice),productID:this.cart[e].productID,fullSpecificationCode:this.cart[e].fullSpecificationCode,backgroundColor:this.cart[e].backgroundColor,unitPrice:this.cart[e].unitPrice,displayName:this.cart[e].displayName,isSpecialProduct:this.cart[e].isSpecialProduct};this.cartService.updateCartItem(i,parseInt(this.cart[e].id)).subscribe({next:r=>{this.getCart(),console.log(`cart item update status: ${r}`)},error:r=>{console.log(`Something went wrong while updating the cart. Error details: ${JSON.stringify(r)}`)}})}getCompany(){this.store.select(T.p).subscribe({next:e=>{this.company=e}})}getCatalogue(){this.store.select(x.P).subscribe({next:e=>{this.catalogue=e}})}ngOnInit(){this.getCompany(),this.getCatalogue(),this.getCart()}}f.\u0275fac=function(e){return new(e||f)(t.Y36(Z.yh),t.Y36(d),t.Y36(l.qu),t.Y36(N.Z))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-cart"]],decls:34,vars:3,consts:[[1,"mt-2","pt-2","text-center"],[1,"border-dark"],[1,"table","table-bordered",3,"treeDrop"],[1,"thead-light"],[1,"text-center"],["scope","col"],["scope","col",1,"bordNone"],["class","text-center data",3,"ngClass",4,"ngFor","ngForOf"],[4,"ngIf"],["class","col-12 text-end",4,"ngIf"],[1,"text-center","data",3,"ngClass"],["type","text","placeholder","Type tagname ...",1,"tag-name",3,"formControl","change"],["type","checkbox",3,"click"],["cartCheckboxes",""],["type","radio","name","finish","id","",3,"formControl","value","click"],[1,"img-hover-zoom"],["width","100","alt","Buy",3,"src"],["class","code text-start",4,"ngIf"],["class","text-start",4,"ngIf"],[1,"bordNone"],[1,"cart-info"],[1,"text-start"],[1,"input-group","bg-main","mb-3","qtyInput2"],["type","button",1,"btn","bg-light-purple","border",3,"click"],["min","1","value","1",1,"form-control","form-control-sm",3,"formControl","change"],[1,"code","text-start"],[4,"ngFor","ngForOf"],["class","menu mb-2 text-start",4,"ngFor","ngForOf"],[1,"menu","mb-2","text-start"],["href","javascript:;",1,"text-decoration-none","text-start","fw-bold",3,"ngClass","click"],[3,"icon"],[3,"ngbCollapse"],["finishCollapse","ngbCollapse"],["class","text-start",4,"ngFor","ngForOf"],["href","javascript:;",1,"side-child-item","p-1","text-decoration-none","text-start",3,"ngClass","click"],["colspan","10"],[1,"fw-bold","text-center"],[1,"col-12","text-end"],[1,"float-right","btn","btn3","me-2",3,"disabled","click"],[1,"float-right","btn","btn2","mx-1",3,"disabled","click"],["routerLink","/checkout","target","_blank",1,"float-right","btn","btn2","me-1"]],template:function(e,i){1&e&&(t.TgZ(0,"h4",0),t._uU(1," List of products in cart\n"),t.qZA(),t._UZ(2,"hr",1),t.TgZ(3,"table",2),t.NdJ("treeDrop",function(n){return i.onDrop(n)}),t.TgZ(4,"thead",3)(5,"tr",4)(6,"th"),t._uU(7,"Item Number"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Tagname"),t.qZA(),t.TgZ(10,"th",5),t._uU(11,"Select"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Edit Finish"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Product Image"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Mfg"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Cat"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Order Code"),t.qZA(),t.TgZ(22,"th",6),t._uU(23,"Product Descriptions"),t.qZA(),t.TgZ(24,"th",5),t._uU(25,"Quantity"),t.qZA(),t.TgZ(26,"th",5),t._uU(27,"Unit Price"),t.qZA(),t.TgZ(28,"th",5),t._uU(29,"Total Price"),t.qZA()()(),t.TgZ(30,"tbody"),t.YNc(31,G,41,28,"tr",7),t.YNc(32,M,7,3,"tr",8),t.qZA()(),t.YNc(33,Q,9,4,"div",9)),2&e&&(t.xp6(31),t.Q6J("ngForOf",i.cart),t.xp6(1),t.Q6J("ngIf",i.cart.length>0),t.xp6(1),t.Q6J("ngIf",i.cart.length>0))},dependencies:[u.mk,u.sg,u.O5,l.Fj,l._,l.JJ,l.oH,S._D,v.BN,b.Vh,_.rH,u.gd,u.H9],styles:[".qtyInput2[_ngcontent-%COMP%]{width:100px}"]});const R=[{path:"",component:f}];class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[_.Bz.forChild(R),_.Bz]});var j=a(710);class g{}g.\u0275fac=function(e){return new(e||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({providers:[d],imports:[u.ez,j.m,p]})}}]);