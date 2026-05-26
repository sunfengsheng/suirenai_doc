import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Suirenai 文档',
  description: '遂人 AI — 订阅转 API 平台使用文档',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Suirenai',

    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/register/1-register' },
      { text: 'CLI 配置', link: '/cli/1-env' },
      { text: 'CC-Switch', link: '/ccswitch/1-common' },
      { text: 'FAQ', link: '/faq/CC' },
      {
        text: '更多',
        items: [
          { text: '高级功能', link: '/advanced/AionUI' },
          { text: '绘图工具', link: '/paint/GPTImage' },
          { text: '服务条款', link: '/tos/TOS' },
        ],
      },
    ],

    sidebar: {
      '/register/': [
        {
          text: '快速开始',
          items: [
            { text: '注册账号', link: '/register/1-register' },
            { text: '登录账号', link: '/register/2-login' },
            { text: '购买额度', link: '/register/3-quota' },
            { text: '创建 API 密钥', link: '/register/4-token' },
            { text: '环境检查', link: '/register/5-env' },
            { text: '配置 CLI 工具', link: '/register/6-cli' },
          ],
        },
      ],

      '/cli/': [
        {
          text: 'CLI 手动配置',
          items: [
            { text: '环境检查（通用步骤）', link: '/cli/1-env' },
            { text: 'Claude Code 配置', link: '/cli/2-claude' },
            { text: 'Codex 配置', link: '/cli/3-codex' },
            { text: 'Gemini 配置', link: '/cli/4-gemini' },
            { text: 'Claude Code 缓存优化', link: '/cli/5-cache-fix' },
          ],
        },
      ],

      '/ccswitch/': [
        {
          text: 'CC-Switch',
          items: [
            { text: '通用步骤', link: '/ccswitch/1-common' },
            { text: 'Claude Code 配置', link: '/ccswitch/2-claude' },
            { text: 'Codex 配置', link: '/ccswitch/3-codex' },
            { text: 'Gemini 配置', link: '/ccswitch/4-gemini' },
            { text: 'CC-Switch CLI', link: '/ccswitch/5-ccs_cli' },
          ],
        },
      ],

      '/token/': [
        {
          text: 'API 密钥分组',
          items: [
            { text: '分组查看', link: '/token/1-intro' },
            { text: '分组介绍', link: '/token/2-group' },
          ],
        },
      ],

      '/faq/': [
        {
          text: '常见问题',
          items: [
            { text: 'Claude Code', link: '/faq/CC' },
            { text: 'Codex', link: '/faq/Codex' },
            { text: 'Gemini', link: '/faq/Gemini' },
          ],
        },
      ],

      '/advanced/': [
        {
          text: '高级功能',
          items: [
            { text: 'AionUI', link: '/advanced/AionUI' },
            { text: 'ChatGPT + Claude Code', link: '/advanced/ChatGPTClaudeCode' },
            { text: 'Claude Desktop', link: '/advanced/ClaudeDesktop' },
            { text: 'DeepSeek + Claude Code', link: '/advanced/DeepSeekClaudeCode' },
            { text: 'OpenClaw', link: '/advanced/OpenClaw' },
            { text: 'OpenCode', link: '/advanced/OpenCode' },
          ],
        },
      ],

      '/paint/': [
        {
          text: '绘图工具',
          items: [
            { text: 'GPT Image', link: '/paint/GPTImage' },
            { text: 'Banana', link: '/paint/Banana' },
          ],
        },
      ],

      '/tos/': [
        {
          text: '服务条款',
          items: [
            { text: '服务条款', link: '/tos/TOS' },
            { text: '使用政策', link: '/tos/use' },
            { text: '可接受使用政策', link: '/tos/aup' },
            { text: '特定服务条款', link: '/tos/service-specific-terms' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/farion1231/cc-switch' },
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '© 2026 Suirenai. 保留所有权利。',
    },

    editLink: undefined,

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                displayDetails: '显示详情',
                resetButtonTitle: '清除搜索',
                backButtonTitle: '返回',
                noResultsText: '未找到相关结果',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '本页目录',
    },

    lastUpdated: {
      text: '最后更新',
    },

    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
