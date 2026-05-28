import{c as t,Q as i,j as e,m as s}from"./chunks/framework.BPKcPtvA.js";const w=JSON.parse('{"title":"CC Switch CLI使用","description":"","frontmatter":{},"headers":[],"relativePath":"ccswitch/5-ccs_cli.md","filePath":"ccswitch/5-ccs_cli.md","lastUpdated":1779937099000}'),a={name:"ccswitch/5-ccs_cli.md"};function l(o,c,r,n,p,d){return i(),e("div",null,[...c[0]||(c[0]=[s(`<h1 id="cc-switch-cli使用" tabindex="-1">CC Switch CLI使用 <a class="header-anchor" href="#cc-switch-cli使用" aria-label="Permalink to &quot;CC Switch CLI使用&quot;">​</a></h1><hr><p>提示</p><p><strong>推荐在服务器环境或MacOS系统下使用 CC Switch CLI</strong></p><h1 id="cc-switch-cli" tabindex="-1">CC-Switch CLI <a class="header-anchor" href="#cc-switch-cli" aria-label="Permalink to &quot;CC-Switch CLI&quot;">​</a></h1><p><a href="https://forward.apiapi.site/https://github.com/saladday/cc-switch-cli/releases" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/version-4.7.2-blue.svg" alt="Version"></a><br><a href="https://forward.apiapi.site/https://github.com/saladday/cc-switch-cli/releases" target="_blank" rel="noreferrer">![Platform](https://img.shields.io/badge/platform-Windows | macOS | Linux-lightgrey.svg)</a><br><a href="https://www.rust-lang.org/" target="_blank" rel="noreferrer">![Built with Rust](https://img.shields.io/badge/built with-Rust-orange.svg)</a><br><a href="./LICENSE.html"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a></p><p><strong>Claude Code、Codex 与 Gemini CLI 的命令行管理工具</strong></p><p>统一管理 Claude Code、Codex 与 Gemini CLI 的供应商配置、MCP 服务器、Skills 扩展和系统提示词。</p><p><img src="https://docs.packyapi.com/assets/image/CC-Switch/018.webp" alt=""></p><hr><h2 id="下载与安装" tabindex="-1">下载与安装 <a class="header-anchor" href="#下载与安装" aria-label="Permalink to &quot;下载与安装&quot;">​</a></h2><p>MacOSLinux (x64)Linux (ARM64)Windows</p><p>MacOS</p><pre><code># 下载 Universal Binary（推荐，支持 Apple Silicon + Intel）
curl -LO https://forward.apiapi.site/https://github.com/saladday/cc-switch-cli/releases/latest/download/cc-switch-cli-darwin-universal.tar.gz

# 解压
tar -xzf cc-switch-cli-darwin-universal.tar.gz

# 添加执行权限
chmod +x cc-switch

# 移动到 PATH
sudo mv cc-switch /usr/local/bin/

# 如遇 &quot;无法验证开发者&quot; 提示
xattr -cr /usr/local/bin/cc-switch
</code></pre><p>Linux (x64)</p><pre><code># 下载
curl -LO https://forward.apiapi.site/https://github.com/saladday/cc-switch-cli/releases/latest/download/cc-switch-cli-linux-x64-musl.tar.gz

# 解压
tar -xzf cc-switch-cli-linux-x64-musl.tar.gz

# 添加执行权限
chmod +x cc-switch

# 移动到 PATH
sudo mv cc-switch /usr/local/bin/
</code></pre><p>Linux (ARM64)</p><pre><code># 适用于树莓派或 ARM 服务器
curl -LO https://forward.apiapi.site/https://github.com/saladday/cc-switch-cli/releases/latest/download/cc-switch-cli-linux-arm64-musl.tar.gz
tar -xzf cc-switch-cli-linux-arm64-musl.tar.gz
chmod +x cc-switch
sudo mv cc-switch /usr/local/bin/
</code></pre><p>Windows</p><pre><code># 下载 zip 文件
# https://forward.apiapi.site/https://github.com/saladday/cc-switch-cli/releases/latest/download/cc-switch-cli-windows-x64.zip

# 解压后将 cc-switch.exe 移动到 PATH 目录，例如：
move cc-switch.exe C:\\Windows\\System32\\

# 或者直接运行
.\\cc-switch.exe
</code></pre><h2 id="命令列表" tabindex="-1">命令列表 <a class="header-anchor" href="#命令列表" aria-label="Permalink to &quot;命令列表&quot;">​</a></h2><p>常用命令供应商管理MCP 服务器管理Prompts 管理Skills 管理配置管理</p><p>常用命令</p><pre><code>cc-switch provider list              # 列出供应商
cc-switch provider switch &lt;id&gt;       # 切换供应商
cc-switch mcp sync                   # 同步 MCP 服务器

# 使用全局 \`--app\` 参数来指定目标应用：
cc-switch --app claude provider list    # 管理 Claude 供应商
cc-switch --app codex mcp sync          # 同步 Codex MCP 服务器
cc-switch --app gemini prompts list     # 列出 Gemini 提示词

# 支持的应用：\`claude\`（默认）、\`codex\`、\`gemini\`
</code></pre><p>供应商管理</p><blockquote><p>管理 Claude Code、Codex 和 Gemini 的 API 配置。<br> 功能： 一键切换、多端点支持、API 密钥管理、速度测试、供应商复制。</p></blockquote><pre><code>cc-switch provider list              # 列出所有供应商
cc-switch provider current           # 显示当前供应商
cc-switch provider switch &lt;id&gt;       # 切换供应商
cc-switch provider add               # 添加新供应商
cc-switch provider edit &lt;id&gt;         # 编辑现有供应商
cc-switch provider duplicate &lt;id&gt;    # 复制供应商
cc-switch provider delete &lt;id&gt;       # 删除供应商
cc-switch provider speedtest &lt;id&gt;    # 测试 API 延迟
</code></pre><p>MCP 服务器管理</p><blockquote><p>跨 Claude/Codex/Gemini 管理模型上下文协议服务器。<br> 功能： 统一管理、多应用支持、三种传输类型（stdio/http/sse）、自动同步、智能 TOML 解析器。</p></blockquote><pre><code>cc-switch mcp list                   # 列出所有 MCP 服务器
cc-switch mcp add                    # 添加新 MCP 服务器（交互式）
cc-switch mcp edit &lt;id&gt;              # 编辑 MCP 服务器
cc-switch mcp delete &lt;id&gt;            # 删除 MCP 服务器
cc-switch mcp enable &lt;id&gt; --app claude   # 为特定应用启用
cc-switch mcp disable &lt;id&gt; --app claude  # 为特定应用禁用
cc-switch mcp validate &lt;command&gt;     # 验证命令在 PATH 中
cc-switch mcp sync                   # 同步到实时文件
cc-switch mcp import --app claude    # 从实时配置导入
</code></pre><p>Prompts 管理</p><blockquote><p>管理 AI 编码助手的系统提示词预设。<br> 跨应用支持： Claude (<a href="http://CLAUDE.md" target="_blank" rel="noreferrer">CLAUDE.md</a>)、Codex (<a href="http://AGENTS.md" target="_blank" rel="noreferrer">AGENTS.md</a>)、Gemini (<a href="http://GEMINI.md" target="_blank" rel="noreferrer">GEMINI.md</a>)。</p></blockquote><pre><code>cc-switch prompts list               # 列出提示词预设
cc-switch prompts current            # 显示当前活动提示词
cc-switch prompts activate &lt;id&gt;      # 激活提示词
cc-switch prompts deactivate         # 停用当前激活的提示词
cc-switch prompts create             # 创建新提示词预设
cc-switch prompts edit &lt;id&gt;          # 编辑提示词预设
cc-switch prompts show &lt;id&gt;          # 显示完整内容
cc-switch prompts delete &lt;id&gt;        # 删除提示词
</code></pre><p>Skills 管理</p><blockquote><p>通过社区技能扩展 Claude Code/Codex/Gemini 的能力。<br> 功能： SSOT 技能仓库、多应用启用/禁用、同步到应用目录、扫描/导入未管理技能、仓库发现。</p></blockquote><pre><code>cc-switch skills list                # 列出已安装技能
cc-switch skills search &lt;query&gt;      # 搜索可用技能
cc-switch skills install &lt;name&gt;      # 安装技能
cc-switch skills uninstall &lt;name&gt;    # 卸载技能
cc-switch skills enable &lt;name&gt;       # 为当前应用启用（配合 --app）
cc-switch skills disable &lt;name&gt;      # 为当前应用禁用（配合 --app）
cc-switch skills info &lt;name&gt;         # 显示技能信息
cc-switch skills sync                # 同步已启用技能到应用目录
cc-switch skills sync-method [m]     # 查看/设置同步方式（auto|symlink|copy）
cc-switch skills scan-unmanaged      # 扫描未管理技能
cc-switch skills import-from-apps    # 导入未管理技能到 SSOT
cc-switch skills repos list          # 查看仓库列表
cc-switch skills repos add &lt;repo&gt;    # 添加仓库（owner/name[@branch] 或 GitHub URL）
cc-switch skills repos remove &lt;repo&gt; # 移除仓库（owner/name 或 GitHub URL）
</code></pre><p>配置管理</p><blockquote><p>管理配置文件的备份、导入和导出。<br> 功能： 自定义备份命名、交互式备份选择、自动轮换（保留 10 个）、导入/导出。</p></blockquote><pre><code>cc-switch config show                # 显示配置
cc-switch config path                # 显示配置文件路径
cc-switch config validate            # 验证配置文件

# 通用配置片段（跨所有供应商共享设置）
cc-switch --app claude config common show
cc-switch --app claude config common set --json &#39;{&quot;env&quot;:{&quot;CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC&quot;:1},&quot;includeCoAuthoredBy&quot;:false}&#39; --apply
cc-switch --app claude config common clear --apply

# 备份
cc-switch config backup              # 创建备份（自动命名）
cc-switch config backup --name my-backup  # 创建备份（自定义名称）

# 恢复
cc-switch config restore             # 交互式：从备份列表选择
cc-switch config restore --backup &lt;id&gt;    # 通过 ID 恢复特定备份
cc-switch config restore --file &lt;path&gt;    # 从外部文件恢复

# 导入/导出
cc-switch config export &lt;path&gt;       # 导出到外部文件
cc-switch config import &lt;path&gt;       # 从外部文件导入

cc-switch config reset               # 重置为默认配置
</code></pre><h2 id="配置suirenai" tabindex="-1">配置Suirenai <a class="header-anchor" href="#配置suirenai" aria-label="Permalink to &quot;配置Suirenai&quot;">​</a></h2><p>提示</p><p>这里以claude code的配置为例，codex与gemini配置同理</p><ol><li>安装好CC Switch CLI后，在终端运行以下命令进入TUI界面</li></ol><pre><code>cc-switch
</code></pre><ol start="2"><li>下拉在左侧选择 <code>Providers</code> ，回车选中，并按下 <code>a</code> 键，进入供应商添加页面</li></ol><p><img src="https://docs.packyapi.com/assets/image/CC-Switch/019.webp" alt=""></p><ol start="3"><li>在上方模板中选择 <code>Suirenai</code></li></ol><p><img src="https://docs.packyapi.com/assets/image/CC-Switch/020.webp" alt=""></p><ol start="4"><li>在 <code>Api Key</code> 处填写你的Apikey回车，并按下 <code>Ctrl+S</code> 进行保存</li></ol><p><img src="https://docs.packyapi.com/assets/image/CC-Switch/021.webp" alt=""></p><ol start="5"><li>确保此时选中的是刚才配置的Provider，然后在左侧菜单中退出 CC Switch CLI</li></ol><p><img src="https://docs.packyapi.com/assets/image/CC-Switch/022.webp" alt=""></p>`,52)])])}const m=t(a,[["render",l]]);export{w as __pageData,m as default};
