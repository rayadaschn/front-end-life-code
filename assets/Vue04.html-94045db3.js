const e=JSON.parse('{"key":"v-b517db0e","path":"/Framework/Vue04.html","title":"Vue3中的动态路由懒加载实例","lang":"zh-CN","frontmatter":{"title":"Vue3中的动态路由懒加载实例","icon":"vue","date":"2023-03-19T00:00:00.000Z","category":["框架"],"tag":["Vue"],"star":true,"sticky":false},"headers":[{"level":2,"title":"动物园里有什么","slug":"动物园里有什么","link":"#动物园里有什么","children":[]},{"level":2,"title":"把大象装进冰箱","slug":"把大象装进冰箱","link":"#把大象装进冰箱","children":[]},{"level":2,"title":"防止二级路由刷新数据丢失","slug":"防止二级路由刷新数据丢失","link":"#防止二级路由刷新数据丢失","children":[]}],"git":{"createdTime":1683516320000,"updatedTime":1683887797000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":4}]},"readingTime":{"minutes":8.68,"words":2603},"filePathRelative":"Framework/Vue04.md","localizedDate":"2023年3月19日","excerpt":"<h1> Vue3 中的动态路由懒加载实例</h1>\\n<p>在<a href=\\"Vue03\\">《Vue3 中的懒加载》</a> 一文中，我们总结了懒加载的实现方式。那懒加载最好用在什么地方呢？其实很常见，如在后台管理系统中，因为权限不同我们需要依据后端返回的数据，展现不同的菜单。菜单不同对应的二级列表路由地址不同，这个时候可不能一股脑的将所有子组件全部注册进去，否则，依据地址我们可以实现越权查看不同权限人的界面。</p>\\n<h2> 动物园里有什么</h2>\\n<p>我们先来看看我们的需求是什么？</p>\\n<ul>\\n<li>依据后端接口返回的数据，筛选出需要注册的二级组件，进行注册；</li>\\n<li>由于是动态加载，我们还需要考虑注册缓存的问题。（即，刷新后依旧能正常展现页面）</li>\\n</ul>"}');export{e as data};
