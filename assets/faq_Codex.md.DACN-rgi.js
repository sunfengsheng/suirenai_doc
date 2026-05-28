import{c as o,Q as t,j as d,m as a}from"./chunks/framework.BPKcPtvA.js";const h=JSON.parse('{"title":"Codex相关问题","description":"","frontmatter":{},"headers":[],"relativePath":"faq/Codex.md","filePath":"faq/Codex.md","lastUpdated":1779875172000}'),l={name:"faq/Codex.md"};function i(r,e,c,p,s,n){return t(),d("div",null,[...e[0]||(e[0]=[a(`<h1 id="codex相关问题" tabindex="-1">Codex相关问题 <a class="header-anchor" href="#codex相关问题" aria-label="Permalink to &quot;Codex相关问题&quot;">​</a></h1><hr><h3 id="一点点技巧-如何更高效地使用codex" tabindex="-1">一点点技巧，如何更高效地使用Codex <a class="header-anchor" href="#一点点技巧-如何更高效地使用codex" aria-label="Permalink to &quot;一点点技巧，如何更高效地使用Codex&quot;">​</a></h3><blockquote><p>很多人可能会在使用过一段时间Codex后认为模型不如以前好用，也就是出现所谓的“降智”现象<br> 而就目前我的使用体验来看，Codex中提供的模型经过很多次升级，其实都没有出现“降智”，关键是在于<strong>你如何合理地去使用模型</strong></p></blockquote><ol><li><p><strong>任务划分：</strong> 任何时候，都不要去提交一个非常笼统的任务，例如 <code>请帮我写一个管理系统后台</code> 等，这样使用必然降智！Codex模型的特点是<strong>严谨有序，指哪打哪</strong> ，这就意味着你需要对你的任务进行拆分</p></li><li><p><strong>掌控之内：</strong> 在你开始一个任务之前，你需要对这个任务进行评估，思考这个任务是否已经拆分的足够细致，是否符合“模块化”开发的准则。在任务提交之前，你应该有能力预估Codex这次改动会修改哪些文件，产生哪些变动。一定不要让AI脱离你的认知与掌控之内，不然最终结局就是项目越改越乱，直到从原点重新开始</p></li></ol><p>一些碎碎念</p><p>有一说一，AI时代让很多东西都变得十分简单，但是基础知识决定着你使用AI的上限，目前阶段的AI只算作是一个十分优秀的Copilot角色。这也导致同样的AI在不同的人手里会有不一样的发挥~</p><ol start="3"><li><strong>避免压缩：</strong> 在多数场景下，你的任务其实最多使用Codex大概60%的上下文就能解决。如果你的任务超过了60%的上下文仍未解决，甚至还需要压缩，那么你这次任务执行之前的拆分工作算是失败了，你需要更加精细地拆分你的任务。一个优秀的Codex Vibe Coding选手几乎不用进行内容压缩！</li></ol><h3 id="在windows系统下-丝滑使用codex" tabindex="-1">在Windows系统下，丝滑使用Codex！ <a class="header-anchor" href="#在windows系统下-丝滑使用codex" aria-label="Permalink to &quot;在Windows系统下，丝滑使用Codex！&quot;">​</a></h3><p>重要</p><p>此方法同时解决<strong>读写文件、乱码、Token耗费高、项目无记忆</strong> 等多个痛点</p><ol><li><p>确保你的<code>Codex CLI </code>与<code>Vscode Codex</code>插件正常运行，即你已经能顺利在Vscode的Codex插件上与模型进行对话</p></li><li><p>键盘按下“Win+R”键，输入以下内容后回车，打开你的用户目录</p></li></ol><pre><code>%userprofile%\\.codex
</code></pre><ol start="3"><li>找到目录中的<code>config.toml</code>文件，打开并编辑，你的配置文件应该如下</li></ol><pre><code>model_provider = &quot;packycode&quot;
model = &quot;gpt-5.4&quot;
model_reasoning_effort = &quot;high&quot;
network_access = &quot;enabled&quot;
disable_response_storage = true
windows_wsl_setup_acknowledged = true
model_verbosity = &quot;high&quot;

[model_providers.packycode]
name = &quot;packycode&quot;
base_url = &quot;https://api.suirenai.com/v1&quot;
wire_api = &quot;responses&quot;
requires_openai_auth = true
</code></pre><ol start="4"><li>打开目录下<code>AGENTS.md</code>文件（如果没有请手动创建），在里面写入以下内容后保存</li></ol><pre><code># Codex全局工作指南

## 回答风格:
 - 回答必须使用中文
 - 对总结、Plan、Task、以及长内容的输出，优先进行逻辑整理后使用美观的Table格式整齐输出;普通内容正常输出
</code></pre><ol start="5"><li>运行你的Vscode，打开Codex插件用起来，看看有什么不一样吧~</li></ol><h3 id="codex-中常用命令" tabindex="-1">Codex 中常用命令 <a class="header-anchor" href="#codex-中常用命令" aria-label="Permalink to &quot;Codex 中常用命令&quot;">​</a></h3><table tabindex="0"><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td>/model</td><td>选择当前使用的模型</td></tr><tr><td>/approvals</td><td>设置本会话的审批规则</td></tr><tr><td>/review</td><td>让 Codex 审查当前工作区变更</td></tr><tr><td>/resume</td><td>从历史会话列表中选择并继续一个之前的交互会话</td></tr><tr><td>/new</td><td>在当前 CLI 会话中开启新对话</td></tr><tr><td>/init</td><td>在当前目录生成 <a href="http://AGENTS.md" target="_blank" rel="noreferrer">AGENTS.md</a> 模板</td></tr><tr><td>/compact</td><td>总结对话内容以释放上下文</td></tr><tr><td>/undo</td><td>撤销 Codex 的上一次操作</td></tr><tr><td>/diff</td><td>查看当前 git diff（含未跟踪文件）</td></tr><tr><td>/mention</td><td>将指定文件或目录加入对话上下文</td></tr><tr><td>/status</td><td>查看会话配置和 token 使用情况</td></tr><tr><td>/mcp</td><td>列出当前可用的 MCP 工具</td></tr><tr><td>/exit</td><td>退出 Codex CLI</td></tr></tbody></table><h3 id="codex在windows系统下乱码问题" tabindex="-1">Codex在windows系统下乱码问题 <a class="header-anchor" href="#codex在windows系统下乱码问题" aria-label="Permalink to &quot;Codex在windows系统下乱码问题&quot;">​</a></h3><ol><li>按下快捷键<code>Win + R</code>，打开左下脚运行窗口，输入以下命令后回车</li></ol><pre><code>intl.cpl
</code></pre><p><img src="https://docs.packyapi.com/assets/image/FAQ/command.webp" alt=""></p><ol start="2"><li>点击上侧选项卡“管理”，再点击红色箭头所示的“更改系统区域设置”按钮</li></ol><p><img src="https://docs.packyapi.com/assets/image/FAQ/Codex/001.webp" alt=""></p><ol start="3"><li>勾选红色箭头所指选项，点击确定。然后在刚才的窗口也点击确定，之后重启一下你的电脑再使用codex，即可避免乱码</li></ol><p><img src="https://docs.packyapi.com/assets/image/FAQ/Codex/002.webp" alt=""></p><h3 id="vscode-codex插件中设置最新模型" tabindex="-1">Vscode Codex插件中设置最新模型 <a class="header-anchor" href="#vscode-codex插件中设置最新模型" aria-label="Permalink to &quot;Vscode Codex插件中设置最新模型&quot;">​</a></h3><p>WindowsMacOS</p><p>Windows</p><ol><li>按下快捷键<code>Win + R</code>，打开左下脚运行窗口，输入以下命令后回车</li></ol><pre><code>%userprofile%\\.vscode\\extensions
</code></pre><p><img src="https://docs.packyapi.com/assets/image/FAQ/command.webp" alt=""></p><p>MacOS</p><ol><li>在访达界面按下 “Command+Shift+G”，输入以下路径并回车，打开VsCode插件目录</li></ol><pre><code>~/.vscode/extensions
</code></pre><p><img src="https://docs.packyapi.com/assets/image/FAQ/Codex/009.webp" alt=""></p><ol start="2"><li>找到以<code>openai.chatgpt</code>开头的文件夹，后面的数字是版本号，如果存在多个这种开头的目录，选择版本号最新的目录进入</li></ol><p><img src="https://docs.packyapi.com/assets/image/FAQ/Codex/003.webp" alt=""></p><ol start="3"><li>依次进入<code>webview\\assets</code>文件夹，你会看到一大堆js文件</li></ol><p><img src="https://docs.packyapi.com/assets/image/FAQ/Codex/004.webp" alt=""></p><ol start="4"><li>下载<strong>替换脚本</strong> 后解压，将这个js文件复制到刚才有一大堆js文件的目录</li></ol><p>替换脚本下载</p><p>自动读取最新版本号与文件名，直接点击即可下载</p><p>待获取</p><p>文件名 立即下载</p><ol start="5"><li>重启你的vscode，你就能看见现在能选择最新模型啦！</li></ol><h3 id="codex如何配置全局提示词" tabindex="-1">Codex如何配置全局提示词 <a class="header-anchor" href="#codex如何配置全局提示词" aria-label="Permalink to &quot;Codex如何配置全局提示词&quot;">​</a></h3><ol><li><p>请你查看 <a href="/cli/3-codex.html">Codex CLI 配置</a> 中的前两步</p></li><li><p>教程中提到的<code>AGENTS.md</code>文件就是Codex的全局提示词文件，如果没有这个文件，你同样需要手动创建这个文件，然后写入提示词</p></li><li><p>写入提示词保存，重启你的Codex或者vscode，提示词即生效</p></li></ol><h3 id="codex开启内置网络搜索" tabindex="-1">Codex开启内置网络搜索 <a class="header-anchor" href="#codex开启内置网络搜索" aria-label="Permalink to &quot;Codex开启内置网络搜索&quot;">​</a></h3><ol><li><p>请你查看 <a href="/cli/3-codex.html">Codex CLI 配置</a> 中的前两步</p></li><li><p>打开教程中提到的<code>config.toml</code>文件，在里面加入以下内容</p></li></ol><pre><code>[features]
web_search_request = true
</code></pre><ol start="3"><li>运行Codex，进行尝试</li></ol><p><img src="https://docs.packyapi.com/assets/image/FAQ/Codex/010.webp" alt=""></p><h3 id="codex-在容器或cli沙盒中的网络连接问题" tabindex="-1">Codex 在容器或CLI沙盒中的网络连接问题 <a class="header-anchor" href="#codex-在容器或cli沙盒中的网络连接问题" aria-label="Permalink to &quot;Codex 在容器或CLI沙盒中的网络连接问题&quot;">​</a></h3><blockquote><p>当Codex在CLI沙盒或容器（如tun模式）中运行时遇到网络连接问题（如无法拉取安装包），且其他工具（如终端、Claude Code）正常，这通常是由于MTU设置不当引起的。</p></blockquote><p><strong>解决方案：</strong></p><ul><li><p>将MTU值改为1500，此设置通常可在您的Clash客户端中进行更改。</p></li><li><p>对于在Linux上找不到Clash MTU设置的用户，可以参考此链接：<a href="https://linux.do/t/topic/1220328" target="_blank" rel="noreferrer">https://linux.do/t/topic/1220328</a></p></li></ul><h3 id="connection-failed-问题" tabindex="-1">Connection failed 问题 <a class="header-anchor" href="#connection-failed-问题" aria-label="Permalink to &quot;Connection failed 问题&quot;">​</a></h3><p>报错信息类似为：</p><pre><code>Connection failed: error sending request for url (https://www.packycode.com/v1/responses)
</code></pre><p>出现这种情况是你本机网络出现了问题，按以下步骤排查</p><ol><li><p>检查本机网络是否通畅，能否访问其他页面</p></li><li><p>检查你的电脑是否使用了<code>网络代理（梯子）</code>工具，如果存在请你关闭</p></li><li><p>使用终端，运行<code>codex</code>命令，尝试在CLI中发送对话信息，判断是否是Vscode Codex插件问题，如是，请你重启vscode进行尝试</p></li><li><p>如果还不行，带上你的报错截图，在群内咨询客服或群友</p></li></ol><h3 id="_401报错问题" tabindex="-1">401报错问题 <a class="header-anchor" href="#_401报错问题" aria-label="Permalink to &quot;401报错问题&quot;">​</a></h3><p>报错信息类似为：</p><pre><code>exceeded retry limit, last status: 401 Unauthorized, request id: xxxxxx
</code></pre><ol><li>在Windows或MacOS的终端运行以下命令，判断是否存在环境变量</li></ol><p>WindowsmacOS</p><p>Windows</p><pre><code>cmd /c &quot;echo ================= OPENAI ENV CHECK ================= &amp; ^
if defined OPENAI_API_KEY (echo OPENAI_API_KEY  = OK) else (echo OPENAI_API_KEY  = MISSING) &amp; ^
if defined OPENAI_BASE_URL (echo OPENAI_BASE_URL = OK) else (echo OPENAI_BASE_URL = MISSING) &amp; ^
echo =========================================================&quot;
</code></pre><p>如果输出以下内容，则直接进入第2步</p><pre><code>OPENAI_API_KEY  = MISSING
OPENAI_BASE_URL = MISSING
</code></pre><p>如果输出内容不同，请在终端运行以下命令后进入第二步</p><pre><code>cmd /c &quot;setx OPENAI_API_KEY \\&quot;\\&quot; &amp; setx OPENAI_BASE_URL \\&quot;\\&quot;&quot;
</code></pre><p>macOS</p><pre><code>echo &quot;================= OPENAI ENV CHECK =================&quot;
if [ -z &quot;$OPENAI_API_KEY&quot; ]; then
  echo &quot;OPENAI_API_KEY  = MISSING&quot;
else
  echo &quot;OPENAI_API_KEY  = OK&quot;
fi

if [ -z &quot;$OPENAI_BASE_URL&quot; ]; then
  echo &quot;OPENAI_BASE_URL = MISSING&quot;
else
  echo &quot;OPENAI_BASE_URL = OK&quot;
fi
echo &quot;========================================================&quot;
</code></pre><p>如果输出以下内容，则直接进入第2步</p><pre><code>OPENAI_API_KEY  = MISSING
OPENAI_BASE_URL = MISSING
</code></pre><p>如果输出内容不同，请在终端运行以下命令后进入第二步</p><pre><code>unset OPENAI_API_KEY OPENAI_BASE_URL
</code></pre><ol start="2"><li>查看 <a href="/cli/3-codex.html">Codex在CLI中的配置</a> 一章</li></ol><p>重要</p><p><strong>你需要：</strong></p><ol><li><p>检查~/.codex/auth.json中的 <strong>ApiKey</strong> 配置是否正确</p></li><li><p>检查~/.codex/config.toml中的 <strong>请求地址</strong> 是否正确</p></li></ol><h3 id="_403报错问题" tabindex="-1">403报错问题 <a class="header-anchor" href="#_403报错问题" aria-label="Permalink to &quot;403报错问题&quot;">​</a></h3><p>报错信息类似为：</p><pre><code>unexpected status 403 Forbidden: {&quot;error&quot;:{&quot;message&quot;:&quot;Usage not included in your
plan&quot;,&quot;type&quot;:&quot;usage_not_included&quot;,&quot;param&quot;:null,&quot;code&quot;:null,&quot;plan_type&quot;:&quot;basic&quot;}}
</code></pre><p>出现这种情况是号池中的这个账号出现问题，你需要：</p><ol><li><p>使用<code>Ctrl+C</code>来打断你的对话，如在vscode中，请点击停止按钮</p></li><li><p>重新发起对话进行尝试，观察是否再次出现此问题</p></li><li><p>如果重试3次以上无效，带上你的报错截图，在群内咨询客服或群友</p></li></ol>`,90)])])}const x=o(l,[["render",i]]);export{h as __pageData,x as default};
