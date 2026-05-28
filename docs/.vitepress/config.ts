import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Suirenai 文档',
  description: '遂人 AI — 订阅转 API 平台使用文档',
  lang: 'zh-CN',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Suirenai',

    nav: [
      { text: '快速开始', link: '/register/1-register' },
      { text: 'FAQ', link: '/faq/CC' },
      {
        text: '更多',
        items: [
          { text: '高级功能', link: '/advanced/AionUI' },
        ],
      },
    ],

    sidebar: {
      '/register/': [
        {
          text: '快速开始',
          items: [
            { text: '注册账号', link: '/register/1-register' },
            { text: '购买额度', link: '/register/3-quota' },
            { text: '创建 API 密钥', link: '/register/4-token' },
          ],
        },
        {
          text: '第三方工具配置',
          items: [
            { text: 'CC-Switch 配置', link: '/ccswitch/1-common' },
            { text: 'Claude Code 配置', link: '/ccswitch/2-claude' },
            { text: 'Codex 配置', link: '/ccswitch/3-codex' },
          ],
        },
      ],

      '/cli/': [
        {
          text: '快速开始',
          items: [
            { text: '注册账号', link: '/register/1-register' },
            { text: '购买额度', link: '/register/3-quota' },
            { text: '创建 API 密钥', link: '/register/4-token' },
          ],
        },
        {
          text: '第三方工具配置',
          items: [
            { text: 'CC-Switch 配置', link: '/ccswitch/1-common' },
            { text: 'Claude Code 配置', link: '/ccswitch/2-claude' },
            { text: 'Codex 配置', link: '/ccswitch/3-codex' },
          ],
        },
      ],

      '/ccswitch/': [
        {
          text: '快速开始',
          items: [
            { text: '注册账号', link: '/register/1-register' },
            { text: '购买额度', link: '/register/3-quota' },
            { text: '创建 API 密钥', link: '/register/4-token' },
          ],
        },
        {
          text: '第三方工具配置',
          items: [
            { text: 'CC-Switch 配置', link: '/ccswitch/1-common' },
            { text: 'Claude Code 配置', link: '/ccswitch/2-claude' },
            { text: 'Codex 配置', link: '/ccswitch/3-codex' },
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

    },

    socialLinks: [],

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
