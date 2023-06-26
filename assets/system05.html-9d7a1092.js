import{_ as n,Z as d,a0 as a,F as l,a1 as r,X as s,Y as g,$ as p}from"./framework-97fa2d96.js";const h={},o=d,e=a,u=l,c=r,t=p,m=s,b=g,f=t('<h1 id="使用-picgo-github-图床" tabindex="-1"><a class="header-anchor" href="#使用-picgo-github-图床" aria-hidden="true">#</a> 使用 PicGo+GitHub 图床</h1><p>图床有很多，看了半天最终入手 <code>PicGo</code> ，开源简单省心。为此记录一下配置过程。</p><h2 id="创建自己的-github-图床" tabindex="-1"><a class="header-anchor" href="#创建自己的-github-图床" aria-hidden="true">#</a> 创建自己的 GitHub 图床</h2><p>首先要创建一个新的仓库，注意点是：</p><ul><li>选择 Public 开源</li><li>应当新增一个 <code>Readme.md</code> ，好处在于会自定义生成 <code>main</code> 分支</li></ul><p>创建完仓库后，我们从个人头像处进入账户设置（<code>Settings</code>） ,找到左侧边栏最底部的开发者设置（<code>Developer settings</code>）：</p><figure><img src="https://cdn.jsdelivr.net/gh/rayadaschn/blogImage@main/img/20230309131309.png" alt="Developer settings" tabindex="0" loading="lazy"><figcaption>Developer settings</figcaption></figure><p>然后在 <code>Personal access tokens</code> -&gt; <code>Tokens(classic)</code> ，点击右上角 <code>Generate new token</code> 选择<code>Generate new token(class)</code> :</p><figure><img src="https://cdn.jsdelivr.net/gh/rayadaschn/blogImage@main/img/20230309132556.png" alt="new token" tabindex="0" loading="lazy"><figcaption>new token</figcaption></figure><p>创建一个 Token ，用于操作仓库。由于是图传设置，所以有三个地方需要选择：</p><ol><li><code>token</code> 名称</li><li><code>token</code> 过期时间</li><li>定义 <code>scopes</code> 作用域定义个人令牌的访问</li></ol><p>最后点击生成，注意生成的 <code>token</code> 只会显示一次。</p><figure><img src="https://cdn.jsdelivr.net/gh/rayadaschn/blogImage@main/img/20230309133257.png" alt="token" tabindex="0" loading="lazy"><figcaption>token</figcaption></figure><p>到这里，Github 的图床配置已经完成，请务必妥善保存好生成的 <code>Token</code></p><h2 id="配置-picgo-图床工具" tabindex="-1"><a class="header-anchor" href="#配置-picgo-图床工具" aria-hidden="true">#</a> 配置 <code>PicGO</code> 图床工具</h2>',15),_={href:"https://github.com/Molunerfinn/PicGo/tags",target:"_blank",rel:"noopener noreferrer"},k=o("code",null,"beta",-1),G={href:"https://github.com/zWingz/picgo-plugin-github-plus",target:"_blank",rel:"noopener noreferrer"},x=t('<figure><img src="https://cdn.jsdelivr.net/gh/rayadaschn/blogImage@main/img/20230309134314.png" alt="PicGO Plug" tabindex="0" loading="lazy"><figcaption>PicGO Plug</figcaption></figure><p>如上，类似于 <code>VScode</code> 在输入框中输入插件名称而后安装。</p><p>安装完后，我们在此插件设置界面对插件进行设置，选择 <code>配置 uploader github-plus</code> ，对插件进行配置。</p><p>对各项进行说明:</p><ul><li><code>repo</code>：仓库名称，结构为 <code>账户名/仓库名</code> ;</li><li>branch：图床的分支，由于之前的操作，我们图床的当前分支为 <code>main</code>，若不是，则自行检查；</li><li><code>token</code>：之前设置的 token，复制下来，粘贴至此；</li><li><code>path</code>： 图床在仓库中的保存路径，我们设置为 &quot; <code>img</code>/ &quot; 下；</li><li><code>customUrl</code>: 自定义域名，可以用于加速图片访问，也可以不设置。格式为: <code>https://cdn.jsdelivr.net/gh/[github用户名]/[仓库名]@[分支名称]</code> ，注意分支名称，在此处我们是在 <code>main</code> 分支下。</li><li><code>origin</code>： 源为 github。</li></ul><p>同理，如果不用 <code>github-plus</code>，我们在 Github 图床中的设置也是和上面一样的。</p><p>好了，至此已经可以正常使用图床了，但是我们还可以设置快捷键，Mac 默认的是 <code>CommandOrControl + Shift</code> ，自动将剪切板中的图片上传至 Github。</p><p>另外，我们还可以自定义链接格式。在图片上传完毕后，使用图床的链接。这里我们使用默认的 <code>![$fileName]($url)</code></p><p>好了，到此我们的图床使用流程为：</p><ul><li>剪切板剪切图片；</li><li><code>CommandOrControl + Shift</code> 上传图片</li><li>待上传完毕，直接粘贴使用。</li></ul>',10);function v(P,y){const i=u("ExternalLinkIcon");return m(),b("div",null,[f,o("p",null,[e("首先下载运行 "),o("a",_,[e("PicGo 工具"),c(i)]),e(" ，依据自己的电脑配置下载对应的安装包，我们一般下载稳定版，不选 "),k,e("。")]),o("p",null,[e("下载安装完后，我们还需要，安装一款插件："),o("a",G,[e("picgo-plugin-github-plus"),c(i)]),e(" ，用于本地同步 Github 图床的上传和删除操作。")]),x])}const V=n(h,[["render",v],["__file","system05.html.vue"]]);export{V as default};
