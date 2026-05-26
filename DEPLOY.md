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

- Docker >= 20.x
- Docker Compose >= 2.x

### 首次部署

```bash
# 1. 克隆仓库
git clone git@github.com:sunfengsheng/suirenai_doc.git
cd suirenai_doc

# 2. 构建并启动
docker compose up -d --build

# 访问地址：http://<服务器IP>:4173
```

### 更新部署

```bash
cd /opt/suirenai_doc

# 拉取最新代码
git pull origin main

# 重新构建并启动
docker compose up -d --build

# 清理旧镜像（可选）
docker image prune -f
```

### 常用命令

```bash
# 查看运行状态
docker compose ps

# 查看日志
docker compose logs -f

# 停止服务
docker compose down

# 重启服务
docker compose restart
```

### 修改端口

默认端口为 `4173`，如需修改，编辑 `docker-compose.yml`：

```yaml
ports:
  - "你的端口:80"
```

修改后重新执行 `docker compose up -d --build`。

---

## 自动部署（GitHub Actions）

每次推送到 `main` 分支后，GitHub Actions 自动 SSH 到服务器执行更新，无需手动操作。

### 配置步骤

#### 1. 生成 SSH 密钥（服务器上执行）

```bash
ssh-keygen -t rsa -b 4096 -C "github-deploy" -f ~/.ssh/github_deploy -N ""

# 将公钥添加到服务器授权列表
cat ~/.ssh/github_deploy.pub >> ~/.ssh/authorized_keys

# 查看私钥内容（下一步要用）
cat ~/.ssh/github_deploy
```

#### 2. 在 GitHub 仓库添加 Secrets

进入仓库 → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**，依次添加：

| Secret 名 | 说明 | 示例值 |
|---|---|---|
| `SERVER_HOST` | 服务器 IP 或域名 | `192.168.1.100` |
| `SERVER_USER` | SSH 登录用户名 | `root` |
| `SERVER_SSH_KEY` | 上一步生成的私钥完整内容 | `-----BEGIN RSA PRIVATE KEY-----...` |
| `SERVER_PATH` | 项目在服务器的路径 | `/opt/suirenai_doc` |

#### 3. 服务器首次初始化

```bash
git clone git@github.com:sunfengsheng/suirenai_doc.git /opt/suirenai_doc
cd /opt/suirenai_doc
docker compose up -d --build
```

#### 4. 触发自动部署

之后只需在本地推送代码：

```bash
git add .
git commit -m "your message"
git push
```

推送后自动执行：`git pull` → `docker compose up -d --build` → 清理旧镜像。

### 查看部署日志

仓库页面 → **Actions** 标签页，点击对应的 workflow 可查看每一步的执行日志。

### 部署流程图

```
本地 git push
      │
      ▼
GitHub Actions 触发
      │
      ▼
SSH 连接服务器
      │
      ├─ git pull origin main
      ├─ docker compose up -d --build
      └─ docker image prune -f
```

---

## 反向代理配置（可选）

如果服务器已有 Nginx 做反向代理，可将容器端口改为仅本机监听：

**docker-compose.yml**

```yaml
services:
  docs:
    build: .
    container_name: suirenai-docs
    restart: unless-stopped
    expose:
      - "80"
```

**Nginx 反代配置**

```nginx
server {
    listen 443 ssl;
    server_name docs.suirenai.com;

    ssl_certificate     /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://suirenai-docs:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```
