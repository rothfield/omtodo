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
cljs.core.enable_console_print_BANG_();
todomvc.app.ENTER_KEY = 13;
todomvc.app.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,cljs.core.constant$keyword$126,cljs.core.constant$keyword$125,cljs.core.PersistentVector.EMPTY], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/",(function (params__9155__auto__){var map__12218 = params__9155__auto__;var map__12218__$1 = ((cljs.core.seq_QMARK_(map__12218))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12218):map__12218);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todomvc.app.app_state,cljs.core.assoc,cljs.core.constant$keyword$124,cljs.core.constant$keyword$126);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/:filter",(function (params__9155__auto__){var map__12219 = params__9155__auto__;var map__12219__$1 = ((cljs.core.seq_QMARK_(map__12219))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12219):map__12219);var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12219__$1,cljs.core.constant$keyword$127);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todomvc.app.app_state,cljs.core.assoc,cljs.core.constant$keyword$124,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(filter));
}));
todomvc.app.history = (new goog.History());
goog.events.listen(todomvc.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_(e.token);
}));
todomvc.app.history.setEnabled(true);
todomvc.app.visible_QMARK_ = (function visible_QMARK_(todo,filter){var G__12221 = filter;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,G__12221))
{return cljs.core.constant$keyword$121.cljs$core$IFn$_invoke$arity$1(todo);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$128,G__12221))
{return cljs.core.not(cljs.core.constant$keyword$121.cljs$core$IFn$_invoke$arity$1(todo));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$126,G__12221))
{return true;
} else
{if(cljs.core.constant$keyword$72)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(filter)].join('')));
} else
{return null;
}
}
}
}
});
todomvc.app.main = (function main(p__12223,comm){var map__12226 = p__12223;var map__12226__$1 = ((cljs.core.seq_QMARK_(map__12226))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12226):map__12226);var app = map__12226__$1;var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12226__$1,cljs.core.constant$keyword$122);var showing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12226__$1,cljs.core.constant$keyword$124);var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12226__$1,cljs.core.constant$keyword$125);return React.DOM.section({"style": todomvc.utils.hidden(cljs.core.empty_QMARK_(todos)), "id": "main"},(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"checked": cljs.core.every_QMARK_(cljs.core.constant$keyword$121,todos), "onChange": (function (p1__12222_SHARP_){return (todomvc.app.toggle_all.cljs$core$IFn$_invoke$arity$2 ? todomvc.app.toggle_all.cljs$core$IFn$_invoke$arity$2(p1__12222_SHARP_,app) : todomvc.app.toggle_all.call(null,p1__12222_SHARP_,app));
}), "type": "checkbox", "id": "toggle-all"}) : om.dom.input.call(null,{"checked": cljs.core.every_QMARK_(cljs.core.constant$keyword$121,todos), "onChange": (function (p1__12222_SHARP_){return (todomvc.app.toggle_all.cljs$core$IFn$_invoke$arity$2 ? todomvc.app.toggle_all.cljs$core$IFn$_invoke$arity$2(p1__12222_SHARP_,app) : todomvc.app.toggle_all.call(null,p1__12222_SHARP_,app));
}), "type": "checkbox", "id": "toggle-all"})),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{"id": "todo-list"},om.core.build_all.cljs$core$IFn$_invoke$arity$3(todomvc.item.todo_item,todos,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$88,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$120,comm], null),cljs.core.constant$keyword$92,cljs.core.constant$keyword$129,cljs.core.constant$keyword$95,(function (todo){var G__12227 = todo;var G__12227__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(todo),editing))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12227,cljs.core.constant$keyword$122,true):G__12227);var G__12227__$2 = ((cljs.core.not(todomvc.app.visible_QMARK_(todo,showing)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12227__$1,cljs.core.constant$keyword$123,true):G__12227__$1);return G__12227__$2;
})], null))));
});
todomvc.app.make_clear_button = (function make_clear_button(completed,comm){if((completed > 0))
{return React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,todomvc.utils.now()], null));
}), "id": "clear-completed"},[cljs.core.str("Clear completed ("),cljs.core.str(completed),cljs.core.str(")")].join(''));
} else
{return null;
}
});
todomvc.app.footer = (function footer(app,count,completed,comm){var clear_button = todomvc.app.make_clear_button(completed,comm);var sel = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.zipmap(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,cljs.core.constant$keyword$128,cljs.core.constant$keyword$121], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")),cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(app),"selected");return React.DOM.footer({"style": todomvc.utils.hidden(cljs.core.empty_QMARK_(cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(app))), "id": "footer"},React.DOM.span({"id": "todo-count"},React.DOM.strong(null,count),[cljs.core.str(" "),cljs.core.str(todomvc.utils.pluralize(count,"item")),cljs.core.str(" left")].join('')),React.DOM.ul({"id": "filters"},React.DOM.li(null,React.DOM.a({"className": (sel.cljs$core$IFn$_invoke$arity$1 ? sel.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$126) : sel.call(null,cljs.core.constant$keyword$126)), "href": "#/"},"All")),React.DOM.li(null,React.DOM.a({"className": (sel.cljs$core$IFn$_invoke$arity$1 ? sel.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$128) : sel.call(null,cljs.core.constant$keyword$128)), "href": "#/active"},"Active")),React.DOM.li(null,React.DOM.a({"className": (sel.cljs$core$IFn$_invoke$arity$1 ? sel.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$121) : sel.call(null,cljs.core.constant$keyword$121)), "href": "#/completed"},"Completed"))),clear_button);
});
todomvc.app.toggle_all = (function toggle_all(e,app){var checked = e.target.checked;return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$125,(function (todos){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12228_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12228_SHARP_,cljs.core.constant$keyword$121,checked);
}),todos));
}));
});
todomvc.app.handle_new_todo_keydown = (function handle_new_todo_keydown(e,app,owner){if((e.which === todomvc.app.ENTER_KEY))
{var new_field_12230 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"newField");if(cljs.core.truth_(clojure.string.blank_QMARK_(new_field_12230.value.trim())))
{} else
{var new_todo_12231 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$129,todomvc.utils.guid(),cljs.core.constant$keyword$114,new_field_12230.value,cljs.core.constant$keyword$121,false], null);om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.constant$keyword$125,(function (p1__12229_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__12229_SHARP_,new_todo_12231);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,new_todo_12231], null));
new_field_12230.value = "";
}
return false;
} else
{return null;
}
});
todomvc.app.destroy_todo = (function destroy_todo(app,p__12233){var map__12235 = p__12233;var map__12235__$1 = ((cljs.core.seq_QMARK_(map__12235))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12235):map__12235);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12235__$1,cljs.core.constant$keyword$129);return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.constant$keyword$125,(function (todos){return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.remove((function (p1__12232_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$129.cljs$core$IFn$_invoke$arity$1(p1__12232_SHARP_),id);
}),todos));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,id], null));
});
todomvc.app.edit_todo = (function edit_todo(app,p__12236){var map__12238 = p__12236;var map__12238__$1 = ((cljs.core.seq_QMARK_(map__12238))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12238):map__12238);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12238__$1,cljs.core.constant$keyword$129);return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$122,id);
});
todomvc.app.save_todos = (function save_todos(app){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$122,null);
});
todomvc.app.cancel_action = (function cancel_action(app){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$122,null);
});
todomvc.app.clear_completed = (function clear_completed(app){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$125,(function (todos){return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.remove(cljs.core.constant$keyword$121,todos));
}));
});
todomvc.app.handle_event = (function handle_event(type,app,val){var G__12240 = type;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$119,G__12240))
{return todomvc.app.cancel_action(app);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$130,G__12240))
{return todomvc.app.clear_completed(app);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$115,G__12240))
{return todomvc.app.save_todos(app);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$117,G__12240))
{return todomvc.app.edit_todo(app,val);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$116,G__12240))
{return todomvc.app.destroy_todo(app,val);
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
});
todomvc.app.render_start = null;
todomvc.app.todo_app = (function todo_app(p__12242,owner){var map__12280 = p__12242;var map__12280__$1 = ((cljs.core.seq_QMARK_(map__12280))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12280):map__12280);var app = map__12280__$1;var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12280__$1,cljs.core.constant$keyword$125);if(typeof todomvc.app.t12281 !== 'undefined')
{} else
{
/**
* @constructor
*/
todomvc.app.t12281 = (function (todos,app,map__12280,owner,p__12242,todo_app,meta12282){
this.todos = todos;
this.app = app;
this.map__12280 = map__12280;
this.owner = owner;
this.p__12242 = p__12242;
this.todo_app = todo_app;
this.meta12282 = meta12282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todomvc.app.t12281.cljs$lang$type = true;
todomvc.app.t12281.cljs$lang$ctorStr = "todomvc.app/t12281";
todomvc.app.t12281.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write(writer__4011__auto__,"todomvc.app/t12281");
});
todomvc.app.t12281.prototype.om$core$IRenderState$ = true;
todomvc.app.t12281.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__12284){var self__ = this;
var map__12285 = p__12284;var map__12285__$1 = ((cljs.core.seq_QMARK_(map__12285))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12285):map__12285);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12285__$1,cljs.core.constant$keyword$120);var ___$1 = this;var active = cljs.core.count(cljs.core.remove(cljs.core.constant$keyword$121,self__.todos));var completed = (cljs.core.count(self__.todos) - active);return React.DOM.div(null,React.DOM.header({"id": "header"},React.DOM.h1(null,"todos"),(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onKeyDown": (function (p1__12241_SHARP_){return todomvc.app.handle_new_todo_keydown(p1__12241_SHARP_,self__.app,self__.owner);
}), "placeholder": "What needs to be done?", "id": "new-todo", "ref": "newField"}) : om.dom.input.call(null,{"onKeyDown": (function (p1__12241_SHARP_){return todomvc.app.handle_new_todo_keydown(p1__12241_SHARP_,self__.app,self__.owner);
}), "placeholder": "What needs to be done?", "id": "new-todo", "ref": "newField"})),todomvc.app.main(self__.app,comm),todomvc.app.footer(self__.app,active,completed,comm)));
});
todomvc.app.t12281.prototype.om$core$IDidUpdate$ = true;
todomvc.app.t12281.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;todomvc.utils.store.cljs$core$IFn$_invoke$arity$2("todos",self__.todos);
var ms = (todomvc.utils.now().valueOf() - todomvc.app.render_start.valueOf());return document.getElementById("message").innerHTML = [cljs.core.str(ms),cljs.core.str("ms")].join('');
});
todomvc.app.t12281.prototype.om$core$IWillUpdate$ = true;
todomvc.app.t12281.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return todomvc.app.render_start = todomvc.utils.now();
});
todomvc.app.t12281.prototype.om$core$IWillMount$ = true;
todomvc.app.t12281.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$120,comm);
var c__6816__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6817__auto__ = (function (){var switch__6746__auto__ = (function (state_12301){var state_val_12302 = (state_12301[1]);if((state_val_12302 === 7))
{var inst_12290 = (state_12301[2]);var inst_12291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12290,0,null);var inst_12292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12290,1,null);var inst_12293 = todomvc.app.handle_event(inst_12291,self__.app,inst_12292);var state_12301__$1 = (function (){var statearr_12303 = state_12301;(statearr_12303[7] = inst_12293);
return statearr_12303;
})();var statearr_12304_12317 = state_12301__$1;(statearr_12304_12317[2] = null);
(statearr_12304_12317[1] = 2);
return cljs.core.constant$keyword$99;
} else
{if((state_val_12302 === 6))
{var inst_12297 = (state_12301[2]);var state_12301__$1 = state_12301;var statearr_12305_12318 = state_12301__$1;(statearr_12305_12318[2] = inst_12297);
(statearr_12305_12318[1] = 3);
return cljs.core.constant$keyword$99;
} else
{if((state_val_12302 === 5))
{var state_12301__$1 = state_12301;var statearr_12306_12319 = state_12301__$1;(statearr_12306_12319[2] = null);
(statearr_12306_12319[1] = 6);
return cljs.core.constant$keyword$99;
} else
{if((state_val_12302 === 4))
{var state_12301__$1 = state_12301;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12301__$1,7,comm);
} else
{if((state_val_12302 === 3))
{var inst_12299 = (state_12301[2]);var state_12301__$1 = state_12301;return cljs.core.async.impl.ioc_helpers.return_chan(state_12301__$1,inst_12299);
} else
{if((state_val_12302 === 2))
{var state_12301__$1 = state_12301;if(true)
{var statearr_12307_12320 = state_12301__$1;(statearr_12307_12320[1] = 4);
} else
{var statearr_12308_12321 = state_12301__$1;(statearr_12308_12321[1] = 5);
}
return cljs.core.constant$keyword$99;
} else
{if((state_val_12302 === 1))
{var state_12301__$1 = state_12301;var statearr_12309_12322 = state_12301__$1;(statearr_12309_12322[2] = null);
(statearr_12309_12322[1] = 2);
return cljs.core.constant$keyword$99;
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
var state_machine__6747__auto____0 = (function (){var statearr_12313 = [null,null,null,null,null,null,null,null];(statearr_12313[0] = state_machine__6747__auto__);
(statearr_12313[1] = 1);
return statearr_12313;
});
var state_machine__6747__auto____1 = (function (state_12301){while(true){
var ret_value__6748__auto__ = (function (){try{while(true){
var result__6749__auto__ = switch__6746__auto__(state_12301);if(cljs.core.keyword_identical_QMARK_(result__6749__auto__,cljs.core.constant$keyword$99))
{{
continue;
}
} else
{return result__6749__auto__;
}
break;
}
}catch (e12314){if((e12314 instanceof Object))
{var ex__6750__auto__ = e12314;var statearr_12315_12323 = state_12301;(statearr_12315_12323[5] = ex__6750__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12301);
return cljs.core.constant$keyword$99;
} else
{if(cljs.core.constant$keyword$72)
{throw e12314;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6748__auto__,cljs.core.constant$keyword$99))
{{
var G__12324 = state_12301;
state_12301 = G__12324;
continue;
}
} else
{return ret_value__6748__auto__;
}
break;
}
});
state_machine__6747__auto__ = function(state_12301){
switch(arguments.length){
case 0:
return state_machine__6747__auto____0.call(this);
case 1:
return state_machine__6747__auto____1.call(this,state_12301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6747__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6747__auto____0;
state_machine__6747__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6747__auto____1;
return state_machine__6747__auto__;
})()
;})(switch__6746__auto__))
})();var state__6818__auto__ = (function (){var statearr_12316 = (f__6817__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6817__auto__.cljs$core$IFn$_invoke$arity$0() : f__6817__auto__.call(null));(statearr_12316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6816__auto__);
return statearr_12316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6818__auto__);
}));
return c__6816__auto__;
});
todomvc.app.t12281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12283){var self__ = this;
var _12283__$1 = this;return self__.meta12282;
});
todomvc.app.t12281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12283,meta12282__$1){var self__ = this;
var _12283__$1 = this;return (new todomvc.app.t12281(self__.todos,self__.app,self__.map__12280,self__.owner,self__.p__12242,self__.todo_app,meta12282__$1));
});
todomvc.app.__GT_t12281 = (function __GT_t12281(todos__$1,app__$1,map__12280__$2,owner__$1,p__12242__$1,todo_app__$1,meta12282){return (new todomvc.app.t12281(todos__$1,app__$1,map__12280__$2,owner__$1,p__12242__$1,todo_app__$1,meta12282));
});
}
return (new todomvc.app.t12281(todos,app,map__12280__$1,owner,p__12242,todo_app,null));
});
om.core.root(todomvc.app.todo_app,todomvc.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$97,document.getElementById("todoapp")], null));
om.dom.render(React.DOM.div(null,React.DOM.p(null,"Double-click to edit a todo"),React.DOM.p(null,React.DOM.a({"href": "http://github.com/swannodette"})),React.DOM.p(null,["Part of",React.DOM.a({"href": "http://todomvc.com"},"TodoMVC")])),document.getElementById("info"));
(window["benchmark1"] = (function (e){var n__4291__auto__ = 200;var _ = 0;while(true){
if((_ < n__4291__auto__))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todomvc.app.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125], null),cljs.core.conj,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$129,todomvc.utils.guid(),cljs.core.constant$keyword$114,"foo",cljs.core.constant$keyword$121,false], null)], 0));
{
var G__12325 = (_ + 1);
_ = G__12325;
continue;
}
} else
{return null;
}
break;
}
}));
(window["benchmark2"] = (function (e){var n__4291__auto___12327 = 200;var __12328 = 0;while(true){
if((__12328 < n__4291__auto___12327))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todomvc.app.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125], null),cljs.core.conj,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$129,todomvc.utils.guid(),cljs.core.constant$keyword$114,"foo",cljs.core.constant$keyword$121,false], null)], 0));
{
var G__12329 = (__12328 + 1);
__12328 = G__12329;
continue;
}
} else
{}
break;
}
var n__4291__auto___12330 = 5;var __12331 = 0;while(true){
if((__12331 < n__4291__auto___12330))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todomvc.app.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125], null),((function (__12331){
return (function (todos){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (__12331){
return (function (p1__12326_SHARP_){return cljs.core.assoc_in(p1__12326_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121], null),cljs.core.not);
});})(__12331))
,todos);
});})(__12331))
);
{
var G__12332 = (__12331 + 1);
__12331 = G__12332;
continue;
}
} else
{}
break;
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todomvc.app.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125], null),(function (todos){return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.remove(cljs.core.constant$keyword$121,todos));
}));
}));
