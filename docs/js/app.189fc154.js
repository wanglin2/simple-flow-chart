(function(e){function t(t){for(var o,a,d=t[0],l=t[1],r=t[2],u=0,p=[];u<d.length;u++)a=d[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,r||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,d=1;d<n.length;d++){var l=n[d];0!==i[l]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var r=0;r<d.length;r++)t(d[r]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a68":function(e,t,n){"use strict";n("1acc")},"11c5":function(e,t,n){"use strict";n("22da")},1937:function(e,t,n){"use strict";n("99e8")},"1acc":function(e,t,n){},"22da":function(e,t,n){},"2d0f":function(e,t,n){},"42ba":function(e,t,n){"use strict";n("6620")},4328:function(e,t,n){},"43f2":function(e,t,n){"use strict";n("f132")},"46b3":function(e,t,n){},"48ee":function(e,t,n){"use strict";n("7b7f")},5023:function(e,t,n){},5405:function(e,t,n){"use strict";n("6c50")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Example1")],1)},s=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flowChartContainer"},[t("SimpleFlowChart",{ref:"SimpleFlowChart",attrs:{initFit:!0,enableDrag:!0,showScrollBar:!0,readonly:!1,beforeDeleteNode:e.beforeDeleteNode,nodeTypeList:e.nodeTypeList,vertical:!1},on:{"node-content-click":e.onNodeContentClick},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),t("el-drawer",{attrs:{visible:e.showNodeEdit,"with-header":!1},on:{"update:visible":function(t){e.showNodeEdit=t}}},[e.showNodeEdit?t("div",{staticClass:"nodeEditBox"},[t("div",{staticClass:"nodeEditTitle"},[e.isEditingTitle?t("div",{staticClass:"editTitle"},[t("el-input",{on:{blur:function(t){e.isEditingTitle=!1}},nativeOn:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.isEditingTitle=!1}},model:{value:e.editNodeData.title,callback:function(t){e.$set(e.editNodeData,"title",t)},expression:"editNodeData.title"}})],1):t("div",{staticClass:"showTitle"},[t("div",{staticClass:"title"},[e._v(e._s(e.editNodeData.title))]),t("div",{staticClass:"icon el-icon-edit",on:{click:function(t){e.isEditingTitle=!0}}})])]),t("div",{staticClass:"nodeEditContent"},[t("el-input",{attrs:{type:"textarea",rows:3},model:{value:e.editNodeData.content,callback:function(t){e.$set(e.editNodeData,"content",t)},expression:"editNodeData.content"}})],1)]):e._e()])],1)},d=[],l=(n("9e1f"),n("450d"),n("6ed5")),r=n.n(l),c=(n("10cb"),n("f3ad")),u=n.n(c),p=(n("aaa5"),n("a578")),f=n.n(p),h=(n("a7cc"),n("df33")),v=n.n(h),y=(n("0fb4"),n("9944")),m=n.n(y),C=[{id:"startEvent",type:"start",title:"开始"},{id:"随机id1",type:"normal",title:"申请人",content:"员工",configData:{},nodeList:[]},{id:"随机id2",type:"normal",title:"审批人",content:"主管",configData:{},nodeList:[]},{id:"随机id3",type:"condition",title:"条件分支",children:[{id:"随机id3-1",title:"通过",content:"理由充分",type:"normal",configData:{},nodeList:[{id:"随机id3-1-1",type:"normal",title:"审批人",content:"上级主管",configData:{},nodeList:[{id:"随机id3-1-1-1",type:"condition",title:"条件分支",children:[{id:"随机id3-1-1-1-1",title:"通过",content:"理由充分",type:"normal",configData:{},nodeList:[]},{id:"随机id3-1-1-1-2",type:"normal",title:"驳回",content:"理由不充分",configData:{},nodeList:[]}]}]}]},{id:"随机id3-2",type:"normal",title:"指派",content:"HR",configData:{},nodeList:[{id:"随机id3-2-1",type:"condition",title:"条件分支",children:[{id:"随机id3-2-1-1",title:"通过",content:"理由充分",type:"normal",configData:{},nodeList:[]},{id:"随机id3-2-1-2",type:"normal",title:"驳回",content:"理由不充分",configData:{},nodeList:[]}]}]},{id:"随机id3-3",type:"normal",title:"驳回",content:"理由不充分",configData:{},nodeList:[]}]},{id:"endEvent",type:"end",title:"结束"}],N={components:{[m.a.name]:m.a,[v.a.name]:v.a,[f.a.name]:f.a,[u.a.name]:u.a},data(){return{data:C,showNodeEdit:!1,editNodeData:null,isEditingTitle:!1,nodeTypeList:[{name:"普通节点",list:[{type:"normal",name:"普通节点"}]},{name:"分支节点",list:[{type:"condition",name:"条件分支"}]}]}},mounted(){window.addEventListener("resize",this.onResize)},methods:{beforeDeleteNode(...e){return console.log(e),r.a.confirm("确定删除该节点？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})},onNodeContentClick(e){console.log(e),this.editNodeData=e,this.showNodeEdit=!0},onResize(){this.$refs.SimpleFlowChart.fit()}}},w=N,b=(n("efc4"),n("2877")),g=Object(b["a"])(w,a,d,!1,null,"db16d6ae",null),L=g.exports,k={name:"App",components:{Example1:L}},T=k,S=(n("1937"),Object(b["a"])(T,i,s,!1,null,null,null)),D=S.exports,M=function(){var e=this,t=e._self._c;return t("div",{ref:"sfcContainer",staticClass:"sfcContainer",class:{showScrollBar:e.showScrollBar},style:{background:e.background},on:{mousedown:e.onMousedown}},[e.showScaleBar?t("SFCActionBar",{attrs:{scale:e.scale},on:{"update:scale":function(t){e.scale=t}}}):e._e(),t("div",{ref:"sfcContent",staticClass:"sfcContent",class:{vertical:e.vertical,transformOriginCenter:e.scale<=100},style:{transform:`scale(${e.scale/100})`}},e._l(e.data,(function(n){return t("SFCNode",{key:n.id,attrs:{nodeList:e.data,data:n}})})),1),e.showHideDiv?t("div"):e._e()],1)},_=[],x=(n("bf67"),n("f3a2"),n("1159")),B=n.n(x),E=new B.a,A=n("73d5");const F={},P=[{id:"startEvent",type:"start",title:"开始"},{id:"endEvent",type:"end",title:"结束"}],O=[{name:"普通节点",list:[{type:"normal",name:"普通节点"}]},{name:"分支节点",list:[{type:"condition",name:"条件分支"}]}],j=(e,t="普通节点",n="节点内容")=>{const o=F.customCreateNodeId||A["a"];switch(e){case"normal":return{id:o(),type:"normal",title:t,content:n,configData:{},nodeList:[]};case"condition":return{id:o(),type:"condition",title:"条件分支",children:[{id:o(),title:"条件1",content:"条件1的内容",type:"normal",configData:{},nodeList:[]},{id:o(),type:"normal",title:"条件2",content:"条件2的内容",configData:{},nodeList:[]}]};default:break}};var $=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sfcActionBar"},[t("div",{staticClass:"sfcActionScale"},[t("div",{staticClass:"sfcActionScaleBtn",on:{click:e.scaleIn}},[t("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M580.722174 437.990403 580.722174 78.171384 436.794158 78.171384 436.794158 437.990403 76.975139 437.990403 76.975139 581.918419 436.794158 581.918419 436.794158 941.737438 580.722174 941.737438 580.722174 581.918419 940.542216 581.918419 940.542216 437.990403Z"}})])]),t("div",{staticClass:"sfcActionScaleNum"},[e._v(e._s(e.scale.toFixed(0))+"%")]),t("div",{staticClass:"sfcActionScaleBtn",on:{click:e.scaleOut}},[t("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M587.229378 437.990403 580.722174 437.990403 76.975139 437.990403 76.975139 581.918419 580.722174 581.918419 587.229378 581.918419 940.542216 581.918419 940.542216 437.990403Z"}})])])])])},I=[],H={name:"SFCActionBar",props:{scale:{type:Number}},methods:{scaleIn(){this.$emit("update:scale",this.scale+10)},scaleOut(){this.scale<=0||this.$emit("update:scale",this.scale-10)}}},z=H,R=(n("43f2"),Object(b["a"])(z,$,I,!1,null,"1f05bb34",null)),V=R.exports,W={name:"SimpleFlowChart",components:{[V.name]:V},model:{prop:"data",event:"change"},props:{data:{type:Array,default(){return[]}},customCreateNode:{type:Function},customCreateConditionBranchNode:{type:Function},beforeDeleteNode:{type:Function},background:{type:String,default:"rgba(0, 0, 0, 0.03)"},readonly:{type:Boolean,default:!1},nodeTypeList:{type:Array},vertical:{type:Boolean,default:!1},showScaleBar:{type:Boolean,default:!0},customCreateNodeId:{type:Function},enableDrag:{type:Boolean,default:!0},initFit:{type:Boolean,default:!1},showScrollBar:{type:Boolean,default:!0}},data(){return{scale:100,showHideDiv:!1,isMousedown:!1,mousedownPos:{x:0,y:0},mousedownScrollPos:{x:0,y:0}}},watch:{scale(){this.showHideDiv=!this.showHideDiv}},created(){F.readonly=this.readonly,F.nodeTypeList=this.nodeTypeList,F.vertical=this.vertical,F.customCreateNodeId=this.customCreateNodeId,this.data.length<=0&&this.data.push(...P),E.on("add-node-type-click",this.onAddNodeTypeClick),E.on("delete-node-click",this.onNodeDeleteClick),E.on("add-condition-branch-click",this.onAddConditionBranchClick),E.on("node-content-click",this.onNodeContentClick),window.addEventListener("mousemove",this.onMousemove),window.addEventListener("mouseup",this.onMouseup)},mounted(){this.initFit&&this.fit()},beforeDestroy(){E.off("add-node-type-click",this.onAddNodeTypeClick),E.off("delete-node-click",this.onNodeDeleteClick),E.off("add-condition-branch-click",this.onAddConditionBranchClick),E.off("node-content-click",this.onNodeContentClick),window.removeEventListener("mousemove",this.onMousemove),window.removeEventListener("mouseup",this.onMouseup)},methods:{fit(){this.scale=100,this.$nextTick(()=>{const e=this.$refs.sfcContainer.getBoundingClientRect(),t=e.width/e.height,n=this.$refs.sfcContent.getBoundingClientRect(),o=n.width/n.height;let i,s;t>o?(s=e.height,i=o*s):(i=e.width,s=i/o),this.scale=i/n.width*100,console.log(n.width,e.width);const a=(n.width-e.width)/2,d=(n.height-e.height)/2;this.$refs.sfcContainer.scrollTo(a,d)})},onAddNodeTypeClick(e,t,n){let o=null;this.customCreateNode&&(o=this.customCreateNode(e,t,n)),o||(o=j(n.type)),this.addNode(e,t,o),this.$emit("add-node",o)},addNode(e,t,n){if(e){let o=this.findNodeIndex(e,t);e.splice(o+1,0,n)}else t.nodeList.unshift(n)},onNodeDeleteClick(...e){this.beforeDeleteNode?this.beforeDeleteNode(...e).then(()=>{this.deleteNode(...e)}):(this.deleteNode(...e),this.$emit("delete-node",e[3]))},deleteNode(e,t,n,o){if(e){let t=this.findNodeIndex(e,o);e.splice(t,1)}else if(t){let e=this.findNodeIndex(t,o);t.splice(e,1),t.length<=1&&this.removeNodeFromData(n)}},onAddConditionBranchClick(e){let t=null;this.customCreateConditionBranchNode&&(t=this.customCreateConditionBranchNode(e)),t||(t=j("normal","条件","条件内容")),e.children.push(t),this.$emit("add-condition-branch",t)},onNodeContentClick(...e){this.$emit("node-content-click",...e)},findNodeIndex(e,t){return e.findIndex(e=>e===t)},removeNodeFromData(e){let t=n=>{for(let o=0;o<n.length;o++){let i=n[o];if(i===e)return n.splice(o,1),!0;let s=!1;if(i.children&&i.children.length>0&&(s=t(i.children)),!s&&i.nodeList&&i.nodeList.length>0&&(s=t(i.nodeList)),s)break}};t(this.data)},onMousedown(e){this.isMousedown=!0,this.mousedownPos.x=e.clientX,this.mousedownPos.y=e.clientY,this.mousedownScrollPos.x=this.$refs.sfcContainer.scrollLeft,this.mousedownScrollPos.y=this.$refs.sfcContainer.scrollTop},onMousemove(e){if(!this.isMousedown||!this.$refs.sfcContainer||!this.enableDrag)return;e.preventDefault();let t=this.mousedownScrollPos.x-(e.clientX-this.mousedownPos.x),n=this.mousedownScrollPos.y-(e.clientY-this.mousedownPos.y);this.$refs.sfcContainer.scrollTo(t,n)},onMouseup(){this.isMousedown=!1}}},G=W,J=(n("42ba"),Object(b["a"])(G,M,_,!1,null,"73cb8b1b",null)),X=J.exports,Y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sfcConditionNodeContainer",class:{vertical:e.vertical}},[e.readonly?e._e():t("div",{staticClass:"sfcConditionAddBtn",on:{click:e.onAddConditionBranchClick}},[e._v(" 添加条件 ")]),t("div",{staticClass:"sfcConditionNodeItemList"},e._l(e.data.children,(function(n){return t("div",{key:n.id,staticClass:"sfcConditionNodeItem"},[t("div",{staticClass:"sfcConditionNodeItemLine sfcConditionNodeItemFirstLine"}),t("div",{staticClass:"sfcConditionNodeItemLine sfcConditionNodeItemLastLine"}),t("div",{staticClass:"sfcConditionNodeItemLinkLine"}),t("div",{staticClass:"sfcConditionNodeItemNodeWrap"},[t("SFCNode",{attrs:{nodeList:null,childrenList:e.data.children,data:n,belongConditionNodeData:e.data,isMouseEnter:e.isMouseEnter}}),t("div",{staticClass:"sfcConditionNodeItemLinkCrossLine"})],1)])})),0),t("SFCArrowLine"),t("SFCAddNode",{attrs:{nodeList:e.nodeList,nodeData:e.data,btnType:e.isMouseEnter?"dot":""}})],1)},Z=[],q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sfcArrowLine",class:{showArrow:e.showArrow,vertical:e.vertical}})},K=[],Q={name:"SFCArrowLine",props:{showArrow:{type:Boolean,default:!0}},data(){return{vertical:F.vertical}}},U=Q,ee=(n("11c5"),Object(b["a"])(U,q,K,!1,null,"3f68034b",null)),te=ee.exports,ne=function(){var e=this,t=e._self._c;return e.readonly?e._e():t("div",{staticClass:"sfcAddNode",class:{vertical:e.vertical},on:{mouseenter:function(t){return t.stopPropagation(),e.onMouseenter.apply(null,arguments)},mouseleave:function(t){return t.stopPropagation(),e.onMouseleave.apply(null,arguments)}}},[t("div",{staticClass:"sfcAddNodeBtn",class:[e.type],on:{mouseenter:e.onAddBtnMouseenter,mouseleave:e.onAddBtnMouseleave}},[t("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[t("path",{attrs:{d:"M896 480H544.8V128h-65.6v352H128v66.4h351.2V896h65.6V546.4H896z"}})]),t("div",{ref:"nodeTypePopover",staticClass:"sfcNodeTypePopover",class:{show:e.showNodeTypePopover},style:e.nodeTypePopoverStyle},[t("SFCNodeTypeContent",{on:{click:e.onNodeTypeClick}})],1)])])},oe=[],ie={name:"SFCAddNode",props:{nodeList:{type:[Array,null],default(){return null}},nodeData:{type:Object,default:null},btnType:{type:String,default:""}},data(){return{readonly:F.readonly,vertical:F.vertical,addNodeBtnType:"",showNodeTypePopover:!1,nodeTypePopoverStyle:{}}},computed:{type(){return"normal"===this.addNodeBtnType?this.addNodeBtnType:this.btnType||this.addNodeBtnType}},watch:{showNodeTypePopover(e){e?this.$nextTick(()=>{this.setNodeTypePopoverStyle()}):setTimeout(()=>{this.resetNodeTypePopoverStyle()},300)}},created(){this.resetNodeTypePopoverStyle()},methods:{setNodeTypePopoverStyle(){let e=this.$refs.nodeTypePopover;if(!e)return;let t=e.offsetWidth,n=e.offsetHeight,{left:o,top:i}=e.getBoundingClientRect(),s=window.innerWidth,a=window.innerHeight,d={};d[i+n>a?"bottom":"top"]=0,d[o+t>s?"right":"left"]="42px",this.nodeTypePopoverStyle=d},resetNodeTypePopoverStyle(){this.nodeTypePopoverStyle={left:"42px",top:0}},onMouseenter(){this.addNodeBtnType="normal"},onMouseleave(){this.addNodeBtnType=""},onAddBtnMouseenter(){this.showNodeTypePopover=!0},onAddBtnMouseleave(){this.showNodeTypePopover=!1},onNodeTypeClick(...e){E.emit("add-node-type-click",this.nodeList,this.nodeData,...e),this.showNodeTypePopover=!1}}},se=ie,ae=(n("5ab0"),Object(b["a"])(se,ne,oe,!1,null,"5cefb234",null)),de=ae.exports,le={name:"SFCConditionNode",components:{[te.name]:te,[de.name]:de},props:{nodeList:{type:[Array,null],default(){return null}},data:{type:Object,default:null},isMouseEnter:{type:Boolean,default:!1}},data(){return{readonly:F.readonly,vertical:F.vertical}},methods:{onAddConditionBranchClick(){E.emit("add-condition-branch-click",this.data)}}},re=le,ce=(n("c64e"),Object(b["a"])(re,Y,Z,!1,null,"7ca3100a",null)),ue=ce.exports,pe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sfcEndNodeContainer"},[e._v(e._s(e.data.title))])},fe=[],he={name:"SFCEndNode",props:{data:{type:Object,default:null}}},ve=he,ye=(n("a00c"),Object(b["a"])(ve,pe,fe,!1,null,"f1309ae2",null)),me=ye.exports,Ce=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sfcNodeContainer",on:{mouseenter:function(t){return t.stopPropagation(),e.onMouseenter.apply(null,arguments)},mouseleave:function(t){return t.stopPropagation(),e.onMouseleave.apply(null,arguments)}}},["start"===e.data.type?t("SFCStartNode",{attrs:{nodeList:e.nodeList,data:e.data,isMouseEnter:e.isMouseEnter||e.isCurrentMouseEnter}}):"end"===e.data.type?t("SFCEndNode",{attrs:{data:e.data}}):"condition"===e.data.type?t("SFCConditionNode",{attrs:{nodeList:e.nodeList,data:e.data,isMouseEnter:e.isMouseEnter||e.isCurrentMouseEnter}}):t("SFCNormalNode",{attrs:{nodeList:e.nodeList,childrenList:e.childrenList,data:e.data,belongConditionNodeData:e.belongConditionNodeData,isMouseEnter:e.isMouseEnter||e.isCurrentMouseEnter}})],1)},Ne=[],we={name:"SFCNode",props:{nodeList:{type:[Array,null],default(){return null}},childrenList:{type:[Array,null],default(){return null}},data:{type:Object,default:null},belongConditionNodeData:{type:Object,default:null},isMouseEnter:{type:Boolean,default:!1}},data(){return{isCurrentMouseEnter:!1}},methods:{onMouseenter(){this.isCurrentMouseEnter=!0},onMouseleave(){this.isCurrentMouseEnter=!1}}},be=we,ge=(n("a933"),Object(b["a"])(be,Ce,Ne,!1,null,"2ae6cee8",null)),Le=ge.exports,ke=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sfcNormalNodeContainer",class:{vertical:e.vertical}},[t("div",{staticClass:"sfcNormalNodeWrap"},[t("div",{staticClass:"sfcNormalNodeContentWrap",on:{mouseenter:function(t){return t.stopPropagation(),e.onContentMouseenter.apply(null,arguments)},mouseleave:function(t){return t.stopPropagation(),e.onContentMouseleave.apply(null,arguments)},click:function(t){return t.stopPropagation(),e.onContentClick.apply(null,arguments)}}},[t("SFCNodeContent",{attrs:{data:e.data}}),e.showDeleteBtn&&!e.readonly?t("SFCDeleteNode",{on:{click:e.onDeleteNode}}):e._e()],1),t("SFCArrowLine"),t("SFCAddNode",{attrs:{nodeList:e.nodeList,nodeData:e.data,btnType:e.isMouseEnter?"dot":""}})],1),e._l(e.data.nodeList||[],(function(n){return t("SFCNode",{key:n.id,attrs:{nodeList:e.data.nodeList,data:n,isMouseEnter:e.isMouseEnter}})}))],2)},Te=[],Se={name:"SFCNormalNode",components:{[te.name]:te,[de.name]:de},props:{nodeList:{type:[Array,null],default(){return null}},childrenList:{type:[Array,null],default(){return null}},data:{type:Object,default:null},belongConditionNodeData:{type:Object,default:null},isMouseEnter:{type:Boolean,default:!1}},data(){return{readonly:F.readonly,vertical:F.vertical,showDeleteBtn:!1}},methods:{onContentMouseenter(){this.showDeleteBtn=!0},onContentMouseleave(){this.showDeleteBtn=!1},onContentClick(){E.emit("node-content-click",this.data,this.nodeList)},onDeleteNode(){E.emit("delete-node-click",this.nodeList,this.childrenList,this.belongConditionNodeData,this.data)}}},De=Se,Me=(n("48ee"),Object(b["a"])(De,ke,Te,!1,null,"f3fe072c",null)),_e=Me.exports,xe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sfcStartNodeContainer",class:{vertical:e.vertical}},[t("div",{staticClass:"sfcStartNodeContent"},[e._v(e._s(e.data.title))]),t("SFCArrowLine"),t("SFCAddNode",{attrs:{nodeList:e.nodeList,nodeData:e.data,btnType:e.isMouseEnter?"dot":""}})],1)},Be=[],Ee={name:"SFCStartNode",components:{[te.name]:te,[de.name]:de},props:{nodeList:{type:[Array,null],default(){return null}},data:{type:Object,default:null},isMouseEnter:{type:Boolean,default:!1}},data(){return{vertical:F.vertical}}},Ae=Ee,Fe=(n("0a68"),Object(b["a"])(Ae,xe,Be,!1,null,"aee8cabe",null)),Pe=Fe.exports,Oe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sfcNormalNodeContent"},[t("div",{staticClass:"sfcNormalNodeTitle"},[e._v(" "+e._s(e.data.title||"")+" ")]),t("div",{staticClass:"sfcNormalNodeData"},[t("div",{staticClass:"sfcNormalNodeDataText"},[e._v(e._s(e.data.content||""))]),t("img",{staticClass:"sfcNormalNodeDataIcon",attrs:{src:n("ee92"),alt:""}})])])},je=[],$e={name:"SFCNodeContent",props:{data:{type:Object,default:null}}},Ie=$e,He=(n("5405"),Object(b["a"])(Ie,Oe,je,!1,null,"645aa214",null)),ze=He.exports,Re=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sfcNodeTypeContent"},e._l(e.nodeTypeList,(function(n,o){return t("div",{key:o,staticClass:"sfcNodeTypeGroup"},[t("div",{staticClass:"sfcNodeTypeGroupName"},[e._v(e._s(n.name))]),t("div",{staticClass:"sfcNodeTypeList"},e._l(n.list,(function(o,i){return t("div",{key:i,staticClass:"sfcNodeTypeItem",on:{click:function(t){return e.onNodeTypeClick(o,n)}}},[e._v(" "+e._s(o.name)+" ")])})),0)])})),0)},Ve=[],We={name:"SFCNodeTypeContent",data(){return{nodeTypeList:F.nodeTypeList||O}},methods:{onNodeTypeClick(...e){this.$emit("click",...e)}}},Ge=We,Je=(n("c110"),Object(b["a"])(Ge,Re,Ve,!1,null,"1c26e8bd",null)),Xe=Je.exports,Ye=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sfcDeleteNode",on:{click:function(t){return t.stopPropagation(),e.$emit("click")}}},[t("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[t("path",{attrs:{d:"M106.666667 213.333333h810.666666v42.666667H106.666667z"}}),t("path",{attrs:{d:"M640 128v42.666667h42.666667V128c0-23.573333-19.093333-42.666667-42.538667-42.666667H383.872A42.496 42.496 0 0 0 341.333333 128v42.666667h42.666667V128h256z"}}),t("path",{attrs:{d:"M213.333333 896V256H170.666667v639.957333C170.666667 919.552 189.653333 938.666667 213.376 938.666667h597.248C834.218667 938.666667 853.333333 919.68 853.333333 895.957333V256h-42.666666v640H213.333333z"}}),t("path",{attrs:{d:"M320 341.333333h42.666667v384h-42.666667zM490.666667 341.333333h42.666666v384h-42.666666zM661.333333 341.333333h42.666667v384h-42.666667z"}})])])},Ze=[],qe={name:"SFCDeleteNode"},Ke=qe,Qe=(n("76ad"),Object(b["a"])(Ke,Ye,Ze,!1,null,"0246b6f9",null)),Ue=Qe.exports;const et=function(e,{notRegisterNodeContent:t,notRegisterNodeTypeContent:n}={}){e.component(ue.name,ue),e.component(me.name,me),e.component(Le.name,Le),e.component(_e.name,_e),e.component(Pe.name,Pe),e.component(Ue.name,Ue),e.component(X.name,X),t||e.component(ze.name,ze),n||e.component(Xe.name,Xe)};var tt={install:et};o["default"].config.productionTip=!1,o["default"].use(tt,{notRegisterNodeContent:!1,notRegisterNodeTypeContent:!1}),new o["default"]({render:e=>e(D)}).$mount("#app")},"5ab0":function(e,t,n){"use strict";n("d44e")},6620:function(e,t,n){},"6c50":function(e,t,n){},"76ad":function(e,t,n){"use strict";n("5023")},"7b7f":function(e,t,n){},"80d3":function(e,t,n){},"99e8":function(e,t,n){},"9ab1":function(e,t,n){},a00c:function(e,t,n){"use strict";n("2d0f")},a933:function(e,t,n){"use strict";n("46b3")},c110:function(e,t,n){"use strict";n("4328")},c64e:function(e,t,n){"use strict";n("80d3")},d44e:function(e,t,n){},ee92:function(e,t,n){e.exports=n.p+"img/arrow.0390e83b.svg"},efc4:function(e,t,n){"use strict";n("9ab1")},f132:function(e,t,n){}});
//# sourceMappingURL=app.189fc154.js.map