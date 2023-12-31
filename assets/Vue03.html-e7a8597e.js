const e=JSON.parse('{"key":"v-209e4923","path":"/Framework/Vue/Vue03.html","title":"Vue3中的懒加载","lang":"zh-CN","frontmatter":{"title":"Vue3中的懒加载","icon":"vue","date":"2023-03-18T00:00:00.000Z","category":["框架"],"tag":["Vue"],"sticky":false},"headers":[{"level":2,"title":"1. 动物园里有什么?","slug":"_1-动物园里有什么","link":"#_1-动物园里有什么","children":[]},{"level":2,"title":"2. 把大象装进冰箱","slug":"_2-把大象装进冰箱","link":"#_2-把大象装进冰箱","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1703991106000,"updatedTime":1704007651000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":3.39,"words":1017},"filePathRelative":"Framework/Vue/Vue03.md","localizedDate":"2023年3月18日","excerpt":"<h2> 1. 动物园里有什么?</h2>\\n<p>我们都知道前端项目完成之后，需要对页面进行优化。首当其冲的便是优化首页加载速率，方法有很多，我们来看看其中重要的一项<strong>懒加载</strong>。</p>\\n<p>顾名思义，懒加载，就是加载页面的时候不是同步全部加载完成，而是在需要的时候进行加载。由此，产生俩个定义：<strong>同步组件</strong>和<strong>异步组件</strong>。</p>\\n<p><strong>同步组件</strong>就是在页面打包时，组件会同所有代码一同打包到一个文件中。体积大了，加载的速率也就慢了。使用很简单，调用时直接静态 <code>import</code> 导入就行了，导入对象在加载时就被编译（无法做到按需编译，降低首页加载速度）。当然也不是没有好处的，<strong>静态导入能够更好的初始化依赖，而且更有利于静态分析工具和 <a href=\\"https://developer.mozilla.org/zh-CN/docs/Glossary/Tree_shaking\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">tree shaking</a> 发挥作用。所以不是必要情况，优先使用静态导入。</strong></p>"}');export{e as data};
