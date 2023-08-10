const n=JSON.parse('{"key":"v-ddf0a812","path":"/OneMoreThing/interview04.html","title":"Interview -- 手写防抖节流","lang":"zh-CN","frontmatter":{"title":"Interview -- 手写防抖节流","icon":"note","date":"2023-08-10T00:00:00.000Z","category":["anonymous"],"tag":["note"],"star":false,"sticky":false},"headers":[{"level":2,"title":"防抖 debounce","slug":"防抖-debounce","link":"#防抖-debounce","children":[]},{"level":2,"title":"节流 throttle","slug":"节流-throttle","link":"#节流-throttle","children":[]}],"git":{"createdTime":1691627476000,"updatedTime":1691627476000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.66,"words":197},"filePathRelative":"OneMoreThing/interview04.md","localizedDate":"2023年8月10日","excerpt":"<p>防抖和节流是俩兄弟，要会用才会写防抖节流。</p>\\n<h2> 防抖 debounce</h2>\\n<p>简单核心要素版</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">debounce</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">fn<span class=\\"token punctuation\\">,</span> delay <span class=\\"token operator\\">=</span> <span class=\\"token number\\">500</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> timer <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>timer<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">clearTimeout</span><span class=\\"token punctuation\\">(</span>timer<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  timer <span class=\\"token operator\\">=</span> <span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    timer <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> delay<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
