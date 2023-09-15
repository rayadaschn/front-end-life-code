const e=JSON.parse('{"key":"v-64848c03","path":"/Framework/React01.html","title":"React 基础语法","lang":"zh-CN","frontmatter":{"title":"React 基础语法","icon":"react","date":"2023-03-20T00:00:00.000Z","category":["框架"],"tag":["React"],"sticky":false},"headers":[{"level":2,"title":"开发依赖","slug":"开发依赖","link":"#开发依赖","children":[]},{"level":2,"title":"Hello World","slug":"hello-world","link":"#hello-world","children":[]},{"level":2,"title":"组件化","slug":"组件化","link":"#组件化","children":[]},{"level":2,"title":"JSX","slug":"jsx","link":"#jsx","children":[{"level":3,"title":"书写规范","slug":"书写规范","link":"#书写规范","children":[]},{"level":3,"title":"注释方式","slug":"注释方式","link":"#注释方式","children":[]},{"level":3,"title":"大括号包裹变量","slug":"大括号包裹变量","link":"#大括号包裹变量","children":[]},{"level":3,"title":"JSX 绑定属性","slug":"jsx-绑定属性","link":"#jsx-绑定属性","children":[]},{"level":3,"title":"JSX 绑定事件","slug":"jsx-绑定事件","link":"#jsx-绑定事件","children":[]},{"level":3,"title":"条件渲染","slug":"条件渲染","link":"#条件渲染","children":[]},{"level":3,"title":"JSX 的本质","slug":"jsx-的本质","link":"#jsx-的本质","children":[]}]}],"git":{"createdTime":1683516320000,"updatedTime":1694739456000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":8.47,"words":2541},"filePathRelative":"Framework/React01.md","localizedDate":"2023年3月20日","excerpt":"<blockquote>\\n<p>今天开始学习 Reac 系列，先从最基本的语法入手。</p>\\n<p>本文的 React18 为基础学习（和早期版本略有不同），参考文档为<a href=\\"https://react.dev/learn\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a>。</p>\\n</blockquote>\\n<h2> 开发依赖</h2>\\n<p>开发 React 必须依赖三个核心库：</p>\\n<ul>\\n<li>react：包含 react 所必须的核心代码，包含 React Web 和 react-native 所共同拥有的代码；</li>\\n<li>react-dom：react 渲染在不同平台所需要的核心代码，针对 web 和 native 所完成的事情不同：\\n<ul>\\n<li>web 端：react-dom 会将 jsx 最终渲染成真实的 DOM，显示在浏览器中；</li>\\n<li>native 端：react-dom 会将 jsx 最终渲染成原生的控件（如 Android 中的 Button，IOS 中的 UIButton）。</li>\\n</ul>\\n</li>\\n<li>babel：将 jsx 转换为 React 代码的转换工具，可以将 ES6 等高级语法转换为大多数浏览器都支持的 ES5 语法。默认情况下，React 开发式不需要 babel 的，但是这时需要我们用 <code>React.createElement</code> 来编写代码，导致代码较为臃肿，且可读性较差。所以为了直接上手 jsx（JavaScript XML 语法），我们借助 babel 来帮助我们将 jsx 代码转换 <code>React.createElement</code>。</li>\\n</ul>"}');export{e as data};
