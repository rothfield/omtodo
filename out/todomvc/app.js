// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.app');
goog.require('cljs.core');
goog.require('todomvc.utils');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('todomvc.utils');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('todomvc.item');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('todomvc.item');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('secretary.core');
cljs.core.enable_console_print_BANG_.call(null);
todomvc.app.ENTER_KEY = 13;
todomvc.app.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"showing","showing",3081204535),new cljs.core.Keyword(null,"all","all",1014000915),new cljs.core.Keyword(null,"todos","todos",1124439135),cljs.core.PersistentVector.EMPTY], null));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9155__auto__){var map__9177 = params__9155__auto__;var map__9177__$1 = ((cljs.core.seq_QMARK_.call(null,map__9177))?cljs.core.apply.call(null,cljs.core.hash_map,map__9177):map__9177);return cljs.core.swap_BANG_.call(null,todomvc.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"showing","showing",3081204535),new cljs.core.Keyword(null,"all","all",1014000915));
}));
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:filter",(function (params__9155__auto__){var map__9178 = params__9155__auto__;var map__9178__$1 = ((cljs.core.seq_QMARK_.call(null,map__9178))?cljs.core.apply.call(null,cljs.core.hash_map,map__9178):map__9178);var filter = cljs.core.get.call(null,map__9178__$1,new cljs.core.Keyword(null,"filter","filter",4034379498));return cljs.core.swap_BANG_.call(null,todomvc.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"showing","showing",3081204535),cljs.core.keyword.call(null,filter));
}));
todomvc.app.history = (new goog.History());
goog.events.listen(todomvc.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
todomvc.app.history.setEnabled(true);
todomvc.app.visible_QMARK_ = (function visible_QMARK_(todo,filter){var G__9180 = filter;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),G__9180))
{return new cljs.core.Keyword(null,"completed","completed",3905939901).cljs$core$IFn$_invoke$arity$1(todo);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",3885920888),G__9180))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901).cljs$core$IFn$_invoke$arity$1(todo));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"all","all",1014000915),G__9180))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(filter)].join('')));
} else
{return null;
}
}
}
}
});
todomvc.app.main = (function main(p__9182,comm){var map__9185 = p__9182;var map__9185__$1 = ((cljs.core.seq_QMARK_.call(null,map__9185))?cljs.core.apply.call(null,cljs.core.hash_map,map__9185):map__9185);var app = map__9185__$1;var editing = cljs.core.get.call(null,map__9185__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var showing = cljs.core.get.call(null,map__9185__$1,new cljs.core.Keyword(null,"showing","showing",3081204535));var todos = cljs.core.get.call(null,map__9185__$1,new cljs.core.Keyword(null,"todos","todos",1124439135));return React.DOM.section({"style": todomvc.utils.hidden.call(null,cljs.core.empty_QMARK_.call(null,todos)), "id": "main"},om.dom.input.call(null,{"checked": cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),todos), "onChange": (function (p1__9181_SHARP_){return todomvc.app.toggle_all.call(null,p1__9181_SHARP_,app);
}), "type": "checkbox", "id": "toggle-all"}),cljs.core.apply.call(null,om.dom.ul,{"id": "todo-list"},om.core.build_all.call(null,todomvc.item.todo_item,todos,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"fn","fn",1013907514),(function (todo){var G__9186 = todo;var G__9186__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(todo),editing))?cljs.core.assoc.call(null,G__9186,new cljs.core.Keyword(null,"editing","editing",3420907786),true):G__9186);var G__9186__$2 = ((cljs.core.not.call(null,todomvc.app.visible_QMARK_.call(null,todo,showing)))?cljs.core.assoc.call(null,G__9186__$1,new cljs.core.Keyword(null,"hidden","hidden",4091384092),true):G__9186__$1);return G__9186__$2;
})], null))));
});
todomvc.app.make_clear_button = (function make_clear_button(completed,comm){if((completed > 0))
{return React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear","clear",1108650431),todomvc.utils.now.call(null)], null));
}), "id": "clear-completed"},[cljs.core.str("Clear completed ("),cljs.core.str(completed),cljs.core.str(")")].join(''));
} else
{return null;
}
});
todomvc.app.footer = (function footer(app,count,completed,comm){var clear_button = todomvc.app.make_clear_button.call(null,completed,comm);var sel = cljs.core.assoc.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",1014000915),new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"completed","completed",3905939901)], null),cljs.core.repeat.call(null,"")),new cljs.core.Keyword(null,"showing","showing",3081204535).cljs$core$IFn$_invoke$arity$1(app),"selected");return React.DOM.footer({"style": todomvc.utils.hidden.call(null,cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(app))), "id": "footer"},React.DOM.span({"id": "todo-count"},React.DOM.strong(null,count),[cljs.core.str(" "),cljs.core.str(todomvc.utils.pluralize.call(null,count,"item")),cljs.core.str(" left")].join('')),React.DOM.ul({"id": "filters"},React.DOM.li(null,React.DOM.a({"className": sel.call(null,new cljs.core.Keyword(null,"all","all",1014000915)), "href": "#/"},"All")),React.DOM.li(null,React.DOM.a({"className": sel.call(null,new cljs.core.Keyword(null,"active","active",3885920888)), "href": "#/active"},"Active")),React.DOM.li(null,React.DOM.a({"className": sel.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901)), "href": "#/completed"},"Completed"))),clear_button);
});
todomvc.app.toggle_all = (function toggle_all(e,app){var checked = e.target.checked;return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"todos","todos",1124439135),(function (todos){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__9187_SHARP_){return cljs.core.assoc.call(null,p1__9187_SHARP_,new cljs.core.Keyword(null,"completed","completed",3905939901),checked);
}),todos));
}));
});
todomvc.app.handle_new_todo_keydown = (function handle_new_todo_keydown(e,app,owner){if((e.which === todomvc.app.ENTER_KEY))
{var new_field_9189 = om.core.get_node.call(null,owner,"newField");if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,new_field_9189.value.trim())))
{} else
{var new_todo_9190 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),todomvc.utils.guid.call(null),new cljs.core.Keyword(null,"title","title",1124275658),new_field_9189.value,new cljs.core.Keyword(null,"completed","completed",3905939901),false], null);om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"todos","todos",1124439135),(function (p1__9188_SHARP_){return cljs.core.conj.call(null,p1__9188_SHARP_,new_todo_9190);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create","create",3956577390),new_todo_9190], null));
new_field_9189.value = "";
}
return false;
} else
{return null;
}
});
todomvc.app.destroy_todo = (function destroy_todo(app,p__9192){var map__9194 = p__9192;var map__9194__$1 = ((cljs.core.seq_QMARK_.call(null,map__9194))?cljs.core.apply.call(null,cljs.core.hash_map,map__9194):map__9194);var id = cljs.core.get.call(null,map__9194__$1,new cljs.core.Keyword(null,"id","id",1013907597));return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"todos","todos",1124439135),(function (todos){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,(function (p1__9191_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__9191_SHARP_),id);
}),todos));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete","delete",3973413149),id], null));
});
todomvc.app.edit_todo = (function edit_todo(app,p__9195){var map__9197 = p__9195;var map__9197__$1 = ((cljs.core.seq_QMARK_.call(null,map__9197))?cljs.core.apply.call(null,cljs.core.hash_map,map__9197):map__9197);var id = cljs.core.get.call(null,map__9197__$1,new cljs.core.Keyword(null,"id","id",1013907597));return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"editing","editing",3420907786),id);
});
todomvc.app.save_todos = (function save_todos(app){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"editing","editing",3420907786),null);
});
todomvc.app.cancel_action = (function cancel_action(app){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"editing","editing",3420907786),null);
});
todomvc.app.clear_completed = (function clear_completed(app){return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"todos","todos",1124439135),(function (todos){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),todos));
}));
});
todomvc.app.handle_event = (function handle_event(type,app,val){var G__9199 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cancel","cancel",3941147116),G__9199))
{return todomvc.app.cancel_action.call(null,app);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"clear","clear",1108650431),G__9199))
{return todomvc.app.clear_completed.call(null,app);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"save","save",1017427183),G__9199))
{return todomvc.app.save_todos.call(null,app);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",1017012604),G__9199))
{return todomvc.app.edit_todo.call(null,app,val);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"destroy","destroy",2571277164),G__9199))
{return todomvc.app.destroy_todo.call(null,app,val);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
});
todomvc.app.render_start = null;
todomvc.app.todo_app = (function todo_app(p__9201,owner){var map__9239 = p__9201;var map__9239__$1 = ((cljs.core.seq_QMARK_.call(null,map__9239))?cljs.core.apply.call(null,cljs.core.hash_map,map__9239):map__9239);var app = map__9239__$1;var todos = cljs.core.get.call(null,map__9239__$1,new cljs.core.Keyword(null,"todos","todos",1124439135));if(typeof todomvc.app.t9240 !== 'undefined')
{} else
{
/**
* @constructor
*/
todomvc.app.t9240 = (function (todos,app,map__9239,owner,p__9201,todo_app,meta9241){
this.todos = todos;
this.app = app;
this.map__9239 = map__9239;
this.owner = owner;
this.p__9201 = p__9201;
this.todo_app = todo_app;
this.meta9241 = meta9241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todomvc.app.t9240.cljs$lang$type = true;
todomvc.app.t9240.cljs$lang$ctorStr = "todomvc.app/t9240";
todomvc.app.t9240.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"todomvc.app/t9240");
});
todomvc.app.t9240.prototype.om$core$IRenderState$ = true;
todomvc.app.t9240.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9243){var self__ = this;
var map__9244 = p__9243;var map__9244__$1 = ((cljs.core.seq_QMARK_.call(null,map__9244))?cljs.core.apply.call(null,cljs.core.hash_map,map__9244):map__9244);var comm = cljs.core.get.call(null,map__9244__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var ___$1 = this;var active = cljs.core.count.call(null,cljs.core.remove.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),self__.todos));var completed = (cljs.core.count.call(null,self__.todos) - active);return React.DOM.div(null,React.DOM.header({"id": "header"},React.DOM.h1(null,"todos"),om.dom.input.call(null,{"onKeyDown": (function (p1__9200_SHARP_){return todomvc.app.handle_new_todo_keydown.call(null,p1__9200_SHARP_,self__.app,self__.owner);
}), "placeholder": "What needs to be done?", "id": "new-todo", "ref": "newField"}),todomvc.app.main.call(null,self__.app,comm),todomvc.app.footer.call(null,self__.app,active,completed,comm)));
});
todomvc.app.t9240.prototype.om$core$IDidUpdate$ = true;
todomvc.app.t9240.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;todomvc.utils.store.call(null,"todos",self__.todos);
var ms = (todomvc.utils.now.call(null).valueOf() - todomvc.app.render_start.valueOf());return document.getElementById("message").innerHTML = [cljs.core.str(ms),cljs.core.str("ms")].join('');
});
todomvc.app.t9240.prototype.om$core$IWillUpdate$ = true;
todomvc.app.t9240.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return todomvc.app.render_start = todomvc.utils.now.call(null);
});
todomvc.app.t9240.prototype.om$core$IWillMount$ = true;
todomvc.app.t9240.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var comm = cljs.core.async.chan.call(null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"comm","comm",1016963710),comm);
var c__6816__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6817__auto__ = (function (){var switch__6746__auto__ = (function (state_9260){var state_val_9261 = (state_9260[1]);if((state_val_9261 === 7))
{var inst_9249 = (state_9260[2]);var inst_9250 = cljs.core.nth.call(null,inst_9249,0,null);var inst_9251 = cljs.core.nth.call(null,inst_9249,1,null);var inst_9252 = todomvc.app.handle_event.call(null,inst_9250,self__.app,inst_9251);var state_9260__$1 = (function (){var statearr_9262 = state_9260;(statearr_9262[7] = inst_9252);
return statearr_9262;
})();var statearr_9263_9276 = state_9260__$1;(statearr_9263_9276[2] = null);
(statearr_9263_9276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9261 === 6))
{var inst_9256 = (state_9260[2]);var state_9260__$1 = state_9260;var statearr_9264_9277 = state_9260__$1;(statearr_9264_9277[2] = inst_9256);
(statearr_9264_9277[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9261 === 5))
{var state_9260__$1 = state_9260;var statearr_9265_9278 = state_9260__$1;(statearr_9265_9278[2] = null);
(statearr_9265_9278[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9261 === 4))
{var state_9260__$1 = state_9260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9260__$1,7,comm);
} else
{if((state_val_9261 === 3))
{var inst_9258 = (state_9260[2]);var state_9260__$1 = state_9260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9260__$1,inst_9258);
} else
{if((state_val_9261 === 2))
{var state_9260__$1 = state_9260;if(true)
{var statearr_9266_9279 = state_9260__$1;(statearr_9266_9279[1] = 4);
} else
{var statearr_9267_9280 = state_9260__$1;(statearr_9267_9280[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9261 === 1))
{var state_9260__$1 = state_9260;var statearr_9268_9281 = state_9260__$1;(statearr_9268_9281[2] = null);
(statearr_9268_9281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6746__auto__){
return (function() {
var state_machine__6747__auto__ = null;
var state_machine__6747__auto____0 = (function (){var statearr_9272 = [null,null,null,null,null,null,null,null];(statearr_9272[0] = state_machine__6747__auto__);
(statearr_9272[1] = 1);
return statearr_9272;
});
var state_machine__6747__auto____1 = (function (state_9260){while(true){
var ret_value__6748__auto__ = (function (){try{while(true){
var result__6749__auto__ = switch__6746__auto__.call(null,state_9260);if(cljs.core.keyword_identical_QMARK_.call(null,result__6749__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6749__auto__;
}
break;
}
}catch (e9273){if((e9273 instanceof Object))
{var ex__6750__auto__ = e9273;var statearr_9274_9282 = state_9260;(statearr_9274_9282[5] = ex__6750__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9273;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6748__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9283 = state_9260;
state_9260 = G__9283;
continue;
}
} else
{return ret_value__6748__auto__;
}
break;
}
});
state_machine__6747__auto__ = function(state_9260){
switch(arguments.length){
case 0:
return state_machine__6747__auto____0.call(this);
case 1:
return state_machine__6747__auto____1.call(this,state_9260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6747__auto____0;
state_machine__6747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6747__auto____1;
return state_machine__6747__auto__;
})()
;})(switch__6746__auto__))
})();var state__6818__auto__ = (function (){var statearr_9275 = f__6817__auto__.call(null);(statearr_9275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6816__auto__);
return statearr_9275;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6818__auto__);
}));
return c__6816__auto__;
});
todomvc.app.t9240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9242){var self__ = this;
var _9242__$1 = this;return self__.meta9241;
});
todomvc.app.t9240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9242,meta9241__$1){var self__ = this;
var _9242__$1 = this;return (new todomvc.app.t9240(self__.todos,self__.app,self__.map__9239,self__.owner,self__.p__9201,self__.todo_app,meta9241__$1));
});
todomvc.app.__GT_t9240 = (function __GT_t9240(todos__$1,app__$1,map__9239__$2,owner__$1,p__9201__$1,todo_app__$1,meta9241){return (new todomvc.app.t9240(todos__$1,app__$1,map__9239__$2,owner__$1,p__9201__$1,todo_app__$1,meta9241));
});
}
return (new todomvc.app.t9240(todos,app,map__9239__$1,owner,p__9201,todo_app,null));
});
om.core.root.call(null,todomvc.app.todo_app,todomvc.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("todoapp")], null));
om.dom.render.call(null,React.DOM.div(null,React.DOM.p(null,"Double-click to edit a todo"),React.DOM.p(null,React.DOM.a({"href": "http://github.com/swannodette"})),React.DOM.p(null,["Part of",React.DOM.a({"href": "http://todomvc.com"},"TodoMVC")])),document.getElementById("info"));
(window["benchmark1"] = (function (e){var n__4291__auto__ = 200;var _ = 0;while(true){
if((_ < n__4291__auto__))
{cljs.core.swap_BANG_.call(null,todomvc.app.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",1124439135)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),todomvc.utils.guid.call(null),new cljs.core.Keyword(null,"title","title",1124275658),"foo",new cljs.core.Keyword(null,"completed","completed",3905939901),false], null));
{
var G__9284 = (_ + 1);
_ = G__9284;
continue;
}
} else
{return null;
}
break;
}
}));
(window["benchmark2"] = (function (e){var n__4291__auto___9286 = 200;var __9287 = 0;while(true){
if((__9287 < n__4291__auto___9286))
{cljs.core.swap_BANG_.call(null,todomvc.app.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",1124439135)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),todomvc.utils.guid.call(null),new cljs.core.Keyword(null,"title","title",1124275658),"foo",new cljs.core.Keyword(null,"completed","completed",3905939901),false], null));
{
var G__9288 = (__9287 + 1);
__9287 = G__9288;
continue;
}
} else
{}
break;
}
var n__4291__auto___9289 = 5;var __9290 = 0;while(true){
if((__9290 < n__4291__auto___9289))
{cljs.core.swap_BANG_.call(null,todomvc.app.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",1124439135)], null),((function (__9290){
return (function (todos){return cljs.core.map.call(null,((function (__9290){
return (function (p1__9285_SHARP_){return cljs.core.assoc_in.call(null,p1__9285_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"completed","completed",3905939901)], null),cljs.core.not);
});})(__9290))
,todos);
});})(__9290))
);
{
var G__9291 = (__9290 + 1);
__9290 = G__9291;
continue;
}
} else
{}
break;
}
return cljs.core.swap_BANG_.call(null,todomvc.app.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",1124439135)], null),(function (todos){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),todos));
}));
}));

//# sourceMappingURL=app.js.map