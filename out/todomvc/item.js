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
todomvc.item.submit = (function submit(e,todo,owner,comm){var temp__4092__auto___9120 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178));if(cljs.core.truth_(temp__4092__auto___9120))
{var edit_text_9121 = temp__4092__auto___9120;if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,edit_text_9121.trim())))
{om.core.update_BANG_.call(null,todo,new cljs.core.Keyword(null,"title","title",1124275658),edit_text_9121);
cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1017427183),cljs.core.deref.call(null,todo)], null));
} else
{cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),cljs.core.deref.call(null,todo)], null));
}
} else
{}
return false;
});
todomvc.item.edit = (function edit(e,todo,owner,comm){var todo__$1 = cljs.core.deref.call(null,todo);var node = om.core.get_node.call(null,owner,"editField");cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit","edit",1017012604),todo__$1], null));
var G__9123 = owner;om.core.set_state_BANG_.call(null,G__9123,new cljs.core.Keyword(null,"needs-focus","needs-focus",3232415002),true);
om.core.set_state_BANG_.call(null,G__9123,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(todo__$1));
return G__9123;
});
todomvc.item.key_down = (function key_down(e,todo,owner,comm){var pred__9127 = cljs.core._EQ__EQ_;var expr__9128 = e.keyCode;if(cljs.core.truth_(pred__9127.call(null,todomvc.item.ESCAPE_KEY,expr__9128)))
{var todo__$1 = cljs.core.deref.call(null,todo);om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(todo__$1));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel","cancel",3941147116),todo__$1], null));
} else
{if(cljs.core.truth_(pred__9127.call(null,todomvc.item.ENTER_KEY,expr__9128)))
{return todomvc.item.submit.call(null,e,todo,owner,comm);
} else
{return null;
}
}
});
todomvc.item.change = (function change(e,todo,owner){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178),e.target.value);
});
todomvc.item.todo_item = (function todo_item(todo,owner){if(typeof todomvc.item.t9141 !== 'undefined')
{} else
{
/**
* @constructor
*/
todomvc.item.t9141 = (function (owner,todo,todo_item,meta9142){
this.owner = owner;
this.todo = todo;
this.todo_item = todo_item;
this.meta9142 = meta9142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todomvc.item.t9141.cljs$lang$type = true;
todomvc.item.t9141.cljs$lang$ctorStr = "todomvc.item/t9141";
todomvc.item.t9141.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"todomvc.item/t9141");
});
todomvc.item.t9141.prototype.om$core$IRenderState$ = true;
todomvc.item.t9141.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9144){var self__ = this;
var map__9145 = p__9144;var map__9145__$1 = ((cljs.core.seq_QMARK_.call(null,map__9145))?cljs.core.apply.call(null,cljs.core.hash_map,map__9145):map__9145);var state = map__9145__$1;var comm = cljs.core.get.call(null,map__9145__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var ___$1 = this;var class$ = (function (){var G__9146 = "";var G__9146__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"completed","completed",3905939901).cljs$core$IFn$_invoke$arity$1(self__.todo))?[cljs.core.str(G__9146),cljs.core.str("completed")].join(''):G__9146);var G__9146__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"editing","editing",3420907786).cljs$core$IFn$_invoke$arity$1(self__.todo))?[cljs.core.str(G__9146__$1),cljs.core.str("editing")].join(''):G__9146__$1);return G__9146__$2;
})();return React.DOM.li({"style": todomvc.utils.hidden.call(null,new cljs.core.Keyword(null,"hidden","hidden",4091384092).cljs$core$IFn$_invoke$arity$1(self__.todo)), "className": class$},React.DOM.div({"className": "view"},om.dom.input.call(null,{"onChange": (function (___$2){return om.core.transact_BANG_.call(null,self__.todo,new cljs.core.Keyword(null,"completed","completed",3905939901),(function (p1__9130_SHARP_){return cljs.core.not.call(null,p1__9130_SHARP_);
}));
}), "checked": (function (){var and__3431__auto__ = new cljs.core.Keyword(null,"completed","completed",3905939901).cljs$core$IFn$_invoke$arity$1(self__.todo);if(cljs.core.truth_(and__3431__auto__))
{return "checked";
} else
{return and__3431__auto__;
}
})(), "type": "checkbox", "className": "toggle"}),React.DOM.label({"onDoubleClick": (function (p1__9131_SHARP_){return todomvc.item.edit.call(null,p1__9131_SHARP_,self__.todo,self__.owner,comm);
})},new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.todo)),React.DOM.button({"onClick": (function (___$2){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),cljs.core.deref.call(null,self__.todo)], null));
}), "className": "destroy"})),om.dom.input.call(null,{"onKeyDown": (function (p1__9134_SHARP_){return todomvc.item.key_down.call(null,p1__9134_SHARP_,self__.todo,self__.owner,comm);
}), "onChange": (function (p1__9133_SHARP_){return todomvc.item.change.call(null,p1__9133_SHARP_,self__.todo,self__.owner);
}), "onBlur": (function (p1__9132_SHARP_){return todomvc.item.submit.call(null,p1__9132_SHARP_,self__.todo,self__.owner,comm);
}), "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edit-text","edit-text",3396674178)), "className": "edit", "ref": "editField"}));
});
todomvc.item.t9141.prototype.om$core$IDidUpdate$ = true;
todomvc.item.t9141.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;if(cljs.core.truth_((function (){var and__3431__auto__ = new cljs.core.Keyword(null,"editing","editing",3420907786).cljs$core$IFn$_invoke$arity$1(self__.todo);if(cljs.core.truth_(and__3431__auto__))
{return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"needs-focus","needs-focus",3232415002));
} else
{return and__3431__auto__;
}
})()))
{var node_9147 = om.core.get_node.call(null,self__.owner,"editField");var len_9148 = node_9147.value.length;node_9147.focus();
node_9147.setSelectionRange(len_9148,len_9148);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"needs-focus","needs-focus",3232415002),null);
} else
{return null;
}
});
todomvc.item.t9141.prototype.om$core$IInitState$ = true;
todomvc.item.t9141.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edit-text","edit-text",3396674178),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.todo)], null);
});
todomvc.item.t9141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9143){var self__ = this;
var _9143__$1 = this;return self__.meta9142;
});
todomvc.item.t9141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9143,meta9142__$1){var self__ = this;
var _9143__$1 = this;return (new todomvc.item.t9141(self__.owner,self__.todo,self__.todo_item,meta9142__$1));
});
todomvc.item.__GT_t9141 = (function __GT_t9141(owner__$1,todo__$1,todo_item__$1,meta9142){return (new todomvc.item.t9141(owner__$1,todo__$1,todo_item__$1,meta9142));
});
}
return (new todomvc.item.t9141(owner,todo,todo_item,null));
});

//# sourceMappingURL=item.js.map