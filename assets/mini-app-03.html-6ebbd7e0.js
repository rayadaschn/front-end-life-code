const n=JSON.parse(`{"key":"v-0a6677ee","path":"/Framework/mini-app/mini-app-03.html","title":"小程序测试","lang":"zh-CN","frontmatter":{"title":"小程序测试","icon":"mini-app","date":"2023-07-08T00:00:00.000Z","category":["mini-app"],"tag":["mini-app"]},"headers":[{"level":2,"title":"机型兼容性测试点","slug":"机型兼容性测试点","link":"#机型兼容性测试点","children":[]},{"level":2,"title":"页面交互测试点","slug":"页面交互测试点","link":"#页面交互测试点","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1703991106000,"updatedTime":1703991106000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.4,"words":1321},"filePathRelative":"Framework/mini-app/mini-app-03.md","localizedDate":"2023年7月8日","excerpt":"<p>本节对微信小程序开发完成后的测试环境做一些介绍梳理。</p>\\n<h2> 机型兼容性测试点</h2>\\n<ul>\\n<li>\\n<p>iOS 和 Android 的设备 CSS 宽度在 320 以上，页面能有正常的布局表现，不同机型、不同版本在不同的屏幕上都要做适配兼容；</p>\\n</li>\\n<li>\\n<p>按钮的点击区域要足够，最小点击的区域像素为 <code>44 * 44</code>；</p>\\n</li>\\n<li>\\n<p>页面同屏幕宽度的变化显示更多的内容（手机转 pad），当更宽的屏幕显示页面时，背景的延展区域要平滑，控件需要根据屏幕大小进行自适应放大缩小。</p>\\n<div class=\\"language-css line-numbers-mode\\" data-ext=\\"css\\"><pre class=\\"language-css\\"><code><span class=\\"token selector\\">.background</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">background-image</span><span class=\\"token punctuation\\">:</span> <span class=\\"token url\\"><span class=\\"token function\\">url</span><span class=\\"token punctuation\\">(</span><span class=\\"token string url\\">'your-background-image-url'</span><span class=\\"token punctuation\\">)</span></span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token property\\">background-size</span><span class=\\"token punctuation\\">:</span> 100% 100%<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>背景图、按钮图和图标等在 retina (视网膜) 等高像素密度屏幕中是否模糊，为了避免这种情况，可以采取以下措施：</p>\\n<ol>\\n<li>使用高分辨率的资源：在制作图片、图标、字体等资源时，应该使用高分辨率的版本，以适应 retina 屏幕。例如，对于图片，可以使用 2x 或 3x 分辨率的版本，对于字体，可以使用矢量图形的版本。</li>\\n<li>使用 CSS3 中的图片属性：在设置背景图片或 img 标签的时候，可以使用 CSS3 中的 <code>background-size</code> 属性或者 img 标签的 width 和 height 属性，来控制图片的尺寸和大小。这样可以避免将高分辨率的图片缩小而导致的模糊问题。</li>\\n<li>使用像素比例（Pixel Ratio）：在代码中，可以使用像素比例（Pixel Ratio）来动态地加载高分辨率的资源。例如，在 JavaScript 中可以使用 <code>window.devicePixelRatio</code> 属性来获取当前设备的像素比例，然后根据像素比例动态加载相应的资源。</li>\\n<li>使用 CSS 中的媒体查询：在 CSS 中，可以使用媒体查询来针对不同的设备或屏幕尺寸设置不同的样式。例如，可以使用 @media 媒体查询来针对 retina 屏幕设置高分辨率的图片或字体。</li>\\n</ol>\\n</li>\\n<li>\\n<p>页面打开加载时是否会发生抖动，这可能是因为页面中的资源（如图片、样式等）加载不均衡，导致页面元素先显示出来，然后再根据样式进行调整，从而出现抖动的情况。要解决这个问题，可以采取以下措施：</p>\\n<ol>\\n<li>避免使用大量的图片或动画：如果页面中使用了大量的图片或动画，会增加页面的加载时间，导致页面出现抖动。可以考虑优化图片大小，减少动画的数量或者使用 CSS3 中的动画属性，减少页面加载时间。</li>\\n<li>预加载页面资源：可以在页面加载前，预加载一些重要的资源（如图片、样式等），以减少页面加载时间。</li>\\n<li>使用页面骨架屏：页面骨架屏是一种在页面加载时先显示简单的占位符，然后再加载真实内容的技术。这样可以让用户先看到页面的基本结构，减少页面抖动的情况。</li>\\n<li>将页面元素的高度固定：在页面布局时，可以将页面元素的高度设置为固定值，避免在加载完后再根据内容调整高度，从而减少页面抖动的情况。</li>\\n<li>使用小程序提供的 Page.onLoad 生命周期方法：在 onLoad 方法中，可以进行一些数据的初始化和页面的准备工作，将页面的渲染过程提前，从而减少页面抖动的情况。</li>\\n</ol>\\n</li>\\n<li>\\n<p>弹出层是否有垂直水平居中;</p>\\n</li>\\n<li>\\n<p>图标是否完全显示;</p>\\n</li>\\n</ul>"}`);export{n as data};
