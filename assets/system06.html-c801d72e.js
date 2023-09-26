import{_ as s,Z as a,a0 as d,F as n,a1 as r,X as c,Y as l,$ as p}from"./framework-97fa2d96.js";const h={},e=a,o=d,m=n,i=r,u=p,_=c,g=l,S=e("p",null,"最近管理服务器有点多，记录一下服务器配置操作。",-1),f=e("h2",{id:"插件安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件安装","aria-hidden":"true"},"#"),o(" 插件安装")],-1),v=e("p",null,"首先进入插件商店安装 Remote 全家桶:",-1),b={href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh",target:"_blank",rel:"noopener noreferrer"},k={href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh-edit",target:"_blank",rel:"noopener noreferrer"},y={href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-explorer",target:"_blank",rel:"noopener noreferrer"},H=u(`<p>三者的作用各不相同，都要下载：</p><ul><li><p>Remote-SSH 插件：</p><p>Remote-SSH 插件使你能够通过 SSH 协议连接到远程服务器或虚拟机，并在本地的 VSCode 编辑器中进行开发。它提供了一个集成的终端，可以在远程服务器上执行命令，编辑远程文件，并在本地编写和调试代码。这个插件非常适用于需要在远程环境中进行开发的场景，如远程服务器的代码调试、远程容器的开发等。</p></li><li><p>Remote - SSH: Editing Configuration Files 插件：</p><p>Remote - SSH: Editing Configuration Files 插件是 Remote-SSH 插件的另一个附属插件，它提供了一个方便的方式来编辑远程服务器上的 SSH 配置文件。通过这个插件，你可以直接在 VSCode 编辑器中打开和编辑远程服务器上的 SSH 配置文件（如 ~/.ssh/config），并进行相应的修改和保存。</p></li><li><p>Remote Explorer 插件：</p><p>Remote Explorer 插件是 Remote-SSH 插件的附属插件，用于在 VSCode 中浏览和管理通过 Remote-SSH 连接的远程服务器。它提供了一个侧边栏面板，显示已连接的远程服务器列表，并允许你浏览服务器上的文件和文件夹，进行文件操作（如上传、下载、删除等），以及执行远程命令。</p></li></ul><h2 id="创建远程连接" tabindex="-1"><a class="header-anchor" href="#创建远程连接" aria-hidden="true">#</a> 创建远程连接</h2><p>点击 VScode 左侧 Remote 插件，在设置旁边的 ➕ 符号，创建一个新的 SSH 连接。</p><figure><img src="https://cdn.jsdelivr.net/gh/rayadaschn/blogImage@master/img/202309201540003.png" alt="远程连接" tabindex="0" loading="lazy"><figcaption>远程连接</figcaption></figure><p>格式同 ssh 远程连接的指令相同，如： <code>ssh -p22 ubuntu@127.0.0.1</code>。</p><p>然后右下角会提示更新了本地 ssh 的 <code>config</code> 文件，可以打开进行二次编辑（后续保存私钥免密登录会用到）。</p><p>键入远程连接指令后，实际上就是修改了 ssh 的<code>config</code> 文件。此时再次刷新插件(插件右上角)。</p><figure><img src="https://cdn.jsdelivr.net/gh/rayadaschn/blogImage@master/img/202309201547670.png" alt="刷新配置" tabindex="0" loading="lazy"><figcaption>刷新配置</figcaption></figure><p>刷新配置后，会多出一台远程电脑的配置。点击这台新建的远程电脑，有俩种连接方式：在当前界面连接远程电脑/新建一个窗口连接远程电脑。</p><p>点击远程连接按钮后，会弹出输入框要求输入登录密码，待键入密码后，便可连接远程服务了。</p><p>此时的右侧文件夹为同步服务器文件，直接操作会同步修改。</p><h2 id="设置免密登录" tabindex="-1"><a class="header-anchor" href="#设置免密登录" aria-hidden="true">#</a> 设置免密登录</h2><p>当前配置还是需要每次输入登录密码。此时我们打开底部的 terminal 终端输入框。</p><p>切换到 <code>.ssh</code> 目录去: <code>$ cd .ssh</code></p><p>在该目录下会有三个文件: <code>authorized_keys id_rsa id_rsa.pub</code></p><p>若没有，则自行在远程服务器新建秘钥： <code>$ ssh-keygen</code>，一路回车。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>authorized_keys 是一个用于存储 SSH 公钥的文件，用于实现 SSH 免密登录的授权列表。</p><p>当你使用 SSH 密钥对进行身份验证时，你会生成一对密钥：公钥和私钥。私钥保存在本地计算机上，而公钥则被添加到远程服务器上的 authorized_keys 文件中。</p><p>当你尝试使用 SSH 密钥进行连接时，远程服务器会检查你提供的公钥是否存在于 authorized_keys 文件中。如果存在匹配的公钥，服务器会验证该密钥，并允许你进行免密登录，而无需输入密码。</p><p>authorized_keys 文件通常位于每个用户的 <code>~/.ssh/</code> 目录下。每个用户都有自己的 authorized_keys 文件，用于管理其免密登录的授权。</p><p>在该文件中，每行包含一个公钥。你可以手动将公钥添加到 authorized_keys 文件中，也可以使用 <code>ssh-copy-id</code> 命令自动将公钥添加到远程服务器的 authorized_keys 文件中。</p><p>请注意，为了保证安全性，authorized_keys 文件的权限通常设置为只允许所有者进行读写操作（即权限为 600 或 400），以防止未授权的访问。</p></div><p>这是我们将公钥追加到 authorized_keys 文件中去， 获取公钥 <code>$ cat id_rsa.pub</code>。</p><p>在 authorized_keys 文件尾部追加公钥 <code>$ cat id_rsa.pub &gt;&gt; authorized_keys</code>。</p><p>最后一步需要将配对的私钥文件保存到本地的 <code>~/.ssh</code> 文件夹中：</p><ul><li>复制私钥 <code>$ cat id_rsa</code>;</li><li>保存到本地 <code>~/.ssh</code>文件夹中，文件名任取如：“id_rsa_ubuntu”</li></ul><p>由于自定义了私钥名，所以在当前文件夹的 config 文件中找到该 ssh 的配置，并在响应配置尾部追加 IdentityFile 指定 SSH 密钥文件路径：</p><div class="language-config line-numbers-mode" data-ext="config"><pre class="language-config"><code># T4 服务器
Host 127.0.0.1
  HostName 127.0.0.1
  Port 22
  User ubuntu
  IdentityFile ~/.ssh/id_rsa_ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function x(z,R){const t=m("ExternalLinkIcon");return _(),g("div",null,[S,f,v,e("ol",null,[e("li",null,[e("a",b,[o("Remote-SSH"),i(t)])]),e("li",null,[e("a",k,[o("Remote - SSH: Editing Configuration Files"),i(t)])]),e("li",null,[e("a",y,[o("Remote Explorer"),i(t)])])]),H])}const V=s(h,[["render",x],["__file","system06.html.vue"]]);export{V as default};
