# 部署指南

## 目录

- [本地开发](#本地开发)
- [手动部署](#手动部署)
- [自动部署（GitHub Actions）](#自动部署github-actions)

---

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（支持局域网访问）
npm run docs:dev -- --host

# 访问地址
# 本机：http://localhost:5173
# 局域网：http://<本机IP>:5173
```

---

## 手动部署

### 环境要求

服务器只需安装 **Nginx**，无需 Docker 或 Node.js。

### 步骤

```bash
# 1. 本地构建
npm run docs:build
# 产物在 docs/.vitepress/dist/

# 2. 上传到服务器
rsync -avz --delete docs/.vitepress/dist/ root@<服务器IP>:/var/www/suirenai-docs/
```

### Nginx 配置

```nginx
server {
    listen 80;
    server_name _;

    root /var/www/suirenai-docs;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;

    location ~* \.(js|css|png|jpg|ico|svg|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}
```

```bash
# 应用配置
nginx -t && systemctl reload nginx
```

---

## 自动部署（GitHub Actions）

每次推送到 `main` 分支，GitHub Actions 自动完成：**构建 → rsync 同步到服务器**，无需在服务器安装 Docker 或 Node.js。

### 流程

```
本地 git push
      │
      ▼
GitHub Actions 触发
      │
      ├─ checkout 代码
      ├─ npm ci
      ├─ npm run docs:build
      └─ rsync dist/ → 服务器 /var/www/suirenai-docs/
```

### 配置步骤

#### 1. 服务器准备

```bash
# 安装 Nginx
apt install -y nginx

# 创建站点目录
mkdir -p /var/www/suirenai-docs

# 配置 Nginx（参考上方手动部署的 Nginx 配置）
```

#### 2. 生成 SSH 密钥（本地执行）

```bash
ssh-keygen -t rsa -b 4096 -C "github-deploy" -f ~/.ssh/github_deploy -N ""

# 将公钥上传到服务器
ssh-copy-id -i ~/.ssh/github_deploy.pub root@<服务器IP>

# 查看私钥内容（下一步要用）
cat ~/.ssh/github_deploy
```

#### 3. 在 GitHub 仓库添加 Secrets

进入仓库 → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**：

| Secret 名 | 说明 | 示例值 |
|---|---|---|
| `SERVER_HOST` | 服务器 IP 或域名 | `192.168.1.100` |
| `SERVER_USER` | SSH 登录用户名 | `root` |
| `SERVER_SSH_KEY` | 上一步生成的私钥完整内容 | `-----BEGIN RSA PRIVATE KEY-----...` |
| `SERVER_PATH` | 静态文件存放路径 | `/var/www/suirenai-docs` |

#### 4. 触发部署

配置完成后，每次推送即自动部署：

```bash
git add .
git commit -m "update docs"
git push
```

#### 5. 查看部署日志

仓库页面 → **Actions** 标签页，点击对应的 workflow 查看每一步日志。

---

## 反向代理 + HTTPS（可选）

```nginx
server {
    listen 443 ssl;
    server_name docs.suirenai.com;

    ssl_certificate     /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    root /var/www/suirenai-docs;
    index index.html;

    location ~* \.(js|css|png|jpg|ico|svg|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}

# HTTP 重定向到 HTTPS
server {
    listen 80;
    server_name docs.suirenai.com;
    return 301 https://$host$request_uri;
}
```
