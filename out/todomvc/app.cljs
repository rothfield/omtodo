(ns todomvc.app
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [secretary.macros :refer [defroute]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! chan]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [secretary.core :as secretary]
            [todomvc.utils :refer [pluralize now guid store hidden]]
            [clojure.string :as string]
            [todomvc.item :as item])
  (:import [goog History]
           [goog.history EventType]))

(enable-console-print!)

(def ENTER_KEY 13)

(def app-state (atom {:showing :all :todos []}))

;; =============================================================================
;; Routing

(defroute "/" [] (swap! app-state assoc :showing :all))

(defroute "/:filter" [filter] (swap! app-state assoc :showing (keyword filter)))

(def history (History.))

(events/listen history EventType.NAVIGATE
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)

;; =============================================================================
;; Main and Footer Components

(declare toggle-all)

(defn visible? [todo filter]
  (case filter
    :all true
    :active (not (:completed todo))
    :completed (:completed todo)))

(defn main [{:keys [todos showing editing] :as app} comm]
  (dom/section #js {:id "main" :style (hidden (empty? todos))}
    (dom/input
      #js {:id "toggle-all" :type "checkbox"
           :onChange #(toggle-all % app)
           :checked (every? :completed todos)})
    (apply dom/ul #js {:id "todo-list"}
      (om/build-all item/todo-item todos
        {:init-state {:comm comm}
         :key :id
         :fn (fn [todo]
               (cond-> todo
                 (= (:id todo) editing) (assoc :editing true)
                 (not (visible? todo showing)) (assoc :hidden true)))}))))

(defn make-clear-button [completed comm]
  (when (pos? completed)
    (dom/button
      #js {:id "clear-completed"
           :onClick #(put! comm [:clear (now)])}
      (str "Clear completed (" completed ")"))))

