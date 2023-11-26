const e=JSON.parse('{"key":"v-0c9679d0","path":"/CSS/TailwindCSS03.html","title":"Tailwind 03 间距和尺寸","lang":"zh-CN","frontmatter":{"title":"Tailwind 03 间距和尺寸","date":"2023-06-27T00:00:00.000Z","icon":"style","category":["CSS"],"tag":["CSS"]},"headers":[{"level":2,"title":"总结规律","slug":"总结规律","link":"#总结规律","children":[]},{"level":2,"title":"默认配置","slug":"默认配置","link":"#默认配置","children":[]},{"level":2,"title":"基本规律","slug":"基本规律","link":"#基本规律","children":[]},{"level":2,"title":"宽度","slug":"宽度","link":"#宽度","children":[]},{"level":2,"title":"任意值","slug":"任意值","link":"#任意值","children":[]}],"git":{"createdTime":1687827648000,"updatedTime":1700986372000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":2.96,"words":887},"filePathRelative":"CSS/TailwindCSS03.md","localizedDate":"2023年6月27日","excerpt":"<h2> 总结规律</h2>\\n<ul>\\n<li>默认尺寸的是 <code>1rem = 4px</code>，所以具体尺寸可以将数字乘以 4 为实际尺寸大小；</li>\\n<li>间距的通用公式：<code>{p|m|width|height|max-w|min-h|gap|inset|space}-[number]</code>，若是负间距则在类名前加负号。<code>p</code> 和 <code>m</code> 为 padding 和 margin 的缩写；</li>\\n<li>间距方向 x 表示水平，y 表示垂直方向，s 表示 start，e 表示 end，t 表示 top，b 表示 bottom，使用公式如：<code>p{x|y|t|r|b|l|s|e}-[number]</code>；</li>\\n<li>数值，可用分数表示百分比，另有特殊字符如 full 表示 100%，screen 表示屏幕视口因此有通用公式：<code>w-{2/5|full|screen|min|max}</code>等；</li>\\n<li>任意值可以用中括号<code>[]</code>书写属性值如 <code>p-[5px]</code> 表示间距为 5px。</li>\\n</ul>"}');export{e as data};
