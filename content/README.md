# 主页内容修改说明

你平时只需要修改本文件夹里的 `.md` 文档，不要修改 `app`、`.github`、`package.json` 或 `next.config.ts`。

## 在 GitHub 网页上修改

1. 打开主页仓库：`https://github.com/MaxZixuanWang/maxzixuanwang.github.io`。
2. 进入 `content` 文件夹，打开要修改的文件。
3. 点击文件右上角的铅笔图标 **Edit this file**。
4. 修改文字后，点击右上角的 **Commit changes...**。
5. 标题填写 `Update homepage content`，再次点击绿色的 **Commit changes**。
6. 等待约 1 至 3 分钟，主页会自动更新。

## 各文件负责什么

- `about.md`：个人介绍和教育经历。
- `contact.md`：左侧资料栏中的联系邮箱。
- `activities.md`：交流项目、课外活动和证书。
- `news.md`：最新动态。
- `projects.md`：项目经历。
- `experience.md`：实习或工作经历。
- `publications.md`：论文、预印本或研究项目。
- `honors.md`：荣誉与奖项。

## 常用格式

普通文字直接输入：

```md
I am interested in AI security and trustworthy machine learning.
```

添加链接：

```md
[Paper](https://example.com/paper.pdf)
```

添加 News，最新的一条放最上面：

```md
- **2026.08** Joined the XXX Lab as a research assistant.
- **2026.06** Graduated from XXX University.
```

添加论文：

```md
- **Paper Title.** Max Wang, Coauthor Name. Conference, 2026. [Paper](https://example.com)
```

添加活动时，每一项保留“标题、空行、缩进说明”的结构：

```md
1. **Activity Name**

   A short description of this activity.
```

## 不要放进仓库的内容

不要填写密码、验证码、API Key、身份证件、家庭住址、未公开实验数据或未公开论文全文。

如果修改后页面显示异常，不要继续乱改。把刚才改过的文字发给 Codex，让 Codex检查 Markdown 格式即可。
