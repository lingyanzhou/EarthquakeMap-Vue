webpackJsonp([1],{NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i=(e("7t+N"),e("K3J8"),e("qb6w"),{render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("a",{staticClass:"text-light"},[this._v("Earthquakes")]),this._v(" "),this._m(0),this._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:"/about"}},[this._v("About")])],1)])])]),this._v(" "),a("div",{staticClass:"container-fl",attrs:{id:"app"}},[a("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]});var r=e("VU/8")({name:"App"},i,!1,function(t){e("yMHc")},null,null).exports,n=e("/ocq"),o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"d-flex flow-row"},[a("div",{staticClass:"p-3"},[a(this.sidebarcomp,{tag:"component",attrs:{xprops:this.xpropsSideBar}})],1),this._v(" "),a("div",{staticClass:"p-9"},[a(this.contentcomp,{tag:"component",attrs:{xprops:this.xpropsContent}})],1)])},staticRenderFns:[]};var l=e("VU/8")({name:"SideBarLayout",props:["sidebarcomp","contentcomp","xpropsSideBar","xpropsContent"]},o,!1,function(t){e("nELQ")},null,null).exports,c=e("CqLJ"),u=e.n(c),d=new Date,p=u()(d,"yyyy-mm-dd"),h={state:{startDate:p,endDate:p,minMag:null,maxMag:null,limit:100,orderby:null}},m={name:"EarthquakeMapControl",data:function(){return{sharedstate:h.state}},mounted:function(){},methods:{confirm:function(){this.$eventbus.$emit("EarthquakeMapControlConfirmed")}}},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col col-form-label",attrs:{for:"inputStartDate"}},[t._v("Start Date")]),t._v(" "),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sharedstate.startDate,expression:"sharedstate.startDate"}],staticClass:"form-control",attrs:{type:"date",id:"inputStartDate"},domProps:{value:t.sharedstate.startDate},on:{input:function(a){a.target.composing||t.$set(t.sharedstate,"startDate",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col col-form-label",attrs:{for:"inputEndDate"}},[t._v("End Date")]),t._v(" "),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sharedstate.endDate,expression:"sharedstate.endDate"}],staticClass:"form-control",attrs:{type:"date",id:"inputEndDate"},domProps:{value:t.sharedstate.endDate},on:{input:function(a){a.target.composing||t.$set(t.sharedstate,"endDate",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col col-form-label",attrs:{for:"inputMinMag"}},[t._v("Min Magnitude")]),t._v(" "),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sharedstate.minMag,expression:"sharedstate.minMag"}],staticClass:"form-control",attrs:{type:"number",id:"inputMinMag"},domProps:{value:t.sharedstate.minMag},on:{input:function(a){a.target.composing||t.$set(t.sharedstate,"minMag",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col col-form-label",attrs:{for:"inputMaxMag"}},[t._v("Max Magnitude")]),t._v(" "),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sharedstate.maxMag,expression:"sharedstate.maxMag"}],staticClass:"form-control",attrs:{type:"number",id:"inputMaxMag"},domProps:{value:t.sharedstate.maxMag},on:{input:function(a){a.target.composing||t.$set(t.sharedstate,"maxMag",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col col-form-label",attrs:{for:"inputOrder"}},[t._v("Order")]),t._v(" "),e("div",{staticClass:"col"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.sharedstate.orderby,expression:"sharedstate.orderby"}],staticClass:"form-control",attrs:{id:"inputOrder"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.sharedstate,"orderby",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[t._v("No Order")]),t._v(" "),e("option",{attrs:{value:"time"}},[t._v("Time Desc")]),t._v(" "),e("option",{attrs:{value:"time-asc"}},[t._v("Time Asc")]),t._v(" "),e("option",{attrs:{value:"magnitude"}},[t._v("Magnitude Desc")]),t._v(" "),e("option",{attrs:{value:"magnitude-asc"}},[t._v("Magnitude Asc")])])])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col col-form-label",attrs:{for:"inputRowLimit"}},[t._v("Row Limit")]),t._v(" "),e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.sharedstate.limit,expression:"sharedstate.limit"}],staticClass:"form-control",attrs:{type:"number",id:"inputRowLimit"},domProps:{value:t.sharedstate.limit},on:{input:function(a){a.target.composing||t.$set(t.sharedstate,"limit",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("button",{staticClass:"form-control",on:{click:t.confirm}},[t._v("Confirm")])])])},staticRenderFns:[]};var g=e("VU/8")(m,v,!1,function(t){e("Zq7/")},"data-v-256b4504",null).exports,f=e("mtWM"),b=e.n(f),C=e("vHc0"),_=e("vwbq"),x=e("aaIw"),y={name:"EarthquakeMap",props:["xprops"],data:function(){return{svg:null,tooltip:null,bgGroup:null,fgGroup:null,svgWidth:null,svgHeight:null,projection:null,path:null,sharedstate:h.state}},mounted:function(){this.$eventbus.$on("EarthquakeMapControlConfirmed",this.confirmed),this.svg=_.d("svg#svg"+this.xprops.id),this.tooltip=_.d("div#message"+this.xprops.id),this.svgWidth=this.svg.node().getBoundingClientRect().width,this.svgHeight=this.svg.node().getBoundingClientRect().height,this.bgGroup=this.svg.append("g"),this.fgGroup=this.svg.append("g"),this.projection=x.a().scale(153).translate([this.svgWidth/2,this.svgHeight/2]).precision(.1),this.path=_.a().projection(this.projection),_.b("static/world-50m.v1.json").then(function(t){this.bgGroup.insert("path",".graticule").datum(C.a(t,t.objects.land)).attr("class","land").attr("d",this.path),this.bgGroup.insert("path",".graticule").datum(C.b(t,t.objects.countries,function(t,a){return t!==a})).attr("class","boundary").attr("d",this.path)}.bind(this))},beforeDestroy:function(){this.$eventbus.$off("EarthquakeMapControlConfirmed",this.confirmed)},methods:{confirmed:function(){b.a.get("https://earthquake.usgs.gov/fdsnws/event/1/query",{params:this.makeParams()}).then(function(t){this.fgGroup.selectAll("circle").remove().data(t.data.features).enter().append("circle").attr("cx",function(t){return this.projection(t.geometry.coordinates)[0]}.bind(this)).attr("cy",function(t){return this.projection(t.geometry.coordinates)[1]}.bind(this)).attr("fill","red").attr("opacity","0.2").attr("r","0").transition().delay(function(t,a){return 300*a}).duration(200).on("start",function(t,a){this.tooltip.html(this.makeTooltip(t))}.bind(this)).attr("r",function(t){return _.c().domain([1,10]).range([1,10])(Number(t.properties.mag))}).attr("opacity","0.7")}.bind(this)).catch(function(t){console.log(t)})},makeParams:function(){var t={format:"geojson"},a=Number(this.sharedstate.limit);a>0&&a<=2e4&&(t.limit=a),a=null;try{a=Date.parse(this.sharedstate.startDate)}catch(t){}null!==a&&(t.starttime=this.sharedstate.startDate),a=null;try{a=Date.parse(this.sharedstate.endDate)}catch(t){}return null!==a&&(t.endtime=this.sharedstate.endDate),null!==this.sharedstate.orderby&&""!==this.sharedstate.orderby&&(t.orderby=this.sharedstate.orderby),isNaN(this.sharedstate.minMag)||(t.minmagnitude=this.sharedstate.minMag),isNaN(this.sharedstate.maxMag)||(t.maxmagnitude=this.sharedstate.maxMag),t},makeTooltip:function(t){return'<div class="p-2">Time: '+new Date(t.properties.time).toLocaleDateString()+'</div><div class="p-2">Location: '+t.properties.place+'</div><div class="p-2">Magnitude: '+t.properties.mag+'</div><div class="p-2">More: <a href="'+t.properties.url+'">Link</a></div>'}}},M={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"position-absolute h-100",staticStyle:{"min-height":"600px","min-width":"900px"},attrs:{id:"div"+this.xprops.id}},[a("svg",{staticClass:"earthquake-map",attrs:{id:"svg"+this.xprops.id,width:"100%",height:"100%"}}),this._v(" "),a("div",{staticClass:"d-flex flex-column earthquake-map-message bg-black fg-white ",attrs:{id:"message"+this.xprops.id}})])},staticRenderFns:[]};var w=e("VU/8")(y,M,!1,function(t){e("gWKy")},null,null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"list-group"},[e("div",{staticClass:"list-group-item list-group-item-action flex-column align-items-start"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("h5",{staticClass:"mb-1"},[t._v("Datasource")])]),t._v(" "),e("p",{staticClass:"mb-1"},[t._v("USGS Earthquake Hazads Program "),e("a",{attrs:{href:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php"}},[t._v("https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php")])])]),t._v(" "),e("div",{staticClass:"list-group-item list-group-item-action flex-column align-items-start"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("h5",{staticClass:"mb-1"},[t._v("Github")])]),t._v(" "),e("p",{staticClass:"mb-1"},[e("a",{attrs:{href:"https://github.com/lingyanzhou/EarthquakeMap-Vue/"}},[t._v("https://github.com/lingyanzhou/EarthquakeMap-Vue/")])])]),t._v(" "),e("div",{staticClass:"list-group-item list-group-item-action flex-column align-items-start"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("h5",{staticClass:"mb-1"},[t._v("Github Page")])]),t._v(" "),e("p",{staticClass:"mb-1"},[e("a",{attrs:{href:"https://lingyanzhou.github.io/EarthquakeMap-Vue/"}},[t._v("https://lingyanzhou.github.io/EarthquakeMap-Vue/")])])])])}]},D=e("VU/8")(null,k,!1,null,null,null).exports;s.a.use(n.a);var q=new n.a({routes:[{path:"/",name:"SideBarLayout",component:l,props:{sidebarcomp:g,contentcomp:w,xpropsSideBar:{},xpropsContent:{id:"svgEarthquake"}}},{path:"/about",name:"About",component:D}]});s.a.config.productionTip=!1,s.a.prototype.$eventbus=new s.a,new s.a({el:"#app",router:q,components:{App:r},template:"<App/>"})},"Zq7/":function(t,a){},gWKy:function(t,a){},nELQ:function(t,a){},qb6w:function(t,a){},yMHc:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.d795c17a77a808f36bce.js.map
