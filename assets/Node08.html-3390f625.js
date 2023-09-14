const s=JSON.parse('{"key":"v-e7e48f74","path":"/JavaScript/Node08.html","title":"俩个树结构快速搭建用户搜索体系","lang":"zh-CN","frontmatter":{"title":"俩个树结构快速搭建用户搜索体系","icon":"nodeJS","category":["javascript"],"tag":["node"],"date":"2023-09-14T00:00:00.000Z"},"headers":[],"git":{"createdTime":1694701137000,"updatedTime":1694701137000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.17,"words":352},"filePathRelative":"JavaScript/Node08.md","localizedDate":"2023年9月14日","excerpt":"<p>首先回顾 tree 结构:</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">TreeNode<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span></span> <span class=\\"token punctuation\\">{</span>\\n  value<span class=\\"token operator\\">:</span> <span class=\\"token constant\\">T</span>\\n  LeafA<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> TreeNode<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">|</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span>\\n  LeafB<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> TreeNode<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">|</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span>\\n  LeafC<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> TreeNode<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">|</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span>\\n  LeafD<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> TreeNode<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">|</span> <span class=\\"token keyword\\">null</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span>\\n\\n  <span class=\\"token function\\">constructor</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token operator\\">:</span> <span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>value <span class=\\"token operator\\">=</span> value\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{s as data};
