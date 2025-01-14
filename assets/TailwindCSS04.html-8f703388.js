import{_ as s,Z as d,a0 as i,F as o,a1 as r,X as c,Y as p,$ as g}from"./framework-5dd7fabc.js";const h={},t=d,e=i,u=o,n=r,l=g,x=c,m=p,f=t("h2",{id:"基本规律",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#基本规律","aria-hidden":"true"},"#"),e(" 基本规律")],-1),b=t("p",null,'在 Tailwind CSS 中，类名以"font"开头的用于控制字体相关属性的规则如下：',-1),k=t("code",null,"font-<name>",-1),v=t("code",null,"font-sans",-1),q={href:"https://tailwindcss.com/docs/font-family",target:"_blank",rel:"noopener noreferrer"},w=l("<li><p>字体大小（Font Size）：可以使用类名格式为&quot;<code>text-&lt;size&gt;</code>&quot;来设置指定的字体大小。例如，&quot;<code>text-sm</code>&quot;表示小号字体，&quot;<code>text-lg</code>&quot;表示大号字体。</p></li><li><p>字重（Font Weight）：可以使用类名格式为&quot;<code>font-&lt;weight&gt;</code>&quot;来设置指定的字重，具体可见下文对照表。例如，&quot;<code>font-semibold</code>&quot;表示半粗体字重，也就是 <code>font-weight: 600;</code>。</p></li><li><p>斜体（Italic）：可以使用类名格式为“<code>italic</code>”来应用斜体样式，正常则是“<code>not-italic</code>”。</p></li><li><p>字母间距（Letter Spacing，在一些设计和排版工具中也会用术语 tracking 表示，是的它除了追踪也有间距的含义）：因此使用类名格式为&quot;<code>tracking-&lt;value&gt;</code>&quot;来设置指定的字母间距。例如，&quot;<code>tracking-wide</code>&quot;表示较大的字母间距。</p></li><li><p>行高（Line Height，印刷术语是 leading，具体原因见下文 👇🏻）：因此使用类名格式为&quot;<code>leading-&lt;value&gt;</code>&quot;来设置指定的行高。例如，&quot;<code>leading-normal</code>&quot;表示正常的行高。</p></li><li><p>文本对齐（Text align）：可以使用类名格式为“<code>text-&lt;name&gt;</code>”来设置文本对齐方向。例如，“<code>text-center</code>”表示文本居中，也就是 <code>text-align: center;</code>。</p></li><li><p>文本颜色（Text Color）：可以使用类名格式为“<code>text-&lt;colorName&gt;</code>”来设置文本颜色，colorName 一般为“颜色名-颜色深度”。也有常用的颜色，无需设置色深，例如，&quot;<code>text-black</code>&quot; 表示黑色，也就是<code>color: rgb(0 0 0);</code>。</p></li><li><p>文本溢出，用 <code>text-{ellipsis|clip}</code>；</p></li><li><p>文本垂直对齐(Vertical Align)，通用公式为 <code>align-{value}</code>；</p></li><li><p>Whitespace 空格，通用公式为 <code>whitespace-{normal|nowrap|pre}</code> 等。</p></li>",10),_={href:"https://tailwindcss.com/docs/font-family",target:"_blank",rel:"noopener noreferrer"},y=l(`<h2 id="font-size-字体大小" tabindex="-1"><a class="header-anchor" href="#font-size-字体大小" aria-hidden="true">#</a> Font Size 字体大小</h2><p>字体大小（font size）的概念不仅仅包括字体大小本身（即 font-size 属性），还包括与之关联的行高（line height）。<code>line-height: 1.5;</code> 表示行高为字体大小的 1.5 倍。</p><ul><li><p>相对尺寸值：Tailwind CSS 使用相对于根元素（<code>&lt;html&gt;</code>）的字体大小的相对单位 &quot;rem&quot; 来定义字体大小。可以使用类名格式为 &quot;<code>text-&lt;size&gt;</code>&quot; 来设置不同的字体大小。常见的相对尺寸值包括：</p><ul><li>&quot;text-xs&quot;：额外小的字体</li><li>&quot;text-sm&quot;：小号字体</li><li>&quot;text-base&quot;：基准字体大小（通常为 16px）</li><li>&quot;text-lg&quot;：大号字体</li><li>&quot;text-xl&quot;：超大号字体</li><li>&quot;text-2xl&quot;、&quot;text-3xl&quot;、&quot;text-4xl&quot; 等：更大尺寸的字体</li></ul></li><li><p>命名尺寸：除了相对尺寸值之外，Tailwind CSS 还提供了一些预定义的命名尺寸用于定义字体大小。这些尺寸值可以在配置文件中自定义。通常，可以使用类名格式为 &quot;<code>text-&lt;size&gt;</code>&quot; 来应用命名尺寸，例如 &quot;text-xs&quot;、&quot;text-sm&quot;、&quot;text-md&quot;、&quot;text-lg&quot; 等。</p></li><li><p>自定义尺寸：同其它变量一样用中括号将字体大小包裹：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-[14px]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 解析为 font-size: 14px; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="font-weight-字重" tabindex="-1"><a class="header-anchor" href="#font-weight-字重" aria-hidden="true">#</a> Font Weight 字重</h2><p>字重表示字体的粗细，对照表如下：</p><table><thead><tr><th style="text-align:left;">Class</th><th style="text-align:left;">Properties</th></tr></thead><tbody><tr><td style="text-align:left;">font-thin</td><td style="text-align:left;">font-weight: 100;</td></tr><tr><td style="text-align:left;">font-extralight</td><td style="text-align:left;">font-weight: 200;</td></tr><tr><td style="text-align:left;">font-light</td><td style="text-align:left;">font-weight: 300;</td></tr><tr><td style="text-align:left;">font-normal</td><td style="text-align:left;">font-weight: 400;</td></tr><tr><td style="text-align:left;">font-medium</td><td style="text-align:left;">font-weight: 500;</td></tr><tr><td style="text-align:left;">font-semibold</td><td style="text-align:left;">font-weight: 600;</td></tr><tr><td style="text-align:left;">font-bold</td><td style="text-align:left;">font-weight: 700;</td></tr><tr><td style="text-align:left;">font-extrabold</td><td style="text-align:left;">font-weight: 800;</td></tr><tr><td style="text-align:left;">font-black</td><td style="text-align:left;">font-weight: 900;</td></tr></tbody></table><p>当然在开发过程中不一定能都记忆下来，所以常用的可能是自定义字重大小：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>font-[800]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 解析成 font-weight: 800; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>记得区分于字体大小 <code>class=&quot;text-[24px]&quot;</code> 。</p><h2 id="字母间距" tabindex="-1"><a class="header-anchor" href="#字母间距" aria-hidden="true">#</a> 字母间距</h2><p>在原生 CSS 中，字母间距是用 letter-spacing 表示。在 tailwind 的中是用 <code>tracking-{size}</code> 表示字母间距（track 意为追踪,也有字间距的含义。跟踪的时候保持一定距离）。</p><table><thead><tr><th style="text-align:left;">Class</th><th style="text-align:left;">Properties</th></tr></thead><tbody><tr><td style="text-align:left;">tracking-tighter</td><td style="text-align:left;">letter-spacing: -0.05em;</td></tr><tr><td style="text-align:left;">tracking-tight</td><td style="text-align:left;">letter-spacing: -0.025em;</td></tr><tr><td style="text-align:left;">tracking-normal</td><td style="text-align:left;">letter-spacing: 0em;</td></tr><tr><td style="text-align:left;">tracking-wide</td><td style="text-align:left;">letter-spacing: 0.025em;</td></tr><tr><td style="text-align:left;">tracking-wider</td><td style="text-align:left;">letter-spacing: 0.05em;</td></tr><tr><td style="text-align:left;">tracking-widest</td><td style="text-align:left;">letter-spacing: 0.1em;</td></tr></tbody></table><p>自定义数值:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tracking-[.25em]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 意为 letter-spacing: 0.25em;  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="line-height-行高" tabindex="-1"><a class="header-anchor" href="#line-height-行高" aria-hidden="true">#</a> Line Height 行高</h2><blockquote><p>历史上，印刷业使用铅字排版，字母是用铅制成的，而为了在两行文字之间留出足够的空间，通常需要在行的底部添加一些额外的铅(lead)。这个额外的空间被称为 &quot;leading&quot;，因此，&quot;leading&quot; 表示的是两行文字底部之间的空隙，也就是行高。</p></blockquote><p>用法同字母间距一样，这里仅做展示。</p><table><thead><tr><th>Class</th><th>Properties</th></tr></thead><tbody><tr><td>leading-3</td><td>line-height: .75rem; /_ 12px _/</td></tr><tr><td>leading-4</td><td>line-height: 1rem; /_ 16px _/</td></tr><tr><td>leading-5</td><td>line-height: 1.25rem; /_ 20px _/</td></tr><tr><td>leading-6</td><td>line-height: 1.5rem; /_ 24px _/</td></tr><tr><td>leading-7</td><td>line-height: 1.75rem; /_ 28px _/</td></tr><tr><td>leading-8</td><td>line-height: 2rem; /_ 32px _/</td></tr><tr><td>leading-9</td><td>line-height: 2.25rem; /_ 36px _/</td></tr><tr><td>leading-10</td><td>line-height: 2.5rem; /_ 40px _/</td></tr><tr><td>leading-none</td><td>line-height: 1;</td></tr><tr><td>leading-tight</td><td>line-height: 1.25;</td></tr><tr><td>leading-snug</td><td>line-height: 1.375;</td></tr><tr><td>leading-normal</td><td>line-height: 1.5;</td></tr><tr><td>leading-relaxed</td><td>line-height: 1.625;</td></tr><tr><td>leading-loose</td><td>line-height: 2;</td></tr></tbody></table><p>自定义行高:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>leading-[3rem]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 意为 line-height: 3rem; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="text-align-文本对齐" tabindex="-1"><a class="header-anchor" href="#text-align-文本对齐" aria-hidden="true">#</a> Text Align 文本对齐</h2><table><thead><tr><th>Class</th><th>Properties</th></tr></thead><tbody><tr><td>text-left</td><td>text-align: left;</td></tr><tr><td>text-center</td><td>text-align: center;</td></tr><tr><td>text-right</td><td>text-align: right;</td></tr><tr><td>text-justify</td><td>text-align: justify;</td></tr><tr><td>text-start</td><td>text-align: start;</td></tr><tr><td>text-end</td><td>text-align: end;</td></tr></tbody></table><h2 id="text-color-字体颜色" tabindex="-1"><a class="header-anchor" href="#text-color-字体颜色" aria-hidden="true">#</a> Text Color 字体颜色</h2>`,23),C={href:"https://tailwindcss.com/docs/customizing-colors",target:"_blank",rel:"noopener noreferrer"},S=l(`<figure><img src="https://cdn.jsdelivr.net/gh/rayadaschn/blogImage@master/img/202306271006893.png" alt="Colors" tabindex="0" loading="lazy"><figcaption>Colors</figcaption></figure><p>部分对照表如下：</p><table><thead><tr><th>Class</th><th>Properties</th></tr></thead><tbody><tr><td>text-inherit</td><td>color: inherit;</td></tr><tr><td>text-current</td><td>color: currentColor;</td></tr><tr><td>text-transparent</td><td>color: transparent;</td></tr><tr><td>text-black</td><td>color: rgb(0 0 0);</td></tr><tr><td>text-white</td><td>color: rgb(255 255 255);</td></tr><tr><td>text-slate-50</td><td>color: rgb(248 250 252);</td></tr><tr><td>text-slate-100</td><td>color: rgb(241 245 249);</td></tr><tr><td>text-slate-200</td><td>color: rgb(226 232 240);</td></tr></tbody></table><p>有两种形式，一种是默认文本颜色，inherit 继承父类，transparent 透明化；另外一种即是常用的颜色，格式为 “<code>text-&lt;colorName&gt;</code>”，colorName 一般为“颜色名-颜色深度”。</p><p>自定义颜色:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-[#50d71e]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 意为 color: #50d71e --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="text-overflow-文本溢出" tabindex="-1"><a class="header-anchor" href="#text-overflow-文本溢出" aria-hidden="true">#</a> Text Overflow 文本溢出</h2><p>文本溢出类名较少。</p><table><thead><tr><th>Class</th><th>Properties</th></tr></thead><tbody><tr><td>truncate</td><td>overflow: hidden;</td></tr><tr><td></td><td>text-overflow: ellipsis;</td></tr><tr><td></td><td>white-space: nowrap;</td></tr><tr><td>text-ellipsis</td><td>text-overflow: ellipsis;</td></tr><tr><td>text-clip</td><td>text-overflow: clip;</td></tr></tbody></table><p>Tailwind 非常贴心的为开发者提供了 truncate(截断)，表示文本溢出用省略号表示。</p><p>若想要书写则用第二种 <code>text-ellipsis</code> 以省略号展示，配合类名 <code>overflow-hidden</code>。</p><p><code>text-clip</code> 为直接截断。</p><h2 id="vertical-align-垂直对齐" tabindex="-1"><a class="header-anchor" href="#vertical-align-垂直对齐" aria-hidden="true">#</a> Vertical Align 垂直对齐</h2><table><thead><tr><th>Class</th><th>Properties</th></tr></thead><tbody><tr><td>align-baseline</td><td>vertical-align: baseline;</td></tr><tr><td>align-top</td><td>vertical-align: top;</td></tr><tr><td>align-middle</td><td>vertical-align: middle;</td></tr><tr><td>align-bottom</td><td>vertical-align: bottom;</td></tr><tr><td>align-text-top</td><td>vertical-align: text-top;</td></tr><tr><td>align-text-bottom</td><td>vertical-align: text-bottom;</td></tr><tr><td>align-sub</td><td>vertical-align: sub;</td></tr><tr><td>align-super</td><td>vertical-align: super;</td></tr></tbody></table><h2 id="whitespace-空格" tabindex="-1"><a class="header-anchor" href="#whitespace-空格" aria-hidden="true">#</a> Whitespace 空格</h2><table><thead><tr><th>Class</th><th>Properties</th></tr></thead><tbody><tr><td>whitespace-normal</td><td>white-space: normal;</td></tr><tr><td>whitespace-nowrap</td><td>white-space: nowrap;</td></tr><tr><td>whitespace-pre</td><td>white-space: pre;</td></tr><tr><td>whitespace-pre-line</td><td>white-space: pre-line;</td></tr><tr><td>whitespace-pre-wrap</td><td>white-space: pre-wrap;</td></tr><tr><td>whitespace-break-spaces</td><td>white-space: break-spaces;</td></tr></tbody></table>`,16);function T(z,N){const a=u("ExternalLinkIcon");return x(),m("div",null,[f,b,t("ul",null,[t("li",null,[t("p",null,[e('字体系列（Font Family）：可以使用类名格式为"'),k,e('"来设置指定字体系列。例如，"'),v,e('"表示使用无衬线字体系列，当然也有其它预设的一些'),t("a",q,[e("常用字体"),n(a)]),e("。")])]),w]),t("p",null,[e("更多介绍可参考"),t("a",_,[e("官网-排版"),n(a)])]),y,t("p",null,[e("Tailwind 的颜色有非常多，官方给开发人员提供了一些默认颜色类型，具体可参照"),t("a",C,[e("官网"),n(a)]),e("，部分截图如下：")]),S])}const P=s(h,[["render",T],["__file","TailwindCSS04.html.vue"]]);export{P as default};