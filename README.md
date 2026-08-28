# Max Wang 个人主页

这是为 `MaxZixuanWang` 准备的简约个人学术主页。页面结合传统学术主页的信息结构与克制的文章式排版。当前包含：

- 姓名、简短介绍和个人信息区
- AI 安全、RAG 安全和数据安全三个兴趣方向
- News、Publications、Honors 和 Academic Service 栏目
- 暂无内容的栏目使用空白占位，不虚构成果
- GitHub 与 ORCID 链接
- 手机、平板和电脑自适应布局
- GitHub Pages 自动发布配置

## 最简单的修改方式

日常更新只需要编辑 [`content`](./content/) 文件夹里的 Markdown 文档：

- `about.md`：个人介绍与教育经历
- `research.md`：研究方向
- `news.md`：最新动态
- `publications.md`：论文与项目
- `honors.md`：荣誉与奖项
- `service.md`：学术服务

不要修改 `app`、`.github`、`package.json` 或 `next.config.ts`。完整的中文操作步骤和可直接照抄的例子见 [`content/README.md`](./content/README.md)。

## 一、删除旧的 `MEMORY.md` 仓库

删除仓库不可恢复。先确认仓库里没有需要保留的文件，然后：

1. 打开 `https://github.com/MaxZixuanWang/MEMORY.md`。
2. 点击仓库上方的 **Settings**。
3. 在 **General** 页面一直滚动到最下面的 **Danger Zone**。
4. 点击 **Delete this repository**。
5. 按提示确认，并输入完整仓库名：`MaxZixuanWang/MEMORY.md`。
6. 点击最后的红色删除按钮；GitHub 可能会要求密码或两步验证码。

不要删除整个 GitHub 账号，也不要在不确定时删除其他仓库。

## 二、创建个人主页仓库

1. 登录 GitHub，点击右上角 **+**，选择 **New repository**。
2. Repository name 必须填写小写：`maxzixuanwang.github.io`。
3. 选择 **Public**。
4. 不要勾选 README、`.gitignore` 或 License。
5. 点击 **Create repository**。

## 三、上传这个主页

最适合新手的方法是 GitHub Desktop：

1. 安装并登录 GitHub Desktop。
2. 在 GitHub Desktop 中克隆刚创建的 `maxzixuanwang.github.io` 仓库。
3. 将本项目文件复制到克隆下来的仓库文件夹中，但不要复制 `node_modules`、`dist`、`.vinext` 或 `.wrangler` 文件夹。
4. 回到 GitHub Desktop，Summary 填写 `Create personal homepage`。
5. 点击 **Commit to main**，再点击 **Push origin**。
6. 打开 GitHub 仓库的 **Settings → Pages**，在 **Build and deployment → Source** 中选择 **GitHub Actions**。
7. 等待仓库的 **Actions** 页面出现绿色对勾，然后访问：

   `https://maxzixuanwang.github.io/`

以后修改主页，只需要把新文件推送到 `main` 分支，GitHub 会自动更新网站。

## 四、以后修改主页

不需要自己接触代码。把需要新增或修改的个人信息发给 Codex，由 Codex 修改、检查并重新打包；你只需要按照 GitHub Desktop 的界面提示再次上传。
