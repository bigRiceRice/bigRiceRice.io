(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{347:function(t,e,a){"use strict";a.r(e);var s=a(5),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("code",[t._v("defineProperty()")]),t._v(" 静态方法会直接在一个对象上定义或修改"),e("strong",[t._v("一个")]),t._v("自身属性，并深度的赋予权限")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descriptor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("ul",[e("li",[e("code",[t._v("obj")]),t._v(" 需要操作的对象")]),t._v(" "),e("li",[e("code",[t._v("prop")]),t._v(" 要定义或修改的属性或一个 "),e("code",[t._v("Symbol")])]),t._v(" "),e("li",[e("code",[t._v("descriptor")]),t._v(" 要定义或修改的属性描述符（对象键值对）")])]),t._v(" "),e("blockquote",[e("p",[t._v("注意")]),t._v(" "),e("p",[t._v("此方法应当直接在 "),e("code",[t._v("Object")]),t._v(" 构造器对象上使用，而不是在任意一个 "),e("code",[t._v("Object")]),t._v(" 的实例上调用")])]),t._v(" "),e("h5",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),e("h2",{attrs:{id:"descriptor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#descriptor"}},[t._v("#")]),t._v(" descriptor")]),t._v(" "),e("p",[e("code",[t._v("descriptor")]),t._v(" 分为数据描述符 / 存取描述符")]),t._v(" "),e("ul",[e("li",[t._v("数据描述符 是一个具有值的属性")]),t._v(" "),e("li",[t._v("存取描述符 是由 "),e("code",[t._v("getter")]),t._v(" 函数和 "),e("code",[t._v("setter")]),t._v(" 函数所描述的属性")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("通用的属性")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("configurable")])]),t._v(" "),e("td",[t._v("定义 "),e("code",[t._v("descriptor")]),t._v(" 是否可以配置，即二次修改（ 默认为 "),e("code",[t._v("false")]),t._v(" ）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("enumerable")])]),t._v(" "),e("td",[t._v("定义属性是否为可枚举属性（ 是否能遍历 ）（ 默认为 "),e("code",[t._v("false")]),t._v(" ）")])])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("数据描述符的属性")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("value")])]),t._v(" "),e("td",[t._v("该属性对应的值，可以是任何有效的 JavaScript 值（数值，对象，函数等）默认为 "),e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("writable")])]),t._v(" "),e("td",[t._v("定义 "),e("code",[t._v("value")]),t._v(" 是否为可写状态（ 默认为 "),e("code",[t._v("false")]),t._v(" ）")])])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("存取描述符的属性")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("get")])]),t._v(" "),e("td",[t._v("给属性提供 "),e("code",[t._v("getter")]),t._v(" ，必须要有 "),e("code",[t._v("return")]),t._v(" 语句，该方法返回值被用作属性值（ 默认为 undefined ）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("set")])]),t._v(" "),e("td",[t._v("给属性提供 "),e("code",[t._v("setter")]),t._v(" ，该方法将接受唯一参数，并将该参数值分配给该 "),e("code",[t._v("get")]),t._v("（ 默认为 undefined ）")])])])]),t._v(" "),e("p",[t._v("要注意的一点是：一个描述符只能是这两者其中之一，使用了 "),e("code",[t._v("value")]),t._v(" / "),e("code",[t._v("writable")]),t._v(" 就不能使用 get / set")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("此方法的返回值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("此方法会影响源对象吗")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("兼容性")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("调用此方法的源对象")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("会")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("🟢")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("示例")])]),t._v(" "),e("p",[t._v("属性的 "),e("code",[t._v("getter")]),t._v(" 与 "),e("code",[t._v("setter")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"谁在用琵琶弹奏一曲东方破~"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nObject"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" newValue "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" newValue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"看不见你的笑，"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"让我怎么睡得着"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 谁在用琵琶弹奏一曲东方破~看不见你的笑，让我怎么睡得着")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);