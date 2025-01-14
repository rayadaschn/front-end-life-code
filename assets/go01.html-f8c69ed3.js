const e=JSON.parse('{"key":"v-74253013","path":"/Framework/Go/go01.html","title":"GO语言基础","lang":"zh-CN","frontmatter":{"title":"GO语言基础","icon":"go","date":"2024-08-18T00:00:00.000Z","category":["框架"],"tag":["ssr"],"star":false,"sticky":false},"headers":[{"level":2,"title":"基本数据类型","slug":"基本数据类型","link":"#基本数据类型","children":[]},{"level":2,"title":"复合数据类型","slug":"复合数据类型","link":"#复合数据类型","children":[{"level":3,"title":"数组 array","slug":"数组-array","link":"#数组-array","children":[]},{"level":3,"title":"切片 slice","slug":"切片-slice","link":"#切片-slice","children":[]},{"level":3,"title":"无序集合 Map","slug":"无序集合-map","link":"#无序集合-map","children":[]},{"level":3,"title":"结构体 struct","slug":"结构体-struct","link":"#结构体-struct","children":[]}]},{"level":2,"title":"数据解析","slug":"数据解析","link":"#数据解析","children":[]}],"git":{"createdTime":1722870373000,"updatedTime":1724076702000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":9.72,"words":2917},"filePathRelative":"Framework/Go/go01.md","localizedDate":"2024年8月18日","excerpt":"<p>从这一节起，入门一下 Go 语音。</p>\\n<figure><img src=\\"https://cdn.jsdelivr.net/gh/rayadaschn/blogImage@master/img/202408042019407.png\\" alt=\\"golang\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>golang</figcaption></figure>\\n<h2> 基本数据类型</h2>\\n<p>基本的数据类型如下：</p>\\n<ol>\\n<li>布尔型(boolean): <code>true</code> 和 <code>false</code>;</li>\\n<li>整型(integer):\\n<ul>\\n<li>有符号：<code>int</code>(依据系统为 32/64 位)、<code>int8</code>、<code>int16</code>、<code>int32</code>、<code>int64</code>;</li>\\n<li>无符号：<code>uint</code>(依据系统为 32/64 位)、<code>uint8</code>、<code>uint16</code>、<code>uint32</code>、<code>uint64</code>、<code>uintptr</code>(无符号整型，用于存放指针);</li>\\n</ul>\\n</li>\\n<li>浮点型(float): <code>float32</code>、<code>float64</code>;</li>\\n<li>复数类型(complex): <code>complex64</code>、<code>complex128</code>;</li>\\n<li>字符串类型：<code>string</code>, 字符串是不可变的字节序列;</li>\\n<li>字符类型(character)：Go 语言没有专门的字符类型，但可以用 <code>byte</code>（表示单个字节的 ASCII 字符，等同于 <code>uint8</code> 的别名）或 <code>rune</code>（表示 Unicode 码点，等同于 <code>int32</code>）来表示字符。</li>\\n</ol>"}');export{e as data};