import{c as l,Q as t,j as i,m as p,g as o,n as d,a3 as a}from"./chunks/framework.BPKcPtvA.js";const g=JSON.parse('{"title":"DS接入CC","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/DeepSeekClaudeCode.md","filePath":"advanced/DeepSeekClaudeCode.md","lastUpdated":1779875172000}'),c={name:"advanced/DeepSeekClaudeCode.md"};function n(s,e,r,C,k,u){return t(),i("div",null,[e[6]||(e[6]=p("",24)),o("p",null,[e[0]||(e[0]=d("将下面内容写入 ",-1)),e[1]||(e[1]=o("code",null,"settings.json",-1)),e[2]||(e[2]=d("，并把 ",-1)),o("code",null,a(s.新建的令牌),1),e[3]||(e[3]=d(" 替换为刚才复制的 ",-1)),e[4]||(e[4]=o("code",null,"deepseek-officially",-1)),e[5]||(e[5]=d(" 分组 API Key：",-1))]),o("pre",null,[o("code",null,`{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.suirenai.com",
    "ANTHROPIC_AUTH_TOKEN": "`+a(s.新建的令牌)+`",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "deepseek-v4-flash",
    "ANTHROPIC_MODEL": "deepseek-v4-pro",
    "ANTHROPIC_REASONING_MODEL": "deepseek-v4-pro",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "deepseek-v4-pro",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "deepseek-v4-pro"
  }
}
`,1)]),e[7]||(e[7]=p("",7))])}const h=l(c,[["render",n]]);export{g as __pageData,h as default};
