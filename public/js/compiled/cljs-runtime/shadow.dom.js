goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35220 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35220(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35227 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35227(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34485 = coll;
var G__34486 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34485,G__34486) : shadow.dom.lazy_native_coll_seq.call(null,G__34485,G__34486));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34493 = arguments.length;
switch (G__34493) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34495 = arguments.length;
switch (G__34495) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34499 = arguments.length;
switch (G__34499) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34506 = arguments.length;
switch (G__34506) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34516 = arguments.length;
switch (G__34516) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34528 = arguments.length;
switch (G__34528) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34537){if((e34537 instanceof Object)){
var e = e34537;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34537;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34548 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34549 = null;
var count__34550 = (0);
var i__34551 = (0);
while(true){
if((i__34551 < count__34550)){
var el = chunk__34549.cljs$core$IIndexed$_nth$arity$2(null,i__34551);
var handler_35288__$1 = ((function (seq__34548,chunk__34549,count__34550,i__34551,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34548,chunk__34549,count__34550,i__34551,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35288__$1);


var G__35289 = seq__34548;
var G__35290 = chunk__34549;
var G__35291 = count__34550;
var G__35292 = (i__34551 + (1));
seq__34548 = G__35289;
chunk__34549 = G__35290;
count__34550 = G__35291;
i__34551 = G__35292;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34548);
if(temp__5735__auto__){
var seq__34548__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34548__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34548__$1);
var G__35293 = cljs.core.chunk_rest(seq__34548__$1);
var G__35294 = c__4556__auto__;
var G__35295 = cljs.core.count(c__4556__auto__);
var G__35296 = (0);
seq__34548 = G__35293;
chunk__34549 = G__35294;
count__34550 = G__35295;
i__34551 = G__35296;
continue;
} else {
var el = cljs.core.first(seq__34548__$1);
var handler_35297__$1 = ((function (seq__34548,chunk__34549,count__34550,i__34551,el,seq__34548__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34548,chunk__34549,count__34550,i__34551,el,seq__34548__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35297__$1);


var G__35298 = cljs.core.next(seq__34548__$1);
var G__35299 = null;
var G__35300 = (0);
var G__35301 = (0);
seq__34548 = G__35298;
chunk__34549 = G__35299;
count__34550 = G__35300;
i__34551 = G__35301;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34564 = arguments.length;
switch (G__34564) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34573 = cljs.core.seq(events);
var chunk__34574 = null;
var count__34575 = (0);
var i__34576 = (0);
while(true){
if((i__34576 < count__34575)){
var vec__34589 = chunk__34574.cljs$core$IIndexed$_nth$arity$2(null,i__34576);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34589,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34589,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35305 = seq__34573;
var G__35306 = chunk__34574;
var G__35307 = count__34575;
var G__35308 = (i__34576 + (1));
seq__34573 = G__35305;
chunk__34574 = G__35306;
count__34575 = G__35307;
i__34576 = G__35308;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34573);
if(temp__5735__auto__){
var seq__34573__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34573__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34573__$1);
var G__35309 = cljs.core.chunk_rest(seq__34573__$1);
var G__35310 = c__4556__auto__;
var G__35311 = cljs.core.count(c__4556__auto__);
var G__35312 = (0);
seq__34573 = G__35309;
chunk__34574 = G__35310;
count__34575 = G__35311;
i__34576 = G__35312;
continue;
} else {
var vec__34597 = cljs.core.first(seq__34573__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34597,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35313 = cljs.core.next(seq__34573__$1);
var G__35314 = null;
var G__35315 = (0);
var G__35316 = (0);
seq__34573 = G__35313;
chunk__34574 = G__35314;
count__34575 = G__35315;
i__34576 = G__35316;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34602 = cljs.core.seq(styles);
var chunk__34603 = null;
var count__34604 = (0);
var i__34605 = (0);
while(true){
if((i__34605 < count__34604)){
var vec__34622 = chunk__34603.cljs$core$IIndexed$_nth$arity$2(null,i__34605);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34622,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34622,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35319 = seq__34602;
var G__35320 = chunk__34603;
var G__35321 = count__34604;
var G__35322 = (i__34605 + (1));
seq__34602 = G__35319;
chunk__34603 = G__35320;
count__34604 = G__35321;
i__34605 = G__35322;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34602);
if(temp__5735__auto__){
var seq__34602__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34602__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34602__$1);
var G__35325 = cljs.core.chunk_rest(seq__34602__$1);
var G__35326 = c__4556__auto__;
var G__35327 = cljs.core.count(c__4556__auto__);
var G__35328 = (0);
seq__34602 = G__35325;
chunk__34603 = G__35326;
count__34604 = G__35327;
i__34605 = G__35328;
continue;
} else {
var vec__34629 = cljs.core.first(seq__34602__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34629,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34629,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35330 = cljs.core.next(seq__34602__$1);
var G__35331 = null;
var G__35332 = (0);
var G__35333 = (0);
seq__34602 = G__35330;
chunk__34603 = G__35331;
count__34604 = G__35332;
i__34605 = G__35333;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34636_35335 = key;
var G__34636_35336__$1 = (((G__34636_35335 instanceof cljs.core.Keyword))?G__34636_35335.fqn:null);
switch (G__34636_35336__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35355 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_35355,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_35355,"aria-");
}
})())){
el.setAttribute(ks_35355,value);
} else {
(el[ks_35355] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34667){
var map__34668 = p__34667;
var map__34668__$1 = (((((!((map__34668 == null))))?(((((map__34668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34668):map__34668);
var props = map__34668__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34668__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34675 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34675,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34675,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34675,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34679 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34679,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34679;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34685 = arguments.length;
switch (G__34685) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34695){
var vec__34698 = p__34695;
var seq__34699 = cljs.core.seq(vec__34698);
var first__34700 = cljs.core.first(seq__34699);
var seq__34699__$1 = cljs.core.next(seq__34699);
var nn = first__34700;
var first__34700__$1 = cljs.core.first(seq__34699__$1);
var seq__34699__$2 = cljs.core.next(seq__34699__$1);
var np = first__34700__$1;
var nc = seq__34699__$2;
var node = vec__34698;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34705 = nn;
var G__34706 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34705,G__34706) : create_fn.call(null,G__34705,G__34706));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34711 = nn;
var G__34712 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34711,G__34712) : create_fn.call(null,G__34711,G__34712));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34716 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34716,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34716,(1),null);
var seq__34720_35381 = cljs.core.seq(node_children);
var chunk__34721_35382 = null;
var count__34722_35383 = (0);
var i__34723_35384 = (0);
while(true){
if((i__34723_35384 < count__34722_35383)){
var child_struct_35385 = chunk__34721_35382.cljs$core$IIndexed$_nth$arity$2(null,i__34723_35384);
var children_35386 = shadow.dom.dom_node(child_struct_35385);
if(cljs.core.seq_QMARK_(children_35386)){
var seq__34767_35387 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35386));
var chunk__34769_35388 = null;
var count__34770_35389 = (0);
var i__34771_35390 = (0);
while(true){
if((i__34771_35390 < count__34770_35389)){
var child_35391 = chunk__34769_35388.cljs$core$IIndexed$_nth$arity$2(null,i__34771_35390);
if(cljs.core.truth_(child_35391)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35391);


var G__35392 = seq__34767_35387;
var G__35393 = chunk__34769_35388;
var G__35394 = count__34770_35389;
var G__35395 = (i__34771_35390 + (1));
seq__34767_35387 = G__35392;
chunk__34769_35388 = G__35393;
count__34770_35389 = G__35394;
i__34771_35390 = G__35395;
continue;
} else {
var G__35396 = seq__34767_35387;
var G__35397 = chunk__34769_35388;
var G__35398 = count__34770_35389;
var G__35399 = (i__34771_35390 + (1));
seq__34767_35387 = G__35396;
chunk__34769_35388 = G__35397;
count__34770_35389 = G__35398;
i__34771_35390 = G__35399;
continue;
}
} else {
var temp__5735__auto___35401 = cljs.core.seq(seq__34767_35387);
if(temp__5735__auto___35401){
var seq__34767_35402__$1 = temp__5735__auto___35401;
if(cljs.core.chunked_seq_QMARK_(seq__34767_35402__$1)){
var c__4556__auto___35403 = cljs.core.chunk_first(seq__34767_35402__$1);
var G__35404 = cljs.core.chunk_rest(seq__34767_35402__$1);
var G__35405 = c__4556__auto___35403;
var G__35406 = cljs.core.count(c__4556__auto___35403);
var G__35407 = (0);
seq__34767_35387 = G__35404;
chunk__34769_35388 = G__35405;
count__34770_35389 = G__35406;
i__34771_35390 = G__35407;
continue;
} else {
var child_35409 = cljs.core.first(seq__34767_35402__$1);
if(cljs.core.truth_(child_35409)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35409);


var G__35413 = cljs.core.next(seq__34767_35402__$1);
var G__35414 = null;
var G__35415 = (0);
var G__35416 = (0);
seq__34767_35387 = G__35413;
chunk__34769_35388 = G__35414;
count__34770_35389 = G__35415;
i__34771_35390 = G__35416;
continue;
} else {
var G__35417 = cljs.core.next(seq__34767_35402__$1);
var G__35418 = null;
var G__35419 = (0);
var G__35420 = (0);
seq__34767_35387 = G__35417;
chunk__34769_35388 = G__35418;
count__34770_35389 = G__35419;
i__34771_35390 = G__35420;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35386);
}


var G__35421 = seq__34720_35381;
var G__35422 = chunk__34721_35382;
var G__35423 = count__34722_35383;
var G__35424 = (i__34723_35384 + (1));
seq__34720_35381 = G__35421;
chunk__34721_35382 = G__35422;
count__34722_35383 = G__35423;
i__34723_35384 = G__35424;
continue;
} else {
var temp__5735__auto___35426 = cljs.core.seq(seq__34720_35381);
if(temp__5735__auto___35426){
var seq__34720_35427__$1 = temp__5735__auto___35426;
if(cljs.core.chunked_seq_QMARK_(seq__34720_35427__$1)){
var c__4556__auto___35428 = cljs.core.chunk_first(seq__34720_35427__$1);
var G__35429 = cljs.core.chunk_rest(seq__34720_35427__$1);
var G__35430 = c__4556__auto___35428;
var G__35431 = cljs.core.count(c__4556__auto___35428);
var G__35432 = (0);
seq__34720_35381 = G__35429;
chunk__34721_35382 = G__35430;
count__34722_35383 = G__35431;
i__34723_35384 = G__35432;
continue;
} else {
var child_struct_35433 = cljs.core.first(seq__34720_35427__$1);
var children_35434 = shadow.dom.dom_node(child_struct_35433);
if(cljs.core.seq_QMARK_(children_35434)){
var seq__34780_35435 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35434));
var chunk__34782_35436 = null;
var count__34783_35437 = (0);
var i__34784_35438 = (0);
while(true){
if((i__34784_35438 < count__34783_35437)){
var child_35439 = chunk__34782_35436.cljs$core$IIndexed$_nth$arity$2(null,i__34784_35438);
if(cljs.core.truth_(child_35439)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35439);


var G__35444 = seq__34780_35435;
var G__35445 = chunk__34782_35436;
var G__35446 = count__34783_35437;
var G__35447 = (i__34784_35438 + (1));
seq__34780_35435 = G__35444;
chunk__34782_35436 = G__35445;
count__34783_35437 = G__35446;
i__34784_35438 = G__35447;
continue;
} else {
var G__35449 = seq__34780_35435;
var G__35450 = chunk__34782_35436;
var G__35451 = count__34783_35437;
var G__35452 = (i__34784_35438 + (1));
seq__34780_35435 = G__35449;
chunk__34782_35436 = G__35450;
count__34783_35437 = G__35451;
i__34784_35438 = G__35452;
continue;
}
} else {
var temp__5735__auto___35453__$1 = cljs.core.seq(seq__34780_35435);
if(temp__5735__auto___35453__$1){
var seq__34780_35454__$1 = temp__5735__auto___35453__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34780_35454__$1)){
var c__4556__auto___35455 = cljs.core.chunk_first(seq__34780_35454__$1);
var G__35456 = cljs.core.chunk_rest(seq__34780_35454__$1);
var G__35457 = c__4556__auto___35455;
var G__35458 = cljs.core.count(c__4556__auto___35455);
var G__35459 = (0);
seq__34780_35435 = G__35456;
chunk__34782_35436 = G__35457;
count__34783_35437 = G__35458;
i__34784_35438 = G__35459;
continue;
} else {
var child_35461 = cljs.core.first(seq__34780_35454__$1);
if(cljs.core.truth_(child_35461)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35461);


var G__35462 = cljs.core.next(seq__34780_35454__$1);
var G__35463 = null;
var G__35464 = (0);
var G__35465 = (0);
seq__34780_35435 = G__35462;
chunk__34782_35436 = G__35463;
count__34783_35437 = G__35464;
i__34784_35438 = G__35465;
continue;
} else {
var G__35466 = cljs.core.next(seq__34780_35454__$1);
var G__35467 = null;
var G__35468 = (0);
var G__35469 = (0);
seq__34780_35435 = G__35466;
chunk__34782_35436 = G__35467;
count__34783_35437 = G__35468;
i__34784_35438 = G__35469;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35434);
}


var G__35471 = cljs.core.next(seq__34720_35427__$1);
var G__35472 = null;
var G__35473 = (0);
var G__35474 = (0);
seq__34720_35381 = G__35471;
chunk__34721_35382 = G__35472;
count__34722_35383 = G__35473;
i__34723_35384 = G__35474;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34812 = cljs.core.seq(node);
var chunk__34813 = null;
var count__34814 = (0);
var i__34815 = (0);
while(true){
if((i__34815 < count__34814)){
var n = chunk__34813.cljs$core$IIndexed$_nth$arity$2(null,i__34815);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35483 = seq__34812;
var G__35484 = chunk__34813;
var G__35485 = count__34814;
var G__35486 = (i__34815 + (1));
seq__34812 = G__35483;
chunk__34813 = G__35484;
count__34814 = G__35485;
i__34815 = G__35486;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34812);
if(temp__5735__auto__){
var seq__34812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34812__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34812__$1);
var G__35492 = cljs.core.chunk_rest(seq__34812__$1);
var G__35493 = c__4556__auto__;
var G__35494 = cljs.core.count(c__4556__auto__);
var G__35495 = (0);
seq__34812 = G__35492;
chunk__34813 = G__35493;
count__34814 = G__35494;
i__34815 = G__35495;
continue;
} else {
var n = cljs.core.first(seq__34812__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35496 = cljs.core.next(seq__34812__$1);
var G__35497 = null;
var G__35498 = (0);
var G__35499 = (0);
seq__34812 = G__35496;
chunk__34813 = G__35497;
count__34814 = G__35498;
i__34815 = G__35499;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34827 = arguments.length;
switch (G__34827) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34835 = arguments.length;
switch (G__34835) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34852 = arguments.length;
switch (G__34852) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35523 = arguments.length;
var i__4737__auto___35524 = (0);
while(true){
if((i__4737__auto___35524 < len__4736__auto___35523)){
args__4742__auto__.push((arguments[i__4737__auto___35524]));

var G__35526 = (i__4737__auto___35524 + (1));
i__4737__auto___35524 = G__35526;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34882_35531 = cljs.core.seq(nodes);
var chunk__34883_35532 = null;
var count__34884_35533 = (0);
var i__34885_35534 = (0);
while(true){
if((i__34885_35534 < count__34884_35533)){
var node_35538 = chunk__34883_35532.cljs$core$IIndexed$_nth$arity$2(null,i__34885_35534);
fragment.appendChild(shadow.dom._to_dom(node_35538));


var G__35539 = seq__34882_35531;
var G__35540 = chunk__34883_35532;
var G__35541 = count__34884_35533;
var G__35542 = (i__34885_35534 + (1));
seq__34882_35531 = G__35539;
chunk__34883_35532 = G__35540;
count__34884_35533 = G__35541;
i__34885_35534 = G__35542;
continue;
} else {
var temp__5735__auto___35543 = cljs.core.seq(seq__34882_35531);
if(temp__5735__auto___35543){
var seq__34882_35545__$1 = temp__5735__auto___35543;
if(cljs.core.chunked_seq_QMARK_(seq__34882_35545__$1)){
var c__4556__auto___35548 = cljs.core.chunk_first(seq__34882_35545__$1);
var G__35549 = cljs.core.chunk_rest(seq__34882_35545__$1);
var G__35550 = c__4556__auto___35548;
var G__35551 = cljs.core.count(c__4556__auto___35548);
var G__35552 = (0);
seq__34882_35531 = G__35549;
chunk__34883_35532 = G__35550;
count__34884_35533 = G__35551;
i__34885_35534 = G__35552;
continue;
} else {
var node_35553 = cljs.core.first(seq__34882_35545__$1);
fragment.appendChild(shadow.dom._to_dom(node_35553));


var G__35554 = cljs.core.next(seq__34882_35545__$1);
var G__35555 = null;
var G__35556 = (0);
var G__35557 = (0);
seq__34882_35531 = G__35554;
chunk__34883_35532 = G__35555;
count__34884_35533 = G__35556;
i__34885_35534 = G__35557;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34872){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34872));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34896_35566 = cljs.core.seq(scripts);
var chunk__34897_35567 = null;
var count__34898_35568 = (0);
var i__34899_35569 = (0);
while(true){
if((i__34899_35569 < count__34898_35568)){
var vec__34912_35570 = chunk__34897_35567.cljs$core$IIndexed$_nth$arity$2(null,i__34899_35569);
var script_tag_35571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34912_35570,(0),null);
var script_body_35572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34912_35570,(1),null);
eval(script_body_35572);


var G__35575 = seq__34896_35566;
var G__35576 = chunk__34897_35567;
var G__35577 = count__34898_35568;
var G__35578 = (i__34899_35569 + (1));
seq__34896_35566 = G__35575;
chunk__34897_35567 = G__35576;
count__34898_35568 = G__35577;
i__34899_35569 = G__35578;
continue;
} else {
var temp__5735__auto___35580 = cljs.core.seq(seq__34896_35566);
if(temp__5735__auto___35580){
var seq__34896_35581__$1 = temp__5735__auto___35580;
if(cljs.core.chunked_seq_QMARK_(seq__34896_35581__$1)){
var c__4556__auto___35582 = cljs.core.chunk_first(seq__34896_35581__$1);
var G__35583 = cljs.core.chunk_rest(seq__34896_35581__$1);
var G__35584 = c__4556__auto___35582;
var G__35585 = cljs.core.count(c__4556__auto___35582);
var G__35586 = (0);
seq__34896_35566 = G__35583;
chunk__34897_35567 = G__35584;
count__34898_35568 = G__35585;
i__34899_35569 = G__35586;
continue;
} else {
var vec__34919_35588 = cljs.core.first(seq__34896_35581__$1);
var script_tag_35589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34919_35588,(0),null);
var script_body_35590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34919_35588,(1),null);
eval(script_body_35590);


var G__35592 = cljs.core.next(seq__34896_35581__$1);
var G__35593 = null;
var G__35594 = (0);
var G__35595 = (0);
seq__34896_35566 = G__35592;
chunk__34897_35567 = G__35593;
count__34898_35568 = G__35594;
i__34899_35569 = G__35595;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34925){
var vec__34927 = p__34925;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34927,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34927,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34942 = arguments.length;
switch (G__34942) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34959 = cljs.core.seq(style_keys);
var chunk__34960 = null;
var count__34961 = (0);
var i__34962 = (0);
while(true){
if((i__34962 < count__34961)){
var it = chunk__34960.cljs$core$IIndexed$_nth$arity$2(null,i__34962);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35614 = seq__34959;
var G__35615 = chunk__34960;
var G__35616 = count__34961;
var G__35617 = (i__34962 + (1));
seq__34959 = G__35614;
chunk__34960 = G__35615;
count__34961 = G__35616;
i__34962 = G__35617;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34959);
if(temp__5735__auto__){
var seq__34959__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34959__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34959__$1);
var G__35619 = cljs.core.chunk_rest(seq__34959__$1);
var G__35620 = c__4556__auto__;
var G__35621 = cljs.core.count(c__4556__auto__);
var G__35622 = (0);
seq__34959 = G__35619;
chunk__34960 = G__35620;
count__34961 = G__35621;
i__34962 = G__35622;
continue;
} else {
var it = cljs.core.first(seq__34959__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35628 = cljs.core.next(seq__34959__$1);
var G__35629 = null;
var G__35630 = (0);
var G__35631 = (0);
seq__34959 = G__35628;
chunk__34960 = G__35629;
count__34961 = G__35630;
i__34962 = G__35631;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34971,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34977 = k34971;
var G__34977__$1 = (((G__34977 instanceof cljs.core.Keyword))?G__34977.fqn:null);
switch (G__34977__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34971,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34979){
var vec__34980 = p__34979;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34980,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34970){
var self__ = this;
var G__34970__$1 = this;
return (new cljs.core.RecordIter((0),G__34970__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34972,other34973){
var self__ = this;
var this34972__$1 = this;
return (((!((other34973 == null)))) && ((this34972__$1.constructor === other34973.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34972__$1.x,other34973.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34972__$1.y,other34973.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34972__$1.__extmap,other34973.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34970){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34992 = cljs.core.keyword_identical_QMARK_;
var expr__34993 = k__4388__auto__;
if(cljs.core.truth_((pred__34992.cljs$core$IFn$_invoke$arity$2 ? pred__34992.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34993) : pred__34992.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34993)))){
return (new shadow.dom.Coordinate(G__34970,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34992.cljs$core$IFn$_invoke$arity$2 ? pred__34992.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34993) : pred__34992.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34993)))){
return (new shadow.dom.Coordinate(self__.x,G__34970,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34970),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34970){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34970,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34975){
var extmap__4419__auto__ = (function (){var G__34995 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34975,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34975)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34995);
} else {
return G__34995;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34975),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34975),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34999,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35014 = k34999;
var G__35014__$1 = (((G__35014 instanceof cljs.core.Keyword))?G__35014.fqn:null);
switch (G__35014__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34999,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35017){
var vec__35018 = p__35017;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35018,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35018,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34998){
var self__ = this;
var G__34998__$1 = this;
return (new cljs.core.RecordIter((0),G__34998__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35000,other35001){
var self__ = this;
var this35000__$1 = this;
return (((!((other35001 == null)))) && ((this35000__$1.constructor === other35001.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35000__$1.w,other35001.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35000__$1.h,other35001.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35000__$1.__extmap,other35001.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34998){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35036 = cljs.core.keyword_identical_QMARK_;
var expr__35037 = k__4388__auto__;
if(cljs.core.truth_((pred__35036.cljs$core$IFn$_invoke$arity$2 ? pred__35036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35037) : pred__35036.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35037)))){
return (new shadow.dom.Size(G__34998,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35036.cljs$core$IFn$_invoke$arity$2 ? pred__35036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35037) : pred__35036.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35037)))){
return (new shadow.dom.Size(self__.w,G__34998,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34998),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34998){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34998,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35004){
var extmap__4419__auto__ = (function (){var G__35053 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35004,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35004)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35053);
} else {
return G__35053;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35004),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35004),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__35694 = (i + (1));
var G__35695 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35694;
ret = G__35695;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35069){
var vec__35070 = p__35069;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35070,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35076 = arguments.length;
switch (G__35076) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35705 = ps;
var G__35706 = (i + (1));
el__$1 = G__35705;
i = G__35706;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35087 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35091_35712 = cljs.core.seq(props);
var chunk__35092_35713 = null;
var count__35093_35714 = (0);
var i__35094_35715 = (0);
while(true){
if((i__35094_35715 < count__35093_35714)){
var vec__35108_35716 = chunk__35092_35713.cljs$core$IIndexed$_nth$arity$2(null,i__35094_35715);
var k_35717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108_35716,(0),null);
var v_35718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108_35716,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35717);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35717),v_35718);


var G__35719 = seq__35091_35712;
var G__35720 = chunk__35092_35713;
var G__35721 = count__35093_35714;
var G__35722 = (i__35094_35715 + (1));
seq__35091_35712 = G__35719;
chunk__35092_35713 = G__35720;
count__35093_35714 = G__35721;
i__35094_35715 = G__35722;
continue;
} else {
var temp__5735__auto___35723 = cljs.core.seq(seq__35091_35712);
if(temp__5735__auto___35723){
var seq__35091_35724__$1 = temp__5735__auto___35723;
if(cljs.core.chunked_seq_QMARK_(seq__35091_35724__$1)){
var c__4556__auto___35725 = cljs.core.chunk_first(seq__35091_35724__$1);
var G__35726 = cljs.core.chunk_rest(seq__35091_35724__$1);
var G__35727 = c__4556__auto___35725;
var G__35728 = cljs.core.count(c__4556__auto___35725);
var G__35729 = (0);
seq__35091_35712 = G__35726;
chunk__35092_35713 = G__35727;
count__35093_35714 = G__35728;
i__35094_35715 = G__35729;
continue;
} else {
var vec__35113_35730 = cljs.core.first(seq__35091_35724__$1);
var k_35731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35730,(0),null);
var v_35732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35113_35730,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35731);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35731),v_35732);


var G__35733 = cljs.core.next(seq__35091_35724__$1);
var G__35734 = null;
var G__35735 = (0);
var G__35736 = (0);
seq__35091_35712 = G__35733;
chunk__35092_35713 = G__35734;
count__35093_35714 = G__35735;
i__35094_35715 = G__35736;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35121 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35121,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35121,(1),null);
var seq__35124_35737 = cljs.core.seq(node_children);
var chunk__35126_35738 = null;
var count__35127_35739 = (0);
var i__35128_35740 = (0);
while(true){
if((i__35128_35740 < count__35127_35739)){
var child_struct_35741 = chunk__35126_35738.cljs$core$IIndexed$_nth$arity$2(null,i__35128_35740);
if((!((child_struct_35741 == null)))){
if(typeof child_struct_35741 === 'string'){
var text_35742 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35742),child_struct_35741].join(''));
} else {
var children_35743 = shadow.dom.svg_node(child_struct_35741);
if(cljs.core.seq_QMARK_(children_35743)){
var seq__35154_35744 = cljs.core.seq(children_35743);
var chunk__35156_35745 = null;
var count__35157_35746 = (0);
var i__35158_35747 = (0);
while(true){
if((i__35158_35747 < count__35157_35746)){
var child_35748 = chunk__35156_35745.cljs$core$IIndexed$_nth$arity$2(null,i__35158_35747);
if(cljs.core.truth_(child_35748)){
node.appendChild(child_35748);


var G__35749 = seq__35154_35744;
var G__35750 = chunk__35156_35745;
var G__35751 = count__35157_35746;
var G__35752 = (i__35158_35747 + (1));
seq__35154_35744 = G__35749;
chunk__35156_35745 = G__35750;
count__35157_35746 = G__35751;
i__35158_35747 = G__35752;
continue;
} else {
var G__35753 = seq__35154_35744;
var G__35754 = chunk__35156_35745;
var G__35755 = count__35157_35746;
var G__35756 = (i__35158_35747 + (1));
seq__35154_35744 = G__35753;
chunk__35156_35745 = G__35754;
count__35157_35746 = G__35755;
i__35158_35747 = G__35756;
continue;
}
} else {
var temp__5735__auto___35757 = cljs.core.seq(seq__35154_35744);
if(temp__5735__auto___35757){
var seq__35154_35758__$1 = temp__5735__auto___35757;
if(cljs.core.chunked_seq_QMARK_(seq__35154_35758__$1)){
var c__4556__auto___35759 = cljs.core.chunk_first(seq__35154_35758__$1);
var G__35760 = cljs.core.chunk_rest(seq__35154_35758__$1);
var G__35761 = c__4556__auto___35759;
var G__35762 = cljs.core.count(c__4556__auto___35759);
var G__35763 = (0);
seq__35154_35744 = G__35760;
chunk__35156_35745 = G__35761;
count__35157_35746 = G__35762;
i__35158_35747 = G__35763;
continue;
} else {
var child_35764 = cljs.core.first(seq__35154_35758__$1);
if(cljs.core.truth_(child_35764)){
node.appendChild(child_35764);


var G__35765 = cljs.core.next(seq__35154_35758__$1);
var G__35766 = null;
var G__35767 = (0);
var G__35768 = (0);
seq__35154_35744 = G__35765;
chunk__35156_35745 = G__35766;
count__35157_35746 = G__35767;
i__35158_35747 = G__35768;
continue;
} else {
var G__35772 = cljs.core.next(seq__35154_35758__$1);
var G__35773 = null;
var G__35774 = (0);
var G__35775 = (0);
seq__35154_35744 = G__35772;
chunk__35156_35745 = G__35773;
count__35157_35746 = G__35774;
i__35158_35747 = G__35775;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35743);
}
}


var G__35776 = seq__35124_35737;
var G__35777 = chunk__35126_35738;
var G__35778 = count__35127_35739;
var G__35779 = (i__35128_35740 + (1));
seq__35124_35737 = G__35776;
chunk__35126_35738 = G__35777;
count__35127_35739 = G__35778;
i__35128_35740 = G__35779;
continue;
} else {
var G__35780 = seq__35124_35737;
var G__35781 = chunk__35126_35738;
var G__35782 = count__35127_35739;
var G__35783 = (i__35128_35740 + (1));
seq__35124_35737 = G__35780;
chunk__35126_35738 = G__35781;
count__35127_35739 = G__35782;
i__35128_35740 = G__35783;
continue;
}
} else {
var temp__5735__auto___35784 = cljs.core.seq(seq__35124_35737);
if(temp__5735__auto___35784){
var seq__35124_35785__$1 = temp__5735__auto___35784;
if(cljs.core.chunked_seq_QMARK_(seq__35124_35785__$1)){
var c__4556__auto___35786 = cljs.core.chunk_first(seq__35124_35785__$1);
var G__35787 = cljs.core.chunk_rest(seq__35124_35785__$1);
var G__35788 = c__4556__auto___35786;
var G__35789 = cljs.core.count(c__4556__auto___35786);
var G__35790 = (0);
seq__35124_35737 = G__35787;
chunk__35126_35738 = G__35788;
count__35127_35739 = G__35789;
i__35128_35740 = G__35790;
continue;
} else {
var child_struct_35791 = cljs.core.first(seq__35124_35785__$1);
if((!((child_struct_35791 == null)))){
if(typeof child_struct_35791 === 'string'){
var text_35792 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35792),child_struct_35791].join(''));
} else {
var children_35793 = shadow.dom.svg_node(child_struct_35791);
if(cljs.core.seq_QMARK_(children_35793)){
var seq__35166_35794 = cljs.core.seq(children_35793);
var chunk__35168_35795 = null;
var count__35169_35796 = (0);
var i__35170_35797 = (0);
while(true){
if((i__35170_35797 < count__35169_35796)){
var child_35798 = chunk__35168_35795.cljs$core$IIndexed$_nth$arity$2(null,i__35170_35797);
if(cljs.core.truth_(child_35798)){
node.appendChild(child_35798);


var G__35799 = seq__35166_35794;
var G__35800 = chunk__35168_35795;
var G__35801 = count__35169_35796;
var G__35802 = (i__35170_35797 + (1));
seq__35166_35794 = G__35799;
chunk__35168_35795 = G__35800;
count__35169_35796 = G__35801;
i__35170_35797 = G__35802;
continue;
} else {
var G__35803 = seq__35166_35794;
var G__35804 = chunk__35168_35795;
var G__35805 = count__35169_35796;
var G__35806 = (i__35170_35797 + (1));
seq__35166_35794 = G__35803;
chunk__35168_35795 = G__35804;
count__35169_35796 = G__35805;
i__35170_35797 = G__35806;
continue;
}
} else {
var temp__5735__auto___35807__$1 = cljs.core.seq(seq__35166_35794);
if(temp__5735__auto___35807__$1){
var seq__35166_35808__$1 = temp__5735__auto___35807__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35166_35808__$1)){
var c__4556__auto___35809 = cljs.core.chunk_first(seq__35166_35808__$1);
var G__35810 = cljs.core.chunk_rest(seq__35166_35808__$1);
var G__35811 = c__4556__auto___35809;
var G__35812 = cljs.core.count(c__4556__auto___35809);
var G__35813 = (0);
seq__35166_35794 = G__35810;
chunk__35168_35795 = G__35811;
count__35169_35796 = G__35812;
i__35170_35797 = G__35813;
continue;
} else {
var child_35814 = cljs.core.first(seq__35166_35808__$1);
if(cljs.core.truth_(child_35814)){
node.appendChild(child_35814);


var G__35816 = cljs.core.next(seq__35166_35808__$1);
var G__35817 = null;
var G__35818 = (0);
var G__35819 = (0);
seq__35166_35794 = G__35816;
chunk__35168_35795 = G__35817;
count__35169_35796 = G__35818;
i__35170_35797 = G__35819;
continue;
} else {
var G__35822 = cljs.core.next(seq__35166_35808__$1);
var G__35823 = null;
var G__35824 = (0);
var G__35825 = (0);
seq__35166_35794 = G__35822;
chunk__35168_35795 = G__35823;
count__35169_35796 = G__35824;
i__35170_35797 = G__35825;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35793);
}
}


var G__35827 = cljs.core.next(seq__35124_35785__$1);
var G__35828 = null;
var G__35829 = (0);
var G__35830 = (0);
seq__35124_35737 = G__35827;
chunk__35126_35738 = G__35828;
count__35127_35739 = G__35829;
i__35128_35740 = G__35830;
continue;
} else {
var G__35831 = cljs.core.next(seq__35124_35785__$1);
var G__35832 = null;
var G__35833 = (0);
var G__35834 = (0);
seq__35124_35737 = G__35831;
chunk__35126_35738 = G__35832;
count__35127_35739 = G__35833;
i__35128_35740 = G__35834;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35839 = arguments.length;
var i__4737__auto___35840 = (0);
while(true){
if((i__4737__auto___35840 < len__4736__auto___35839)){
args__4742__auto__.push((arguments[i__4737__auto___35840]));

var G__35841 = (i__4737__auto___35840 + (1));
i__4737__auto___35840 = G__35841;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35181){
var G__35182 = cljs.core.first(seq35181);
var seq35181__$1 = cljs.core.next(seq35181);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35182,seq35181__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35191 = arguments.length;
switch (G__35191) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__32354__auto___35847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_35201){
var state_val_35202 = (state_35201[(1)]);
if((state_val_35202 === (1))){
var state_35201__$1 = state_35201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35201__$1,(2),once_or_cleanup);
} else {
if((state_val_35202 === (2))){
var inst_35198 = (state_35201[(2)]);
var inst_35199 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35201__$1 = (function (){var statearr_35206 = state_35201;
(statearr_35206[(7)] = inst_35198);

return statearr_35206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35201__$1,inst_35199);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32220__auto__ = null;
var shadow$dom$state_machine__32220__auto____0 = (function (){
var statearr_35207 = [null,null,null,null,null,null,null,null];
(statearr_35207[(0)] = shadow$dom$state_machine__32220__auto__);

(statearr_35207[(1)] = (1));

return statearr_35207;
});
var shadow$dom$state_machine__32220__auto____1 = (function (state_35201){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_35201);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e35209){var ex__32223__auto__ = e35209;
var statearr_35210_35848 = state_35201;
(statearr_35210_35848[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_35201[(4)]))){
var statearr_35211_35849 = state_35201;
(statearr_35211_35849[(1)] = cljs.core.first((state_35201[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35850 = state_35201;
state_35201 = G__35850;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
shadow$dom$state_machine__32220__auto__ = function(state_35201){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32220__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32220__auto____1.call(this,state_35201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32220__auto____0;
shadow$dom$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32220__auto____1;
return shadow$dom$state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_35214 = f__32355__auto__();
(statearr_35214[(6)] = c__32354__auto___35847);

return statearr_35214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
