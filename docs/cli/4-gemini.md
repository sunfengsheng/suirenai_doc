# Gemini配置


* * *

WindowsMacOS

Windows

  1. 键盘按下“Win+R”，输入以下内容后回车，打开 Gemini CLI 配置目录


    
    
    %userprofile%\.gemini

![](https://docs.packyapi.com/assets/image/Cli/019.webp)

  2. 如果目录下没有 `.env` 文件，请新建一个 `.env`，写入以下内容


  * **.env** ：Gemini CLI的配置文件，主要设置自定义端点、ApiKey跟所用模型

![](https://docs.packyapi.com/assets/image/Cli/020.webp)
    
    
    GOOGLE_GEMINI_BASE_URL=https://api.suirenai.com
    GEMINI_API_KEY=xxx
    GEMINI_MODEL=gemini-2.5-pro

![](https://docs.packyapi.com/assets/image/Cli/021.webp)

  3. 回顾 [创建API令牌](/register/4-token)，在 Suirenai 中创建 **Gemini** 分组密钥，并复制ApiKey后填入 `xxx`

![](/images/Cli/026.png)

  4. 打开终端执行 `gemini`，看到交互界面并能正常回复即表示配置成功

![](https://docs.packyapi.com/assets/image/Cli/022.webp)

MacOS

  1. 按下 “Command+Shift+G”，输入以下路径后回车，打开配置目录


    
    
    ~/.gemini

![](https://docs.packyapi.com/assets/image/Cli/023.webp)

  2. 若目录中没有 `.env` 文件，创建并写入以下内容


  * **.env** ：Gemini CLI的配置文件，主要设置自定义端点、ApiKey跟所用模型

![](https://docs.packyapi.com/assets/image/Cli/024.webp)
    
    
    GOOGLE_GEMINI_BASE_URL=https://api.suirenai.com
    GEMINI_API_KEY=xxx
    GEMINI_MODEL=gemini-2.5-pro

  3. 回顾 [创建API令牌](/register/4-token)，在 Suirenai 中创建 **Gemini** 分组密钥，填入 `xxx`

![](/images/Cli/026.png)

  4. 在终端运行 `gemini`，可正常进入对话并收到回复即表示配置完成

![](https://docs.packyapi.com/assets/image/Cli/022.webp)


