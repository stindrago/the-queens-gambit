goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32461 = arguments.length;
switch (G__32461) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32468 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32468 = (function (f,blockable,meta32469){
this.f = f;
this.blockable = blockable;
this.meta32469 = meta32469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32470,meta32469__$1){
var self__ = this;
var _32470__$1 = this;
return (new cljs.core.async.t_cljs$core$async32468(self__.f,self__.blockable,meta32469__$1));
}));

(cljs.core.async.t_cljs$core$async32468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32470){
var self__ = this;
var _32470__$1 = this;
return self__.meta32469;
}));

(cljs.core.async.t_cljs$core$async32468.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32469","meta32469",-575494024,null)], null);
}));

(cljs.core.async.t_cljs$core$async32468.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32468");

(cljs.core.async.t_cljs$core$async32468.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32468");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32468.
 */
cljs.core.async.__GT_t_cljs$core$async32468 = (function cljs$core$async$__GT_t_cljs$core$async32468(f__$1,blockable__$1,meta32469){
return (new cljs.core.async.t_cljs$core$async32468(f__$1,blockable__$1,meta32469));
});

}

return (new cljs.core.async.t_cljs$core$async32468(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32537 = arguments.length;
switch (G__32537) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32556 = arguments.length;
switch (G__32556) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32561 = arguments.length;
switch (G__32561) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34479 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34479) : fn1.call(null,val_34479));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34479) : fn1.call(null,val_34479));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32588 = arguments.length;
switch (G__32588) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___34481 = n;
var x_34482 = (0);
while(true){
if((x_34482 < n__4613__auto___34481)){
(a[x_34482] = x_34482);

var G__34483 = (x_34482 + (1));
x_34482 = G__34483;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32599 = (function (flag,meta32600){
this.flag = flag;
this.meta32600 = meta32600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32601,meta32600__$1){
var self__ = this;
var _32601__$1 = this;
return (new cljs.core.async.t_cljs$core$async32599(self__.flag,meta32600__$1));
}));

(cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32601){
var self__ = this;
var _32601__$1 = this;
return self__.meta32600;
}));

(cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32600","meta32600",267443945,null)], null);
}));

(cljs.core.async.t_cljs$core$async32599.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32599");

(cljs.core.async.t_cljs$core$async32599.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32599");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32599.
 */
cljs.core.async.__GT_t_cljs$core$async32599 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32599(flag__$1,meta32600){
return (new cljs.core.async.t_cljs$core$async32599(flag__$1,meta32600));
});

}

return (new cljs.core.async.t_cljs$core$async32599(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32616 = (function (flag,cb,meta32617){
this.flag = flag;
this.cb = cb;
this.meta32617 = meta32617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32618,meta32617__$1){
var self__ = this;
var _32618__$1 = this;
return (new cljs.core.async.t_cljs$core$async32616(self__.flag,self__.cb,meta32617__$1));
}));

(cljs.core.async.t_cljs$core$async32616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32618){
var self__ = this;
var _32618__$1 = this;
return self__.meta32617;
}));

(cljs.core.async.t_cljs$core$async32616.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32616.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32616.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32616.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32617","meta32617",-1240525890,null)], null);
}));

(cljs.core.async.t_cljs$core$async32616.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32616");

(cljs.core.async.t_cljs$core$async32616.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32616");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32616.
 */
cljs.core.async.__GT_t_cljs$core$async32616 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32616(flag__$1,cb__$1,meta32617){
return (new cljs.core.async.t_cljs$core$async32616(flag__$1,cb__$1,meta32617));
});

}

