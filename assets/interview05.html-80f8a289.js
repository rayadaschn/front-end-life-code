const e=JSON.parse('{"key":"v-da86f6d4","path":"/OneMoreThing/interview05.html","title":"Interview -- 前端安全和性能优化","lang":"zh-CN","frontmatter":{"title":"Interview -- 前端安全和性能优化","date":"2023-08-10T00:00:00.000Z","category":["anonymous"],"tag":["note"],"star":false,"sticky":false},"headers":[{"level":2,"title":"1. 前端安全","slug":"_1-前端安全","link":"#_1-前端安全","children":[]},{"level":2,"title":"2. 性能优化","slug":"_2-性能优化","link":"#_2-性能优化","children":[]}],"git":{"createdTime":1691627476000,"updatedTime":1691713228000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":2.17,"words":652},"filePathRelative":"OneMoreThing/interview05.md","localizedDate":"2023年8月10日","excerpt":"<h2> 1. 前端安全</h2>\\n<p>简单梳理一下前端的安全防范。常见的 web 前端攻击方式有哪些？主要是俩种：</p>\\n<ul>\\n<li>\\n<p><strong>XSS 跨站请求攻击</strong>\\n攻击者通过向受信任的网站注入恶意脚本，使其在用户浏览器中执行。这种攻击方式通常利用网站对用户输入的不充分验证或过滤，攻击者可以通过注入恶意脚本来窃取用户的信息、劫持会话、修改网页内容等。XSS 攻击可以分为三种类型：存储型 XSS、反射型 XSS 和 DOM 型 XSS。</p>\\n<p>为了防止 XSS 攻击，网站开发人员应该实施合适的输入验证和过滤机制，确保用户输入的数据被正确处理和显示，以防止恶意脚本的注入。另外，使用安全的编码实践（如转义特殊字符）也是重要的，如变“<code>&lt;script&gt;</code>”为 <code>&amp;lt;script&amp;gt</code>，从而直接显示而不会作为脚本执行。</p>\\n</li>\\n<li>\\n<p><strong>XSRF 跨站请求伪造</strong>\\n攻击者利用用户已经登录认证的状态下，通过诱使用户访问特定网页或点击恶意链接，来执行非预期的操作。攻击者通常构造一个恶意请求，该请求会利用受害者的身份认证信息，向目标网站发送请求，以执行一些恶意操作。这些操作可能包括更改用户设置、发起资金转账、删除数据等。</p>\\n<p>为了防止 XSRF 攻击，网站开发人员可以采取一些防范措施，如使用随机生成的 CSRF 令牌来验证每个请求的合法性、限制敏感操作的访问权限、使用 HTTP 头部中的 Referer 字段等。此外，用户也可以采取一些措施，如定期清除浏览器的缓存和 cookie，不点击可疑的链接，以减少受到 XSRF 攻击的风险。</p>\\n</li>\\n</ul>"}');export{e as data};
