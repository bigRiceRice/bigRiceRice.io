(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{378:function(t,e,a){"use strict";a.r(e);var v=a(5),_=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"react-生命周期图-旧-v16-4-前"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-生命周期图-旧-v16-4-前"}},[t._v("#")]),t._v(" React 生命周期图（旧）V16.4 前")]),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://sbr-1314368469.cos.ap-guangzhou.myqcloud.com/Images/202301031545400.png",alt:"image-20230103154554327"}}),t._v(" "),e("h2",{attrs:{id:"挂载流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#挂载流程"}},[t._v("#")]),t._v(" 挂载流程")]),t._v(" "),e("h3",{attrs:{id:"constructor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" "),e("em",[t._v("constructor")])]),t._v(" "),e("p",[t._v("参数类型："),e("code",[t._v("constructor(props)")])]),t._v(" "),e("p",[t._v("在 React 组件挂载之前，会调用该构造函数，构造函数中应该在顶层声明 "),e("code",[t._v("super(Props)")]),t._v(" 。")]),t._v(" "),e("p",[t._v("通常，在 React 中，构造函数仅用于以下两种情况：")]),t._v(" "),e("ul",[e("li",[t._v("使用 "),e("code",[t._v("this.state")]),t._v(" 初始化状态")]),t._v(" "),e("li",[t._v("为"),e("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/handling-events.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件处理函数"),e("OutboundLink")],1),t._v("绑定实例")])]),t._v(" "),e("h5",{attrs:{id:"请注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请注意"}},[t._v("#")]),t._v(" 请注意：")]),t._v(" "),e("ul",[e("li",[t._v("不要在构造函数中调用 "),e("code",[t._v("setState()")]),t._v(" 方法，若需要使用内部 state，请直接在构造函数中为 "),e("code",[t._v("this.state")]),t._v(" 赋值初始 "),e("code",[t._v("state")])]),t._v(" "),e("li",[t._v("请避免在构造函数中引入任何副作用或订阅。如遇到此场景，请将对应的操作放置在 "),e("code",[t._v("componentDidMount")]),t._v(" 中。")]),t._v(" "),e("li",[e("strong",[t._v("避免将 props 的值复制给 state！这么做毫无意义")])])]),t._v(" "),e("h3",{attrs:{id:"⭕-componentwillmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⭕-componentwillmount"}},[t._v("#")]),t._v(" ⭕ "),e("s",[e("em",[t._v("componentWillMount")])])]),t._v(" "),e("p",[t._v("该钩子在组件将要挂载时调用（在 V17 后废弃）")]),t._v(" "),e("ul",[e("li",[t._v("可使用 "),e("code",[t._v("UNSAFE_componentWillMount")]),t._v(" 代替。")])]),t._v(" "),e("h3",{attrs:{id:"render"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" "),e("em",[t._v("render")])]),t._v(" "),e("p",[e("code",[t._v("render()")]),t._v(" 方法是类组件中"),e("strong",[t._v("唯一必须实现")]),t._v("的方法，它决定了组件的输出内容，在它调用后才会经过底层渲染。")]),t._v(" "),e("h5",{attrs:{id:"请注意-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请注意-2"}},[t._v("#")]),t._v(" 请注意：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("🟠 "),e("code",[t._v("render")]),t._v(" 函数调用后不会立即执行更新 DOM 和 Refs，它只是决定了应该渲染的内容。")]),t._v(" "),e("ul",[e("li",[t._v("在它之后还会经过一个 "),e("code",[t._v("getSnapshotBeforeUpdata")]),t._v(" 与钩子。")])])]),t._v(" "),e("li",[e("p",[t._v("每次调用 "),e("code",[t._v("setState")]),t._v(" 时都会再次触发 "),e("code",[t._v("render")]),t._v(" 渲染函数。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("render")]),t._v(" 应该是个纯函数。这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("一定不要在")]),t._v(" "),e("code",[t._v("render")]),t._v(" 中调用 "),e("code",[t._v("setState")]),t._v(" ，这将会造成"),e("strong",[t._v("死循环")]),t._v("！！！")])])]),t._v(" "),e("h3",{attrs:{id:"componentdidmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[t._v("#")]),t._v(" "),e("em",[t._v("componentDidMount")])]),t._v(" "),e("p",[t._v("该钩子在组件完成第一次 "),e("code",[t._v("render")]),t._v(" 并插入 DOM 树后调用，即挂载完毕。")]),t._v(" "),e("p",[t._v("这个方法是比较适合添加或执行副作用函数的地方。如果添加了订阅，请不要忘记在 "),e("code",[t._v("componentWillUnmount()")]),t._v(" 里取消订阅")]),t._v(" "),e("h5",{attrs:{id:"请注意-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请注意-3"}},[t._v("#")]),t._v(" 请注意：")]),t._v(" "),e("ul",[e("li",[t._v("若在 "),e("code",[t._v("componentDidMount()")]),t._v(" 里调用 "),e("code",[t._v("setState()")]),t._v("。它将触发"),e("strong",[t._v("额外渲染")]),t._v("，但此渲染会发生在浏览器更新屏幕之前。\n"),e("ul",[e("li",[t._v("请谨慎使用该模式，因为它会导致性能问题。")])])])]),t._v(" "),e("h2",{attrs:{id:"更新流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新流程"}},[t._v("#")]),t._v(" 更新流程")]),t._v(" "),e("h3",{attrs:{id:"⭕-componentwillreceiveprops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⭕-componentwillreceiveprops"}},[t._v("#")]),t._v(" ⭕ "),e("s",[e("em",[t._v("componentWillReceiveProps")])])]),t._v(" "),e("p",[t._v("该钩子只在子组件"),e("strong",[t._v("将要")]),t._v("接收到父组件传递过来的参数后调用。（在 V17 后废弃）")]),t._v(" "),e("h5",{attrs:{id:"请注意-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请注意-4"}},[t._v("#")]),t._v(" 请注意：")]),t._v(" "),e("ul",[e("li",[t._v("父组件第一次传的 Props 不会引起该钩子调用,只有第一次以后的 Render 才会调用")]),t._v(" "),e("li",[t._v("可使用 "),e("code",[t._v("UNSAFE_componentWillReceiveProps")]),t._v(" 代替。")])]),t._v(" "),e("h3",{attrs:{id:"👀-shouldcomponentupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#👀-shouldcomponentupdate"}},[t._v("#")]),t._v(" 👀 "),e("em",[t._v("shouldComponentUpdate")])]),t._v(" "),e("p",[t._v("该钩子决定是否允许更新状态，需要返回布尔值决定是否允许更新状态。")]),t._v(" "),e("p",[t._v("该钩子在 "),e("s",[e("code",[t._v("componentWillReceiveProps")])]),t._v(" 后或 "),e("code",[t._v("setState")]),t._v(" 后执行。")]),t._v(" "),e("h5",{attrs:{id:"请注意-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请注意-5"}},[t._v("#")]),t._v(" 请注意：")]),t._v(" "),e("ul",[e("li",[t._v("当 "),e("code",[t._v("props")]),t._v(" 或 "),e("code",[t._v("state")]),t._v(" 发生变化时，"),e("code",[t._v("shouldComponentUpdate()")]),t._v(" 会在渲染执行之前被调用。")]),t._v(" "),e("li",[t._v("返回值默认为 "),e("code",[t._v("true")]),t._v(" 且"),e("strong",[t._v("首次渲染")]),t._v("或使用 "),e("code",[t._v("forceUpdate()")]),t._v(" 时不会经过该方法。")]),t._v(" "),e("li",[t._v("此方法仅作为**"),e("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/optimizing-performance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("性能优化的方式"),e("OutboundLink")],1),t._v("**而存在。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug。")])]),t._v(" "),e("h3",{attrs:{id:"⭕-componentwillupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⭕-componentwillupdate"}},[t._v("#")]),t._v(" ⭕ "),e("s",[e("em",[t._v("componentWillUpdate")])])]),t._v(" "),e("p",[t._v("该钩子在状态将要更新状态时调用。（在 V17 后废弃）")]),t._v(" "),e("h5",{attrs:{id:"请注意-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请注意-6"}},[t._v("#")]),t._v(" 请注意：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("该钩子只在 "),e("code",[t._v("shouldComponentUpdate")]),t._v(" 后或 "),e("code",[t._v("forceUpdate")]),t._v(" 强制更新状态后调用。")])]),t._v(" "),e("li",[e("p",[t._v("可使用 "),e("code",[t._v("UNSAFE_componentWillUpdate")]),t._v(" 代替。")])])]),t._v(" "),e("h3",{attrs:{id:"componentdidupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate"}},[t._v("#")]),t._v(" "),e("em",[t._v("componentDidUpdate")])]),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://sbr-1314368469.cos.ap-guangzhou.myqcloud.com/Images/202301031916282.png",alt:"code"}}),t._v(" "),e("p",[t._v("该钩子在状态完成更新后被立即调用。首次渲染不会执行此方法。")]),t._v(" "),e("h5",{attrs:{id:"请注意-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请注意-7"}},[t._v("#")]),t._v(" 请注意：")]),t._v(" "),e("ul",[e("li",[t._v("该钩子只在 "),e("code",[t._v("render")]),t._v(" 因 "),e("code",[t._v("setState")]),t._v(" 引起的"),e("strong",[t._v("重新")]),t._v("渲染后调用。")])]),t._v(" "),e("h2",{attrs:{id:"卸载流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载流程"}},[t._v("#")]),t._v(" 卸载流程")]),t._v(" "),e("h3",{attrs:{id:"componentwillunmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[t._v("#")]),t._v(" "),e("em",[t._v("componentWillUnmount")])]),t._v(" "),e("p",[t._v("该钩子在组件将要卸载时调用。")]),t._v(" "),e("h5",{attrs:{id:"请注意-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请注意-8"}},[t._v("#")]),t._v(" 请注意：")]),t._v(" "),e("ul",[e("li",[t._v("并没有 "),e("code",[t._v("componentDidUnmount")]),t._v(" 组件卸载完毕这样的方法！")])]),t._v(" "),e("h2",{attrs:{id:"react-生命周期图-新-v16-4-后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-生命周期图-新-v16-4-后"}},[t._v("#")]),t._v(" React 生命周期图（新）V16.4 后")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://sbr-1314368469.cos.ap-guangzhou.myqcloud.com/Images/202301031535865.png",alt:"image-20230103153540791"}})]),t._v(" "),e("h5",{attrs:{id:"新版的生命周期的变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新版的生命周期的变化"}},[t._v("#")]),t._v(" 新版的生命周期的变化")]),t._v(" "),e("ul",[e("li",[t._v("移除了三个钩子：\n"),e("ul",[e("li",[e("code",[t._v("componentWillMount")])]),t._v(" "),e("li",[e("code",[t._v("componentWillReceiveProps")])]),t._v(" "),e("li",[e("code",[t._v("componentWillUpdate")])])])]),t._v(" "),e("li",[t._v("新增了两个钩子\n"),e("ul",[e("li",[e("code",[t._v("static getDerivedStateFromProps")])]),t._v(" "),e("li",[e("code",[t._v("getSnapshotBeforeUpdata")])])])])]),t._v(" "),e("h2",{attrs:{id:"static-getderivedstatefromprops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#static-getderivedstatefromprops"}},[t._v("#")]),t._v(" "),e("em",[t._v("static getDerivedStateFromProps")])]),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://sbr-1314368469.cos.ap-guangzhou.myqcloud.com/Images/202301031815334.png",alt:"code"}}),t._v(" "),e("p",[e("code",[t._v("getDerivedStateFromProps")]),t._v(" 直译（获取 Props 将其派生至 State），用于设置状态。")]),t._v(" "),e("p",[t._v("该生命周期钩子在 "),e("code",[t._v("constructor")]),t._v(" 调用后与组件更新后立即调用，若声明了该钩子，必须返回对象用于 "),e("code",[t._v("state")]),t._v(" 或 "),e("code",[t._v("null")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("可以使用该钩子将某个状态当作计算属性，即在钩子中根据 props 计算值并返回用作 state")])]),t._v(" "),e("h5",{attrs:{id:"请注意-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请注意-9"}},[t._v("#")]),t._v(" 请注意：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("该钩子必须使用 "),e("code",[t._v("static")]),t._v(" 声明，若返回值，那么必须将 "),e("code",[t._v("state")]),t._v(" 提前初始化。")])]),t._v(" "),e("li",[e("p",[t._v("该钩子的"),e("strong",[t._v("使用场景很特殊")]),t._v("，即 "),e("code",[t._v("state")]),t._v(" 的值"),e("strong",[t._v("在任何时候")]),t._v("都取决于 "),e("code",[t._v("props")]),t._v("。")]),t._v(" "),e("ul",[e("li",[t._v("所以声明了钩子并返回了值，那么 "),e("code",[t._v("state")]),t._v(" 将一直是该值且再也不会改变，因为更新后的第一个执行的钩子就是它。")])])]),t._v(" "),e("li",[e("p",[t._v("派生状态会导致代码冗余，并使组件难以维护！")])]),t._v(" "),e("li",[e("p",[t._v("每次渲染前触发此方法！")])])]),t._v(" "),e("h2",{attrs:{id:"getsnapshotbeforeupdata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdata"}},[t._v("#")]),t._v(" "),e("em",[t._v("getSnapshotBeforeUpdata")])]),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://sbr-1314368469.cos.ap-guangzhou.myqcloud.com/Images/202301031816436.png",alt:"code"}}),t._v(" "),e("p",[e("code",[t._v("getSnapshotBeforeUpdata")]),t._v(" 钩子在最近一次渲染输出（提交到 DOM 节点）之前调用。")]),t._v(" "),e("p",[t._v("它的作用是在发生更改之前从 DOM 中记录一些将要不存在的旧数据（例如，滚动位置）后交给 "),e("code",[t._v("componentDidUpdate")]),t._v(" 在更新后做处理。")]),t._v(" "),e("h5",{attrs:{id:"请注意-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请注意-10"}},[t._v("#")]),t._v(" 请注意：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("该钩子"),e("strong",[t._v("必须存在返回值")]),t._v("，它的返回值会作为 "),e("code",[t._v("componentDidUpdate")]),t._v(" 的第三个参数。")])]),t._v(" "),e("li",[e("p",[t._v("此用法并不常见，但它可能出现在 UI 处理中，如需要以特殊方式处理滚动位置的聊天线程等。")])])]),t._v(" "),e("h4",{attrs:{id:"例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),e("p",[t._v("我们可以通过一个例子来看一下 "),e("code",[t._v("getSnapshotBeforeUpdata")]),t._v(" 的使用场景。")]),t._v(" "),e("p",[t._v("在这里例子中，创建了一个窗口，每半秒都有新的朋友圈增加，将之前的挤下去：")]),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://sbr-1314368469.cos.ap-guangzhou.myqcloud.com/Images/202301031957364.png",alt:"code"}}),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://sbr-1314368469.cos.ap-guangzhou.myqcloud.com/Images/202301032007671.gif",alt:"demo"}}),t._v(" "),e("p",[t._v("现在我们将引入一个需求：当滚动条出现后，新增的朋友圈不能将已经存在朋友圈的挤下去，而是在最下方。")]),t._v(" "),e("p",[t._v("再不改变代码逻辑的前提下，要完成这个需求只能在滚动条上找机会，那么我们就可以使用 "),e("code",[t._v("getSnapshotBeforeUpdata")]),t._v(" 保存修改前的滚动条高度并返回，这样更新后就能拿到更新前的高度做处理了:")]),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://sbr-1314368469.cos.ap-guangzhou.myqcloud.com/Images/202301032006912.png",alt:"code"}}),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://sbr-1314368469.cos.ap-guangzhou.myqcloud.com/Images/202301032008357.gif",alt:"demo"}}),t._v(" "),e("p",[t._v("当然还有更简单的方法，完全不需要用到 "),e("code",[t._v("getSnapshotBeforeUpdata")]),t._v("，那就是在更新后对 "),e("code",[t._v("lists")]),t._v(" 元素使用 "),e("code",[t._v("scrollBy")]),t._v(" 就好了：")]),t._v(" "),e("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://sbr-1314368469.cos.ap-guangzhou.myqcloud.com/Images/202301032012638.png",alt:"code"}})])}),[],!1,null,null,null);e.default=_.exports}}]);