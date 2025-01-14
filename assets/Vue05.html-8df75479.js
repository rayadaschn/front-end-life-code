import{_ as e,X as o,Y as t,$ as s}from"./framework-5dd7fabc.js";const a={},n=s,i=o,c=t,r=n(`<p>在 Vue 中，路由系统通过 Vue Router 来管理。Vue Router 支持两种模式：history 模式和 hash 模式，它们分别使用 HTML5 History API 和 URL 的哈希部分来实现路由。</p><h3 id="history-模式" tabindex="-1"><a class="header-anchor" href="#history-模式" aria-hidden="true">#</a> History 模式</h3><p>在 history 模式下，Vue Router 使用 HTML5 History API 来实现路由。它基于浏览器的 <code>pushState</code> 和 <code>replaceState</code> 等 <code>window.history</code> 的方法，如这两个方法允许我们在浏览器的会话历史中添加和修改记录。</p><ol><li><p><strong>实现原理：</strong></p><ul><li>当用户点击链接或触发导航时，Vue Router 使用 <code>pushState</code> 或 <code>replaceState</code> 向浏览器的历史堆栈中添加或修改记录。</li><li>同时，Vue Router 还会监听 <code>popstate</code> 事件，以便在用户点击浏览器前进或后退按钮时进行相应的导航。</li><li>在服务器端，需要配置使得所有路径都返回同一个 HTML 文件，因为 history 模式下直接访问某个 URL 会导致 404 错误。</li></ul></li><li><p><strong>示例：</strong></p><ul><li>用户访问<code>/user/123</code>，浏览器不会发送请求到服务器，但是 Vue Router 会捕获该路径，通过 History API 添加记录，然后加载相应的组件。</li></ul></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>router.push</code>、<code>router.replace</code> 和 <code>router.go</code> 是 <code>window.history.pushState</code>、<code>window.history.replaceState</code> 和 <code>window.history.go</code> 的改造，它们模仿了 <code>window.history</code> 的 API。</p></div><h3 id="hash-模式" tabindex="-1"><a class="header-anchor" href="#hash-模式" aria-hidden="true">#</a> Hash 模式</h3><p>在 hash 模式下，Vue Router 使用 URL 的哈希部分（#）来实现路由。哈希部分的变化不会导致浏览器向服务器发送请求，因此可以在前端实现页面切换，而无需配置服务器。</p><ol><li><p><strong>实现原理：</strong></p><ul><li>当用户点击链接或触发导航时，Vue Router 会改变 URL 的哈希部分，例如，从<code>/user/123</code>变为<code>#/user/123</code>。</li><li>浏览器会触发 <code>hashchange</code> 事件，Vue Router 监听该事件，并根据新的哈希值进行相应的导航。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>示例：</strong></p><ul><li>用户访问<code>/#/user/123</code>，浏览器会根据哈希值的变化触发<code>hashchange</code>事件，然后 Vue Router 会捕获该事件，加载相应的组件。</li></ul></li></ol><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h3><ul><li><p><strong>History 模式：</strong></p><ul><li>更美观的 URL，没有<code>#</code>符号。</li><li>需要服务器端配置，以处理直接访问 URL 时的情况。</li><li>依赖 HTML5 History API，可能在一些老旧的浏览器中不兼容。</li></ul></li><li><p><strong>Hash 模式：</strong></p><ul><li>在所有浏览器中都兼容。</li><li>URL 中带有<code>#</code>符号。</li><li>不需要特殊的服务器配置，可以直接部署在任意静态文件服务器上。</li></ul></li></ul><p>选择使用哪种模式通常取决于项目的需求和部署环境。在开发环境下，建议使用 hash 模式，因为它不需要配置服务器。在生产环境下，建议使用 history 模式，因为它更美观、更符合规范。</p>`,11),l=[r];function d(u,p){return i(),c("div",null,l)}const g=e(a,[["render",d],["__file","Vue05.html.vue"]]);export{g as default};