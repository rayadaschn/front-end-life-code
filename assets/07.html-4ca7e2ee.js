import{_ as t,X as e,Y as i,$ as l}from"./framework-97fa2d96.js";const r={},n=l,a=e,o=i,s=n('<p>在此梳理 Http 相关的常见知识点。</p><h2 id="http-常见的状态码有哪些" tabindex="-1"><a class="header-anchor" href="#http-常见的状态码有哪些" aria-hidden="true">#</a> http 常见的状态码有哪些</h2><p>HTTP（超文本传输协议）是用于在客户端和服务器之间传输数据的协议。HTTP 状态码是服务器向客户端返回的三位数字代码，用于表示请求的处理结果。以下是一些常见的 HTTP 状态码及其含义：</p><h3 id="_1xx-信息性状态码" tabindex="-1"><a class="header-anchor" href="#_1xx-信息性状态码" aria-hidden="true">#</a> 1xx（信息性状态码）</h3><p>1xx（信息性状态码）：表示服务器已接收到请求并正在处理。</p><ul><li>100 Continue（继续）：客户端应继续发送请求。</li><li>101 Switching Protocols（切换协议）：服务器要求客户端切换协议。</li></ul><h3 id="_2xx-成功状态码" tabindex="-1"><a class="header-anchor" href="#_2xx-成功状态码" aria-hidden="true">#</a> 2xx（成功状态码）</h3><p>2xx（成功状态码）：表示请求已成功接收、理解和处理。</p><ul><li>200 OK（成功）：请求已成功处理。</li><li>201 Created（已创建）：请求已成功创建新的资源。</li><li>204 No Content（无内容）：服务器已成功处理请求，但无返回内容。</li></ul><h3 id="_3xx-重定向状态码" tabindex="-1"><a class="header-anchor" href="#_3xx-重定向状态码" aria-hidden="true">#</a> 3xx（重定向状态码）</h3><p>3xx（重定向状态码）：表示需要进一步操作以完成请求。</p><ul><li>301 Moved Permanently（<strong>永久</strong>重定向）：请求的资源已永久移动到新位置。</li><li>302 Found（<strong>临时</strong>重定向）：请求的资源暂时移动到新位置。</li><li>304 Not Modified（<strong>未修改</strong>）：客户端缓存的资源仍然有效，无需重新下载。</li></ul><h3 id="_4xx-客户端错误状态码" tabindex="-1"><a class="header-anchor" href="#_4xx-客户端错误状态码" aria-hidden="true">#</a> 4xx（客户端错误状态码）</h3><p>4xx（客户端错误状态码）：表示客户端发出的请求有错误。</p><ul><li>400 Bad Request（错误请求）：服务器无法理解请求的语法。</li><li>401 Unauthorized（未授权）：请求需要身份验证。</li><li>404 Not Found（未找到）：请求的资源不存在。</li></ul><h3 id="_5xx-服务器错误状态码" tabindex="-1"><a class="header-anchor" href="#_5xx-服务器错误状态码" aria-hidden="true">#</a> 5xx（服务器错误状态码）</h3><p>5xx（服务器错误状态码）：表示服务器在处理请求时发生错误。</p><ul><li>500 Internal Server Error（内部服务器错误）：服务器遇到了意外情况，无法完成请求。</li><li>503 Service Unavailable（服务不可用）：服务器暂时无法处理请求，通常是由于过载或维护。</li></ul><h2 id="http-有哪些常见-header" tabindex="-1"><a class="header-anchor" href="#http-有哪些常见-header" aria-hidden="true">#</a> http 有哪些常见 Header</h2><p>HTTP 协议中有许多常见的头部（Header），这些头部用于在请求和响应中传递附加信息。梳理一些常见的 HTTP 头部：</p><ol><li>Accept：指定客户端能够处理的媒体类型。</li><li><strong>Content-Type</strong>：指定请求或响应中的实体主体的媒体类型。</li><li>Authorization：提供身份验证凭据，用于访问受限资源。</li><li>User-Agent：标识发出请求的用户代理（通常是浏览器）。</li><li>Cookie：包含已存储在客户端的 HTTP cookie。</li><li><strong>Cache-Control</strong>：指定缓存机制是否可以缓存请求/响应，并在多久后过期。</li><li>Content-Length：表示请求或响应中的实体主体长度（以字节为单位）。</li><li>Location：指定重定向的 URL。</li><li><strong>Referer</strong>：指定请求的来源页面的 URL，是否跨域。</li><li><strong>If-Modified-Since</strong>：指定如果资源自指定日期以来没有被修改过，则发送请求。</li><li>Set-Cookie：在响应中设置 HTTP cookie。</li><li>Server：指定 HTTP 服务器的软件标识和版本号。</li><li>X-Requested-With：指定异步请求的类型（通常与 AJAX 一起使用）。</li></ol><h2 id="osi-模型-网络通信体系结构" tabindex="-1"><a class="header-anchor" href="#osi-模型-网络通信体系结构" aria-hidden="true">#</a> OSI 模型: 网络通信体系结构</h2><h3 id="网络接口层-network-interface-layer" tabindex="-1"><a class="header-anchor" href="#网络接口层-network-interface-layer" aria-hidden="true">#</a> 网络接口层（Network Interface Layer）</h3><p>类似于 OSI 模型的物理层和数据链路层的组合，处理硬件设备和设备之间的通信。</p><h3 id="网络层-internet-layer" tabindex="-1"><a class="header-anchor" href="#网络层-internet-layer" aria-hidden="true">#</a> 网络层（Internet Layer）</h3><p>类似于 OSI 模型的网络层，负责处理数据包的路由和寻址。</p><h3 id="传输层-transport-layer" tabindex="-1"><a class="header-anchor" href="#传输层-transport-layer" aria-hidden="true">#</a> 传输层（Transport Layer）</h3><p>对应于 OSI 模型的传输层，提供端到端的通信和数据流控制，包括 TCP 和 UDP 协议。</p><h3 id="应用层-application-layer" tabindex="-1"><a class="header-anchor" href="#应用层-application-layer" aria-hidden="true">#</a> 应用层（Application Layer）</h3><p>与 OSI 模型的应用层对应，为用户提供网络服务和应用程序接口。</p><h2 id="tcp-与-udp-区别" tabindex="-1"><a class="header-anchor" href="#tcp-与-udp-区别" aria-hidden="true">#</a> tcp 与 udp 区别</h2><p>TCP（Transmission Control Protocol）和 UDP（User Datagram Protocol）是两种不同的传输层协议，用于在计算机网络中传输数据。它们有一些关键的区别：</p><ol><li><p><strong>连接性：</strong></p><ul><li><strong>TCP：</strong> 提供面向连接的服务，使用三次握手建立连接，确保可靠的数据传输，有错误检测和重传机制。</li><li><strong>UDP：</strong> 是一种面向无连接的协议，不建立连接，数据直接发送，没有握手过程，也没有确认和重传机制。</li></ul></li><li><p><strong>可靠性：</strong></p><ul><li><strong>TCP：</strong> 提供可靠的数据传输，通过序号、确认和重传机制来确保数据的完整性和顺序性，适用于对数据完整性要求较高的应用。</li><li><strong>UDP：</strong> 不提供可靠性保证，数据可能丢失或以不同的顺序到达，适用于对实时性要求高、可以容忍少量数据丢失的应用。</li></ul></li><li><p><strong>流式传输 vs. 面向消息：</strong></p><ul><li><strong>TCP：</strong> 提供面向流的传输，数据被看作是连续的字节流，保证了字节的顺序传输。</li><li><strong>UDP：</strong> 提供面向消息的传输，每个数据报是独立的消息单元，不会像 TCP 那样分割成连续的字节流。</li></ul></li><li><p><strong>头部开销：</strong></p><ul><li><strong>TCP：</strong> 有较大的头部开销，包含序号、确认号、窗口大小等信息，用于维护连接状态。</li><li><strong>UDP：</strong> 头部开销较小，只包含源端口、目标端口、长度和校验和等基本信息。</li></ul></li><li><p><strong>应用场景：</strong></p><ul><li><strong>TCP：</strong> 适用于要求可靠性、顺序性、流控制的应用，如文件传输、网页浏览、电子邮件等。</li><li><strong>UDP：</strong> 适用于对实时性要求较高、能够容忍少量数据丢失的应用，如实时音视频传输、在线游戏等。</li></ul></li><li><p><strong>连接数量：</strong></p><ul><li><strong>TCP：</strong> 面向连接，一对一通信，每个连接都需要占用一些资源。</li><li><strong>UDP：</strong> 无连接，支持一对一、一对多、多对一和多对多的通信方式。</li></ul></li></ol><p>总的来说，TCP 和 UDP 各有优势，选择使用哪个取决于具体应用的需求。如果需要可靠性和有序性，选择 TCP；如果对实时性要求高且能容忍一些数据丢失，选择 UDP。</p><h2 id="tcp-如何保证数据稳定" tabindex="-1"><a class="header-anchor" href="#tcp-如何保证数据稳定" aria-hidden="true">#</a> tcp 如何保证数据稳定？</h2><p>TCP（Transmission Control Protocol）通过一系列的机制来保证数据的可靠性、完整性和有序性：</p><ol><li><p><strong>三次握手（Three-Way Handshake）:</strong></p><ul><li>在建立连接时，客户端和服务器之间进行三次握手，确保双方都能够接收和发送数据。这三次握手分别是： <ol><li>客户端向服务器发送 SYN（同步）包。</li><li>服务器收到 SYN 包后，回复一个 ACK（确认）和自己的 SYN 包。</li><li>客户端收到服务器的 ACK 和 SYN 包后，回复一个 ACK，完成三次握手。</li></ol></li></ul></li><li><p><strong>序号和确认号：</strong></p><ul><li>TCP 中的每个字节都有一个唯一的序号，通过序号可以确保数据的有序传输。每个接收方发送的确认号表示接收到的数据字节的下一个期望的序号。</li></ul></li><li><p><strong>滑动窗口（Sliding Window）:</strong></p><ul><li>TCP 使用滑动窗口机制来实现流量控制。发送方和接收方都有一个滑动窗口，用于控制可以发送或接收的数据的数量。通过调整窗口大小，可以避免发送方速度过快导致接收方无法处理的情况。</li></ul></li><li><p><strong>确认机制：</strong></p><ul><li>TCP 接收方收到数据后，会向发送方发送一个确认（ACK）包，告知发送方已经成功接收到数据。如果发送方在一定时间内未收到确认，会触发重传机制，重新发送未被确认的数据。</li></ul></li><li><p><strong>超时重传：</strong></p><ul><li>如果发送方在一定时间内未收到确认，就会认为数据丢失，触发超时重传机制，重新发送未被确认的数据。</li></ul></li><li><p><strong>流量控制：</strong></p><ul><li>TCP 使用滑动窗口和通告窗口大小的机制来进行流量控制，确保发送方不会发送过多的数据给接收方，避免数据的积压和溢出。</li></ul></li><li><p><strong>拥塞控制：</strong></p><ul><li>TCP 通过拥塞窗口和拥塞避免算法来控制网络中的拥塞情况，防止过多的数据拥塞网络导致性能下降。这一机制有助于避免网络中的拥塞和数据丢失。</li></ul></li></ol><p>总体而言，TCP 通过这些机制来保证数据的稳定传输。这些机制包括建立连接的握手过程、有序的序号和确认号机制、滑动窗口的流量控制、超时重传、确认机制等。这些特性使得 TCP 成为一种可靠的传输协议，适用于许多对数据可靠性要求较高的应用场景。</p><h2 id="cdn-的原理-cdn-回溯实现原理" tabindex="-1"><a class="header-anchor" href="#cdn-的原理-cdn-回溯实现原理" aria-hidden="true">#</a> CDN 的原理，CDN 回溯实现原理</h2><p>CDN（Content Delivery Network，内容分发网络）是一种网络架构，旨在提高用户访问网站时的性能和可用性。CDN 通过将内容分发到全球各地的多个服务器节点，以就近的方式向用户提供服务。以下是 CDN 的基本原理以及 CDN 回源的实现方法：</p><h3 id="cdn-的基本原理" tabindex="-1"><a class="header-anchor" href="#cdn-的基本原理" aria-hidden="true">#</a> CDN 的基本原理</h3><ol><li><p><strong>内容存储：</strong> 静态资源（如图片、CSS、JavaScript、视频等）被存储在 CDN 提供商的多个分布式服务器上，这些服务器通常位于全球不同的地理位置。</p></li><li><p><strong>DNS 解析：</strong> 用户访问网站时，会经过本地 DNS 服务器解析域名。如果域名对应的 CDN 配置了 CNAME（别名）记录，DNS 解析结果会指向 CDN 提供商的域名。</p></li><li><p><strong>请求转发：</strong> 用户的请求通过 CDN 的全局负载均衡系统，该系统选择最优的边缘节点（Edge Server）来响应请求。这个选择通常基于距离用户的物理距离、服务器的负载情况等因素。</p></li><li><p><strong>缓存机制：</strong> CDN 边缘节点会缓存静态资源。如果资源已经缓存在边缘节点上，并且仍然有效（未过期），则直接从边缘节点返回，提高访问速度。</p></li><li><p><strong>动态请求回源：</strong> 对于动态内容（如 HTML、API 请求等），CDN 可能需要回源到源服务器获取最新的内容。这个回源过程发生在用户请求的边缘节点无法直接提供有效缓存时。</p></li><li><p><strong>负载均衡：</strong> CDN 在全球范围内有多个边缘节点，可以通过负载均衡来确保请求分散到各个节点，避免某个节点过载。</p></li></ol><h3 id="cdn-回源的实现" tabindex="-1"><a class="header-anchor" href="#cdn-回源的实现" aria-hidden="true">#</a> CDN 回源的实现</h3><p>CDN 回源是指当 CDN 边缘节点无法提供有效的缓存时，需要向源服务器请求最新的内容。回源的实现通常包括以下步骤：</p><ol><li><p><strong>未命中缓存：</strong> 当边缘节点无法命中有效缓存时，会发生回源。</p></li><li><p><strong>DNS 解析：</strong> 边缘节点通过源站的域名进行 DNS 解析，找到源站的 IP 地址。</p></li><li><p><strong>建立连接：</strong> 边缘节点与源站建立连接，通常使用 TCP 协议。</p></li><li><p><strong>请求资源：</strong> 边缘节点向源站请求最新的资源，这个请求可能是对整个页面的请求，也可能是对某个特定资源的请求，这取决于用户的原始请求。</p></li><li><p><strong>返回响应：</strong> 源站将最新的资源返回给边缘节点。</p></li><li><p><strong>缓存更新：</strong> 边缘节点将获取到的资源缓存起来，以便未来的请求可以直接从边缘节点获取。</p></li></ol><p>回源机制的设计可以根据具体的 CDN 提供商和用户需求进行调整，以实现更灵活、高效的内容分发。</p><h2 id="强制缓存和协商缓存" tabindex="-1"><a class="header-anchor" href="#强制缓存和协商缓存" aria-hidden="true">#</a> 强制缓存和协商缓存</h2><h3 id="强制缓存" tabindex="-1"><a class="header-anchor" href="#强制缓存" aria-hidden="true">#</a> 强制缓存</h3><p>强制缓存是一种缓存策略，它通过在响应头中设置一些特定的 HTTP 头部来告知客户端在一定时间内使用本地缓存而不发送请求到服务器。以下是强制缓存的主要步骤和相关的 HTTP 头部：</p><ol><li><p>客户端首次请求资源时，服务器通过响应头设置以下头部来指定缓存的有效期限：</p><ul><li>Expires：是 http 1.0 的规范，值是一个 GMT 格式的时间点字符串，指定资源的过期日期和时间。</li><li>Cache-Control：是 http 1.1 的规范，一般常用该字段的 max-age 值来进行判断，它是一个相对时间。指定缓存的行为和参数。常见的值包括： <ul><li><strong>max-age</strong>：指定缓存的最大有效时间（以秒为单位），比如 .Cache-Control:max-age=1000 代表资源的有效期是 1000 秒。</li><li><strong>no-cache</strong>：强制客户端发送请求到服务器进行验证。</li><li>no-store：禁止缓存。</li><li>public：允许任何中间缓存和客户端缓存。</li><li>private：只允许客户端缓存。</li></ul></li></ul></li><li><p>客户端收到响应后，将资源和相关的缓存信息存储在本地缓存中，以备将来使用。</p></li><li><p>当客户端再次请求相同的资源时，客户端会首先检查本地缓存。</p><ul><li>如果缓存未过期（根据 Expires 或 Cache-Control 中的 max-age 判断），客户端直接使用本地缓存，不发送请求到服务器。</li><li>如果缓存已过期或被标记为无效，客户端发送请求到服务器，并在请求头中包含一些条件，以便服务器确定是否返回新的资源。 <ul><li>If-Modified-Since：指定上次缓存的<strong>修改时间</strong>，服务器可以根据该值判断资源是否有更新。</li><li>If-None-Match：指定上次缓存的<strong>实体标签（ETag）</strong>，服务器可以根据该值判断资源是否有更新。</li></ul></li></ul></li></ol><blockquote><p>Expires 是一个具体的过期时间，而 Cache-Control 是更灵活和精确的缓存控制机制(功能更强大)。现代开发中 Expires 逐渐被淘汰了，原因在于 Expires 失效时间是一个绝对时间，如果服务器时间与客户端时间偏差较大时，就会导致缓存混乱。 Cache-Control 的优先级高于 Expires，如果两者同时存在，Cache-Control 会覆盖 Expires。</p></blockquote><p>通过使用强制缓存，可以减少对服务器的请求次数，提高网页加载速度和性能。但需要注意，如果服务器更新了资源并且将缓存的过期时间设置为很长，客户端可能无法及时获取到更新的内容。在这种情况下，可以考虑使用适当的缓存控制策略，如缓存验证（Conditional Requests）来平衡缓存和资源更新的需求。</p><h3 id="协商缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a> 协商缓存</h3><p>协商缓存是一种缓存策略，它通过在请求和响应中使用特定的 HTTP 头部来减少对服务器的请求次数，同时确保客户端始终获取到最新的资源。协商缓存的主要步骤和相关的 HTTP 头部如下：</p><ol><li>客户端发送请求到服务器，并在请求头中包含以下头部字段中的一个： <ul><li>If-Modified-Since：指定上次缓存的修改时间。</li><li>If-None-Match：指定上次缓存的实体标签（ETag）。</li></ul></li><li>服务器收到请求后，会检查请求头中的 If-Modified-Since 和 If-None-Match 字段，并与资源的最新信息进行比较。 <ul><li>如果资源自上次请求以来没有修改过，服务器会返回状态码 304 Not Modified，表示资源未修改。</li><li>如果资源已经修改过，服务器会正常返回最新的资源，并在响应头中以下头部字段中的一个： <ul><li>Last-Modified/If-Modified-Since 二者的值都是 GMT 格式的时间字符串， Last-Modified 标记最后文件修改时间， 下一次请求时，请求头中会带上 If-Modified-Since 值就是 Last-Modified 告诉服务器我本地缓存的文件最后修改的时间，在服务器上根据文件的最后修改时间判断资源是否有变化。</li><li>Etag/If-None-Match：由服务器为每一个资源生成的唯一标识串，只要资源有变化就这个值就会改变。</li></ul></li></ul></li><li>客户端收到响应后，会根据服务器返回的状态码和头部字段进行处理： <ul><li>如果收到状态码 304 Not Modified，表示资源未修改，客户端可以使用本地缓存，无需重新下载。</li><li>如果收到新的资源或其他状态码，客户端将更新本地缓存，并存储服务器返回的最新的 Last-Modified 和 ETag 字段，以备将来的请求使用。</li></ul></li></ol><p>协商缓存通过在请求和响应中使用 If-Modified-Since 或 If-None-Match 字段，使客户端与服务器进行交互，以确定资源是否需要更新。这种方式可以减少对服务器的请求次数，并确保客户端获取到最新的资源。协商缓存比强制缓存更具灵活性，适用于<strong>频繁更新的资源</strong>或<strong>需要精确控制缓存</strong>的情况。</p><blockquote><p>总体来说它们各自的优先级是:</p><p>强制缓存&gt; 协商缓存，优先判断是否为强制缓存，再走协商缓存。</p><p>Cache-Control &gt; expires &gt; Etag &gt; Last-Modified</p><p>请求资源的顺序为: 浏览器会获取该缓存资源的 header 中的信息，根据 response header 中的 expires 和 cache-control 来判断是否命中强缓存，如果命中则直接从缓存中获取资源。</p><p>如果没有命中强缓存，浏览器就会发送请求到服务器，这次请求会带上 IF-Modified-Since 或者 IF-None-Match, 它们的值分别是第一次请求返回 Last-Modified 或者 Etag，由服务器来对比这一对字段来判断是否命中。如果命中，则服务器返回 304 状态码，并且不会返回资源内容，浏览器会直接从缓存获取；否则服务器最终会返回资源的实际内容，并更新 header 中的相关缓存字段。</p></blockquote><h2 id="扫码登录和付费如何做" tabindex="-1"><a class="header-anchor" href="#扫码登录和付费如何做" aria-hidden="true">#</a> 扫码登录和付费如何做?</h2><p>扫码登录通常不需要在手机端和 PC 端建立长连接。一般情况下，扫码登录可以通过以下步骤实现：</p><ol><li><p><strong>生成二维码：</strong> 服务器生成一个唯一的二维码，包含登录信息的标识符。</p></li><li><p><strong>展示二维码：</strong> 将生成的二维码展示给用户，用户可以使用手机上的扫码工具（如微信、支付宝等）扫描二维码。</p></li><li><p><strong>扫码确认：</strong> 用户的扫码工具扫描到二维码后，会将扫描结果发送给服务器确认。</p></li><li><p><strong>授权：</strong> 服务器收到扫码确认后，向用户返回一个授权页面，用户在手机端确认授权。</p></li><li><p><strong>登录成功：</strong> 一旦用户在手机上确认了授权，服务器将通知 PC 端登录成功。</p></li></ol><p>在上述过程中，没有必要建立长连接。通常，扫码登录过程可以通过轮询或者推送的方式来实现，而不是通过长连接。这种方式在大多数情况下已经足够满足扫码登录的需求。</p><p>如果考虑到实时性的要求，可以使用 WebSocket 来实现更实时的通信，但并不是必须的。下面是 WebSocket 的基本原理：</p><h3 id="websocket-原理" tabindex="-1"><a class="header-anchor" href="#websocket-原理" aria-hidden="true">#</a> WebSocket 原理：</h3><p>WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议。它允许在客户端和服务器之间进行双向数据传输，而不需要经过多次 HTTP 握手。</p><ol><li><p><strong>握手过程：</strong></p><ul><li>客户端发起 WebSocket 连接请求，包含特殊的<code>Upgrade</code>和<code>Connection</code>头。</li><li>服务器回应，表示同意升级协议，握手成功。</li></ul></li><li><p><strong>保持连接：</strong></p><ul><li>一旦 WebSocket 连接建立，客户端和服务器之间可以在一个持久的连接上发送消息。这避免了 HTTP 每次请求都需要重新建立连接的开销。</li></ul></li><li><p><strong>双向通信：</strong></p><ul><li>WebSocket 允许客户端和服务器之间实现双向通信，任何一方都可以发送消息给另一方。</li></ul></li><li><p><strong>推送数据：</strong></p><ul><li>服务器可以主动推送数据给客户端，而不需要客户端发起请求。</li></ul></li></ol><p>WebSocket 的实现通常依赖于浏览器提供的 API，在前端使用 JavaScript 来建立 WebSocket 连接，而在后端使用相关的 WebSocket 库。在扫码登录的场景中，WebSocket 可以用于实时通知 PC 端登录结果，但是否使用 WebSocket 还取决于具体的业务需求。</p><h2 id="刷新页面对-http-缓存有什么影响" tabindex="-1"><a class="header-anchor" href="#刷新页面对-http-缓存有什么影响" aria-hidden="true">#</a> 刷新页面对 http 缓存有什么影响</h2><table><thead><tr><th style="text-align:center;">用户操作</th><th style="text-align:center;">Expires/Cache-Control</th><th style="text-align:center;">Last-Modied/Etag</th></tr></thead><tbody><tr><td style="text-align:center;">地址栏回车</td><td style="text-align:center;">有效</td><td style="text-align:center;">有效</td></tr><tr><td style="text-align:center;">页面链接跳转</td><td style="text-align:center;">有效</td><td style="text-align:center;">有效</td></tr><tr><td style="text-align:center;">新开窗口</td><td style="text-align:center;">有效</td><td style="text-align:center;">有效</td></tr><tr><td style="text-align:center;">前进回退</td><td style="text-align:center;">有效</td><td style="text-align:center;">有效</td></tr><tr><td style="text-align:center;">F5 刷新</td><td style="text-align:center;">无效(有争议，不同浏览器反馈不一致)</td><td style="text-align:center;">有效</td></tr><tr><td style="text-align:center;">Ctrl+F5 强制刷新</td><td style="text-align:center;">无效</td><td style="text-align:center;">无效</td></tr></tbody></table><h2 id="三级缓存" tabindex="-1"><a class="header-anchor" href="#三级缓存" aria-hidden="true">#</a> 三级缓存</h2><p>请求步骤为:</p><ol><li>查看本地内存是否存在</li><li>查看本地硬盘是否存在</li><li>网络请求资源,并缓存到硬盘和内存中</li></ol>',71),d=[s];function h(p,c){return a(),o("div",null,d)}const u=t(r,[["render",h],["__file","07.html.vue"]]);export{u as default};
