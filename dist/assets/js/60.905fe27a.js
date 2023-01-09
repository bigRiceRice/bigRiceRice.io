(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{365:function(t,s,n){"use strict";n.r(s);var a=n(5),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("code",[t._v("subString()")]),t._v(" 实例方法截取源字符串的一部分")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("startIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("endIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("startIndex")]),t._v(" "),s("strong",[t._v("必需")]),t._v("，指定开始截取字符串的索引位置")]),t._v(" "),s("li",[t._v("若该值为负数，则为 "),s("code",[t._v("0")])]),t._v(" "),s("li",[s("code",[t._v("endIndex")]),t._v(" "),s("strong",[t._v("可选")]),t._v("，指定停止截取字符串的索引位置 （ 默认值为 "),s("code",[t._v("str.length")]),t._v(" ）")]),t._v(" "),s("li",[t._v("若该值为负数，则为 "),s("code",[t._v("0")])])]),t._v(" "),s("blockquote",[s("p",[t._v("注意")])]),t._v(" "),s("ul",[s("li",[t._v("此方法的效果与 "),s("code",[t._v("String.splice")]),t._v(" 一致，但需要注意的是，参数若为 "),s("strong",[t._v("负值")]),t._v(" 将会隐式的变为 "),s("code",[t._v("0")]),t._v(" "),s("ul",[s("li",[t._v("可以理解为 "),s("code",[t._v("String.splice")]),t._v(" 的"),s("strong",[t._v("阉割版")])])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("此方法的返回值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("兼容性")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("截取出来的新字符串")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("🟢")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("示例")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Apple Is My Love"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  ""：提取源字符串，从索引[0]开始，到索引的[0]结束')]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "ple "：提取源字符串，从索引[2]开始，到索引[6]结束（第三个字符到第七个字符之间）')]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "Apple Is My Love"：提取源字符串，从索引[0]开始到末尾结束')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);