const e=JSON.parse('{"key":"v-62b07b64","path":"/Framework/React/React06.html","title":"React之Hooks","lang":"zh-CN","frontmatter":{"title":"React之Hooks","icon":"react","date":"2023-03-25T00:00:00.000Z","category":["框架"],"tag":["React"],"sticky":false},"headers":[{"level":2,"title":"useState","slug":"usestate","link":"#usestate","children":[]},{"level":2,"title":"useEffect","slug":"useeffect","link":"#useeffect","children":[{"level":3,"title":"Effect 性能优化","slug":"effect-性能优化","link":"#effect-性能优化","children":[]}]},{"level":2,"title":"useContext","slug":"usecontext","link":"#usecontext","children":[]},{"level":2,"title":"useReducer","slug":"usereducer","link":"#usereducer","children":[]},{"level":2,"title":"useRef","slug":"useref","link":"#useref","children":[]},{"level":2,"title":"useCallback","slug":"usecallback","link":"#usecallback","children":[{"level":3,"title":"useEffect 和 useCallback 的区别","slug":"useeffect-和-usecallback-的区别","link":"#useeffect-和-usecallback-的区别","children":[]},{"level":3,"title":"闭包陷阱","slug":"闭包陷阱","link":"#闭包陷阱","children":[]},{"level":3,"title":"进一步优化 useCallback","slug":"进一步优化-usecallback","link":"#进一步优化-usecallback","children":[]}]},{"level":2,"title":"useMemo","slug":"usememo","link":"#usememo","children":[{"level":3,"title":"useMemo 和 useCallback 的区别","slug":"usememo-和-usecallback-的区别","link":"#usememo-和-usecallback-的区别","children":[]}]},{"level":2,"title":"useImperativeHandle","slug":"useimperativehandle","link":"#useimperativehandle","children":[]},{"level":2,"title":"useLayoutEffect","slug":"uselayouteffect","link":"#uselayouteffect","children":[]},{"level":2,"title":"自定义 Hook","slug":"自定义-hook","link":"#自定义-hook","children":[]},{"level":2,"title":"第三方 Hooks","slug":"第三方-hooks","link":"#第三方-hooks","children":[]}],"git":{"createdTime":1703991106000,"updatedTime":1703991106000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":27.62,"words":8285},"filePathRelative":"Framework/React/React06.md","localizedDate":"2023年3月25日","excerpt":"<h1> React 之 Hooks</h1>\\n<p>React Hooks 是 React 16.8 新增的功能，它允许函数组件中使用状态和其他 React 特性。Hooks 可以帮助我们更轻松地编写可复用、独立和易于测试的组件，并且可以避免类组件中常见的代码冗余和样板代码。</p>\\n<p>先看看，在过去的 Class 组件中所存在的问题：</p>\\n<ul>\\n<li>复杂组件难以理解；</li>\\n<li>ES6 中的 class 和 React 中的 this 指向入门难度较高；</li>\\n<li>组件复用状态较难。复用组件必须使用高阶组件，使得流程较为繁琐。</li>\\n</ul>\\n<p>在之前的 React 版本中，类组件是唯一能够使用 React 特性的方式。而函数组件则只能渲染静态数据和返回 DOM 元素。但随着函数组件的流行，开发人员往往希望在函数组件中使用状态和其他 React 特性。看一个函数式组件的样例:</p>"}');export{e as data};
