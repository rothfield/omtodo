// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.utils');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('cljs.reader');
goog.require('cljs.reader');
todomvc.utils.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
todomvc.utils.now = (function now(){return (new Date());
});
todomvc.utils.pluralize = (function pluralize(n,word){if((n === 1))
{return word;
} else
{return [cljs.core.str(word),cljs.core.str("s")].join('');
}
});
todomvc.utils.store = (function() {
var store = null;
var store__1 = (function (ns){return store.call(null,ns,null);
});
var store__2 = (function (ns,edn){if(!((edn == null)))
{return localStorage.setItem(ns,[cljs.core.str(edn)].join(''));
} else
{var s = localStorage.getItem(ns);if(!((s == null)))
{return cljs.reader.read_string.call(null,s);
} else
{return cljs.core.PersistentVector.EMPTY;
}
}
});
store = function(ns,edn){
switch(arguments.length){
case 1:
return store__1.call(this,ns);
case 2:
return store__2.call(this,ns,edn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
store.cljs$core$IFn$_invoke$arity$1 = store__1;
store.cljs$core$IFn$_invoke$arity$2 = store__2;
return store;
})()
;
todomvc.utils.hidden = (function hidden(is_hidden){if(is_hidden)
{return {"display": "none"};
} else
{return {};
}
});

//# sourceMappingURL=utils.js.map