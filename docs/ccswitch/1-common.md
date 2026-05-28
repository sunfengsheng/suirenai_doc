# Claude Code + CC-Switch 快速配置

## 安装 Claude Code

安装 Claude Code 可以参考官方文档：[https://code.claude.com/docs/zh-CN/overview](https://code.claude.com/docs/zh-CN/overview)

**macOS / Linux / WSL：**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell：**

```powershell
irm https://claude.ai/install.ps1 | iex
```

**Windows CMD：**

```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

## 安装 CC-Switch

安装 CC-Switch 可以参考文档：[README_ZH.md](https://forward.apiapi.site/https://github.com/farion1231/cc-switch/blob/main/README_ZH.md)

**Linux 用户：**

从 [Releases 页面](https://forward.apiapi.site/https://github.com/farion1231/cc-switch/releases/latest) 下载最新版本的 Linux 安装包：

- `CC-Switch-v{版本号}-Linux.deb`（Debian/Ubuntu）
- `CC-Switch-v{版本号}-Linux.rpm`（Fedora/RHEL/openSUSE）
- `CC-Switch-v{版本号}-Linux.AppImage`（通用）
- `CC-Switch-v{版本号}-Linux.flatpak`（Flatpak）

**macOS 用户：**

方式一：通过 Homebrew 安装

```bash
brew tap farion1231/ccswitch
brew install --cask cc-switch
```

更新：

```bash
brew upgrade --cask cc-switch
```

方式二：手动下载

从 [Releases 页面](https://forward.apiapi.site/https://github.com/farion1231/cc-switch/releases/latest) 下载 `CC-Switch-v{版本号}-macOS.zip` 解压使用。

**Windows 用户：**

从 [Releases 页面](https://forward.apiapi.site/https://github.com/farion1231/cc-switch/releases/latest) 下载最新版本的 `CC-Switch-v{版本号}-Windows.msi` 安装包或 `CC-Switch-v{版本号}-Windows-Portable.zip` 绿色版。

## 快速开始

**1.** 点击右上角 **+** 号图标，添加新供应商：点击"添加供应商" → 选择"Claude 供应商" → 选择创建自定义配置。

**2.** 填写以下配置信息后，点击保存，并在主界面启用新创建的供应商。

| 配置 | 值 |
|---|---|
| 请求地址 | `https://api.suirenai.com` |
| API Key | 在 Suirenai 中创建的 **CC 分组** API 密钥 |
| 主模型 | `claude-sonnet-4-5` |
| Haiku 默认模型 | `claude-haiku-4-5` |
| Opus 默认模型 | `claude-opus-4-5` |

配置好后，可以在 Claude Code 配置目录的 `settings.json` 中看到如下配置信息：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.suirenai.com",
    "ANTHROPIC_AUTH_TOKEN": "your-api-key"
  }
}
```

**3.** 打开终端，进入项目目录，输入 `claude` 启动 Claude Code。

若启动后仍要求登录，可在 CC-Switch 中开启"跳过 Claude Code 初次安装确认"：点击"设置" → "通用" → "窗口行为" → "跳过 Claude Code 初次安装确认"。
