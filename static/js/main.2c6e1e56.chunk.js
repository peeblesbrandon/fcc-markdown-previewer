(this["webpackJsonpfcc-markdown-previewer"]=this["webpackJsonpfcc-markdown-previewer"]||[]).push([[0],{35:function(e,a,t){e.exports=t(50)},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(18),l=t.n(o),c=(t(40),t(12)),i=t(13),s=t(14),d=t(17),m=t(16),u=(t(41),t(53)),h=t(54),p=t(55),v=t(56),g=(t(42),function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleChange=n.handleChange.bind(Object(s.a)(n)),n}return Object(i.a)(t,[{key:"handleChange",value:function(e){this.props.onMarkdownChange(e.target.value)}},{key:"render",value:function(){var e=this.props.markdownText;return r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement("textarea",{id:"editor",onChange:this.handleChange,value:e,rows:"10",className:"form-control h-80"}))}}]),t}(r.a.Component)),w=(t(43),t(25)),b=t.n(w),k=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){b.a.setOptions({gfm:!0});var e=b()(this.props.markdownText);return console.log(e),r.a.createElement("div",{className:"container-fluid text-break m-0 p-0"},r.a.createElement("td",{id:"preview",dangerouslySetInnerHTML:{__html:e}}))}}]),t}(r.a.Component),f=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={input:"# Welcome to the Markdown Previewer\r\n#### Created by Brandon Peebles\r\n[Here's a link to this app's GitHub repo](https://github.com/peeblesbrandon/fcc-markdown-previewer)\r\n## Enter your GitHub flavored markdown here.\r\n## Then, look at the Previewer bar below to see it converted into HTML and rendered.\n\n`Here's some inline code`\r\n```\nHere's a code block.\r\nIt goes on multiple lines\n\n```\n* We've got list items\r\n* Just like this\n\n> And blockquotes\r\n> Like this\n\n**Last, but not least... we have this floofy dog**\n\n![cute dog](https://img.pixers.pics/pho_wat(s3:700/FO/28/69/47/29/700_FO28694729_8534ba4d363506946e6324a7bf2a0111.jpg,639,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,419,650,jpg)/wall-murals-coton-de-tulear-puppy-4-months-old-standing.jpg.jpg)"},n.handleMarkdownChange=n.handleMarkdownChange.bind(Object(s.a)(n)),n}return Object(i.a)(t,[{key:"handleMarkdownChange",value:function(e){return this.setState({input:e})}},{key:"render",value:function(){return console.log("This is the process.env","/fcc-markdown-previewer"),r.a.createElement("div",{className:"container-fluid m-0 p-0"},r.a.createElement(u.a,{fluid:!0,fixed:"sticky",bg:"dark",variant:"dark"},r.a.createElement(u.a.Brand,null,r.a.createElement("h4",{className:"h4"},"Markdown Previewer"),r.a.createElement("h6",{className:"text-light text-muted"},"Tap below to expand the Editor and get started"))),r.a.createElement(h.a,{defaultActiveKey:"1"},r.a.createElement(p.a,null,r.a.createElement(p.a.Header,{className:"p-0"},r.a.createElement(h.a.Toggle,{as:v.a,variant:"light",eventKey:"0"},r.a.createElement("strong",null,"Editor"))),r.a.createElement(h.a.Collapse,{eventKey:"0"},r.a.createElement(p.a.Body,{className:"p-0 m-0"},r.a.createElement(g,{markdownText:this.state.input,onMarkdownChange:this.handleMarkdownChange}))))),r.a.createElement(h.a,{defaultActiveKey:"0"},r.a.createElement(p.a,null,r.a.createElement(p.a.Header,{className:"p-0 m-0"},r.a.createElement(h.a.Toggle,{as:v.a,variant:"light",eventKey:"0"},r.a.createElement("strong",null,"Previewer"))),r.a.createElement(h.a.Collapse,{eventKey:"0"},r.a.createElement(p.a.Body,null,r.a.createElement(k,{markdownText:this.state.input}))))),r.a.createElement("em",{id:"signature"},"Created by Brandon Peebles - 2020"))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=t(32),y=t(3);t(46);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,{basename:"/fcc-markdown-previewer"},r.a.createElement(y.a,{exact:!0,path:"/",component:f}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.2c6e1e56.chunk.js.map