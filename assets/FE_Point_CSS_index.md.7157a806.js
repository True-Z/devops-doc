import{_ as a,o as e,c as t,Q as s}from"./chunks/framework.32dba02b.js";const b=JSON.parse('{"title":"CSS（层叠样式表）","description":"","frontmatter":{},"headers":[],"relativePath":"FE_Point/CSS/index.md","filePath":"FE_Point/CSS/index.md","lastUpdated":1708148918000}'),l={name:"FE_Point/CSS/index.md"},r=s(`<h1 id="css-层叠样式表" tabindex="-1">CSS（层叠样式表） <a class="header-anchor" href="#css-层叠样式表" aria-label="Permalink to &quot;CSS（层叠样式表）&quot;">​</a></h1><blockquote><p><strong>层叠样式表</strong> (Cascading Style Sheets，缩写为 <strong>CSS</strong>），是一种 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/StyleSheet" target="_blank" rel="noreferrer">样式表</a> 语言，用来描述 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML" target="_blank" rel="noreferrer">HTML</a> 或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/XML/XML_Introduction" target="_blank" rel="noreferrer">XML</a>（包括如 <a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG" target="_blank" rel="noreferrer">SVG</a>、<a href="https://developer.mozilla.org/zh-CN/docs/Web/MathML" target="_blank" rel="noreferrer">MathML</a>、<a href="https://developer.mozilla.org/zh-CN/docs/Glossary/XHTML" target="_blank" rel="noreferrer">XHTML</a> 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。</p><p>CSS 是<strong>开放 Web</strong> 的核心语言之一，并根据 <a href="https://www.w3.org/Style/CSS/#specs" target="_blank" rel="noreferrer">W3C 规范</a>在 Web 浏览器中进行了标准化。以前 CSS 规范的各个部分的开发是同步进行的，这种方式允许对最新推荐的 CSS 版本进行控制。你可能已经听说过 CSS1、CSS2.1 甚至 CSS3。但是以后将不会再有 CSS3 或者 CSS4；相反，现在的一切都是没有版本号的 CSS。</p><p>在 CSS2.1 之后，规范的制定范围不断地增加，并且不同的 CSS 模块进展差异如此之大，以至于<a href="https://www.w3.org/Style/CSS/current-work" target="_blank" rel="noreferrer">按照模块来单独进行开发并发布建议</a>变得更加有效。W3C 现在不再对 CSS 规范进行版本控制，而是定期对 <a href="https://www.w3.org/TR/css/" target="_blank" rel="noreferrer">CSS 规范的最新稳定状态</a>和各个模块的进展用快照来记录。CSS 模块现在有版本号或者级别，例如 <a href="https://drafts.csswg.org/css-color-5/" target="_blank" rel="noreferrer">CSS Color Module Level 5</a>。</p></blockquote><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><h3 id="层叠性" tabindex="-1">层叠性 <a class="header-anchor" href="#层叠性" aria-label="Permalink to &quot;层叠性&quot;">​</a></h3><ul><li>样式（权重相同）作用到标签上，发生了样式冲突，后边的样式会把前边的样式给覆盖掉（层叠掉）。</li><li>就近原则。</li><li>复合属性不写的值，取默认值。</li></ul><h3 id="继承性" tabindex="-1">继承性 <a class="header-anchor" href="#继承性" aria-label="Permalink to &quot;继承性&quot;">​</a></h3><ul><li>子元素和父元素样式没有冲突的时候，子元素会继承父元素的某些样式。 <ol><li>字体属性（font）</li><li>文本属性（text）</li><li>元素可见性（visibilit）</li><li>表格布局属性</li><li>列表属性（list）</li><li>光标属性（cursor）</li></ol></li><li>a 标签的字体颜色不能被继承。</li><li>h1-h6 标签字体的大小不能被继承。</li></ul><h3 id="优先级" tabindex="-1">优先级 <a class="header-anchor" href="#优先级" aria-label="Permalink to &quot;优先级&quot;">​</a></h3><blockquote><p>!important &gt; 行内式 &gt; id &gt; class &gt; element &gt; * &gt; 继承 &gt; 浏览器自带 &gt; 选择连接符：+，&gt;，-，，||（对权重的计算没影响，即不参与计算）。</p></blockquote><p><code>TIP</code></p><ul><li>多个样式作用到同一个类/标签，发生了样式冲突，<code>权重高的执行</code>。</li><li>不同的选择器作用到同一个类/标签，权重会叠加，<code>权重可以叠加但不可以进位</code>。</li><li>当子元素和父元素样式发生冲突的时候，权重相同的情况下，永远会执行子元素自身的样式。</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">∞</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># !important</span></span>
<span class="line"><span style="color:#B392F0;">1,0,0,0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 内样式（style）</span></span>
<span class="line"><span style="color:#B392F0;">0,1,0,0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># ID选择器（#id）</span></span>
<span class="line"><span style="color:#B392F0;">0,0,1,0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 类选择器（.class）；伪类选择器（:hover）；属性选择器（[type=&quot;radio&quot;]）</span></span>
<span class="line"><span style="color:#B392F0;">0,0,0,1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 元素选择器（div）；伪元素选择器（::before）</span></span>
<span class="line"><span style="color:#B392F0;">0,0,0,0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 通配符选择器（*）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">∞</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># !important</span></span>
<span class="line"><span style="color:#6F42C1;">1,0,0,0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 内样式（style）</span></span>
<span class="line"><span style="color:#6F42C1;">0,1,0,0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># ID选择器（#id）</span></span>
<span class="line"><span style="color:#6F42C1;">0,0,1,0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 类选择器（.class）；伪类选择器（:hover）；属性选择器（[type=&quot;radio&quot;]）</span></span>
<span class="line"><span style="color:#6F42C1;">0,0,0,1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 元素选择器（div）；伪元素选择器（::before）</span></span>
<span class="line"><span style="color:#6F42C1;">0,0,0,0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 通配符选择器（*）</span></span></code></pre></div><h2 id="屏幕适配" tabindex="-1">屏幕适配 <a class="header-anchor" href="#屏幕适配" aria-label="Permalink to &quot;屏幕适配&quot;">​</a></h2><h3 id="名词" tabindex="-1">名词 <a class="header-anchor" href="#名词" aria-label="Permalink to &quot;名词&quot;">​</a></h3><table><thead><tr><th>简写</th><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><strong>dp（physical pixel）</strong></td><td>物理像素</td><td>显示设备中一个最微小的物理部件。一个设备的物理像素是<strong>固定不变</strong>的。<br>每个像素可以根据操作系统设置自己的颜色和亮度。<br>所谓的一倍屏、二倍屏（Retina）、三倍屏，指的是设备以多少物理像素来显示一个 CSS 像素。<br>也就是说，多倍屏以更多更精细的物理像素点来显示一个 CSS 像素点。</td></tr><tr><td><strong>dip（Device Independent Pixels）</strong></td><td>设备独立像素</td><td>计算机坐标系统中得一个点，这个点代表一个可以由程序使用的虚拟像素（比如：css像素），然后由相关系统转换为物理像素。</td></tr><tr><td><strong>drp（device pixel ratio）</strong></td><td>设备像素比</td><td>定义了物理像素和设备独立像素的对应关系。<br>设备像素比（dpr）＝ 物理像素（dp） / 设备独立像素（dip）</td></tr><tr><td><strong>ppi（pixel per inch）</strong></td><td>屏幕像素密度</td><td>指一个设备表面上存在的像素数量，它通常以<strong>每英寸有多少像素</strong>来计算。<br>屏幕像素密度(ppi) = 对角线分辨率 / 对角线尺寸</td></tr><tr><td><strong>dpi（Dots Per Inch）</strong></td><td>每英寸点数</td><td>量度单位，用于点阵数码影像，指每一英寸长度中，取样、可显示或输出点的数目。<br>DPI是打印机、鼠标等设备分辨率的度量单位。</td></tr></tbody></table><h3 id="视窗" tabindex="-1">视窗 <a class="header-anchor" href="#视窗" aria-label="Permalink to &quot;视窗&quot;">​</a></h3><ul><li><strong>物理视窗（Visual Viewport）</strong>—— 表示物理屏幕的可视区域，屏幕显示器的物理像素，也就是长宽边上有多少个像素点。同样尺寸的屏幕，像素点越多，像素密度越大，它的硬件像素会更多。可以理解成物理视窗的大小就是屏幕的大小。</li><li><strong>布局视窗（Layout Viewport）</strong>—— 是由浏览器厂商提出的一种虚拟的布局视窗，用来解决页面在手机上显示的问题。这种视窗可以通过<code>&lt;meta&gt;</code>标签设置viewport来修改。每个浏览器默认都会有一个设置，例如iOS，Android这些机型设置布局视窗宽度为980px，所以PC上的网页基本能在手机上呈现，只不过元素看上去很小，一般可以通过手指动双击缩放网页。</li><li><strong>理想视窗（Ideal Viewport）</strong>—— 理想中的视口。这个概念最早由苹果提出，其他浏览器厂商陆续跟进，目的是解决在布局视窗下页面元素过小的问题，显示在理想视口中的页面具有最理想的宽度，用户无需进行缩放。所以理想视窗就相当于把布局视窗修改成一个理想的大小，这个大小和物理视窗基本相等。</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS" target="_blank" rel="noreferrer">MDN CSS</a></li></ul>`,19),o=[r];function n(p,i,d,c,h,S){return e(),t("div",null,o)}const u=a(l,[["render",n]]);export{b as __pageData,u as default};
