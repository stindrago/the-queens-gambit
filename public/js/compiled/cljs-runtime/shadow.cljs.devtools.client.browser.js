goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37115 = arguments.length;
var i__4737__auto___37116 = (0);
while(true){
if((i__4737__auto___37116 < len__4736__auto___37115)){
args__4742__auto__.push((arguments[i__4737__auto___37116]));

var G__37117 = (i__4737__auto___37116 + (1));
i__4737__auto___37116 = G__37117;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36876){
var G__36877 = cljs.core.first(seq36876);
var seq36876__$1 = cljs.core.next(seq36876);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36877,seq36876__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36893 = cljs.core.seq(sources);
var chunk__36894 = null;
var count__36895 = (0);
var i__36896 = (0);
while(true){
if((i__36896 < count__36895)){
var map__36922 = chunk__36894.cljs$core$IIndexed$_nth$arity$2(null,i__36896);
var map__36922__$1 = (((((!((map__36922 == null))))?(((((map__36922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36922):map__36922);
var src = map__36922__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36922__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36922__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36922__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36922__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36928){var e_37119 = e36928;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37119);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37119.message)].join('')));
}

var G__37121 = seq__36893;
var G__37122 = chunk__36894;
var G__37123 = count__36895;
var G__37124 = (i__36896 + (1));
seq__36893 = G__37121;
chunk__36894 = G__37122;
count__36895 = G__37123;
i__36896 = G__37124;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36893);
if(temp__5735__auto__){
var seq__36893__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36893__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36893__$1);
var G__37125 = cljs.core.chunk_rest(seq__36893__$1);
var G__37126 = c__4556__auto__;
var G__37127 = cljs.core.count(c__4556__auto__);
var G__37128 = (0);
seq__36893 = G__37125;
chunk__36894 = G__37126;
count__36895 = G__37127;
i__36896 = G__37128;
continue;
} else {
var map__36932 = cljs.core.first(seq__36893__$1);
var map__36932__$1 = (((((!((map__36932 == null))))?(((((map__36932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36932):map__36932);
var src = map__36932__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36934){var e_37134 = e36934;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37134);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37134.message)].join('')));
}

var G__37135 = cljs.core.next(seq__36893__$1);
var G__37136 = null;
var G__37137 = (0);
var G__37138 = (0);
seq__36893 = G__37135;
chunk__36894 = G__37136;
count__36895 = G__37137;
i__36896 = G__37138;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36936 = cljs.core.seq(js_requires);
var chunk__36937 = null;
var count__36938 = (0);
var i__36939 = (0);
while(true){
if((i__36939 < count__36938)){
var js_ns = chunk__36937.cljs$core$IIndexed$_nth$arity$2(null,i__36939);
var require_str_37139 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37139);


var G__37140 = seq__36936;
var G__37141 = chunk__36937;
var G__37142 = count__36938;
var G__37143 = (i__36939 + (1));
seq__36936 = G__37140;
chunk__36937 = G__37141;
count__36938 = G__37142;
i__36939 = G__37143;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36936);
if(temp__5735__auto__){
var seq__36936__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36936__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36936__$1);
var G__37144 = cljs.core.chunk_rest(seq__36936__$1);
var G__37145 = c__4556__auto__;
var G__37146 = cljs.core.count(c__4556__auto__);
var G__37147 = (0);
seq__36936 = G__37144;
chunk__36937 = G__37145;
count__36938 = G__37146;
i__36939 = G__37147;
continue;
} else {
var js_ns = cljs.core.first(seq__36936__$1);
var require_str_37148 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37148);


var G__37149 = cljs.core.next(seq__36936__$1);
var G__37150 = null;
var G__37151 = (0);
var G__37152 = (0);
seq__36936 = G__37149;
chunk__36937 = G__37150;
count__36938 = G__37151;
i__36939 = G__37152;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36941){
var map__36942 = p__36941;
var map__36942__$1 = (((((!((map__36942 == null))))?(((((map__36942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36942):map__36942);
var msg = map__36942__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36942__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36942__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36944(s__36945){
return (new cljs.core.LazySeq(null,(function (){
var s__36945__$1 = s__36945;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36945__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36951 = cljs.core.first(xs__6292__auto__);
var map__36951__$1 = (((((!((map__36951 == null))))?(((((map__36951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36951):map__36951);
var src = map__36951__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36945__$1,map__36951,map__36951__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36942,map__36942__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36944_$_iter__36946(s__36947){
return (new cljs.core.LazySeq(null,((function (s__36945__$1,map__36951,map__36951__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36942,map__36942__$1,msg,info,reload_info){
return (function (){
var s__36947__$1 = s__36947;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36947__$1);
if(temp__5735__auto____$1){
var s__36947__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36947__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36947__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36949 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36948 = (0);
while(true){
if((i__36948 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36948);
cljs.core.chunk_append(b__36949,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37153 = (i__36948 + (1));
i__36948 = G__37153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36949),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36944_$_iter__36946(cljs.core.chunk_rest(s__36947__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36949),null);
}
} else {
var warning = cljs.core.first(s__36947__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36944_$_iter__36946(cljs.core.rest(s__36947__$2)));
}
} else {
return null;
}
break;
}
});})(s__36945__$1,map__36951,map__36951__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36942,map__36942__$1,msg,info,reload_info))
,null,null));
});})(s__36945__$1,map__36951,map__36951__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36942,map__36942__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36944(cljs.core.rest(s__36945__$1)));
} else {
var G__37156 = cljs.core.rest(s__36945__$1);
s__36945__$1 = G__37156;
continue;
}
} else {
var G__37157 = cljs.core.rest(s__36945__$1);
s__36945__$1 = G__37157;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36958_37158 = cljs.core.seq(warnings);
var chunk__36959_37159 = null;
var count__36960_37160 = (0);
var i__36961_37161 = (0);
while(true){
if((i__36961_37161 < count__36960_37160)){
var map__36972_37165 = chunk__36959_37159.cljs$core$IIndexed$_nth$arity$2(null,i__36961_37161);
var map__36972_37166__$1 = (((((!((map__36972_37165 == null))))?(((((map__36972_37165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36972_37165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36972_37165):map__36972_37165);
var w_37167 = map__36972_37166__$1;
var msg_37168__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36972_37166__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36972_37166__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36972_37166__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36972_37166__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37171)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37169),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37170),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37168__$1)].join(''));


var G__37172 = seq__36958_37158;
var G__37173 = chunk__36959_37159;
var G__37174 = count__36960_37160;
var G__37175 = (i__36961_37161 + (1));
seq__36958_37158 = G__37172;
chunk__36959_37159 = G__37173;
count__36960_37160 = G__37174;
i__36961_37161 = G__37175;
continue;
} else {
var temp__5735__auto___37176 = cljs.core.seq(seq__36958_37158);
if(temp__5735__auto___37176){
var seq__36958_37177__$1 = temp__5735__auto___37176;
if(cljs.core.chunked_seq_QMARK_(seq__36958_37177__$1)){
var c__4556__auto___37178 = cljs.core.chunk_first(seq__36958_37177__$1);
var G__37179 = cljs.core.chunk_rest(seq__36958_37177__$1);
var G__37180 = c__4556__auto___37178;
var G__37181 = cljs.core.count(c__4556__auto___37178);
var G__37182 = (0);
seq__36958_37158 = G__37179;
chunk__36959_37159 = G__37180;
count__36960_37160 = G__37181;
i__36961_37161 = G__37182;
continue;
} else {
var map__36974_37183 = cljs.core.first(seq__36958_37177__$1);
var map__36974_37184__$1 = (((((!((map__36974_37183 == null))))?(((((map__36974_37183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36974_37183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36974_37183):map__36974_37183);
var w_37185 = map__36974_37184__$1;
var msg_37186__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36974_37184__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36974_37184__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36974_37184__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36974_37184__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37189)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37187),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37188),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37186__$1)].join(''));


var G__37190 = cljs.core.next(seq__36958_37177__$1);
var G__37191 = null;
var G__37192 = (0);
var G__37193 = (0);
seq__36958_37158 = G__37190;
chunk__36959_37159 = G__37191;
count__36960_37160 = G__37192;
i__36961_37161 = G__37193;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36940_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36940_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36979){
var map__36980 = p__36979;
var map__36980__$1 = (((((!((map__36980 == null))))?(((((map__36980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36980):map__36980);
var msg = map__36980__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36980__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36982 = cljs.core.seq(updates);
var chunk__36984 = null;
var count__36985 = (0);
var i__36986 = (0);
while(true){
if((i__36986 < count__36985)){
var path = chunk__36984.cljs$core$IIndexed$_nth$arity$2(null,i__36986);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37027_37196 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37031_37197 = null;
var count__37032_37198 = (0);
var i__37033_37199 = (0);
while(true){
if((i__37033_37199 < count__37032_37198)){
var node_37200 = chunk__37031_37197.cljs$core$IIndexed$_nth$arity$2(null,i__37033_37199);
if(cljs.core.not(node_37200.shadow$old)){
var path_match_37201 = shadow.cljs.devtools.client.browser.match_paths(node_37200.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37201)){
var new_link_37202 = (function (){var G__37046 = node_37200.cloneNode(true);
G__37046.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37201),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37046;
})();
(node_37200.shadow$old = true);

(new_link_37202.onload = ((function (seq__37027_37196,chunk__37031_37197,count__37032_37198,i__37033_37199,seq__36982,chunk__36984,count__36985,i__36986,new_link_37202,path_match_37201,node_37200,path,map__36980,map__36980__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37200);
});})(seq__37027_37196,chunk__37031_37197,count__37032_37198,i__37033_37199,seq__36982,chunk__36984,count__36985,i__36986,new_link_37202,path_match_37201,node_37200,path,map__36980,map__36980__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37201], 0));

goog.dom.insertSiblingAfter(new_link_37202,node_37200);


var G__37203 = seq__37027_37196;
var G__37204 = chunk__37031_37197;
var G__37205 = count__37032_37198;
var G__37206 = (i__37033_37199 + (1));
seq__37027_37196 = G__37203;
chunk__37031_37197 = G__37204;
count__37032_37198 = G__37205;
i__37033_37199 = G__37206;
continue;
} else {
var G__37207 = seq__37027_37196;
var G__37208 = chunk__37031_37197;
var G__37209 = count__37032_37198;
var G__37210 = (i__37033_37199 + (1));
seq__37027_37196 = G__37207;
chunk__37031_37197 = G__37208;
count__37032_37198 = G__37209;
i__37033_37199 = G__37210;
continue;
}
} else {
var G__37211 = seq__37027_37196;
var G__37212 = chunk__37031_37197;
var G__37213 = count__37032_37198;
var G__37214 = (i__37033_37199 + (1));
seq__37027_37196 = G__37211;
chunk__37031_37197 = G__37212;
count__37032_37198 = G__37213;
i__37033_37199 = G__37214;
continue;
}
} else {
var temp__5735__auto___37215 = cljs.core.seq(seq__37027_37196);
if(temp__5735__auto___37215){
var seq__37027_37216__$1 = temp__5735__auto___37215;
if(cljs.core.chunked_seq_QMARK_(seq__37027_37216__$1)){
var c__4556__auto___37217 = cljs.core.chunk_first(seq__37027_37216__$1);
var G__37218 = cljs.core.chunk_rest(seq__37027_37216__$1);
var G__37219 = c__4556__auto___37217;
var G__37220 = cljs.core.count(c__4556__auto___37217);
var G__37221 = (0);
seq__37027_37196 = G__37218;
chunk__37031_37197 = G__37219;
count__37032_37198 = G__37220;
i__37033_37199 = G__37221;
continue;
} else {
var node_37222 = cljs.core.first(seq__37027_37216__$1);
if(cljs.core.not(node_37222.shadow$old)){
var path_match_37223 = shadow.cljs.devtools.client.browser.match_paths(node_37222.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37223)){
var new_link_37224 = (function (){var G__37048 = node_37222.cloneNode(true);
G__37048.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37223),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37048;
})();
(node_37222.shadow$old = true);

(new_link_37224.onload = ((function (seq__37027_37196,chunk__37031_37197,count__37032_37198,i__37033_37199,seq__36982,chunk__36984,count__36985,i__36986,new_link_37224,path_match_37223,node_37222,seq__37027_37216__$1,temp__5735__auto___37215,path,map__36980,map__36980__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37222);
});})(seq__37027_37196,chunk__37031_37197,count__37032_37198,i__37033_37199,seq__36982,chunk__36984,count__36985,i__36986,new_link_37224,path_match_37223,node_37222,seq__37027_37216__$1,temp__5735__auto___37215,path,map__36980,map__36980__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37223], 0));

goog.dom.insertSiblingAfter(new_link_37224,node_37222);


var G__37225 = cljs.core.next(seq__37027_37216__$1);
var G__37226 = null;
var G__37227 = (0);
var G__37228 = (0);
seq__37027_37196 = G__37225;
chunk__37031_37197 = G__37226;
count__37032_37198 = G__37227;
i__37033_37199 = G__37228;
continue;
} else {
var G__37229 = cljs.core.next(seq__37027_37216__$1);
var G__37230 = null;
var G__37231 = (0);
var G__37232 = (0);
seq__37027_37196 = G__37229;
chunk__37031_37197 = G__37230;
count__37032_37198 = G__37231;
i__37033_37199 = G__37232;
continue;
}
} else {
var G__37233 = cljs.core.next(seq__37027_37216__$1);
var G__37234 = null;
var G__37235 = (0);
var G__37236 = (0);
seq__37027_37196 = G__37233;
chunk__37031_37197 = G__37234;
count__37032_37198 = G__37235;
i__37033_37199 = G__37236;
continue;
}
}
} else {
}
}
break;
}


var G__37237 = seq__36982;
var G__37238 = chunk__36984;
var G__37239 = count__36985;
var G__37240 = (i__36986 + (1));
seq__36982 = G__37237;
chunk__36984 = G__37238;
count__36985 = G__37239;
i__36986 = G__37240;
continue;
} else {
var G__37241 = seq__36982;
var G__37242 = chunk__36984;
var G__37243 = count__36985;
var G__37244 = (i__36986 + (1));
seq__36982 = G__37241;
chunk__36984 = G__37242;
count__36985 = G__37243;
i__36986 = G__37244;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36982);
if(temp__5735__auto__){
var seq__36982__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36982__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36982__$1);
var G__37245 = cljs.core.chunk_rest(seq__36982__$1);
var G__37246 = c__4556__auto__;
var G__37247 = cljs.core.count(c__4556__auto__);
var G__37248 = (0);
seq__36982 = G__37245;
chunk__36984 = G__37246;
count__36985 = G__37247;
i__36986 = G__37248;
continue;
} else {
var path = cljs.core.first(seq__36982__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37049_37249 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37053_37250 = null;
var count__37054_37251 = (0);
var i__37055_37252 = (0);
while(true){
if((i__37055_37252 < count__37054_37251)){
var node_37253 = chunk__37053_37250.cljs$core$IIndexed$_nth$arity$2(null,i__37055_37252);
if(cljs.core.not(node_37253.shadow$old)){
var path_match_37254 = shadow.cljs.devtools.client.browser.match_paths(node_37253.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37254)){
var new_link_37255 = (function (){var G__37063 = node_37253.cloneNode(true);
G__37063.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37254),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37063;
})();
(node_37253.shadow$old = true);

(new_link_37255.onload = ((function (seq__37049_37249,chunk__37053_37250,count__37054_37251,i__37055_37252,seq__36982,chunk__36984,count__36985,i__36986,new_link_37255,path_match_37254,node_37253,path,seq__36982__$1,temp__5735__auto__,map__36980,map__36980__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37253);
});})(seq__37049_37249,chunk__37053_37250,count__37054_37251,i__37055_37252,seq__36982,chunk__36984,count__36985,i__36986,new_link_37255,path_match_37254,node_37253,path,seq__36982__$1,temp__5735__auto__,map__36980,map__36980__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37254], 0));

goog.dom.insertSiblingAfter(new_link_37255,node_37253);


var G__37256 = seq__37049_37249;
var G__37257 = chunk__37053_37250;
var G__37258 = count__37054_37251;
var G__37259 = (i__37055_37252 + (1));
seq__37049_37249 = G__37256;
chunk__37053_37250 = G__37257;
count__37054_37251 = G__37258;
i__37055_37252 = G__37259;
continue;
} else {
var G__37260 = seq__37049_37249;
var G__37261 = chunk__37053_37250;
var G__37262 = count__37054_37251;
var G__37263 = (i__37055_37252 + (1));
seq__37049_37249 = G__37260;
chunk__37053_37250 = G__37261;
count__37054_37251 = G__37262;
i__37055_37252 = G__37263;
continue;
}
} else {
var G__37264 = seq__37049_37249;
var G__37265 = chunk__37053_37250;
var G__37266 = count__37054_37251;
var G__37267 = (i__37055_37252 + (1));
seq__37049_37249 = G__37264;
chunk__37053_37250 = G__37265;
count__37054_37251 = G__37266;
i__37055_37252 = G__37267;
continue;
}
} else {
var temp__5735__auto___37268__$1 = cljs.core.seq(seq__37049_37249);
if(temp__5735__auto___37268__$1){
var seq__37049_37269__$1 = temp__5735__auto___37268__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37049_37269__$1)){
var c__4556__auto___37270 = cljs.core.chunk_first(seq__37049_37269__$1);
var G__37271 = cljs.core.chunk_rest(seq__37049_37269__$1);
var G__37272 = c__4556__auto___37270;
var G__37273 = cljs.core.count(c__4556__auto___37270);
var G__37274 = (0);
seq__37049_37249 = G__37271;
chunk__37053_37250 = G__37272;
count__37054_37251 = G__37273;
i__37055_37252 = G__37274;
continue;
} else {
var node_37275 = cljs.core.first(seq__37049_37269__$1);
if(cljs.core.not(node_37275.shadow$old)){
var path_match_37276 = shadow.cljs.devtools.client.browser.match_paths(node_37275.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37276)){
var new_link_37277 = (function (){var G__37064 = node_37275.cloneNode(true);
G__37064.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37276),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37064;
})();
(node_37275.shadow$old = true);

(new_link_37277.onload = ((function (seq__37049_37249,chunk__37053_37250,count__37054_37251,i__37055_37252,seq__36982,chunk__36984,count__36985,i__36986,new_link_37277,path_match_37276,node_37275,seq__37049_37269__$1,temp__5735__auto___37268__$1,path,seq__36982__$1,temp__5735__auto__,map__36980,map__36980__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37275);
});})(seq__37049_37249,chunk__37053_37250,count__37054_37251,i__37055_37252,seq__36982,chunk__36984,count__36985,i__36986,new_link_37277,path_match_37276,node_37275,seq__37049_37269__$1,temp__5735__auto___37268__$1,path,seq__36982__$1,temp__5735__auto__,map__36980,map__36980__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37276], 0));

goog.dom.insertSiblingAfter(new_link_37277,node_37275);


var G__37278 = cljs.core.next(seq__37049_37269__$1);
var G__37279 = null;
var G__37280 = (0);
var G__37281 = (0);
seq__37049_37249 = G__37278;
chunk__37053_37250 = G__37279;
count__37054_37251 = G__37280;
i__37055_37252 = G__37281;
continue;
} else {
var G__37282 = cljs.core.next(seq__37049_37269__$1);
var G__37283 = null;
var G__37284 = (0);
var G__37285 = (0);
seq__37049_37249 = G__37282;
chunk__37053_37250 = G__37283;
count__37054_37251 = G__37284;
i__37055_37252 = G__37285;
continue;
}
} else {
var G__37286 = cljs.core.next(seq__37049_37269__$1);
var G__37287 = null;
var G__37288 = (0);
var G__37289 = (0);
seq__37049_37249 = G__37286;
chunk__37053_37250 = G__37287;
count__37054_37251 = G__37288;
i__37055_37252 = G__37289;
continue;
}
}
} else {
}
}
break;
}


var G__37290 = cljs.core.next(seq__36982__$1);
var G__37291 = null;
var G__37292 = (0);
var G__37293 = (0);
seq__36982 = G__37290;
chunk__36984 = G__37291;
count__36985 = G__37292;
i__36986 = G__37293;
continue;
} else {
var G__37294 = cljs.core.next(seq__36982__$1);
var G__37295 = null;
var G__37296 = (0);
var G__37297 = (0);
seq__36982 = G__37294;
chunk__36984 = G__37295;
count__36985 = G__37296;
i__36986 = G__37297;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37065){
var map__37066 = p__37065;
var map__37066__$1 = (((((!((map__37066 == null))))?(((((map__37066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37066):map__37066);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37066__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37068){
var map__37069 = p__37068;
var map__37069__$1 = (((((!((map__37069 == null))))?(((((map__37069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37069):map__37069);
var _ = map__37069__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37069__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37073,done,error){
var map__37074 = p__37073;
var map__37074__$1 = (((((!((map__37074 == null))))?(((((map__37074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37074):map__37074);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37074__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37080,done,error){
var map__37081 = p__37080;
var map__37081__$1 = (((((!((map__37081 == null))))?(((((map__37081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37081):map__37081);
var msg = map__37081__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37081__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37081__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37081__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37083){
var map__37084 = p__37083;
var map__37084__$1 = (((((!((map__37084 == null))))?(((((map__37084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37084):map__37084);
var src = map__37084__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37084__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37090 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37090) : done.call(null,G__37090));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37091){
var map__37092 = p__37091;
var map__37092__$1 = (((((!((map__37092 == null))))?(((((map__37092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37092):map__37092);
var msg__$1 = map__37092__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37092__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37094){var ex = e37094;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37095){
var map__37096 = p__37095;
var map__37096__$1 = (((((!((map__37096 == null))))?(((((map__37096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37096):map__37096);
var env = map__37096__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37096__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37099){
var map__37100 = p__37099;
var map__37100__$1 = (((((!((map__37100 == null))))?(((((map__37100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37100):map__37100);
var msg = map__37100__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37100__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37105){
var map__37106 = p__37105;
var map__37106__$1 = (((((!((map__37106 == null))))?(((((map__37106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37106):map__37106);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37106__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37106__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37108){
var map__37109 = p__37108;
var map__37109__$1 = (((((!((map__37109 == null))))?(((((map__37109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37109):map__37109);
var svc = map__37109__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37109__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
