const e=JSON.parse('{"key":"v-045ae012","path":"/JavaScript/Node/Node12.html","title":"Koa 异步调用中间件的本质","lang":"zh-CN","frontmatter":{"title":"Koa 异步调用中间件的本质","icon":"nodeJS","date":"2024-12-17T00:00:00.000Z","category":["javascript"],"tag":["node"]},"headers":[{"level":3,"title":"核心机制","slug":"核心机制","link":"#核心机制","children":[]},{"level":3,"title":"简化实现：compose 函数","slug":"简化实现-compose-函数","link":"#简化实现-compose-函数","children":[]},{"level":3,"title":"Koa 的执行流程","slug":"koa-的执行流程","link":"#koa-的执行流程","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1734366836000,"updatedTime":1734366836000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.12,"words":636},"filePathRelative":"JavaScript/Node/Node12.md","localizedDate":"2024年12月17日","excerpt":"<p>Koa 是通过将中间件组织成一个“洋葱模型”（Onion Model），并使用 <strong><code>async/await</code></strong> 或 <strong><code>Promise</code></strong> 链式执行机制实现异步中间件的。</p>\\n<h3> <strong>核心机制</strong></h3>\\n<ol>\\n<li>\\n<p><strong>中间件存储：</strong></p>\\n<ul>\\n<li>中间件被存储为一个数组（<code>middlewares</code>）。</li>\\n<li>每个中间件是一个函数，接受 <code>ctx</code>（上下文）和 <code>next</code>（下一个中间件的执行函数）作为参数。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>组合中间件（compose）：</strong></p>\\n<ul>\\n<li>Koa 使用一个函数（类似于 <code>compose</code>）将多个中间件组合成一个函数，并按顺序执行。</li>\\n<li>每个中间件调用 <code>await next()</code> 来手动控制下一个中间件的执行时机。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>递归调用：</strong></p>\\n<ul>\\n<li>当一个中间件调用 <code>await next()</code> 时，它会等待下一个中间件执行完成后再继续执行当前中间件后面的逻辑。</li>\\n</ul>\\n</li>\\n</ol>"}');export{e as data};
