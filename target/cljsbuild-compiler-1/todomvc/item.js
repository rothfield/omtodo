// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.item');
goog.require('cljs.core');
goog.require('todomvc.utils');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('todomvc.utils');
goog.require('cljs.core.async');
todomvc.item.ESCAPE_KEY = 27;
todomvc.item.ENTER_KEY = 13;
todomvc.item.submit = (function submit(e,todo,owner,comm){var temp__4092__auto___16717 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$113);if(cljs.core.truth_(temp__4092__auto___16717))
{var edit_text_16718 = temp__4092__auto___16717;if(cljs.core.not(clojure.string.blank_QMARK_(edit_text_16718.trim())))
{om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(todo,cljs.core.constant$keyword$114,edit_text_16718);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$115,cljs.core.deref(todo)], null));
} else
{cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$116,cljs.core.deref(todo)], null));
}
} else
{}
return false;
});
todomvc.item.edit = (function edit(e,todo,owner,comm){var todo__$1 = cljs.core.deref(todo);var node = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"editField");cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$117,todo__$1], null));
var G__16720 = owner;om.core.set_state_BANG_(G__16720,cljs.core.constant$keyword$118,true);
om.core.set_state_BANG_(G__16720,cljs.core.constant$keyword$113,cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(todo__$1));
return G__16720;
});
todomvc.item.key_down = (function key_down(e,todo,owner,comm){var pred__16724 = cljs.core._EQ__EQ_;var expr__16725 = e.keyCode;if(cljs.core.truth_((pred__16724.cljs$core$IFn$_invoke$arity$2 ? pred__16724.cljs$core$IFn$_invoke$arity$2(todomvc.item.ESCAPE_KEY,expr__16725) : pred__16724.call(null,todomvc.item.ESCAPE_KEY,expr__16725))))
{var todo__$1 = cljs.core.deref(todo);om.core.set_state_BANG_(owner,cljs.core.constant$keyword$113,cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(todo__$1));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$119,todo__$1], null));
} else
{if(cljs.core.truth_((pred__16724.cljs$core$IFn$_invoke$arity$2 ? pred__16724.cljs$core$IFn$_invoke$arity$2(todomvc.item.ENTER_KEY,expr__16725) : pred__16724.call(null,todomvc.item.ENTER_KEY,expr__16725))))
{return todomvc.item.submit(e,todo,owner,comm);
} else
{return null;
}
}
});
todomvc.item.change = (function change(e,todo,owner){return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$113,e.target.value);
});
todomvc.item.todo_item = (function todo_item(todo,owner){if(typeof todomvc.item.t16738 !== 'undefined')
{} else
{
/**
* @constructor
*/
todomvc.item.t16738 = (function (owner,todo,todo_item,meta16739){
this.owner = owner;
this.todo = todo;
this.todo_item = todo_item;
this.meta16739 = meta16739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todomvc.item.t16738.cljs$lang$type = true;
todomvc.item.t16738.cljs$lang$ctorStr = "todomvc.item/t16738";
todomvc.item.t16738.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write(writer__4011__auto__,"todomvc.item/t16738");
});
todomvc.item.t16738.prototype.om$core$IRenderState$ = true;
todomvc.item.t16738.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__16741){var self__ = this;
var map__16742 = p__16741;var map__16742__$1 = ((cljs.core.seq_QMARK_(map__16742))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16742):map__16742);var state = map__16742__$1;var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16742__$1,cljs.core.constant$keyword$120);var ___$1 = this;var class$ = (function (){var G__16743 = "";var G__16743__$1 = (cljs.core.truth_(cljs.core.constant$keyword$121.cljs$core$IFn$_invoke$arity$1(self__.todo))?[cljs.core.str(G__16743),cljs.core.str("completed")].join(''):G__16743);var G__16743__$2 = (cljs.core.truth_(cljs.core.constant$keyword$122.cljs$core$IFn$_invoke$arity$1(self__.todo))?[cljs.core.str(G__16743__$1),cljs.core.str("editing")].join(''):G__16743__$1);return G__16743__$2;
})();return React.DOM.li({"style": todomvc.utils.hidden(cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(self__.todo)), "className": class$},React.DOM.div({"className": "view"},(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (___$2){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.todo,cljs.core.constant$keyword$121,(function (p1__16727_SHARP_){return cljs.core.not(p1__16727_SHARP_);
}));
}), "checked": (function (){var and__3431__auto__ = cljs.core.constant$keyword$121.cljs$core$IFn$_invoke$arity$1(self__.todo);if(cljs.core.truth_(and__3431__auto__))
{return "checked";
} else
{return and__3431__auto__;
}
})(), "type": "checkbox", "className": "toggle"}) : om.dom.input.call(null,{"onChange": (function (___$2){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.todo,cljs.core.constant$keyword$121,(function (p1__16727_SHARP_){return cljs.core.not(p1__16727_SHARP_);
}));
}), "checked": (function (){var and__3431__auto__ = cljs.core.constant$keyword$121.cljs$core$IFn$_invoke$arity$1(self__.todo);if(cljs.core.truth_(and__3431__auto__))
{return "checked";
} else
{return and__3431__auto__;
}
})(), "type": "checkbox", "className": "toggle"})),React.DOM.label({"onDoubleClick": (function (p1__16728_SHARP_){return todomvc.item.edit(p1__16728_SHARP_,self__.todo,self__.owner,comm);
})},cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(self__.todo)),React.DOM.button({"onClick": (function (___$2){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$116,cljs.core.deref(self__.todo)], null));
}), "className": "destroy"})),(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onKeyDown": (function (p1__16731_SHARP_){return todomvc.item.key_down(p1__16731_SHARP_,self__.todo,self__.owner,comm);
}), "onChange": (function (p1__16730_SHARP_){return todomvc.item.change(p1__16730_SHARP_,self__.todo,self__.owner);
}), "onBlur": (function (p1__16729_SHARP_){return todomvc.item.submit(p1__16729_SHARP_,self__.todo,self__.owner,comm);
}), "value": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$113), "className": "edit", "ref": "editField"}) : om.dom.input.call(null,{"onKeyDown": (function (p1__16731_SHARP_){return todomvc.item.key_down(p1__16731_SHARP_,self__.todo,self__.owner,comm);
}), "onChange": (function (p1__16730_SHARP_){return todomvc.item.change(p1__16730_SHARP_,self__.todo,self__.owner);
}), "onBlur": (function (p1__16729_SHARP_){return todomvc.item.submit(p1__16729_SHARP_,self__.todo,self__.owner,comm);
}), "value": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$113), "className": "edit", "ref": "editField"})));
});
todomvc.item.t16738.prototype.om$core$IDidUpdate$ = true;
todomvc.item.t16738.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;if(cljs.core.truth_((function (){var and__3431__auto__ = cljs.core.constant$keyword$122.cljs$core$IFn$_invoke$arity$1(self__.todo);if(cljs.core.truth_(and__3431__auto__))
{return om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$118);
} else
{return and__3431__auto__;
}
})()))
{var node_16744 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"editField");var len_16745 = node_16744.value.length;node_16744.focus();
node_16744.setSelectionRange(len_16745,len_16745);
return om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$118,null);
} else
{return null;
}
});
todomvc.item.t16738.prototype.om$core$IInitState$ = true;
todomvc.item.t16738.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$113,cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(self__.todo)], null);
});
todomvc.item.t16738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16740){var self__ = this;
var _16740__$1 = this;return self__.meta16739;
});
todomvc.item.t16738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16740,meta16739__$1){var self__ = this;
var _16740__$1 = this;return (new todomvc.item.t16738(self__.owner,self__.todo,self__.todo_item,meta16739__$1));
});
todomvc.item.__GT_t16738 = (function __GT_t16738(owner__$1,todo__$1,todo_item__$1,meta16739){return (new todomvc.item.t16738(owner__$1,todo__$1,todo_item__$1,meta16739));
});
}
return (new todomvc.item.t16738(owner,todo,todo_item,null));
});
