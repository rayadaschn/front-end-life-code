import{_ as n,X as s,Y as a,$ as p}from"./framework-5dd7fabc.js";const t={},e=p,c=s,o=a,l=e(`<p>最近需要检查多语言文件中是否有重复的 key，于是写了一个 Node.js 脚本来实现这个功能。这个脚本会遍历指定目录下的所有 JSON 文件，检查每个文件中的 key 是否有重复，并将结果输出到控制台。同时，脚本还会将所有 key 存入一个缓存文件中，以便下次运行时可以快速查询。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> cacheFilePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;temp/i18n_keys_cache.json&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 检查并创建缓存目录（如果不存在）</span>
<span class="token keyword">const</span> cacheDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>cacheFilePath<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">recursive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获取传入的文件路径列表</span>
<span class="token keyword">const</span> files <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;🚀 ~ Starting file check:&#39;</span><span class="token punctuation">,</span> files<span class="token punctuation">)</span>

<span class="token comment">// 加载缓存并将所有 key 存入 Set 以提高查询效率</span>
<span class="token keyword">function</span> <span class="token function">loadCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>cacheFilePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cacheContent <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>cacheFilePath<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>cacheContent<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">,</span>
      <span class="token literal-property property">allKeysSet</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>cache<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 用 Set 存储所有 key</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">allKeysSet</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 保存共享缓存</span>
<span class="token keyword">function</span> <span class="token function">saveCache</span><span class="token punctuation">(</span><span class="token parameter">cache</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>cacheFilePath<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>cache<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获取 JSON 对象的最后一级 key</span>
<span class="token keyword">function</span> <span class="token function">getLastLevelKeys</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">function</span> <span class="token function">recurse</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> o <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> o <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> o<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">recurse</span><span class="token punctuation">(</span>o<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">recurse</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token keyword">return</span> keys
<span class="token punctuation">}</span>

<span class="token comment">// 检查重复 key 并更新缓存</span>
<span class="token keyword">function</span> <span class="token function">checkForDuplicateKeys</span><span class="token punctuation">(</span><span class="token parameter">files</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> cache<span class="token punctuation">,</span> allKeysSet <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">loadCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> duplicateKeys <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fileName <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 使用文件名作为键</span>
    <span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token keyword">const</span> content <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> jsonData <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>

    <span class="token keyword">const</span> keys <span class="token operator">=</span> <span class="token function">getLastLevelKeys</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span>

    <span class="token comment">// 从缓存中删除旧的 key</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> allKeysSet<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 从 Set 中删除</span>
      <span class="token keyword">delete</span> cache<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 检查重复 key，并记录</span>
    <span class="token keyword">let</span> hasDuplicate <span class="token operator">=</span> <span class="token boolean">false</span>
    keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>allKeysSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        duplicateKeys<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        hasDuplicate <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 更新缓存：仅在没有重复时保存新 key</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hasDuplicate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>fileName<span class="token punctuation">]</span> <span class="token operator">=</span> keys
      keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> allKeysSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 添加新 key 到 Set</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">saveCache</span><span class="token punctuation">(</span>cache<span class="token punctuation">)</span> <span class="token comment">// 保存更新后的共享缓存</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>duplicateKeys<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// 检查文件</span>
<span class="token keyword">const</span> duplicates <span class="token operator">=</span> <span class="token function">checkForDuplicateKeys</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>duplicates<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Duplicate keys found:&#39;</span><span class="token punctuation">,</span> duplicates<span class="token punctuation">)</span>
  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 退出并阻止提交</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;🚀 ~ i18n key check complete, no duplicates found&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[l];function u(k,r){return c(),o("div",null,i)}const v=n(t,[["render",u],["__file","Node11.html.vue"]]);export{v as default};
