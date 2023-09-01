const n=JSON.parse(`{"key":"v-74243190","path":"/OneMoreThing/interview14.html","title":"Interview -- 算法实战","lang":"zh-CN","frontmatter":{"title":"Interview -- 算法实战","icon":"note","date":"2023-08-31T00:00:00.000Z","category":["anonymous"],"tag":["note"],"star":false,"sticky":false},"headers":[{"level":2,"title":"判断一个字符串是否括号匹配","slug":"判断一个字符串是否括号匹配","link":"#判断一个字符串是否括号匹配","children":[]},{"level":2,"title":"定义一个 JS 函数，反转单向链表","slug":"定义一个-js-函数-反转单向链表","link":"#定义一个-js-函数-反转单向链表","children":[]}],"git":{"createdTime":1693530798000,"updatedTime":1693530798000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.03,"words":310},"filePathRelative":"OneMoreThing/interview14.md","localizedDate":"2023年8月31日","excerpt":"<p>总述算法的一些常见考题。</p>\\n<h2> 判断一个字符串是否括号匹配</h2>\\n<ul>\\n<li>一个字符串 s 可能包含 <code>{}()[]</code> 三种括号;</li>\\n<li>判断 s 是否是括号匹配的;</li>\\n<li>如<code>(a{b}c)</code>匹配，而<code>{a(b</code>或<code>{a(b}c)</code>就不匹配。</li>\\n</ul>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token comment\\">/**\\n * @description 括号匹配\\n * @param str str\\n */</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">matchBracket</span><span class=\\"token punctuation\\">(</span>str<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">boolean</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> length <span class=\\"token operator\\">=</span> str<span class=\\"token punctuation\\">.</span>length\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>length <span class=\\"token operator\\">===</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span>\\n\\n  <span class=\\"token keyword\\">const</span> stack <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n\\n  <span class=\\"token keyword\\">const</span> leftSymbols <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'{[('</span>\\n  <span class=\\"token keyword\\">const</span> rightSymbols <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'}])'</span>\\n\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">const</span> s <span class=\\"token operator\\">=</span> str<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span>\\n\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>leftSymbols<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">includes</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">// 左括号, 压栈</span>\\n      stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>rightSymbols<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">includes</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">// 左括号, 判断栈顶(是否出栈)</span>\\n      <span class=\\"token keyword\\">const</span> top <span class=\\"token operator\\">=</span> stack<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span><span class=\\"token function\\">isMatch</span><span class=\\"token punctuation\\">(</span>top<span class=\\"token punctuation\\">,</span> s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token keyword\\">return</span> stack<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">===</span> <span class=\\"token number\\">0</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">isMatch</span><span class=\\"token punctuation\\">(</span>left<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">any</span><span class=\\"token punctuation\\">,</span> right<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">any</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">boolean</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>left <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'('</span> <span class=\\"token operator\\">&amp;&amp;</span> right <span class=\\"token operator\\">===</span> <span class=\\"token string\\">')'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>left <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'['</span> <span class=\\"token operator\\">&amp;&amp;</span> right <span class=\\"token operator\\">===</span> <span class=\\"token string\\">']'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>left <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'{'</span> <span class=\\"token operator\\">&amp;&amp;</span> right <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'}'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">matchBracket</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'(a)'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
