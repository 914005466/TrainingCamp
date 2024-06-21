##域名系统
**域名系统**（英语：Domain Name System，缩写：DNS）是互联网的一项服务。它作为将域名和IP地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。DNS使用TCP和UDP端口53。当前，对于每一级域名长度的限制是63个字符，域名总长度则不能超过253个字符。

开始时，域名的字符仅限于ASCII字符的一个子集。2008年，ICANN通过一项决议，允许使用其它语言作为互联网顶级域名的字符。使用基于Punycode码的IDNA系统，可以将Unicode字符串映射为有效的DNS字符集。因此，诸如“XXX.中国”、“XXX.台湾”的域名可以在地址栏直接输入并访问，而不需要安装插件。但是，由于英语的广泛使用，使用其他语言字符作为域名会产生多种问题，例如难以输入、难以在国际推广等。

###历史

DNS最早于1983年由保罗·莫卡派乔斯（Paul Mockapetris）发明；原始的技术规范在882号因特网标准草案（RFC 882）中发布。1987年发布的第1034和1035号草案修正了DNS技术规范，并废除了之前的第882和883号草案。在此之后对因特网标准草案的修改基本上没有涉及到DNS技术规范部分的改动。

早期的域名必须以英文句号.结尾。例如，当用户访问维基百科的HTTP服务时必须在地址栏中输入：http://www.wikipedia.org.，这样DNS才能够进行域名解析。如今DNS服务器已经可以自动补上结尾的句号。

###记录类型

DNS系统中，常见的资源记录类型有：

- 主机记录（A记录）：RFC 1035定义，A记录是用于名称解析的重要记录，它将特定的主机名映射到对应主机的IP地址上。
- 别名记录（CNAME记录）: RFC 1035定义，CNAME记录用于将某个别名指向到某个A记录上，这样就不需要再为某个新名字另外创建一条新的A记录。
- IPv6主机记录（AAAA记录）: RFC 3596定义，与A记录对应，用于将特定的主机名映射到一个主机的IPv6地址。
- 服务位置记录（SRV记录）: RFC 2782定义，用于定义提供特定服务的服务器的位置，如主机（hostname），端口（port number）等。
- 域名服务器记录（NS记录） ：用来指定该域名由哪个DNS服务器来进行解析。 您注册域名时，总有默认的DNS服务器，每个注册的域名都是由一个DNS域名服务器来进行解析的，DNS服务器NS记录地址一般以以下的形式出现： ns1.domain.com、ns2.domain.com等。 简单的说，NS记录是指定由哪个DNS服务器解析你的域名。
- NAPTR记录：RFC 3403定义，它提供了正则表达式方式去映射一个域名。NAPTR记录非常著名的一个应用是用于ENUM查询。

##传输协议
###DNS over UDP/TCP/53 （Do53）
从 1983 年起源到最近，DNS 主要回答 UDP 端口 53 上的查询。此类查询包括从客户端以单个 UDP 数据包发送的明文请求，响应为 从服务器以单个 UDP 数据包发送的明文回复。 当应答的长度超过 512 字节并且客户端和服务器都支持 DNS 扩展机制 (EDNS) 时，可能会使用更大的 UDP 数据包。 DNS-over-UDP 的使用受到限制，其中包括缺乏传输层加密、身份验证、可靠传递和消息长度。 1989 年，RFC 1123 为 DNS 查询、回复，特别是区域传输指定了可选的 TCP 传输。 通过长响应的分段，TCP 允许更长的响应、可靠的传递和重用客户端和服务器之间的长期连接。

###DNS over TLS （DoT）
加密 DNS 的 IETF 标准于 2016 年出现，利用传输层安全（TLS）来保护整个连接，而不仅仅是 DNS 有效负载。DoT 服务器侦听 TCP 端口 853。RFC 7858 指定可以支持机会加密和认证加密，但没有强制服务器或客户端认证。

###DNS over QUIC （DoQ）
互联网工程任务组的 RFC 9250 描述了 DNS over QUIC。
###DNS over HTTPS （DoH）
2018 年引入了 DNS 查询传输的竞争标准，通过 HTTPS 隧道传输 DNS 查询数据（进而通过 TLS 传输 HTTP）。DoH 被推广为对网络更友好的 DNS 替代方案，因为与 DNSCrypt 一样，它在 TCP 端口 443 上传输，因此看起来类似于网络流量，尽管它们在实践中很容易区分。 DoH 因相对于 DoT 降低用户匿名性而受到广泛批评。
###Oblivious DNS 和 Oblivious DoH
Oblivious DNS （ODNS） 是由普林斯顿大学和芝加哥大学的研究人员发明和实施的，作为未加密 DNS 的扩展，在 DoH 本身被标准化和广泛部署之前。Apple 和 Cloudflare 随后将该技术部署在 DoH 环境中，称为 Oblivious DoH （ODoH）。ODoH 将入口/出口分离（在 ODNS 中发明）与 DoH 的 HTTPS 隧道和 TLS 传输层加密结合在一个协议中。
###DNS over Tor
与其他 Internet 协议一样，DNS 可以通过 VPN 和隧道运行。 DNS-over-Tor 自 2019 年以来已经变得足够普遍以保证其自己经常使用的首字母缩略词的一种用途。Oblivious DNS 的隐私效果可以通过使用预先存在的入口和出口节点的 Tor 网络以及 TLS 提供的传输层加密来获得。

