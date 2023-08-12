import{_ as t,X as e,Y as l,$ as i}from"./framework-97fa2d96.js";const a={},r=i,d=e,n=l,s=r('<h1 id="计算机网络自顶向下-第八版" tabindex="-1"><a class="header-anchor" href="#计算机网络自顶向下-第八版" aria-hidden="true">#</a> 计算机网络自顶向下_第八版</h1><h2 id="chap-1-计算机网络和因特网" tabindex="-1"><a class="header-anchor" href="#chap-1-计算机网络和因特网" aria-hidden="true">#</a> Chap 1 计算机网络和因特网</h2><p>第一章对计算机网络做了简要概括，算是抛砖引玉式教学。</p><h3 id="互联网是什么" tabindex="-1"><a class="header-anchor" href="#互联网是什么" aria-hidden="true">#</a> 互联网是什么?</h3><p>因特网是一个世界范围内的计算机网络，即一个互联了遍及全世界数十亿计算设备的网络。</p><figure><img src="https://camo.githubusercontent.com/4370d8524d833b945269cc9f9b457b24af407001a6c7f68ed9f2310dca75c7a7/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f3030386933736b4e6c7931677072616239383135736a333075303133736173772e6a7067" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>几个概念:</p><ul><li><p>套接字接口(socket interface) : 规定了运行在一个端系统上的程序请求因特网基础设施向运行在另一个端系统上的特定目的地程序交付数据的方式。</p></li><li><p><strong>“主机(host)”和“端系统”</strong>: 主机和端系统并没有不同。常见的端系统比如笔记本电脑，智能手机等等。Web 服务器是一种端系统。</p></li><li><p><strong>接入网</strong> : 指端系统物理连接到其边缘路由器(edge router) 的网络：</p><ul><li>家庭接入: 光纤接入、DSL 接入；</li><li>企业（和家庭）接入：以太网和 WiFi；</li><li>广域无线接入: 通过蜂窝网络提供商运营的基站，移动设备在基站 10 ～ 100km 内可以连接因特网，如 4、5G 等。</li></ul></li><li><p>协议层次:</p><ul><li><p>应用层：应用层协议包括 HTTP、SMTP、FTP、DNS 等等，应用层的消息分组称为报文（message）</p></li><li><p>运输层：运输层协议包括两种：TCP、UDP，运输层的分组称为报文段（segment）</p></li><li><p>网络层：网络层协议包括 IP 协议和一些路由选择协议，网络层的分组称为数据报（datagram）</p></li><li><p>链路层：链路层协议包括以太网、WiFi 等协议，链路层的分组称为帧（frame）</p></li><li><p>物理层：物理层协议包括双绞铜线、同轴电缆等，物理层的分组称为比特（bit）</p><p>物理层上构建的是物理链路，数据链路层上构建的是逻辑链路或数据链路。</p></li></ul></li><li><p>网络攻防：</p><p>拒绝服务攻击（ Denial-of-Service attack，Dos），主要分为三类：</p><ul><li><p>弱点攻击：发送制作精细的报文，使服务器停止运行或崩溃</p></li><li><p>带宽洪泛：攻击者向目标主机发送大量分组，使接入链路拥塞，合法分组无法到达服务器</p></li><li><p>连接洪泛：攻击者在目标主机中创建大量半开或全开 TCP 连接，使得服务器停止接受合法连接</p><p>分布式 Dos( Distributed Dos, DDos ): 攻击者控制多个源并让每个源向目标猛烈发送流量。</p></li></ul><p>分组嗅探器（packet sniffer）会记录每个流经的分组，常作为一台被动的接收机部署在无线传输设备附近，类似的软件包括 Wireshark;</p></li></ul><h2 id="概述-tcp-ip-模型" tabindex="-1"><a class="header-anchor" href="#概述-tcp-ip-模型" aria-hidden="true">#</a> 概述 TCP/IP 模型</h2><figure><img src="https://cdn.jsdelivr.net/gh/rayadaschn/blogImage@master/img/202304171356212.png" alt="强缓存和协商缓存" tabindex="0" loading="lazy"><figcaption>强缓存和协商缓存</figcaption></figure><h2 id="chap-2-应用层" tabindex="-1"><a class="header-anchor" href="#chap-2-应用层" aria-hidden="true">#</a> Chap 2 应用层</h2><p><em>应用层协议</em> (application layer protocol) 定义了运行在不同端系统上的应用程序进程如何相互传递报文。它定义了信息交换的格式，然后把定义好的信息交给它下面一层的传输层去传输。</p><ul><li>交换的报文类型，例如请求报文和响应报文。</li><li>各种报文类型的语法，如报文中的各个字段及这些字段是如何描述的。</li><li>字段的语义，即这些字段中信息的含义。</li><li>确定一个进程合适以及如何发送报文，对报文进行响应和规则。</li></ul><p>区分网络应用和应用层协议很重要。应用层协议只是网络应用的一部分。如 HTTP 只是 Web 应用的一个部分， DASH 只是 Netflix 应用程序的一个小部分。</p><p>不同的应用有不同的协议，可以将应用层协议理解成信封里的信，你可以用各种语言写，但是收发双方要相互约定好用哪种语言进行沟通。常用的应用所对应的协议如下：</p><table><thead><tr><th style="text-align:left;">应用</th><th style="text-align:left;">应用架构</th><th style="text-align:left;">应用层协议</th><th style="text-align:left;">底层传输层协议</th></tr></thead><tbody><tr><td style="text-align:left;">电子邮件</td><td style="text-align:left;">CS</td><td style="text-align:left;">SMTP</td><td style="text-align:left;">TCP</td></tr><tr><td style="text-align:left;">远程终端登录</td><td style="text-align:left;">CS</td><td style="text-align:left;">Telnet</td><td style="text-align:left;">TCP</td></tr><tr><td style="text-align:left;">Web</td><td style="text-align:left;">CS</td><td style="text-align:left;">HTTP</td><td style="text-align:left;">TCP</td></tr><tr><td style="text-align:left;">文件传输</td><td style="text-align:left;">CS</td><td style="text-align:left;">FTP</td><td style="text-align:left;">TCP</td></tr><tr><td style="text-align:left;">流媒体</td><td style="text-align:left;">CS</td><td style="text-align:left;">HTTP</td><td style="text-align:left;">TCP</td></tr><tr><td style="text-align:left;">网络电话视频</td><td style="text-align:left;">P2P</td><td style="text-align:left;">SIP, RTP, or Proprietary</td><td style="text-align:left;">UDP or TCP</td></tr><tr><td style="text-align:left;">文件分享</td><td style="text-align:left;">P2P</td><td style="text-align:left;">BitTorrent</td><td style="text-align:left;">TCP</td></tr></tbody></table><p>如 Web 应用中的 HTTP 协议（HyperText Transfer Protocol），定义了报文的结构以及客户和服务器进行报文交换的方式。</p><h2 id="chap-3-运输层" tabindex="-1"><a class="header-anchor" href="#chap-3-运输层" aria-hidden="true">#</a> Chap 3 运输层</h2><p><strong>运输层协议</strong>为运行在<strong>不同主机上</strong>的<strong>应用进程</strong>之间提供了<strong>逻辑通信</strong>；<strong>网络层</strong>则是提供了<strong>主机之间</strong>的<strong>逻辑通信</strong>。</p><p>以写信为例，假设小区是主机（端系统），小区里有很多居民住户他们表示进程。应用层报文是信封里的信件本身，运输层则是小区里收集信件和分发信件处理的菜鸟驿站，网络层则是公司快递（包括邮车）。</p><p>运输层协议有俩种，一种是 TCP（传输控制协议）一种是 UDP（用户数据报协议）。TCP 比较靠谱，它需要先进行三次握手，而 UDP 只管发信息，不确保用户是否准确收到，常用于直播等领域。</p><p>先明确一个概念，不同的进程上运行着不同的应用程序。而数据要从进程中出来，需要一个<strong>通信机制</strong>，<strong>套接字(socket)</strong> 就是其中一种，与其他通信机制不同的是，它<strong>可用于不同机器之间的进程通信</strong>。可以理解成菜鸟驿站提供的上门取件和送货上门服务。</p><p>运输层报文段中的数据交付到正确的套接字的工作叫多路分解( demultiplexing )，就是邮件分发操作；</p><p>在源主机从不同套接字中收集数据块，并未每个数据块封装上首部件信息（便于后期分解）从而生成报文段，然后将报文段传递到网络层的所有工作叫做多路复用。</p><p>来看看运输层是分解服务的流程：在主机上的每个套接字能够分配一个端口号，当报文段到达主机时，运输层检查报文段中的目的端口号，并将其定向到相应的套接字。然后报文段中的数据通过套接字进入其所连接的进程。UDP 大体上是这样做的，而 TCP 则更加复杂。</p>',25),p=[s];function o(g,c){return d(),n("div",null,p)}const h=t(a,[["render",o],["__file","NetWork.html.vue"]]);export{h as default};