const t=JSON.parse(`{"key":"v-81dd6fb8","path":"/CSS/DifferentMethodsToAchieveCentering.html","title":"多种方式实现居中","lang":"zh-CN","frontmatter":{"title":"多种方式实现居中","icon":"style","order":2,"category":["CSS"],"tag":["CSS"],"description":"多种方式实现居中 实现元素居中显示，有很多相关总结，但是还是有很多可以絮叨的地方。 先看示例代码： &lt;body&gt; &lt;div class=\\"parent\\"&gt; \\t&lt;div class=\\"son son-size\\"&gt; 居中内容 &lt;/div&gt; &lt;/div&gt; &lt;/body&gt;","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/front-end-life/CSS/DifferentMethodsToAchieveCentering.html"}],["meta",{"property":"og:site_name","content":"Huy's Blog"}],["meta",{"property":"og:title","content":"多种方式实现居中"}],["meta",{"property":"og:description","content":"多种方式实现居中 实现元素居中显示，有很多相关总结，但是还是有很多可以絮叨的地方。 先看示例代码： &lt;body&gt; &lt;div class=\\"parent\\"&gt; \\t&lt;div class=\\"son son-size\\"&gt; 居中内容 &lt;/div&gt; &lt;/div&gt; &lt;/body&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-11T05:57:45.000Z"}],["meta",{"property":"article:tag","content":"CSS"}],["meta",{"property":"article:modified_time","content":"2023-04-11T05:57:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多种方式实现居中\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-11T05:57:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1 居中元素定宽高","slug":"_1-居中元素定宽高","link":"#_1-居中元素定宽高","children":[{"level":3,"title":"1.1 absolute + 负 margin","slug":"_1-1-absolute-负-margin","link":"#_1-1-absolute-负-margin","children":[]},{"level":3,"title":"1.2 absolute + calc","slug":"_1-2-absolute-calc","link":"#_1-2-absolute-calc","children":[]},{"level":3,"title":"1.3 absolute + margin auto 较好的实现","slug":"_1-3-absolute-margin-auto-较好的实现","link":"#_1-3-absolute-margin-auto-较好的实现","children":[]}]},{"level":2,"title":"2 居中元素不定高","slug":"_2-居中元素不定高","link":"#_2-居中元素不定高","children":[{"level":3,"title":"2.1 absolute + transform","slug":"_2-1-absolute-transform","link":"#_2-1-absolute-transform","children":[]},{"level":3,"title":"2.2 lineheight 文本居中","slug":"_2-2-lineheight-文本居中","link":"#_2-2-lineheight-文本居中","children":[]},{"level":3,"title":"2.3 table 表格居中","slug":"_2-3-table-表格居中","link":"#_2-3-table-表格居中","children":[]},{"level":3,"title":"2.4 flex 布局","slug":"_2-4-flex-布局","link":"#_2-4-flex-布局","children":[]},{"level":3,"title":"2.5 grid 布局","slug":"_2-5-grid-布局","link":"#_2-5-grid-布局","children":[]}]}],"git":{"createdTime":1680364551000,"updatedTime":1681192665000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":4.16,"words":1248},"filePathRelative":"CSS/DifferentMethodsToAchieveCentering.md","localizedDate":"2023年4月1日","excerpt":"<h1> 多种方式实现居中</h1>\\n<p>实现元素居中显示，有很多相关总结，但是还是有很多可以絮叨的地方。</p>\\n<p>先看示例代码：</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>parent<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  \\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>son son-size<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span> 居中内容 <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};