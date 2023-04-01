import{_ as n,V as a,W as s,$ as e}from"./framework-2060dede.js";const t={},p=e(`<h1 id="react之数据管理-redux" tabindex="-1"><a class="header-anchor" href="#react之数据管理-redux" aria-hidden="true">#</a> React之数据管理 Redux</h1><h2 id="javascript-中的纯函数" tabindex="-1"><a class="header-anchor" href="#javascript-中的纯函数" aria-hidden="true">#</a> JavaScript 中的纯函数</h2><p>在 JavaScript 中，纯函数是指具有以下两个特性的函数：</p><ol><li>相同的输入总是返回相同的输出</li><li>函数执行期间没有副作用，也就是说它不会修改任何在函数作用域外部的状态，如全局变量、输入参数、引用参数等。</li></ol><p>因为纯函数的输出仅仅由输入决定，所以它们在并发编程和缓存数据等方面非常有用。由于不会修改外部状态，纯函数通常比有副作用的函数更容易测试、调试和优化。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个函数只是将输入的两个数字相加，它没有副作用，也不会修改任何外部变量或状态。每次调用 <code>sum</code> 函数时，给定相同的参数，它总是返回相同的结果。这就使得它成为一个纯函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">addToTotal</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  total <span class="token operator">+=</span> num<span class="token punctuation">;</span>
  <span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个函数有副作用，因为它修改了外部变量 <code>total</code>。每次调用 <code>addToTotal</code> 函数时，给定相同的参数，它返回不同的结果，因为它会修改全局变量。因此，这个函数不是一个纯函数。</p><h2 id="javascript-中的副概念" tabindex="-1"><a class="header-anchor" href="#javascript-中的副概念" aria-hidden="true">#</a> JavaScript 中的副概念</h2><p>在 JavaScript 中，副作用指的是函数执行期间对除函数作用域内部的状态进行了修改或对外部环境产生了可观察的影响。副作用是指对函数外部状态的任何修改，包括但不限于：</p><ul><li>修改全局变量或对象属性</li><li>修改参数或引用对象的属性</li><li>执行 I/O 操作，如读取文件或修改数据库</li><li>抛出异常或改变控制流程</li><li>调用其他有副作用的函数</li></ul><p>函数的副作用可能会对代码的可读性、可维护性和可测试性产生负面影响。特别是在多线程和分布式系统中，副作用可能导致非常难以诊断的错误。</p><p>函数式编程是一种强调避免副作用的编程范式。在函数式编程中，更倾向于使用纯函数，因为它们不会产生副作用。这使得函数式编程更加模块化、可组合和易于测试。</p><h2 id="什么是-redux" tabindex="-1"><a class="header-anchor" href="#什么是-redux" aria-hidden="true">#</a> 什么是 Redux?</h2><p>Redux 是一种用于管理应用程序状态的 JavaScript 库。它可以在 React、Angular、Vue 或任何其他 JavaScript 应用程序中使用。Redux 通过强制将应用程序的状态存储在单个全局对象中来简化状态管理。这个全局状态对象是只读的，唯一可以更改它的方式是通过发出“操作”来修改它。操作是一个纯 JavaScript 对象，描述了发生了什么类型的更改以及需要更新状态的数据。</p><p>Redux 的工作方式可以概括为三个步骤：</p><ol><li>将应用程序状态存储在一个全局对象中</li><li>通过“操作”描述要更改的状态</li><li>通过“操作”修改状态</li></ol><p>Redux 的核心概念包括：</p><ol><li><strong>Store</strong>: 存储应用程序的状态，是一个只读的 JavaScript 对象。</li><li><strong>Action</strong>: 描述发生的更改的纯 JavaScript 对象。需要注意的是，所以的数据变化，都必须通过派发（dispatch）action 来更新。</li><li><strong>Reducer</strong>: 接收旧状态和操作对象，并返回新状态的纯函数。简单的说，<code>reducer</code>就是一个纯函数，作用就是将传入的 state 和 action 结合起来生成一个新的 state。</li><li><strong>Dispatch</strong>: 触发操作以更改应用程序状态的函数。</li></ol><p>Redux 可以帮助开发人员有效地管理复杂的应用程序状态，提高应用程序的可维护性和可测试性。</p><h3 id="redux-的三大原则" tabindex="-1"><a class="header-anchor" href="#redux-的三大原则" aria-hidden="true">#</a> Redux 的三大原则</h3><p>Redux 的三大原则是：</p><ol><li><strong>单一数据源</strong>：应用程序的所有状态都存储在单个全局状态树中，这使得状态的管理变得简单且一致。这也使得状态的变化可预测，因为应用程序中的任何状态变化都是通过操作发起的，这些操作以明确的方式描述了要更改的状态。</li><li><strong>状态不可变</strong>：状态是只读的，不允许在原处修改。相反，当状态需要更改时，Redux 使用纯函数 (Reducers) 来创建新状态对象。这确保了状态的可预测性和一致性，因为任何修改状态的尝试都会导致创建新的状态对象。</li><li><strong>纯函数修改状态</strong>：状态的变化由纯函数 (Reducers) 处理。这些函数接收旧状态和操作对象作为参数，并返回一个新状态对象。由于 Redux 使用纯函数修改状态，因此它使得应用程序状态更容易调试和测试，并且它的行为更容易预测和维护。</li></ol><h3 id="redux使用方法" tabindex="-1"><a class="header-anchor" href="#redux使用方法" aria-hidden="true">#</a> Redux使用方法</h3><ol><li><p>安装 Redux：可以使用 npm 或 yarn 安装 Redux。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$: <span class="token function">npm</span> <span class="token function">install</span> redux
<span class="token comment"># 或者</span>
$: <span class="token function">yarn</span> <span class="token function">add</span> redux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个存储状态的 store：使用 Redux 的 <code>createStore</code> 方法创建一个 store，并将一个 reducer 传递给它。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建 reducer 函数：一个 reducer 函数是一个纯函数，它接收旧状态和一个 action，然后返回一个新状态。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;INCREMENT&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;DECREMENT&#39;</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建 action：一个 action 是一个简单的 JavaScript 对象，它包含一个 <code>type</code> 属性和一些数据，用于描述要执行的操作。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> incrementAction <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;INCREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> decrementAction <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;DECREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>发送 action：要更新状态，需要通过 <code>store.dispatch</code> 方法发送一个 action。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>incrementAction<span class="token punctuation">)</span><span class="token punctuation">;</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>decrementAction<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>订阅状态变化：通过 <code>store.subscribe</code> 方法订阅 store 中状态的变化。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,26),c=[p];function o(i,l){return a(),s("div",null,c)}const u=n(t,[["render",o],["__file","React04.html.vue"]]);export{u as default};
