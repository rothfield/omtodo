// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$98);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t16326 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t16326 = (function (f,fn_handler,meta16327){
this.f = f;
this.fn_handler = fn_handler;
this.meta16327 = meta16327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t16326.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t16326.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t16326";
cljs.core.async.impl.ioc_helpers.t16326.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write(writer__4011__auto__,"cljs.core.async.impl.ioc-helpers/t16326");
});
cljs.core.async.impl.ioc_helpers.t16326.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t16326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t16326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t16326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16328){var self__ = this;
var _16328__$1 = this;return self__.meta16327;
});
cljs.core.async.impl.ioc_helpers.t16326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16328,meta16327__$1){var self__ = this;
var _16328__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t16326(self__.f,self__.fn_handler,meta16327__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t16326 = (function __GT_t16326(f__$1,fn_handler__$1,meta16327){return (new cljs.core.async.impl.ioc_helpers.t16326(f__$1,fn_handler__$1,meta16327));
});
}
return (new cljs.core.async.impl.ioc_helpers.t16326(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e16330){if((e16330 instanceof Object))
{var ex = e16330;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$72)
{throw e16330;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_16333_16335 = state;(statearr_16333_16335[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_16333_16335[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_16334_16336 = state;(statearr_16334_16336[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_16334_16336[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$99;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_16339_16341 = state;(statearr_16339_16341[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_16339_16341[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_16340_16342 = state;(statearr_16340_16342[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_16340_16342[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$99;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__16343){var map__16348 = p__16343;var map__16348__$1 = ((cljs.core.seq_QMARK_(map__16348))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16348):map__16348);var opts = map__16348__$1;var statearr_16349_16352 = state;(statearr_16349_16352[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts((function (val){var statearr_16350_16353 = state;(statearr_16350_16353[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_16351_16354 = state;(statearr_16351_16354[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$99;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__16343 = null;if (arguments.length > 3) {
  p__16343 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__16343);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__16355){
var state = cljs.core.first(arglist__16355);
arglist__16355 = cljs.core.next(arglist__16355);
var cont_block = cljs.core.first(arglist__16355);
arglist__16355 = cljs.core.next(arglist__16355);
var ports = cljs.core.first(arglist__16355);
var p__16343 = cljs.core.rest(arglist__16355);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__16343);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (){return null;
})));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4024__auto__){var self__ = this;
var this__4024__auto____$1 = this;var h__3854__auto__ = self__.__hash;if(!((h__3854__auto__ == null)))
{return h__3854__auto__;
} else
{var h__3854__auto____$1 = cljs.core.hash_imap(this__4024__auto____$1);self__.__hash = h__3854__auto____$1;
return h__3854__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4029__auto__,k__4030__auto__){var self__ = this;
var this__4029__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4029__auto____$1,k__4030__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4031__auto__,k16357,else__4032__auto__){var self__ = this;
var this__4031__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k16357,cljs.core.constant$keyword$100))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k16357,cljs.core.constant$keyword$101))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_(k16357,cljs.core.constant$keyword$102))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k16357,cljs.core.constant$keyword$103))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k16357,cljs.core.constant$keyword$104))
{return self__.prev;
} else
{if(cljs.core.constant$keyword$72)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16357,else__4032__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4036__auto__,k__4037__auto__,G__16356){var self__ = this;
var this__4036__auto____$1 = this;var pred__16359 = cljs.core.keyword_identical_QMARK_;var expr__16360 = k__4037__auto__;if(cljs.core.truth_((pred__16359.cljs$core$IFn$_invoke$arity$2 ? pred__16359.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$100,expr__16360) : pred__16359.call(null,cljs.core.constant$keyword$100,expr__16360))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__16356,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__16359.cljs$core$IFn$_invoke$arity$2 ? pred__16359.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$101,expr__16360) : pred__16359.call(null,cljs.core.constant$keyword$101,expr__16360))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__16356,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__16359.cljs$core$IFn$_invoke$arity$2 ? pred__16359.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$102,expr__16360) : pred__16359.call(null,cljs.core.constant$keyword$102,expr__16360))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__16356,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__16359.cljs$core$IFn$_invoke$arity$2 ? pred__16359.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$103,expr__16360) : pred__16359.call(null,cljs.core.constant$keyword$103,expr__16360))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__16356,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__16359.cljs$core$IFn$_invoke$arity$2 ? pred__16359.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$104,expr__16360) : pred__16359.call(null,cljs.core.constant$keyword$104,expr__16360))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__16356,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4037__auto__,G__16356),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4043__auto__,writer__4044__auto__,opts__4045__auto__){var self__ = this;
var this__4043__auto____$1 = this;var pr_pair__4046__auto__ = (function (keyval__4047__auto__){return cljs.core.pr_sequential_writer(writer__4044__auto__,cljs.core.pr_writer,""," ","",opts__4045__auto__,keyval__4047__auto__);
});return cljs.core.pr_sequential_writer(writer__4044__auto__,pr_pair__4046__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4045__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$100,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$101,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$102,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$103,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$104,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4034__auto__,entry__4035__auto__){var self__ = this;
var this__4034__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4035__auto__))
{return cljs.core._assoc(this__4034__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4035__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4035__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4034__auto____$1,entry__4035__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4041__auto__){var self__ = this;
var this__4041__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$100,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$101,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$102,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$103,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$104,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4033__auto__){var self__ = this;
var this__4033__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4025__auto__,other__4026__auto__){var self__ = this;
var this__4025__auto____$1 = this;if(cljs.core.truth_((function (){var and__3431__auto__ = other__4026__auto__;if(cljs.core.truth_(and__3431__auto__))
{return ((this__4025__auto____$1.constructor === other__4026__auto__.constructor)) && (cljs.core.equiv_map(this__4025__auto____$1,other__4026__auto__));
} else
{return and__3431__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4028__auto__,G__16356){var self__ = this;
var this__4028__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__16356,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4023__auto__){var self__ = this;
var this__4023__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4027__auto__){var self__ = this;
var this__4027__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4038__auto__,k__4039__auto__){var self__ = this;
var this__4038__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$102,null,cljs.core.constant$keyword$100,null,cljs.core.constant$keyword$101,null,cljs.core.constant$keyword$103,null,cljs.core.constant$keyword$104,null], null), null),k__4039__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4038__auto____$1),self__.__meta),k__4039__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4039__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4063__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4063__auto__,writer__4064__auto__){return cljs.core._write(writer__4064__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__16358){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(G__16358),cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(G__16358),cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(G__16358),cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(G__16358),cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(G__16358),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16358,cljs.core.constant$keyword$100,cljs.core.array_seq([cljs.core.constant$keyword$101,cljs.core.constant$keyword$102,cljs.core.constant$keyword$103,cljs.core.constant$keyword$104], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_16363 = state;(statearr_16363[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_16363;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$100.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3431__auto__ = exception;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3431__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3431__auto__ = exception;if(cljs.core.truth_(and__3431__auto__))
{var and__3431__auto____$1 = catch_block;if(cljs.core.truth_(and__3431__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
})()))
{var statearr_16369 = state;(statearr_16369[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_16369[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_16369[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_16369[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$100,null,cljs.core.array_seq([cljs.core.constant$keyword$101,null], 0)));
return statearr_16369;
} else
{if(cljs.core.truth_((function (){var and__3431__auto__ = exception;if(cljs.core.truth_(and__3431__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3431__auto__;
}
})()))
{var statearr_16370_16374 = state;(statearr_16370_16374[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__16375 = state;
state = G__16375;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3431__auto__ = exception;if(cljs.core.truth_(and__3431__auto__))
{var and__3431__auto____$1 = cljs.core.not(catch_block);if(and__3431__auto____$1)
{return cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
})()))
{var statearr_16371 = state;(statearr_16371[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_16371[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$102,null));
return statearr_16371;
} else
{if(cljs.core.truth_((function (){var and__3431__auto__ = cljs.core.not(exception);if(and__3431__auto__)
{return cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3431__auto__;
}
})()))
{var statearr_16372 = state;(statearr_16372[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_16372[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$102,null));
return statearr_16372;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_16373 = state;(statearr_16373[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_16373[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_16373;
} else
{if(cljs.core.constant$keyword$72)
{return null;
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
