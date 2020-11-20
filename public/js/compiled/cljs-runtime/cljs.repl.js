goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38370){
var map__38371 = p__38370;
var map__38371__$1 = (((((!((map__38371 == null))))?(((((map__38371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38371):map__38371);
var m = map__38371__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38371__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38371__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38374_38585 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38375_38586 = null;
var count__38376_38587 = (0);
var i__38377_38588 = (0);
while(true){
if((i__38377_38588 < count__38376_38587)){
var f_38589 = chunk__38375_38586.cljs$core$IIndexed$_nth$arity$2(null,i__38377_38588);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38589], 0));


var G__38590 = seq__38374_38585;
var G__38591 = chunk__38375_38586;
var G__38592 = count__38376_38587;
var G__38593 = (i__38377_38588 + (1));
seq__38374_38585 = G__38590;
chunk__38375_38586 = G__38591;
count__38376_38587 = G__38592;
i__38377_38588 = G__38593;
continue;
} else {
var temp__5735__auto___38594 = cljs.core.seq(seq__38374_38585);
if(temp__5735__auto___38594){
var seq__38374_38595__$1 = temp__5735__auto___38594;
if(cljs.core.chunked_seq_QMARK_(seq__38374_38595__$1)){
var c__4556__auto___38596 = cljs.core.chunk_first(seq__38374_38595__$1);
var G__38597 = cljs.core.chunk_rest(seq__38374_38595__$1);
var G__38598 = c__4556__auto___38596;
var G__38599 = cljs.core.count(c__4556__auto___38596);
var G__38600 = (0);
seq__38374_38585 = G__38597;
chunk__38375_38586 = G__38598;
count__38376_38587 = G__38599;
i__38377_38588 = G__38600;
continue;
} else {
var f_38602 = cljs.core.first(seq__38374_38595__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38602], 0));


var G__38603 = cljs.core.next(seq__38374_38595__$1);
var G__38604 = null;
var G__38605 = (0);
var G__38606 = (0);
seq__38374_38585 = G__38603;
chunk__38375_38586 = G__38604;
count__38376_38587 = G__38605;
i__38377_38588 = G__38606;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38607 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38607], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38607)))?cljs.core.second(arglists_38607):arglists_38607)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38382_38608 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38383_38609 = null;
var count__38384_38610 = (0);
var i__38385_38611 = (0);
while(true){
if((i__38385_38611 < count__38384_38610)){
var vec__38398_38612 = chunk__38383_38609.cljs$core$IIndexed$_nth$arity$2(null,i__38385_38611);
var name_38613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38398_38612,(0),null);
var map__38401_38614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38398_38612,(1),null);
var map__38401_38615__$1 = (((((!((map__38401_38614 == null))))?(((((map__38401_38614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38401_38614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38401_38614):map__38401_38614);
var doc_38616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38401_38615__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38401_38615__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38613], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38617], 0));

if(cljs.core.truth_(doc_38616)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38616], 0));
} else {
}


var G__38619 = seq__38382_38608;
var G__38620 = chunk__38383_38609;
var G__38621 = count__38384_38610;
var G__38622 = (i__38385_38611 + (1));
seq__38382_38608 = G__38619;
chunk__38383_38609 = G__38620;
count__38384_38610 = G__38621;
i__38385_38611 = G__38622;
continue;
} else {
var temp__5735__auto___38623 = cljs.core.seq(seq__38382_38608);
if(temp__5735__auto___38623){
var seq__38382_38624__$1 = temp__5735__auto___38623;
if(cljs.core.chunked_seq_QMARK_(seq__38382_38624__$1)){
var c__4556__auto___38625 = cljs.core.chunk_first(seq__38382_38624__$1);
var G__38626 = cljs.core.chunk_rest(seq__38382_38624__$1);
var G__38627 = c__4556__auto___38625;
var G__38628 = cljs.core.count(c__4556__auto___38625);
var G__38629 = (0);
seq__38382_38608 = G__38626;
chunk__38383_38609 = G__38627;
count__38384_38610 = G__38628;
i__38385_38611 = G__38629;
continue;
} else {
var vec__38403_38630 = cljs.core.first(seq__38382_38624__$1);
var name_38631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38403_38630,(0),null);
var map__38406_38632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38403_38630,(1),null);
var map__38406_38633__$1 = (((((!((map__38406_38632 == null))))?(((((map__38406_38632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38406_38632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38406_38632):map__38406_38632);
var doc_38634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38406_38633__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38406_38633__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38631], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38635], 0));

if(cljs.core.truth_(doc_38634)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38634], 0));
} else {
}


var G__38636 = cljs.core.next(seq__38382_38624__$1);
var G__38637 = null;
var G__38638 = (0);
var G__38639 = (0);
seq__38382_38608 = G__38636;
chunk__38383_38609 = G__38637;
count__38384_38610 = G__38638;
i__38385_38611 = G__38639;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38410 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38411 = null;
var count__38412 = (0);
var i__38413 = (0);
while(true){
if((i__38413 < count__38412)){
var role = chunk__38411.cljs$core$IIndexed$_nth$arity$2(null,i__38413);
var temp__5735__auto___38640__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38640__$1)){
var spec_38641 = temp__5735__auto___38640__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38641)], 0));
} else {
}


