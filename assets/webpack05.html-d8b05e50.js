const n=JSON.parse('{"key":"v-dbebc39e","path":"/Framework/webpack05.html","title":"Webpack 配置分离","lang":"zh-CN","frontmatter":{"title":"Webpack 配置分离","icon":"build","date":"2023-05-03T00:00:00.000Z","category":["框架"],"tag":["webpack"],"star":false,"sticky":false},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"配置分离","slug":"配置分离","link":"#配置分离","children":[]}],"git":{"createdTime":1683356339000,"updatedTime":1683515501000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":3.42,"words":1025},"filePathRelative":"Framework/webpack05.md","localizedDate":"2023年5月3日","excerpt":"<h1> Webpack 配置分离</h1>\\n<h2> 前言</h2>\\n<p>首先，我们来看我们在运行 <code>npm run build</code> 或者 <code>npm run watch</code> 时的实际代码是什么？在 <code>package.json</code> 中：</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token property\\">\\"scripts\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">\\"build\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"webpack --mode=production --node-env=production\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"build:dev\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"webpack --mode=development\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"build:prod\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"webpack --mode=production --node-env=production\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"watch\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"webpack --watch\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"serve\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"webpack serve\\"</span><span class=\\"token punctuation\\">,</span>\\n\\n  <span class=\\"token property\\">\\"myBuild\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"webpack --config ./config/comm.config.js --env production\\"</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"myServe\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"webpack serve --config ./config/comm.config.js --env development\\"</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
