(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(61)},33:function(e,t,n){},34:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),l=(n(33),n(20)),s=n(21),i=n(26),u=n(22),m=n(27),f=n(2),p=(n(34),n(5)),h=n.n(p),g=n(23),v=n.n(g),d=function(e){var t=e.stocks,n=e.onChange,a=h.a.sortBy(t.map(function(e){return{value:e.symbol,label:e.companyName}}),function(e){return e.label});return o.a.createElement(v.a,{options:a,placeholder:"Select or enter a stock symbol...",formatCreateLabel:function(e){return"Load details for ".concat(e)},onChange:n})},b=function(e){return"https://storage.googleapis.com/iex/api/logos/".concat(e,".png")},k=function(e){var t=e.symbol;return o.a.createElement("img",{alt:"company logo",className:"logo",src:b(t)})},S=function(e){var t=e.details,n=e.errorMessage;if(t){var a=t.symbol,c=t.description,r=t.price;return o.a.createElement("div",null,o.a.createElement(k,{symbol:a}),o.a.createElement("h3",null,"Symbol"),o.a.createElement("p",null,a),o.a.createElement("h3",null,"Current Stock Price"),o.a.createElement("p",null,r," USD"),o.a.createElement("h3",null,"Description"),o.a.createElement("p",null,c))}return o.a.createElement("div",{className:"message"},n||"Select a stock to start.")},y="https://api.iextrading.com/1.0",E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={stocks:[],currentSelectionDetails:void 0,errorMessage:void 0},e.onChangeStockSelection=e.onChangeStockSelection.bind(Object(f.a)(Object(f.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(y,"/stock/market/list/infocus")).then(function(e){return e.json()}).then(function(t){e.setState({stocks:t})})}},{key:"onChangeStockSelection",value:function(e){var t=this;if(e.value){var n=e.value.toUpperCase();(function(e){return fetch("".concat(y,"/stock/").concat(e,"/company")).then(function(e){return e.json()})})(n).then(function(e){(function(e){return fetch("".concat(y,"/stock/").concat(e,"/quote")).then(function(e){return e.json()})})(n).then(function(a){t.setState({currentSelectionDetails:{symbol:n,price:a.latestPrice,description:e.description},errorMessage:null})})}).catch(function(){t.setState({errorMessage:"".concat(n," is not a valid stock symbol."),currentSelectionDetails:null})})}}},{key:"render",value:function(){var e=this.state,t=e.stocks,n=e.currentSelectionDetails,a=e.errorMessage;return o.a.createElement("div",{className:"App"},o.a.createElement(d,{stocks:t,onChange:this.onChangeStockSelection,value:{value:h.a.get(n,"symbol")}}),o.a.createElement(S,{details:n,errorMessage:a}))}}]),t}(a.Component);r.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.5901563d.chunk.js.map