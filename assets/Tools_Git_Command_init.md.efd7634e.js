import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.32dba02b.js";const h=JSON.parse('{"title":"Init Command","description":"","frontmatter":{},"headers":[],"relativePath":"Tools_Git/Command/init.md","filePath":"Tools_Git/Command/init.md","lastUpdated":1708148918000}'),o={name:"Tools_Git/Command/init.md"},p=l(`<h1 id="init-command" tabindex="-1">Init Command <a class="header-anchor" href="#init-command" aria-label="Permalink to &quot;Init Command&quot;">​</a></h1><h2 id="git-init" tabindex="-1">git init <a class="header-anchor" href="#git-init" aria-label="Permalink to &quot;git init&quot;">​</a></h2><p>创建一个空的 Git 存储库或重新初始化现有的存储库。</p><h4 id="synopsis" tabindex="-1">SYNOPSIS <a class="header-anchor" href="#synopsis" aria-label="Permalink to &quot;SYNOPSIS&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> [-q </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">--quiet]</span><span style="color:#E1E4E8;"> [--bare] [--template</span><span style="color:#F97583;">=&lt;</span><span style="color:#E1E4E8;">template-directory</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">         [--separate-git-dir </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">git-dir</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">] [--object-format</span><span style="color:#F97583;">=&lt;</span><span style="color:#E1E4E8;">format</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">         [-b </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">branch-name</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> --initial-branch</span><span style="color:#F97583;">=&lt;</span><span style="color:#E1E4E8;">branch-name</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">         [--shared[</span><span style="color:#F97583;">=&lt;</span><span style="color:#E1E4E8;">permissions</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">]] [</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">directory</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> [-q </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">--quiet]</span><span style="color:#24292E;"> [--bare] [--template</span><span style="color:#D73A49;">=&lt;</span><span style="color:#24292E;">template-directory</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">         [--separate-git-dir </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">git-dir</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">] [--object-format</span><span style="color:#D73A49;">=&lt;</span><span style="color:#24292E;">format</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">         [-b </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">branch-name</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> --initial-branch</span><span style="color:#D73A49;">=&lt;</span><span style="color:#24292E;">branch-name</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">         [--shared[</span><span style="color:#D73A49;">=&lt;</span><span style="color:#24292E;">permissions</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">]] [</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">directory</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">]</span></span></code></pre></div><h4 id="use" tabindex="-1">USE <a class="header-anchor" href="#use" aria-label="Permalink to &quot;USE&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><h2 id="git-clone" tabindex="-1">git clone <a class="header-anchor" href="#git-clone" aria-label="Permalink to &quot;git clone&quot;">​</a></h2><p>将存储库克隆到新目录中。</p><h4 id="synopsis-1" tabindex="-1">SYNOPSIS <a class="header-anchor" href="#synopsis-1" aria-label="Permalink to &quot;SYNOPSIS&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> [--template=&lt;template-directory&gt;]</span></span>
<span class="line"><span style="color:#E1E4E8;">          [-l] [-s] [--no-hardlinks] [-q] [-n] [--bare] [--mirror]</span></span>
<span class="line"><span style="color:#E1E4E8;">          [-o </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">] [-b </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">] [-u </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">upload-pack</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">] [--reference </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">repository</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">          [--dissociate] [--separate-git-dir </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">git-dir</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">          [--depth </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">depth</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">] [--[no-]single-branch] [--no-tags]</span></span>
<span class="line"><span style="color:#E1E4E8;">          [--recurse-submodules[</span><span style="color:#F97583;">=&lt;</span><span style="color:#E1E4E8;">pathspec</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">]] [--[no-]shallow-submodules]</span></span>
<span class="line"><span style="color:#E1E4E8;">          [--[no-]remote-submodules] [--jobs </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">] [--sparse] [--[no-]reject-shallow]</span></span>
<span class="line"><span style="color:#E1E4E8;">          [--filter</span><span style="color:#F97583;">=&lt;</span><span style="color:#E1E4E8;">filter</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> [--also-filter-submodules]] [--] </span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">repository&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          [</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">directory</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> [--template=&lt;template-directory&gt;]</span></span>
<span class="line"><span style="color:#24292E;">          [-l] [-s] [--no-hardlinks] [-q] [-n] [--bare] [--mirror]</span></span>
<span class="line"><span style="color:#24292E;">          [-o </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">] [-b </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">name</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">] [-u </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">upload-pack</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">] [--reference </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">repository</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">          [--dissociate] [--separate-git-dir </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">git-dir</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">          [--depth </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">depth</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">] [--[no-]single-branch] [--no-tags]</span></span>
<span class="line"><span style="color:#24292E;">          [--recurse-submodules[</span><span style="color:#D73A49;">=&lt;</span><span style="color:#24292E;">pathspec</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">]] [--[no-]shallow-submodules]</span></span>
<span class="line"><span style="color:#24292E;">          [--[no-]remote-submodules] [--jobs </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">] [--sparse] [--[no-]reject-shallow]</span></span>
<span class="line"><span style="color:#24292E;">          [--filter</span><span style="color:#D73A49;">=&lt;</span><span style="color:#24292E;">filter</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> [--also-filter-submodules]] [--] </span><span style="color:#D73A49;">&lt;</span><span style="color:#6F42C1;">repository&gt;</span></span>
<span class="line"><span style="color:#24292E;">          [</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">directory</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">]</span></span></code></pre></div><h4 id="use-1" tabindex="-1">USE <a class="header-anchor" href="#use-1" aria-label="Permalink to &quot;USE&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git@github.com:True-Z/sdkset.git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com:True-Z/sdkset.git</span></span></code></pre></div>`,13),t=[p];function e(r,c,i,E,y,d){return a(),n("div",null,t)}const m=s(o,[["render",e]]);export{h as __pageData,m as default};
