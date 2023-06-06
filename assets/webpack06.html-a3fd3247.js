const e=JSON.parse('{"key":"v-d8821260","path":"/Framework/webpack06.html","title":"Webpack  使用总结","lang":"zh-CN","frontmatter":{"title":"Webpack  使用总结","icon":"build","date":"2023-05-09T00:00:00.000Z","category":["框架"],"tag":["webpack"],"star":true,"sticky":false},"headers":[{"level":2,"title":"梳理 Webpack 运行流程","slug":"梳理-webpack-运行流程","link":"#梳理-webpack-运行流程","children":[]},{"level":2,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[{"level":3,"title":"entey","slug":"entey","link":"#entey","children":[]},{"level":3,"title":"output","slug":"output","link":"#output","children":[]},{"level":3,"title":"loader","slug":"loader","link":"#loader","children":[]},{"level":3,"title":"plugins","slug":"plugins","link":"#plugins","children":[]}]},{"level":2,"title":"性能优化","slug":"性能优化","link":"#性能优化","children":[]}],"git":{"createdTime":1683529288000,"updatedTime":1686016088000,"contributors":[{"name":"rayadaschn","email":"115447518+rayadaschn@users.noreply.github.com","commits":4}]},"readingTime":{"minutes":4.99,"words":1497},"filePathRelative":"Framework/webpack06.md","localizedDate":"2023年5月9日","excerpt":"<h1> Webpack 使用总结</h1>\\n<h2> 梳理 Webpack 运行流程</h2>\\n<p>Webpack 的运行流程可以简单地概括为以下几个步骤：</p>\\n<ol>\\n<li>读取 webpack.config.js 配置文件，生成一个编译器（compiler）实例，并将其传递给各个插件（plugins）的 apply 方法进行处理。</li>\\n<li>根据配置中设置的入口（entry），递归遍历所有入口文件，并使用配置中指定的 loader 对文件内容进行编译。这些 loader 在编译过程中可以修改文件内容，例如将 ES6 语法转换成 ES5 语法或者将 CSS 文件转换成 JavaScript 模块。</li>\\n<li>编译完成后，Webpack 将所有模块中的 <code>require()</code> 语法替换为 <code>__webpack_require__</code> ，以实现模块化操作。</li>\\n<li>接下来，Webpack 分析模块之间的依赖关系，创建一个称为 “Chunk” 的数据结构，其中包含了一组模块和它们之间的依赖关系。</li>\\n<li>最后，Webpack 将 Chunk 打包成一个自执行函数（IIFE），并在其中提供了<code>__webpack_require__</code> 作为模块加载器，以便浏览器可以正确加载和执行打包后的代码。</li>\\n</ol>"}');export{e as data};
