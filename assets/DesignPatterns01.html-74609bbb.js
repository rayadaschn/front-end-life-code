const l=JSON.parse('{"key":"v-f702a4e4","path":"/JavaScript/DesignPatterns01.html","title":"设计模式 01","lang":"zh-CN","frontmatter":{"title":"设计模式 01","icon":"javascript","date":"2022-07-11T00:00:00.000Z","category":["javascript"],"tag":["javascript"],"sticky":false},"headers":[{"level":2,"title":"单例模式","slug":"单例模式","link":"#单例模式","children":[{"level":3,"title":"简单实现单例模式","slug":"简单实现单例模式","link":"#简单实现单例模式","children":[]},{"level":3,"title":"封装一个通用的单例模式","slug":"封装一个通用的单例模式","link":"#封装一个通用的单例模式","children":[]}]},{"level":2,"title":"策略模式","slug":"策略模式","link":"#策略模式","children":[{"level":3,"title":"简单实现策略模式","slug":"简单实现策略模式","link":"#简单实现策略模式","children":[]}]},{"level":2,"title":"代理模式","slug":"代理模式","link":"#代理模式","children":[]},{"level":2,"title":"迭代模式","slug":"迭代模式","link":"#迭代模式","children":[]},{"level":2,"title":"发布-订阅模式","slug":"发布-订阅模式","link":"#发布-订阅模式","children":[]},{"level":2,"title":"命令模式","slug":"命令模式","link":"#命令模式","children":[]},{"level":2,"title":"组合模式","slug":"组合模式","link":"#组合模式","children":[]}],"git":{"createdTime":1689067616000,"updatedTime":1689325815000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":4}]},"readingTime":{"minutes":2.94,"words":882},"filePathRelative":"JavaScript/DesignPatterns01.md","localizedDate":"2022年7月11日","excerpt":"<p>从这里开始学习设计模式。</p>\\n<p>设计模式一共有 23 种，在此共记录在 JavaScript 开发中更 常见的 14 种设计模式。它们分别是：</p>\\n<ul>\\n<li><a href=\\"#%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F\\">单例模式</a>\\n<ul>\\n<li><a href=\\"#%E7%AE%80%E5%8D%95%E5%AE%9E%E7%8E%B0%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F\\">简单实现单例模式</a></li>\\n<li><a href=\\"#%E5%B0%81%E8%A3%85%E4%B8%80%E4%B8%AA%E9%80%9A%E7%94%A8%E7%9A%84%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F\\">封装一个通用的单例模式</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F\\">策略模式</a>\\n<ul>\\n<li><a href=\\"#%E7%AE%80%E5%8D%95%E5%AE%9E%E7%8E%B0%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F\\">简单实现策略模式</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F\\">代理模式</a></li>\\n<li><a href=\\"#%E8%BF%AD%E4%BB%A3%E6%A8%A1%E5%BC%8F\\">迭代模式</a></li>\\n<li><a href=\\"#%E5%8F%91%E5%B8%83-%E8%AE%A2%E9%98%85%E6%A8%A1%E5%BC%8F\\">发布-订阅模式</a></li>\\n<li><a href=\\"#%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F\\">命令模式</a></li>\\n<li><a href=\\"#%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F\\">组合模式</a></li>\\n</ul>"}');export{l as data};
