# 我的个人主页

一个简洁、现代、可直接部署到 GitHub Pages 的个人主页静态网站模板，包含个人介绍、项目展示、技能栈与联系方式。

## 技术栈

- HTML5
- CSS3
- JavaScript (Vanilla)

## 项目结构

```text
.
├── index.html
├── style.css
├── script.js
└── README.md
```

## 本地预览

你可以直接双击 `index.html` 用浏览器打开，或使用本地静态服务：

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## GitHub Pages 部署方式

### 方式一：用户主页（推荐）

- 仓库命名：`<你的用户名>.github.io`
- 分支：`main`
- 目录：`/(root)`

部署后访问地址：

```text
https://<你的用户名>.github.io/
```

### 方式二：项目主页

- 仓库命名：任意（例如 `my-page`）
- 分支：`main`
- 目录：`/(root)`

部署后访问地址：

```text
https://<你的用户名>.github.io/<仓库名>/
```

## 发布步骤

1. 推送代码到 GitHub 仓库。
2. 打开仓库 `Settings` → `Pages`。
3. 在 **Build and deployment** 选择：
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. 保存后等待 1~3 分钟刷新页面链接。

## 说明

- 本项目不依赖后端服务，可直接作为静态站点发布。
- 资源引用使用相对路径，兼容 GitHub Pages。
