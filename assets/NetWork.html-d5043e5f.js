import{_ as e,V as i,W as a,$ as l}from"./framework-2060dede.js";const t={},p=l('<h1 id="计算机网络自顶向下-第八版" tabindex="-1"><a class="header-anchor" href="#计算机网络自顶向下-第八版" aria-hidden="true">#</a> 计算机网络自顶向下_第八版</h1><blockquote><p>起因：后端给我定义了一个 counter-type 为 json 的接口，但是由于需求是上传文件。虽然，我知道理应改为 formData 的形式，但因为非科班出身，对于很多的基础性原理不是很了解，也没有底气进行反驳，导致浪费了很多时间。故此，还是系统学习一下。仅做记录。</p></blockquote><h2 id="chap-1-计算机网络和因特网" tabindex="-1"><a class="header-anchor" href="#chap-1-计算机网络和因特网" aria-hidden="true">#</a> Chap 1 计算机网络和因特网</h2><p>第一章对计算机网络做了简要概括，算是抛砖引玉式教学。</p><h3 id="互联网是什么" tabindex="-1"><a class="header-anchor" href="#互联网是什么" aria-hidden="true">#</a> 互联网是什么?</h3><p>因特网是一个世界范围内的计算机网络，即一个互联了遍及全世界数十亿计算设备的网络。</p><figure><img src="https://camo.githubusercontent.com/4370d8524d833b945269cc9f9b457b24af407001a6c7f68ed9f2310dca75c7a7/68747470733a2f2f747661312e73696e61696d672e636e2f6c617267652f3030386933736b4e6c7931677072616239383135736a333075303133736173772e6a7067" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>几个概念:</p><ul><li><p>套接字接口(socket interface) : 规定了运行在一个端系统上的程序请求因特网基础设施向运行在另一个端系统上的特定目的地程序交付数据的方式。</p></li><li><p><strong>“主机(host)”和“端系统”</strong>: 主机和端系统并没有不同。常见的端系统比如笔记本电脑，智能手机等等。Web服务器是一种端系统。</p></li><li><p><strong>接入网</strong> : 指端系统物理连接到其边缘路由器(edge router) 的网络：</p><ul><li>家庭接入: 光纤接入、DSL 接入；</li><li>企业（和家庭）接入：以太网和WiFi；</li><li>广域无线接入: 通过蜂窝网络提供商运营的基站，移动设备在基站10～100km内可以连接因特网，如 4、5G 等。</li></ul></li><li><p>协议层次:</p><ul><li><p>应用层：应用层协议包括HTTP、SMTP、FTP、DNS等等，应用层的消息分组称为报文（message）</p></li><li><p>运输层：运输层协议包括两种：TCP、UDP，运输层的分组称为报文段（segment）</p></li><li><p>网络层：网络层协议包括IP协议和一些路由选择协议，网络层的分组称为数据报（datagram）</p></li><li><p>链路层：链路层协议包括以太网、WiFi等协议，链路层的分组称为帧（frame）</p></li><li><p>物理层：物理层协议包括双绞铜线、同轴电缆等，物理层的分组称为比特（bit）</p><p>物理层上构建的是物理链路，数据链路层上构建的是逻辑链路或数据链路。</p></li></ul></li><li><p>网络攻防：</p><p>拒绝服务攻击（ Denial-of-Service attack，Dos），主要分为三类：</p><ul><li><p>弱点攻击：发送制作精细的报文，使服务器停止运行或崩溃</p></li><li><p>带宽洪泛：攻击者向目标主机发送大量分组，使接入链路拥塞，合法分组无法到达服务器</p></li><li><p>连接洪泛：攻击者在目标主机中创建大量半开或全开TCP连接，使得服务器停止接受合法连接</p><p>分布式 Dos( Distributed Dos, DDos ): 攻击者控制多个源并让每个源向目标猛烈发送流量。</p></li></ul><p>分组嗅探器（packet sniffer）会记录每个流经的分组，常作为一台被动的接收机部署在无线传输设备附近，类似的软件包括Wireshark;</p></li></ul>',9),r=[p];function c(o,s){return i(),a("div",null,r)}const d=e(t,[["render",c],["__file","NetWork.html.vue"]]);export{d as default};
