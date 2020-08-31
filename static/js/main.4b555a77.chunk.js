(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{110:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(9),c=a.n(i);a(86),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(87);var r,l,s=a(149),u=a(150),d=a(144),f=a(152),m=a(147),O=a(153),b=a(154),T=a(151),E=a(17),v=a(7),k=a(47),j=a(65),p=a.n(j).a.create(Object(v.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"1987806b-8d0e-469f-82d6-5d43ca25447a"}})),g=function(){return p.get("todo-lists")},h=function(t){return p.post("todo-lists",{title:t})},S=function(t){return p.delete("todo-lists/".concat(t))},I=function(t,e){return p.put("todo-lists/".concat(t),{title:e})},C=function(t){return p.get("todo-lists/".concat(t,"/tasks"))},y=function(t,e){return p.delete("todo-lists/".concat(t,"/tasks/").concat(e))},A=function(t,e){return p.post("todo-lists/".concat(t,"/tasks"),{title:e})},D=function(t,e,a){return p.put("todo-lists/".concat(t,"/tasks/").concat(e),a)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(l||(l={}));var L={status:"idle",error:null},w=function(t){return{type:"APP/SET-ERROR",error:t}},N=function(t){return{type:"APP/SET-STATUS",status:t}},P=[],R=a(25),F=function(t,e){t.messages.length?e(w(t.messages[0])):e(w("Some error occurred")),e(N("failed"))},K=function(t,e){e(w(t.message?t.message:"Some error occurred")),e(N("failed"))},x={},H=function(t,e,a){return function(n,o){var i=o().tasks[a].find((function(e){return e.id===t}));if(i){var c=Object(v.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);D(a,t,c).then((function(o){if(0===o.data.resultCode){var i=function(t,e,a){return{type:"UPDATE-TASK",model:e,todolistId:a,taskId:t}}(t,e,a);n(i)}else F(o.data,n)})).catch((function(t){K(t,n)}))}else console.warn("task not found in the state")}},U=a(148),M=a(111),G=a(34),V=a(155),B=a(145),Y=o.a.memo((function(t){var e=t.addItem,a=t.disabled,i=void 0!==a&&a;console.log("AddItemForm called");var c=Object(n.useState)(""),r=Object(G.a)(c,2),l=r[0],s=r[1],u=Object(n.useState)(null),f=Object(G.a)(u,2),m=f[0],O=f[1],b=function(){""!==l.trim()?(e(l),s("")):O("Title is required")};return o.a.createElement("div",null,o.a.createElement(V.a,{variant:"outlined",disabled:i,error:!!m,value:l,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==m&&O(null),13===t.charCode&&b()},label:"Title",helperText:m}),o.a.createElement(d.a,{color:"primary",onClick:b,disabled:i},o.a.createElement(B.a,null)))})),J=a(70),W=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),a=Object(G.a)(e,2),i=a[0],c=a[1],r=Object(n.useState)(t.value),l=Object(G.a)(r,2),s=l[0],u=l[1];return i?o.a.createElement(V.a,{value:s,onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(s)}}):o.a.createElement("span",{onDoubleClick:function(){c(!0),u(t.value)}},t.value)})),q=a(146),$=a(157),z=o.a.memo((function(t){var e=Object(n.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(n.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?r.Completed:r.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return o.a.createElement("div",{key:t.task.id,className:t.task.status===r.Completed?"is-done":""},o.a.createElement($.a,{checked:t.task.status===r.Completed,color:"primary",onChange:a}),o.a.createElement(W,{value:t.task.title,onChange:i}),o.a.createElement(d.a,{onClick:e},o.a.createElement(q.a,null)))})),Q=o.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,i=Object(J.a)(t,["demo"]);console.log("Todolist called");var c=Object(E.b)();Object(n.useEffect)((function(){if(!a){var t,e=(t=i.todolist.id,function(e){e(N("loading")),C(t).then((function(a){var n=a.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(n,t)),e(N("succeeded"))}))});c(e)}}),[]);var l=Object(n.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),s=Object(n.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),u=Object(n.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),f=Object(n.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),O=Object(n.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===r.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===r.Completed}))),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(W,{value:i.todolist.title,onChange:s}),o.a.createElement(d.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus},o.a.createElement(q.a,null))),o.a.createElement(Y,{addItem:l,disabled:"loading"===i.todolist.entityStatus}),o.a.createElement("div",null,b.map((function(t){return o.a.createElement(z,{key:t.id,task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus})}))),o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(m.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:u,color:"default"},"All"),o.a.createElement(m.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:f,color:"primary"},"Active"),o.a.createElement(m.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:O,color:"secondary"},"Completed")))})),X=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(E.c)((function(t){return t.todolists})),c=Object(E.c)((function(t){return t.tasks})),r=Object(E.b)();Object(n.useEffect)((function(){if(!a){var t=function(t){t(N("loading")),g().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(N("succeeded"))}))};r(t)}}),[]);var l=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){y(e,t).then((function(n){var o=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);a(o)}))}}(t,e);r(a)}),[]),s=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){a(N("loading")),A(e,t).then((function(t){if(0===t.data.resultCode){var e=function(t){return{type:"ADD-TASK",task:t}}(t.data.data.item);a(e),a(N("succeeded"))}else F(t.data,a)})).catch((function(t){K(t,a)}))}}(t,e);r(a)}),[]),u=Object(n.useCallback)((function(t,e,a){var n=H(t,{status:e},a);r(n)}),[]),d=Object(n.useCallback)((function(t,e,a){var n=H(t,{title:e},a);r(n)}),[]),f=Object(n.useCallback)((function(t,e){var a={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};r(a)}),[]),m=Object(n.useCallback)((function(t){var e,a=(e=t,function(t){t(N("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),S(e).then((function(a){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(N("succeeded"))}))});r(a)}),[]),O=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){I(t,e).then((function(n){a(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);r(a)}),[]),b=Object(n.useCallback)((function(t){var e=function(t){return function(e){e(N("loading")),h(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(N("succeeded"))}))}}(t);r(e)}),[r]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(U.a,{container:!0,style:{padding:"20px"}},o.a.createElement(Y,{addItem:b})),o.a.createElement(U.a,{container:!0,spacing:3},i.map((function(t){var e=c[t.id];return o.a.createElement(U.a,{item:!0,key:t.id},o.a.createElement(M.a,{style:{padding:"10px"}},o.a.createElement(Q,{todolist:t,tasks:e,removeTask:l,changeFilter:f,addTask:s,changeTaskStatus:u,removeTodolist:m,changeTaskTitle:d,changeTodolistTitle:O,demo:a})))}))))},Z=a(159),_=a(156);function tt(t){return o.a.createElement(_.a,Object.assign({elevation:6,variant:"filled"},t))}function et(){var t=Object(E.c)((function(t){return t.app.error})),e=Object(E.b)(),a=function(t,a){"clickaway"!==a&&e(w(null))},n=null!==t;return o.a.createElement(Z.a,{open:n,autoHideDuration:6e3,onClose:a},o.a.createElement(tt,{onClose:a,severity:"error"},t))}var at=function(t){var e=t.demo,a=void 0!==e&&e,n=Object(E.c)((function(t){return t.app.status}));return o.a.createElement("div",{className:"App"},o.a.createElement(et,null),o.a.createElement(s.a,{position:"static"},o.a.createElement(u.a,null,o.a.createElement(d.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(T.a,null)),o.a.createElement(f.a,{variant:"h6"},"News"),o.a.createElement(m.a,{color:"inherit"},"Login")),"loading"===n&&o.a.createElement(O.a,null)),o.a.createElement(b.a,{fixed:!0},o.a.createElement(X,{demo:a})))},nt=a(31),ot=a(69),it=Object(nt.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(R.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!=e.taskId}))));case"ADD-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(R.a)({},e.task.todoListId,[e.task].concat(Object(k.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(v.a)(Object(v.a)({},t),{},Object(R.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(v.a)(Object(v.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(v.a)(Object(v.a)({},t),{},Object(R.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var a=Object(v.a)({},t);return delete a[e.id],a;case"SET-TODOLISTS":var n=Object(v.a)({},t);return e.todolists.forEach((function(t){n[t.id]=[]})),n;case"SET-TASKS":return Object(v.a)(Object(v.a)({},t),{},Object(R.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!=e.id}));case"ADD-TODOLIST":return[Object(v.a)(Object(v.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(k.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(v.a)(Object(v.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(v.a)(Object(v.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(v.a)(Object(v.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(v.a)(Object(v.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(v.a)(Object(v.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(v.a)(Object(v.a)({},t),{},{error:e.error});default:return Object(v.a)({},t)}}}),ct=Object(nt.d)(it,Object(nt.a)(ot.a));window.store=ct,c.a.render(o.a.createElement(E.a,{store:ct},o.a.createElement(at,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},81:function(t,e,a){t.exports=a(110)},86:function(t,e,a){},87:function(t,e,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.4b555a77.chunk.js.map