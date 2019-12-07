(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{27:function(t,e,o){t.exports=o(40)},32:function(t,e,o){},39:function(t,e,o){},40:function(t,e,o){"use strict";o.r(e);var n=o(0),i=o.n(n),a=o(13),c=o.n(a),r=(o(32),o(8)),l=o(1),s=o(2),d=o(4),u=o(3),p=o(6),f=o(5),h=o(19),m=o(9),b="SET_FILTER",v="SET_TODOS",O="ADD_TODO",T="REMOVE_TODO",g="SHOW_NOTIFICATION",j="HIDE_NOTIFICATION";function y(t){return function(e){var o;e({type:O,todo:t}),e((o="Eklendi",function(t){t({type:g,text:o}),setTimeout((function(){t({type:j})}),2e3)}))}}function k(){var t=Object(h.a)(["\n    background: red;\n    position: relative;\n    > span {\n        position: absolute;\n    } \n"]);return k=function(){return t},t}var E=o(21).a.div(k());var S=Object(m.b)(null,(function(t){return{removeTodo:function(e){t(function(t){return{type:T,id:t}}(e))}}}))((function(t){var e=t.content,o=t.id,n="todo-item";return t.checked&&(n+=" checked"),i.a.createElement(E,{className:n,onClick:function(){t.onCheckedToggle(o)}},e,i.a.createElement("span",{className:"remove-todo",onClick:function(e){e.stopPropagation(),t.removeTodo(o)}},"X"))})),w=function(t){function e(t){return Object(l.a)(this,e),Object(d.a)(this,Object(u.a)(e).call(this,t))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"todo-list"},i.a.createElement("h3",null,this.props.title," ",i.a.createElement("span",null,this.props.todos.length)),this.props.todos.map((function(e){return i.a.createElement(S,Object.assign({},e,{key:e.id,onCheckedToggle:t.props.onCheckedToggle}))})))}}]),e}(i.a.Component);w.defaultProps={title:"Ba\u015fl\u0131k"};var C=w,I=function(t){function e(t){var o;return Object(l.a)(this,e),(o=Object(d.a)(this,Object(u.a)(e).call(this,t))).state={inputVal:""},o.changeInput=o.changeInput.bind(Object(p.a)(o)),o.addTodo=o.addTodo.bind(Object(p.a)(o)),o}return Object(f.a)(e,t),Object(s.a)(e,[{key:"changeInput",value:function(t){var e=t.target.value;this.setState({inputVal:e})}},{key:"addTodo",value:function(t){t.preventDefault(),this.props.onTodoAdd(this.state.inputVal),this.setState({inputVal:""})}},{key:"render",value:function(){this.props.onAdd;return i.a.createElement("form",{onSubmit:this.addTodo},i.a.createElement("input",{type:"text",value:this.state.inputVal,onChange:this.changeInput}),i.a.createElement("button",null,"Ekle"))}}]),e}(i.a.Component),N=function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("button",{className:"remove-all",onClick:function(){t.props.onRemoveAll()}},"T\xfcm\xfcn\xfc Sil")}}]),e}(i.a.Component),x=(o(39),[{label:"Hepsi",labelKey:"all"},{label:"Tamamlanm\u0131\u015f",labelKey:"completed"},{label:"Tamamlanmam\u0131\u015f",labelKey:"uncompleted"}]),A=function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return console.log(this.props),i.a.createElement("div",null,x.map((function(e){return i.a.createElement("div",{onClick:function(){t.props.changeFilter(e.labelKey)}},e.label)})))}}]),e}(n.Component),F=Object(m.b)((function(t){return{activeFilter:t.activeFilter}}),(function(t){return{changeFilter:function(e){t(function(t){return{type:b,activeFilter:t}}(e))}}}))(A),V=function(t){function e(t){var o;return Object(l.a)(this,e),(o=Object(d.a)(this,Object(u.a)(e).call(this,t))).filterTodos=function(t,e){return"all"===e?t:"completed"===e?t.filter((function(t){return t.checked})):t.filter((function(t){return!t.checked}))},o.addTodo=o.addTodo.bind(Object(p.a)(o)),o.removeAllTodos=o.removeAllTodos.bind(Object(p.a)(o)),o.toggleCompleteStatus=o.toggleCompleteStatus.bind(Object(p.a)(o)),o}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){console.log("G\xdcncel proplar",this.props);var t=window.localStorage.getItem("todos");t&&(t=JSON.parse(t)),this.props.addTodos(t||[])}},{key:"componentDidUpdate",value:function(t,e,o){JSON.stringify(t.todos)!==JSON.stringify(this.props.todos)&&window.localStorage.setItem("todos",JSON.stringify(this.props.todos))}},{key:"addTodo",value:function(t){this.props.addTodo({content:t,id:Math.random(),checked:!1})}},{key:"removeAllTodos",value:function(){this.setState({todos:[]},(function(){window.localStorage.removeItem("todos")}))}},{key:"toggleCompleteStatus",value:function(t){var e=this,o=this.state.todos.map((function(e){if(t===e.id){var o=Object(r.a)({},e);return o.checked=!o.checked,o}return e}));this.setState({todos:o},(function(){window.localStorage.setItem("todos",JSON.stringify(e.state.todos))}))}},{key:"render",value:function(){return console.log("App props",this.props),i.a.createElement("div",{className:"App",id:"todo"},this.props.notificationVisibility&&i.a.createElement("div",{style:{background:"black",color:"white",padding:"15px",fontSize:"20px"}},this.props.notificationText),i.a.createElement("div",{className:"todo-list todo-list-add"},i.a.createElement("h3",null,"Todo Ekle / Sil"),i.a.createElement("div",null,i.a.createElement(I,{onTodoAdd:this.addTodo}),i.a.createElement(N,{onRemoveAll:this.removeAllTodos}),i.a.createElement(F,null))),i.a.createElement(C,{todos:this.filterTodos(this.props.todos,this.props.activeFilter),onCheckedToggle:this.toggleCompleteStatus}))}}]),e}(n.Component),D=Object(m.b)((function(t){return{activeFilter:t.activeFilter,todos:t.todos,notificationVisibility:t.notificationVisibility,notificationText:t.notificationText}}),(function(t){return{addTodos:function(e){t(function(t){return{type:v,todos:t}}(e))},addTodo:function(e){t(y(e))}}}))(V);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=o(12),_=o(24),K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{activeFilter:"all",todos:[],notificationVisibility:!1,notificationText:""},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(r.a)({},t,{activeFilter:e.activeFilter});case v:return Object(r.a)({},t,{todos:e.todos});case O:return Object(r.a)({},t,{todos:t.todos.concat([e.todo])});case T:var o=t.todos.filter((function(t){return t.id!==e.id}));return Object(r.a)({},t,{todos:o});case g:return Object(r.a)({},t,{notificationVisibility:!0,notificationText:e.text});case j:return Object(r.a)({},t,{notificationVisibility:!1,notificationText:""});default:return t}},R=Object(J.d)(K,Object(J.c)(Object(J.a)(_.a),window.devToolsExtension?window.devToolsExtension():function(t){return t}));c.a.render(i.a.createElement((function(t){return i.a.createElement(m.a,{store:R},i.a.createElement(D,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.9b49c48e.chunk.js.map