(defn footer [app count completed comm]
  (let [clear-button (make-clear-button completed comm)
        sel (-> (zipmap [:all :active :completed] (repeat ""))
                (assoc (:showing app) "selected"))]
    (dom/footer #js {:id "footer" :style (hidden (empty? (:todos app)))}
      (dom/span #js {:id "todo-count"}
        (dom/strong nil count)
        (str " " (pluralize count "item") " left"))
      (dom/ul #js {:id "filters"}
        (dom/li nil (dom/a #js {:href "#/" :className (sel :all)} "All"))
        (dom/li nil (dom/a #js {:href "#/active" :className (sel :active)} "Active"))
        (dom/li nil (dom/a #js {:href "#/completed" :className (sel :completed)} "Completed")))
      clear-button)))

;; =============================================================================
;; Todos

(defn toggle-all [e app]
  (let [checked (.. e -target -checked)]
    (om/transact! app :todos
      (fn [todos] (vec (map #(assoc % :completed checked) todos))))))

(defn handle-new-todo-keydown [e app owner]
  ;; e is the event
  (when (== (.-which e) ENTER_KEY)  ;;
    ; ENTER key pressed
    ;; get-node:
    ;; "A helper function to get at React refs. Given a owning pure node
    ;;   extract the ref specified by name."
    (let [new-field (om/get-node owner "newField")] ;; new-field is the input dom node
                                                    ;;grab the "newField" node via ref name.
      (when-not (string/blank? 
                  (.. new-field -value trim) ;; something like  document.getElementById("new-todo").value.trim()
                  ) ;; 
        ;; Note that (.. new-field -value trim)
        ;; Macroexpands to:   (. (. new-field -value) trim)
        ;;;
         ;;dot-dot (..) - Expands into a member access (.) of the first member on the first
        ;;argument, followed by the next member on the result, etc.

        ;; create new todo object using the current value in the input field.
        (let [new-todo {:id (guid)
                        :title (.-value new-field)  ;; NOTE: doesn't trim
                        :completed false}]
          ;; Now add the new todo to the app state
          ;; "Given a tag, a cursor, an optional list of keys ks, mutate the tree
          ;;  at the path specified by the cursor + the optional keys by applying
          ;;  f to the specified value in the tree. An Om re-render will be
          ;;  triggered."
          (om/transact! 
            app        ;; cursor/app state
            :todos     ;; key to update
            #(conj % new-todo)  ;; function to apply to todos
            [:create new-todo]  ;; what's this?
            )
         ; (om/transact! app :todos  #(conj % new-todo)  [:create new-todo])  ;; what's this?
        (set! (.-value new-field) "")))
      )
    false))

(defn destroy-todo [app {:keys [id]}]
  (om/transact! app :todos
    (fn [todos] (into [] (remove #(= (:id %) id) todos)))
    [:delete id]))

(defn edit-todo [app {:keys [id]}] (om/update! app :editing id))

(defn save-todos [app] (om/update! app :editing nil))

(defn cancel-action [app] (om/update! app :editing nil))

(defn clear-completed [app]
  (om/transact! app :todos
    (fn [todos] (into [] (remove :completed todos)))))

(defn handle-event [type app val]
  (case type
    :destroy (destroy-todo app val)
    :edit    (edit-todo app val)
    :save    (save-todos app)
    :clear   (clear-completed app)
    :cancel  (cancel-action app)
    nil))

(def render-start nil)

;;; reify is a macro with the following structure:
;;;
;;; (reify options* specs*)
;;;
;;; Currently there are no options.
;;;
;;; Each spec consists of the protocol or interface name followed by zero
;;; or more method bodies:
;;;
;;; protocol-or-interface-or-Object
;;; (methodName [args+] body)*
;;;
;;; Methods should be supplied for all methods of the desired
;;; protocol(s) and interface(s). You can also define overrides for
;;; methods of Object. Note that the first parameter must be supplied to
;;; correspond to the target object ('this' in Java parlance). Thus
;;; methods for interfaces will take one more argument than do the
;;; interface declarations. Note also that recur calls to the method
;;; head should *not* pass the target object, it will be supplied
;;; automatically and can not be substituted.
;;;


(defn todo-app [{:keys [todos] :as app}     ;; First argument is wrapped app-state.
                                            ;; todos is (:todos app-state)
                                            ;; Destructure app-state to get value of :todos in the app-state hash
                                            ;; set app-state to app
                owner                       ;; Owning node. Passed in by react
                ]
  
  ;; signature is [root-cursor owning-pure-node]
  ;; The function signature
  ;;  f must return an instance that at a minimum implements IRender or
  ;;  IRenderState (it may implement other React life cycle protocols). f
  ;;  must take at least two arguments, the root cursor and the owning pure
  ;;  node. A cursor is just the original data wrapped in an ICursor
  ;;  instance which maintains path information. Only one root render
  ;;  loop allowed per target element. om.core/root is idempotent, if
  ;; called again on the same target element the previous render loop
  ;; will be replaced.
  "This is the function needed in the om/root call"
  (reify
    om/IWillMount
    ;; WillMount
    ;; Mounting: A component is being inserted into the DOM.
    ;; This is a lifecycle event that occurs just before the component is inserted into the dom
    ;; componentWillMount() is invoked immediately before mounting occurs.
    ;; Create a channel 'comm'. and add it as part of the app's state
    ;; Start a main event loop to handle events
    (will-mount [_]
      (let [comm (chan)]  ;; create a channel !! 
        ;; setState "Takes a pure owning component, a sequential list of keys and value and
        ;;   sets the state of the component. Conceptually analagous to React
        ;;      setState. Will schedule an Om re-render."
        ;;  Here add the channel just created to the state under the key :comm
        (om/set-state! owner :comm comm)
        ;; Main event loop
        (go (while true
              (let [[type value] (<! comm)]          ;; Take an event off the channel. Destructure into type and value
                (handle-event type app value))))))  ;; see handle-event. Note that 

    om/IWillUpdate
    (will-update [_ _ _] (set! render-start (now)))   ;;; I think this is for benchmarking (I think
    om/IDidUpdate
    (did-update [_ _ _]
      (store "todos" todos)
      (let [ms (- (.valueOf (now)) (.valueOf render-start))]
        (set! (.-innerHTML (js/document.getElementById "message")) (str ms "ms"))))
    om/IRenderState ;; Implement the IRenderState protocol.
    ;; A protocol is a named set of named methods and their signatures
    ;; In this case, if you look at the OM source, IRenderState is a protocol
    ;; with one named method, render-state with the signature [this state]
    ;; Here, (render-state[x y] would be required to match the named method
    ;; and its signature as defined in defprotocol
    ;; The original signature is [this state]. 'this' we ignore. Sett the variable
    ;; 'comm' the the value of :comm in state.
    ;;
    ;; User render-state when you need to pass state in, render otherwise. 
    (render-state [_ {:keys [comm]}]   ;; Second argument is the app-state. Extract value of :comm key into variable comm
      (let [active    (count (remove :completed todos))  ;; Calculate active and completed todos
            completed (- (count todos) active)]
        (dom/div nil                            ;; 
          (dom/header #js {:id "header"}
            (dom/h1 nil "todos")
            (dom/input  ;; Input field
              #js {:ref "newField" :id "new-todo"
                   :placeholder "What needs to be done?"
                   :onKeyDown #(handle-new-todo-keydown % app owner)})  ;; see handle-new-todo-keydown
            (main app comm)
            (footer app active completed comm)))))))


;; Create om root component under dom element with id "todoapp"
;; Note that app-state is an atom initialized to a hash
(om/root todo-app app-state
  {:target (.getElementById js/document "todoapp")})


;; Render some html to the dom. Doesn't use om/root so no event loop
;; Adds this under dom element with id "info"
(dom/render
  (dom/div nil
    (dom/p nil "Double-click to edit a todo")
    (dom/p nil
      (dom/a #js {:href "http://github.com/swannodette"}))
    (dom/p nil
      #js ["Part of"
           (dom/a #js {:href "http://todomvc.com"} "TodoMVC")]))
  (.getElementById js/document "info"))

;; =============================================================================
;; Benchmark Stuff

(aset js/window "benchmark1"
  (fn [e]
    (dotimes [_ 200]
      (swap! app-state update-in [:todos] conj
        {:id (guid) :title "foo" :completed false}))))

(aset js/window "benchmark2"
  (fn [e]
    (dotimes [_ 200]
      (swap! app-state update-in [:todos] conj
        {:id (guid) :title "foo" :completed false}))
    (dotimes [_ 5]
      (swap! app-state update-in [:todos]
        (fn [todos]
          (map #(assoc-in % [:completed] not) todos))))
    (swap! app-state update-in [:todos]
      (fn [todos]
        (into [] (remove :completed todos))))))
