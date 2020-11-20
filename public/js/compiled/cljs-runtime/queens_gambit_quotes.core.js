goog.provide('queens_gambit_quotes.core');
queens_gambit_quotes.core.data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth(queens_gambit_quotes.quotes.quotes));
queens_gambit_quotes.core.quote = (function queens_gambit_quotes$core$quote(){
queens_gambit_quotes.core.tweet_intent = ["https://twitter.com/intent/tweet?hashtags=queensgambit&text=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(queens_gambit_quotes.core.data),new cljs.core.Keyword(null,"quote","quote",-262615245)))," ~ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(queens_gambit_quotes.core.data),new cljs.core.Keyword(null,"author","author",2111686192)))].join('');

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cards>div.card","div.cards>div.card",-1039834183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.card-header.text-center","h2.card-header.text-center",876431782),"Queen's Gambit Quote"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body.text-center","div.card-body.text-center",-1938028278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#quote","p#quote",-168481287),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(queens_gambit_quotes.core.data),new cljs.core.Keyword(null,"quote","quote",-262615245))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#author","p#author",1827247185),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(queens_gambit_quotes.core.data),new cljs.core.Keyword(null,"author","author",2111686192))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-footer.center.text-center","div.card-footer.center.text-center",-590596243),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#twitter.outline>a#tweet","button#twitter.outline>a#tweet",-1798262653),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),queens_gambit_quotes.core.tweet_intent,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fi-social-twitter","i.fi-social-twitter",1481933430)," Tweet"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new-quote.outline","button#new-quote.outline",701277523),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(queens_gambit_quotes.core.data,cljs.core.rand_nth(queens_gambit_quotes.quotes.quotes));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fi-shuffle","i.fi-shuffle",-1303450334)," New Quote"], null)], null)], null)], null);
});
queens_gambit_quotes.core.start = (function queens_gambit_quotes$core$start(){
var G__28633 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [queens_gambit_quotes.core.quote], null);
var G__28634 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__28633,G__28634) : reagent.core.render_component.call(null,G__28633,G__28634));
});
queens_gambit_quotes.core.init = (function queens_gambit_quotes$core$init(){
return queens_gambit_quotes.core.start();
});
goog.exportSymbol('queens_gambit_quotes.core.init', queens_gambit_quotes.core.init);
queens_gambit_quotes.core.stop = (function queens_gambit_quotes$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=queens_gambit_quotes.core.js.map
