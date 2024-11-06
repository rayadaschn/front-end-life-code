const n=JSON.parse(`{"key":"v-5d656e4c","path":"/JavaScript/JS/JS29.html","title":"虚拟dom转真实dom","lang":"zh-CN","frontmatter":{"title":"虚拟dom转真实dom","icon":"javascript","date":"2023-11-05T00:00:00.000Z","category":["javascript"],"tag":["javascript"],"sticky":false},"headers":[],"git":{"createdTime":1730907915000,"updatedTime":1730907915000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.28,"words":84},"filePathRelative":"JavaScript/JS/JS29.md","localizedDate":"2023年11月5日","excerpt":"<p>将下面的虚拟 dom 转换为真实 dom：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> vnode <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">tag</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'div'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">attrs</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'app'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">children</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">tag</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'span'</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">children</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n        <span class=\\"token punctuation\\">{</span>\\n          <span class=\\"token literal-property property\\">tag</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'a'</span><span class=\\"token punctuation\\">,</span>\\n          <span class=\\"token literal-property property\\">children</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">tag</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'span'</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token literal-property property\\">children</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n        <span class=\\"token punctuation\\">{</span>\\n          <span class=\\"token literal-property property\\">tag</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'a'</span><span class=\\"token punctuation\\">,</span>\\n          <span class=\\"token literal-property property\\">children</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token punctuation\\">{</span>\\n          <span class=\\"token literal-property property\\">tag</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'a'</span><span class=\\"token punctuation\\">,</span>\\n          <span class=\\"token literal-property property\\">children</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span>vnode<span class=\\"token punctuation\\">,</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'#root'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">vnode<span class=\\"token punctuation\\">,</span> container</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
