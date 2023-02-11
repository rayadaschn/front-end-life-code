export const data = JSON.parse("{\"key\":\"v-37b4dfaa\",\"path\":\"/Mac_Linux%E9%85%8D%E7%BD%AE/gitlab%E6%93%8D%E4%BD%9C%E8%AE%B0%E5%BD%95.html\",\"title\":\"GitLab 操作手册记录\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"GitLab 操作手册记录\",\"index\":4,\"icon\":\"linux\",\"date\":\"2023-02-1\",\"category\":[\"linux\"],\"tag\":[\"linux\"],\"star\":true,\"sticky\":false,\"description\":\"GitLab 操作手册指南 [toc] 分支管理规范 master 主分支，受保护，不存放源代码，不直接提交代码，所有的 上线文件 需要推送到此分支。 develop 受保护，主分支，不能直接提交代码，在这个分支只能增加从 feat 合并 过来的 commit。 feature 开发新功能，以 develop 为基础，创建该分支， 命名规范：feature/xxx 。开发完成后，提交合并请求到 release 分支进行提测。 release 提测分支: 当有一组 feature 开发完成，首先会合并到 develop 分支，进入提测时，会创建 release 分支。 如果测试过程中若存在 bug 需要修复，则直接由开发者在 release 分支修复并提交。 当测试完成之后，合并 release 分支到 master 和 develop 分支，此时 master 为最新代码，用作上线。 hotfix 修复分支，从 develop 切出，命名规则同feature， 以 hotfix/ 命名。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/front-end-life/Mac_Linux%E9%85%8D%E7%BD%AE/gitlab%E6%93%8D%E4%BD%9C%E8%AE%B0%E5%BD%95.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Huy's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"GitLab 操作手册记录\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"GitLab 操作手册指南 [toc] 分支管理规范 master 主分支，受保护，不存放源代码，不直接提交代码，所有的 上线文件 需要推送到此分支。 develop 受保护，主分支，不能直接提交代码，在这个分支只能增加从 feat 合并 过来的 commit。 feature 开发新功能，以 develop 为基础，创建该分支， 命名规范：feature/xxx 。开发完成后，提交合并请求到 release 分支进行提测。 release 提测分支: 当有一组 feature 开发完成，首先会合并到 develop 分支，进入提测时，会创建 release 分支。 如果测试过程中若存在 bug 需要修复，则直接由开发者在 release 分支修复并提交。 当测试完成之后，合并 release 分支到 master 和 develop 分支，此时 master 为最新代码，用作上线。 hotfix 修复分支，从 develop 切出，命名规则同feature， 以 hotfix/ 命名。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-02-11T03:40:24.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"linux\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-01-31T16:00:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-02-11T03:40:24.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"GitLab 操作手册记录\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-01-31T16:00:00.000Z\\\",\\\"dateModified\\\":\\\"2023-02-11T03:40:24.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"分支管理规范\",\"slug\":\"分支管理规范\",\"link\":\"#分支管理规范\",\"children\":[]},{\"level\":2,\"title\":\"常用的 GIT 操作指令\",\"slug\":\"常用的-git-操作指令\",\"link\":\"#常用的-git-操作指令\",\"children\":[{\"level\":3,\"title\":\"日常指令\",\"slug\":\"日常指令\",\"link\":\"#日常指令\",\"children\":[]},{\"level\":3,\"title\":\"版本回退\",\"slug\":\"版本回退\",\"link\":\"#版本回退\",\"children\":[]},{\"level\":3,\"title\":\"贮藏与清理\",\"slug\":\"贮藏与清理\",\"link\":\"#贮藏与清理\",\"children\":[]},{\"level\":3,\"title\":\"修改 Commit\",\"slug\":\"修改-commit\",\"link\":\"#修改-commit\",\"children\":[]}]},{\"level\":2,\"title\":\"开发流程\",\"slug\":\"开发流程\",\"link\":\"#开发流程\",\"children\":[{\"level\":3,\"title\":\"上线流程\",\"slug\":\"上线流程\",\"link\":\"#上线流程\",\"children\":[]},{\"level\":3,\"title\":\"Bugfix 流程\",\"slug\":\"bugfix-流程\",\"link\":\"#bugfix-流程\",\"children\":[]},{\"level\":3,\"title\":\"持续集成: GitLab CI/CD\",\"slug\":\"持续集成-gitlab-ci-cd\",\"link\":\"#持续集成-gitlab-ci-cd\",\"children\":[]}]},{\"level\":2,\"title\":\"Git 提交规范\",\"slug\":\"git-提交规范\",\"link\":\"#git-提交规范\",\"children\":[{\"level\":3,\"title\":\"Header\",\"slug\":\"header\",\"link\":\"#header\",\"children\":[]},{\"level\":3,\"title\":\"Body\",\"slug\":\"body\",\"link\":\"#body\",\"children\":[]},{\"level\":3,\"title\":\"Footer\",\"slug\":\"footer\",\"link\":\"#footer\",\"children\":[]},{\"level\":3,\"title\":\"特殊情况 Revert\",\"slug\":\"特殊情况-revert\",\"link\":\"#特殊情况-revert\",\"children\":[]}]},{\"level\":2,\"title\":\"利用 git-gz 规范代码提交\",\"slug\":\"利用-git-gz-规范代码提交\",\"link\":\"#利用-git-gz-规范代码提交\",\"children\":[]},{\"level\":2,\"title\":\"参考文档\",\"slug\":\"参考文档\",\"link\":\"#参考文档\",\"children\":[]}],\"git\":{\"createdTime\":1675694747000,\"updatedTime\":1676086824000,\"contributors\":[{\"name\":\"Huy\",\"email\":\"rayadaschn@gmail.com\",\"commits\":4}]},\"readingTime\":{\"minutes\":9.93,\"words\":2979},\"filePathRelative\":\"Mac&Linux配置/gitlab操作记录.md\",\"localizedDate\":\"February 1, 2023\",\"excerpt\":\"<h1> GitLab 操作手册指南</h1>\\n<p>[toc]</p>\\n<h2> 分支管理规范</h2>\\n<ul>\\n<li>\\n<p><strong>master</strong> 主分支，受保护，不存放源代码，不直接提交代码，所有的 上线文件 需要推送到此分支。</p>\\n</li>\\n<li>\\n<p><strong>develop</strong> 受保护，主分支，不能直接提交代码，在这个分支只能增加从 <strong>feat</strong> 合并 过来的 <strong>commit</strong>。</p>\\n</li>\\n<li>\\n<p><strong>feature</strong> 开发新功能，以 <strong>develop</strong> 为基础，创建该分支， 命名规范：<code>feature/xxx</code> 。开发完成后，提交合并请求到 release 分支进行提测。</p>\\n</li>\\n<li>\\n<p><strong>release</strong> 提测分支:</p>\\n<p>当有一组 <strong>feature</strong> 开发完成，首先会合并到 <strong>develop</strong> 分支，进入提测时，会创建 <strong>release</strong> 分支。 如果测试过程中若存在 <strong>bug</strong> 需要修复，则直接由开发者在 <strong>release</strong> 分支修复并提交。 当测试完成之后，合并 <strong>release</strong> 分支到 <strong>master</strong> 和 <strong>develop</strong> 分支，此时 <strong>master</strong> 为最新代码，用作上线。</p>\\n</li>\\n<li>\\n<p><strong>hotfix</strong> 修复分支，从 <strong>develop</strong> 切出，命名规则同<strong>feature</strong>， 以 <code>hotfix/</code> 命名。</p>\\n</li>\\n</ul>\",\"autoDesc\":true}")
