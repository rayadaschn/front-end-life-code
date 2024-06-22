const n=JSON.parse('{"key":"v-1ad86e13","path":"/JavaScript/JS/JS11.html","title":"简单手写 curry 柯里化","lang":"zh-CN","frontmatter":{"title":"简单手写 curry 柯里化","icon":"javascript","date":"2023-09-11T00:00:00.000Z","category":["javascript"],"tag":["javascript"],"sticky":false},"headers":[],"git":{"createdTime":1711950553000,"updatedTime":1711950553000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.49,"words":146},"filePathRelative":"JavaScript/JS/JS11.md","localizedDate":"2023年9月11日","excerpt":"<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token doc-comment comment\\">/**\\n * 手写柯里化\\n */</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">curry</span><span class=\\"token punctuation\\">(</span>fn<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">Function</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 获取传入函数的参数长度</span>\\n  <span class=\\"token keyword\\">const</span> fnArrayLength <span class=\\"token operator\\">=</span> fn<span class=\\"token punctuation\\">.</span>length\\n  <span class=\\"token keyword\\">let</span> args<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">any</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n\\n  <span class=\\"token comment\\">// 在 ts 中, 独立的函数的 this 要声明类型</span>\\n  <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">calc</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">any</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">...</span>newArgs<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">any</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 积累参数</span>\\n    args <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">...</span>args<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">...</span>newArgs<span class=\\"token punctuation\\">]</span>\\n\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>args<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">&lt;</span> fnArrayLength<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">// 参数不够, 返回函数</span>\\n      <span class=\\"token keyword\\">return</span> calc\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">// 参数够了, 返回执行结果</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">apply</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">,</span> args<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">slice</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> fnArrayLength<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 参数进行截断, 防止参数过多</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">return</span> calc\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">,</span> b<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">,</span> c<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> a <span class=\\"token operator\\">+</span> b <span class=\\"token operator\\">+</span> c\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">const</span> res <span class=\\"token operator\\">=</span> <span class=\\"token function\\">curry</span><span class=\\"token punctuation\\">(</span>add<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">info</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">res</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};