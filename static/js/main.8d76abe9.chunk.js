(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(4),a=c.n(i),s=(c(9),c(2)),o=(c(10),c(0));var j=function(e){var t=e.options,c=e.onLeaveFeedback;return t=Object.keys(t),Object(o.jsx)("div",{children:t.map((function(e){return Object(o.jsx)("button",{onClick:c,name:e,children:e},e)}))})};var d=function(e){var t=e.good,c=e.neutral,n=e.bad,r=e.total,i=e.positivePercentage;return Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["Good: ",t]}),Object(o.jsxs)("li",{children:["Neutral: ",c]}),Object(o.jsxs)("li",{children:["Bad: ",n]}),Object(o.jsxs)("li",{children:["Total: ",r]}),Object(o.jsxs)("li",{children:["Positive feedback: ",i,"%"]})]})})};var b=function(e){var t=e.title,c=e.children;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:t}),c]})};var u=function(e){var t=e.message;return Object(o.jsx)("div",{children:t})};function l(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(0),a=Object(s.a)(i,2),l=a[0],h=a[1],O=Object(n.useState)(0),v=Object(s.a)(O,2),x=v[0],f=v[1],k=function(){return c+l+x};return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{title:"Please leave feedback",children:Object(o.jsx)(j,{options:{good:c,neutral:l,bad:x},onLeaveFeedback:function(e){switch(e.currentTarget.name){case"good":r((function(e){return e+1}));break;case"neutral":h((function(e){return e+1}));break;case"bad":f((function(e){return e+1}))}}})}),Object(o.jsx)(b,{title:"Statistics",children:k()>0?Object(o.jsx)(d,{good:c,neutral:l,bad:x,total:k(),positivePercentage:0!==k()?Math.round(c/k()*100):0}):Object(o.jsx)(u,{message:"No feedback given"})})]})}a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.8d76abe9.chunk.js.map