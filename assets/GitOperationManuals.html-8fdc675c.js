const e=JSON.parse('{"key":"v-fa440e10","path":"/SystemRequirements/GitOperationManuals.html","title":"Git 操作手册","lang":"zh-CN","frontmatter":{"title":"Git 操作手册","icon":"linux","date":"2023-02-1","category":["linux"],"tag":["linux"],"sticky":false,"star":true},"headers":[{"level":2,"title":"新建项目操作","slug":"新建项目操作","link":"#新建项目操作","children":[]},{"level":2,"title":"分支管理规范","slug":"分支管理规范","link":"#分支管理规范","children":[]},{"level":2,"title":"常用的 GIT 操作指令","slug":"常用的-git-操作指令","link":"#常用的-git-操作指令","children":[{"level":3,"title":"日常指令","slug":"日常指令","link":"#日常指令","children":[]},{"level":3,"title":"版本回退","slug":"版本回退","link":"#版本回退","children":[]},{"level":3,"title":"贮藏与清理","slug":"贮藏与清理","link":"#贮藏与清理","children":[]},{"level":3,"title":"打标签 Tag","slug":"打标签-tag","link":"#打标签-tag","children":[]},{"level":3,"title":"修改 Commit","slug":"修改-commit","link":"#修改-commit","children":[]},{"level":3,"title":"git config 定制","slug":"git-config-定制","link":"#git-config-定制","children":[]}]},{"level":2,"title":"配置代理","slug":"配置代理","link":"#配置代理","children":[]},{"level":2,"title":"开发流程","slug":"开发流程","link":"#开发流程","children":[{"level":3,"title":"上线流程","slug":"上线流程","link":"#上线流程","children":[]},{"level":3,"title":"Bugfix 流程","slug":"bugfix-流程","link":"#bugfix-流程","children":[]},{"level":3,"title":"持续集成: GitLab CI/CD","slug":"持续集成-gitlab-ci-cd","link":"#持续集成-gitlab-ci-cd","children":[]}]},{"level":2,"title":"Git 提交规范","slug":"git-提交规范","link":"#git-提交规范","children":[{"level":3,"title":"Header","slug":"header","link":"#header","children":[]},{"level":3,"title":"Body","slug":"body","link":"#body","children":[]},{"level":3,"title":"Footer","slug":"footer","link":"#footer","children":[]},{"level":3,"title":"特殊情况 Revert","slug":"特殊情况-revert","link":"#特殊情况-revert","children":[]}]},{"level":2,"title":"利用 git-gz 规范代码提交","slug":"利用-git-gz-规范代码提交","link":"#利用-git-gz-规范代码提交","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1683516320000,"updatedTime":1685337832000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":7}]},"readingTime":{"minutes":15.61,"words":4684},"filePathRelative":"SystemRequirements/GitOperationManuals.md","localizedDate":"2023年2月1日","excerpt":"<h1> Git 操作手册指南</h1>\\n<h2> 新建项目操作</h2>\\n<ol>\\n<li>\\n<p>克隆项目到本地：<code>git clone xxxxx</code> ；</p>\\n</li>\\n<li>\\n<p>设置 Git 用户信息：</p>\\n<ul>\\n<li>\\n<p>设置用户名: <code>git config user.name \\"yourName\\"</code></p>\\n</li>\\n<li>\\n<p>设置用户邮箱：<code>git config user.email \\"123xxx678+yourEmail@users.noreply.github.com\\"</code></p>\\n<p><code>noreply</code>为隐私邮箱，具体设置可看<a href=\\"https://docs.github.com/zh/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">GitHub 设置提交电子邮箱地址</a></p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>设置 GPG 签名：</p>\\n<p>若无 GPG 秘钥，可看 <a href=\\"/front-end-life/SystemRequirements/GIthubAddGPG.html\\" target=\\"blank\\">GIthub 添加 GPG 签名</a> 一文。</p>\\n<ul>\\n<li>\\n<p>列出本地公钥:</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>$: gpg --list-keys\\n\\n/xxxx<span class=\\"token punctuation\\">..</span>.xxxx/pubring.kbx\\n-----------------------------\\npub   edxxx <span class=\\"token number\\">2023</span>-xx-xx <span class=\\"token punctuation\\">[</span>SC<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">[</span>expires: <span class=\\"token number\\">2025</span>-xx-xx<span class=\\"token punctuation\\">]</span>\\n      C1Fxxxxxxx79D\\nuid           <span class=\\"token punctuation\\">[</span>ultimate<span class=\\"token punctuation\\">]</span> yourName <span class=\\"token operator\\">&lt;</span>123xxx678+yourEmail@users.noreply.github.com<span class=\\"token operator\\">&gt;</span>\\nsub   cvxxx <span class=\\"token number\\">2023</span>-xx-xx <span class=\\"token punctuation\\">[</span>E<span class=\\"token punctuation\\">]</span> <span class=\\"token punctuation\\">[</span>expires: <span class=\\"token number\\">2025</span>-xx-xx<span class=\\"token punctuation\\">]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>对提交 commit 进行签名：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>$: <span class=\\"token function\\">git</span> config user.signingkey <span class=\\"token punctuation\\">[</span>PRIMARYKEYID<span class=\\"token punctuation\\">]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div><ul>\\n<li>其中 <strong>PRIMARYKEYID</strong> 为公钥 <code>C1Fxxxxxxx79D</code></li>\\n</ul>\\n</li>\\n<li>\\n<p>设置自动对 commit 进行签名：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>$: <span class=\\"token function\\">git</span> config commit.gpgsign <span class=\\"token boolean\\">true</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n<blockquote>\\n<p>注：上述的 <code>git config</code> 均可在后面添加 <code>--global</code> 将设置变成全局。</p>\\n</blockquote>\\n</li>\\n</ol>"}');export{e as data};
