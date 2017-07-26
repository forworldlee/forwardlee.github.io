# 使用hexo创建个人博客

## 1.在github中创建$username.github.io的仓库，注意：$username是指github的用户名，必须与用户名保持一致，否则$username.github.io的域名在浏览器中是无法访问的。
## 2.在本地环境中按顺序安装git，nodejs，hexo。
安装git（略）
安装nodejs（略）
npm install -g hexo-cli
npm install hexo-deployer-git --save
## 3.以上准备工作执行完后，开始用hexo创建博客
> hexo init blog ##blog是在本地创建的文件件名称，用来在本地维护博客文章,由于要下载文件，需要等待一段时间完成。
> cd blog
> npm install
## 4.执行完以上三行命令后，blog文件夹下会产生_config.yml文件，用文本编辑器打开文件，修改其中的配置信息，注意所有的配置信息的:后都要保留一个空格。
博客网站信息配置：

```title: inerdstack ##博客名称
subtitle: the stack of it nerds ##博客二级标题
description: start from zero ##博客描述
author: inerdstack ##博客作者
language: zh-CN ##语言环境
timezone: Asia/Shanghai ##时区环境
```
域名配置

```url: http://www.forwardlee.com
```
部署配置

```deploy:
  type: git
  repo: https://github.com/forworldlee/forworldlee.github.io.git
  branch: master

```
## 5.保存_config.yml


