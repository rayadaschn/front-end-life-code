import{_ as n,X as s,Y as a,$ as e}from"./framework-97fa2d96.js";const t={},i=e,o=s,l=a,p=i(`<h2 id="请描述-tcp-三次握手和四次挥手" tabindex="-1"><a class="header-anchor" href="#请描述-tcp-三次握手和四次挥手" aria-hidden="true">#</a> 请描述 TCP 三次握手和四次挥手</h2><ol><li>先建立连接(确保双方都有收发消息的能力)</li><li>再传输内容(如发送一个 get 请求)</li><li>网络连接是 TCP 协议，传输内容是 HTTP 协议。</li></ol><figure><img src="https://cdn.jsdelivr.net/gh/rayadaschn/blogImage@master/img/202309042127410.png" alt="三次握手" tabindex="0" loading="lazy"><figcaption>三次握手</figcaption></figure><figure><img src="https://cdn.jsdelivr.net/gh/rayadaschn/blogImage@master/img/format,png-20230309230614791.png" alt="四次挥手" tabindex="0" loading="lazy"><figcaption>四次挥手</figcaption></figure><h2 id="for-in-和-for-of-的区别是什么" tabindex="-1"><a class="header-anchor" href="#for-in-和-for-of-的区别是什么" aria-hidden="true">#</a> for...in 和 for...of 的区别是什么</h2><p>在 JavaScript 中，<code>for...in</code> 和 <code>for...of</code> 是两种不同的循环语句，区别如下：</p><ol><li><p><code>for...in</code> 循环：</p><ul><li>用于迭代对象的可枚举属性。</li><li>循环变量是对象的属性名（字符串类型）。</li><li>可以用于迭代普通对象、数组和原型链上的属性。</li><li>注意：<code>for...in</code> 循环不保证按照特定的顺序遍历对象的属性。</li></ul><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token comment">// 输出属性名：a, b, c</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 输出属性值：1, 2, 3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>for...of</code> 循环：</p><ul><li>用于迭代可迭代对象（例如<strong>数组</strong>、<strong>字符串</strong>、<strong>Set</strong>、<strong>Map</strong> 等）的元素。</li><li>循环变量是对象的值，而不是索引或属性名。</li><li>不能直接用于迭代普通对象，需要通过转换或手动迭代对象的属性。</li></ul><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> element <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token comment">// 输出数组元素：1, 2, 3</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token comment">// 输出字符串字符：H, e, l, l, o</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>总结：</p><ul><li><code>for...in</code> 用于迭代对象的属性名。</li><li><code>for...of</code> 用于迭代可迭代对象的元素值。</li><li><code>for...in</code> 适用于迭代<strong>对象</strong>的属性，而 <code>for...of</code> 适用于迭代<strong>数组</strong>、<strong>字符串</strong>等可迭代对象的元素。</li></ul><h2 id="offsetheight、scrollheight-和-clientheight-的区别是什么" tabindex="-1"><a class="header-anchor" href="#offsetheight、scrollheight-和-clientheight-的区别是什么" aria-hidden="true">#</a> offsetHeight、scrollHeight 和 clientHeight 的区别是什么</h2><ul><li>offsetHeight 包含了元素的整体高度，包括内容、内边距和<strong>边框</strong>。 <ul><li>offsetHeight 和 offsetWidth = content + padding + border</li></ul></li><li>scrollHeight 包含了元素内容的整体高度，<strong>包括溢出部分</strong>。 <ul><li>scrollHeight 和 scrollWidth = padding + 实际内容尺寸</li></ul></li><li>clientHeight 表示元素可见区域的高度，不包括滚动条、边框和外边距。 <ul><li>clientHeight 和 clientWidth = content + padding</li></ul></li></ul><h2 id="vue-组件通讯有几种方式" tabindex="-1"><a class="header-anchor" href="#vue-组件通讯有几种方式" aria-hidden="true">#</a> Vue 组件通讯有几种方式?</h2><ul><li>props 和 $emit</li><li>provide 和 inject</li><li>Vuex 和 pinia</li><li>$ref</li><li>自定义事件 evenBus</li></ul><h2 id="严格模式的特点" tabindex="-1"><a class="header-anchor" href="#严格模式的特点" aria-hidden="true">#</a> 严格模式的特点</h2><p>使用: 在头部声明 <code>&#39;use strict&#39;</code>。</p><ul><li><p>全局变量必须先声明</p></li><li><p>禁止用 with</p><ul><li><p>with 是用于在指定的对象上创建一个代码块作用域，以便在该作用域内可以更方便地访问对象的属性和方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">with</span> <span class="token punctuation">(</span>object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在此代码块中可以直接使用 object 的属性和方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>创建 eval 作用域</p><ul><li><p>eval 是 JavaScript 中的一个内置函数，它接受一个字符串作为参数，并将该字符串作为 JavaScript 代码进行解析和执行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>禁止 this 指向 window</p></li><li><p>函数参数不能重名</p></li></ul><h2 id="http-跨域请求时为何发送-options-请求" tabindex="-1"><a class="header-anchor" href="#http-跨域请求时为何发送-options-请求" aria-hidden="true">#</a> HTTP 跨域请求时为何发送 options 请求</h2><ul><li>options 请求是跨域请求之前的与检查;</li><li>它是浏览器自行发起的，无需干预。</li></ul>`,18),c=[p];function r(u,d){return o(),l("div",null,c)}const h=n(t,[["render",r],["__file","interview15.html.vue"]]);export{h as default};
