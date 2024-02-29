const e=JSON.parse('{"key":"v-e83fc584","path":"/Framework/Vue/pinia01.html","title":"手写 pinia","lang":"zh-CN","frontmatter":{"title":"手写 pinia","icon":"vue","date":"2024-02-29T00:00:00.000Z","category":["框架"],"tag":["Vue"],"sticky":false},"headers":[{"level":2,"title":"前置基础知识","slug":"前置基础知识","link":"#前置基础知识","children":[{"level":3,"title":"effect 函数","slug":"effect-函数","link":"#effect-函数","children":[]},{"level":3,"title":"effectScope 函数","slug":"effectscope-函数","link":"#effectscope-函数","children":[]}]}],"git":{"createdTime":1709216794000,"updatedTime":1709222201000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":1.7,"words":510},"filePathRelative":"Framework/Vue/pinia01.md","localizedDate":"2024年2月29日","excerpt":"<p>在 Vuex 中是基于 Flux 架构进行设计的，它的核心思想是单向数据流，即数据只能从 Store 向外传递到组件，组件不能直接修改 Store 中的数据，只能通过提交 Mutations 来修改。</p>\\n<p>即: view --&gt; dispatch --&gt; action --&gt; mutation --&gt; state --&gt; view</p>\\n<p>并且 Vuex 使用一个全局的 Store 来存储应用的状态，所有组件都共享这个 Store。由此会产生较多的 modules。</p>\\n<p>而 pinia 则是将整个 store 体系进行 \\"拍平\\"。Pinia 不是使用一个全局的 Store，而是允许创建多个 Store，每个 Store 都可以独立管理自己的状态。</p>"}');export{e as data};
