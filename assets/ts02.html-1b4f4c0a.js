const n=JSON.parse(`{"key":"v-f811599e","path":"/JavaScript/TS/ts02.html","title":"TS 查漏补缺","lang":"zh-CN","frontmatter":{"title":"TS 查漏补缺","icon":"javascript","date":"2023-06-03T00:00:00.000Z","category":["javascript"],"tag":["typescript"]},"headers":[],"git":{"createdTime":1717462976000,"updatedTime":1717462976000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.29,"words":388},"filePathRelative":"JavaScript/TS/ts02.md","localizedDate":"2023年6月3日","excerpt":"<p>本节主要是对 typescript 的查漏补缺，在此之前看过俩三遍阮老师的《typescript 教程》，但还是有一些知识点没有掌握，因此重新温习一遍，并记录下来。</p>\\n<ol>\\n<li>\\n<p>泛型是存在默认值的，同 js 一样可以赋值默认值。</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ArrayList<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token operator\\">&gt;</span></span> <span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><p>其中默认为对象最为常见，当然也有一种特殊情况就是泛型的 any 化。</p>\\n</li>\\n<li>\\n<p>断言的方法:\\n常用的是类型断言 <code>obj as object</code> 还有一种是类型转换断言 <code>&lt;object&gt;obj</code>，俩者效果是一样的。</p>\\n</li>\\n<li>\\n<p>泛型约束</p>\\n<p><code>T extends object</code> 是一个类型约束，表示类型 <code>T</code> 必须是一个对象类型（即不是原始类型如 <code>number</code>、<code>string</code>、<code>boolean</code> 等）。它常用于泛型类型参数的约束中，以确保传入的类型是一个对象类型。</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token generic-function\\"><span class=\\"token function\\">logObjectProperties</span><span class=\\"token generic class-name\\"><span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span> <span class=\\"token keyword\\">extends</span> object<span class=\\"token operator\\">&gt;</span></span></span><span class=\\"token punctuation\\">(</span>obj<span class=\\"token operator\\">:</span> <span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">void</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">const</span> key <span class=\\"token keyword\\">in</span> obj<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>obj<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">hasOwnProperty</span><span class=\\"token punctuation\\">(</span>key<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">\`</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span>key<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">: </span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span>obj<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span><span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">\`</span></span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 使用示例</span>\\n<span class=\\"token function\\">logObjectProperties</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'Alice'</span><span class=\\"token punctuation\\">,</span> age<span class=\\"token operator\\">:</span> <span class=\\"token number\\">25</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 正确</span>\\n<span class=\\"token comment\\">// logObjectProperties(42); // 错误，42 不是一个对象</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p><code>T extends keyof U</code> 是另一个类型约束，表示类型 <code>T</code> 必须是类型 <code>U</code> 的键（key）之一。它常用于约束某个类型必须是另一个类型的键名，用于访问该类型的属性。</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token generic-function\\"><span class=\\"token function\\">getProperty</span><span class=\\"token generic class-name\\"><span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">,</span> <span class=\\"token constant\\">K</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token keyword\\">keyof</span> <span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span></span></span><span class=\\"token punctuation\\">(</span>obj<span class=\\"token operator\\">:</span> <span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">,</span> key<span class=\\"token operator\\">:</span> <span class=\\"token constant\\">K</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">[</span><span class=\\"token constant\\">K</span><span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> obj<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 使用示例</span>\\n<span class=\\"token keyword\\">const</span> person <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'Alice'</span><span class=\\"token punctuation\\">,</span> age<span class=\\"token operator\\">:</span> <span class=\\"token number\\">25</span> <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">const</span> name <span class=\\"token operator\\">=</span> <span class=\\"token function\\">getProperty</span><span class=\\"token punctuation\\">(</span>person<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'name'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 正确，'name' 是 person 的键</span>\\n<span class=\\"token comment\\">// const invalid = getProperty(person, 'address'); // 错误，'address' 不是 person 的键</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>"}`);export{n as data};
