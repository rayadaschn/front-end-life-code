const n=JSON.parse('{"key":"v-6ae173a1","path":"/JavaScript/JS17.html","title":"任务队列的中断和恢复","lang":"zh-CN","frontmatter":{"title":"任务队列的中断和恢复","icon":"javascript","date":"2024-02-18T00:00:00.000Z","category":["javascript"],"tag":["javascript"],"sticky":false},"headers":[],"git":{"createdTime":1708348514000,"updatedTime":1709216794000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":1.58,"words":475},"filePathRelative":"JavaScript/JS17.md","localizedDate":"2024年2月18日","excerpt":"<blockquote>\\n<p>实现一个任务队列管理工具：依次顺序执行一系列任务，并在所有任务全部完成后可以获得每个任务的执行结果。</p>\\n<p>需要返回俩个方法：start 方法用于启动任务，pause 方法用于暂停任务。</p>\\n<p>每个任务具备原子性，即不可中断，只能在俩个任务之间中断。</p>\\n</blockquote>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token doc-comment comment\\">/**\\n * <span class=\\"token keyword\\">@description</span>: 任务队列的中断和恢复\\n * <span class=\\"token keyword\\">@params</span> <span class=\\"token class-name\\"><span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">...</span>Function<span class=\\"token punctuation\\">}</span></span> tasks 任务列表，每个任务列表无参数、异步函数\\n * <span class=\\"token keyword\\">@return</span> <span class=\\"token class-name\\"><span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">*</span><span class=\\"token punctuation\\">}</span></span>\\n */</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">processTasks</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token operator\\">...</span>tasks</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> result <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n\\n  <span class=\\"token keyword\\">let</span> isRunning <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span>\\n  <span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span>\\n\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">start</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Promise</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">async</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">resolve</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>isRunning<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n          <span class=\\"token keyword\\">return</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        isRunning <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span>\\n\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span>i <span class=\\"token operator\\">&lt;</span> tasks<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n          console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">开始执行第</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>i<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">个任务</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">)</span>\\n          <span class=\\"token keyword\\">const</span> res <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> tasks<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n          result<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>res<span class=\\"token punctuation\\">)</span>\\n          console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">第</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>i<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\">个任务执行完毕</span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">)</span>\\n          i<span class=\\"token operator\\">++</span>\\n\\n          <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>isRunning<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token comment\\">// 每次结束任务进行判断, 若被中断了, 则提前退出, 此时并不执行 resolve, 转态依旧挂起, 异步阻塞</span>\\n        <span class=\\"token punctuation\\">}</span>\\n\\n        isRunning <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span>\\n        <span class=\\"token function\\">resolve</span><span class=\\"token punctuation\\">(</span>result<span class=\\"token punctuation\\">)</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function\\">pause</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      isRunning <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
