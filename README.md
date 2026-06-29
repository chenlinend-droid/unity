# Markdown CMS 维护手册

这是一个使用 Next.js 15 + TypeScript + TailwindCSS 的官网项目。

网站内容不再写死在 `tsx` 中，而是统一放在 `content/` 目录。

你以后维护网站，只需要：

1. 复制一个文件夹
2. 放图片
3. 修改 `index.md`
4. `git push`
5. 网站自动更新

## 目录结构

```text
content/
  projects/
    _template/
    hotel-shanghai/
    hotel-tokyo/
  products/
    wallpaper-a/
```

## 必须遵守的规则

- 每个案例或产品都必须有自己的文件夹
- 文件夹里必须有 `index.md`
- `index.md` 使用 Frontmatter
- 图片放在同一个文件夹里
- 新增图片无需修改任何 `tsx`

## Frontmatter 示例

```md
---
title: Sheraton Hotel
location: Singapore
year: 2026
category: Luxury Hotel
cover: cover.jpg
featured: true
---
```

正文可以直接写 Markdown，支持：

- 标题
- 图片
- 列表
- 链接
- 下载
- 长篇介绍

## ① 新增案例

1. 复制 `content/projects/_template/`
2. 重命名为新案例名称，例如 `hotel-singapore`
3. 替换里面的图片
4. 修改 `index.md`
5. 提交并推送

### 需要修改的文件

- `index.md`
- `cover.jpg`
- `01.jpg`

### 可以新增的文件

- `02.jpg`
- `03.jpg`
- `04.jpg`
- 任何更多图片

### 不要修改的文件

- `README.md`
- 任何 `tsx`
- 目录层级规则

## ② 删除案例

直接删除对应的案例文件夹，然后提交并推送。

例如删除：

- `content/projects/hotel-shanghai/`

## ③ 替换图片

把新图片放进原文件夹，覆盖原文件名即可。

例如：

- 用新 `cover.jpg` 覆盖旧的 `cover.jpg`
- 用新 `01.jpg` 覆盖旧的 `01.jpg`

如果你新增了 `02.jpg`、`03.jpg`，网站会自动扫描出来。

## ④ 修改标题

打开对应案例或产品的 `index.md`，修改 Frontmatter 里的：

- `title`
- `location`
- `year`
- `category`

保存后提交即可。

## ⑤ 发布网站

把改动提交到 GitHub：

```text
git add .
git commit -m "update content"
git push
```

推送后，Vercel 会自动重新部署。

## ⑥ 本地预览

在项目根目录运行开发模式，然后打开本地地址预览。

如果你不会使用命令行，告诉开发人员帮你启动一次即可。

## ⑦ GitHub 同步

网站内容的正确流程是：

1. 在本地修改 `content/`
2. 提交到 GitHub
3. GitHub 保存版本
4. Vercel 自动部署

以后不要直接改 `tsx` 来增加内容。

## ⑧ Vercel 自动部署

仓库连接到 Vercel 后，只要主分支收到新的提交，网站就会自动更新。

你只需要记住：

- 改 `content/`
- 推送到 GitHub
- 等 Vercel 自动发布

## 新增项目模板

新增项目时，优先复制：

- `content/projects/_template/`

里面已经准备好：

- `index.md`
- `cover.jpg`
- `01.jpg`
- `README.md`

这样可以统一维护标准，避免每个案例写法不一致。