###DNSCrypt
DNSCrypt协议于 2011 年在 IETF 标准框架之外开发，在递归解析器的下游侧引入了 DNS 加密，其中客户端使用服务器的公钥加密查询有效负载，这些公钥在 DNS 中发布（而不是依赖于第三方方证书颁发机构），进而可能受到 DNSSEC 签名的保护。DNSCrypt 使用 TCP 或 UDP 端口 443，与 HTTPS 加密的网络流量相同的端口。这不仅引入了关于查询内容的隐私，而且还引入了防火墙穿越能力的重要衡量标准。在 2019 年，DNSCrypt 进一步扩展以支持“匿名”模式，类似于提议的“Oblivious DNS”，其中入口节点接收已使用不同服务器的公钥加密的查询，并将其转发给该服务器服务器充当出口节点，执行递归解析。创建用户/查询对的隐私，因为入口节点不知道查询的内容，而出口节点不知道客户端的身份。 DNSCrypt 于 2011 年 12 月由 OpenDNS 首次在生产环境中实现。有几个免费和开源软件实现额外集成了 ODoH。它适用于各种操作系统，包括 Unix、Apple iOS、Linux、Android 和 MS Windows。

##技术实现
###概述
DNS通过允许一个名称服务器把它的一部分名称服务（众所周知的zone）“委托”给子服务器而实现了一种层次结构的名称空间。此外，DNS还提供了一些额外的信息，例如系统别名、联系信息以及哪一个主机正在充当系统组或域的邮件枢纽。

任何一个使用IP的计算机网络可以使用DNS来实现它自己的私有名称系统。尽管如此，当提到在公共的Internet DNS系统上实现的域名时，术语“域名”是最常使用的。

这是基于984个全球范围的“根域名服务器”（分成13组，分别编号为A至M）。从这984个根服务器开始，余下的Internet DNS命名空间被委托给其他的DNS服务器，这些服务器提供DNS名称空间中的特定部分。

###软件
DNS系统是由各式各样的DNS软件所驱动的，例如：

- BIND（Berkeley Internet Name Domain），使用最广的DNS软件
- DJBDNS（Dan J Bernstein's DNS implementation）
- MaraDNS
- Name Server Daemon（Name Server Daemon）
- PowerDNS
- Dnsmasq

###国际化域名
**Punycode**是一个根据RFC 3492标准而制定的编码系统，主要用于把域名从地方语言所采用的Unicode编码转换成为可用于DNS系统的编码。而该编码是根据域名相异字表 （页面存档备份，存于互联网档案馆）（由IANA制定），Punycode可以防止所谓的IDN欺骗。
###域名解析
举一个例子，zh.wikipedia.org 作为一个域名就和IP地址198.35.26.96 相对应。DNS就像是一个自动的电话号码簿，我们可以直接拨打198.35.26.96 的名字zh.wikipedia.org 来代替电话号码（IP地址）。DNS在我们直接调用网站的名字以后就会将像zh.wikipedia.org 一样便于人类使用的名字转化成像198.35.26.96 一样便于机器识别的IP地址。

DNS查询有两种方式：递归和迭代。DNS客户端设置使用的DNS服务器一般都是递归服务器，它负责全权处理客户端的DNS查询请求，直到返回最终结果。而DNS服务器之间一般采用迭代查询方式。

以查询 zh.wikipedia.org 为例：

- 客户端发送查询报文"query zh.wikipedia.org"至DNS服务器，DNS服务器首先检查自身缓存，如果存在记录则直接返回结果。
- 如果记录老化或不存在，则：
   1. DNS服务器向根域名服务器发送查询报文"query zh.wikipedia.org"，根域名服务器返回顶级域 .org 的顶级域名服务器地址。
   2. DNS服务器向 .org 域的顶级域名服务器发送查询报文"query zh.wikipedia.org"，得到二级域 .wikipedia.org 的权威域名服务器地址。
	3. DNS服务器向 .wikipedia.org 域的权威域名服务器发送查询报文"query zh.wikipedia.org"，得到主机 zh 的A记录，存入自身缓存并返回给客户端。
### WHOIS（域名数据库查询）
一个域名的**所有者**可以通过查询WHOIS数据库而被找到；对于大多数根域名服务器，基本的WHOIS由ICANN维护，而WHOIS的细节则由控制那个域的域注册机构维护。

对于240多个国家代码顶级域名（ccTLDs），通常由该域名权威注册机构负责维护WHOIS。例如中国互联网络信息中心（China Internet Network Information Center）负责.CN域名的WHOIS维护，香港互联网注册管理有限公司（Hong Kong Internet Registration Corporation Limited）负责.HK域名的WHOIS维护，台湾网络信息中心（Taiwan Network Information Center）负责.TW域名的WHOIS维护。

