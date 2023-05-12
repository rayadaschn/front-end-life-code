const n=JSON.parse('{"key":"v-be6a5ca2","path":"/SystemRequirements/system04.html","title":"为 MacOS 设置终端代理","lang":"zh-CN","frontmatter":{"title":"为 MacOS 设置终端代理","icon":"linux","date":"2023-02-1","category":["linux"],"tag":["linux"],"sticky":false},"headers":[{"level":2,"title":"环境","slug":"环境","link":"#环境","children":[]},{"level":2,"title":"为终端设置代理","slug":"为终端设置代理","link":"#为终端设置代理","children":[]},{"level":2,"title":"验证","slug":"验证","link":"#验证","children":[]},{"level":2,"title":"其它： 为 GIthub 设置代理","slug":"其它-为-github-设置代理","link":"#其它-为-github-设置代理","children":[]}],"git":{"createdTime":1683516320000,"updatedTime":1683887797000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":1.37,"words":410},"filePathRelative":"SystemRequirements/system04.md","localizedDate":"2023年2月1日","excerpt":"<h1> 为 MacOS 设置终端代理</h1>\\n<h2> 环境</h2>\\n<p>代理软件: <a href=\\"https://github.com/yichengchen/clashX/tags\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ClashX</a> , 软件的终端混合代理端口号默认为: <strong>7890</strong>\\nHTTP 代理端口号 和 Socks5 代理端口号默认未设置。</p>\\n<h2> 为终端设置代理</h2>\\n<ol>\\n<li>\\n<p>临时配置</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>$: <span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">http_proxy</span><span class=\\"token operator\\">=</span>http://127.0.0.1:7890\\n$: <span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">https_proxy</span><span class=\\"token operator\\">=</span><span class=\\"token variable\\">$http_proxy</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>此时已设置好代理。</p>\\n</li>\\n<li>\\n<p>快捷指令脚本</p>\\n<p>临时设置，代码过长，因此为其设置快捷指令。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 脚本内容</span>\\n<span class=\\"token comment\\"># 开启代理</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function-name function\\">proxy_on</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">http_proxy</span><span class=\\"token operator\\">=</span>http://127.0.0.1:7890\\n    <span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">https_proxy</span><span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">\\\\</span><span class=\\"token variable\\">$http_proxy</span>\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token parameter variable\\">-e</span> <span class=\\"token string\\">\\"终端代理已开启。\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\"># 关闭代理</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function-name function\\">proxy_off</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token builtin class-name\\">unset</span> http_proxy https_proxy\\n    <span class=\\"token builtin class-name\\">echo</span> <span class=\\"token parameter variable\\">-e</span> <span class=\\"token string\\">\\"终端代理已关闭。\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>指令脚本，我们一般写在 <code>~/.bash_profile</code> 内，因此，我们可以在终端输入如下指令，自动创建该文件。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">cat</span> <span class=\\"token operator\\">&gt;</span> ~/.bash_profile <span class=\\"token operator\\">&lt;&lt;</span> <span class=\\"token string\\">EOF\\nfunction proxy_on() {\\n    export http_proxy=http://127.0.0.1:7890\\n    export https_proxy=\\\\<span class=\\"token variable\\">$http_proxy</span>\\n    echo -e \\"终端代理已开启。\\"\\n}\\n\\nfunction proxy_off(){\\n    unset http_proxy https_proxy\\n    echo -e \\"终端代理已关闭。\\"\\n}\\nEOF</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>创建完脚本指令后，我们还需为每次打开 zsh 或者 终端 去 <code>source ~/.bash_profile</code> 该脚本。因此，我们应该在 <code>~/.zshrc</code> 中末尾追加该指令</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># ~/.zshrc 文件</span>\\n<span class=\\"token comment\\"># .... 其它配置</span>\\n\\n<span class=\\"token builtin class-name\\">source</span> ~/.bash_profile\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ol>"}');export{n as data};