var G__38642 = seq__38410;
var G__38643 = chunk__38411;
var G__38644 = count__38412;
var G__38645 = (i__38413 + (1));
seq__38410 = G__38642;
chunk__38411 = G__38643;
count__38412 = G__38644;
i__38413 = G__38645;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38410);
if(temp__5735__auto____$1){
var seq__38410__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38410__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38410__$1);
var G__38646 = cljs.core.chunk_rest(seq__38410__$1);
var G__38647 = c__4556__auto__;
var G__38648 = cljs.core.count(c__4556__auto__);
var G__38649 = (0);
seq__38410 = G__38646;
chunk__38411 = G__38647;
count__38412 = G__38648;
i__38413 = G__38649;
continue;
} else {
var role = cljs.core.first(seq__38410__$1);
var temp__5735__auto___38650__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38650__$2)){
var spec_38651 = temp__5735__auto___38650__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38651)], 0));
} else {
}


var G__38652 = cljs.core.next(seq__38410__$1);
var G__38653 = null;
var G__38654 = (0);
var G__38655 = (0);
seq__38410 = G__38652;
chunk__38411 = G__38653;
count__38412 = G__38654;
i__38413 = G__38655;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38656 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38657 = cljs.core.ex_cause(t);
via = G__38656;
t = G__38657;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38419 = datafied_throwable;
var map__38419__$1 = (((((!((map__38419 == null))))?(((((map__38419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38419):map__38419);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38419__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38419__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38419__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38420 = cljs.core.last(via);
var map__38420__$1 = (((((!((map__38420 == null))))?(((((map__38420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38420):map__38420);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38420__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38420__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38420__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38421 = data;
var map__38421__$1 = (((((!((map__38421 == null))))?(((((map__38421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38421):map__38421);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38422 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38422__$1 = (((((!((map__38422 == null))))?(((((map__38422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38422):map__38422);
var top_data = map__38422__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38422__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38444 = phase;
var G__38444__$1 = (((G__38444 instanceof cljs.core.Keyword))?G__38444.fqn:null);
switch (G__38444__$1) {
case "read-source":
var map__38445 = data;
var map__38445__$1 = (((((!((map__38445 == null))))?(((((map__38445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38445):map__38445);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38445__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38445__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38448 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38448__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38448,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38448);
var G__38448__$2 = (cljs.core.truth_((function (){var fexpr__38455 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38455.cljs$core$IFn$_invoke$arity$1 ? fexpr__38455.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38455.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38448__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38448__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38448__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38448__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38456 = top_data;
var G__38456__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38456,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38456);
var G__38456__$2 = (cljs.core.truth_((function (){var fexpr__38461 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38461.cljs$core$IFn$_invoke$arity$1 ? fexpr__38461.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38461.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38456__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38456__$1);
var G__38456__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38456__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38456__$2);
var G__38456__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38456__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38456__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38456__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38456__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38472 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38472,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38472,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38472,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38472,(3),null);
var G__38475 = top_data;
var G__38475__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38475,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38475);
var G__38475__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38475__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38475__$1);
var G__38475__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38475__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38475__$2);
var G__38475__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38475__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38475__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38475__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38475__$4;
}

break;
case "execution":
var vec__38487 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38487,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38487,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38487,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38487,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38418_SHARP_){
var or__4126__auto__ = (p1__38418_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38504 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38504.cljs$core$IFn$_invoke$arity$1 ? fexpr__38504.cljs$core$IFn$_invoke$arity$1(p1__38418_SHARP_) : fexpr__38504.call(null,p1__38418_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38505 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38505__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38505,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38505);
var G__38505__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38505__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38505__$1);
var G__38505__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38505__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38505__$2);
var G__38505__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38505__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38505__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38505__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38505__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38444__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38529){
var map__38530 = p__38529;
var map__38530__$1 = (((((!((map__38530 == null))))?(((((map__38530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38530):map__38530);
var triage_data = map__38530__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38544 = phase;
var G__38544__$1 = (((G__38544 instanceof cljs.core.Keyword))?G__38544.fqn:null);
switch (G__38544__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38545 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38546 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38547 = loc;
var G__38548 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38549_38669 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38550_38670 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38551_38671 = true;
var _STAR_print_fn_STAR__temp_val__38552_38672 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38551_38671);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38552_38672);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38513_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38513_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38550_38670);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38549_38669);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38545,G__38546,G__38547,G__38548) : format.call(null,G__38545,G__38546,G__38547,G__38548));

break;
case "macroexpansion":
var G__38554 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38555 = cause_type;
var G__38556 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38557 = loc;
var G__38558 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38554,G__38555,G__38556,G__38557,G__38558) : format.call(null,G__38554,G__38555,G__38556,G__38557,G__38558));

break;
case "compile-syntax-check":
var G__38559 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38560 = cause_type;
var G__38561 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38562 = loc;
var G__38563 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38559,G__38560,G__38561,G__38562,G__38563) : format.call(null,G__38559,G__38560,G__38561,G__38562,G__38563));

break;
case "compilation":
var G__38564 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38565 = cause_type;
var G__38566 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38567 = loc;
var G__38568 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38564,G__38565,G__38566,G__38567,G__38568) : format.call(null,G__38564,G__38565,G__38566,G__38567,G__38568));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38570 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38571 = symbol;
var G__38572 = loc;
var G__38573 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38574_38674 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38575_38675 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38576_38676 = true;
var _STAR_print_fn_STAR__temp_val__38577_38677 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38576_38676);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38577_38677);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38518_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38518_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38575_38675);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38574_38674);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38570,G__38571,G__38572,G__38573) : format.call(null,G__38570,G__38571,G__38572,G__38573));
} else {
var G__38578 = "Execution error%s at %s(%s).\n%s\n";
var G__38579 = cause_type;
var G__38580 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38581 = loc;
var G__38582 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38578,G__38579,G__38580,G__38581,G__38582) : format.call(null,G__38578,G__38579,G__38580,G__38581,G__38582));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38544__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