return (new cljs.core.async.t_cljs$core$async32616(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32627_SHARP_){
var G__32634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32627_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32634) : fret.call(null,G__32634));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32628_SHARP_){
var G__32635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32628_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32635) : fret.call(null,G__32635));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34487 = (i + (1));
i = G__34487;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34489 = arguments.length;
var i__4737__auto___34490 = (0);
while(true){
if((i__4737__auto___34490 < len__4736__auto___34489)){
args__4742__auto__.push((arguments[i__4737__auto___34490]));

var G__34491 = (i__4737__auto___34490 + (1));
i__4737__auto___34490 = G__34491;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32660){
var map__32665 = p__32660;
var map__32665__$1 = (((((!((map__32665 == null))))?(((((map__32665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32665):map__32665);
var opts = map__32665__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32645){
var G__32646 = cljs.core.first(seq32645);
var seq32645__$1 = cljs.core.next(seq32645);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32646,seq32645__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32675 = arguments.length;
switch (G__32675) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32354__auto___34497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_32713){
var state_val_32714 = (state_32713[(1)]);
if((state_val_32714 === (7))){
var inst_32709 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
var statearr_32715_34500 = state_32713__$1;
(statearr_32715_34500[(2)] = inst_32709);

(statearr_32715_34500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (1))){
var state_32713__$1 = state_32713;
var statearr_32716_34501 = state_32713__$1;
(statearr_32716_34501[(2)] = null);

(statearr_32716_34501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (4))){
var inst_32684 = (state_32713[(7)]);
var inst_32684__$1 = (state_32713[(2)]);
var inst_32688 = (inst_32684__$1 == null);
var state_32713__$1 = (function (){var statearr_32717 = state_32713;
(statearr_32717[(7)] = inst_32684__$1);

return statearr_32717;
})();
if(cljs.core.truth_(inst_32688)){
var statearr_32718_34502 = state_32713__$1;
(statearr_32718_34502[(1)] = (5));

} else {
var statearr_32719_34503 = state_32713__$1;
(statearr_32719_34503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (13))){
var state_32713__$1 = state_32713;
var statearr_32720_34504 = state_32713__$1;
(statearr_32720_34504[(2)] = null);

(statearr_32720_34504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (6))){
var inst_32684 = (state_32713[(7)]);
var state_32713__$1 = state_32713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32713__$1,(11),to,inst_32684);
} else {
if((state_val_32714 === (3))){
var inst_32711 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32713__$1,inst_32711);
} else {
if((state_val_32714 === (12))){
var state_32713__$1 = state_32713;
var statearr_32722_34507 = state_32713__$1;
(statearr_32722_34507[(2)] = null);

(statearr_32722_34507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (2))){
var state_32713__$1 = state_32713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32713__$1,(4),from);
} else {
if((state_val_32714 === (11))){
var inst_32702 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
if(cljs.core.truth_(inst_32702)){
var statearr_32723_34508 = state_32713__$1;
(statearr_32723_34508[(1)] = (12));

} else {
var statearr_32724_34509 = state_32713__$1;
(statearr_32724_34509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (9))){
var state_32713__$1 = state_32713;
var statearr_32725_34510 = state_32713__$1;
(statearr_32725_34510[(2)] = null);

(statearr_32725_34510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (5))){
var state_32713__$1 = state_32713;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32726_34511 = state_32713__$1;
(statearr_32726_34511[(1)] = (8));

} else {
var statearr_32727_34512 = state_32713__$1;
(statearr_32727_34512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (14))){
var inst_32707 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
var statearr_32728_34513 = state_32713__$1;
(statearr_32728_34513[(2)] = inst_32707);

(statearr_32728_34513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (10))){
var inst_32699 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
var statearr_32729_34515 = state_32713__$1;
(statearr_32729_34515[(2)] = inst_32699);

(statearr_32729_34515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (8))){
var inst_32695 = cljs.core.async.close_BANG_(to);
var state_32713__$1 = state_32713;
var statearr_32730_34517 = state_32713__$1;
(statearr_32730_34517[(2)] = inst_32695);

(statearr_32730_34517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32220__auto__ = null;
var cljs$core$async$state_machine__32220__auto____0 = (function (){
var statearr_32731 = [null,null,null,null,null,null,null,null];
(statearr_32731[(0)] = cljs$core$async$state_machine__32220__auto__);

(statearr_32731[(1)] = (1));

return statearr_32731;
});
var cljs$core$async$state_machine__32220__auto____1 = (function (state_32713){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_32713);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e32732){var ex__32223__auto__ = e32732;
var statearr_32733_34522 = state_32713;
(statearr_32733_34522[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_32713[(4)]))){
var statearr_32734_34524 = state_32713;
(statearr_32734_34524[(1)] = cljs.core.first((state_32713[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34525 = state_32713;
state_32713 = G__34525;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$state_machine__32220__auto__ = function(state_32713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32220__auto____1.call(this,state_32713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32220__auto____0;
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32220__auto____1;
return cljs$core$async$state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_32735 = f__32355__auto__();
(statearr_32735[(6)] = c__32354__auto___34497);

return statearr_32735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32736){
var vec__32737 = p__32736;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737,(1),null);
var job = vec__32737;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32354__auto___34529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_32744){
var state_val_32745 = (state_32744[(1)]);
if((state_val_32745 === (1))){
var state_32744__$1 = state_32744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32744__$1,(2),res,v);
} else {
if((state_val_32745 === (2))){
var inst_32741 = (state_32744[(2)]);
var inst_32742 = cljs.core.async.close_BANG_(res);
var state_32744__$1 = (function (){var statearr_32755 = state_32744;
(statearr_32755[(7)] = inst_32741);

return statearr_32755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32744__$1,inst_32742);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0 = (function (){
var statearr_32763 = [null,null,null,null,null,null,null,null];
(statearr_32763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__);

(statearr_32763[(1)] = (1));

return statearr_32763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1 = (function (state_32744){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_32744);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e32769){var ex__32223__auto__ = e32769;
var statearr_32770_34534 = state_32744;
(statearr_32770_34534[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_32744[(4)]))){
var statearr_32775_34535 = state_32744;
(statearr_32775_34535[(1)] = cljs.core.first((state_32744[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34536 = state_32744;
state_32744 = G__34536;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__ = function(state_32744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1.call(this,state_32744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_32783 = f__32355__auto__();
(statearr_32783[(6)] = c__32354__auto___34529);

return statearr_32783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32791){
var vec__32795 = p__32791;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32795,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32795,(1),null);
var job = vec__32795;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___34538 = n;
var __34539 = (0);
while(true){
if((__34539 < n__4613__auto___34538)){
var G__32802_34540 = type;
var G__32802_34541__$1 = (((G__32802_34540 instanceof cljs.core.Keyword))?G__32802_34540.fqn:null);
switch (G__32802_34541__$1) {
case "compute":
var c__32354__auto___34543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34539,c__32354__auto___34543,G__32802_34540,G__32802_34541__$1,n__4613__auto___34538,jobs,results,process,async){
return (function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = ((function (__34539,c__32354__auto___34543,G__32802_34540,G__32802_34541__$1,n__4613__auto___34538,jobs,results,process,async){
return (function (state_32815){
var state_val_32816 = (state_32815[(1)]);
if((state_val_32816 === (1))){
var state_32815__$1 = state_32815;
var statearr_32818_34544 = state_32815__$1;
(statearr_32818_34544[(2)] = null);

(statearr_32818_34544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (2))){
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32815__$1,(4),jobs);
} else {
if((state_val_32816 === (3))){
var inst_32813 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32815__$1,inst_32813);
} else {
if((state_val_32816 === (4))){
var inst_32805 = (state_32815[(2)]);
var inst_32806 = process(inst_32805);
var state_32815__$1 = state_32815;
if(cljs.core.truth_(inst_32806)){
var statearr_32819_34545 = state_32815__$1;
(statearr_32819_34545[(1)] = (5));

} else {
var statearr_32820_34546 = state_32815__$1;
(statearr_32820_34546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (5))){
var state_32815__$1 = state_32815;
var statearr_32821_34547 = state_32815__$1;
(statearr_32821_34547[(2)] = null);

(statearr_32821_34547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (6))){
var state_32815__$1 = state_32815;
var statearr_32822_34552 = state_32815__$1;
(statearr_32822_34552[(2)] = null);

(statearr_32822_34552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (7))){
var inst_32811 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32824_34553 = state_32815__$1;
(statearr_32824_34553[(2)] = inst_32811);

(statearr_32824_34553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34539,c__32354__auto___34543,G__32802_34540,G__32802_34541__$1,n__4613__auto___34538,jobs,results,process,async))
;
return ((function (__34539,switch__32219__auto__,c__32354__auto___34543,G__32802_34540,G__32802_34541__$1,n__4613__auto___34538,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0 = (function (){
var statearr_32825 = [null,null,null,null,null,null,null];
(statearr_32825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__);

(statearr_32825[(1)] = (1));

return statearr_32825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1 = (function (state_32815){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_32815);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e32826){var ex__32223__auto__ = e32826;
var statearr_32827_34557 = state_32815;
(statearr_32827_34557[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_32815[(4)]))){
var statearr_32828_34558 = state_32815;
(statearr_32828_34558[(1)] = cljs.core.first((state_32815[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34559 = state_32815;
state_32815 = G__34559;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__ = function(state_32815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1.call(this,state_32815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__;
})()
;})(__34539,switch__32219__auto__,c__32354__auto___34543,G__32802_34540,G__32802_34541__$1,n__4613__auto___34538,jobs,results,process,async))
})();
var state__32356__auto__ = (function (){var statearr_32829 = f__32355__auto__();
(statearr_32829[(6)] = c__32354__auto___34543);

return statearr_32829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
});})(__34539,c__32354__auto___34543,G__32802_34540,G__32802_34541__$1,n__4613__auto___34538,jobs,results,process,async))
);


break;
case "async":
var c__32354__auto___34560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34539,c__32354__auto___34560,G__32802_34540,G__32802_34541__$1,n__4613__auto___34538,jobs,results,process,async){
return (function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = ((function (__34539,c__32354__auto___34560,G__32802_34540,G__32802_34541__$1,n__4613__auto___34538,jobs,results,process,async){
return (function (state_32842){
var state_val_32843 = (state_32842[(1)]);
if((state_val_32843 === (1))){
var state_32842__$1 = state_32842;
var statearr_32844_34561 = state_32842__$1;
(statearr_32844_34561[(2)] = null);

(statearr_32844_34561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (2))){
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32842__$1,(4),jobs);
} else {
if((state_val_32843 === (3))){
var inst_32840 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32842__$1,inst_32840);
} else {
if((state_val_32843 === (4))){
var inst_32832 = (state_32842[(2)]);
var inst_32833 = async(inst_32832);
var state_32842__$1 = state_32842;
if(cljs.core.truth_(inst_32833)){
var statearr_32845_34563 = state_32842__$1;
(statearr_32845_34563[(1)] = (5));

} else {
var statearr_32846_34565 = state_32842__$1;
(statearr_32846_34565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (5))){
var state_32842__$1 = state_32842;
var statearr_32847_34567 = state_32842__$1;
(statearr_32847_34567[(2)] = null);

(statearr_32847_34567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (6))){
var state_32842__$1 = state_32842;
var statearr_32848_34568 = state_32842__$1;
(statearr_32848_34568[(2)] = null);

(statearr_32848_34568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32843 === (7))){
var inst_32838 = (state_32842[(2)]);
var state_32842__$1 = state_32842;
var statearr_32849_34569 = state_32842__$1;
(statearr_32849_34569[(2)] = inst_32838);

(statearr_32849_34569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34539,c__32354__auto___34560,G__32802_34540,G__32802_34541__$1,n__4613__auto___34538,jobs,results,process,async))
;
return ((function (__34539,switch__32219__auto__,c__32354__auto___34560,G__32802_34540,G__32802_34541__$1,n__4613__auto___34538,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0 = (function (){
var statearr_32850 = [null,null,null,null,null,null,null];
(statearr_32850[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__);

(statearr_32850[(1)] = (1));

return statearr_32850;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1 = (function (state_32842){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_32842);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e32851){var ex__32223__auto__ = e32851;
var statearr_32852_34570 = state_32842;
(statearr_32852_34570[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_32842[(4)]))){
var statearr_32853_34571 = state_32842;
(statearr_32853_34571[(1)] = cljs.core.first((state_32842[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34572 = state_32842;
state_32842 = G__34572;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__ = function(state_32842){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1.call(this,state_32842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__;
})()
;})(__34539,switch__32219__auto__,c__32354__auto___34560,G__32802_34540,G__32802_34541__$1,n__4613__auto___34538,jobs,results,process,async))
})();
var state__32356__auto__ = (function (){var statearr_32854 = f__32355__auto__();
(statearr_32854[(6)] = c__32354__auto___34560);

return statearr_32854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
});})(__34539,c__32354__auto___34560,G__32802_34540,G__32802_34541__$1,n__4613__auto___34538,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32802_34541__$1)].join('')));

}

var G__34580 = (__34539 + (1));
__34539 = G__34580;
continue;
} else {
}
break;
}

var c__32354__auto___34581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_32876){
var state_val_32877 = (state_32876[(1)]);
if((state_val_32877 === (7))){
var inst_32872 = (state_32876[(2)]);
var state_32876__$1 = state_32876;
var statearr_32878_34582 = state_32876__$1;
(statearr_32878_34582[(2)] = inst_32872);

(statearr_32878_34582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32877 === (1))){
var state_32876__$1 = state_32876;
var statearr_32879_34586 = state_32876__$1;
(statearr_32879_34586[(2)] = null);

(statearr_32879_34586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32877 === (4))){
var inst_32857 = (state_32876[(7)]);
var inst_32857__$1 = (state_32876[(2)]);
var inst_32858 = (inst_32857__$1 == null);
var state_32876__$1 = (function (){var statearr_32880 = state_32876;
(statearr_32880[(7)] = inst_32857__$1);

return statearr_32880;
})();
if(cljs.core.truth_(inst_32858)){
var statearr_32881_34587 = state_32876__$1;
(statearr_32881_34587[(1)] = (5));

} else {
var statearr_32882_34588 = state_32876__$1;
(statearr_32882_34588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32877 === (6))){
var inst_32857 = (state_32876[(7)]);
var inst_32862 = (state_32876[(8)]);
var inst_32862__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32863 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32864 = [inst_32857,inst_32862__$1];
var inst_32865 = (new cljs.core.PersistentVector(null,2,(5),inst_32863,inst_32864,null));
var state_32876__$1 = (function (){var statearr_32883 = state_32876;
(statearr_32883[(8)] = inst_32862__$1);

return statearr_32883;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32876__$1,(8),jobs,inst_32865);
} else {
if((state_val_32877 === (3))){
var inst_32874 = (state_32876[(2)]);
var state_32876__$1 = state_32876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32876__$1,inst_32874);
} else {
if((state_val_32877 === (2))){
var state_32876__$1 = state_32876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32876__$1,(4),from);
} else {
if((state_val_32877 === (9))){
var inst_32869 = (state_32876[(2)]);
var state_32876__$1 = (function (){var statearr_32884 = state_32876;
(statearr_32884[(9)] = inst_32869);

return statearr_32884;
})();
var statearr_32885_34596 = state_32876__$1;
(statearr_32885_34596[(2)] = null);

(statearr_32885_34596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32877 === (5))){
var inst_32860 = cljs.core.async.close_BANG_(jobs);
var state_32876__$1 = state_32876;
var statearr_32886_34600 = state_32876__$1;
(statearr_32886_34600[(2)] = inst_32860);

(statearr_32886_34600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32877 === (8))){
var inst_32862 = (state_32876[(8)]);
var inst_32867 = (state_32876[(2)]);
var state_32876__$1 = (function (){var statearr_32887 = state_32876;
(statearr_32887[(10)] = inst_32867);

return statearr_32887;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32876__$1,(9),results,inst_32862);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0 = (function (){
var statearr_32888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__);

(statearr_32888[(1)] = (1));

return statearr_32888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1 = (function (state_32876){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_32876);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e32889){var ex__32223__auto__ = e32889;
var statearr_32890_34608 = state_32876;
(statearr_32890_34608[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_32876[(4)]))){
var statearr_32891_34612 = state_32876;
(statearr_32891_34612[(1)] = cljs.core.first((state_32876[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34613 = state_32876;
state_32876 = G__34613;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__ = function(state_32876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1.call(this,state_32876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_32892 = f__32355__auto__();
(statearr_32892[(6)] = c__32354__auto___34581);

return statearr_32892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


var c__32354__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_32930){
var state_val_32931 = (state_32930[(1)]);
if((state_val_32931 === (7))){
var inst_32926 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32932_34620 = state_32930__$1;
(statearr_32932_34620[(2)] = inst_32926);

(statearr_32932_34620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (20))){
var state_32930__$1 = state_32930;
var statearr_32933_34621 = state_32930__$1;
(statearr_32933_34621[(2)] = null);

(statearr_32933_34621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (1))){
var state_32930__$1 = state_32930;
var statearr_32934_34625 = state_32930__$1;
(statearr_32934_34625[(2)] = null);

(statearr_32934_34625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (4))){
var inst_32895 = (state_32930[(7)]);
var inst_32895__$1 = (state_32930[(2)]);
var inst_32896 = (inst_32895__$1 == null);
var state_32930__$1 = (function (){var statearr_32935 = state_32930;
(statearr_32935[(7)] = inst_32895__$1);

return statearr_32935;
})();
if(cljs.core.truth_(inst_32896)){
var statearr_32936_34626 = state_32930__$1;
(statearr_32936_34626[(1)] = (5));

} else {
var statearr_32937_34628 = state_32930__$1;
(statearr_32937_34628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (15))){
var inst_32908 = (state_32930[(8)]);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32930__$1,(18),to,inst_32908);
} else {
if((state_val_32931 === (21))){
var inst_32921 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32938_34634 = state_32930__$1;
(statearr_32938_34634[(2)] = inst_32921);

(statearr_32938_34634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (13))){
var inst_32923 = (state_32930[(2)]);
var state_32930__$1 = (function (){var statearr_32939 = state_32930;
(statearr_32939[(9)] = inst_32923);

return statearr_32939;
})();
var statearr_32940_34635 = state_32930__$1;
(statearr_32940_34635[(2)] = null);

(statearr_32940_34635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (6))){
var inst_32895 = (state_32930[(7)]);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32930__$1,(11),inst_32895);
} else {
if((state_val_32931 === (17))){
var inst_32916 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
if(cljs.core.truth_(inst_32916)){
var statearr_32941_34637 = state_32930__$1;
(statearr_32941_34637[(1)] = (19));

} else {
var statearr_32942_34638 = state_32930__$1;
(statearr_32942_34638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (3))){
var inst_32928 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32930__$1,inst_32928);
} else {
if((state_val_32931 === (12))){
var inst_32905 = (state_32930[(10)]);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32930__$1,(14),inst_32905);
} else {
if((state_val_32931 === (2))){
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32930__$1,(4),results);
} else {
if((state_val_32931 === (19))){
var state_32930__$1 = state_32930;
var statearr_32943_34640 = state_32930__$1;
(statearr_32943_34640[(2)] = null);

(statearr_32943_34640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (11))){
var inst_32905 = (state_32930[(2)]);
var state_32930__$1 = (function (){var statearr_32944 = state_32930;
(statearr_32944[(10)] = inst_32905);

return statearr_32944;
})();
var statearr_32945_34641 = state_32930__$1;
(statearr_32945_34641[(2)] = null);

(statearr_32945_34641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (9))){
var state_32930__$1 = state_32930;
var statearr_32946_34643 = state_32930__$1;
(statearr_32946_34643[(2)] = null);

(statearr_32946_34643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (5))){
var state_32930__$1 = state_32930;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32947_34646 = state_32930__$1;
(statearr_32947_34646[(1)] = (8));

} else {
var statearr_32948_34647 = state_32930__$1;
(statearr_32948_34647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (14))){
var inst_32908 = (state_32930[(8)]);
var inst_32908__$1 = (state_32930[(2)]);
var inst_32909 = (inst_32908__$1 == null);
var inst_32910 = cljs.core.not(inst_32909);
var state_32930__$1 = (function (){var statearr_32949 = state_32930;
(statearr_32949[(8)] = inst_32908__$1);

return statearr_32949;
})();
if(inst_32910){
var statearr_32950_34650 = state_32930__$1;
(statearr_32950_34650[(1)] = (15));

} else {
var statearr_32951_34652 = state_32930__$1;
(statearr_32951_34652[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (16))){
var state_32930__$1 = state_32930;
var statearr_32952_34653 = state_32930__$1;
(statearr_32952_34653[(2)] = false);

(statearr_32952_34653[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (10))){
var inst_32902 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32953_34654 = state_32930__$1;
(statearr_32953_34654[(2)] = inst_32902);

(statearr_32953_34654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (18))){
var inst_32913 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32954_34655 = state_32930__$1;
(statearr_32954_34655[(2)] = inst_32913);

(statearr_32954_34655[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (8))){
var inst_32899 = cljs.core.async.close_BANG_(to);
var state_32930__$1 = state_32930;
var statearr_32955_34658 = state_32930__$1;
(statearr_32955_34658[(2)] = inst_32899);

(statearr_32955_34658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0 = (function (){
var statearr_32956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__);

(statearr_32956[(1)] = (1));

return statearr_32956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1 = (function (state_32930){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_32930);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e32957){var ex__32223__auto__ = e32957;
var statearr_32958_34660 = state_32930;
(statearr_32958_34660[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_32930[(4)]))){
var statearr_32959_34661 = state_32930;
(statearr_32959_34661[(1)] = cljs.core.first((state_32930[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34662 = state_32930;
state_32930 = G__34662;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__ = function(state_32930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1.call(this,state_32930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_32960 = f__32355__auto__();
(statearr_32960[(6)] = c__32354__auto__);

return statearr_32960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));

return c__32354__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32962 = arguments.length;
switch (G__32962) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32964 = arguments.length;
switch (G__32964) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32970 = arguments.length;
switch (G__32970) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32354__auto___34686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_32996){
var state_val_32997 = (state_32996[(1)]);
if((state_val_32997 === (7))){
var inst_32992 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_32998_34687 = state_32996__$1;
(statearr_32998_34687[(2)] = inst_32992);

(statearr_32998_34687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (1))){
var state_32996__$1 = state_32996;
var statearr_32999_34688 = state_32996__$1;
(statearr_32999_34688[(2)] = null);

(statearr_32999_34688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (4))){
var inst_32973 = (state_32996[(7)]);
var inst_32973__$1 = (state_32996[(2)]);
var inst_32974 = (inst_32973__$1 == null);
var state_32996__$1 = (function (){var statearr_33000 = state_32996;
(statearr_33000[(7)] = inst_32973__$1);

return statearr_33000;
})();
if(cljs.core.truth_(inst_32974)){
var statearr_33001_34691 = state_32996__$1;
(statearr_33001_34691[(1)] = (5));

} else {
var statearr_33002_34693 = state_32996__$1;
(statearr_33002_34693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (13))){
var state_32996__$1 = state_32996;
var statearr_33003_34694 = state_32996__$1;
(statearr_33003_34694[(2)] = null);

(statearr_33003_34694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (6))){
var inst_32973 = (state_32996[(7)]);
var inst_32979 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32973) : p.call(null,inst_32973));
var state_32996__$1 = state_32996;
if(cljs.core.truth_(inst_32979)){
var statearr_33004_34696 = state_32996__$1;
(statearr_33004_34696[(1)] = (9));

} else {
var statearr_33005_34697 = state_32996__$1;
(statearr_33005_34697[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (3))){
var inst_32994 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32996__$1,inst_32994);
} else {
if((state_val_32997 === (12))){
var state_32996__$1 = state_32996;
var statearr_33006_34704 = state_32996__$1;
(statearr_33006_34704[(2)] = null);

(statearr_33006_34704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (2))){
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32996__$1,(4),ch);
} else {
if((state_val_32997 === (11))){
var inst_32973 = (state_32996[(7)]);
var inst_32983 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32996__$1,(8),inst_32983,inst_32973);
} else {
if((state_val_32997 === (9))){
var state_32996__$1 = state_32996;
var statearr_33008_34708 = state_32996__$1;
(statearr_33008_34708[(2)] = tc);

(statearr_33008_34708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (5))){
var inst_32976 = cljs.core.async.close_BANG_(tc);
var inst_32977 = cljs.core.async.close_BANG_(fc);
var state_32996__$1 = (function (){var statearr_33010 = state_32996;
(statearr_33010[(8)] = inst_32976);

return statearr_33010;
})();
var statearr_33011_34713 = state_32996__$1;
(statearr_33011_34713[(2)] = inst_32977);

(statearr_33011_34713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (14))){
var inst_32990 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33012_34714 = state_32996__$1;
(statearr_33012_34714[(2)] = inst_32990);

(statearr_33012_34714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (10))){
var state_32996__$1 = state_32996;
var statearr_33013_34715 = state_32996__$1;
(statearr_33013_34715[(2)] = fc);

(statearr_33013_34715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (8))){
var inst_32985 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
if(cljs.core.truth_(inst_32985)){
var statearr_33014_34719 = state_32996__$1;
(statearr_33014_34719[(1)] = (12));

} else {
var statearr_33015_34724 = state_32996__$1;
(statearr_33015_34724[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32220__auto__ = null;
var cljs$core$async$state_machine__32220__auto____0 = (function (){
var statearr_33016 = [null,null,null,null,null,null,null,null,null];
(statearr_33016[(0)] = cljs$core$async$state_machine__32220__auto__);

(statearr_33016[(1)] = (1));

return statearr_33016;
});
var cljs$core$async$state_machine__32220__auto____1 = (function (state_32996){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_32996);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e33017){var ex__32223__auto__ = e33017;
var statearr_33018_34732 = state_32996;
(statearr_33018_34732[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_32996[(4)]))){
var statearr_33019_34735 = state_32996;
(statearr_33019_34735[(1)] = cljs.core.first((state_32996[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34736 = state_32996;
state_32996 = G__34736;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$state_machine__32220__auto__ = function(state_32996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32220__auto____1.call(this,state_32996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32220__auto____0;
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32220__auto____1;
return cljs$core$async$state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_33020 = f__32355__auto__();
(statearr_33020[(6)] = c__32354__auto___34686);

return statearr_33020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32354__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_33042){
var state_val_33043 = (state_33042[(1)]);
if((state_val_33043 === (7))){
var inst_33038 = (state_33042[(2)]);
var state_33042__$1 = state_33042;
var statearr_33044_34739 = state_33042__$1;
(statearr_33044_34739[(2)] = inst_33038);

(statearr_33044_34739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (1))){
var inst_33021 = init;
var inst_33022 = inst_33021;
var state_33042__$1 = (function (){var statearr_33045 = state_33042;
(statearr_33045[(7)] = inst_33022);

return statearr_33045;
})();
var statearr_33046_34741 = state_33042__$1;
(statearr_33046_34741[(2)] = null);

(statearr_33046_34741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (4))){
var inst_33025 = (state_33042[(8)]);
var inst_33025__$1 = (state_33042[(2)]);
var inst_33026 = (inst_33025__$1 == null);
var state_33042__$1 = (function (){var statearr_33047 = state_33042;
(statearr_33047[(8)] = inst_33025__$1);

return statearr_33047;
})();
if(cljs.core.truth_(inst_33026)){
var statearr_33048_34742 = state_33042__$1;
(statearr_33048_34742[(1)] = (5));

} else {
var statearr_33049_34744 = state_33042__$1;
(statearr_33049_34744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (6))){
var inst_33025 = (state_33042[(8)]);
var inst_33022 = (state_33042[(7)]);
var inst_33029 = (state_33042[(9)]);
var inst_33029__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33022,inst_33025) : f.call(null,inst_33022,inst_33025));
var inst_33030 = cljs.core.reduced_QMARK_(inst_33029__$1);
var state_33042__$1 = (function (){var statearr_33050 = state_33042;
(statearr_33050[(9)] = inst_33029__$1);

return statearr_33050;
})();
if(inst_33030){
var statearr_33051_34747 = state_33042__$1;
(statearr_33051_34747[(1)] = (8));

} else {
var statearr_33052_34748 = state_33042__$1;
(statearr_33052_34748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (3))){
var inst_33040 = (state_33042[(2)]);
var state_33042__$1 = state_33042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33042__$1,inst_33040);
} else {
if((state_val_33043 === (2))){
var state_33042__$1 = state_33042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33042__$1,(4),ch);
} else {
if((state_val_33043 === (9))){
var inst_33029 = (state_33042[(9)]);
var inst_33022 = inst_33029;
var state_33042__$1 = (function (){var statearr_33057 = state_33042;
(statearr_33057[(7)] = inst_33022);

return statearr_33057;
})();
var statearr_33058_34760 = state_33042__$1;
(statearr_33058_34760[(2)] = null);

(statearr_33058_34760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (5))){
var inst_33022 = (state_33042[(7)]);
var state_33042__$1 = state_33042;
var statearr_33059_34761 = state_33042__$1;
(statearr_33059_34761[(2)] = inst_33022);

(statearr_33059_34761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (10))){
var inst_33036 = (state_33042[(2)]);
var state_33042__$1 = state_33042;
var statearr_33060_34762 = state_33042__$1;
(statearr_33060_34762[(2)] = inst_33036);

(statearr_33060_34762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33043 === (8))){
var inst_33029 = (state_33042[(9)]);
var inst_33032 = cljs.core.deref(inst_33029);
var state_33042__$1 = state_33042;
var statearr_33061_34763 = state_33042__$1;
(statearr_33061_34763[(2)] = inst_33032);

(statearr_33061_34763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32220__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32220__auto____0 = (function (){
var statearr_33062 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33062[(0)] = cljs$core$async$reduce_$_state_machine__32220__auto__);

(statearr_33062[(1)] = (1));

return statearr_33062;
});
var cljs$core$async$reduce_$_state_machine__32220__auto____1 = (function (state_33042){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_33042);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e33063){var ex__32223__auto__ = e33063;
var statearr_33064_34764 = state_33042;
(statearr_33064_34764[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_33042[(4)]))){
var statearr_33065_34765 = state_33042;
(statearr_33065_34765[(1)] = cljs.core.first((state_33042[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34766 = state_33042;
state_33042 = G__34766;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32220__auto__ = function(state_33042){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32220__auto____1.call(this,state_33042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32220__auto____0;
cljs$core$async$reduce_$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32220__auto____1;
return cljs$core$async$reduce_$_state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_33066 = f__32355__auto__();
(statearr_33066[(6)] = c__32354__auto__);

return statearr_33066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));

return c__32354__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32354__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_33072){
var state_val_33073 = (state_33072[(1)]);
if((state_val_33073 === (1))){
var inst_33067 = cljs.core.async.reduce(f__$1,init,ch);
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33072__$1,(2),inst_33067);
} else {
if((state_val_33073 === (2))){
var inst_33069 = (state_33072[(2)]);
var inst_33070 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33069) : f__$1.call(null,inst_33069));
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33072__$1,inst_33070);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32220__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32220__auto____0 = (function (){
var statearr_33074 = [null,null,null,null,null,null,null];
(statearr_33074[(0)] = cljs$core$async$transduce_$_state_machine__32220__auto__);

(statearr_33074[(1)] = (1));

return statearr_33074;
});
var cljs$core$async$transduce_$_state_machine__32220__auto____1 = (function (state_33072){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_33072);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e33079){var ex__32223__auto__ = e33079;
var statearr_33080_34776 = state_33072;
(statearr_33080_34776[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_33072[(4)]))){
var statearr_33081_34777 = state_33072;
(statearr_33081_34777[(1)] = cljs.core.first((state_33072[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34778 = state_33072;
state_33072 = G__34778;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32220__auto__ = function(state_33072){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32220__auto____1.call(this,state_33072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32220__auto____0;
cljs$core$async$transduce_$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32220__auto____1;
return cljs$core$async$transduce_$_state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_33082 = f__32355__auto__();
(statearr_33082[(6)] = c__32354__auto__);

return statearr_33082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));

return c__32354__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33084 = arguments.length;
switch (G__33084) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32354__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_33109){
var state_val_33110 = (state_33109[(1)]);
if((state_val_33110 === (7))){
var inst_33091 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33115_34786 = state_33109__$1;
(statearr_33115_34786[(2)] = inst_33091);

(statearr_33115_34786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (1))){
var inst_33085 = cljs.core.seq(coll);
var inst_33086 = inst_33085;
var state_33109__$1 = (function (){var statearr_33116 = state_33109;
(statearr_33116[(7)] = inst_33086);

return statearr_33116;
})();
var statearr_33117_34787 = state_33109__$1;
(statearr_33117_34787[(2)] = null);

(statearr_33117_34787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (4))){
var inst_33086 = (state_33109[(7)]);
var inst_33089 = cljs.core.first(inst_33086);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33109__$1,(7),ch,inst_33089);
} else {
if((state_val_33110 === (13))){
var inst_33103 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33118_34788 = state_33109__$1;
(statearr_33118_34788[(2)] = inst_33103);

(statearr_33118_34788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (6))){
var inst_33094 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
if(cljs.core.truth_(inst_33094)){
var statearr_33119_34789 = state_33109__$1;
(statearr_33119_34789[(1)] = (8));

} else {
var statearr_33120_34790 = state_33109__$1;
(statearr_33120_34790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (3))){
var inst_33107 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33109__$1,inst_33107);
} else {
if((state_val_33110 === (12))){
var state_33109__$1 = state_33109;
var statearr_33121_34791 = state_33109__$1;
(statearr_33121_34791[(2)] = null);

(statearr_33121_34791[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (2))){
var inst_33086 = (state_33109[(7)]);
var state_33109__$1 = state_33109;
if(cljs.core.truth_(inst_33086)){
var statearr_33122_34792 = state_33109__$1;
(statearr_33122_34792[(1)] = (4));

} else {
var statearr_33123_34793 = state_33109__$1;
(statearr_33123_34793[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (11))){
var inst_33100 = cljs.core.async.close_BANG_(ch);
var state_33109__$1 = state_33109;
var statearr_33124_34794 = state_33109__$1;
(statearr_33124_34794[(2)] = inst_33100);

(statearr_33124_34794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (9))){
var state_33109__$1 = state_33109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33125_34795 = state_33109__$1;
(statearr_33125_34795[(1)] = (11));

} else {
var statearr_33126_34796 = state_33109__$1;
(statearr_33126_34796[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (5))){
var inst_33086 = (state_33109[(7)]);
var state_33109__$1 = state_33109;
var statearr_33127_34797 = state_33109__$1;
(statearr_33127_34797[(2)] = inst_33086);

(statearr_33127_34797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (10))){
var inst_33105 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33128_34801 = state_33109__$1;
(statearr_33128_34801[(2)] = inst_33105);

(statearr_33128_34801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (8))){
var inst_33086 = (state_33109[(7)]);
var inst_33096 = cljs.core.next(inst_33086);
var inst_33086__$1 = inst_33096;
var state_33109__$1 = (function (){var statearr_33129 = state_33109;
(statearr_33129[(7)] = inst_33086__$1);

return statearr_33129;
})();
var statearr_33130_34802 = state_33109__$1;
(statearr_33130_34802[(2)] = null);

(statearr_33130_34802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32220__auto__ = null;
var cljs$core$async$state_machine__32220__auto____0 = (function (){
var statearr_33131 = [null,null,null,null,null,null,null,null];
(statearr_33131[(0)] = cljs$core$async$state_machine__32220__auto__);

(statearr_33131[(1)] = (1));

return statearr_33131;
});
var cljs$core$async$state_machine__32220__auto____1 = (function (state_33109){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_33109);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e33132){var ex__32223__auto__ = e33132;
var statearr_33133_34807 = state_33109;
(statearr_33133_34807[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_33109[(4)]))){
var statearr_33134_34808 = state_33109;
(statearr_33134_34808[(1)] = cljs.core.first((state_33109[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34811 = state_33109;
state_33109 = G__34811;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$state_machine__32220__auto__ = function(state_33109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32220__auto____1.call(this,state_33109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32220__auto____0;
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32220__auto____1;
return cljs$core$async$state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_33135 = f__32355__auto__();
(statearr_33135[(6)] = c__32354__auto__);

return statearr_33135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));

return c__32354__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33137 = arguments.length;
switch (G__33137) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34817 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34817(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34821 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34821(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34825 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34825(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34830 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34830(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33158 = (function (ch,cs,meta33159){
this.ch = ch;
this.cs = cs;
this.meta33159 = meta33159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33160,meta33159__$1){
var self__ = this;
var _33160__$1 = this;
return (new cljs.core.async.t_cljs$core$async33158(self__.ch,self__.cs,meta33159__$1));
}));

(cljs.core.async.t_cljs$core$async33158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33160){
var self__ = this;
var _33160__$1 = this;
return self__.meta33159;
}));

(cljs.core.async.t_cljs$core$async33158.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33158.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33158.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33158.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33158.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33158.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33159","meta33159",1825316226,null)], null);
}));

(cljs.core.async.t_cljs$core$async33158.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33158");

(cljs.core.async.t_cljs$core$async33158.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33158");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33158.
 */
cljs.core.async.__GT_t_cljs$core$async33158 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33158(ch__$1,cs__$1,meta33159){
return (new cljs.core.async.t_cljs$core$async33158(ch__$1,cs__$1,meta33159));
});

}

return (new cljs.core.async.t_cljs$core$async33158(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32354__auto___34839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_33298){
var state_val_33299 = (state_33298[(1)]);
if((state_val_33299 === (7))){
var inst_33294 = (state_33298[(2)]);
var state_33298__$1 = state_33298;
var statearr_33300_34840 = state_33298__$1;
(statearr_33300_34840[(2)] = inst_33294);

(statearr_33300_34840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (20))){
var inst_33199 = (state_33298[(7)]);
var inst_33211 = cljs.core.first(inst_33199);
var inst_33212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33211,(0),null);
var inst_33213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33211,(1),null);
var state_33298__$1 = (function (){var statearr_33301 = state_33298;
(statearr_33301[(8)] = inst_33212);

return statearr_33301;
})();
if(cljs.core.truth_(inst_33213)){
var statearr_33302_34846 = state_33298__$1;
(statearr_33302_34846[(1)] = (22));

} else {
var statearr_33303_34847 = state_33298__$1;
(statearr_33303_34847[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (27))){
var inst_33248 = (state_33298[(9)]);
var inst_33243 = (state_33298[(10)]);
var inst_33168 = (state_33298[(11)]);
var inst_33241 = (state_33298[(12)]);
var inst_33248__$1 = cljs.core._nth(inst_33241,inst_33243);
var inst_33249 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33248__$1,inst_33168,done);
var state_33298__$1 = (function (){var statearr_33304 = state_33298;
(statearr_33304[(9)] = inst_33248__$1);

return statearr_33304;
})();
if(cljs.core.truth_(inst_33249)){
var statearr_33305_34850 = state_33298__$1;
(statearr_33305_34850[(1)] = (30));

} else {
var statearr_33306_34851 = state_33298__$1;
(statearr_33306_34851[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (1))){
var state_33298__$1 = state_33298;
var statearr_33307_34853 = state_33298__$1;
(statearr_33307_34853[(2)] = null);

(statearr_33307_34853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (24))){
var inst_33199 = (state_33298[(7)]);
var inst_33218 = (state_33298[(2)]);
var inst_33219 = cljs.core.next(inst_33199);
var inst_33177 = inst_33219;
var inst_33178 = null;
var inst_33179 = (0);
var inst_33180 = (0);
var state_33298__$1 = (function (){var statearr_33308 = state_33298;
(statearr_33308[(13)] = inst_33177);

(statearr_33308[(14)] = inst_33179);

(statearr_33308[(15)] = inst_33218);

(statearr_33308[(16)] = inst_33178);

(statearr_33308[(17)] = inst_33180);

return statearr_33308;
})();
var statearr_33309_34854 = state_33298__$1;
(statearr_33309_34854[(2)] = null);

(statearr_33309_34854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (39))){
var state_33298__$1 = state_33298;
var statearr_33313_34857 = state_33298__$1;
(statearr_33313_34857[(2)] = null);

(statearr_33313_34857[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (4))){
var inst_33168 = (state_33298[(11)]);
var inst_33168__$1 = (state_33298[(2)]);
var inst_33169 = (inst_33168__$1 == null);
var state_33298__$1 = (function (){var statearr_33314 = state_33298;
(statearr_33314[(11)] = inst_33168__$1);

return statearr_33314;
})();
if(cljs.core.truth_(inst_33169)){
var statearr_33315_34861 = state_33298__$1;
(statearr_33315_34861[(1)] = (5));

} else {
var statearr_33316_34862 = state_33298__$1;
(statearr_33316_34862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (15))){
var inst_33177 = (state_33298[(13)]);
var inst_33179 = (state_33298[(14)]);
var inst_33178 = (state_33298[(16)]);
var inst_33180 = (state_33298[(17)]);
var inst_33195 = (state_33298[(2)]);
var inst_33196 = (inst_33180 + (1));
var tmp33310 = inst_33177;
var tmp33311 = inst_33179;
var tmp33312 = inst_33178;
var inst_33177__$1 = tmp33310;
var inst_33178__$1 = tmp33312;
var inst_33179__$1 = tmp33311;
var inst_33180__$1 = inst_33196;
var state_33298__$1 = (function (){var statearr_33317 = state_33298;
(statearr_33317[(13)] = inst_33177__$1);

(statearr_33317[(14)] = inst_33179__$1);

(statearr_33317[(16)] = inst_33178__$1);

(statearr_33317[(17)] = inst_33180__$1);

(statearr_33317[(18)] = inst_33195);

return statearr_33317;
})();
var statearr_33318_34864 = state_33298__$1;
(statearr_33318_34864[(2)] = null);

(statearr_33318_34864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (21))){
var inst_33222 = (state_33298[(2)]);
var state_33298__$1 = state_33298;
var statearr_33322_34865 = state_33298__$1;
(statearr_33322_34865[(2)] = inst_33222);

(statearr_33322_34865[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (31))){
var inst_33248 = (state_33298[(9)]);
var inst_33252 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33248);
var state_33298__$1 = state_33298;
var statearr_33323_34866 = state_33298__$1;
(statearr_33323_34866[(2)] = inst_33252);

(statearr_33323_34866[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (32))){
var inst_33243 = (state_33298[(10)]);
var inst_33240 = (state_33298[(19)]);
var inst_33241 = (state_33298[(12)]);
var inst_33242 = (state_33298[(20)]);
var inst_33254 = (state_33298[(2)]);
var inst_33255 = (inst_33243 + (1));
var tmp33319 = inst_33240;
var tmp33320 = inst_33241;
var tmp33321 = inst_33242;
var inst_33240__$1 = tmp33319;
var inst_33241__$1 = tmp33320;
var inst_33242__$1 = tmp33321;
var inst_33243__$1 = inst_33255;
var state_33298__$1 = (function (){var statearr_33325 = state_33298;
(statearr_33325[(21)] = inst_33254);

(statearr_33325[(10)] = inst_33243__$1);

(statearr_33325[(19)] = inst_33240__$1);

(statearr_33325[(12)] = inst_33241__$1);

(statearr_33325[(20)] = inst_33242__$1);

return statearr_33325;
})();
var statearr_33326_34871 = state_33298__$1;
(statearr_33326_34871[(2)] = null);

(statearr_33326_34871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (40))){
var inst_33267 = (state_33298[(22)]);
var inst_33271 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33267);
var state_33298__$1 = state_33298;
var statearr_33327_34874 = state_33298__$1;
(statearr_33327_34874[(2)] = inst_33271);

(statearr_33327_34874[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (33))){
var inst_33258 = (state_33298[(23)]);
var inst_33260 = cljs.core.chunked_seq_QMARK_(inst_33258);
var state_33298__$1 = state_33298;
if(inst_33260){
var statearr_33328_34875 = state_33298__$1;
(statearr_33328_34875[(1)] = (36));

} else {
var statearr_33329_34876 = state_33298__$1;
(statearr_33329_34876[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (13))){
var inst_33189 = (state_33298[(24)]);
var inst_33192 = cljs.core.async.close_BANG_(inst_33189);
var state_33298__$1 = state_33298;
var statearr_33330_34879 = state_33298__$1;
(statearr_33330_34879[(2)] = inst_33192);

(statearr_33330_34879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (22))){
var inst_33212 = (state_33298[(8)]);
var inst_33215 = cljs.core.async.close_BANG_(inst_33212);
var state_33298__$1 = state_33298;
var statearr_33331_34888 = state_33298__$1;
(statearr_33331_34888[(2)] = inst_33215);

(statearr_33331_34888[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (36))){
var inst_33258 = (state_33298[(23)]);
var inst_33262 = cljs.core.chunk_first(inst_33258);
var inst_33263 = cljs.core.chunk_rest(inst_33258);
var inst_33264 = cljs.core.count(inst_33262);
var inst_33240 = inst_33263;
var inst_33241 = inst_33262;
var inst_33242 = inst_33264;
var inst_33243 = (0);
var state_33298__$1 = (function (){var statearr_33332 = state_33298;
(statearr_33332[(10)] = inst_33243);

(statearr_33332[(19)] = inst_33240);

(statearr_33332[(12)] = inst_33241);

(statearr_33332[(20)] = inst_33242);

return statearr_33332;
})();
var statearr_33333_34892 = state_33298__$1;
(statearr_33333_34892[(2)] = null);

(statearr_33333_34892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (41))){
var inst_33258 = (state_33298[(23)]);
var inst_33273 = (state_33298[(2)]);
var inst_33274 = cljs.core.next(inst_33258);
var inst_33240 = inst_33274;
var inst_33241 = null;
var inst_33242 = (0);
var inst_33243 = (0);
var state_33298__$1 = (function (){var statearr_33334 = state_33298;
(statearr_33334[(25)] = inst_33273);

(statearr_33334[(10)] = inst_33243);

(statearr_33334[(19)] = inst_33240);

(statearr_33334[(12)] = inst_33241);

(statearr_33334[(20)] = inst_33242);

return statearr_33334;
})();
var statearr_33335_34893 = state_33298__$1;
(statearr_33335_34893[(2)] = null);

(statearr_33335_34893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (43))){
var state_33298__$1 = state_33298;
var statearr_33336_34894 = state_33298__$1;
(statearr_33336_34894[(2)] = null);

(statearr_33336_34894[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (29))){
var inst_33282 = (state_33298[(2)]);
var state_33298__$1 = state_33298;
var statearr_33337_34895 = state_33298__$1;
(statearr_33337_34895[(2)] = inst_33282);

(statearr_33337_34895[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (44))){
var inst_33291 = (state_33298[(2)]);
var state_33298__$1 = (function (){var statearr_33338 = state_33298;
(statearr_33338[(26)] = inst_33291);

return statearr_33338;
})();
var statearr_33339_34900 = state_33298__$1;
(statearr_33339_34900[(2)] = null);

(statearr_33339_34900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (6))){
var inst_33232 = (state_33298[(27)]);
var inst_33231 = cljs.core.deref(cs);
var inst_33232__$1 = cljs.core.keys(inst_33231);
var inst_33233 = cljs.core.count(inst_33232__$1);
var inst_33234 = cljs.core.reset_BANG_(dctr,inst_33233);
var inst_33239 = cljs.core.seq(inst_33232__$1);
var inst_33240 = inst_33239;
var inst_33241 = null;
var inst_33242 = (0);
var inst_33243 = (0);
var state_33298__$1 = (function (){var statearr_33344 = state_33298;
(statearr_33344[(10)] = inst_33243);

(statearr_33344[(19)] = inst_33240);

(statearr_33344[(27)] = inst_33232__$1);

(statearr_33344[(28)] = inst_33234);

(statearr_33344[(12)] = inst_33241);

(statearr_33344[(20)] = inst_33242);

return statearr_33344;
})();
var statearr_33351_34911 = state_33298__$1;
(statearr_33351_34911[(2)] = null);

(statearr_33351_34911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (28))){
var inst_33258 = (state_33298[(23)]);
var inst_33240 = (state_33298[(19)]);
var inst_33258__$1 = cljs.core.seq(inst_33240);
var state_33298__$1 = (function (){var statearr_33359 = state_33298;
(statearr_33359[(23)] = inst_33258__$1);

return statearr_33359;
})();
if(inst_33258__$1){
var statearr_33361_34915 = state_33298__$1;
(statearr_33361_34915[(1)] = (33));

} else {
var statearr_33363_34917 = state_33298__$1;
(statearr_33363_34917[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (25))){
var inst_33243 = (state_33298[(10)]);
var inst_33242 = (state_33298[(20)]);
var inst_33245 = (inst_33243 < inst_33242);
var inst_33246 = inst_33245;
var state_33298__$1 = state_33298;
if(cljs.core.truth_(inst_33246)){
var statearr_33368_34923 = state_33298__$1;
(statearr_33368_34923[(1)] = (27));

} else {
var statearr_33369_34924 = state_33298__$1;
(statearr_33369_34924[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (34))){
var state_33298__$1 = state_33298;
var statearr_33370_34926 = state_33298__$1;
(statearr_33370_34926[(2)] = null);

(statearr_33370_34926[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (17))){
var state_33298__$1 = state_33298;
var statearr_33371_34930 = state_33298__$1;
(statearr_33371_34930[(2)] = null);

(statearr_33371_34930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (3))){
var inst_33296 = (state_33298[(2)]);
var state_33298__$1 = state_33298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33298__$1,inst_33296);
} else {
if((state_val_33299 === (12))){
var inst_33227 = (state_33298[(2)]);
var state_33298__$1 = state_33298;
var statearr_33372_34933 = state_33298__$1;
(statearr_33372_34933[(2)] = inst_33227);

(statearr_33372_34933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (2))){
var state_33298__$1 = state_33298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33298__$1,(4),ch);
} else {
if((state_val_33299 === (23))){
var state_33298__$1 = state_33298;
var statearr_33373_34935 = state_33298__$1;
(statearr_33373_34935[(2)] = null);

(statearr_33373_34935[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (35))){
var inst_33280 = (state_33298[(2)]);
var state_33298__$1 = state_33298;
var statearr_33375_34936 = state_33298__$1;
(statearr_33375_34936[(2)] = inst_33280);

(statearr_33375_34936[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (19))){
var inst_33199 = (state_33298[(7)]);
var inst_33203 = cljs.core.chunk_first(inst_33199);
var inst_33204 = cljs.core.chunk_rest(inst_33199);
var inst_33205 = cljs.core.count(inst_33203);
var inst_33177 = inst_33204;
var inst_33178 = inst_33203;
var inst_33179 = inst_33205;
var inst_33180 = (0);
var state_33298__$1 = (function (){var statearr_33376 = state_33298;
(statearr_33376[(13)] = inst_33177);

(statearr_33376[(14)] = inst_33179);

(statearr_33376[(16)] = inst_33178);

(statearr_33376[(17)] = inst_33180);

return statearr_33376;
})();
var statearr_33377_34940 = state_33298__$1;
(statearr_33377_34940[(2)] = null);

(statearr_33377_34940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (11))){
var inst_33177 = (state_33298[(13)]);
var inst_33199 = (state_33298[(7)]);
var inst_33199__$1 = cljs.core.seq(inst_33177);
var state_33298__$1 = (function (){var statearr_33380 = state_33298;
(statearr_33380[(7)] = inst_33199__$1);

return statearr_33380;
})();
if(inst_33199__$1){
var statearr_33381_34943 = state_33298__$1;
(statearr_33381_34943[(1)] = (16));

} else {
var statearr_33382_34944 = state_33298__$1;
(statearr_33382_34944[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (9))){
var inst_33229 = (state_33298[(2)]);
var state_33298__$1 = state_33298;
var statearr_33383_34945 = state_33298__$1;
(statearr_33383_34945[(2)] = inst_33229);

(statearr_33383_34945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (5))){
var inst_33175 = cljs.core.deref(cs);
var inst_33176 = cljs.core.seq(inst_33175);
var inst_33177 = inst_33176;
var inst_33178 = null;
var inst_33179 = (0);
var inst_33180 = (0);
var state_33298__$1 = (function (){var statearr_33384 = state_33298;
(statearr_33384[(13)] = inst_33177);

(statearr_33384[(14)] = inst_33179);

(statearr_33384[(16)] = inst_33178);

(statearr_33384[(17)] = inst_33180);

return statearr_33384;
})();
var statearr_33385_34947 = state_33298__$1;
(statearr_33385_34947[(2)] = null);

(statearr_33385_34947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (14))){
var state_33298__$1 = state_33298;
var statearr_33386_34948 = state_33298__$1;
(statearr_33386_34948[(2)] = null);

(statearr_33386_34948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (45))){
var inst_33288 = (state_33298[(2)]);
var state_33298__$1 = state_33298;
var statearr_33387_34949 = state_33298__$1;
(statearr_33387_34949[(2)] = inst_33288);

(statearr_33387_34949[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (26))){
var inst_33232 = (state_33298[(27)]);
var inst_33284 = (state_33298[(2)]);
var inst_33285 = cljs.core.seq(inst_33232);
var state_33298__$1 = (function (){var statearr_33388 = state_33298;
(statearr_33388[(29)] = inst_33284);

return statearr_33388;
})();
if(inst_33285){
var statearr_33389_34950 = state_33298__$1;
(statearr_33389_34950[(1)] = (42));

} else {
var statearr_33390_34951 = state_33298__$1;
(statearr_33390_34951[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (16))){
var inst_33199 = (state_33298[(7)]);
var inst_33201 = cljs.core.chunked_seq_QMARK_(inst_33199);
var state_33298__$1 = state_33298;
if(inst_33201){
var statearr_33396_34952 = state_33298__$1;
(statearr_33396_34952[(1)] = (19));

} else {
var statearr_33401_34953 = state_33298__$1;
(statearr_33401_34953[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (38))){
var inst_33277 = (state_33298[(2)]);
var state_33298__$1 = state_33298;
var statearr_33405_34954 = state_33298__$1;
(statearr_33405_34954[(2)] = inst_33277);

(statearr_33405_34954[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (30))){
var state_33298__$1 = state_33298;
var statearr_33411_34955 = state_33298__$1;
(statearr_33411_34955[(2)] = null);

(statearr_33411_34955[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (10))){
var inst_33178 = (state_33298[(16)]);
var inst_33180 = (state_33298[(17)]);
var inst_33188 = cljs.core._nth(inst_33178,inst_33180);
var inst_33189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33188,(0),null);
var inst_33190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33188,(1),null);
var state_33298__$1 = (function (){var statearr_33416 = state_33298;
(statearr_33416[(24)] = inst_33189);

return statearr_33416;
})();
if(cljs.core.truth_(inst_33190)){
var statearr_33417_34956 = state_33298__$1;
(statearr_33417_34956[(1)] = (13));

} else {
var statearr_33418_34957 = state_33298__$1;
(statearr_33418_34957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (18))){
var inst_33225 = (state_33298[(2)]);
var state_33298__$1 = state_33298;
var statearr_33419_34958 = state_33298__$1;
(statearr_33419_34958[(2)] = inst_33225);

(statearr_33419_34958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (42))){
var state_33298__$1 = state_33298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33298__$1,(45),dchan);
} else {
if((state_val_33299 === (37))){
var inst_33267 = (state_33298[(22)]);
var inst_33258 = (state_33298[(23)]);
var inst_33168 = (state_33298[(11)]);
var inst_33267__$1 = cljs.core.first(inst_33258);
var inst_33268 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33267__$1,inst_33168,done);
var state_33298__$1 = (function (){var statearr_33424 = state_33298;
(statearr_33424[(22)] = inst_33267__$1);

return statearr_33424;
})();
if(cljs.core.truth_(inst_33268)){
var statearr_33426_34963 = state_33298__$1;
(statearr_33426_34963[(1)] = (39));

} else {
var statearr_33431_34964 = state_33298__$1;
(statearr_33431_34964[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (8))){
var inst_33179 = (state_33298[(14)]);
var inst_33180 = (state_33298[(17)]);
var inst_33182 = (inst_33180 < inst_33179);
var inst_33183 = inst_33182;
var state_33298__$1 = state_33298;
if(cljs.core.truth_(inst_33183)){
var statearr_33439_34965 = state_33298__$1;
(statearr_33439_34965[(1)] = (10));

} else {
var statearr_33440_34966 = state_33298__$1;
(statearr_33440_34966[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32220__auto__ = null;
var cljs$core$async$mult_$_state_machine__32220__auto____0 = (function (){
var statearr_33446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33446[(0)] = cljs$core$async$mult_$_state_machine__32220__auto__);

(statearr_33446[(1)] = (1));

return statearr_33446;
});
var cljs$core$async$mult_$_state_machine__32220__auto____1 = (function (state_33298){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_33298);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e33447){var ex__32223__auto__ = e33447;
var statearr_33452_34967 = state_33298;
(statearr_33452_34967[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_33298[(4)]))){
var statearr_33454_34968 = state_33298;
(statearr_33454_34968[(1)] = cljs.core.first((state_33298[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34969 = state_33298;
state_33298 = G__34969;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32220__auto__ = function(state_33298){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32220__auto____1.call(this,state_33298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32220__auto____0;
cljs$core$async$mult_$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32220__auto____1;
return cljs$core$async$mult_$_state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_33466 = f__32355__auto__();
(statearr_33466[(6)] = c__32354__auto___34839);

return statearr_33466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33473 = arguments.length;
switch (G__33473) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34976 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34976(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34978 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34978(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34983 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34983(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34984 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34984(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34985 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34985(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34986 = arguments.length;
var i__4737__auto___34987 = (0);
while(true){
if((i__4737__auto___34987 < len__4736__auto___34986)){
args__4742__auto__.push((arguments[i__4737__auto___34987]));

var G__34988 = (i__4737__auto___34987 + (1));
i__4737__auto___34987 = G__34988;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33492){
var map__33493 = p__33492;
var map__33493__$1 = (((((!((map__33493 == null))))?(((((map__33493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33493):map__33493);
var opts = map__33493__$1;
var statearr_33495_34989 = state;
(statearr_33495_34989[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33496_34990 = state;
(statearr_33496_34990[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33497_34991 = state;
(statearr_33497_34991[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33488){
var G__33489 = cljs.core.first(seq33488);
var seq33488__$1 = cljs.core.next(seq33488);
var G__33490 = cljs.core.first(seq33488__$1);
var seq33488__$2 = cljs.core.next(seq33488__$1);
var G__33491 = cljs.core.first(seq33488__$2);
var seq33488__$3 = cljs.core.next(seq33488__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33489,G__33490,G__33491,seq33488__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33498 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33499){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33499 = meta33499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33500,meta33499__$1){
var self__ = this;
var _33500__$1 = this;
return (new cljs.core.async.t_cljs$core$async33498(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33499__$1));
}));

(cljs.core.async.t_cljs$core$async33498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33500){
var self__ = this;
var _33500__$1 = this;
return self__.meta33499;
}));

(cljs.core.async.t_cljs$core$async33498.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33498.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33498.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33498.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33498.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33498.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33498.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33499","meta33499",496471239,null)], null);
}));

(cljs.core.async.t_cljs$core$async33498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33498");

(cljs.core.async.t_cljs$core$async33498.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33498.
 */
cljs.core.async.__GT_t_cljs$core$async33498 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33498(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33499){
return (new cljs.core.async.t_cljs$core$async33498(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33499));
});

}

return (new cljs.core.async.t_cljs$core$async33498(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32354__auto___34996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_33602){
var state_val_33603 = (state_33602[(1)]);
if((state_val_33603 === (7))){
var inst_33517 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33604_34997 = state_33602__$1;
(statearr_33604_34997[(2)] = inst_33517);

(statearr_33604_34997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (20))){
var inst_33529 = (state_33602[(7)]);
var state_33602__$1 = state_33602;
var statearr_33605_35002 = state_33602__$1;
(statearr_33605_35002[(2)] = inst_33529);

(statearr_33605_35002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (27))){
var state_33602__$1 = state_33602;
var statearr_33606_35003 = state_33602__$1;
(statearr_33606_35003[(2)] = null);

(statearr_33606_35003[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (1))){
var inst_33504 = (state_33602[(8)]);
var inst_33504__$1 = calc_state();
var inst_33506 = (inst_33504__$1 == null);
var inst_33507 = cljs.core.not(inst_33506);
var state_33602__$1 = (function (){var statearr_33607 = state_33602;
(statearr_33607[(8)] = inst_33504__$1);

return statearr_33607;
})();
if(inst_33507){
var statearr_33608_35005 = state_33602__$1;
(statearr_33608_35005[(1)] = (2));

} else {
var statearr_33609_35006 = state_33602__$1;
(statearr_33609_35006[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (24))){
var inst_33553 = (state_33602[(9)]);
var inst_33576 = (state_33602[(10)]);
var inst_33562 = (state_33602[(11)]);
var inst_33576__$1 = (inst_33553.cljs$core$IFn$_invoke$arity$1 ? inst_33553.cljs$core$IFn$_invoke$arity$1(inst_33562) : inst_33553.call(null,inst_33562));
var state_33602__$1 = (function (){var statearr_33610 = state_33602;
(statearr_33610[(10)] = inst_33576__$1);

return statearr_33610;
})();
if(cljs.core.truth_(inst_33576__$1)){
var statearr_33611_35010 = state_33602__$1;
(statearr_33611_35010[(1)] = (29));

} else {
var statearr_33612_35011 = state_33602__$1;
(statearr_33612_35011[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (4))){
var inst_33520 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
if(cljs.core.truth_(inst_33520)){
var statearr_33613_35012 = state_33602__$1;
(statearr_33613_35012[(1)] = (8));

} else {
var statearr_33614_35013 = state_33602__$1;
(statearr_33614_35013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (15))){
var inst_33547 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
if(cljs.core.truth_(inst_33547)){
var statearr_33615_35015 = state_33602__$1;
(statearr_33615_35015[(1)] = (19));

} else {
var statearr_33616_35016 = state_33602__$1;
(statearr_33616_35016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (21))){
var inst_33552 = (state_33602[(12)]);
var inst_33552__$1 = (state_33602[(2)]);
var inst_33553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33552__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33552__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33552__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33602__$1 = (function (){var statearr_33617 = state_33602;
(statearr_33617[(12)] = inst_33552__$1);

(statearr_33617[(13)] = inst_33554);

(statearr_33617[(9)] = inst_33553);

return statearr_33617;
})();
return cljs.core.async.ioc_alts_BANG_(state_33602__$1,(22),inst_33555);
} else {
if((state_val_33603 === (31))){
var inst_33584 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
if(cljs.core.truth_(inst_33584)){
var statearr_33618_35021 = state_33602__$1;
(statearr_33618_35021[(1)] = (32));

} else {
var statearr_33619_35022 = state_33602__$1;
(statearr_33619_35022[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (32))){
var inst_33561 = (state_33602[(14)]);
var state_33602__$1 = state_33602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33602__$1,(35),out,inst_33561);
} else {
if((state_val_33603 === (33))){
var inst_33552 = (state_33602[(12)]);
var inst_33529 = inst_33552;
var state_33602__$1 = (function (){var statearr_33620 = state_33602;
(statearr_33620[(7)] = inst_33529);

return statearr_33620;
})();
var statearr_33621_35023 = state_33602__$1;
(statearr_33621_35023[(2)] = null);

(statearr_33621_35023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (13))){
var inst_33529 = (state_33602[(7)]);
var inst_33536 = inst_33529.cljs$lang$protocol_mask$partition0$;
var inst_33537 = (inst_33536 & (64));
var inst_33538 = inst_33529.cljs$core$ISeq$;
var inst_33539 = (cljs.core.PROTOCOL_SENTINEL === inst_33538);
var inst_33540 = ((inst_33537) || (inst_33539));
var state_33602__$1 = state_33602;
if(cljs.core.truth_(inst_33540)){
var statearr_33622_35024 = state_33602__$1;
(statearr_33622_35024[(1)] = (16));

} else {
var statearr_33623_35025 = state_33602__$1;
(statearr_33623_35025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (22))){
var inst_33561 = (state_33602[(14)]);
var inst_33562 = (state_33602[(11)]);
var inst_33560 = (state_33602[(2)]);
var inst_33561__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33560,(0),null);
var inst_33562__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33560,(1),null);
var inst_33563 = (inst_33561__$1 == null);
var inst_33564 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33562__$1,change);
var inst_33565 = ((inst_33563) || (inst_33564));
var state_33602__$1 = (function (){var statearr_33624 = state_33602;
(statearr_33624[(14)] = inst_33561__$1);

(statearr_33624[(11)] = inst_33562__$1);

return statearr_33624;
})();
if(cljs.core.truth_(inst_33565)){
var statearr_33625_35026 = state_33602__$1;
(statearr_33625_35026[(1)] = (23));

} else {
var statearr_33626_35027 = state_33602__$1;
(statearr_33626_35027[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (36))){
var inst_33552 = (state_33602[(12)]);
var inst_33529 = inst_33552;
var state_33602__$1 = (function (){var statearr_33627 = state_33602;
(statearr_33627[(7)] = inst_33529);

return statearr_33627;
})();
var statearr_33628_35028 = state_33602__$1;
(statearr_33628_35028[(2)] = null);

(statearr_33628_35028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (29))){
var inst_33576 = (state_33602[(10)]);
var state_33602__$1 = state_33602;
var statearr_33629_35029 = state_33602__$1;
(statearr_33629_35029[(2)] = inst_33576);

(statearr_33629_35029[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (6))){
var state_33602__$1 = state_33602;
var statearr_33630_35030 = state_33602__$1;
(statearr_33630_35030[(2)] = false);

(statearr_33630_35030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (28))){
var inst_33572 = (state_33602[(2)]);
var inst_33573 = calc_state();
var inst_33529 = inst_33573;
var state_33602__$1 = (function (){var statearr_33631 = state_33602;
(statearr_33631[(15)] = inst_33572);

(statearr_33631[(7)] = inst_33529);

return statearr_33631;
})();
var statearr_33632_35031 = state_33602__$1;
(statearr_33632_35031[(2)] = null);

(statearr_33632_35031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (25))){
var inst_33598 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33633_35032 = state_33602__$1;
(statearr_33633_35032[(2)] = inst_33598);

(statearr_33633_35032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (34))){
var inst_33596 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33634_35033 = state_33602__$1;
(statearr_33634_35033[(2)] = inst_33596);

(statearr_33634_35033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (17))){
var state_33602__$1 = state_33602;
var statearr_33635_35034 = state_33602__$1;
(statearr_33635_35034[(2)] = false);

(statearr_33635_35034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (3))){
var state_33602__$1 = state_33602;
var statearr_33636_35035 = state_33602__$1;
(statearr_33636_35035[(2)] = false);

(statearr_33636_35035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (12))){
var inst_33600 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33602__$1,inst_33600);
} else {
if((state_val_33603 === (2))){
var inst_33504 = (state_33602[(8)]);
var inst_33509 = inst_33504.cljs$lang$protocol_mask$partition0$;
var inst_33510 = (inst_33509 & (64));
var inst_33511 = inst_33504.cljs$core$ISeq$;
var inst_33512 = (cljs.core.PROTOCOL_SENTINEL === inst_33511);
var inst_33513 = ((inst_33510) || (inst_33512));
var state_33602__$1 = state_33602;
if(cljs.core.truth_(inst_33513)){
var statearr_33637_35039 = state_33602__$1;
(statearr_33637_35039[(1)] = (5));

} else {
var statearr_33638_35040 = state_33602__$1;
(statearr_33638_35040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (23))){
var inst_33561 = (state_33602[(14)]);
var inst_33567 = (inst_33561 == null);
var state_33602__$1 = state_33602;
if(cljs.core.truth_(inst_33567)){
var statearr_33639_35041 = state_33602__$1;
(statearr_33639_35041[(1)] = (26));

} else {
var statearr_33640_35042 = state_33602__$1;
(statearr_33640_35042[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (35))){
var inst_33587 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
if(cljs.core.truth_(inst_33587)){
var statearr_33641_35043 = state_33602__$1;
(statearr_33641_35043[(1)] = (36));

} else {
var statearr_33642_35044 = state_33602__$1;
(statearr_33642_35044[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (19))){
var inst_33529 = (state_33602[(7)]);
var inst_33549 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33529);
var state_33602__$1 = state_33602;
var statearr_33643_35045 = state_33602__$1;
(statearr_33643_35045[(2)] = inst_33549);

(statearr_33643_35045[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (11))){
var inst_33529 = (state_33602[(7)]);
var inst_33533 = (inst_33529 == null);
var inst_33534 = cljs.core.not(inst_33533);
var state_33602__$1 = state_33602;
if(inst_33534){
var statearr_33644_35046 = state_33602__$1;
(statearr_33644_35046[(1)] = (13));

} else {
var statearr_33645_35047 = state_33602__$1;
(statearr_33645_35047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (9))){
var inst_33504 = (state_33602[(8)]);
var state_33602__$1 = state_33602;
var statearr_33646_35048 = state_33602__$1;
(statearr_33646_35048[(2)] = inst_33504);

(statearr_33646_35048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (5))){
var state_33602__$1 = state_33602;
var statearr_33647_35049 = state_33602__$1;
(statearr_33647_35049[(2)] = true);

(statearr_33647_35049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (14))){
var state_33602__$1 = state_33602;
var statearr_33648_35050 = state_33602__$1;
(statearr_33648_35050[(2)] = false);

(statearr_33648_35050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (26))){
var inst_33562 = (state_33602[(11)]);
var inst_33569 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33562);
var state_33602__$1 = state_33602;
var statearr_33649_35051 = state_33602__$1;
(statearr_33649_35051[(2)] = inst_33569);

(statearr_33649_35051[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (16))){
var state_33602__$1 = state_33602;
var statearr_33650_35052 = state_33602__$1;
(statearr_33650_35052[(2)] = true);

(statearr_33650_35052[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (38))){
var inst_33592 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33651_35054 = state_33602__$1;
(statearr_33651_35054[(2)] = inst_33592);

(statearr_33651_35054[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (30))){
var inst_33554 = (state_33602[(13)]);
var inst_33553 = (state_33602[(9)]);
var inst_33562 = (state_33602[(11)]);
var inst_33579 = cljs.core.empty_QMARK_(inst_33553);
var inst_33580 = (inst_33554.cljs$core$IFn$_invoke$arity$1 ? inst_33554.cljs$core$IFn$_invoke$arity$1(inst_33562) : inst_33554.call(null,inst_33562));
var inst_33581 = cljs.core.not(inst_33580);
var inst_33582 = ((inst_33579) && (inst_33581));
var state_33602__$1 = state_33602;
var statearr_33652_35055 = state_33602__$1;
(statearr_33652_35055[(2)] = inst_33582);

(statearr_33652_35055[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (10))){
var inst_33504 = (state_33602[(8)]);
var inst_33525 = (state_33602[(2)]);
var inst_33526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33525,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33525,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33525,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33529 = inst_33504;
var state_33602__$1 = (function (){var statearr_33653 = state_33602;
(statearr_33653[(16)] = inst_33526);

(statearr_33653[(17)] = inst_33527);

(statearr_33653[(18)] = inst_33528);

(statearr_33653[(7)] = inst_33529);

return statearr_33653;
})();
var statearr_33654_35056 = state_33602__$1;
(statearr_33654_35056[(2)] = null);

(statearr_33654_35056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (18))){
var inst_33544 = (state_33602[(2)]);
var state_33602__$1 = state_33602;
var statearr_33655_35057 = state_33602__$1;
(statearr_33655_35057[(2)] = inst_33544);

(statearr_33655_35057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (37))){
var state_33602__$1 = state_33602;
var statearr_33656_35058 = state_33602__$1;
(statearr_33656_35058[(2)] = null);

(statearr_33656_35058[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33603 === (8))){
var inst_33504 = (state_33602[(8)]);
var inst_33522 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33504);
var state_33602__$1 = state_33602;
var statearr_33657_35059 = state_33602__$1;
(statearr_33657_35059[(2)] = inst_33522);

(statearr_33657_35059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32220__auto__ = null;
var cljs$core$async$mix_$_state_machine__32220__auto____0 = (function (){
var statearr_33658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33658[(0)] = cljs$core$async$mix_$_state_machine__32220__auto__);

(statearr_33658[(1)] = (1));

return statearr_33658;
});
var cljs$core$async$mix_$_state_machine__32220__auto____1 = (function (state_33602){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_33602);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e33659){var ex__32223__auto__ = e33659;
var statearr_33660_35060 = state_33602;
(statearr_33660_35060[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_33602[(4)]))){
var statearr_33661_35061 = state_33602;
(statearr_33661_35061[(1)] = cljs.core.first((state_33602[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35062 = state_33602;
state_33602 = G__35062;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32220__auto__ = function(state_33602){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32220__auto____1.call(this,state_33602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32220__auto____0;
cljs$core$async$mix_$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32220__auto____1;
return cljs$core$async$mix_$_state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_33662 = f__32355__auto__();
(statearr_33662[(6)] = c__32354__auto___34996);

return statearr_33662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35063 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35063(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35068 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35068(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35073 = (function() {
var G__35074 = null;
var G__35074__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35074__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35074 = function(p,v){
switch(arguments.length){
case 1:
return G__35074__1.call(this,p);
case 2:
return G__35074__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35074.cljs$core$IFn$_invoke$arity$1 = G__35074__1;
G__35074.cljs$core$IFn$_invoke$arity$2 = G__35074__2;
return G__35074;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33667 = arguments.length;
switch (G__33667) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35073(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35073(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33671 = arguments.length;
switch (G__33671) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33668_SHARP_){
if(cljs.core.truth_((p1__33668_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33668_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33668_SHARP_.call(null,topic)))){
return p1__33668_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33668_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33675 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33676){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33676 = meta33676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33677,meta33676__$1){
var self__ = this;
var _33677__$1 = this;
return (new cljs.core.async.t_cljs$core$async33675(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33676__$1));
}));

(cljs.core.async.t_cljs$core$async33675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33677){
var self__ = this;
var _33677__$1 = this;
return self__.meta33676;
}));

(cljs.core.async.t_cljs$core$async33675.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33675.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33675.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33675.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33675.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33675.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33676","meta33676",497379151,null)], null);
}));

(cljs.core.async.t_cljs$core$async33675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33675");

(cljs.core.async.t_cljs$core$async33675.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33675.
 */
cljs.core.async.__GT_t_cljs$core$async33675 = (function cljs$core$async$__GT_t_cljs$core$async33675(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33676){
return (new cljs.core.async.t_cljs$core$async33675(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33676));
});

}

return (new cljs.core.async.t_cljs$core$async33675(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32354__auto___35079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_33751){
var state_val_33752 = (state_33751[(1)]);
if((state_val_33752 === (7))){
var inst_33747 = (state_33751[(2)]);
var state_33751__$1 = state_33751;
var statearr_33753_35080 = state_33751__$1;
(statearr_33753_35080[(2)] = inst_33747);

(statearr_33753_35080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (20))){
var state_33751__$1 = state_33751;
var statearr_33754_35081 = state_33751__$1;
(statearr_33754_35081[(2)] = null);

(statearr_33754_35081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (1))){
var state_33751__$1 = state_33751;
var statearr_33755_35082 = state_33751__$1;
(statearr_33755_35082[(2)] = null);

(statearr_33755_35082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (24))){
var inst_33730 = (state_33751[(7)]);
var inst_33739 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33730);
var state_33751__$1 = state_33751;
var statearr_33756_35083 = state_33751__$1;
(statearr_33756_35083[(2)] = inst_33739);

(statearr_33756_35083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (4))){
var inst_33682 = (state_33751[(8)]);
var inst_33682__$1 = (state_33751[(2)]);
var inst_33683 = (inst_33682__$1 == null);
var state_33751__$1 = (function (){var statearr_33757 = state_33751;
(statearr_33757[(8)] = inst_33682__$1);

return statearr_33757;
})();
if(cljs.core.truth_(inst_33683)){
var statearr_33758_35084 = state_33751__$1;
(statearr_33758_35084[(1)] = (5));

} else {
var statearr_33759_35085 = state_33751__$1;
(statearr_33759_35085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (15))){
var inst_33724 = (state_33751[(2)]);
var state_33751__$1 = state_33751;
var statearr_33760_35086 = state_33751__$1;
(statearr_33760_35086[(2)] = inst_33724);

(statearr_33760_35086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (21))){
var inst_33744 = (state_33751[(2)]);
var state_33751__$1 = (function (){var statearr_33761 = state_33751;
(statearr_33761[(9)] = inst_33744);

return statearr_33761;
})();
var statearr_33762_35090 = state_33751__$1;
(statearr_33762_35090[(2)] = null);

(statearr_33762_35090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (13))){
var inst_33706 = (state_33751[(10)]);
var inst_33708 = cljs.core.chunked_seq_QMARK_(inst_33706);
var state_33751__$1 = state_33751;
if(inst_33708){
var statearr_33763_35098 = state_33751__$1;
(statearr_33763_35098[(1)] = (16));

} else {
var statearr_33764_35099 = state_33751__$1;
(statearr_33764_35099[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (22))){
var inst_33736 = (state_33751[(2)]);
var state_33751__$1 = state_33751;
if(cljs.core.truth_(inst_33736)){
var statearr_33765_35100 = state_33751__$1;
(statearr_33765_35100[(1)] = (23));

} else {
var statearr_33766_35101 = state_33751__$1;
(statearr_33766_35101[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (6))){
var inst_33682 = (state_33751[(8)]);
var inst_33730 = (state_33751[(7)]);
var inst_33732 = (state_33751[(11)]);
var inst_33730__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33682) : topic_fn.call(null,inst_33682));
var inst_33731 = cljs.core.deref(mults);
var inst_33732__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33731,inst_33730__$1);
var state_33751__$1 = (function (){var statearr_33767 = state_33751;
(statearr_33767[(7)] = inst_33730__$1);

(statearr_33767[(11)] = inst_33732__$1);

return statearr_33767;
})();
if(cljs.core.truth_(inst_33732__$1)){
var statearr_33768_35102 = state_33751__$1;
(statearr_33768_35102[(1)] = (19));

} else {
var statearr_33769_35106 = state_33751__$1;
(statearr_33769_35106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (25))){
var inst_33741 = (state_33751[(2)]);
var state_33751__$1 = state_33751;
var statearr_33770_35107 = state_33751__$1;
(statearr_33770_35107[(2)] = inst_33741);

(statearr_33770_35107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (17))){
var inst_33706 = (state_33751[(10)]);
var inst_33715 = cljs.core.first(inst_33706);
var inst_33716 = cljs.core.async.muxch_STAR_(inst_33715);
var inst_33717 = cljs.core.async.close_BANG_(inst_33716);
var inst_33718 = cljs.core.next(inst_33706);
var inst_33692 = inst_33718;
var inst_33693 = null;
var inst_33694 = (0);
var inst_33695 = (0);
var state_33751__$1 = (function (){var statearr_33771 = state_33751;
(statearr_33771[(12)] = inst_33693);

(statearr_33771[(13)] = inst_33695);

(statearr_33771[(14)] = inst_33692);

(statearr_33771[(15)] = inst_33717);

(statearr_33771[(16)] = inst_33694);

return statearr_33771;
})();
var statearr_33772_35111 = state_33751__$1;
(statearr_33772_35111[(2)] = null);

(statearr_33772_35111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (3))){
var inst_33749 = (state_33751[(2)]);
var state_33751__$1 = state_33751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33751__$1,inst_33749);
} else {
if((state_val_33752 === (12))){
var inst_33726 = (state_33751[(2)]);
var state_33751__$1 = state_33751;
var statearr_33773_35112 = state_33751__$1;
(statearr_33773_35112[(2)] = inst_33726);

(statearr_33773_35112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (2))){
var state_33751__$1 = state_33751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33751__$1,(4),ch);
} else {
if((state_val_33752 === (23))){
var state_33751__$1 = state_33751;
var statearr_33774_35116 = state_33751__$1;
(statearr_33774_35116[(2)] = null);

(statearr_33774_35116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (19))){
var inst_33682 = (state_33751[(8)]);
var inst_33732 = (state_33751[(11)]);
var inst_33734 = cljs.core.async.muxch_STAR_(inst_33732);
var state_33751__$1 = state_33751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33751__$1,(22),inst_33734,inst_33682);
} else {
if((state_val_33752 === (11))){
var inst_33706 = (state_33751[(10)]);
var inst_33692 = (state_33751[(14)]);
var inst_33706__$1 = cljs.core.seq(inst_33692);
var state_33751__$1 = (function (){var statearr_33775 = state_33751;
(statearr_33775[(10)] = inst_33706__$1);

return statearr_33775;
})();
if(inst_33706__$1){
var statearr_33776_35118 = state_33751__$1;
(statearr_33776_35118[(1)] = (13));

} else {
var statearr_33777_35119 = state_33751__$1;
(statearr_33777_35119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (9))){
var inst_33728 = (state_33751[(2)]);
var state_33751__$1 = state_33751;
var statearr_33778_35120 = state_33751__$1;
(statearr_33778_35120[(2)] = inst_33728);

(statearr_33778_35120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (5))){
var inst_33689 = cljs.core.deref(mults);
var inst_33690 = cljs.core.vals(inst_33689);
var inst_33691 = cljs.core.seq(inst_33690);
var inst_33692 = inst_33691;
var inst_33693 = null;
var inst_33694 = (0);
var inst_33695 = (0);
var state_33751__$1 = (function (){var statearr_33779 = state_33751;
(statearr_33779[(12)] = inst_33693);

(statearr_33779[(13)] = inst_33695);

(statearr_33779[(14)] = inst_33692);

(statearr_33779[(16)] = inst_33694);

return statearr_33779;
})();
var statearr_33780_35130 = state_33751__$1;
(statearr_33780_35130[(2)] = null);

(statearr_33780_35130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (14))){
var state_33751__$1 = state_33751;
var statearr_33784_35131 = state_33751__$1;
(statearr_33784_35131[(2)] = null);

(statearr_33784_35131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (16))){
var inst_33706 = (state_33751[(10)]);
var inst_33710 = cljs.core.chunk_first(inst_33706);
var inst_33711 = cljs.core.chunk_rest(inst_33706);
var inst_33712 = cljs.core.count(inst_33710);
var inst_33692 = inst_33711;
var inst_33693 = inst_33710;
var inst_33694 = inst_33712;
var inst_33695 = (0);
var state_33751__$1 = (function (){var statearr_33785 = state_33751;
(statearr_33785[(12)] = inst_33693);

(statearr_33785[(13)] = inst_33695);

(statearr_33785[(14)] = inst_33692);

(statearr_33785[(16)] = inst_33694);

return statearr_33785;
})();
var statearr_33786_35138 = state_33751__$1;
(statearr_33786_35138[(2)] = null);

(statearr_33786_35138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (10))){
var inst_33693 = (state_33751[(12)]);
var inst_33695 = (state_33751[(13)]);
var inst_33692 = (state_33751[(14)]);
var inst_33694 = (state_33751[(16)]);
var inst_33700 = cljs.core._nth(inst_33693,inst_33695);
var inst_33701 = cljs.core.async.muxch_STAR_(inst_33700);
var inst_33702 = cljs.core.async.close_BANG_(inst_33701);
var inst_33703 = (inst_33695 + (1));
var tmp33781 = inst_33693;
var tmp33782 = inst_33692;
var tmp33783 = inst_33694;
var inst_33692__$1 = tmp33782;
var inst_33693__$1 = tmp33781;
var inst_33694__$1 = tmp33783;
var inst_33695__$1 = inst_33703;
var state_33751__$1 = (function (){var statearr_33787 = state_33751;
(statearr_33787[(12)] = inst_33693__$1);

(statearr_33787[(13)] = inst_33695__$1);

(statearr_33787[(14)] = inst_33692__$1);

(statearr_33787[(17)] = inst_33702);

(statearr_33787[(16)] = inst_33694__$1);

return statearr_33787;
})();
var statearr_33788_35139 = state_33751__$1;
(statearr_33788_35139[(2)] = null);

(statearr_33788_35139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (18))){
var inst_33721 = (state_33751[(2)]);
var state_33751__$1 = state_33751;
var statearr_33789_35140 = state_33751__$1;
(statearr_33789_35140[(2)] = inst_33721);

(statearr_33789_35140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33752 === (8))){
var inst_33695 = (state_33751[(13)]);
var inst_33694 = (state_33751[(16)]);
var inst_33697 = (inst_33695 < inst_33694);
var inst_33698 = inst_33697;
var state_33751__$1 = state_33751;
if(cljs.core.truth_(inst_33698)){
var statearr_33790_35141 = state_33751__$1;
(statearr_33790_35141[(1)] = (10));

} else {
var statearr_33791_35142 = state_33751__$1;
(statearr_33791_35142[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32220__auto__ = null;
var cljs$core$async$state_machine__32220__auto____0 = (function (){
var statearr_33792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33792[(0)] = cljs$core$async$state_machine__32220__auto__);

(statearr_33792[(1)] = (1));

return statearr_33792;
});
var cljs$core$async$state_machine__32220__auto____1 = (function (state_33751){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_33751);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e33793){var ex__32223__auto__ = e33793;
var statearr_33794_35149 = state_33751;
(statearr_33794_35149[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_33751[(4)]))){
var statearr_33795_35150 = state_33751;
(statearr_33795_35150[(1)] = cljs.core.first((state_33751[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35151 = state_33751;
state_33751 = G__35151;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$state_machine__32220__auto__ = function(state_33751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32220__auto____1.call(this,state_33751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32220__auto____0;
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32220__auto____1;
return cljs$core$async$state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_33796 = f__32355__auto__();
(statearr_33796[(6)] = c__32354__auto___35079);

return statearr_33796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33798 = arguments.length;
switch (G__33798) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33801 = arguments.length;
switch (G__33801) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33804 = arguments.length;
switch (G__33804) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32354__auto___35161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_33847){
var state_val_33848 = (state_33847[(1)]);
if((state_val_33848 === (7))){
var state_33847__$1 = state_33847;
var statearr_33849_35162 = state_33847__$1;
(statearr_33849_35162[(2)] = null);

(statearr_33849_35162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (1))){
var state_33847__$1 = state_33847;
var statearr_33850_35163 = state_33847__$1;
(statearr_33850_35163[(2)] = null);

(statearr_33850_35163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (4))){
var inst_33807 = (state_33847[(7)]);
var inst_33808 = (state_33847[(8)]);
var inst_33810 = (inst_33808 < inst_33807);
var state_33847__$1 = state_33847;
if(cljs.core.truth_(inst_33810)){
var statearr_33851_35164 = state_33847__$1;
(statearr_33851_35164[(1)] = (6));

} else {
var statearr_33852_35165 = state_33847__$1;
(statearr_33852_35165[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (15))){
var inst_33833 = (state_33847[(9)]);
var inst_33838 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33833);
var state_33847__$1 = state_33847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33847__$1,(17),out,inst_33838);
} else {
if((state_val_33848 === (13))){
var inst_33833 = (state_33847[(9)]);
var inst_33833__$1 = (state_33847[(2)]);
var inst_33834 = cljs.core.some(cljs.core.nil_QMARK_,inst_33833__$1);
var state_33847__$1 = (function (){var statearr_33853 = state_33847;
(statearr_33853[(9)] = inst_33833__$1);

return statearr_33853;
})();
if(cljs.core.truth_(inst_33834)){
var statearr_33854_35172 = state_33847__$1;
(statearr_33854_35172[(1)] = (14));

} else {
var statearr_33855_35173 = state_33847__$1;
(statearr_33855_35173[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (6))){
var state_33847__$1 = state_33847;
var statearr_33856_35174 = state_33847__$1;
(statearr_33856_35174[(2)] = null);

(statearr_33856_35174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (17))){
var inst_33840 = (state_33847[(2)]);
var state_33847__$1 = (function (){var statearr_33858 = state_33847;
(statearr_33858[(10)] = inst_33840);

return statearr_33858;
})();
var statearr_33859_35175 = state_33847__$1;
(statearr_33859_35175[(2)] = null);

(statearr_33859_35175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (3))){
var inst_33845 = (state_33847[(2)]);
var state_33847__$1 = state_33847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33847__$1,inst_33845);
} else {
if((state_val_33848 === (12))){
var _ = (function (){var statearr_33860 = state_33847;
(statearr_33860[(4)] = cljs.core.rest((state_33847[(4)])));

return statearr_33860;
})();
var state_33847__$1 = state_33847;
var ex33857 = (state_33847__$1[(2)]);
var statearr_33861_35176 = state_33847__$1;
(statearr_33861_35176[(5)] = ex33857);


if((ex33857 instanceof Object)){
var statearr_33862_35177 = state_33847__$1;
(statearr_33862_35177[(1)] = (11));

(statearr_33862_35177[(5)] = null);

} else {
throw ex33857;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (2))){
var inst_33806 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33807 = cnt;
var inst_33808 = (0);
var state_33847__$1 = (function (){var statearr_33863 = state_33847;
(statearr_33863[(11)] = inst_33806);

(statearr_33863[(7)] = inst_33807);

(statearr_33863[(8)] = inst_33808);

return statearr_33863;
})();
var statearr_33864_35178 = state_33847__$1;
(statearr_33864_35178[(2)] = null);

(statearr_33864_35178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (11))){
var inst_33812 = (state_33847[(2)]);
var inst_33813 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33847__$1 = (function (){var statearr_33865 = state_33847;
(statearr_33865[(12)] = inst_33812);

return statearr_33865;
})();
var statearr_33866_35179 = state_33847__$1;
(statearr_33866_35179[(2)] = inst_33813);

(statearr_33866_35179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (9))){
var inst_33808 = (state_33847[(8)]);
var _ = (function (){var statearr_33867 = state_33847;
(statearr_33867[(4)] = cljs.core.cons((12),(state_33847[(4)])));

return statearr_33867;
})();
var inst_33819 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33808) : chs__$1.call(null,inst_33808));
var inst_33820 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33808) : done.call(null,inst_33808));
var inst_33821 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33819,inst_33820);
var ___$1 = (function (){var statearr_33869 = state_33847;
(statearr_33869[(4)] = cljs.core.rest((state_33847[(4)])));

return statearr_33869;
})();
var state_33847__$1 = state_33847;
var statearr_33870_35180 = state_33847__$1;
(statearr_33870_35180[(2)] = inst_33821);

(statearr_33870_35180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (5))){
var inst_33831 = (state_33847[(2)]);
var state_33847__$1 = (function (){var statearr_33871 = state_33847;
(statearr_33871[(13)] = inst_33831);

return statearr_33871;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33847__$1,(13),dchan);
} else {
if((state_val_33848 === (14))){
var inst_33836 = cljs.core.async.close_BANG_(out);
var state_33847__$1 = state_33847;
var statearr_33872_35183 = state_33847__$1;
(statearr_33872_35183[(2)] = inst_33836);

(statearr_33872_35183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (16))){
var inst_33843 = (state_33847[(2)]);
var state_33847__$1 = state_33847;
var statearr_33873_35184 = state_33847__$1;
(statearr_33873_35184[(2)] = inst_33843);

(statearr_33873_35184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (10))){
var inst_33808 = (state_33847[(8)]);
var inst_33824 = (state_33847[(2)]);
var inst_33825 = (inst_33808 + (1));
var inst_33808__$1 = inst_33825;
var state_33847__$1 = (function (){var statearr_33874 = state_33847;
(statearr_33874[(14)] = inst_33824);

(statearr_33874[(8)] = inst_33808__$1);

return statearr_33874;
})();
var statearr_33875_35185 = state_33847__$1;
(statearr_33875_35185[(2)] = null);

(statearr_33875_35185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (8))){
var inst_33829 = (state_33847[(2)]);
var state_33847__$1 = state_33847;
var statearr_33876_35186 = state_33847__$1;
(statearr_33876_35186[(2)] = inst_33829);

(statearr_33876_35186[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32220__auto__ = null;
var cljs$core$async$state_machine__32220__auto____0 = (function (){
var statearr_33877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33877[(0)] = cljs$core$async$state_machine__32220__auto__);

(statearr_33877[(1)] = (1));

return statearr_33877;
});
var cljs$core$async$state_machine__32220__auto____1 = (function (state_33847){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_33847);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e33878){var ex__32223__auto__ = e33878;
var statearr_33879_35187 = state_33847;
(statearr_33879_35187[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_33847[(4)]))){
var statearr_33880_35188 = state_33847;
(statearr_33880_35188[(1)] = cljs.core.first((state_33847[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35189 = state_33847;
state_33847 = G__35189;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$state_machine__32220__auto__ = function(state_33847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32220__auto____1.call(this,state_33847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32220__auto____0;
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32220__auto____1;
return cljs$core$async$state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_33881 = f__32355__auto__();
(statearr_33881[(6)] = c__32354__auto___35161);

return statearr_33881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33884 = arguments.length;
switch (G__33884) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32354__auto___35193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_33916){
var state_val_33917 = (state_33916[(1)]);
if((state_val_33917 === (7))){
var inst_33895 = (state_33916[(7)]);
var inst_33896 = (state_33916[(8)]);
var inst_33895__$1 = (state_33916[(2)]);
var inst_33896__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33895__$1,(0),null);
var inst_33897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33895__$1,(1),null);
var inst_33898 = (inst_33896__$1 == null);
var state_33916__$1 = (function (){var statearr_33918 = state_33916;
(statearr_33918[(9)] = inst_33897);

(statearr_33918[(7)] = inst_33895__$1);

(statearr_33918[(8)] = inst_33896__$1);

return statearr_33918;
})();
if(cljs.core.truth_(inst_33898)){
var statearr_33919_35194 = state_33916__$1;
(statearr_33919_35194[(1)] = (8));

} else {
var statearr_33920_35195 = state_33916__$1;
(statearr_33920_35195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (1))){
var inst_33885 = cljs.core.vec(chs);
var inst_33886 = inst_33885;
var state_33916__$1 = (function (){var statearr_33921 = state_33916;
(statearr_33921[(10)] = inst_33886);

return statearr_33921;
})();
var statearr_33922_35196 = state_33916__$1;
(statearr_33922_35196[(2)] = null);

(statearr_33922_35196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (4))){
var inst_33886 = (state_33916[(10)]);
var state_33916__$1 = state_33916;
return cljs.core.async.ioc_alts_BANG_(state_33916__$1,(7),inst_33886);
} else {
if((state_val_33917 === (6))){
var inst_33912 = (state_33916[(2)]);
var state_33916__$1 = state_33916;
var statearr_33923_35203 = state_33916__$1;
(statearr_33923_35203[(2)] = inst_33912);

(statearr_33923_35203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (3))){
var inst_33914 = (state_33916[(2)]);
var state_33916__$1 = state_33916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33916__$1,inst_33914);
} else {
if((state_val_33917 === (2))){
var inst_33886 = (state_33916[(10)]);
var inst_33888 = cljs.core.count(inst_33886);
var inst_33889 = (inst_33888 > (0));
var state_33916__$1 = state_33916;
if(cljs.core.truth_(inst_33889)){
var statearr_33925_35204 = state_33916__$1;
(statearr_33925_35204[(1)] = (4));

} else {
var statearr_33926_35205 = state_33916__$1;
(statearr_33926_35205[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (11))){
var inst_33886 = (state_33916[(10)]);
var inst_33905 = (state_33916[(2)]);
var tmp33924 = inst_33886;
var inst_33886__$1 = tmp33924;
var state_33916__$1 = (function (){var statearr_33927 = state_33916;
(statearr_33927[(10)] = inst_33886__$1);

(statearr_33927[(11)] = inst_33905);

return statearr_33927;
})();
var statearr_33928_35208 = state_33916__$1;
(statearr_33928_35208[(2)] = null);

(statearr_33928_35208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (9))){
var inst_33896 = (state_33916[(8)]);
var state_33916__$1 = state_33916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33916__$1,(11),out,inst_33896);
} else {
if((state_val_33917 === (5))){
var inst_33910 = cljs.core.async.close_BANG_(out);
var state_33916__$1 = state_33916;
var statearr_33929_35212 = state_33916__$1;
(statearr_33929_35212[(2)] = inst_33910);

(statearr_33929_35212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (10))){
var inst_33908 = (state_33916[(2)]);
var state_33916__$1 = state_33916;
var statearr_33930_35213 = state_33916__$1;
(statearr_33930_35213[(2)] = inst_33908);

(statearr_33930_35213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33917 === (8))){
var inst_33897 = (state_33916[(9)]);
var inst_33886 = (state_33916[(10)]);
var inst_33895 = (state_33916[(7)]);
var inst_33896 = (state_33916[(8)]);
var inst_33900 = (function (){var cs = inst_33886;
var vec__33891 = inst_33895;
var v = inst_33896;
var c = inst_33897;
return (function (p1__33882_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33882_SHARP_);
});
})();
var inst_33901 = cljs.core.filterv(inst_33900,inst_33886);
var inst_33886__$1 = inst_33901;
var state_33916__$1 = (function (){var statearr_33931 = state_33916;
(statearr_33931[(10)] = inst_33886__$1);

return statearr_33931;
})();
var statearr_33932_35215 = state_33916__$1;
(statearr_33932_35215[(2)] = null);

(statearr_33932_35215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32220__auto__ = null;
var cljs$core$async$state_machine__32220__auto____0 = (function (){
var statearr_33933 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33933[(0)] = cljs$core$async$state_machine__32220__auto__);

(statearr_33933[(1)] = (1));

return statearr_33933;
});
var cljs$core$async$state_machine__32220__auto____1 = (function (state_33916){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_33916);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e33934){var ex__32223__auto__ = e33934;
var statearr_33935_35216 = state_33916;
(statearr_33935_35216[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_33916[(4)]))){
var statearr_33936_35217 = state_33916;
(statearr_33936_35217[(1)] = cljs.core.first((state_33916[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35218 = state_33916;
state_33916 = G__35218;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$state_machine__32220__auto__ = function(state_33916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32220__auto____1.call(this,state_33916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32220__auto____0;
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32220__auto____1;
return cljs$core$async$state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_33937 = f__32355__auto__();
(statearr_33937[(6)] = c__32354__auto___35193);

return statearr_33937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33939 = arguments.length;
switch (G__33939) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32354__auto___35221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_33963){
var state_val_33964 = (state_33963[(1)]);
if((state_val_33964 === (7))){
var inst_33945 = (state_33963[(7)]);
var inst_33945__$1 = (state_33963[(2)]);
var inst_33946 = (inst_33945__$1 == null);
var inst_33947 = cljs.core.not(inst_33946);
var state_33963__$1 = (function (){var statearr_33966 = state_33963;
(statearr_33966[(7)] = inst_33945__$1);

return statearr_33966;
})();
if(inst_33947){
var statearr_33967_35228 = state_33963__$1;
(statearr_33967_35228[(1)] = (8));

} else {
var statearr_33968_35229 = state_33963__$1;
(statearr_33968_35229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (1))){
var inst_33940 = (0);
var state_33963__$1 = (function (){var statearr_33969 = state_33963;
(statearr_33969[(8)] = inst_33940);

return statearr_33969;
})();
var statearr_33970_35231 = state_33963__$1;
(statearr_33970_35231[(2)] = null);

(statearr_33970_35231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (4))){
var state_33963__$1 = state_33963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33963__$1,(7),ch);
} else {
if((state_val_33964 === (6))){
var inst_33958 = (state_33963[(2)]);
var state_33963__$1 = state_33963;
var statearr_33971_35232 = state_33963__$1;
(statearr_33971_35232[(2)] = inst_33958);

(statearr_33971_35232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (3))){
var inst_33960 = (state_33963[(2)]);
var inst_33961 = cljs.core.async.close_BANG_(out);
var state_33963__$1 = (function (){var statearr_33972 = state_33963;
(statearr_33972[(9)] = inst_33960);

return statearr_33972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33963__$1,inst_33961);
} else {
if((state_val_33964 === (2))){
var inst_33940 = (state_33963[(8)]);
var inst_33942 = (inst_33940 < n);
var state_33963__$1 = state_33963;
if(cljs.core.truth_(inst_33942)){
var statearr_33973_35238 = state_33963__$1;
(statearr_33973_35238[(1)] = (4));

} else {
var statearr_33974_35239 = state_33963__$1;
(statearr_33974_35239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (11))){
var inst_33940 = (state_33963[(8)]);
var inst_33950 = (state_33963[(2)]);
var inst_33951 = (inst_33940 + (1));
var inst_33940__$1 = inst_33951;
var state_33963__$1 = (function (){var statearr_33975 = state_33963;
(statearr_33975[(10)] = inst_33950);

(statearr_33975[(8)] = inst_33940__$1);

return statearr_33975;
})();
var statearr_33976_35241 = state_33963__$1;
(statearr_33976_35241[(2)] = null);

(statearr_33976_35241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (9))){
var state_33963__$1 = state_33963;
var statearr_33977_35242 = state_33963__$1;
(statearr_33977_35242[(2)] = null);

(statearr_33977_35242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (5))){
var state_33963__$1 = state_33963;
var statearr_33978_35245 = state_33963__$1;
(statearr_33978_35245[(2)] = null);

(statearr_33978_35245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (10))){
var inst_33955 = (state_33963[(2)]);
var state_33963__$1 = state_33963;
var statearr_33979_35249 = state_33963__$1;
(statearr_33979_35249[(2)] = inst_33955);

(statearr_33979_35249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (8))){
var inst_33945 = (state_33963[(7)]);
var state_33963__$1 = state_33963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33963__$1,(11),out,inst_33945);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32220__auto__ = null;
var cljs$core$async$state_machine__32220__auto____0 = (function (){
var statearr_33980 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33980[(0)] = cljs$core$async$state_machine__32220__auto__);

(statearr_33980[(1)] = (1));

return statearr_33980;
});
var cljs$core$async$state_machine__32220__auto____1 = (function (state_33963){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_33963);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e33981){var ex__32223__auto__ = e33981;
var statearr_33982_35252 = state_33963;
(statearr_33982_35252[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_33963[(4)]))){
var statearr_33983_35253 = state_33963;
(statearr_33983_35253[(1)] = cljs.core.first((state_33963[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35255 = state_33963;
state_33963 = G__35255;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$state_machine__32220__auto__ = function(state_33963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32220__auto____1.call(this,state_33963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32220__auto____0;
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32220__auto____1;
return cljs$core$async$state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_33984 = f__32355__auto__();
(statearr_33984[(6)] = c__32354__auto___35221);

return statearr_33984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33986 = (function (f,ch,meta33987){
this.f = f;
this.ch = ch;
this.meta33987 = meta33987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33988,meta33987__$1){
var self__ = this;
var _33988__$1 = this;
return (new cljs.core.async.t_cljs$core$async33986(self__.f,self__.ch,meta33987__$1));
}));

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33988){
var self__ = this;
var _33988__$1 = this;
return self__.meta33987;
}));

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33989 = (function (f,ch,meta33987,_,fn1,meta33990){
this.f = f;
this.ch = ch;
this.meta33987 = meta33987;
this._ = _;
this.fn1 = fn1;
this.meta33990 = meta33990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33991,meta33990__$1){
var self__ = this;
var _33991__$1 = this;
return (new cljs.core.async.t_cljs$core$async33989(self__.f,self__.ch,self__.meta33987,self__._,self__.fn1,meta33990__$1));
}));

(cljs.core.async.t_cljs$core$async33989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33991){
var self__ = this;
var _33991__$1 = this;
return self__.meta33990;
}));

(cljs.core.async.t_cljs$core$async33989.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33985_SHARP_){
var G__33992 = (((p1__33985_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33985_SHARP_) : self__.f.call(null,p1__33985_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33992) : f1.call(null,G__33992));
});
}));

(cljs.core.async.t_cljs$core$async33989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33987","meta33987",1075656115,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33986","cljs.core.async/t_cljs$core$async33986",2069609915,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33990","meta33990",1386348813,null)], null);
}));

(cljs.core.async.t_cljs$core$async33989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33989");

(cljs.core.async.t_cljs$core$async33989.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33989.
 */
cljs.core.async.__GT_t_cljs$core$async33989 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33989(f__$1,ch__$1,meta33987__$1,___$2,fn1__$1,meta33990){
return (new cljs.core.async.t_cljs$core$async33989(f__$1,ch__$1,meta33987__$1,___$2,fn1__$1,meta33990));
});

}

return (new cljs.core.async.t_cljs$core$async33989(self__.f,self__.ch,self__.meta33987,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33993 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33993) : self__.f.call(null,G__33993));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33987","meta33987",1075656115,null)], null);
}));

(cljs.core.async.t_cljs$core$async33986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33986");

(cljs.core.async.t_cljs$core$async33986.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33986.
 */
cljs.core.async.__GT_t_cljs$core$async33986 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33986(f__$1,ch__$1,meta33987){
return (new cljs.core.async.t_cljs$core$async33986(f__$1,ch__$1,meta33987));
});

}

return (new cljs.core.async.t_cljs$core$async33986(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33994 = (function (f,ch,meta33995){
this.f = f;
this.ch = ch;
this.meta33995 = meta33995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33996,meta33995__$1){
var self__ = this;
var _33996__$1 = this;
return (new cljs.core.async.t_cljs$core$async33994(self__.f,self__.ch,meta33995__$1));
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33996){
var self__ = this;
var _33996__$1 = this;
return self__.meta33995;
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33995","meta33995",1362545496,null)], null);
}));

(cljs.core.async.t_cljs$core$async33994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33994");

(cljs.core.async.t_cljs$core$async33994.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33994.
 */
cljs.core.async.__GT_t_cljs$core$async33994 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33994(f__$1,ch__$1,meta33995){
return (new cljs.core.async.t_cljs$core$async33994(f__$1,ch__$1,meta33995));
});

}

return (new cljs.core.async.t_cljs$core$async33994(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34004 = (function (p,ch,meta34005){
this.p = p;
this.ch = ch;
this.meta34005 = meta34005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34006,meta34005__$1){
var self__ = this;
var _34006__$1 = this;
return (new cljs.core.async.t_cljs$core$async34004(self__.p,self__.ch,meta34005__$1));
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34006){
var self__ = this;
var _34006__$1 = this;
return self__.meta34005;
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34004.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34005","meta34005",-111711888,null)], null);
}));

(cljs.core.async.t_cljs$core$async34004.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34004");

(cljs.core.async.t_cljs$core$async34004.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34004");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34004.
 */
cljs.core.async.__GT_t_cljs$core$async34004 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34004(p__$1,ch__$1,meta34005){
return (new cljs.core.async.t_cljs$core$async34004(p__$1,ch__$1,meta34005));
});

}

return (new cljs.core.async.t_cljs$core$async34004(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34024 = arguments.length;
switch (G__34024) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32354__auto___35324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_34045){
var state_val_34046 = (state_34045[(1)]);
if((state_val_34046 === (7))){
var inst_34041 = (state_34045[(2)]);
var state_34045__$1 = state_34045;
var statearr_34053_35329 = state_34045__$1;
(statearr_34053_35329[(2)] = inst_34041);

(statearr_34053_35329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (1))){
var state_34045__$1 = state_34045;
var statearr_34054_35334 = state_34045__$1;
(statearr_34054_35334[(2)] = null);

(statearr_34054_35334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (4))){
var inst_34027 = (state_34045[(7)]);
var inst_34027__$1 = (state_34045[(2)]);
var inst_34028 = (inst_34027__$1 == null);
var state_34045__$1 = (function (){var statearr_34056 = state_34045;
(statearr_34056[(7)] = inst_34027__$1);

return statearr_34056;
})();
if(cljs.core.truth_(inst_34028)){
var statearr_34058_35342 = state_34045__$1;
(statearr_34058_35342[(1)] = (5));

} else {
var statearr_34059_35343 = state_34045__$1;
(statearr_34059_35343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (6))){
var inst_34027 = (state_34045[(7)]);
var inst_34032 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34027) : p.call(null,inst_34027));
var state_34045__$1 = state_34045;
if(cljs.core.truth_(inst_34032)){
var statearr_34060_35348 = state_34045__$1;
(statearr_34060_35348[(1)] = (8));

} else {
var statearr_34061_35349 = state_34045__$1;
(statearr_34061_35349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (3))){
var inst_34043 = (state_34045[(2)]);
var state_34045__$1 = state_34045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34045__$1,inst_34043);
} else {
if((state_val_34046 === (2))){
var state_34045__$1 = state_34045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34045__$1,(4),ch);
} else {
if((state_val_34046 === (11))){
var inst_34035 = (state_34045[(2)]);
var state_34045__$1 = state_34045;
var statearr_34062_35356 = state_34045__$1;
(statearr_34062_35356[(2)] = inst_34035);

(statearr_34062_35356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (9))){
var state_34045__$1 = state_34045;
var statearr_34063_35357 = state_34045__$1;
(statearr_34063_35357[(2)] = null);

(statearr_34063_35357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (5))){
var inst_34030 = cljs.core.async.close_BANG_(out);
var state_34045__$1 = state_34045;
var statearr_34064_35358 = state_34045__$1;
(statearr_34064_35358[(2)] = inst_34030);

(statearr_34064_35358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (10))){
var inst_34038 = (state_34045[(2)]);
var state_34045__$1 = (function (){var statearr_34065 = state_34045;
(statearr_34065[(8)] = inst_34038);

return statearr_34065;
})();
var statearr_34066_35361 = state_34045__$1;
(statearr_34066_35361[(2)] = null);

(statearr_34066_35361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (8))){
var inst_34027 = (state_34045[(7)]);
var state_34045__$1 = state_34045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34045__$1,(11),out,inst_34027);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32220__auto__ = null;
var cljs$core$async$state_machine__32220__auto____0 = (function (){
var statearr_34070 = [null,null,null,null,null,null,null,null,null];
(statearr_34070[(0)] = cljs$core$async$state_machine__32220__auto__);

(statearr_34070[(1)] = (1));

return statearr_34070;
});
var cljs$core$async$state_machine__32220__auto____1 = (function (state_34045){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_34045);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e34071){var ex__32223__auto__ = e34071;
var statearr_34072_35363 = state_34045;
(statearr_34072_35363[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_34045[(4)]))){
var statearr_34073_35364 = state_34045;
(statearr_34073_35364[(1)] = cljs.core.first((state_34045[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35365 = state_34045;
state_34045 = G__35365;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$state_machine__32220__auto__ = function(state_34045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32220__auto____1.call(this,state_34045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32220__auto____0;
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32220__auto____1;
return cljs$core$async$state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_34075 = f__32355__auto__();
(statearr_34075[(6)] = c__32354__auto___35324);

return statearr_34075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34079 = arguments.length;
switch (G__34079) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32354__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_34147){
var state_val_34148 = (state_34147[(1)]);
if((state_val_34148 === (7))){
var inst_34143 = (state_34147[(2)]);
var state_34147__$1 = state_34147;
var statearr_34152_35371 = state_34147__$1;
(statearr_34152_35371[(2)] = inst_34143);

(statearr_34152_35371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (20))){
var inst_34113 = (state_34147[(7)]);
var inst_34124 = (state_34147[(2)]);
var inst_34125 = cljs.core.next(inst_34113);
var inst_34098 = inst_34125;
var inst_34099 = null;
var inst_34100 = (0);
var inst_34101 = (0);
var state_34147__$1 = (function (){var statearr_34158 = state_34147;
(statearr_34158[(8)] = inst_34098);

(statearr_34158[(9)] = inst_34101);

(statearr_34158[(10)] = inst_34100);

(statearr_34158[(11)] = inst_34124);

(statearr_34158[(12)] = inst_34099);

return statearr_34158;
})();
var statearr_34159_35375 = state_34147__$1;
(statearr_34159_35375[(2)] = null);

(statearr_34159_35375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (1))){
var state_34147__$1 = state_34147;
var statearr_34160_35376 = state_34147__$1;
(statearr_34160_35376[(2)] = null);

(statearr_34160_35376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (4))){
var inst_34087 = (state_34147[(13)]);
var inst_34087__$1 = (state_34147[(2)]);
var inst_34088 = (inst_34087__$1 == null);
var state_34147__$1 = (function (){var statearr_34161 = state_34147;
(statearr_34161[(13)] = inst_34087__$1);

return statearr_34161;
})();
if(cljs.core.truth_(inst_34088)){
var statearr_34162_35377 = state_34147__$1;
(statearr_34162_35377[(1)] = (5));

} else {
var statearr_34163_35378 = state_34147__$1;
(statearr_34163_35378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (15))){
var state_34147__$1 = state_34147;
var statearr_34167_35379 = state_34147__$1;
(statearr_34167_35379[(2)] = null);

(statearr_34167_35379[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (21))){
var state_34147__$1 = state_34147;
var statearr_34168_35380 = state_34147__$1;
(statearr_34168_35380[(2)] = null);

(statearr_34168_35380[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (13))){
var inst_34098 = (state_34147[(8)]);
var inst_34101 = (state_34147[(9)]);
var inst_34100 = (state_34147[(10)]);
var inst_34099 = (state_34147[(12)]);
var inst_34109 = (state_34147[(2)]);
var inst_34110 = (inst_34101 + (1));
var tmp34164 = inst_34098;
var tmp34165 = inst_34100;
var tmp34166 = inst_34099;
var inst_34098__$1 = tmp34164;
var inst_34099__$1 = tmp34166;
var inst_34100__$1 = tmp34165;
var inst_34101__$1 = inst_34110;
var state_34147__$1 = (function (){var statearr_34172 = state_34147;
(statearr_34172[(8)] = inst_34098__$1);

(statearr_34172[(9)] = inst_34101__$1);

(statearr_34172[(14)] = inst_34109);

(statearr_34172[(10)] = inst_34100__$1);

(statearr_34172[(12)] = inst_34099__$1);

return statearr_34172;
})();
var statearr_34173_35400 = state_34147__$1;
(statearr_34173_35400[(2)] = null);

(statearr_34173_35400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (22))){
var state_34147__$1 = state_34147;
var statearr_34174_35408 = state_34147__$1;
(statearr_34174_35408[(2)] = null);

(statearr_34174_35408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (6))){
var inst_34087 = (state_34147[(13)]);
var inst_34096 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34087) : f.call(null,inst_34087));
var inst_34097 = cljs.core.seq(inst_34096);
var inst_34098 = inst_34097;
var inst_34099 = null;
var inst_34100 = (0);
var inst_34101 = (0);
var state_34147__$1 = (function (){var statearr_34175 = state_34147;
(statearr_34175[(8)] = inst_34098);

(statearr_34175[(9)] = inst_34101);

(statearr_34175[(10)] = inst_34100);

(statearr_34175[(12)] = inst_34099);

return statearr_34175;
})();
var statearr_34176_35425 = state_34147__$1;
(statearr_34176_35425[(2)] = null);

(statearr_34176_35425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (17))){
var inst_34113 = (state_34147[(7)]);
var inst_34117 = cljs.core.chunk_first(inst_34113);
var inst_34118 = cljs.core.chunk_rest(inst_34113);
var inst_34119 = cljs.core.count(inst_34117);
var inst_34098 = inst_34118;
var inst_34099 = inst_34117;
var inst_34100 = inst_34119;
var inst_34101 = (0);
var state_34147__$1 = (function (){var statearr_34180 = state_34147;
(statearr_34180[(8)] = inst_34098);

(statearr_34180[(9)] = inst_34101);

(statearr_34180[(10)] = inst_34100);

(statearr_34180[(12)] = inst_34099);

return statearr_34180;
})();
var statearr_34181_35448 = state_34147__$1;
(statearr_34181_35448[(2)] = null);

(statearr_34181_35448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (3))){
var inst_34145 = (state_34147[(2)]);
var state_34147__$1 = state_34147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34147__$1,inst_34145);
} else {
if((state_val_34148 === (12))){
var inst_34133 = (state_34147[(2)]);
var state_34147__$1 = state_34147;
var statearr_34182_35460 = state_34147__$1;
(statearr_34182_35460[(2)] = inst_34133);

(statearr_34182_35460[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (2))){
var state_34147__$1 = state_34147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34147__$1,(4),in$);
} else {
if((state_val_34148 === (23))){
var inst_34141 = (state_34147[(2)]);
var state_34147__$1 = state_34147;
var statearr_34183_35470 = state_34147__$1;
(statearr_34183_35470[(2)] = inst_34141);

(statearr_34183_35470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (19))){
var inst_34128 = (state_34147[(2)]);
var state_34147__$1 = state_34147;
var statearr_34186_35475 = state_34147__$1;
(statearr_34186_35475[(2)] = inst_34128);

(statearr_34186_35475[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (11))){
var inst_34098 = (state_34147[(8)]);
var inst_34113 = (state_34147[(7)]);
var inst_34113__$1 = cljs.core.seq(inst_34098);
var state_34147__$1 = (function (){var statearr_34190 = state_34147;
(statearr_34190[(7)] = inst_34113__$1);

return statearr_34190;
})();
if(inst_34113__$1){
var statearr_34191_35476 = state_34147__$1;
(statearr_34191_35476[(1)] = (14));

} else {
var statearr_34192_35477 = state_34147__$1;
(statearr_34192_35477[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (9))){
var inst_34135 = (state_34147[(2)]);
var inst_34136 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34147__$1 = (function (){var statearr_34194 = state_34147;
(statearr_34194[(15)] = inst_34135);

return statearr_34194;
})();
if(cljs.core.truth_(inst_34136)){
var statearr_34195_35478 = state_34147__$1;
(statearr_34195_35478[(1)] = (21));

} else {
var statearr_34196_35479 = state_34147__$1;
(statearr_34196_35479[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (5))){
var inst_34090 = cljs.core.async.close_BANG_(out);
var state_34147__$1 = state_34147;
var statearr_34197_35480 = state_34147__$1;
(statearr_34197_35480[(2)] = inst_34090);

(statearr_34197_35480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (14))){
var inst_34113 = (state_34147[(7)]);
var inst_34115 = cljs.core.chunked_seq_QMARK_(inst_34113);
var state_34147__$1 = state_34147;
if(inst_34115){
var statearr_34198_35481 = state_34147__$1;
(statearr_34198_35481[(1)] = (17));

} else {
var statearr_34199_35482 = state_34147__$1;
(statearr_34199_35482[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (16))){
var inst_34131 = (state_34147[(2)]);
var state_34147__$1 = state_34147;
var statearr_34200_35491 = state_34147__$1;
(statearr_34200_35491[(2)] = inst_34131);

(statearr_34200_35491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34148 === (10))){
var inst_34101 = (state_34147[(9)]);
var inst_34099 = (state_34147[(12)]);
var inst_34107 = cljs.core._nth(inst_34099,inst_34101);
var state_34147__$1 = state_34147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34147__$1,(13),out,inst_34107);
} else {
if((state_val_34148 === (18))){
var inst_34113 = (state_34147[(7)]);
var inst_34122 = cljs.core.first(inst_34113);
var state_34147__$1 = state_34147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34147__$1,(20),out,inst_34122);
} else {
if((state_val_34148 === (8))){
var inst_34101 = (state_34147[(9)]);
var inst_34100 = (state_34147[(10)]);
var inst_34103 = (inst_34101 < inst_34100);
var inst_34104 = inst_34103;
var state_34147__$1 = state_34147;
if(cljs.core.truth_(inst_34104)){
var statearr_34209_35500 = state_34147__$1;
(statearr_34209_35500[(1)] = (10));

} else {
var statearr_34210_35501 = state_34147__$1;
(statearr_34210_35501[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32220__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32220__auto____0 = (function (){
var statearr_34213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34213[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32220__auto__);

(statearr_34213[(1)] = (1));

return statearr_34213;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32220__auto____1 = (function (state_34147){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_34147);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e34214){var ex__32223__auto__ = e34214;
var statearr_34215_35504 = state_34147;
(statearr_34215_35504[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_34147[(4)]))){
var statearr_34216_35505 = state_34147;
(statearr_34216_35505[(1)] = cljs.core.first((state_34147[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35506 = state_34147;
state_34147 = G__35506;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32220__auto__ = function(state_34147){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32220__auto____1.call(this,state_34147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32220__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32220__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_34219 = f__32355__auto__();
(statearr_34219[(6)] = c__32354__auto__);

return statearr_34219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));

return c__32354__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34221 = arguments.length;
switch (G__34221) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34225 = arguments.length;
switch (G__34225) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34228 = arguments.length;
switch (G__34228) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32354__auto___35529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_34255){
var state_val_34256 = (state_34255[(1)]);
if((state_val_34256 === (7))){
var inst_34250 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34261_35537 = state_34255__$1;
(statearr_34261_35537[(2)] = inst_34250);

(statearr_34261_35537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (1))){
var inst_34231 = null;
var state_34255__$1 = (function (){var statearr_34266 = state_34255;
(statearr_34266[(7)] = inst_34231);

return statearr_34266;
})();
var statearr_34271_35544 = state_34255__$1;
(statearr_34271_35544[(2)] = null);

(statearr_34271_35544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (4))){
var inst_34235 = (state_34255[(8)]);
var inst_34235__$1 = (state_34255[(2)]);
var inst_34236 = (inst_34235__$1 == null);
var inst_34237 = cljs.core.not(inst_34236);
var state_34255__$1 = (function (){var statearr_34276 = state_34255;
(statearr_34276[(8)] = inst_34235__$1);

return statearr_34276;
})();
if(inst_34237){
var statearr_34281_35558 = state_34255__$1;
(statearr_34281_35558[(1)] = (5));

} else {
var statearr_34282_35561 = state_34255__$1;
(statearr_34282_35561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (6))){
var state_34255__$1 = state_34255;
var statearr_34283_35565 = state_34255__$1;
(statearr_34283_35565[(2)] = null);

(statearr_34283_35565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (3))){
var inst_34252 = (state_34255[(2)]);
var inst_34253 = cljs.core.async.close_BANG_(out);
var state_34255__$1 = (function (){var statearr_34284 = state_34255;
(statearr_34284[(9)] = inst_34252);

return statearr_34284;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34255__$1,inst_34253);
} else {
if((state_val_34256 === (2))){
var state_34255__$1 = state_34255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34255__$1,(4),ch);
} else {
if((state_val_34256 === (11))){
var inst_34235 = (state_34255[(8)]);
var inst_34244 = (state_34255[(2)]);
var inst_34231 = inst_34235;
var state_34255__$1 = (function (){var statearr_34285 = state_34255;
(statearr_34285[(10)] = inst_34244);

(statearr_34285[(7)] = inst_34231);

return statearr_34285;
})();
var statearr_34286_35579 = state_34255__$1;
(statearr_34286_35579[(2)] = null);

(statearr_34286_35579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (9))){
var inst_34235 = (state_34255[(8)]);
var state_34255__$1 = state_34255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34255__$1,(11),out,inst_34235);
} else {
if((state_val_34256 === (5))){
var inst_34235 = (state_34255[(8)]);
var inst_34231 = (state_34255[(7)]);
var inst_34239 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34235,inst_34231);
var state_34255__$1 = state_34255;
if(inst_34239){
var statearr_34288_35587 = state_34255__$1;
(statearr_34288_35587[(1)] = (8));

} else {
var statearr_34289_35591 = state_34255__$1;
(statearr_34289_35591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (10))){
var inst_34247 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34290_35596 = state_34255__$1;
(statearr_34290_35596[(2)] = inst_34247);

(statearr_34290_35596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (8))){
var inst_34231 = (state_34255[(7)]);
var tmp34287 = inst_34231;
var inst_34231__$1 = tmp34287;
var state_34255__$1 = (function (){var statearr_34291 = state_34255;
(statearr_34291[(7)] = inst_34231__$1);

return statearr_34291;
})();
var statearr_34292_35602 = state_34255__$1;
(statearr_34292_35602[(2)] = null);

(statearr_34292_35602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32220__auto__ = null;
var cljs$core$async$state_machine__32220__auto____0 = (function (){
var statearr_34293 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34293[(0)] = cljs$core$async$state_machine__32220__auto__);

(statearr_34293[(1)] = (1));

return statearr_34293;
});
var cljs$core$async$state_machine__32220__auto____1 = (function (state_34255){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_34255);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e34294){var ex__32223__auto__ = e34294;
var statearr_34295_35605 = state_34255;
(statearr_34295_35605[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_34255[(4)]))){
var statearr_34296_35607 = state_34255;
(statearr_34296_35607[(1)] = cljs.core.first((state_34255[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35608 = state_34255;
state_34255 = G__35608;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$state_machine__32220__auto__ = function(state_34255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32220__auto____1.call(this,state_34255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32220__auto____0;
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32220__auto____1;
return cljs$core$async$state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_34297 = f__32355__auto__();
(statearr_34297[(6)] = c__32354__auto___35529);

return statearr_34297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34299 = arguments.length;
switch (G__34299) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32354__auto___35625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_34337){
var state_val_34338 = (state_34337[(1)]);
if((state_val_34338 === (7))){
var inst_34333 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34339_35632 = state_34337__$1;
(statearr_34339_35632[(2)] = inst_34333);

(statearr_34339_35632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (1))){
var inst_34300 = (new Array(n));
var inst_34301 = inst_34300;
var inst_34302 = (0);
var state_34337__$1 = (function (){var statearr_34340 = state_34337;
(statearr_34340[(7)] = inst_34301);

(statearr_34340[(8)] = inst_34302);

return statearr_34340;
})();
var statearr_34341_35633 = state_34337__$1;
(statearr_34341_35633[(2)] = null);

(statearr_34341_35633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (4))){
var inst_34305 = (state_34337[(9)]);
var inst_34305__$1 = (state_34337[(2)]);
var inst_34306 = (inst_34305__$1 == null);
var inst_34307 = cljs.core.not(inst_34306);
var state_34337__$1 = (function (){var statearr_34342 = state_34337;
(statearr_34342[(9)] = inst_34305__$1);

return statearr_34342;
})();
if(inst_34307){
var statearr_34343_35635 = state_34337__$1;
(statearr_34343_35635[(1)] = (5));

} else {
var statearr_34344_35636 = state_34337__$1;
(statearr_34344_35636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (15))){
var inst_34327 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34345_35637 = state_34337__$1;
(statearr_34345_35637[(2)] = inst_34327);

(statearr_34345_35637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (13))){
var state_34337__$1 = state_34337;
var statearr_34346_35638 = state_34337__$1;
(statearr_34346_35638[(2)] = null);

(statearr_34346_35638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (6))){
var inst_34302 = (state_34337[(8)]);
var inst_34323 = (inst_34302 > (0));
var state_34337__$1 = state_34337;
if(cljs.core.truth_(inst_34323)){
var statearr_34347_35643 = state_34337__$1;
(statearr_34347_35643[(1)] = (12));

} else {
var statearr_34348_35647 = state_34337__$1;
(statearr_34348_35647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (3))){
var inst_34335 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34337__$1,inst_34335);
} else {
if((state_val_34338 === (12))){
var inst_34301 = (state_34337[(7)]);
var inst_34325 = cljs.core.vec(inst_34301);
var state_34337__$1 = state_34337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34337__$1,(15),out,inst_34325);
} else {
if((state_val_34338 === (2))){
var state_34337__$1 = state_34337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34337__$1,(4),ch);
} else {
if((state_val_34338 === (11))){
var inst_34317 = (state_34337[(2)]);
var inst_34318 = (new Array(n));
var inst_34301 = inst_34318;
var inst_34302 = (0);
var state_34337__$1 = (function (){var statearr_34349 = state_34337;
(statearr_34349[(7)] = inst_34301);

(statearr_34349[(10)] = inst_34317);

(statearr_34349[(8)] = inst_34302);

return statearr_34349;
})();
var statearr_34350_35649 = state_34337__$1;
(statearr_34350_35649[(2)] = null);

(statearr_34350_35649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (9))){
var inst_34301 = (state_34337[(7)]);
var inst_34315 = cljs.core.vec(inst_34301);
var state_34337__$1 = state_34337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34337__$1,(11),out,inst_34315);
} else {
if((state_val_34338 === (5))){
var inst_34301 = (state_34337[(7)]);
var inst_34305 = (state_34337[(9)]);
var inst_34310 = (state_34337[(11)]);
var inst_34302 = (state_34337[(8)]);
var inst_34309 = (inst_34301[inst_34302] = inst_34305);
var inst_34310__$1 = (inst_34302 + (1));
var inst_34311 = (inst_34310__$1 < n);
var state_34337__$1 = (function (){var statearr_34351 = state_34337;
(statearr_34351[(11)] = inst_34310__$1);

(statearr_34351[(12)] = inst_34309);

return statearr_34351;
})();
if(cljs.core.truth_(inst_34311)){
var statearr_34360_35653 = state_34337__$1;
(statearr_34360_35653[(1)] = (8));

} else {
var statearr_34361_35654 = state_34337__$1;
(statearr_34361_35654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (14))){
var inst_34330 = (state_34337[(2)]);
var inst_34331 = cljs.core.async.close_BANG_(out);
var state_34337__$1 = (function (){var statearr_34367 = state_34337;
(statearr_34367[(13)] = inst_34330);

return statearr_34367;
})();
var statearr_34368_35655 = state_34337__$1;
(statearr_34368_35655[(2)] = inst_34331);

(statearr_34368_35655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (10))){
var inst_34321 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34369_35656 = state_34337__$1;
(statearr_34369_35656[(2)] = inst_34321);

(statearr_34369_35656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (8))){
var inst_34301 = (state_34337[(7)]);
var inst_34310 = (state_34337[(11)]);
var tmp34362 = inst_34301;
var inst_34301__$1 = tmp34362;
var inst_34302 = inst_34310;
var state_34337__$1 = (function (){var statearr_34378 = state_34337;
(statearr_34378[(7)] = inst_34301__$1);

(statearr_34378[(8)] = inst_34302);

return statearr_34378;
})();
var statearr_34379_35657 = state_34337__$1;
(statearr_34379_35657[(2)] = null);

(statearr_34379_35657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32220__auto__ = null;
var cljs$core$async$state_machine__32220__auto____0 = (function (){
var statearr_34380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34380[(0)] = cljs$core$async$state_machine__32220__auto__);

(statearr_34380[(1)] = (1));

return statearr_34380;
});
var cljs$core$async$state_machine__32220__auto____1 = (function (state_34337){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_34337);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e34381){var ex__32223__auto__ = e34381;
var statearr_34382_35661 = state_34337;
(statearr_34382_35661[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_34337[(4)]))){
var statearr_34383_35662 = state_34337;
(statearr_34383_35662[(1)] = cljs.core.first((state_34337[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35663 = state_34337;
state_34337 = G__35663;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$state_machine__32220__auto__ = function(state_34337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32220__auto____1.call(this,state_34337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32220__auto____0;
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32220__auto____1;
return cljs$core$async$state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_34384 = f__32355__auto__();
(statearr_34384[(6)] = c__32354__auto___35625);

return statearr_34384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34386 = arguments.length;
switch (G__34386) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32354__auto___35668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32355__auto__ = (function (){var switch__32219__auto__ = (function (state_34428){
var state_val_34429 = (state_34428[(1)]);
if((state_val_34429 === (7))){
var inst_34424 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
var statearr_34430_35669 = state_34428__$1;
(statearr_34430_35669[(2)] = inst_34424);

(statearr_34430_35669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (1))){
var inst_34387 = [];
var inst_34388 = inst_34387;
var inst_34389 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34428__$1 = (function (){var statearr_34431 = state_34428;
(statearr_34431[(7)] = inst_34389);

(statearr_34431[(8)] = inst_34388);

return statearr_34431;
})();
var statearr_34432_35671 = state_34428__$1;
(statearr_34432_35671[(2)] = null);

(statearr_34432_35671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (4))){
var inst_34392 = (state_34428[(9)]);
var inst_34392__$1 = (state_34428[(2)]);
var inst_34393 = (inst_34392__$1 == null);
var inst_34394 = cljs.core.not(inst_34393);
var state_34428__$1 = (function (){var statearr_34433 = state_34428;
(statearr_34433[(9)] = inst_34392__$1);

return statearr_34433;
})();
if(inst_34394){
var statearr_34434_35672 = state_34428__$1;
(statearr_34434_35672[(1)] = (5));

} else {
var statearr_34435_35673 = state_34428__$1;
(statearr_34435_35673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (15))){
var inst_34418 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
var statearr_34436_35678 = state_34428__$1;
(statearr_34436_35678[(2)] = inst_34418);

(statearr_34436_35678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (13))){
var state_34428__$1 = state_34428;
var statearr_34437_35679 = state_34428__$1;
(statearr_34437_35679[(2)] = null);

(statearr_34437_35679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (6))){
var inst_34388 = (state_34428[(8)]);
var inst_34413 = inst_34388.length;
var inst_34414 = (inst_34413 > (0));
var state_34428__$1 = state_34428;
if(cljs.core.truth_(inst_34414)){
var statearr_34438_35680 = state_34428__$1;
(statearr_34438_35680[(1)] = (12));

} else {
var statearr_34439_35681 = state_34428__$1;
(statearr_34439_35681[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (3))){
var inst_34426 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34428__$1,inst_34426);
} else {
if((state_val_34429 === (12))){
var inst_34388 = (state_34428[(8)]);
var inst_34416 = cljs.core.vec(inst_34388);
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34428__$1,(15),out,inst_34416);
} else {
if((state_val_34429 === (2))){
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34428__$1,(4),ch);
} else {
if((state_val_34429 === (11))){
var inst_34392 = (state_34428[(9)]);
var inst_34396 = (state_34428[(10)]);
var inst_34406 = (state_34428[(2)]);
var inst_34407 = [];
var inst_34408 = inst_34407.push(inst_34392);
var inst_34388 = inst_34407;
var inst_34389 = inst_34396;
var state_34428__$1 = (function (){var statearr_34440 = state_34428;
(statearr_34440[(7)] = inst_34389);

(statearr_34440[(11)] = inst_34408);

(statearr_34440[(8)] = inst_34388);

(statearr_34440[(12)] = inst_34406);

return statearr_34440;
})();
var statearr_34441_35682 = state_34428__$1;
(statearr_34441_35682[(2)] = null);

(statearr_34441_35682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (9))){
var inst_34388 = (state_34428[(8)]);
var inst_34404 = cljs.core.vec(inst_34388);
var state_34428__$1 = state_34428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34428__$1,(11),out,inst_34404);
} else {
if((state_val_34429 === (5))){
var inst_34389 = (state_34428[(7)]);
var inst_34392 = (state_34428[(9)]);
var inst_34396 = (state_34428[(10)]);
var inst_34396__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34392) : f.call(null,inst_34392));
var inst_34397 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34396__$1,inst_34389);
var inst_34398 = cljs.core.keyword_identical_QMARK_(inst_34389,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34399 = ((inst_34397) || (inst_34398));
var state_34428__$1 = (function (){var statearr_34442 = state_34428;
(statearr_34442[(10)] = inst_34396__$1);

return statearr_34442;
})();
if(cljs.core.truth_(inst_34399)){
var statearr_34443_35683 = state_34428__$1;
(statearr_34443_35683[(1)] = (8));

} else {
var statearr_34444_35684 = state_34428__$1;
(statearr_34444_35684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (14))){
var inst_34421 = (state_34428[(2)]);
var inst_34422 = cljs.core.async.close_BANG_(out);
var state_34428__$1 = (function (){var statearr_34446 = state_34428;
(statearr_34446[(13)] = inst_34421);

return statearr_34446;
})();
var statearr_34447_35685 = state_34428__$1;
(statearr_34447_35685[(2)] = inst_34422);

(statearr_34447_35685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (10))){
var inst_34411 = (state_34428[(2)]);
var state_34428__$1 = state_34428;
var statearr_34448_35686 = state_34428__$1;
(statearr_34448_35686[(2)] = inst_34411);

(statearr_34448_35686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34429 === (8))){
var inst_34388 = (state_34428[(8)]);
var inst_34392 = (state_34428[(9)]);
var inst_34396 = (state_34428[(10)]);
var inst_34401 = inst_34388.push(inst_34392);
var tmp34445 = inst_34388;
var inst_34388__$1 = tmp34445;
var inst_34389 = inst_34396;
var state_34428__$1 = (function (){var statearr_34449 = state_34428;
(statearr_34449[(7)] = inst_34389);

(statearr_34449[(8)] = inst_34388__$1);

(statearr_34449[(14)] = inst_34401);

return statearr_34449;
})();
var statearr_34450_35689 = state_34428__$1;
(statearr_34450_35689[(2)] = null);

(statearr_34450_35689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32220__auto__ = null;
var cljs$core$async$state_machine__32220__auto____0 = (function (){
var statearr_34451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34451[(0)] = cljs$core$async$state_machine__32220__auto__);

(statearr_34451[(1)] = (1));

return statearr_34451;
});
var cljs$core$async$state_machine__32220__auto____1 = (function (state_34428){
while(true){
var ret_value__32221__auto__ = (function (){try{while(true){
var result__32222__auto__ = switch__32219__auto__(state_34428);
if(cljs.core.keyword_identical_QMARK_(result__32222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32222__auto__;
}
break;
}
}catch (e34452){var ex__32223__auto__ = e34452;
var statearr_34453_35691 = state_34428;
(statearr_34453_35691[(2)] = ex__32223__auto__);


if(cljs.core.seq((state_34428[(4)]))){
var statearr_34454_35692 = state_34428;
(statearr_34454_35692[(1)] = cljs.core.first((state_34428[(4)])));

} else {
throw ex__32223__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35693 = state_34428;
state_34428 = G__35693;
continue;
} else {
return ret_value__32221__auto__;
}
break;
}
});
cljs$core$async$state_machine__32220__auto__ = function(state_34428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32220__auto____1.call(this,state_34428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32220__auto____0;
cljs$core$async$state_machine__32220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32220__auto____1;
return cljs$core$async$state_machine__32220__auto__;
})()
})();
var state__32356__auto__ = (function (){var statearr_34455 = f__32355__auto__();
(statearr_34455[(6)] = c__32354__auto___35668);

return statearr_34455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32356__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
