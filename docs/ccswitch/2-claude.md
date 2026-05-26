# Claude Code配置

1. 打开你下载的CC Switch软件，你会看到如下图的初始界面

![](https://docs.packyapi.com/assets/image/CC-Switch/003.webp)

2. 在分组条中，将分组选择至"Claude"

![](https://docs.packyapi.com/assets/image/CC-Switch/004.webp)

3. 在供应商分组中，选择如图的"Suirenai"

![](https://docs.packyapi.com/assets/image/CC-Switch/005.webp)

4. 回顾 [创建 API 密钥](/register/4-token)，在 Suirenai 中创建 **CC** 分组的 API 密钥，点击复制按钮，复制 ApiKey 到剪切板

![](/images/Cli/025.png)

5. 下拉模态框，找到"API Key"配置项，填入你刚才复制的 ApiKey，再点击右下角"添加"按钮

![](https://docs.packyapi.com/assets/image/CC-Switch/006.webp)

6. 添加成功后，在主界面会看到我们配置的分组，在右侧点击"启用"按钮，显示"使用中"，则配置完成

![](https://docs.packyapi.com/assets/image/CC-Switch/007.webp)

7. 点击左上角"设置"按钮，在通用页面下拉找到 `跳过 Claude Code初次安装确认` ，务必勾选

![](https://docs.packyapi.com/assets/image/CC-Switch/017.webp)

8. 在终端运行 `claude`，看到对话界面并能正常回复即表示配置完成

![](https://docs.packyapi.com/assets/image/Cli/016.webp)

::: warning 使用提醒
如果你使用的是 [CC 分组](/token/2-group)，请注意该分组**不支持第三方接入**，因此无法在 CC Switch 中完成完整的调用测试。

这类配置是否生效，请直接以 Claude Code 内的实际对话结果为准，并在 Claude Code 中完成最终测试。
:::
